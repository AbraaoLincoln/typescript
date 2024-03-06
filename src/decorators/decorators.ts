export class User {
    constructor(
        private _name: string,
        private _email: string,
    ) {}

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }
}

class UserRepository {
    findById(id: string): User | null {
        console.log(`Getting user with id ${id}`);
        return new User('user', 'user@mail');
    }
}

@service(['UserRepository'])
class UserService {
    private userRepository: UserRepository | null;

    constructor(userRepositor: UserRepository | null) {
        console.log(userRepositor);
        this.userRepository = userRepositor;
    }

    getUserById(id: string): User | null {
        if (this.userRepository) {
            return this.userRepository.findById(id);
        }

        return null;
    }
}

interface Constructor {
    new (...args: any[]): any;
}

function service(dependencies: string[]) {
    const dependenciesContainer: Map<string, any> = new Map();
    dependenciesContainer.set('UserRepository', new UserRepository());

    const dependenciesToInject = dependencies.map((d) =>
        dependenciesContainer.get(d),
    );
    console.log(dependenciesToInject);

    return function <T extends Constructor>(target: T): T {
        return class extends target {
            constructor(...args: any[]) {
                super(...dependenciesToInject);
            }
        };
    };
}

// console.log(dependenciesContainer['UserRepository']);

const s = new UserService(null);
s.getUserById('2');
