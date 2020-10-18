import { ManipuladorProduto } from "./ManipuladorProduto"
import { Produto } from "./Produto"
import { IObservadorAlteraPreco } from "./Interface/IObservadorAlteraPreco"
import { Carrinho } from "./Carrinho"

export class ListaDesejo extends ManipuladorProduto
{
  readonly obeservadoresAlteraPreco: IObservadorAlteraPreco[] = []

 compartilhaLista(): string{
   let retorno: string = ""

   if(!(this.produtos.length > 0)){
     return "Lista está vazia"
   }
   this.produtos.forEach(element => {
     retorno = retorno + element.descricao + ", "
   })

   return retorno
 }

 atualizaPreco(produto: Produto, preco: number): void{
  this.produtos.forEach(element =>{
    if (element.codigo === produto.codigo){
      element.preco = preco
      this.notificaObservadorAlteraPreco(element)
    }
  })
 }

 adicionaListaCarrinho(){
   const carrinho = new Carrinho()
   this.produtos.forEach(produto =>{
    carrinho.produtos.push(produto)
   })
   this.esvazia()
   return carrinho
 }
  adicionaObeservadorAlteraPreco(observador: IObservadorAlteraPreco): void{
    this.obeservadoresAlteraPreco.push(observador)
 }

  removeObservadorAlteraPreco(observador: IObservadorAlteraPreco): void{
    const i = this.obeservadoresAlteraPreco.indexOf(observador)
  if (i >= 0) {
    this.obeservadoresAlteraPreco.splice(i, 1)
   }
 }

  private notificaObservadorAlteraPreco(produto: Produto){
    this.obeservadoresAlteraPreco.forEach(element => {
     element.quandoAlteraPreco(produto)
   })
 }
}
