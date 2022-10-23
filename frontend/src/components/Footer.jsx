import { NavLink, useNavigate } from "react-router-dom";
import SocialButtons from "./SocialButtons";

export const Footer = () =>{
    return <footer>
        <NavLink to="/" className="m-3">Home</NavLink>
        <NavLink to="/" className="m-3">About Us</NavLink>
        <NavLink to="/" className="m-3">Privacy</NavLink>
        <NavLink to="/" className="m-3">Terms and Conditions</NavLink>
        <SocialButtons />
    </footer>
}