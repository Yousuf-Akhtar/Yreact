
import CollapsibleExample from './components/Header';
import Main from './components/Main';
import Work from "./components/Modal";

function App() {
  let data = [
    {
      title: "Eat",
      Sno: 1,
      work: "Have to Eat",
    },
    {
      title: "Drink",
      Sno: 2,
      work: "Have to Drink",
    },
    {
      title: "Drink 3" ,
      Sno: 3,
      work: "Have to Drink 3",
    },
    ];
  return (
    <>
    {/* Header */}
    <CollapsibleExample/> 
    
    <Main/>

 
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
