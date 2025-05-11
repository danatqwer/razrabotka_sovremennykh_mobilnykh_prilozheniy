import { Continent, Country } from "@/types/types";

export abstract class TypeModel{
    abstract toString(): string;
    abstract toFieldsString(): string;
    abstract toArray(): (string | number)[];
    abstract fromArray(array: (string | number)[]): any;

    toMarksString(): string {
        return this.toFieldsString().split(", ").map(field => '?').join(", ");
    }


    toFieldsSetString(): string {
        return this.toFieldsString().split(", ").map(field => `${field} = ?`).join(", ")
    }

}

export class CountryModel extends TypeModel implements Country {
    id: number;
    name: string;
    description: string;
    population: number;
    area: number;
    gdp: number;
    continent_id: number;
    created_at: string;
    continent_name?: string;

    constructor(
        id: number,
        name: string,
        description: string,
        population: number,
        area: number,
        gdp: number,
        continentId: number,
        createdAt: string,
        continentName?: string
    ) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.population = population;
        this.area = area;
        this.gdp = gdp;
        this.continent_id = continentId;
        this.created_at = createdAt;
        this.continent_name = continentName;
    }

    toString(): string {
        return `Country: ${this.name}, id: ${this.id}, Population: ${this.population}, Area: ${this.area}, GDP: ${this.gdp}`;
    }

    toFieldsString(): string {
        return `name, description, population, area, gdp, continent_id, created_at`;
    }

    toFieldsFKString(): string {
        return `name, description, population, area, gdp, continent_name, created_at`;
    }


    toArray(): (string | number)[] {
        return [
            this.name,
            this.description,
            this.population,
            this.area,
            this.gdp,
            this.continent_id,
            this.created_at,
        ];
    }

    fromArray(array: (string | number | undefined)[]): Country {
        return array.length < 9
            ? new CountryModel(
                Number(array[0]),
                String(array[1]),
                String(array[2]),
                Number(array[3]),
                Number(array[4]),
                Number(array[5]),
                Number(array[6]),
                String(array[7])
            )
            : new CountryModel(
                Number(array[0]),
                String(array[1]),
                String(array[2]),
                Number(array[3]),
                Number(array[4]),
                Number(array[5]),
                Number(array[6]),
                String(array[7]),
                String(array[8])
            );
    }

    copyWith(fields: Partial<Country>): CountryModel {
        return new CountryModel(
            fields.id ?? this.id,
            fields.name ?? this.name,
            fields.description ?? this.description,
            fields.population ?? this.population,
            fields.area ?? this.area,
            fields.gdp ?? this.gdp,
            fields.continent_id ?? this.continent_id,
            fields.created_at ?? this.created_at,
            fields.continent_name ?? this.continent_name
        );
    }
}

export class ContinentModel extends TypeModel implements Continent {
    id: number;
    name: string;
    created_at: string;

    constructor(
        id: number,
        name: string,
        createdAt: string
    ) {
        super();
        this.id = id;
        this.name = name;
        this.created_at = createdAt;
    }

    toString(): string {
        return `Continent: ${this.name}, id: ${this.id}, Created At: ${this.created_at}`;
    }

    toFieldsString(): string {
        return `id, name, created_at`;
    }

    toArray(): (string | number)[] {
        return [this.id, this.name, this.created_at];
    }

    fromArray(array: (string | number)[]): Continent {
        return new ContinentModel(
            Number(array[0]),
            String(array[1]),
            String(array[2])
        );
    }

    copyWith(fields: Partial<Continent>): ContinentModel {
        return new ContinentModel(
            fields.id ?? this.id,
            fields.name ?? this.name,
            fields.created_at ?? this.created_at
        );
    }
}