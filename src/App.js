import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Paper from './components/Paper'

const API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true';

function App() {

  const dispatch = useDispatch();

  fetch(`${API}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dispatch({type: 'ADD_PRICE_BITCOIN', priceChange: data.bitcoin.usd});
    dispatch({type: 'ADD_PRICE_CARDANO', priceChange: data.cardano.usd});
    dispatch({type: 'ADD_PRICE_DOGECOIN', priceChange: data.dogecoin.usd});
    dispatch({type: 'ADD_PRICE_ETHEREUM', priceChange: data.ethereum.usd});
  })

  return (
    <main>
      <Paper img={'/IMG/Bitcoin.png'} name={'Bitcoin'} price={useSelector(state => state.Bitcoin)}/>
      <Paper img={'/IMG/Cardano.png'} name={'Cardano'} price={useSelector(state => state.Cardano)}/>
      <Paper img={'/IMG/Dogecoin.png'} name={'Dogecoin'} price={useSelector(state => state.Dogecoin)}/>
      <Paper img={'/IMG/Ethereum.png'} name={'Ethereum'} price={useSelector(state => state.Ethereum)}/>
    </main>
  );
}

export default App;