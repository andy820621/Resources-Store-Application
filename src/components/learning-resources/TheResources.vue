<template>
	<BaseCard>
		<BaseButton
			@click="setCurrentTab('StoreResource')"
			:mode="StoreResourceButtonMode"
			>Store Resources</BaseButton
		>
		<BaseButton
			@click="setCurrentTab('AddResource')"
			:mode="AddResourceButtonMode"
			>Add Resources</BaseButton
		>
	</BaseCard>

	<keep-alive>
		<component :is="tabs[currentTab]"></component>
	</keep-alive>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { ref, reactive, provide } from "vue";

import StoreResource from "@/components/learning-resources/StoreResource.vue";
import AddResource from "@/components/learning-resources/AddResource.vue";
import { computed } from "@vue/reactivity";

const StoreResources = reactive([
	{
		id: "official-guide",
		title: "Official Guide",
		description: "The official Vue.js documentation.",
		link: "https://vuejs.org",
	},
	{
		id: "google",
		title: "Google",
		description: "Learn more about Google.",
		link: "https://google.org",
	},
]);
provide("resources", StoreResources);

const currentTab = ref("StoreResource");
const tabs = {
	StoreResource,
	AddResource,
};

function setCurrentTab(tab) {
	currentTab.value = tab;
}

function addNewResource(title, description, link) {
	const newResource = {
		id: uuidv4(),
		title,
		description,
		link,
	};
	StoreResources.unshift(newResource);
	currentTab.value = "StoreResource";
}
provide("addNewResource", addNewResource);

// computed
const StoreResourceButtonMode = computed(() =>
	currentTab.value === "StoreResource" ? null : "flat"
);
const AddResourceButtonMode = computed(() =>
	currentTab.value === "AddResource" ? null : "flat"
);
</script>

<style lang="scss" scoped>
.card:nth-of-type(1) {
	display: flex;
	justify-content: center;
	gap: 1rem;
}
</style>
