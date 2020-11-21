<script lang='typescript'>
  import './main.css';
	import {onMount} from 'svelte';
	let count: number = 0;
	onMount(() => {
	  const interval = setInterval(() => count++, 1000);
	  return () => {
		  clearInterval(interval);
	  };
	});
</script>

<style lang="scss">
  .app {
    .count {
      color: red($color: #000000);
      // @apply px-5 bg-green-300 box;
    }
  }
</style>

<template>
  <div class="app">
    <div class="count">
      <div>Hello World, {count}</div>
    </div>
  </div>
</template>