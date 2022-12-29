import CollapsibleExample from "./components/Header";
import AddWorks from "./components/AddWork.js";
import Work from "./components/Modal";
import React, { useState } from "react";

function App() {
  const addWork = (title, work) => {
    const job = {
      title: title,
      work: work,
    };

    setData([...data, job]);
  };

  const [data, setData] = useState([
    {
      title: "Eat",

      work: "Have to Eat",
    },
 
  ]);
  return (
    <>
      {/* Header */}
      <CollapsibleExample />

      <AddWorks addWork={addWork} />

      {data.map((d, i) => {
        return <Work key={i} data={d} />;
      })}
    </>
  );
}

export default App;
