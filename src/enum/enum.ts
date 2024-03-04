enum Color {
    RED,
    GREEN,
    BLACK,
    WHITE
}

enum Color {
    PURPLE = 'PURPLE',
    ORANGE = 'ORANGE'
}

console.log(Color)

function favColor(color: Color): void {
    console.log(color)
}

favColor(Color.GREEN);