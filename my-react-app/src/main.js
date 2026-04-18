import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

function HelloWorld(name) {
  return `<h1>Hello ${name}! </h1>`
}

function productCard(title, price, image) {
  return `
    <div class="product-card">
      <img src="${image}" alt="${title}" class="product-image" />
      <h2 class="product-title">${title}</h2>
      <p class="product-price">$${price}</p>
      <button class="buy-button">Buy Now</button>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
<section id="center">
  <p> This is my app </p>


  <div style="display: flex; gap: 5px;">
    ${productCard('Product 1', 19.99, 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png')}
    ${productCard('Product 2', 29.99, 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png')}
    ${productCard('Product 3', 39.99, 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png')}
  </div>

  
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>


<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
