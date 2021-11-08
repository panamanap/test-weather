import { InfoItem } from './InfoItem';
import { Menu } from '../Menu';

import './Information.scss';

type otherDays = {
    day: string;
    image: string;
    temperature: string;
};

const arr: Array<otherDays> = [
    {
        day: 'Tue',
        temperature: '6°  -2°',
        image: 'assets/partly_cloudy.png',
    },
    {
        day: 'Wed',
        temperature: '2°  -5°',
        image: 'assets/partly_cloudy.png',
    },
    {
        day: 'Thu',
        temperature: '3°  -2°',
        image: 'assets/cloudy.png',
    },
];

export const Information = () => {
    return (
        <main className="weatherInfo">
            <div className="otherDays">
                {arr.map((info, index) => (
                    <InfoItem key={index} {...info}></InfoItem>
                ))}
            </div>
            <Menu />
        </main>
    );
};
