"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_list_standard-table_standard-table_module_ts"],{

/***/ 78240:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/page-demo/list/standard-table/standard-table-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardTableRoutingModule": () => (/* binding */ StandardTableRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _standard_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-table.component */ 72508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _standard_table_component__WEBPACK_IMPORTED_MODULE_0__.StandardTableComponent, data: { title: 'mẫu', key: 'standard-table' } }];
class StandardTableRoutingModule {
}
StandardTableRoutingModule.ɵfac = function StandardTableRoutingModule_Factory(t) { return new (t || StandardTableRoutingModule)(); };
StandardTableRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StandardTableRoutingModule });
StandardTableRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StandardTableRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 72508:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/page-demo/list/standard-table/standard-table.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardTableComponent": () => (/* binding */ StandardTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 27212);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);



















function StandardTableComponent_ng_template_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StandardTableComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "nz-radio-group", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u5168\u90E8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u8FDB\u884C\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u7B49\u5F85\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-input-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StandardTableComponent_ng_template_16_ng_template_10_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAddOnAfter", _r3);
} }
function StandardTableComponent_nz_list_item_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-list-item")(1, "nz-list-item-meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nz-list-item-meta-avatar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-list-item-meta-title")(4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-list-item-meta-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "div", 25)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 25)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u5F00\u59CB\u65F6\u95F4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "nz-progress", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 27)(22, "nz-list-item-action")(23, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StandardTableComponent_nz_list_item_23_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.edit(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-list-item-action")(26, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u66F4\u591A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nz-dropdown-menu", null, 31)(31, "ul", 32)(32, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StandardTableComponent_nz_list_item_23_Template_li_click_32_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.edit(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StandardTableComponent_nz_list_item_23_Template_li_click_34_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.deleteItem(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", item_r5.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPercent", item_r5.progress)("nzStatus", item_r5.progress_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r6);
} }
class StandardTableComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '标准列表',
            breadcrumb: ['首页', '列表页面', '标准列表']
        };
        this.isSpinning = false;
        this.list = [
            {
                id: 1,
                name: 'Alipay',
                desc: '那是一种内在的东西， 他们到达不了，也无法触及的',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                owner: '付小小',
                owner_id: '1',
                time: '2020-11-18 15:12',
                progress: 75,
                progress_status: 'active'
            },
            {
                id: 2,
                name: 'Angular',
                desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                owner: '曲丽丽',
                owner_id: '2',
                time: '2020-11-19 07:51',
                progress: 93,
                progress_status: 'exception'
            },
            {
                id: 3,
                name: 'Ant Design',
                desc: '生命就像一盒巧克力，结果往往出人意料',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                owner: '林东东',
                owner_id: '3',
                time: '2020-11-19 05:51',
                progress: 94,
                progress_status: 'active'
            },
            {
                id: 4,
                name: 'Ant Nam Pham',
                desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                owner: '周星星',
                owner_id: '4',
                time: '2020-11-19 03:51',
                progress: 93,
                progress_status: 'active'
            },
            {
                id: 5,
                name: 'Bootstrap',
                desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                owner: '吴加好',
                owner_id: '5',
                time: '2020-11-19 01:51',
                progress: 91,
                progress_status: 'exception'
            }
        ];
    }
    edit(item) { }
    deleteItem(item) { }
    ngOnInit() { }
}
StandardTableComponent.ɵfac = function StandardTableComponent_Factory(t) { return new (t || StandardTableComponent)(); };
StandardTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StandardTableComponent, selectors: [["app-standard-table"]], decls: 26, vars: 31, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-row", ""], ["nz-col", "", 1, "center", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [3, "nzValue", "nzTitle"], ["nz-col", "", "nz-row", "", 1, "center", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzType", "vertical"], ["nz-col", "", "nzFlex", "1"], ["nzTitle", "\u57FA\u672C\u5217\u8868", 1, "m-t-20", 3, "nzExtra"], ["extraTpl", ""], ["nzBlock", "", "nz-button", "", "nzType", "dashed"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [3, "nzLoading"], [4, "ngFor", "ngForOf"], ["nzShowQuickJumper", "", "nzShowSizeChanger", "", 3, "nzPageIndex", "nzPageSize", "nzTotal"], [1, "m-r-8", "m-b-8"], ["nz-radio-button", "", "nzValue", "all"], ["nz-radio-button", "", "nzValue", "ongoing"], ["nz-radio-button", "", "nzValue", "stay"], ["nzSearch", "", 2, "width", "270px", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165"], ["suffixIconButton", ""], ["nz-button", "", "nzSearch", ""], ["nz-icon", "", "nzType", "search"], [3, "nzSrc"], [1, "list-content-item"], [3, "nzPercent", "nzStatus"], ["nz-list-item-actions", ""], [3, "click"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function StandardTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "nz-statistic", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "nz-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "nz-statistic", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nz-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "nz-statistic", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StandardTableComponent_ng_template_16_Template, 12, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u6DFB\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, StandardTableComponent_nz_list_item_23_Template, 36, 8, "nz-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-list-pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "nz-pagination", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 8)("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", "8\u4E2A\u4EFB\u52A1")("nzTitle", "\u6211\u7684\u5F85\u529E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 8)("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", "32\u5206\u949F")("nzTitle", "\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 8)("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", "24\u4E2A\u4EFB\u52A1")("nzTitle", "\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzExtra", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx.isSpinning);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPageIndex", 1)("nzPageSize", 5)("nzTotal", 50);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_1__.WaterMarkComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_4__.NzPaginationComponent, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_5__.NzProgressComponent, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_6__.NzStatisticComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuItemDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownADirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownMenuComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__.NzCardComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__.NzDividerComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioGroupComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListPaginationComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemMetaDescriptionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemMetaAvatarComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListItemActionComponent], styles: ["[_nghost-%COMP%]     .ant-statistic {\n  text-align: center;\n}\n[_nghost-%COMP%]     .ant-divider-vertical {\n  height: 56px;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .ant-divider-vertical {\n    display: none;\n  }\n}\n[_nghost-%COMP%]     .ant-input-group-wrapper {\n  width: inherit;\n}\n[_nghost-%COMP%]     .list-content-item {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .ant-progress {\n  width: 180px;\n}\n[_nghost-%COMP%]     .ant-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJkLXRhYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUFGO0FBQ0U7RUFBQTtJQUNFLGFBQUE7RUFFRjtBQUNGO0FBQ0E7RUFFSSxjQUFBO0FBQUo7QUFGQTtFQU1JLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFESjtBQVJBO0VBYUksWUFBQTtBQUZKO0FBWEE7RUFpQkksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6InN0YW5kYXJkLXRhYmxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5hbnQtc3RhdGlzdGljIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmFudC1pbnB1dC1ncm91cC13cmFwcGVyIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgfVxuXG4gIC5saXN0LWNvbnRlbnQtaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuYW50LXByb2dyZXNzIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAuYW50LWF2YXRhciB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 66684:
/*!******************************************************************************!*\
  !*** ./src/app/pages/page-demo/list/standard-table/standard-table.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardTableModule": () => (/* binding */ StandardTableModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _standard_table_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard-table-routing.module */ 78240);
/* harmony import */ var _standard_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standard-table.component */ 72508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class StandardTableModule {
}
StandardTableModule.ɵfac = function StandardTableModule_Factory(t) { return new (t || StandardTableModule)(); };
StandardTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StandardTableModule });
StandardTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _standard_table_routing_module__WEBPACK_IMPORTED_MODULE_1__.StandardTableRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StandardTableModule, { declarations: [_standard_table_component__WEBPACK_IMPORTED_MODULE_2__.StandardTableComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _standard_table_routing_module__WEBPACK_IMPORTED_MODULE_1__.StandardTableRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_list_standard-table_standard-table_module_ts.js.map