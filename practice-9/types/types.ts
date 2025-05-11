export interface Country {
    id: number;
    name: string;
    description: string;
    population: number;
    area: number;
    gdp: number;
    continent_id: number;
    continent_name?: string;
    created_at: string;
}

export interface Continent {
    id: number;
    name: string;
    created_at: string;
}