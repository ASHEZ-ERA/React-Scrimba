import React from "react";
import Claude from "./ClaudeRecipe";
import IngredientList from "./ingredientList";
function Main() {
   //state management for when the button show recipe is clicked
  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggeleRecipe() {
    setRecipeShown((prev) => !prev);
  }
  //state management of form
  const [ingredient, SetNewIngredient] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
 
  
  // for on action on form
      function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");

        SetNewIngredient((prevIngredient) => [
          ...prevIngredient,
          newIngredient,
        ]);
      }
  

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
      {IngredientList.length > 0 &&<IngredientList ingredient ={ingredient}  toggeleRecipe={toggeleRecipe}/>}
      {recipeShown === true && <Claude />}
    </main>
  );
}

export default Main;
