import { React, useContext } from "react";
import { color, data } from "./App";
function Childxc() {
  const { name, getDay } = useContext(data);
  const day = "sunday";
  const textcolor = useContext(color);
  return (
    <>
      Childxc<h1 style={{ color: textcolor }}>my name is {name}</h1>
      <button onClick={() => getDay(day)}>click Me</button>
    </>
  );
}

export default Childxc;
