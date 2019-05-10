import { writable } from 'svelte/store';

function readStorage() {
  const defaultItems = [
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
  ];

  try {
    const rawData = window.localStorage.getItem('__todos__');
    return JSON.parse(rawData) || defaultItems;
  } catch (error) {
    return defaultItems;
  }
}

export const todos = writable(readStorage());

todos.subscribe(value => {
  window.localStorage.setItem('__todos__', JSON.stringify(value));
});
