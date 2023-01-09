"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_list_list_module_ts"],{

/***/ 56635:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/list/list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListRoutingModule": () => (/* binding */ ListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'search-table', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_search-table_search-table_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-table/search-table.module */ 78128)).then(m => m.SearchTableModule) },
    { path: 'standard-table', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_standard-table_standard-table_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./standard-table/standard-table.module */ 66684)).then(m => m.StandardTableModule) },
    { path: 'tree-list', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_tree-list_tree-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tree-list/tree-list.module */ 56553)).then(m => m.TreeListModule) },
    { path: 'card-table', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_card-table_card-table_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./card-table/card-table.module */ 40848)).then(m => m.CardTableModule) },
    { path: 'search-list', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_search-list_search-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-list/search-list.module */ 99598)).then(m => m.SearchListModule) },
    { path: '', redirectTo: 'search-table', pathMatch: 'full' }
];
class ListRoutingModule {
}
ListRoutingModule.ɵfac = function ListRoutingModule_Factory(t) { return new (t || ListRoutingModule)(); };
ListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListRoutingModule });
ListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 17740:
/*!*****************************************************!*\
  !*** ./src/app/pages/page-demo/list/list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModule": () => (/* binding */ ListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 56635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ListModule {
}
ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
ListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ListModule });
ListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_list_list_module_ts.js.map