import { getFormattedDateString } from "./utilities";

describe("getFormattedDateString function", () => {
  it("returns correct text string", () => {
    let textString = getFormattedDateString(new Date("2024-01-01"));
    expect(textString).toBe("1st January 2024");

    textString = getFormattedDateString(new Date("2022-07-22"));
    expect(textString).toBe("22nd July 2022");
  });
});
