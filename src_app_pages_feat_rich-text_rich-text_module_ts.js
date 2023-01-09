"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_rich-text_rich-text_module_ts"],{

/***/ 65295:
/*!******************************************************************!*\
  !*** ./src/app/pages/feat/rich-text/rich-text-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextRoutingModule": () => (/* binding */ RichTextRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/rich-text/rich-text.component */ 57);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_0__.RichTextComponent, data: { title: 'văn bản đa dạng thức', key: 'rich-text' } }];
class RichTextRoutingModule {
}
RichTextRoutingModule.ɵfac = function RichTextRoutingModule_Factory(t) { return new (t || RichTextRoutingModule)(); };
RichTextRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RichTextRoutingModule });
RichTextRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RichTextRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 57:
/*!*************************************************************!*\
  !*** ./src/app/pages/feat/rich-text/rich-text.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextComponent": () => (/* binding */ RichTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 73889);











function RichTextComponent_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u5FC5\u586B\u9879");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function RichTextComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RichTextComponent_ng_template_10_ng_container_0_Template, 2, 0, "ng-container", 8);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
} }
class RichTextComponent {
    constructor(fb) {
        this.fb = fb;
        this.pageHeaderInfo = {
            title: '富文本，人们总是喜欢用花里胡哨的文字，表达自己空虚的情感',
            breadcrumb: ['首页', '扩展功能', '富文本']
        };
        this.localUrl = 'http://139.9.225.248:8088';
        this.uploadRichFileUrl = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? `${this.localUrl}/rich-upload` : '/site/rich-upload';
        // 所有配置
        // http://tinymce.ax-z.cn/configure/editor-appearance.php
        this.editInit = {
            // automatic_uploads: false,
            images_upload_url: this.uploadRichFileUrl,
            branding: false,
            height: 500,
            convert_urls: false,
            menubar: false,
            plugins: ['image'],
            fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
            language: 'zh_CN',
            // images_upload_handler: function (blobInfo: any, success: (arg0: string) => void, failure: any) {
            //   console.log(blobInfo);
            //   console.log(success);
            //   /* no matter what you upload, we will turn it into TinyMCE logo :)*/
            //   // success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
            // },
            toolbar: '|bold|fontselect|fontsizeselect|styleselect|removeformat|aligncenter  alignright alignjustify | image'
            // image_caption: true,
            // paset 插件允许粘贴图片
            // paste_data_images: true,
            // image_advtab: true,
            // imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
        };
    }
    initForm() {
        this.validateForm = this.fb.group({
            detail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
    }
    ngOnInit() {
        this.initForm();
    }
}
RichTextComponent.ɵfac = function RichTextComponent_Factory(t) { return new (t || RichTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
RichTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RichTextComponent, selectors: [["app-rich-text"]], decls: 12, vars: 15, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-form", "", 1, "form-wrap", 3, "formGroup"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzSpan", "24", "nzRequired", "", "nzFor", "detail"], ["nzSm", "24", 3, "nzErrorTip", "nzXl", "nzXXl", "nzLg", "nzMd"], ["formControlName", "detail", 3, "init", "apiKey"], ["combineTpl", ""], [4, "ngIf"]], template: function RichTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2)(5, "nz-form-item", 3)(6, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "editor", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RichTextComponent_ng_template_10_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXXl", 24)("nzXl", 24)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r0)("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("init", ctx.editInit)("apiKey", "95b1w09g3ruzin5ylg5inr4afxzm3oxotroc0ofkh8pwcefz");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__.WaterMarkComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__.EditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNoLXRleHQuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 28250:
/*!**********************************************************!*\
  !*** ./src/app/pages/feat/rich-text/rich-text.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextModule": () => (/* binding */ RichTextModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 73889);
/* harmony import */ var _rich_text_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rich-text-routing.module */ 65295);
/* harmony import */ var _rich_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rich-text.component */ 57);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class RichTextModule {
}
RichTextModule.ɵfac = function RichTextModule_Factory(t) { return new (t || RichTextModule)(); };
RichTextModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RichTextModule });
RichTextModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__.EditorModule, _rich_text_routing_module__WEBPACK_IMPORTED_MODULE_1__.RichTextRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RichTextModule, { declarations: [_rich_text_component__WEBPACK_IMPORTED_MODULE_2__.RichTextComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__.EditorModule, _rich_text_routing_module__WEBPACK_IMPORTED_MODULE_1__.RichTextRoutingModule] }); })();


