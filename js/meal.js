const loadMeals=(searchText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(res => displayMeals(res.meals))
}

const displayMeals = meals =>{
    // console.log(meals);
    const mealsContainer = document.getElementById('mealContainer')
    mealsContainer.innerHTML = ''
    meals.forEach(meal => {
        // console.log(meal);
        const mealsDiv = document.createElement('div')
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                        Details About
                    </button>
                </div>
        </div>
        `
        mealsContainer.appendChild(mealsDiv);
    });
}

const searchMeal = ()=>{
    const searchTextElement = document.getElementById('search-filed');
    const searchText = searchTextElement.value ;
    searchTextElement.value = '';
    loadMeals(searchText);
    
    
    // console.log(searchText)
    
    
}
const loadMealDetail = idmeal =>{
    console.log(idmeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
    fetch(url)
    .then(res=>res.json())
    .then(details => displayMealsDetails(details.meals[0]))
    .catch(error => {
        console.log(error)
    })
}
const displayMealsDetails = meal => {
    console.log(meal);
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const modalBodys = document.getElementById('modalBbody');
    modalBodys.innerHTML = `
    <img class='img-fluid' src="${meal.strMealThumb}">
    
    `
}
loadMeals('fish')