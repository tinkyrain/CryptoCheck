import './App.css'
import Paper from './components/Paper'

const API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true';

fetch(`${API}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

function App() {
  return (
    <main>
      <Paper img={'/IMG/Bitcoin.png'} name={'Bitcoin'} />
      <Paper img={'/IMG/Cardano.png'} name={'Cardano'} />
      <Paper img={'/IMG/Dogecoin.png'} name={'Dogecoin'} />
      <Paper img={'/IMG/Ethereum.png'} name={'Ethereum'} />
    </main>
  );
}

export default App;