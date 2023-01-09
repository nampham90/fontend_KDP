"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_lazy_lazy-basic_lazy-basic_module_ts"],{

/***/ 6768:
/*!*************************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-basic/lazy-basic-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyBasicRoutingModule": () => (/* binding */ LazyBasicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_lazy_lazy_basic_lazy_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/lazy/lazy-basic/lazy-basic.component */ 60225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_lazy_lazy_basic_lazy_basic_component__WEBPACK_IMPORTED_MODULE_0__.LazyBasicComponent, data: { title: '懒加载基础实例', key: 'lazy-basic' } }];
class LazyBasicRoutingModule {
}
LazyBasicRoutingModule.ɵfac = function LazyBasicRoutingModule_Factory(t) { return new (t || LazyBasicRoutingModule)(); };
LazyBasicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LazyBasicRoutingModule });
LazyBasicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyBasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 60225:
/*!********************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-basic/lazy-basic.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyBasicComponent": () => (/* binding */ LazyBasicComponent)
/* harmony export */ });
/* harmony import */ var _app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/lazy/lazy-service.service */ 66561);
/* harmony import */ var _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/ad.directive */ 67433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);










function LazyBasicComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LazyBasicComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r2.lazyServiceService.create(); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.isStarted = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u70B9\u51FB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LazyBasicComponent_ng_template_4_Template(rf, ctx) { }
class LazyBasicComponent {
    constructor(lazyServiceService) {
        this.lazyServiceService = lazyServiceService;
        this.pageHeaderInfo = {
            title: '懒加载组件示例',
            breadcrumb: ['首页', '组件', '懒加载组件'],
            desc: '懒加载组件,我永远喜欢周杰伦'
        };
        this.isStarted = false;
    }
    ngAfterViewInit() {
        this.lazyServiceService.adHost = this.adHost;
    }
    ngOnInit() { }
}
LazyBasicComponent.ɵfac = function LazyBasicComponent_Factory(t) { return new (t || LazyBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__.LazyServiceService)); };
LazyBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LazyBasicComponent, selectors: [["app-lazy-basic"]], viewQuery: function LazyBasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_1__.AdDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.adHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__.LazyServiceService])], decls: 5, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], [1, "left-start-center", 2, "flex-wrap", "wrap"], ["appAd", ""], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function LazyBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LazyBasicComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LazyBasicComponent_ng_template_4_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStarted);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_1__.AdDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective], styles: [".content-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-right: 8px;\n}\n.new-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dashed #d9d9d9;\n}\n.new-btn[_ngcontent-%COMP%]:hover {\n  border-color: #1890ff;\n  color: #1890ff;\n}\n.new-btn[_ngcontent-%COMP%]:focus {\n  border-color: #1890ff;\n  color: #1890ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktYmFzaWMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBRkE7RUFJSSxrQkFBQTtBQUNKO0FBTEE7RUFPTSxXQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUlBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBRkY7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFISiIsImZpbGUiOiJsYXp5LWJhc2ljLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbGluayB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9XG59XG5cbi5uZXctYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcbiAgICBjb2xvcjogIzE4OTBmZjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcbiAgICBjb2xvcjogIzE4OTBmZjtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 19626:
/*!*****************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-basic/lazy-basic.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyBasicModule": () => (/* binding */ LazyBasicModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _lazy_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-basic-routing.module */ 6768);
/* harmony import */ var _lazy_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-basic.component */ 60225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class LazyBasicModule {
}
LazyBasicModule.ɵfac = function LazyBasicModule_Factory(t) { return new (t || LazyBasicModule)(); };
LazyBasicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LazyBasicModule });
LazyBasicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _lazy_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__.LazyBasicRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyBasicModule, { declarations: [_lazy_basic_component__WEBPACK_IMPORTED_MODULE_2__.LazyBasicComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _lazy_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__.LazyBasicRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_lazy_lazy-basic_lazy-basic_module_ts.js.map