export type TLang = 'en' | 'tc' | 'sc';

export type TWeatherDataMap = {
    flw: {
        generalSituation: string, // general situation
        tcInfo: string, // tropical cyclone information, maybe empty
        fireDangerWarning: string, // fire danger warning message, maybe empty
        forecastPeriod: string, // forecast period
        forecastDesc: string, // forecast description
        outlook: string, // outlook
        updateTime: string, // updateTime
    },
    fnd: {
        generalSituation: string, // general situation, not guarenteed by the API
        weatherForecast: Array<{
            forecastDate: string, // YYYYMMDD
            week: string,
            forecastWind: string,
            forecastWeather: string,
            forecastMaxtemp: any,
            forecastMintemp: any,
            forecastMaxrh: any, // relative humidity
            forecastMinrh: any, // relative humidity
            ForecastIcon: number, // https://www.hko.gov.hk/textonly/v2/explain/wxicon_e.htm
            PSR: string, // not guarenteed by the API
        }>,
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
        updateTime: string, // not guarenteed by the API
    },
    rhrread: {
        lightning?: Record<any, any>
    },
    warnsum: any,
    warningInfo: any,
    swt: any,
};