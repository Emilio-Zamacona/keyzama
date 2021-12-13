<template>
  <section class="darkBackground">
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
      font-size: 1rem;
      @include respond(tablet){
        font-size: 0.75rem;
      }
    }
  }
}

</style>