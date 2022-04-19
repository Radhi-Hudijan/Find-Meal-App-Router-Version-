function createRecipeDetailsView(props) {
  const root = document.createElement("div");
  root.className = "sample-class";
  root.innerHTML = String.raw`
      <h2 class="recipe-title">${props.strMeal}</h2>
            <p class="recipe-category">${props.strCategory}</p>

            <div class="recipe-instruct">
                <h3>Instructions:</h3>
                <p>
                ${props.strInstructions}
                </p>
                
            </div>

              <div class="recipe-meal-img">
                   <img src="${props.strMealThumb}" alt="" />
              </div>

              <div class="recipe-link">
                <a href="${props.strYoutube}" target="_blank">Watch Video</a>
              </div>
    `;

  return { root };
}

export default createRecipeDetailsView;
