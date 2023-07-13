<script lang="ts">
	import { enhance } from '$app/forms';
	import ContentCard from '$lib/ContentCard.svelte';
	import Heading from '$lib/Heading.svelte';
	import { ControlType } from '$lib/contact-form/ControlType';
	import FormControl from '$lib/contact-form/FormControl.svelte';

	export const actions = {};
</script>

<ContentCard title="Contact me" className="rounded-none sm:rounded-3xl sm:max-w-xl lg:max-w-3xl">
	<form class="bg-stone-100">
		<fieldset class="md:grid md:grid-cols-2 gap-8">
			<FormControl
				id="contact-form-first-name"
				name="firstName"
				type={ControlType.Text}
				placeholder="ex. John"
			>
				First name
			</FormControl>
			<FormControl
				id="contact-form-last-name"
				name="lastName"
				type={ControlType.Text}
				placeholder="ex. Smith"
			>
				Last name
			</FormControl>
			<FormControl
				id="contact-form-email"
				name="email"
				type={ControlType.Email}
				placeholder="ex. mail@example.com"
			>
				Your e-mail
			</FormControl>
			<FormControl id="contact-form-message" name="message" type={ControlType.Textarea}>
				Message
			</FormControl>
		</fieldset>
		<p class="mt-8"><button type="submit" class="btn w-full">Send</button></p>
	</form>
</ContentCard>

<ContentCard title="Other contact options">
	<p>
		You can write a mail to <a href="konrad.balcerzak.work@gmail.com" class="text-slate-600"
			>konrad.balcerzak.work@gmail.com</a
		>
	</p>
	<p>
		You can also contact me through my <a href="/about" class="text-slate-600">social media</a>.
	</p>
</ContentCard>
