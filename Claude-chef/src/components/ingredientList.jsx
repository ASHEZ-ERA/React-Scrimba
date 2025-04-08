export default function IngredientList(props) {
  // creating based on ingredient array
  // this variable is not needed in the main so we can bring it up here
  const ingredientList = props.ingredient.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2>Ingredients on hand</h2>
      <ul className="ingredient-list" aria-label="polite">
        {ingredientList}
      </ul>

      {props.ingredient.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
