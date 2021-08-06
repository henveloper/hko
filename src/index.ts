import axios from "axios";

type TLang = 'en' | 'tc' | 'sc';

type TWeatherDataMap = {
    flw: {
        generalSituation: string,
        tcInfo: string,
        fireDangerWarning: string,
        forecastPeriod: string,
        forecastDesc: string,
        outlook: string,
        updateTime: string,
    },
    fnd: {
        generalSituation: string
        weatherForecast: Array<{
            forecastDate: string,
            week: string,
            forecastWeather: string,
            forecastWind: string,
            forecastMaxtemp: any,
            forecastMintemp: any,
            forecastMaxrh: any,
            forecastMinrh: any,
            ForecastIcon: number,
            PSR: string,
        }>,
        updateTime: string,
        soilTemp: Array<{
            place: string,
            value: number,
            unit: string,
            recordTime: string,
            depth: any,
        }>,
        seaTemp: {
            place: string,
            value: number,
            unit: string,
            recordTime: string,
        }
    },
    rhrread: {
        [key: string]: any,
    },
    warnsum: any,
    warningInfo: any,
    swt: any,
};

export default class HKO {
    static async weather<T extends keyof TWeatherDataMap>(dataType: T, lang: TLang): Promise<TWeatherDataMap[T]> {
        const url = `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?lang=tc&dataType=${dataType}&lang=${lang}`;
        const { data } = await axios.get<TWeatherDataMap[typeof dataType]>(url);
        return data;
    }
}