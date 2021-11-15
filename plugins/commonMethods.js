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

/* EL CÓDIGO DE ABAJO AÑADE EL METODO "equals" A TODOS LOS ARRAYS, PARA COMPARARLOS CON OTROS ARRAYS */

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

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
    },
    playSequence(){
      const sequence = this.$store.state.secretNotes;
      const st = this.$store;
      if (st.state.lastNote==''){
        this.changePoints(-1);
        for (let index = 0; index < sequence.length; index++) {
          setTimeout(function() {
            if((st.state.playMode!='free') && (st.state.resetWarning.open==false)){
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
    winAndReset(){
      this.$store.commit('changeState',{stateValue:'secretNotes',newValue:[]});
      this.$store.commit('changeState',{stateValue:'currentGuess',newValue:[]});
      this.$store.commit('changeState',{stateValue:'lastNote',newValue:''});
      this.$store.commit('changeState',{stateValue:'round',newValue:0});
      this.$store.commit('changeState',{stateValue:'totalPoints',newValue:0});
      this.$store.commit('changeState',{stateValue:'roundPoints',newValue:0});
    }
  },
})