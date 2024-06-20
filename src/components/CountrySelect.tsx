import { useCountries } from "../context/CountriesContext";

const CountrySelect = () => {
    const { countries, handleSetSelectedCountry } = useCountries();
    if (countries.length === 0) return (<div>Loading...</div>);
    if (!handleSetSelectedCountry) return (<div>Error: setSelectedCountry is not defined</div>)
    return (
        <div>
            <select onChange={(value) => handleSetSelectedCountry(value.target.value as unknown as number)}>
                {countries.map((country, index) => (
                    <option key={country.name.common} value={index}>{country.name.common}</option>
                ))}
            </select>
        </div>
    )
}
export default CountrySelect;