import { useCountries } from "../context/CountriesContext";
import BorderingCountries from "./BorderingCountries";
import CountryAttribute from "./CountryAttribute";

const getFormattedPopulation = (population: number) => population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const CountryBody = () => {
    const { selectedCountry } = useCountries();

    return (
        <div className="container-body">
            <CountryAttribute language="Population" name={getFormattedPopulation(selectedCountry?.population || 0)} />
            <CountryAttribute language="Capital" name={selectedCountry?.capital[0]} />
            <CountryAttribute language="Region" name={selectedCountry?.region} />
            <CountryAttribute language="Subregion" name={selectedCountry?.subregion} />
            <CountryAttribute language="Area" name={`${selectedCountry?.area} km²`} />
            <BorderingCountries />
            {selectedCountry?.languages && <CountryAttribute language="Languages" name={Object.values(selectedCountry?.languages).join(", ")} />}
            {selectedCountry?.currencies && <CountryAttribute language="Currencies" name={Object.values(selectedCountry?.currencies).map((currency) => currency.name).join(", ")} />}
        </div>
    );
}

export default CountryBody;