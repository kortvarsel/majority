import { useCountries } from "../context/CountriesContext";
import CountryLink from "./CountryLink";

const BorderingCountries = () => {
    const { selectedCountry, handleSetSelectedCountry } = useCountries();
    if (!handleSetSelectedCountry || !selectedCountry?.borders) return <></>;
    return (
        <div className="country-attribute">
            <p>BORDERING COUNTRIES</p>
            <div className="border-countries">
                {selectedCountry?.borders.map((borderCountry, index) => (
                    <CountryLink borderCountry={borderCountry} index={index} />
                ))}
            </div>
        </div>
    );
}

export default BorderingCountries;