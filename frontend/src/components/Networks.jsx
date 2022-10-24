import React, { Component } from "react";
import { useEffect, useState } from "react";
import "../style/formulario.less";
const { ethereum } = window;
// const [chainID, setID] = useState(null);
// const [chainName, setName] = useState(null);
class Networks extends Component {
  render() {
    // if (ethereum != undefined) {
    //   useEffect(() => {
    //     GetChainData();
    //   }, []);

    //   ethereum.on("chainChanged", (chainId) => {
    //     GetChainData();
    //   });
    // }

    // async function GetChainData() {
    //   ethereum.request({ method: "eth_chainId" }).then((chainId) => {
    //     setID(chainId);
    //     switch (chainId) {
    //       case "0x1":
    //         return setName("Ethereum Main Network (Mainnet)");
    //       case "0x3":
    //         return setName("Ropsten Test Network");
    //       case "0x4":
    //         return setName("Rinkeby Test Network");
    //       case "0x5":
    //         return setName("Goerli Test Network");
    //       case "0x2a":
    //         return setName("Kovan Test Network");
    //       case "0x89":
    //         return setName("Polygon Matic");
    //       case "0x38":
    //         return setName("Binance Smart Chain");
    //       default:
    //         return setName(chainId);
    //     }
    //   });
    // }

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
          {/* <tr>
            <th scope="row">0</th>
            <td>{chainName}</td>
            <td>{chainID}</td>
            <td>746724875176</td>
            <td>1857</td>
            <td>
              <button type="button" className="btn btn-outline-danger">
                Remove
              </button>
            </td>
          </tr> */}
          <tr>
            <th scope="row">1</th>
            <td>Ethereum</td>
            <td>1</td>
            <td>746724875176</td>
            <td>1857</td>
            <td>
              <button type="button" className="btn btn-outline-danger">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Goerli</td>
            <td>5</td>
            <td>23754821</td>
            <td>1463</td>
            <td>
              <button type="button" className="btn btn-outline-danger">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sepolia</td>
            <td>11155111</td>
            <td>376548723</td>
            <td>7632</td>
            <td>
              <button type="button" className="btn btn-outline-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Networks;
