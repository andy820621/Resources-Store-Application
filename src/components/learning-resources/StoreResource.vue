<template>
	<p v-if="!isLoading && errorMessage">{{ errorMessage }}</p>
	<p v-else-if="!isLoading && (!resources || resources.length === 0)">
		No stored resources found.
	</p>
	<ul v-if="resources && resources.length > 0">
		<ResourceList
			class="noMargin"
			v-for="resource in resources"
			:key="resource.id"
			:title="resource.title"
			:description="resource.description"
			:link="resource.link"
			@delete="deleteHandler(resource.id)"
		/>
	</ul>
	<BaseLoading v-if="isLoading" />
</template>

<script setup>
import ResourceList from "@/components/learning-resources/ResourceList.vue";
import { inject } from "vue";

const isLoading = inject("isLoading");
const errorMessage = inject("errorMessage");
const resources = inject("resources");

function deleteHandler(id) {
	const index = resources.value.findIndex((resource) => resource.id === id);
	resources.value.splice(index, 1);
	// Delete this data from Firebase
	fetch(
		`https://vue-http-demo-96356-default-rtdb.asia-southeast1.firebasedatabase.app/resources/${id}.json`,
		{
			method: "Delete",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((response) => {
			if (response.ok) {
				// if sucess do something
				console.log(`Delete Success!`);
			} else {
				// if fail throw error
				throw new Error("could not delete data");
			}
		})
		.catch((error) => {
			console.log(id);
			throw new Error(error);
		});
}
</script>

<style scoped>
p {
	text-align: center;
}
ul {
	list-style: none;
	margin: 0 auto;
	padding: 0;
	max-width: 40rem;
	display: flex;
	flex-direction: column-reverse;
	gap: 2rem;
}
</style>
