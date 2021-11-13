<template>
  <section>
    <!-- <h1>wea</h1> -->
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function(){
    return{}
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getSettingsOpen']),
  },

}
</script>

<style lang="scss" scoped>

</style>