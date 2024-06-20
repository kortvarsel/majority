import { useCountries } from "../context/CountriesContext";

const CountryDisplay = () => {
    const { selectedCountry } = useCountries();
    return (
        <div>
            <h1>
                {selectedCountry?.name.common}
            </h1>
            <img src={selectedCountry?.flags.png} alt={selectedCountry?.flags.alt} />
        </div>
    )
}

export default CountryDisplay;