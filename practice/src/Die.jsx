export default function Die(props){
    return (
      <>
        <button onClick={props.onClick} className="die-button">{props.value}</button>
      </>
    );
}