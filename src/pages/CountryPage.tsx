import CountryDisplay from "../components/CountryDisplay";
import CountrySelect from "../components/CountrySelect";
import { CountriesProvider } from "../context/CountriesContext";

const CountryPage = () => {
    return (
        <CountriesProvider>
            <div className="flex-col container-page">
                <CountrySelect />
                <CountryDisplay />
            </div>
        </CountriesProvider >
    )
}

export default CountryPage;