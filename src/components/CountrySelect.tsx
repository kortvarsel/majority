import { AutoComplete, Input } from "antd";
import { useCountries } from "../context/CountriesContext";
import { Country } from "../types";

const getLabel = (country: Country) =>
    <div className="label">
        <img className="label-flag" alt={`${country.name.common} flag`} src={country.flags.svg} />
        <span>{country.name.common}</span>
    </div>

const CountrySelect = () => {
    const { countries, handleSetSelectedCountry } = useCountries();
    if (countries.length === 0) return (<div>Fetching countries...</div>);
    if (!handleSetSelectedCountry) return (<div>Something went wrong, please try to reload the page.</div>)
    return (
        <AutoComplete
            className="autocomplete"
            options={countries.map((country, key) => ({ value: country.name.common, key, label: getLabel(country) }))}
            filterOption={(inputValue, option) =>
                option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={(_, option) => handleSetSelectedCountry(option.key)}
        >
            <Input.Search size="large" placeholder="Search for country..." />
        </AutoComplete>

    )
}
export default CountrySelect;