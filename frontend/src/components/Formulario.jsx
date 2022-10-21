export const Formulario = () =>{
  return <><table class="table">
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
        <td><button type="button" class="btn btn-outline-danger">Remove</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Goerli</td>
        <td>5</td>
        <td>23754821</td>
        <td>1463</td>
        <td><button type="button" class="btn btn-outline-danger">Remove</button></td>

      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Sepolia</td>
        <td>11155111</td>
        <td>376548723</td>
        <td>7632</td>
        <td><button type="button" class="btn btn-outline-danger">Remove</button></td>
      </tr>
    </tbody>
  </table><br></br><div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Create your own Private Blockchain!</h4>
      <p class="mb-0">Improve the performance of your company.</p>
      <hr></hr>
    </div><br></br><form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Network Name</label>
        <input type="text" class="form-control" id="validationCustom01" value="" required></input>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Chain ID</label>
        <input type="text" class="form-control" id="validationCustom02" value="" required></input>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustomUsername" class="form-label">Port</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">localhost:</span>
          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
          <div class="invalid-feedback">
            Please choose a valid port.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">New RPC URL</label>
        <input type="text" class="form-control" id="validationCustom03" required></input>
        <div class="invalid-feedback">
          Please provide a valid RPC URL.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Network Type</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>Mainnet</option>
          <option>Testnet</option>
          <option>Development</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid Network Type.
        </div>
      </div>
      <div class="col-md-2">
        <label for="validationCustom05" class="form-label">Currency Symbol</label>
        <input type="text" class="form-control" id="validationCustom05" required></input>
        <div class="invalid-feedback">
          Please provide a currency symbol.
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button type="button" class="btn btn-outline-success">Submit Form</button>  </div>
    </form></>
}
