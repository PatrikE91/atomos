<template>
	<div class="w-full h-full tablet:grid grid-cols-3 text-sm text-black hidden mt-[90px] tablet:mt-[200px]">
		<div class="flex flex-col border-r border-black">
			<div class="flex h-[300px] items-end border-b border-black">
				<div class="pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Articoli</p>
					<p>Trend, dati e novità del Terzo Settore.</p>
				</div>
			</div>
			<div class="flex h-[300px] items-end border-b border-black">
				<div class=" pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Opinioni</p>
					<p>Riflessioni e confronti dei nostri opinionisti.</p>
				</div>
			</div>
			<div class="grid grid-cols-2 min-h-[90px]">
				<div
					class="flex items-center justify-center border-r border-black"
				>
					<p>Chi siamo</p>
				</div>
				<div
					class="flex items-center justify-center"
				>
					<p>Comitato editoriale</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col border-r border-black">
			<div class="flex h-[300px] items-end border-b border-black">
				<div class=" pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Storie</p>
					<p>Letture ed approfondimenti dei fenomeni complessi.</p>
				</div>
			</div>
			<div class="flex h-[300px] items-end border-b border-black">
				<div class=" pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Podcast</p>
					<p>Un luogo per dar voce ai protagonisti della sostenibilità.</p>
				</div>
			</div>
			<div class="grid grid-cols-2 min-h-[90px]">
				<div
					class="flex items-center justify-center border-r border-black"
				>
					<p>Servizi</p>
				</div>
				<div
					class="flex items-center justify-center"
				>
					<p>Agenda / Eventi</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col border-r border-black">
			<div class="flex h-[300px] items-end border-b border-black">
				<div class=" pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Interviste</p>
					<p>Racconti reali di persone ed organizzazioni.</p>
				</div>
			</div>
			<div class="flex h-[300px] items-end border-b border-black">
				<div class=" pl-7 min-h-[120px]">
					<p class="font-bold text-[33px] laptop:text-5xl">Bookazine</p>
					<p>Una rivista da leggere e un libro da conservare.</p>
				</div>
			</div>
			<div class="grid grid-cols-2 min-h-[90px]">
				<div
					class="flex items-center justify-center border-r border-black"
				>
					<p>Mappa dell'attivismo</p>
				</div>
				<div
					class="flex items-center justify-center"
				>
					<p>Inchieste crowdfounding</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuComponent",
	data() {
		return {};
	},
};
</script>

<style scoped>
/* Add any styles specific to your header component here */
</style>
