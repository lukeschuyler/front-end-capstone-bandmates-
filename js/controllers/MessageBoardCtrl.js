bandmates.controller('MessageBoardCtrl', function($ionicScrollDelegate, $scope, $stateParams, MessageFactory, messages, user, AuthFactory) {
	AuthFactory.getUserPic(user.uid)
		.then(function(val) {
			$scope.userArray = Object.keys(val).map(function(key) {
				return val[key]
			})
		})

	$scope.band = $stateParams.bandId
	$scope.visible = false

	$scope.messagez=[]

	$scope.messageRef = firebase.database().ref('messages')

	$scope.messageRef.on('child_added',function(snap) {

	setTimeout(function() {
		$ionicScrollDelegate.scrollBottom(true);
		$scope.visible = true
	}, 300)
		$scope.messagez.push(snap.val())
		$scope.$apply()
	})
	$scope.scroll = function() {
		setTimeout(function() {
			$ionicScrollDelegate.scrollBottom(true);
			$scope.visible = true
		}, 700)
	}

	$scope.scroll()

	$scope.name = user.email

  	$scope.addMessage = function(message, name, band, userImage) { 
	  	MessageFactory.addMessage(message, name, band, userImage);
	  	$scope.message = ''
	  }
})
