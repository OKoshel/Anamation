<template>
  <div class="d-flex flex-column unvisible-component">
    <div class="timer" id="numberContainer">{{ currentNumber }}</div>
  </div>
</template>

<script>
import LogoText from "@/components/hero/LogoText.vue";

export default {
  components: {
    LogoText,
  },
  data() {
    return {
      numbers: ["04", "19", "23", "74", "88", "98"],
      currentIndex: 0,
      currentNumber: "04",
      intervalId: null,
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
        if (this.currentIndex === this.numbers.length - 1) {
          clearInterval(this.intervalId);
        }
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
  z-index: 3


.timer
  position: absolute
  font-size: 140px
  bottom: 20px
  right: 30px
</style>
