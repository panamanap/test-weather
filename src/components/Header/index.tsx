import { Link } from 'react-router-dom';

import { CurrentType, LocationType } from '../../App';

import { days } from '../../utils/constants';
import { NavButton } from '../NavButton';

import './Header.scss';

type HeaderProps = {
    current?: CurrentType,
    location?: LocationType,
    cityName: string,
};

const date = new Date();
const indexDay = date.getDay();

export const Header: React.FC<HeaderProps> = ({ location, current, cityName }) => {
    return (    
        <header className="header">
            <h1>{location?.name}</h1>
            <div className="infoToday">
                <p>{`${days[indexDay]}, ${location?.localtime}`}</p>
                <div className="weatherToday">
                    <img

                        src={current?.condition.icon}
                        alt="Weater today"
                    />
                    <p>{current?.temp_c}°C</p>
               </div>  
            </div>
            <Link to={`/forecast/${cityName}`}>
                    <NavButton>Forecast</NavButton>
                </Link>
        </header>
    );
};
