let todoInput //miejsce gdzie wpisuje tresc zadania
let errorInfo //info o braku zadania
let addBtn // przycisk doaje nowe zadania
let ulList // lista zadań, tagi ul
let newTodo // nowo dodane zadanie Li

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
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
document.addEventListener('DOMContentLoaded', main)
