import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("Should yield number value for the numbers passed as string", () => {
  const value = "3";

  const result = transformToNumber(value);

    expect(result).toBe(+value);
//   expect(result).toBeTypeOf("number");
});

it("Should throw an error if arguments which cannot be converted to numbers are provided", () => {
  const value = {};
  const value2 = 'invalid';

  const result = transformToNumber(value);
  const result2 = transformToNumber(value);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
  
  
});
