class Shape {
  constructor(){
    this.color = "";
  }
  getColor(userColor){
    this.color = userColor;
  }
}

class Circle extends Shape{
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Rectangle extends Shape{
  render(){
    return `<rect width="100%" height="100%" fill="${this.color}" />`
  }
}

class Triangle extends Shape{
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
  }
}
module.exports = {Circle, Rectangle, Triangle};