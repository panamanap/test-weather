import { InfoItem } from './InfoItem';
import { Menu } from '../Menu';

import './Information.scss';
import { ForecastType } from '../../pages/Home';

type InformationProps = {
    forecast?: ForecastType;
    setCityName: (btn: string) => void;
};

const nowDate = new Date();
const indexToday = nowDate.getDay();

const indexDay: number = indexToday + 1

export const Information: React.FC<InformationProps> = ({
    forecast,
    setCityName,
}) => {
    return (
        <main className="weatherInfo">
            <div className="otherDays">
                {forecast?.forecastday?.map((day, index) => (
                    <InfoItem key={day.date} {...day} dayOfWeek={indexDay + index}></InfoItem>
                ))}
            </div>
            <Menu setCityName={setCityName} />
        </main>
    );
};
