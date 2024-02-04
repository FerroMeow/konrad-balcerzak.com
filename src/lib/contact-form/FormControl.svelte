<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { ControlType } from './ControlType';
	import ErrorNotification from './ErrorNotification.svelte';

	export let type: ControlType;
	export let errors: string[] | undefined = undefined;

	export let id: string | undefined | null = undefined;
	let spanClass = type === ControlType.Textarea ? 'col-span-2' : '';

	type $$Props = HTMLInputAttributes & {
		type: ControlType;
		errors?: string[] | undefined;
	};
</script>

<div class={spanClass}>
	<p class="max-md:mt-4 max-md:mb-2"><label for={id}><slot /></label></p>
	<p class="text-stone-700">
		{#if type === ControlType.Textarea}
			<textarea
				rows="6"
				autocorrect="on"
				class="w-full resize-none bg-stone-300 placeholder:text-slate-800 p-2 border rounded-md outline-slate-800 focus-visible:outline"
				{...$$restProps}
			/>
		{:else}
			<input
				class="w-full bg-stone-300 placeholder:text-slate-800 p-2 border rounded-md outline-slate-800 focus-visible:outline"
				{...$$restProps}
			/>
		{/if}
	</p>
	{#if errors}
		<p>
			<ErrorNotification {errors} />
		</p>
	{/if}
</div>
