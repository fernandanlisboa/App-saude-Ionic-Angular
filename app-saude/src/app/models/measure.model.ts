export interface Measure{
  peso: number,
  altura: number,
  dataHora: Date,
  imc:{
    valor: number,
    classificacao: string
  }
}
