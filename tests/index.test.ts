import { describe, it } from 'mocha';
import HKO from "../src/HKO";

describe('HKO', () => {
    it('#weather()', async () => {
        const data = await HKO.weather('flw', 'en');
        console.log(data);
    });
});