class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private passwd: string,
    ) {}

    static connect(host: string, user: string, passwd: string): Database {
        if (Database.database) {
            console.log('Database connection already available');
            return Database.database;
        }

        console.log('Connecting to database...');
        Database.database = new Database(host, user, passwd);
        return Database.database;
    }
}

const db1 = Database.connect('host', 'user', '123');
const db2 = Database.connect('host', 'user', '123');

console.log(db1 === db2);
