"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_scroll_keep-scroll-page_keep-scroll-page_module_ts"],{

/***/ 23123:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/feat/scroll/keep-scroll-page/keep-scroll-page-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeepScrollPageRoutingModule": () => (/* binding */ KeepScrollPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_scroll_keep_scroll_page_keep_scroll_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/scroll/keep-scroll-page/keep-scroll-page.component */ 85307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_scroll_keep_scroll_page_keep_scroll_page_component__WEBPACK_IMPORTED_MODULE_0__.KeepScrollPageComponent, data: { title: 'thanh cuộn bộ nhớ cache', key: 'keep-scroll-page', scrollContain: ['#div-scroll1', '#div-scroll2'] } }];
class KeepScrollPageRoutingModule {
}
KeepScrollPageRoutingModule.ɵfac = function KeepScrollPageRoutingModule_Factory(t) { return new (t || KeepScrollPageRoutingModule)(); };
KeepScrollPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KeepScrollPageRoutingModule });
KeepScrollPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KeepScrollPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 85307:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/feat/scroll/keep-scroll-page/keep-scroll-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeepScrollPageComponent": () => (/* binding */ KeepScrollPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);


class KeepScrollPageComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: 'Thanh Cuộn',
            breadcrumb: ['Home', 'Hàm số', 'Thanh Cuộn'],
            desc: 'Nam Phạm'
        };
    }
    ngOnInit() { }
}
KeepScrollPageComponent.ɵfac = function KeepScrollPageComponent_Factory(t) { return new (t || KeepScrollPageComponent)(); };
KeepScrollPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KeepScrollPageComponent, selectors: [["app-keep-scroll-page"]], decls: 1, vars: 1, consts: [[3, "pageHeaderInfo"]], template: function KeepScrollPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: [".div-scroll[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n  border: 1px solid #0C63BD;\n}\n.div-scroll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlZXAtc2Nyb2xsLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFKQTtFQUtJLG1CQUFBO0FBRUoiLCJmaWxlIjoia2VlcC1zY3JvbGwtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtc2Nyb2xse1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOjFweCBzb2xpZCAjMEM2M0JEO1xuICBwe1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 91629:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/feat/scroll/keep-scroll-page/keep-scroll-page.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeepScrollPageModule": () => (/* binding */ KeepScrollPageModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _keep_scroll_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keep-scroll-page-routing.module */ 23123);
/* harmony import */ var _keep_scroll_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keep-scroll-page.component */ 85307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class KeepScrollPageModule {
}
KeepScrollPageModule.ɵfac = function KeepScrollPageModule_Factory(t) { return new (t || KeepScrollPageModule)(); };
KeepScrollPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: KeepScrollPageModule });
KeepScrollPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _keep_scroll_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.KeepScrollPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](KeepScrollPageModule, { declarations: [_keep_scroll_page_component__WEBPACK_IMPORTED_MODULE_2__.KeepScrollPageComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _keep_scroll_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.KeepScrollPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_scroll_keep-scroll-page_keep-scroll-page_module_ts.js.map