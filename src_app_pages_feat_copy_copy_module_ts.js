"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_copy_copy_module_ts"],{

/***/ 96086:
/*!********************************************************!*\
  !*** ./src/app/pages/feat/copy/copy-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyRoutingModule": () => (/* binding */ CopyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_copy_copy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/copy/copy.component */ 42924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_copy_copy_component__WEBPACK_IMPORTED_MODULE_0__.CopyComponent, data: { title: 'bìa kẹp hồ sơ', key: 'copy' } }];
class CopyRoutingModule {
}
CopyRoutingModule.ɵfac = function CopyRoutingModule_Factory(t) { return new (t || CopyRoutingModule)(); };
CopyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CopyRoutingModule });
CopyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CopyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 42924:
/*!***************************************************!*\
  !*** ./src/app/pages/feat/copy/copy.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyComponent": () => (/* binding */ CopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);










function CopyComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CopyComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.info()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r1.value);
} }
class CopyComponent {
    constructor(msg) {
        this.msg = msg;
        this.pageHeaderInfo = {
            title: '文本复制示例',
            breadcrumb: ['首页', '功能', '剪切板']
        };
        this.value = '';
    }
    info() {
        this.msg.success('复制成功，直接粘贴');
    }
    ngOnInit() { }
}
CopyComponent.ɵfac = function CopyComponent_Factory(t) { return new (t || CopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
CopyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CopyComponent, selectors: [["app-copy"]], decls: 7, vars: 3, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "\u590D\u5236\u793A\u4F8B"], ["nzSearch", "", "nzSize", "large", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "input search text", 3, "ngModel", "ngModelChange"], ["suffixButton", ""], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzSearch", "", 3, "cdkCopyToClipboard", "click"]], template: function CopyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "nz-input-group", 3)(4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CopyComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CopyComponent_ng_template_5_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__.CdkCopyToClipboard], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3B5LmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 86945:
/*!************************************************!*\
  !*** ./src/app/pages/feat/copy/copy.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyModule": () => (/* binding */ CopyModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _copy_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-routing.module */ 96086);
/* harmony import */ var _copy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy.component */ 42924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class CopyModule {
}
CopyModule.ɵfac = function CopyModule_Factory(t) { return new (t || CopyModule)(); };
CopyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CopyModule });
CopyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _copy_routing_module__WEBPACK_IMPORTED_MODULE_1__.CopyRoutingModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CopyModule, { declarations: [_copy_component__WEBPACK_IMPORTED_MODULE_2__.CopyComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _copy_routing_module__WEBPACK_IMPORTED_MODULE_1__.CopyRoutingModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_copy_copy_module_ts.js.map