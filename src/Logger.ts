import { Produto } from './Produto'

export class Logger {
  houveAdicao(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi adicionado`)
  }
  houveRemocao(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi removido`)

  }
  houveCompra(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} comprado(s)`)
  }
  houveAbandono(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} abandonado(s)`)

  }
}
