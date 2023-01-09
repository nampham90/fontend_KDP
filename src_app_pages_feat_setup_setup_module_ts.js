"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_setup_setup_module_ts"],{

/***/ 2897:
/*!**********************************************************!*\
  !*** ./src/app/pages/feat/setup/setup-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoutingModule": () => (/* binding */ SetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_setup_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/setup/setup.component */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_setup_setup_component__WEBPACK_IMPORTED_MODULE_0__.SetupComponent, data: { title: 'Trang hướng dẫn', key: 'setup' } }];
class SetupRoutingModule {
}
SetupRoutingModule.ɵfac = function SetupRoutingModule_Factory(t) { return new (t || SetupRoutingModule)(); };
SetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SetupRoutingModule });
SetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 262:
/*!*****************************************************!*\
  !*** ./src/app/pages/feat/setup/setup.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupComponent": () => (/* binding */ SetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_common_driver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/driver.service */ 21181);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);






class SetupComponent {
    constructor(driverService) {
        this.driverService = driverService;
        this.pageHeaderInfo = {
            title: '引导页',
            breadcrumb: ['首页', '引导页'],
            desc: '用于给用户的指引操作'
        };
    }
    go() {
        this.driverService.load();
    }
    ngOnInit() { }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) { return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_common_driver_service__WEBPACK_IMPORTED_MODULE_0__.DriverService)); };
SetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SetupComponent, selectors: [["app-setup"]], decls: 4, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-button", "", 3, "click"]], template: function SetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupComponent_Template_button_click_2_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u5F00 \u59CB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 16920:
/*!**************************************************!*\
  !*** ./src/app/pages/feat/setup/setup.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupModule": () => (/* binding */ SetupModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-routing.module */ 2897);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.component */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class SetupModule {
}
SetupModule.ɵfac = function SetupModule_Factory(t) { return new (t || SetupModule)(); };
SetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SetupModule });
SetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetupRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SetupModule, { declarations: [_setup_component__WEBPACK_IMPORTED_MODULE_2__.SetupComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetupRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_setup_setup_module_ts.js.map