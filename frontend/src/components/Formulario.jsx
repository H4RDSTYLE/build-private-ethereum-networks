import "../style/formulario.less"
import { useState } from 'react'

export const Formulario = () => {

  const [networkNumber, setNumber] = useState(0);
  const [Disabled, setDisabled] = useState(false);
  async function CreateNetwork() {
    setDisabled(true);
    await fetch('http://localhost:3334/network/create/'+networkNumber+'/1', {
        method: 'POST',
        body: new FormData()
    }).then(res => alert("¡Red creada correctamente!"));
    setDisabled(false);
    // window.location.reload()
  }
  
  return <div id="CrearRedes">
      <form id="FormCrearRed" className="row needs-validation" noValidate>
        <div className="col-6">
          <label htmlFor="validationCustom02" className="form-label">Chain ID</label>
          <input type="number" value={networkNumber} onChange={e => setNumber(e.target.value)} min="0" className="form-control" id="validationCustom02" required></input>
        </div>
        <div className="col-6">
          <button type="button" onClick={CreateNetwork} className="btn btn-outline-success" disabled={Disabled}>Create my own Blockchain</button>  </div>
      </form>
    </div>
}

export default Formulario;