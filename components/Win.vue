<template>
  <div>
    <transition>
      <div class="win" v-if="gameWin">
        <div class="buttonBoxNotification">
          <h1>You won! </h1>
          <h2>your score: {{getTotalPoints}} </h2>
          <button @click="winAndReset()">Go back</button>
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
    ...mapGetters(["getCurrentGuess","getSecretNotes","getTotalPoints","getRoundPoints","getPlayMode",'getRound','gameWin']),
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