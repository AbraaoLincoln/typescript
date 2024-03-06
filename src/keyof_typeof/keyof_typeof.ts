type ColorRgb = typeof RGB;
type RgbValue = keyof ColorRgb;

const RGB = {
    red: 'red',
    green: 'green',
    blue: 'blue',
};

function getColor(color: RgbValue, colors: ColorRgb) {
    return colors[color];
}

console.log(getColor('red', RGB));
