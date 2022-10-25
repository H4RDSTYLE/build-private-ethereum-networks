import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
import { Precios } from "./components/Precios"
import {HomeBody} from "./components/HomeBody"

export function Home() {
    return <div className="container">
            <Header></Header>
            <HomeBody></HomeBody>
            <Precios></Precios>
            <Footer></Footer>
            </div>
            

}