//Variáveis dos elementos da lista para conexão entre as partes

//Atribuindo o formulário a uma variável
const form = document.getElementById('addForm')
//Atribuir a lista a uma variável
const ItemList = document.getElementById('items')
//Atribuição da barra de pesquisa
const filter = document.getElementById('filter')
form.addEventListener('submit', addItem)
ItemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', buscarItems)

function removeItem() {
    
}

function addItem() {

}

function buscarItems() {
    alert('Tecla ativa')
}