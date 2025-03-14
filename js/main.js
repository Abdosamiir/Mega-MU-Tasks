// the prompt returns a string, so we need to convert it to a number dont forget that !!!

// 1)

// const number = +prompt("Enter a number");
// console.log(`output: ${number} `);

// 2)

// const number = +prompt("Enter a number:");
// if (number % 3 === 0 && number % 4 === 0) {
//   console.log(`output: ${number} yes`);
// } else {
//   console.log(`output: ${number} no`);
// }

// 3)

// const num1 = +prompt("Enter a number:");
// const num2 = +prompt("Enter a number:");
// if (num1 > num2) {
//   console.log(`input: ${num1} ${num2}, output: ${num1}`);
// } else if (num1 === num2) {
//   console.log(`numbers are equal`);
// } else {
//   console.log(`input: ${num1} ${num2}, output: ${num2}`);
// }

// 4)

// const number = +prompt("Enter a number:");
// if (number > 0) {
//   console.log(`output: ${number} is positive`);
// } else if (number < 0) {
//   console.log(`output: ${number} is negative`);
// } else if (number === 0) {
//   console.log(`output: ${number} is zero`);
// }

// 5)

// const num1 = +prompt("Enter the first integer:");
// const num2 = +prompt("Enter the second integer:");
// const num3 = +prompt("Enter the third integer:");
// let maxElement = num1;
// if (num2 > maxElement) {
//   maxElement = num2;
// }
// if (num3 > maxElement) {
//   maxElement = num3;
// }
// let minElement = num1;
// if (num2 < minElement) {
//   minElement = num2;
// }
// if (num3 < minElement) {
//   minElement = num3;
// }
// console.log(`The maximum element is: ${maxElement}`);
// console.log(`The minimum element is: ${minElement}`);

// 6)

// const num = +prompt("Enter a number:");
// if (num % 2 === 0) {
//   console.log(`output: ${num} is even`);
// } else {
//   console.log(`output: ${num} is odd`);
// }

// 7)

// const str = prompt("Enter a character:").toLowerCase();
// console.log(str);
// if (str === "a" || str === "e" || str === "l" || str === "o" || str === "u") {
//   console.log(`output: ${str} is a vowel`);
// } else {
//   console.log(`output: ${str} is a consonant`);
// }

// 8)

// const num = prompt("Enter a number:");
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// 9)

// const num = +prompt("Enter a number:");
// for (let i = 1; i <= 12; i++) {
//   console.log(num * i);
// }

// 10)

// const num = +prompt("Enter a number:");
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 11)

// const num1 = +prompt("Enter a number:");
// const num2 = +prompt("Enter a number:");
// // Math.pow(num1, num2);

// let result = 1;
// for (let i = 1; i < num2; i++) {
//   result *= num1;
//   console.log(`${num1}^${i} = ${result}`);
// }

// 12)

// let subject1 = +prompt("Enter marks for Subject 1:");
// let subject2 = +prompt("Enter marks for Subject 2:");
// let subject3 = +prompt("Enter marks for Subject 3:");
// let subject4 = +prompt("Enter marks for Subject 4:");
// let subject5 = +prompt("Enter marks for Subject 5:");

// let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
// let averageMarks = totalMarks / 5;
// let maxMarksPerSubject = 100;
// let totalMaxMarks = maxMarksPerSubject * 5;
// let percentage = (totalMarks / totalMaxMarks) * 100;

// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
// console.log(`Percentage: ${percentage.toFixed(2)}%`);

// 13)

// let monthNumber = +prompt("Enter the month number (1-12):");
// if (monthNumber >= 1 && monthNumber <= 12) {
//   let daysInMonth;
//   switch (monthNumber) {
//     case 1: // January
//     case 3: // March
//     case 5: // May
//     case 7: // July
//     case 8: // August
//     case 10: // October
//     case 12: // December
//       daysInMonth = 31;
//       break;
//     case 4: // April
//     case 6: // June
//     case 9: // September
//     case 11: // November
//       daysInMonth = 30;
//       break;
//     case 2: // February
//       let year = +prompt("Enter the year (to check for leap year):");
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         daysInMonth = 29;
//       } else {
//         daysInMonth = 28;
//       }
//       break;
//   }
//   console.log(`Number of days in month ${monthNumber}: ${daysInMonth}`);
// } else {
//   console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// 14)

// let physics = +prompt("Enter marks for Physics (out of 100):");
// let chemistry = +prompt("Enter marks for Chemistry (out of 100):");
// let biology = +prompt("Enter marks for Biology (out of 100):");
// let mathematics = +prompt("Enter marks for Mathematics (out of 100):");
// let computer = +prompt("Enter marks for Computer (out of 100):");

// if (
//   !isNaN(physics) &&
//   physics >= 0 &&
//   physics <= 100 &&
//   !isNaN(chemistry) &&
//   chemistry >= 0 &&
//   chemistry <= 100 &&
//   !isNaN(biology) &&
//   biology >= 0 &&
//   biology <= 100 &&
//   !isNaN(mathematics) &&
//   mathematics >= 0 &&
//   mathematics <= 100 &&
//   !isNaN(computer) &&
//   computer >= 0 &&
//   computer <= 100
// ) {
//   let totalMarks = physics + chemistry + biology + mathematics + computer;
//   let percentage = (totalMarks / 500) * 100;
//   let grade;
//   if (percentage >= 90) {
//     grade = "A+";
//   } else if (percentage >= 80) {
//     grade = "A";
//   } else if (percentage >= 70) {
//     grade = "B";
//   } else if (percentage >= 60) {
//     grade = "C";
//   } else if (percentage >= 50) {
//     grade = "D";
//   } else if (percentage >= 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }

//   console.log(`Total Marks: ${totalMarks}`);
//   console.log(`Percentage: ${percentage.toFixed(2)}%`);
//   console.log(`Grade: ${grade}`);
// } else {
//   console.log(
//     "Invalid input. Please enter marks between 0 and 100 for all subjects."
//   );
// }
