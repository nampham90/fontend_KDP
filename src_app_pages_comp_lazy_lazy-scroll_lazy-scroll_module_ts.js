"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_lazy_lazy-scroll_lazy-scroll_module_ts"],{

/***/ 31334:
/*!***************************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-scroll/lazy-scroll-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyScrollRoutingModule": () => (/* binding */ LazyScrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_lazy_lazy_scroll_lazy_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/lazy/lazy-scroll/lazy-scroll.component */ 12074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_lazy_lazy_scroll_lazy_scroll_component__WEBPACK_IMPORTED_MODULE_0__.LazyScrollComponent, data: { title: '滚动懒加载', key: 'lazy-scroll' } }];
class LazyScrollRoutingModule {
}
LazyScrollRoutingModule.ɵfac = function LazyScrollRoutingModule_Factory(t) { return new (t || LazyScrollRoutingModule)(); };
LazyScrollRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LazyScrollRoutingModule });
LazyScrollRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LazyScrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 12074:
/*!**********************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-scroll/lazy-scroll.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyScrollComponent": () => (/* binding */ LazyScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/lazy/lazy-service.service */ 66561);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/ad.directive */ 67433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);












function LazyScrollComponent_ng_template_4_Template(rf, ctx) { }
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.normalizePassiveListenerOptions)({ passive: true });
class LazyScrollComponent {
    constructor(lazyServiceService, zone, cdr, destroyService$) {
        this.lazyServiceService = lazyServiceService;
        this.zone = zone;
        this.cdr = cdr;
        this.destroyService$ = destroyService$;
        this.pageHeaderInfo = {
            title: '滚动懒加载组件示例',
            breadcrumb: ['首页', '组件', '滚动懒加载'],
            desc: '滚动页面，加载组件'
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.lazyServiceService.adHost = this.adHost;
        this.zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'scroll', passiveEventListenerOptions)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => {
                return window.scrollY >= 200;
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyService$))
                .subscribe(() => {
                this.lazyServiceService.create().then(() => {
                    this.cdr.detectChanges();
                });
            });
        });
    }
}
LazyScrollComponent.ɵfac = function LazyScrollComponent_Factory(t) { return new (t || LazyScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__.LazyServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService)); };
LazyScrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LazyScrollComponent, selectors: [["app-lazy-scroll"]], viewQuery: function LazyScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_2__.AdDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.adHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_app_pages_comp_lazy_lazy_service_service__WEBPACK_IMPORTED_MODULE_0__.LazyServiceService, _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService])], decls: 5, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], [2, "width", "800px", "height", "100vh"], [1, "left-start-center", 2, "flex-wrap", "wrap"], ["appAd", ""]], template: function LazyScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, LazyScrollComponent_ng_template_4_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_2__.AdDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXp5LXNjcm9sbC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 23033:
/*!*******************************************************************!*\
  !*** ./src/app/pages/comp/lazy/lazy-scroll/lazy-scroll.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyScrollModule": () => (/* binding */ LazyScrollModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _lazy_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-scroll-routing.module */ 31334);
/* harmony import */ var _lazy_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-scroll.component */ 12074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class LazyScrollModule {
}
LazyScrollModule.ɵfac = function LazyScrollModule_Factory(t) { return new (t || LazyScrollModule)(); };
LazyScrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LazyScrollModule });
LazyScrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _lazy_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.LazyScrollRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyScrollModule, { declarations: [_lazy_scroll_component__WEBPACK_IMPORTED_MODULE_2__.LazyScrollComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _lazy_scroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.LazyScrollRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_lazy_lazy-scroll_lazy-scroll_module_ts.js.map