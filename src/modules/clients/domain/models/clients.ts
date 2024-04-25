export class Client{


    private idClientes: number | undefined
    private nombreCliente: string | undefined
    
    public get getIdClient(): number | undefined {
        return this.idClientes
    }
    public set setIdClient( idClientes: number | undefined ){
         this.idClientes = idClientes;
    }


    public get getNameClient(): string | undefined{
        return this.nombreCliente
    }
    public set setNameClient(nombreCliente: string | undefined){
         this.nombreCliente = nombreCliente
    }
}