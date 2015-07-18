'use strict';

// Members controller
var membersApp = angular.module('members');

membersApp.controller('MembersController', ['$scope', '$stateParams', 'Authentication', 'Members', '$modal', '$log',]
	function($scope, $stateParams, Authentication, Members, $modal, $log) {
		this.authentication = Authentication;

		// Find a list of Members
		this.members = Members.query();
		
		this.animationsEnabled = true;


		//open modal window to create a single member record
	  	this.modalCreate = function (size) {

		    var modalInstance = $modal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'modules/members/views/create-member.client.view.html',
		      controller: function ($scope, $modalInstance) {

		      	  $scope.ok = function () {
		      	  	if(createMemberForm.$valid){
		      	  		$modalInstance.close();
		      	  	}
				    
				  };

				  $scope.cancel = function () {
				    $modalInstance.dismiss('cancel');
				  };
		      },
		      size: size,

		    });

		    modalInstance.result.then(function (selectedItem) {
		      
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };





		//open modal window to update single member record
	  	this.modalUpdate = function (size, selectedMember) {

		    var modalInstance = $modal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'modules/members/views/edit-member.client.view.html',
		      controller: function ($scope, $modalInstance, member) {
		      	$scope.member = member;

		      	  $scope.ok = function () {
		      	  	if(updateMemberForm.$valid){
		      	  		$modalInstance.close($scope.member);
		      	  	}
				    
				  };

				  $scope.cancel = function () {
				    $modalInstance.dismiss('cancel');
				  };
		      },
		      size: size,
		      resolve: {
		        member: function () {
		          return selectedMember;
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };

		  $scope.toggleAnimation = function () {
		    $scope.animationsEnabled = !$scope.animationsEnabled;
		  };
		}
]);

membersApp.controller('MembersCreateController', ['$scope', 'Members',
	function($scope, Members) {
		
		// Create new Member
		this.create = function() {
			// Create new Member object
			var member = new Members ({
				firstName: this.firstName,
				lastName: this.lastName,
				dateOfBirth: this.dateOfBirth,
				schoolAddress: this.schoolAddress,
				apartmentNumber: this.apartmentNumber,
				city: this.city,
				state: this.state,
				zipCode: this.zipCode,
				primaryNumber: this.primaryNumber,
				secondaryNumber: this.secondaryNumber,
				guardianFirstName: this.guardianFirstName,
				guardianLastName: this.guardianLastName,
				guardianAddress: this.guardianAddress,
				guardianApartmentNumber: this.guardianApartmentNumber,
				guardianCity: this.guardianCity,
				guardianState: this.guardianState,
				guardianZipCode: this.guardianZipCode,
				guardianPrimaryNumber: this.guardianPrimaryNumber,
				guardianSecondaryNumber: this.guardianTwoSecondaryNumber,
				guardianTwoFirstName: this.guardianTwoFirstName,
				guardianTwoLastName: this.guardianTwoLastName,
				guardianTwoAddress: this.guardianTwoAddress,
				guardianTwoApartmentNumber: this.guardianTwoApartmentNumber,
				guardianTwoCity: this.guardianTwoCity,
				guardianTwoState: this.guardianTwoState,
				guardianTwoZipCode: this.guardianTwoZipCode,
				guardianTwoPrimaryNumber: this.guardianTwoPrimaryNumber,
				guardianTwoSecondaryNumber: this.guardianTwoSecondaryNumber,
				carMake: this.carMake,
				carModel: this.carModel,
				carLicenseNumber: this.carLicenseNumber,
				allergies: this.allergies,
				allergiesToMedicine: this.allergiesToMedicine,
				currentMedications: this.currentMedications,
				healthIssues: this.healthIssues,
				healthInsuranceProvider: this.healthInsuranceProvider,
				healthInsuranceSubscriberName: this.healthInsuranceSubscriberName,
				healthInsuranceSubscriberEmployer: this.healthInsuranceSubscriberEmployer,
				healthInsurancePolicyNumber: this.healthInsurancePolicyNumber,
				healthInsurancePhoneNumber: this.healthInsurancePhoneNumber,
				autoInsuranceProvider: this.autoInsuranceProvider,
				autoInsuranceName: this.autoInsuranceName,
				autoInsuranceEmployer: this.autoInsuranceEmployer,
				autoInsurancePolicyNumber: this.autoInsurancePolicyNumber,
				autoInsurancePhoneNumber: this.autoInsurancePhoneNumber,

			});

			// Redirect after save
			member.$save(function(response) {

				// Clear form fields
				$scope.firstName = '';
				$scope.lastName = '';
				$scope.dateOfBirth = '';
				$scope.schoolAddress = '';
				$scope.apartmentNumber = '';
				$scope.city = '';
				$scope.state = '';
				$scope.zipCode = '';
				$scope.primaryNumber = '';
				$scope.secondaryNumber = '';
				$scope.guardianFirstName = '';
				$scope.guardianLastName = '';
				$scope.guardianAddress = '';
				$scope.guadianApartmentNumber = '';
				$scope.guardianCity = '';
				$scope.guardianState = '';
				$scope.guardianZipCode = '';
				$scope.guardianPrimaryNumber = '';
				$scope.guardianSecondaryNumber = '';
				$scope.guardianTwoFirstName = '';
				$scope.guardianTwoLastName = '';
				$scope.guardianTwoAddress = '';
				$scope.guadianTwoApartmentNumber = '';
				$scope.guardianTwoCity = '';
				$scope.guardianTwoState = '';
				$scope.guardianTwoZipCode = '';
				$scope.guardianTwoPrimaryNumber = '';
				$scope.guardianTwoSecondaryNumber = '';
				$scope.carMake = '';
				$scope.carModel = '';
				$scope.carLicenseNumber = '';
				$scope.allergies = '';
				$scope.allergiesToMedicine = '';
				$scope.currentMedications = '';
				$scope.healthIssues = '';
				$scope.healthInsuranceProvider = '';
				$scope.healthInsuranceSubscriberName = '';
				$scope.healthInsuranceSubscriberEmployer = '';
				$scope.healthInsurancePolicyNumber = '';
				$scope.healthInsurancePhoneNumber = '';
				$scope.autoInsuranceProvider = '';
				$scope.autoInsuranceName = '';
				$scope.autoInsuranceEmployer = '';
				$scope.autoInsurancePolicyNumber = '';
				$scope.autoInsurancePhoneNumber = '';

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);

membersApp.controller('MembersEditController', ['$scope', 'Members',
	function($scope, Members) {
		// Update existing Member
		this.update = function(updatedMember) {
			var member = updatedMember;

			member.$update(function() {
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

	}
]);


membersApp.directive('memberList', [function(){
   return {
   	restrict: 'E', 
   	transclue: true,
    templateUrl: 'modules/members/views/member-list-template.html',
    link: function(scope, element, attrs){

    }
  };
}]);
		

		

		// // Remove existing Member
		// $scope.remove = function(member) {
		// 	if ( member ) { 
		// 		member.$remove();

		// 		for (var i in $scope.members) {
		// 			if ($scope.members [i] === member) {
		// 				$scope.members.splice(i, 1);
		// 			}
		// 		}
		// 	} else {
		// 		$scope.member.$remove(function() {
		// 			$location.path('members');
		// 		});
		// 	}
		// };





		// // Find existing Member
		// $scope.findOne = function() {
		// 	$scope.member = Members.get({ 
		// 		memberId: $stateParams.memberId
		// 	});
		// };