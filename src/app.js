/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'Press Enter to generate a random 4-digit number: ',
  (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number that does not start with 0 and has no duplicate digits.',
      );
      rl.close();

      return;
    }

    const randomNumber = generateRandomNumber();
    const result = getBullsAndCows(userInput, randomNumber);

    console.log(`Generated 4-digit number: ${randomNumber}`);
    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number correctly!');
    } else {
      console.log('Try again to guess the number!');
    }

    rl.close();
  },
);
