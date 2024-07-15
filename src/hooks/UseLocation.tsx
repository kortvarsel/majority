import { useState } from "react";

const useLocation = () => {
    const [localCountryCode, setLocalCountryCode] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            getCoordinates();
        } else {
            console.warn("Geolocation is not supported by this browser.");
        }

    }

    const getCoordinates = () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                navigator.geolocation.getCurrentPosition(getCountryCode, (error) => console.warn(error));
            });

    }

    const getCountryCode = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords;
        fetch(`https://secure.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=kvtv`)
            .then(response => response.json())
            .then(data => {
                setLocalCountryCode(data.countryCode);
            })
            .catch(error => console.log(error));
    }

    return { localCountryCode, getLocation };
}

export default useLocation;