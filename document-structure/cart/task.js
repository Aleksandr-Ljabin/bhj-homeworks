let controlDec = document.getElementsByClassName("product__quantity-control_dec");
for(let i = 0; i < controlDec.length; i++){
	controlDec[i].onclick = function(){
		if(controlDec[i].nextElementSibling.innerText == 1){
		}  else{
			controlDec[i].nextElementSibling.innerText --;
		   }
	}
};

let controlInc = document.getElementsByClassName("product__quantity-control_inc");
for(let i = 0; i < controlInc.length; i++){
	controlInc[i].onclick = function(){
		controlInc[i].previousElementSibling.innerText ++;
	}
};

let product = document.getElementsByClassName("product"); //карточка товара
let cartProducts = Array.from(document.getElementsByClassName("cart__products")); //корзина
let cartProduct = Array.from(document.getElementsByClassName("cart__product")); //товары в корзине
for(let i = 0; i <product.length; i++){
	product[i].querySelector("div.product__add").onclick = function(){
		let item = cartProduct.findIndex(item => item.dataset.id == product[i].dataset.id);
		if(item >= 0){
			let itemNum = Number(cartProduct[item].querySelector("div.cart__product-count").innerText);
			console.log(itemNum);
			let etNum = Number(product[i].querySelector("div.product__quantity-value").innerText);
			console.log(etNum);
			 itemNum = +etNum;
			 console.log(itemNum += etNum);
		} else{
			cartProducts[0].insertAdjacentHTML("beforeEnd", `<div class="cart__product" data-id="${product[i].dataset.id}"> <img class="cart__product-image" src="${product[i].querySelector("img").src}"> <div class="cart__product-count">${product[i].querySelector("div.product__quantity-value").innerText}</div> </div>`)
		}
	}
};


