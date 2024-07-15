const CountryAttribute = ({ language, name }: { language: string, name: string | undefined }) => {
    if (!name) return <></>;
    return (
        <div className="country-attribute">
            <p>{language.toUpperCase()}</p>
            <h2>
                <>{name.toUpperCase()}</>
            </h2>
        </div>);
}


export default CountryAttribute;