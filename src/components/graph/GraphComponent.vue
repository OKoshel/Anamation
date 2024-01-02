<template>
  <div class="graph-wrapp">
    <GraphTitle />
    <Graph />
    <GorizontalGraph />
  </div>
</template>

<script>
import GraphTitle from "@/components/graph/components/GraphTitle.vue";
import Graph from "@/components/graph/components/Graph.vue";
import GorizontalGraph from "@/components/graph/components/GorizontalGraph.vue";
export default {
  components: {
    GraphTitle,
    Graph,
    GorizontalGraph,
  },
};
</script>

<style lang="sass" scoped>
.graph-wrapp
  padding: 107px 20px
  background-color: white
</style>
