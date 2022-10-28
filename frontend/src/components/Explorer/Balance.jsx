import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { getBalance } from './api'

export function Balance() {
    const params = useParams()
    const {isLoading, isError, data} = useQuery(['balance', params.address ], getBalance)


    if (isLoading)
        return <h1>Cargando</h1>
    
        if (isError)
        return <h1>Error</h1>   

    return <pre>
        {JSON.stringify(data, null, 4)}
    </pre>

   
}