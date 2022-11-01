export async function getNodes(param) {
    const response = await fetch(`http://localhost:3334/network/procesos/${param.queryKey[0].network}`)
    const data = await response.json()
    //Devuelve un objeto nodo y objeto subproceso
    //Del objeto nodo se pueden sacar:
    //network, nodo, netwrok_dir, dir_node,
    //port, http_port, ipcpath, address
    //chainId, authRpcPort, preFund
    var arr = [];

    console.log(data);
    console.log(data[0])
    data.map(i => {
        arr.push(i.nodo);
    })
    console.log(arr);
    return arr;
}