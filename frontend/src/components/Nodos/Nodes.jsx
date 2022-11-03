import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { getNodes } from './api'
import { Link } from "react-router-dom";
import { useState } from 'react'

export function Nodes() {

    const params = useParams()
    const {isLoading, isError, data} = useQuery([ params ], getNodes)
    const [Disabled, setDisabled] = useState(false);

    async function AddNode() {
        setDisabled(true);
        var maxNum = 0;
        data.map((item, index)=> {
            if (maxNum < item.nodo) 
                maxNum = item.nodo;
        });
        maxNum+=1;
        await fetch('http://localhost:3334/network/add/'+data[0].network+'/'+maxNum, {
            method: 'POST',
            body: new FormData()
        }).then(res => alert("¡Nodo creado correctamente!"));
        setDisabled(false);
        // window.location.reload()
    }

    async function DeleteNode(num){
        setDisabled(true);
        await fetch('http://localhost:3334/node/'+data[0].network+'/'+num, {
            method: 'DELETE',
            body: new FormData()
        });
        setDisabled(false);
        window.location.reload()
    }

    async function LaunchNode(){
        setDisabled(true);
        const res = await fetch('http://localhost:3334/node/launch/'+data[0].network, {
            method: 'POST',
            body: new FormData()
        });
        console.log(res)
        setDisabled(false);
        // window.location.reload()
    }

    function LaunchButton(props) {
        if (props.nodeId == 1) {
            return <td><button type="button" onClick={() => LaunchNode()} className="btn btn-outline-success">Launch node</button></td>;
        }
    }

    function DeleteButton(props) {
        const Id = props.nodeId;
        if (Id != 1) {
            return <td><button type="button" onClick={() => DeleteNode(props.nodeId)} className="btn btn-outline-danger">Delete node</button></td>;
        }
    }




    if (isLoading)
        return <h1>Cargando</h1>
    
        if (isError)
        return <h1>Error</h1>   

    return <div>
            <h2 className="m-4 text-center">Node list of the network: {data[0].network}</h2>
            <h5 className="m-4 text-center">ChainID: {data[0].chainId}</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Node</th>
                        <th>Port</th>
                        <th>Address</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => <tr key={index}>
                        <td><Link to={`/nodes/${item.nodo}`}>{item.nodo}</Link></td>
                        <td>{item.port}</td>
                        <td>{item.address.map((cuenta) => <div key={cuenta}>0x{cuenta}</div>)}</td>
                        <LaunchButton nodeId={item.nodo}/>
                        <DeleteButton nodeId={item.nodo} />
                    </tr>)
                    }
                </tbody>
            </table>
            <button type="button" onClick={AddNode} disabled={Disabled} className="btn btn-outline-primary m-3 d-flex m-auto">Add new node</button>
    </div>
}