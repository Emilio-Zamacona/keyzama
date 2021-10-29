<template>
  <div class="main">
    <div class="main__bar">
      <PlayBar/>
      <ScoreBoard/>
    </div>
    <div class="main__keyboard">
      <div v-for="pianoKey in piano" :key="pianoKey.name" class="main__keyboard__key" 
      :ref="pianoKey.name"
      :class="[pianoKey.color=='white' ? '--white':'--black',
      isNotePlaying(pianoKey.name)]"
      @click="playSound(pianoKey.name)">
      </div>
    </div>
  </div>
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
    return{

      piano:[
        {name:"c3",color:"white"},
        {name:"c#3",color:"black"},
        {name:"d3",color:"white"},
        {name:"d#3",color:"black"},
        {name:"e3",color:"white"},
        {name:"f3",color:"white"},
        {name:"f#3",color:"black"},
        {name:"g3",color:"white"},
        {name:"g#3",color:"black"},
        {name:"a3",color:"white"},
        {name:"a#3",color:"black"},
        {name:"b3",color:"white"},
        {name:"c4",color:"white"},
        {name:"c#4",color:"black"},
        {name:"d4",color:"white"},
        {name:"d#4",color:"black"},
        {name:"e4",color:"white"},
        {name:"f4",color:"white"},
        {name:"f#4",color:"black"},
        {name:"g4",color:"white"},
        {name:"g#4",color:"black"},
        {name:"a4",color:"white"},
        {name:"a#4",color:"black"},
        {name:"b4",color:"white"},
      ],
 
    }
  },
  methods: {
    isNotePlaying(key){
      if (this.getPlayMode!='guess'){
        if (this.$store.state.lastNote == key) return "--playing"
      }
    },
    playSound(key){
      const guessList = this.$store.state.currentGuess.slice();
      guessList.push(key)
      if (this.getPlayMode!='free'){
        this.$store.commit('changeState', {stateValue:'currentGuess', newValue:guessList} );
      }
      sampler.triggerAttackRelease([key],0.5);
    }
  },
  computed: {
    ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints']),
    currentGuess(){
      return this.$store.state.currentGuess
    },
    secretNotes(){
      return this.$store.state.secretNotes
    }
  }
}
</script>

<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#504B43;
$color5:#434371;
.--playing{
  z-index: 1.5;
  background: linear-gradient(290deg, rgb(145, 255, 233) 25%, rgb(85, 238, 251) 75%) !important;
  border-inline-color: rgba(0, 247, 255, 0.726);
  border-block-color: rgba(0, 234, 255, 0);
  box-shadow: 0 0 10em rgba(0, 247, 255, 1) !important;
}
.--white{
  background: radial-gradient(ellipse at 0 0%,  #fbfcfd 50%, #d6d6d6 100%);
  height: 20rem;
  width: 8%;
  z-index:1;
}
.--black{
  background: linear-gradient(290deg, rgba(0,0,0,1) 25%, rgb(73, 73, 73) 75%);
  height: 12rem;
  width: 4%;
  z-index:2;
  margin:0 -2% 0 -2%;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.356);

}
.main{
  padding: 2em;
  margin: 0;
  background: $color3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__bar{
    width: 100%;
    display: flex;
    justify-content: space-around;

  }
  &__keyboard {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80%;
    max-width: 1000px;
    min-width: 400px;
    border: $color2 14px solid;
    border-radius: 1rem;
    &__key{
      border-block: solid 1px black;
      border-left: solid 1px black;
      float:right;
      border-radius: 0 0 3px 3px;
      transition: 0.15s;
      &:active{
        z-index: 1.5;
        background: linear-gradient(290deg, rgb(145, 255, 233) 25%, rgb(85, 238, 251) 75%);
        border-inline-color: rgba(0, 247, 255, 0.726);
        border-block-color: rgba(0, 234, 255, 0);
        box-shadow: 0 0 10em rgba(0, 247, 255, 1);
      }
      &:last-child{
        border: solid 1px black;
      }
    }
  }
}



</style>