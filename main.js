(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hezzl-app';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: "AIzaSyAjvqF-p402iib6eJiu_mpyU1qln6Txsiw",
            authDomain: "epicenter-test.firebaseapp.com",
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_rightmenu_rightmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/rightmenu/rightmenu.component */ "./src/app/home/rightmenu/rightmenu.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'page', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _home_rightmenu_rightmenu_component__WEBPACK_IMPORTED_MODULE_6__["RightmenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (resp) { _this.router.navigate(['home']); })
            .catch(function (error) { console.log(error); });
    };
    AuthService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n    background-image: url(\"newyork.jpeg\");\r\n    background-size: cover;\r\n    position: absolute;\r\n    background-position: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n.login-container {\r\n    background-color: #f7f7f7;\r\n    border-radius: 10px;\r\n    max-width: 360px;\r\n    width: 75%;\r\n    min-height: 300px;\r\n    margin: auto;\r\n    padding: 25px;\r\n    display: block;\r\n}\r\n.login-label {\r\n    font-size: 22pt;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n}\r\n.login-label label {\r\n    float: right;\r\n}\r\n.input-email-field, .input-pass-field {\r\n    padding: 11px 0;\r\n    width: 100%;\r\n    margin-bottom: 2em;\r\n    border: 1px solid rgba(202, 202, 202, 0.548);\r\n    border-radius: 5px;\r\n\r\n}\r\n.input-email-field:hover, .input-pass-field:hover {\r\n    border: 1px solid #85c0ff;\r\n}\r\n.input-email-field:active, .input-pass-field:active {\r\n    border: 1px solid #007bff;\r\n}\r\n.form-container {\r\n    margin-top: 4em;\r\n}\r\n.rem-check {\r\n    margin-right: 10px;\r\n}\r\n.login-button {\r\n    float: right;\r\n    margin-top: 2em;\r\n    width: 80px;\r\n    height: 35px;\r\n    border: none;\r\n    box-shadow: 0 0 3px rgb(61, 61, 61);\r\n    background-color: #007bff;\r\n    border-radius: 12px;\r\n}\r\n.login-button:hover {\r\n    background-color: #3a99ff;\r\n}\r\n.login-button:active {\r\n    background-color: #3a99ff;\r\n    box-shadow: none;\r\n}\r\n.forgot-password {\r\n    float: right;\r\n    color: #007bff;\r\n}\r\n.login-options {\r\n    margin-top: 1em;\r\n}\r\n@media (max-width: 365px) {\r\n    .login-options a{\r\n        float: left;\r\n        margin-top: 0.5em;\r\n    }\r\n    .login-button {\r\n        float: left;\r\n    }\r\n   }"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<div class=\"login-container\">  \n    <div class=\"login-label\">\n      <label>Login</label>\n    </div>\n    <form (ngSubmit)=\"onSignin(f)\" class=\"form-container\" #f=\"ngForm\">\n    <!-- <label class=\"input-email-label\">E-mail</label> -->\n    <input class=\"input-email-field\" type=\"email\" id=\"email\" name=\"email\" ngModel placeholder=\" Username\" ng-model=\"email\">\n    <!-- <label class=\"input-pass-label\">Password</label> -->\n    <input class=\"input-pass-field\" type=\"password\" id=\"password\" name=\"password\" ngModel placeholder=\" Password\" [value]=\"password\">\n    <div class=\"login-options\">\n        <input class=\"rem-check\" type=\"checkbox\" id=\"remember\" name=\"remember\" ngModel>\n        <label for=\"remember\">Remember me</label>\n        <a href=\"#\" class=\"forgot-password\">Forgot the password?</a>\n    </div>\n    \n    <button class=\"login-button\" type=\"submit\">Signin</button>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, authServise) {
        this.router = router;
        this.authServise = authServise;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        console.log(email, password, form.value.remember);
        this.authServise.signinUser(email, password);
        if (form.value.remember == true) {
            ///
        }
    };
    SigninComponent.prototype.goHome = function () {
        this.router.navigate(["home"]);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    \r\n}\r\n.driver-col {\r\n    background-color: #f7f7f7;\r\n    width: 100px;\r\n    height: 100vh;\r\n    border: 1px solid #a7a7a775;\r\n\r\n    border-bottom: none;\r\n    border-top: none;\r\n}\r\n.content {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n.home-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #f7f7f7;\r\n    width: 100%;\r\n    height: 122px;\r\n    border-bottom: 1px solid #a7a7a775;\r\n    z-index: 0;\r\n}\r\n.container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    background-color: rgb(227, 235, 243)\r\n}\r\n.driver-col__logo, .home-header__icon {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n    \r\n}\r\n.logo50 {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-size: cover;\r\n}\r\n.logo {\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: cover;\r\n}\r\n.logo_main {\r\n    background-image: url(\"data:image/png;base64,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\");\r\n}\r\n.logo_menu {\r\n    background-image: url(\"data:image/png;base64,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\");\r\n}\r\n.driver-col__control-panel {\r\n    width: 100px;\r\n    margin-top: 70px;\r\n}\r\n.driver-col__control-panel_logo {\r\n    width:100px;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n.driver-col__control-panel_logo:active {\r\n    background-color: rgb(227, 235, 243);\r\n    border-right: 1px solid rgb(227, 235, 243);\r\n}\r\n.driver-col__control-panel_logo-active {\r\n    background-color: rgb(227, 235, 243);\r\n    border-right: 1px solid rgb(227, 235, 243);\r\n}\r\n.logo1 {\r\n    background-image: url(\"data:image/png;base64,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\");\r\n}\r\n.logo2 {\r\n    background-image: url('icon2.png');\r\n}\r\n.logo3 {\r\n    background-image: url(\"data:image/png;base64,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\");\r\n}\r\n.logo_header-right {\r\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAB9VBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARuNQLAAAApnRSTlMAASJMbY2rwNPm7vSqSxtWkMbyxVUaB0fZ2I8FofBKJIDi54g8s/67TU/OzE7LykYmKwqL+glD3NtBCP2ZLNEqWPNXAgaorgy4vg4TxxYf2hUXDQ+5qa8DWewdyJKHPtR0KPW2QsnBUD3NNSOFBEiinkSRjNUZU47DSW5piuT2/C3l49C/vInxURjvnYS0svhy6xyGp70UEgu3regg0m8eL3fhUsRqUJII1wAAC71JREFUeNrtnYmf1XUZhb+DojAuIQqoI0tOXjVcEtxNTAEVQ8jKFkkpQqMUFLHEXLBsUVvdWm21+jubmUAFZrkz597f25nzPH/AnOd83vOBmbm/e6e1BTCy5Iwzl5519rLlo+f8B4o5Z3T5srPPXXrmeUtGFnLLeXP+J1ZcsLK6NEzHygtXXLRqqMdfvWbFxdUtYXYuuXTN6uFcf+y8y9ZWt4N+WHvZurGBn3/9hk9W94L+uXx8/UDP/6kretWVYH70rrxqUN8Ujlz96eo2sBA2XjOQCay5troILJTrrpfP/5krqkuAwpU3SOfftPnG6gagceP4TQu//823VOuDzq23LfD8t4/fUe0Og6D32U0Luf+dy6rFYVBsuWv+9/8cr/MsIu6+Z57n37q0WhkGy+at87n/tu3VvjBo7r29//vfd3+1LQyeHQ/0e//P76x2hWGw8cH+7r9rd7UpDIfdu/q5/xcuqfaEYXHLQ3Pf/4sbqy1heGz50pzf/3+52hGGyY45nhfb+nC1IQyXr3x11gHw+59Fz/hs9/9atR0Mnd7VM9//Tn7/H8DXH5np/qu3VLtBF+yZ6aHxb1SbQTc8Ov39b+5Vi0E39B6b7v6bbq32gq7YO91/ApurraA7vnn6/b/F879B7Dv9ZaFvVztBl5x76v3XVBtBt+w/ZQCPVwtBtzxx8v2/U+0DXXPgpAF8t1oHuub+k34HVG0D3fM9fgTI5t6P7r++Vy0D3dN78sMBjFe7QAVPnbj/weXVKlDB5SdeETij2gRqOHR8AE9Xi0ANzxx/EIjPfwxldNvUAA5Ve0AVh6cG8Gy1BlRxZGoAfP5zLM9N3v/8aguo4/sTA7inWgLq+AHfAmTz/MQALqiWgDqOtjbC338JZu1IW1/tAJXs4oWAbF5oP6xWgEpe5CMhsnmpnVWtAJU83J6oVoBKdrS91QpQyZbG42DRvNx4GiSa0fZKtQJUsq8dq1aASo419Ss0KEW+HwPwhgGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDj2A3h1yCx2P/sBqPn4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ifnWBZUNmsfvZDwA0GEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwrEfwKtDZrH72Q9AzcdPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPz3QvgJ+a7F8BPzHcvgJ+Y714APzHfvQB+Yr57AfzEfPcC+In57gXwE/PdC+An5rsXwE/Mdy+An5jvXgA/Md+9AH5ivnsB/MR89wL4ifnuBfAT890L4CfmuxfAT8x3L4CfmO9eAD8x370AfmK+ewH8xHz3AviJ+e4F8BPzqwssGzKL3c9+AKDBAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIhwGEwwDCYQDhMIBwGEA4DCAcBhAOAwiHAYTDAMJhAOEwgHAYQDgMIBwGEA4DCIcBhMMAwmEA4TCAcBhAOAwgHAYQDgMIR77fMfUrgDPH2ivVClDJvra2WgEqGW0/qlaASn7cllUrQCWvtZ9UK0AlP21nVStAJQ+3pdUKUMnP2pnVClDJi+2MagWo5FBbUq0AlTzSRn5e7QB1rB1p7cJqCajjaGttRbUE1HFkYgAXVUtAHa9PDGBVtQTU8cbkIwUXV1tAFXunninhm4BYNk8NYE21BlRx89QAVvNMSChvbvvfc4WXVYtADb84/mDpumoRqOH64wM4yGNhkVw+duLZ8kerVaCCX3745oL1vWoX6J7eko/eXvKrahnonl9/7P1Ft1XLQPcc+Pg7zDZW20DX7DnpLYbXVOtA16w7+U2me6p9oFuuGzl5ANdXC0G37D/1feb8IBDF9tM+aGD9b6qdoDtWnn/6R02MV0tBd/x2ms8auenWaivoir1j0wyg3dar9oJuuONAm5ZLq8WgG56a4QOnVr9WbQZdsHNshgG0G+6udoPh89bbbUZe71XbwbDpXdNmYXO1Hgybd2a7fxvhAdFFzrtbZx1AG7u/2hCGyXur2xxsuqDaEYbHtffNdf/WfndJtSUMi1semvv+re3aXe0Jw2H3rn7u39rvd1abwjC49sH+7t/aH/5Y7QqD570H+r1/a9verbaFQfOn2/u/f2tbx3vVwjBIeu9snc/9Jzj852pnGBxvrZvn+Sd4+2i1NQyKx9+f//1bO7jhjmpxGAS9Z8cWcv8JHttb7Q46fzmwwPNP/iPw15XV+qCxb8O2hd9/glVPVzcAhSv+Jp1/kv1PVJeAhbJzv3z+SQ7wErEljy/gZ78Z+PvT/IFRM3pXXjWw80/y9j/+WV0J+mf5+JMDPf8kBw8982Z1L+iH0WfWHBz4+afYdvjIc9XtYHb2Hjms/dw3F2988Py/+GzZ/0vWHn3+g74e+dF5/4V/v7R9x5aXR/k9UTkrR1/esuPdl1481OfjPqfwX0TmuaV3jkrVAAAAAElFTkSuQmCC\");\r\n}\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n.clickable:hover {\r\n    opacity: 0.8;\r\n}\r\n.footer-container {\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.home-footer {\r\n    height: 95%;\r\n    width: 95%;\r\n}\r\n.footer-hr {\r\n    border: none;\r\n    height: 1px;\r\n    background-color: #a7a7a775;\r\n}\r\n.footer-info {\r\n    height: 95px;\r\n    color: #a7a7a7;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center\r\n}\r\n.link {\r\n    margin-left: 10px\r\n}\r\n.right-menu_closed {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 100vh;\r\n    background-color: #f7f7f7;\r\n    \r\n    transition: 0.5s\r\n}\r\n.right-menu_opened {\r\n    width: 400px;\r\n    display: block;\r\n    \r\n    border-left: 1px solid #a7a7a775;\r\n}\r\n.main-content {\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"driver-col\">\n    <div class=\"driver-col__logo\">\n      <span class=\"logo50 logo_main clickable\"></span>\n    </div>\n    <div class=\"driver-col__control-panel\">\n      <div class=\"driver-col__control-panel_logo\" [ngClass]=\"{'driver-col__control-panel_logo-active': (selectedTab == 1)}\" (click)=\"selectTab(1)\"><span class=\"logo logo1 clickable\"></span></div>\n      <div class=\"driver-col__control-panel_logo\" [ngClass]=\"{'driver-col__control-panel_logo-active': (selectedTab == 2)}\" (click)=\"selectTab(2)\"><span class=\"logo logo2 clickable\"></span></div>\n      <div class=\"driver-col__control-panel_logo\" [ngClass]=\"{'driver-col__control-panel_logo-active': (selectedTab == 3)}\" (click)=\"selectTab(3)\"><span class=\"logo logo3 clickable\"></span></div>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"home-header\">\n      <div class=\"home-header__icon\">\n        <span class=\"logo logo_header-right clickable\"></span>\n      </div>\n      <div class=\"home-header__icon\">\n      <span class=\"logo logo_menu clickable\"  (click)=\"moveMenu()\"></span>\n    </div>\n    </div>\n    <div class=\"main-content\">\n\n      <div [ngSwitch]=\"selectedTab\">\n        <div *ngSwitchCase=\"1\">\n          <h1>Home Tab</h1>\n        </div>\n        <div *ngSwitchCase=\"2\">\n          <h1>Message Tab</h1>\n        </div>\n        <div *ngSwitchCase=\"3\">\n          <h1>Graph Tab</h1>\n        </div>\n        <ng-template ngSwitchDefault>\n          <h1>Home Tab 1</h1>\n        </ng-template>\n      </div>\n\n    </div>\n    <div class=\"footer-container\">\n      <div class=\"home-footer\">\n        <hr class=\"footer-hr\">\n        <div class=\"footer-info\">\n          <span class=\"copyright\">Copyright @ 2017.</span>\n          <span class=\"links\">\n            <span class=\"link\">Link1</span>\n            <span class=\"link\">Link2</span>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-rightmenu [class.right-menu_opened]=\"opened\" class=\"right-menu_closed\"></app-rightmenu>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.opened = false;
        this.loaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.selectedTab = 1;
    };
    HomeComponent.prototype.moveMenu = function () {
        this.opened = !this.opened;
        console.log(this.opened);
    };
    HomeComponent.prototype.selectTab = function (index) {
        this.selectedTab = index;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/rightmenu/rightmenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/rightmenu/rightmenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.right-menu__header {\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100px;\r\n    \r\n    display: flex;\r\n    transition: 0.5s\r\n}\r\n.right-menu__header-icon {\r\n    float: right;\r\n    width: 100px;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-left: 1px solid #a7a7a775;\r\n    border-bottom: 1px solid #a7a7a775;\r\n    transition: 0.5s;\r\n}\r\n.right-menu__tab {\r\n    height: 100px;\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    border-left: 1px solid #a7a7a775;\r\n    border-bottom: 1px solid #a7a7a775;\r\n    color: #7e7e7e;\r\n    line-height: 100px;\r\n    font-weight: bold;\r\n}\r\n.right-menu__tab:active {\r\n    border-bottom: none;\r\n}\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n.clickable:hover {\r\n    opacity: 0.8;\r\n}\r\n.logo {\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: cover;\r\n}\r\n.logo_menu {\r\n    background-image: url(\"data:image/png;base64,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\");\r\n}"

/***/ }),

