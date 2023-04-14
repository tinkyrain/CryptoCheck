import './App.css'
import Paper from "./components/Paper";

let value = [
  {
    name: null,
    logo: '/IMG/Bitcoin.png',
    price: null
  },

  {
    name: null,
    logo: `/IMG/Ethereum.png`,
    price: null
  },

  {
    name: null,
    logo: `/IMG/Tether.png`,
    price: null
  },

  {
    name: null,
    logo: `/IMG/BNB.png`,
    price: null
  }
];

const KEY = '0d88e84e5022de8205f632f461d1452984c55de7e854a135fa7a389eec92';
const API = `https://api.cryptorank.io/v1/currencies?api_key=${KEY}`;

const getData = async () => {
  const get_url = await fetch(`${API}`);
  const data = await get_url.json();
  for(let i = 0; i < 4; i++){
    value[i].name = data.data[i].name;  
    value[i].price = data.data[i].values.USD.price.toFixed(3);
  }
}

getData();

function App() {
  return (
    <main>
      <Paper info={value[0]}/>
      <Paper info={value[1]}/>
      <Paper info={value[2]}/>
      <Paper info={value[3]}/>
    </main>
  );
}

export default App;