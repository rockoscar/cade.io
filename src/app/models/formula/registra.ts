import { User } from "../usuario/usuario";

export class RegistraFormula {
  constructor(public lote: String,
              public codigo: String,
              
              public viscosidad: Number,
              public densidad: Number,
              public solidos: Number,
              public ph: Number,
              public finura: Number,
              public color: Number,
              public poder: Number,
              public dureza: Number,
              public brillo: Number,
              public secadot: Number,
              public secadod: Number,
              public impacto: Number,
              public adherencia: Number,
              public humedad: Number,
              public flexibilidad: Number,
              public peso: Number,
              public compatibilidad: Number,
              public status: String,
              public comentario: String,
              public fecha: String,
              public hora: String,
              public usuario: User,
              public operador: String

    ) {}
}