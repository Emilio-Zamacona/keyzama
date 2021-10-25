<template>
  <section class="body">
    <NavBar/>
    <ModeSelect/>
    <transition name="pianoAppear">
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
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode"]),
  }
}
</script>
<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#A3342E;
$color5:#F07973;
.body{
  background-color: $color1;
}
.pianoAppear-enter-active{
  animation: pianoAppear 1s ease;
}
.pianoAppear-leave-active{
  animation: pianoAppear 1s reverse ease;
}
@keyframes pianoAppear{
  0%{transform: translateX(-1000px);}
  80%{transform: translateX(100px) scale(1.1);}
  100%{transform: translateX(0px) scale(1)}
}
</style>
