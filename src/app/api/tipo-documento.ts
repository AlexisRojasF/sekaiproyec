export interface TipoDocumento {
    tipoDocumentoPk: TipoDocumentoPk;
    tdcnumerar:      number;
    tdcnumero:       number;
    tdcactivo:       number;
    tdcfecha:        null;
    tdcversion:      string;
    tdcaplicainv:    number;
    tdcexterno:      number;
    tdcnombre:       string;
    tdcbodega:       string;
    tdcpref:         null;
}

export interface TipoDocumentoPk {
    tdcclase: string;
    tdctipo:  string;
}
