<template>

  <!-- title name will be props by CardPanel.vue -->
  <card-panel title="Songs">

    <!--這裡有兩個 slots 只有被寫進去 CardPanel的才會顯示出來-->
    
    <div slot="hello">
      <h3>Heloo Everyone</h3>
      <br/>
      <p>Yo Yo YO</p>
    </div>

    <div slot="bye">
      <h3>See You Again</h3>
      <br/>
      <p>Bye Bye Bye</p>
    </div>

  </card-panel>


</template>


<script>
import CardPanel from "@/components/CardPanel.vue";

export default {
  name: "SongsPage",
  components: {
    CardPanel,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>