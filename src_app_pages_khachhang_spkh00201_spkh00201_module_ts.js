"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_khachhang_spkh00201_spkh00201_module_ts"],{

/***/ 63861:
/*!***********************************************************************!*\
  !*** ./src/app/pages/khachhang/spkh00201/spkh00201-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spkh00201RoutingModule": () => (/* binding */ Spkh00201RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _spkh00201_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spkh00201.component */ 59945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _spkh00201_component__WEBPACK_IMPORTED_MODULE_0__.Spkh00201Component, data: { title: 'Chi tiết công nợ', key: 'spkh00201' } }
];
class Spkh00201RoutingModule {
}
Spkh00201RoutingModule.ɵfac = function Spkh00201RoutingModule_Factory(t) { return new (t || Spkh00201RoutingModule)(); };
Spkh00201RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Spkh00201RoutingModule });
Spkh00201RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Spkh00201RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59945:
/*!******************************************************************!*\
  !*** ./src/app/pages/khachhang/spkh00201/spkh00201.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spkh00201Component": () => (/* binding */ Spkh00201Component)
/* harmony export */ });
/* harmony import */ var _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/UrlDisplay */ 22155);
/* harmony import */ var _app_config_actionCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/config/actionCode */ 22195);
/* harmony import */ var _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/system/base/base.component */ 13951);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _app_core_services_http_khachhang_khachhang_dto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/http/khachhang/khachhang-dto.service */ 60976);
/* harmony import */ var _app_core_services_http_nhatkykh_nhatkykh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/http/nhatkykh/nhatkykh.service */ 79610);
/* harmony import */ var _app_core_services_http_khachhang_khachhang_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/http/khachhang/khachhang.service */ 57087);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_components_input_currency_input_currency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/input-currency/input-currency.component */ 38300);
/* harmony import */ var _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/auth.directive */ 35656);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
































