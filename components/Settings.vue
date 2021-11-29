<template>
  <div>
    <transition name="settingsAppear">
      <section v-if="getSettingsOpen" class="settings" :style="['top:'+navBarHeight,'margin-bottom:'+navBarHeight]">
        <div class="settings__container">
          <p class="settings__container__label">{{st.strings.difficulty[getLang]}} </p>
          <ul>
            <li class="settings__container__option" :class="isOptionSelected(getChosenDifficulty,'easy')" @click="setDifficulty('easy')">{{st.strings.easy[getLang]}}</li>
            <li class="settings__container__option" :class="isOptionSelected(getChosenDifficulty,'normal')" @click="setDifficulty('normal')">{{st.strings.normal[getLang]}}</li>
            <li class="settings__container__option" :class="isOptionSelected(getChosenDifficulty,'hard')" @click="setDifficulty('hard')">{{st.strings.hard[getLang]}}</li>
          </ul>
        </div>
        <div class="settings__container">
          <p class="settings__container__label">{{st.strings.language[getLang]}} </p>
          <ul>
            <li class="settings__container__option" :class="isOptionSelected(getLang,'esp')" @click="$store.commit('changeState',{stateValue:'language',newValue: 'esp'})">
              Español
            </li>
            <li class="settings__container__option" :class="isOptionSelected(getLang,'eng')" @click="$store.commit('changeState',{stateValue:'language',newValue: 'eng'})">
              English
            </li>
          </ul>
        </div>
        <div class="settings__container">
          <p class="settings__container__label">{{st.strings.timeBetweenNotes[getLang]}} </p>
          <vue-slider
            v-model="timeBetweenNotes"
            :tooltip="'none'"
            :contained="true"
            :min="500"
            :max="1500"
            :height="'1rem'"
            :width="'50%'"
          /></vue-slider>
        </div>
        <button @click="$store.commit('changeState',{stateValue:'settingsOpen',newValue:false})" class="menuButton">Ok</button>
      </section> 
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  data:()=>{
    return{
      timeBetweenNotes:1000
    }
  },
  components: {
    VueSlider
  },
  methods:{
    setDifficulty(dif){
      this.$store.commit('changeState',{stateValue:'chosenDifficulty',newValue:dif})
    },
    navBarHeight(){
      let box = document.querySelector('.box');
      let height = box.clientHeight;
      return height
    },
    isOptionSelected(stateItem, option){
      return stateItem==option ? "--selected":""
    }
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','getLang','getSettingsOpen','getChosenDifficulty']),
  },
  watch:{
    timeBetweenNotes:function(newTime){
      this.$store.commit('changeState',{stateValue:'timeBetweenNotes',newValue:newTime})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.--selected{
  color: $color6 !important;
  font-weight: 900;
}

.settings{
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0rem;
  background: $color4;
  z-index: 4;
  width: 100%;
  height: 100%;
  border-top: .125rem solid $color1;
  font-size: 1.5rem;
  @include respond(tablet){
    font-size: 1rem;
  }
  &__container{
    margin: 2rem;
    display: grid;
    grid-template-columns:1fr 2fr ;
    grid-template-rows:1fr ;
    justify-items: start;
    align-items: start;

    @include respond(smallest){
      margin: 1rem;
    }
    ul{
      list-style-type: none;
      display: flex;
      justify-content: center;
    }
    &__label{
      display: table-cell;
      vertical-align: middle;
      color: $color2;
      text-shadow: 0px 0px 3px black;
    }
    &__option{
      cursor: pointer;
      user-select: none;
      color: $color1 ;
      margin: 0rem 1rem;
      transition: .1s;
      &:hover{
        color: $color6;
        transform: scale(1.08);
      }
      &:active{
        transform: scale(0.95);
      }
    }
  }
}

.settingsAppear-enter-active{
  animation: settingsAppear .8s ease;
}
.settingsAppear-leave-active{
  animation: settingsAppear .8s reverse ease;
}
@keyframes settingsAppear{
  0%{transform: translateX(-100%);}
  100%{transform: translateX(0%);}
}
</style>