import { Character, Episode, Location } from "@/types/types";

type ApiInfo = {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null
}

type ApiResponse<T> = {
    info: ApiInfo,
    results: T
}


type ApiResponseArray<T> = {
    info: ApiInfo,
    results: T[]
}

export async function getCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const result: ApiResponseArray<Character> = {
        info: data.info,
        results: data.results
    };
    return result
}

export async function getCharacter(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const result: ApiResponse<Character> = {
        info: data.info,
        results: data.results
    };
    return result
}


export async function getLocations() {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const result: ApiResponseArray<Location> = {
        info: data.info,
        results: data.results
    };
    return result
}

export async function getEpisodes() {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const result: ApiResponseArray<Episode> = {
        info: data.info,
        results: data.results
    };
    return result
}