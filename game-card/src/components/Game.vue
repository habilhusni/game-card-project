<template>
  <div class="game">

    <h1> GAME PAGE </h1>
    <div class="question-box">

      <div class="question" style="width: 100%">
          <div class="wrapp-soal" v-for="item in items">
            <div class="soal">
              <p>{{item.content}}</p>
            </div>
            <div class="jawaban">
              <label class="custom-control custom-radio" v-for="(answer, index) in item.answer">
                <input name="radio" type="submit" class="custom-control-input" @click="cekJawaban(item, index)">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">{{ index+1 }} - {{ answer }}</span>
              </label>
            </div>
          </div>

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
      user: [],
      score: 0
    }
  },
  methods: {
    getData: function() {
      var self = this;
      axios.get('http://localhost:3000/questions')
      .then(function (res) {
        console.log(res.data);
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
        snapshot.forEach((childSnapshot) => {
          // console.log(childSnapshot.val().username)
          let username = childSnapshot.val();
          self.user.push(username)
        })
      })
    },
    cekJawaban: function(item, idx) {
      var self = this;
      // console.log(this.score);
      if (idx == item.trueAnswer) {

        firebase.database().ref('users/').on('value', function(snapshot) {
          console.log('_-------------------', snapshot.val()["-KhaATvueucw813npqqu"].score)
          var nilai = snapshot.val()["-KhaATvueucw813npqqu"].score

          firebase.database().ref('users/-KhaATvueucw813npqqu').update({score: nilai + 100})


        })
        console.log(this.score);
      }
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
