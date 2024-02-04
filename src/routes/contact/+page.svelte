<script lang="ts">
	import ContentCard from '$lib/ContentCard.svelte';
	import Toast from '$lib/Toast.svelte';
	import { ControlType } from '$lib/contact-form/ControlType';
	import FormControl from '$lib/contact-form/FormControl.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';

	export let data: PageData;

	const { form, constraints, errors, message, enhance } = superForm(data.form);

	let hcaptchaResponse: string = '';
</script>

{#if $message}
	<Toast>
		<div
			class="{$message.success
				? 'bg-green-200 text-green-700'
				: 'bg-red-200 text-red-700'} p-4 w-full text-center"
		>
			{$message.text}
		</div>
	</Toast>
{/if}

<ContentCard title="Contact me">
	<form method="POST" use:enhance>
		<fieldset class="md:grid md:grid-cols-2 gap-8 items-center">
			<FormControl
				id="contact-form-first-name"
				name="firstName"
				type={ControlType.Text}
				placeholder="ex. John"
				errors={$errors.firstName}
				bind:value={$form.firstName}
				{...$constraints.firstName}
			>
				First name
			</FormControl>
			<FormControl
				id="contact-form-last-name"
				name="lastName"
				type={ControlType.Text}
				placeholder="ex. Smith"
				errors={$errors.lastName}
				bind:value={$form.lastName}
				{...$constraints.lastName}
			>
				Last name
			</FormControl>
			<FormControl
				id="contact-form-email"
				name="email"
				type={ControlType.Email}
				placeholder="ex. mail@example.com"
				errors={$errors.email}
				bind:value={$form.email}
				{...$constraints.email}
			>
				Your e-mail
			</FormControl>
			<FormControl
				id="contact-form-message"
				name="message"
				type={ControlType.Textarea}
				errors={$errors.message}
				bind:value={$form.message}
				{...$constraints.message}
			>
				Message
			</FormControl>
			<div>
				<div class="h-captcha" data-sitekey={PUBLIC_HCAPTCHA_SITE_KEY} />
				<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
			</div>
			<p><button type="submit" class="btn w-full">Send</button></p>
		</fieldset>
	</form>
</ContentCard>

<ContentCard title="Other contact options" background="bg-stone-300">
	<p>
		You can write a mail to <a href="konrad.balcerzak.work@gmail.com" class="text-slate-600"
			>konrad.balcerzak.work@gmail.com</a
		>
	</p>
	<p>
		You can also contact me through my <a href="/about" class="text-slate-600">social media</a>.
	</p>
</ContentCard>
