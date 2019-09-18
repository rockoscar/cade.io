import { User } from "../usuario/usuario";

export class Cambio {
  constructor(
            viscosidad: Number,
            densidad: Number,
            solidos: Number,
            ph: Number,
            finura: Number,
            color: Number,
            poder: Number,
            dureza: Number,
            brillo: Number,
            secadot: Number,
            secadod: Number,
            impacto: Number,
            adherencia: Number,
            humedad: Number,
            flexibilidad: Number,
            peso: Number,
            compatibilidad: Number,
            status: String,
            comentario: String,
            fecha: Date,
            hora: String,
            usuario: User,
            cuentaAnalisis: Number
  ) {}
}