"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["default-src_app_shared_biz-components_icon-sel_icon-sel_module_ts"],{

/***/ 48367:
/*!**********************************************************************!*\
  !*** ./src/app/shared/biz-components/icon-sel/icon-sel.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconSelComponent": () => (/* binding */ IconSelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _shared_biz_components_icon_sel_zorro_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/biz-components/icon-sel/zorro-icons */ 38000);
/* harmony import */ var _utils_camelFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/camelFn */ 83501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popover */ 7773);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/empty */ 44835);
















function IconSelComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function IconSelComponent_ng_template_1_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.searchIcon($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "\u641C\u7D22\u56FE\u6807\u7684type");
} }
const _c0 = function (a0) { return { color: a0 }; };
function IconSelComponent_ng_template_3_nz_card_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IconSelComponent_ng_template_3_nz_card_1_ng_container_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const item_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.selIconFn(item_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r9.gridStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, item_r10.isChecked ? "#409eff" : ""))("nzType", item_r10.icon);
} }
function IconSelComponent_ng_template_3_nz_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IconSelComponent_ng_template_3_nz_card_1_ng_container_1_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.iconsStrShowArray);
} }
function IconSelComponent_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-empty");
} }
const _c1 = function () { return { padding: "0" }; };
const _c2 = function () { return [20, 50]; };
function IconSelComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IconSelComponent_ng_template_3_nz_card_1_Template, 2, 1, "nz-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, IconSelComponent_ng_template_3_ng_template_2_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageSizeChange", function IconSelComponent_ng_template_3_Template_nz_pagination_nzPageSizeChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.pageSizeChange($event)); })("nzPageIndexChange", function IconSelComponent_ng_template_3_Template_nz_pagination_nzPageIndexChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.getData($event)); })("nzPageIndexChange", function IconSelComponent_ng_template_3_Template_nz_pagination_nzPageIndexChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.pageObj.pageNum = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1))("nzBorderless", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.iconsStrShowArray && ctx_r3.iconsStrShowArray.length > 0)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c2))("nzSize", "small")("nzPageSize", ctx_r3.pageObj.pageSize)("nzPageIndex", ctx_r3.pageObj.pageNum)("nzTotal", ctx_r3.iconsStrAllArray.length);
} }
class IconSelComponent {
    constructor(cdr, destroy$) {
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.visible = false;
        // 做图标搜索防抖
        this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.seletedIcon = '';
        this.selIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // 分页信息
        this.pageObj = {
            pageSize: 50,
            pageNum: 1
        };
        // 图标搜索出来的所有结果
        this.iconsStrAllArray = [];
        this.sourceIconsArray = []; // 所有icon的数据源
        this.iconsStrShowArray = []; // 每页中展示的icon
        this.gridStyle = {
            width: '20%'
        };
        _shared_biz_components_icon_sel_zorro_icons__WEBPACK_IMPORTED_MODULE_1__.zorroIcons.forEach(item => {
            this.sourceIconsArray.push({ icon: (0,_utils_camelFn__WEBPACK_IMPORTED_MODULE_2__.fnKebabCase)(item), isChecked: false });
        });
        this.iconsStrAllArray = JSON.parse(JSON.stringify(this.sourceIconsArray));
    }
    searchIcon(e) {
        this.searchText$.next(e.target.value);
    }
    selIconFn(item) {
        this.seletedIcon = item.icon;
        this.sourceIconsArray.forEach(icon => (icon.isChecked = false));
        this.iconsStrShowArray.forEach(icon => (icon.isChecked = false));
        this.iconsStrAllArray.forEach(icon => (icon.isChecked = false));
        item.isChecked = true;
        this.selIcon.emit(item.icon);
    }
    pageSizeChange(event) {
        this.pageObj = { ...this.pageObj, pageSize: event };
        this.getData(1);
    }
    // 分页获取数据
    getData(event = this.pageObj.pageNum) {
        this.pageObj = { ...this.pageObj, pageNum: event };
        this.iconsStrShowArray = [...this.iconsStrAllArray.slice((this.pageObj.pageNum - 1) * this.pageObj.pageSize, this.pageObj.pageNum * this.pageObj.pageSize)];
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.getData();
    }
    ngAfterViewInit() {
        this.searchText$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.iconsStrAllArray = this.sourceIconsArray.filter(item => item.icon.includes(res));
            this.getData();
            this.cdr.markForCheck();
        });
    }
}
IconSelComponent.ɵfac = function IconSelComponent_Factory(t) { return new (t || IconSelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService)); };
IconSelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IconSelComponent, selectors: [["app-icon-sel"]], inputs: { visible: "visible" }, outputs: { selIcon: "selIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])], decls: 5, vars: 4, consts: [["nz-popover", "", "nzPopoverTrigger", "click", "nz-icon", "", "nzTheme", "outline", 1, "input-after-icon", "hand-model", 3, "nzPopoverVisible", "nzPopoverTitle", "nzPopoverContent", "nzType", "nzPopoverVisibleChange"], ["searchTitle", ""], ["contentTemplate", ""], ["nz-input", "", 3, "placeholder", "input"], [2, "width", "300px", "max-height", "220px", "overflow", "auto", 3, "nzBodyStyle", "nzBorderless"], [4, "ngIf", "ngIfElse"], ["noResult", ""], ["nzShowSizeChanger", "", 1, "m-t-10", 2, "max-width", "300px", 3, "nzPageSizeOptions", "nzSize", "nzPageSize", "nzPageIndex", "nzTotal", "nzPageSizeChange", "nzPageIndexChange"], [4, "ngFor", "ngForOf"], ["nz-card-grid", "", 1, "center", 3, "ngStyle", "click"], ["nz-icon", "", "nzTheme", "outline", 1, "sp-18", 3, "ngStyle", "nzType"]], template: function IconSelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPopoverVisibleChange", function IconSelComponent_Template_i_nzPopoverVisibleChange_0_listener($event) { return ctx.visible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IconSelComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, IconSelComponent_ng_template_3_Template, 5, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPopoverVisible", ctx.visible)("nzPopoverTitle", _r0)("nzPopoverContent", _r2)("nzType", ctx.seletedIcon || "appstore");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__.NzPopoverDirective, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_10__.NzPaginationComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardGridDirective, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_15__.NzEmptyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLXNlbC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 35969:
/*!*******************************************************************!*\
  !*** ./src/app/shared/biz-components/icon-sel/icon-sel.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconSelModule": () => (/* binding */ IconSelModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _icon_sel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-sel.component */ 48367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class IconSelModule {
}
IconSelModule.ɵfac = function IconSelModule_Factory(t) { return new (t || IconSelModule)(); };
IconSelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconSelModule });
IconSelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconSelModule, { declarations: [_icon_sel_component__WEBPACK_IMPORTED_MODULE_1__.IconSelComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_icon_sel_component__WEBPACK_IMPORTED_MODULE_1__.IconSelComponent] }); })();


