import React from 'react';
import { Categories } from '../components/Filter';
import { HourlyForecast } from '../components/HourlyForecast';

export const HorlyWheater = () => {
    const [active, setActive] = React.useState(0);

    return (
        <main className="hourly-wrapper">
            <Categories active={active} setActive={setActive} />
            <HourlyForecast index={active} />
        </main>
    );
};
