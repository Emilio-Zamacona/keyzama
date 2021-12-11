<template>
  <section class="help">
    <div class="gameModal">
      <h2 class="gameModal__info">{{st.strings.help[getLang]}} </h2>
      <div class="--row">
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

      <button @click="$store.commit('changeState',{stateValue:'helpOpen',newValue:!getHelpOpen})" class="menuButton">{{st.strings.goBack[getLang]}} </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data:()=>{
    return{

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
.--row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  @include landscape(){
    flex-direction: row;
  }
}
.help{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: rgba(0, 0, 0, 0.75);
  &__article{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    min-width: 33%;
    max-width: 12rem;
    &__icon{
      font-size: 2rem;
      margin-bottom: 1rem;
      color: $color1;
      @include respond(tablet){
        font-size: 1.5rem;
      }
    }
    &__description{
      text-align: center;
      color: $color1;
    }
  }
}

</style>