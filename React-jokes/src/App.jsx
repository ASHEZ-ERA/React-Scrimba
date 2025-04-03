import Jokes from './components/jokes'
import './App.css'
import jokesData from './jokes';
 
function App() {
  const jokeElement = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  })
  return (
    <>
      {jokeElement}
    </>
  );
}

export default App
