<template>
	<ul>
		<ResourceList
			v-for="resource in resources"
			:key="resource.id"
			:title="resource.title"
			:description="resource.description"
			:link="resource.link"
			@delete="deleteHandler(resource.id)"
		/>
	</ul>
</template>

<script setup>
import ResourceList from "@/components/learning-resources/ResourceList.vue";
import { inject } from "vue";
const resources = inject("resources");

function deleteHandler(id) {
	const index = resources.findIndex((resource) => resource.id === id);
	resources.splice(index, 1);
}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0 auto;
	padding: 0;
	max-width: 40rem;
}
</style>
