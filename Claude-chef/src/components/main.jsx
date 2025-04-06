import React from "react";
function Main() {
  const [ingredient, SetNewIngredient] = React.useState([]);

  const ingredientList = ingredient.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  // for on action of form
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    SetNewIngredient((prevIngredient) => [...prevIngredient, newIngredient]);

    console.log(ingredientList);
  }
  // function render(formData){
  // if(ingredient === 0 ){
  //   return null
  // }else{
  //   return formData.get(<section />);

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g ingredient"
          aria-label="Add ingredient"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
      {ingredient.length > 0 && (
        <section>
          <h2>Ingredients on hand</h2>
          <ul className="ingredient-list" aria-label="polite">
            {ingredientList}
          </ul>
          {ingredient.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Main;
