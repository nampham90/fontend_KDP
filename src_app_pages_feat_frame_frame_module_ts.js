"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_frame_frame_module_ts"],{

/***/ 26698:
/*!**********************************************************!*\
  !*** ./src/app/pages/feat/frame/frame-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameRoutingModule": () => (/* binding */ FrameRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'zorro-doc', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_frame_zorro-doc_zorro-doc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zorro-doc/zorro-doc.module */ 90161)).then(m => m.ZorroDocModule) },
    { path: '', redirectTo: 'zorro-doc', pathMatch: 'full' }
];
class FrameRoutingModule {
}
FrameRoutingModule.ɵfac = function FrameRoutingModule_Factory(t) { return new (t || FrameRoutingModule)(); };
FrameRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FrameRoutingModule });
FrameRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrameRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 6698:
/*!**************************************************!*\
  !*** ./src/app/pages/feat/frame/frame.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameModule": () => (/* binding */ FrameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _frame_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame-routing.module */ 26698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class FrameModule {
}
FrameModule.ɵfac = function FrameModule_Factory(t) { return new (t || FrameModule)(); };
FrameModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FrameModule });
FrameModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _frame_routing_module__WEBPACK_IMPORTED_MODULE_0__.FrameRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FrameModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _frame_routing_module__WEBPACK_IMPORTED_MODULE_0__.FrameRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_frame_frame_module_ts.js.map