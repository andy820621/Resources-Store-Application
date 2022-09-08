<template>
	<li>
		<BaseCard>
			<header>
				<h3>{{ title }}</h3>
				<BaseButton type="button" mode="flat" @click="emit('delete')"
					>Delete</BaseButton
				>
			</header>

			<p>{{ description }}</p>

			<nav>
				<a :href="link" target="_blank">View Resource</a>
			</nav>
		</BaseCard>
	</li>
</template>

<script setup>
const props = defineProps(["title", "description", "link"]);

const emit = defineEmits(["delete"]);
</script>

<style scoped>
li {
	margin: 0 auto;
	min-width: 40rem;
}
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
h3 {
	font-size: 1.25rem;
	margin: 0.5rem 0;
}
p {
	margin: 0.5rem 0;
}
a {
	text-decoration: none;
	color: #ce5c00;
	transition: 0.3s;
}
a:hover,
a:active {
	color: #c89300;
}
nav {
	margin-top: 0.8rem;
}
.noMargin .card {
	margin: 0;
}
</style>
