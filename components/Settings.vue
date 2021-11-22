<template>
  <div>
    <transition name="settingsAppear">
      <section v-if="getSettingsOpen" class="settings" :style="'top:'+navBarHeight">
        <div class="settings__container">
          <p class="settings__container__label">{{st.strings.difficulty[getLang]}} </p>
          <ul>
            <li class="settings__container__option" @click="setDifficulty('easy')">{{st.strings.easy[getLang]}}</li>
            <li class="settings__container__option" @click="setDifficulty('normal')">{{st.strings.normal[getLang]}}</li>
            <li class="settings__container__option" @click="setDifficulty('hard')">{{st.strings.hard[getLang]}}</li>
          </ul>
        </div>
        <div class="settings__container">
          <p class="settings__container__label">{{st.strings.language[getLang]}} </p>
          <ul>
            <li class="settings__container__option" @click="$store.commit('changeState',{stateValue:'language',newValue: 'esp'})">
              Español
            </li>
            <li class="settings__container__option" @click="$store.commit('changeState',{stateValue:'language',newValue: 'eng'})">
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
            :width="'40%'"
          /></vue-slider>
          <div class="--sliderLabels">
            <strong>{{st.strings.fast[getLang]}} </strong>
            <strong>{{st.strings.slow[getLang]}} </strong>
          </div>
        </div>
        <button @click="$store.commit('changeState',{stateValue:'settingsOpen',newValue:false})" class="settings__ok">Ok</button>
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
    }
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','getLang','getSettingsOpen']),
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
.--sliderLabels{
  display: flex;
  justify-content: space-between;
  width: 40%;
  color: $color2;

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
  border: 0.5rem solid $color1;
/*   border-left: 0; */
  &__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block: 2%;
    ul{
      list-style-type: none;
      display: flex;
      justify-content: center;
    }
    &__label{
      text-align: center;
      color: $color3;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    &__option{
      cursor: pointer;
      user-select: none;
      color: $color1 ;
      font-size: 1.5rem;
      margin: 0rem 1rem;
      transition: .1s;
      &:hover{
        color: $color2;
        transform: scale(1.08);
      }
      &:active{
        transform: scale(0.95);
      }
    }
  }
  &__ok{
    align-self: center;
    background: $color2;
    border-style: none;
    border: .25rem solid $color1;
    border-radius: .5rem;
    color: $color5;
    font-size: 1.5rem;
    padding: .5rem;
    transition: .2s;
    @include respond(tablet){
      font-size: 1rem;
    }
    &:hover{
      transform:scale(1.05);
    }
    &:active{
      transform: translateY(.125rem) scale(0.95);
      background: $color1;
      border: $color2 solid .25rem;
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