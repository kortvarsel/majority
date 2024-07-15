import { useCountries } from "../context/CountriesContext";
import CountryName from "./CountryName";
import CountryNameDivider from "./CountryNameDivider";

const CountryBanner = () => {
    const { selectedCountry } = useCountries();

    if (!selectedCountry) return <></>;

    return (
        <div className="container-banner">
            <div className="container-title">
                <CountryName key="name-english" language="English" name={selectedCountry?.name.common} />
                {Object.entries(selectedCountry?.name.nativeName ?? {}).map(([key, value]) =>
                    selectedCountry?.languages[key].toLowerCase() !== "english" &&
                    <div style={{ display: "contents" }} key={`name-${selectedCountry?.languages[key]}`}>
                        <CountryNameDivider />
                        <CountryName language={selectedCountry?.languages[key]} name={value.common} />
                    </div>
                )}
            </div >
            <img className="container-flag" src={selectedCountry?.flags.png} alt={selectedCountry?.flags.alt} />
        </div>
    );
}

export default CountryBanner;