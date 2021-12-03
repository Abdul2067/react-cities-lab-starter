// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

export default function App() {

  const [bigImage, setBigImage] = useState(imagesArr[0].img)
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  const handleClick = (url) => {
    setBigImage(url)
  }
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
      <img
      src={image.img}
      alt={image.city}
      key={index}
      className="thumb"
      onClick={() => handleClick(image.img)}
      />
    )
  })
  console.log("images", images)

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{ images }</div>
        
        <img src={bigImage} id="bigimage" alt='bigImaage'/> 
      </div>
    </div>
  );
}
