"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_result_result_module_ts"],{

/***/ 48463:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-demo/result/result-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultRoutingModule": () => (/* binding */ ResultRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'success', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_result_success_success_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./success/success.module */ 7254)).then(m => m.SuccessModule) },
    { path: 'fail', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_result_fail_fail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fail/fail.module */ 66724)).then(m => m.FailModule) },
    { path: '', redirectTo: 'role-manage', pathMatch: 'full' }
];
class ResultRoutingModule {
}
ResultRoutingModule.ɵfac = function ResultRoutingModule_Factory(t) { return new (t || ResultRoutingModule)(); };
ResultRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResultRoutingModule });
ResultRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 22614:
/*!*********************************************************!*\
  !*** ./src/app/pages/page-demo/result/result.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultModule": () => (/* binding */ ResultModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-routing.module */ 48463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ResultModule {
}
ResultModule.ɵfac = function ResultModule_Factory(t) { return new (t || ResultModule)(); };
ResultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResultModule });
ResultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResultModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_result_result_module_ts.js.map