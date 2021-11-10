import React from 'react';
import { Link } from 'react-router-dom';
import { CityInfo } from '../../App';
import { NavButton } from '../NavButton';

import './HeaderFrocast.scss'

type HeaderForecastProps = {
    cityName: string,
    cityInfo: CityInfo,
    setCityName: (city: string) => void,
} 

export const HeaderForcast: React.FC<HeaderForecastProps> = ({
    cityName,
    setCityName,
    cityInfo
}) => {

    return (
        <div className="headerForcaste">
            <NavButton>Forecast</NavButton>
            <input
                value={cityName}
                placeholder="Start entering city name..."
            ></input>
            <Link to="/">
                <NavButton>Home</NavButton>
            </Link>
        </div>
    );
};
