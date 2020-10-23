let remainingBudget = 50.00;

const productsContainer = document.querySelector("#products");
const remaining = document.querySelector('#remaining');

const divProducts = document.querySelector('#products');
const ul = document.createElement('ul');



divProducts.appendChild(ul);
ul.appendChild;

products.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = '<img src=" ' + product.img + '  ">' + ' ' + product.name + ' ' + product.price;
    const select = document.createElement('select');
    //    const selectedQuantity = document.querySelector('select');
    select.classList.add('option');
    for (let i = 0; i <= product.max_quantity; i++) {
        select.options[select.options.length] = new Option(i, i);
    }

    select.addEventListener('change', function (event) {
        console.log(`You did: ${event.target.value}`);
        doTheMath(product.price, event.target.value);
    });

    li.append(select);
    ul.appendChild(li);
})

const errorOutput = () => {
    alert("Not enough money left for that!");
}

const doTheMath = (price, quantity) => {
    let calc = price * quantity;

    if (remainingBudget < calc) {
        errorOutput();
    } else {
        remainingBudget = (remainingBudget - calc).toFixed(2);
        remaining.innerHTML = `Remaining budget: <span>£ ${(remainingBudget)}</span>`;
    }
}

