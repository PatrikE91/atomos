<template>
	<div class="w-full h-full flex flex-col overflow-x-hidden gap-[1px]">
		<div
			class="flex flex-col tablet:grid grid-cols-3 gap-[1px] min-h-[300px]"
		>
			<div
				class="flex bg-[#E63036] border-t border-black tablet:border-none tablet:text-white"
			>
				<div
					class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3"
				>
					<div
						class="bg-[#F1DADA] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
					>
						PROGETTO ARCA
					</div>
					<div
						class="font-bold tablet:text-xl max-w-[315px] h-[84px]"
					>
						"Qui Odessa", fotografie, progetti e solidarietà
					</div>
					<div class="flex flex-col gap-2">
						<div class="content-author_5 w-6"></div>
						<div class="flex flex-col">
							<p class="text-sm">Di Redazione</p>
							<p class="text-[10px]">27 Agosto 2022</p>
						</div>
						<div
							class="content-arrow_right w-5 hidden tablet:block"
						></div>
					</div>
				</div>
			</div>
			<div
				class="flex tablet:bg-woman bg-no-repeat bg-cover bg-50 border-t border-black tablet:border-none relative tablet:text-white"
			>
				<div
					class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
				></div>
				<div
					class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3"
				>
					<div
						class="bg-[#F1DADA] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
					>
						ADOLESCENTI
					</div>
					<div class="font-bold tablet:text-xl max-w-[315px]">
						Storie fra ragazzi permeate di violenza. A napoli 12enne
						sfregiate da 17enne
					</div>
					<div class="flex flex-col gap-2">
						<div class="content-author_6 w-6"></div>
						<div class="flex flex-col">
							<p class="text-sm">Di Luca Cereda</p>
							<p class="text-[10px]">27 Agosto 2022</p>
						</div>
						<div
							class="content-arrow_right w-5 hidden tablet:block"
						></div>
					</div>
				</div>
			</div>
			<div
				class="flex tablet:bg-meeting bg-no-repeat bg-cover bg-50 border-t border-black tablet:border-none relative tablet:text-white"
			>
				<div
					class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
				></div>
				<div
					class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3"
				>
					<div
						class="bg-[#F1DADA] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
					>
						ECONOMIA CIVILE
					</div>
					<div class="font-bold tablet:text-xl max-w-[315px]">
						"Co-agitiamo", Tiggiano una cooperativa di comunità
						contro lo spopolamento
					</div>
					<div class="flex flex-col gap-2">
						<div class="content-author_7 w-6"></div>
						<div class="flex flex-col">
							<p class="text-sm">Di Emiliano Moccia</p>
							<p class="text-[10px]">27 Agosto 2022</p>
						</div>
						<div
							class="content-arrow_right w-5 hidden tablet:block"
						></div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col tablet:grid grid-cols-3 gap-[1px] min-h-[300px]"
		>
			<div
				class="col-span-1 flex tablet:bg-box bg-no-repeat bg-cover bg-50 border-t border-black tablet:border-none relative tablet:text-white"
			>
				<div
					class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
				></div>
				<div
					class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3"
				>
					<div
						class="bg-[#F1DADA] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
					>
						SPORT
					</div>
					<div
						class="border border-[#CCCCCC] flex items-center justify-center h-10 rounded-lg bg-white max-w-[90%] text-black text-[10px] tablet:gap-3 gap-1"
					>
						<div class="content-pause w-5"></div>
						<div class="content-sound_wave w-[76%]"></div>
						<p>03:34</p>
					</div>
					<div class="font-bold tablet:text-xl max-w-[315px]">
						Troppi abusi nello sport minorile, il governo interviene
					</div>
					<div class="flex flex-col gap-2">
						<div class="content-author_6 w-6"></div>
						<div class="flex flex-col">
							<p class="text-sm">Di Luca Cereda</p>
							<p class="text-[10px]">27 Agosto 2022</p>
						</div>
						<div
							class="content-arrow_right w-5 hidden tablet:block"
						></div>
					</div>
				</div>
			</div>

			<div
				class="col-span-2 flex tablet:grid grid-cols-2 tablet:bg-womanB&W bg-no-repeat bg-cover bg-50 border-t tablet:border-l border-black tablet:border-none relative tablet:text-white"
			>
				<div
					class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
				></div>
				<!-- EMPTY DIV JUST TO CREATE SPACE -->
				<div></div>
				<div
					class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3 w-full"
				>
					<div
						class="bg-womanB&W bg-no-repeat bg-cover bg-50 h-[300px] tablet:hidden w-[95%] mt-5 relative"
					>
						<div
							class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-0"
						></div>
					</div>
					<div
						class="bg-[#F1DADA] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
					>
						SOCIETÀ
					</div>
					<div class="font-bold tablet:text-xl max-w-[315px]">
						Donne e nuove generazioni: con loro riparte l'Italia
					</div>
					<div class="flex flex-col gap-2">
						<div class="content-author_7 w-6"></div>
						<div class="flex flex-col">
							<p class="text-sm">Di Anna Spena</p>
							<p class="text-[10px]">27 Agosto 2022</p>
						</div>
						<div
							class="content-arrow_right w-5 hidden tablet:block"
						></div>
					</div>
				</div>
			</div>
		</div>
        <div class="w-full h-[170px] bg-[#F4F4F4] tablet:bg-tree bg-50 bg-cover bg-no-repeat flex tablet:text-white items-center">
            <div class="ml-[11%] relative">
                <div class="content-quote absolute top-[-12px] left-[-50px] w-10"></div>
                <p class="text-2xl tablet:text-4xl font-bold">Essere troppo seri non è cosa molto seria</p>
                <p class="max-tablet:text-sm">[ Detto africano ]</p>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: "SecondBlock",
	data() {
		return {};
	},
};
</script>

<style scoped>
/* Add any styles specific to your header component here */
</style>
