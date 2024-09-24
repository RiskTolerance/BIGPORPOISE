<script>
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.ts";
</script>

<ModeWatcher />
<div class="flex min-h-screen flex-col justify-start bg-slate-100 dark:bg-slate-500">
	<nav class="bg-slate-300 dark:bg-slate-800 dark:text-slate-100">
		<div class="container mx-auto flex h-24 items-center justify-end">
			<ul class="flex items-center gap-4 font-serif text-2xl leading-none">
				<li><a href="/">BIG</a></li>
				<span>⋅</span>
				<li><a href="/porpoise">PORPOISE</a></li>
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</ul>
		</div>
	</nav>

	<div class="px-8">
		<div class="container mx-auto">
			<slot></slot>
		</div>
	</div>

	<footer class="flex px-8 bg-slate-300 dark:bg-slate-800 dark:text-slate-100">
		<div class="container">
			<p>FOOTER</p>
		</div>
	</footer>
</div>
