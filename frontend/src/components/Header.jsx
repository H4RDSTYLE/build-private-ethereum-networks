import { NavLink, useNavigate } from "react-router-dom";
export const Header = () =>{

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/formulario");
    // }

    // const ReturnToIndex = () => {
    //     navigate("/");
    // }

    return <nav>
        <NavLink to="/" className="m-3">Index</NavLink>
        <NavLink className="m-3">Build Private Ethereum Networks</NavLink>
        {/* <p onClick={ReturnToIndex}>Index</p> */}
        {/* <button onClick={handleClick} className="btn-success">Formulario</button> */}
        <NavLink to="/formulario" className="m-3">Formulario</NavLink>
    </nav>
}