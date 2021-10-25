<template>
  <section>
    <div class="playBar">
      <transition name="playBarAppear" mode="out-in">
        <div v-if="getPlayMode!='free'">
          <fa :icon="['fas','play-circle']" 
            class="playBar__button" @click="playSequence()"
            />
          <fa :icon="['fas','sync-alt']" 
            class="playBar__button" @click="()=>{newSequence(5,'major');playSequence()}"
            />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
import * as Tone from 'tone';
    const sampler = new Tone.Sampler({
      urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();
export default {
  data: ()=> {
    return {}
 },
  methods:{
    newSequence(noteAmount,scale){
      const tonic = Math.floor(Math.random() * 12);
      const notes = [];
      const selectedScale = this.getScales[scale][tonic];
      const finalNotes = [];
      for (let i = 0; i < noteAmount; i++) {
        notes.push(selectedScale.notes[Math.floor(Math.random()*selectedScale.notes.length)])
      };
      for (let i = 0; i < noteAmount; i++) {
        const key = this.getPiano[Math.floor(Math.random()*this.getPiano.length)].name
        const note = key.replace(/[0-9]/g, '');
        if (notes.includes(note)){
          finalNotes.push(key)
        } else{
          i -=1
        }
      }
      this.$store.commit("changeState",{stateValue : 'secretNotes', newValue : finalNotes});
      this.$store.commit("changeState",{stateValue : 'currentGuess', newValue : [] });
      this.$store.commit("changeState",{stateValue : 'roundPoints', newValue : 1+noteAmount*2});
    },
    playSequence(){
      const sequence = this.$store.state.secretNotes;
      const st = this.$store;
      if (st.state.lastNote==''){
        this.changePoints(-1);
        for (let index = 0; index < sequence.length; index++) {
          setTimeout(function() {
            if(st.state.playMode!='free'){
              console.log('is not free')
              sampler.triggerAttackRelease(sequence[index],0.8);
              st.commit('changeState',{stateValue : 'lastNote' , newValue : sequence[index]})
            } else{
              st.commit('changeState',{stateValue : 'lastNote' , newValue : ''});
              st.commit('changeState',{stateValue : 'secretNotes' , newValue : []});
              }
          },1300*index)
        };
        setTimeout(function(){
          st.commit('changeState',{stateValue : 'lastNote' , newValue : ''})
        }, (sequence.length+1)*1300)
      }
    },
    changePoints(points){
      if (this.getRoundPoints>0){
        this.$store.commit('changeState',{stateValue:'roundPoints',newValue:this.getRoundPoints+points})
      }
    },
  },
  computed:{
   ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints']),
  },
}
</script>

<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#A3342E;
$color5:#F07973;
.test{
  color: red !important;
}
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