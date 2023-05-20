import React, { createContext, useState } from "react";
import Childa from "./Childa";
const data = createContext("");
const color = createContext("");
function App() {
  const name = "kapil";
  const getDay = (item) => {
    setDay(item);
  };
  const [day, setDay] = useState("Monday");
  return (
    <div>
      <data.Provider value={{ name, getDay: getDay }}>
        <color.Provider value="green">
          <h1>app components {day}</h1>
          <Childa />
        </color.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, color };
