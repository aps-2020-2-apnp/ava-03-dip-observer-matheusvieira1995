import { ManipuladorProduto } from "./ManipuladorProduto"
import { Pedido } from "./Pedido"
import { Produto } from "./Produto"
import { IObservadorCompraCarrinho } from "./Interface/IObservadorCompraCarrinho"

export class Carrinho extends ManipuladorProduto {
  readonly observadoresCompraCarrinho: IObservadorCompraCarrinho[] = []

  compra(): Pedido {
    const prod: Produto[] = [...this.produtos]
    const ped = new Pedido(prod)
    this.notificaObeservadorCompraCarrinho(this.produtos)
    this.esvazia()
    return ped
  }

  adicionaObservadorCompraCarrinho(observador: IObservadorCompraCarrinho): void{
    this.observadoresCompraCarrinho.push(observador)
  }

  removeObservadorCompraCarrinho(observador: IObservadorCompraCarrinho): void{
    const i = this.observadoresCompraCarrinho.indexOf(observador)
    if (i >= 0) {
      this.observadoresCompraCarrinho.splice(i, 1)
    }
  }

  private notificaObeservadorCompraCarrinho(produtos: Produto[]){
    this.observadoresCompraCarrinho.forEach(element => {
      element.quandoCompraCarrinho(produtos)
    })
  }


}
