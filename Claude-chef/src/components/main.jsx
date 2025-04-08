import React from "react";
import Claude from "./ClaudeRecipe";
import IngredientList from "./ingredientList";
import { getRecipeFromMistral } from "../ai";
function Main() {
  //state management for when the button show recipe is clicked
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredient);

    setRecipe(recipeMarkdown)
    
  }
  //state management of form
  const [ingredient, SetNewIngredient] = React.useState([
    
  ]);

  // for on action on form
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    SetNewIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
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
      {IngredientList.length > 0 && (
        <IngredientList ingredient={ingredient} getRecipe={getRecipe} />
      )}
      {recipe && <Claude recipe={recipe}/>}
    </main>
  );
}

export default Main;
