<template>
  <div class="container-block position-relative">
    <div class="logo-text">
      <LogoText />
    </div>
    <div class="visible">
      <UnvisibleComponent />
    </div>
    <div class="unvisible">
      <HeroComponent />
      <Navigation />
      <GraphComponent />
    </div>
  </div>
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import Navigation from "@/components/navbar/Navigation.vue";
import GraphComponent from "@/components/graph/GraphComponent.vue";
import UnvisibleComponent from "@/components/hero/UnvisibleComponent.vue";
import LogoText from "@/components/hero/LogoText.vue";
import { gsap } from "gsap";

export default {
  components: {
    HeroComponent,
    Navigation,
    GraphComponent,
    UnvisibleComponent,
    LogoText,
  },
  mounted() {
    this.changeBlock();
  },
  methods: {
    changeBlock() {
      let tl = gsap.timeline();

      tl.to(".visible", {
        duration: 2,
        y: -window.innerHeight,
        delay: 8,
        onStart: () => {
          gsap.set(".unvisible", { display: "block" });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-text {
  position: absolute;
}

.container-block {
  overflow: hidden;
}

.visible {
  height: 100vh;
  position: relative;
  z-index: 9999;
}
.unvisible {
  display: none;
}
</style>
