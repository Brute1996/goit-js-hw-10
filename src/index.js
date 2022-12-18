import './css/styles.css';
import fetchCountries from './js/fetchCountries'

const DEBOUNCE_DELAY = 300;


fetchCountries('germany')
    .then(country => country)
    .catch(error => error)


