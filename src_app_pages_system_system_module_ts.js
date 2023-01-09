"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_system_system_module_ts"],{

/***/ 49448:
/*!*******************************************************!*\
  !*** ./src/app/pages/system/system-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemRoutingModule": () => (/* binding */ SystemRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'menu', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_biz-components_icon-sel_icon-sel_module_ts"), __webpack_require__.e("src_app_pages_system_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/menu.module */ 31561)).then(m => m.MenuModule) },
    { path: 'account', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 59143)).then(m => m.AccountModule) },
    { path: 'dept', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_dept_dept_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dept/dept.module */ 65269)).then(m => m.DeptModule) },
    { path: 'role-manager', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_role-manager_role-manage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./role-manager/role-manage.module */ 79791)).then(m => m.RoleManageModule) },
    { path: 'datasc', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_datasc_datasc_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./datasc/datasc.module */ 68708)).then(m => m.DatascModule) },
    { path: 'quanlyxe', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_xe_xe_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./xe/xe.module */ 65897)).then(m => m.XeModule) },
    { path: '', redirectTo: 'dept', pathMatch: 'full' }
];
class SystemRoutingModule {
}
SystemRoutingModule.ɵfac = function SystemRoutingModule_Factory(t) { return new (t || SystemRoutingModule)(); };
SystemRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SystemRoutingModule });
SystemRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 46330:
/*!***********************************************!*\
  !*** ./src/app/pages/system/system.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemModule": () => (/* binding */ SystemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-routing.module */ 49448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class SystemModule {
}
SystemModule.ɵfac = function SystemModule_Factory(t) { return new (t || SystemModule)(); };
SystemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SystemModule });
SystemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _system_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SystemModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _system_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_system_system_module_ts.js.map