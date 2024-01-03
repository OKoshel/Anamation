<template>
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
      <MarketingComponent />
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
import MarketingComponent from "@/components/marketing/MarketingComponent.vue";

export default {
  components: {
    NavbarHeader,
    HeroComponent,
    Navigation,
    GraphComponent,
    UnvisibleComponent,
    MarketingComponent,
    LogoText,
  },
  // mounted() {
  //   this.changeBlock();
  // },
  methods: {
    // changeBlock() {
    //   let tl = gsap.timeline();
    //
    //   tl.to(".visible", {
    //     duration: 2,
    //     delay: 8,
    //     y: -window.innerHeight,
    //     onStart: () => {
    //       gsap.set(".unvisible", {
    //         display: "block",
    //         opacity: 1,
    //       });
    //
    //       // Create a nested timeline for the subsequent animations
    //       let nestedTl = gsap.timeline({ delay: 1 });
    //       nestedTl.to(".rest-blocks", {
    //         duration: 2,
    //         y: -86,
    //       });
    //     },
    //   });
    // },
    // changeBlock() {
    //   let tl = gsap.timeline();
    //
    //   tl.to(".visible", {
    //     duration: 2,
    //     y: -window.innerHeight,
    //     delay: 8,
    //     onStart: () => {
    //       gsap.set(".unvisible", {
    //         display: "block",
    //         opacity: 1,
    //       });
    //       gsap.to(".rest-blocks", {
    //         duration: 2,
    //         y: -86,
    //         delay: 1,
    //       });
    //     },
    //   });
    // },
  },
};
</script>

<style lang="sass">

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
  height: 100vh

.rest-blocks
  z-index: 6

  //margin-top: -180px
</style>
