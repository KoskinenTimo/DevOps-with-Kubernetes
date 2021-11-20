import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const TimeStamp = () => {
  const [ timeStamp, setTimeStamp ] = useState('');
  const [ id ] = useState(uuidv4())
  const todoURI = process.env.REACT_APP_API_TODO_URI;

  useEffect(() => {
    getTimeStamp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTimeStamp = () => {
    console.log('getting timestamp from todo api');
    axios(`${todoURI}/timestamp`)
    .then(res => {
      console.log('setting timestamp to state');
      setTimeStamp(res.data);
    })
    .catch(e => console.log(e))
  }
  return <h3>{timeStamp}: {id}</h3>
}

export default TimeStamp;