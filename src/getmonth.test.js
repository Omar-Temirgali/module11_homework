import { getMonth } from "./getmonth.js";

xdescribe('test for getMonth function', () =>{
    const may = 5;
    const august = 8;

    it('should return correct month', () => {
        expect(getMonth(may)).toBe(`Fifth month is ${may}`);
    })
    it('should return correct month', () => {
        expect(getMonth(august)).toBe(`Eighth month is ${august}`);
    })
    it('should return error message', () => {
        expect(getMonth(15)).toBe('неизвестно');
    })
});