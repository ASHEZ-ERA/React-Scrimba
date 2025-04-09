import { useState, useEffect } from "react";

export default function Index() {
  //creating a state for topText, bottomText and ImageUrl properties which comes in an object
  const [meme, SetMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  //creating a state from fetching an api for images
  const [image, setImage] = useState([]);

  //using useeffect to handle the side effect that we have while fetching an api and managing state
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImage(data.data.memes));
  }, []);

  function handleCLick() {
    const randomNumber = Math.floor(Math.random() * image.length);
    const newMemeImageUrl = image[randomNumber].url;
    SetMeme((prev) => ({ ...prev, imageUrl: newMemeImageUrl }));
    console.log(newMemeImageUrl);
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    SetMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={handleCLick}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
