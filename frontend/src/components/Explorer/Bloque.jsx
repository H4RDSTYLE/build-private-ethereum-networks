import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { getBlock } from './api'
import {Link} from 'react-router-dom'


export function Bloque() {

    const params = useParams()
    const {isLoading, isError, data} = useQuery(['bloque', params.bloque ], getBlock)


    if (isLoading)
        return <h1>Cargando</h1>
    
        if (isError)
        return <h1>Error</h1>   

    return  <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Lista de transacciones.</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.transactions.map((item,index) => 
                        <tr key={index}>
                            <td>
                            <Link to={`/ExplorerH/Tx/${item}`}>{item}</Link>    
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    
    <pre>
        {JSON.stringify(data.transactions)}
        {JSON.stringify(data, null, 4)}
    </pre>
    </div>
}