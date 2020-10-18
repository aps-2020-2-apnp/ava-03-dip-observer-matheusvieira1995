import { Produto } from './Produto'
import { IObservadorAdicao } from './Interface/IObservadorAdicao'
import { IObservadorRemocao } from './Interface/IObservadorRemocao'
import { IObservadorAbandono } from './Interface/IObservadorAbandono'
import { IObservadorCompraCarrinho } from './Interface/IObservadorCompraCarrinho'

export class Logger implements IObservadorAbandono, IObservadorAdicao, IObservadorCompraCarrinho, IObservadorRemocao{
  quandoAdicao(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi adicionado`)
  }
  quandoRemocao(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi removido`)

  }
  quandoCompraCarrinho(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} comprado(s)`)
  }
  quandoAbandono(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} abandonado(s)`)

  }
}
