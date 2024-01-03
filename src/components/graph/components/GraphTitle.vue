<template>
  <div class="graph-title d-flex flex-column position-relative">
    <div class="col-8">
      <h2 class="typing-text"></h2>
      <h2></h2>
    </div>
    <p>
      We combine disruptive marketing techniques with proven<br />
      tech solutions to provide maximum business value.
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.textTypingScroll();
  },
  methods: {
    textTypingScroll() {
      let textElem =
        "Consistent leads flow to streamline Your business growth.";

      gsap.to(".typing-text", {
        text: {
          value: textElem,
        },

        scrollTrigger: {
          trigger: ".navigation",
          start: "center top",
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
.typing-text
  height: 150px
.graph-title
    h2
      color: black
      font-family: Suisse Intl
      font-size: 3.5rem
      font-style: normal
      font-weight: 400
      line-height: 96%
    p
      color: #101820
      font-family: Suisse Intl
      font-size: 22px
      font-style: normal
      font-weight: 400
      line-height: 120.5%
      position: absolute
      top: 140px
</style>
