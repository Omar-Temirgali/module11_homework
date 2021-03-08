const countDown = require('./index');

describe("test countDown", () => {
    it("count down from 5 to 1", () => {
        const result = countDown(5);
        expect(result).toBe(5, 4, 3, 2, 1);
    }),
    it("count down from 7 to 1", () => {
        const result = countDown(7);
        expect(result).toBe(7, 6, 5, 4, 3, 2, 1);
    });
});