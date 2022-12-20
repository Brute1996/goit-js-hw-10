const countryList = document.querySelector('.country-list')

export default function fetchCountries(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    return fetch(URL)
        .then(response => response.json())
        .then(countries => renderResult(countries))
        .catch(error => error)
}


const renderResult = (countriesArr) => {
    countryList.textContent = ''
    
    const markup = countriesArr.map(country => {
        return `
        <li>${country.name.official}</li>
        `
    })
        .join('')

    countryList.insertAdjacentHTML('afterbegin', markup)
    
};

