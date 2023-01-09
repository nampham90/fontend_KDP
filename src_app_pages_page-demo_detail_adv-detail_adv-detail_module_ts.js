"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_detail_adv-detail_adv-detail_module_ts"],{

/***/ 88958:
/*!********************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/adv-detail/adv-detail-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvDetailRoutingModule": () => (/* binding */ AdvDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _adv_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adv-detail.component */ 94118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _adv_detail_component__WEBPACK_IMPORTED_MODULE_0__.AdvDetailComponent, data: { title: 'Trang chi tiết nâng cao', key: 'adv-detail' } }];
class AdvDetailRoutingModule {
}
AdvDetailRoutingModule.ɵfac = function AdvDetailRoutingModule_Factory(t) { return new (t || AdvDetailRoutingModule)(); };
AdvDetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdvDetailRoutingModule });
AdvDetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94118:
/*!***************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/adv-detail/adv-detail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvDetailComponent": () => (/* binding */ AdvDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/popover */ 7773);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 27212);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/empty */ 44835);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 33610);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/steps */ 26952);

























const _c0 = ["headerExtra"];
const _c1 = ["headerContent"];
const _c2 = ["headerFooter"];
const _c3 = ["highLightTpl"];
function AdvDetailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-radio-group")(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u64CD\u4F5C\u4E00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u64CD\u4F5C\u4E8C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-dropdown-menu", null, 44)(9, "ul", 45)(10, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u9009\u9879\u4E00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u9009\u9879\u4E8C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u9009\u9879\u4E09");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u4E3B\u64CD\u4F5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r18)("nzPlacement", "bottomRight");
} }
const _c4 = function () { return { xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }; };
function AdvDetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "nz-descriptions", 50)(3, "nz-descriptions-item", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u66F2\u4E3D\u4E3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-descriptions-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "XX \u670D\u52A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-descriptions-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "2017-07-07");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-descriptions-item", 54)(10, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "12421");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nz-descriptions-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "2017-07-07 ~ 2017-08-08");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-descriptions-item", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 49)(17, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nz-statistic", 59)(19, "nz-statistic", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXXl", 20)("nzXl", 18)("nzLg", 18)("nzMd", 16)("nzSm", 24)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXXl", 4)("nzXl", 6)("nzLg", 6)("nzMd", 8)("nzSm", 24)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", 568.08);
} }
function AdvDetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tabset", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzSelectedIndexChange", function AdvDetailComponent_ng_template_5_Template_nz_tabset_nzSelectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.currentSelTab = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-tab", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzClick", function AdvDetailComponent_ng_template_5_Template_nz_tab_nzClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.to(ctx_r21.tabEnum.Detail)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-tab", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzClick", function AdvDetailComponent_ng_template_5_Template_nz_tab_nzClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.to(ctx_r22.tabEnum.Rule)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSelectedIndex", ctx_r5.currentSelTab);
} }
function AdvDetailComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u66F2\u4E3D\u4E3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "2016-12-12 12:32");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdvDetailComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u5468\u6BDB\u6BDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u50AC\u4E00\u4E0B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AdvDetailComponent_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AdvDetailComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdvDetailComponent_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dot_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPopoverContent", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", dot_r23);
} }
function AdvDetailComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u5434\u52A0\u53F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "nz-badge", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u8017\u65F6\uFF1A2\u5C0F\u65F625\u5206\u949F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AdvDetailComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " \u67D0\u67D0\u6570\u636E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 74);
} }
function AdvDetailComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-badge", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
} if (rf & 2) {
    const code_r27 = ctx.code;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u5E76\u4E14", code_r27, "\n");
} }
var TabEnum;
(function (TabEnum) {
    TabEnum[TabEnum["Detail"] = 0] = "Detail";
    TabEnum[TabEnum["Rule"] = 1] = "Rule";
})(TabEnum || (TabEnum = {}));
class AdvDetailComponent {
    constructor(cdr, breakpointObserver) {
        this.cdr = cdr;
        this.breakpointObserver = breakpointObserver;
        this.stepDirection = 'horizontal';
        this.pageHeaderInfo = {
            title: '',
            breadcrumb: [],
            extra: '',
            desc: '',
            footer: ''
        };
        this.tabEnum = TabEnum;
        this.currentSelTab = this.tabEnum.Detail;
        this.returnDataList = [
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '演示作用域',
                unitPrice: 1233333,
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '演示作用域',
                unitPrice: 1233333,
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '演示作用域',
                unitPrice: 1233333,
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '演示作用域',
                unitPrice: 1233333,
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '演示作用域',
                unitPrice: 1233333,
                number: '1',
                price: '2.00'
            }
        ];
    }
    to(tabIndex) {
        this.currentSelTab = tabIndex;
        this.cdr.detectChanges();
    }
    initReturnTable() {
        this.returnTableConfig = {
            showCheckbox: false,
            headers: [
                {
                    title: '操作类型',
                    field: 'num',
                    width: 50
                },
                {
                    title: '操作人',
                    width: 60,
                    field: 'name'
                },
                {
                    title: '执行结果',
                    width: 50,
                    field: 'code',
                    tdTemplate: this.highLightTpl
                },
                {
                    title: '操作时间',
                    width: 50,
                    field: 'unitPrice',
                    pipe: 'date:yyyy-MM-dd HH:mm'
                },
                {
                    title: '备注',
                    width: 50,
                    field: 'number'
                }
            ],
            xScroll: 500,
            total: 0,
            loading: false,
            pageSize: 10,
            pageIndex: 1
        };
    }
    ngOnInit() {
        this.breakpointObserver.observe(['(max-width: 770px)']).subscribe(result => {
            if (result.matches) {
                this.stepDirection = 'vertical';
            }
            else {
                this.stepDirection = 'horizontal';
            }
        });
        this.initReturnTable();
    }
    ngAfterViewInit() {
        this.pageHeaderInfo = {
            title: '单号：234231029431',
            breadcrumb: ['首页', '详情页', '高级详情页'],
            extra: this.headerExtra,
            desc: this.headerContent,
            footer: this.headerFooter
        };
    }
}
AdvDetailComponent.ɵfac = function AdvDetailComponent_Factory(t) { return new (t || AdvDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver)); };
AdvDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdvDetailComponent, selectors: [["app-adv-detail"]], viewQuery: function AdvDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerExtra = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerFooter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.highLightTpl = _t.first);
    } }, decls: 84, vars: 15, consts: [[3, "pageHeaderInfo"], ["headerExtra", ""], ["headerContent", ""], ["headerFooter", ""], [1, "normal-table-wrap"], [3, "nzTitle"], [3, "nzDirection", "nzCurrent", "nzProgressDot"], ["nzTitle", "\u521B\u5EFA\u9879\u76EE", 3, "nzDescription"], ["nzTitle", "\u90E8\u95E8\u521D\u5BA1", 3, "nzDescription"], ["nzTitle", "\u8D22\u52A1\u590D\u6838"], ["nzTitle", "\u5B8C\u6210"], ["createTpl", ""], ["trialTpl", ""], ["progressTemplate", ""], ["trialPopTpl", ""], [1, "m-t-20", 3, "nzTitle"], ["nzTitle", "\u7528\u6237\u59D3\u540D"], ["nzTitle", "\u4F1A\u5458\u5361\u53F7"], ["nzTitle", "\u8EAB\u4EFD\u8BC1"], ["nzTitle", "\u8054\u7CFB\u65B9\u5F0F"], ["nzTitle", "\u8054\u7CFB\u5730\u5740", 3, "nzSpan"], ["nzTitle", "\u4FE1\u606F\u7EC4", 1, "m-t-20"], ["nzTitle", "\u67D0\u67D0\u6570\u636E"], ["nzTitle", "\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4"], ["dataTitleTpl", ""], [1, "m-t-20"], ["nzType", "inner", "nzTitle", "\u591A\u5C42\u7EA7\u4FE1\u606F\u7EC4", 1, "m-t-20"], ["nzTitle", "\u7EC4\u540D\u79F0"], ["nzTitle", "\u8D1F\u8D23\u4EBA"], ["nzTitle", "\u89D2\u8272\u7801"], ["nzTitle", "\u6240\u5C5E\u90E8\u95E8"], ["nzTitle", "\u8FC7\u671F\u65F6\u95F4"], ["nzTitle", "\u63CF\u8FF0", 3, "nzSpan"], ["nzTitle", "\u7EC4\u540D\u79F0", 3, "nzColumn"], ["nzTitle", "\u5B66\u540D"], ["nzSize", "large"], ["nzTitle", "\u64CD\u4F5C\u65E5\u5FD7\u4E00"], ["nzTitle", "\u64CD\u4F5C\u65E5\u5FD7\u4E8C"], ["nzTitle", "\u64CD\u4F5C\u65E5\u5FD7\u4E09"], [3, "tableConfig", "tableData"], ["highLightTpl", ""], ["nz-radio-button", ""], ["nz-radio-button", "", "nz-dropdown", "", 3, "nzDropdownMenu", "nzPlacement"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", ""], ["nz-button", "", "nzType", "primary"], ["nz-row", ""], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzSize", "small", 3, "nzColumn"], ["nzTitle", "\u521B\u5EFA\u4EBA"], ["nzTitle", "\u8BA2\u8D2D\u4EA7\u54C1"], ["nzTitle", "\u521B\u5EFA\u65F6\u95F4"], ["nzTitle", "\u5173\u8054\u5355\u636E"], [1, "operate-text"], ["nzTitle", "\u751F\u6548\u65E5\u671F"], ["nzTitle", "\u5907\u6CE8"], [1, "left-start-center"], ["nzTitle", "\u72B6\u6001", "nzValue", "\u5F85\u5BA1\u6279", 1, "m-r-25"], ["nzTitle", "\u8BA2\u5355\u91D1\u989D", "nzPrefix", "\u00A5", 3, "nzValue"], [3, "nzSelectedIndex", "nzSelectedIndexChange"], ["nzTitle", "\u8BE6\u60C5", 3, "nzClick"], ["nzTitle", "\u89C4\u5219", 3, "nzClick"], [1, "m-r-8"], ["nz-icon", "", "nzType", "dingding", "nzTheme", "outline"], ["nz-icon", "", "nzType", "dingding", "nzTheme", "outline", 2, "color", "rgb(0, 160, 233)"], ["nz-popover", "", 2, "margin-left", "-100%", 3, "nzPopoverContent"], [3, "ngTemplateOutlet"], [2, "width", "160px"], [1, "flex"], [1, "flex-1"], ["nzStatus", "default", "nzText", "\u672A\u54CD\u5E94"], [1, "mt5"], ["nz-tooltip", "", "nzTooltipTitle", "\u6570\u636E\u8BF4\u660E", "nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 1, "title-icon"], ["nzStatus", "processing", "nzText", "\u6210\u529F"]], template: function AdvDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdvDetailComponent_ng_template_1_Template, 18, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdvDetailComponent_ng_template_3_Template, 20, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdvDetailComponent_ng_template_5_Template, 3, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-steps", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nz-step", 7)(12, "nz-step", 8)(13, "nz-step", 9)(14, "nz-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AdvDetailComponent_ng_template_15_Template, 6, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdvDetailComponent_ng_template_17_Template, 7, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AdvDetailComponent_ng_template_19_Template, 2, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AdvDetailComponent_ng_template_21_Template, 7, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-descriptions")(26, "nz-descriptions-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u4ED8\u5C0F\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-descriptions-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "32943898021309809423");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-descriptions-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "3321944288191034921");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "nz-descriptions-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "18112345678");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-descriptions-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u66F2\u4E3D\u4E3D 18100000000 \u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u9EC4\u59D1\u5C71\u8DEF\u5DE5\u4E13\u8DEF\u4EA4\u53C9\u8DEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-descriptions", 21)(37, "nz-descriptions-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "725");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "2017-08-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "nz-descriptions-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "725");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "2017-08-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AdvDetailComponent_ng_template_45_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\u4FE1\u606F\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "nz-card", 26)(50, "nz-descriptions", 27)(51, "nz-descriptions-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\u6797\u4E1C\u4E1C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "nz-descriptions-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "1234567");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "nz-descriptions-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "XX\u516C\u53F8 - YY\u90E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "nz-descriptions-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "2017-08-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "nz-descriptions-item", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\u8FD9\u6BB5\u63CF\u8FF0\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-descriptions", 33)(63, "nz-descriptions-item", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Citrullus lanatus (Thunb.) Matsum. et Nakai\u4E00\u5E74\u751F\u8513\u751F\u85E4\u672C\uFF1B\u830E\u3001\u679D\u7C97\u58EE\uFF0C\u5177\u660E\u663E\u7684\u68F1\u3002\u5377\u987B\u8F83\u7C97..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "nz-descriptions", 27)(67, "nz-descriptions-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\u4ED8\u5C0F\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "nz-descriptions-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "1234568");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "nz-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "app-water-mark")(73, "nz-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "nz-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "nz-card-tab")(77, "nz-tabset", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "nz-tab", 36)(79, "nz-tab", 37)(80, "nz-tab", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "app-ant-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, AdvDetailComponent_ng_template_82_Template, 2, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", "\u6D41\u7A0B\u8FDB\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDirection", ctx.stepDirection)("nzCurrent", 1)("nzProgressDot", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDescription", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDescription", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", "\u7528\u6237\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColumn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", "\u7528\u6237\u8FD1\u534A\u5E74\u6765\u7535\u8BB0\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableConfig", ctx.returnTableConfig)("tableData", ctx.returnDataList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_1__.AntTableComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__.WaterMarkComponent, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_6__.NzPopoverDirective, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_7__.NzStatisticComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__.NzMenuItemDirective, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_15__.NzBadgeComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropdownMenuComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__.NzCardComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__.NzCardTabComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioGroupComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__.NzEmptyComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__.NzDescriptionsItemComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_23__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_23__.NzStepComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHYtZGV0YWlsLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 31260:
/*!************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/adv-detail/adv-detail.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvDetailModule": () => (/* binding */ AdvDetailModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _adv_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adv-detail-routing.module */ 88958);
/* harmony import */ var _adv_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adv-detail.component */ 94118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class AdvDetailModule {
}
AdvDetailModule.ɵfac = function AdvDetailModule_Factory(t) { return new (t || AdvDetailModule)(); };
AdvDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdvDetailModule });
AdvDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _adv_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvDetailRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdvDetailModule, { declarations: [_adv_detail_component__WEBPACK_IMPORTED_MODULE_2__.AdvDetailComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _adv_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvDetailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_detail_adv-detail_adv-detail_module_ts.js.map