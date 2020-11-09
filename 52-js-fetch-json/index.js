const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */


const fetchData = async (url) => {
    const response = await fetch(url)
        .then(response => response.json());
    return response.all.filter(fact => fact);
}

url = "https://cat-fact.herokuapp.com/facts";

button.addEventListener("click", async () => {
    const data = await fetchData(url);
    for (let i = 0; i < 3; i++) {
        const randomElement = Math.floor(Math.random() * data.length); 
        const li = document.createElement('li');
        const pFact = document.createElement('p');
        const pUser = document.createElement('p');
        pFact.innerText = data[randomElement].text;
        pUser.innerText = `${data[randomElement].user.name.first} ${data[i].user.name.last}`;
        li.appendChild(pFact);
        li.appendChild(pUser);
        result.appendChild(li);
    }
})

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
