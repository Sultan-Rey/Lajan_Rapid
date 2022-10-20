(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  mode=ios>\n  <ion-toolbar  color=\"dark\">\n    <ion-title>\n      LAJAN RAPID\n     </ion-title>\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-item-divider>\n      <ion-label>Rapid, fasil epi garanti</ion-label>\n    </ion-item-divider>\n  </ion-buttons>\n </ion-header>\n\n<ion-content>\n\n  <div  class=\"ion-padding\">\n\n   \n    <div>\n\n      <div class=\"container-fluid border rounded\">\n        <ion-item lines=\"none\" >\n          <ion-label>Rapid balance :</ion-label>\n          <ion-badge slot=\"end\" color=\"medium\">{{account.amount | currency}}</ion-badge>\n        </ion-item>\n      </div>\n     <div class=\"container-fluid border mt-3\">\n        <ion-item>\n          <ion-label>Refill your account</ion-label>\n          <ion-chip slot=\"end\">Devise : {{account.devise}}</ion-chip>\n        </ion-item>\n        <ion-item-sliding>\n          <ion-slides [options]=\"{ slidesPerView: '1.5', zoom: false, grabCursor: true }\">\n            <ng-container *ngIf=\"account.devise=='USD'\">\n              <ion-slide (click)=\"refill('USD',star)\" *ngFor=\"let star of reedemUSD\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star|currency}}</ion-card-title>\n                  <ion-card-subtitle>Add {{star|currency}} to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n            <ng-container *ngIf=\"account.devise=='HTG'\">\n              <ion-slide *ngFor=\"let star of reedemHTG\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star}} gdes</ion-card-title>\n                  <ion-card-subtitle>Add {{star}} gdes to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n          \n    \n          </ion-slides>\n        </ion-item-sliding>\n      </div>\n    \n      <div class=\"container-fluid border mt-3\">\n        <ion-list>\n          <ion-item><ion-label>Reedem Historic</ion-label></ion-item>\n          <ion-row>\n            <ion-col size=\"7\"><b>Amount</b></ion-col>\n            <ion-col ><b>purchased date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let reedem of account.refillHistoric\">\n            <ion-col size=\"7\"><ion-label>{{reedem.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{reedem.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Refilling</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n        \n      </div>\n    \n      <div class=\"container-fluid border mt-3\">\n        <ion-list>\n          <ion-item><ion-label>Transactions</ion-label></ion-item>\n          <ion-row >\n            <ion-col size=\"4\"><b>Id</b></ion-col>\n            <ion-col size=\"4\"><b>Amount</b></ion-col>\n            <ion-col ><b>Transaction date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let transac of account.transaction\">\n            <ion-col size=\"4\"><ion-label> {{transac.id}} </ion-label></ion-col>\n            <ion-col size=\"4\"><ion-label>{{transac.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{transac.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Transactions</ion-label>\n                    <ion-badge slot=\"end\">{{totalTransac|currency}}</ion-badge>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <div class=\"row mt-3 p-3 align-right\">\n      <div class=\"col-lg-9 col-md-9 col-9\">\n        <ion-fab (click)=\"OpenSettingDialog()\">\n          <ion-fab-button color=\"light\">\n             <ion-icon size=\"large\" name=\"settings\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-3\">\n        <ion-fab (click)=\"OpenSenderDialog()\">\n          <ion-fab-button >\n            <ion-thumbnail >\n              <ion-img src=\"../../assets/icon/logo_lajanrapid.png\"></ion-img>\n            </ion-thumbnail>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n        \n      \n      \n    </div>\n  </div>\n  \n \n</ion-content>\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _popuptransfer_popuptransfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popuptransfer/popuptransfer.component */
      "BtRH");
      /* harmony import */


      var _popupsetting_popupsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../popupsetting/popupsetting.component */
      "Isz5");
      /* harmony import */


      var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/paypal/ngx */
      "bXRV");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(popoverController, loadingController, pickerCtrl, payPal) {
          _classCallCheck(this, HomePage);

          this.popoverController = popoverController;
          this.loadingController = loadingController;
          this.pickerCtrl = pickerCtrl;
          this.payPal = payPal;
          this.reedemUSD = ['20', '50', '100', '200', '250', '500'];
          this.reedemHTG = ['250', '500', '750', '1000', '5000', '10.000'];
          this.reedemMethod = '';
          this.totalTransac = 0;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.account = {};
            this.account.amount = 1000;
            this.account.devise = 'USD';
            this.account.refillHistoric = [];
            this.account.transaction = [];
          }
        }, {
          key: "refill",
          value: function refill(devise, amount) {
            this.showMethod(amount);
          }
        }, {
          key: "showMethod",
          value: function showMethod(amount) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var opts, picker;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      opts = {
                        buttons: [{
                          text: 'Done',
                          role: 'validate'
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }],
                        columns: [{
                          name: 'method',
                          options: [{
                            text: 'Wester-Union',
                            value: 'WU'
                          }, {
                            text: 'MonCash$',
                            value: 'MC'
                          }, {
                            text: 'Paypal',
                            value: 'PP'
                          }, {
                            text: 'Zelle',
                            value: 'ZLL'
                          }, {
                            text: 'CashApp',
                            value: 'CA'
                          }, {
                            text: 'MoneyGram',
                            value: 'MG'
                          }]
                        }]
                      };
                      _context2.next = 3;
                      return this.pickerCtrl.create(opts);

                    case 3:
                      picker = _context2.sent;
                      picker.present();
                      picker.onDidDismiss().then(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var col;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.t0 = response.role;
                                  _context.next = _context.t0 === 'validate' ? 3 : _context.t0 === 'cancel' ? 9 : 10;
                                  break;

                                case 3:
                                  _context.next = 5;
                                  return picker.getColumn('method');

                                case 5:
                                  col = _context.sent;
                                  this.reedemMethod = col.options[col.selectedIndex].text;

                                  if (this.reedemMethod === 'MonCash$') {
                                    console.log('moncash');
                                  } else if (this.reedemMethod === 'PayPal') {
                                    this.payPal.init({
                                      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                                      PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
                                    }).then(function () {
                                      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                                      _this2.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalConfiguration"]({// Only needed if you get an "Internal Service Error" after PayPal login!
                                        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                                      })).then(function () {
                                        var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalPayment"](amount, 'USD', 'Refill balance', 'sale');

                                        _this2.payPal.renderSinglePaymentUI(payment).then(function () {// Successfully paid
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
                                        }, function () {// Error or render dialog closed without being successful
                                        });
                                      }, function () {// Error in configuration
                                      });
                                    }, function () {// Error in initialization, maybe PayPal isn't supported or something else
                                    });
                                  }

                                  return _context.abrupt("break", 10);

                                case 9:
                                  return _context.abrupt("break", 10);

                                case 10:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "OpenSettingDialog",
          value: function OpenSettingDialog() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _popupsetting_popupsetting_component__WEBPACK_IMPORTED_MODULE_6__["PopupsettingComponent"],
                        showBackdrop: true,
                        backdropDismiss: true,
                        cssClass: 'my-custom-class',
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context3.sent;
                      popover.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "OpenSenderDialog",
          value: function OpenSenderDialog() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _popuptransfer_popuptransfer_component__WEBPACK_IMPORTED_MODULE_5__["PopuptransferComponent"],
                        componentProps: {
                          currentAmount: this.account.amount
                        },
                        showBackdrop: true,
                        backdropDismiss: true,
                        cssClass: 'my-custom-class',
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context4.sent;
                      popover.onWillDismiss().then(function (response) {
                        if (response.role == 'transfert') {
                          _this3.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            duration: 2000
                          }).then(function (load) {
                            load.present();
                            var currentTransaction = response.data;
                            _this3.account.amount = _this3.account.amount - currentTransaction.amount;

                            _this3.account.transaction.push(currentTransaction);

                            _this3.totalTransac = _this3.totalTransac + currentTransaction.amount;
                          });
                        }
                      });
                      popover.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map