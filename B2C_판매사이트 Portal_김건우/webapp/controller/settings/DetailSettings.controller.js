sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sync.ea.company1.controller.DetailSettings", {
        onInit: function () {
            // 초기화 코드
        },

        onPressTileOne: function () {
            // 첫 번째 타일 클릭 시 이동할 URL
            window.open("https://edu.bgis.co.kr:8443/sap/bc/ui2/flp?sap-client=100&sap-language=KO#synceareserve2-display", "_blank");
        },

        onPressTileTwo: function () {
            // 두 번째 타일 클릭 시 이동할 URL
            window.open("https://edu.bgis.co.kr:8443/sap/bc/ui2/flp?sap-client=100&sap-language=KO#synceareserve2-display", "_blank");
        }
    });
});