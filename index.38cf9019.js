!function(){var n=document.querySelector(".country-list");var t=function(t){if(n.textContent="",1!==t.length){var e=t.map((function(n){return'\n            <li> <img src="'.concat(n.flags.svg,'" height=30px width=50px>\n            ').concat(n.name.official,"</li>\n            ")})).join("");n.insertAdjacentHTML("afterbegin",e)}},e=document.querySelector("#search-box");document.querySelector(".country-list");e.addEventListener("input",(function(n){var e,c;e=n.currentTarget.value,c="https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages\n"),fetch(c).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return n}))}))}();
//# sourceMappingURL=index.38cf9019.js.map