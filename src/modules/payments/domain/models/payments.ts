export class Payment{

    private idPlazos: number | undefined
    private plazos: number | undefined


    public get getIdPayment(): number | undefined{
        return this.idPlazos;
    }
    public set setIdPayment( idPlazos: number | undefined){
        this.idPlazos = idPlazos;
    }

    public get getPayment(): number | undefined{
        return this.plazos;
    }
    public set setPayment(plazos: number | undefined){
        this.plazos = plazos;
    }
}