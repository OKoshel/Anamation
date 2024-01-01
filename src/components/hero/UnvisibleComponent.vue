<template>
  <div class="d-flex flex-column unvisible-component">
    <div class="timer" id="numberContainer">{{ currentNumber }}</div>
  </div>
  <HeroComponent />
</template>

<script>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import LogoText from "@/components/hero/LogoText.vue";

export default {
  component: {
    HeroComponent,
    LogoText,
  },
  data() {
    return {
      numbers: ["04", "19", "23", "74", "88", "98"],
      currentIndex: 0,
      currentNumber: "04",
    };
  },
  mounted() {
    this.animateNumbers();
  },
  methods: {
    animateNumbers() {
      const interval = 500;
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.numbers.length;
        this.currentNumber = this.numbers[this.currentIndex];
      }, interval);
    },
  },
};
</script>

<style lang="sass" scoped>

.unvisible-component
  height: 100vh
  background-color: rgba(0, 0, 0, 0.99)
  color: #E63E3A
  padding: 30px
  position: absolute
  top: 0
  width: 100%
  z-index: 5


.timer
  position: absolute
  font-size: 200px
  bottom: 20px
  right: 30px
</style>
