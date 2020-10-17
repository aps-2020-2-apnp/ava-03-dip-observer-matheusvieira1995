import { Produto } from './Produto'

export class Marketing {
  houveAdicao(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi adicionado`)
  }
  houveRemocao(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi removido`)

  }
  houveCompra(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} comprado(s)`)
  }
  houveAbandono(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} abandonado(s)`)

  }
}
