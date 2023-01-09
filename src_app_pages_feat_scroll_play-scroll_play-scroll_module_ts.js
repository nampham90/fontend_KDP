"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_scroll_play-scroll_play-scroll_module_ts"],{

/***/ 95730:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/feat/scroll/play-scroll/play-scroll-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayScrollRoutingModule": () => (/* binding */ PlayScrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_scroll_play_scroll_play_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/scroll/play-scroll/play-scroll.component */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_scroll_play_scroll_play_scroll_component__WEBPACK_IMPORTED_MODULE_0__.PlayScrollComponent, data: { title: 'chơi với thanh cuộn', key: 'play-scroll' } }];
class PlayScrollRoutingModule {
}
PlayScrollRoutingModule.ɵfac = function PlayScrollRoutingModule_Factory(t) { return new (t || PlayScrollRoutingModule)(); };
PlayScrollRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PlayScrollRoutingModule });
PlayScrollRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlayScrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4590:
/*!************************************************************************!*\
  !*** ./src/app/pages/feat/scroll/play-scroll/play-scroll.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayScrollComponent": () => (/* binding */ PlayScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 24194);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);




/*https://segmentfault.com/a/1190000020769492*/
class PlayScrollComponent {
    constructor(scrollService, _doc) {
        this.scrollService = scrollService;
        this._doc = _doc;
        this.pageHeaderInfo = {
            title: 'Thanh Cuộn',
            breadcrumb: ['Home', 'Hàm Số', 'Thanh cuộn 2'],
            desc: 'Nam Phạm'
        };
    }
    ngOnInit() { }
}
PlayScrollComponent.ɵfac = function PlayScrollComponent_Factory(t) { return new (t || PlayScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__.NzScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
PlayScrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayScrollComponent, selectors: [["app-play-scroll"]], decls: 1, vars: 1, consts: [[3, "pageHeaderInfo"]], template: function PlayScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: [".div-scroll[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n  border: 1px solid #0C63BD;\n}\n.div-scroll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXktc2Nyb2xsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNGO0FBSkE7RUFLSSxtQkFBQTtBQUVKIiwiZmlsZSI6InBsYXktc2Nyb2xsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1zY3JvbGx7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6MXB4IHNvbGlkICMwQzYzQkQ7XG4gIHB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 20927:
/*!*********************************************************************!*\
  !*** ./src/app/pages/feat/scroll/play-scroll/play-scroll.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayScrollModule": () => (/* binding */ PlayScrollModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _play_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-scroll-routing.module */ 95730);
/* harmony import */ var _play_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-scroll.component */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class PlayScrollModule {
}
PlayScrollModule.ɵfac = function PlayScrollModule_Factory(t) { return new (t || PlayScrollModule)(); };
PlayScrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PlayScrollModule });
PlayScrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _play_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlayScrollRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlayScrollModule, { declarations: [_play_scroll_component__WEBPACK_IMPORTED_MODULE_2__.PlayScrollComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _play_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlayScrollRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_scroll_play-scroll_play-scroll_module_ts.js.map