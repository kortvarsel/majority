import React, { ReactNode, createContext, useEffect, useState } from 'react';
import fetchCountries from '../api/countries';
import { Country } from '../types';

interface CountriesContextState {
    countries: Country[];
    selectedCountry: Country | null;
    handleSetSelectedCountry: ((countryIndex: number) => void) | null;
}

export const CountriesContext = createContext<CountriesContextState>({
    countries: [],
    selectedCountry: null,
    handleSetSelectedCountry: null,
});

export const CountriesProvider = ({ children, initialCountry }: { children: ReactNode, initialCountry: string | null }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleSetSelectedCountry = (index: number) => {
        setSelectedCountry(countries[index]);
    }

    useEffect(() => {
        fetchCountries().then((data) => {
            const countryData = data as Country[];
            setCountries(countryData.sort((a, b) => a.name.common.localeCompare(b.name.common)));
        });
    }, [])

    useEffect(() => {
        if (initialCountry) {
            const index = countries.findIndex((country) => country.cca2 === initialCountry);
            if (index !== -1) {
                setSelectedCountry(countries[index]);
            }
        }
    }, [initialCountry, countries])

    return (
        <CountriesContext.Provider value={{ countries, selectedCountry, handleSetSelectedCountry }}>
            {children}
        </CountriesContext.Provider>
    );
};

export const useCountries = () => React.useContext(CountriesContext);