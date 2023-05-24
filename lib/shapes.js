function shapes(data){
    if(data.shape === "circle");
    render() {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>`;
    }
    else {
      if(data.shape === "triangle");
      render() {
        return `<svg height="500" width="500">
		    <polygon points="250,60 100,400 400,400" class="triangle" /></svg>`
      }
      //square:<svg width="400" height="400">
                 //<rect width="300" height="300"/> </svg>
    }

}