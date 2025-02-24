// src/store/index.js

export const initialStore = () => {
  return {
      message: null,
      todos: [
          {
              id: 1,
              title: "Learn React Router",
              background: null
          },
          {
              id: 2,
              title: "Practice Flux Pattern",
              background: null
          }
      ]
  }
}

export default function storeReducer(store, action) {
  switch (action.type) {
      case 'add_task':
          const { id, color } = action.payload;
          return {
              ...store,
              todos: store.todos.map((todo) => 
                  todo.id === id ? { ...todo, background: color } : todo
              )
          };

      case 'add_new_task':
          return {
              ...store,
              todos: [...store.todos, { 
                  id: Date.now(),
                  title: action.payload.title,
                  background: null
              }]
          };

      default:
          return store;
  }
}