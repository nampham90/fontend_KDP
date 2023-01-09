"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_form_base_base_module_ts"],{

/***/ 92830:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-demo/form/base/base-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRoutingModule": () => (/* binding */ BaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 94342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent, data: { title: 'hình thức cơ bản', key: 'base-form' } }];
class BaseRoutingModule {
}
BaseRoutingModule.ɵfac = function BaseRoutingModule_Factory(t) { return new (t || BaseRoutingModule)(); };
BaseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaseRoutingModule });
BaseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94342:
/*!*************************************************************!*\
  !*** ./src/app/pages/page-demo/form/base/base.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 20558);



















const _c0 = ["dragTpl"];
function BaseComponent_nz_select_52_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 35);
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", option_r2.label)("nzValue", option_r2.value);
} }
function BaseComponent_nz_select_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BaseComponent_nz_select_52_nz_option_1_Template, 1, 2, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.listOfOption);
} }
class BaseComponent {
    constructor(fb) {
        this.fb = fb;
        this.pageHeaderInfo = {
            title: '基础表单',
            desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
            breadcrumb: ['首页', '表单页', '基础表单']
        };
        this.listOfOption = [
            { label: '同事甲', value: '同事甲' },
            { label: '同事乙', value: '同事乙' },
            { label: '同事丙', value: '同事丙' }
        ];
    }
    submitForm() {
        if (!(0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnCheckForm)(this.validateForm)) {
            return;
        }
        console.log(this.validateForm.value);
    }
    initForm() {
        this.validateForm = this.fb.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            desc: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            standard: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            client: [null],
            invitedCommenter: [null],
            weights: [null],
            isPublic: [null]
        });
    }
    ngOnInit() {
        this.initForm();
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], viewQuery: function BaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dragTpl = _t.first);
    } }, decls: 59, vars: 39, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-form", "", 1, "form-wrap", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "title", 3, "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u6807\u9898", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "title", "id", "title", "placeholder", "\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"], ["nzFor", "date", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u9009\u62E9\u8D77\u6B62\u65E5\u671F", 3, "nzSm", "nzXs"], ["formControlName", "date", 1, "with-full"], ["nzRequired", "", "nzFor", "desc", 3, "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u76EE\u6807\u63CF\u8FF0", 3, "nzSm", "nzXs"], ["rows", "4", "formControlName", "desc", "nz-input", "", "id", "desc", "placeholder", "\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807"], ["nzRequired", "", "nzFor", "standard", 3, "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6", 3, "nzSm", "nzXs"], ["rows", "4", "formControlName", "standard", "nz-input", "", "id", "standard", "placeholder", "\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6"], ["nzFor", "client", "nzTooltipTitle", "\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "client", "id", "client", "placeholder", "\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5@\u59D3\u540D/\u5DE5\u53F7"], ["nzFor", "invitedCommenter", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "invitedCommenter", "id", "invitedCommenter", "placeholder", "\u8BF7\u76F4\u63A5@\u59D3\u540D/\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF75\u4EBA"], ["nzFor", "weights", 3, "nzSm", "nzXs"], ["formControlName", "weights", "id", "weights", 3, "nzStep", "nzPlaceHolder"], ["nzFor", "public", 3, "nzSm", "nzXs"], ["nz-row", "", "nzExtra", "\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB", 3, "nzSm", "nzXs"], ["formControlName", "isPublic", "id", "public"], ["nz-radio", "", "nzValue", "1"], ["nz-radio", "", "nzValue", "2"], ["nz-radio", "", "nzValue", "3"], ["class", "m-t-5", "nzMode", "tags", "nzPlaceHolder", "Please select", 4, "ngIf"], ["nz-row", ""], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"], ["nz-button", "", "nzType", "default", 1, "m-l-10"], ["nzMode", "tags", "nzPlaceHolder", "Please select", 1, "m-t-5"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BaseComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-form-item")(11, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u8D77\u6B62\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "nz-range-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u76EE\u6807\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u8861\u91CF\u6807\u51C6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u5BA2\u6237");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u9080\u8BC4\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "nz-form-item")(36, "nz-form-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u6743\u91CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "nz-input-number", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "nz-form-item")(42, "nz-form-label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u76EE\u6807\u516C\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "nz-form-control", 23)(45, "nz-radio-group", 24)(46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\u516C\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u90E8\u5206\u516C\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\u4E0D\u516C\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BaseComponent_nz_select_52_Template, 2, 1, "nz-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "nz-form-item", 29)(54, "nz-form-control", 30)(55, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u63D0\u4EA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStep", 1)("nzPlaceHolder", "\u8BF7\u8F93\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validateForm.get("isPublic").value === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__.WaterMarkComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioGroupComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzRangePickerComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__.NzInputNumberComponent], styles: [".phone-select[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.register-are[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0FBREYiLCJmaWxlIjoiYmFzZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBob25lLXNlbGVjdCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4ucmVnaXN0ZXItYXJlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 38966:
/*!**********************************************************!*\
  !*** ./src/app/pages/page-demo/form/base/base.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-routing.module */ 92830);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 94342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class BaseModule {
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(); };
BaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _base_routing_module__WEBPACK_IMPORTED_MODULE_1__.BaseRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _base_routing_module__WEBPACK_IMPORTED_MODULE_1__.BaseRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_form_base_base_module_ts.js.map