"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_level_level_module_ts"],{

/***/ 15990:
/*!*****************************************************!*\
  !*** ./src/app/pages/level/level-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelRoutingModule": () => (/* binding */ LevelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'menu1', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu1_menu1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu1/menu1.module */ 43216)).then(m => m.Menu1Module) },
    { path: 'menu2', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu2_menu2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu2/menu2.module */ 55995)).then(m => m.Menu2Module) },
    { path: '', redirectTo: 'menu1', pathMatch: 'full' }
];
class LevelRoutingModule {
}
LevelRoutingModule.ɵfac = function LevelRoutingModule_Factory(t) { return new (t || LevelRoutingModule)(); };
LevelRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LevelRoutingModule });
LevelRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LevelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 57019:
/*!*********************************************!*\
  !*** ./src/app/pages/level/level.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelModule": () => (/* binding */ LevelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _level_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-routing.module */ 15990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class LevelModule {
}
LevelModule.ɵfac = function LevelModule_Factory(t) { return new (t || LevelModule)(); };
LevelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LevelModule });
LevelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _level_routing_module__WEBPACK_IMPORTED_MODULE_0__.LevelRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LevelModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _level_routing_module__WEBPACK_IMPORTED_MODULE_0__.LevelRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_level_level_module_ts.js.map