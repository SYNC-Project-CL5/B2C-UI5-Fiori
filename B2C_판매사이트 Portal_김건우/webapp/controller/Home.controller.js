sap.ui.define([
    './BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
    '../model/formatter'
], function (BaseController, JSONModel, Device, formatter) {
    "use strict";

    return BaseController.extend("sync.ea.company1.controller.Home", {
        formatter: formatter,

        onInit: function () {
            this.isFirst = true;

            var oViewModel = new JSONModel({
                isPhone: Device.system.phone
            });
            this.setModel(oViewModel, "view");

            Device.media.attachHandler(function (oDevice) {
                this.getModel("view").setProperty("/isPhone", oDevice.name === "Phone");
            }.bind(this));
        },

        onAfterRendering: function () {
            if (!this.isFirst) {
                return;
            }
        
            this.isFirst = false;
        
            var sFilePath1 = "https://player.vimeo.com/video/951172807?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"; // idHTML에 적용할 Vimeo 비디오의 임베드 코드
            var sFilePath2 = "https://player.vimeo.com/video/951191610?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"; // idHTML2에 적용할 Vimeo 비디오의 임베드 코드
            var sFilePath3 = "https://player.vimeo.com/video/951194002?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"; // idHTML2에 적용할 Vimeo 비디오의 임베드 코드
        
            var oHTML1 = this.getView().byId("idHTML");
            var oHTML2 = this.getView().byId("idHTML2");
            var oHTML3 = this.getView().byId("idHTML3");

            var onclickFunction = 'sap.ui.getCore().byId("application-synceacompany1-display-component---home").getController().onSearchTiresPress()';
        
            var sContent1 = `
                <div style="padding: 56.25% 0 0 0;position:relative;">
                    <iframe src="${sFilePath1}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="e (3)"></iframe>
                </div>
                <div class="overlay-text">
                    <p class="TOPSUBTEXT font-face">Powering Journeys,</p>
                    <p class="TOPSUBTEXT font-face">Partnering Progress</p>
                </div>
                <div class="overlay-button">                        
                    <button class="custom-button TOPSUBBUTTON" onclick='${onclickFunction}'>
                        <span class="sapMBtnContent">
                           <span class="sapMBtnText">타이어 검색</span>
                        </span>
                    </button>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>`;
        
            var sContent2 = `
                <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe src="${sFilePath2}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="LC_us_en_iON_2_1920_970_1209"></iframe>
                </div>
                <div class="overlay-button">                        
                    <button class="custom-button TOPSUBBUTTON" onclick='${onclickFunction}'>
                        <span class="sapMBtnContent">
                           <span class="sapMBtnText">타이어 검색</span>
                        </span>
                    </button>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>`;

            var sContent3 = `
            <div style="padding:56.25% 0 0 0;position:relative;">
                <iframe src="${sFilePath3}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="LC_us_en_iON_2_1920_970_1209"></iframe>
            </div>
            <div class="overlay-text">
                <p class="TOPSUBTEXT3 font-face">ISOT</p>
            </div>
            <div class="overlay-button">                        
                <button class="custom-button TOPSUBBUTTON" onclick='${onclickFunction}'>
                    <span class="sapMBtnContent">
                    <span class="sapMBtnText">타이어 검색</span>
                    </span>
                </button>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>`;
        
            oHTML1.setContent(sContent1);
            oHTML2.setContent(sContent2);
            oHTML3.setContent(sContent3);
        },

        
        

        

        // 버튼 클릭 이벤트 핸들러
        onSearchTiresPress: function () {
            // 라우터 객체 가져오기
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("AllSelect");
        }, 

        onNavigateToAllSeason: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("AllSeason");
        },

        onNavigateToWinter: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("Winter");
        },

        onNavigateToPreminum: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("Preminum");
        },

        onNavigateToGasolineTire: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("GasolineTire");
        },

        onNavigateToEletricTire: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // detailSettings 경로로 이동
            oRouter.navTo("ElectricTire");
        }
    });
});
