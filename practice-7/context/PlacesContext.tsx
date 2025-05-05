import { Place } from '@/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { categories, places } from '../data/places';

type PlacesState = {
    places: Place[];
    categories: string[];
    selectedCategory: string | null;
    selectedPlace: Place | null;
};

const initialState: PlacesState = {
    places: places,
    categories: categories,
    selectedCategory: null,
    selectedPlace: null
};

type PlacesAction =
    | { type: 'SELECT_CATEGORY'; payload: string }
    | { type: 'SELECT_PLACE'; payload: Place }
    | { type: 'SAVE_PLACES'; payload: Place[] };

const reducer = (state: PlacesState, action: PlacesAction) => {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return { ...state, selectedCategory: action.payload };
        case 'SELECT_PLACE':
            return { ...state, selectedPlace: action.payload };
        case 'SAVE_PLACES':
            AsyncStorage.setItem('@places', JSON.stringify(state.places));
            return state;
        default:
            return state;
    }
};

const PlacesContext = createContext<PlacesState>(initialState);

export const PlacesProvider = (props: {children: ReactNode}) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedPlaces = await AsyncStorage.getItem('@places');
                return savedPlaces ? JSON.parse(savedPlaces) as Place[] : places;
            } catch (e) {
                return places;
            }
        };
        loadData().then(loadedPlaces => {
            if (loadedPlaces) {
                dispatch({ type: 'SAVE_PLACES', payload: loadedPlaces });
            }
        });
    }, [state.places]);

    return (
        <PlacesContext.Provider  value={{ ...state, ...dispatch }}>
            {children}
        </PlacesContext.Provider>
    );
};
export const usePlaces = () => useContext(PlacesContext);