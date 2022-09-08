<template>
	<BaseDialog
		v-if="inputIsInvalid"
		title="Invalid Input"
		@close="confirmHandler"
	>
		<template #default>
			<p>Unfortunately, at least one input value is invalid.</p>
			<p>
				Please check all inputs and make sure you enter at least a few
				characters into each input field.
			</p>
		</template>
		<template #actions>
			<BaseButton @click="confirmHandler">Okay</BaseButton>
		</template>
	</BaseDialog>

	<BaseCard>
		<form @submit.prevent="submitHandler">
			<div class="form-control">
				<label for="title">Title</label>
				<input type="text" id="title" name="title" v-model="title" />
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="3"
					v-model="description"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input type="url" id="link" name="link" v-model="link" />
			</div>
			<div>
				<BaseButton class="submit" type="submit">Add Resource</BaseButton>
			</div>
		</form>
	</BaseCard>
	<BaseCard class="alert-message" v-if="errorMessage">{{
		errorMessage
	}}</BaseCard>
</template>

<script setup>
import { inject, ref } from "vue";
const errorMessage = ref(null);

const title = ref("");
const description = ref("");
const link = ref("");

const inputIsInvalid = ref(false);

const goToStoreResource = inject("goToStoreResource");

async function submitHandler() {
	if (
		title.value.trim() === "" ||
		description.value.trim() === "" ||
		link.value.trim() === ""
	) {
		inputIsInvalid.value = true;
		return;
	}

	errorMessage.value = null;
	await fetch(
		"https://vue-http-demo-96356-default-rtdb.asia-southeast1.firebasedatabase.app/resources.json",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title.value,
				description: description.value,
				link: link.value,
			}),
		}
	)
		.then((response) => {
			if (response.ok) {
				// ...
			} else {
				throw new Error("Could not save data!");
			}
		})
		.catch((error) => {
			errorMessage.value = error.message;
			throw new Error(error);
		});
	goToStoreResource();

	title.value = "";
	description.value = "";
	link.value = "";
}

function confirmHandler() {
	inputIsInvalid.value = false;
}
</script>

<style lang="scss" scoped>
form {
	color: #eee;
	padding: 0.24rem 0.8rem 1rem;
}
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}
input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 1px solid #ccc;
	background-color: #eee;
}
input:focus,
textarea:focus {
	outline: none;
	border-color: hal(var(--clr-primary));
	background-color: hsl(var(--clr-light));
}
.form-control {
	margin: 1rem 0;
}
button.submit {
	margin-top: 1rem;
}

// Alert
.alert-message {
	text-align: center;
	font-size: 1.2rem;
	color: rgb(200, 126, 126);
}
</style>
