const firebase = require('firebase'),


$(function(){

	var config = {
		apiKey: "AIzaSyDVs6XW2IOtF3mGshWj_Af5EqYnIuBHFJw",
		authDomain: "game-card-67d72.firebaseapp.com",
		databaseURL: "https://game-card-67d72.firebaseio.com",
		projectId: "game-card-67d72",
		storageBucket: "game-card-67d72.appspot.com",
		messagingSenderId: "873257844103"
	};

	firebase.initializeApp(config);

	function writeUserData(name) {
		firebase.database().ref('users').push({
			username: name,
			score		: 0
		})
	}

	let players = []

	//get data to be updated (currently limited to 3 players and static)
	firebase.database().ref('users/').on('value', function(snapshot){
		let scoreboard = []
		snapshot.forEach((childSnapshot) => {
			scoreboard.push({id: childSnapshot.key, val : childSnapshot.val()})
		})
		$('#player1').click(function(){
			firebase.database().ref('users/'+scoreboard[0].id).update({score: scoreboard[0].val.score+100})
		})
		$('#player2').click(function(){
			firebase.database().ref('users/'+scoreboard[1].id).update({score: scoreboard[1].val.score+100})
		})
		$('#player3').click(function(){
			firebase.database().ref('users/'+scoreboard[2].id).update({score: scoreboard[2].val.score+100})
		})
	})


	//sorted scoreboard for display
		firebase.database().ref('users/').orderByChild('score').on('value', function(snapshot){
			snapshot.forEach((childSnapshot) => {
				players.push(childSnapshot.val())
			})
		console.log(players);
			if (players.length < 1) {
				console.log('No player');
			} else {
				players.sort(function(a, b){
					return b.score - a.score
				})
				for (var i = 0; i < 3; i++) {
					$('#score').append(`<p>${players[i].username} Score: ${players[i].score}</p>`)
				}
			}
		})


	let key = ''


	validate key submitted by users
	$('#login').submit(function(event){
		event.preventDefault()
		key = $('#answer').val()
		console.log(key);
		if (key === 'gameon') {
			alert('Welcome to Game Card')
		} else {
			alert('Please input the correct key')
		}
	})

	$('#player').submit(function(event){
		event.preventDefault()
		name = $('#name').val()
		writeUserData(name)
	})

})
