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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>8</td>
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
      items: []
    }
  },
  methods: {
    docs() {
      return $('p').hide();
    },
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
    getTime: function() {
      var self = this;
      axios.get('http://localhost:3000/time')
      .then(function (res) {
        console.log(res);
        // res.data.forEach((x) => {
        //   self.items.push(x);
        // })

        // self.item = self.items[0];
        // console.log(self.item)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    // this.docs();
    this.getData();
    this.getTime();
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