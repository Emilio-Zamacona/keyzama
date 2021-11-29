<template>
  <div class="resetModal">
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

.resetModal{
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
</style>