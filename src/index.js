import './css/styles.css';
import fetchCountries from './js/fetchCountries'

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')

searchBox.addEventListener('input', (e) => {
    fetchCountries(e.currentTarget.value)
})






