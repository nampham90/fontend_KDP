"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_empty_empty_module_ts"],{

/***/ 4722:
/*!*****************************************************!*\
  !*** ./src/app/pages/empty/empty-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyRoutingModule": () => (/* binding */ EmptyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.component */ 95169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _empty_component__WEBPACK_IMPORTED_MODULE_0__.EmptyComponent, data: { title: 'Trang trống', key: 'empty-page', shouldDetach: 'no' } },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
class EmptyRoutingModule {
}
EmptyRoutingModule.ɵfac = function EmptyRoutingModule_Factory(t) { return new (t || EmptyRoutingModule)(); };
EmptyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EmptyRoutingModule });
EmptyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmptyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 95169:
/*!************************************************!*\
  !*** ./src/app/pages/empty/empty.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyComponent": () => (/* binding */ EmptyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class EmptyComponent {
    constructor() { }
    ngOnInit() { }
}
EmptyComponent.ɵfac = function EmptyComponent_Factory(t) { return new (t || EmptyComponent)(); };
EmptyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyComponent, selectors: [["app-empty"]], decls: 2, vars: 0, consts: [[1, "center", "min-screen-full-height", "screen-full-width", "sp-28"]], template: function EmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u771F\u7684\u662F\u4E00\u4E2A\u7A7A\u767D\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXB0eS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 84375:
/*!*********************************************!*\
  !*** ./src/app/pages/empty/empty.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyModule": () => (/* binding */ EmptyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _empty_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-routing.module */ 4722);
/* harmony import */ var _empty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.component */ 95169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class EmptyModule {
}
EmptyModule.ɵfac = function EmptyModule_Factory(t) { return new (t || EmptyModule)(); };
EmptyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmptyModule });
EmptyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _empty_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmptyModule, { declarations: [_empty_component__WEBPACK_IMPORTED_MODULE_1__.EmptyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _empty_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_empty_empty_module_ts.js.map