import { Produto }  from '../Produto'

export interface IObservadorAdicao {

  quandoAdicao(p: Produto) : void

}
