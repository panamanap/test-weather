import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DayInformation } from '../DayInformation';
import './BasicInformation.scss';

export const BasicInformation = () => {
    const { forecast } = useTypedSelector((state) => state.weatherReducer);
    return (
        <main className="information">
            {forecast.forecastday.map((day, index) => (
                <DayInformation
                    key={`${day.day.condition.text}_${index}`}
                    type={index}
                    icon={day.day.condition.icon}
                    text={day.day.condition.text}
                    temperature={day.day.avgtemp_c}
                />
            ))}
        </main>
    );
};
