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
            <h2>${country.name.official}</h2></li>
            `
        }
        
        return `<li> <img src="${country.flags.svg}" height=30px width=50px>
            <h2>${country.name.official}</h2>
            <h3>Capital:</h3>
            <p>${country.capital}</p>
            <h3>Population:</h3>
            <p>${country.pipulation}</p>
            <h3></h3>
            <p></p>
            </li>
            `

    })
        .join('')

    countryList.insertAdjacentHTML('afterbegin', markup)
    
};

