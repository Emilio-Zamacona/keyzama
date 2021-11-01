<template>
  <section>
    <div class="playBar">
      <transition name="playBarAppear" mode="out-in">
        <div v-if="getPlayMode!='free'">
          <fa :icon="['fas','play-circle']" 
            class="playBar__button" @click="playSequence()"
            />
          <fa :icon="['fas','sync-alt']" 
            class="playBar__button" @click="()=>{newSequence(5,getChosenScale);playSequence()}"
            />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data: ()=> {
    return {}
 },
  methods:{

  },
  computed:{
   ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getTotalPoints','getResetWarning','getChosenScale']),
  },
}
</script>

<style lang="scss" scoped>
.playBar{
  height: 3rem;
  padding: 1rem;
  &__button{
    font-size: 3rem;
    color: $color2;
    transition: 0.1s;
    &:hover{
      color: $color1;
    }
    &:active{
      transform: translateY(-0.2rem);
      color: white;
    }
  }
}
.playBarAppear-enter-active {
  animation: playBarAppear .7s linear;
}
.playBarAppear-leave-active {
  animation: playBarAppear .7s reverse linear;
}
@keyframes playBarAppear{
  0%{transform: rotate(0deg) scale(0) translate(-200px , 0px);}
  15%{transform: rotate(120deg) scale(0.15) translate(-100px , 0px);}
  50%{transform: rotate(360deg) scale(1.25) translate(0px , 0px);}
  100%{transform: rotate(720deg) scale(1) translate(0px , 0px);}
}

</style>