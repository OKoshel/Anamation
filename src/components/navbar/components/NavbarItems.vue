<template>
  <div class="sidebar-items d-flex gap-4">
    <SidebarItemRerender
      v-for="(item, index) in SIDEBAR_ITEMS"
      :key="item.id"
      :item="item"
      @click="handleNavClick(index)"
    />
  </div>
</template>

<script>
import SidebarItemRerender from "@/components/navbar/components/NavbarItemRerender.vue";

export default {
  components: {
    SidebarItemRerender,
  },
  data() {
    return {
      SIDEBAR_ITEMS: [
        {
          name: "Sevices",
          id: 1,
          isActive: false,
          href: "/services",
        },
        {
          name: "Case Studies",
          id: 2,
          isActive: true,
          href: "/cases",
        },
        {
          name: "Blog",
          id: 3,
          isActive: false,
          href: "/blog",
        },
        {
          name: "About Us",
          id: 4,
          isActive: false,
          href: "/about",
        },
      ],
    };
  },
  methods: {
    handleNavClick(index) {
      this.$router.push(this.SIDEBAR_ITEMS[index].href);
    },
  },
};
</script>

<style lang="sass">
.sidebar

    &-items
      display: flex

      li
            padding: 10px
            width: 100%
            display: flex
            align-items: center
            justify-content: center
            cursor: pointer
</style>
