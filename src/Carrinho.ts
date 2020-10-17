import { Produto } from './Produto'
import { Pedido } from './Pedido'
import { Logger } from './Logger'
import { Marketing } from './Marketing'

// API
export class Carrinho {
  readonly produtos: Produto[] = []
  private readonly logger: Logger = new Logger()
  private readonly marketing: Marketing = new Marketing()
  // retrocompatível
  adiciona(p: Produto) {
    this.logger.houveAdicao(p)
    this.marketing.houveAdicao(p)
    this.produtos.push(p)
  }

  remove(p: Produto): void {
    const i = this.produtos.indexOf(p)
    if (i >= 0) {
      this.logger.houveRemocao(p)
      this.marketing.houveRemocao(p)
      this.produtos.splice(i, 1)
    }
  }

  compra(): Pedido {
    const prod: Produto[] = [...this.produtos]
    this.logger.houveCompra(prod)
    this.marketing.houveCompra(prod)
    const ped = new Pedido(prod)
    this.esvazia()
    return ped
  }

  abandona(): void {
    this.logger.houveAbandono(this.produtos)
    this.marketing.houveAbandono(this.produtos)
    this.esvazia()
  }

  private esvazia(): void {
    this.produtos.splice(0)
  }
}
