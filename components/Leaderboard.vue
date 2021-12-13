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
          <p class="leaderBoard__list__item__score">{{item.score+' '+st.strings.points[getLang]}}</p>
          <p class="leaderBoard__list__item__date">{{item.date}}</p>
        </li>
      </ul>
      <div v-if="!eraseWarning">
        <button class="menuButton" @click="eraseWarningOpen(true)">{{st.strings.eraseScores[getLang]}}</button>      
        <button class="menuButton" @click="$store.commit('changeState',{stateValue:'leaderBoardOpen',newValue:!getLeaderBoardOpen})">{{st.strings.goBack[getLang]}}</button>
      </div>
      <div v-if="eraseWarning">
        <h2 class="gameModal__info">{{st.strings.eraseWarning[getLang]}}</h2>
        <div>
          <button class="menuButton" @click="()=>{erase();eraseWarningOpen(false)}">{{st.strings.erase[getLang]}}</button>
          <button class="menuButton" @click="eraseWarningOpen(false)">{{st.strings.cancel[getLang]}}</button>        
        </div>
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
    ...mapGetters(['getLeaderBoardOpen','getLang']),
  }
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
.leaderBoard{
  &__list{
    &__item{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &__score{
        margin-right: 1rem;
      }
      &__date{}
    }
  }
}

</style>