import {describe,it, expect} from 'vitest';
import {getSum} from '../utils';







describe("getSum",()=>{
    it("should add two numbers correctly", () => {
        //Arrange
        const param1 = 2;
        const param2 = 3;
        //Act
        const result = getSum(param1, param2);
        //Assert
        expect(result).toEqual(param1 + param2);
    });
    it("should handle negative numbers", () => {
        //Arrange
        const param1 = -2;
        const param2 = -3;
        //Act
        const result = getSum(param1, param2);
        //Assert
        expect(result).toEqual(param1 + param2);
        console.log(`Negative test: ${param1} + ${param2} = ${result}`);
    });
    // it("should throw an error when a string is provided",()=>{
    //     //Arrange
    //     const param1 = 2;
    //     const param2 = "not a number";
    //     //Act & Assert
    //     expect(() => getSum(param1, param2)).toThrow(TypeError);
    // });
    // it("should throw an error when an array is provided",()=>{
    //     //Arrange
    //     const param1 = 2;
    //     const param2 = [1, 2, 3];
    //     //Act & Assert
    //     expect(() => getSum(param1, param2)).toThrow(TypeError);
    // });
    it("should return a float when given two float inputs", () => {
        //Arrange
        const param1 = 2.5;
        const param2 = 3.7;
        //Act
        const result = getSum(param1, param2);
        //Assert
        expect(result).toEqual(param1 + param2);
        console.log(`Float test: ${param1} + ${param2} = ${result}`);
    });
}) 