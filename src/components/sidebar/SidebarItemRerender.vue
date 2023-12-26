<template>
  <router-link
    :to="item.href"
    :class="{ 'sidebar-item': true, active: item.href === $route.path }"
  >
    {{ item.name }}
  </router-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.sidebar-item
  padding: 10px
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  color: black
  text-decoration: none

.active
  background-color: aliceblue
</style>
