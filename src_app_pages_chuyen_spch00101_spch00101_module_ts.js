"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_chuyen_spch00101_spch00101_module_ts"],{

/***/ 267:
/*!********************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00101/spch00101-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00101RoutingModule": () => (/* binding */ Spch00101RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _spch00101_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spch00101.component */ 40637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _spch00101_component__WEBPACK_IMPORTED_MODULE_0__.Spch00101Component, data: { title: 'Quản lý chuyến', key: 'spch00101' } }
];
class Spch00101RoutingModule {
}
Spch00101RoutingModule.ɵfac = function Spch00101RoutingModule_Factory(t) { return new (t || Spch00101RoutingModule)(); };
Spch00101RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Spch00101RoutingModule });
Spch00101RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Spch00101RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 40637:
/*!***************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00101/spch00101.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00101Component": () => (/* binding */ Spch00101Component)
/* harmony export */ });
/* harmony import */ var _app_config_actionCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/config/actionCode */ 22195);
/* harmony import */ var _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/system/base/base.component */ 13951);
/* harmony import */ var _app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/pipes/map.pipe */ 78877);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _app_pages_system_account_dept_tree_dept_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/system/account/dept-tree/dept-tree.service */ 80257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/common/UrlDisplay */ 22155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _app_widget_modal_subwindowxe_subwindow_xe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/widget/modal/subwindowxe/subwindow-xe.service */ 98699);
/* harmony import */ var _app_widget_modal_subwindowtaixe_subwindow_taixe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/widget/modal/subwindowtaixe/subwindow-taixe.service */ 18113);
/* harmony import */ var _app_widget_modal_subwindowchuyen_subwindow_chuyen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/widget/modal/subwindowchuyen/subwindow-chuyen.service */ 30581);
/* harmony import */ var _app_widget_modal_subwindowchiphi_subwindow_chiphi_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/widget/modal/subwindowchiphi/subwindow-chiphi.service */ 97313);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _services_chuyen_chuyen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/chuyen/chuyen.service */ 42996);
/* harmony import */ var _app_core_services_http_chuyen_chuyendto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/services/http/chuyen/chuyendto.service */ 69386);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/directives/auth.directive */ 35656);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);




































