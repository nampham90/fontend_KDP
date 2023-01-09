"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_frame_zorro-doc_zorro-doc_module_ts"],{

/***/ 1824:
/*!************************************************************************!*\
  !*** ./src/app/pages/feat/frame/zorro-doc/zorro-doc-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZorroDocRoutingModule": () => (/* binding */ ZorroDocRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_frame_zorro_doc_zorro_doc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/frame/zorro-doc/zorro-doc.component */ 81018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_frame_zorro_doc_zorro_doc_component__WEBPACK_IMPORTED_MODULE_0__.ZorroDocComponent, data: { title: 'tài liệu zorro', key: 'zorro-doc' } }];
class ZorroDocRoutingModule {
}
ZorroDocRoutingModule.ɵfac = function ZorroDocRoutingModule_Factory(t) { return new (t || ZorroDocRoutingModule)(); };
ZorroDocRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ZorroDocRoutingModule });
ZorroDocRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ZorroDocRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81018:
/*!*******************************************************************!*\
  !*** ./src/app/pages/feat/frame/zorro-doc/zorro-doc.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZorroDocComponent": () => (/* binding */ ZorroDocComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ZorroDocComponent {
    constructor() { }
    ngOnInit() { }
}
ZorroDocComponent.ɵfac = function ZorroDocComponent_Factory(t) { return new (t || ZorroDocComponent)(); };
ZorroDocComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZorroDocComponent, selectors: [["app-zorro-doc"]], decls: 1, vars: 0, consts: [["src", "https://ng.ant.design/docs/introduce/zh", 1, "full-with", "iframe-h"]], template: function ZorroDocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: [".iframe-h[_ngcontent-%COMP%] {\n  height: calc(100vh - 48px - 46px - 70px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvcnJvLWRvYy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0YiLCJmaWxlIjoiem9ycm8tZG9jLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZS1oIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCAtIDQ2cHggLSA3MHB4KTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 90161:
/*!****************************************************************!*\
  !*** ./src/app/pages/feat/frame/zorro-doc/zorro-doc.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZorroDocModule": () => (/* binding */ ZorroDocModule)
/* harmony export */ });
/* harmony import */ var _zorro_doc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zorro-doc-routing.module */ 1824);
/* harmony import */ var _zorro_doc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zorro-doc.component */ 81018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class ZorroDocModule {
}
ZorroDocModule.ɵfac = function ZorroDocModule_Factory(t) { return new (t || ZorroDocModule)(); };
ZorroDocModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ZorroDocModule });
ZorroDocModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_zorro_doc_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZorroDocRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ZorroDocModule, { declarations: [_zorro_doc_component__WEBPACK_IMPORTED_MODULE_1__.ZorroDocComponent], imports: [_zorro_doc_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZorroDocRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_frame_zorro-doc_zorro-doc_module_ts.js.map