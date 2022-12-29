import CollapsibleExample from "./components/Header";
import AddWorks from "./components/AddWork.js";
import Work from "./components/Modal";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      sno: 1,
      title: "Eat",
      work: "Have to Eat",
    },
  ]);
  
  const addWork = (title, work) => {
    let sno;
    if(data.length > 0){
      let previousSno = data[data.length - 1].sno;
      sno = previousSno + 1;
    }
    else{
      sno = 1;
    }
    const job = {
      sno: sno,
      title: title,
      work: work,
    };
    //  console.log(job)

    setData([...data, job]);
    // console.log(data);
  };

   const deleteWork=(sno)=>{
    setData([...data].filter(data => data.sno !== sno));
  };

  useEffect(()=>{
    console.log(data)
  },[data])
  
  return (
    <>
      {/* Header */}
      <CollapsibleExample />

      <AddWorks addWork={addWork} />

      {data.map((d, i) => {
        return <Work key={i} data={d} onDelete={deleteWork}  />;
      })}
    </>
  );
}

export default App;
