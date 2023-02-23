function quoteData(){
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(quote => displayData(quote))
}
function displayData(quote){
    const container = document.getElementById('quote')
    container.innerHTML = quote.quote
}
quoteData();