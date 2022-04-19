import createHomePage from "./homePage.js";
import createSearchPage from "./searchPage.js";

const routes = [
  { path: "home", page: createHomePage, default: true },
  { path: "search", page: createSearchPage },
];

export default routes;
