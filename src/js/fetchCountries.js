const countryList = document.querySelector('.country-list')

export default function fetchCountries(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages
`;
    return fetch(URL)
        .then(response => response.json())
        .then(countries => renderResult(countries))
        .catch(error => error)
}


const renderResult = (countriesArr) => {
    countryList.textContent = ''

    const markup = countriesArr.map(country => {
        if (countriesArr.length !== 1) {
            return `
            <li> <img src="${country.flags.svg}" height=30px width=50px>
            ${country.name.official}</li>
            `
        }
        return ``

    })
        .join('')

    countryList.insertAdjacentHTML('afterbegin', markup)
    
};

