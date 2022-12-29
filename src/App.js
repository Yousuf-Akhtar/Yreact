import CollapsibleExample from "./components/Header";
import AddWorks from "./components/AddWork.js";
import Work from "./components/Modal";
import React, { useState } from "react";

function App() {
  // const onDelete = (sno) => {
  //   console.log(data.sno)
  //   let id = data.sno
  //   console.log(id)
  // };

  // function onDelete(){
  //   console.log (data.sno)
  // }
  const addWork = (title, work) => {
    let sno = data[data.length - 1].sno + 1;
    const job = {
      sno: sno,
      title: title,
      work: work,
    };

    setData([...data, job]);
    console.log(data);
  };

  const [data, setData] = useState([
    {
      sno: 1,
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
        return <Work key={i} data={d}  />;
      })}
    </>
  );
}

export default App;
