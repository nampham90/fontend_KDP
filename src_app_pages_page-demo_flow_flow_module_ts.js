"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_flow_flow_module_ts"],{

/***/ 4049:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/flow/flow-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowRoutingModule": () => (/* binding */ FlowRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'flow-chat', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_flow_flow-chat_flow-chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./flow-chat/flow-chat.module */ 83593)).then(m => m.FlowChatModule) },
    { path: '', redirectTo: 'flow-chat', pathMatch: 'full' }
];
class FlowRoutingModule {
}
FlowRoutingModule.ɵfac = function FlowRoutingModule_Factory(t) { return new (t || FlowRoutingModule)(); };
FlowRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlowRoutingModule });
FlowRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 29198:
/*!*****************************************************!*\
  !*** ./src/app/pages/page-demo/flow/flow.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowModule": () => (/* binding */ FlowModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _flow_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow-routing.module */ 4049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class FlowModule {
}
FlowModule.ɵfac = function FlowModule_Factory(t) { return new (t || FlowModule)(); };
FlowModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlowModule });
FlowModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _flow_routing_module__WEBPACK_IMPORTED_MODULE_0__.FlowRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlowModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _flow_routing_module__WEBPACK_IMPORTED_MODULE_0__.FlowRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_flow_flow_module_ts.js.map