const axios = require('axios');

function printSomething() {}
const returnSomething = function() {}

function addTwoNumber(num1, num2) {}
const subtractTwoNumber = function(firstNumber, secondNumber) {}
const multiplyTwoNumber = (numberOne, numberTwo) => {}
function divideTwoNumber(num1, num2) {}

function addThreeNumber(num1, num2, num3) {}
const subtractThreeNumber = function(firstNumber, secondNumber) {}
const divideThreeNumber = (numberOne, numberTwo) => {}
function multiplyThreeNumber(num1, num2, num3) {}

async function addNumberToFive(num1, num2) {}
const subtractNumberFromFive = async function(firstNumber, secondNumber) {}
const multiplyNumberByFive = async (numberOne, numberTwo) => {}
async function divideNumberByFive(num1, num2) {}

// Function Declaration
// Function Express
// Async Function
async function getRomeGithubData() {
    // This will return the result to where you say result.data
    const result = await axios.get('https://api.github.com/users/romebell');

    // Github Data in an object
    const githubObject = result.data;

    // Destructuring
    const { login, bio, name, location, followers, following } = githubObject;

    return { login: login, bio: bio, name: name, location: location };
}

// RUN the function
getRomeGithubData(); // how to run a function. Don't forget parenthesis ()

// variable that is going to be passed into function later when called
let username = 'facebook'

function getGithubLocation(githubUsername) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(result => {
        // set variable for the result.data object that comes back
        const githubObject = result.data;

        const { name, bio, location } = githubObject;

        console.log(location);

        return location;
    });
}

getGithubLocation(username); // passed in username
getGithubLocation('romebell'); // passed in a string with being in a variable

// In order to see what was returned

function printSomething() {}
function printSomething() {}
function printSomething() {}

// Arrays
const arrayOne = [];
const arrayTwo = [];
var arrayThree = [];
// can mutate the array, meaning you can change data type from [] to {} or 'string' or true or 5
// You can change what is inside of the array though
let arrayFour = [];

// Objects
const objectOne = {};
const objectTwo = {};
var objectThree = {};
// can mutate the object, meaning you can change data type from {} to [] or 'string' or true or 5
// You can change what is inside of the object though
let objectFour = {};

// Booleans
let isOlderEnough = true;
let canSwim = true;
let canFly = false;
// can't mutate with const
const likeChange = true;

