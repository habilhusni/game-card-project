<template>
  <div class="home">
    <h1> HOME PAGE </h1>
    <div class="navbar navbar-toggleable-md navbar-light">

      <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" id="answer" placeholder="Key Channel">
        <input class="form-control mr-sm-2" type="text" id="username" placeholder="Username">
        <button class="btn btn-outline-success my-2 my-sm-0 buttlogin">Input</button>
        <!-- <router-link to="game" class="btn btn-outline-success my-2 my-sm-0 buttlogin" type="submit">
          Input
        </router-link> -->
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
  },
  methods: {
    getSocket: function() {
      var self = this 
      var config = {
        apiKey: "AIzaSyDVs6XW2IOtF3mGshWj_Af5EqYnIuBHFJw",
        authDomain: "game-card-67d72.firebaseapp.com",
        databaseURL: "https://game-card-67d72.firebaseio.com",
        projectId: "game-card-67d72",
        storageBucket: "game-card-67d72.appspot.com",
        messagingSenderId: "873257844103"
      };

    firebase.initializeApp(config);
    var key = '';

    function writeUserData(name) {
    firebase.database().ref('users').push({
        username: name,
        score   : 0
      })
    }

    $('.buttlogin').click(function(event){
      event.preventDefault()
      key = $('#answer').val()
      console.log(key);
      if (key === 'gameon') {
        alert('Welcome to Game Card')
        // writeUserData($('#username').val())
        window.location.href = 'http://localhost:8080/#/game'
      } else {
        alert('Please input the correct key')
      }
    })

    }

  },
  mounted() {
    this.getSocket();
    // this.docs();
    // this.getData();
    // this.getTime();
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
