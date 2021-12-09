<template>
  <div>
    <transition>
      <div class="win" v-if="gameWin">
        <div class="gameModal">
          <h1 class="gameModal__info">{{st.strings.victory[getLang]}}</h1>
          <h2 class="gameModal__info">{{st.strings.yourScore[getLang] + getTotalPoints}}</h2>
          <button class="menuButton" @click="winAndReset()">{{st.strings.goBack[getLang]}}</button>
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
    return{}
  },
  methods:{},
  computed:{
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','gameWin','getLang']),
  }
}
</script>

<style lang="scss" scoped>
.win{
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
  
}

</style>