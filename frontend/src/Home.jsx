import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
export const Home = () =>{
    return <div className="container">
        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>  
}