const _c0 = ["Tlbiensoxe"];
const _c1 = ["Tltentai"];
const _c2 = ["Tltenphu"];
const _c3 = ["operationTpl"];
const _c4 = ["tienduatruocTpl"];
const _c5 = ["endSoplnDate"];
function Spch00101Component_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r22.searchTaixeClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzType", "primary");
} }
function Spch00101Component_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r24.searchPhuxeClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzType", "primary");
} }
function Spch00101Component_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_60_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r26.searchBiensoxeClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzType", "primary");
} }
function Spch00101Component_nz_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const lst_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzLabel", lst_r28["lable"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzValue", lst_r28["value"]);
} }
function Spch00101Component_ng_template_75_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r41.edit(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "C\u1EADp nh\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_0_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnUpdate"]);
} }
function Spch00101Component_ng_template_75_span_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r48); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r46.del(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_1_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnDelete"]);
} }
function Spch00101Component_ng_template_75_span_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r53); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r51.confirmbochang(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Ho\u00E0n th\u00E0nh b\u00F3c h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_2_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnConfirmbochang"]);
} }
function Spch00101Component_ng_template_75_span_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r58); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r56.confirmtrahang(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Ho\u00E0n th\u00E0nh tr\u1EA3 h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_3_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnConfirmtrahang"]);
} }
function Spch00101Component_ng_template_75_span_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r63); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r61.confirmchiphi(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "T\u00EDnh chi ph\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_4_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnConfirmchiphi"]);
} }
function Spch00101Component_ng_template_75_span_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_75_span_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r68); const id_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).id; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r66.confirmend(id_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "K\u1EBFt th\u00FAc chuy\u1EBFn h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_75_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_5_button_1_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const showBtn_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().showBtn;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["btnConfirmend"]);
} }
function Spch00101Component_ng_template_75_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const tongcuoc_r31 = ctx_r70.tongcuoc;
    const tongchiphi_r32 = ctx_r70.tongchiphi;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" TC: ", tongcuoc_r31, " | CP: ", tongchiphi_r32, " ");
} }
function Spch00101Component_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, Spch00101Component_ng_template_75_span_0_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_75_span_1_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, Spch00101Component_ng_template_75_span_2_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, Spch00101Component_ng_template_75_span_3_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, Spch00101Component_ng_template_75_span_4_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, Spch00101Component_ng_template_75_span_5_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, Spch00101Component_ng_template_75_span_6_Template, 2, 2, "span", 39);
} if (rf & 2) {
    const showBtn_r30 = ctx.showBtn;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenDel);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenConfirmbochang);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenConfirmtrahang);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenConfirmchiphi);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r9.ActionCode.ChuyenConfirmend);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", showBtn_r30["labelShowInfo"]);
} }
function Spch00101Component_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idtai_r71 = ctx.idtai;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](idtai_r71["name"]);
} }
function Spch00101Component_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idphu_r72 = ctx.idphu;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](idphu_r72["name"]);
} }
function Spch00101Component_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_81_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r83); const id_r74 = restoredCtx.id; const changduong_r75 = restoredCtx.changduong; const idtai_r76 = restoredCtx.idtai['name']; const idphu_r77 = restoredCtx.idphu['name']; const biensoxe_r73 = restoredCtx.biensoxe; const tienxe_r78 = restoredCtx.tienxe; const ngaydi_r79 = restoredCtx.ngaydi; const ngayve_r80 = restoredCtx.ngayve; const trangthai_r81 = restoredCtx.trangthai; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r82.getItem(id_r74, changduong_r75, idtai_r76, idphu_r77, biensoxe_r73["biensoxe"], tienxe_r78, ngaydi_r79, ngayve_r80, trangthai_r81)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const biensoxe_r73 = ctx.biensoxe;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](biensoxe_r73["biensoxe"]);
} }
function Spch00101Component_ng_template_83_Template(rf, ctx) { }
function Spch00101Component_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tienxe_r86 = ctx.tienxe;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](2, 1, tienxe_r86 * 1000, "VND", ""));
} }
function Spch00101Component_ng_template_87_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_87_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r89.add()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, " Th\u00EAm m\u1EDBi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_87_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_ng_template_87_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r91.allDel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, " X\u00F3a t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function Spch00101Component_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, Spch00101Component_ng_template_87_button_0_Template, 3, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Spch00101Component_ng_template_87_button_1_Template, 3, 0, "button", 45);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r21.ActionCode.ChuyenAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appAuth", ctx_r21.ActionCode.DataScDelAll);
} }
const _c6 = function () { return { "padding-bottom": 0 }; };
const _c7 = function () { return { xs: 8, sm: 16, md: 24 }; };
class showBtn {
    constructor() {
        this.btnUpdate = false;
        this.btnDelete = false;
        this.btnConfirmbochang = false;
        this.btnConfirmtrahang = false;
        this.btnConfirmchiphi = false;
        this.btnConfirmend = false;
        this.labelShowInfo = false; // show tong cươc , tong chi phí chuyến hàng
        this.tongcuoc = 0;
        this.tongchiphi = 0;
    }
}
class Spch00101Component extends _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(webService, router, cdf, datePipe, message, modalService, modalTaixeService, modalChuyenService, modalChiphiService, modalSrv, deptTreeService, dataService, chuyenDtoService) {
        super(webService, router, cdf, datePipe);
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.message = message;
        this.modalService = modalService;
        this.modalTaixeService = modalTaixeService;
        this.modalChuyenService = modalChuyenService;
        this.modalChiphiService = modalChiphiService;
        this.modalSrv = modalSrv;
        this.deptTreeService = deptTreeService;
        this.dataService = dataService;
        this.chuyenDtoService = chuyenDtoService;
        this.DisplayScreenID = _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_5__.UrlDisplayId.spch00101;
        this.searchParam = {};
        this.dateFormat = src_app_common_const__WEBPACK_IMPORTED_MODULE_3__.dateFormat;
        this.dataList = [];
        this.checkedCashArray = [];
        this.ActionCode = _app_config_actionCode__WEBPACK_IMPORTED_MODULE_0__.ActionCode;
        this.availableOptions = [];
        this.pageHeaderInfo = {
            title: 'Quản lý chuyến',
            breadcrumb: ["Home", "Chuyến", "Quản lý chuyến"],
            desc: ''
        };
        // mode
        this.tainm = "";
        this.stocktai = "";
        this.phunm = "";
        this.stockphu = "";
        this.biensoxenm = "";
        this.stockbsx = "";
        this.listStatus = src_app_common_const__WEBPACK_IMPORTED_MODULE_3__.listTrangthaichuyen;
        this.btnUpdate = false;
        this.btnDelete = false;
        this.btnConfirmbochang = false; // hoàn thành bóc hàng
        this.btnConfirmtrahang = false; // hoàn thành trả hàng
        this.ngaybatdau = null;
        this.ngayketthuc = null;
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
    handleStartOpenSoplnChange(open) {
        if (!open) {
            this.endSoplnDate.open();
        }
    }
    handleEndOpenSoplnChange(open) { }
    ngOnInit() {
        this.initTable();
        this.deptTreeService.initDate();
        this.availableOptions = [..._app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_2__.MapPipe.transformMapToArray(_app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_2__.MapSet.available, 2 /* MapKeyType.Boolean */)];
    }
    onChange($event) {
        console.log($event);
    }
    getDataList(e) {
        this.tableLoading(true);
        this.searchParam.ngaybatdau = this.formatDate(this.ngaybatdau);
        this.searchParam.ngayketthuc = this.formatDate(this.ngayketthuc);
        const params = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex,
            filters: this.searchParam
        };
        this.dataService.getChuyens(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(data => {
            console.log(data);
            const { list, total, pageNum } = data;
            this.dataList = [...list];
            for (let element of this.dataList) {
                let showbtn = this.showBtnChuyen(element.trangthai);
                element['showBtn'] = showbtn;
            }
            if (this.dataList.length == 0) {
                this.modalSrv.info({ nzContent: 'Không Có dữ liệu', });
            }
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableLoading(false);
            this.checkedCashArray = [...this.checkedCashArray];
        });
    }
    showBtnChuyen(trangthai) {
        let showbtn = new showBtn();
        switch (trangthai) {
            case 0:
                {
                    showbtn.btnUpdate = true;
                    showbtn.btnDelete = true;
                    showbtn.btnConfirmbochang = false;
                    showbtn.btnConfirmtrahang = false;
                    showbtn.btnConfirmchiphi = false;
                    showbtn.btnConfirmend = false;
                    showbtn.labelShowInfo = false;
                }
                ;
                break;
            case 1:
                {
                    showbtn.btnUpdate = true;
                    showbtn.btnDelete = false;
                    showbtn.btnConfirmbochang = true;
                    showbtn.btnConfirmtrahang = false;
                    showbtn.btnConfirmchiphi = false;
                    showbtn.btnConfirmend = false;
                    showbtn.labelShowInfo = false;
                }
                ;
                break;
            case 2:
                {
                    showbtn.btnUpdate = false;
                    showbtn.btnDelete = false;
                    showbtn.btnConfirmbochang = false;
                    showbtn.btnConfirmtrahang = true;
                    showbtn.btnConfirmchiphi = false;
                    showbtn.btnConfirmend = false;
                    showbtn.labelShowInfo = false;
                }
                ;
                break;
            case 3:
                {
                    showbtn.btnUpdate = false;
                    showbtn.btnDelete = false;
                    showbtn.btnConfirmbochang = false;
                    showbtn.btnConfirmtrahang = false;
                    showbtn.btnConfirmchiphi = true;
                    showbtn.btnConfirmend = false;
                    showbtn.labelShowInfo = false;
                }
                ;
                break;
            case 4:
                {
                    showbtn.btnUpdate = false;
                    showbtn.btnDelete = false;
                    showbtn.btnConfirmbochang = false;
                    showbtn.btnConfirmtrahang = false;
                    showbtn.btnConfirmchiphi = false;
                    showbtn.btnConfirmend = true;
                    showbtn.labelShowInfo = false;
                }
                ;
                break;
            case 5: {
                showbtn.btnUpdate = false;
                showbtn.btnDelete = false;
                showbtn.btnConfirmbochang = false;
                showbtn.btnConfirmtrahang = false;
                showbtn.btnConfirmchiphi = false;
                showbtn.btnConfirmend = false;
                showbtn.labelShowInfo = true;
            }
        }
        return showbtn;
    }
    confirmbochang(id) {
        let req = {
            id: id,
            trangthai: 2
        };
        this.dataService.updateTrangthai(req).pipe().subscribe(res => {
            if (res == 1) {
                this.message.success(" Thực hiện thành công !");
                this.getDataList();
            }
            else {
                this.message.success(" Không thành công !");
            }
        });
    }
    confirmtrahang(id) {
        let req = {
            id: id,
            trangthai: 3
        };
        this.dataService.updateTrangthai(req).pipe().subscribe(res => {
            if (res == 1) {
                this.message.success(" Thực hiện thành công !");
                this.getDataList();
            }
            else {
                this.message.success(" Không thành công !");
            }
        });
    }
    // tinh chi phi chuyến hàng 
    confirmchiphi(id) {
        this.modalChiphiService.show({ nzTitle: 'Danh sách chi phí' }, { idchuyen: id }).subscribe(({ modalValue, status }) => {
            if (status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            let req = {
                id: id,
                trangthai: 4,
                lstchiphi: modalValue.items
            };
            console.log(req);
            this.dataService.updateTrangthai(req).pipe().subscribe(res => {
                if (res == 1) {
                    this.getDataList();
                    this.message.success(" Thực hiện thành công !");
                }
                else {
                    this.message.success(" Không thành công !");
                }
            });
        });
    }
    // ket thuc chuyen hang
    confirmend(id) {
        let req = {
            id: id,
            trangthai: 5
        };
        this.dataService.updateTrangthai(req).pipe().subscribe(res => {
            if (res == 1) {
                this.getDataList();
                this.message.success(" Thực hiện thành công !");
            }
            else {
                this.message.success(" Không thành công !");
            }
        });
    }
    resetForm() {
        this.searchParam = {};
        this.biensoxenm = "";
        this.tainm = "";
        this.phunm = "";
        this.trangthaimode = "";
    }
    fnFocusOutBiensoxe() {
        if (this.searchParam.biensoxe != this.stockbsx) {
            this.biensoxenm = "";
        }
    }
    // show modal xe
    searchBiensoxeClick() {
        this.modalService.show({ nzTitle: 'Danh Sách Xe' }, { showcomfirm: false }).subscribe(res => {
            if (!res || res.status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            const param = { ...res.modalValue };
            this.searchParam.biensoxe = param['biensoxe'];
            this.stockbsx = param['biensoxe'];
            this.biensoxenm = param['tenxegoinho'];
        });
    }
    // show modal tai xe
    searchTaixeClick() {
        this.modalTaixeService.show({ nzTitle: 'Danh Sách Tài Xế' }, { showcomfirm: false }).subscribe(res => {
            if (!res || res.status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            const param = { ...res.modalValue };
            this.searchParam.idtai = param['id'];
            this.stocktai = param['id'];
            this.tainm = param['name'];
        });
    }
    fnFocusOutTaixe() {
        if (this.searchParam.idtai != this.stocktai) {
            this.tainm = "";
        }
    }
    // show modal tai xe
    searchPhuxeClick() {
        this.modalTaixeService.show({ nzTitle: 'Danh Sách Tài Xế' }, { showcomfirm: false }).subscribe(res => {
            if (!res || res.status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            const param = { ...res.modalValue };
            this.searchParam.idphu = param['id'];
            this.stockphu = param['id'];
            this.phunm = param['name'];
        });
    }
    fnFocusOutPhuxe() {
        if (this.searchParam.idphu != this.stockphu) {
            this.phunm = "";
        }
    }
    edit(id) {
        this.dataService.getChuyen(id).subscribe(res => {
            res.biensoxe = res.biensoxe['_id'];
            res.idphu = res.idphu['_id'];
            res.idtai = res.idtai['_id'];
            this.modalChuyenService.show({ nzTitle: 'Cập nhật' }, res).subscribe(({ modalValue, status }) => {
                if (status === 0 /* ModalBtnStatus.Cancel */) {
                    return;
                }
                modalValue.id = id;
                this.tableLoading(true);
                this.addEditData(modalValue, 'updateChuyen');
            });
        });
    }
    del(id) {
        this.modalSrv.confirm({
            nzTitle: 'Bạn có chắc chắn muốn xóa nó không?',
            nzContent: 'Không thể phục hồi sau khi xóa',
            nzOnOk: () => {
                this.tableLoading(true);
                this.dataService.deleteChuyen(id).subscribe(() => {
                    if (this.dataList.length === 1) {
                        this.tableConfig.pageIndex--;
                    }
                    this.getDataList();
                    this.resetForm();
                }, error => this.tableLoading(false));
            }
        });
    }
    add() {
        this.modalChuyenService.show({ nzTitle: 'Thêm mới' }).subscribe(//  this.formItemNm[15]
        //  this.formItemNm[15]
        res => {
            if (!res || res.status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            this.tableLoading(true);
            this.addEditData(res.modalValue, 'createChuyen');
        }, error => this.tableLoading(false));
    }
    allDel() { }
    getItem(id, changduong, idtai, idphu, biensoxe, tienxe, ngaydi, ngayve, trangthai) {
        this.chuyenDtoService.id = id;
        this.chuyenDtoService.biensoxe = biensoxe;
        this.chuyenDtoService.changduong = changduong;
        this.chuyenDtoService.idphu = idphu;
        this.chuyenDtoService.idtai = idtai;
        this.chuyenDtoService.ngaydi = this.formatDate(ngaydi);
        this.chuyenDtoService.ngayve = this.formatDate(ngayve);
        this.chuyenDtoService.tienxe = tienxe;
        this.chuyenDtoService.trangthai = trangthai;
        this.dataService.refresh(src_app_common_const__WEBPACK_IMPORTED_MODULE_3__.rootbase + _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_5__.UrlDisplayId.spch00201);
    }
    addEditData(param, methodName) {
        this.dataService[methodName](param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(() => {
            this.getDataList();
        });
    }
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
            showCheckbox: false,
            headers: [
                {
                    title: 'Ngày khởi hành',
                    field: 'ngaydi',
                    width: 180,
                    pipe: "date: dd/MM/YYYY HH:mm"
                },
                {
                    title: 'Ngày về',
                    width: 180,
                    field: 'ngayve',
                    pipe: "date: dd/MM/YYYY HH:mm"
                },
                {
                    title: 'Tài Chính',
                    width: 120,
                    field: 'idtai',
                    tdTemplate: this.Tltentai
                },
                {
                    title: 'Tài Phụ',
                    width: 150,
                    field: 'idphu',
                    tdTemplate: this.Tltenphu
                },
                {
                    title: 'Biển số xe',
                    width: 200,
                    field: 'biensoxe',
                    tdTemplate: this.Tlbiensoxe
                },
                {
                    title: 'Tiền đưa trước',
                    width: 200,
                    field: 'tienxe',
                    tdTemplate: this.tienduatruocTpl
                },
                {
                    title: 'Điểm đi - điểm đến',
                    width: 150,
                    field: 'changduong'
                },
                {
                    title: 'Hành động',
                    tdTemplate: this.operationTpl,
                    width: 300,
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
Spch00101Component.ɵfac = function Spch00101Component_Factory(t) { return new (t || Spch00101Component)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_6__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_widget_modal_subwindowxe_subwindow_xe_service__WEBPACK_IMPORTED_MODULE_7__.SubwindowXeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_widget_modal_subwindowtaixe_subwindow_taixe_service__WEBPACK_IMPORTED_MODULE_8__.SubwindowTaixeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_widget_modal_subwindowchuyen_subwindow_chuyen_service__WEBPACK_IMPORTED_MODULE_9__.SubwindowChuyenService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_widget_modal_subwindowchiphi_subwindow_chiphi_service__WEBPACK_IMPORTED_MODULE_10__.SubwindowChiphiService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_pages_system_account_dept_tree_dept_tree_service__WEBPACK_IMPORTED_MODULE_4__.DeptTreeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_chuyen_chuyen_service__WEBPACK_IMPORTED_MODULE_11__.ChuyenService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_core_services_http_chuyen_chuyendto_service__WEBPACK_IMPORTED_MODULE_12__.ChuyendtoService)); };
Spch00101Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: Spch00101Component, selectors: [["app-spch00101"]], viewQuery: function Spch00101Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.Tlbiensoxe = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.Tltentai = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.Tltenphu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.tienduatruocTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.endSoplnDate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([_app_pages_system_account_dept_tree_dept_tree_service__WEBPACK_IMPORTED_MODULE_4__.DeptTreeService]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 89, vars: 151, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzHoverable", "", 1, "m-b-10", 3, "nzBodyStyle"], ["nz-form", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzRequired", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", "nzFor"], [3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["name", "ngaybatdau", 3, "nzDisabledDate", "nzFormat", "ngModel", "nzPlaceHolder", "ngModelChange", "nzOnOpenChange"], [3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", "nzFor"], ["name", "ngayketthuc", 3, "nzDisabledDate", "nzFormat", "ngModel", "nzPlaceHolder", "ngModelChange", "nzOnOpenChange"], ["endSoplnDate", ""], ["nz-col", "", 1, "text-right", "p-0", "m-b-10", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nz-button", "", 3, "nzType", "click"], ["nz-icon", "", "nzType", "search"], ["nz-button", "", 1, "m-l-15", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-col", "", 1, "inputIcon", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzSearch", "", 3, "nzAddOnAfter"], ["name", "idtai", "type", "text", "nz-input", "", "placeholder", "", 3, "ngModel", "ngModelChange", "blur"], ["suffixIconButtonTaixe", ""], ["nzFor", "", 1, "fix-inputIcon", 3, "nzNoColon"], ["name", "idphu", "type", "text", "nz-input", "", "placeholder", "", 3, "ngModel", "ngModelChange", "blur"], ["suffixIconButtonPhuxe", ""], ["name", "biensoxe", "type", "text", "nz-input", "", "placeholder", "", 3, "ngModel", "ngModelChange", "blur"], ["suffixIconButtonBiensoxe", ""], ["name", "trangthai", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "tableTitle", "btnTpl", "reload"], [3, "checkedCashArrayFromComment", "tableConfig", "tableData", "selectedChange", "changePageSize", "changePageNum"], ["operationTpl", ""], ["Tltentai", ""], ["Tltenphu", ""], ["Tlbiensoxe", ""], ["tienduatruocTpl", ""], ["tableBtns", ""], ["nz-button", "", 1, "bg-icon", 3, "nzType", "click"], [3, "nzLabel", "nzValue"], ["class", "operate-text", 4, "appAuth"], [4, "ngIf"], [1, "operate-text"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzType", "primary", "class", "m-r-8", 3, "click", 4, "appAuth"], ["nz-button", "", "nzType", "default", 3, "click", 4, "appAuth"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "delete"]], template: function Spch00101Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "nz-form-item")(7, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "Ng\u00E0y b\u1EAFt \u0111\u1EA7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "nz-form-control", 7)(10, "nz-date-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_nz_date_picker_ngModelChange_10_listener($event) { return ctx.ngaybatdau = $event; })("nzOnOpenChange", function Spch00101Component_Template_nz_date_picker_nzOnOpenChange_10_listener($event) { return ctx.handleStartOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 5)(12, "nz-form-item")(13, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "Ng\u00E0y k\u1EBFt th\u00FAc");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "nz-form-control", 7)(16, "nz-date-picker", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_nz_date_picker_ngModelChange_16_listener($event) { return ctx.ngayketthuc = $event; })("nzOnOpenChange", function Spch00101Component_Template_nz_date_picker_nzOnOpenChange_16_listener($event) { return ctx.handleEndOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_Template_button_click_19_listener() { return ctx.getDataList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, " T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function Spch00101Component_Template_button_click_22_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " L\u00E0m m\u1EDBi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 4)(26, "div", 17)(27, "nz-form-item")(28, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "T\u00E0i ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "nz-form-control", 7)(31, "nz-input-group", 18)(32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_input_ngModelChange_32_listener($event) { return ctx.searchParam.idtai = $event; })("blur", function Spch00101Component_Template_input_blur_32_listener() { return ctx.fnFocusOutTaixe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](33, Spch00101Component_ng_template_33_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "nz-form-label", 21)(36, "span")(37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 17)(40, "nz-form-item")(41, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42, "T\u00E0i ph\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "nz-form-control", 7)(44, "nz-input-group", 18)(45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_input_ngModelChange_45_listener($event) { return ctx.searchParam.idphu = $event; })("blur", function Spch00101Component_Template_input_blur_45_listener() { return ctx.fnFocusOutPhuxe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](46, Spch00101Component_ng_template_46_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "nz-form-label", 21)(49, "span")(50, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 4)(53, "div", 17)(54, "nz-form-item")(55, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, "Bi\u1EC3n s\u1ED1 xe");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "nz-form-control", 7)(58, "nz-input-group", 18)(59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_input_ngModelChange_59_listener($event) { return ctx.searchParam.biensoxe = $event; })("blur", function Spch00101Component_Template_input_blur_59_listener() { return ctx.fnFocusOutBiensoxe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](60, Spch00101Component_ng_template_60_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "nz-form-label", 21)(63, "span")(64, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "div", 5)(67, "nz-form-item")(68, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "Tr\u1EA1ng th\u00E1i chuy\u1EBFn h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "nz-form-control", 7)(71, "nz-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Spch00101Component_Template_nz_select_ngModelChange_71_listener($event) { return ctx.searchParam.trangthai = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](72, Spch00101Component_nz_option_72_Template, 1, 2, "nz-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "app-card-table-wrap", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("reload", function Spch00101Component_Template_app_card_table_wrap_reload_73_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](74, "app-ant-table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectedChange", function Spch00101Component_Template_app_ant_table_selectedChange_74_listener($event) { return ctx.selectedChecked($event); })("changePageSize", function Spch00101Component_Template_app_ant_table_changePageSize_74_listener($event) { return ctx.changePageSize($event); })("changePageNum", function Spch00101Component_Template_app_ant_table_changePageNum_74_listener($event) { return ctx.getDataList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](75, Spch00101Component_ng_template_75_Template, 7, 7, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](77, Spch00101Component_ng_template_77_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](79, Spch00101Component_ng_template_79_Template, 2, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](81, Spch00101Component_ng_template_81_Template, 3, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](83, Spch00101Component_ng_template_83_Template, 0, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](85, Spch00101Component_ng_template_85_Template, 3, 5, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](87, Spch00101Component_ng_template_87_Template, 2, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](47);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](61);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](147, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](148, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzDisabledDate", ctx.disabledStartSoplnDate)("nzFormat", ctx.dateFormat)("ngModel", ctx.ngaybatdau)("nzPlaceHolder", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzDisabledDate", ctx.disabledEndSoplnDate)("nzFormat", ctx.dateFormat)("ngModel", ctx.ngayketthuc)("nzPlaceHolder", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](149, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzAddOnAfter", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.searchParam.idtai);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzNoColon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.tainm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzAddOnAfter", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.searchParam.idphu);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzNoColon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.phunm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](150, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzAddOnAfter", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.searchParam.biensoxe);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzNoColon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.biensoxenm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzXXl", 10)("nzXl", 10)("nzLg", 10)("nzMd", 10)("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.searchParam.trangthai);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.listStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("tableTitle", "K\u1EBFt qu\u1EA3 t\u00ECm ki\u1EBFm")("btnTpl", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("checkedCashArrayFromComment", ctx.checkedCashArray)("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent, _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_14__.AntTableComponent, _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_15__.AuthDirective, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_16__.CardTableWrapComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzSelectComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__.NzCardComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_33__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGNoMDAxMDEuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 24731:
/*!************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00101/spch00101.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00101Module": () => (/* binding */ Spch00101Module)
/* harmony export */ });
/* harmony import */ var _spch00101_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spch00101-routing.module */ 267);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _spch00101_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spch00101.component */ 40637);
/* harmony import */ var _app_widget_modal_subwindowxe_subwindowxe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/widget/modal/subwindowxe/subwindowxe.module */ 56017);
/* harmony import */ var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/highlight */ 16075);
/* harmony import */ var _widget_modal_subwindowtaixe_subwindowtaixe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widget/modal/subwindowtaixe/subwindowtaixe.module */ 91863);
/* harmony import */ var _app_widget_modal_subwindowchuyen_subwindowchuyen_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/widget/modal/subwindowchuyen/subwindowchuyen.module */ 90890);
/* harmony import */ var _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/widget/modal/subwindowchiphi/subwindowchiphi.module */ 8538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class Spch00101Module {
}
Spch00101Module.ɵfac = function Spch00101Module_Factory(t) { return new (t || Spch00101Module)(); };
Spch00101Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: Spch00101Module });
Spch00101Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_spch00101_routing_module__WEBPACK_IMPORTED_MODULE_0__.Spch00101RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _app_widget_modal_subwindowxe_subwindowxe_module__WEBPACK_IMPORTED_MODULE_3__.SubwindowxeModule,
        _widget_modal_subwindowtaixe_subwindowtaixe_module__WEBPACK_IMPORTED_MODULE_4__.SubwindowtaixeModule,
        _app_widget_modal_subwindowchuyen_subwindowchuyen_module__WEBPACK_IMPORTED_MODULE_5__.SubwindowchuyenModule,
        _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_6__.SubwindowchiphiModule,
        ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_8__.NzHighlightModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](Spch00101Module, { declarations: [_spch00101_component__WEBPACK_IMPORTED_MODULE_2__.Spch00101Component], imports: [_spch00101_routing_module__WEBPACK_IMPORTED_MODULE_0__.Spch00101RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _app_widget_modal_subwindowxe_subwindowxe_module__WEBPACK_IMPORTED_MODULE_3__.SubwindowxeModule,
        _widget_modal_subwindowtaixe_subwindowtaixe_module__WEBPACK_IMPORTED_MODULE_4__.SubwindowtaixeModule,
        _app_widget_modal_subwindowchuyen_subwindowchuyen_module__WEBPACK_IMPORTED_MODULE_5__.SubwindowchuyenModule,
        _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_6__.SubwindowchiphiModule,
        ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_8__.NzHighlightModule] }); })();


