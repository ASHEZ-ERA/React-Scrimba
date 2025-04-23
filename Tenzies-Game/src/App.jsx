import Die from "./components/Die";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  // we are initializing a state to which we pass genrateAllNewDice function which we need to run only once so that re renders dont happen, here we have not given any parameters if we had to we'd use ()=>generateAllNewDice(someValue). this is called LAZY INITILIZATION
  const [numArr, setNumArr] = useState(genrateAllNewDice);
  //function to generate a random number from 1-6 and making an array of 10 numbers from it
  function genrateAllNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const random = {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      };
      arr.push(random);
    }
    return arr;
  }
  // function for when we click the rollDice button the state changes and the values inside the variable thus change
  // function rollDice(){
  // setNumArr(rgenrateAllNewDice)
  // }

  //this function is for when we want to hold the die so that when we roll the die the selected ones dont get rolled with it
  function rollDice() {
    if (!gameWon) {
      setNumArr((oldDie) =>
        oldDie.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) + 1 }
        )
      );
    } else {
      setNumArr(genrateAllNewDice);
    }
  }

  //one more method to do that is
  // returning a new constructor;
  // return new Array(10).fill(0).Map(()=> Math.ceil(Math.random() * 6))

  //maping over the state numbers array to generate array of Die components
  const diceElemets = numArr.map((dieObject) => (
    <Die
      key={dieObject.id}
      value={dieObject.value}
      isHeld={dieObject.isHeld}
      onClick={() => hold(dieObject.id)}
    />
  ));

  //function to hold the die component when it is to be clicked and holded

  function hold(id) {
    setNumArr((oldDie) => {
      return oldDie.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  //now for the part where we want that after the game is won automatically on clicking tab it should be focusing on the new game button we will use useRef hook
  const buttonRef = useRef(null);

  // checking for when all the dice components are aligned or same we get the button to render new game, Check for two conditions
  // 1. every dice has isheld true
  // 2. every dice has same value

  // this variable gives us a boolean

  const gameWon =
    numArr.every((die) => die.isHeld === true) &&
    numArr.every((die) => die.value === numArr[0].value);

  //for our useRef to work we need it for getting access to the external DOM node but now that we want to synchronise our react to the extrnal system we need useEffect

  // this useEffect has a dependency of gameWon for it will only do its work when the game is won
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! you won press "New Game" to start another one</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElemets}</div>
      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
