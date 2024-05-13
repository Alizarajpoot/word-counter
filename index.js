#! /usr/bin/env node
import inquirer from "inquirer";
//declare contant 'answer" and assing is to the result of inquirer prompt fuction
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentance to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(` Your sentence word count is ${words.length}`);
