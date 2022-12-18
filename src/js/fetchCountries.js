export default function fetchCountries(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}`;

    return fetch(URL)
        .then(response => response.json())
        .then(country => console.log(country))
        .catch(error => error)
}

