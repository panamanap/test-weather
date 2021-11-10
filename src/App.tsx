import React from 'react';
import { Route, Routes } from 'react-router';

import './App.scss';

import { Forecast } from './pages/Forecast';
import { Home } from './pages/Home';

import { APIKEY } from './utils/constants';

export type CityInfo = {
    location?: LocationType;
    current?: CurrentType;
    forecast?: ForecastType;
};

export type CityName = string

export type CurrentType = {
    temp_c: number;
    condition: ConditionType;
};

export type LocationType = {
    name: string;
    localtime: string;
};

export type ForecastType = {
    forecastday?: Array<DaysType>;
};

type ConditionType = {
    icon: string;
};

type DaysType = {
    date: string;
    day: DayType;
};

export type DayType = {
    avgtemp_c: number;
    condition: ConditionType;
};

function App() {
    const [cityName, setCityName] = React.useState<CityName>('Minsk');
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            cityInfo={cityInfo}
                            cityName={cityName}
                            setCityName={setCityName}
                        />
                    }
                />
                <Route
                    path={`/forecast/${cityName}`}
                    element={
                        <Forecast
                            cityInfo={cityInfo}
                            cityName={cityName}
                            setCityName={setCityName}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
