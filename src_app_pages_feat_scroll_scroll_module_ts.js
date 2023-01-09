"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_scroll_scroll_module_ts"],{

/***/ 28778:
/*!************************************************************!*\
  !*** ./src/app/pages/feat/scroll/scroll-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollRoutingModule": () => (/* binding */ ScrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'keep-scroll-page', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_scroll_keep-scroll-page_keep-scroll-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./keep-scroll-page/keep-scroll-page.module */ 91629)).then(m => m.KeepScrollPageModule) },
    { path: 'play-scroll', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_scroll_play-scroll_play-scroll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./play-scroll/play-scroll.module */ 20927)).then(m => m.PlayScrollModule) },
    { path: '', redirectTo: 'keep-scroll-page', pathMatch: 'full' }
];
class ScrollRoutingModule {
}
ScrollRoutingModule.ɵfac = function ScrollRoutingModule_Factory(t) { return new (t || ScrollRoutingModule)(); };
ScrollRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollRoutingModule });
ScrollRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 94245:
/*!****************************************************!*\
  !*** ./src/app/pages/feat/scroll/scroll.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollModule": () => (/* binding */ ScrollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _scroll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-routing.module */ 28778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ScrollModule {
}
ScrollModule.ɵfac = function ScrollModule_Factory(t) { return new (t || ScrollModule)(); };
ScrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScrollModule });
ScrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _scroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScrollRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _scroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScrollRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_scroll_scroll_module_ts.js.map