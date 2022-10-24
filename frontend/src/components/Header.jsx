import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
const {ethereum} = window

export const Header = () =>{

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/formulario");
    // }

    // const ReturnToIndex = () => {
    //     navigate("/");
    // }
    const [conectar, setConnection] = useState(null)

    async function Connect() {
            if (ethereum != undefined) {
                ethereum.request({ method:'eth_requestAccounts'}).then(cuentas => {
                  console.log(cuentas)
                  console.log(cuentas[0])
                  setConnection(cuentas[0])
                  ethereum.on("accountsChanged", (cuentas) => {
                    if (cuentas.length == 0) {
                        setConnection("Conectar")
                    } else {
                        setConnection(cuentas[0])
                    }
                    console.log("Nueva cuenta detectada: "+cuentas)
                  })

                  ethereum.on('chainChanged', (chainId) => {
                    // Handle the new chain.
                    // Correctly handling chain changes can be complicated.
                    // We recommend reloading the page unless you have good reason not to.
                    console.log("Chain ID: "+chainId);
                  });
                }).catch(function(reason) {
                  // Si cancela la solicitud de conectar Metamask, no hacemos nada.
                });
              } else {
                console.log("No se ha detectado Metamask instalado")
              }
    }

    useEffect(()=>{
        setConnection("Conectar")
    }, [])


    return <nav id="NavigatorBar">
        <NavLink to="/" className="m-3">Index</NavLink>
        <NavLink to="/formulario" className="m-3">Build Private Ethereum Networks</NavLink>
        {/* <p onClick={ReturnToIndex}>Index</p> */}
        {/* <button onClick={handleClick} className="btn-success">Formulario</button> */}
        <NavLink to="/formulario" className="m-3">Contact</NavLink>
        <NavLink to="/formulario" className="m-3">Company</NavLink>
        <NavLink to="/networks" className="m-3">Networks</NavLink>
        <NavLink onClick={(() => Connect())} id="ConnectButton" className="m-3"> { conectar } </NavLink>
    </nav>
}