import { Produto } from '../Produto'

export interface IObservadorRemocao {

  quandoRemocao(p: Produto) : void

}
