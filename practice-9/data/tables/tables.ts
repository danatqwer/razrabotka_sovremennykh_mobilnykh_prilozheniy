import { SQLiteDatabase } from "expo-sqlite";
import { ContinentModel, CountryModel } from "../../models/models";
import Table from "./table";

enum TableNames {
    COUNTRIES = 'countries',
    CONTINENTS = 'continents',
}

export class CountriesTable extends Table<CountryModel> {
    database: SQLiteDatabase;
    tableName: string = TableNames.COUNTRIES;

    constructor(database: SQLiteDatabase) {
        super();
        this.database = database;
    }

    async create(): Promise<void> {
        const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            population INTEGER,
            area REAL,
            gdp REAL,
            continent_id INTEGER,
            created_at TEXT,
            FOREIGN KEY (continent_id) REFERENCES continents(id)
        );`;

        await super.createTable(query);
    }

    async getBy(field: string, value: any): Promise<CountryModel | null> {
        const query =
            `SELECT ${this.tableName}.*, ${TableNames.CONTINENTS}.name as continent_name
            FROM ${this.tableName}
            LEFT JOIN ${TableNames.CONTINENTS} 
            ON ${this.tableName}.continent_id = ${TableNames.CONTINENTS}.id
            WHERE ${this.tableName}.${field} = ?;`;

        return await super.getBy(field, value, query);
    }
    async getAllBy(field: string, value: any): Promise<CountryModel[] | null> {
        const query =
            `SELECT ${this.tableName}.*, ${TableNames.CONTINENTS}.name as continent_name
            FROM ${this.tableName}
            LEFT JOIN ${TableNames.CONTINENTS} 
            ON ${this.tableName}.continent_id = ${TableNames.CONTINENTS}.id
            WHERE ${this.tableName}.${field} LIKE '%${value}%';`;

        return await super.getAllBy(field, value, query );
    }

    async getAll(): Promise<CountryModel[]> {
        const query =
            `SELECT ${this.tableName}.*, ${TableNames.CONTINENTS}.name as continent_name
            FROM ${this.tableName}
            LEFT JOIN ${TableNames.CONTINENTS}  
            ON ${this.tableName}.continent_id = ${TableNames.CONTINENTS}.id;`;

        return await super.getAll(query);
    }
}


export class ContinentsTable extends Table<ContinentModel> {
    database: SQLiteDatabase;
    tableName: string = TableNames.CONTINENTS;

    constructor(database: SQLiteDatabase) {
        super();
        this.database = database;
    }

    async create(): Promise<void> {
        const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TEXT
        );`;

        await super.createTable(query);
    }
}

