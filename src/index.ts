import axios from "axios";
import { TLang, TWeatherDataMap } from "./types";

/**
 * wrapper of the HKO open data api
 */
export default class HKO {
    constructor(
        public readonly LANGUAGE: TLang = "tc",
    ) {
        //
    }

    private async getData<T extends keyof TWeatherDataMap>(dataType: T): Promise<TWeatherDataMap[T]> {
        const url = `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${dataType}&lang=${this.LANGUAGE}`;
        const { data } = await axios.get<TWeatherDataMap[typeof dataType]>(url);
        return data;
    }

    public async localWeatherForecast(): Promise<TWeatherDataMap["flw"]> {
        return this.getData("flw");
    }

    public async nineDayWeatherForecast(): Promise<TWeatherDataMap["fnd"]> {
        return this.getData("fnd");
    }

    public async currentWeatherReport(): Promise<TWeatherDataMap["rhrread"]> {
        return this.getData("rhrread");
    }
}