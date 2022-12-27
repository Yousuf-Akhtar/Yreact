
import CollapsibleExample from './components/Header';
import AddWorks from './components/AddWork.js';
import Work from "./components/Modal";

function App() {



  
  let data = [
    {
      title: "Eat",
     
      work: "Have to Eat",
    },
    {
      title: "Drink",
     
      work: "Have to Drink",
    },
    {
      title: "Drink 3" ,
      
      work: "Have to Drink 3",
    },
    ];
  return (
    <>
    {/* Header */}
    <CollapsibleExample/> 
    
   <AddWorks/>

 
    {
      data.map((d,i)=>{
        return(
          <Work key={i} data={d}/>
        )
      })
    }
    </>
  );
}

export default App;
