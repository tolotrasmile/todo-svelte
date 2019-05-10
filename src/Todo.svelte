<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let todo = {};
  const dispatch = createEventDispatcher();

  function onToggle() {
    dispatch("change", { completed: !todo.completed });
  }

  function onInput(e) {
    dispatch("change", { name: e.target.value });
  }

  function deleteTodo() {
    dispatch("delete", todo);
  }
</script>

<style>
  li {
    list-style: none;
  }
</style>

<li transition:fade>
  <input type="checkbox" checked={todo.completed} on:change={onToggle} />
  <input type="text" value={todo.name} on:input={onInput} />
  <button on:click={deleteTodo}>Delete</button>
</li>
