/**
 * encapsula la informacion del detalle de ventas
 */
export interface DetalleVentas {
    pddempresa:    string;
    pddclase:      string;
    pddtipo:       string;
    pddproduct:    string;
    pddunidad:     string;
    pddcatalog:    string;
    pddpadre:      string;
    pddprotipo:    string;
    pddtipoprecio: string;
    procodigo:     null;
    proiva:        null;
    prounidad:     null;
    pddbajado:     string;
    proactivo:     null;
    prosnuni2:     null;
    pddnumero:     number;
    pddreg:        number;
    pddcant_pd:    number;
    pddprecio:     number;
    pddcambio:     number;
    pddporiva:     number;
    pddpreciob:    number;
    pdddesc:       number;
    pddcant_pd2:   number;
    pddfactor:     number;
    proporiva:     null;
    proestampi:    null;
    procantidad:   null;
    pddbajafec:    string;
    pddnota:       string;
    pddbodega:     string;
    pronombre:     null;
    probodega:     null;
    promarca:      null;
    prolinea:      null;
}
