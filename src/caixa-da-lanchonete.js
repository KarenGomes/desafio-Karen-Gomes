class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

      const formaDePagamento = ["debito", "credito", "dinheiro"];
        
      if (!formaDePagamento.includes(metodoDePagamento)){
        return "Forma de pagamento inválida!"; 
      }

      const cardapio = {
          cafe: 3.00,
          chantily: 1.50,
          suco: 6.20,
          sanduiche: 6.50, 
          queijo: 2.00,
          salgado: 7.25,
          combo1: 9.50,
          combo2: 7.50,
      };

      const itensPrincipais = ["cafe", "suco", "sanduiche", "salgado", "combo1", "combo2"];

      const descontosETaxas = {
          dinheiro: 0.95, // Desconto de 5%
          debito: 1.00,   // Sem acréscimo
          credito: 1.03,  // Acréscimo de 3%
      };

      let total = 0; 

      if(itens.length === 0){
          return "Não há itens no carrinho de compra!"; 
      }

      for (const item of itens) {
          const [codigo, quantidade] = item.split(",");
          const valorItem = cardapio[codigo];
          
          if (!valorItem) {
              return "Item inválido!";
          }
          
          total += valorItem * parseInt(quantidade);
          
          if (!itensPrincipais.includes(codigo) && quantidade > 1) {
              const itemPrincipal = codigo.replace("-extra", "");
              if (!itens.includes(`${itemPrincipal},${quantidade}`)) {
                  return "Item extra não pode ser pedido sem o principal";
              }
          }
      }
      
      if (total === 0) {
          return "Quantidade inválida!";
      }
      
      const valorTotalComDescontoOuTaxa = total * descontosETaxas[metodoDePagamento];
      
      return `R$ ${valorTotalComDescontoOuTaxa.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };
