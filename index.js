const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: " Type 3 letters of your choice",
        name: "Initials"
    },
    {
        type: "input",
        message: "Please pick a text color",
        name: "text-color"
    },
    {   
        type: "list",
        message: "Please pick a shape from the options below",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Please pick a color for your shape",
        name: "shape-color"
    },
];

