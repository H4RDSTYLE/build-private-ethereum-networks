import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import { HomeBody } from './components/HomeBody'
import { NetworkList } from './components/NetworkList'
import { Home } from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Precios } from './components/Precios'
import { Formulario } from './components/Formulario'
import Networks from './components/Networks';

const queryClient = new QueryClient();
export const App = () => {
    return <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody></HomeBody>}></Route>
                    <Route path="/contact" element="contactar"></Route> //TODO! Falta crear este elemento
                    <Route path="/whoami" element="nosotros"></Route> //TODO! Falta crear este elemento
                    <Route path="/formulario" element={<Formulario />}></Route>
                    <Route path="/networkList" element={<NetworkList />}></Route>
                    <Route path="/networks" element={<Networks />}></Route>
                    <Route path="/precios" element={<Precios />}></Route>
                    <Route path="*" element="Error 404, aquí no es"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
}