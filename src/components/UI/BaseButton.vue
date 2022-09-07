<template>
	<button :type="type" :class="mode">
		<slot></slot>
	</button>
</template>

<script setup>
defineProps(["type", "mode"]);
</script>

<style lang="scss" scoped>
button {
	padding: 0.75rem 1.5rem;
	font-family: inherit;
	background-color: hsl(var(--clr-button));
	border: 1px solid hsl(var(--clr-button));
	border-radius: 0.4rem;
	color: #eee;
	cursor: pointer;
	transition: 0.3s, transform 0s;
}
button:hover,
button:active {
	background-color: hsl(var(--clr-button) / 0.81);
}
button:active {
	transform: translateY(0.24rem);
}

.flat {
	background-color: transparent;
	color: hsl(var(--clr-button));
	border-color: hsl(var(--clr-button));
}
.flat:hover,
.flat:active {
	background-color: hsl(var(--clr-light));
}
</style>
