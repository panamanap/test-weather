import { bindActionCreators } from 'redux';
import {
    WeatherAction,
    WeatherActionTypes,
    WeatherState,
    Location,
} from './../../types/weather';

const initialState: WeatherState = {
    location: {
        name: '',
    },
    current: {
        temp_c: 0,
        condition: {
            text: '',
            icon: '',
        },
    },
    forecast: {
        forecastday: [
            {
                date: '',
                day: {
                    avgtemp_c: 0,
                    condition: {
                        text: '',
                        icon: '',
                    },
                },
                hour: [],
            },
        ],
    },
};

export const weatherReducer = (state = initialState, action: WeatherAction) => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_INFORMATION:
            return action.payload;
        default:
            return state;
    }
};
