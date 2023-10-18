import './App.css';
import TipCalculateForm from './Components/Form/TipCalculateForm';
import DisplayResult from './Components/Results/DisplayResult';

function App() {
  return (
    <>
      <header>
        <h2>SPLI<br/>TTER</h2>
      </header>
      <main className='container'>
        <TipCalculateForm />
        <DisplayResult />
      </main>
    </>
  );
}

export default App;