/***/ }),

/***/ 73889:
/*!************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent),
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule),
/* harmony export */   "TINYMCE_SCRIPT_SRC": () => (/* binding */ TINYMCE_SCRIPT_SRC)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 21954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 73);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 89196);






/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function EditorComponent_ng_template_0_Template(rf, ctx) {}

const getTinymce = () => {
  const w = typeof window !== 'undefined' ? window : undefined;
  return w && w.tinymce ? w.tinymce : null;
};

class Events {
  constructor() {
    this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onInitNgModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onResizeEditor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

}

Events.ɵfac = function Events_Factory(t) {
  return new (t || Events)();
};

Events.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Events,
  outputs: {
    onBeforePaste: "onBeforePaste",
    onBlur: "onBlur",
    onClick: "onClick",
    onContextMenu: "onContextMenu",
    onCopy: "onCopy",
    onCut: "onCut",
    onDblclick: "onDblclick",
    onDrag: "onDrag",
    onDragDrop: "onDragDrop",
    onDragEnd: "onDragEnd",
    onDragGesture: "onDragGesture",
    onDragOver: "onDragOver",
    onDrop: "onDrop",
    onFocus: "onFocus",
    onFocusIn: "onFocusIn",
    onFocusOut: "onFocusOut",
    onKeyDown: "onKeyDown",
    onKeyPress: "onKeyPress",
    onKeyUp: "onKeyUp",
    onMouseDown: "onMouseDown",
    onMouseEnter: "onMouseEnter",
    onMouseLeave: "onMouseLeave",
    onMouseMove: "onMouseMove",
    onMouseOut: "onMouseOut",
    onMouseOver: "onMouseOver",
    onMouseUp: "onMouseUp",
    onPaste: "onPaste",
    onSelectionChange: "onSelectionChange",
    onActivate: "onActivate",
    onAddUndo: "onAddUndo",
    onBeforeAddUndo: "onBeforeAddUndo",
    onBeforeExecCommand: "onBeforeExecCommand",
    onBeforeGetContent: "onBeforeGetContent",
    onBeforeRenderUI: "onBeforeRenderUI",
    onBeforeSetContent: "onBeforeSetContent",
    onChange: "onChange",
    onClearUndos: "onClearUndos",
    onDeactivate: "onDeactivate",
    onDirty: "onDirty",
    onExecCommand: "onExecCommand",
    onGetContent: "onGetContent",
    onHide: "onHide",
    onInit: "onInit",
    onInitNgModel: "onInitNgModel",
    onLoadContent: "onLoadContent",
    onNodeChange: "onNodeChange",
    onPostProcess: "onPostProcess",
    onPostRender: "onPostRender",
    onPreInit: "onPreInit",
    onPreProcess: "onPreProcess",
    onProgressState: "onProgressState",
    onRedo: "onRedo",
    onRemove: "onRemove",
    onReset: "onReset",
    onResizeEditor: "onResizeEditor",
    onSaveContent: "onSaveContent",
    onSetAttrib: "onSetAttrib",
    onObjectResizeStart: "onObjectResizeStart",
    onObjectResized: "onObjectResized",
    onObjectSelected: "onObjectSelected",
    onSetContent: "onSetContent",
    onShow: "onShow",
    onSubmit: "onSubmit",
    onUndo: "onUndo",
    onVisualAid: "onVisualAid"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Events, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    onBeforePaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCopy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragGesture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocusIn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocusOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onActivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onAddUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeAddUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeExecCommand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeGetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeRenderUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeSetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClearUndos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDeactivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDirty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onExecCommand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onGetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInitNgModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLoadContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onNodeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPostProcess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPostRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPreInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPreProcess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onProgressState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRedo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onReset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResizeEditor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSaveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSetAttrib: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectResizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectResized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onVisualAid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onResizeEditor', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Caretaker note: `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
// will be invoked upon subscription and teardown.

const listenTinyMCEEvent = (editor, eventName, destroy$) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(editor, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));

const bindHandlers = (ctx, editor, destroy$) => {
  const allowedEvents = getValidEvents(ctx);
  allowedEvents.forEach(eventName => {
    const eventEmitter = ctx[eventName];
    listenTinyMCEEvent(editor, eventName.substring(2), destroy$).subscribe(event => {
      // Caretaker note: `ngZone.run()` runs change detection since it notifies the forked Angular zone that it's
      // being re-entered. We don't want to run `ApplicationRef.tick()` if anyone listens to the specific event
      // within the template. E.g. if the `onSelectionChange` is not listened within the template like:
      // `<editor (onSelectionChange)="..."></editor>`
      // then its `observers` array will be empty, and we won't run "dead" change detection.
      if (eventEmitter.observers.length > 0) {
        ctx.ngZone.run(() => eventEmitter.emit({
          event,
          editor
        }));
      }
    });
  });
};

const getValidEvents = ctx => {
  const ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
  const allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter(event => validEvents.includes(event) && !ignoredEvents.includes(event));
  return allowedEvents;
};

const parseStringProperty = (property, defaultValue) => {
  if (typeof property === 'string') {
    return property.split(',').map(value => value.trim());
  }

  if (Array.isArray(property)) {
    return property;
  }

  return defaultValue;
};

let unique = 0;

const uuid = prefix => {
  const date = new Date();
  const time = date.getTime();
  const random = Math.floor(Math.random() * 1000000000);
  unique++;
  return prefix + '_' + random + unique + String(time);
};

const isTextarea = element => typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';

const normalizePluginArray = plugins => {
  if (typeof plugins === 'undefined' || plugins === '') {
    return [];
  }

  return Array.isArray(plugins) ? plugins : plugins.split(' ');
};

const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); // eslint-disable-next-line @typescript-eslint/no-empty-function


