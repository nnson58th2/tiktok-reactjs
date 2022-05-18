import { useStore, actions } from './store';

function App() {
  const [globalState, globalDispatch] = useStore();

  const { todoInput, todos } = globalState;

  const handleChangeInput = (event) => {
    globalDispatch(actions.setTodoInput(event.target.value));
  };

  const handleSubmit = () => {
    globalDispatch(actions.addTodo(todoInput));
  };

  return (
    <div>
      <input
        type="text"
        value={globalState.todoInput}
        placeholder="Enter todo..."
        onChange={handleChangeInput}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
