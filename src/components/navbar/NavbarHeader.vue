<template>
  <div class="navbar-wrapp d-flex justify-content-between">
    <img src="/header-logo.svg" />
    <div>
      <SidebarItems />
    </div>
    <div class="d-flex navbar-call-wrapp">
      <div>
        <ul class="list-unstyled d-flex gap-4">
          <li class="sidebar-item">We're hiring</li>
          <li class="sidebar-item">Contacts</li>
        </ul>
      </div>
      <div class="navbar-call d-flex align-items-center">
        <img src="/arr.svg" />
        <p>Book a call</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCartArrowDown } from "@mdi/js";
import { mdiAccountEdit } from "@mdi/js";
import SidebarItems from "@/components/navbar/components/NavbarItems.vue";

export default {
  name: "navbarItems",
  components: { SvgIcon, SidebarItems },

  data() {
    return {
      mdiCart: mdiCartArrowDown,
      account: mdiAccountEdit,
    };
  },
};
</script>

<style lang="sass" scoped>

.navbar
  &-call
    display: flex
    width: 330px
    height: 51px
    padding-right: 18px
    justify-content: flex-end
    align-items: center
    gap: 55px
    flex-shrink: 0
    background: #101820
    &-wrapp
      gap: 118px
    p
      color: #E63E3A
      font-family: Suisse Intl
      font-size: 22px
      font-weight: 400
      margin-bottom: 0px


  &-wrapp
      height: 87px
      width: 100%
      display: flex
      align-items: center
      padding: 18px 20px

.icon
    height: 25px
    width: 25px
    fill: black
    color: black
</style>
