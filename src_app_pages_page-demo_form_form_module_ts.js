"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_form_form_module_ts"],{

/***/ 75698:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/form/form-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRoutingModule": () => (/* binding */ FormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'base-form', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_form_base_base_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./base/base.module */ 38966)).then(m => m.BaseModule) },
    { path: 'step-form', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_form_step_step_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./step/step.module */ 93768)).then(m => m.StepModule) },
    { path: 'advanced-form', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_form_advanced_advanced_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./advanced/advanced.module */ 5901)).then(m => m.AdvancedModule) },
    { path: '', redirectTo: 'base-form', pathMatch: 'full' }
];
class FormRoutingModule {
}
FormRoutingModule.ɵfac = function FormRoutingModule_Factory(t) { return new (t || FormRoutingModule)(); };
FormRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormRoutingModule });
FormRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 64104:
/*!*****************************************************!*\
  !*** ./src/app/pages/page-demo/form/form.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": () => (/* binding */ FormModule)
/* harmony export */ });
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 75698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormModule, { imports: [_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_form_form_module_ts.js.map