/*global QUnit*/

sap.ui.define([
	"syncea/reserve2/controller/ObjectPageHeaderContentPriorities.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ObjectPageHeaderContentPriorities Controller");

	QUnit.test("I should test the ObjectPageHeaderContentPriorities controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
