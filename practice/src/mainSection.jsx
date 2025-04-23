import { useState } from "react";
export default function Main() {
  //create a state for input boxes
  const [meme, setMeme] = useState({
    uppertext: "this is upper text",
    lowertext: "this is lower text",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }
  const [fetchedData, setFetchedData] = useState([]);

  useState(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setFetchedData(data.data.memes));
  },[])

  function handleFetch(){
    const randomNumber = Math.floor(Math.random() * fetchedData.length)
    const newMemeImageUrl = fetchedData[randomNumber].url
    setMeme((prevMeme) => ({
        ...prevMeme,
        imgUrl: newMemeImageUrl
    }))
    console.log(newMemeImageUrl     )
  }
  
  return (
    <>
      <div>
        <label htmlFor="uppertext">
          upper text:
          <input
            type="text"
            name="uppertext"
            onChange={handleChange}
            Value={meme.uppertext}
          ></input>
        </label>
        <label htmlFor="lowertext">
          lower text:
          <input
            type="text"
            name="lowertext"
            onChange={handleChange}
            Value={meme.lowertext}
          ></input>
        </label>
        <button type="click" onClick={handleFetch}>getImage</button>
      </div>
      <div className="div">
        <img src={meme.imgUrl} alt="image"></img>
        <span>{meme.uppertext}</span>
        <span>{meme.lowertext}</span>
      </div>
    </>
  );
}