/***/ }),

/***/ 30581:
/*!**************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchuyen/subwindow-chuyen.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowChuyenService": () => (/* binding */ SubwindowChuyenService)
/* harmony export */ });
/* harmony import */ var _subwindowchuyen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowchuyen.component */ 57755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/widget/base-modal */ 69174);



class SubwindowChuyenService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _subwindowchuyen_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowchuyenComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
SubwindowChuyenService.ɵfac = function SubwindowChuyenService_Factory(t) { return new (t || SubwindowChuyenService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
SubwindowChuyenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubwindowChuyenService, factory: SubwindowChuyenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57755:
/*!***************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchuyen/subwindowchuyen.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowchuyenComponent": () => (/* binding */ SubwindowchuyenComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils/tools */ 58995);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _app_core_services_http_xe_xe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/http/xe/xe.service */ 58986);
/* harmony import */ var _core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/http/system/account.service */ 69454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 20558);

















const _c0 = ["endSoplnDate"];
function SubwindowchuyenComponent_nz_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", option_r4["id"])("nzLabel", option_r4["biensoxe"]);
} }
function SubwindowchuyenComponent_nz_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", option_r5["id"])("nzLabel", option_r5["name"]);
} }
function SubwindowchuyenComponent_nz_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", option_r6["id"])("nzLabel", option_r6["name"]);
} }
class SubwindowchuyenComponent {
    constructor(modalRef, fb, dataService, dataTaixeService, cdf) {
        this.modalRef = modalRef;
        this.fb = fb;
        this.dataService = dataService;
        this.dataTaixeService = dataTaixeService;
        this.cdf = cdf;
        this.const = _app_common_const__WEBPACK_IMPORTED_MODULE_1__;
        this.listXetai = [];
        this.listTaixe = [];
        this.disabledStartSoplnDate = (startValue) => {
            if (!startValue || !this.addEditForm.value.ngayve) {
                return false;
            }
            const date = new Date(this.addEditForm.value.ngayve);
            return startValue.getTime() > date.getTime();
        };
        this.disabledEndSoplnDate = (endValue) => {
            if (!endValue || !this.addEditForm.value.ngaydi) {
                return false;
            }
            const date = new Date(this.addEditForm.value.ngaydi);
            return endValue.getTime() <= date.getTime();
        };
        this.params = {};
    }
    handleStartOpenSoplnChange(open) {
        if (!open) {
            this.endSoplnDate.open();
        }
    }
    handleEndOpenSoplnChange(open) { }
    getAsyncFnData(modalValue) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(modalValue);
    }
    getCurrentValue() {
        if (!(0,_app_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnCheckForm)(this.addEditForm)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.addEditForm.value);
    }
    ngOnInit() {
        this.getlistXetaifree();
        this.getListTaixe();
        this.initForm();
        if (Object.keys(this.params).length > 0) {
            this.addEditForm.patchValue(this.params);
            console.log(this.params);
        }
    }
    initForm() {
        this.addEditForm = this.fb.group({
            ngaydi: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ngayve: [null],
            biensoxe: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            tienxe: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            idtai: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            idphu: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            changduong: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    getlistXetaifree() {
        this.dataService
            .getlistXefree()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
        }))
            .subscribe(res => {
            this.listXetai = res;
            this.cdf.markForCheck();
        });
    }
    getListTaixe() {
        const params = {
            pageSize: 0,
            pageNum: 0,
            filters: {
                phongban_id: this.const.idTaixe
            }
        };
        this.dataTaixeService
            .getAccount(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
        }))
            .subscribe(res => {
            this.listTaixe = res;
            this.cdf.markForCheck();
        });
    }
}
SubwindowchuyenComponent.ɵfac = function SubwindowchuyenComponent_Factory(t) { return new (t || SubwindowchuyenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_http_xe_xe_service__WEBPACK_IMPORTED_MODULE_2__.XeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
SubwindowchuyenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SubwindowchuyenComponent, selectors: [["app-subwindowchuyen"]], viewQuery: function SubwindowchuyenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.endSoplnDate = _t.first);
    } }, decls: 40, vars: 41, consts: [["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "ngaydi", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp ng\u00E0y kh\u1EDFi h\u00E0nh", 3, "nzSm", "nzXs"], ["name", "ngaydi", "id", "ngaydi", "formControlName", "ngaydi", 3, "nzDisabledDate", "nzFormat", "nzPlaceHolder", "nzOnOpenChange"], ["nzFor", "ngayve", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp ng\u00E0y v\u1EC1", 3, "nzSm", "nzXs"], ["name", "ngayve", "id", "ngayve", "formControlName", "ngayve", 3, "nzDisabledDate", "nzFormat", "nzPlaceHolder", "nzOnOpenChange"], ["endSoplnDate", ""], ["nzRequired", "", "nzFor", "biensoxe", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp bi\u1EC3n s\u1ED1 xe", 3, "nzSm", "nzXs"], ["name", "biensoxe", "id", "biensoxe", "formControlName", "biensoxe", "nzAllowSearch", "", "nzShowSearch", "", "nzPlaceHolder", "Select"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzRequired", "", "nzFor", "trongtai", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp ti\u1EC1n \u0111\u01B0a tr\u01B0\u1EDBc", 3, "nzSm", "nzXs"], ["name", "tienxe", "id", "tienxe", "formControlName", "tienxe", 3, "nzMin", "nzMax", "nzStep"], ["nzRequired", "", "nzFor", "idtai", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn T\u00E0i ch\u00EDnh", 3, "nzSm", "nzXs"], ["name", "idtai", "id", "idtai", "formControlName", "idtai", "nzAllowSearch", "", "nzShowSearch", "", "nzPlaceHolder", "Select"], ["nzRequired", "", "nzFor", "idphu", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn T\u00E0i ph\u1EE5", 3, "nzSm", "nzXs"], ["name", "idphu", "id", "idphu", "formControlName", "idphu", "nzAllowSearch", "", "nzShowSearch", "", "nzPlaceHolder", "Select"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp \u0110i\u1EC3m \u0111i - \u0111i\u1EC3m \u0111\u1EBFn", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "changduong", "name", "changduong", "placeholder", "Vui l\u00F2ng nh\u1EADp \u0111i\u1EC3m \u0111i - \u0111i\u1EC3m \u0111\u1EBFn", "id", "changduong"], [3, "nzValue", "nzLabel"]], template: function SubwindowchuyenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Ng\u00E0y kh\u1EDFi h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-form-control", 2)(5, "nz-date-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnOpenChange", function SubwindowchuyenComponent_Template_nz_date_picker_nzOnOpenChange_5_listener($event) { return ctx.handleStartOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-form-item")(7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ng\u00E0y v\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-form-control", 5)(10, "nz-date-picker", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnOpenChange", function SubwindowchuyenComponent_Template_nz_date_picker_nzOnOpenChange_10_listener($event) { return ctx.handleEndOpenSoplnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Bi\u1EC3n s\u1ED1 xe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-control", 9)(16, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SubwindowchuyenComponent_nz_option_17_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-form-item")(19, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Ti\u1EC1n \u0111\u01B0a tr\u01B0\u1EDBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nz-input-number", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-form-item")(24, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "T\u00E0i ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-form-control", 16)(27, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, SubwindowchuyenComponent_nz_option_28_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nz-form-item")(30, "nz-form-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "T\u00E0i ph\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nz-form-control", 19)(33, "nz-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SubwindowchuyenComponent_nz_option_34_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "nz-form-item")(36, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0110i\u1EC3m \u0111i - \u0111i\u1EC3m \u0111\u1EBFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabledDate", ctx.disabledStartSoplnDate)("nzFormat", ctx.const.dateFormat)("nzPlaceHolder", ctx.const.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabledDate", ctx.disabledEndSoplnDate)("nzFormat", ctx.const.dateFormat)("nzPlaceHolder", ctx.const.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listXetai);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzMin", 100)("nzMax", 50000)("nzStep", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listTaixe);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listTaixe);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__.NzInputNumberComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ3aW5kb3djaHV5ZW4uY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 90890:
/*!************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchuyen/subwindowchuyen.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowchuyenModule": () => (/* binding */ SubwindowchuyenModule)
/* harmony export */ });
/* harmony import */ var _subwindowchuyen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowchuyen.component */ 57755);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SubwindowchuyenModule {
}
SubwindowchuyenModule.ɵfac = function SubwindowchuyenModule_Factory(t) { return new (t || SubwindowchuyenModule)(); };
SubwindowchuyenModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubwindowchuyenModule });
SubwindowchuyenModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubwindowchuyenModule, { declarations: [_subwindowchuyen_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowchuyenComponent], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 18113:
/*!************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowtaixe/subwindow-taixe.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowTaixeService": () => (/* binding */ SubwindowTaixeService)
/* harmony export */ });
/* harmony import */ var _subwindowtaixe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowtaixe.component */ 12190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/widget/base-modal */ 69174);



