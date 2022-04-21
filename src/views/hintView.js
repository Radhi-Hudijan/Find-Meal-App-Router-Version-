function createHintView(props) {
  const root = document.createElement("div");
  root.className = "home-container";
  root.innerHTML = String.raw`
    <h2>${props.title}</h2>

<img src="./public/logo.jpg" alt="logo" width="200" height="200">
    <p>This app is developed as a part of Hack Your Future program</p>

    <p>Below are examples of what you search for :</p>
    
    <div class ="hint-examples">
         <div class="example">
             <p>Example of categories:</p>
               <ul >
                 <li>Beef</li>
                 <li>Breakfast</li>
                 <li>Chicken</li>
                 <li>Dessert</li>
                 <li>Lamb</li>
                 <li>Side</li>
               </ul>
        </div>
        <div class="example">
             <p>Example of ingredients:</p>
               <ul >
               <li>Pita Bread</li>
                 <li>Egg</li>
                 <li>Chicken</li>
                 <li>Salmon</li>
                 <li>Milk</li>
                 <li>Almond</li>
               </ul>
        </div>
        <div class="example">
             <p>Example of Areas:</p>
               <ul >
               <li>Russian</li>
                 <li>Spanish</li>
                 <li>Tunisian</li>
                 <li>Turkish</li>
                 <li>Vietnamese</li>
                 <li>Mexican</li>
               </ul>
        </div>

    </div>
    <div class="buttons">
      <a href="#search" class ="home-btn">Return To Search </a>
    </div>
  `;

  // const update = (state) => {
  //   // Replace with your own code to handle view updates that depend on
  //   // the state, or remove this function altogether if no such updates
  //   // are required.
  // };

  return { root };
}

export default createHintView;
