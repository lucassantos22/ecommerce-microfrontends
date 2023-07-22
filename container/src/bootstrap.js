import { mount as ProductsMount } from 'products/ProductsIndex'
import { mount as CartMount } from 'cart/CartShow'

console.log('container')

const products = document.querySelector('#dev-products')
const cart = document.querySelector('#dev-cart')
ProductsMount(products)
CartMount(cart)