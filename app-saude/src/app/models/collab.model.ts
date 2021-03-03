import { Measure } from "./measure.model";

export interface Collab{
  id: string,
  email: string,
  dataNascimento: Date,
  medida: Measure,
  historicoMedidas: Measure[]

}
