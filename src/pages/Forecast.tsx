import React from 'react';
import { CityInfo, ForecastType } from '../App';
import { HeaderForcast } from '../components/HeaderForcast';

type ForecastProps = {
    cityName: string,
    cityInfo: CityInfo,
    setCityName: (city: string) => void,
};


export const Forecast: React.FC<ForecastProps> = ({
    cityName,
    setCityName,
    cityInfo
}) => {

    return (
        <div className="page">
            <HeaderForcast cityName={cityName} setCityName={setCityName}  cityInfo={cityInfo} />
        </div>
    );
};
