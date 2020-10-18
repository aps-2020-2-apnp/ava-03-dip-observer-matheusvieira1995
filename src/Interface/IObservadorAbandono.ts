import { Produto } from '../Produto'

export interface IObservadorAbandono {

  quandoAbandono(produtos: Produto[]) : void

}
