<template>
  <div class="logo-text">
    <LogoText />
  </div>
  <div class="parent">
    <div class="visible-component">
      <UnvisibleComponent />
    </div>
  </div>
  <div class="unvisible">
    <div class="hero-component">
      <HeroComponent />
    </div>
    <div class="position-relative rest-blocks" ref="rest-blocks">
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
};
</script>

<style lang="sass">

.logo-text
  position: fixed
  z-index: 6
  top: 0

.visible-component
  position: relative
  z-index: 4

.unvisible
  display: block

.rest-blocks
  z-index: 6
  padding-top: 100vh
</style>
