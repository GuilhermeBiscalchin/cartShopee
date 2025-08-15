import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Bem Vindo ao carrinho da Shopee");

const item1 = await createItem("Carro Ferrari", 20.99, 1);
const item2 = await createItem("Carro Audi", 39.99, 3);
const item3 = await createItem("Carro Gol", 1.99,10)

//Lista de Desejos
const item4 = await createItem("Carro Fox", 15.00,2)
const item5 = await createItem("Carro Sandero",13.00,1)
const item6 = await createItem('Carro BMW',40.99,8)


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart,item3)

await cartService.addItem(myWhishList,item4)
await cartService.addItem(myWhishList,item5)
await cartService.addItem(myWhishList,item6)



await cartService.displayWhish(myWhishList)
await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart);


