const API = require("./lib/API");
const readlineSync = require("readline-sync");

function displayClients() {
    console.log("-----------------");
    console.log("- CLIENTS LIST  -");
    console.log("-----------------");

    const clients = API.read("clients");
    for (const client of clients){
        if (clients.length > 0){
            console.log(`${client.id}. ${client.firstName} ${client.lastName} -.- ${client.address} -.- ${client.phone} `);
        }else{
            console.log('Sorry, no records available at this time.')
        }
    }
    mainMenu();
}

function createClient() {
    console.log("------------------");
    console.log("- CREATE CLIENTS -");
    console.log("------------------");
    
    const firstName = readlineSync.question("Please enter first name: ");
    const lastName = readlineSync.question("Please enter last name: ");
    const age = readlineSync.question("Please enter age: ");
    const phone = readlineSync.question("Please enter phone number: ");
    const address = readlineSync.question("Please enter your city: ");

API.create("clients", {firstName: firstName, lastName: lastName, age: age, phone: phone, address: address});

    mainMenu();
}

function deleteClient() {
    console.log("------------------");
    console.log("- DELETE CLIENTS -");
    console.log("------------------");
    const delete_id = readlineSync.question("Please enter the ID of the client to be removed: ");
    console.log();
    API.destroy("clients", parseInt(delete_id));
    console.log(`Client ${(delete_id)} deleted.`);
    mainMenu();
}

function editClient() {
    console.log("------------------");
    console.log("-  EDIT  CLIENT  -");
    console.log("------------------");

    const edit_id = readlineSync.question("Please enter the ID of the client to be edited: ");
    const firstName = readlineSync.question("Please enter first name: ");
    const lastName = readlineSync.question("Please enter last name: ");
    const age = readlineSync.question("Please enter age: ");
    const phone = readlineSync.question("Please enter phone number: ");
    const address = readlineSync.question("Please enter your city: ");
    API.update("clients", {id:id , firstName: firstName, lastName: lastName, age: age, phone: phone, address: address})

    mainMenu();
}

function mainMenu() {
    console.log('******************');
    console.log("- CLIENTS MODULE -");
    console.log('******************');
    console.log("1. List clients");
    console.log("2. Create client");
    console.log("3. Edit client");
    console.log("4. Delete client");
    console.log("------------------");
    console.log("5. EXIT MODULE");
    console.log("------------------");

    const menuChoice = readlineSync.question("Select an option: ");

    switch (menuChoice) {
        case '1':
            displayClients();
            break;
        case '2':
            createClient();
            break;
        case '3':
            editClient();
            break;
        case '4':
            deleteClient();
            break;
        case '5':
            process.exit();
            break;
        default:
            console.log('Selection not valid.')
            mainMenu();
            break;
    }
}

mainMenu();
