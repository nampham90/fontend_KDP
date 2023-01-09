"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_upload_upload_module_ts"],{

/***/ 76938:
/*!************************************************************!*\
  !*** ./src/app/pages/feat/upload/upload-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadRoutingModule": () => (/* binding */ UploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/upload/upload.component */ 74167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent, data: { title: 'Tải lên tệp', key: 'upload' } }];
class UploadRoutingModule {
}
UploadRoutingModule.ɵfac = function UploadRoutingModule_Factory(t) { return new (t || UploadRoutingModule)(); };
UploadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UploadRoutingModule });
UploadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UploadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74167:
/*!*******************************************************!*\
  !*** ./src/app/pages/feat/upload/upload.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
















function UploadComponent_ng_template_25_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](control_r2.errors.message);
} }
function UploadComponent_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u5FC5\u586B\u9879");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function UploadComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UploadComponent_ng_template_25_ng_container_0_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UploadComponent_ng_template_25_ng_container_1_Template, 2, 0, "ng-container", 18);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r2.hasError("message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
} }
class UploadComponent {
    constructor(message, fb) {
        this.message = message;
        this.fb = fb;
        this.pageHeaderInfo = {
            title: '文件上传',
            breadcrumb: ['首页', '功能', '文件上传'],
            desc: '简单弄一下，返回的都是服务器统一返回的文件'
        };
        this.uploadUrl = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? '/api/file/test/upload/document/' : '/site/api/file/test/upload/document/';
        this.fileList = [];
        this.fileFormList = [];
    }
    handleChange(info) {
        if (info.type === 'success') {
            if (info.file.response.code === 0) {
                this.message.success(`服务器上返回的文件路径：${info.file.response.data.data}`);
            }
        }
    }
    uploadFn(e) {
        if (e.type === 'success') {
            if (e.file.response.code === 0) {
                this.validateForm.get('file')?.setValue(e.file.response.data.data);
            }
        }
    }
    resetForm() {
        this.validateForm.reset();
        this.fileFormList = [];
    }
    submitForm() {
        if (!(0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnCheckForm)(this.validateForm)) {
            return;
        }
    }
    initForm() {
        this.validateForm = this.fb.group({
            file: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
    }
    ngOnInit() {
        this.initForm();
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 27, vars: 22, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "\u7B80\u5355\u5B9E\u4F8B\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6587\u4EF6\u5730\u5740\u7EDF\u4E00\uFF0C\u6F14\u793A\u529F\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u4E0A\u4F20\u7684\u6587\u4EF6"], [3, "nzName", "nzShowButton", "nzAction", "nzLimit", "nzSize", "nzFileList", "nzChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nzTitle", "\u5D4C\u5165\u8868\u5355\uFF0C\u52A0\u5165\u8868\u5355\u9A8C\u8BC1", 1, "m-t-20"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [3, "nzSm", "nzXs", "nzErrorTip"], [3, "nzSm", "nzXs"], [3, "nzName", "nzAction", "nzSize", "nzFileList", "nzLimit", "nzChange"], ["formControlName", "file", 3, "hidden"], ["nz-row", "", 1, "m-t-20"], [3, "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", "nzType", "default", 1, "m-l-10", 3, "click"], ["combineTpl", ""], [4, "ngIf"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "nz-upload", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzChange", function UploadComponent_Template_nz_upload_nzChange_3_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u5BFC\u5165\u6750\u6599(\u6700\u5927\u6D4B\u8BD5\u4E0A\u4F205M) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-card", 6)(8, "form", 7)(9, "nz-form-item", 8)(10, "nz-form-control", 9)(11, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u9644\u4EF6\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-control", 10)(14, "nz-upload", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzChange", function UploadComponent_Template_nz_upload_nzChange_14_listener($event) { return ctx.uploadFn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \u4E0A\u4F20\u9644\u4EF6(\u6700\u5927\u6D4B\u8BD5\u4E0A\u4F205M) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-item", 13)(20, "nz-form-control", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_21_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u63D0\u4EA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_23_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u91CD\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, UploadComponent_ng_template_25_Template, 2, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzName", "document")("nzShowButton", true)("nzAction", ctx.uploadUrl)("nzLimit", 1)("nzSize", 1024 * 5)("nzFileList", ctx.fileList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzName", "document")("nzAction", ctx.uploadUrl)("nzSize", 1024 * 5)("nzFileList", ctx.fileFormList)("nzLimit", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 14);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_7__.NzUploadComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 37699:
/*!****************************************************!*\
  !*** ./src/app/pages/feat/upload/upload.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadModule": () => (/* binding */ UploadModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-routing.module */ 76938);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ 74167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class UploadModule {
}
UploadModule.ɵfac = function UploadModule_Factory(t) { return new (t || UploadModule)(); };
UploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UploadModule });
UploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UploadModule, { declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_2__.UploadComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_upload_upload_module_ts.js.map