import { assert } from 'chai';
import { describe, it } from 'mocha';
import HKO from "../src";

describe('HKO', () => {
    const helper = new HKO("tc");

    it('localWeatherForecast', async () => {
        const data = await helper.localWeatherForecast();
        assert.isString(data.generalSituation);
        assert.isString(data.tcInfo);
        assert.isString(data.fireDangerWarning);
        assert.isString(data.forecastPeriod);
        assert.isString(data.forecastDesc);
        assert.isString(data.outlook);
        assert.isString(data.updateTime);
    });

    it('nineDayWeatherForecast', async () => {
        const data = await helper.nineDayWeatherForecast();
        assert.isString(data.generalSituation);
        assert.isString(data.updateTime);
        assert.isObject(data.seaTemp);
        assert.isArray(data.weatherForecast);
        assert.isArray(data.soilTemp);
    });

    it('currentWeatherReport', async () => {
        const data = await helper.currentWeatherReport();
        console.log(data);
    });
});