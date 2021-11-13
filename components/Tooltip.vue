<template>
  <div class="tooltip">
    <div class="tooltip__text">
      <h2>
        {{text}} 
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return{}
  },
  props:['text']

}
</script>

<style lang="scss" scoped>
.tooltip{
  background: $color1;
  color: $color5;
  width: 7rem;
  height: 7rem;
  transform: rotate(45deg);
  border-radius: 50% 50% 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 .5rem .25rem  $color5;
  &__text{
    transform: rotate(-45deg);
    h2{
      text-align: center;
      
    }
  }
}

</style>