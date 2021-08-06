import { assert } from 'chai';
import { describe, it } from 'mocha';
import HKO from "../src";

describe('HKO', () => {
    it('#weather(), flw', async () => {
        const data = await HKO.weather('flw', 'en');
        console.log(data);
        assert.isString(data.generalSituation);
        assert.isString(data.tcInfo);
        assert.isString(data.fireDangerWarning);
        assert.isString(data.forecastPeriod);
        assert.isString(data.forecastDesc);
        assert.isString(data.outlook);
        assert.isString(data.updateTime);
    });

    it('#weather(), fnd', async () => {
        const data = await HKO.weather('fnd', 'en');
        console.log(data);
        assert.isString(data.generalSituation);
        assert.isString(data.updateTime);
        assert.isObject(data.seaTemp);
        assert.isArray(data.weatherForecast);
        assert.isArray(data.soilTemp);
    });

    it('#weather(), rhrread', async () => {
        const data = await HKO.weather('rhrread' as any, 'en');
        console.log(data);
    });
});