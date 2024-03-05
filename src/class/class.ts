class Company {
    public readonly name: string;
    private readonly employees: Employee[] = [];
    protected readonly companyId: string;

    static createCompany(name: string): Company {
        return new Company(name, 'generated-id');
    }

    constructor(name: string, id: string) {
        this.name = name;
        this.companyId = id;
    }

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public showEmployeeEmail(): void {
        for (const employee of this.employees) {
            console.log(this.formatEmail(employee.getEmail()));
        }
    }

    private formatEmail(email: string): string {
        return `email: ${email}`;
    }
}

class Employee {
    static defaultRole = 'none';

    constructor(
        public readonly name: string,
        private email: string,
        public _role: string,
    ) {}

    public getEmail(): string {
        return this.email;
    }

    get role() {
        return this._role;
    }

    set role(role: string) {
        this._role = role;
    }
}

const company = new Company('company-1', '0001');
const employee1 = new Employee('employee-1', 'employee1@mail.com', 'boss');
const employee2 = new Employee('employee-2', 'employee2@mail.com', 'not-boss');

company.addEmployee(employee1);
company.addEmployee(employee2);

company.showEmployeeEmail();

const company2 = Company.createCompany('company-2');
console.log(company2);

console.log(Employee.defaultRole);
