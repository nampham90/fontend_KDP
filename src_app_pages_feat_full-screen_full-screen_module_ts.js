"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_full-screen_full-screen_module_ts"],{

/***/ 14783:
/*!**********************************************************************!*\
  !*** ./src/app/pages/feat/full-screen/full-screen-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenRoutingModule": () => (/* binding */ FullScreenRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/full-screen/full-screen.component */ 50739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_0__.FullScreenComponent, data: { title: 'toàn màn hình', key: 'full-screen' } }];
class FullScreenRoutingModule {
}
FullScreenRoutingModule.ɵfac = function FullScreenRoutingModule_Factory(t) { return new (t || FullScreenRoutingModule)(); };
FullScreenRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FullScreenRoutingModule });
FullScreenRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FullScreenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 50739:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feat/full-screen/full-screen.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenComponent": () => (/* binding */ FullScreenComponent)
/* harmony export */ });
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ 76993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ 49640);









function FullScreenComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullScreenComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.intoFull()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u8FDB\u5165\u5168\u5C4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FullScreenComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullScreenComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u5207\u6362\u5168\u5C4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FullScreenComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullScreenComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.exitFull()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u9000\u51FA\u5168\u5C4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class FullScreenComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.pageHeaderInfo = {
            title: '全屏示例',
            breadcrumb: ['首页', '功能', '全屏示例']
        };
        this.isFullscreenFlag = true;
    }
    toggle() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].toggle();
        }
    }
    exitFull() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].exit();
        }
    }
    intoDomFull(dom) {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].request(dom);
        }
    }
    intoFull() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].request();
        }
    }
    ngOnInit() {
        screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].onchange(() => {
            setTimeout(() => {
                this.isFullscreenFlag = !this.isFullscreenFlag;
                this.cdr.markForCheck();
            }, 10);
        });
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
FullScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-full-screen"]], decls: 16, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "Window Full Screen(\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48vben\u975E\u8981\u5199\u82F1\u6587)"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "nzSpaceItem"], ["nzTitle", "Dom Full Screen", 1, "m-t-15"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "m-t-30", "center", 2, "height", "600px", "background", "white", "margin-left", "auto", "margin-right", "auto"], ["dom", ""]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FullScreenComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FullScreenComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FullScreenComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-card", 4)(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullScreenComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.intoDomFull(_r3)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u4E0B\u9762\u7684dom\u5168\u5C4F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6, 7)(14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullScreenComponent_Template_button_click_14_listener() { return ctx.exitFull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u4E0B\u9762\u7684dom\u53D6\u6D88\u5168\u5C4F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u5F53\u524D\u5168\u5C4F\u72B6\u6001\uFF1A", !ctx.isFullscreenFlag, "");
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__.NzSpaceComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__.NzSpaceItemDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLXNjcmVlbi5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 32674:
/*!**************************************************************!*\
  !*** ./src/app/pages/feat/full-screen/full-screen.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenModule": () => (/* binding */ FullScreenModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _full_screen_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-screen-routing.module */ 14783);
/* harmony import */ var _full_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-screen.component */ 50739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class FullScreenModule {
}
FullScreenModule.ɵfac = function FullScreenModule_Factory(t) { return new (t || FullScreenModule)(); };
FullScreenModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FullScreenModule });
FullScreenModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _full_screen_routing_module__WEBPACK_IMPORTED_MODULE_1__.FullScreenRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FullScreenModule, { declarations: [_full_screen_component__WEBPACK_IMPORTED_MODULE_2__.FullScreenComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _full_screen_routing_module__WEBPACK_IMPORTED_MODULE_1__.FullScreenRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_full-screen_full-screen_module_ts.js.map