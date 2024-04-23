export class Amount{


    private idMontos: number | undefined
    private montos: number | undefined


    
    public get getIdAmount(): number | undefined {
        return this.idMontos
    }
    public set setIdAmount( idMontos: number | undefined ){
         this.idMontos = idMontos;
    }


    public get getAmount(): number | undefined{
        return this.montos
    }
    public set setAmount(montos: number | undefined){
         this.montos = montos
    }

}