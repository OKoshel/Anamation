<template>
    <div class="navbar-wrapp">
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
      width: 100%
      display: flex
      justify-content: flex-end
      align-items: center
      box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24)
      padding: 10px 36px 10px 10px
      background-color: white
      border-bottom: 1px solid rgba(145, 158, 171, 0.24)


.icon
    height: 25px
    width: 25px
</style>