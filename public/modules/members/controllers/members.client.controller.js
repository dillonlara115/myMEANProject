'use strict';

// Members controller
angular.module('members').controller('MembersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Members',
	function($scope, $stateParams, $location, Authentication, Members) {
		$scope.authentication = Authentication;

		// Create new Member
		$scope.create = function() {
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
				$location.path('members/' + response._id);

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

		// Remove existing Member
		$scope.remove = function(member) {
			if ( member ) { 
				member.$remove();

				for (var i in $scope.members) {
					if ($scope.members [i] === member) {
						$scope.members.splice(i, 1);
					}
				}
			} else {
				$scope.member.$remove(function() {
					$location.path('members');
				});
			}
		};

		// Update existing Member
		$scope.update = function() {
			var member = $scope.member;

			member.$update(function() {
				$location.path('members/' + member._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Members
		$scope.find = function() {
			$scope.members = Members.query();
		};

		// Find existing Member
		$scope.findOne = function() {
			$scope.member = Members.get({ 
				memberId: $stateParams.memberId
			});
		};
	}
]);