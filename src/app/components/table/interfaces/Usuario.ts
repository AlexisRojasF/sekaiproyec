export interface Usuario {
    usucodigo:  string;
    usucatvent: string;
    usucontra:  string;
    usutipo:    string;
    usudocumen: string;
    usuvende:   string;
    usunombre:  string;
    usuactivo:  number;
    usubloqcat: number;
    usuagenda:  number;
    usuimprime: number;
    usucaraut:  number;
    usuvolumen: string;
}


export interface Catalogos {
    catcodigo:  string;
    catnombre:  string;
    catactivo:  number;
    catalias:   string;
    catmindias: number;
    catmaxdias: number;
}

export  interface  tipoVendedor{
    name:string,
    code:string
}

