(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  mode=ios>\n  <ion-toolbar  color=\"dark\">\n    <ion-title>\n      LAJAN RAPID\n     </ion-title>\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-item-divider>\n      <ion-label>Rapid, fasil epi garanti</ion-label>\n    </ion-item-divider>\n  </ion-buttons>\n </ion-header>\n\n<ion-content>\n\n  <div  class=\"ion-padding\">\n\n   \n    <div>\n\n      <div class=\"container-fluid border rounded\">\n        <ion-item lines=\"none\" >\n          <ion-label>Rapid balance :</ion-label>\n          <ion-badge slot=\"end\" color=\"medium\">{{account.amount | currency}}</ion-badge>\n        </ion-item>\n      </div>\n     <div class=\"container-fluid border mt-3\">\n        <ion-item>\n          <ion-label>Refill your account</ion-label>\n          <ion-chip slot=\"end\">Devise : {{account.devise}}</ion-chip>\n        </ion-item>\n        <ion-item-sliding>\n          <ion-slides [options]=\"{ slidesPerView: '1.5', zoom: false, grabCursor: true }\">\n            <ng-container *ngIf=\"account.devise=='USD'\">\n              <ion-slide (click)=\"refill('USD',star)\" *ngFor=\"let star of reedemUSD\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star|currency}}</ion-card-title>\n                  <ion-card-subtitle>Add {{star|currency}} to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n            <ng-container *ngIf=\"account.devise=='HTG'\">\n              <ion-slide *ngFor=\"let star of reedemHTG\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star}} gdes</ion-card-title>\n                  <ion-card-subtitle>Add {{star}} gdes to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n          \n    \n          </ion-slides>\n        </ion-item-sliding>\n      </div>\n    \n      <div class=\"container-fluid border mt-3\">\n        <ion-list>\n          <ion-item><ion-label>Reedem Historic</ion-label></ion-item>\n          <ion-row>\n            <ion-col size=\"7\"><b>Amount</b></ion-col>\n            <ion-col ><b>purchased date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let reedem of account.refillHistoric\">\n            <ion-col size=\"7\"><ion-label>{{reedem.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{reedem.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Refilling</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n        \n      </div>\n    \n      <div class=\"container-fluid border mt-3\">\n        <ion-list>\n          <ion-item><ion-label>Transactions</ion-label></ion-item>\n          <ion-row >\n            <ion-col size=\"4\"><b>Id</b></ion-col>\n            <ion-col size=\"4\"><b>Amount</b></ion-col>\n            <ion-col ><b>Transaction date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let transac of account.transaction\">\n            <ion-col size=\"4\"><ion-label> {{transac.id}} </ion-label></ion-col>\n            <ion-col size=\"4\"><ion-label>{{transac.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{transac.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Transactions</ion-label>\n                    <ion-badge slot=\"end\">{{totalTransac|currency}}</ion-badge>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <div class=\"row mt-3 p-3 align-right\">\n      <div class=\"col-lg-9 col-md-9 col-9\">\n        <ion-fab (click)=\"OpenSettingDialog()\">\n          <ion-fab-button color=\"light\">\n             <ion-icon size=\"large\" name=\"settings\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-3\">\n        <ion-fab (click)=\"OpenSenderDialog()\">\n          <ion-fab-button >\n            <ion-thumbnail >\n              <ion-img src=\"../../assets/icon/logo_lajanrapid.png\"></ion-img>\n            </ion-thumbnail>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n        \n      \n      \n    </div>\n  </div>\n  \n \n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popuptransfer_popuptransfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popuptransfer/popuptransfer.component */ "BtRH");
/* harmony import */ var _popupsetting_popupsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popupsetting/popupsetting.component */ "Isz5");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "bXRV");








let HomePage = class HomePage {
    constructor(popoverController, loadingController, pickerCtrl, payPal) {
        this.popoverController = popoverController;
        this.loadingController = loadingController;
        this.pickerCtrl = pickerCtrl;
        this.payPal = payPal;
        this.reedemUSD = ['20', '50', '100', '200', '250', '500'];
        this.reedemHTG = ['250', '500', '750', '1000', '5000', '10.000'];
        this.reedemMethod = '';
        this.totalTransac = 0;
    }
    ngOnInit() {
        this.account = {};
        this.account.amount = 1000;
        this.account.devise = 'USD';
        this.account.refillHistoric = [];
        this.account.transaction = [];
    }
    refill(devise, amount) {
        this.showMethod(amount);
    }
    showMethod(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const opts = {
                buttons: [
                    {
                        text: 'Done',
                        role: 'validate'
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ],
                columns: [
                    {
                        name: 'method',
                        options: [
                            { text: 'Wester-Union', value: 'WU' },
                            { text: 'MonCash$', value: 'MC' },
                            { text: 'Paypal', value: 'PP' },
                            { text: 'Zelle', value: 'ZLL' },
                            { text: 'CashApp', value: 'CA' },
                            { text: 'MoneyGram', value: 'MG' },
                        ]
                    }
                ]
            };
            const picker = yield this.pickerCtrl.create(opts);
            picker.present();
            picker.onDidDismiss().then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                switch (response.role) {
                    case 'validate':
                        const col = yield picker.getColumn('method');
                        this.reedemMethod = col.options[col.selectedIndex].text;
                        if (this.reedemMethod === 'MonCash$') {
                            console.log('moncash');
                        }
                        else if (this.reedemMethod === 'PayPal') {
                            this.payPal.init({
                                PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                                PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
                            }).then(() => {
                                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                                this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalConfiguration"]({
                                // Only needed if you get an "Internal Service Error" after PayPal login!
                                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                                })).then(() => {
                                    let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalPayment"](amount, 'USD', 'Refill balance', 'sale');
                                    this.payPal.renderSinglePaymentUI(payment).then(() => {
                                        // Successfully paid
                                        // Example sandbox response
                                        //
                                        // {
                                        //   "client": {
                                        //     "environment": "sandbox",
                                        //     "product_name": "PayPal iOS SDK",
                                        //     "paypal_sdk_version": "2.16.0",
                                        //     "platform": "iOS"
                                        //   },
                                        //   "response_type": "payment",
                                        //   "response": {
                                        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                                        //     "state": "approved",
                                        //     "create_time": "2016-10-03T13:33:33Z",
                                        //     "intent": "sale"
                                        //   }
                                        // }
                                    }, () => {
                                        // Error or render dialog closed without being successful
                                    });
                                }, () => {
                                    // Error in configuration
                                });
                            }, () => {
                                // Error in initialization, maybe PayPal isn't supported or something else
                            });
                        }
                        break;
                    case 'cancel':
                        break;
                }
            }));
        });
    }
    OpenSettingDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popupsetting_popupsetting_component__WEBPACK_IMPORTED_MODULE_6__["PopupsettingComponent"],
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: 'my-custom-class',
                mode: 'ios'
            });
            popover.present();
        });
    }
    OpenSenderDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popuptransfer_popuptransfer_component__WEBPACK_IMPORTED_MODULE_5__["PopuptransferComponent"],
                componentProps: { currentAmount: this.account.amount },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: 'my-custom-class',
                mode: 'ios'
            });
            popover.onWillDismiss().then((response) => {
                if (response.role == 'transfert') {
                    this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                    }).then((load) => {
                        load.present();
                        let currentTransaction = response.data;
                        this.account.amount = this.account.amount - currentTransaction.amount;
                        this.account.transaction.push(currentTransaction);
                        this.totalTransac = this.totalTransac + currentTransaction.amount;
                    });
                }
            });
            popover.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map