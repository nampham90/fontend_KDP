"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_charts_charts_module_ts"],{

/***/ 68553:
/*!************************************************************!*\
  !*** ./src/app/pages/feat/charts/charts-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsRoutingModule": () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'gaode-map', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_charts_gaode-map_gaode-map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gaode-map/gaode-map.module */ 24868)).then(m => m.GaodeMapModule) },
    { path: 'baidu-map', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_feat_charts_baidu-map_baidu-map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./baidu-map/baidu-map.module */ 58227)).then(m => m.BaiduMapPageModule) },
    { path: 'echarts', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_charts_echarts_echarts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./echarts/echarts.module */ 846)).then(m => m.EchartsModule) },
    { path: '', redirectTo: 'gaode-map', pathMatch: 'full' }
];
class ChartsRoutingModule {
}
ChartsRoutingModule.ɵfac = function ChartsRoutingModule_Factory(t) { return new (t || ChartsRoutingModule)(); };
ChartsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartsRoutingModule });
ChartsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 49852:
/*!****************************************************!*\
  !*** ./src/app/pages/feat/charts/charts.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsModule": () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 68553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ChartsModule {
}
ChartsModule.ɵfac = function ChartsModule_Factory(t) { return new (t || ChartsModule)(); };
ChartsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChartsModule });
ChartsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartsModule, { imports: [_charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_charts_charts_module_ts.js.map