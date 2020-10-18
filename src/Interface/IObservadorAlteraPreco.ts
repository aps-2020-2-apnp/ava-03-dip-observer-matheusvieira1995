import { Produto } from '../Produto'

export interface IObservadorAlteraPreco {

  quandoAlteraPreco(produto: Produto): void

}
