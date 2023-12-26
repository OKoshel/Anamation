<script>
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
import SidebarItems from "@/components/sidebar/SidebarItems.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { NavbarHeader, SidebarItems },
});
</script>

<template>
  <div class="d-flex">
    <div>
      <SidebarItems />
    </div>
    <div class="d-flex flex-column w-100">
      <NavbarHeader />
      <div class="app">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  padding: 24px;
}
</style>
