import { Produto } from './Produto'
import { IObservadorAdicao } from './Interface/IObservadorAdicao'
import { IObservadorRemocao } from './Interface/IObservadorRemocao'
import { IObservadorAbandono } from './Interface/IObservadorAbandono'
import { IObservadorCompraCarrinho } from './Interface/IObservadorCompraCarrinho'
import { IObservadorAlteraPreco } from './Interface/IObservadorAlteraPreco'

export class Marketing implements IObservadorAbandono, IObservadorAdicao, IObservadorCompraCarrinho, IObservadorRemocao, IObservadorAlteraPreco {
  quandoAdicao(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi adicionado`)
  }
  quandoRemocao(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi removido`)

  }
  quandoCompraCarrinho(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} produto(s) comprado(s)`)
  }
  quandoAbandono(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} produto(s) abandonado(s)`)

  }
  quandoAlteraPreco(produto: Produto){
    console.info(`MARKETING: ${produto.descricao} alterou o preço para ${produto.preco}`)
  }
}
