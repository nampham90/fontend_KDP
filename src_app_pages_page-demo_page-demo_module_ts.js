"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_page-demo_module_ts"],{

/***/ 38844:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/page-demo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDemoRoutingModule": () => (/* binding */ PageDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 64104)).then(m => m.FormModule)
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list/list.module */ 17740)).then(m => m.ListModule)
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_detail_detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 39316)).then(m => m.DetailModule)
    },
    {
        path: 'personal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_personal_personal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personal/personal.module */ 2767)).then(m => m.PersonalModule)
    },
    {
        path: 'except',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_except_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./except/except.module */ 41063)).then(m => m.ExceptModule)
    },
    {
        path: 'result',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_result_result_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./result/result.module */ 22614)).then(m => m.ResultModule)
    },
    {
        path: 'flow',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_flow_flow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./flow/flow.module */ 29198)).then(m => m.FlowModule)
    }
];
class PageDemoRoutingModule {
}
PageDemoRoutingModule.ɵfac = function PageDemoRoutingModule_Factory(t) { return new (t || PageDemoRoutingModule)(); };
PageDemoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageDemoRoutingModule });
PageDemoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageDemoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 35371:
/*!*****************************************************!*\
  !*** ./src/app/pages/page-demo/page-demo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDemoModule": () => (/* binding */ PageDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _page_demo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-demo-routing.module */ 38844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PageDemoModule {
}
PageDemoModule.ɵfac = function PageDemoModule_Factory(t) { return new (t || PageDemoModule)(); };
PageDemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageDemoModule });
PageDemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_demo_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageDemoRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageDemoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_demo_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageDemoRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_page-demo_module_ts.js.map