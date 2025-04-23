import React from "react";
import Claude from "./ClaudeRecipe";
import IngredientList from "./ingredientList";
import { getRecipeFromMistral } from "../ai";
function Main() {
  //created a state for managing the input ingredients
  const [ingredient, SetIngredient] = React.useState([]);

  //created an action click event that takes formData as parameter wherein created a newIngredentList variable and stored the data acquired from the form of every input named as ingredient and then set the current state varaible to showcase the newIngredientList that contains the current inputted value and all the preious values
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    SetIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  //state management for when the button show recipe is clicked
  const [recipe, setRecipe] = React.useState("");
  //this useRef is used to let you access DOMnodes, have no re renders is mutable and lets you track state
  const recipeSection = React.useRef(null)
//
  React.useEffect(()=>{
      if(recipe !== "" && recipe !== null){
        recipeSection.current.scrollIntoView()
      }
  },[recipe])
  //handeling click for when a user presses get the recipe button which is to be asynchronous for it takes data from a third party / we should use useEffect for such case
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredient);

    setRecipe(recipeMarkdown);
  }

  return (
    //1. FORM ACTION=: used action click event so that i wont be worrying about rerendering/reseting/or hardcoding the formData to new FormData using onSubmit
    //2. Conditional Rendering &&: used conditional rendering for both the <section> which holds the ingredient list as well as <div> inside the <section> to have a condition to when they should render or display their content.
    //3. Also with conditional rendering rendered the instances of INgredientList And Claude which holds the data, passing them the props as in the names so that in the component they can be accesed from a parent node
    <>
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
          <IngredientList 
          ref={recipeSection}
          ingredient={ingredient} getRecipe={getRecipe} />
        )}
        {recipe && <Claude recipe={recipe} />}
      </main>
    </>
  );
}

export default Main;
