<template>
  <div class="parent">
    <div class="logo-text">
      <logo-text />
    </div>
    <div class="visible-component">
      <visible-first />
    </div>
    <div class="unvisible">
      <div class="hero-component">
        <hero-component />
      </div>
      <div class="position-relative rest-blocks" ref="rest-blocks">
        <navigation />
        <graph-component />
        <marketing-component />
        <Services />
      </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import Navigation from "@/components/navbar/Navigation.vue";
import GraphComponent from "@/components/graph/GraphComponent.vue";
import VisibleFirst from "@/components/hero/VisibleFirst.vue";
import LogoText from "@/components/hero/LogoText.vue";
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
import MarketingComponent from "@/components/marketing/MarketingComponent.vue";
import Services from "@/components/services/Services.vue";

export default {
  components: {
    NavbarHeader,
    HeroComponent,
    Navigation,
    GraphComponent,
    VisibleFirst,
    MarketingComponent,
    LogoText,
    Services,
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
