<template>
  <div class="home">
    <h1> HOME PAGE </h1>
    <div class="navbar navbar-toggleable-md navbar-light">

      <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" placeholder="Code Channel">
        <router-link to="game" class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Input
        </router-link>
      </form>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-inline {
    display: flex;
    justify-content: center;
  }
</style>
