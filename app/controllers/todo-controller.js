import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let todoSpot = document.getElementById("todo-list")
	todoSpot.style.backgroundColor = "rgba(0,0,0,.4)"
	todoSpot.style.color = "white"

	let myTodos = _todoService.MyTodos
	let template = `<h5>${myTodos.length} tasks</h5><ul>`
	myTodos.forEach(todo => {
		let todoID = todo._id
		let strikeThrough = todo.completed ? 'strike' : ''
		template += `
		<li id='${todoID}' class='${strikeThrough}'>${todo.description}</li>
		<button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${todoID}')">
			delete
		</button>
		<button class="btn btn-success" onclick="app.controllers.todoController.toggleTodoStatus('${todoID}')">
			Complete
		</button>`
	})
	template += "</ul>"
	todoSpot.innerHTML = template
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			//TODO build the todo object from the data that comes into this method
			description: form.description.value
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
