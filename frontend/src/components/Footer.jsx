import { NavLink, useNavigate } from "react-router-dom";
import SocialButtons from "./SocialButtons";

export const Footer = () =>{
    return <footer>
        <NavLink to="/" className="m-3">Home</NavLink>
        <NavLink to="/" className="m-3">Quienes somos</NavLink>
        <NavLink to="/" className="m-3">Privacidad</NavLink>
        <NavLink to="/" className="m-3">Términos y condiciones</NavLink>
        <SocialButtons />
    </footer>
}