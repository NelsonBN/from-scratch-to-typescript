import { sum } from "../src/index";

test("Example of a test with success", () => {
    const output = sum(2, 3);
    expect(output).toBe(5);
});

test("Example of a test with failure", () => {
    const output = sum(2, 3);
    expect(output).toBe(6);
});