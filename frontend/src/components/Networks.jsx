import { useQuery } from "react-query"

export const Networks = () => {

    async function DeleteNetwork(NetworkId) {
        var id = NetworkId.split("eth").pop();
        await fetch('http://localhost:3334/network/' + id, {
            method: 'DELETE',
        }).then(window.location.reload());
      }
    
    //   async function DeleteAllNetworks() {
    //     var lista = await listaNetwork();
    //     lista.map(async (item, index) => {
    //         await fetch('http://localhost:3334/network/' + item.numero.split("eth").pop(), {
    //             method: 'DELETE',
    //         });
    //     });
    //     window.location.reload();
    // }
    
    const listaNetwork = async () => {
        const response = await fetch("http://localhost:3334/network");
        const datos = await response.json();
        return datos;
    }

    const { data, isLoading } = useQuery(["redes"], listaNetwork)

    if (isLoading) return <p>Loading...</p>
    else {
        if (data.length == 0) {
            return <div>
                <h1 id="NoNetworksMessage">There are no existing networks</h1>
            </div>
        } else {
            return <div>
            <h2>Networks list</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Network</th>
                        <th>Chain Id</th>
                        <th>Account</th>
                        {/* <th><button type="button" onClick={DeleteAllNetworks} className="btn btn-outline-danger">Delete all</button></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => <tr key={index}>
                            <td>{item.numero}</td>
                            <td>{item.chainid}</td>
                            <td>{item.cuentas.map((cuenta) => <div key={cuenta}>0x{cuenta}</div>)}</td>
                            <td><button type="button" onClick={() => DeleteNetwork(item.numero)} className="btn btn-outline-danger">Delete network</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        }
    }
    
}