<template>
  <div class="game">

    <h1> GAME PAGE </h1>
    <div class="question-box">

      <div class="question" style="width: 100%">
        <p>{{items[0].content}}</p>
          <label class="custom-control custom-radio">
            <input id="radio1" name="radio" type="radio" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">{{items[0].answer}}</span>
          </label>
          <label class="custom-control custom-radio">
            <input id="radio2" name="radio" type="radio" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Answer2</span>
          </label>
          <label class="custom-control custom-radio">
            <input id="radio2" name="radio" type="radio" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Answer3</span>
          </label>

          <table class="table" style="width: 100%">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user,index) in user">
                <th scope="row">{{index+1}}</th>
                <td>{{user.username}}</td>
                <td>{{user.score}}</td>
              </tr>
            </tbody>
          </table>

      </div>

    </div>

    <router-link to="home" class="backHome">
      Back to home
    </router-link>


  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [],
      user: []
    }
  },
  methods: {
    getData: function() {
      var self = this;
      axios.get('http://localhost:3000/questions')
      .then(function (res) {
        console.log(res.data[0]);
        res.data.forEach((x) => {
          self.items.push(x);
        })

        // self.item = self.items[0];
        // console.log(self.item)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getUser: function() {
      var self = this;
      var config = {
        apiKey: "AIzaSyDVs6XW2IOtF3mGshWj_Af5EqYnIuBHFJw",
        authDomain: "game-card-67d72.firebaseapp.com",
        databaseURL: "https://game-card-67d72.firebaseio.com",
        projectId: "game-card-67d72",
        storageBucket: "game-card-67d72.appspot.com",
        messagingSenderId: "873257844103"
      };

      firebase.initializeApp(config);
      
      firebase.database().ref('users/').on('value', function(snapshot) {
        // console.log('_-------------------', snapshot.val())
        console.log(self.user)
        snapshot.forEach((childSnapshot) => {
          // console.log(childSnapshot.val().username)
          let username = childSnapshot.val();
          self.user.push(username)
          console.log(self.user);
        })  
      })

    }
  },
  mounted() {
    this.getData();
    this.getUser();
    // this.getTime();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .backHome {
    display: flex;
    justify-content: flex-end;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
  }

</style>