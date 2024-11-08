// import { test/it } from 'vitest';
import { it, expect } from "vitest";

import { add } from "./math";

// {test or it}

// follow the AAA pattern Arrange, Act, Assert

it("Should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2];
  //Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("Should yield NaN if atleast one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBe(NaN);
});

it("Should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  //   const result = add();
  // but error is not returned in javascript but thrown

  //   try {
  //     add();
  //   } catch (error) {
  //     expect(error).toBeDefined();
  //   }

  const resultFn = () => {
    add();
  };

//   expect(resultFn).not.toThrow();
  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', ()=> {
    const num1 = 1, num2 = 2;

    const resulFn = () => {
        add(num1, num2);
    }

    expect(resulFn).toThrow(/is not iterable/);
})