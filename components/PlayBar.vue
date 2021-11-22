<template>
  <section>
    <transition name="playBarAppear" mode="out-in">
      <div class="playBar" v-if="getPlayMode!='free'">
        <div v-if="getSecretNotes.length==0">
          <!-- TRATAR DE CONSTRUIR UN MÉTODO PARA QUE LOS TOOLTIP SE PONGAN ARRIBA DEL ELEMENTO HOVER CORRESPONDIENTE -->
          <!-- <Tooltip class="--tooltip" v-if="tooltips.start" :text="'Press to start'" />  -->
          <fa :icon="['fas','play-circle']" 
            class="playBar__button" @click="()=>{newSequence(this.$store.state.difficulties[this.getChosenDifficulty].notesPerRound,this.getChosenScale);playSequence()}"
            @mouseover="tooltips.start= true"
            @mouseout="tooltips.start=false"/>
          
        </div>
        <div v-else>
          <fa :icon="['fas','play-circle']" 
            class="playBar__button" @click="playSequence()"
            />
          <fa :icon="['fas','sync-alt']" 
            class="playBar__button" @click="()=>{newSequence(this.$store.state.difficulties[this.getChosenDifficulty].notesPerRound,this.getChosenScale);playSequence()}"
            />
        </div>
      </div>
    </transition>
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
  methods:{},
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
    'getTimeBetweenNotes'
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

.playBar{
  user-select: none;
  &__button{
    background: $color2;
    border-radius: 50%;
    border: 2px solid $color1;
    font-size: 2em;
    color: $color5;
    transition: 0.1s;
    padding: .75rem;
    @include respond(tablet){
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