<template>
	<div class="w-full flex flex-col fixed top-0 left-0 z-10 tablet:h-[200px] h-[90px] bg-white">
		<div
			class="grid grid-cols-2 tablet:flex flex-row w-full min-h-10 text-sm"
		>
			<div
				class="border-r border-black tablet:border-none flex items-center justify-center tablet:mx-4"
			>
				<p>Contribuisci</p>
			</div>
			<div
				class="flex items-center justify-center tablet:grow tablet:justify-start"
			>
				<p>Abbonati</p>
			</div>
			<div
				class="hidden tablet:flex flex-row items-center justify-center mr-4"
			>
				<div class="content-login w-4"></div>
				<p>Accedi</p>
			</div>
		</div>
		<div
			class="w-full h-[52px] tablet:h-20 flex flex-row border-y border-black"
		>
			<div
				class="flex items-center justify-center w-[52px] tablet:w-20 h-full border-r border-black"
			>
				<div
					:class="{
						[$parent.isMenuOn
							? 'content-cross'
							: 'content-menu']: true,
						'pointer-events-none': $parent.windowWidth < 640,
					}"
					class="w-6 tablet:w-8 cursor-pointer"
					@click="$parent.isMenuOn = !$parent.isMenuOn"
				></div>
			</div>
			<div class="w-full h-full"></div>
			<div
				class="flex items-center justify-center w-[52px] tablet:w-20 h-full border-l border-black"
			>
				<div class="content-lens w-6 tablet:w-8"></div>
			</div>
		</div>
		<div
			class="w-full hidden tablet:flex gap-4 border-b border-black text-base font-bold h-20 items-center"
		>
			<div
				class="h-full flex items-center ml-4"
				@click="selectedTheme = 'all'"
				:class="{
					'border-b-8 border-[#FF2C33]': selectedTheme == 'all',
				}"
			>
				<p
					class="cursor-pointer"
					:class="{
						'pb-2': selectedTheme != 'all',
					}"
				>
					Tutti i temi
				</p>
			</div>
			<div
				v-for="theme in $parent.themes"
				class="h-full flex items-center"
				@click="selectedTheme = theme.label"
				:class="{
					'border-b-8 border-[#FF2C33]': selectedTheme == theme.label,
				}"
			>
				<p
					class="cursor-pointer"
					:class="{
						'pb-2': selectedTheme != theme.label,
					}"
				>
					{{ capitalizeFirstLetter(theme.label) }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { capitalize } from "vue";

export default {
	name: "HeaderComponent",
	data() {
		return { selectedTheme: "all" };
	},
	methods: {
		capitalizeFirstLetter(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
};
</script>

<style scoped>
/* Add any styles specific to your header component here */
</style>
