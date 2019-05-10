<script>
  import Todo from "./Todo.svelte";
  import { todos } from "./store.js";

  let newTodo = "";
  let showCompleted = true;

  $: filteredTodos = $todos.filter(t =>
    showCompleted === true ? true : t.completed === false
  );

  function addTodo(e) {
    if (newTodo) {
      $todos = [...$todos, { id: uuidv4(), name: newTodo, completed: false }];
      newTodo = "";
    }
  }

  function deleteTodo(e) {
    $todos = $todos.filter(t => t !== e.detail);
  }

  function updateTodo(todo, detail) {
    $todos = $todos.map(t => (t === todo ? { ...t, ...detail } : t));
  }
</script>

<main>
  <h1>Todo List</h1>
  <div>
    <input type="text" bind:value={newTodo} />
    <button on:click={addTodo}>Ajouter</button>
  </div>
  <label>
    <input type="checkbox" bind:checked={showCompleted} />
    Show completed
  </label>
  <ul>
    {#each filteredTodos as todo (todo.id)}
      <Todo {todo} on:change={e => updateTodo(todo, e.detail)} on:delete={deleteTodo} />
    {/each}
  </ul>
  <pre> {JSON.stringify($todos, null, 2)} </pre>
</main>
