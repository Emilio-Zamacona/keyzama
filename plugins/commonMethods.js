import Vue from 'vue'
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
Vue.mixin({

  methods: {
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
      this.$store.commit("changeState",{stateValue : 'round', newValue : this.$store.state.round+1});
    },
    playSequence(){
      const sequence = this.$store.state.secretNotes;
      const st = this.$store;
      if (st.state.lastNote==''){
        this.changePoints(-1);
        for (let index = 0; index < sequence.length; index++) {
          setTimeout(function() {
            if((st.state.playMode!='free') && (st.state.resetWarning.open==false)){
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
})