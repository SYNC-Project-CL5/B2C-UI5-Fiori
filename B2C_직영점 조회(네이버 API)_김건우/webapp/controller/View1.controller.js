sap.ui.define([
    'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(jQuery, Controller, MessageToast) {
        "use strict";

        return Controller.extend("sync.ea.findstore.controller.View1", {
            onInit: function () {

            },

            onNavItemSelect: function (oEvent) {
                var oItem  = oEvent.getParameter("item");
                var key = oItem.getKey(); // 키 값을 가져옴
                
                this.onSelectedKey(key); // onSelectedKey 함수 호출
            },

            onSelectedKey: function (key) {
                var oMapController = this.getView().byId("mapView").getController();
    
                switch (key) {
                    case "factory":
                        oMapController.setMapCenter({ lat: 36.450493629253046, lng: 127.411982023056 });
                        break;
                    case "storage":
                        oMapController.setMapCenter({ lat: 36.40956213773216, lng: 127.41218944719489 });
                        break;
                    case "guro":
                        oMapController.setMapCenter({ lat: 36.98980375896131, lng: 126.86241566501465 });
                        break;
                    case "pyeongtaek":
                        oMapController.setMapCenter({ lat: 36.450493629253046, lng: 127.411982023056 });
                        break;
                    case "jongro":
                        oMapController.setMapCenter({ lat: 37.564427210907326, lng: 127.00215904092173 });
                        break;
                    case "incheon":
                            oMapController.setMapCenter({ lat: 37.44430856162661, lng: 126.76411197993752 });
                        break;
                    case "osan":
                        oMapController.setMapCenter({ lat: 37.14409922355329, lng: 127.07020778536315 });
                        break;
                    case "daegu":
                        oMapController.setMapCenter({ lat: 35.88585595420617, lng: 128.53062407045834 });
                        break;
                    case "daejeon":
                        oMapController.setMapCenter({ lat: 36.378606724393926, lng: 127.3376317301431 });
                        break;
                    case "now":
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(function (position) {
                                var currentLocation = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                };
                                oMapController.setMapCenter(currentLocation);
                            }, function (error) {
                                console.error("Error getting current location:", error);
                            });
                        } else {
                            console.error("Geolocation is not supported by this browser.");
                        }
                        break;
                    // Add other cases for different keys
                    default:
                        MessageToast.show("Unknown key: " + key);

                }
            },
    
            onCollapseExpandPress: function () {
                var oNavigationList = this.byId('navigationList');
                var bExpanded = oNavigationList.getExpanded();
    
                oNavigationList.setExpanded(!bExpanded);
            },
    
            onHideShowSubItemPress: function () {
                var navListItem = this.byId('subItemThree');
    
                navListItem.setVisible(!navListItem.getVisible());
                
            }
        });
    
    });
    