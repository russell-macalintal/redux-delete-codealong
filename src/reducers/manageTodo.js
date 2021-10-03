import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      // Method 2: Delete per unique ID provided by uuid
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      // Method 1: Delete per array index number (assigned as the todo's key)
      // return { todos: state.todos.filter((todo, idx) => (idx !== action.payload))}

      // Method 2: Delete per unique ID provided by uuid
      return { todos: state.todos.filter( (todo) => todo.id !== action.payload)}
    default:
      return state;
  }
}
