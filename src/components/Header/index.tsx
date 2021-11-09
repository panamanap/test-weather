import { CurrentType, LocationType } from '../../pages/Home';
import { days } from '../../utils/constants';

import './Header.scss';

type HeaderProps = {
    current?: CurrentType;
    location?: LocationType;
};

const date = new Date();
const indexDay = date.getDay();

export const Header: React.FC<HeaderProps> = ({ location, current }) => {


    return (
        <header className="header">
            <h1>{location?.name}</h1>
            <div className="infoToday"> 
                <p>
                    {`${days[indexDay]}, ${location?.localtime}`}
                </p>
                <div className="weatherToday">
                    <img
                        width="55"
                        height="55"
                        src={current?.condition.icon}
                        alt="Weater today"
                    />
                    <p>{current?.temp_c}°C</p>
                </div>
            </div>
        </header>
    );
};
