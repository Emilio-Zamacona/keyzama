<template>
  <section class="darkBackground">
    <div class="gameModal" v-if="topScores.length==0">
      <h2 class="gameModal__info">{{st.strings.emptyLeaderBoard[getLang]}} </h2>
      <button class="menuButton" @click="$store.commit('changeState',{stateValue:'leaderBoardOpen',newValue:!getLeaderBoardOpen})">{{st.strings.goBack[getLang]}}</button>
    </div>
    <div v-else class="gameModal">
      <h2 class="gameModal__info">{{st.strings.topScores[getLang]}}</h2>

      <ul class="leaderBoard__list">
        <li class="leaderBoard__list__item gameModal__info " v-for="item in topScores" :key="item.id">
          <fa class="leaderBoard__list__item__icon" v-if="item.playMode=='memory'" :icon="['fas','brain']" />
          <fa class="leaderBoard__list__item__icon" v-else :icon="['fas','headphones']" />
          <p class="leaderBoard__list__item__score">{{st.strings[item.chosenDifficulty][getLang]}}</p>
          <p class="leaderBoard__list__item__score">{{item.name}}</p>
          <p class="leaderBoard__list__item__score">{{item.score+' '+st.strings.points[getLang]}}</p>
          <p class="leaderBoard__list__item__date">{{item.date}}</p>
        </li>
      </ul>
      <div v-if="!eraseWarning">
        <button class="menuButton" @click="eraseWarningOpen(true)">{{st.strings.eraseScores[getLang]}}</button>      
        <button class="menuButton" @click="$store.commit('changeState',{stateValue:'leaderBoardOpen',newValue:!getLeaderBoardOpen})">{{st.strings.goBack[getLang]}}</button>
      </div>
      <div class="erase" v-if="eraseWarning">
        <h3 class="gameModal__info">{{st.strings.eraseWarning[getLang]}}</h3>
        <button class="menuButton" @click="()=>{erase();eraseWarningOpen(false)}">{{st.strings.erase[getLang]}}</button>
        <button class="menuButton" @click="eraseWarningOpen(false)">{{st.strings.cancel[getLang]}}</button>        

      </div>
    </div>
  </section>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  data:()=>{
    return{
      topScores:[],
      eraseWarning:false
    }
  },
  methods:{
    eraseWarningOpen(toggle){
      this.eraseWarning=toggle
    },
    erase(){
      this.topScores=[]
    }
  },
  mounted(){
    if (localStorage.topScores){
      this.topScores=JSON.parse(localStorage.getItem('topScores')) || []
    }
  },
  watch:{
    topScores(score){
      if (score.length==0){
        localStorage.setItem('topScores',JSON.stringify(top))
      }
      let sorted = score.slice()
      sorted.sort((a, b) => {
        return b.score - a.score;
      });
      let top = sorted.slice(0,10)
      localStorage.setItem('topScores',JSON.stringify(top))
    }
  },
    computed:{
    ...mapGetters(['getLeaderBoardOpen','getLang','getChosenDifficulty']),
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
ul{
  list-style: none;
}
.erase{
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
.leaderBoard{
  &__list{
    &__item{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: .25rem;
      gap: .5rem;
      @include respond(tablet){
        font-size: .75rem;
      }
      &__score{}
      &__date{}
      &__icon{}
    }
  }
}

</style>