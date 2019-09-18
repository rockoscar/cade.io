import { Cambio } from "../cambio/cambio";
import { User } from "../usuario/usuario";

export class Formula {
  constructor(public lote: String,
              public codigo: String,
              public usuario: User,
              public cambio?: Cambio,
              public cambio1?: Cambio,
              public cambio2?: Cambio,
              public cambio3?: Cambio,
              public cambio4?: Cambio,
              public cambio5?: Cambio,
              public cambio6?: Cambio,
              public cambio7?: Cambio,
              public cambio8?: Cambio,
              public cambio9?: Cambio,
              public status?: String,
              //campos para los reportes
              public ncambios?: Number,
              public rechazos?: Number,
              public aprobada?: Number,
              public fechaLIb?: Date,
              public horaLIb?: Date,
              public c1?: String,
              public c2?: String,
              public c3?: String,
              public c4?: String,
              public c5?: String,
              public c6?: String,
              public c7?: String,
              public c8?: String,
              public c9?: String,
              public c10?: String,

              
    ) {}
}
