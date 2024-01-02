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
      <div class="position-relative rest-blocks">
        <Navigation />
        <GraphComponent />
      </div>
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
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";

export default {
  components: {
    NavbarHeader,
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
          gsap.set(".unvisible", {
            display: "block",
            opacity: 1,
          });
          gsap.to(".rest-blocks", {
            duration: 2,
            y: -86,
            delay: 1,
          });
        },
      });
    },
  },
};
</script>

<style lang="sass" scoped>

.logo-text
  position: fixed
  z-index: 6

.container-block
  overflow: hidden

.visible
  height: 100vh
  position: relative
  z-index: 4

.unvisible
  display: none

.rest-blocks
  z-index: 6
</style>