const noop = () => {};

const isNullOrUndefined = value => value === null || value === undefined;
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


const createState = () => ({
  script$: null
});

const CreateScriptLoader = () => {
  let state = createState();

  const load = (doc, url) => state.script$ || ( // Caretaker note: the `script$` is a multicast observable since it's piped with `shareReplay`,
  // so if there're multiple editor components simultaneously on the page, they'll subscribe to the internal
  // `ReplaySubject`. The script will be loaded only once, and `ReplaySubject` will cache the result.
  state.script$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
    const scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(scriptTag, 'load').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)(undefined));
  }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)({
    bufferSize: 1,
    refCount: true
  }))); // Only to be used by tests.


  const reinitialize = () => {
    state = createState();
  };

  return {
    load,
    reinitialize
  };
};

const ScriptLoader = CreateScriptLoader();
/* eslint-disable @typescript-eslint/no-parameter-properties */

const TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('TINYMCE_SCRIPT_SRC');
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EditorComponent),
  multi: true
};

class EditorComponent extends Events {
  constructor(elementRef, ngZone, platformId, tinymceScriptSrc) {
    super();
    this.platformId = platformId;
    this.tinymceScriptSrc = tinymceScriptSrc;
    this.cloudChannel = '6';
    this.apiKey = 'no-api-key';
    this.id = '';
    this.modelEvents = 'change input undo redo';
    this.onTouchedCallback = noop;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();

    this.initialise = () => {
      const finalInit = { ...this.init,
        selector: undefined,
        target: this._element,
        inline: this.inline,
        readonly: this.disabled,
        plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
        toolbar: this.toolbar || this.init && this.init.toolbar,
        setup: editor => {
          this._editor = editor;
          listenTinyMCEEvent(editor, 'init', this.destroy$).subscribe(() => {
            this.initEditor(editor);
          });
          bindHandlers(this, editor, this.destroy$);

          if (this.init && typeof this.init.setup === 'function') {
            this.init.setup(editor);
          }
        }
      };

      if (isTextarea(this._element)) {
        this._element.style.visibility = '';
      }

      this.ngZone.runOutsideAngular(() => {
        getTinymce().init(finalInit);
      });
    };

    this._elementRef = elementRef;
    this.ngZone = ngZone;
  }

