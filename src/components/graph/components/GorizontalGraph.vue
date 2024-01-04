<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  setupScrollTrigger();
});

function setupScrollTrigger() {
  gsap.utils.toArray(".line").forEach((line, index) => {
    gsap.from(line, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  });
}
</script>

<template>
  <div class="d-flex flex-column lines">
    <div class="first-line line d-flex justify-content-end">
      <div class="d-flex justify-content-end gap-3">
        <p class="line-text">Revenue generated for clients</p>
        <p class="line-number">1570</p>
      </div>
    </div>
    <div class="row d-flex justify-content-end">
      <div class="col-8">
        <div class="second-line line">
          <div class="d-flex justify-content-start gap-3">
            <p class="line-text">Conversationd opened</p>
            <p class="line-number">1200</p>
          </div>
        </div>
      </div>
    </div>
    <div class="third-line line">
      <div class="d-flex justify-content-start gap-3">
        <p class="line-text">Leads generated via targeted</p>
        <p class="line-number">378</p>
      </div>
    </div>
    <div class="row d-flex justify-content-end">
      <div class="col-5">
        <div class="fourth-line line">
          <div class="d-flex justify-content-start gap-3">
            <p class="line-text">Calls scheduled for clients</p>
            <p class="line-number">197</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

.line
  height: 93px
  background-color: #101820
  padding: 16px 32px
  display: flex
  align-items: center
  border: 0.6px solid white

  p
    margin-bottom: 0px

  &-number
    color: #E63E3A
    font-size: 40px
    line-height: 40px

  &-text
    color: #E63E3A
    text-align: right
    font-size: 22px
    font-style: normal
    font-weight: 400
    line-height: 120.5%
</style>
