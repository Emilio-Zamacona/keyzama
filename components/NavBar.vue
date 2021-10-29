<template>
  <section class="navBar">
    <div class="navBar__left">
      <transition name="modeAppear">
        <ModeSelect v-if="getPlayMode!=''"/>
      </transition>
    </div>
    <transition name="modeAppearReverse">
      <ul v-if="getPlayMode!=''" class="navBar__options">
        <li >
          <fa class="navBar__options__item" :icon="['fas','question-circle']" />
        </li>
        <li>
          <fa class="navBar__options__item" :icon="['fas','clipboard-list']" />
        </li>
        <li>
          <fa class="navBar__options__item" :icon="['fas','sliders-h']" />
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from "vuex";
export default {
  data:function () {
    return{} 
  },
  computed:{
     ...mapGetters(["getCurrentGuess","getSecretNotes",'getLastNote','getPlayMode','getScales','getPiano','getRoundPoints']),
  },
  methods:{}
}
</script>

<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#504B43;
$color5:#434371;
.navBar{
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 1rem 2rem;
  height: 3rem;
  &__left{
    display: flex;
    &__logo{
      background-image: url("@/assets/images/logo.png");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 0px;
      margin: 0px;
      width: 65px;
      height: 80px;
    };
  }
  &__options{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &__item{
      padding-inline: 1rem;
      font-size: 2rem;
      color: $color4;
      transition: .2s;
      &:hover{
        color: $color2;
      }
    }
  }
}

.modeAppear-enter-active{
  animation: modeAppear 1.5s ease;
}
.modeAppear-leave-active{
  animation: modeAppear 1.5s ease;
}
@keyframes modeAppear{
  0%{transform: translate(-50rem);}
  100%{transform: translate(0px);}
}

.modeAppearReverse-enter-active{
  animation: modeAppearReverse 1.5s ease;
}
.modeAppearReverse-leave-active{
  animation: modeAppearReverse 1.5s ease;
}
@keyframes modeAppearReverse{
  0%{transform: translateX(20rem);}
  100%{transform: translateX(0px);}
}


</style>