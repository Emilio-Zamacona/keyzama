<template>
  <section class="mode">
    <ul class="mode__list">
      <li @click="()=>{resetWarning('memory');setPlayMode('memory')}" class="mode__list__item">
        <fa :icon="['fas','brain']" />
        <strong class="mode__list__item__text">Memory</strong>
      </li>
      <li @click="()=>{resetWarning('guess');setPlayMode('guess')}" class="mode__list__item">
        <fa :icon="['fas','headphones']" />
        <strong class="mode__list__item__text">Ear training</strong> 
      </li>
      <li @click="()=>{resetWarning('free');setPlayMode('free')}" class="mode__list__item">
        <fa :icon="['fas','music']" />
        <strong class="mode__list__item__text">Free</strong> 
      </li>
    </ul>
    <transition name="resetFade">
      <ResetModal v-if="getResetWarning.open==true"/>
    </transition>  
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{} 
  },
  computed:{
     ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getTotalPoints','getResetWarning']),
  },
  methods:{
    setPlayMode: function(mode){
      if(this.getResetWarning.open==false){
        this.$store.commit('changeState',{stateValue : 'playMode' , newValue : mode})
      }
    },
    resetWarning: function(mode){
      if (this.getSecretNotes.length!=0 || this.getCurrentGuess.length!=0 || this.getLastNote!='' || this.getTotalPoints!=0){
        this.$store.commit('changeState',{stateValue : 'resetWarning' , newValue : {open:true,mode:mode}})
        console.log(this.getSecretNotes!=[],this.getCurrentGuess!=[],this.getLastNote!='',this.getTotalPoints!=0)
        console.log('reset prompt')
      } else {console.log('nothing to reset')}
    }
  }
}
</script>

<style lang="scss" scoped>

.mode{
  &__title{
    color: $color4;
    text-align: center;
  }
  &__list{
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    &__item{
      display: flex;
      color: $color5;
      font-size: 2rem;
      font-weight: lighter !important;
      transition: 0.2s;
      &:hover{
        cursor: pointer;
        color: $color1;
      }
      &:active{
        transform: scale(1.2);
      }
      &__text{
        padding-inline: 1rem;
      }
    }
  }
}

.resetFade-enter-active{
  animation: resetFade .5s ease;
}
.resetFade-leave-active{
  animation: resetFade .5s ease reverse;
}
@keyframes resetFade{
  0%{opacity: 0%;}
  100%{opacity: 100%;}
}
</style>
