import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Bem Vindo ao carrinho da Shopee");

const item1 = await createItem("Carro Ferrari", 20.99, 1);
const item2 = await createItem("Carro Audi", 39.99, 3);
const item3 = await createItem("Carro Excluir", 1.99,10)

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart,item3)
//console.log(item2.subtotal());

//await cartService.displayCart(myCart)
//await cartService.deleteItem(myCart,item1.name)

await cartService.removeItem(myCart,item3)
//await cartService.removeItem(myCart,item1)

//await cartService.removeItem(myCart,1)
await cartService.calculateTotal(myCart);


await cartService.displayCart(myCart)


