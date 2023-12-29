<template>
  <div class="position-relative">
    <div class="main-hero">
      <div
        class="main-hero__logo d-flex justify-content-between position-relative"
      >
        <div class="d-flex flex-column position-relative">
          <img src="/respect.svg" />
          <img src="/dot.svg" class="main-hero-dot" />
          <img src="/studio.svg" class="main-hero-studio" />
        </div>
        <h4 class="main-hero__logo-name">Digital Marketing<br />Agency</h4>
      </div>
      <div class="main-hero__image">
        <img src="/main-hero.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navbar/Navigation.vue";
export default {
  components: { Navigation },
};
</script>

<style lang="sass" scoped>
.main-hero
  height: 869px
  &-dot
    height: 10px
    width: 10px
  &-studio
    width: 68.012px
    height: 251.669px
    position: absolute
    left: 10px
    top: 90px

  &__image


    img
      height: 869px
      object-fit: cover
      position: absolute
      width: 100%
      top: 0
      right: 0

  &__logo
    z-index: 2
    padding: 20px

    &-name
      color: #E63E3A
      text-align: right
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      font-family: Suisse Intl
      font-size: 18px
      font-style: normal
      font-weight: 400
      line-height: 120%
</style>
