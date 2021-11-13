<template>
  <section class="navBar">
    <div class="navBar__left">
      <transition name="modeAppear">
        <ModeSelect v-if="getPlayMode!=''"/>
      </transition>
    </div>
    <transition name="modeAppearReverse">
      <ul v-if="getPlayMode!=''" class="navBar__options">
        <li >
          <fa class="navButton" :icon="['fas','question-circle']" />
        </li>
        <li>
          <fa class="navButton" :icon="['fas','clipboard-list']" />
        </li>
        <li>
          <fa @click="$store.commit('changeState',{stateValue:'settingsOpen',newValue: !getSettingsOpen}) " class="navButton" :icon="['fas','sliders-h']" />
        </li>
      </ul>
    </transition>
    <transition name="settingsAppear">
      <Settings class="settings" v-if="getSettingsOpen" />
    </transition>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{
      settingsOpen: false,
    } 
  },
  computed:{
     ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints','getSettingsOpen']),
  },
  methods:{}
}
</script>

<style lang="scss" scoped>

.navBar{
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  height: 3rem;
  width: 100%;
  &__left{
    display: flex;
  }
  &__options{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.settings{
  z-index: 5;
  position: absolute;
  top: 4rem;
  right: 0;
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

.settingsAppear-enter-active{
  animation: settingsAppear .8s ease;
}
.settingsAppear-leave-active{
  animation: settingsAppear .8s reverse ease;
}
@keyframes settingsAppear{
  0%{transform: translateX(250%);}
  60%{transform: translateX(-15%);}
  100%{transform: translateX(0%);}
}

</style>