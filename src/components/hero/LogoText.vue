<template>
  <div class="text">
    <div class="d-flex">
      <h2 class="letter">R</h2>
      <h2 ref="textElement" class="word"></h2>
    </div>
    <div class="cube"></div>
    <div class="rotate-text">
      <h2 class="mb-0 letter">S</h2>
      <h2 ref="textElement2" class="mb-0"></h2>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default {
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const textElement = this.$refs.textElement;
      const textElement2 = this.$refs.textElement2;
      const text = "Respect";
      const text2 = "Studio";
      const chars = text.split("");
      const chars2 = text2.split("");

      let tl = gsap.timeline();
      tl.to(".timer", { duration: 2, opacity: 1 });

      tl.to(".timer", { opacity: 0, delay: 0.7 });

      tl.fromTo(".text", { opacity: 0 }, { opacity: 0 });

      tl.to({}, { duration: 0 });

      tl.to(".text", { opacity: 1 });

      gsap.set(textElement, {
        text: chars,
      });

      gsap.set(textElement2, {
        text: chars2,
      });

      gsap.to(textElement, {
        duration: 4,
        text: {
          value: chars.join("").slice(1),
          delimiter: "",
          padSpace: true,
        },
        ease: "power1.inOut",
        delay: 4,
      });

      gsap.to(textElement2, {
        duration: 4,
        text: {
          value: chars2.join("").slice(1),
          delimiter: "",
          padSpace: true,
        },
        ease: "power1.inOut",
        delay: 4,
      });
    },
  },
};
</script>

<style lang="sass" scoped>

.rotate-text
  transform: rotate(90deg)
  display: flex
  width: 100px
  position: absolute
  left: 5px
  top: 105px
  z-index: 999

  h2
    font-size: 70px
    color: #E63E3A
    font-family: Suisse Intl

.letter, .word
  font-size: 70px
  color: #E63E3A
  font-family: Suisse Intl
  z-index: 999

.cube
  height: 10px
  width: 10px
  background-color: #E63E3A
  position: relative
  z-index: 999
  margin-left: 5px

.text
  margin-left: 30px
  padding-top: 10px
  position: relative
  z-index: 99999
</style>
