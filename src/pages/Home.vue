<template>
  <UnvisibleComponent />
  <HeroComponent />
  <Navigation />
  <GraphComponent />
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import Navigation from "@/components/navbar/Navigation.vue";
import GraphComponent from "@/components/graph/GraphComponent.vue";
import UnvisibleComponent from "@/components/hero/UnvisibleComponent.vue";

export default {
  components: {
    HeroComponent,
    Navigation,
    GraphComponent,
    UnvisibleComponent,
  },
};
</script>

<style lang="scss" scoped></style>
