import React from 'react';

import { Information } from './components/Information';
import { Header } from './components/Header';

import './App.scss';

import { APIKEY } from './utils/constants';

type cityInfo = {
    name: string;
};

function App() {
    const [cityName, setCityName] = React.useState('Minsk');
    const [cityInfo, setCityInfo] = React.useState<cityInfo>({ name: '' });

    React.useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`
        )
            .then((res) => res.json())
            .then((json) => setCityInfo(json));
    }, []);

    return (
        <div className="app">
            <div className="mainPage">
                <Header {...cityInfo} />
                <Information />
            </div>
        </div>
    );
}

export default App;
