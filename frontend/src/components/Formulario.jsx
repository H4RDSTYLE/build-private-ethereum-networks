import "../style/formulario.less"

export const Formulario = () =>{
  return <><table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Network</th>
        <th scope="col">Chain ID</th>
        <th scope="col">N. Blocks</th>
        <th scope="col">IP: Port</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Ethereum</td>
        <td>1</td>
        <td>746724875176</td>
        <td>1857</td>
        <td><button type="button" className="btn btn-outline-danger">Remove</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Goerli</td>
        <td>5</td>
        <td>23754821</td>
        <td>1463</td>
        <td><button type="button" className="btn btn-outline-danger">Remove</button></td>

      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Sepolia</td>
        <td>11155111</td>
        <td>376548723</td>
        <td>7632</td>
        <td><button type="button" className="btn btn-outline-danger">Remove</button></td>
      </tr>
    </tbody>
  </table><br></br><div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Create your own Private Blockchain!</h4>
      <p className="mb-0">Improve the performance of your company.</p>
      <hr></hr>
    </div><br></br><form className="row g-3 needs-validation" noValidate>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Network Name</label>
        <input type="text" className="form-control" id="validationCustom01" required></input>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Chain ID</label>
        <input type="text" className="form-control" id="validationCustom02" required></input>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustomUsername" className="form-label">Port</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">localhost:</span>
          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
          <div className="invalid-feedback">
            Please choose a valid port.
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">New RPC URL</label>
        <input type="text" className="form-control" id="validationCustom03" required></input>
        <div className="invalid-feedback">
          Please provide a valid RPC URL.
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">Network Type</label>
        <select className="form-select" id="validationCustom04" defaultValue={"choose"} required>
          <option value="choose" disabled>Choose...</option>
          <option value="mainnet" >Mainnet</option>
          <option value="testnet">Testnet</option>
          <option value="development">Development</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid Network Type.
        </div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom05" className="form-label">Currency Symbol</label>
        <input type="text" className="form-control" id="validationCustom05" required/>
        <div className="invalid-feedback">
          Please provide a currency symbol.
        </div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree with terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button type="button" className="btn btn-outline-success">Submit Form</button>  </div>
    </form></>
}

export default Formulario;