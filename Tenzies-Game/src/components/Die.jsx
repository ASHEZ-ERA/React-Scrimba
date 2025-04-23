export default function Die(props){

    const styles ={
    backgroundColor: props.isHeld === true ? "#59E391" : "white"
    }

    return (
      <button
        style={styles}
        className="die-button"
        onClick={props.onClick}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value},
          ${props.isHeld ? "held": "not held"}`}
      >
        {props.value}
      </button>
    );
}