class Database {
    constructor() {
        this.database = { treinos: {} };
    }

    select(table) {
        return this.database[table] ?? {};
    }

    insert(table, key, value) {
        this.database[table][key] = value;
    }

    update(table, key, value) {
        if (this.database[table][key]) {
            this.database[table][key] = { ...this.database[table][key], ...value };
            return true;
        }
        return false;
    }

    delete(table, key) {
        if (this.database[table][key]) {
            delete this.database[table][key];
            return true;
        }
        return false;
    }
}

module.exports = new Database();
