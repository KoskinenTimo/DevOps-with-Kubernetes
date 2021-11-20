import axios from "axios";
import React, { useEffect, useState } from "react";

const Visits = () => {
  const [ visits, setVisits ] = useState('')
  const pingpongURI = process.env.REACT_APP_API_PINGPONG_URI

  useEffect(() => {
    getVisits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVisits = () => {
    console.log('getting visits from pingpong api');
    axios(`${pingpongURI}/visits`)
      .then(res => {
        console.log('setting visits to state');
        setVisits(res.data.visits)
      })
  }

  return <h3>Visits: {visits}</h3>
}

export default Visits;