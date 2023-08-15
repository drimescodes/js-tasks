//steps
//input name, age bla bla bla
// create an empty array and ask those questions and be pushing them into the array

// Users would enter the app and have a prompt greeting them asking for their name, age, school,
//  department and grade. Store these information in an array. 
// hen display them saying making sure you use all the information given to make a string

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
function input(prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, (input) => {
        resolve(input);
      });
    });
  }



  let usersInfoArray = [] //using arrays
  let name = await input('Enter your Name: ')
  let age =  Number(await input('Enter your age: '))
  let school =  await input('Enter your school: ')
  let department =  await input('Enter your department: ')
  let grade =  Number(await input('Enter your grade: '))

  usersInfoArray.push(name, age, school, department, grade)
//   console.log(usersInfoArray);

console.log(`Welcome ${usersInfoArray[0]}, you are ${usersInfoArray[1]} years old, you attend ${usersInfoArray[2]},\n
and you are in ${usersInfoArray[3]} department and your grade is ${usersInfoArray[4]}
`);

let usersInfoObject = {} //using objects
usersInfoObject.name = name;
usersInfoObject.age = age;
usersInfoObject.school = school;
usersInfoObject.department = department;
usersInfoObject.grade = grade;

console.log(`Welcome ${usersInfoObject.name}, you are ${usersInfoObject.age} years old, you attend ${usersInfoObject.school},\n
and you are in ${usersInfoObject.department} department and your grade is ${usersInfoObject.grade}`);






  rl.close();
}

main();