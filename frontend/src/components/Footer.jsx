import { NavLink, useNavigate } from "react-router-dom";

export const Footer = () =>{
    return <footer>
        <NavLink to="/" className="m-3">Home</NavLink>
        <NavLink to="/" className="m-3">Quienes somos</NavLink>
        <NavLink to="/" className="m-3">Privacidad</NavLink>
        <NavLink to="/" className="m-3">Términos y condiciones</NavLink>
        <NavLink to="/" className="m-3">Iconos</NavLink>
    </footer>
}