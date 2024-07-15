import { useCountries } from "../context/CountriesContext";

const CountryLink = ({ borderCountry, index }: { borderCountry: string, index: number }) => {
    const { countries, selectedCountry, handleSetSelectedCountry } = useCountries();
    if (!handleSetSelectedCountry || !selectedCountry) return <></>;
    return (
        <h2 key={borderCountry} onClick={() => handleSetSelectedCountry(countries.findIndex(country => country.cca3 === borderCountry))}>
            {index === selectedCountry.borders.length - 1 ? borderCountry.toUpperCase() : borderCountry.toUpperCase() + ",\u00A0"}
        </h2>
    )
}

export default CountryLink;