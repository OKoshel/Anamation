<template>
  <div class="w-100 hero" ref="hero">
    <div class="main-hero">
      <div class="main-hero__logo d-flex justify-content-end">
        <h4 class="main-hero__logo-name">Digital Marketing<br />Agency</h4>
      </div>
      <div class="main-hero__image">
        <img :src="currentImage" />
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
  data() {
    return {
      images: ["/main-hero.png", "/main-hero-mirror.png"],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  mounted() {
    setInterval(this.changeImage, 1500);
    this.scrollHeader();
  },
  methods: {
    changeImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    scrollHeader() {
      gsap.to(this.$refs.hero, {
        position: "fixed",

        scrollTrigger: {
          trigger: this.$refs.hero,
          start: "top top",
          end: "600px",
          scrub: true,

          // markers: true,
          onEnter: () => {
            const heroHeight = this.$refs.hero.clientHeight;
            gsap.to(".rest-blocks", {
              paddingTop: `${heroHeight}px`,
            });
          },

          onUpdate: (self) => {
            const brith = 1 - self.progress;
            gsap.to(".main-hero__image", {
              filter: `brightness(${brith})`,
            });
          },

          onLeaveBack: () => {
            const heroHeight = this.$refs.hero.clientHeight;
            gsap.to(".rest-blocks", {
              paddingTop: `${heroHeight}px`,
            });
            // gsap.to(this.$refs.hero, {
            //   position: "absolute",
            //   height: "100vh",
            // });
          },
        },
      });
      gsap.to(".hero", {
        scrollTrigger: {
          trigger: ".chartCard",
          start: "1500px",
          end: "2000px",
          scrub: true,

          // markers: true,
          onEnter: () => {
            gsap.to(".hero", {
              height: "50%",
            });
          },
          onLeaveBack: () => {
            gsap.to(".hero", {
              height: "100vh",
            });
          },
        },
      });
    },
  },
};
</script>

<style lang="sass">
.hero
  height: 100vh
  position: fixed
  top: 0


.main-hero
  height: 100%
  &__image
    height: 100%
    filter: brightness(1)
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
      font-family: Suisse Intl, serif
      font-size: 18px
      font-style: normal
      font-weight: 400
      line-height: 120%
</style>
