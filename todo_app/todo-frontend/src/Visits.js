import axios from "axios";
import React, { useEffect, useState } from "react";

const Visits = () => {
  const [ visits, setVisits ] = useState('')
  const logoutURL = process.env.REACT_APP_API_LOGOUT_URL

  useEffect(() => {
    getVisits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVisits = () => {
    console.log('getting visits from pingpong api');
    axios(`${logoutURL}/pongs`)
      .then(res => {
        console.log('setting visits to state');
        setVisits(res.data)
      })
  }

  return <h3>{visits}</h3>
}

export default Visits;