class SubwindowTaixeService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _subwindowtaixe_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowtaixeComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
SubwindowTaixeService.ɵfac = function SubwindowTaixeService_Factory(t) { return new (t || SubwindowTaixeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
SubwindowTaixeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubwindowTaixeService, factory: SubwindowTaixeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12190:
/*!*************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowtaixe/subwindowtaixe.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowtaixeComponent": () => (/* binding */ SubwindowtaixeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_core_services_validators_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/validators/validators.service */ 50148);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _app_core_services_common_message_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/common/message-errors.service */ 85216);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _app_core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/http/system/account.service */ 69454);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);















const _c0 = ["operationTpl"];
const _c1 = ["availableFlag"];
function SubwindowtaixeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubwindowtaixeComponent_ng_template_2_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const id_r2 = restoredCtx.id; const name_r3 = restoredCtx.name; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.getItem(id_r2, name_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r3 = ctx.name;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](name_r3);
} }
class SubwindowtaixeComponent {
    constructor(fb, validatorsService, webService, vf, message, cdr, modalRef, dataService) {
        this.fb = fb;
        this.validatorsService = validatorsService;
        this.webService = webService;
        this.vf = vf;
        this.message = message;
        this.cdr = cdr;
        this.modalRef = modalRef;
        this.dataService = dataService;
        this.dataList = [];
        this.dataResponse = {};
        this.messageErrors = [];
        this.searchParam = {};
    }
    ngOnInit() {
        this.searchParam.phongban_id = _app_common_const__WEBPACK_IMPORTED_MODULE_0__.idTaixe;
        this.initTable();
    }
    tableChangeDectction() {
        this.dataList = [...this.dataList];
        this.cdr.detectChanges();
    }
    tableLoading(isLoading) {
        this.tableConfig.loading = isLoading;
        this.tableChangeDectction();
    }
    getDataList(e) {
        this.tableConfig.loading = true;
        const params = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex,
            filters: this.searchParam
        };
        this.dataService
            .getAccount(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(data => {
            const { list, total, pageNum } = data;
            this.dataList = [...list];
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableLoading(false);
        });
    }
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }
    resetForm() {
        this.searchParam = {};
        this.getDataList();
    }
    reloadTable() {
        this.message.info('Làm mới thành công');
        this.getDataList();
    }
    getItem(id, name) {
        this.dataResponse = {
            id: id,
            name: name
        };
        this.modalRef.destroy({ status: 1 /* ModalBtnStatus.Ok */, modalValue: this.dataResponse });
    }
    initTable() {
        this.tableConfig = {
            showCheckbox: false,
            headers: [
                {
                    title: 'Tên tài xế',
                    field: 'name',
                    width: 120,
                    tdTemplate: this.operationTpl
                },
                {
                    title: 'Trạng thái',
                    width: 150,
                    field: 'available'
                },
                {
                    title: 'Giới Tính',
                    width: 120,
                    field: 'sex',
                    pipe: 'sex'
                },
                {
                    title: 'Điện Thoại',
                    width: 150,
                    field: 'dienthoai'
                },
                {
                    title: 'Email',
                    width: 200,
                    field: 'email'
                },
                {
                    title: 'Đăng nhập lần cuối',
                    width: 200,
                    field: 'lastLoginTime',
                    pipe: 'date:yyyy-MM-dd HH:mm'
                },
                {
                    title: 'Ngày khởi tạo',
                    width: 150,
                    field: 'createdAt',
                    pipe: 'date:yyyy-MM-dd HH:mm'
                },
                {
                    title: 'Zalo',
                    width: 150,
                    field: 'zalo'
                }
            ],
            total: 0,
            loading: true,
            pageSize: 10,
            pageIndex: 1
        };
    }
}
SubwindowtaixeComponent.ɵfac = function SubwindowtaixeComponent_Factory(t) { return new (t || SubwindowtaixeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_validators_validators_service__WEBPACK_IMPORTED_MODULE_1__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_common_message_errors_service__WEBPACK_IMPORTED_MODULE_3__.ValidationFormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService)); };
SubwindowtaixeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SubwindowtaixeComponent, selectors: [["app-subwindowtaixe"]], viewQuery: function SubwindowtaixeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.availableFlag = _t.first);
    } }, decls: 4, vars: 3, consts: [[3, "tableTitle", "reload"], [3, "tableConfig", "tableData", "changePageSize", "changePageNum"], ["operationTpl", ""], ["nz-button", "", "nzType", "link", 3, "click"]], template: function SubwindowtaixeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-card-table-wrap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reload", function SubwindowtaixeComponent_Template_app_card_table_wrap_reload_0_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-ant-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changePageSize", function SubwindowtaixeComponent_Template_app_ant_table_changePageSize_1_listener($event) { return ctx.changePageSize($event); })("changePageNum", function SubwindowtaixeComponent_Template_app_ant_table_changePageNum_1_listener($event) { return ctx.getDataList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubwindowtaixeComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableTitle", "K\u1EBFt qu\u1EA3 t\u00ECm ki\u1EBFm");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_5__.AntTableComponent, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_6__.CardTableWrapComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ3aW5kb3d0YWl4ZS5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 91863:
/*!**********************************************************************!*\
  !*** ./src/app/widget/modal/subwindowtaixe/subwindowtaixe.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowtaixeModule": () => (/* binding */ SubwindowtaixeModule)
/* harmony export */ });
/* harmony import */ var _subwindowtaixe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowtaixe.component */ 12190);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SubwindowtaixeModule {
}
SubwindowtaixeModule.ɵfac = function SubwindowtaixeModule_Factory(t) { return new (t || SubwindowtaixeModule)(); };
SubwindowtaixeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubwindowtaixeModule });
SubwindowtaixeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubwindowtaixeModule, { declarations: [_subwindowtaixe_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowtaixeComponent], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 98699:
/*!******************************************************************!*\
  !*** ./src/app/widget/modal/subwindowxe/subwindow-xe.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowXeService": () => (/* binding */ SubwindowXeService)
