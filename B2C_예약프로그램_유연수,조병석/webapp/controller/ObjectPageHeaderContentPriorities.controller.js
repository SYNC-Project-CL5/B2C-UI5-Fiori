sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("sync.ea.reserve2.controller.ObjectPageHeaderContentPriorities", {
            initOrderDataModel: function () {
                return new JSONModel({
                    Bookid: "",
                    Elcdt: "",
                    Custname: "",
                    Telno: "",
                    Visitdat: "",
                    Werks: "",
                    Pname1: "",
                    Matnr: "30000000",
                    Maktx: "",
                    // Calqty: 0,
                    Auqua: "1",
                    Netpr: "500000",
                    Toamt: "500000",
                    Waers: "KRW",
                    Meins: "PKG",
                    Status: "",
                    Loekz: ""
                });
            },

            onInit: function () {
                let oView = this.getView();
                oView.setModel(this.initOrderDataModel(), "new");

            },

            onReservePress: function () {

                let oView = this.getView();
                let oDialog = oView.byId("idStockDialog");

                if (oDialog) {
                    oDialog.open();
                } else {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync.ea.reserve2.view.Stock",
                        type: "XML",
                        controller: this                // View의 Main Controller 를 공유
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);    // View의 Model을 공유, 현재 경로 포함
                        oDialog.open();
                    });
                }
            },

            onClosePress: function () {
                let oDialog = this.getView().byId("idStockDialog");
                if (oDialog) {
                    oDialog.close();
                }

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
            },

            onStockOrderPress: function (oEvent) {

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
                this.getView().setModel(this.initOrderDataModel(), "new");

                let oButton = oEvent.getSource();
                let oListItem = oButton.getParent();
                let oContext = oListItem.getBindingContext();
                let calqty = oContext.getProperty("Calqty");
                this.werks = oContext.getProperty("Werks");

                let oDialog = this.getView().byId("idStockDialog");
                if (oDialog) {
                    oDialog.close();
                }

                let oView = this.getView();
                oDialog = oView.byId("idNewDialog"); // Replace with the id of the other dialog you want to open

                var currentModelPath = oContext.getPath();
                
                if (oDialog) {
                    oDialog.bindElement(currentModelPath);
                    oDialog.open();
                } else {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync.ea.reserve2.view.New", // Replace with the path of the other fragment
                        type: "XML",
                        controller: this                // View의 Main Controller 를 공유
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);    // View의 Model을 공유, 현재 경로 포함
                        oDialog.bindElement(currentModelPath);
                        oDialog.open();
                    });
                    // }
                }


            },

            onStockReservePress: function (oEvent) {

                let oButton = oEvent.getSource();
                let oListItem = oButton.getParent();
                let oContext = oListItem.getBindingContext();
                let calqty = oContext.getProperty("Calqty");
                this.werks = oContext.getProperty("Werks");
                // var werks = oContext.getProperty("Werks"); // Get the plant ID

                // oView = this.getView();
                // let oModel = oView.getModel("new");
                // oModel.setProperty("/Werks", plantId); // Set the plant ID in the model
                debugger;

                let oDialog = this.getView().byId("idStockDialog");
                if (oDialog) {
                    oDialog.close();
                }

                let oView = this.getView();
                oDialog = oView.byId("idReserveDialog"); // Replace with the id of the other dialog you want to open

                var currentModelPath = oContext.getPath();
                oView.bindElement(currentModelPath);

                if (oDialog) {
                    oDialog.open();
                } else {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync.ea.reserve2.view.Reserve", // Replace with the path of the other fragment
                        type: "XML",
                        controller: this                // View의 Main Controller 를 공유
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);    // View의 Model을 공유, 현재 경로 포함
                        oDialog.open();
                    });
                    // }
                }
            },

            onSelectionChange: function (oEvent) {

                let oListItem = oEvent.getParameter("listItem");
                let oContext = oListItem.getBindingContext();
                let calqty = oContext.getProperty("Calqty");
                // let carrid = oContext.getProperty("Pname1");
                // let connid = oContext.getProperty("Calqty");

                debugger;

                // MessageToast.show("선택하신 라인은 항공사: " + carrid + ", 항공편: " + connid + " 의 정보입니다.");

                let oDialog = this.getView().byId("idStockDialog");
                if (oDialog) {
                    oDialog.close();
                }

                // let oView = this.getView();               
                // if (calqty == 0) {

                //     oDialog = oView.byId("idCheckDialog");

                // // oDialog = oView.byId("idNewDialog");

                // // let currentModelPath = oContext.getPath();
                // // oView.bindElement(currentModelPath);

                //     if ( oDialog ) {
                //         oDialog.open();
                //     } else {
                //         Fragment.load({
                //             id: oView.getId(),
                //             name: "sync.ea.reserve2.view.Check",
                //             type: "XML",
                //             controller: this                // View의 Main Controller 를 공유
                //         }).then(function(oDialog){
                //             oView.addDependent(oDialog);    // View의 Model을 공유, 현재 경로 포함
                //             oDialog.open();
                //         });
                //     }
                // } else {
                let oView = this.getView();
                oDialog = oView.byId("idNewDialog"); // Replace with the id of the other dialog you want to open

                var currentModelPath = oContext.getPath();
                oView.bindElement(currentModelPath);

                if (oDialog) {
                    oDialog.open();
                } else {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync.ea.reserve2.view.New", // Replace with the path of the other fragment
                        type: "XML",
                        controller: this                // View의 Main Controller 를 공유
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);    // View의 Model을 공유, 현재 경로 포함
                        oDialog.open();
                    });
                    // }
                }

            },

            onPayConfirm: function () {
                let oView = this.getView();
                let oNewModel = oView.getModel("new");  // JSON  Model
                let oModel = oView.getModel();          // OData Model

                let newData = oNewModel.getData();

                newData.Werks = this.werks;
                newData.Elcdt = newData.Visitdat;

                // 숫자 필드를 숫자로 변환
                // newData.Netpr = parseFloat(newData.Netpr);
                // newData.Auqua = parseFloat(newData.Auqua);
                // newData.Toamt = parseFloat(newData.Toamt);



                // HTTP Method 에서 POST 방식으로 호출하는 방법
                oModel.create(
                    // 경로, 신규데이터, 결과처리
                    "/OrderSet",
                    newData,
                    {
                        success: function (oData, oResponse) {
                            // oData : 생성된 데이터 내용
                            // oResponse : 응답결과
                            // debugger;
                            sap.m.MessageToast.show("타이어 주문이 완료되었습니다.");
                            console.log("Success response:", oData, oResponse);

                        },


                        error: function (oError) {
                            // debugger;
                            sap.m.MessageBox.error("생성 중 오류가 발생되었습니다.");

                        }
                    }
                );

                this.getView().setModel(this.initOrderDataModel(), "new");
            },

            onReserveConfirm: function () {
                let oView = this.getView();
                let oNewModel = oView.getModel("new");  // JSON  Model
                let oModel = oView.getModel();          // OData Model

                let newData = oNewModel.getData();

                newData.Werks = this.werks;
                newData.Elcdt = newData.Visitdat;
                newData.Status = "X";


                // 숫자 필드를 숫자로 변환
                // newData.Netpr = parseFloat(newData.Netpr);
                // newData.Auqua = parseFloat(newData.Auqua);
                // newData.Toamt = parseFloat(newData.Toamt);



                // HTTP Method 에서 POST 방식으로 호출하는 방법
                oModel.create(
                    // 경로, 신규데이터, 결과처리
                    "/OrderSet",
                    newData,
                    {
                        success: function (oData, oResponse) {
                            // oData : 생성된 데이터 내용
                            // oResponse : 응답결과
                            // debugger;
                            sap.m.MessageToast.show("타이어 예약이 완료되었습니다.");
                            console.log("Success response:", oData, oResponse);
                        },
                        error: function (oError) {
                            // debugger;
                            sap.m.MessageBox.error("생성 중 오류가 발생되었습니다.");

                        }
                    }
                );

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
                this.getView().setModel(this.initOrderDataModel(), "new");


            },

            onPayCancel: function () {

                let oDialog = this.getView().byId("idCheckDialog");
                if (oDialog) {
                    oDialog.close();
                }

                oDialog = this.getView().byId("idNewDialog");
                if (oDialog) {
                    oDialog.close();
                }

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
                this.getView().setModel(this.initOrderDataModel(), "new");
            },

            onReserveCancel: function () {

                let oDialog = this.getView().byId("idCheckDialog");
                if (oDialog) {
                    oDialog.close();
                }

                oDialog = this.getView().byId("idReserveDialog");
                if (oDialog) {
                    oDialog.close();
                }

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
                this.getView().setModel(this.initOrderDataModel(), "new");

                sap.ui.getCore().applyChanges();
            },

            onCheckCancel: function () {
                let oDialog = this.getView().byId("idCheckDialog");
                if (oDialog) {
                    oDialog.close();
                }

                // 빈값만 있는 정보로 새로운 JSONModel을 만들어서
                // 기존의 new 모델을 교체해버림 =>> 데이터 초기화
                this.getView().setModel(this.initOrderDataModel(), "new");
            },

            onCheckConfirm: function () {
                let oView = this.getView();
                let oDialog = oView.byId("idNewDialog");

                // let oListItem = oEvent.getParameter("listItem");
                // let oContext = oListItem.getBindingContext();
                // let currentModelPath = oContext.getPath();
                //     oView.bindElement(currentModelPath);         

                if (oDialog) {

                    // oView.bindElement(currentModelPath);
                    oDialog.open();
                } else {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync.ea.reserve2.view.New", // Path to the New.fragment.xml
                        type: "XML",
                        controller: this                // Share the main controller of the view
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);    // Share the model of the view, including the current path
                        oDialog.open();
                    });
                }
            },

            stockStatusText: function (Calqty) {
                if (Calqty == 0) {
                    return "재고 없음";
                } else if (Calqty > 10) {
                    return "재고 여유";
                } else {
                    return "재고 수량: " + Calqty;
                }
            },
            stockStatusState: function (Calqty) {
                if (Calqty == 0) {
                    return "Error";
                } else if (Calqty > 10) {
                    return "Success";
                } else {
                    return "Warning";
                }
            },
            stockStatusIcon: function (Calqty) {
                if (Calqty == 0) {
                    return "sap-icon://status-error";
                } else if (Calqty > 10) {
                    return "sap-icon://status-positive";
                } else {
                    return "sap-icon://status-critical";
                }
            },

            onStockTransferPress: function () {


                sap.m.MessageBox.show("제품 예약이 완료되었습니다. 주문을 진행해주세요", {
                    title: "제품 예약"
                });

            },
            onAuquaChange: function (oEvent) {
                let sValue = oEvent.getParameter("value");
                let fValue = parseFloat(sValue) * 500000;
                let oView = this.getView();
                let oModel = oView.getModel("new");
                oModel.setProperty("/Toamt", fValue.toFixed(0));
            },

            onDialogAfterOpen: function (oEvent) {
                var oDialog = oEvent.getSource();
                var oTitleBar = oDialog.$().find(".sapMDialogTitle");
                oTitleBar.addClass("customDialogTitle");
            }


        });
    });