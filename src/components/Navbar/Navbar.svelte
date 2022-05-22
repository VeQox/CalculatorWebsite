<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="flex justify-between bg-zinc-800 p-2 items-center text-zinc-300 top-0 sticky w-full">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
</header>