import createMealListView from "./mealListView.js";

function createSearchView(props) {
  const root = document.createElement("div");
  root.className = "meal-search-container";
  root.innerHTML = String.raw`
          <h2 class="title">${props.text}</h2>
          <p>Search your meal based on categories, ingredients or area <br> if you need a hint , please <a href="#hint">Click Here</a></br></p>
           <div class="buttons">
               <button class="choice-btn" id="by-category-button">By Category </button>
               <button class="choice-btn" id="by-ingredients-button">By Ingredients </button>
               <button class="choice-btn" id="by-area-button">By Area </button>
           </div>

            <!-- meal search box -->
            <div class="meal-search-box">
              <input
                type="text"
                class="search-control"
                placeholder=""
                id="search-input"
              />

              <button type="submit" class="search-btn btn" id="search-btn">
                 <i class="fas fa-search"></i>
              </button>
          </div>

          <div id="result-container"> 
          
        </div>
    `;

  // Selecting the ingredient , Category or Area buttons & add event listener to them
  const byCategoryButton = root.querySelector("#by-category-button");
  byCategoryButton.addEventListener("click", props.onCategoryClick);

  const byIngredientsButton = root.querySelector("#by-ingredients-button");
  byIngredientsButton.addEventListener("click", props.onIngredientsClick);

  const byAreaButton = root.querySelector("#by-area-button");
  byAreaButton.addEventListener("click", props.onAreaClick);

  // selecting input value and add event listener to read it
  const searchInput = root.querySelector("#search-input");
  searchInput.addEventListener("input", props.onInput);

  // selecting the search btn and add event listener to submit search value
  const searchBtn = root.querySelector("#search-btn");
  searchBtn.addEventListener("click", props.onSubmit);

  const mealSearchBox = root.querySelector(".meal-search-box");
  const resultContainer = root.querySelector("#result-container");

  const update = (state) => {
    if (state.error) {
      resultContainer.innerHTML = "OPPs.. Fetch Failed ..";
      resultContainer.classList.add("notFound");
      return;
    }
    resultContainer.innerHTML = "";
    if (state.showSearchBox) {
      mealSearchBox.classList.add("showElement");
      searchInput.value = "";
    }

    if (state.target === "category") {
      searchInput.placeholder =
        "Enter a Category , Ex : beef , Breakfast, Chicken";
    } else if (state.target === "ingredients") {
      searchInput.placeholder = "Enter an ingredient, Ex : Egg , Rice, Cheese";
    } else {
      searchInput.placeholder =
        "Enter an Area , Ex : Malaysian , American, Dutch";
    }

    if (state.mealData) {
      if (state.mealData.meals) {
        const mealListView = createMealListView({
          meals: state.mealData.meals,
          onGetRecipeClick: props.onGetRecipeClick,
          mealDetails: state.mealDetails,
        });
        resultContainer.innerHTML = "";
        resultContainer.appendChild(mealListView.root);
      } else {
        resultContainer.innerHTML =
          " Sorry We did not find any meal! <br> Please try again ";
        resultContainer.classList.add("notFound");
      }
    }
  };

  return { root, update };
}

export default createSearchView;
