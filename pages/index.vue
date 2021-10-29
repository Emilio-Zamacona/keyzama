<template>
  <section class="body">
    <NavBar/>
    <transition name="modeSlide" mode="out-in">
      <div v-if="getPlayMode==''" class="modeSelect">
        <h1 class="modeSelect__title">Choose a mode:</h1> 
        <ModeSelect class="modeSelect__options"/>
      </div>
    </transition>
    <transition 
      name="pianoAppear" 
      mode="out-in">
      <div v-if="getPlayMode!=''">
        <Piano/>
      </div>
    </transition>
  </section>
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
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode"]),
  }
}
</script>
<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#504B43;
$color5:#434371;
.body{
  .modeSelect{
  display: flex;
  flex-direction: column; 
  position: relative;
  &__title{
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color4;
    }
  &__options{
    position: absolute;
    top: 20rem;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  }
}


.modeSlide-enter-active{
  animation: modeSlide .7s ease;
}
.modeSlide-leave-active{
  animation: modeSlide .7s reverse ease;
}
@keyframes modeSlide{
  0%{transform: translate(0px,-1500px);}
  85%{transform: translate(0px,75px);}
  100%{transform: translate(0px,0px);}
}

.pianoAppear-enter-active{
  animation: pianoAppear 1s ease;

}
.pianoAppear-leave-active{
  animation: pianoAppear 1s reverse ease;
}
@keyframes pianoAppear{
  0%{transform: translateY(1000px);}
  100%{transform: translateY(0px)}
} 
</style>
