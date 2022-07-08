export interface Producto {
    productoPk:  ProductoPk;
    pronombre:   string;
    proiva:      string;
    proporiva:   number;
    proestampi:  number;
    prounidad:   string;
    proactivo:   number;
    procantidad: number;
    promarca:    string;
    prolinea:    string;
    prosnuni2:   null;
}

export interface ProductoPk {
    procodigo: string;
    probodega: string;
}
