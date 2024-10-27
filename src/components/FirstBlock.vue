<template>
	<div class="w-full h-full flex flex-col overflow-x-hidden gap-[1px] bg-white">
		<div
			class="w-full flex items-end bg-doctors bg-no-repeat bg-cover bg-50 h-[280px] tablet:h-[360px] relative text-white"
		>
			<div class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-0"></div>
			<div
				class="flex flex-col z-[1] tablet:mb-10 mb-4 tablet:ml-7 ml-5 gap-3"
			>
				<div
					class="bg-white text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] p-1 text-[10px] font-bold"
				>
					MIGRANTI
				</div>
				<div
					class="font-bold text-2xl tablet:text-4xl max-w-[315px] tablet:max-w-[600px]"
				>
					Roccella Jonica, la Lampedusa che l'Italia ignora
				</div>
				<div class="flex gap-2 items-center">
					<div class="content-author_1 w-6 tablet:w-10"></div>
					<div class="flex flex-col">
						<p class="text-sm tablet:text-lg">
							Di Alessandro Puglia
						</p>
						<p class="text-[10px] tablet:text-sm">29 Giugno 2022</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col tablet:flex-row tablet:h-[550px] gap-[1px]">
			<div
				class="w-full tablet:w-[55%] flex flex-col tablet:flex-row items-center tablet:items-end bg-white tablet:bg-river bg-no-repeat bg-cover bg-50 relative text-black tablet:text-white"
			>
				<div
					class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
				></div>
				<div
					class="bg-river bg-no-repeat bg-cover bg-50 tablet:absolute h-[150px] tablet:hidden w-[95%] mt-5 relative"
				>
					<div
						class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-0"
					></div>
				</div>

				<div
					class="flex flex-col z-[5] tablet:mb-5 mb-4 tablet:ml-7 ml-5 gap-3 bg-white tablet:bg-transparent w-full"
				>
					<div
						class="bg-[#E2F1E8] tablet:bg-white text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] p-1 text-[10px] font-bold border border-black mt-3"
					>
						ALLARMI
					</div>
					<div
						class="font-bold text-xl tablet:text-3xl max-w-[315px] tablet:max-w-[600px]"
					>
						Il collasso dei giacciai negli scarri del fotografo
						ambientale Fabiano Ventura
					</div>
					<div class="flex flex-row tablet:flex-col gap-2 items-center tablet:items-start">
						<div class="content-author_2 w-6 h-6 tablet:h-10 tablet:w-10"></div>
						<div class="flex flex-col">
							<p class="text-sm tablet:text-lg">Di Ugo Lombi</p>
							<p class="text-[10px] tablet:text-sm">
								14 Luglio 2022
							</p>
						</div>
						<div class="content-arrow_right w-5 hidden tablet:block"></div>
					</div>
				</div>
			</div>

			<div class="flex flex-col w-full tablet:w-[45%] gap-[1px]">
				<div
					class="w-full h-[50%] border-t border-black tablet:border-none flex tablet:bg-people bg-no-repeat bg-cover bg-50 relative text-black tablet:text-white"
				>
					<div
						class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
					></div>

					<div
						class="flex flex-col z-[5] tablet:ml-7 ml-5 gap-2 mt-4 tablet:mt-7 mb-4"
					>
						<div
							class="tablet:bg-white bg-[#E2F0F1] border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
						>
							ESPERIMENTI
						</div>

                        <div class="border border-[#CCCCCC] flex items-center justify-center h-10 rounded-lg bg-white max-w-[90%] text-black text-[10px] tablet:gap-3 gap-1">
                            <div class="content-pause w-5"></div>
                            <div class="content-sound_wave w-[76%]"></div>
                            <p>03:34</p>
                        </div>

						<div
							class="font-bold tablet:text-lg max-w-[315px] tablet:max-w-[300px]"
						>
							Gli startupper? Li trovi al bistrot. Così il Dumbo
							incuba relazioni
						</div>
						<div class="flex flex-col gap-2">
							<div class="content-author_3 w-6 "></div>
							<div class="flex flex-col">
								<p class="text-sm ">
									Di Diletta Grella
								</p>
								<p class="text-[10px]">
									27 Agosto 2022
								</p>
							</div>
							<div class="content-arrow_right w-5 hidden tablet:block"></div>
						</div>
					</div>
				</div>

				<div
					class="w-full h-[50%] border-t border-black tablet:border-none flex tablet:bg-ukraine bg-no-repeat bg-cover bg-50 relative text-black tablet:text-white"
				>
					<div
						class="absolute h-full w-full bg-[rgba(0,0,0,0.2)] z-[1] hidden tablet:block"
					></div>
					<div
						class="flex flex-col z-[5] tablet:mb-5 mt-4 tablet:mt-7 mb-4 tablet:ml-7 ml-5 gap-3"
					>
						<div
							class="bg-[#F1DADA]  border border-black tablet:border-none text-black w-fit rounded shadow-[-2px_2px_0px_0px_#000000] px-1 text-[10px] font-bold"
						>
							UCRAINA
						</div>
						<div
							class="font-bold tablet:text-xl max-w-[315px] tablet:max-w-[600px]"
						>
							Nelle città italiane tutti in piazza per e con Kiev
						</div>
						<div class="flex flex-col gap-2">
							<div class="content-author_4 w-6"></div>
							<div class="flex flex-col">
								<p class="text-sm ">
									Di Anna Spena
								</p>
								<p class="text-[10px] ">
									27 Agosto 2022
								</p>
							</div>
							<div class="content-arrow_right w-5 hidden tablet:block"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FirstBlock",
	data() {
		return {};
	},
};
</script>

<style scoped>
/* Add any styles specific to your header component here */
</style>
