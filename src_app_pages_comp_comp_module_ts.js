"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_comp_module_ts"],{

/***/ 92086:
/*!***************************************************!*\
  !*** ./src/app/pages/comp/comp-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompRoutingModule": () => (/* binding */ CompRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'transition', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("src_app_pages_comp_transition_transition_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transition/transition.module */ 61197)).then(m => m.TransitionModule) },
    { path: 'basic', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_basic_basic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic/basic.module */ 24538)).then(m => m.BasicModule) },
    { path: 'lazy', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_lazy_lazy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy/lazy.module */ 65014)).then(m => m.LazyModule) },
    { path: 'luckysheet', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_comp_luckysheet_luckysheet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./luckysheet/luckysheet.module */ 32358)).then(m => m.LuckysheetModule) },
    { path: 'desc', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_desc_desc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./desc/desc.module */ 63208)).then(m => m.DescModule) },
    { path: 'strength-meter', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_strength-meter_strength-meter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./strength-meter/strength-meter.module */ 3999)).then(m => m.StrengthMeterModule) },
    { path: 'form', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 45055)).then(m => m.FormModule) },
    { path: '', redirectTo: 'transition', pathMatch: 'full' }
];
class CompRoutingModule {
}
CompRoutingModule.ɵfac = function CompRoutingModule_Factory(t) { return new (t || CompRoutingModule)(); };
CompRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompRoutingModule });
CompRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 41141:
/*!*******************************************!*\
  !*** ./src/app/pages/comp/comp.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompModule": () => (/* binding */ CompModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _comp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp-routing.module */ 92086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class CompModule {
}
CompModule.ɵfac = function CompModule_Factory(t) { return new (t || CompModule)(); };
CompModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompModule });
CompModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _comp_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _comp_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_comp_module_ts.js.map