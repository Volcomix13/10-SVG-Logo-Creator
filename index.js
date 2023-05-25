//Required packages for application
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Rectangle, Triangle} = require("./lib/shapes");

//Questions for user input
const questions = [
    {
        type: "input",
        message: " Type 3 letters of your choice",
        name: "initials"
    },
    {
        type: "input",
        message: "Please pick a text color",
        name: "text_color"
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
        name: "shape_color"
    },
];

class SVG {
    constructor(){
        this.shape = "";
        this.text = "";
    }

render(){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"> ${this.shape} ${this.text}</svg>`
}
getText(userText, textColor){
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${userText}</text>`
  }
  setShape(userShape){
    this.shape = userShape.render();
  }
}



//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>





//Initiates app and creates svg fie
function init(){
    inquirer
        .prompt(questions)
        .then((response)=>{
            console.log(response);
            let shape;
            if (response.shape === "circle"){
                shape = new Circle()
            }else if(response.shape === "rectangle"){
                shape = new Rectangle()
            }else{
                shape = new Triangle()
            }

            shape.getColor(response.shape_color)
                console.log(shape)
            const svg = new SVG()
            svg.getText(response.initials, response.text_color)
                console.log(svg)
            fs.writeFile("./logo.svg", shape({...response}), (err)=>
            err ? console.log(err) : console.log("Generating Logo!"))
        })
        .catch((error)=>{
            console.log(error)
        })
}

//Function call to initialize app
init();