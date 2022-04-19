import createSearchView from "../views/searchView.js";

function createSearchPage() {
  let state = {};

  let searchValue = "";
  const text = "Select Your Preferred Search Method";

  // event handler for the ingredient,Category,and area buttons

  const onCategoryClick = () => {
    state = {
      ...state,
      target: "category",
      showSearchBox: true,
      mealData: null,
    };
    searchView.update(state);
  };

  const onIngredientsClick = () => {
    state = {
      ...state,
      target: "ingredients",
      showSearchBox: true,
      mealData: null,
    };
    searchView.update(state);
  };

  const onAreaClick = () => {
    state = { ...state, target: "area", showSearchBox: true, mealData: null };
    searchView.update(state);
  };

  //Event Handler to read the search value
  const onInput = (e) => {
    searchValue = e.target.value;
  };

  //Event Handler to submit and fetch the data
  const onSubmit = async () => {
    console.log(`you searched for ${searchValue}`);
    try {
      let fetchUrl;
      if (state.target === "ingredients") {
        fetchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
      } else if (state.target === "category") {
        fetchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchValue}`;
      } else {
        fetchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchValue}`;
      }
      const response = await fetch(fetchUrl);
      const data = await response.json();
      state = { ...state, mealData: data };
      searchView.update(state);
    } catch (error) {
      state = { ...state, error };
      searchView.update(state);
    }
  };

  //Event Handler to fetch the recipe details
  const onGetRecipeClick = async (idMeal) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      state = { ...state, mealDetails: data.meals[0] };
      // console.log(state.mealDetails);
      searchView.update(state);
    } catch (error) {
      state = { ...state, error };
      searchView.update(state);
    }
  };

  const props = {
    text,
    onCategoryClick,
    onIngredientsClick,
    onAreaClick,
    onInput,
    onSubmit,
    onGetRecipeClick,
  };

  const searchView = createSearchView(props);

  return searchView;
}

export default createSearchPage;
