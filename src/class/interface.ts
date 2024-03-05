interface IName {
    name: string;
    lastName: string;
    fullName(): string;
}

interface IContact {
    email: string;
}

interface FullUser extends IName, IContact {}

interface FullUser {
    id?: string;
}

class User1 implements IName, IContact {
    name: string;
    lastName: string;
    email: string;

    constructor(name: string, lastName: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }

    fullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

class User2 implements FullUser {
    name: string;
    lastName: string;
    email: string;
    id: string;

    constructor(name: string, lastName: string, email: string, id: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.id = id;
    }

    fullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

const user11 = new User1('user11', 'last name', 'user1@mail.com');
const user12 = new User2('user12', 'last name', 'user1@mail.com', '001');

console.log(user11.fullName());
console.log(user12.fullName());
