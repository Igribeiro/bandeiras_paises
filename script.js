const fetchCountries = async () => {
    const url = path => `https://restcountries.com/v2/${path}`

    const countriesArray = []

    countriesArray.push(await fetch(url("all")).then(res => res.json()))

    let countriesLi = ''

    if (countriesArray.length !== 0) {
        countriesArray[0].forEach(country => {

            const countriesEach = `
            <li class="countryCard ${country.region}">
                <div class="countryCard__inner">
                    <div class="countryCard__front">
                        <img class="countryCard__flag" alt="${country.name}" src="${country.flags.png}" />
                    </div>
                    <div class="countryCard__inner__back">
                        <h3>${country.name}</h3>
                        <p>Nome nativo: ${country.nativeName}</p>
                        <p>Capital: ${country.capital}</p>
                        <p>Região: ${country.region}</p>
                        <p>Sub-região: ${country.subregion}</p>
                    </div>  
                </div>
            </li>
            `
            countriesLi += countriesEach
        })
    }

        const ul = document.getElementById('countryList__ul')
        ul.innerHTML = countriesLi
}

fetchCountries()