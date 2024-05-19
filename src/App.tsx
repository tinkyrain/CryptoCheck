import './App.css'
import CoinList from './pages/CoinList/CoinList'
import {Route, Routes} from "react-router-dom";
import CoinData from "./pages/CoinData/CoinData.tsx";

const App = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<CoinList/>}/>
                <Route path='coin/:id' element={<CoinData/>}/>
            </Routes>
        </>
    )
}

export default App
