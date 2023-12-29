<template>
  <div class="navigation">
    <NavbarHeader />
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
</style>
