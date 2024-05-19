import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './configs/theme.ts'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ChakraProvider>,
)
