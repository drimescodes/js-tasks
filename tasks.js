// I have solved this before


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


const numStr = await input('Enter a number: ');
const num = Number(numStr);

// console.log(typeof(numStr));
// console.log(`${num}`);
for (let i = 1; i < num + 1; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");

    }else if(i % 3 === 0) {
        console.log('Fizz');

    }else if(i % 5 === 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
    
}


rl.close();
}

main();