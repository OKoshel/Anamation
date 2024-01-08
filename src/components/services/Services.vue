<template>
  <div class="d-flex services">
    <div class="col-6 position-relative d-flex">
      <img src="/team1.png" class="services-img services-img-first" />
      <img src="/team2.png" class="services-img services-img-second" />
      <img src="/team3.png" class="services-img services-img-third" />
    </div>
    <div class="col-6" ref="comp">
      <div id="intro-slider">
        <h2 class="" id="title-1">Still not sure</h2>
        <h2 class="" id="title-2">what service to</h2>
        <h2 class="" id="title-3">choose?</h2>
      </div>
      <p>
        Fill our qualification form to<br />
        understand which service fits <br />
        your business needs
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animatePhoto();
    this.animateText();
  },
  methods: {
    animatePhoto() {
      gsap.from(".services-img-first", {
        x: -300,
        opacity: 0,
        scrollTrigger: {
          trigger: ".services",
          start: "top center",
          end: "center +=400",
          scrub: true,
        },
      });

      gsap.from(".services-img-second", {
        x: 300,
        opacity: 0,
        scrollTrigger: {
          trigger: ".services",
          start: "top center",
          end: "center +=400",
          scrub: true,
        },
      });

      gsap.from(".services-img-third", {
        y: -300,
        opacity: 0,
        scrollTrigger: {
          trigger: ".services",
          start: "top center",
          end: "center +=400",
          scrub: true,
        },
      });
    },
    animateText() {
      const comp = this.$refs.comp;
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          x: "+=100",
          stagger: 0.5,
          scrollTrigger: {
            trigger: comp,
            start: "top center",
            end: "center +=300",
            scrub: true,
          },
        }).to(["#title-1", "#title-2", "#title-3"], {
          opacity: 1,
          y: "-=20",
          delay: 0.3,
          stagger: 0.5,
          scrollTrigger: {
            trigger: comp,
            start: "top center",
            end: "center +=300",
            scrub: true,
          },
        });
      }, comp);
    },
  },
};
</script>

<style lang="sass" scoped>
.services
  padding: 100px 20px 400px 20px
  background-color: white
  height: 700px
  z-index: 9999
  position: relative
  h2
    color: #101820
    text-align: right
    font-size: 82px
    font-weight: 400
    line-height: 96%
  p
    text-align: right
    font-size: 22px
    font-weight: 400
    line-height: 120.5%
  &-img
    width: 393px
    height: 537px
    position: absolute
    &-first, &-third
      z-index: 1
    &-second
      z-index: 2
      top: 40px
      left: 192px
    &-first
      top: 90px
      left: 0px
    &-third
      top: -10px
      left: 384px
#intro-slider
  overflow: hidden
  padding: 20px
</style>
