<template>
  <div class="position-fixed top-0 w-100 hero" ref="hero">
    <div class="main-hero">
      <div class="main-hero__logo d-flex justify-content-end">
        <h4 class="main-hero__logo-name">Digital Marketing<br />Agency</h4>
      </div>
      <div class="main-hero__image">
        <img src="/main-hero.png" />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/navbar/Navigation.vue";
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { NavbarHeader, Navigation },
  // mounted() {
  //   this.scroll();
  //   this.handleResize();
  //   window.addEventListener("resize", this.handleResize);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.handleResize);
  // },
  // methods: {
  // handleResize() {
  //   // Update the hero height on window resize
  //   gsap.set(this.$refs.hero, {
  //     height: window.innerHeight,
  //   });
  // },
  // scroll() {
  //   gsap.to(this.$refs.hero, {
  //     height: 100,
  //     scrollTrigger: {
  //       trigger: ".navigation",
  //       start: "center top",
  //       end: "bottom",
  //       scrub: true,
  //       markers: true,
  //       onEnterBack: () => {
  //         gsap.set(this.$refs.hero, {
  //           height: "100vh",
  //         });
  //       },
  //     },
  //   });
  // },
  //   },
  // };
};
</script>

<!--<script>-->
<!--import Navigation from "@/components/navbar/Navigation.vue";-->
<!--import NavbarHeader from "@/components/navbar/NavbarHeader.vue";-->
<!--import { gsap } from "gsap";-->
<!--import { ScrollTrigger } from "gsap/ScrollTrigger";-->
<!--gsap.registerPlugin(ScrollTrigger);-->
<!--export default {-->
<!--  components: { NavbarHeader, Navigation },-->
<!--  mounted() {-->
<!--    this.scroll();-->
<!--  },-->
<!--  methods: {-->
<!--    scroll() {-->
<!--      gsap.to(".hero", {-->
<!--        height: 80,-->

<!--        scrollTrigger: {-->
<!--          trigger: ".navigation",-->
<!--          start: "center top",-->
<!--          end: "bottom",-->
<!--          scrub: true,-->
<!--          markers: true,-->
<!--        },-->
<!--      });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<style lang="sass" scoped>

.hero
  height: 100vh

.main-hero
  height: 100%
  &__image
    height: 100%
    img
      height: 100%
      object-fit: cover
      width: 100%
      top: 0
      right: 0

  &__logo
    z-index: 2
    padding: 20px
    position: absolute
    width: 100%

    &-name
      color: #E63E3A
      text-align: right
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      font-family: Suisse Intl
      font-size: 18px
      font-style: normal
      font-weight: 400
      line-height: 120%
</style>
