<template>
  <div>
    <transition>
      <div class="darkBackground" v-if="gameWin">
        <div class="gameModal">
          <h1 class="gameModal__info">{{st.strings.victory[getLang]}}</h1>
          <h2 class="gameModal__info">{{st.strings.yourScore[getLang] + getTotalPoints}}</h2>
          <button class="menuButton" @click="()=>{saveScore();winAndReset()}">{{st.strings.goBack[getLang]}}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
    data:()=>{
    return{
      topScores:[]
    }

  },
  methods:{
    saveScore(){
      let date= new Date();
      this.topScores.push({score:this.getTotalPoints,date:date.toLocaleString()})
    }
  },
   mounted(){
    if (localStorage.topScores){
      this.topScores=JSON.parse(localStorage.getItem('topScores')) || []
    }
  },
   watch:{
    topScores(score){
      localStorage.setItem('topScores',JSON.stringify(score))
    }
  },
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','gameWin','getLang']),
  }
}
</script>

<style lang="scss" scoped>

</style>