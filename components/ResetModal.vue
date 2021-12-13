<template>
  <div class="darkBackground">
    <div class="gameModal">
      <p class="gameModal__info">{{st.strings.resetWarning[getLang]}}</p>
      <div class="gameModal__buttonBox">
        <button class="menuButton" @click="()=>{resetGame(); resetWarningOff()}">{{st.strings.change[getLang]}}</button>
        <button class="menuButton" @click="resetWarningOff()">{{st.strings.cancel[getLang]}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{} 
  },
  methods:{
    resetGame: function(){
      this.$store.commit('changeState',{stateValue : 'secretNotes' , newValue : []})
      this.$store.commit('changeState',{stateValue : 'currentGuess' , newValue : []})
      this.$store.commit('changeState',{stateValue : 'lastNote' , newValue : ''})
      this.$store.commit('changeState',{stateValue : 'totalPoints' , newValue : 0})
      this.$store.commit('changeState',{stateValue : 'roundPoints' , newValue : 0})
      this.$store.commit('changeState',{stateValue : 'playMode' , newValue : this.getResetWarning.mode})
    },
    resetWarningOff: function(){
      this.$store.commit('changeState',{stateValue : 'resetWarning' , newValue : {open:false,mode:this.getResetWarning.mode}})
    }
  },
  computed:{
     ...mapGetters(['getResetWarning','getLang']),
  },
}
</script>

<style lang="scss" scoped>

</style>