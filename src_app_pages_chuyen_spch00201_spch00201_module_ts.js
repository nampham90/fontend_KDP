"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_chuyen_spch00201_spch00201_module_ts"],{

/***/ 23317:
/*!*************************************************************************!*\
  !*** ./src/app/core/services/http/chiphichuyen/chiphichuyen.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChiphichuyenService": () => (/* binding */ ChiphichuyenService)
/* harmony export */ });
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-http.service */ 54246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class ChiphichuyenService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    getlists(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100GetAll, params, { needSuccessInfo: false });
    }
    getDetail(id) {
        return this.http.get(`${_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100Get}/${id}/`);
    }
    create(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100Create, params, { needSuccessInfo: false });
    }
    update(params) {
        return this.http.put(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100Update, params);
    }
    updateList(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100UpdateList, params, { needSuccessInfo: false });
    }
    delete(id) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.ChiphichuyenAnt100Delete, { ids: id }, { needSuccessInfo: true });
    }
    delates() { }
}
ChiphichuyenService.ɵfac = function ChiphichuyenService_Factory(t) { return new (t || ChiphichuyenService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_http_service__WEBPACK_IMPORTED_MODULE_1__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ChiphichuyenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChiphichuyenService, factory: ChiphichuyenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65078:
/*!***************************************************************************!*\
  !*** ./src/app/core/services/http/phieunhaphang/phieunhaphang.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhieunhaphangService": () => (/* binding */ PhieunhaphangService)
/* harmony export */ });
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-http.service */ 54246);



class PhieunhaphangService {
    constructor(http) {
        this.http = http;
    }
    getlists(params) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_0__.PhieunhaphangAnt100GetAll, params, { needSuccessInfo: false });
    }
    getDetail(id) {
        return this.http.get(`${src_app_common_const__WEBPACK_IMPORTED_MODULE_0__.PhieunhaphangAnt100Get}/${id}/`);
    }
    create(params) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_0__.PhieunhaphangAnt100Create, params, { needSuccessInfo: false });
    }
    update(params) {
        return this.http.put(src_app_common_const__WEBPACK_IMPORTED_MODULE_0__.PhieunhaphangAnt100Update, params);
    }
    delete(id) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_0__.PhieunhaphangAnt100Delete, { ids: id }, { needSuccessInfo: true });
    }
    delates() { }
}
PhieunhaphangService.ɵfac = function PhieunhaphangService_Factory(t) { return new (t || PhieunhaphangService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_http_service__WEBPACK_IMPORTED_MODULE_1__.BaseHttpService)); };
PhieunhaphangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PhieunhaphangService, factory: PhieunhaphangService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2685:
/*!********************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00201/spch00201-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00201RoutingModule": () => (/* binding */ Spch00201RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _spch00201_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spch00201.component */ 76527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _spch00201_component__WEBPACK_IMPORTED_MODULE_0__.Spch00201Component, data: { title: 'Kế hoạch bóc hàng', key: 'spch00201' } }
];
class Spch00201RoutingModule {
}
Spch00201RoutingModule.ɵfac = function Spch00201RoutingModule_Factory(t) { return new (t || Spch00201RoutingModule)(); };
Spch00201RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Spch00201RoutingModule });
Spch00201RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Spch00201RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 76527:
/*!***************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00201/spch00201.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00201Component": () => (/* binding */ Spch00201Component)
/* harmony export */ });
/* harmony import */ var _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/system/base/base.component */ 13951);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _app_config_actionCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/actionCode */ 22195);
/* harmony import */ var _app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/pipes/map.pipe */ 78877);
/* harmony import */ var _app_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/common/destory.service */ 88176);
/* harmony import */ var _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/common/UrlDisplay */ 22155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _app_widget_modal_subwindowproduct_subwindow_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/widget/modal/subwindowproduct/subwindow-product.service */ 94588);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _app_core_services_http_chuyen_chuyendto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/services/http/chuyen/chuyendto.service */ 69386);
/* harmony import */ var _app_core_services_http_chuyen_chuyen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/services/http/chuyen/chuyen.service */ 42996);
/* harmony import */ var _app_core_services_http_phieunhaphang_phieunhaphang_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/services/http/phieunhaphang/phieunhaphang.service */ 65078);
/* harmony import */ var _app_core_services_http_chiphichuyen_chiphichuyen_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/services/http/chiphichuyen/chiphichuyen.service */ 23317);
/* harmony import */ var _app_widget_modal_subwindowchiphi_subwindow_chiphi_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/widget/modal/subwindowchiphi/subwindow-chiphi.service */ 97313);
/* harmony import */ var _app_core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/core/services/common/tab.service */ 99651);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/auth.directive */ 35656);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);

































