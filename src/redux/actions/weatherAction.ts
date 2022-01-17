import { APIKEY } from './../../utils/const';
import { Dispatch } from 'redux';
import { WeatherAction, WeatherActionTypes } from '../../types/weather';

export const fetchWeatherInformation =
    (cityName: string) => (dispatch: Dispatch<WeatherAction>) => {
        try {
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityName}&days=3&aqi=no&alerts=no`
            )
                .then((res) => res.json())
                .then((json) =>
                    dispatch({
                        type: WeatherActionTypes.FETCH_WEATHER_INFORMATION,
                        payload: json,
                    })
                );
        } catch (error) {
            alert('Ошибка получения данных');
        }
    };

export const cityNameAction = (payload: string) => ({
    type: 'CHANGE_CITYNAME',
    payload,
});
