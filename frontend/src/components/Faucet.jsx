import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
const { ethereum } = window


export function Faucet() {
  const [cuenta, setCuenta] = useState(null)
  const [saldo, setSaldo] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function enviarEth(){
    setIsLoading(true)
    const response = await fetch(`http://localhost:3334/faucet/enviar/${cuenta}`)
    if (response.status == "200"){
    const datos = await response.json();
    await buscarSaldo(cuenta)
    setIsLoading(false)

    }
  }
  
  async function buscarSaldo(cuenta) {
    const response = await fetch(`http://localhost:3334/faucet/balance/${cuenta}`)
    if (response.status == "200"){
    const datos = await response.json();
    setSaldo(datos)
  }
}

  useEffect(() => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(cuentas => {
      setCuenta(cuentas[0])
      buscarSaldo(cuentas[0])

      ethereum.on("accountsChanged", (cuentas)=>{
        setCuenta(cuentas[0])
        buscarSaldo(cuentas[0])
      })
    });

  },[])

  return (
    <div className="container">
      <div>Cuenta: {cuenta}</div>
      <div>Saldo = {JSON.stringify(saldo)}</div>
      {!isLoading && <button onClick={()=> enviarEth()} className='mt-3 btn btn-primary'>Enviar 1 ETH</button>}
      {isLoading && <div>Se esta realizando la tx</div>}
  </div>
  )
}

export default Faucet