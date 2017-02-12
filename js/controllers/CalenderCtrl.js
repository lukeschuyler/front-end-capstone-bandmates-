bandmates.controller('CalenderCtrl', function($scope, $ionicModal, bands) {
  
	$scope.bandz = bands
	// $scope.goToAddEvent = function() {

	// }

	$ionicModal.fromTemplateUrl('templates/eventModal.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  })

	  $scope.openModal = function() {
		    $scope.modal.show();

		  };
		  $scope.closeModal = function() {
		    $scope.modal.hide();
		  };
		  // Cleanup the modal when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
		  // Execute action on hide modal
		  $scope.$on('modal.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove modal
		  $scope.$on('modal.removed', function() {
		    // Execute action
		  });
});
