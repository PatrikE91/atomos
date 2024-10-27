<template>
	<HomepageView />
</template>

<script>
import HomepageView from "./components/HomepageView.vue";

export default {
	name: "App",
	data() {
      return {
		isWantedDesktop: null,
      };
    },
	components: {
		HomepageView,
	},
	methods: {
		handleWindowResize: function () {
			this.isWantedDesktop = window.innerWidth >= 1024 ? true : false;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: white;
}
</style>
