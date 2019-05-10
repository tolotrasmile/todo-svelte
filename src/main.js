import App from './App.svelte';

new App({
  target: document.body,
  props: {
    todos: [
      {
        name: 'Hello Svelte',
        completed: true,
        id: uuidv4()
      },
      {
        name: 'How are you?',
        completed: false,
        id: uuidv4()
      }
    ]
  }
});
