let todoInput //miejsce gdzie wpisuje tresc zadania
let errorInfo //info o braku zadania
let addBtn // przycisk doaje nowe zadania
let ulList // lista zadań, tagi ul
let newTodo // nowo dodane zadanie Li
let popup //popup
let popupInfo // tekst w popupie jak sie doda pusty tekst
let todoToEdit // edytowany Todo
let popupInput //input w popupie
let popupAddBtn // btn zatwierdz w popupie
let popupCloseBtn //przycisk'anuluj w popupie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo= document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}
const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		createTooolsArea()
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = ' Wpisz treść zadania'
	}
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)

}
const createTooolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)
	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'
	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo()
	} else if (e.target.matches('.delete')) {
		console.log('delete')
	}
}
const editTodo = () => {
	popup.style.display = 'flex'
}
const closePopup = () => {
	popup.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', main)
