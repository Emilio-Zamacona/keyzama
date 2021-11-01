<template>
  <div>
    <transition>
      <div v-if="gameWin">
        <h2>wea</h2>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
    data:()=>{
    return{}
  },
  methods:{},
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','gameWin']),
  }
}
</script>

<style lang="scss" scoped>

</style>