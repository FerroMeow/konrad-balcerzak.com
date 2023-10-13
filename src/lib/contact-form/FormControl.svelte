<script lang="ts">
	import { ControlType } from './ControlType';

	export let name: string;
	export let id: string;
	export let type: ControlType;
	export let placeholder: string = '';
	let spanClass = type === ControlType.Textarea ? 'col-span-2' : '';
</script>

<div class={spanClass}>
	<p class="max-md:mt-4 max-md:mb-2"><label for={id}><slot />:</label></p>
	<p class="text-stone-700">
		{#if type === ControlType.Textarea}
			<textarea
				{name}
				{placeholder}
				{id}
				rows="6"
				autocorrect="on"
				class="w-full resize-none bg-stone-300 placeholder:text-slate-800 p-2 border rounded-md outline-slate-800 focus-visible:outline"
			/>
		{:else}
			<input
				{type}
				{name}
				{placeholder}
				{id}
				class="w-full bg-stone-300 placeholder:text-slate-800 p-2 border rounded-md outline-slate-800 focus-visible:outline"
			/>
		{/if}
	</p>
</div>
