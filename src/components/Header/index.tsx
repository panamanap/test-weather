import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { today } from '../../utils/const';
import { Button } from '../Button';
import './Header.scss';

export const Header: React.FC = () => {
    const { location, current, forecast } = useTypedSelector(
        (state) => state.weatherReducer
    );
    const locat = useLocation();

    const date = forecast.forecastday[0].date.split('-').reverse().join('.');
    const cityName = location.name;
    const icon = current.condition.icon;
    const text = current.condition.text;
    const temp = current.temp_c;

    return (
        <header className="header">
            <Link to={`/weather-forecast-app/${cityName}`}>
                <h1>
                    Wheater
                    <span className="city"> {cityName}</span>
                </h1>
            </Link>

            <div className="header__description">
                <h3>{`${today}, ${date}`}</h3>
                <div className="temperature">
                    <img src={icon} alt={text} />
                    <p>{temp}℃</p>
                </div>
            </div>
            {locat.pathname === '/weather-forecast-app' ? (
                <Button>
                    <Link to={'/weather-forecast-app/horly'}>
                        Hourly wheater
                    </Link>
                </Button>
            ) : (
                <Button>
                    <Link to={'/weather-forecast-app'}>Wheater today</Link>
                </Button>
            )}
        </header>
    );
};
