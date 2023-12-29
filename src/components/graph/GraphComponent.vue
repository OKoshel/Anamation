<template>
  <div class="graph-wrapp">
    <GraphTitle />
    <Graph />
  </div>
</template>

<script>
import GraphTitle from "@/components/graph/components/GraphTitle.vue";
import Graph from "@/components/graph/components/Graph.vue";
export default {
  components: {
    GraphTitle,
    Graph,
  },
};
</script>

<style lang="sass" scoped>
.graph-wrapp
  padding: 107px 20px
</style>
