import { useState } from "react";
function Jokes({setup, punchline}){
  //using useState to manipulate the current state of the punchline to whether to show it or not
const [showPuncline,setShowPuncline] = useState(false)

function handleClick(){
  // setting the current state onclicking the button the opposite of the current state
  setShowPuncline(prevState => !prevState)
}
    return (
      <>
        <p>{setup}:</p>
        //conditionally rendering as in if the state is TRUE then and then only show punchline otherwise dont
        {showPuncline && <p>{punchline}</p>}

        // Using Ternary Operator to measure the behaviour of the button as in if state is true then show the punchline and change text to Hide and viceversa
        {showPuncline === true ? (
          <button onClick={handleClick}>HIDE PUNCHLINE</button>
        ) : (
          <button onClick={handleClick}>SHOW PUNCHLINE</button>
        )}
        <hr />
      </>
    );
}

export default Jokes