<template>
  <section>
    <transition name="scoreAppear">
      <div v-if="getPlayMode!='free'" class="scoreBoard">
        <transition name='shrink' mode="out-in">
          <strong key="1" v-if="getSecretNotes==0" class="scoreBoard__text --grid2">{{st.strings.pressPlay[getLang]}} </strong>
          <strong key="2" v-else class="scoreBoard__text --grid2">{{'&#x2714; '.repeat(getCurrentGuess.length)+('&#183; '.repeat(getSecretNotes.length - getCurrentGuess.length))}}</strong>
        </transition>
        <transition name='shrink'>
          <div v-if="getSecretNotes.length==0" class="--grid3">
            <fa
            class="scoreBoard__button"
            :icon="['fas','play-circle']"
            @click="()=>{newSequence(this.$store.state.difficulties[this.getChosenDifficulty].notesPerRound,this.getChosenScale);playSequence()}" />
          </div>
        </transition> 
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
    'getRound',
    'getLang'
   ]),
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.--grid1{
  grid-area: a;
}
.--grid2{
  grid-area: b;
}
.--grid3{
  grid-area: c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scoreBoard{
  display: grid;
  grid-template-areas: 'a b c';
  grid-template-columns: 10% auto 10%;
  margin-left: .25rem;
  background: $color3;
  color: $color5;
  min-height: 2.5rem;
  min-width: 28rem;
  border-radius: .5rem;
  font-size: 1.25rem;
  padding: 1rem;
  user-select: none;
  @include respond(tablet){
    font-size: .75rem;
    padding: .25rem;
    width:10rem ;
    min-width: 50%;
    grid-template-columns: 25% auto 25%;
    height: 2rem;
    min-height: 2rem;
  }
  &__text{
    text-align: center;
    align-self: center;
  }
  &__button{
    font-size: 2.5rem;
    border-radius: 50%;
    transition: .2s;
    align-self: center;
    &:hover{
      transform: scale(1.1);
    }
    &:active{
      transform: scale(0.8);
      color: $color2;
      border: 2px solid $color1;
      background: $color5;

    }
    @include respond(tablet){
      font-size: 1.5rem;
    }
  }
}
.scoreAppear-enter-active{
  animation: scoreAppear .7s ease;
}
.scoreAppear-leave-active{
  animation: scoreAppear .7s reverse ease;
}
@keyframes scoreAppear{
  0%{transform: scale(1.4) translateX(-1000px);}
  100%{transform: scale(1) translateX(0px);}
}
.shrink-enter-active{
  animation: shrink .5s ease;
}
.shrink-leave-active{
  animation: shrink .5s ease reverse;

@keyframes shrink{
  0%{transform: scale(0);}
  100%{transform: scale(1);}
  }
}
</style>