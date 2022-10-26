import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
export const Home = () => {
    return <div id="MainPage">
        <Header></Header>
        <div id="Content" className="container">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>

}
