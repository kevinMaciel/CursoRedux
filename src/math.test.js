import { isEven } from './math';

it("firts test", () => {
    // Funciton under test (SUT)
    const result = isEven(2);
    expect(result).toEqual(true);
});