"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_session-timeout_session-timeout_module_ts"],{

/***/ 60029:
/*!***************************************************************!*\
  !*** ./src/app/core/services/http/example/example.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleService": () => (/* binding */ ExampleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/base-http.service */ 54246);


class ExampleService {
    constructor(http) {
        this.http = http;
    }
    sessionTimeOut() {
        return this.http.get(`/sessionTimeOut/`);
    }
}
ExampleService.ɵfac = function ExampleService_Factory(t) { return new (t || ExampleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_base_http_service__WEBPACK_IMPORTED_MODULE_0__.BaseHttpService)); };
ExampleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExampleService, factory: ExampleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31994:
/*!******************************************************************************!*\
  !*** ./src/app/pages/feat/session-timeout/session-timeout-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionTimeoutRoutingModule": () => (/* binding */ SessionTimeoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_session_timeout_session_timeout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/session-timeout/session-timeout.component */ 23740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_session_timeout_session_timeout_component__WEBPACK_IMPORTED_MODULE_0__.SessionTimeoutComponent, data: { title: 'Đăng nhập đã hết hạn', key: 'session-timeout' } }];
class SessionTimeoutRoutingModule {
}
SessionTimeoutRoutingModule.ɵfac = function SessionTimeoutRoutingModule_Factory(t) { return new (t || SessionTimeoutRoutingModule)(); };
SessionTimeoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SessionTimeoutRoutingModule });
SessionTimeoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionTimeoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23740:
/*!*************************************************************************!*\
  !*** ./src/app/pages/feat/session-timeout/session-timeout.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionTimeoutComponent": () => (/* binding */ SessionTimeoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_example_example_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/example/example.service */ 60029);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);






class SessionTimeoutComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.pageHeaderInfo = {
            title: '登录过期',
            breadcrumb: ['首页', '功能', '登录过期'],
            desc: '用户登录过期示例。如果redis超时了，则重新弹出登录框，登录成功则将原先的接口重新发送，' + '登录失败，则跳转到登录页面。'
        };
    }
    go() {
        this.dataService.sessionTimeOut().subscribe();
    }
    ngOnInit() { }
}
SessionTimeoutComponent.ɵfac = function SessionTimeoutComponent_Factory(t) { return new (t || SessionTimeoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_example_example_service__WEBPACK_IMPORTED_MODULE_0__.ExampleService)); };
SessionTimeoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SessionTimeoutComponent, selectors: [["app-session-timeout"]], decls: 4, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-button", "", 3, "click"]], template: function SessionTimeoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionTimeoutComponent_Template_button_click_2_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u89E6 \u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 15202:
/*!**********************************************************************!*\
  !*** ./src/app/pages/feat/session-timeout/session-timeout.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionTimeoutModule": () => (/* binding */ SessionTimeoutModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _session_timeout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-timeout-routing.module */ 31994);
/* harmony import */ var _session_timeout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-timeout.component */ 23740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class SessionTimeoutModule {
}
SessionTimeoutModule.ɵfac = function SessionTimeoutModule_Factory(t) { return new (t || SessionTimeoutModule)(); };
SessionTimeoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SessionTimeoutModule });
SessionTimeoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _session_timeout_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionTimeoutRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SessionTimeoutModule, { declarations: [_session_timeout_component__WEBPACK_IMPORTED_MODULE_2__.SessionTimeoutComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _session_timeout_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionTimeoutRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_session-timeout_session-timeout_module_ts.js.map