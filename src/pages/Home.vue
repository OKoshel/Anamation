<template>
  <HeroComponent />
  <Navigation />
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import Navigation from "@/components/navbar/Navigation.vue";
export default {
  components: {
    HeroComponent,
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
