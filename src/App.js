import './App.css'
import Paper from "./components/Paper";

function App() {

  //const KEY = '0d88e84e5022de8205f632f461d1452984c55de7e854a135fa7a389eec92';
  //const API = `https://api.cryptorank.io/v1/currencies?api_key=${KEY}`;

  return (
    <main>
      <Paper logo={'/IMG/Bitcoin.png'} name={'Bitcoin'} change={'20 000$'}/>
      <Paper logo={'/IMG/Bitcoin.png'} name={'Bitcoin'} change={'20 000$'}/>
      <Paper logo={'/IMG/Bitcoin.png'} name={'Bitcoin'} change={'20 000$'}/>
      <Paper logo={'/IMG/Bitcoin.png'} name={'Bitcoin'} change={'20 000$'}/>
    </main>
  );
}

export default App;
