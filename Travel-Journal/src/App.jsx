import './App.css'
import Header from './component/header'
import Entry from './component/entry'
import data from './data'

function App() {
  const travelLog = data.map((d) => {
    return <Entry key={d.id} {...d} />;
  })

  return (  
    <>
      <Header  image={{
        src: "/images/1globe.png",
        alt: "marker"
      }}/>
    
      {travelLog}
    </>
  );
}

export default App
