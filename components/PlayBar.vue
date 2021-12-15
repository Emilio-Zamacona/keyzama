<template>
  <section class="playBar" >
    <transition name="playBarAppear" mode="out-in">
      <div v-if="getSecretNotes.length!=0">
        <fa 
        :icon="['fas','volume-up']" 
        class="playBar__button"
        :class="isBlocked()" 
        @click="playSequence()"/>
      </div>
    </transition>
    <transition name="playBarAppear" mode="out-in">
      <div v-if="getSecretNotes.length!=0">
        <fa 
        :icon="['fas','dice']"
        :class="isBlocked()" 
        class="playBar__button" 
        @click="()=>{newSequence(this.$store.state.difficulties[this.getChosenDifficulty].notesPerRound,this.getChosenScale);playSequence()}"/>
      </div>
    </transition>
    <div @click="$store.commit('changeState',{stateValue:'explicitNotes',newValue: !getExplicitNotes}) " >
      <fa 
          class="playBar__button" 
          :icon="getExplicitNotes==true ? ['fas','eye']:['fas','eye-slash']" />
    </div>      
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data: ()=> {
    return {
      tooltips:{
        start:false
      }
    }
 },
  methods:{
    isBlocked(){
      if (this.getLastNote!='') return '--blocked'
    }
  },
  components:{},
  computed:{
  ...mapGetters(["getCurrentGuess",
    "getSecretNotes",
    'getLastNote',
    'getPlayMode',
    'getScales',
    'getPiano',
    'getRoundPoints',
    'getTotalPoints',
    'getResetWarning',
    'getChosenScale',
    'getChosenDifficulty',
    'getTimeBetweenNotes',
    'getExplicitNotes',
    'getRound'
   ]),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.--tooltip{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 6;
  
}
.--blocked{
  filter: brightness(0.5);
  &:hover{
    color: $color5 !important;
    cursor: not-allowed !important;
  }
  &:active{
    transform: scale(1) !important;
  }
}

.playBar{
  user-select: none;
  display: flex;
  place-items: center;
  margin-right: .25rem;
  gap: .125rem;
  &__button{
    background: $color3;
    border-radius: 50%;
    border: 2px solid $color1;
    font-size: 2em;
    color: $color5;
    transition: 0.1s;
    padding: .75rem;
    cursor: pointer;
    height: 2rem;
    width:2rem;
    @include respond(tablet){
      height: 1.5rem;
      width:1.5rem;
      font-size: 1.5em;
      padding: .5rem;
      @include landscape{
      }
    }
    &:hover{
      color: $color1;
    }
    &:active{
      transform: scale(0.9) translateY(.125rem);
      color: white;
    }
  }
}
.playBarAppear-enter-active {
  animation: playBarAppear .5s ease;
}
.playBarAppear-leave-active {
  animation: playBarAppear .5s reverse ease;
}

@keyframes playBarAppear{
  0%{
    opacity: 0;
    transform: scale(0) translate(0px , 5rem);}
  100%{
    opacity: 1;
    transform: scale(1) translate(0px , 0px);}
}

</style>