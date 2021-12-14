<template>
  <section class="darkBackground">
    <div class="gameModal --fixedSize" >
      <h2 class="gameModal__info">{{st.strings.help[getLang]}} </h2>
      <transition name="helpScroll" mode="out-in">
        <div key=1 v-if="helpPage==1" class="--row">
          <div class="help__article">
            <fa class="help__article__icon" :icon="['fas','music']" />
            <p class="help__article__description">{{st.strings.freeHelp[getLang]}}</p>
          </div>
          <div class="help__article">
            <fa class="help__article__icon" :icon="['fas','brain']" />
            <p class="help__article__description">{{st.strings.memoryHelp[getLang]}}</p>
          </div>
          <div class="help__article">
            <fa class="help__article__icon" :icon="['fas','headphones']" />
            <p class="help__article__description">{{st.strings.guessHelp[getLang]}}</p>
          </div>
        </div>
        <div key=2 v-else class="--row">
          <div class="help__article">
            <fa class="help__article__icon" :icon="['fas','volume-up']" />
            <p class="help__article__description">{{st.strings.listenHelp[getLang]}}</p>
          </div>
          <div class="help__article">
            <fa class="help__article__icon" :icon="['fas','dice']" />
            <p class="help__article__description">{{st.strings.newSequenceHelp[getLang]}}</p>
          </div>
          <div class="help__article">
            <div class="--row">
              <fa class="help__article__icon" :icon="['fas','eye']" />
              <fa class="help__article__icon" :icon="['fas','eye-slash']" />
            </div>
            <p class="help__article__description">{{st.strings.visibleNotesHelp[getLang]}}</p>
          </div>
        </div>
      </transition>
      <div class="help__article__nav">
        <h3 @click="changeHelpPage(1)" class="help__article__nav__arrow">&#11164;</h3>
        <h3 @click="changeHelpPage(2)" class="help__article__nav__arrow">&#10148;</h3>
      </div>
      <button @click="$store.commit('changeState',{stateValue:'helpOpen',newValue:!getHelpOpen})" class="menuButton">{{st.strings.goBack[getLang]}} </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data:()=>{
    return{
      helpPage:1
    }
  },
  methods:{
    changeHelpPage(pageNumber){
      this.helpPage=pageNumber
    }
  },
  computed:{
     ...mapGetters(["getCurrentGuess",
     "getSecretNotes",
     'getLastNote',
     'getPlayMode',
     'getScales',
     'getPiano',
     'getRoundPoints',
     'getLeaderBoardOpen',
     'getSettingsOpen',
     'getExplicitNotes',
     'getLang',
     'getHelpOpen']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.--fixedSize{
  min-width: 30rem !important;
  @include respond(tablet){
    min-width: 20rem !important;
  }  
  @include respond(mobile){
    min-width: 16rem !important;
  }
  @include respond(smallest){
    min-width: 16rem !important;
  }
  display: flex;
  justify-content: center;
}
.--row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
.help{
  &__article{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    width: 33%;
    @include respond(smallest){
      margin: 0;
    }
    &__nav{
      display: flex;
      justify-content: center;
      margin: .5rem;
      gap: 2rem;
      &__arrow{
        color: $color1;
        transition: .2s;
        user-select: none;
        cursor: pointer;
        font-size: 1.5rem;
        &:hover{
          transform: scale(1.2);
          color: $color2;
        }
        &:active{
          transform: scale(0.9);
          color: $color1;
        }
      }
    }
    &__icon{
      font-size: 2rem;
      margin-bottom: 1rem;
      color: $color1;
      @include respond(tablet){
        font-size: 1.5rem;
      }
      @include respond(smallest){
        font-size: 1.5rem;
      }
    }
    &__description{
      text-align: center;
      color: $color1;
      font-size: 1rem;
      @include respond(tablet){
        font-size: 0.75rem;
      }
      @include respond(mobile){
        font-size: 0.75rem;
      }
    }
  }
}
.helpScroll-enter-active,
.helpScroll-leave-active {
    transition: opacity .5s
}

.helpScroll-enter,
.helpScroll-leave-to {
    opacity: 0
}
@keyframes helpScroll{
  0%{
    background: red;
  }
  100%{
    background: blue;
  }
}
</style>