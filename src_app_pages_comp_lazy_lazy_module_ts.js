"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_lazy_lazy_module_ts"],{

/***/ 30722:
/*!********************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyRoutingModule": () => (/* binding */ LazyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'lazy-basic', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_comp_lazy_lazy-basic_lazy-basic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lazy-basic/lazy-basic.module */ 19626)).then(m => m.LazyBasicModule) },
    { path: 'lazy-scroll', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_comp_lazy_lazy-scroll_lazy-scroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lazy-scroll/lazy-scroll.module */ 23033)).then(m => m.LazyScrollModule) },
    { path: '', redirectTo: 'lazy-basic', pathMatch: 'full' }
];
class LazyRoutingModule {
}
LazyRoutingModule.ɵfac = function LazyRoutingModule_Factory(t) { return new (t || LazyRoutingModule)(); };
LazyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyRoutingModule });
LazyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 65014:
/*!************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyModule": () => (/* binding */ LazyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-routing.module */ 30722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class LazyModule {
}
LazyModule.ɵfac = function LazyModule_Factory(t) { return new (t || LazyModule)(); };
LazyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LazyModule });
LazyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_lazy_lazy_module_ts.js.map