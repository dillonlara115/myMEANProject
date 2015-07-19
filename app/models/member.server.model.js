'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Member Schema
 */
var MemberSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'Please fill Member first name',
		trim: true
	},
	lastName: {
		type: String,
		default: '',
		required: 'Please fill Member last name',
		trim: true
	},
	dateOfBirth: {
		type: String,
		default: '',
		trim: true
	},
	schoolAddress: {
		type: String,
		default: '',
		trim: true
	},
	apartmentNumber: {
		type: String,
		default: '',
		trim: true
	},
	city: {
		type: String,
		default: '',
		trim: true
	},
	state: {
		type: String,
		default: '',
		trim: true
	},
	zipCode: {
		type: String,
		default: '',
		trim: true
	},
	primaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	secondaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianFirstName: {
		type: String,
		default: '',
		trim: true
	},
	guardianLastName: {
		type: String,
		default: '',
		trim: true
	},
	guardianAddress: {
		type: String,
		default: '',
		trim: true
	},
	guardianApartmentNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianCity: {
		type: String,
		default: '',
		trim: true
	},
	guardianState: {
		type: String,
		default: '',
		trim: true
	},
	guardianZipCode: {
		type: String,
		default: '',
		trim: true
	},
	guardianPrimaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianSecondaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoFirstName: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoLastName: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoAddress: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoApartmentNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoCity: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoState: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoZipCode: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoPrimaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	guardianTwoSecondaryNumber: {
		type: String,
		default: '',
		trim: true
	},
	carMake: {
		type: String,
		default: '',
		trim: true
	},
	carModel: {
		type: String,
		default: '',
		trim: true
	},
	carLicenseNumber: {
		type: String,
		default: '',
		trim: true
	},
	allergies: {
		type: Boolean
	},
	allergiesToMedicine: {
		type: String,
		default: '',
		trim: true
	},
	currentMedications: {
		type: String,
		default: '',
		trim: true
	},
	healthIssues: {
		type: String,
		default: '',
		trim: true
	},
	healthInsuranceProvider: {
		type: String,
		default: '',
		trim: true
	},
	healthInsuranceSubscriberName: {
		type: String,
		default: '',
		trim: true
	},
	healthInsuranceSubscriberEmployer: {
		type: String,
		default: '',
		trim: true
	},
	healthInsurancePolicyNumber: {
		type: String,
		default: '',
		trim: true
	},
	healthInsurancePhoneNumber: {
		type: String,
		default: '',
		trim: true
	},
	autoInsuranceProvider: {
		type: String,
		default: '',
		trim: true
	},
	autoInsuranceName: {
		type: String,
		default: '',
		trim: true
	},
	autoInsuranceEmployer: {
		type: String,
		default: '',
		trim: true
	},
	autoInsurancePolicyNumber: {
		type: String,
		default: '',
		trim: true
	},
	autoInsurancePhoneNumber: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Member', MemberSchema);