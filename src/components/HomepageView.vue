<template>
  <div class="flex flex-col w-full h-full">
    <HeaderComponent />
    <template v-if="isMenuOn">
      <MenuComponent />
    </template>
    <div
      v-else
      :class="{ '!min-h-[150px]': showThemes && windowWidth < 743 }"
      class="w-full flex flex-col tablet:flex-row text-black bg-[#F4F4F4] tablet:min-h-0 mt-[90px] tablet:mt-[200px]"
    >
      <div class="flex items-center justify-center gap-2 w-fit p-4">
        <p class="font-bold text-2xl tablet:text-3xl tablet:min-w-[150px]">
          Tutti i temi
        </p>
        <div
          @click="showThemes = !showThemes"
          :class="{ 'rotate-180': !showThemes }"
          class="content-arrow_down w-5 tablet:hidden"
        ></div>
      </div>
      <div
        v-if="showThemes"
        class="w-full flex flex-row flex-wrap gap-3 tablet:pr-4 pl-4 tablet:p-0 items-center tablet:scale-90 laptop:scale-100"
      >
        <div
          v-for="theme in themes"
          :class="{ [theme.color]: theme.color }"
          class="tablet:h-10 border border-black rounded flex items-center justify-center font-bold text-[10px] p-2 shadow-[-2px_2px_0px_0px_#000000]"
        >
          <p>{{ theme.label.toUpperCase() }}</p>
        </div>
      </div>
    </div>

    <template v-if="!isMenuOn">
      <FirstBlock />

      <div
        class="bg-[#F4F1DE] flex font-bold h-[150px] items-center justify-center"
      >
        <div
          class="flex flex-col tablet:flex-row font-bold tablet:items-center justify-between w-[90%]"
        >
          <p class="text-2xl tablet:text-4xl">Il tuo supporto è fondamentale</p>
          <div class="flex items-center gap-2">
            <p>Dail il tuo contributo</p>
            <div class="text-sm content-arrow_right_black w-5"></div>
          </div>
        </div>
      </div>

      <SecondBlock />
    </template>
  </div>
</template>

<script>
import FirstBlock from "./FirstBlock.vue";
import SecondBlock from "./SecondBlock.vue";
import HeaderComponent from "./HeaderComponent.vue";
import MenuComponent from "./MenuComponent.vue";

export default {
  name: "HomepageView",
  data() {
    return {
      isMenuOn: false,
      themes: [
        { label: "ambiente", color: "bg-[#E2F1E8]" },
        { label: "economia", color: "bg-[#E2E8F1]" },
        { label: "mondo", color: "bg-[#F1DADA]" },
        { label: "non profit", color: "bg-[#F0E2F1]" },
        { label: "politica", color: "bg-[#F1F1E2]" },
        { label: "società", color: "bg-[#E2F0F1]" },
        { label: "welfare", color: "bg-[#F5E6E0]" },
      ],
      showThemes: true,
      windowWidth: window.innerWidth,
    };
  },
  components: {
    HeaderComponent,
    MenuComponent,
    FirstBlock,
    SecondBlock,
  },
  props: {
    msg: String,
  },
  computed: {
    internalMsg: {
      get() {
        return this.msg;
      },
      set(value) {
        this.$emit("update:msg", value); // Emit an update event to the parent
      },
    },
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowSize);
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      if (newWidth != oldWidth) {
        if (newWidth > 360) this.showThemes = true;
      }
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the homepage here */
</style>
