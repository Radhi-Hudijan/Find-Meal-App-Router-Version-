import createRecipeDetailsView from "./recipeDetailsView.js";

function createMealListView(props) {
  const root = document.createElement("div");
  root.className = "meal-list-container";

  root.innerHTML = String.raw`
  <h2>Your Search Result : </h2>  
      <ul id="mealContainer"></ul>
      <div class ="recipe-container"></div>
    `;
  const mealContainer = root.querySelector("#mealContainer");

  props.meals.forEach((meal) => {
    const li = document.createElement("li");
    li.classList.add("li");
    li.innerHTML = String.raw`
    <div class="meal-item" data-id ="${meal.idMeal}">
       <div class="meal-img">
          <img src="${meal.strMealThumb}" alt="food" />
       </div>

       <div class="meal-name">
          <h3>${meal.strMeal}</h3>
          <button class="recipe-btn">Get Recipe</button>
       </div>
    </div>`;

    const recipeBtn = li.querySelector("button");
    recipeBtn.addEventListener("click", () => {
      props.onGetRecipeClick(meal.idMeal);
      console.log(props.mealDetails);
      // const recipeContainer = root.querySelector(".recipe-container");
      const recipeDetails = createRecipeDetailsView(props.mealDetails);

      mealContainer.appendChild(recipeDetails.root);
    });

    mealContainer.appendChild(li);
  });

  // const recipeBtn = root.querySelector(".recipe-btn");
  // recipeBtn.addEventListener("click", props.onGetRecipeClick);

  return { root };
}

export default createMealListView;
