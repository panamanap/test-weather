import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HorlyWheater } from './pages/HourlyWheater';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchWeatherInformation } from './redux/actions/weatherAction';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
    const dispatch = useDispatch();

    const { forecast } = useTypedSelector((state) => state.weatherReducer);

    const [cityName, setCityName] = React.useState<string>('Minsk');

    React.useEffect(() => {
        dispatch(fetchWeatherInformation(cityName));
    }, [cityName]);

    if (!forecast) {
        setCityName('Minsk');
        window.location.reload();
    }

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route
                    path="/weather-forecast-app"
                    element={<Home setCityName={setCityName} />}
                />

                <Route
                    path="/weather-forecast-app/horly"
                    element={<HorlyWheater />}
                />
                <Route
                    path="*"
                    element={<Navigate replace to="/weather-forecast-app" />}
                />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
