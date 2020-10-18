export class Produto {
  readonly codigo: number
  readonly descricao: string
  preco: number

  constructor(codigo: number, descricao: string, preco: number = 10) {
    this.codigo = codigo
    this.descricao = descricao
    this.preco = preco
  }
}
