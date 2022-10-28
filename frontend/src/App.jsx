import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import { HomeBody } from './components/HomeBody'
import { Home } from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Precios } from './components/Precios'
import { Formulario } from './components/Formulario'
import { Networks } from './components/Networks'
import { ExplorerH } from './components/Explorer/ExplorerH'
import { Balance } from './components/Explorer/Balance'
import { Bloque } from './components/Explorer/Bloque'
import { Tx } from './components/Explorer/Tx'
import { AboutUs } from './components/aboutus';

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
                    <Route path="/networks" element={<Networks />}></Route>
                    <Route path="/precios" element={<Precios />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="*" element="Error 404, aquí no es"></Route>
                    <Route path="/explorerh" element={<ExplorerH />}>
                        <Route path="balance/:address" element={<Balance />}></Route>
                        <Route path="tx/:tx" element={<Tx />}></Route>
                        <Route path="bloque/:bloque" element={<Bloque />}></Route>
                        <Route path="noencontrada" element={<h2>no se puede procesar dato</h2>}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
}