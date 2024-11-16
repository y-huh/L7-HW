//1
// const fillAndFindMax = (arr = [], count = 5) => {
//     if (count === 0) return Math.max(...arr);
//     let number = Number(prompt("Enter a number:"));
//     return fillAndFindMax([...arr, number], count - 1);
//   };

//   console.log(fillAndFindMax());

//3
// const arr = [5, 4, 3, 6, 3, 7, 1];
// const minIndex = arr.indexOf(Math.min(...arr));
// console.log(minIndex);

//6
// let arr = ["Salom", "Raxmat"];
// arr.splice(1, 0, "Hello", "Thanks");
// console.log(arr);

//7
// const processInput = (input) => {
//     if (typeof input === "string") {
//       return input.split("").reverse().join("");
//     } else if (typeof input === "number" && input > 9) {
//       return input.toString().split("").reverse().join("");
//     }
//     return input;
//   };

//   console.log(processInput("Hello"));
//   console.log(processInput(12345));
