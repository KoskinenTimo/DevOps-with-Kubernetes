import React, { useEffect, useState } from "react";
import axios from "axios";

const TimeStamp = () => {
  const [ timeStamp, setTimeStamp ] = useState('');
  const logoutURL = process.env.REACT_APP_API_LOGOUT_URL;

  useEffect(() => {
    getTimeStamp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTimeStamp = () => {
    console.log('getting timestamp from todo api');
    axios(`${logoutURL}/timestamp`)
    .then(res => {
      console.log('setting timestamp to state');
      setTimeStamp(res.data);
    })
    .catch(e => console.log(e))
  }
  return <h3>{timeStamp}</h3>
}

export default TimeStamp;