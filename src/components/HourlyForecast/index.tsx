import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DayInformation } from '../DayInformation';
import './HourlyForecast.scss';

interface HourlyForecastProps {
    index: number;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ index }) => {
    const { forecast } = useTypedSelector((state) => state.weatherReducer);

    return (
        <div className="hourly-wheater">
            {forecast.forecastday[index].hour.map((hour, index) => (
                <DayInformation
                    key={`${hour.condition.text}_${index}`}
                    type={-1}
                    hour={hour.time}
                    icon={hour.condition.icon}
                    text={hour.condition.text}
                    temperature={hour.temp_c}
                />
            ))}
        </div>
    );
};
