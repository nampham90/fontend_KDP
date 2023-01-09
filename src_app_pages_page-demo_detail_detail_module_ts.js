"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_detail_detail_module_ts"],{

/***/ 39838:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailRoutingModule": () => (/* binding */ DetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'base-detail', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_detail_base-detail_base-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./base-detail/base-detail.module */ 43645)).then(m => m.BaseDetailModule) },
    { path: 'adv-detail', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_detail_adv-detail_adv-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adv-detail/adv-detail.module */ 31260)).then(m => m.AdvDetailModule) },
    { path: '', redirectTo: 'base-detail', pathMatch: 'full' }
];
class DetailRoutingModule {
}
DetailRoutingModule.ɵfac = function DetailRoutingModule_Factory(t) { return new (t || DetailRoutingModule)(); };
DetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailRoutingModule });
DetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 39316:
/*!*********************************************************!*\
  !*** ./src/app/pages/page-demo/detail/detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailModule": () => (/* binding */ DetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 39838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class DetailModule {
}
DetailModule.ɵfac = function DetailModule_Factory(t) { return new (t || DetailModule)(); };
DetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailModule });
DetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_detail_detail_module_ts.js.map