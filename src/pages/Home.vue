<template>
  <HeroComponent />
  <Navigation />
  <GraphComponent />
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import Navigation from "@/components/navbar/Navigation.vue";
import GraphComponent from "@/components/graph/GraphComponent.vue";
export default {
  components: {
    HeroComponent,
    Navigation,
    GraphComponent,
  },
};
</script>

<style lang="scss" scoped></style>
