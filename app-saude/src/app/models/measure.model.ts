export interface Measure{
  peso: number,
  altura: number,
  dataHora: string,
  imc:{
    valor: string,
    classificacao: string
  }
}
