import { useQuery } from "react-query"

const listaNetworkLocal = async () => {
    return [
        { chainId: 44456, cuenta: "0x...", numero: 1 },
        { chainId: 44457, cuenta: "0x...", numero: 1 }
    ]
}

const listaNetwork = async () => {
    const response = await fetch("http://localhost:3334/network")
    const datos = await response.json();
    return datos;
}

export const NetworkList = () => {
    const { data, isLoading } = useQuery(["redes"], listaNetwork)
    if (isLoading) return <p>Cargando</p>
    return <div>
        <p>Lista de redes</p>
        <table className="table">
            <thead>
                <tr>
                    <th>numero</th>
                    <th>chainId</th>
                    <th>cuenta</th>

                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => <tr key={index}>
                        <td>{item.numero}</td>
                        <td>{item.chainid}</td>
                        <td>{item.cuentas.map((cuenta, index2) => <div>{cuenta}</div>)}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}