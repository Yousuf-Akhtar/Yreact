import CollapsibleExample from "./components/Header";
import AddWorks from "./components/AddWork.js";
import Work from "./components/Modal";
import About from "./components/About";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('data'));
    if(localStorageData){
      setData(localStorageData)
    }
  }, []);


  

  const addWork = (title, work) => {
    let sno;
    if (data.length > 0) {
      let previousSno = data[data.length - 1].sno;
      sno = previousSno + 1;
    } else {
      sno = 1;
    }
    const job = {
      sno: sno,
      title: title,
      work: work,
    };
    //  console.log(job)
    
    setData([...data, job])
    localStorage.setItem('data', JSON.stringify([...data, job]));
    // if(localStorage.getItem("data")){
    //   localStorage.setItem("data",JSON.stringify(data))
    // }
    // console.log(data);
  };

  const deleteWork = (sno) => {
    setData([...data].filter((data) => data.sno !== sno));
    localStorage.setItem("data",JSON.stringify([...data].filter((data) => data.sno !== sno)));
  };

  return (
    <>
      <Router>
        {/* Header */}
        <CollapsibleExample />

        <Switch>
          <Route exact path="/">
            <AddWorks addWork={addWork} />
            {data.length > 0 ? (
              data.map((d, i) => {
                return <Work key={i} data={d} onDelete={deleteWork} />;
              })
            ) : (
              <h1 className="text-center m-3 text-white">No Work Here</h1>
            )}
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
