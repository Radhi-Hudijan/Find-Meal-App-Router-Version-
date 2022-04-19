import createHomeView from "../views/homeView.js";

function createHomePage() {
  const props = { title: "Find A Meal For Your Day!" };
  return createHomeView(props);
}

export default createHomePage;
