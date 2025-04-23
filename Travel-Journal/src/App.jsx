import './App.css'
import Header from './component/header'
import Entry from './component/entry'
import data from './data'

function App() {
  // mapped over an array of objects from the data.js file where all the data of my journel was stored hard coded and by mapping over the array iterates over each value from it and returns/renders one Entry component for each value inside the file
  const travelLog = data.map((d) => {
    //in entry component provide a unique key prop to the component to specifically create and retrieve data based on the id and spreads all the other properties from inside the data.js array and passes them as props to entry component 
    return <Entry key={d.id} {...d} />;
  });

  return (
    <>
      <Header
        image={{
          src: "/images/1globe.png",
          alt: "marker",
        }}
      />
    //this is where we inject the mapped list of mapped entry component
      {travelLog}
    </>
  );
}

export default App
