import { useNavigate, Outlet } from "react-router-dom"
import { useForm } from "react-hook-form"

export function ExplorerH() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()
    const submitForm = (data) => {
       // IF LONGITUD == 66 --> TX
       // IF LONGITUD == 42 --> ADDRESS
       // IF ES UN NUMERO ---> BLOQUE
        if (data.data.length == 66)
            navigate(`tx/${data.data}`) 
        if (data.data.length == 42)
            navigate(`balance/${data.data}`)
        if (/^\d+\.?\d*$/.test(data.data))
            navigate(`bloque/${data.data}`)
    }

    return <div className="container">
        <h2 className="text-center">Explorador de la cadena de ethereum</h2>
        <form className="d-flex justify-content-center gap-1" onSubmit={handleSubmit(submitForm)} >
            <input {...register("data")} size={70}></input>
            <button className="btn btn-primary">Go</button>
        </form>
        <div className="border my-3 p-2">
           <Outlet/>
        </div>
    </div>
}