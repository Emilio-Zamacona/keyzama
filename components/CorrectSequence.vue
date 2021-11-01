<template>
<div>
  <transition name="correctAppear">
    <div class="correct" v-if="roundWin">
      <div class="correct__box">
        <h1 class="correct__box__msg">Round Completed!</h1>
        <h2 class="correct__box__msg">Round Points: {{getRoundPoints}} </h2>
        <h2 class="correct__box__msg">Total Points: {{getTotalPoints}} </h2>
        <button @click="()=>{newSequence(5,'major');playSequence()}" class="correct__box__button">Continue</button>
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
  methods:{},
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getTotalPoints','getResetWarning','roundWin']),
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
  &__box{
    background: $color5;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-radius: 2rem;
    border: $color2 solid 0.5rem;
    &__msg{
      color: $color1;
    }
    &__button{
      margin: 2rem;
      background: $color2;
      color: $color5;
      border-radius: 1rem;
      transition: .1s;
      font-size: 2rem;
      max-width: 80%;
      font-weight: 600;
      &:hover{
        transform: scale(1.03);
        background: $color2;
      }
      &:active{
        background: $color1;
        color: $color3;
        transform: scale(0.95);
      }
    }
  }
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