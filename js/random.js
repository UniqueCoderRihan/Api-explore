const loadUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data => displayData(data))
}
function displayData(user){
    const genderElement = document.getElementById('gender')
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title')
    console.log(user.results[0]);
    const titles = user.results[0].name.title;
    const genderData = user.results[0].gender;
    const fullName = user.results[0].name.first    + ' '+ user.results[0].name.last;
    
    console.log(fullName);
    genderElement.innerText = genderData
    nameElement.innerText = fullName;
    titleElement.innerText = titles
}
loadUser()