<template>
  <div class="navigation position-relative">
    <NavbarHeader />
    <div class="box-wrapp">
      <div class="d-flex navigation-wrapp">
        <div class="col-6">
          <h5>
            B2B Marketing & LinkedIn Lead<br />
            Generation agency
          </h5>
        </div>
        <div
          class="col-6 d-flex justify-content-end align-items-end typing_text-wrapp"
        >
          <h2 class="typing_text"></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavbarHeader,
  },
  mounted() {
    this.setupScrollTrigger();
  },
  methods: {
    setupScrollTrigger() {
      let textElem = "Growing businesses by building relationships";

      gsap.to(".typing_text", {
        text: {
          value: textElem,
        },

        scrollTrigger: {
          trigger: ".navigation",
          start: "top top",
          end: "center",
          scrub: true,
          markers: true,
        },
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.navigation
  height: 868px
  background-color: #E63E3A

  &-wrapp
    padding: 20px

  h2.typing_text
    color: #101820
    text-align: right
    font-family: Suisse Intl
    font-size: 100px
    font-style: normal
    font-weight: 400
    line-height: 96%
    letter-spacing: -4.05px
    margin-top: 74px

  h5
    position: absolute
    bottom: 30px
    left: 20px

.typing_text
  width: 500px
</style>
