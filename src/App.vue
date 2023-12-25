<script>
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
import {defineComponent} from "vue";


export default defineComponent({
   components: {NavbarHeader}
})

</script>

<template>
<NavbarHeader/>
   <div class="app"></div>
</template>

<style>

.app{
   padding: 24px 40px;
}




</style>