const _c0 = ["operationTpl"];
const _c1 = ["tiencuocTpl"];
function Spch00201Component_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r11.selectChuyen()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Ch\u1ECDn Chuy\u1EBFn");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} }
const _c2 = function () { return { "color": "#177ddc" }; };
function Spch00201Component_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.ChuyenDto.id);
} }
function Spch00201Component_ng_template_74_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_74_span_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18); const id_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().id; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r16.edit(id_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "C\u1EADp nh\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r14.btnUpdate);
} }
function Spch00201Component_ng_template_74_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_74_span_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21); const id_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().id; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.del(id_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r15.btnDelete);
} }
function Spch00201Component_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, Spch00201Component_ng_template_74_span_0_Template, 3, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, Spch00201Component_ng_template_74_span_1_Template, 3, 1, "span", 17);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r4.ActionCode.EditProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r4.ActionCode.DelProduct);
} }
function Spch00201Component_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tiencuoc_r22 = ctx.tiencuoc;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](2, 1, tiencuoc_r22 * 1000, "VND", ""));
} }
function Spch00201Component_ng_template_78_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_78_ng_container_0_span_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.Confirm(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " Ho\u00E0n th\u00E0nh k\u1EBF ho\u1EA1ch nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r24.btnConfirm);
} }
function Spch00201Component_ng_template_78_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_78_ng_container_0_span_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.Confirm(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " Ho\u00E0n th\u00E0nh b\u00F3c h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r25.btnConfirmbochang);
} }
function Spch00201Component_ng_template_78_ng_container_0_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_78_ng_container_0_span_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.Confirm(3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " Ho\u00E0n th\u00E0nh tr\u1EA3 h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r26.btnConfirmtrahang);
} }
function Spch00201Component_ng_template_78_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_78_ng_container_0_span_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r35.Confirm4()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " T\u00EDnh chi ph\u00ED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r27.btnConfirmchiphi);
} }
function Spch00201Component_ng_template_78_ng_container_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 18)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_78_ng_container_0_span_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r37.Confirm(5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " K\u1EBFt th\u00FAc chuy\u1EBFn h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r28.btnConfirmend);
} }
function Spch00201Component_ng_template_78_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, Spch00201Component_ng_template_78_ng_container_0_span_1_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, Spch00201Component_ng_template_78_ng_container_0_span_2_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, Spch00201Component_ng_template_78_ng_container_0_span_3_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, Spch00201Component_ng_template_78_ng_container_0_span_4_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, Spch00201Component_ng_template_78_ng_container_0_span_5_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r23.ActionCode.Confirm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r23.ActionCode.Confirm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r23.ActionCode.Confirm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r23.ActionCode.Confirm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r23.ActionCode.Confirm);
} }
function Spch00201Component_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, Spch00201Component_ng_template_78_ng_container_0_Template, 6, 5, "ng-container", 20);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.showConfirm);
} }
function Spch00201Component_ng_template_80_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_80_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r41.add()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Th\u00EAm m\u1EDBi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r39.btnNew);
} }
function Spch00201Component_ng_template_80_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function Spch00201Component_ng_template_80_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.allDel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " X\u00F3a t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", true);
} }
function Spch00201Component_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, Spch00201Component_ng_template_80_button_0_Template, 3, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, Spch00201Component_ng_template_80_button_1_Template, 3, 1, "button", 24);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r10.ActionCode.AddProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAuth", ctx_r10.ActionCode.DelAllProduct);
} }
const _c3 = function () { return { "padding-bottom": 0 }; };
const _c4 = function () { return { xs: 8, sm: 16, md: 24 }; };
class Spch00201Component extends _app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(webService, router, cdf, datePipe, message, modashowProduct, modalSrv, ChuyenDto, dataService, phhService, cpcService, modalChiphiService, tabService) {
        super(webService, router, cdf, datePipe);
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.message = message;
        this.modashowProduct = modashowProduct;
        this.modalSrv = modalSrv;
        this.ChuyenDto = ChuyenDto;
        this.dataService = dataService;
        this.phhService = phhService;
        this.cpcService = cpcService;
        this.modalChiphiService = modalChiphiService;
        this.tabService = tabService;
        this.DisplayScreenID = _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_5__.UrlDisplayId.spch00201;
        this.reqPhieunhaphang = {};
        this.pageHeaderInfo = {
            title: 'Kế hoạch bóc hàng',
            breadcrumb: ["Home", "Chuyến", "Kế hoạch bóc hàng"],
            desc: ''
        };
        this.searchParam = {};
        this.dateFormat = _app_common_const__WEBPACK_IMPORTED_MODULE_1__.dateFormat;
        this.dataList = [];
        this.checkedCashArray = [];
        this.listchiphi = [];
        this.ActionCode = _app_config_actionCode__WEBPACK_IMPORTED_MODULE_2__.ActionCode;
        this.showchuyen = true;
        this.showConfirm = false;
        this.tongcuoc = 0;
        this.availableOptions = [];
        this.btnNew = false;
        this.btnUpdate = false;
        this.btnDelete = false;
        this.btnConfirm = false;
        this.btnConfirmbochang = false;
        this.btnConfirmtrahang = false;
        this.btnConfirmchiphi = false;
        this.btnConfirmend = false;
    }
    fnInit() {
        this.cdf.markForCheck();
    }
    destroy() {
    }
    ngOnInit() {
        this.initTable();
        this.getTongcuoc();
        this.fnshowConfirm(this.ChuyenDto.trangthai);
        if (this.ChuyenDto.id != "" && this.ChuyenDto.id.length == 24) {
            this.showchuyen = false;
            this.showConfirm = true;
        }
        this.availableOptions = [..._app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe.transformMapToArray(_app_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapSet.available, 2 /* MapKeyType.Boolean */)];
    }
    fnshowConfirm(trangthai) {
        switch (trangthai) {
            case 0:
                {
                    this.btnConfirm = true;
                    this.btnConfirmbochang = false;
                    this.btnConfirmtrahang = false;
                    this.btnConfirmchiphi = false;
                    this.btnConfirmend = false;
                }
                ;
                break;
            case 1:
                {
                    this.btnConfirm = false;
                    this.btnConfirmbochang = true;
                    this.btnConfirmtrahang = false;
                    this.btnConfirmchiphi = false;
                    this.btnConfirmend = false;
                }
                ;
                break;
            case 2:
                {
                    this.btnConfirm = false;
                    this.btnConfirmbochang = false;
                    this.btnConfirmtrahang = true;
                    this.btnConfirmchiphi = false;
                    this.btnConfirmend = false;
                }
                ;
                break;
            case 3:
                {
                    this.btnConfirm = false;
                    this.btnConfirmbochang = false;
                    this.btnConfirmtrahang = false;
                    this.btnConfirmchiphi = true;
                    this.btnConfirmend = false;
                    this.btnNew = true;
                    this.btnUpdate = true;
                    this.btnDelete = true;
                }
                ;
                break;
            case 4:
                {
                    this.btnConfirm = false;
                    this.btnConfirmbochang = false;
                    this.btnConfirmtrahang = false;
                    this.btnConfirmchiphi = true;
                    this.btnConfirmend = true;
                    this.btnNew = true;
                    this.btnUpdate = true;
                    this.btnDelete = true;
                }
                ;
                break;
            case 5: {
                this.btnConfirm = false;
                this.btnConfirmbochang = false;
                this.btnConfirmtrahang = false;
                this.btnConfirmchiphi = true;
                this.btnConfirmend = false;
                this.btnNew = true;
                this.btnUpdate = true;
                this.btnDelete = true;
            }
        }
        this.cdf.markForCheck();
    }
    selectChuyen() {
        this.router.navigate([_app_common_const__WEBPACK_IMPORTED_MODULE_1__.rootbase + 'chuyen/spch00101']);
    }
    getTongcuoc() {
        let tc = 0;
        for (let element of this.dataList) {
            tc = tc + element.tiencuoc;
        }
        this.tongcuoc = tc;
        this.cdf.markForCheck();
    }
    Confirm4() {
        if (this.ChuyenDto.trangthai == 5) {
            // show chi phi chuyen 
            let req = {
                id: this.ChuyenDto.id
            };
            this.cpcService.getlists(req).pipe().subscribe(res => {
                this.modalChiphiService.show({ nzTitle: 'Danh sách chi phí' }, { listcp: res, status: 5, showcomfirm: false }).subscribe(({ modalValue, status }) => {
                    if (status === 0 /* ModalBtnStatus.Cancel */) {
                        return;
                    }
                });
            });
        }
        else {
            this.fncheckchiphiChuyen();
        }
        // 1 check chuyến này có ai tinh chi phí chưa
        // nếu chưa. thì show tính chi phí
        // nếu có . thì update
    }
    fncheckchiphiChuyen() {
        let req = {
            id: this.ChuyenDto.id
        };
        this.cpcService.getlists(req).pipe().subscribe(res => {
            this.listchiphi = res;
            if (this.listchiphi.length > 0) {
                // show modal update chi phí
                console.log(this.listchiphi);
                this.modalChiphiService.show({ nzTitle: 'Cập nhật danh sách chi phí' }, { listcp: this.listchiphi }).subscribe(({ modalValue, status }) => {
                    if (status === 0 /* ModalBtnStatus.Cancel */) {
                        return;
                    }
                    let req1 = {
                        id: req.id,
                        trangthai: 4,
                        lstchiphi: modalValue.items
                    };
                    this.cpcService.updateList(req1).pipe().subscribe(res => {
                        if (res == req1.lstchiphi.length) {
                            this.message.info("Cập nhật thành công !");
                            this.ChuyenDto.trangthai = 4;
                            this.fnshowConfirm(4);
                        }
                        else {
                            this.message.info("Cập nhật 1 phần !");
                        }
                    });
                });
            }
            else {
                // show modal tính chi phí
                this.modalChiphiService.show({ nzTitle: 'Danh sách chi phí' }, { idchuyen: req.id }).subscribe(({ modalValue, status }) => {
                    if (status === 0 /* ModalBtnStatus.Cancel */) {
                        return;
                    }
                    let req1 = {
                        id: req.id,
                        trangthai: 4,
                        lstchiphi: modalValue.items
                    };
                    console.log(req1);
                    this.dataService.updateTrangthai(req1).pipe().subscribe(res => {
                        if (res == 1) {
                            this.message.success(" Thực hiện thành công !");
                            this.ChuyenDto.trangthai = 4;
                            this.fnshowConfirm(4);
                        }
                        else {
                            this.message.success(" Không thành công !");
                        }
                    });
                });
            }
        });
    }
    // update trang thai chuyen hang
    Confirm(trangthai) {
        if (this.ChuyenDto.id != '' && this.ChuyenDto.id.length == 24) {
            let listKhachNo = [];
            let req = {
                id: this.ChuyenDto.id,
                trangthai: trangthai,
                listkhachno: listKhachNo
            };
            if (this.dataList.length > 0) {
                listKhachNo = this.fnGetListKhachNo();
                if (trangthai == 3) {
                    req['listkhachno'] = listKhachNo;
                }
                this.dataService.updateTrangthai(req).pipe().subscribe(res => {
                    if (res == 1) {
                        this.message.success(" Thực hiện thành công !");
                        this.ChuyenDto.trangthai = trangthai;
                        this.fnshowConfirm(this.ChuyenDto.trangthai);
                        (0,_utils_tools__WEBPACK_IMPORTED_MODULE_6__.fnReload)(this.router, _app_common_const__WEBPACK_IMPORTED_MODULE_1__.rootbase + 'chuyen/spch00101');
                    }
                    else {
                        this.message.success(" Không thành công !");
                    }
                });
            }
            else {
                this.message.success(" Vui lòng thêm mặt hàng !");
            }
        }
    }
    // fnGet list khach nợ
    fnGetListKhachNo() {
        let listKhachNo = [];
        for (let element of this.dataList) {
            if (element.hinhthucthanhtoan == 2) {
                listKhachNo.push(element);
            }
        }
        return listKhachNo;
    }
    // add product
    add() {
        this.modashowProduct.show({ nzTitle: 'Thêm mới' }).subscribe(//  this.formItemNm[15]
        //  this.formItemNm[15]
        res => {
            if (!res || res.status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            res.modalValue['trangthai'] = 0;
            res.modalValue['biensoxe'] = this.ChuyenDto.biensoxe;
            res.modalValue['idchuyen'] = this.ChuyenDto.id;
            this.tableLoading(true);
            this.addEditData(res.modalValue, 'create');
        }, error => this.tableLoading(false));
    }
    allDel() {
    }
    edit(id) {
        console.log(id);
        this.phhService.getDetail(id).subscribe(res => {
            let req = {
                "idchuyen": res.idchuyen,
                "biensoxe": res.biensoxe,
                "iduser": res.iduser,
                "tiencuoc": res.tiencuoc,
                "lotrinh": res.lotrinh,
                "ngaynhap": res.ngaynhap,
                "noidungdonhang": res.noidungdonhang,
                "diadiembochang": res.diadiembochang,
                "hinhthucthanhtoan": res.hinhthucthanhtoan + "",
                "ghichu": null,
                "trangthai": res.trangthai,
                "id": res.id
            };
            console.log(req);
            this.modashowProduct.show({ nzTitle: 'Cập nhật' }, req).subscribe(({ modalValue, status }) => {
                if (status === 0 /* ModalBtnStatus.Cancel */) {
                    return;
                }
                modalValue.id = id;
                this.tableLoading(true);
                this.addEditData(modalValue, 'update');
            }, error => this.tableLoading(false));
        });
    }
    del(id) {
        this.modalSrv.confirm({
            nzTitle: 'Bạn có chắc chắn muốn xóa nó không?',
            nzContent: 'Không thể phục hồi sau khi xóa',
            nzOnOk: () => {
                this.tableLoading(true);
                this.phhService.delete(id).subscribe(() => {
                    if (this.dataList.length === 1) {
                        this.tableConfig.pageIndex--;
                    }
                    this.getDataList();
                    this.getTongcuoc();
                }, error => this.tableLoading(false));
            }
        });
    }
    addEditData(param, methodName) {
        this.phhService[methodName](param)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(() => {
            this.getDataList();
            this.getTongcuoc();
        });
    }
    getDataList(e) {
        this.tableConfig.loading = true;
        if (this.ChuyenDto.id != '') {
            this.searchParam.idchuyen = this.ChuyenDto.id;
        }
        const params = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex,
            filters: this.searchParam
        };
        this.phhService.getlists(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.finalize)(() => {
            this.tableLoading(false);
        }))
            .subscribe(data => {
            console.log(data);
            const { list, total, pageNum } = data;
            let listProduct = this.listToProduct(list);
            this.dataList = [...listProduct];
            this.getTongcuoc();
            // if(this.dataList.length == 0) {
            //   this.modalSrv.info({ nzContent: 'Không Có dữ liệu',});
            // }
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableLoading(false);
            this.checkedCashArray = [...this.checkedCashArray];
        });
    }
    listToProduct(list) {
        let listP = [];
        if (list.length > 0) {
            let i = 0;
            for (let item of list) {
                let itemProduc = {};
                itemProduc.id = item['id'];
                itemProduc.stt = (i + 1);
                itemProduc.idkhachhang = item.iduser['_id'];
                itemProduc.tenkhachhang = item.iduser['name'];
                itemProduc.noidungmathang = item['noidungdonhang'];
                itemProduc.lotrinh = item['lotrinh'];
                itemProduc.diadiembochang = item['diadiembochang'];
                itemProduc.hinhthucthanhtoan = item['hinhthucthanhtoan'];
                itemProduc.tiencuoc = item['tiencuoc'];
                itemProduc.trangthai = item['trangthai'];
                itemProduc.ghichu = item['ghichu'];
                i++;
                listP.push(itemProduc);
            }
        }
        return listP;
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
    initTable() {
        this.tableConfig = {
            showCheckbox: false,
            headers: [
                {
                    title: 'STT',
                    field: 'stt',
                    width: 80,
                },
                {
                    title: 'ID Khách Hàng',
                    width: 180,
                    field: 'idkhachhang',
                },
                {
                    title: 'Tên Khách Hàng',
                    width: 170,
                    field: 'tenkhachhang',
                    // tdTemplate: this.Tltentai
                },
                {
                    title: 'Nội dung bóc hàng',
                    width: 450,
                    field: 'noidungmathang',
                    //tdTemplate: this.tiencuocTpl
                },
                {
                    title: 'Tiền cước',
                    width: 100,
                    field: 'tiencuoc',
                    tdTemplate: this.tiencuocTpl
                },
                {
                    title: 'Địa điểm bóc hàng',
                    width: 300,
                    field: 'diadiembochang',
                },
                {
                    title: 'Hình thức thanh toán',
                    width: 250,
                    field: 'hinhthucthanhtoan'
                },
                {
                    title: 'Lộ trình',
                    width: 150,
                    field: 'lotrinh'
                },
                {
                    title: 'Ghi chú',
                    width: 450,
                    field: 'ghichu'
                },
                {
                    title: 'Hành động',
                    tdTemplate: this.operationTpl,
                    width: 200,
                    fixed: true,
                    fixedDir: 'right'
                }
            ],
            total: 0,
            loading: true,
            pageSize: 10,
            pageIndex: 1,
            yScroll: 400
        };
    }
}
Spch00201Component.ɵfac = function Spch00201Component_Factory(t) { return new (t || Spch00201Component)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_7__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_widget_modal_subwindowproduct_subwindow_product_service__WEBPACK_IMPORTED_MODULE_8__.SubwindowProductService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_24__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_http_chuyen_chuyendto_service__WEBPACK_IMPORTED_MODULE_9__.ChuyendtoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_http_chuyen_chuyen_service__WEBPACK_IMPORTED_MODULE_10__.ChuyenService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_http_phieunhaphang_phieunhaphang_service__WEBPACK_IMPORTED_MODULE_11__.PhieunhaphangService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_http_chiphichuyen_chiphichuyen_service__WEBPACK_IMPORTED_MODULE_12__.ChiphichuyenService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_widget_modal_subwindowchiphi_subwindow_chiphi_service__WEBPACK_IMPORTED_MODULE_13__.SubwindowChiphiService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_14__.TabService)); };
Spch00201Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: Spch00201Component, selectors: [["app-spch00201"]], viewQuery: function Spch00201Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.tiencuocTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([_app_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_4__.DestroyService]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 82, vars: 211, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzHoverable", "", 1, "m-b-10", 3, "nzBodyStyle"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzRequired", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", "nzFor"], [3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [4, "ngIf", "ngIfElse"], ["showmachuyen", ""], [3, "ngStyle"], [3, "tableTitle", "btnTpl", "btnConfirm", "reload"], [3, "checkedCashArrayFromComment", "tableConfig", "tableData", "selectedChange", "changePageNum"], ["operationTpl", ""], ["tiencuocTpl", ""], ["tableConfirm", ""], ["tableBtns", ""], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"], ["class", "operate-text", 4, "appAuth"], [1, "operate-text"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "disabled", "click"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", 3, "disabled", "click"], ["nz-icon", "", "nzType", "caret-right"], ["nz-button", "", "nzType", "primary", "class", "m-r-8", 3, "disabled", "click", 4, "appAuth"], ["nz-button", "", "nzType", "default", 3, "disabled", "click", 4, "appAuth"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"], ["nz-icon", "", "nzType", "delete"]], template: function Spch00201Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "div", 3)(4, "div", 4)(5, "nz-form-item")(6, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "M\u00E3 Chuy\u1EBFn h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, Spch00201Component_ng_container_9_Template, 3, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, Spch00201Component_ng_template_10_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 4)(13, "nz-form-item")(14, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Bi\u1EC3n s\u1ED1 xe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "nz-form-control", 6)(17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 4)(20, "nz-form-item")(21, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Ti\u1EC1n \u0111\u01B0a tr\u01B0\u1EDBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "nz-form-control", 6)(24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "nz-form-item")(30, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31, "T\u00E0i ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "nz-form-control", 6)(33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "div", 4)(36, "nz-form-item")(37, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](38, "T\u00E0i ph\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "nz-form-control", 6)(40, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "div", 4)(43, "nz-form-item")(44, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](45, "\u0110i\u1EC3m \u0111i - \u0111i\u1EC3m \u0111\u1EBFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "nz-form-control", 6)(47, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "div", 3)(50, "div", 4)(51, "nz-form-item")(52, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53, "Ng\u00E0y Kh\u1EDFi h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](54, "nz-form-control", 6)(55, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "div", 4)(58, "nz-form-item")(59, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](60, "Ng\u00E0y v\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](61, "nz-form-control", 6)(62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](64, "div", 4)(65, "nz-form-item")(66, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](67, "T\u1ED5ng C\u01B0\u1EDBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](68, "nz-form-control", 6)(69, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](71, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](72, "app-card-table-wrap", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("reload", function Spch00201Component_Template_app_card_table_wrap_reload_72_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "app-ant-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selectedChange", function Spch00201Component_Template_app_ant_table_selectedChange_73_listener($event) { return ctx.selectedChecked($event); })("changePageNum", function Spch00201Component_Template_app_ant_table_changePageNum_73_listener() { return ctx.getDataList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](74, Spch00201Component_ng_template_74_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](76, Spch00201Component_ng_template_76_Template, 3, 5, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](78, Spch00201Component_ng_template_78_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](80, Spch00201Component_ng_template_80_Template, 2, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](79);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](199, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](200, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.ChuyenDto.id == "")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](201, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.biensoxe);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](202, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](26, 191, ctx.ChuyenDto.tienxe * 1000, "VND", ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](203, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](204, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.idtai);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](205, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.idphu);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](206, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.changduong);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](207, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](208, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.ngaydi);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](209, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.ChuyenDto.ngayve);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 9)("nzXl", 9)("nzLg", 9)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzXXl", 12)("nzXl", 12)("nzLg", 12)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](210, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](71, 195, ctx.tongcuoc * 1000, "VND", ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("tableTitle", "Danh s\u00E1ch m\u1EB7t h\u00E0ng")("btnTpl", _r9)("btnConfirm", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checkedCashArrayFromComment", ctx.checkedCashArray)("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgStyle, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__.PageHeaderComponent, _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_16__.AntTableComponent, _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_17__.AuthDirective, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_18__.CardTableWrapComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_29__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_31__.NzCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGNoMDAyMDEuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 51911:
/*!************************************************************!*\
  !*** ./src/app/pages/chuyen/spch00201/spch00201.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spch00201Module": () => (/* binding */ Spch00201Module)
/* harmony export */ });
/* harmony import */ var _spch00201_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spch00201.component */ 76527);
/* harmony import */ var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/highlight */ 16075);
/* harmony import */ var _spch00201_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spch00201-routing.module */ 2685);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _app_widget_modal_subwindowproduct_subwindowproduct_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/widget/modal/subwindowproduct/subwindowproduct.module */ 41227);
/* harmony import */ var _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/widget/modal/subwindowchiphi/subwindowchiphi.module */ 8538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class Spch00201Module {
}
Spch00201Module.ɵfac = function Spch00201Module_Factory(t) { return new (t || Spch00201Module)(); };
Spch00201Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Spch00201Module });
Spch00201Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_spch00201_routing_module__WEBPACK_IMPORTED_MODULE_1__.Spch00201RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_6__.NzHighlightModule,
        _app_widget_modal_subwindowproduct_subwindowproduct_module__WEBPACK_IMPORTED_MODULE_3__.SubwindowproductModule,
        _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_4__.SubwindowchiphiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Spch00201Module, { declarations: [_spch00201_component__WEBPACK_IMPORTED_MODULE_0__.Spch00201Component], imports: [_spch00201_routing_module__WEBPACK_IMPORTED_MODULE_1__.Spch00201RoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_6__.NzHighlightModule,
        _app_widget_modal_subwindowproduct_subwindowproduct_module__WEBPACK_IMPORTED_MODULE_3__.SubwindowproductModule,
        _app_widget_modal_subwindowchiphi_subwindowchiphi_module__WEBPACK_IMPORTED_MODULE_4__.SubwindowchiphiModule] }); })();


