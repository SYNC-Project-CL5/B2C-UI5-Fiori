sap.ui.define([
	'sync/ea/company1/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sync/ea/company1/model/formatter'
], function (BaseController, MessageToast, JSONModel, formatter) {
	"use strict";
	return BaseController.extend("sync.ea.company1.controller.settings.MasterSettings ", {
		formatter: formatter,

		onInit: function () {
			var oViewModel = new JSONModel({
					currentUser: "Administrator",
					lastLogin: new Date(Date.now() - 86400000)
				});

			this.setModel(oViewModel, "view");
			
			var oData = {
				// 가솔린 사계절 일반 타이어
                TileCollection: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2023/11/13/list_tire_1.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2023/11/13/list_tire_1.png",
                    },
                ],

				// 가솔린 사계절 프리미엄 타이어
                TileCollection2: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2022/10/07/nfera-au7-tire.png",
                    },
                    {
                        "backgroundImage": "https://www.hankooktire.com/content/dam/hankooktire/kr/tire-list/pcr/K129_normal.png",
                    },
                ],

				// 가솔린 윈터 일반 타이어
				TileCollection3: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2022/10/07/winguard-ice-tire.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2022/10/07/winguard-ice-tire.png",
                    },
                ],

				// 가솔린 윈터 프리미엄 타이어
				TileCollection4: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2022/10/07/winguard-sport2-tire.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/passenger/__icsFiles/afieldfile/2022/10/07/winguard-sport2-tire.png",
                    },
                ],

				// 전기차 사계절 일반 타이어
				TileCollection5: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_2.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_2.png",
                    },
                ],

				// 전기차 사계절 프리미엄 타이어
				TileCollection6: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_1.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_1.png",
                    },
                ],				

				// 전기차 윈터 일반 타이어
				TileCollection7: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_5.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_5.png",
                    },
                ],

				// 전기차 윈터 프리미엄 타이엄
				TileCollection8: [
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_3.png",
                    },
                    {
                        "backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_3.png",
                    },
                ],

				// 가솔린 사계절 일반 타이어
				TileCollection9: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/roadian-gtx-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/roadian-gtx-tire.png",

					},
				],

				// 가솔린 사계절 프리미엄 타이어
				TileCollection10: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/npriz-rh7-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/npriz-rh7-tire.png",
					},
				],

				// 가솔린 윈터 일반 타이어
				TileCollection11: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/winguard-sport2-suv-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/suv/__icsFiles/afieldfile/2022/10/07/winguard-sport2-suv-tire.png",
					},
				],

				// 가솔린 윈터 프리미엄 타이어
				TileCollection12: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-snowinguard-wh2-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-snowinguard-wh2-tire.png",
					},
				],

				// 전기차 사계절 일반 타이어
				TileCollection13: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_6.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_6.png",
					},
				],

				// 전기차 사계절 프리미엄 타이어
				TileCollection14: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_3.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/ev/__icsFiles/afieldfile/2024/03/07/tire_3.png",
					},
				],				

				// 전기차 윈터 일반 타이어
				TileCollection15: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-sport2-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-sport2-tire.png",
					},
				],

				// 전기차 윈터 프리미엄 타이엄
				TileCollection16: [
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-sport2-suv-tire.png",
					},
					{
						"backgroundImage": "https://www.nexentire.com/kr/product/winter/__icsFiles/afieldfile/2022/10/07/winguard-sport2-suv-tire.png",
					},
				],				
				
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
		},



		onMasterPressed: function (oEvent) {
            var oContext = oEvent.getParameter("listItem").getBindingContext("side");
            var sPath = oContext.getPath() + "/selected";
            oContext.getModel().setProperty(sPath, true);
            var sSelectedMasterElement = oContext.getProperty("title");
            var sKey = oContext.getProperty("key");
            switch (sSelectedMasterElement) {
                case "전체 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
                case "가솔린 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
				case "전기차 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
				case "사계절 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
                case "윈터 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
				case "일반 등급 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
				case "프리미엄 등급 타이어": {
                    this.getRouter().navTo(sKey);
                    break;
                }
                default: {
                    MessageToast.show(sSelectedMasterElement + " was pressed");
                    break;
                }
            }
        },

		onSavePressed: function () {
			MessageToast.show("Save was pressed");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel was pressed");
		},
		onNavButtonPress: function  () {
			this.getOwnerComponent().myNavBack();
		},

		onPressTileOne: function () {
            // console.log("Tile One pressed.");
            window.location.href = "https://edu.bgis.co.kr:8443/sap/bc/ui2/flp#synceareserve2-display";
        },

        onPressTileTwo: function () {
            // console.log("Tile Two pressed.");
            window.location.href = "https://edu.bgis.co.kr:8443/sap/bc/ui2/flp#synceareserve2-display";
        }

		// onPressTileOne: function () {
		// 	var param = "30000000";
		// 	var baseUrl = "https://edu.bgis.co.kr:8443/sap/bc/ui2/flp?sap-client=100&sap-language=KO";
		// 	var url = baseUrl + "#synceareserve2-display&param=" + param;
		// 	window.location.href = url;
		// },
		
		// onPressTileTwo: function () {
		// 	var param = "30000000";
		// 	var baseUrl = "https://edu.bgis.co.kr:8443/sap/bc/ui2/flp?sap-client=100&sap-language=KO";
		// 	var url = baseUrl + "#synceareserve2-display&param=" + param;
		// 	window.location.href = url;
		// }
		

	});
});


// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function(
// 	Controller
// ) {
// 	"use strict";

// 	return Controller.extend("sync.ea.company1.controller.settings.MasterSettings", {
// 	});
// });