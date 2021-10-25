<template>
  <section class="nav-bar">
    <div class="logo"></div>
    <nav>
      <ul>
        <li>
          <fa :icon="['fas','question-circle']" />
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-bar{
  .logo{
    background-image: url("@/assets/images/logo.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0px;
    margin: 0px;
    width: 65px;
    height: 80px;
  };
  
}


</style>