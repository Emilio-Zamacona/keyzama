<template>
<div>
  <transition name="correctAppear">
    <div class="correct" v-if="roundWin&& !gameWin">
      <div class="gameModal">
        <h2 class="gameModal__info">{{st.strings.roundCompleted[getLang]}}</h2>
        <h3 class="gameModal__info">{{st.strings.roundPoints[getLang] + getRoundPoints}}</h3>
        <h3 class="gameModal__info">{{st.strings.totalPoints[getLang] + getTotalPoints}} </h3>
        <button @click="()=>{winCheck()}"  class="menuButton">{{st.strings.continue[getLang]}}</button>
      </div>
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
  methods:{
    winCheck(){
      if (!this.gameWin){
        this.$store.commit("changeState",{stateValue : 'round', newValue : this.$store.state.round+1});
        if (!this.gameWin) {
          this.newSequence(this.$store.state.difficulties[this.getChosenDifficulty].notesPerRound,this.getChosenScale)
          this.playSequence()
        }
      }
    }
  },
  computed:{
    ...mapGetters([
    "getCurrentGuess",
    "getSecretNotes",
    'getLastNote',
    'getPlayMode',
    'getScales',
    'getPiano',
    'getRoundPoints',
    'getTotalPoints',
    'getResetWarning',
    'roundWin',
    'gameWin',
    'getChosenDifficulty',
    'getChosenScale',
    'getLang']),
  }
}
</script>

<style lang="scss" scoped>

.correct{
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

}

.correctAppear-enter-active{
  animation: correctAppear .5s ease;
}
.correctAppear-leave-active{
  animation: correctAppear .2s reverse ease;
}
@keyframes correctAppear{
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>