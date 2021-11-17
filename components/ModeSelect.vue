<template>
  <section class="mode">
    <ul class="mode__list">
      <li @click="()=>{resetWarning('memory');setPlayMode('memory')}" class="navButton" :class="selectedHighlight('memory')">
        <fa class="navButton__icon" :icon="['fas','brain']" />
        <strong class="navButton__text">
          {{st.strings.memory[getLang]}}
        </strong>
      </li>
      <li @click="()=>{resetWarning('guess');setPlayMode('guess')}" class="navButton" :class="selectedHighlight('guess')">
        <fa class="navButton__icon" :icon="['fas','headphones']" />
        <strong class="navButton__text">
          {{st.strings.guess[getLang]}}
        </strong> 
      </li>
      <li @click="()=>{resetWarning('free');setPlayMode('free')}" class="navButton" :class="selectedHighlight('free')">
        <fa class="navButton__icon" :icon="['fas','music']" />
        <strong class="navButton__text">
          {{st.strings.free[getLang]}}
        </strong> 
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
     ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getTotalPoints','getResetWarning','getLang']),
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
    },
    selectedHighlight:function(mode){
      if (this.getPlayMode==mode){
        return "--selected";
      } else return ""

    }
  }
}
</script>


<style lang="scss" scoped>

@import '@/assets/css/mixins.scss';
.--selected{
  color: $color1;

}

.mode{
    display: flex;
    justify-content: center;
    align-items: center;
  &__title{
    color: $color4;
    text-align: center;
  }
  &__list{
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    .navButton{
      padding: .5rem;
      &__icon{
        @include respond(mobile){
          font-size: 1.5rem;
        }
      }
      &__text{
        font-size: .75em;
        @include respond(tablet){
          display: none;
        }
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
