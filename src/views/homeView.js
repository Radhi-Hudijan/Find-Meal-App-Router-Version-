function createHomeView(props) {
  const root = document.createElement("div");
  root.className = "home-container";
  root.innerHTML = String.raw`

<h2>${props.title}</h2>

<img src="./public/logo.jpg" alt="logo" width="200" height="200">
    <p>Click <span>Start</span> to search for food and meals that you like based on your references .
    </p>
    <blockquote>
            Real food doesn't have ingredients, real food is ingredients.<br />
            <cite>- Jamie Oliver</cite>
          </blockquote>

    <div class="buttons">
      <a href="#search" class ="home-btn">Start</a>
    </div>

    <!-- <div class="meal-wrapper">
        <div class="meal-search">
          <h2>${props.title}</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.<br />
            <cite>- Jamie Oliver</cite>
          </blockquote>
          <div class="choice-buttons">
            <button class="home-btn" id="by-category-button">
              Search by Category
            </button>
            <button class="home-btn" id="by-ingredients-button">
              Search By Ingredients
            </button>
            <button class="home-btn" id="by-area-button">Search By Area</button>
          </div>
          </div> -->
  `;

  return { root };
}

export default createHomeView;
