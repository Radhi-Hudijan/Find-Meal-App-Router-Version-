import createHomePage from "./homePage.js";
import createSearchPage from "./searchPage.js";
import createHintPage from "./hintPage.js";

const routes = [
  { path: "home", page: createHomePage, default: true },
  { path: "search", page: createSearchPage },
  { path: "hint", page: createHintPage },
];

export default routes;
