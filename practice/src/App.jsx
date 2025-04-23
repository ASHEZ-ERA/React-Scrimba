import Die from "./Die";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
export default function App() {
  
    const [dice, SetDice] = useState(genrateDice);

    function genrateDice() {
      let arr = [];
      for (let i = 0; i <= 9; i++) {
        const random = {
          value: Math.ceil(Math.random() * 6),
          id: nanoid(),
          isHeld: false,
        };
        arr.push(random);
      }
      return arr;
    }
    const allNewDice = dice.map((die) => {
      return <Die key={die.id} value={die.value} onClick={() => hold(die.id)}  />;
    });

    function rollDice() {
      if (!gameWon) {
        SetDice((oldDie) =>
          oldDie.map((die) =>
            die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  } else {
    SetDice(genrateDice);
  }
  }

  function hold(id) {
    SetDice((oldDie) =>
      oldDie.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
  )
  );
  }

  const diceSection = useRef(null)
    const gameWon =
      dice.every((die) => die.isHeld === true) &&
      dice.every((die) => die.value === dice[0].value);

    console.log("gameWon", gameWon);

    useEffect(()=>{
      if(gameWon){
      diceSection.current.focus()
      }
    },[gameWon])

    return (
      <>
        <main>
          <div>{gameWon && <p>congratulation</p>}</div>
          <h2>Tenzies</h2>
          <p>this is a game</p>
          <div>{allNewDice}</div>
          <button ref={diceSection} onClick={rollDice}>{gameWon ? "new" : "rolll"}</button>
        </main>
    </>
  );
}
