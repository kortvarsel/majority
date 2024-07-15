import { useEffect } from "react";
import { useCountries } from "../context/CountriesContext";
import CountryBanner from "./CountryBanner";
import CountryBody from "./CountryBody";
import NoCountrySelected from "./NoCountrySelected";

const CountryDisplay = () => {
    const { selectedCountry } = useCountries();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCountry])

    if (!selectedCountry) return <NoCountrySelected />;
    return (
        <div>
            <CountryBanner />
            <CountryBody />
        </div >
    )
}

export default CountryDisplay;