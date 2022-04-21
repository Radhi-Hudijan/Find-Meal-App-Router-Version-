function createRecipeDetailsView(props) {
  const root = document.createElement("div");
  // root.className = "meal-details-content";
  root.innerHTML = String.raw`
      <h2 class="recipe-title">${props.mealStructure.strMeal}</h2>
            <p class="recipe-category">${props.mealStructure.strCategory}</p>

            <div class="recipe-instruct">
                <h3>Instructions:</h3>
                <p>
                ${props.mealStructure.strInstructions}
                </p>
                
            </div>

              <div class="recipe-meal-img">
                   <img src="${props.mealStructure.strMealThumb}" alt="" />
              </div>

              <div class="recipe-link">
                <a href="${props.mealStructure.strYoutube}" target="_blank">Watch Video</a>
              </div>
    `;

  return { root };
}

export default createRecipeDetailsView;
