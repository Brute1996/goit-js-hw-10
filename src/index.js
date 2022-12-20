import './css/styles.css';
import fetchCountries from './js/fetchCountries'
import { Report } from 'notiflix/build/notiflix-report-aio';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box')

searchBox.addEventListener('input', (e) => {
    fetchCountries(e.currentTarget.value)
})






