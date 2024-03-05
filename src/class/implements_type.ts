type Name = {
    name: string;
    lastName: string;
    fullName: () => string;
};

type Contact = {
    email: string;
};

class User implements Name, Contact {
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

const user = new User('user1', 'last name', 'user1@mail.com');

console.log(user.fullName());
