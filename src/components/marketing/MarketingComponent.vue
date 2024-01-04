<template>
  <div class="p-4">
    <div class="marketing">
      <div class="d-flex flex-column justify-content-end align-items-end">
        <h1 class="text-trusted"></h1>
        <p>For leading B2B tech and service companies</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.typingText();
  },
  methods: {
    typingText() {
      let textElem = "Trusted long-term partner";

      gsap.to(this.$el.querySelector(".text-trusted"), {
        text: {
          value: textElem,
        },

        scrollTrigger: {
          trigger: ".chartCard",
          start: "bottom center",
          end: "bottom",
          scrub: true,
          markers: true,
        },
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.marketing
  padding: 20px
  border-top: 1px solid red
  border-bottom: 1px solid red
  margin-bottom: 40px
  background-color: white
  h1
    color: #E63E3A

    font-size: 6rem
    font-style: normal
    font-weight: 400
    line-height: 96%
    margin-bottom: 32px
  p
    color: #E63E3A
    text-align: right
    font-size: 38px
    font-weight: 400
    line-height: 110%
</style>
