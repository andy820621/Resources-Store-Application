<template>
	<BaseCard>
		<BaseButton @click="goToStoreResource" :mode="StoreResourceButtonMode"
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
import { ref, provide, onMounted } from "vue";

import StoreResource from "@/components/learning-resources/StoreResource.vue";
import AddResource from "@/components/learning-resources/AddResource.vue";
import { computed } from "@vue/reactivity";

const isLoading = ref(false);
const errorMessage = ref(null);
provide("errorMessage", errorMessage);
provide("isLoading", isLoading);

const StoreResources = ref([]);
provide("resources", StoreResources);

const currentTab = ref("StoreResource");
const tabs = {
	StoreResource,
	AddResource,
};

function setCurrentTab(tab) {
	currentTab.value = tab;
}

async function updateStoreResource() {
	isLoading.value = true;
	errorMessage.value = null;

	StoreResources.value.length = 0;
	const resources = await fetch(
		"https://vue-http-demo-96356-default-rtdb.asia-southeast1.firebasedatabase.app/resources.json"
	)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("could not get datas");
			}
		})
		.catch((error) => {
			isLoading.value = false;
			errorMessage.value = error.message;
		});
	isLoading.value = false;
	for (let key in resources) {
		resources[key].id = key;
		StoreResources.value.push(resources[key]);
	}
}

async function goToStoreResource() {
	await updateStoreResource();
	setCurrentTab("StoreResource");
}
provide("goToStoreResource", goToStoreResource);

// computed
const StoreResourceButtonMode = computed(() =>
	currentTab.value === "StoreResource" ? null : "flat"
);
const AddResourceButtonMode = computed(() =>
	currentTab.value === "AddResource" ? null : "flat"
);

// before mount
onMounted(async () => {
	await updateStoreResource();
});
</script>

<style lang="scss" scoped>
.card:nth-of-type(1) {
	display: flex;
	justify-content: center;
	gap: 1rem;
}
</style>