const _c0 = ["operationTpl"];
const _c1 = ["noidungdonhangTpl"];
const _c2 = ["sotienTpl"];
const _c3 = ["endSoplnDate"];
function Spkh00201Component_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_ng_template_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.searchKhachhangClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", "primary")("disabled", ctx_r1.btnshowmodalkh);
} }
function Spkh00201Component_ng_template_70_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_ng_template_70_span_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21); const idphieunhaphang_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).idphieunhaphang; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.thanhtoan(idphieunhaphang_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Thanh to\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", showBtn_r15["disabledBtnthanhtoan"]);
} }
function Spkh00201Component_ng_template_70_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, Spkh00201Component_ng_template_70_span_0_button_1_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !showBtn_r15["btnthanhtoan"]);
} }
function Spkh00201Component_ng_template_70_span_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_ng_template_70_span_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27); const id_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).id; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.duyetthanhtoan(id_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Duy\u1EC7t");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function Spkh00201Component_ng_template_70_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, Spkh00201Component_ng_template_70_span_1_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !showBtn_r15["btnduyet"]);
} }
function Spkh00201Component_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, Spkh00201Component_ng_template_70_span_0_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, Spkh00201Component_ng_template_70_span_1_Template, 2, 1, "span", 37);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appAuth", ctx_r4.ActionCode.CtcnThanhtoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appAuth", ctx_r4.ActionCode.CtcnDuyetThanhtoan);
} }
function Spkh00201Component_ng_template_72_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idphieunhaphang_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().idphieunhaphang;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](idphieunhaphang_r29["noidungdonhang"]);
} }
function Spkh00201Component_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, Spkh00201Component_ng_template_72_ng_container_0_Template, 3, 1, "ng-container", 43);
} if (rf & 2) {
    const idphieunhaphang_r29 = ctx.idphieunhaphang;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", idphieunhaphang_r29);
} }
function Spkh00201Component_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sotien_r32 = ctx.sotien;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, sotien_r32 * 1000, "VND"));
} }
function Spkh00201Component_ng_template_76_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_ng_template_76_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r35.tattoan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " T\u1EA5t to\u00E1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r33.btntattoan);
} }
function Spkh00201Component_ng_template_76_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_ng_template_76_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.thanhtoanmotphan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Thanh to\u00E1n m\u1ED9t ph\u1EA7n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r34.btnthanhtoanmotphan);
} }
function Spkh00201Component_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, Spkh00201Component_ng_template_76_button_0_Template, 3, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, Spkh00201Component_ng_template_76_button_1_Template, 3, 1, "button", 45);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appAuth", ctx_r10.ActionCode.CtcnTattoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appAuth", ctx_r10.ActionCode.CtcnThantoanmotphan);
} }
const _c4 = function () { return { "padding-bottom": 0 }; };
const _c5 = function () { return { xs: 8, sm: 16, md: 24 }; };
class showbtnTable {
    constructor() {
        this.btnthanhtoan = false;
        this.btnduyet = false;
        this.disabledBtnthanhtoan = false;
    }
}
class Spkh00201Component extends _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(webService, router, cdf, datePipe, message, modalSrv, khdtoService, dataService, khachhangService) {
        super(webService, router, cdf, datePipe);
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.message = message;
        this.modalSrv = modalSrv;
        this.khdtoService = khdtoService;
        this.dataService = dataService;
        this.khachhangService = khachhangService;
        this.searchParam = {};
        this.dateFormat = src_app_common_const__WEBPACK_IMPORTED_MODULE_4__.dateFormat;
        this.dataList = [];
        this.checkedCashArray = [];
        this.ActionCode = _app_config_actionCode__WEBPACK_IMPORTED_MODULE_1__.ActionCode;
        this.DisplayScreenID = _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_0__.UrlDisplayId.spkh00201;
        this.availableOptions = [];
        this.pageHeaderInfo = {
            title: 'Chi tiết công nợ',
            breadcrumb: ['Home', 'Khách Hàng', 'Chi tiết công nợ']
        };
        this.btnshowmodalkh = false;
        this.btntattoan = false;
        this.btnthanhtoanmotphan = false;
        this.btnsearch = false;
        this.idkhachhang = "";
        this.tenkhachhang = "";
        this.sotienno = 0;
        this.status = '0';
        this.phanloai = 'Nợ'; // 1 Nợ, 2 đã thanh toán, 3 tất toán
        this.disabledStartSoplnDate = (startValue) => {
            if (!startValue || !this.ngayketthuc) {
                return false;
            }
            const date = new Date(this.ngayketthuc);
            return startValue.getTime() > date.getTime();
        };
        this.disabledEndSoplnDate = (endValue) => {
            if (!endValue || !this.ngaybatdau) {
                return false;
            }
            const date = new Date(this.ngaybatdau);
            return endValue.getTime() <= date.getTime();
        };
    }
    fnInit() {
        this.cdf.markForCheck();
    }
    destroy() { }
    changeSotienno($event) { this.sotienno = $event; }
    handleStartOpenSoplnChange(open) {
        if (!open) {
            this.endSoplnDate.open();
        }
    }
    handleEndOpenSoplnChange(open) { }
    ngOnInit() {
        // check khach hàng dto service 
        // if kbnflg = true => show id khach khách , tên khach hang, tong nợ, danh sach chi tiên nợ.
        // if kbnflg = false => show button modal khach hang để  lấy thông tin khách hàng. dataList = [];
        // search từ ngày đến ngày. search chi tiêt trả. chi tiêt nơ. mặt định chu kỳ nợ = 0
        // search chu ký nợ = 1. những nợ đã tất toán.
        // search có ghi chú là tất toán.
        if (this.khdtoService.kbnflg === false) {
            this.ngaybatdau = this.getDate();
            this.ngayketthuc = null;
            this.btnshowmodalkh = false;
            this.idkhachhang = "";
            this.tenkhachhang = "";
            this.sotienno = 0;
            this.status = '0';
            this.btntattoan = true;
            this.btnthanhtoanmotphan = true;
            this.btnsearch = true;
        }
        else {
            this.btnshowmodalkh = true;
            this.idkhachhang = this.khdtoService.id;
            this.tenkhachhang = this.khdtoService.name;
            this.sotienno = this.khdtoService.sotienno;
            this.status = '0';
            this.btntattoan = false;
            this.btnthanhtoanmotphan = false;
            this.btnsearch = false;
        }
        // lay ngay giơ mặc chua
        this.initTable();
        this.cdf.markForCheck();
    }
    getDataList(e) {
        if (this.khdtoService.kbnflg === false) {
            this.dataList = [];
            this.tableLoading(false);
        }
        else {
            this.tableLoading(true);
            this.searchParam.ngaybatdau = this.formatDate(this.ngaybatdau);
            this.searchParam.ngayketthuc = this.formatDate(this.ngayketthuc);
            this.searchParam.iduser = this.idkhachhang;
            this.searchParam.trangthai = lodash__WEBPACK_IMPORTED_MODULE_3___default().toNumber(this.status);
            this.searchParam.ghichu = this.phanloai;
            const params = {
                pageSize: this.tableConfig.pageSize,
                pageNum: e?.pageIndex || this.tableConfig.pageIndex,
                filters: this.searchParam
            };
            this.dataService.getlists(params)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => {
                this.tableLoading(false);
            }))
                .subscribe(data => {
                console.log(data);
                const { list, total, pageNum } = data;
                this.dataList = [...list];
                for (let element of this.dataList) {
                    let showbtn = this.showBtnTable(element.trangthai);
                    element['showBtn'] = showbtn;
                    if (element.ghichu == 'Đã thanh toán') {
                        element['showBtn'].disabledBtnthanhtoan = true;
                    }
                }
                this.tableConfig.total = total;
                this.tableConfig.pageIndex = pageNum;
                this.tableLoading(false);
                this.checkedCashArray = [...this.checkedCashArray];
                this.showbtn();
            });
        }
    }
    // 
    showbtn() {
        if (this.dataList.length > 0 && this.khdtoService.sotienno > 0) {
            this.btntattoan = false;
            this.btnthanhtoanmotphan = false;
        }
        else {
            this.btntattoan = true;
            this.btnthanhtoanmotphan = true;
        }
    }
    // show btn table
    showBtnTable(trangthai) {
        let btn = new showbtnTable();
        switch (trangthai) {
            case 0:
                {
                    btn.btnthanhtoan = false;
                    btn.btnduyet = true;
                }
                ;
                break;
            case 1:
                {
                    btn.btnthanhtoan = true;
                    btn.btnduyet = false;
                }
                ;
                break;
            case 2: {
                btn.btnduyet = true;
                btn.btnthanhtoan = true;
            }
        }
        return btn;
    }
    // thanh toán một đơn hàng
    thanhtoan(pnh) {
        this.modalSrv.confirm({
            nzTitle: 'Bạn có chắc chắn muốn thanh toán đơn hàng này?',
            nzContent: 'Nhấn OK để hoàn thành',
            nzOnOk: () => {
                let req = {
                    "iduser": this.khdtoService.id,
                    "idphieunhaphang": pnh['_id']
                };
                this.tableConfig.loading = true;
                this.dataService.thanhtoan(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => {
                    this.tableLoading(false);
                }))
                    .subscribe(res => {
                    if (res == 1) {
                        this.message.info("Thanh Toán thành công !");
                        // get detail khach hang
                        this.getDetailKhachhang();
                    }
                    else {
                        this.message.info(" Phát sinh lỗi trong quá trình thanh toán");
                    }
                    this.getDataList();
                    this.tableLoading(false);
                });
            }
        });
    }
    // duyet thanh toán
    duyetthanhtoan(id) {
    }
    // tất toán tất cả các đơn hàng
    tattoan() {
        this.modalSrv.confirm({
            nzTitle: 'Bạn có chắc chắn muốn Tất toán?',
            nzContent: 'Nhấn OK để hoàn thành',
            nzOnOk: () => {
                this.tableLoading(true);
                let req = {
                    iduser: this.khdtoService.id,
                    sotientra: this.khdtoService.sotienno
                };
                this.dataService.tatToan(req).pipe().subscribe(() => {
                    this.getDetailKhachhang();
                    this.getDataList();
                    this.resetForm();
                }, error => this.tableLoading(false));
            }
        });
    }
    // get detail khach hang
    getDetailKhachhang() {
        // get detail khach hang
        this.khachhangService.getDetail(this.khdtoService.id)
            .pipe()
            .subscribe(res => {
            console.log(res);
            this.sotienno = res.sotienno;
            this.khdtoService.sotienno = res.sotienno;
        });
    }
    // thanh toán các đơn hàng được chọn
    thanhtoanmotphan() {
        let listIdPN = [];
        for (let element of this.dataList) {
            if (element['_checked'] == true) {
                listIdPN.push(element['idphieunhaphang']['_id']);
            }
        }
        if (listIdPN.length == 0) {
            this.message.info(" Vùi lòng chọn ít nhất một đơn hàng để thanh toán");
            return;
        }
        else {
            this.modalSrv.confirm({
                nzTitle: 'Bạn có chắc chắn muốn thanh toán không ?',
                nzContent: 'Nhấn OK để hoàn thành việc thanh toán',
                nzOnOk: () => {
                    let req = {
                        "iduser": this.khdtoService.id,
                        "listidpn": listIdPN
                    };
                    this.tableLoading(true);
                    this.dataService.thanhtoanmotphan(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => {
                        this.tableLoading(false);
                    }))
                        .subscribe(res => {
                        if (res == 1) {
                            this.message.info("Thực hiện thành công !");
                            // get detail khach hang
                            this.getDetailKhachhang();
                        }
                        else {
                            this.message.info("không thể thanh toán !");
                        }
                        this.getDataList();
                        this.tableLoading(false);
                    });
                }
            });
        }
    }
    resetForm() { }
    fnFocusOutKhachhang() { }
    searchKhachhangClick() { }
    reloadTable() {
        this.message.info('Đã được làm mới');
        this.getDataList();
    }
    tableChangeDectction() {
        this.dataList = [...this.dataList];
        this.cdf.detectChanges();
    }
    tableLoading(isLoading) {
        this.tableConfig.loading = isLoading;
        this.tableChangeDectction();
    }
    selectedChecked(e) {
        this.checkedCashArray = [...e];
    }
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }
    initTable() {
        this.tableConfig = {
            showCheckbox: true,
            headers: [
                {
                    title: 'Ngày',
                    field: 'ngay',
                    width: 150,
                    pipe: 'date:yyyy-MM-dd HH:mm',
                },
                {
                    title: 'Trang Thái',
                    width: 180,
                    field: 'trangthai',
                },
                {
                    title: 'Số tiền',
                    width: 120,
                    field: 'sotien',
                    tdTemplate: this.sotienTpl
                },
                {
                    title: 'Nội dung đơn hàng',
                    width: 450,
                    field: 'idphieunhaphang',
                    tdTemplate: this.noidungdonhangTpl
                },
                {
                    title: 'Hình thức thánh toán',
                    width: 200,
                    field: 'hinhthucthanhtoan',
                },
                {
                    title: 'Ghi chú',
                    width: 150,
                    field: 'ghichu',
                },
                {
                    title: 'Hành động',
                    tdTemplate: this.operationTpl,
                    width: 250,
                    fixed: true,
                    fixedDir: 'right'
                }
            ],
            total: 0,
            loading: true,
            pageSize: 10,
            pageIndex: 1
        };
    }
}
Spkh00201Component.ɵfac = function Spkh00201Component_Factory(t) { return new (t || Spkh00201Component)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_5__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_18__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_http_khachhang_khachhang_dto_service__WEBPACK_IMPORTED_MODULE_6__.KhachhangDtoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_http_nhatkykh_nhatkykh_service__WEBPACK_IMPORTED_MODULE_7__.NhatkykhService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_core_services_http_khachhang_khachhang_service__WEBPACK_IMPORTED_MODULE_8__.KhachhangService)); };
Spkh00201Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: Spkh00201Component, selectors: [["app-spkh00201"]], viewQuery: function Spkh00201Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.noidungdonhangTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sotienTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.endSoplnDate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 78, vars: 146, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzHoverable", "", 1, "m-b-10", 3, "nzBodyStyle"], ["nz-form", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 1, "inputIcon", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzSearch", "", 3, "nzAddOnAfter"], ["name", "idkhachhang", "type", "text", "nz-input", "", "placeholder", "", "readonly", "", 3, "ngModel", "ngModelChange", "blur"], ["suffixIconButtonKhachhang", ""], ["nzFor", "", 1, "fix-inputIcon", 3, "nzNoColon"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", "nzFor"], [3, "Amount", "Disable", "changeAmount"], ["nz-col", "", 1, "text-right", "p-0", "m-b-10", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nz-button", "", 3, "nzType", "disabled", "click"], ["nz-icon", "", "nzType", "search"], ["nz-button", "", 1, "m-l-15", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nzRequired", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", "nzFor"], ["name", "ngaybatdau", 3, "nzDisabledDate", "nzFormat", "ngModel", "nzPlaceHolder", "ngModelChange", "nzOnOpenChange"], ["name", "ngayketthuc", 3, "nzDisabledDate", "nzFormat", "ngModel", "nzPlaceHolder", "ngModelChange", "nzOnOpenChange"], ["endSoplnDate", ""], ["id", "status", "name", "status", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "0"], ["nz-radio", "", "nzValue", "1"], ["id", "phanloai", "name", "phanloai", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "N\u1EE3"], ["nz-radio", "", "nzValue", "\u0110\u00E3 thanh to\u00E1n"], ["nz-radio", "", "nzValue", "T\u1EA5t to\u00E1n"], [3, "tableTitle", "btnTpl", "reload"], [3, "checkedCashArrayFromComment", "tableConfig", "tableData", "selectedChange", "changePageSize", "changePageNum"], ["operationTpl", ""], ["noidungdonhangTpl", ""], ["sotienTpl", ""], ["tableBtns", ""], ["nz-button", "", 1, "bg-icon", 3, "nzType", "disabled", "click"], ["class", "operate-text", 4, "appAuth"], [1, "operate-text"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", "class", "m-r-8", 3, "disabled", "click", 4, "appAuth"], ["nz-button", "", "nzType", "default", 3, "disabled", "click", 4, "appAuth"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", 3, "disabled", "click"], ["nz-icon", "", "nzType", "money-collect", "nzTheme", "twotone"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function Spkh00201Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "nz-form-item")(7, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "M\u00E3 kh\u00E1ch h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "nz-form-control", 6)(10, "nz-input-group", 7)(11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function Spkh00201Component_Template_input_ngModelChange_11_listener($event) { return ctx.idkhachhang = $event; })("blur", function Spkh00201Component_Template_input_blur_11_listener() { return ctx.fnFocusOutKhachhang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, Spkh00201Component_ng_template_12_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "nz-form-label", 10)(15, "span")(16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 11)(19, "nz-form-item")(20, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "S\u1ED1 ti\u1EC1n n\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "nz-form-control", 6)(23, "app-input-currency", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("changeAmount", function Spkh00201Component_Template_app_input_currency_changeAmount_23_listener($event) { return ctx.changeSotienno($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_Template_button_click_25_listener() { return ctx.getDataList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, " T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function Spkh00201Component_Template_button_click_28_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, " L\u00E0m m\u1EDBi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 4)(32, "div", 11)(33, "nz-form-item")(34, "nz-form-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "Ng\u00E0y b\u1EAFt \u0111\u1EA7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "nz-form-control", 6)(37, "nz-date-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function Spkh00201Component_Template_nz_date_picker_ngModelChange_37_listener($event) { return ctx.ngaybatdau = $event; })("nzOnOpenChange", function Spkh00201Component_Template_nz_date_picker_nzOnOpenChange_37_listener($event) { return ctx.handleStartOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 11)(39, "nz-form-item")(40, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "Ng\u00E0y k\u1EBFt th\u00FAc");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "nz-form-control", 6)(43, "nz-date-picker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function Spkh00201Component_Template_nz_date_picker_ngModelChange_43_listener($event) { return ctx.ngayketthuc = $event; })("nzOnOpenChange", function Spkh00201Component_Template_nz_date_picker_nzOnOpenChange_43_listener($event) { return ctx.handleEndOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 4)(46, "div", 11)(47, "nz-form-item")(48, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Tr\u1EA1ng th\u00E1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "nz-form-control", 6)(51, "nz-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function Spkh00201Component_Template_nz_radio_group_ngModelChange_51_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, " \u0110\u01A1n h\u00E0ng n\u1EE3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, " \u0110\u01A1n h\u00E0ng tr\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 11)(57, "nz-form-item")(58, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "Ph\u00E2n lo\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "nz-form-control", 6)(61, "nz-radio-group", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function Spkh00201Component_Template_nz_radio_group_ngModelChange_61_listener($event) { return ctx.phanloai = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "N\u1EE3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "\u0110\u00E3 thanh to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "T\u1EA5t to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "app-card-table-wrap", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("reload", function Spkh00201Component_Template_app_card_table_wrap_reload_68_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "app-ant-table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectedChange", function Spkh00201Component_Template_app_ant_table_selectedChange_69_listener($event) { return ctx.selectedChecked($event); })("changePageSize", function Spkh00201Component_Template_app_ant_table_changePageSize_69_listener($event) { return ctx.changePageSize($event); })("changePageNum", function Spkh00201Component_Template_app_ant_table_changePageNum_69_listener($event) { return ctx.getDataList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](70, Spkh00201Component_ng_template_70_Template, 2, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](72, Spkh00201Component_ng_template_72_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](74, Spkh00201Component_ng_template_74_Template, 3, 4, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, Spkh00201Component_ng_template_76_Template, 2, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](142, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](143, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.idkhachhang);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzNoColon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.tenkhachhang);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("Amount", ctx.sotienno)("Disable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", "primary")("disabled", ctx.btnsearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](144, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzDisabledDate", ctx.disabledStartSoplnDate)("nzFormat", ctx.dateFormat)("ngModel", ctx.ngaybatdau)("nzPlaceHolder", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzDisabledDate", ctx.disabledEndSoplnDate)("nzFormat", ctx.dateFormat)("ngModel", ctx.ngayketthuc)("nzPlaceHolder", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](145, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 15)("nzXl", 15)("nzLg", 15)("nzMd", 15)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzXXl", 15)("nzXl", 15)("nzLg", 15)("nzMd", 15)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.phanloai);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tableTitle", "K\u1EBFt qu\u1EA3 t\u00ECm ki\u1EBFm")("btnTpl", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checkedCashArrayFromComment", ctx.checkedCashArray)("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__.PageHeaderComponent, _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_10__.AntTableComponent, _shared_components_input_currency_input_currency_component__WEBPACK_IMPORTED_MODULE_11__.InputCurrencyComponent, _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_12__.AuthDirective, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_13__.CardTableWrapComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputGroupComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_28__.NzCardComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioGroupComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGtoMDAyMDEuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 10306:
/*!***************************************************************!*\
  !*** ./src/app/pages/khachhang/spkh00201/spkh00201.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spkh00201Module": () => (/* binding */ Spkh00201Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _spkh00201_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spkh00201-routing.module */ 63861);
/* harmony import */ var _spkh00201_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spkh00201.component */ 59945);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class Spkh00201Module {
}
Spkh00201Module.ɵfac = function Spkh00201Module_Factory(t) { return new (t || Spkh00201Module)(); };
Spkh00201Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Spkh00201Module });
Spkh00201Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _spkh00201_routing_module__WEBPACK_IMPORTED_MODULE_0__.Spkh00201RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Spkh00201Module, { declarations: [_spkh00201_component__WEBPACK_IMPORTED_MODULE_1__.Spkh00201Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _spkh00201_routing_module__WEBPACK_IMPORTED_MODULE_0__.Spkh00201RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_khachhang_spkh00201_spkh00201_module_ts.js.map