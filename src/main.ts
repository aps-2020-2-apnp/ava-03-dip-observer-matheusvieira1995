import { ManipuladorProduto } from './ManipuladorProduto'
import { Produto } from './Produto'
import { Carrinho } from './Carrinho'
import { ListaDesejo } from './ListaDesejo'
import { Pedido } from './Pedido'
import { Logger } from './Logger'
import { Marketing } from './Marketing'

console.log('ok')

const p1 = new Produto(1, 'Tripé Para Celular Flexivel', 100)
const p2 = new Produto(2, 'Carregador de parede universal 2.1A, 2 portas USB, bivolt', 150)
const p3 = new Produto(3, 'Caixa Multimidia Portatil Go 2, JBL', 180)
const p4 = new Produto(4, 'Bateria Externa Carga Rápida 10,000Mah USB Tipo C', 200)
const p5 = new Produto(5, 'Fones de Ouvido Xiaomi Redmi AirDots', 400)
const p6 = new Produto(6, 'Máquina De Café Espresso Coffee Cream ', 30)
const p7 = new Produto(7, 'Parafusadeira/furadeira De Impacto 1⁄2” (13mm) 20v Max', 270)
const p8 = new Produto(8, 'Honorall Full HD 1080 P Webcam USB Mini Câmera', 400)
const logger: Logger = new Logger()
const marketing: Marketing = new Marketing()

const carrinho = new Carrinho()
carrinho.adicionaObservadorAdicao(logger)
carrinho.adicionaObservadorRemocao(logger)
carrinho.adicionaObservadorAbandono(logger)
carrinho.adicionaObservadorCompraCarrinho(logger)
carrinho.adiciona(p1)
carrinho.adiciona(p2)
carrinho.abandona()
carrinho.adiciona(p3)
carrinho.adiciona(p4)
carrinho.remove(p3)
carrinho.adiciona(p5)
const pedido = carrinho.compra()
console.log(pedido.produtos)
console.log(carrinho.produtos)

const listaDesejo = new ListaDesejo()
listaDesejo.adicionaObservadorAdicao(marketing)
listaDesejo.adicionaObservadorRemocao(marketing)
listaDesejo.adicionaObservadorAbandono(marketing)
listaDesejo.adicionaObeservadorAlteraPreco(marketing)

listaDesejo.adiciona(p7)
listaDesejo.adiciona(p8)
listaDesejo.atualizaPreco(p8, 370)
console.log(listaDesejo.compartilhaLista())
listaDesejo.abandona()
console.log(listaDesejo.compartilhaLista())
listaDesejo.adiciona(p2)
listaDesejo.adiciona(p5)
listaDesejo.adiciona(p8)
console.log(listaDesejo.compartilhaLista())
const carrinho2 = listaDesejo.adicionaListaCarrinho()
console.log(listaDesejo.compartilhaLista())
carrinho2.adicionaObservadorAdicao(logger)
carrinho2.adicionaObservadorRemocao(logger)
carrinho2.adicionaObservadorAbandono(logger)
carrinho2.adicionaObservadorCompraCarrinho(logger)
carrinho2.adiciona(p4)
carrinho2.compra()
console.log(carrinho2.produtos)

