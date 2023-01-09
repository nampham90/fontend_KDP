"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_layout_blank_blank_module_ts"],{

/***/ 35736:
/*!****************************************************************!*\
  !*** ./src/app/core/services/common/guard/lock-leave.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockLeaveGuard": () => (/* binding */ LockLeaveGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _store_common_store_lock_screen_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/common-store/lock-screen-store.service */ 94223);




/*守卫锁屏页面*/
class LockLeaveGuard {
    constructor(router, lockScreenStoreService) {
        this.router = router;
        this.lockScreenStoreService = lockScreenStoreService;
        this.lockScreenStoreService.getLockScreenStore().subscribe(res => {
            this.routeStatus = res;
        });
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return !this.routeStatus.locked;
    }
}
LockLeaveGuard.ɵfac = function LockLeaveGuard_Factory(t) { return new (t || LockLeaveGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_store_common_store_lock_screen_store_service__WEBPACK_IMPORTED_MODULE_0__.LockScreenStoreService)); };
LockLeaveGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LockLeaveGuard, factory: LockLeaveGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99623:
/*!******************************************************!*\
  !*** ./src/app/layout/blank/blank-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankRoutingModule": () => (/* binding */ BlankRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_common_guard_lock_leave_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/guard/lock-leave.guard */ 35736);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank.component */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent,
        data: { key: 'blank', shouldDetach: 'no' },
        children: [
            {
                path: 'empty-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_empty_empty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/empty/empty.module */ 84375)).then(m => m.EmptyModule)
            },
            {
                canDeactivate: [_core_services_common_guard_lock_leave_guard__WEBPACK_IMPORTED_MODULE_0__.LockLeaveGuard],
                path: 'empty-for-lock',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_components_empty-for-lock_empty-for-lock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/components/empty-for-lock/empty-for-lock.module */ 48018)).then(m => m.EmptyForLockModule)
            },
            {
                path: 'other-login',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other-login_other-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/other-login/other-login.module */ 99794)).then(m => m.OtherLoginModule)
            }
        ]
    }
];
class BlankRoutingModule {
}
BlankRoutingModule.ɵfac = function BlankRoutingModule_Factory(t) { return new (t || BlankRoutingModule)(); };
BlankRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BlankRoutingModule });
BlankRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BlankRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 18226:
/*!*************************************************!*\
  !*** ./src/app/layout/blank/blank.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class BlankComponent {
    constructor() { }
    ngOnInit() { }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 1, vars: 0, template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3440:
/*!**********************************************!*\
  !*** ./src/app/layout/blank/blank.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankModule": () => (/* binding */ BlankModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-routing.module */ 99623);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank.component */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class BlankModule {
}
BlankModule.ɵfac = function BlankModule_Factory(t) { return new (t || BlankModule)(); };
BlankModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BlankModule });
BlankModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BlankModule, { declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_layout_blank_blank_module_ts.js.map