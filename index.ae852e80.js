!function(){var n=document.querySelector(".country-list");var t=function(t){if(n.textContent="",console.log(t.length),t.length<=10){var e=t.map((function(n){return 1!==t.length?'\n                <li> <img src="'.concat(n.flags.svg,'" height=30px width=50px>\n                <h2>').concat(n.name.official,"</h2></li>\n                "):'<li> <img src="'.concat(n.flags.svg,'" height=30px width=50px>\n                <h2>').concat(n.name.official,"</h2>\n                <h3>Capital:</h3>\n                <p>").concat(n.capital,"</p>\n                <h3>Population:</h3>\n                <p>").concat(n.population,"</p>\n                <h3>Languages:</h3>\n                <p>").concat(Object.values(n.languages).join(", "),"</p>\n                </li>\n                ")})).join("");n.insertAdjacentHTML("afterbegin",e)}},e=document.querySelector("#search-box");document.querySelector(".country-list");e.addEventListener("input",(function(n){var e,c;e=n.currentTarget.value,c="https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages\n"),fetch(c).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return n}))}))}();
//# sourceMappingURL=index.ae852e80.js.map
