import { useState } from 'react';
import './App.css';
import TipCalculateForm from './Components/Form/TipCalculateForm';
import DisplayResult from './Components/Results/DisplayResult';

function App() {

  const [data, setData] = useState();
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
  };

  const handleResetComplete = () => {
    setReset(false);
  };

  return (
    <>
      <header>
        <h2>SPLI<br/>TTER</h2>
      </header>
      <main className='container'>
        <TipCalculateForm dataHandler = {setData} reset={reset} resetComplete={handleResetComplete}/>
        <DisplayResult finalData = {data} resetAll={handleReset} />
      </main>
    </>
  );
}

export default App;
