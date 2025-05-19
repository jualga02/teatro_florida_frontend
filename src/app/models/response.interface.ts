export interface Response {
    id:              number;
    email:           string;
    precio:          number;
    ocupado:         boolean;
    numerodeasiento: number;
    fecha:           Fecha;
    nombre:          string;
    apellidos:       string;
    titulofuncion:   string;
    fechafuncion:    Fecha;
}

export interface Fecha {
    date:          Date;
    timezone_type: number;
    timezone:      string;
}

