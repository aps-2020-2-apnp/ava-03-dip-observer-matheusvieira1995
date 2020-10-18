import { Produto } from '../Produto'

export interface IObservadorCompraCarrinho {

  quandoCompraCarrinho(produtos: Produto[]) : void

}
