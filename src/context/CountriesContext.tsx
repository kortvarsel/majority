import React, { ReactNode, createContext, useEffect, useState } from 'react';
import fetchCountries from '../api/countries';

// Define the initial state for the context
interface CountriesContextState {
    countries: Country[];
    selectedCountry: Country | null;
    handleSetSelectedCountry: ((countryIndex: number) => void) | null;
}

interface Country {
    name: {
        common: string
        official: string;
    };
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
}


// Create the context
export const CountriesContext = createContext<CountriesContextState>({
    countries: [],
    selectedCountry: null,
    handleSetSelectedCountry: null,
});

// Create the provider component
export const CountriesProvider = ({ children }: { children: ReactNode }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleSetSelectedCountry = (index: number) => {
        setSelectedCountry(countries[index]);
        console.log(countries[index]);
        console.log(index);
    }

    useEffect(() => {
        fetchCountries().then((data) => {
            setCountries(data);
            console.log(data);
        });
    }, [])

    return (
        <CountriesContext.Provider value={{ countries, selectedCountry, handleSetSelectedCountry }}>
            {children}
        </CountriesContext.Provider>
    );
};

export const useCountries = () => React.useContext(CountriesContext);