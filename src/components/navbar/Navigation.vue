<template>
  <div class="navigation position-relative">
    <NavbarHeader />
    <div class="d-flex navigation-wrapp">
      <div class="col-6">
        <h5>
          B2B Marketing & LinkedIn Lead<br />
          Generation agency
        </h5>
      </div>
      <div class="col-6">
        <h2>
          Growing<br />
          businesses by<br />
          building<br />
          relationships
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
export default {
  components: {
    NavbarHeader,
  },
};
</script>

<style lang="sass" scoped>
.navigation
  height: 868px
  background-color: #E63E3A
  margin-top: -587px
  &-wrapp
    padding: 20px

  h2
    color: #101820
    text-align: right
    font-family: Suisse Intl
    font-size: 135px
    font-style: normal
    font-weight: 400
    line-height: 96%
    letter-spacing: -4.05px
    margin-top: 74px
  h5
      position: absolute
      bottom: 30px
      left: 20px
</style>
