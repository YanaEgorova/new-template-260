export const item = product => {
  return `
    <li class="product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">
      <div class="product__block--inner">
      <span class="product__price">$${product.price.toFixed(2)}</span>
      <img src="${product.image}" alt="" class="product__block-img">
      <div class="product__text-box">
      <p class="product__name js_product-name">${product.name}</p> 
      ${
        product.description[0].text.length > 0
          ? '<p class="text product__desc">' +
            product.description[0].text.slice(0, 100) +
            '...' +
            '</p>'
          : ''
      }
      <div class="product__btn-block">
      <a href="product-page.html?id=${
        product.id
      }" id="btn-1" class="product__btn first" style="margin: ${
       product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
     }">details <svg  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
  <polygon points="315.1,48.6 196.9,48.6 354.5,206.1 0,206.1 0,284.9 354.5,284.9 196.9,442.4 315.1,442.4 512,245.5 "/>
  </svg></a>
      ${
        product.type == 'ring' || product.type == 'clothing'
          ? ''
          : '<button id="btn-2" class="product__btn second js_add-to-cart">buy <svg  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><polygon points="315.1,48.6 196.9,48.6 354.5,206.1 0,206.1 0,284.9 354.5,284.9 196.9,442.4 315.1,442.4 512,245.5 "/></svg></button>'
      }
     </div>
      </div>
      </div>
     </div>
   </li>
    `;
};
