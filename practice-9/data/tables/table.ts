import { TypeModel } from "@/models/models";
import { SQLiteDatabase, SQLiteRunResult } from "expo-sqlite";

export default abstract class Table<T extends TypeModel> {
    protected abstract database: SQLiteDatabase;
    abstract tableName: string;

    abstract create(): Promise<void>;

    async exists() {
        const query =
            `SELECT name 
            FROM sqlite_master 
            WHERE type = 'table' AND name = '${this.tableName}';`

        return new Promise<boolean>(async (resolve, reject) => {
            await this.database
                .getFirstAsync(query)
                .then((row) => row !== null ? resolve(true) : resolve(false))
                .catch((error) => {
                    console.error(`Error checking table ${this.tableName}`, error);
                    reject(error)
                });
        })
    }

    async createTable(query: string): Promise<void> {
        return await new Promise(async (resolve, reject) => {
            await this.database
                .execAsync(query)
                .then(() => {
                    console.log(`Table ${this.tableName} created successfully.`);
                    resolve();
                }).catch((error) => {
                    console.error(`Error creating table ${this.tableName}: `, error);
                    reject(error);
                });
        });
    }

    async drop(): Promise<void> {
        const query = `DROP TABLE IF EXISTS ${this.tableName};`;

        await this.database
            .execAsync(query)
            .then(() => {
                console.log(`Table ${this.tableName} dropped successfully.`);
            })
            .catch((error) => {
                console.error(`Error dropping table ${this.tableName}:`, error);
            });
    }



    async insert(item: T): Promise<void | SQLiteRunResult> {
        const createdAt = new Date(Date.now()).toISOString();
        const query = `INSERT INTO ${this.tableName} (${item.toFieldsString()}) VALUES (${item.toMarksString()});`;
        
        return await this.database
            .runAsync(query, [...item.toArray(), createdAt])
            .then((result) => {
                console.log(`Item ${item.toString()} inserted successfully.`);
            })
            .catch((error) => {
                console.error(`Error inserting item ${item.toString()}:`, error);
            });
    }

    async insertAll(items: T[]): Promise<void> {
        if (items.length === 0) return;
        items.forEach(async (item) => await this.insert(item))
    }


    async getBy(field?: string, value?: any, query?: string): Promise<T | null> {
        query = query ?? `SELECT * FROM ${this.tableName} WHERE ${field} = ?;`;

        return new Promise(async (resolve, reject) => {
            await this.database
                .getFirstAsync(query, [value])
                .then((row) => row ? resolve(row as T) : resolve(null))
                .catch((error) => {
                    console.error(`Error fetching item with ${field} ${value}:`, error);
                    reject(error)
                });
        });
    }

    async getAllBy(field?: string, value?: any, query?: string): Promise<T[] | null> {
        query = query ?? `SELECT * FROM ${this.tableName} WHERE ${field} = ?;`;

        return new Promise(async (resolve, reject) => {
            await this.database
                .getAllAsync(query, [value])
                .then((row) => row ? resolve(row as T[]) : resolve(null))
                .catch((error) => {
                    console.error(`Error fetching item with ${field} ${value}:`, error);
                    reject(error)
                });
        });
    }


    async getAll(query?: string): Promise<T[]> {
        query = query ?? `SELECT * FROM ${this.tableName};`;

        return new Promise(async(resolve, reject) => {
            await this.database
                .getAllAsync(query)
                .then((rows) => resolve(rows as T[]))
                .catch((error) => {
                    console.error(`Error fetching items:`, error);
                    reject(error)
                });
        });
    }

    async updateBy(object: T, field?: string, value?: any, query?: string,) {
        query = query ?? `UPDATE ${this.tableName} SET ${object.toFieldsSetString()} WHERE ${field} = ${value};`;

        await this.database
            .runAsync(query, object.toArray())
            .then(() => {
                console.log(`Row where ${field} = ${value} updated successfully.`);
            })
            .catch((error) => {
                console.error(`Error deleting row where ${field} = ${value}:`, error);
            });
    }

    async deleteBy(field?: string, value?: any, query?: string,) {
        query = query ?? `DELETE FROM ${this.tableName} WHERE ${field} = ${value};`;

        await this.database
            .execAsync(query)
            .then(() => {
                console.log(`Row where ${field} = ${value} deleted successfully.`);
            })
            .catch((error) => {
                console.error(`Error deleting row where ${field} = ${value}:`, error);
            });
    }

    async deleteAll(): Promise<void> {
        const query = `DELETE FROM ${this.tableName};`;
        await this.database
            .execAsync(query)
            .then(() => {
                console.log(`Items in ${this.tableName} deleted successfully.`);
            })
            .catch((error) => {
                console.error(`Error dropping table ${this.tableName}:`, error);
            });
    }

}