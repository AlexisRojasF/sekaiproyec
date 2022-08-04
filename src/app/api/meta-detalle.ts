export interface MetaDetalle {
    metasDtPk:  MetasDtPk;
    ppvmodelo:  string;
    ppvfecini:  Date;
    ppvfecfin:  Date;
    ppvempresa: string;
    ppvcuenta:  string;
    ppvccosto:  string;
    ppvdestino: string;
    ppvvende:   string;
    ppvcobra:   string;
    ppvzona:    string;
    ppvproduct: string;
    ppvlinea:   string;
    ppvmarca:   string;
    ppvfpago:   string;
    ppvvincula: string;
    ppvvalor:   number;
    ppvporc:    number;
    ppvvalor2:  number;
    ppvporc2:   number;
    ppvcanti:   number;
    ppvvolumen: number;
    ppvactivo:  number;
    ppvnewuser: string;
    ppvnewfec:  Date;
    ppvmoduser: string;
    ppvmodfec:  Date;
}

export interface MetasDtPk {
    ppvcodigo: string;
    ppvreg:    number;
}
