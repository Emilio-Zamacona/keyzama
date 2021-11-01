<template>
  <section>
    <transition name="scoreAppear">
      <div v-if="getPlayMode!='free'" class="scoreBoard">
        <h3>{{isCorrect}}</h3>
        <h3>{{'&#x2714;'.repeat(getCurrentGuess.length)+('&#183;'.repeat(getSecretNotes.length - getCurrentGuess.length))}}</h3>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:()=> {
    return {}
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode"]),
    isCorrect(){
      if (this.getCurrentGuess.length==0){
        return ''
      } else {
        for (let i = 0; i < this.getCurrentGuess.length; i++) {
          if (this.getCurrentGuess[i] != this.getSecretNotes[i]) {
            const sliced = this.getCurrentGuess.slice(0,-1);
            this.$store.commit('changeState',{stateValue:'currentGuess',newValue:sliced});
            this.$store.commit('changeState',{stateValue:'roundPoints',newValue:this.getRoundPoints>0 ? this.getRoundPoints-1 : 0})
            return 'Try again' 
          }
        };
        if (JSON.stringify(this.getCurrentGuess)==JSON.stringify(this.getSecretNotes)) {
          this.$store.commit("changeState",{stateValue:'totalPoints',newValue:(this.getTotalPoints + this.getRoundPoints)})
        }
        return (JSON.stringify(this.getCurrentGuess)==JSON.stringify(this.getSecretNotes) ? 'Correct!':'')
      } 
    },
  }
}
</script>

<style lang="scss" scoped>

.scoreBoard{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: $color2;
  font-size: 3rem;
}
.scoreAppear-enter-active{
  animation: scoreAppear .7s ease;
}
.scoreAppear-leave-active{
  animation: scoreAppear .7s reverse ease;
}
@keyframes scoreAppear{
  0%{transform: scale(1.4) translateX(1000px);}
  100%{transform: scale(1) translateX(0px);}
}
</style>