/***/ }),

/***/ 94588:
/*!****************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowproduct/subwindow-product.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowProductService": () => (/* binding */ SubwindowProductService)
/* harmony export */ });
/* harmony import */ var _subwindowproduct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowproduct.component */ 49890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/widget/base-modal */ 69174);



class SubwindowProductService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _subwindowproduct_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowproductComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
SubwindowProductService.ɵfac = function SubwindowProductService_Factory(t) { return new (t || SubwindowProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
SubwindowProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubwindowProductService, factory: SubwindowProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49890:
/*!*****************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowproduct/subwindowproduct.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowproductComponent": () => (/* binding */ SubwindowproductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _app_utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/utils/tools */ 58995);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _app_core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/http/system/account.service */ 69454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 20558);
















const _c0 = function () { return { "background": "#555555" }; };
function SubwindowproductComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-form-item")(2, "nz-form-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "M\u00E3 Phi\u1EBFu Nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-form-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
} }
function SubwindowproductComponent_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 25);
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", option_r2["id"])("nzLabel", option_r2["name"]);
} }
const _c1 = function () { return { minRows: 2, maxRows: 6 }; };
class SubwindowproductComponent {
    constructor(modalRef, fb, cdf, dataKhachhangService) {
        this.modalRef = modalRef;
        this.fb = fb;
        this.cdf = cdf;
        this.dataKhachhangService = dataKhachhangService;
        this.isEdit = false;
        this.const = _app_common_const__WEBPACK_IMPORTED_MODULE_0__;
        this.listKh = [];
        this.tenkhachhang = "";
        this.params = {};
    }
    ngOnInit() {
        this.getListKh();
        this.initForm();
        if (Object.keys(this.params).length > 0) {
            this.isEdit = true;
            this.addEditForm.patchValue(this.params);
        }
    }
    getAsyncFnData(modalValue) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(modalValue);
    }
    getCurrentValue() {
        if (!(0,_app_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnCheckForm)(this.addEditForm)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
        }
        this.addEditForm.value['tenkhachhang'] = this.tenkhachhang;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.addEditForm.value);
    }
    initForm() {
        this.addEditForm = this.fb.group({
            id: [null],
            iduser: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            noidungdonhang: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            tiencuoc: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            diadiembochang: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            hinhthucthanhtoan: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            lotrinh: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            ghichu: [null],
        });
    }
    changeKH($event) {
        for (let e of this.listKh) {
            if (e['id'] == $event) {
                this.tenkhachhang = e['name'];
                break;
            }
        }
    }
    getListKh() {
        const params = {
            pageSize: 0,
            pageNum: 0,
            filters: {
                phongban_id: this.const.idKhachhang
            }
        };
        this.dataKhachhangService
            .getAccount(params)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
        }))
            .subscribe(res => {
            this.listKh = res;
            this.cdf.markForCheck();
        });
    }
}
SubwindowproductComponent.ɵfac = function SubwindowproductComponent_Factory(t) { return new (t || SubwindowproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core_services_http_system_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService)); };
SubwindowproductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubwindowproductComponent, selectors: [["app-subwindowproduct"]], decls: 48, vars: 36, consts: [["nz-form", "", 3, "formGroup"], [4, "ngIf"], ["nzRequired", "", "nzFor", "iduser", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn T\u00E0i ph\u1EE5", 3, "nzSm", "nzXs"], ["name", "iduser", "id", "iduser", "formControlName", "iduser", "nzAllowClear", "", "nzShowSearch", "", "nzPlaceHolder", "Select", 3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzRequired", "", "nzFor", "noidungdonhang", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp n\u1ED9i dung \u0111\u01A1n h\u00E0ng", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "noidungdonhang", "name", "noidungdonhang", "placeholder", "", "id", "noidungdonhang"], ["nzRequired", "", "nzFor", "trongtai", 3, "nzSm", "nzXs"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp ti\u1EC1n c\u01B0\u1EDBc", 3, "nzSm", "nzXs"], ["name", "tiencuoc", "id", "tiencuoc", "formControlName", "tiencuoc", 3, "nzMin", "nzMax", "nzStep"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp \u0111\u1ECBa \u0111i\u1EC3m b\u00F3c h\u00E0ng", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "diadiembochang", "name", "diadiembochang", "placeholder", "", "id", "diadiembochang"], ["nzErrorTip", "", 3, "nzSm", "nzXs"], ["formControlName", "hinhthucthanhtoan"], ["nz-radio", "", "nzValue", "1"], ["nz-radio", "", "nzValue", "2"], ["nz-radio", "", "nzValue", "3"], ["formControlName", "lotrinh"], ["nz-radio", "", "nzValue", "0"], ["nzFor", "ghichu", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "ghichu", "placeholder", "M\u1ED1t s\u1ED1 ghi ch\u00FA v\u1EC1 th\u00F4ng tin \u0111\u01A1n h\u00E0ng.", 3, "nzAutosize"], ["nzRequired", "", "nzFor", "id", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "id", "name", "id", "placeholder", "", "id", "id", 3, "readonly", "ngStyle"], [3, "nzValue", "nzLabel"]], template: function SubwindowproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubwindowproductComponent_ng_container_1_Template, 6, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-form-item")(3, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Id Kh\u00E1ch h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-form-control", 3)(6, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubwindowproductComponent_Template_nz_select_ngModelChange_6_listener($event) { return ctx.changeKH($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubwindowproductComponent_nz_option_7_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "N\u1ED9i dung \u0111\u01A1n h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-item")(14, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Ti\u1EC1n c\u01B0\u1EDBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "nz-input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-form-item")(19, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0110\u1ECBa \u0111i\u1EC3m b\u00F3c h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-form-item")(24, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "H\u00ECnh th\u1EE9c thanh to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "nz-form-control", 14)(27, "nz-radio-group", 15)(28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Tr\u1EF1c ti\u1EBFp");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Ghi n\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Khi nh\u1EADn h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-form-item")(35, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "L\u1ED9 tr\u00ECnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-form-control", 14)(38, "nz-radio-group", 19)(39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "H\u00E0ng \u0111i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "H\u00E0ng v\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "nz-form-item")(44, "nz-form-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Ghi ch\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-form-control", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listKh);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMin", 100)("nzMax", 50000)("nzStep", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c1));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzAutosizeDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioGroupComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__.NzInputNumberComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ3aW5kb3dwcm9kdWN0LmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 41227:
/*!**************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowproduct/subwindowproduct.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowproductModule": () => (/* binding */ SubwindowproductModule)
/* harmony export */ });
/* harmony import */ var _subwindowproduct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowproduct.component */ 49890);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SubwindowproductModule {
}
SubwindowproductModule.ɵfac = function SubwindowproductModule_Factory(t) { return new (t || SubwindowproductModule)(); };
SubwindowproductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubwindowproductModule });
SubwindowproductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubwindowproductModule, { declarations: [_subwindowproduct_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowproductComponent], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_chuyen_spch00201_spch00201_module_ts.js.map