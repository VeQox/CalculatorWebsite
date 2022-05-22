<script>
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import Main from "./Main.svelte";
	import ComplexNumbers from "./complex-numbers.svelte";

	let open = false;
</script>

<svelte:head>
	<title>Calculator</title>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<main>
	
	<Navbar bind:sidebar={open} />
	<Sidebar bind:open/>
	<Main/>
	<section id="complex-numbers">
		<ComplexNumbers/>
	</section>
	
</main>

<style>
	:global(body) {
		padding: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>