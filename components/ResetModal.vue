<template>
  <div class="resetModal">
    <div class="buttonBoxNotification">
      <h2>{{st.strings.resetWarning[getLang]}}</h2>
      <div>
        <button @click="()=>{resetGame(); resetWarningOff()}">{{st.strings.change[getLang]}}</button>
        <button @click="resetWarningOff()">{{st.strings.cancel[getLang]}}</button>
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
     ...mapGetters(['getResetWarning','getLang']),
  },
}
</script>

<style lang="scss" scoped>

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
    background-color: $color5;
    border: $color2 solid 10px;
    border-radius: 1rem;
    max-width: 600px;
    &__title{
      padding: 2rem;
      text-align: center;
      color: $color1;
    }
    &__buttons{
      display: flex;
      justify-content: center;
      &__item{
        margin-inline:2rem;
        padding: 1rem;
        background-color: $color2;
        color: $color5;
        font-size: 2rem;
        font-weight: 600;
        border-radius: 1rem;
        transition: .1s;
        &:hover{
          transform: scale(1.03);
        }
        &:active{
          background-color: $color1;
          color: $color2;
        }
      }
    }
  }
}
</style>