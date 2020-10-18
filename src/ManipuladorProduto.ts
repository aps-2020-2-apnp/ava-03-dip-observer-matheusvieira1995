import { Produto } from './Produto'
import { Pedido } from './Pedido'
import { IObservadorAdicao } from './Interface/IObservadorAdicao'
import { IObservadorRemocao } from './Interface/IObservadorRemocao'
import { IObservadorAbandono } from './Interface/IObservadorAbandono'

// API
export class ManipuladorProduto
 {
  readonly produtos: Produto[] = []
  readonly ObservadoresAdicao: IObservadorAdicao[] = []
  readonly ObservadoresRemocao: IObservadorRemocao[] = []
  readonly ObservadoresAbandono: IObservadorAbandono[] = []

  // retrocompatível
  adiciona(p: Produto) {
    this.produtos.push(p)
    this.notificaObeservadorAdicao(p)
  }

  remove(p: Produto): void {
    const i = this.produtos.indexOf(p)
    if (i >= 0) {
      this.produtos.splice(i, 1)
      this.notificaObeservadorRemocao(p)
    }
  }



  abandona(): void {
    this.notificaObeservadorAbandono(this.produtos)
    this.esvazia()
  }

  adicionaObservadorAdicao(observador: IObservadorAdicao){
    this.ObservadoresAdicao.push(observador)
  }

  adicionaObservadorRemocao(observador: IObservadorRemocao) {
    this.ObservadoresRemocao.push(observador)
  }

  adicionaObservadorAbandono(observador: IObservadorAbandono) {
    this.ObservadoresAbandono.push(observador)
  }

  removeObservadorAdicao(observador: IObservadorAdicao) {
    const i = this.ObservadoresAdicao.indexOf(observador)
    if (i >= 0) {
      this.ObservadoresAdicao.splice(i, 1)
    }
  }

  removeObservadorRemocao(observador: IObservadorRemocao) {
    const i = this.ObservadoresRemocao.indexOf(observador)
    if (i >= 0) {
      this.ObservadoresRemocao.splice(i, 1)
    }
  }

  removeObservadorAbanono(observador: IObservadorAbandono) {
    const i = this.ObservadoresAbandono.indexOf(observador)
    if (i >= 0) {
      this.ObservadoresAbandono.splice(i, 1)
    }
  }

  protected esvazia(): void {
    this.produtos.splice(0)
  }

  protected notificaObeservadorAdicao(p: Produto): void{
    this.ObservadoresAdicao.forEach(element => {
      element.quandoAdicao(p)
    });
  }

  protected notificaObeservadorRemocao(p: Produto): void {
    this.ObservadoresRemocao.forEach(element => {
      element.quandoRemocao(p)
    });
  }

  protected notificaObeservadorAbandono(produtos: Produto[]): void {
    this.ObservadoresAbandono.forEach(element => {
      element.quandoAbandono(produtos);
    })
  }
}

