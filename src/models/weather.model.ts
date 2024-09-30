export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface WeatherWind {
    speed: number;
    deg: number;
    gust?: number;
}

export interface WeatherClouds {
    all: number;
}

export interface WeatherItem {
    dt: number;
    main: WeatherMain;
    weather: WeatherCondition[];
    clouds: WeatherClouds;
    wind: WeatherWind;
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
}

export interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface WeatherModel {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherItem[];
    name: City;
}

export interface CurrentWeatherModel {
    coord: {
        lat: number;
        lon: number;
    };
    main: WeatherMain;
    weather: WeatherCondition[];
    name: City;
}