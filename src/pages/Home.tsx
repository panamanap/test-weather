import React from 'react';

import { Information } from '../components/Information';
import { Header } from '../components/Header';
import { CityInfo } from '../App';

type HomeProps = {
    cityInfo: CityInfo,
    cityName: string,
    setCityName: (btn: string) => void,
}

export const Home: React.FC<HomeProps> = ({cityInfo, cityName, setCityName}) => {
    if (!cityInfo) {
        return <div className="loadingPage">Loading...</div>;
    }

    return (
        <div className="page">
            <Header cityName={cityName} {...cityInfo} />
            <Information {...cityInfo} setCityName={setCityName} />
        </div>
    );
};
