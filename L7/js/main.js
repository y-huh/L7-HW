//1
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// Object.keys(person).forEach(key => {
//     console.log(`${key} - ${person[key]}`);
// });

//2
// const person1 = {
//   name: "Abdulloh",
//   age: 19,
// };

// const person2 = {
//   hobby: "Volleyball",
//   interest: "Sleep",
// };

// const all = { ...person1, ...person2 };
// console.log(all);

//3
// let numbers = [1, 2, 3, 4, 5, 6];
// let plusOne = [...numbers];
// plusOne[plusOne.length - 1] += 1;
// console.log(plusOne);

//4
// let numbers = [2, 5, 8, 3, 7, 4];
// let sum = 0;
// numbers.forEach(num => {
// sum += num;
// });

// let result = [...numbers];
// if (sum % 2 === 0) {
//   result.unshift(sum);
//   result.push(sum);
// }

// console.log(result);

// //5
// let arr = [1, 2, 3, 4, 5];

// let arrTwo = [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
// console.log(arrTwo);

//6
// const collectWords = (count = 6, arr = []) => {
//     if (count === 0) return arr;
//     let word = prompt("Enter a word:");
//     return collectWords(count - 1, [...arr, word]);
//   };
  
//   const wordsArray = collectWords();
//   console.log(wordsArray);
  
//7
