import { NavLink, useNavigate } from "react-router-dom";
export const Header = () =>{

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/formulario");
    // }

    // const ReturnToIndex = () => {
    //     navigate("/");
    // }

    return <nav id="NavigatorBar">
        <NavLink to="/" className="m-3">Index</NavLink>
        <NavLink to="/formulario" className="m-3">Build Private Ethereum Networks</NavLink>
        {/* <p onClick={ReturnToIndex}>Index</p> */}
        {/* <button onClick={handleClick} className="btn-success">Formulario</button> */}
        <NavLink to="/formulario" className="m-3">Contact</NavLink>
        <NavLink to="/formulario" className="m-3">Company</NavLink>
        <NavLink to="/networks" className="m-3">Networks</NavLink>
    </nav>
}