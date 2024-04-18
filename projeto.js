const menuItems = [
    { name: "Hambúrguer", price: 10 },
    { name: "Pizza", price: 12 },
    { name: "Sushi", price: 15 },
    { name: "Salada", price: 8 }
];


function displayMenu() {
    const menuList = document.getElementById("menu-list");
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `<strong>${item.name}</strong>: $${item.price}`;
        menuList.appendChild(li);
    });
}

// Função para pesquisar no menu
function searchMenu() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredMenu = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = ""; 
    filteredMenu.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `<strong>${item.name}</strong>: $${item.price}`;
        menuList.appendChild(li);
    });
}

window.onload = displayMenu;