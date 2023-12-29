<template>
  <router-link
    :to="item.href"
    :class="{ 'sidebar-item': true, active: item.href === $route.path }"
  >
    {{ item.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.sidebar-item
  padding: 10px
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  text-decoration: none
  white-space: nowrap
  color: #101820
  font-family: Suisse Intl
  font-size: 22px
  font-style: normal
  font-weight: 400


//.active
//  background-color: aliceblue
</style>
