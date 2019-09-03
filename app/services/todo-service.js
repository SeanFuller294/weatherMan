//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/seanfuller/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get MyTodos() {
		return _state.todos
		// return _state.todos.map(t => JSON.parse(JSON.stringify(t))) //NOTE safer to do this to break reference to the copy in your state
	}
	get TodoError() {
		return _state.error
	}

	todoLength() {
		return _state.todos.length
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				_setState("todos", res.data.data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todoApi.put(todoId, todo)
			.then(res => {
				let dave = document.getElementById(`${todo._id}`)
				if (!todo.completed) {
					dave.setAttribute('class', '')
				} else {
					dave.setAttribute('class', 'strike')
				}
				//TODO do you care about this data? or should you go get something else?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?

		todoApi.delete(`/${todoId}`)
			.then(res => {
				this.getTodos()
			})



	}

}
