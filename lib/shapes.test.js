const {Triangle, Circle, Rectangle} = require("./shapes");

describe ("Shape Tests", () => {
    it ("Should render a Triangle with the given color", () => {
        const shape = new Triangle();
        shape.getColor("blue");

        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
        expect(shape.render()).toEqual(expectedSvg);
    });
});

describe ("Shape Tests", () => {
    it ("Should render a Circle with the given color", () => {
        const shape = new Circle();
        shape.getColor("blue");

        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue"';
        expect(shape.render()).toEqual(expect.stringContaining(expectedSvg));
    });
});


describe ("Shape Tests", () => {
    it ("Should render a Rectangle with the given color", () => {
        const shape = new Rectangle();
        shape.getColor("blue");

        const expectedSvg = '<rect width=\"100%\" height=\"100%\" fill=\"blue\"';
        const receivedSvg = shape.render();

        expect(receivedSvg).toEqual(expect.stringContaining(expectedSvg));
    });
});

