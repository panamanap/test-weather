import React from 'react';

import { Information } from '../components/Information';
import { Header } from '../components/Header';

import { APIKEY } from '../utils/constants';

type ConditionType = {
    icon: string,
}

export type CurrentType = {
    temp_c: number,
    condition: ConditionType,
};

export type LocationType = {
    name: string,
    localtime: string,
}

export type ForecastType = {
    forecastday?: Array<DaysType>,
}

type DaysType = {
    date: string, 
    day: DayType,
}

export type DayType = {
    avgtemp_c: number,
    condition: ConditionType
}

type CityInfo = {
    location?: LocationType,
    current?: CurrentType,
    forecast?: ForecastType,
};

export function Home() {
    const [cityName, setCityName] = React.useState('Minsk');
    const [cityInfo, setCityInfo] = React.useState<CityInfo>({});

    console.log(cityInfo);

    React.useEffect(() => {
        try {
            fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityName}&days=10&aqi=no&alerts=no`
            )
                .then((res) => res.json())
                .then((json) => setCityInfo(json));
        } catch (e) {
            alert('Ошибка получения данных');
        }
    }, [cityName]);


    return (
        <div className="app">
            <div className="mainPage">
                <Header {...cityInfo} />
                <Information {...cityInfo} setCityName={setCityName} />
            </div>
        </div>
    );
}
