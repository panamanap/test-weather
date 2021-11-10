import { DayType } from '../../../App';
import { days } from '../../../utils/constants';
import './InfoItem.scss';

type InfoProps = {
    date: string;
    day: DayType;
    dayOfWeek: number
};

export const InfoItem: React.FC<InfoProps> = ({ date, day, dayOfWeek}) => {
    return (
        <div className="infoPerDay">
            <p>{`${days[dayOfWeek]}, ${date}`}</p>
            <img src={day.condition.icon} alt="OtherWeather" />
            <p>{`${Math.floor(day.avgtemp_c)}°C`}</p>
        </div>
    );
};
