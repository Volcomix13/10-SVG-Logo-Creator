//Required packages for application
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/shapes");

//Questions for user input
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

//Initiates app and creates svg fie
function init(){
    inquirer
        .prompt(questions)
        .then((response)=>{
            console.log("got it!")
            fs.writeFile("./logo.svg", generateLogo({...response}), (err)=>
            err ? console.log(err) : console.log("Generating Logo!"))
        })
        .catch((error)=>{
            console.log(error)
        })
}

//Function call to initialize app
init();