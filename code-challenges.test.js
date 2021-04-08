// // ASSESSMENT 2: Coding practical questions with Jest

const { first } = require("lodash")

// const { type } = require("os")

// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//a) Create a test with expect statements for each of the variables provided.

describe("when evenlyDivisible is called", () => {
    it ("returns 'is divisible by three' when called with 15", () => {
        //arrange
        //took me forever to figure out how to generalize my function so that I could pass myNums with an assigned value.
        const myNums = num1
    
        //act
        const actualResult = evenlyDivisible(myNums)

        //assert
        expect(actualResult).toEqual("15 is divisible by three")

    })
    it ("returns 'is divisible by three' when called with 0", () => {
        //arrange
        const myNums = num2
    
        //act
        const actualResult = evenlyDivisible(myNums)

        //assert
        expect(actualResult).toEqual("0 is divisible by three")

    })
    it ("returns 'is not divisible by three' when called with -7", () => {
        //arrange
        const myNums = num3
    
        //act
        const actualResult = evenlyDivisible(num3)

        //assert
        expect(actualResult).toEqual("-7 is not divisible by three")

    })
})

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"





// b) Create the function that makes the test pass.

//write a function called evenlyDivisble that takes in an argument of a number 
const evenlyDivisible = (myNums) => {
    //if myNums is evenly divisible by 3
    if(myNums % 3 === 0) {
        //return `${myNums} is divisible by three`
        return `${myNums} is divisible by three`
    } else if(myNums % 3 !== 0){
        return `${myNums} is not divisible by three`
    }
}





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("when arrayToCapitalized is called", () => {
    it ("returns a new array with the first letter of each word capitalized", () => {
        //arrange
        //took me forever to figure out how to generalize my function so that I could pass myNums with an assigned value instead of just hard defining the number.
        const myArray = randomNouns1
    
        //act
        const actualResult = arrayToCapitalized(myArray)

        //assert
        expect(actualResult).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
    it ("returns a new array with the first letter of each word capitalized", () => {
        //arrange
        //took me forever to figure out how to generalize my function so that I could pass myNums with an assigned value instead of just hard defining the number.
        const myArray = randomNouns2
    
        //act
        const actualResult = arrayToCapitalized(myArray)

        //assert
        expect(actualResult).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})


// b) Create the function that makes the test pass.

//write a function that takes in an argument of an array of words 
const arrayToCapitalized = (array) => {
    //create a variable to store the new array and use the map higher order function to return a new array
    let eachWord = array.map(value => {
        //returns an array with all the words capitalized using the to uppercase method and substring to return the rest of the letters in the word.
        return value[0].toUpperCase() + value.substring(1)
    
    })
    //return the eachWord function
    return eachWord
}
//used this console log to make sure my function was working correctly
//console.log(arrayToCapitalized(randomNouns1))




// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

describe("when onlyNumbs is called", () => {
    it ("returns a new array with only numbers sorted from least to greatest", () => {
        //arrange
        const myArray = mixedDataArray1
    
        //act
        const actualResult = onlyNumbs(myArray)

        //assert
        expect(actualResult).toEqual([-8, 0, 8, 46, 59, 107])

    })
    it ("returns a new array with only numbers sorted from least to greatest", () => {
        //arrange
        const myArray = mixedDataArray2
    
        //act
        const actualResult = onlyNumbs(myArray)

        //assert
        expect(actualResult).toEqual([-9, 0, 3, 18, 94])

    })
})





// b) Create the function that makes the test pass.

// write a function that takes in an array of mixed data types as an argument
const onlyNumbs = (array) => {
    //create a variable to store the new array and use filter method to create a new array with only the numbers 
    let theNumbs = array.filter(value => {
        //use typeof to return only the values that are numbers
        return typeof value === "number"
    })
    //return theNumbs sorted from least to greatest
    return theNumbs.sort((a, b) => a - b)
}

// used the console log to check my function was working properly
// console.log(onlyNumbs(mixedDataArray1))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe("when logindexOfFirstVowel is called", () => {
    it ("returns the index of the first vowel", () => {
        //arrange
        const myString = vowelTester1
    
        //act
        const actualResult = logindexOfFirstVowel(myString)

        //assert
        expect(actualResult).toEqual(1)
    })
    it ("returns the index of the first vowel", () => {
        //arrange
        const myString = vowelTester2
    
        //act
        const actualResult = logindexOfFirstVowel(myString)

        //assert
        expect(actualResult).toEqual(0)
    })
    it ("returns the index of the first vowel", () => {
        //arrange
        const myString = vowelTester3
    
        //act
        const actualResult = logindexOfFirstVowel(myString)

        //assert
        expect(actualResult).toEqual(2)
    })
})




// b) Create the function that makes the test pass.

//write a function that takes in a string as an argument
const logindexOfFirstVowel = (str) => {
    //use the split method to create an array of strings
    let strArray = str.split("")
    //I was stuck here for a long time but finally found the method findIndex which I applied inside of the function in place of using filter.
    let firstIndex = strArray.findIndex(value => {
        //return the values that are a,e,i,o, or u
        return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
    })
    //return the function firstIndex
    return firstIndex;
}

// used console.log to make sure my function was working correctly
// console.log(logindexOfFirstVowel(vowelTester1))
// console.log(logindexOfFirstVowel(vowelTester2))
// console.log(logindexOfFirstVowel(vowelTester3))

//test each value in the string to see if it is a vowel then if true return the index.