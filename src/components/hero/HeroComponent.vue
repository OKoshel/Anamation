<template>
  <div class="position-absolute top-0 w-100">
    <div class="main-hero">
      <div class="main-hero__logo d-flex justify-content-end">
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


  &__image


    img
      height: 869px
      object-fit: cover
      //margin-top:
      //position: absolute
      width: 100%
      top: 0
      right: 0

  &__logo
    z-index: 2
    padding: 20px
    position: absolute
    width: 100%

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
