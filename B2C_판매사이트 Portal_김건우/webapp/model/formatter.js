sap.ui.define([
	"sap/base/strings/formatMessage"
], function (formatMessage) {
	"use strict";

	return {
		formatMessage: formatMessage,

		/**
		 * @public
		 * @param {boolean} bIsPhone the value to be checked
		 * @returns {string} path to image
		 */
		srcImageValue : function (bIsPhone) {
			var sImageSrc = "";
			if (bIsPhone === false) {
				sImageSrc = "./image/logo.png";
			} else {
				sImageSrc = "./image/logo.png";
			}
			return sImageSrc;
		}
	};
});



// sap.ui.define([
// 	"sap/ui/base/ManagedObject"
// ], function(
// 	ManagedObject
// ) {
// 	"use strict";

// 	return ManagedObject.extend("sync.ea.company1.model.formatter", {
// 	});
// });