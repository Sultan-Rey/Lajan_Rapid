(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route, router, storage, afAuth, loadingcontroller, afstore, alertcontroller, formBuilder, fireauth) {
          _classCallCheck(this, LoginPage);

          this.route = route;
          this.router = router;
          this.storage = storage;
          this.afAuth = afAuth;
          this.loadingcontroller = loadingcontroller;
          this.afstore = afstore;
          this.alertcontroller = alertcontroller;
          this.formBuilder = formBuilder;
          this.fireauth = fireauth;
          this.dataUser = {
            mail: null,
            password: null
          };
          this.fakeToken = {
            pseudo: 'admin',
            pass: 'richy'
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.afAuth.signOut();
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, usr, pwd;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.dataUser.mail != null && this.dataUser.mail != '' && this.dataUser.password != null && this.dataUser.password != '')) {
                        _context.next = 12;
                        break;
                      }

                      if (!(this.dataUser.mail == this.fakeToken.pseudo && this.dataUser.password == this.fakeToken.pass)) {
                        _context.next = 5;
                        break;
                      }

                      this.router.navigateByUrl("/home");
                      _context.next = 10;
                      break;

                    case 5:
                      _context.next = 7;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Login error',
                        subHeader: 'Invalid credentials',
                        message: 'Your username or password is invalid, 5 attempts left...',
                        buttons: ['Ok']
                      });

                    case 7:
                      alert = _context.sent;
                      _context.next = 10;
                      return alert.present();

                    case 10:
                      _context.next = 18;
                      break;

                    case 12:
                      usr = document.getElementById('un');
                      pwd = document.getElementById('pd');
                      usr.blur;
                      usr.style.color = 'red';
                      pwd.blur;
                      pwd.style.color = 'red';

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"dark\">\n    <ion-title>LAJAN RAPID</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <div class=\"container ion-padding\">\n    <ion-slide>\n      <ion-img  class=\"img\" src=\"../../assets/icon/logo_lajanrapid.png\"></ion-img>\n    </ion-slide>\n      <div class=\"col-lg-4 col-md-12 col-12\">\n        <div class=\"border rounded p-3 bg-color-yellow\">\n          <ion-slide>\n            <ion-card-title>Login</ion-card-title>\n          </ion-slide>\n         <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(loginForm)\">\n          <ion-item lines=\"none\" class=\"bg-color-yellow\">\n            <ion-label class=\"p-2\" position=\"floating\"><ion-icon name=\"person\"></ion-icon>Email or username ? </ion-label>\n         <div class=\"form-control form-control-sm\">\n          <ion-buttons class=\"form-group\">\n            <ion-input type=\"text\" name=\"username\" id=\"un\" [(ngModel)]=\"dataUser.mail\" required></ion-input>\n          </ion-buttons>\n         </div>\n          </ion-item>\n          \n          \n          <ion-item lines=\"none\" class=\"bg-color-yellow\">\n              <ion-label class=\"p-2\" position=\"floating\"><ion-icon name=\"lock-closed\"></ion-icon>Password ? </ion-label>\n            <div class=\"form-control form-control-sm\">\n              <ion-buttons class=\"form-group\">\n                <ion-input type=\"password\" name=\"password\" id=\"pd\"   [(ngModel)]=\"dataUser.password\"></ion-input>\n              </ion-buttons>\n            </div>\n          </ion-item>\n      \n          <ion-item lines=\"none\" class=\"pt-4 bg-color-yellow\">\n          \n            <button type=\"submit\" class=\"btn btn-lg btn-dark form-group\" >Connexion</button>\n          \n            <ion-button slot=\"end\">\n              log with <ion-icon name=\"logo-google\"></ion-icon>\n            </ion-button>\n          </ion-item>\n         </form>\n           \n\n          <ion-item class=\"bg-color-yellow\">\n            <ion-label>Forgot my password ?</ion-label>\n          </ion-item>\n      \n        \n    \n      <div id=\"signup\">\n        <ion-label button color=\"primary\">I don't have account, create one free</ion-label>\n    </div>\n    \n      </div>\n      <ion-slide>\n           <ion-item-group>\n            <ion-label class=\"p-3\">Multiple payments method accepted</ion-label>\n         <ion-buttons>\n          <ion-thumbnail>\n            <ion-img src=\"../../assets/icon/paypal.png\"></ion-img>\n          </ion-thumbnail>\n          <ion-thumbnail>\n            <ion-img src=\"../../assets/icon/Google-Pay-Logo.png\"></ion-img>\n          </ion-thumbnail>\n          <ion-thumbnail>\n            <ion-img src=\"../../assets/icon/moncash.png\"></ion-img>\n          </ion-thumbnail>\n         </ion-buttons>\n           \n           \n        </ion-item-group>\n      </ion-slide>\n      \n     </div>\n    </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 13px;\n  color: #c8c8c8;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --background: rgb(204, 255, 0);\n}\n\nion-thumbnail {\n  margin: auto;\n}\n\n.img {\n  width: 100px;\n  height: 100px;\n}\n\n.bg-color-yellow {\n  --background: rgb(255, 238, 0);\n  background: #ffee00;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n#signup {\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNDLFlBQUE7QUFDSDs7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBRTs7RUFFRSxlQUFBO0FBR0o7O0FBQUU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdOOztBQURNO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIGNvbG9yOiAjYzhjOGM4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgXG4gIH1cbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA0LCAyNTUsIDApO1xuICB9XG5cbiAgaW9uLXRodW1ibmFpbHtcbiAgIG1hcmdpbjphdXRvO1xuICAgIFxuICB9XG4gIC5pbWd7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYmctY29sb3IteWVsbG93e1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjM4LCAwKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzgsIDApO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgfVxuXG4gIHNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbiAgLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICNzaWdudXB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB9XG4gICAgICAubXktY3VzdG9tLWNsYXNzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gICAgICBcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map