import Paper from './components/Paper';
import Error from './components/Error';
import Loader from './components/Loader'

import { useEffect, useState } from 'react';

const API = 'https://api.coinlore.net/api/tickers/?limit=4';

function App() {

  const [error, setError] = useState(null); //Стейт с ошибками
  const [isLoaded, setLoaded] = useState(false); //Стейт загрузки
  const [response, setResponse] = useState([]); //Стейт данных

  //При загрузке страницы делаем запрос
  useEffect(() => {
    fetch(`${API}`)
      .then(result => result.json())
      .then((result) => {
        setLoaded(true);
        setResponse(result);
      },
      (error) => {
        setLoaded(true);
        setError(true);
      })
  }, []);

  //Если есть ошибки, то подргружаем компонент ошибки
  if(error){
    return <Error/>
  }
  
  //При загрузке грузим компонент загрузки
  if(!isLoaded) {
    return <Loader/>
  }
  
  //Если всё прошло удачно, то грузим элементы
  return (
    <>
      {response.data.map(item => (
        <Paper data={item}/>
      ))}
    </>
  );
}

export default App;