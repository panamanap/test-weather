import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { timeName } from '../../utils/const';
import './Filter.scss';

interface CategoriesProps {
    active: number;
    setActive: (index: number) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
    active,
    setActive,
}) => {
    const { forecast } = useTypedSelector((state) => state.weatherReducer);

    const onSelectDay = (index: number) => {
        setActive(index);
    };

    return (
        <ul className="dayName">
            {timeName.map((name, index) => (
                <li key={`${name}_${index}`} onClick={() => onSelectDay(index)}>
                    <p className={active === index ? 'active' : ''}>{name}</p>
                    <p className={active === index ? 'active' : ''}>
                        {forecast.forecastday[index].date
                            .split('-')
                            .reverse()
                            .join('.')}
                    </p>
                </li>
            ))}
        </ul>
    );
};
