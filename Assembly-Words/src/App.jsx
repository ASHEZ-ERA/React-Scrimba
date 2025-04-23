import "./App.css";
import { languages } from "./languages";
import { useState } from "react";
import { clsx } from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
function App() {
  const [word, setWord] = useState(() => getRandomWord());
  const [guessedLetter, setGuessedLetter] = useState([]);

  //for confetti drop
  const { width, height } = useWindowSize();

  //Derived Variables

  const numGuessesLeft = languages.length - 1;

  const wrongGuessCount = guessedLetter.filter(
    (item) => !word.includes(item)
  ).length;
  const isGameWon = word
    .split("")
    .every((item) => guessedLetter.includes(item));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetter[guessedLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !word.includes(lastGuessedLetter);
  console.log(isLastGuessIncorrect);

  //mapping over the array to give us a container for the data inside variable
  const letters = word.split("").map((item, index) => {
    const shouldRevealLetter = isGameLost || guessedLetter.includes(item);
    const itemclassName = clsx(
      isGameLost && !guessedLetter.includes(item) && "missed-letter"
    );
    return (
      <span key={index} className={itemclassName}>
        {shouldRevealLetter ? item.toUpperCase() : ""}
      </span>
    );
  });

  //mapping over the given varaible to give a keyboard which has buttons

  const keyboard = "abcdefghijklmnopqrstuvwxyz";

  //click for keyboard
  //can also be done as const variable = new Set(prevGuess)
  //Variable.add(letter)
  //return Array.from(Variable)
  function onClick(item) {
    setGuessedLetter((prevGuess) =>
      prevGuess.includes(item) ? prevGuess : [...prevGuess, item]
    );
  }

  const setKeyboard = keyboard.split("").map((item, index) => {
    const isGuessed = guessedLetter.includes(item);
    const isCorrect = word.includes(item) && isGuessed;
    const isWrong = isGuessed && !word.includes(item);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        key={index}
        className={className}
        aria-disabled={guessedLetter.includes(item)}
        aria-label={`letter ${item}`}
        onClick={() => onClick(item)}
      >
        {item.toUpperCase()}
      </button>
    );
  });

  // for displaying the languages we could have just done this
  // {languages.map((language) => {
  //   return <div style={language}>{language.name}</div>
  // })}
  //but it is not a good version to do it as it can be only used when object contains only css styles.

  // the version i have done now is much more flexible and can have different properties that can be further modified

  const displayLangauges = languages.map((language, index) => {
    const isLanguageLost =
      index < wrongGuessCount && index <= languages.length - 1;
    // if (isLanguageLost === true) return getFarewellText(language.name);
    // console.log(getFarewellText(language.name)); //this line of code replaces the languages with the text

    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    //=> if you follow this procedure then change className to this as whole
    return (
      <span className={className} key={index} style={styles}>
        {language.name}
      </span>
    );
  });

  const gameStatusClass = clsx("status-section", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  // for showing gamwWon or GameLost
  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>Game Won!😍</h2>
          <p>You Win</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game Over!😒</h2>
          <p>You lose! better start learning Assembly</p>
        </>
      );
    }
  }

  function newGame() {
    setWord(getRandomWord());
    setGuessedLetter([]);
  }
  return (
    <>
      <main>
        {isGameWon && (
          <Confetti
            recycle={false}
            numberOfPieces={1000}
            width={width}
            height={height}
          />
        )}
        <header>
          <h1>Assembly: Words</h1>
          <p>
            Guess the right letters 8 times to save the programming languages of
            the world
          </p>
        </header>

        <section aria-live="polite" role="status" className={gameStatusClass}>
          {renderGameStatus()}
        </section>

        <div className="languages-section">{displayLangauges}</div>

        <div className="letters-section">
          {/* <button onClick={letters}>button</button> */}
          {letters}
        </div>
        {/** Combined visually hidden aria-live regio for status update*/}
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {word.includes(lastGuessedLetter)
              ? `Correct! the letter ${lastGuessedLetter} is in the word`
              : `Sorry, the letter ${lastGuessedLetter} is not in the word`}
            you have ${numGuessesLeft} attempts left.
          </p>
          <p>
            Current word:{" "}
            {word
              .split("")
              .map((item) =>
                guessedLetter.includes(item) ? item + "." : "blank."
              )
              .join(" ")}
          </p>
        </section>

        <div className={isGameOver ? "disable-keyboard" : "keyboard-section"}>
          {isGameOver === false ? setKeyboard : ""}
        </div>
        {isGameOver && (
          <button onClick={newGame} className="newgame-button">
            New Game
          </button>
        )}
      </main>
    </>
  );
}

export default App;
