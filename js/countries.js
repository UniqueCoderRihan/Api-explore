const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all/')
    .then(res=>res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    // console.log(countries.cca2);
    const allCountries= document.getElementById('all');
    countries.forEach(country => {
        // console.log(country.cca2 );
        const officialName = country.name.official;
        const isIndependence = country.independent;
        const capital = country.capital;
        const area = country.area
        const languages = Object.values(country.languages)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h2>Officls Name: ${officialName}</h2>
        <h3>Capital : ${capital}</h3>
        <h3>IsIndependence : ${isIndependence}</h3>
        <h3>Area ${area}</h3>
        <h3> languages: ${languages}</h3>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        allCountries.appendChild(countryDiv)
    });
}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v2/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res=> res.json())
    .then(data=> showCountryDetails(data))
}

const showCountryDetails = country =>{
    console.log(country);
    const DetailsContainer = document.getElementById('countryDetails');
    DetailsContainer.innerHTML = `
    <h3>Name: ${country.name}</h3>
    <img src="${country.flags.png}">
    `

}
loadCountries()