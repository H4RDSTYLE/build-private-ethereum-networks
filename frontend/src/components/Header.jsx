import { useNavigate } from "react-router-dom";
export const Header = () =>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/formulario");
    }
    return <nav>
        Header
        <button onClick={handleClick} className="btn-success">Formulario</button>
    </nav>
}