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
        todoInput.value= ''
        errorInfo.textContent = ''
	} else {
		errorInfo.textContent = ' Wpisz treść zadania'
	}
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
}

document.addEventListener('DOMContentLoaded', main)
