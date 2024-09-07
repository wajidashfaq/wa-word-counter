#! usr/bin/env node
import inquirer from "inquirer";

const answers: {Sentence: string}
= await inquirer.prompt(
[
    {
        name: "Sentence",
        Type: "input",
        message: "Enter your Sentence to count the word:"

    }
]
)
const words = answers.Sentence.trim().split(" ")
console.log(words);
console.log(`Your sentence word is ${words.length}`);
