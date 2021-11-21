import React from "react";

const Greeting = () => {
  return <h3>{process.env.REACT_APP_MESSAGE}</h3>
}

export default Greeting;