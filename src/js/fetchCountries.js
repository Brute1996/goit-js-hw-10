const countryList = document.querySelector('.country-list')

export default function fetchCountries(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    return fetch(URL)
        .then(response => response.json())
        .then(countries => renderResult(countries))
        .catch(error => error)
}


const renderResult = (countriesArr) => {
    const markup = countriesArr.map(country => {
        return `
        <li>${country.name.official}</li>
        `
    })
        // .filter((v,i) => countriesArr.indexOf(v) === i)
        // .join('')
    console.log(markup);

    countryList.insertAdjacentHTML('afterbegin', markup)
    };