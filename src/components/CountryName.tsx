const CountryName = ({ language, name }: { language: string, name: string }) =>
    <div className="country-name">
        <p>{language.toUpperCase()}</p>
        <h1>
            <>{name.toUpperCase()}</>
        </h1>
    </div>

export default CountryName;