// TASK 1

// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = arr1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return (acc += curr);
  } else {
    return acc;
  }
}, 0);

const odd = arr1.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return (acc += curr);
  } else {
    return acc;
  }
}, 0);

const sum1 = even - odd;
console.log(sum1);

console.log(even);
console.log(odd);

//____________________________________________

// TASK 2

// Write a function that reverses all the words in a sentence that start with a particular letter.Example:

// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"


// function specialReverse(sentence, firstLetter) {
//   const revSentence = sentence.split(" ");

//   const result = revSentence.map(words => {
//     if (words[0] === firstLetter) {
//         return words.split("").reverse().join("");
//     } else {
//         return words;
//     }
//   });

//   return result.join(" ")
// }
// console.log(specialReverse("word searches are super fun", "f"));


function specialReverse(sentence, letter) {
    
    return sentence.split(" ").reduce((acc, word) => {
        if (word.startsWith(letter)) {
            word = word.split("").reverse().join("");
        }
        acc.push(word);
        return acc;
    }, []).join(" ")
}

console.log(specialReverse("word searches are fun", "d"));



//______________________________________

// TASK 3

// Take a look at the following code and describe in details (as much as you can) what the code is doing.
// Answer the questions listed below.

const users = [
  {name: "Jake Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];

const groupedByCity = users.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]) {
    accumulator[currentValue.city] = [];
  }
  accumulator[currentValue.city].push(currentValue);
  return accumulator;
}, {})

console.log(groupedByCity);

//  L79: declaring a constant, assigning the name "users" to it, with an array containing objects.
//  L88: declaring a constant, with the name "groupedByCity" which will receive a result based on the following function.
//  L94: Accumulator initialized with an empty object.
//  L96: Called and printed the function.

// A - why do we need this line of code?   if (!accumulator[currentValue.city]) {
// B - What if I replace "if (!accumulator[currentValue.city]) { " with  "if (!acc.hasOwnProperty(city))"?
// C - Which of the above is the safest approach? 
// D - What is the value of the accumulator during the second iteration?  "accumulator[currentValue.city].push(currentValue)"
// E - What is happening here and why do we need that?  }, {})

// A - To initialy check if the acc has the property "currentValue.city" already in it. Also ensures that the empty array is only created once.
// B - City not defined
// C - ??
// D - New York': [ { name: 'Jake Smith', age: 20, city: 'New York' } ],
// E - Initializing the acc with an empty object rather than the first element of the array. 