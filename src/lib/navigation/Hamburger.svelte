<script lang="ts">
	export let className: string | null = null;
</script>

<button class={className} on:click>
	<svg
		aria-hidden="true"
		class="h-9 w-9 fill-current stroke-none"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
			clip-rule="evenodd"
			fill-rule="evenodd"
			data-toggle-bar-top="true"
			style="transform: translateY(0rem); transform-origin: 12px 17.25px 0px;"
		/><path
			d="M3,12C3,11.589 3.339,11.25 3.75,11.25L20.25,11.25C20.661,11.25 21,11.589 21,12C21,12.411 20.661,12.75 20.25,12.75L3.75,12.75C3.339,12.75 3,12.411 3,12Z"
			clip-rule="evenodd"
			fill-rule="evenodd"
			data-toggle-bar-middle="true"
			opacity="1"
		/><path
			d="M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
			clip-rule="evenodd"
			fill-rule="evenodd"
			data-toggle-bar-bottom="true"
			style="transform: translateY(0rem); transform-origin: 12px 6.75px 0px;"
		/></svg
	>
</button>
