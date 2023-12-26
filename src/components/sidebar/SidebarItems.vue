<template>
  <div class="sidebar">
    <div class="sidebar-logo" @click="$router.push('/')">
      <img src="/public/logo.png" />
    </div>
    <div class="sidebar-items d-flex flex-column">
      <ul class="list-unstyled">
        <SidebarItemRerender
          v-for="(item, index) in SIDEBAR_ITEMS"
          :key="item.id"
          :item="item"
          @click="handleNavClick(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarItemRerender from "@/components/sidebar/SidebarItemRerender.vue";

export default {
  components: {
    SidebarItemRerender,
  },
  data() {
    return {
      SIDEBAR_ITEMS: [
        {
          name: "Home",
          id: 1,
          isActive: false,
          // icon: <DashboardIcon />,
          href: "/",
        },
        {
          name: "Products",
          id: 2,
          isActive: true,
          // icon: <ProductsIcon />,
          href: "/products",
        },
        {
          name: "Account",
          id: 3,
          isActive: false,
          // icon: <OrganisationIcon />,
          href: "/account",
        },
        {
          name: "Cart",
          id: 4,
          isActive: false,
          // icon: <MembersIcon />,
          href: "/cart",
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
    width: 250px
    height: 100vh
    background-color: white
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24)
    &-logo
        display: flex
        justify-content: center
        padding: 0px 40px
        img
            height: 100px
            width: 110px
    &-items
        li
            padding: 10px
            width: 100%
            display: flex
            align-items: center
            justify-content: center
            cursor: pointer
</style>
