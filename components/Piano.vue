<template>
  <div class="main">
    <div class="main__bar">
      <ScoreBoard/>
      <PlayBar/>
    </div>

    <div class="main__keyboard">
      <div v-for="pianoKey in piano" :key="pianoKey.id" class="main__keyboard__key" 
      :ref="pianoKey.name"
      :class="[pianoKey.color=='white' ? '--white':'--black',
      isNotePlaying(pianoKey.name),isBlocked(pianoKey.name)]"
      @mousedown="($event)=>{playSound(pianoKey.name); isNoteCorrect(pianoKey.name, $event);isCorrect()}"
      >
        <transition name="keyNamesAppear">
          <strong
            class="main__keyboard__key__text"
            v-if="getExplicitNotes==true" 
            :class="pianoKey.color=='white' ? '--white__text':'--black__text'"
            >{{st.strings.notes[noteToText(pianoKey.name)][getLang]}}
          </strong>
        </transition>
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
    noteToText(note){
      let text = note.slice(0,1);
      if (note[1]=='#'){
        text = text+'S';
      } return text
    },
    isBlocked(key){
      if (this.getPlayMode=='memory'){
        if (this.$store.state.lastNote != ''){
          if(this.$store.state.lastNote != key){
            return "--blocked"
          }
        } 
      }
      if (this.getPlayMode=='guess'){
        if(this.$store.state.lastNote!=''){
          return "--blocked"
        }
      }
    },
    isNotePlaying(key){
      if (this.getPlayMode!='guess'){
        if (this.$store.state.lastNote == key) return "--playing"
      }
    },
    playSound(key){
      if(this.getLastNote==''){
        sampler.triggerAttackRelease([key],0.5);
        if (this.getPlayMode!='free'){
          const guessList = this.$store.state.currentGuess.slice();
          guessList.push(key)
          this.$store.commit('changeState', {stateValue:'currentGuess', newValue:guessList} );
        }
      }
    },
    isNoteCorrect: function(key, event){
      if(this.getPlayMode!='free' && this.getSecretNotes.length!=0 && this.getLastNote==''){
        const note = this.getSecretNotes[this.getCurrentGuess.length-1];
        const answer = note==key ? "--correct" : "--wrong";
        console.log(note);
        console.log(key);
        event.target.classList.add(answer);
        setTimeout(function(){
          event.target.classList.remove(answer);
        },1300)
      }
    }
  },
  computed: {
    ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getTotalPoints','getExplicitNotes','getLang']),
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
@import '@/assets/css/mixins.scss';
.--blocked{
  z-index: 2;
  filter:  brightness(0.65)
}
.--correct{
    z-index: 1.5;
  background: linear-gradient(290deg, rgb(145, 255, 160) 25%, rgb(85, 251, 85) 75%) !important;
  border-inline-color: rgba(0, 255, 64, 0.726);
  border-block-color: rgba(0, 255, 0, 0);
  box-shadow: 0 0 10em rgb(0, 255, 0) !important;
}

.--wrong{
    z-index: 1.5;
  background: linear-gradient(290deg, rgb(255, 145, 145) 25%, rgb(251, 91, 85) 75%) !important;
  border-inline-color: rgba(255, 0, 0, 0.726);
  border-block-color: rgba(255, 0, 0, 0);
  box-shadow: 0 0 10em rgb(255, 38, 0) !important;
}
.--playing{
  z-index: 1.5;
  background: linear-gradient(290deg, rgb(145, 255, 233) 25%, rgb(85, 238, 251) 75%) !important;
  border-inline-color: rgba(0, 247, 255, 0.726);
  border-block-color: rgba(0, 234, 255, 0);
  box-shadow: 0 0 10em rgba(0, 247, 255, 1) !important;
}
.--white{
  background: radial-gradient(ellipse at 0 0%,  #e8f8f3 50%, #bff6e5 100%);
  max-height: 20rem;
  height: 40vh;
  width: 8%;
  z-index:1;
  @include landscape{
    height: 50vh;
  }

  display: flex;
  justify-content: center;
  align-items:flex-end;
  &__text{
    margin-bottom: 1rem;
    color: $color5;
    user-select: none;
  }
}
.--black{
  background: linear-gradient(290deg, rgb(15, 41, 42) 25%, rgb(32, 70, 70) 75%);
  max-height: 13.5rem;
  height: 30vh;
  width: 4%;
  z-index:2;
  margin:0 -2% 0 -2%;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.356);
  @include landscape{
    height: 35h;
  }
  display: flex;
  justify-content: center;
  align-items:flex-end;
  &__text{
    margin-bottom: 1rem;
    color: $color2;
    user-select: none;
  }
}
.main{

  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  align-content: center;
  @include landscape{
    margin-inline: 1rem;
  }
  @include respond(smallest){
    grid-template-rows: .75fr 2fr 1fr;
  
  }

  &__bar{
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 7rem;
    @include respond(tablet){
      min-height: 4rem;
    }
  }
  &__keyboard {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 0 0 .25rem $color3;
/*     border: solid .25rem $color3;
    border-radius: 5px; */
    @include respond(smallest){
        margin-block: .25rem;
    }
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
      &__text{
        font-size: .75rem;
        margin-inline: 0;
        pointer-events: none;
        @include respond(mobile){
          font-size: .4rem;
        }
      }
    }
  }
}

.keyNamesAppear-enter-active{
  animation: keyNamesAppear .25s ease
}
.keyNamesAppear-leave-active{
  animation: keyNamesAppear .25s reverse ease
}

@keyframes keyNamesAppear{
  0%{
    opacity: 0;
    transform: scale(0.4);
    }
  80%{
    transform: scale(1.15);
  }
  100%{
    opacity:1;
    transform: scale(1);

    }
}
</style>