import CountryDisplay from "../components/CountryDisplay";
import CountrySelect from "../components/CountrySelect";
import { CountriesProvider } from "../context/CountriesContext";
import useLocation from "../hooks/UseLocation";

const CountryPage = () => {
    const savedCountry = localStorage.getItem("countryCode");
    const { localCountryCode, getLocation } = useLocation();

    if (!savedCountry) {
        getLocation();
    }

    return (
        <CountriesProvider initialCountry={savedCountry || localCountryCode}>
            <div className="country-page">
                <CountrySelect />
                <CountryDisplay />
            </div>
        </CountriesProvider >
    )
}

export default CountryPage;