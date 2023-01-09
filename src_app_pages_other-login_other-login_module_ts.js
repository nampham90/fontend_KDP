"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_other-login_other-login_module_ts"],{

/***/ 75692:
/*!*****************************************************************!*\
  !*** ./src/app/pages/other-login/other-login-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherLoginRoutingModule": () => (/* binding */ OtherLoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'login1', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other-login_login1_login1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login1/login1.module */ 35839)).then(m => m.Login1Module) },
    { path: '', redirectTo: 'login1', pathMatch: 'full' }
];
class OtherLoginRoutingModule {
}
OtherLoginRoutingModule.ɵfac = function OtherLoginRoutingModule_Factory(t) { return new (t || OtherLoginRoutingModule)(); };
OtherLoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtherLoginRoutingModule });
OtherLoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtherLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 99794:
/*!*********************************************************!*\
  !*** ./src/app/pages/other-login/other-login.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherLoginModule": () => (/* binding */ OtherLoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _other_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-login-routing.module */ 75692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class OtherLoginModule {
}
OtherLoginModule.ɵfac = function OtherLoginModule_Factory(t) { return new (t || OtherLoginModule)(); };
OtherLoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OtherLoginModule });
OtherLoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _other_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherLoginRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtherLoginModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _other_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherLoginRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_other-login_other-login_module_ts.js.map