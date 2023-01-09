"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_personal_personal_module_ts"],{

/***/ 69353:
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-demo/personal/personal-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalRoutingModule": () => (/* binding */ PersonalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'personal-center', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_personal_personal-center_personal-center_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personal-center/personal-center.module */ 11598)).then(m => m.PersonalCenterModule) },
    { path: 'personal-setting', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page-demo_personal_personal-setting_personal-setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./personal-setting/personal-setting.module */ 23770)).then(m => m.PersonalSettingModule) },
    { path: '', redirectTo: 'personal-center', pathMatch: 'full' }
];
class PersonalRoutingModule {
}
PersonalRoutingModule.ɵfac = function PersonalRoutingModule_Factory(t) { return new (t || PersonalRoutingModule)(); };
PersonalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalRoutingModule });
PersonalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2767:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/personal/personal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalModule": () => (/* binding */ PersonalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-routing.module */ 69353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PersonalModule {
}
PersonalModule.ɵfac = function PersonalModule_Factory(t) { return new (t || PersonalModule)(); };
PersonalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PersonalModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_personal_personal_module_ts.js.map