"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_result_fail_fail_module_ts"],{

/***/ 60569:
/*!********************************************************************!*\
  !*** ./src/app/pages/page-demo/result/fail/fail-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailRoutingModule": () => (/* binding */ FailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fail.component */ 82741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _fail_component__WEBPACK_IMPORTED_MODULE_0__.FailComponent, data: { title: 'Trang thất bại', key: 'fail' } }];
class FailRoutingModule {
}
FailRoutingModule.ɵfac = function FailRoutingModule_Factory(t) { return new (t || FailRoutingModule)(); };
FailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FailRoutingModule });
FailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 82741:
/*!***************************************************************!*\
  !*** ./src/app/pages/page-demo/result/fail/fail.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailComponent": () => (/* binding */ FailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/typography */ 63140);








class FailComponent {
    constructor() { }
    ngOnInit() { }
}
FailComponent.ɵfac = function FailComponent_Factory(t) { return new (t || FailComponent)(); };
FailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FailComponent, selectors: [["app-fail"]], decls: 19, vars: 1, consts: [[3, "nzBordered"], ["nzTitle", "\u63D0\u4EA4\u5931\u8D25", "nzStatus", "error", "nzSubTitle", "\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002"], ["nz-result-content", ""], [1, "desc"], ["nz-title", "", 1, "m-b-20"], ["nz-paragraph", "", 1, "m-b-8"], ["nz-icon", "", "nzType", "close-circle", 1, "text-error", "m-r-8"], [1, "operate-text", "m-l-20"], ["nz-paragraph", ""], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function FailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0)(1, "nz-result", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u7ACB\u5373\u89E3\u51BB >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u7ACB\u5373\u5347\u7EA7 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u8FD4\u56DE\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
    } }, dependencies: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__.NzResultContentDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__.NzResultExtraDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_7__.NzTypographyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWlsLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 66724:
/*!************************************************************!*\
  !*** ./src/app/pages/page-demo/result/fail/fail.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailModule": () => (/* binding */ FailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _fail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fail-routing.module */ 60569);
/* harmony import */ var _fail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fail.component */ 82741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class FailModule {
}
FailModule.ɵfac = function FailModule_Factory(t) { return new (t || FailModule)(); };
FailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FailModule });
FailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _fail_routing_module__WEBPACK_IMPORTED_MODULE_1__.FailRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FailModule, { declarations: [_fail_component__WEBPACK_IMPORTED_MODULE_2__.FailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _fail_routing_module__WEBPACK_IMPORTED_MODULE_1__.FailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_result_fail_fail_module_ts.js.map