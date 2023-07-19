const faker = require('faker');

const message = `<div>You have ${faker.random.number()} items in your cart</div>`

document.querySelector('#dev-cart').innerHTML = message