<template>
  <section class="mode">
    <h1 class="mode__title">Choose a Mode:</h1>
    <ul class="mode__list">
      <li @click="setPlayMode('memory')" class="mode__list__item">
        <fa :icon="['fas','brain']" />
        <strong class="mode__list__item__text">Memory</strong>
      </li>
      <li @click="setPlayMode('guess')" class="mode__list__item">
        <fa :icon="['fas','headphones']" />
        <strong class="mode__list__item__text">Ear training</strong> 
      </li>
      <li @click="setPlayMode('free')" class="mode__list__item">
        <fa :icon="['fas','music']" />
        <strong class="mode__list__item__text">Free</strong> 
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data:function () {
    return{} 
  },
  computed:{
  },
  methods:{
    setPlayMode: function(mode){
      this.$store.commit('changeState',{stateValue : 'playMode' , newValue : mode})
    }
  }
}
</script>

<style lang="scss" scoped>
$color1:#C3FCD9;
$color2:#73F0A3;
$color3:#3EA365;
$color4:#504B43;
$color5:#434371;
.mode{
  &__title{
    text-align: center;
  }
  &__list{
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin: 3rem; 
    &__item{
      display: flex;
      color: $color4;
      font-size: 2rem;
      font-weight: lighter !important;
      transition: 0.2s;
      &:hover{
        cursor: pointer;
        color: $color2;
      }
      &:active{
        transform: scale(1.2);
      }
      &__text{
        padding-inline: 1rem;
      }
    }
  }
}

</style>
