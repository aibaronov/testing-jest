const { TestWatcher } = require('jest');
const {returnTwo, greeting, add, multiply, subtract, divide} = require('./functions');

test("Should return the sum of the two integers", () =>{
    expect(returnTwo()).toEqual(2);
})

test("Should return greeting with the correct name parameter", () =>{
    expect(greeting("Arthur")).toEqual("Hello Arthur!");
})

test("Should return the correct sum for the two numbers passed as parameters", () =>{
    expect(add(2,5)).toEqual(7);
})

// test("Should return the correct product for the two numbers passed as parameters", () =>{
//     expect(multiply(3,5)).toEqual(15);
// })

// test("Should return the correct quotient for the two numbers passed as parameters", () =>{
//     expect(divide(15,3)).toEqual(5);
// })

// test("Should return the correct difference for the two numbers passed as parameters", () =>{
//     expect(subtract(6,2)).toEqual(4);
// })

describe('Math Functions', () =>{
    test("Should return the correct product for the two numbers passed as parameters", () =>{
        expect(multiply(3,5)).toEqual(15);
        expect(typeof multiply(3,5)).toEqual("number");
        //If strings are sent it, they are converted to number types.
        expect(multiply('3','5')).toEqual(15);
    }), 
    test("Should return the correct quotient for the two numbers passed as parameters", () =>{
        expect(divide(15,3)).toEqual(5);
        //This is interesting. Dividing by zero returns infinity
        expect(divide(3,0)).toEqual(Infinity);
    }),
    test("Should return the correct difference for the two numbers passed as parameters", () =>{
        expect(subtract(6,2)).toEqual(4);
        expect(subtract(3,-2)).toEqual(5);
    }) 
});