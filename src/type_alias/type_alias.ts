type Age = number;

type Address = {
    country: string,
    state: string
}

type User = {
    name: string,
    age: Age,
    address: Address,
    sex: Sex
}

type Sex = 'Male' | 'Famale'

const user1: User = {
    name: 'use1',
    age: 30,
    address: {country: 'Bahia', state: 'Bahia'},
    sex: 'Famale'
};

console.log(user1)

export default 1;