/***/ }),

/***/ 38000:
/*!***************************************************************!*\
  !*** ./src/app/shared/biz-components/icon-sel/zorro-icons.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zorroIcons": () => (/* binding */ zorroIcons)
/* harmony export */ });
const direction = [
    'StepBackward',
    'StepForward',
    'FastBackward',
    'FastForward',
    'Shrink',
    'ArrowsAlt',
    'Down',
    'Up',
    'Left',
    'Right',
    'CaretUp',
    'CaretDown',
    'CaretLeft',
    'CaretRight',
    'UpCircle',
    'DownCircle',
    'LeftCircle',
    'RightCircle',
    'DoubleRight',
    'DoubleLeft',
    'VerticalLeft',
    'VerticalRight',
    'VerticalAlignTop',
    'VerticalAlignMiddle',
    'VerticalAlignBottom',
    'Forward',
    'Backward',
    'Rollback',
    'Enter',
    'Retweet',
    'Swap',
    'SwapLeft',
    'SwapRight',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'PlayCircle',
    'UpSquare',
    'DownSquare',
    'LeftSquare',
    'RightSquare',
    'Login',
    'Logout',
    'MenuFold',
    'MenuUnfold',
    'BorderBottom',
    'BorderHorizontal',
    'BorderInner',
    'BorderOuter',
    'BorderLeft',
    'BorderRight',
    'BorderTop',
    'BorderVerticle',
    'PicCenter',
    'PicLeft',
    'PicRight',
    'RadiusBottomleft',
    'RadiusBottomright',
    'RadiusUpleft',
    'RadiusUpright',
    'Fullscreen',
    'FullscreenExit'
];
const suggestion = [
    'Question',
    'QuestionCircle',
    'Plus',
    'PlusCircle',
    'Pause',
    'PauseCircle',
    'Minus',
    'MinusCircle',
    'PlusSquare',
    'MinusSquare',
    'Info',
    'InfoCircle',
    'Exclamation',
    'ExclamationCircle',
    'Close',
    'CloseCircle',
    'CloseSquare',
    'Check',
    'CheckCircle',
    'CheckSquare',
    'ClockCircle',
    'Warning',
    'IssuesClose',
    'Stop'
];
const edit = [
    'Edit',
    'Form',
    'Copy',
    'Scissor',
    'Delete',
    'Snippets',
    'Diff',
    'Highlight',
    'AlignCenter',
    'AlignLeft',
    'AlignRight',
    'BgColors',
    'Bold',
    'Italic',
    'Underline',
    'Strikethrough',
    'Redo',
    'Undo',
    'ZoomIn',
    'ZoomOut',
    'FontColors',
    'FontSize',
    'LineHeight',
    'Dash',
    'SmallDash',
    'SortAscending',
    'SortDescending',
    'Drag',
    'OrderedList',
    'UnorderedList',
    'RadiusSetting',
    'ColumnWidth',
    'ColumnHeight'
];
const data = ['AreaChart', 'PieChart', 'BarChart', 'DotChart', 'LineChart', 'RadarChart', 'HeatMap', 'Fall', 'Rise', 'Stock', 'BoxPlot', 'Fund', 'Sliders'];
const logo = [
    'Android',
    'Apple',
    'Windows',
    'Ie',
    'Chrome',
    'Github',
    'Aliwangwang',
    'Dingding',
    'WeiboSquare',
    'WeiboCircle',
    'TaobaoCircle',
    'Html5',
    'Weibo',
    'Twitter',
    'Wechat',
    'Youtube',
    'AlipayCircle',
    'Taobao',
    'Skype',
    'Qq',
    'MediumWorkmark',
    'Gitlab',
    'Medium',
    'Linkedin',
    'GooglePlus',
    'Dropbox',
    'Facebook',
    'Codepen',
    //'CodeSandbox',
    //'CodeSandboxCircle',
    'Amazon',
    'Google',
    'CodepenCircle',
    'Alipay',
    'AntDesign',
    'AntCloud',
    'Aliyun',
    'Zhihu',
    'Slack',
    'SlackSquare',
    'Behance',
    'BehanceSquare',
    'Dribbble',
    'DribbbleSquare',
    'Instagram',
    'Yuque',
    'Alibaba',
    'Yahoo',
    'Reddit',
    'Sketch'
];
const newIconNames = [
    // direction
    // 'border-outter',
    'radius-upright',
    // suggestion
    // edit
    // 'colum-width',
    // data
    // other
    'eye-invisible'
    // 'batch-folding',
    // logo
    // 'code-sandbox',
    // 'code-sandbox-circle'
];
const zorroIcons = [...direction, ...newIconNames, ...suggestion, ...edit, ...data, ...logo];


/***/ }),

/***/ 83501:
/*!**********************************!*\
  !*** ./src/app/utils/camelFn.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fnKebabCase": () => (/* binding */ fnKebabCase)
/* harmony export */ });
/* eslint-disable prettier/prettier */
function camelCase(value) {
    return value.replace(/-\w/g, (_r, i) => value.charAt(i + 1).toUpperCase());
}
function upperCamelCase(value) {
    const camelCased = camelCase(value);
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
const fnKebabCase = function kebabCase(value) {
    return value
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([0-9])([a-zA-Z]+)$/g, '-$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};



/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_biz-components_icon-sel_icon-sel_module_ts.js.map