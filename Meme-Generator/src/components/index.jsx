import { useState, useEffect } from "react";

export default function Index() {
  //1.creating a state for topText, bottomText and ImageUrl properties which comes in an object
  const [meme, SetMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  //this handleChange function is for when the input needs to change the text of top and bottom wherein destructing of objecthas been done and  name key is to be assigned the value that we input through the setMeme which is stored in meme
  function handleChange(event) {
    const { value, name } = event.currentTarget;
    SetMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  //2.creating a state from fetching an api for images wherein the data fetched in stored to image and setImage does the functionality to it. Initial state is an empty array because the data comes in array of objects
  const [image, setImage] = useState([]);

  //using useeffect to handle the side effect that we have while fetching an api and managing state
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImage(data.data.memes));
  }, []);
  //this handleclick is for when the user clicks on getImage button a new image should pop up fetched from the api, here first we need a random number that should be between 0 and the length of the stte variable(image) then we take any variable and access url of that particular image and set the state variable(setMeme) to contain all the properties from the previous meme and set imageUrl to a newMeme url
  function handleCLick() {
    const randomNumber = Math.floor(Math.random() * image.length);
    const newMemeImageUrl = image[randomNumber].url;
    SetMeme((prev) => ({ ...prev, imageUrl: newMemeImageUrl }));
    console.log(image);
  }


  return (
    //onChange and Value are added for making the form component as controlled component to as when the input has got even a slightest change it renders that change and value of the input is to be set by the state variable which here is an object
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
