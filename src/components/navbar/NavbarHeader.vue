<template>
    <div class="navbar-wrapp">
        <div>Logo</div>
        <div class="navbar-items">
            <ul class="d-flex align-items-center gap-3 list-unstyled">
                <li>Home</li>
                <li>Store</li>
                <li>Account</li>
                <li>
                    <SvgIcon type="mdi" :path="mdiCart"  :style="{height: 23, width: 25}" />
                </li>
                <li>
                    <SvgIcon type="mdi" :path="account" class="icon"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartArrowDown } from '@mdi/js';
import { mdiAccountEdit } from '@mdi/js';


export default {
    name: 'navbarItems',
    components: { SvgIcon},

    data() {
        return {
            mdiCart: mdiCartArrowDown,
            account: mdiAccountEdit
        };
    },

}


</script>

<style lang="sass" scoped>

.navbar-wrapp
  height: 60px
  background-color: aliceblue
  padding: 24px 40px
  display: flex
  justify-content: space-between
  align-items: center

.icon
    height: 25px
    width: 25px
</style>