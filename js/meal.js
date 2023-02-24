const loadMeals=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res=> res.json())
    .then(res => displayMeals(res.meals))
}

const displayMeals = meals =>{
    // console.log(meals);
    
}

loadMeals()