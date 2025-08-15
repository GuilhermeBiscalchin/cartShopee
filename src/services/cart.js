//quais açoes meus carrinhos podem fazer

// Casos de uso
// -> adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//Função para mostrar a lista de desejo.

async function displayWhish(userCart) {
  console.log("\n Shopee Lista de Desejos!");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} `);
  });
}

async function displayCart(userCart) {
  console.log(" \nShopee Carrinho Lista");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal = ${item.subtotal()}`
    );
  });
}

// -> remover o item
async function removeItem(userCart, item) {
  //1. Encontrar o indice do item.
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  //console.log("item encontrado!")
  // console.log(indexFound)

  //2. Caso não encontre o item
  if (indexFound === -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item, item = 1 deletar o item.
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso o item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }

  //const deleteIndex = index - 1;

  //maior do que zero e se é menor do que o tamanho do carrinho
  //if (index >= 0 && index < userCart.length) userCart.splice(deleteIndex, 1);
}

// -> calcular o total
async function calculateTotal(userCart) {
  console.log("\nShopee Cart Total Is: ");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result} `);
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart , displayWhish};
