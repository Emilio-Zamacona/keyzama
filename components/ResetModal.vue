<template>
  <div class="resetModal">
    <div class="resetModal__box">
      <h2 class="resetModal__box__title">Changing modes will reset the progress of your current game. Change modes anyway?</h2>
      <div class="resetModal__box__buttons">
        <button @click="()=>{resetGame(); resetWarningOff()} " class="resetModal__box__buttons__item">Change</button>
        <button @click="resetWarningOff()" class="resetModal__box__buttons__item">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{} 
  },
  methods:{
    resetGame: function(){
      this.$store.commit('changeState',{stateValue : 'secretNotes' , newValue : []})
      this.$store.commit('changeState',{stateValue : 'currentGuess' , newValue : []})
      this.$store.commit('changeState',{stateValue : 'lastNote' , newValue : ''})
      this.$store.commit('changeState',{stateValue : 'totalPoints' , newValue : 0})
      this.$store.commit('changeState',{stateValue : 'roundPoints' , newValue : 0})
      this.$store.commit('changeState',{stateValue : 'playMode' , newValue : this.getResetWarning.mode})
    },
    resetWarningOff: function(){
      this.$store.commit('changeState',{stateValue : 'resetWarning' , newValue : {open:false,mode:this.getResetWarning.mode}})
    }
  },
  computed:{
     ...mapGetters(['getResetWarning']),
  },
}
</script>

<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#504B43;
$color5:#434371;

.resetModal{
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  &__box{
    padding: 2rem;
    background-color: $color3;
    border: $color2 solid 10px;
    border-radius: 1rem;
    max-width: 600px;
    &__title{
      padding: 2rem;
      text-align: center;
    }
    &__buttons{
      display: flex;
      justify-content: center;
      &__item{
        margin-inline:2rem;
        padding: 1rem;
        background-color: $color1;
        color: $color4;
        font-size: 1.5rem;
        border-style: hidden;
        border: $color2 solid 5px;
        border-radius: 1rem;
        transition: .1s;
        &:hover{
          transform: scale(1.1);
        }
        &:active{
          background-color: $color2;
        }
      }
    }
  }
}
</style>