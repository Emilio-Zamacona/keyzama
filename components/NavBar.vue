<template>
  <section class="navBar" :style="navBarHeight">
    <div class="navBar__left">
      <transition name="modeAppear">
        <ModeSelect v-if="getPlayMode!=''"/>
      </transition>
    </div>
    <transition name="modeAppearReverse">
      <ul v-if="getPlayMode!=''" class="navBar__options">

        <li>
          <fa @click="$store.commit('changeState',{stateValue:'settingsOpen',newValue: !getSettingsOpen}) " 
              class="navBar__options__button" 
              :icon="['fas','bars']" />
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{
    } 
  },
  computed:{
     ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getSettingsOpen','getExplicitNotes']),
  },
  methods:{
    navBarHeight(){
      return getPlaymode!='' ? 'height:$color5':'height:$color2'
    }
  }
}
</script>

<style lang="scss" scoped>

.navBar{
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  background: $color3;
  transition: 1s;
  &__left{
    display: flex;
  }
  &__options{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &__button{
      display: flex;
      color: $color5;
      font-size: 2rem;
      font-weight: lighter !important;
      user-select: none;
      transition: 0.2s;
      padding-inline: 1rem;
      &:hover{
        cursor: pointer;
        color: $color1;
      }
      &:active{
        transform: scale(1.1);
      }
      strong,h1,h2,h3,h4{
        padding-inline: 1rem;
      }
    }
  }

}


.modeAppear-enter-active{
  animation: modeAppear 1.5s ease;
}
.modeAppear-leave-active{
  animation: modeAppear 1.5s reverse ease;
}
@keyframes modeAppear{
  0%{transform: translate(-50rem);}
  100%{transform: translate(0px);}
}

.modeAppearReverse-enter-active{
  animation: modeAppearReverse 1.5s ease;
}
.modeAppearReverse-leave-active{
  animation: modeAppearReverse 1.5s reverse ease;
}
@keyframes modeAppearReverse{
  0%{transform: translateX(20rem);}
  100%{transform: translateX(0px);}
}
</style>