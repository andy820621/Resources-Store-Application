<template>
	<TheHeader title="RememberMe" />
	<TheResources />
</template>

<script setup>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheResources from "@/components/learning-resources/TheResources.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

:root {
	--clr-primary: 24 81% 30%;
	--clr-button: 24 81% 35%;
	--clr-light: 24 60% 93%;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}
html {
	font-family: "Roboto", sans-serif;
}
html,
body {
	background-color: #282f38;
	color: #fff;
	display: flex;
	justify-content: center;
	margin: 0;
}
ul {
	list-style: none;
}
a {
	color: #eee;
}
</style>
