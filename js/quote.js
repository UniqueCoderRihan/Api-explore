function loadquote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayData(data))
}

function displayData(data){
    console.log(data.quote);
}