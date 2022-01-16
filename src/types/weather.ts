export interface WeatherState {
    location: Location;
    current: Current;
    forecast: Forecast;
}

export interface Location {
    name: string;
}

export interface Current {
    temp_c: number;
    condition: Condition;
}

interface Forecast {
    forecastday: ForecastDay[];
}

interface ForecastDay {
    date: string;
    day: Day;
    hour: Hour[];
}
export interface Day {
    avgtemp_c: number;
    condition: Condition;
}

interface Hour {
    time: string;
    temp_c: number;
    condition: Condition;
}

interface Condition {
    text: string;
    icon: string;
}

export enum WeatherActionTypes {
    FETCH_WEATHER_INFORMATION = 'FETCH_WEATHER_INFORMATION',
}

interface FetchWeatherInformation {
    type: WeatherActionTypes.FETCH_WEATHER_INFORMATION;
    payload: WeatherState;
}

export type WeatherAction = FetchWeatherInformation;
