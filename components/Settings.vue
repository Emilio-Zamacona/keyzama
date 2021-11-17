<template>
  <div>
    <section class="settings">
        <ul class="settings__difficulty">
          <li class="settings__difficulty__option" @click="setDifficulty('easy')">{{st.strings.easy[getLang]}}</li>
          <li class="settings__difficulty__option" @click="setDifficulty('normal')">{{st.strings.normal[getLang]}}</li>
          <li class="settings__difficulty__option" @click="setDifficulty('hard')">{{st.strings.hard[getLang]}}</li>
        </ul>
    </section> 
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:()=>{
    return{}
  },
  methods:{
    setDifficulty(dif){
      this.$store.commit('changeState',{stateValue:'chosenDifficulty',newValue:dif})
    }
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','getLang']),
  }
}
</script>

<style lang="scss" scoped>
.settings{
  &__difficulty{
    list-style-type: none;
    background: $color5;
    border: 0.5rem solid $color1;
    display: flex;
    border-radius: 1rem;
    padding: 1rem;
    &__option{
      cursor: pointer;
      user-select: none;
      color: $color1 ;
      font-size: 2rem;
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
}

</style>