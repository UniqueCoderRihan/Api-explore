const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all/')
    .then(res=>res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    // console.log(countries);
    const allCountries= document.getElementById('all');
    countries.forEach(country => {
        // console.log(country);
        const officialName = country.name.official;
        const isIndependence = country.independent;
        const capital = country.capital;
        const area = country.area
        const languages = Object.values(country.languages)
        console.log(languages[0]);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h2>Officls Name: ${officialName}</h2>
        <h3>Capital : ${capital}</h3>
        <h3>IsIndependence : ${isIndependence}</h3>
        <h3>Area ${area}</h3>
        <h3> languages: ${languages}</h3>
        `
        allCountries.appendChild(countryDiv)
    });
}
loadCountries()