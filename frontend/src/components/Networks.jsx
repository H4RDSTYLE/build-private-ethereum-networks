import React, { Component } from 'react';
import "../style/formulario.less"


class Networks extends Component {
    render() {
        return (
            <table className="table">
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
  </table>
        );
    }
}

export default Networks;