/* harmony export */ });
/* harmony import */ var _subwindowxe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowxe.component */ 13115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/widget/base-modal */ 69174);



class SubwindowXeService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _subwindowxe_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowxeComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
SubwindowXeService.ɵfac = function SubwindowXeService_Factory(t) { return new (t || SubwindowXeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
SubwindowXeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubwindowXeService, factory: SubwindowXeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13115:
/*!*******************************************************************!*\
  !*** ./src/app/widget/modal/subwindowxe/subwindowxe.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowxeComponent": () => (/* binding */ SubwindowxeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_core_services_validators_validators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/validators/validators.service */ 50148);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _app_core_services_common_message_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/common/message-errors.service */ 85216);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _app_core_services_http_xe_xe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/http/xe/xe.service */ 58986);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);















const _c0 = ["operationTpl"];
const _c1 = ["state"];
function SubwindowxeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubwindowxeComponent_ng_template_2_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const id_r2 = restoredCtx.id; const biensoxe_r3 = restoredCtx.biensoxe; const tenxegoinho_r4 = restoredCtx.tenxegoinho; const trongtai_r5 = restoredCtx.trongtai; const trangthai_r6 = restoredCtx.trangthai; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.getItem(id_r2, biensoxe_r3, tenxegoinho_r4, trongtai_r5, trangthai_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const biensoxe_r3 = ctx.biensoxe;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](biensoxe_r3);
} }
class SubwindowxeComponent {
    constructor(fb, validatorsService, webService, vf, message, cdr, dataService, modalRef) {
        this.fb = fb;
        this.validatorsService = validatorsService;
        this.webService = webService;
        this.vf = vf;
        this.message = message;
        this.cdr = cdr;
        this.dataService = dataService;
        this.modalRef = modalRef;
        this.roleOptions = [];
        this.isEdit = false;
        this.dataList = [];
        this.biensoxe = "hahah";
        this.dataResponse = {
            id: "",
            tenxegoinho: "",
            biensoxe: "",
            trongtai: "",
            trangthai: false,
        };
        this.isReadonly = false;
        this.messageErrors = [];
        this.searchParam = {};
    }
    getAsyncFnData(modalValue) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(modalValue);
    }
    getCurrentValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.dataResponse);
    }
    ngOnInit() {
        this.initTable();
    }
    tableChangeDectction() {
        this.dataList = [...this.dataList];
        this.cdr.detectChanges();
    }
    tableLoading(isLoading) {
        this.tableConfig.loading = isLoading;
        this.tableChangeDectction();
    }
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }
    resetForm() {
        this.searchParam = {};
        this.getDataList();
    }
    reloadTable() {
        this.message.info('Làm mới thành công');
        this.getDataList();
    }
    getDataList(e) {
        this.tableConfig.loading = true;
        const params = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex,
            filters: this.searchParam
        };
        this.dataService
            .getXes(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(data => {
            const { list, total, pageNum } = data;
            this.dataList = [...list];
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableLoading(false);
        });
    }
    getItem(id, biensoxe, tenxegoinho, trongtai, trangthai) {
        this.dataResponse = {
            id: id,
            biensoxe: biensoxe,
            tenxegoinho: tenxegoinho,
            trongtai: trongtai,
            trangthai: trangthai
        };
        this.modalRef.destroy({ status: 1 /* ModalBtnStatus.Ok */, modalValue: this.dataResponse });
    }
    initTable() {
        this.tableConfig = {
            headers: [
                {
                    title: 'Biển số',
                    field: 'biensoxe',
                    width: 180,
                    tdTemplate: this.operationTpl
                },
                {
                    title: 'Tên gợi nhớ',
                    field: 'tenxegoinho',
                    width: 200
                },
                {
                    title: 'Trọng tải',
                    field: 'trongtai',
                    width: 100
                }
            ],
            total: 0,
            showCheckbox: false,
            loading: false,
            pageSize: 10,
            pageIndex: 1
        };
    }
}
SubwindowxeComponent.ɵfac = function SubwindowxeComponent_Factory(t) { return new (t || SubwindowxeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_validators_validators_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_1__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_common_message_errors_service__WEBPACK_IMPORTED_MODULE_2__.ValidationFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_http_xe_xe_service__WEBPACK_IMPORTED_MODULE_3__.XeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalRef)); };
SubwindowxeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SubwindowxeComponent, selectors: [["app-subwindowxe"]], viewQuery: function SubwindowxeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.state = _t.first);
    } }, decls: 4, vars: 3, consts: [[3, "tableTitle", "reload"], [3, "tableConfig", "tableData", "changePageSize", "changePageNum"], ["operationTpl", ""], ["nz-button", "", "nzType", "link", 3, "click"]], template: function SubwindowxeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-card-table-wrap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("reload", function SubwindowxeComponent_Template_app_card_table_wrap_reload_0_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-ant-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changePageSize", function SubwindowxeComponent_Template_app_ant_table_changePageSize_1_listener($event) { return ctx.changePageSize($event); })("changePageNum", function SubwindowxeComponent_Template_app_ant_table_changePageNum_1_listener($event) { return ctx.getDataList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SubwindowxeComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableTitle", "Danh s\u00E1ch Xe T\u1EA3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_4__.AntTableComponent, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_5__.CardTableWrapComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ3aW5kb3d4ZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 56017:
/*!****************************************************************!*\
  !*** ./src/app/widget/modal/subwindowxe/subwindowxe.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowxeModule": () => (/* binding */ SubwindowxeModule)
/* harmony export */ });
/* harmony import */ var _subwindowxe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowxe.component */ 13115);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SubwindowxeModule {
}
SubwindowxeModule.ɵfac = function SubwindowxeModule_Factory(t) { return new (t || SubwindowxeModule)(); };
SubwindowxeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubwindowxeModule });
SubwindowxeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubwindowxeModule, { declarations: [_subwindowxe_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowxeComponent], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_chuyen_spch00101_spch00101_module_ts.js.map