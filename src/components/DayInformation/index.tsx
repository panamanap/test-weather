import { daysOfWeek } from '../../utils/const';
import './DayInformation.scss';

interface DayInformationProps {
    hour?: string;
    type: number;
    icon: string;
    text: string;
    temperature: number;
}

export const DayInformation: React.FC<DayInformationProps> = ({
    icon,
    text,
    type,
    temperature,
    hour,
}) => {
    return (
        <div className="day">
            {type !== -1 && <h3>{daysOfWeek[type].slice(0, 3)}</h3>}
            <img src={icon} alt={text} />
            <p>{`${Math.floor(temperature)}℃`}</p>
            {hour && <p>{hour.split(' ')[1]}</p>}
        </div>
    );
};