  set disabled(val) {
    this._disabled = val;

    if (this._editor && this._editor.initialized) {
      if (typeof this._editor.mode?.set === 'function') {
        this._editor.mode.set(val ? 'readonly' : 'design');
      } else {
        this._editor.setMode(val ? 'readonly' : 'design');
      }
    }
  }

  get disabled() {
    return this._disabled;
  }

  get editor() {
    return this._editor;
  }

  writeValue(value) {
    if (this._editor && this._editor.initialized) {
      this._editor.setContent(isNullOrUndefined(value) ? '' : value);
    } else {
      this.initialValue = value === null ? undefined : value;
    }
  }

  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
      this.id = this.id || uuid('tiny-angular');
      this.inline = this.inline !== undefined ? this.inline !== false : !!this.init?.inline;
      this.createElement();

      if (getTinymce() !== null) {
        this.initialise();
      } else if (this._element && this._element.ownerDocument) {
        // Caretaker note: the component might be destroyed before the script is loaded and its code is executed.
        // This will lead to runtime exceptions if `initialise` will be called when the component has been destroyed.
        ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.initialise);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();

    if (getTinymce() !== null) {
      getTinymce().remove(this._editor);
    }
  }

  createElement() {
    const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
    this._element = document.createElement(this.inline ? tagName : 'textarea');

    if (this._element) {
      if (document.getElementById(this.id)) {
        /* eslint no-console: ["error", { allow: ["warn"] }] */
        console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`);
      }

      this._element.id = this.id;

      if (isTextarea(this._element)) {
        this._element.style.visibility = 'hidden';
      }

      this._elementRef.nativeElement.appendChild(this._element);
    }
  }

  getScriptSrc() {
    return isNullOrUndefined(this.tinymceScriptSrc) ? `https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js` : this.tinymceScriptSrc;
  }

  initEditor(editor) {
    listenTinyMCEEvent(editor, 'blur', this.destroy$).subscribe(() => {
      this.ngZone.run(() => this.onTouchedCallback());
    });
    listenTinyMCEEvent(editor, this.modelEvents, this.destroy$).subscribe(() => {
      this.ngZone.run(() => this.emitOnChange(editor));
    });

    if (typeof this.initialValue === 'string') {
      this.ngZone.run(() => {
        editor.setContent(this.initialValue);

        if (editor.getContent() !== this.initialValue) {
          this.emitOnChange(editor);
        }

        if (this.onInitNgModel !== undefined) {
          this.onInitNgModel.emit(editor);
        }
      });
    }
  }

  emitOnChange(editor) {
    if (this.onChangeCallback) {
      this.onChangeCallback(editor.getContent({
        format: this.outputFormat
      }));
    }
  }

}

EditorComponent.ɵfac = function EditorComponent_Factory(t) {
  return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8));
};

EditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditorComponent,
  selectors: [["editor"]],
  inputs: {
    cloudChannel: "cloudChannel",
    apiKey: "apiKey",
    init: "init",
    id: "id",
    initialValue: "initialValue",
    outputFormat: "outputFormat",
    inline: "inline",
    tagName: "tagName",
    plugins: "plugins",
    toolbar: "toolbar",
    modelEvents: "modelEvents",
    allowedEvents: "allowedEvents",
    ignoreEvents: "ignoreEvents",
    disabled: "disabled"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 0,
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
  styles: ["[_nghost-%COMP%]{display:block}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'editor',
      template: '<ng-template></ng-template>',
      providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
      styles: [":host{display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [TINYMCE_SCRIPT_SRC]
      }]
    }];
  }, {
    cloudChannel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    apiKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    init: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outputFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tagName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modelEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ignoreEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class EditorModule {}

EditorModule.ɵfac = function EditorModule_Factory(t) {
  return new (t || EditorModule)();
};

EditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: EditorModule
});
EditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [EditorComponent]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [EditorComponent],
      exports: [EditorComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_rich-text_rich-text_module_ts.js.map