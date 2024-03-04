// &

type HasName = {name: string}
type HasAge = {age: number}
type HasEmail = {email: string}

type User = HasName & HasAge & HasEmail;

const user1: User = {
    name: 'user1',
    age: 18,
    email: 'user1@mail.com'
}

console.log(user1);

export default 1;