export class Client{


    private idCliente: number | undefined
    private nombreCliente: string | undefined


    
    public get getIdClient(): number | undefined {
        return this.idCliente
    }
    public set setIdClient( idCliente: number | undefined ){
         this.idCliente = idCliente;
    }


    public get getNameClient(): string | undefined{
        return this.nombreCliente
    }
    public set setNameClient(nombreCliente: string | undefined){
         this.nombreCliente = nombreCliente
    }

}