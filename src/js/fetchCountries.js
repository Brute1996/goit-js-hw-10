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

    if (countriesArr.length !== 1) {
        const markupList = countriesArr.map(country => {
            return `
            <li> <img src="${country.flags.svg}" height=30px width=50px>
            ${country.name.official}</li>
            `
        })
            .join('')
        
        countryList.insertAdjacentHTML('afterbegin', markupList)
    }

    
    
};

