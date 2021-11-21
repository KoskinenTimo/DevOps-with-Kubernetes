import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageLoader = () => {
  const [ image, setImage ] = useState(null);  
  const todoURL = process.env.REACT_APP_API_TODO_URL;

  useEffect(() => {
    getImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImage = () => {
    console.log('getting image from todo api');
    axios(`${todoURL}/randomimg`, {responseType: 'blob'})
      .then(res => {
        console.log('setting image url to state');
        const imgURL = URL.createObjectURL(res.data);
        setImage(imgURL);
      })
      .catch(e => console.log(e))
  }

  if (!image) {
    return <h1>no image</h1>
  }
  return <img src={image} alt="random text" />
}

export default ImageLoader;