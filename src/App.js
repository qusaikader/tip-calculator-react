import { useState } from 'react';
import './App.css';
import TipCalculateForm from './Components/Form/TipCalculateForm';
import DisplayResult from './Components/Results/DisplayResult';

function App() {

  const [data, setData] = useState();


  return (
    <>
      <header>
        <h2>SPLI<br/>TTER</h2>
      </header>
      <main className='container'>
        <TipCalculateForm dataHandler = {setData}/>
        <DisplayResult finalData = {data} />
      </main>
    </>
  );
}

export default App;
