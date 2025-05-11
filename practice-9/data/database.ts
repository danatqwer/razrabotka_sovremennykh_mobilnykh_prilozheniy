import { ContinentModel, CountryModel } from "@/models/models";
import { SQLiteDatabase } from "expo-sqlite";
import { ContinentsTable, CountriesTable } from "./tables/tables";

export class CountriesDatabase {
    static databaseName: string = 'countries.db';
    database: SQLiteDatabase;
    countriesTable: CountriesTable;
    continentsTable: ContinentsTable;

    constructor(database: SQLiteDatabase) {
        this.database = database;
        this.countriesTable = new CountriesTable(this.database);
        this.continentsTable = new ContinentsTable(this.database);
    }

    async initialize() {
        try {
            if (await this.continentsTable.exists() === false) {
                const createdAt = new Date(Date.now()).toISOString();
                await this.continentsTable.create();
                await this.continentsTable.insertAll([
                    new ContinentModel(1, 'Africa', createdAt),
                    new ContinentModel(2, 'Asia', createdAt),
                    new ContinentModel(3, 'Europe', createdAt),
                    new ContinentModel(4, 'North America', createdAt),
                    new ContinentModel(5, 'South America', createdAt),
                    new ContinentModel(6, 'Antarctica ', createdAt),
                    new ContinentModel(7, 'Australia  ', createdAt),
                ]);
            }

            if (await this.countriesTable.exists() === false) {
                const createdAt = new Date(Date.now()).toISOString();
                await this.countriesTable.create();
                await this.countriesTable.insertAll([
                    new CountryModel(1, 'Nigeria', 'Most populous country in Africa', 223000000, 923768, 514000, 1, createdAt),
                    new CountryModel(2, 'China', 'Most populous country in the world', 1440000000, 9596961, 17734000, 2, createdAt),
                    new CountryModel(3, 'Germany', 'Largest economy in Europe', 83000000, 357022, 4200000, 3, createdAt),
                    new CountryModel(4, 'United States', 'Third most populous country', 331000000, 9833517, 21433000, 4, createdAt),
                    new CountryModel(5, 'Brazil', 'Largest country in South America', 213000000, 8515767, 2490000, 5, createdAt),
                ]);
            }
            console.log('2');

        } catch (error) {
            console.error('Error during database initialization:', error);
        }
    }

    async close(): Promise<void> {
        try {
            console.log('Closing database connection...');
            await this.database.closeAsync()
        } catch (error) {
            console.error('Error closing database:', error);
        }
    }
}
