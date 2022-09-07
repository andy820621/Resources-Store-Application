<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
header {
	width: 100vw;
	height: 5rem;
	background-color: hsl(var(--clr-primary));
	display: flex;
	justify-content: center;
	align-items: center;
}
header h1 {
	color: #eee;
	margin: 0;
}
</style>
