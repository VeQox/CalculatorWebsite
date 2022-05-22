<script>
	export let open = false

	const Close = () => {
		open = false;
	}
</script>

<aside class="fixed w-full h-full bg-zinc-800 shadow-lg" class:open>
	<nav class="p-12 text-xl text-zinc-300 ">
		<a class="block hover:text-zinc-500" href="#complex-numbers" on:click={Close}>Complex Numbers</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0
    }

	a {
		text-decoration: none;
      	color: inherit;
	}
</style>