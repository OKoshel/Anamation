<template>
  <div class="graph-wrapp">
    <GraphTitle />
    <Graph />
    <Lines />
  </div>
</template>

<script>
import GraphTitle from "@/components/graph/components/GraphTitle.vue";
import Graph from "@/components/graph/components/Graph.vue";
import Lines from "@/components/graph/components/Lines.vue";

export default {
  components: {
    GraphTitle,
    Graph,
    Lines,
  },
};
</script>

<style lang="sass">

.graph-wrapp
  padding: 107px 20px 128px 20px
  background-color: white
</style>