/***/ "./src/app/home/rightmenu/rightmenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/rightmenu/rightmenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"right-menu__header\">\n      <div *ngFor=\"let tab of tabs\" [style.border-bottom]=\"(selected==tab.index)?'none':'1px solid #a7a7a775'\" class=\"right-menu__tab  clickable\" (click)=selectTab(tab.index)>{{tab.label}}</div> \n      <div class=\"right-menu__header-icon\">\n            <span class=\"logo logo_menu clickable\"  (click)=\"moveMenuCall()\"></span>\n          </div>\n    </div>  \n"

/***/ }),

/***/ "./src/app/home/rightmenu/rightmenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/rightmenu/rightmenu.component.ts ***!
  \*******************************************************/
/*! exports provided: RightmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightmenuComponent", function() { return RightmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightmenuComponent = /** @class */ (function () {
    function RightmenuComponent(home) {
        this.home = home;
        this.tabs = [
            {
                label: 'Tab1',
                index: '1'
            },
            {
                label: 'Tab2',
                index: '2'
            },
            {
                label: 'Tab3',
                index: '3'
            }
        ];
        this.selected = 1;
    }
    RightmenuComponent.prototype.ngOnInit = function () {
    };
    RightmenuComponent.prototype.moveMenuCall = function () {
        this.home.moveMenu();
    };
    RightmenuComponent.prototype.selectTab = function (i) {
        this.selected = i;
    };
    RightmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rightmenu',
            template: __webpack_require__(/*! ./rightmenu.component.html */ "./src/app/home/rightmenu/rightmenu.component.html"),
            styles: [__webpack_require__(/*! ./rightmenu.component.css */ "./src/app/home/rightmenu/rightmenu.component.css")]
        }),
        __metadata("design:paramtypes", [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]])
    ], RightmenuComponent);
    return RightmenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fomin_a\Documents\hezzl-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map