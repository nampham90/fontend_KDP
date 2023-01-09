"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_shared_components_empty-for-lock_empty-for-lock_module_ts"],{

/***/ 57433:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/empty-for-lock/empty-for-lock-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyForLockRoutingModule": () => (/* binding */ EmptyForLockRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_empty_for_lock_empty_for_lock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/empty-for-lock/empty-for-lock.component */ 51959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _shared_components_empty_for_lock_empty_for_lock_component__WEBPACK_IMPORTED_MODULE_0__.EmptyForLockComponent, data: { title: '空页面', key: 'empty-for-lock', shouldDetach: 'no' } },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
class EmptyForLockRoutingModule {
}
EmptyForLockRoutingModule.ɵfac = function EmptyForLockRoutingModule_Factory(t) { return new (t || EmptyForLockRoutingModule)(); };
EmptyForLockRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EmptyForLockRoutingModule });
EmptyForLockRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmptyForLockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 51959:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/empty-for-lock/empty-for-lock.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyForLockComponent": () => (/* binding */ EmptyForLockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/*此组件为了解决锁屏时f12仍然能查看到被隐藏的页面，而创建的空白页面*/
class EmptyForLockComponent {
}
EmptyForLockComponent.ɵfac = function EmptyForLockComponent_Factory(t) { return new (t || EmptyForLockComponent)(); };
EmptyForLockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyForLockComponent, selectors: [["app-empty-for-lock"]], decls: 0, vars: 0, template: function EmptyForLockComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 48018:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/empty-for-lock/empty-for-lock.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyForLockModule": () => (/* binding */ EmptyForLockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _empty_for_lock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-for-lock-routing.module */ 57433);
/* harmony import */ var _empty_for_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-for-lock.component */ 51959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class EmptyForLockModule {
}
EmptyForLockModule.ɵfac = function EmptyForLockModule_Factory(t) { return new (t || EmptyForLockModule)(); };
EmptyForLockModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmptyForLockModule });
EmptyForLockModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _empty_for_lock_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyForLockRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmptyForLockModule, { declarations: [_empty_for_lock_component__WEBPACK_IMPORTED_MODULE_1__.EmptyForLockComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _empty_for_lock_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyForLockRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_empty-for-lock_empty-for-lock_module_ts.js.map