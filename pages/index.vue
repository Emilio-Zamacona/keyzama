<template>
  <section class="body">
    <NavBar/>
    <Settings/>
    <transition name="modeSlide" mode="out-in">
      <div v-if="getPlayMode==''" class="modeSelect">
        <h1 class="modeSelect__title">{{st.strings.choose[getLang]}}</h1> 
        <ModeSelect class="modeSelect__options"/>
      </div>
    </transition>
    <transition 
      name="pianoAppear" 
      mode="out-in">
      <div class="body__pianoFrame" v-if="getPlayMode!=''">
        <Piano class="body__pianoFrame__piano"/>
      </div>
    </transition>
    <transition name="pianoAppear">
      <Footer v-if="getPlayMode!=''"/>
    </transition>
    <CorrectSequence/>
    <Win/>
    
    
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
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','getLang']),
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.body{
  .modeSelect{
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  &__title{
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color3;
    @include respond(tablet){
      font-size: 1.5rem;
    }
    }
  &__options{
    position: absolute;
    top: 20rem;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  }
  &__pianoFrame{
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color5;
    width: 100%;


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
