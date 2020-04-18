window.productCart = {};

document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    productCart = {
        price: {
            one: 490,
            two: 350,
            three: 322.50
        },
        products: {
            vitaminCoffee: {
                count: 1,
            },
            vitaminGinseng: {
                count: 1,
            },
        },

        getProductCount() {
            return (this.products.vitaminCoffee.count + this.products.vitaminGinseng.count);
        },
        addProduct(vitaminName) {
            this.products[vitaminName].count++;
        },
        removeProduct(vitaminName) {
            this.products[vitaminName].count--;
        },
        resetProductCount(vitaminName) {
            this.products[vitaminName].count = 0;
        },
        getProductPrice() {
            if (this.getProductCount() === 1) {
                return this.price.one
            } else if (this.getProductCount() < 4) {
                return this.price.two;
            } else if (this.getProductCount() > 3) {
                return this.price.three;
            } else {
                return 0
            }
        },

        getProductSum() {
            if (this.getProductCount() === 1) {
                return this.price.one
            } else if (this.getProductCount() < 4) {
                return this.price.two * this.getProductCount();
            } else if (this.getProductCount() > 3) {
                return this.price.three * this.getProductCount();
            } else {
                return 0
            }
        },

        getAllSum() {
            return this.getProductSum().toFixed(2);
        }
    }

    const checkoutForm = document.querySelector('.checkout')
    const cartEmptyBlock = document.querySelector('.cart.cart--empty');

    if (checkoutForm) {

        checkCart();
        const checkoutCart = document.querySelector('.checkout__cart');
        const checkoutItems = checkoutCart.querySelectorAll('.checkout__cart_item');

        updateProductCard(document.querySelector("[data-name='vitaminCoffee']"), checkoutItems);
        updateProductCard(document.querySelector("[data-name='vitaminGinseng']"), checkoutItems);

        checkoutItems.forEach(function (item) {
            item.addEventListener('click', function (evt) {
                const prodName = item.dataset.name;
                if (evt.target.classList.contains('cart__item_quantity_btn--add')) {
                    productCart.addProduct(prodName);
                } else if (evt.target.classList.contains('cart__item_quantity_btn--del')) {
                    productCart.removeProduct(prodName)
                } else if (evt.target.classList.contains('checkout__cart_item_remove')) {
                    productCart.resetProductCount(prodName)
                }

                updateProductCard(item, checkoutItems);
                checkCart();
            })
        })


        const addVitaminCoffee = document.querySelector('.cart__item_vitaminCoffee .cart__item_add');
        addVitaminCoffee.addEventListener('click', function () {
            productCart.addProduct('vitaminCoffee');
            checkCart();
            updateProductCard(document.querySelector("[data-name='vitaminCoffee']"), checkoutItems);
        })

        const addVitaminGinseng = document.querySelector('.cart__item_vitaminGinseng .cart__item_add');
        addVitaminGinseng.addEventListener('click', function () {
            productCart.addProduct('vitaminGinseng');
            checkCart();
            updateProductCard(document.querySelector("[data-name='vitaminGinseng']"), checkoutItems);
        })
    }

    function updateProductPrice(items, productName) {
        items.forEach(item => {
            const productPriceBox = item.querySelector('.amount b');
            const price = productCart.getProductPrice(productName).toFixed(2);

            productPriceBox.textContent = price;
        });
    }

    function updateProductCard(item, items) {
        const productName = item.dataset.name;
        updateProductPrice(items, productName);

        // Спрятать карточку если count < 1
        isEmptyDelete(productName, item);

        const productCountNumber = item.querySelector('.cart__item_quantity_input');
        productCountNumber.value = productCart.products[productName].count;

        // Общая сумма
        document.querySelector('.checkout__info .amount b').textContent = productCart.getAllSum();
        document.querySelector('.checkout__info_row--last .amount b').textContent = productCart.getAllSum();

        // Склонение товаров
        changeCounterName();
    }

    function changeCounterName() {
        const productNameBox = document.querySelector('.checkout__info .checkout__info_row_left');
        const prodCount = productCart.getProductCount();
        let wordsBox = '';

        if(prodCount === 1) {
            wordsBox = '1 товар';
        } else if(prodCount > 1 && prodCount < 5) {
            wordsBox = prodCount + ' товара';
        } else {
            wordsBox = prodCount + ' товаров'
        }

        productNameBox.textContent = wordsBox;
    }

    function isEmptyDelete(prodName, item) {
        if (productCart.products[prodName].count < 1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    }

    function checkCart() {
        if (productCart.getProductCount() === 0) {
            showCartEmptyBlock();
        } else {
            hideCartEmptyBlock();
        }
    }

    function showCartEmptyBlock() {
        cartEmptyBlock.style.display = 'block';
        checkoutForm.style.display = 'none';
    }
    function hideCartEmptyBlock() {
        cartEmptyBlock.style.display = 'none';
        checkoutForm.style.display = 'block';
    }


})
