<template>
	<teleport to="body">
		<div class="background" @click="emit('close')"></div>

		<dialog open>
			<header>
				<slot name="header">
					<h2>{{ title }}</h2>
				</slot>
			</header>
			<section>
				<slot></slot>
			</section>
			<menu>
				<slot name="actions">
					<BaseButton @click="emit('close')">Close</BaseButton>
				</slot>
			</menu>
		</dialog>
	</teleport>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: false,
	},
});

const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.background {
	position: fixed;
	inset: 0;
	background-color: rgb(0 0 0 / 0.5);
	z-index: 9;
	backdrop-filter: blur(0.15rem);
}
dialog {
	position: fixed;
	top: 20vh;
	width: 80%;
	z-index: 99;
	border-radius: 12px;
	border: none;
	box-shadow: 0 2px 8px rgb(0 0 0 / 0.26);
	padding: 0;
	margin: 0;
	overflow: hidden;
}
header {
	background-color: hsl(var(--clr-primary));
	color: #eee;
	width: 100%;
	padding: 1rem;
}
header h2 {
	margin: 0;
}
section {
	padding: 1rem;
}
menu {
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	margin: 0;
}
@media (min-width: 768px) {
	dialog {
		left: calc(50% - 20rem);
		width: 40rem;
	}
}
</style>
