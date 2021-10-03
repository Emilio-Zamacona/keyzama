<template>
<section class="keyboard">
  <div v-for="pianoKey in piano" :key="pianoKey" class="keyboard__key" 
  :class="[pianoKey.color=='white' ? '--white':'--black',
   isWhiteAndSpaced(pianoKey.name)]">

  </div>
</section>

</template>

<script>
export default {
  data: ()=> {
    return{
      piano:[
        {name:"c",color:"white"},
        {name:"cs",color:"black"},
        {name:"d",color:"white"},
        {name:"ds",color:"black"},
        {name:"e",color:"white"},
        {name:"f",color:"white"},
        {name:"fs",color:"black"},
        {name:"g",color:"white"},
        {name:"gs",color:"black"},
        {name:"a",color:"white"},
        {name:"as",color:"black"},
        {name:"b",color:"white"},
      ],
 
    }
  },
  methods: {
    isWhiteAndSpaced(key){
       if (['a','g','e','d','b'].includes(key)) return "--whiteMargin"
    }
  }

}
</script>

<style lang="scss" scoped>
.--whiteMargin{
  margin:0 0 0 -1em
}
.--white{
  background: white;
  color: black;
  height: 14rem;
  width: 3rem;
  z-index:1;
  
  }
.--black{
  background: black;
  color: white;
  height: 9rem;
  width: 2rem;
  z-index:2;
  margin:0 0 0 -1em;
}
.keyboard {
  display: flex;
  justify-content: center;
  &__key{
    border: solid 1px black;
  }

}


</style>