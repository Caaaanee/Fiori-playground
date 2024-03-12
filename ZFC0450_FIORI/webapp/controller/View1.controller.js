sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0450.controller.View1", {
            onInit: function () {
                let oView = this.getView();
                let oData = {
                    exPanded : false, 
                    classList : [
                        {class : "400001", cName : "SYNC 1", 
                        stdList : [
                            { stdNo : "24040001", sName : "한강",
                                genKey : "1", genText : "Male"},
                            { stdNo : "24040002", sName : "홍길동",
                                genKey : "2", genText : "FeMale"}
                            
                        ]},
                        {class : "400004", cName : "SYNC 4", 
                        stdList : [
                            { stdNo : "24040041", sName : "강길동",
                                genKey : "1", genText : "Male"},
                            { stdNo : "24040042", sName : "송길동",
                                genKey : "2", genText : "FeMale"}
                        ]}
                    ]
                };
                let oModel = new JSONModel(oData);
                oView.setModel(oModel);

            },
            onSearch:function(){
                let oView = this.getView();
                let listStd = oView.byId("comboClass").getSelectedItem().getBindingContext().getPath();
                let olistStd = oView.byId("listStd");
                olistStd.bindElement(listStd);
            },
            onPress:function(oEvent){
                // 선택한 학생 정보 가져오기
                let oView = this.getView();
                let sPath = oEvent.getParameter("listItem").getBindingContextPath();

                // 패널 확장 정보 가져오기
                let oModel = oView.getModel();
                let oPenData = oModel.getData();

                // 패널 확장
                oPenData.exPanded = true;
                oModel.setData(oPenData);
                oView.setModel(oModel);

                // 모델 재설정
                let ostdPanel = oView.byId("infoStd");
                ostdPanel.bindElement(sPath);
            }

        })
    });

