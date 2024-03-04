// basic types
const name: string = 'fulano'
const age: number = 18
const isAdult: boolean = true
const symbol: symbol = Symbol('anything')

//Arrays
const ticketsNumbers: Array<number> = [1, 2, 3]
const ticketsNumbers2: number[] = [3,4,5]

//Objest
const person: {name: string; age:number; isAdult?: boolen} = {
    name,
    age
}

//Functions
const sum: (x: number, y: number) => number = (x, y) => x + y

function sum2(x: number, y:number): number {
    return x + y
}
