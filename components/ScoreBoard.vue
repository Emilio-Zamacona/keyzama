<template>
  <section>
    <transition name="scoreAppear">
      <div v-if="getPlayMode!='free'" class="scoreBoard">
        <!-- <h3>{{isCorrect}}</h3> -->
        <strong>{{(getSecretNotes==0 ? st.strings.pressPlay[getLang]:'')+'&#x2714;'.repeat(getCurrentGuess.length)+('&#183;'.repeat(getSecretNotes.length - getCurrentGuess.length))}}</strong>
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
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getLang']),
    /* DEJANDO ESTO DE ABAJO POR LAS DUDAS */
/*     isCorrect(){
      if (this.getCurrentGuess.length==0){
        return ''
      } else {
        for (let i = 0; i < this.getCurrentGuess.length; i++) {
          if (this.getCurrentGuess[i] != this.getSecretNotes[i]) {
            const sliced = this.getCurrentGuess.slice(0,-1);
            this.$store.commit('changeState',{stateValue:'currentGuess',newValue:sliced});
            this.$store.commit('changeState',{stateValue:'roundPoints',newValue:this.getRoundPoints>0 ? this.getRoundPoints-1 : 0})
            return '' 
          }
        };
        if (JSON.stringify(this.getCurrentGuess)==JSON.stringify(this.getSecretNotes)) {
          this.$store.commit("changeState",{stateValue:'totalPoints',newValue:(this.getTotalPoints + this.getRoundPoints)})
        }
        return (JSON.stringify(this.getCurrentGuess)==JSON.stringify(this.getSecretNotes) ? 'Correct!':'')
      } 
    }, */
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.scoreBoard{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: $color2;
  color: $color5;
  padding-inline: .5rem;
  font-size: 3rem;
  min-height: 2rem;
  min-width: 30vw;
  max-width: 28rem;
  border-radius: .5rem;
  font-size: 2rem;
  padding: 1rem;
  @include respond(tablet){
    font-size: 1.25rem;
    padding: .25rem;
  }
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