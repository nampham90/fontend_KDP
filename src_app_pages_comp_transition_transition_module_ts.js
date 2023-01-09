"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_transition_transition_module_ts"],{

/***/ 81349:
/*!****************************************************************************!*\
  !*** ./src/app/pages/comp/transition/angular-img/angular-img.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularImgComponent": () => (/* binding */ AngularImgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AngularImgComponent {
    constructor() { }
    ngOnInit() { }
}
AngularImgComponent.ɵfac = function AngularImgComponent_Factory(t) { return new (t || AngularImgComponent)(); };
AngularImgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularImgComponent, selectors: [["app-angular-img"]], decls: 1, vars: 0, consts: [["alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="]], template: function AngularImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 230px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItaW1nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDRjtBQUhBO0VBSUksWUFBQTtBQUVKIiwiZmlsZSI6ImFuZ3VsYXItaW1nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIzMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6275:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/comp/transition/demo-dynamic-params/demo-dynamic-params.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoDynamicParamsComponent": () => (/* binding */ DemoDynamicParamsComponent)
/* harmony export */ });
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-animations */ 19862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 20558);
/* harmony import */ var _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angular-img/angular-img.component */ 81349);














function DemoDynamicParamsComponent_nz_form_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u653E\u5927\u7F29\u5C0F\u500D\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-input-number", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_nz_form_item_14_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r86.scale = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.scale)("nzMin", 0)("nzStep", 0.01);
} }
function DemoDynamicParamsComponent_nz_form_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Translate (px, %, rem, em, vw, vh):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-control")(4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_nz_form_item_15_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r88.translate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.translate);
} }
function DemoDynamicParamsComponent_nz_form_item_16_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u65CB\u8F6C\u5EA6\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-input-number", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_nz_form_item_16_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r90.degrees = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.degrees)("nzMin", 0)("nzStep", 0.01);
} }
const _c0 = function (a0, a1) { return { duration: a0, delay: a1 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function DemoDynamicParamsComponent_app_angular_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounce", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r4.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r4.duration, ctx_r4.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flash", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r5.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r5.duration, ctx_r5.delay)));
} }
const _c2 = function (a0, a1, a2) { return { duration: a0, delay: a1, scale: a2 }; };
function DemoDynamicParamsComponent_app_angular_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pulse", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r6.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c2, ctx_r6.duration, ctx_r6.delay, ctx_r6.scale)));
} }
function DemoDynamicParamsComponent_app_angular_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rubberBand", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r7.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r7.duration, ctx_r7.delay)));
} }
const _c3 = function (a0, a1, a2) { return { duration: a0, delay: a1, translate: a2 }; };
function DemoDynamicParamsComponent_app_angular_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@shake", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r8.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r8.duration, ctx_r8.delay, ctx_r8.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swing", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r9.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r9.duration, ctx_r9.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tada", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r10.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r10.duration, ctx_r10.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@wobble", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r11.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r11.duration, ctx_r11.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jello", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r12.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r12.duration, ctx_r12.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r13.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r13.duration, ctx_r13.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r14.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r14.duration, ctx_r14.delay, ctx_r14.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r15.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r15.duration, ctx_r15.delay, ctx_r15.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r16.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r16.duration, ctx_r16.delay, ctx_r16.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r17.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r17.duration, ctx_r17.delay, ctx_r17.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r18.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r18.duration, ctx_r18.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r19.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r19.duration, ctx_r19.delay, ctx_r19.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r20.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r20.duration, ctx_r20.delay, ctx_r20.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r21.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r21.duration, ctx_r21.delay, ctx_r21.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r22.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r22.duration, ctx_r22.delay, ctx_r22.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r23.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r23.duration, ctx_r23.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r24.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r24.duration, ctx_r24.delay, ctx_r24.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDownBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r25.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r25.duration, ctx_r25.delay, ctx_r25.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r26.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r26.duration, ctx_r26.delay, ctx_r26.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeftBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r27.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r27.duration, ctx_r27.delay, ctx_r27.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r28.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r28.duration, ctx_r28.delay, ctx_r28.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRightBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r29.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r29.duration, ctx_r29.delay, ctx_r29.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r30.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r30.duration, ctx_r30.delay, ctx_r30.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUpBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r31.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r31.duration, ctx_r31.delay, ctx_r31.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r32.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r32.duration, ctx_r32.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r33.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r33.duration, ctx_r33.delay, ctx_r33.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutDownBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r34.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r34.duration, ctx_r34.delay, ctx_r34.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r35.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r35.duration, ctx_r35.delay, ctx_r35.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutLeftBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r36.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r36.duration, ctx_r36.delay, ctx_r36.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r37.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r37.duration, ctx_r37.delay, ctx_r37.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutRightBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r38.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r38.duration, ctx_r38.delay, ctx_r38.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r39.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r39.duration, ctx_r39.delay, ctx_r39.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutUpBig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r40.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r40.duration, ctx_r40.delay, ctx_r40.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r41.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r41.duration, ctx_r41.delay)));
} }
const _c4 = function (a0, a1, a2) { return { duration: a0, delay: a1, degrees: a2 }; };
function DemoDynamicParamsComponent_app_angular_img_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r42.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r42.duration, ctx_r42.delay, ctx_r42.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInY", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r43.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r43.duration, ctx_r43.delay, ctx_r43.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipOutX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r44.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r44.duration, ctx_r44.delay, ctx_r44.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipOutY", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r45.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r45.duration, ctx_r45.delay, ctx_r45.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@lightSpeedIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r46.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r46.duration, ctx_r46.delay, ctx_r46.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@lightSpeedOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r47.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r47.duration, ctx_r47.delay, ctx_r47.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r48.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r48.duration, ctx_r48.delay, ctx_r48.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r49.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r49.duration, ctx_r49.delay, ctx_r49.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r50.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r50.duration, ctx_r50.delay, ctx_r50.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r51.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r51.duration, ctx_r51.delay, ctx_r51.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r52.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r52.duration, ctx_r52.delay, ctx_r52.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r53.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r53.duration, ctx_r53.delay, ctx_r53.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutDownLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r54.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r54.duration, ctx_r54.delay, ctx_r54.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutDownRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r55.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r55.duration, ctx_r55.delay, ctx_r55.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutUpLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r56.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r56.duration, ctx_r56.delay, ctx_r56.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutUpRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r57.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r57.duration, ctx_r57.delay, ctx_r57.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r58.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r58.duration, ctx_r58.delay, ctx_r58.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r59.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r59.duration, ctx_r59.delay, ctx_r59.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r60.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r60.duration, ctx_r60.delay, ctx_r60.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r61.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r61.duration, ctx_r61.delay, ctx_r61.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r62.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r62.duration, ctx_r62.delay, ctx_r62.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r63.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r63.duration, ctx_r63.delay, ctx_r63.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r64.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c3, ctx_r64.duration, ctx_r64.delay, ctx_r64.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r65.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r65.duration, ctx_r65.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r66.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r66.duration, ctx_r66.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r67.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r67.duration, ctx_r67.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r68.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r68.duration, ctx_r68.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r69.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r69.duration, ctx_r69.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r70.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r70.duration, ctx_r70.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r71.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r71.duration, ctx_r71.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutDown", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r72.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r72.duration, ctx_r72.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutLeft", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r73.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r73.duration, ctx_r73.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutRight", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r74.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r74.duration, ctx_r74.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutUp", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r75.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r75.duration, ctx_r75.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hinge", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r76.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r76.duration, ctx_r76.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jackInTheBox", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r77.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r77.duration, ctx_r77.delay)));
} }
const _c5 = function (a0, a1, a2, a3) { return { duration: a0, delay: a1, degrees: a2, translate: a3 }; };
function DemoDynamicParamsComponent_app_angular_img_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rollIn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, ctx_r78.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](1, _c5, ctx_r78.duration, ctx_r78.delay, ctx_r78.degrees, ctx_r78.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rollOut", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, ctx_r79.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](1, _c5, ctx_r79.duration, ctx_r79.delay, ctx_r79.degrees, ctx_r79.translate)));
} }
function DemoDynamicParamsComponent_app_angular_img_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapse", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r80.animationWithState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r80.duration, ctx_r80.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapseHorizontally", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r81.animationWithState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r81.duration, ctx_r81.delay)));
} }
function DemoDynamicParamsComponent_app_angular_img_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r82.animationWithState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c4, ctx_r82.duration, ctx_r82.delay, ctx_r82.degrees)));
} }
function DemoDynamicParamsComponent_app_angular_img_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hueRotate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r83.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r83.duration, ctx_r83.delay)));
} }
function DemoDynamicParamsComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u9009\u62E9\u52A8\u753B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DemoDynamicParamsComponent_nz_option_group_102_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 22);
} if (rf & 2) {
    const animation_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", animation_r94)("nzLabel", animation_r94);
} }
function DemoDynamicParamsComponent_nz_option_group_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoDynamicParamsComponent_nz_option_group_102_nz_option_1_Template, 1, 2, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", option_r92.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", option_r92.animations);
} }
const _c6 = function () { return { delay: 0 }; };
const _c7 = function (a1) { return { value: "", params: a1 }; };
const _c8 = function () { return ["shake", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "bounceOutDown", "bounceOutUp", "bounceOutLeft", "bounceOutRight", "fadeInDownBig", "fadeInUpBig", "fadeInLeftBig", "fadeInRightBig", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight", "fadeOutDownBig", "fadeOutUpBig", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDown", "fadeOutUp", "fadeOutLeft", "fadeOutRight", "lightSpeedIn", "lightSpeedOut", "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "slideOutUp", "slideOutDown", "slideOutLeft", "slideOutRight", "rollIn", "rollOut"]; };
const _c9 = function () { return ["flipInX", "flipInY", "flipOutX", "flipOutY", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "rollIn", "rollOut", "rotate"]; };
const _c10 = function () { return { delay: 1200, duration: 1000 }; };
class DemoDynamicParamsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.delay = 0;
        this.duration = 0;
        this.scale = 0;
        this.translate = '';
        this.degrees = 0;
        this.options = [
            {
                label: 'Attention Seekers',
                animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello']
            },
            {
                label: 'Bouncing Entrances',
                animations: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp']
            },
            {
                label: 'Bouncing Exits',
                animations: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp']
            },
            {
                label: 'Fading Entrances',
                animations: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig']
            },
            {
                label: 'Fading Exits',
                animations: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig']
            },
            {
                label: 'Flippers',
                animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
            },
            {
                label: 'Lightspeed',
                animations: ['lightSpeedIn', 'lightSpeedOut']
            },
            {
                label: 'Rotating Entrances',
                animations: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight']
            },
            {
                label: 'Rotating Exits',
                animations: ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight']
            },
            {
                label: 'Sliding Entrances',
                animations: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']
            },
            {
                label: 'Sliding Exits',
                animations: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight']
            },
            {
                label: 'Zoom Entrances',
                animations: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp']
            },
            {
                label: 'Zoom Exits',
                animations: ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp']
            },
            {
                label: 'Specials',
                animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
            },
            {
                label: 'Other',
                animations: ['collapse', 'collapseHorizontally', 'rotate', 'hueRotate']
            }
        ];
        this.animation = 'pulse';
        this.animationState = false;
        this.animationWithState = false;
    }
    animate() {
        this.animationState = false;
        setTimeout(() => {
            this.animationState = !this.animationState;
            this.animationWithState = !this.animationWithState;
            this.cdr.markForCheck();
        }, 1);
    }
    animationChanged() {
        this.setDefaultParams();
        this.animate();
    }
    setDefaultParams() {
        this.duration = 1000;
        this.delay = 0;
        switch (this.animation) {
            case 'bounceInDown':
            case 'bounceInUp':
            case 'bounceInLeft':
            case 'bounceInRight': {
                this.translate = '3000px';
                break;
            }
            case 'bounceOutDown':
            case 'bounceOutUp':
            case 'bounceOutLeft':
            case 'bounceOutRight': {
                this.translate = '2000px';
                break;
            }
            case 'pulse': {
                this.scale = 1.05;
                break;
            }
            case 'shake': {
                this.translate = '10px';
                break;
            }
            case 'fadeInDown':
            case 'fadeInUp':
            case 'fadeInLeft':
            case 'fadeInRight':
            case 'fadeOutDown':
            case 'fadeOutUp':
            case 'fadeOutLeft':
            case 'fadeOutRight': {
                this.translate = '100%';
                break;
            }
            case 'fadeInDownBig':
            case 'fadeInUpBig':
            case 'fadeInLeftBig':
            case 'fadeInRightBig':
            case 'fadeOutDownBig':
            case 'fadeOutUpBig':
            case 'fadeOutLeftBig':
            case 'fadeOutRightBig': {
                this.translate = '2000px';
                break;
            }
            case 'flipInX':
            case 'flipInY':
            case 'flipOutX':
            case 'flipOutY': {
                this.degrees = 90;
                break;
            }
            case 'lightSpeedIn':
            case 'lightSpeedOut': {
                this.translate = '100%';
                break;
            }
            case 'rotateInDownLeft': {
                this.degrees = -45;
                break;
            }
            case 'rotateInDownRight':
            case 'rotateInUpLeft': {
                this.degrees = 45;
                break;
            }
            case 'rotateInUpRight': {
                this.degrees = -90;
                break;
            }
            case 'rotateIn': {
                this.degrees = -200;
                break;
            }
            case 'rotateOut': {
                this.degrees = 200;
                break;
            }
            case 'rotateOutDownLeft': {
                this.degrees = 45;
                break;
            }
            case 'rotateOutDownRight':
            case 'rotateOutUpLeft': {
                this.degrees = -45;
                break;
            }
            case 'rotateOutUpRight': {
                this.degrees = 90;
                break;
            }
            case 'slideInUp':
            case 'slideInDown':
            case 'slideInLeft':
            case 'slideInRight': {
                this.translate = '100%';
                break;
            }
            case 'slideOutUp':
            case 'slideOutDown':
            case 'slideOutLeft':
            case 'slideOutRight': {
                this.translate = '100%';
                break;
            }
            case 'hinge': {
                this.duration = 2000;
                break;
            }
            case 'rollIn': {
                this.degrees = -120;
                this.translate = '-100%';
                break;
            }
            case 'rollOut': {
                this.degrees = 120;
                this.translate = '100%';
                break;
            }
            case 'collapse':
            case 'collapseHorizontally': {
                this.duration = 200;
                break;
            }
            case 'rotate': {
                this.degrees = 90;
                break;
            }
        }
    }
    ngOnInit() {
        this.setDefaultParams();
    }
}
DemoDynamicParamsComponent.ɵfac = function DemoDynamicParamsComponent_Factory(t) { return new (t || DemoDynamicParamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DemoDynamicParamsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoDynamicParamsComponent, selectors: [["app-demo-dynamic-params"]], decls: 105, vars: 108, consts: [[1, "center", "sp-28"], ["nz-form", "", "nzLayout", "vertical", 1, "center"], ["f", "ngForm"], ["nzRequired", "", "nzFor", "duration"], ["id", "duration", "name", "duration", 3, "ngModel", "nzMin", "nzStep", "ngModelChange"], ["nzRequired", "", "nzFor", "delay"], ["id", "delay", "name", "delay", 3, "ngModel", "nzMin", "nzStep", "ngModelChange"], [4, "ngIf"], [1, "center", 3, "ngSwitch"], [1, "center"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nzAllowClear", "", "nzPlaceHolder", "Choose", "nzShowSearch", "", 1, "m-r-8", 2, "width", "200px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"], ["nzRequired", "", "nzFor", "scale"], ["id", "scale", "name", "scale", 3, "ngModel", "nzMin", "nzStep", "ngModelChange"], ["nz-input", "", "id", "translate", "name", "translate", "pattern", "-?([0-9])?\\.?[0-9]+(px|%|rem|em|vw|vh|vmin|vmax)", 3, "ngModel", "ngModelChange"], ["nzRequired", "", "nzFor", "degrees"], ["id", "degrees", "name", "degrees", 3, "ngModel", "nzMin", "nzStep", "ngModelChange"], [3, "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function DemoDynamicParamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u52A8\u6001\u53C2\u6570 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1, 2)(4, "nz-form-item")(5, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u8FC7\u5EA6\u65F6\u95F4\uFF08ms\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control")(8, "nz-input-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_Template_nz_input_number_ngModelChange_8_listener($event) { return ctx.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u5EF6\u8FDF\u65F6\u95F4\uFF08ms\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-input-number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_Template_nz_input_number_ngModelChange_13_listener($event) { return ctx.delay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DemoDynamicParamsComponent_nz_form_item_14_Template, 5, 3, "nz-form-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DemoDynamicParamsComponent_nz_form_item_15_Template, 5, 1, "nz-form-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DemoDynamicParamsComponent_nz_form_item_16_Template, 5, 3, "nz-form-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DemoDynamicParamsComponent_app_angular_img_19_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DemoDynamicParamsComponent_app_angular_img_20_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DemoDynamicParamsComponent_app_angular_img_21_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DemoDynamicParamsComponent_app_angular_img_22_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DemoDynamicParamsComponent_app_angular_img_23_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DemoDynamicParamsComponent_app_angular_img_24_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DemoDynamicParamsComponent_app_angular_img_25_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DemoDynamicParamsComponent_app_angular_img_26_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DemoDynamicParamsComponent_app_angular_img_27_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DemoDynamicParamsComponent_app_angular_img_28_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DemoDynamicParamsComponent_app_angular_img_29_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DemoDynamicParamsComponent_app_angular_img_30_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DemoDynamicParamsComponent_app_angular_img_31_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DemoDynamicParamsComponent_app_angular_img_32_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DemoDynamicParamsComponent_app_angular_img_33_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DemoDynamicParamsComponent_app_angular_img_34_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DemoDynamicParamsComponent_app_angular_img_35_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, DemoDynamicParamsComponent_app_angular_img_36_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DemoDynamicParamsComponent_app_angular_img_37_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DemoDynamicParamsComponent_app_angular_img_38_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DemoDynamicParamsComponent_app_angular_img_39_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, DemoDynamicParamsComponent_app_angular_img_40_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, DemoDynamicParamsComponent_app_angular_img_41_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DemoDynamicParamsComponent_app_angular_img_42_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DemoDynamicParamsComponent_app_angular_img_43_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DemoDynamicParamsComponent_app_angular_img_44_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DemoDynamicParamsComponent_app_angular_img_45_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DemoDynamicParamsComponent_app_angular_img_46_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, DemoDynamicParamsComponent_app_angular_img_47_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DemoDynamicParamsComponent_app_angular_img_48_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DemoDynamicParamsComponent_app_angular_img_49_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DemoDynamicParamsComponent_app_angular_img_50_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, DemoDynamicParamsComponent_app_angular_img_51_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, DemoDynamicParamsComponent_app_angular_img_52_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DemoDynamicParamsComponent_app_angular_img_53_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DemoDynamicParamsComponent_app_angular_img_54_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DemoDynamicParamsComponent_app_angular_img_55_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DemoDynamicParamsComponent_app_angular_img_56_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DemoDynamicParamsComponent_app_angular_img_57_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DemoDynamicParamsComponent_app_angular_img_58_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DemoDynamicParamsComponent_app_angular_img_59_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, DemoDynamicParamsComponent_app_angular_img_60_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DemoDynamicParamsComponent_app_angular_img_61_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, DemoDynamicParamsComponent_app_angular_img_62_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DemoDynamicParamsComponent_app_angular_img_63_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, DemoDynamicParamsComponent_app_angular_img_64_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, DemoDynamicParamsComponent_app_angular_img_65_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, DemoDynamicParamsComponent_app_angular_img_66_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, DemoDynamicParamsComponent_app_angular_img_67_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DemoDynamicParamsComponent_app_angular_img_68_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, DemoDynamicParamsComponent_app_angular_img_69_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DemoDynamicParamsComponent_app_angular_img_70_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, DemoDynamicParamsComponent_app_angular_img_71_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, DemoDynamicParamsComponent_app_angular_img_72_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DemoDynamicParamsComponent_app_angular_img_73_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, DemoDynamicParamsComponent_app_angular_img_74_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DemoDynamicParamsComponent_app_angular_img_75_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, DemoDynamicParamsComponent_app_angular_img_76_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, DemoDynamicParamsComponent_app_angular_img_77_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, DemoDynamicParamsComponent_app_angular_img_78_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, DemoDynamicParamsComponent_app_angular_img_79_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, DemoDynamicParamsComponent_app_angular_img_80_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, DemoDynamicParamsComponent_app_angular_img_81_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DemoDynamicParamsComponent_app_angular_img_82_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, DemoDynamicParamsComponent_app_angular_img_83_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DemoDynamicParamsComponent_app_angular_img_84_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, DemoDynamicParamsComponent_app_angular_img_85_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, DemoDynamicParamsComponent_app_angular_img_86_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, DemoDynamicParamsComponent_app_angular_img_87_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, DemoDynamicParamsComponent_app_angular_img_88_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, DemoDynamicParamsComponent_app_angular_img_89_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, DemoDynamicParamsComponent_app_angular_img_90_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, DemoDynamicParamsComponent_app_angular_img_91_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, DemoDynamicParamsComponent_app_angular_img_92_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DemoDynamicParamsComponent_app_angular_img_93_Template, 1, 9, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, DemoDynamicParamsComponent_app_angular_img_94_Template, 1, 9, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, DemoDynamicParamsComponent_app_angular_img_95_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, DemoDynamicParamsComponent_app_angular_img_96_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, DemoDynamicParamsComponent_app_angular_img_97_Template, 1, 8, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, DemoDynamicParamsComponent_app_angular_img_98_Template, 1, 7, "app-angular-img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, DemoDynamicParamsComponent_div_99_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 9)(101, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoDynamicParamsComponent_Template_nz_select_ngModelChange_101_listener($event) { return ctx.animation = $event; })("ngModelChange", function DemoDynamicParamsComponent_Template_nz_select_ngModelChange_101_listener() { return ctx.animationChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, DemoDynamicParamsComponent_nz_option_group_102_Template, 2, 2, "nz-option-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoDynamicParamsComponent_Template_button_click_103_listener() { return ctx.animate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\u70B9\u51FB\u9A9A\u52A8\u8D77\u6765");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](98, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c6)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](101, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](100, _c6)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.duration)("nzMin", 1)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.delay)("nzMin", 1)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.animation === "pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](103, _c8).includes(ctx.animation));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](104, _c9).includes(ctx.animation));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.animation)("@enter2", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rubberBand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "shake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "tada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "wobble");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDownBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeftBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRightBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUpBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutDownBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutLeftBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutRightBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutUpBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipInX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipInY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipOutX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipOutY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "lightSpeedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "lightSpeedOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInDownLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInDownRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInUpLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInUpRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutDownLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutDownRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutUpLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutUpRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hinge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jackInTheBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rollIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rollOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "collapseHorizontally");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hueRotate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter3", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](106, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](105, _c10)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionGroupComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__.NzInputNumberComponent, _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__.AngularImgComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLWR5bmFtaWMtcGFyYW1zLmNvbXBvbmVudC5sZXNzIn0= */"], data: { animation: [
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInRightOnEnterAnimation)({ anchor: 'enter1', translate: '100%' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rollInOnEnterAnimation)({ anchor: 'enter2', translate: '800px', degrees: 360, delay: 250 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInUpLeftOnEnterAnimation)({ anchor: 'enter3' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flashAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.pulseAnimation)({ anchor: 'pulse' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rubberBandAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.shakeAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.swingAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.tadaAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.wobbleAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.jelloAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.bounceOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInDownBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInLeftBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInRightBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeInUpBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutDownBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutLeftBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutRightBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.fadeOutUpBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flipAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flipInXAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flipInYAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flipOutXAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.flipOutYAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.lightSpeedInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.lightSpeedOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInDownLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInDownRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInUpLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateInUpRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateOutDownLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateOutDownRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateOutUpLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateOutUpRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.slideOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.zoomOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.hingeAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.jackInTheBoxAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rollInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rollOutAnimation)(),
            // other
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.collapseAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.collapseHorizontallyAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.rotateAnimation)({ anchor: 'rotate90', degrees: 90 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.hueRotateAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_12__.hueRotateAnimation)({ anchor: 'hueButton', duration: 20000 })
        ] }, changeDetection: 0 });


/***/ }),

/***/ 13394:
/*!************************************************************************!*\
  !*** ./src/app/pages/comp/transition/demo-main/demo-main.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMainComponent": () => (/* binding */ DemoMainComponent)
/* harmony export */ });
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-animations */ 19862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angular-img/angular-img.component */ 81349);










function DemoMainComponent_app_angular_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounce", ctx_r0.animationState);
} }
function DemoMainComponent_app_angular_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flash", ctx_r1.animationState);
} }
function DemoMainComponent_app_angular_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pulse", ctx_r2.animationState);
} }
function DemoMainComponent_app_angular_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rubberBand", ctx_r3.animationState);
} }
function DemoMainComponent_app_angular_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@shake", ctx_r4.animationState);
} }
function DemoMainComponent_app_angular_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swing", ctx_r5.animationState);
} }
function DemoMainComponent_app_angular_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tada", ctx_r6.animationState);
} }
function DemoMainComponent_app_angular_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@wobble", ctx_r7.animationState);
} }
function DemoMainComponent_app_angular_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jello", ctx_r8.animationState);
} }
function DemoMainComponent_app_angular_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@heartBeat", ctx_r9.animationState);
} }
function DemoMainComponent_app_angular_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@headShake", ctx_r10.animationState);
} }
function DemoMainComponent_app_angular_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceIn", ctx_r11.animationState);
} }
function DemoMainComponent_app_angular_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInDown", ctx_r12.animationState);
} }
function DemoMainComponent_app_angular_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInLeft", ctx_r13.animationState);
} }
function DemoMainComponent_app_angular_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInRight", ctx_r14.animationState);
} }
function DemoMainComponent_app_angular_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInUp", ctx_r15.animationState);
} }
function DemoMainComponent_app_angular_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOut", ctx_r16.animationState);
} }
function DemoMainComponent_app_angular_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutDown", ctx_r17.animationState);
} }
function DemoMainComponent_app_angular_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutLeft", ctx_r18.animationState);
} }
function DemoMainComponent_app_angular_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutRight", ctx_r19.animationState);
} }
function DemoMainComponent_app_angular_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOutUp", ctx_r20.animationState);
} }
function DemoMainComponent_app_angular_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", ctx_r21.animationState);
} }
function DemoMainComponent_app_angular_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDown", ctx_r22.animationState);
} }
function DemoMainComponent_app_angular_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDownBig", ctx_r23.animationState);
} }
function DemoMainComponent_app_angular_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeft", ctx_r24.animationState);
} }
function DemoMainComponent_app_angular_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeftBig", ctx_r25.animationState);
} }
function DemoMainComponent_app_angular_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRight", ctx_r26.animationState);
} }
function DemoMainComponent_app_angular_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRightBig", ctx_r27.animationState);
} }
function DemoMainComponent_app_angular_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", ctx_r28.animationState);
} }
function DemoMainComponent_app_angular_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUpBig", ctx_r29.animationState);
} }
function DemoMainComponent_app_angular_img_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOut", ctx_r30.animationState);
} }
function DemoMainComponent_app_angular_img_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutDown", ctx_r31.animationState);
} }
function DemoMainComponent_app_angular_img_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutDownBig", ctx_r32.animationState);
} }
function DemoMainComponent_app_angular_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutLeft", ctx_r33.animationState);
} }
function DemoMainComponent_app_angular_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutLeftBig", ctx_r34.animationState);
} }
function DemoMainComponent_app_angular_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutRight", ctx_r35.animationState);
} }
function DemoMainComponent_app_angular_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutRightBig", ctx_r36.animationState);
} }
function DemoMainComponent_app_angular_img_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutUp", ctx_r37.animationState);
} }
function DemoMainComponent_app_angular_img_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeOutUpBig", ctx_r38.animationState);
} }
function DemoMainComponent_app_angular_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flip", ctx_r39.animationState);
} }
function DemoMainComponent_app_angular_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r40.animationState);
} }
function DemoMainComponent_app_angular_img_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInY", ctx_r41.animationState);
} }
function DemoMainComponent_app_angular_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipOutX", ctx_r42.animationState);
} }
function DemoMainComponent_app_angular_img_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipOutY", ctx_r43.animationState);
} }
function DemoMainComponent_app_angular_img_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@lightSpeedIn", ctx_r44.animationState);
} }
function DemoMainComponent_app_angular_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@lightSpeedOut", ctx_r45.animationState);
} }
function DemoMainComponent_app_angular_img_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateIn", ctx_r46.animationState);
} }
function DemoMainComponent_app_angular_img_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownLeft", ctx_r47.animationState);
} }
function DemoMainComponent_app_angular_img_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownRight", ctx_r48.animationState);
} }
function DemoMainComponent_app_angular_img_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpLeft", ctx_r49.animationState);
} }
function DemoMainComponent_app_angular_img_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpRight", ctx_r50.animationState);
} }
function DemoMainComponent_app_angular_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOut", ctx_r51.animationState);
} }
function DemoMainComponent_app_angular_img_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutDownLeft", ctx_r52.animationState);
} }
function DemoMainComponent_app_angular_img_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutDownRight", ctx_r53.animationState);
} }
function DemoMainComponent_app_angular_img_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutUpLeft", ctx_r54.animationState);
} }
function DemoMainComponent_app_angular_img_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateOutUpRight", ctx_r55.animationState);
} }
function DemoMainComponent_app_angular_img_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInUp", ctx_r56.animationState);
} }
function DemoMainComponent_app_angular_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInDown", ctx_r57.animationState);
} }
function DemoMainComponent_app_angular_img_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", ctx_r58.animationState);
} }
function DemoMainComponent_app_angular_img_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInRight", ctx_r59.animationState);
} }
function DemoMainComponent_app_angular_img_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutUp", ctx_r60.animationState);
} }
function DemoMainComponent_app_angular_img_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutDown", ctx_r61.animationState);
} }
function DemoMainComponent_app_angular_img_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutLeft", ctx_r62.animationState);
} }
function DemoMainComponent_app_angular_img_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideOutRight", ctx_r63.animationState);
} }
function DemoMainComponent_app_angular_img_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomIn", ctx_r64.animationState);
} }
function DemoMainComponent_app_angular_img_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInDown", ctx_r65.animationState);
} }
function DemoMainComponent_app_angular_img_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInLeft", ctx_r66.animationState);
} }
function DemoMainComponent_app_angular_img_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInRight", ctx_r67.animationState);
} }
function DemoMainComponent_app_angular_img_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInUp", ctx_r68.animationState);
} }
function DemoMainComponent_app_angular_img_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOut", ctx_r69.animationState);
} }
function DemoMainComponent_app_angular_img_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutDown", ctx_r70.animationState);
} }
function DemoMainComponent_app_angular_img_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutLeft", ctx_r71.animationState);
} }
function DemoMainComponent_app_angular_img_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutRight", ctx_r72.animationState);
} }
function DemoMainComponent_app_angular_img_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomOutUp", ctx_r73.animationState);
} }
function DemoMainComponent_app_angular_img_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hinge", ctx_r74.animationState);
} }
function DemoMainComponent_app_angular_img_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jackInTheBox", ctx_r75.animationState);
} }
function DemoMainComponent_app_angular_img_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rollIn", ctx_r76.animationState);
} }
function DemoMainComponent_app_angular_img_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rollOut", ctx_r77.animationState);
} }
function DemoMainComponent_app_angular_img_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapse", ctx_r78.animationWithState);
} }
function DemoMainComponent_app_angular_img_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapseHorizontally", ctx_r79.animationWithState);
} }
function DemoMainComponent_app_angular_img_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", ctx_r80.animationWithState);
} }
function DemoMainComponent_app_angular_img_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate90", ctx_r81.animationWithState);
} }
const _c0 = function () { return { duration: 700, degrees: 720 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function DemoMainComponent_app_angular_img_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r82.animationWithState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
} }
function DemoMainComponent_app_angular_img_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hueRotate", ctx_r83.animationState);
} }
function DemoMainComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u9009\u62E9\u52A8\u753B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DemoMainComponent_nz_option_group_92_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 12);
} if (rf & 2) {
    const animation_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", animation_r88)("nzLabel", animation_r88);
} }
function DemoMainComponent_nz_option_group_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoMainComponent_nz_option_group_92_nz_option_1_Template, 1, 2, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", option_r86.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", option_r86.animations);
} }
class DemoMainComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.options = [
            {
                label: 'Attention Seekers',
                animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat', 'headShake']
            },
            {
                label: 'Bouncing Entrances',
                animations: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp']
            },
            {
                label: 'Bouncing Exits',
                animations: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp']
            },
            {
                label: 'Fading Entrances',
                animations: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig']
            },
            {
                label: 'Fading Exits',
                animations: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig']
            },
            {
                label: 'Flippers',
                animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
            },
            {
                label: 'Lightspeed',
                animations: ['lightSpeedIn', 'lightSpeedOut']
            },
            {
                label: 'Rotating Entrances',
                animations: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight']
            },
            {
                label: 'Rotating Exits',
                animations: ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight']
            },
            {
                label: 'Sliding Entrances',
                animations: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']
            },
            {
                label: 'Sliding Exits',
                animations: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight']
            },
            {
                label: 'Zoom Entrances',
                animations: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp']
            },
            {
                label: 'Zoom Exits',
                animations: ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp']
            },
            {
                label: 'Specials',
                animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
            },
            {
                label: 'Other',
                animations: ['collapse', 'collapseHorizontally', 'rotate', 'rotate90', 'rotate720', 'hueRotate']
            }
        ];
        this.animation = 'rubberBand';
        this.animationState = false;
        this.animationWithState = false;
        this.hueBtnState = false;
    }
    animate() {
        this.animationState = false;
        setTimeout(() => {
            this.animationState = true;
            this.animationWithState = !this.animationWithState;
            this.cdr.markForCheck();
        }, 1);
    }
}
DemoMainComponent.ɵfac = function DemoMainComponent_Factory(t) { return new (t || DemoMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DemoMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoMainComponent, selectors: [["app-demo-main"]], decls: 98, vars: 92, consts: [[1, "container"], [1, "center", "sp-28"], [1, "center", 3, "ngSwitch"], [1, "angular-img-wrapper"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "center"], ["nzAllowClear", "", "nzPlaceHolder", "Choose", "nzShowSearch", "", 1, "m-r-8", 2, "width", "200px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], [3, "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function DemoMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Angular Animations \u6709\u70B9\u9A9A\u6C14\u554A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DemoMainComponent_app_angular_img_5_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DemoMainComponent_app_angular_img_6_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DemoMainComponent_app_angular_img_7_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DemoMainComponent_app_angular_img_8_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DemoMainComponent_app_angular_img_9_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DemoMainComponent_app_angular_img_10_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DemoMainComponent_app_angular_img_11_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DemoMainComponent_app_angular_img_12_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DemoMainComponent_app_angular_img_13_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DemoMainComponent_app_angular_img_14_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DemoMainComponent_app_angular_img_15_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DemoMainComponent_app_angular_img_16_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DemoMainComponent_app_angular_img_17_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DemoMainComponent_app_angular_img_18_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DemoMainComponent_app_angular_img_19_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DemoMainComponent_app_angular_img_20_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DemoMainComponent_app_angular_img_21_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DemoMainComponent_app_angular_img_22_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DemoMainComponent_app_angular_img_23_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DemoMainComponent_app_angular_img_24_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DemoMainComponent_app_angular_img_25_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DemoMainComponent_app_angular_img_26_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DemoMainComponent_app_angular_img_27_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DemoMainComponent_app_angular_img_28_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DemoMainComponent_app_angular_img_29_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DemoMainComponent_app_angular_img_30_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DemoMainComponent_app_angular_img_31_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DemoMainComponent_app_angular_img_32_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DemoMainComponent_app_angular_img_33_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DemoMainComponent_app_angular_img_34_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DemoMainComponent_app_angular_img_35_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, DemoMainComponent_app_angular_img_36_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DemoMainComponent_app_angular_img_37_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DemoMainComponent_app_angular_img_38_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DemoMainComponent_app_angular_img_39_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, DemoMainComponent_app_angular_img_40_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, DemoMainComponent_app_angular_img_41_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DemoMainComponent_app_angular_img_42_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DemoMainComponent_app_angular_img_43_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DemoMainComponent_app_angular_img_44_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DemoMainComponent_app_angular_img_45_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DemoMainComponent_app_angular_img_46_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, DemoMainComponent_app_angular_img_47_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DemoMainComponent_app_angular_img_48_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DemoMainComponent_app_angular_img_49_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DemoMainComponent_app_angular_img_50_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, DemoMainComponent_app_angular_img_51_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, DemoMainComponent_app_angular_img_52_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DemoMainComponent_app_angular_img_53_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DemoMainComponent_app_angular_img_54_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DemoMainComponent_app_angular_img_55_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DemoMainComponent_app_angular_img_56_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DemoMainComponent_app_angular_img_57_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DemoMainComponent_app_angular_img_58_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DemoMainComponent_app_angular_img_59_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, DemoMainComponent_app_angular_img_60_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DemoMainComponent_app_angular_img_61_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, DemoMainComponent_app_angular_img_62_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DemoMainComponent_app_angular_img_63_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, DemoMainComponent_app_angular_img_64_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, DemoMainComponent_app_angular_img_65_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, DemoMainComponent_app_angular_img_66_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, DemoMainComponent_app_angular_img_67_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DemoMainComponent_app_angular_img_68_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, DemoMainComponent_app_angular_img_69_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DemoMainComponent_app_angular_img_70_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, DemoMainComponent_app_angular_img_71_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, DemoMainComponent_app_angular_img_72_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DemoMainComponent_app_angular_img_73_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, DemoMainComponent_app_angular_img_74_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DemoMainComponent_app_angular_img_75_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, DemoMainComponent_app_angular_img_76_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, DemoMainComponent_app_angular_img_77_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, DemoMainComponent_app_angular_img_78_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, DemoMainComponent_app_angular_img_79_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, DemoMainComponent_app_angular_img_80_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, DemoMainComponent_app_angular_img_81_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DemoMainComponent_app_angular_img_82_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, DemoMainComponent_app_angular_img_83_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DemoMainComponent_app_angular_img_84_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, DemoMainComponent_app_angular_img_85_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, DemoMainComponent_app_angular_img_86_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, DemoMainComponent_app_angular_img_87_Template, 1, 5, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, DemoMainComponent_app_angular_img_88_Template, 1, 1, "app-angular-img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, DemoMainComponent_div_89_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@enter3.done", function DemoMainComponent_Template_div_animation_enter3_done_90_listener() { return ctx.animationState = !ctx.animationState; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoMainComponent_Template_nz_select_ngModelChange_91_listener($event) { return ctx.animation = $event; })("ngModelChange", function DemoMainComponent_Template_nz_select_ngModelChange_91_listener() { return ctx.animate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, DemoMainComponent_nz_option_group_92_Template, 2, 2, "nz-option-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@hueButton.done", function DemoMainComponent_Template_button_animation_hueButton_done_93_listener() { return ctx.hueBtnState = !ctx.hueBtnState; })("click", function DemoMainComponent_Template_button_click_93_listener() { return ctx.animate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\u70B9\u51FB\u9A9A\u52A8\u8D77\u6765");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div")(96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " \u9F20\u6807\u60AC\u505C\u8FD9\u4E2A\u6309\u94AE\uFF0C\u989C\u8272\u4F1A\u6E10\u53D8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.animation)("@enter2", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rubberBand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "shake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "tada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "wobble");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "heartBeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "headShake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDownBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeftBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRightBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUpBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutDownBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutLeftBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutRightBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeOutUpBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipInX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipInY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipOutX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipOutY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "lightSpeedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "lightSpeedOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInDownLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInDownRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInUpLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInUpRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutDownLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutDownRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutUpLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateOutUpRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hinge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jackInTheBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rollIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rollOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "collapseHorizontally");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotate90");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotate720");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hueRotate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter3", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hueButton", ctx.hueBtnState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter3", undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionGroupComponent, _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__.AngularImgComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLW1haW4uY29tcG9uZW50Lmxlc3MifQ== */"], data: { animation: [
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInUpOnEnterAnimation)({ anchor: 'enter1' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInUpOnEnterAnimation)({ anchor: 'enter2', delay: 100 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInUpOnEnterAnimation)({ anchor: 'enter3', delay: 200 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flashAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.pulseAnimation)({ anchor: 'pulse' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rubberBandAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.shakeAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.swingAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.tadaAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.wobbleAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.jelloAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.heartBeatAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.headShakeAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInDownBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInLeftBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInRightBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInUpBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutDownBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutLeftBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutRightBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutUpBigAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipInXAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipInYAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipOutXAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipOutYAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.lightSpeedInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.lightSpeedOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInDownLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInDownRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInUpLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInUpRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutDownLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutDownRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutUpLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutUpRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutDownAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutLeftAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutRightAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutUpAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.hingeAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.jackInTheBoxAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rollInAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rollOutAnimation)(),
            // other
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.collapseAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.collapseHorizontallyAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateAnimation)({ anchor: 'rotate90', degrees: 90 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.hueRotateAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.hueRotateAnimation)({ anchor: 'hueButton', duration: 20000 })
        ] }, changeDetection: 0 });


/***/ }),

/***/ 57086:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/comp/transition/demo-on-enter-on-leave/demo-on-enter-on-leave.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoOnEnterOnLeaveComponent": () => (/* binding */ DemoOnEnterOnLeaveComponent)
/* harmony export */ });
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-animations */ 19862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angular-img/angular-img.component */ 81349);









function DemoOnEnterOnLeaveComponent_nz_option_group_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 11);
} if (rf & 2) {
    const animation_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", animation_r51)("nzLabel", animation_r51);
} }
function DemoOnEnterOnLeaveComponent_nz_option_group_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_nz_option_group_5_nz_option_1_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", option_r49.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", option_r49.animations);
} }
const _c0 = function () { return { duration: 1000 }; };
const _c1 = function (a1) { return { value: "", params: a1 }; };
function DemoOnEnterOnLeaveComponent_ng_container_10_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInOnEnter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0)))("@bounceOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_10_app_angular_img_1_Template, 1, 5, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_11_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInUpOnEnter", undefined)("@bounceOutUpOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_11_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_12_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInDownOnEnter", undefined)("@bounceOutDownOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_12_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_13_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInLeftOnEnter", undefined)("@bounceOutRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_13_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_14_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceInRightOnEnter", undefined)("@bounceOutLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_14_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_15_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_15_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_16_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUpOnEnter", undefined)("@fadeOutUpOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_16_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_17_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDownOnEnter", undefined)("@fadeOutDownOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_17_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_18_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeftOnEnter", undefined)("@fadeOutRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_18_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_19_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRightOnEnter", undefined)("@fadeOutLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_19_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_20_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUpBigOnEnter", undefined)("@fadeOutUpBigOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_20_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_21_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDownBigOnEnter", undefined)("@fadeOutDownBigOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_21_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_22_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInLeftBigOnEnter", undefined)("@fadeOutRightBigOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_22_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_23_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRightBigOnEnter", undefined)("@fadeOutLeftBigOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_23_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_24_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInXOnEnter", undefined)("@flipOutXOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_24_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_25_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInYOnEnter", undefined)("@flipOutYOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_25_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_26_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@lightSpeedInOnEnter", undefined)("@lightSpeedOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_26_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_27_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInOnEnter", undefined)("@rotateOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_27_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_28_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownLeftOnEnter", undefined)("@rotateOutDownLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_28_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_29_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInDownRightOnEnter", undefined)("@rotateOutDownRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_29_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_30_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpLeftOnEnter", undefined)("@rotateOutUpLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_30_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_31_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateInUpRightOnEnter", undefined)("@rotateOutUpRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_31_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_32_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInUpOnEnter", undefined)("@slideOutUpOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_32_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_33_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInDownOnEnter", undefined)("@slideOutDownOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_33_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_34_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeftOnEnter", undefined)("@slideOutRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_34_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_35_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInRightOnEnter", undefined)("@slideOutLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_35_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_36_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInOnEnter", undefined)("@zoomOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_36_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_37_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInUpOnEnter", undefined)("@zoomOutUpOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_37_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_38_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInDownOnEnter", undefined)("@zoomOutDownOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_38_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_39_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInLeftOnEnter", undefined)("@zoomOutRightOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_39_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_40_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInRightOnEnter", undefined)("@zoomOutLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_40_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_41_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jackInTheBoxOnEnter", undefined)("@hingeOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_41_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_42_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rollInOnEnter", undefined)("@rollOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_42_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_43_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bounceOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_43_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_44_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flashOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_44_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_45_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pulseOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_45_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_46_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rubberBandOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_46_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r37.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_47_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@shakeOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_47_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_48_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swingOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_48_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_49_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tadaOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_49_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_50_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@wobbleOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_50_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_51_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@jelloOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_51_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r42.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_52_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipOnEnter", undefined)("@fadeOutOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_52_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_53_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandOnEnter", undefined)("@collapseOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_53_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_54_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInExpandOnEnter", undefined)("@fadeOutCollapseOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_54_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_55_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandRightOnEnter", undefined)("@collapseLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_55_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.state);
} }
function DemoOnEnterOnLeaveComponent_ng_container_56_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-angular-img");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInExpandRightOnEnter", undefined)("@fadeOutCollapseLeftOnLeave", undefined);
} }
function DemoOnEnterOnLeaveComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoOnEnterOnLeaveComponent_ng_container_56_app_angular_img_1_Template, 1, 2, "app-angular-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r47.state);
} }
function DemoOnEnterOnLeaveComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select animaion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DemoOnEnterOnLeaveComponent {
    constructor() {
        this.options = [
            {
                label: 'Bouncing',
                animations: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight']
            },
            {
                label: 'Fading',
                animations: ['fadeInOut', 'fadeInUpOutUp', 'fadeInDownOutDown', 'fadeInLeftOutRight', 'fadeInRightOutLeft', 'fadeInUpBigOutUpBig', 'fadeInDownBigOutDownBig', 'fadeInLeftBigOutRightBig', 'fadeInRightBigOutLeftBig']
            },
            {
                label: 'Flippers',
                animations: ['flipX', 'flipY']
            },
            {
                label: 'LightSpeed',
                animations: ['lightSpeed']
            },
            {
                label: 'Rotating',
                animations: ['rotateInOut', 'rotateInOutDownLeft', 'rotateInOutDownRight', 'rotateInOutUpLeft', 'rotateInOutUpRight']
            },
            {
                label: 'Sliding',
                animations: ['slideInUpOutUp', 'slideInDownOutDown', 'slideInLeftOutRight', 'slideInRightOutLeft']
            },
            {
                label: 'Zooming',
                animations: ['zoomInOut', 'zoomInUpOutUp', 'zoomInDownOutDown', 'zoomInLeftOutRight', 'zoomInRightOutLeft']
            },
            {
                label: 'Specials',
                animations: ['jackInTheBoxOnEnterHingeOnLeave', 'rollInOut']
            },
            {
                label: 'Attention Seekers',
                animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'flip']
            },
            {
                label: 'Other',
                animations: ['expandCollapse', 'fadeInExpandFadeOutCollapse', 'expandRightCollapseLeft', 'fadeInExpandRightFadeOutCollapseLeft']
            }
        ];
        this.animation = 'bounceIn';
        this.state = true;
    }
    toggleState() {
        this.state = !this.state;
    }
}
DemoOnEnterOnLeaveComponent.ɵfac = function DemoOnEnterOnLeaveComponent_Factory(t) { return new (t || DemoOnEnterOnLeaveComponent)(); };
DemoOnEnterOnLeaveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoOnEnterOnLeaveComponent, selectors: [["app-demo-on-enter-on-leave"]], decls: 58, vars: 53, consts: [[1, "container"], [1, "center", "sp-28"], ["nzAllowClear", "", "nzPlaceHolder", "Choose", "nzShowSearch", "", 1, "m-r-8", 2, "width", "200px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], [1, "center-children-horizontally", 3, "ngSwitch"], [1, "angular-img-wrapper"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [4, "ngIf"]], template: function DemoOnEnterOnLeaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u8FDB\u573A/\u79BB\u573A\u52A8\u753B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoOnEnterOnLeaveComponent_Template_nz_select_ngModelChange_4_listener($event) { return ctx.animation = $event; })("ngModelChange", function DemoOnEnterOnLeaveComponent_Template_nz_select_ngModelChange_4_listener() { return ctx.state = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DemoOnEnterOnLeaveComponent_nz_option_group_5_Template, 2, 2, "nz-option-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoOnEnterOnLeaveComponent_Template_button_click_6_listener() { return ctx.toggleState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u70B9\u51FB\u5207\u6362");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DemoOnEnterOnLeaveComponent_ng_container_10_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DemoOnEnterOnLeaveComponent_ng_container_11_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DemoOnEnterOnLeaveComponent_ng_container_12_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DemoOnEnterOnLeaveComponent_ng_container_13_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DemoOnEnterOnLeaveComponent_ng_container_14_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DemoOnEnterOnLeaveComponent_ng_container_15_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DemoOnEnterOnLeaveComponent_ng_container_16_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DemoOnEnterOnLeaveComponent_ng_container_17_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DemoOnEnterOnLeaveComponent_ng_container_18_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DemoOnEnterOnLeaveComponent_ng_container_19_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DemoOnEnterOnLeaveComponent_ng_container_20_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DemoOnEnterOnLeaveComponent_ng_container_21_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DemoOnEnterOnLeaveComponent_ng_container_22_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DemoOnEnterOnLeaveComponent_ng_container_23_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DemoOnEnterOnLeaveComponent_ng_container_24_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DemoOnEnterOnLeaveComponent_ng_container_25_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DemoOnEnterOnLeaveComponent_ng_container_26_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DemoOnEnterOnLeaveComponent_ng_container_27_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DemoOnEnterOnLeaveComponent_ng_container_28_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DemoOnEnterOnLeaveComponent_ng_container_29_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DemoOnEnterOnLeaveComponent_ng_container_30_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DemoOnEnterOnLeaveComponent_ng_container_31_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DemoOnEnterOnLeaveComponent_ng_container_32_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DemoOnEnterOnLeaveComponent_ng_container_33_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DemoOnEnterOnLeaveComponent_ng_container_34_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DemoOnEnterOnLeaveComponent_ng_container_35_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, DemoOnEnterOnLeaveComponent_ng_container_36_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DemoOnEnterOnLeaveComponent_ng_container_37_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DemoOnEnterOnLeaveComponent_ng_container_38_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DemoOnEnterOnLeaveComponent_ng_container_39_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, DemoOnEnterOnLeaveComponent_ng_container_40_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, DemoOnEnterOnLeaveComponent_ng_container_41_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DemoOnEnterOnLeaveComponent_ng_container_42_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DemoOnEnterOnLeaveComponent_ng_container_43_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DemoOnEnterOnLeaveComponent_ng_container_44_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DemoOnEnterOnLeaveComponent_ng_container_45_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DemoOnEnterOnLeaveComponent_ng_container_46_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, DemoOnEnterOnLeaveComponent_ng_container_47_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DemoOnEnterOnLeaveComponent_ng_container_48_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DemoOnEnterOnLeaveComponent_ng_container_49_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DemoOnEnterOnLeaveComponent_ng_container_50_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, DemoOnEnterOnLeaveComponent_ng_container_51_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, DemoOnEnterOnLeaveComponent_ng_container_52_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DemoOnEnterOnLeaveComponent_ng_container_53_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DemoOnEnterOnLeaveComponent_ng_container_54_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DemoOnEnterOnLeaveComponent_ng_container_55_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DemoOnEnterOnLeaveComponent_ng_container_56_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DemoOnEnterOnLeaveComponent_div_57_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter2", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.animation)("@enter3", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounceInRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUpOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDownOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeftOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRightOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInUpBigOutUpBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInDownBigOutDownBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInLeftBigOutRightBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInRightBigOutLeftBig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flipY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "lightSpeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInOutDownLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInOutDownRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInOutUpLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rotateInOutUpRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInUpOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInDownOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInLeftOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "slideInRightOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInUpOutUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInDownOutDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInLeftOutRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "zoomInRightOutLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jackInTheBoxOnEnterHingeOnLeave");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rollInOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bounce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rubberBand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "shake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "tada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "wobble");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "jello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "flip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandCollapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInExpandFadeOutCollapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandRightCollapseLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fadeInExpandRightFadeOutCollapseLeft");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionGroupComponent, _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__.AngularImgComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLW9uLWVudGVyLW9uLWxlYXZlLmNvbXBvbmVudC5sZXNzIn0= */"], data: { animation: [
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInRightOnEnterAnimation)({ anchor: 'enter1' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInRightOnEnterAnimation)({ anchor: 'enter2', delay: 100 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInRightOnEnterAnimation)({ anchor: 'enter3', delay: 200, animateChildren: 'none' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flashOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.pulseOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rubberBandOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.shakeOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.swingOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.tadaOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.wobbleOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.jelloOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInUpOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutDownOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInDownOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutUpOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceInRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.bounceOutRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInUpOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInDownOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInUpBigOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInDownBigOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInLeftBigOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInRightBigOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutUpOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutDownOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutUpBigOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutDownBigOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutLeftBigOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutRightBigOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipInXOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipInYOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipOutXOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.flipOutYOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.lightSpeedInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.lightSpeedOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInUpLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInUpRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInDownLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateInDownRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutUpLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutUpRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutDownLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rotateOutDownRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInUpOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInDownOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideInLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutUpOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutDownOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.slideOutRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInUpOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInDownOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInLeftOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomInRightOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutUpOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutDownOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutLeftOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.zoomOutRightOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.hingeOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.jackInTheBoxOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rollInOnEnterAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.rollOutOnLeaveAnimation)(),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.expandOnEnterAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.collapseOnLeaveAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInExpandOnEnterAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutCollapseOnLeaveAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.expandRightOnEnterAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.collapseLeftOnLeaveAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeInExpandRightOnEnterAnimation)({ duration: 400 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_8__.fadeOutCollapseLeftOnLeaveAnimation)({ duration: 400 })
        ] }, changeDetection: 0 });


/***/ }),

/***/ 55591:
/*!****************************************************************************!*\
  !*** ./src/app/pages/comp/transition/experiments/experiments.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentsComponent": () => (/* binding */ ExperimentsComponent)
/* harmony export */ });
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-animations */ 19862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angular-img/angular-img.component */ 81349);








const _c0 = function (a0) { return { delay: a0 }; };
const _c1 = function (a1) { return { value: "", params: a1 }; };
function ExperimentsComponent_app_angular_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-angular-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@enter.done", function ExperimentsComponent_app_angular_img_1_Template_app_angular_img_animation_enter_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.hueState = !ctx_r5.hueState); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, i_r4 * 150)));
} }
const _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
function ExperimentsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@letterAnim1.done", function ExperimentsComponent_div_6_Template_div_animation_letterAnim1_done_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const last_r9 = restoredCtx.last; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](last_r9 && (ctx_r10.hueState = !ctx_r10.hueState)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enterLetterAnim1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, 1500 + i_r8 * 100)))("@letterAnim1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c2, ctx_r1.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, i_r8 * 30)))("@hueLetter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c2, ctx_r1.hueState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, i_r8 * 50)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](letter_r7);
} }
function ExperimentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@enterLetterAnim2.done", function ExperimentsComponent_div_8_Template_div_animation_enterLetterAnim2_done_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const last_r14 = restoredCtx.last; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](last_r14 && (ctx_r15.hueState = !ctx_r15.hueState)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enterLetterAnim2", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, 6000 + ctx_r2.getDelay(i_r13, ctx_r2.text2.length))))("@letterAnim2", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c2, ctx_r2.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, 500 + i_r13 * 30)))("@hueLetter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c2, ctx_r2.hueState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, i_r13 * 75)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](letter_r12);
} }
function ExperimentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@enterLetterAnim3.done", function ExperimentsComponent_div_10_Template_div_animation_enterLetterAnim3_done_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const first_r20 = restoredCtx.first; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](first_r20 && (ctx_r21.flashState = !ctx_r21.flashState)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@enterLetterAnim3", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, 8000 + ctx_r3.text3.length * 100 - i_r18 * 100)))("@letterAnim3", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c2, ctx_r3.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, 1000 + i_r18 * 30)))("@hueLetter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c2, ctx_r3.hueState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, i_r18 * 150)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](letter_r17);
} }
const _c3 = function () { return [0, 1, 2, 3, 4]; };
class ExperimentsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.text1 = '少林功夫好，真的好，少林功夫棒，真的棒...'.split('');
        this.text2 = '你有金刚腿，我有金刚腿，我有铁头功，嗷嗷...'.split('');
        this.text3 = '我拳拳虎虎生风，虎虎生风，我掌掌黯然销魂，黯然销魂...'.split('');
        this.animationState = false;
        this.hueState = false;
        this.flashState = false;
    }
    getDelay(index, lenght) {
        if (index < lenght / 2 - 2) {
            return index * 100;
        }
        else {
            return lenght * 100 - index * 100;
        }
    }
    animate() {
        this.animationState = false;
        setTimeout(() => {
            this.animationState = true;
            this.cdr.markForCheck();
        }, 1);
    }
    ngOnInit() { }
}
ExperimentsComponent.ɵfac = function ExperimentsComponent_Factory(t) { return new (t || ExperimentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ExperimentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperimentsComponent, selectors: [["app-experiments"]], decls: 11, vars: 8, consts: [[1, "center"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], ["class", "letter", 4, "ngFor", "ngForOf"], [1, "letter"]], template: function ExperimentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExperimentsComponent_app_angular_img_1_Template, 1, 5, "app-angular-img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperimentsComponent_Template_button_click_2_listener() { return ctx.animate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u5728\u641E\u4E00\u4E0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExperimentsComponent_div_6_Template, 2, 18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ExperimentsComponent_div_8_Template, 2, 18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExperimentsComponent_div_10_Template, 2, 18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@btnEnter", undefined)("@btnEnterFadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flash", ctx.flashState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.text1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.text2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.text3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_0__.AngularImgComponent], styles: ["[_nghost-%COMP%]   app-angular-img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 80px;\n}\n[_nghost-%COMP%]   .letter[_ngcontent-%COMP%] {\n  font-size: 3em;\n  display: inline-block;\n  min-width: 0.2em;\n  color: #df4a32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFIQTtFQU9JLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKIiwiZmlsZSI6ImV4cGVyaW1lbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhcHAtYW5ndWxhci1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODBweDtcbiAgfVxuXG4gIC5sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDAuMmVtO1xuICAgIGNvbG9yOiAjZGY0YTMyO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.rotateInDownLeftOnEnterAnimation)({ anchor: 'enter' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.zoomInDownOnEnterAnimation)({ anchor: 'enterLetterAnim1' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.fadeInOnEnterAnimation)({ anchor: 'enterLetterAnim2' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.zoomInUpOnEnterAnimation)({ anchor: 'enterLetterAnim3' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.rollInAnimation)({ anchor: 'letterAnim1' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.zoomInLeftAnimation)({ anchor: 'letterAnim2' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.rubberBandAnimation)({ anchor: 'letterAnim3' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.hueRotateAnimation)({ anchor: 'hueLetter', duration: 5000 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.flashAnimation)({ anchor: 'flash' }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.rubberBandOnEnterAnimation)({ anchor: 'btnEnter', delay: 12500 }),
            (0,angular_animations__WEBPACK_IMPORTED_MODULE_6__.fadeInOnEnterAnimation)({ anchor: 'btnEnterFadeIn', delay: 12500, duration: 500 })
        ] }, changeDetection: 0 });


/***/ }),

/***/ 98242:
/*!********************************************************************!*\
  !*** ./src/app/pages/comp/transition/transition-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionRoutingModule": () => (/* binding */ TransitionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_transition_transition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/transition/transition.component */ 19802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_transition_transition_component__WEBPACK_IMPORTED_MODULE_0__.TransitionComponent, data: { title: '动画组件', key: 'transition' } }];
class TransitionRoutingModule {
}
TransitionRoutingModule.ɵfac = function TransitionRoutingModule_Factory(t) { return new (t || TransitionRoutingModule)(); };
TransitionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TransitionRoutingModule });
TransitionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransitionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 19802:
/*!***************************************************************!*\
  !*** ./src/app/pages/comp/transition/transition.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionComponent": () => (/* binding */ TransitionComponent)
/* harmony export */ });
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-animations */ 19862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var _demo_dynamic_params_demo_dynamic_params_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-dynamic-params/demo-dynamic-params.component */ 6275);
/* harmony import */ var _demo_main_demo_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-main/demo-main.component */ 13394);
/* harmony import */ var _demo_on_enter_on_leave_demo_on_enter_on_leave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-on-enter-on-leave/demo-on-enter-on-leave.component */ 57086);
/* harmony import */ var _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experiments/experiments.component */ 55591);












function TransitionComponent_app_demo_main_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-demo-main");
} }
function TransitionComponent_app_demo_on_enter_on_leave_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-demo-on-enter-on-leave");
} }
function TransitionComponent_app_demo_dynamic_params_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-demo-dynamic-params");
} }
function TransitionComponent_app_experiments_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-experiments");
} }
class TransitionComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '动画组件示例',
            desc: '动起来！',
            breadcrumb: ['首页', '组件', '动画组件']
        };
        this.currentComp = 'home';
    }
    ngOnInit() { }
}
TransitionComponent.ɵfac = function TransitionComponent_Factory(t) { return new (t || TransitionComponent)(); };
TransitionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TransitionComponent, selectors: [["app-transition"]], decls: 16, vars: 5, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", "m-t-8", 3, "click"], [1, "m-t-8"], [1, "center"], [4, "ngIf"]], template: function TransitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransitionComponent_Template_button_click_2_listener() { return ctx.currentComp = "home"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u4E3B\u52A8\u753B");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransitionComponent_Template_button_click_4_listener() { return ctx.currentComp = "EnterLeave"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u8FDB\u573A/\u79BB\u573A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransitionComponent_Template_button_click_6_listener() { return ctx.currentComp = "Dynamic"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u52A8\u6001\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransitionComponent_Template_button_click_8_listener() { return ctx.currentComp = "Experiments"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u5B9E\u9A8C\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "nz-card", 4)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TransitionComponent_app_demo_main_12_Template, 1, 0, "app-demo-main", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TransitionComponent_app_demo_on_enter_on_leave_13_Template, 1, 0, "app-demo-on-enter-on-leave", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TransitionComponent_app_demo_dynamic_params_14_Template, 1, 0, "app-demo-dynamic-params", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TransitionComponent_app_experiments_15_Template, 1, 0, "app-experiments", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentComp === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentComp === "EnterLeave");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentComp === "Dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentComp === "Experiments");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, _demo_dynamic_params_demo_dynamic_params_component__WEBPACK_IMPORTED_MODULE_1__.DemoDynamicParamsComponent, _demo_main_demo_main_component__WEBPACK_IMPORTED_MODULE_2__.DemoMainComponent, _demo_on_enter_on_leave_demo_on_enter_on_leave_component__WEBPACK_IMPORTED_MODULE_3__.DemoOnEnterOnLeaveComponent, _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_4__.ExperimentsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2l0aW9uLmNvbXBvbmVudC5sZXNzIn0= */"], data: { animation: [(0,angular_animations__WEBPACK_IMPORTED_MODULE_11__.fadeInOnEnterAnimation)(), (0,angular_animations__WEBPACK_IMPORTED_MODULE_11__.fadeOutOnLeaveAnimation)(), (0,angular_animations__WEBPACK_IMPORTED_MODULE_11__.rubberBandAnimation)(), (0,angular_animations__WEBPACK_IMPORTED_MODULE_11__.collapseAnimation)()] }, changeDetection: 0 });


/***/ }),

/***/ 61197:
/*!************************************************************!*\
  !*** ./src/app/pages/comp/transition/transition.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionModule": () => (/* binding */ TransitionModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-img/angular-img.component */ 81349);
/* harmony import */ var _demo_dynamic_params_demo_dynamic_params_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-dynamic-params/demo-dynamic-params.component */ 6275);
/* harmony import */ var _demo_main_demo_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-main/demo-main.component */ 13394);
/* harmony import */ var _demo_on_enter_on_leave_demo_on_enter_on_leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-on-enter-on-leave/demo-on-enter-on-leave.component */ 57086);
/* harmony import */ var _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiments/experiments.component */ 55591);
/* harmony import */ var _transition_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition-routing.module */ 98242);
/* harmony import */ var _transition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transition.component */ 19802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);












class TransitionModule {
}
TransitionModule.ɵfac = function TransitionModule_Factory(t) { return new (t || TransitionModule)(); };
TransitionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TransitionModule });
TransitionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _transition_routing_module__WEBPACK_IMPORTED_MODULE_6__.TransitionRoutingModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TransitionModule, { declarations: [_transition_component__WEBPACK_IMPORTED_MODULE_7__.TransitionComponent, _angular_img_angular_img_component__WEBPACK_IMPORTED_MODULE_1__.AngularImgComponent, _demo_dynamic_params_demo_dynamic_params_component__WEBPACK_IMPORTED_MODULE_2__.DemoDynamicParamsComponent, _demo_main_demo_main_component__WEBPACK_IMPORTED_MODULE_3__.DemoMainComponent, _demo_on_enter_on_leave_demo_on_enter_on_leave_component__WEBPACK_IMPORTED_MODULE_4__.DemoOnEnterOnLeaveComponent, _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_5__.ExperimentsComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _transition_routing_module__WEBPACK_IMPORTED_MODULE_6__.TransitionRoutingModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule] }); })();


/***/ }),

/***/ 19862:
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateChildrenOnLeaveAnimation": () => (/* binding */ animateChildrenOnLeaveAnimation),
/* harmony export */   "bounceAnimation": () => (/* binding */ bounceAnimation),
/* harmony export */   "bounceInAnimation": () => (/* binding */ bounceInAnimation),
/* harmony export */   "bounceInDownAnimation": () => (/* binding */ bounceInDownAnimation),
/* harmony export */   "bounceInDownOnEnterAnimation": () => (/* binding */ bounceInDownOnEnterAnimation),
/* harmony export */   "bounceInLeftAnimation": () => (/* binding */ bounceInLeftAnimation),
/* harmony export */   "bounceInLeftOnEnterAnimation": () => (/* binding */ bounceInLeftOnEnterAnimation),
/* harmony export */   "bounceInOnEnterAnimation": () => (/* binding */ bounceInOnEnterAnimation),
/* harmony export */   "bounceInRightAnimation": () => (/* binding */ bounceInRightAnimation),
/* harmony export */   "bounceInRightOnEnterAnimation": () => (/* binding */ bounceInRightOnEnterAnimation),
/* harmony export */   "bounceInUpAnimation": () => (/* binding */ bounceInUpAnimation),
/* harmony export */   "bounceInUpOnEnterAnimation": () => (/* binding */ bounceInUpOnEnterAnimation),
/* harmony export */   "bounceOnEnterAnimation": () => (/* binding */ bounceOnEnterAnimation),
/* harmony export */   "bounceOutAnimation": () => (/* binding */ bounceOutAnimation),
/* harmony export */   "bounceOutDownAnimation": () => (/* binding */ bounceOutDownAnimation),
/* harmony export */   "bounceOutDownOnLeaveAnimation": () => (/* binding */ bounceOutDownOnLeaveAnimation),
/* harmony export */   "bounceOutLeftAnimation": () => (/* binding */ bounceOutLeftAnimation),
/* harmony export */   "bounceOutLeftOnLeaveAnimation": () => (/* binding */ bounceOutLeftOnLeaveAnimation),
/* harmony export */   "bounceOutOnLeaveAnimation": () => (/* binding */ bounceOutOnLeaveAnimation),
/* harmony export */   "bounceOutRightAnimation": () => (/* binding */ bounceOutRightAnimation),
/* harmony export */   "bounceOutRightOnLeaveAnimation": () => (/* binding */ bounceOutRightOnLeaveAnimation),
/* harmony export */   "bounceOutUpAnimation": () => (/* binding */ bounceOutUpAnimation),
/* harmony export */   "bounceOutUpOnLeaveAnimation": () => (/* binding */ bounceOutUpOnLeaveAnimation),
/* harmony export */   "collapseAnimation": () => (/* binding */ collapseAnimation),
/* harmony export */   "collapseHorizontallyAnimation": () => (/* binding */ collapseHorizontallyAnimation),
/* harmony export */   "collapseLeftOnLeaveAnimation": () => (/* binding */ collapseLeftOnLeaveAnimation),
/* harmony export */   "collapseOnLeaveAnimation": () => (/* binding */ collapseOnLeaveAnimation),
/* harmony export */   "expandOnEnterAnimation": () => (/* binding */ expandOnEnterAnimation),
/* harmony export */   "expandRightOnEnterAnimation": () => (/* binding */ expandRightOnEnterAnimation),
/* harmony export */   "fadeInAnimation": () => (/* binding */ fadeInAnimation),
/* harmony export */   "fadeInDownAnimation": () => (/* binding */ fadeInDownAnimation),
/* harmony export */   "fadeInDownBigAnimation": () => (/* binding */ fadeInDownBigAnimation),
/* harmony export */   "fadeInDownBigOnEnterAnimation": () => (/* binding */ fadeInDownBigOnEnterAnimation),
/* harmony export */   "fadeInDownOnEnterAnimation": () => (/* binding */ fadeInDownOnEnterAnimation),
/* harmony export */   "fadeInExpandOnEnterAnimation": () => (/* binding */ fadeInExpandOnEnterAnimation),
/* harmony export */   "fadeInExpandRightOnEnterAnimation": () => (/* binding */ fadeInExpandRightOnEnterAnimation),
/* harmony export */   "fadeInLeftAnimation": () => (/* binding */ fadeInLeftAnimation),
/* harmony export */   "fadeInLeftBigAnimation": () => (/* binding */ fadeInLeftBigAnimation),
/* harmony export */   "fadeInLeftBigOnEnterAnimation": () => (/* binding */ fadeInLeftBigOnEnterAnimation),
/* harmony export */   "fadeInLeftOnEnterAnimation": () => (/* binding */ fadeInLeftOnEnterAnimation),
/* harmony export */   "fadeInOnEnterAnimation": () => (/* binding */ fadeInOnEnterAnimation),
/* harmony export */   "fadeInRightAnimation": () => (/* binding */ fadeInRightAnimation),
/* harmony export */   "fadeInRightBigAnimation": () => (/* binding */ fadeInRightBigAnimation),
/* harmony export */   "fadeInRightBigOnEnterAnimation": () => (/* binding */ fadeInRightBigOnEnterAnimation),
/* harmony export */   "fadeInRightOnEnterAnimation": () => (/* binding */ fadeInRightOnEnterAnimation),
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation),
/* harmony export */   "fadeInUpBigAnimation": () => (/* binding */ fadeInUpBigAnimation),
/* harmony export */   "fadeInUpBigOnEnterAnimation": () => (/* binding */ fadeInUpBigOnEnterAnimation),
/* harmony export */   "fadeInUpOnEnterAnimation": () => (/* binding */ fadeInUpOnEnterAnimation),
/* harmony export */   "fadeOutAnimation": () => (/* binding */ fadeOutAnimation),
/* harmony export */   "fadeOutCollapseLeftOnLeaveAnimation": () => (/* binding */ fadeOutCollapseLeftOnLeaveAnimation),
/* harmony export */   "fadeOutCollapseOnLeaveAnimation": () => (/* binding */ fadeOutCollapseOnLeaveAnimation),
/* harmony export */   "fadeOutDownAnimation": () => (/* binding */ fadeOutDownAnimation),
/* harmony export */   "fadeOutDownBigAnimation": () => (/* binding */ fadeOutDownBigAnimation),
/* harmony export */   "fadeOutDownBigOnLeaveAnimation": () => (/* binding */ fadeOutDownBigOnLeaveAnimation),
/* harmony export */   "fadeOutDownOnLeaveAnimation": () => (/* binding */ fadeOutDownOnLeaveAnimation),
/* harmony export */   "fadeOutLeftAnimation": () => (/* binding */ fadeOutLeftAnimation),
/* harmony export */   "fadeOutLeftBigAnimation": () => (/* binding */ fadeOutLeftBigAnimation),
/* harmony export */   "fadeOutLeftBigOnLeaveAnimation": () => (/* binding */ fadeOutLeftBigOnLeaveAnimation),
/* harmony export */   "fadeOutLeftOnLeaveAnimation": () => (/* binding */ fadeOutLeftOnLeaveAnimation),
/* harmony export */   "fadeOutOnLeaveAnimation": () => (/* binding */ fadeOutOnLeaveAnimation),
/* harmony export */   "fadeOutRightAnimation": () => (/* binding */ fadeOutRightAnimation),
/* harmony export */   "fadeOutRightBigAnimation": () => (/* binding */ fadeOutRightBigAnimation),
/* harmony export */   "fadeOutRightBigOnLeaveAnimation": () => (/* binding */ fadeOutRightBigOnLeaveAnimation),
/* harmony export */   "fadeOutRightOnLeaveAnimation": () => (/* binding */ fadeOutRightOnLeaveAnimation),
/* harmony export */   "fadeOutUpAnimation": () => (/* binding */ fadeOutUpAnimation),
/* harmony export */   "fadeOutUpBigAnimation": () => (/* binding */ fadeOutUpBigAnimation),
/* harmony export */   "fadeOutUpBigOnLeaveAnimation": () => (/* binding */ fadeOutUpBigOnLeaveAnimation),
/* harmony export */   "fadeOutUpOnLeaveAnimation": () => (/* binding */ fadeOutUpOnLeaveAnimation),
/* harmony export */   "flashAnimation": () => (/* binding */ flashAnimation),
/* harmony export */   "flashOnEnterAnimation": () => (/* binding */ flashOnEnterAnimation),
/* harmony export */   "flipAnimation": () => (/* binding */ flipAnimation),
/* harmony export */   "flipInXAnimation": () => (/* binding */ flipInXAnimation),
/* harmony export */   "flipInXOnEnterAnimation": () => (/* binding */ flipInXOnEnterAnimation),
/* harmony export */   "flipInYAnimation": () => (/* binding */ flipInYAnimation),
/* harmony export */   "flipInYOnEnterAnimation": () => (/* binding */ flipInYOnEnterAnimation),
/* harmony export */   "flipOnEnterAnimation": () => (/* binding */ flipOnEnterAnimation),
/* harmony export */   "flipOutXAnimation": () => (/* binding */ flipOutXAnimation),
/* harmony export */   "flipOutXOnLeaveAnimation": () => (/* binding */ flipOutXOnLeaveAnimation),
/* harmony export */   "flipOutYAnimation": () => (/* binding */ flipOutYAnimation),
/* harmony export */   "flipOutYOnLeaveAnimation": () => (/* binding */ flipOutYOnLeaveAnimation),
/* harmony export */   "headShakeAnimation": () => (/* binding */ headShakeAnimation),
/* harmony export */   "headShakeOnEnterAnimation": () => (/* binding */ headShakeOnEnterAnimation),
/* harmony export */   "heartBeatAnimation": () => (/* binding */ heartBeatAnimation),
/* harmony export */   "heartBeatOnEnterAnimation": () => (/* binding */ heartBeatOnEnterAnimation),
/* harmony export */   "hingeAnimation": () => (/* binding */ hingeAnimation),
/* harmony export */   "hingeOnLeaveAnimation": () => (/* binding */ hingeOnLeaveAnimation),
/* harmony export */   "hueRotateAnimation": () => (/* binding */ hueRotateAnimation),
/* harmony export */   "jackInTheBoxAnimation": () => (/* binding */ jackInTheBoxAnimation),
/* harmony export */   "jackInTheBoxOnEnterAnimation": () => (/* binding */ jackInTheBoxOnEnterAnimation),
/* harmony export */   "jelloAnimation": () => (/* binding */ jelloAnimation),
/* harmony export */   "jelloOnEnterAnimation": () => (/* binding */ jelloOnEnterAnimation),
/* harmony export */   "lightSpeedInAnimation": () => (/* binding */ lightSpeedInAnimation),
/* harmony export */   "lightSpeedInOnEnterAnimation": () => (/* binding */ lightSpeedInOnEnterAnimation),
/* harmony export */   "lightSpeedOutAnimation": () => (/* binding */ lightSpeedOutAnimation),
/* harmony export */   "lightSpeedOutOnLeaveAnimation": () => (/* binding */ lightSpeedOutOnLeaveAnimation),
/* harmony export */   "pulseAnimation": () => (/* binding */ pulseAnimation),
/* harmony export */   "pulseOnEnterAnimation": () => (/* binding */ pulseOnEnterAnimation),
/* harmony export */   "rollInAnimation": () => (/* binding */ rollInAnimation),
/* harmony export */   "rollInOnEnterAnimation": () => (/* binding */ rollInOnEnterAnimation),
/* harmony export */   "rollOutAnimation": () => (/* binding */ rollOutAnimation),
/* harmony export */   "rollOutOnLeaveAnimation": () => (/* binding */ rollOutOnLeaveAnimation),
/* harmony export */   "rotateAnimation": () => (/* binding */ rotateAnimation),
/* harmony export */   "rotateInAnimation": () => (/* binding */ rotateInAnimation),
/* harmony export */   "rotateInDownLeftAnimation": () => (/* binding */ rotateInDownLeftAnimation),
/* harmony export */   "rotateInDownLeftOnEnterAnimation": () => (/* binding */ rotateInDownLeftOnEnterAnimation),
/* harmony export */   "rotateInDownRightAnimation": () => (/* binding */ rotateInDownRightAnimation),
/* harmony export */   "rotateInDownRightOnEnterAnimation": () => (/* binding */ rotateInDownRightOnEnterAnimation),
/* harmony export */   "rotateInOnEnterAnimation": () => (/* binding */ rotateInOnEnterAnimation),
/* harmony export */   "rotateInUpLeftAnimation": () => (/* binding */ rotateInUpLeftAnimation),
/* harmony export */   "rotateInUpLeftOnEnterAnimation": () => (/* binding */ rotateInUpLeftOnEnterAnimation),
/* harmony export */   "rotateInUpRightAnimation": () => (/* binding */ rotateInUpRightAnimation),
/* harmony export */   "rotateInUpRightOnEnterAnimation": () => (/* binding */ rotateInUpRightOnEnterAnimation),
/* harmony export */   "rotateOutAnimation": () => (/* binding */ rotateOutAnimation),
/* harmony export */   "rotateOutDownLeftAnimation": () => (/* binding */ rotateOutDownLeftAnimation),
/* harmony export */   "rotateOutDownLeftOnLeaveAnimation": () => (/* binding */ rotateOutDownLeftOnLeaveAnimation),
/* harmony export */   "rotateOutDownRightAnimation": () => (/* binding */ rotateOutDownRightAnimation),
/* harmony export */   "rotateOutDownRightOnLeaveAnimation": () => (/* binding */ rotateOutDownRightOnLeaveAnimation),
/* harmony export */   "rotateOutOnLeaveAnimation": () => (/* binding */ rotateOutOnLeaveAnimation),
/* harmony export */   "rotateOutUpLeftAnimation": () => (/* binding */ rotateOutUpLeftAnimation),
/* harmony export */   "rotateOutUpLeftOnLeaveAnimation": () => (/* binding */ rotateOutUpLeftOnLeaveAnimation),
/* harmony export */   "rotateOutUpRightAnimation": () => (/* binding */ rotateOutUpRightAnimation),
/* harmony export */   "rotateOutUpRightOnLeaveAnimation": () => (/* binding */ rotateOutUpRightOnLeaveAnimation),
/* harmony export */   "rubberBandAnimation": () => (/* binding */ rubberBandAnimation),
/* harmony export */   "rubberBandOnEnterAnimation": () => (/* binding */ rubberBandOnEnterAnimation),
/* harmony export */   "shakeAnimation": () => (/* binding */ shakeAnimation),
/* harmony export */   "shakeOnEnterAnimation": () => (/* binding */ shakeOnEnterAnimation),
/* harmony export */   "slideInDownAnimation": () => (/* binding */ slideInDownAnimation),
/* harmony export */   "slideInDownOnEnterAnimation": () => (/* binding */ slideInDownOnEnterAnimation),
/* harmony export */   "slideInLeftAnimation": () => (/* binding */ slideInLeftAnimation),
/* harmony export */   "slideInLeftOnEnterAnimation": () => (/* binding */ slideInLeftOnEnterAnimation),
/* harmony export */   "slideInRightAnimation": () => (/* binding */ slideInRightAnimation),
/* harmony export */   "slideInRightOnEnterAnimation": () => (/* binding */ slideInRightOnEnterAnimation),
/* harmony export */   "slideInUpAnimation": () => (/* binding */ slideInUpAnimation),
/* harmony export */   "slideInUpOnEnterAnimation": () => (/* binding */ slideInUpOnEnterAnimation),
/* harmony export */   "slideOutDownAnimation": () => (/* binding */ slideOutDownAnimation),
/* harmony export */   "slideOutDownOnLeaveAnimation": () => (/* binding */ slideOutDownOnLeaveAnimation),
/* harmony export */   "slideOutLeftAnimation": () => (/* binding */ slideOutLeftAnimation),
/* harmony export */   "slideOutLeftOnLeaveAnimation": () => (/* binding */ slideOutLeftOnLeaveAnimation),
/* harmony export */   "slideOutRightAnimation": () => (/* binding */ slideOutRightAnimation),
/* harmony export */   "slideOutRightOnLeaveAnimation": () => (/* binding */ slideOutRightOnLeaveAnimation),
/* harmony export */   "slideOutUpAnimation": () => (/* binding */ slideOutUpAnimation),
/* harmony export */   "slideOutUpOnLeaveAnimation": () => (/* binding */ slideOutUpOnLeaveAnimation),
/* harmony export */   "swingAnimation": () => (/* binding */ swingAnimation),
/* harmony export */   "swingOnEnterAnimation": () => (/* binding */ swingOnEnterAnimation),
/* harmony export */   "tadaAnimation": () => (/* binding */ tadaAnimation),
/* harmony export */   "tadaOnEnterAnimation": () => (/* binding */ tadaOnEnterAnimation),
/* harmony export */   "wobbleAnimation": () => (/* binding */ wobbleAnimation),
/* harmony export */   "wobbleOnEnterAnimation": () => (/* binding */ wobbleOnEnterAnimation),
/* harmony export */   "zoomInAnimation": () => (/* binding */ zoomInAnimation),
/* harmony export */   "zoomInDownAnimation": () => (/* binding */ zoomInDownAnimation),
/* harmony export */   "zoomInDownOnEnterAnimation": () => (/* binding */ zoomInDownOnEnterAnimation),
/* harmony export */   "zoomInLeftAnimation": () => (/* binding */ zoomInLeftAnimation),
/* harmony export */   "zoomInLeftOnEnterAnimation": () => (/* binding */ zoomInLeftOnEnterAnimation),
/* harmony export */   "zoomInOnEnterAnimation": () => (/* binding */ zoomInOnEnterAnimation),
/* harmony export */   "zoomInRightAnimation": () => (/* binding */ zoomInRightAnimation),
/* harmony export */   "zoomInRightOnEnterAnimation": () => (/* binding */ zoomInRightOnEnterAnimation),
/* harmony export */   "zoomInUpAnimation": () => (/* binding */ zoomInUpAnimation),
/* harmony export */   "zoomInUpOnEnterAnimation": () => (/* binding */ zoomInUpOnEnterAnimation),
/* harmony export */   "zoomOutAnimation": () => (/* binding */ zoomOutAnimation),
/* harmony export */   "zoomOutDownAnimation": () => (/* binding */ zoomOutDownAnimation),
/* harmony export */   "zoomOutDownOnLeaveAnimation": () => (/* binding */ zoomOutDownOnLeaveAnimation),
/* harmony export */   "zoomOutLeftAnimation": () => (/* binding */ zoomOutLeftAnimation),
/* harmony export */   "zoomOutLeftOnLeaveAnimation": () => (/* binding */ zoomOutLeftOnLeaveAnimation),
/* harmony export */   "zoomOutOnLeaveAnimation": () => (/* binding */ zoomOutOnLeaveAnimation),
/* harmony export */   "zoomOutRightAnimation": () => (/* binding */ zoomOutRightAnimation),
/* harmony export */   "zoomOutRightOnLeaveAnimation": () => (/* binding */ zoomOutRightOnLeaveAnimation),
/* harmony export */   "zoomOutUpAnimation": () => (/* binding */ zoomOutUpAnimation),
/* harmony export */   "zoomOutUpOnLeaveAnimation": () => (/* binding */ zoomOutUpOnLeaveAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);


function useAnimationIncludingChildren(animation, options) {
  return [...(options && options.animateChildren === 'before' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(animation), ...(!options || !options.animateChildren || options.animateChildren === 'together' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])]), ...(options && options.animateChildren === 'after' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])];
}

const bounce = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -30px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -30px, 0)',
  easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  offset: 0.43
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  offset: 0.53
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -15px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -4px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0 = bounce;
const DEFAULT_DURATION = 1000;

function bounceAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounce', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center bottom'
  }), ...useAnimationIncludingChildren(bounce(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION
    }
  })]);
}

function bounceOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center bottom'
  }), ...useAnimationIncludingChildren(bounce(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION
    }
  })]);
}

const flash = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 0.25
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$1 = flash;
const DEFAULT_DURATION$1 = 1000;

function flashAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flash', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(flash(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1
    }
  })]);
}

function flashOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flashOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(flash(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1
    }
  })]);
}

const headShake = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'translateX(0)',
  easing: 'ease-in-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-6px) rotateY(-9deg)',
  easing: 'ease-in-out',
  offset: 0.065
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(5px) rotateY(7deg)',
  easing: 'ease-in-out',
  offset: 0.185
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-3px) rotateY(-5deg)',
  easing: 'ease-in-out',
  offset: 0.315
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(2px) rotateY(3deg)',
  easing: 'ease-in-out',
  offset: 0.435
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0)',
  easing: 'ease-in-out',
  offset: 0.5
})]))]);

const ɵ0$2 = headShake;
const DEFAULT_DURATION$2 = 1000;

function headShakeAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'headShake', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(headShake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$2
    }
  })]);
}

function headShakeOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'headShakeOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(headShake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$2
    }
  })]);
}

const heartBeat = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'scale(1)',
  easing: 'ease-in-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale({{scale}})',
  easing: 'ease-in-out',
  offset: 0.14
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)',
  easing: 'ease-in-out',
  offset: 0.28
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale({{scale}})',
  easing: 'ease-in-out',
  offset: 0.42
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)',
  easing: 'ease-in-out',
  offset: 0.7
})]))]);

const ɵ0$3 = heartBeat;
const DEFAULT_DURATION$3 = 1300;
const DEFAULT_SCALE = 1.3;

function heartBeatAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'heartBeat', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(heartBeat(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$3,
      scale: options && options.scale || DEFAULT_SCALE
    }
  })]);
}

function heartBeatOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'heartBeatOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(heartBeat(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$3,
      scale: options && options.scale || DEFAULT_SCALE
    }
  })]);
}

const jello = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0.111
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(-12.5deg) skewY(-12.5deg)',
  easing: 'ease',
  offset: 0.222
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(6.25deg) skewY(6.25deg)',
  easing: 'ease',
  offset: 0.333
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(-3.125deg) skewY(-3.125deg)',
  easing: 'ease',
  offset: 0.444
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(1.5625deg) skewY(1.5625deg)',
  easing: 'ease',
  offset: 0.555
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
  easing: 'ease',
  offset: 0.666
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(0.390625deg) skewY(0.390625deg)',
  easing: 'ease',
  offset: 0.777
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
  easing: 'ease',
  offset: 0.888
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'skewX(0deg) skewY(0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$4 = jello;
const DEFAULT_DURATION$4 = 1000;

function jelloAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'jello', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(jello(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$4
    }
  })]);
}

function jelloOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'jelloOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(jello(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$4
    }
  })]);
}

const pulse = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d({{scale}}, {{scale}}, {{scale}})',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$5 = pulse;
const DEFAULT_DURATION$5 = 1000;

function pulseAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'pulse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(pulse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$5,
      scale: options && options.scale || 1.05
    }
  })]);
}

function pulseOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'pulseOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(pulse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$5,
      scale: options && options.scale || 1.05
    }
  })]);
}

const rubberBand = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.25, 0.75, 1)',
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.75, 1.25, 1)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.15, 0.85, 1)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.95, 1.05, 1)',
  easing: 'ease',
  offset: 0.65
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.05, 0.95, 1)',
  easing: 'ease',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$6 = rubberBand;
const DEFAULT_DURATION$6 = 1000;

function rubberBandAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rubberBand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(rubberBand(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$6
    }
  })]);
}

function rubberBandOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rubberBandOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(rubberBand(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$6
    }
  })]);
}

const shake = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$7 = shake;
const DEFAULT_DURATION$7 = 1000;

function shakeAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'shake', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(shake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$7,
      translate: options && options.translate || '10px'
    }
  })]);
}

function shakeOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'shakeOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(shake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$7,
      translate: options && options.translate || '10px'
    }
  })]);
}

const swing = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'top center',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate3d(0, 0, 1, 15deg)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate3d(0, 0, 1, -10deg)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate3d(0, 0, 1, 5deg)',
  easing: 'ease',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate3d(0, 0, 1, -5deg)',
  easing: 'ease',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$8 = swing;
const DEFAULT_DURATION$8 = 1000;

function swingAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'swing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(swing(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$8
    }
  })]);
}

function swingOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'swingOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'top center'
  }), ...useAnimationIncludingChildren(swing(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$8
    }
  })]);
}

const tada = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
  easing: 'ease',
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
  easing: 'ease',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$9 = tada;
const DEFAULT_DURATION$9 = 1000;

function tadaAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'tada', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(tada(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$9
    }
  })]);
}

function tadaOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'tadaOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(tada(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$9
    }
  })]);
}

const wobble = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
  easing: 'ease',
  offset: 0.15
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
  easing: 'ease',
  offset: 0.45
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
  easing: 'ease',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
  easing: 'ease',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$a = wobble;
const DEFAULT_DURATION$a = 1000;

function wobbleAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'wobble', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`0 ${options && options.direction || '<=>'} 1`, [...useAnimationIncludingChildren(wobble(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$a
    }
  })]);
}

function wobbleOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'wobbleOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(wobble(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$a
    }
  })]);
}

const bounceInDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 25px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -10px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 5px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})]))]));

const ɵ0$b = bounceInDown;
const DEFAULT_DURATION$b = 1000;

function bounceInDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$b,
      translate: options && options.translate || '3000px'
    }
  })]);
}

function bounceInDownOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInDownOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$b,
      translate: options && options.translate || '3000px'
    }
  })]);
}

const bounceInLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(25px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-10px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(5px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})]))]));

const ɵ0$c = bounceInLeft;
const DEFAULT_DURATION$c = 1000;

function bounceInLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$c,
      translate: options && options.translate || '3000px'
    }
  })]);
}

function bounceInLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$c,
      translate: options && options.translate || '3000px'
    }
  })]);
}

const bounceInRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-25px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(10px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-5px, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})]))]));

const ɵ0$d = bounceInRight;
const DEFAULT_DURATION$d = 1000;

function bounceInRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$d,
      translate: options && options.translate || '3000px'
    }
  })]);
}

function bounceInRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$d,
      translate: options && options.translate || '3000px'
    }
  })]);
}

const bounceInUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -20px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 10px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.75
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -5px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.9
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -5px, 0)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})]))]));

const ɵ0$e = bounceInUp;
const DEFAULT_DURATION$e = 1000;

function bounceInUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$e,
      translate: options && options.translate || '3000px'
    }
  })]);
}

function bounceInUpOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInUpOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$e,
      translate: options && options.translate || '3000px'
    }
  })]);
}

const bounceIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.3, 0.3, 0.3)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.9, 0.9, 0.9)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.03, 1.03, 1.03)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.97, 0.97, 0.97)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  offset: 1
})]))]));

const ɵ0$f = bounceIn;
const DEFAULT_DURATION$f = 750;

function bounceInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$f
    }
  })]);
}

function bounceInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(bounceIn(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$f
    }
  })]);
}

const bounceOutDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 10px, 0)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -20px, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -20px, 0)',
  easing: 'ease',
  offset: 0.45
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0.45
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))]));

const ɵ0$g = bounceOutDown;
const DEFAULT_DURATION$g = 1000;

function bounceOutDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(bounceOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$g,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function bounceOutDownOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutDownOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(bounceOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$g,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const bounceOutLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(20px, 0, 0)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$h = bounceOutLeft;
const DEFAULT_DURATION$h = 1000;

function bounceOutLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(bounceOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$h,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function bounceOutLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(bounceOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$h,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const bounceOutRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(-20px, 0, 0)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$i = bounceOutRight;
const DEFAULT_DURATION$i = 1000;

function bounceOutRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(bounceOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$i,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function bounceOutRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(bounceOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$i,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const bounceOutUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -10px, 0)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 20px, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 20px, 0)',
  easing: 'ease',
  offset: 0.45
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0.45
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))])]));

const ɵ0$j = bounceOutUp;
const DEFAULT_DURATION$j = 1000;

function bounceOutUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(bounceOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$j,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function bounceOutUpOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutUpOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(bounceOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$j,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const bounceOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.9, 0.9, 0.9)',
  easing: 'ease',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1.1, 1.1, 1.1)',
  easing: 'ease',
  offset: 0.55
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.3, 0.3, 0.3)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0.55
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))]));

const ɵ0$k = bounceOut;
const DEFAULT_DURATION$k = 750;

function bounceOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(bounceOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$k
    }
  })]);
}

function bounceOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'bounceOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(bounceOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$k
    }
  })]);
}

const fadeInDownBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$l = fadeInDownBig;
const DEFAULT_DURATION$l = 1000;

function fadeInDownBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInDownBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$l,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeInDownBigOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInDownBigOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$l,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeInDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$m = fadeInDown;
const DEFAULT_DURATION$m = 1000;

function fadeInDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$m,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeInDownOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInDownOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$m,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeInLeftBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$n = fadeInLeftBig;
const DEFAULT_DURATION$n = 1000;

function fadeInLeftBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInLeftBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$n,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeInLeftBigOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInLeftBigOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$n,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeInLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$o = fadeInLeft;
const DEFAULT_DURATION$o = 1000;

function fadeInLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$o,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeInLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$o,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeInRightBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$p = fadeInRightBig;
const DEFAULT_DURATION$p = 1000;

function fadeInRightBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInRightBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$p,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeInRightBigOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInRightBigOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$p,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeInRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$q = fadeInRight;
const DEFAULT_DURATION$q = 1000;

function fadeInRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$q,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeInRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$q,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeInUpBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$r = fadeInUpBig;
const DEFAULT_DURATION$r = 1000;

function fadeInUpBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInUpBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$r,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeInUpBigOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInUpBigOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$r,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeInUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$s = fadeInUp;
const DEFAULT_DURATION$s = 1000;

function fadeInUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$s,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeInUpOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInUpOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$s,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$t = fadeIn;
const DEFAULT_DURATION$t = 1000;

function fadeInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$t
    }
  })]);
}

function fadeInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$t
    }
  })]);
}

const fadeOutDownBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$u = fadeOutDownBig;
const DEFAULT_DURATION$u = 1000;

function fadeOutDownBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutDownBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$u,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeOutDownBigOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutDownBigOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$u,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeOutDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$v = fadeOutDown;
const DEFAULT_DURATION$v = 1000;

function fadeOutDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$v,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeOutDownOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutDownOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$v,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeOutLeftBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$w = fadeOutLeftBig;
const DEFAULT_DURATION$w = 1000;

function fadeOutLeftBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutLeftBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$w,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeOutLeftBigOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutLeftBigOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$w,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeOutLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$x = fadeOutLeft;
const DEFAULT_DURATION$x = 1000;

function fadeOutLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$x,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeOutLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$x,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeOutRightBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$y = fadeOutRightBig;
const DEFAULT_DURATION$y = 1000;

function fadeOutRightBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutRightBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$y,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeOutRightBigOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutRightBigOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$y,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeOutRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$z = fadeOutRight;
const DEFAULT_DURATION$z = 1000;

function fadeOutRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$z,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeOutRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$z,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeOutUpBig = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$A = fadeOutUpBig;
const DEFAULT_DURATION$A = 1000;

function fadeOutUpBigAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutUpBig', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$A,
      translate: options && options.translate || '2000px'
    }
  })]);
}

function fadeOutUpBigOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutUpBigOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$A,
      translate: options && options.translate || '2000px'
    }
  })]);
}

const fadeOutUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$B = fadeOutUp;
const DEFAULT_DURATION$B = 1000;

function fadeOutUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$B,
      translate: options && options.translate || '100%'
    }
  })]);
}

function fadeOutUpOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutUpOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$B,
      translate: options && options.translate || '100%'
    }
  })]);
}

const fadeOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$C = fadeOut;
const DEFAULT_DURATION$C = 1000;

function fadeOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(fadeOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$C
    }
  })]);
}

function fadeOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$C
    }
  })]);
}

const flipInX = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)',
  opacity: 0,
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
  opacity: 0.5,
  easing: 'ease-in',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
  opacity: 1,
  easing: 'ease-in',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
  easing: 'ease',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$D = flipInX;
const DEFAULT_DURATION$D = 1000;

function flipInXAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipInX', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipInX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$D,
      degrees: options && options.degrees || 90
    }
  })]);
}

function flipInXOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipInXOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipInX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$D,
      degrees: options && options.degrees || 90
    }
  })]);
}

const flipInY = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)',
  opacity: 0,
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
  opacity: 0.5,
  easing: 'ease-in',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
  opacity: 1,
  easing: 'ease-in',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
  easing: 'ease',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$E = flipInY;
const DEFAULT_DURATION$E = 1000;

function flipInYAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipInY', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipInY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$E,
      degrees: options && options.degrees || 90
    }
  })]);
}

function flipInYOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipInYOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipInY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$E,
      degrees: options && options.degrees || 90
    }
  })]);
}

const flipOutX = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px)',
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
  opacity: 1,
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)',
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$F = flipOutX;
const DEFAULT_DURATION$F = 750;

function flipOutXAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipOutX', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipOutX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$F,
      degrees: options && options.degrees || 90
    }
  })]);
}

function flipOutXOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipOutXOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipOutX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$F,
      degrees: options && options.degrees || 90
    }
  })]);
}

const flipOutY = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px)',
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
  opacity: 1,
  easing: 'ease',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)',
  opacity: 0,
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$G = flipOutY;
const DEFAULT_DURATION$G = 750;

function flipOutYAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipOutY', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipOutY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$G,
      degrees: options && options.degrees || 90
    }
  })]);
}

function flipOutYOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipOutYOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flipOutY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$G,
      degrees: options && options.degrees || 90
    }
  })]);
}

const flip = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
  easing: 'ease-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
  easing: 'ease-out',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
  easing: 'ease-in',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
  easing: 'ease-in',
  offset: 1
})]))]);

const ɵ0$H = flip;
const DEFAULT_DURATION$H = 1000;

function flipAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flip', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 <=> 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flip(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$H
    }
  })]);
}

function flipOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'flipOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'backface-visibility': 'visible'
  }), ...useAnimationIncludingChildren(flip(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$H
    }
  })]);
}

const lightSpeedIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0) skewX(-30deg)',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'skewX(20deg)',
  easing: 'ease-out',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'skewX(-5deg)',
  easing: 'ease-out',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease-out',
  offset: 1
})]))]);

const ɵ0$I = lightSpeedIn;
const DEFAULT_DURATION$I = 1000;

function lightSpeedInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'lightSpeedIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(lightSpeedIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$I,
      translate: options && options.translate || '100%'
    }
  })]);
}

function lightSpeedInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'lightSpeedInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(lightSpeedIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$I,
      translate: options && options.translate || '100%'
    }
  })]);
}

const lightSpeedOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0) skewX(30deg)',
  easing: 'ease-in',
  offset: 1
})]))]);

const ɵ0$J = lightSpeedOut;
const DEFAULT_DURATION$J = 1000;

function lightSpeedOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'lightSpeedOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$J,
      translate: options && options.translate || '100%'
    }
  })]);
}

function lightSpeedOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'lightSpeedOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$J,
      translate: options && options.translate || '100%'
    }
  })]);
}

const rotateInDownLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$K = rotateInDownLeft;
const DEFAULT_DURATION$K = 1000;

function rotateInDownLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInDownLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateInDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$K,
      degrees: options && options.degrees || -45
    }
  })]);
}

function rotateInDownLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInDownLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateInDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$K,
      degrees: options && options.degrees || -45
    }
  })]);
}

const rotateInDownRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$L = rotateInDownRight;
const DEFAULT_DURATION$L = 1000;

function rotateInDownRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInDownRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateInDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$L,
      degrees: options && options.degrees || 45
    }
  })]);
}

function rotateInDownRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInDownRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateInDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$L,
      degrees: options && options.degrees || 45
    }
  })]);
}

const rotateInUpLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$M = rotateInUpLeft;
const DEFAULT_DURATION$M = 1000;

function rotateInUpLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInUpLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateInUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$M,
      degrees: options && options.degrees || 45
    }
  })]);
}

function rotateInUpLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInUpLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateInUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$M,
      degrees: options && options.degrees || 45
    }
  })]);
}

const rotateInUpRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$N = rotateInUpRight;
const DEFAULT_DURATION$N = 1000;

function rotateInUpRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInUpRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateInUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$N,
      degrees: options && options.degrees || -90
    }
  })]);
}

function rotateInUpRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInUpRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateInUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$N,
      degrees: options && options.degrees || -90
    }
  })]);
}

const rotateIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'rotate({{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'rotate(0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$O = rotateIn;
const DEFAULT_DURATION$O = 1000;

function rotateInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(rotateIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$O,
      degrees: options && options.degrees || -200
    }
  })]);
}

function rotateInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(rotateIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$O,
      degrees: options && options.degrees || -200
    }
  })]);
}

const rotateOutDownLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$P = rotateOutDownLeft;
const DEFAULT_DURATION$P = 1000;

function rotateOutDownLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutDownLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateOutDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$P,
      degrees: options && options.degrees || 45
    }
  })]);
}

function rotateOutDownLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutDownLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateOutDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$P,
      degrees: options && options.degrees || 45
    }
  })]);
}

const rotateOutDownRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$Q = rotateOutDownRight;
const DEFAULT_DURATION$Q = 1000;

function rotateOutDownRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutDownRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateOutDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Q,
      degrees: options && options.degrees || -45
    }
  })]);
}

function rotateOutDownRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutDownRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateOutDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Q,
      degrees: options && options.degrees || -45
    }
  })]);
}

const rotateOutUpLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$R = rotateOutUpLeft;
const DEFAULT_DURATION$R = 1000;

function rotateOutUpLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutUpLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$R,
      degrees: options && options.degrees || -45
    }
  })]);
}

function rotateOutUpLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutUpLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'left bottom'
  }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$R,
      degrees: options && options.degrees || -45
    }
  })]);
}

const rotateOutUpRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$S = rotateOutUpRight;
const DEFAULT_DURATION$S = 1000;

function rotateOutUpRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutUpRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$S,
      degrees: options && options.degrees || 90
    }
  })]);
}

function rotateOutUpRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutUpRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'right bottom'
  }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$S,
      degrees: options && options.degrees || 90
    }
  })]);
}

const rotateOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'rotate({{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$T = rotateOut;
const DEFAULT_DURATION$T = 1000;

function rotateOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(rotateOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$T,
      degrees: options && options.degrees || 200
    }
  })]);
}

function rotateOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotateOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    'transform-origin': 'center'
  }), ...useAnimationIncludingChildren(rotateOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$T,
      degrees: options && options.degrees || 200
    }
  })]);
}

const slideInDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'translate3d(0, -{{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$U = slideInDown;
const DEFAULT_DURATION$U = 1000;

function slideInDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$U,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideInDownOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInDownOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$U,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideInLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'translate3d(-{{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$V = slideInLeft;
const DEFAULT_DURATION$V = 1000;

function slideInLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$V,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideInLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$V,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideInRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'translate3d({{translate}}, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$W = slideInRight;
const DEFAULT_DURATION$W = 1000;

function slideInRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$W,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideInRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$W,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideInUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'translate3d(0, {{translate}}, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$X = slideInUp;
const DEFAULT_DURATION$X = 1000;

function slideInUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$X,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideInUpOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideInUpOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(slideInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$X,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideOutDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, {{translate}}, 0)',
  visibility: 'hidden',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$Y = slideOutDown;
const DEFAULT_DURATION$Y = 1000;

function slideOutDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(slideOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Y,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideOutDownOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutDownOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(slideOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Y,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideOutLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(-{{translate}}, 0, 0)',
  visibility: 'hidden',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$Z = slideOutLeft;
const DEFAULT_DURATION$Z = 1000;

function slideOutLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(slideOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Z,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideOutLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(slideOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Z,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideOutRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d({{translate}}, 0, 0)',
  visibility: 'hidden',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$_ = slideOutRight;
const DEFAULT_DURATION$_ = 1000;

function slideOutRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(slideOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$_,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideOutRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(slideOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$_,
      translate: options && options.translate || '100%'
    }
  })]);
}

const slideOutUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translate3d(0, -{{translate}}, 0)',
  visibility: 'hidden',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$$ = slideOutUp;
const DEFAULT_DURATION$$ = 1000;

function slideOutUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(slideOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$$,
      translate: options && options.translate || '100%'
    }
  })]);
}

function slideOutUpOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'slideOutUpOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(slideOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$$,
      translate: options && options.translate || '100%'
    }
  })]);
}

const zoomInDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
  offset: 1
})]))]);

const ɵ0$10 = zoomInDown;
const DEFAULT_DURATION$10 = 1000;

function zoomInDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$10
    }
  })]);
}

function zoomInDownOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInDownOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$10
    }
  })]);
}

const zoomInLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-3000px, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
  offset: 1
})]))]);

const ɵ0$11 = zoomInLeft;
const DEFAULT_DURATION$11 = 1000;

function zoomInLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$11
    }
  })]);
}

function zoomInLeftOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInLeftOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$11
    }
  })]);
}

const zoomInRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
  offset: 1
})]))]);

const ɵ0$12 = zoomInRight;
const DEFAULT_DURATION$12 = 1000;

function zoomInRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$12
    }
  })]);
}

function zoomInRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$12
    }
  })]);
}

const zoomInUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
  offset: 1
})]))]);

const ɵ0$13 = zoomInUp;
const DEFAULT_DURATION$13 = 1000;

function zoomInUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$13
    }
  })]);
}

function zoomInUpOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInUpOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$13
    }
  })]);
}

const zoomIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  transform: 'scale3d(0.3, 0.3, 0.3)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 1
})]))]));

const ɵ0$14 = zoomIn;
const DEFAULT_DURATION$14 = 1000;

function zoomInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$14
    }
  })]);
}

function zoomInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(zoomIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$14
    }
  })]);
}

const zoomOutDown = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 1
})]))]);

const ɵ0$15 = zoomOutDown;
const DEFAULT_DURATION$15 = 1000;

function zoomOutDownAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(zoomOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$15
    }
  })]);
}

function zoomOutDownOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutDownOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(zoomOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$15
    }
  })]);
}

const zoomOutLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center center',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'left center',
  offset: 0.4
})]))]));

const ɵ0$16 = zoomOutLeft;
const DEFAULT_DURATION$16 = 1000;

function zoomOutLeftAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(zoomOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$16
    }
  })]);
}

function zoomOutLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(zoomOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$16
    }
  })]);
}

const zoomOutRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center center',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'right center',
  offset: 0.4
})]))]));

const ɵ0$17 = zoomOutRight;
const DEFAULT_DURATION$17 = 1000;

function zoomOutRightAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(zoomOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$17
    }
  })]);
}

function zoomOutRightOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutRightOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(zoomOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$17
    }
  })]);
}

const zoomOutUp = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  opacity: 1,
  transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
  easing: 'ease',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  opacity: 0,
  transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
  easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  offset: 1
})]))]);

const ɵ0$18 = zoomOutUp;
const DEFAULT_DURATION$18 = 1000;

function zoomOutUpAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(zoomOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$18
    }
  })]);
}

function zoomOutUpOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutUpOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(zoomOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$18
    }
  })]);
}

const zoomOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale3d(0.3, 0.3, 0.3)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(1, 1, 1)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale3d(0.3, 0.3, 0.3)',
  easing: 'ease',
  offset: 0.5
})]))]));

const ɵ0$19 = zoomOut;
const DEFAULT_DURATION$19 = 1000;

function zoomOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(zoomOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$19
    }
  })]);
}

function zoomOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'zoomOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(zoomOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$19
    }
  })]);
}

const hinge = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  'transform-origin': 'top left',
  transform: 'translate3d(0, 0, 0)',
  easing: 'ease-in-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  'transform-origin': 'top left',
  transform: 'rotate3d(0, 0, 1, 80deg)',
  easing: 'ease-in-out',
  offset: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  'transform-origin': 'top left',
  transform: 'rotate3d(0, 0, 1, 60deg)',
  easing: 'ease-in-out',
  offset: 0.4
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  'transform-origin': 'top left',
  transform: 'rotate3d(0, 0, 1, 80deg)',
  easing: 'ease-in-out',
  offset: 0.6
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  'transform-origin': 'top left',
  transform: 'rotate3d(0, 0, 1, 60deg)',
  easing: 'ease-in-out',
  offset: 0.8
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  'transform-origin': 'top left',
  transform: 'translate3d(0, 700px, 0)',
  easing: 'ease-in-out',
  offset: 1
})]))]);

const ɵ0$1a = hinge;
const DEFAULT_DURATION$1a = 2000;

function hingeAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'hinge', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(hinge(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1a
    }
  })]);
}

function hingeOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'hingeOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(hinge(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1a
    }
  })]);
}

const jackInTheBox = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  transform: 'scale(0.1) rotate(30deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  transform: 'rotate(-10deg)',
  easing: 'ease',
  offset: 0.5
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  transform: 'rotate(3deg)',
  easing: 'ease',
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform-origin': 'center bottom',
  transform: 'scale(1)',
  easing: 'ease',
  offset: 1
})])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  offset: 1
})]))]));

const ɵ0$1b = jackInTheBox;
const DEFAULT_DURATION$1b = 1000;

function jackInTheBoxAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'jackInTheBox', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(jackInTheBox(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1b
    }
  })]);
}

function jackInTheBoxOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'jackInTheBoxOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(jackInTheBox(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1b
    }
  })]);
}

const rollIn = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: 'visible',
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$1c = rollIn;
const DEFAULT_DURATION$1c = 1000;

function rollInAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rollIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(rollIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1c,
      degrees: options && options.degrees || -120,
      translate: options && options.translate || '-100%'
    }
  })]);
}

function rollInOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rollInOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(rollIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1c,
      degrees: options && options.degrees || -120,
      translate: options && options.translate || '-100%'
    }
  })]);
}

const rollOut = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
  easing: 'ease',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)',
  easing: 'ease',
  offset: 1
})]))]);

const ɵ0$1d = rollOut;
const DEFAULT_DURATION$1d = 1000;

function rollOutAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rollOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...useAnimationIncludingChildren(rollOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1d,
      degrees: options && options.degrees || 120,
      translate: options && options.translate || '100%'
    }
  })]);
}

function rollOutOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rollOutOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(rollOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1d,
      degrees: options && options.degrees || 120,
      translate: options && options.translate || '100%'
    }
  })]);
}

function animateChildrenOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'animateChildrenOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })])]);
}

function animateIncludingChildren(easing, options) {
  return [...(options && options.animateChildren === 'before' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + easing)]), ...(!options || !options.animateChildren || options.animateChildren === 'together' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])]), ...(options && options.animateChildren === 'after' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])];
}

const DEFAULT_DURATION$1e = 200;

function collapseAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'collapse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
    visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
    overflow: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...animateIncludingChildren('ease-in', options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', [...animateIncludingChildren('ease-out', options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function collapseHorizontallyAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'collapseHorizontally', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: '0',
    visibility: 'hidden',
    overflow: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
    visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
    overflow: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...animateIncludingChildren('ease-in', options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', [...animateIncludingChildren('ease-out', options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

const expand = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 1
})])));

const ɵ0$1e = expand;

const expandRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 1
})])));

const ɵ1 = expandRight;

const fadeInExpand = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0',
  opacity: 0,
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 1
})])));

const ɵ2 = fadeInExpand;

const fadeInExpandRight = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: '0',
  opacity: 0,
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-out',
  offset: 1
})])));

const ɵ3 = fadeInExpandRight;

const collapse = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 1
})])));

const ɵ4 = collapse;

const collapseLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 1
})])));

const ɵ5 = collapseLeft;

const fadeOutCollapse = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0',
  opacity: 0,
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 1
})])));

const ɵ6 = fadeOutCollapse;

const fadeOutCollapseLeft = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  opacity: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE,
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: '0',
  opacity: 0,
  visibility: 'hidden',
  overflow: 'hidden',
  easing: 'ease-in',
  offset: 1
})])));

const ɵ7 = fadeOutCollapseLeft;

function expandOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'expandOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(expand(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function expandRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'expandRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(expandRight(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function collapseOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'collapseOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(collapse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function collapseLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'collapseLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(collapseLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function fadeInExpandOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInExpandOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInExpand(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function fadeInExpandRightOnEnterAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeInExpandRightOnEnter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    visibility: 'hidden'
  }), ...useAnimationIncludingChildren(fadeInExpandRight(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function fadeOutCollapseOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutCollapseOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutCollapse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

function fadeOutCollapseLeftOnLeaveAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'fadeOutCollapseLeftOnLeave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [...useAnimationIncludingChildren(fadeOutCollapseLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}

const hueRotate = () => (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}ms {{delay}}ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  filter: 'hue-rotate(0deg)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  filter: 'hue-rotate(-360deg)',
  offset: 1
})]))]);

const ɵ0$1f = hueRotate;
const DEFAULT_DURATION$1f = 3000;

function hueRotateAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'hueRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 <=> 1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(hueRotate())]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1f
    }
  })]);
}

const DEFAULT_DURATION$1g = 200;

function rotateAnimation(options) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(options && options.anchor || 'rotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'rotate(0deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'rotate(' + '{{degrees}}' + 'deg)'
  }), {
    params: {
      degrees: options && options.degrees || 180
    }
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', [...(options && options.animateChildren === 'before' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')]), ...(!options || !options.animateChildren || options.animateChildren === 'together' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])]), ...(options && options.animateChildren === 'after' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1g
    }
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', [...(options && options.animateChildren === 'before' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')]), ...(!options || !options.animateChildren || options.animateChildren === 'together' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])]), ...(options && options.animateChildren === 'after' ? [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })] : [])], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1g
    }
  })]);
}
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 84522:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/button.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatAnchor": () => (/* binding */ MatAnchor),
/* harmony export */   "MatButton": () => (/* binding */ MatButton),
/* harmony export */   "MatButtonModule": () => (/* binding */ MatButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default color palette for round buttons (mat-fab and mat-mini-fab) */

const _c0 = ["mat-button", ""];
const _c1 = ["*"];
const _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}";
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */

const BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

const _MatButtonBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisableRipple)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

})));
/**
 * Material design button.
 */


class MatButton extends _MatButtonBase {
  constructor(elementRef, _focusMonitor, _animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._animationMode = _animationMode;
    /** Whether the button is round. */

    this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
    /** Whether the button is icon button. */

    this.isIconButton = this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding class.

    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        this._getHostElement().classList.add(attr);
      }
    } // Add a class that applies to all buttons. This makes it easier to target if somebody
    // wants to target all Material buttons. We do it here rather than `host` to ensure that
    // the class is applied to derived classes.


    elementRef.nativeElement.classList.add('mat-button-base');

    if (this.isRoundButton) {
      this.color = DEFAULT_ROUND_BUTTON_COLOR;
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the button. */


  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Gets whether the button has one of the given attributes. */


  _hasHostAttributes(...attributes) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

}

MatButton.ɵfac = function MatButton_Factory(t) {
  return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
};

MatButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatButton,
  selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
  viewQuery: function MatButton_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 5,
  hostBindings: function MatButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color"
  },
  exportAs: ["matButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1)(3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
  styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
      exportAs: 'matButton',
      host: {
        '[attr.disabled]': 'disabled || null',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        // Add a class for disabled button styling instead of the using attribute
        // selector or pseudo-selector.  This allows users to create focusable
        // disabled buttons without recreating the styles.
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      inputs: ['disabled', 'disableRipple', 'color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
    }]
  });
})();
/**
 * Material design anchor button.
 */


class MatAnchor extends MatButton {
  constructor(focusMonitor, elementRef, animationMode,
  /** @breaking-change 14.0.0 _ngZone will be required. */
  _ngZone) {
    super(elementRef, focusMonitor, animationMode);
    this._ngZone = _ngZone;

    this._haltDisabledEvents = event => {
      // A disabled button shouldn't apply any actions
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    /** @breaking-change 14.0.0 _ngZone will be required. */

    if (this._ngZone) {
      this._ngZone.runOutsideAngular(() => {
        this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
      });
    } else {
      this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this._elementRef.nativeElement.removeEventListener('click', this._haltDisabledEvents);
  }

}

MatAnchor.ɵfac = function MatAnchor_Factory(t) {
  return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 8));
};

MatAnchor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatAnchor,
  selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 7,
  hostBindings: function MatAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matButton", "matAnchor"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatAnchor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1)(3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
      exportAs: 'matButton, matAnchor',
      host: {
        // Note that we ignore the user-specified tabindex when it's disabled for
        // consistency with the `mat-button` applied on native buttons where even
        // though they have an index, they're not tabbable.
        '[attr.tabindex]': 'disabled ? -1 : tabIndex',
        '[attr.disabled]': 'disabled || null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      inputs: ['disabled', 'disableRipple', 'color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatButtonModule {}

MatButtonModule.ɵfac = function MatButtonModule_Factory(t) {
  return new (t || MatButtonModule)();
};

MatButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatButtonModule
});
MatButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatButton, MatAnchor]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 75074:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/form-field.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_ERROR": () => (/* binding */ MAT_ERROR),
/* harmony export */   "MAT_FORM_FIELD": () => (/* binding */ MAT_FORM_FIELD),
/* harmony export */   "MAT_FORM_FIELD_DEFAULT_OPTIONS": () => (/* binding */ MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PREFIX": () => (/* binding */ MAT_PREFIX),
/* harmony export */   "MAT_SUFFIX": () => (/* binding */ MAT_SUFFIX),
/* harmony export */   "MatError": () => (/* binding */ MatError),
/* harmony export */   "MatFormField": () => (/* binding */ MatFormField),
/* harmony export */   "MatFormFieldControl": () => (/* binding */ MatFormFieldControl),
/* harmony export */   "MatFormFieldModule": () => (/* binding */ MatFormFieldModule),
/* harmony export */   "MatHint": () => (/* binding */ MatHint),
/* harmony export */   "MatLabel": () => (/* binding */ MatLabel),
/* harmony export */   "MatPlaceholder": () => (/* binding */ MatPlaceholder),
/* harmony export */   "MatPrefix": () => (/* binding */ MatPrefix),
/* harmony export */   "MatSuffix": () => (/* binding */ MatSuffix),
/* harmony export */   "_MAT_HINT": () => (/* binding */ _MAT_HINT),
/* harmony export */   "getMatFormFieldDuplicatedHintError": () => (/* binding */ getMatFormFieldDuplicatedHintError),
/* harmony export */   "getMatFormFieldMissingControlError": () => (/* binding */ getMatFormFieldMissingControlError),
/* harmony export */   "getMatFormFieldPlaceholderConflictError": () => (/* binding */ getMatFormFieldPlaceholderConflictError),
/* harmony export */   "matFormFieldAnimations": () => (/* binding */ matFormFieldAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/observers */ 43773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _c0 = ["connectionContainer"];
const _c1 = ["inputContainer"];
const _c2 = ["label"];

function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15)(3, "div", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15)(7, "div", 16)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}

function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatFormField_div_4_Template_div_cdkObserveContent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.updateOutlineGap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r2.appearance != "outline");
  }
}

function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12._control.placeholder);
  }
}

function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
  }
}

function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.updateOutlineGap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
  }
}

function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
  }
}

function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
  }
}

function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r17._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.hintLabel);
  }
}

function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
  }
}

const _c3 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c4 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
let nextUniqueId$2 = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatError');
/** Single error message to be shown underneath the form field. */

class MatError {
  constructor(ariaLive, elementRef) {
    this.id = `mat-error-${nextUniqueId$2++}`; // If no aria-live value is set add 'polite' as a default. This is preferred over setting
    // role='alert' so that screen readers do not interrupt the current task to read this aloud.

    if (!ariaLive) {
      elementRef.nativeElement.setAttribute('aria-live', 'polite');
    }
  }

}

MatError.ɵfac = function MatError_Factory(t) {
  return new (t || MatError)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-live'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

MatError.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["aria-atomic", "true", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatError, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-error',
      host: {
        'class': 'mat-error',
        '[attr.id]': 'id',
        'aria-atomic': 'true'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['aria-live']
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the MatFormField.
 * @docs-private
 */


const matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    transform: 'translateY(0%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0,
    transform: 'translateY(-5px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/** An interface which allows a control to work inside of a `MatFormField`. */

class MatFormFieldControl {}

MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
  return new (t || MatFormFieldControl)();
};

MatFormFieldControl.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatFormFieldControl
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */


function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
/** @docs-private */


function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */

const _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatHint');
/** Hint text to be shown underneath the form field control. */


class MatHint {
  constructor() {
    /** Whether to align the hint label at the start or end of the line. */
    this.align = 'start';
    /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

    this.id = `mat-hint-${nextUniqueId$1++}`;
  }

}

MatHint.ɵfac = function MatHint_Factory(t) {
  return new (t || MatHint)();
};

MatHint.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-hint',
        '[class.mat-form-field-hint-end]': 'align === "end"',
        '[attr.id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The floating label for a `mat-form-field`. */


class MatLabel {}

MatLabel.ɵfac = function MatLabel_Factory(t) {
  return new (t || MatLabel)();
};

MatLabel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLabel,
  selectors: [["mat-label"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-label'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */


class MatPlaceholder {}

MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
  return new (t || MatPlaceholder)();
};

MatPlaceholder.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-placeholder'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatPrefix');
/** Prefix to be placed in front of the form field. */

class MatPrefix {}

MatPrefix.ɵfac = function MatPrefix_Factory(t) {
  return new (t || MatPrefix)();
};

MatPrefix.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSuffix');
/** Suffix to be placed at the end of the form field. */

class MatSuffix {}

MatSuffix.ɵfac = function MatSuffix_Factory(t) {
  return new (t || MatSuffix)();
};

MatSuffix.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId = 0;
const floatingLabelScale = 0.75;
const outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */

const _MatFormFieldBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */


const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */

const MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */

class MatFormField extends _MatFormFieldBase {
  constructor(elementRef, _changeDetectorRef, _dir, _defaults, _platform, _ngZone, _animationMode) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._defaults = _defaults;
    this._platform = _platform;
    this._ngZone = _ngZone;
    /**
     * Whether the outline gap needs to be calculated
     * immediately on the next change detection run.
     */

    this._outlineGapCalculationNeededImmediately = false;
    /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

    this._outlineGapCalculationNeededOnStable = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._hideRequiredMarker = false;
    /** Override for the logic that disables the label animation in certain cases. */

    this._showAlwaysAnimate = false;
    /** State of the mat-hint and mat-error animations. */

    this._subscriptAnimationState = '';
    this._hintLabel = ''; // Unique id for the hint label.

    this._hintLabelId = `mat-hint-${nextUniqueId++}`; // Unique id for the label element.

    this._labelId = `mat-form-field-label-${nextUniqueId++}`;
    this.floatLabel = this._getDefaultFloatLabelState();
    this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

    this.appearance = _defaults?.appearance || 'legacy';

    if (_defaults) {
      this._hideRequiredMarker = Boolean(_defaults.hideRequiredMarker);

      if (_defaults.color) {
        this.color = this.defaultColor = _defaults.color;
      }
    }
  }
  /** The form field appearance style. */


  get appearance() {
    return this._appearance;
  }

  set appearance(value) {
    const oldValue = this._appearance;
    this._appearance = value || this._defaults?.appearance || 'legacy';

    if (this._appearance === 'outline' && oldValue !== value) {
      this._outlineGapCalculationNeededOnStable = true;
    }
  }
  /** Whether the required marker should be hidden. */


  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }

  set hideRequiredMarker(value) {
    this._hideRequiredMarker = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }
  /** Whether the floating label should always float or not. */


  _shouldAlwaysFloat() {
    return this.floatLabel === 'always' && !this._showAlwaysAnimate;
  }
  /** Whether the label can float or not. */


  _canLabelFloat() {
    return this.floatLabel !== 'never';
  }
  /** Text for the form field hint. */


  get hintLabel() {
    return this._hintLabel;
  }

  set hintLabel(value) {
    this._hintLabel = value;

    this._processHints();
  }
  /**
   * Whether the label should always float, never float or float as the user types.
   *
   * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
   * way to make the floating label emulate the behavior of a standard input placeholder. However
   * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
   * appearances the `never` option has been disabled in favor of just using the placeholder.
   */


  get floatLabel() {
    return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
  }

  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value || this._getDefaultFloatLabelState();

      this._changeDetectorRef.markForCheck();
    }
  }

  get _control() {
    // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
    //  We should clean this up once Ivy is the default renderer.
    return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
  }

  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */


  getLabelId() {
    return this._hasFloatingLabel() ? this._labelId : null;
  }
  /**
   * Gets an ElementRef for the element that a overlay attached to the form field should be
   * positioned relative to.
   */


  getConnectedOverlayOrigin() {
    return this._connectionContainerRef || this._elementRef;
  }

  ngAfterContentInit() {
    this._validateControlChild();

    const control = this._control;

    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
    } // Subscribe to changes in the child control state in order to update the form field UI.


    control.stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
      this._validatePlaceholders();

      this._syncDescribedByIds();

      this._changeDetectorRef.markForCheck();
    }); // Run change detection if the value changes.

    if (control.ngControl && control.ngControl.valueChanges) {
      control.ngControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    } // Note that we have to run outside of the `NgZone` explicitly,
    // in order to avoid throwing users into an infinite loop
    // if `zone-patch-rxjs` is included.


    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._outlineGapCalculationNeededOnStable) {
          this.updateOutlineGap();
        }
      });
    }); // Run change detection and update the outline if the suffix or prefix changes.


    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._outlineGapCalculationNeededOnStable = true;

      this._changeDetectorRef.markForCheck();
    }); // Re-validate when the number of hints changes.

    this._hintChildren.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
      this._processHints();

      this._changeDetectorRef.markForCheck();
    }); // Update the aria-described by when the number of errors changes.


    this._errorChildren.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
      this._syncDescribedByIds();

      this._changeDetectorRef.markForCheck();
    });

    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        if (typeof requestAnimationFrame === 'function') {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this.updateOutlineGap());
          });
        } else {
          this.updateOutlineGap();
        }
      });
    }
  }

  ngAfterContentChecked() {
    this._validateControlChild();

    if (this._outlineGapCalculationNeededImmediately) {
      this.updateOutlineGap();
    }
  }

  ngAfterViewInit() {
    // Avoid animations on load.
    this._subscriptAnimationState = 'enter';

    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();
  }
  /**
   * Determines whether a class from the AbstractControlDirective
   * should be forwarded to the host element.
   */


  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }

  _hasPlaceholder() {
    return !!(this._control && this._control.placeholder || this._placeholderChild);
  }

  _hasLabel() {
    return !!(this._labelChildNonStatic || this._labelChildStatic);
  }

  _shouldLabelFloat() {
    return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
  }

  _hideControlPlaceholder() {
    // In the legacy appearance the placeholder is promoted to a label if no label is given.
    return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
  }

  _hasFloatingLabel() {
    // In the legacy appearance the placeholder is promoted to a label if no label is given.
    return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
  }
  /** Determines whether to display hints or errors. */


  _getDisplayedMessages() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
  }
  /** Animates the placeholder up and locks it in position. */


  _animateAndLockLabel() {
    if (this._hasFloatingLabel() && this._canLabelFloat()) {
      // If animations are disabled, we shouldn't go in here,
      // because the `transitionend` will never fire.
      if (this._animationsEnabled && this._label) {
        this._showAlwaysAnimate = true;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this._label.nativeElement, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
          this._showAlwaysAnimate = false;
        });
      }

      this.floatLabel = 'always';

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
   * or child element with the `mat-placeholder` directive).
   */


  _validatePlaceholders() {
    if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatFormFieldPlaceholderConflictError();
    }
  }
  /** Does any extra processing that is required when handling the hints. */


  _processHints() {
    this._validateHints();

    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
   * attribute being considered as `align="start"`.
   */


  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      let startHint;
      let endHint;

      this._hintChildren.forEach(hint => {
        if (hint.align === 'start') {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError('start');
          }

          startHint = hint;
        } else if (hint.align === 'end') {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError('end');
          }

          endHint = hint;
        }
      });
    }
  }
  /** Gets the default float label state. */


  _getDefaultFloatLabelState() {
    return this._defaults && this._defaults.floatLabel || 'auto';
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */


  _syncDescribedByIds() {
    if (this._control) {
      let ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
        ids.push(...this._control.userAriaDescribedBy.split(' '));
      }

      if (this._getDisplayedMessages() === 'hint') {
        const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'start') : null;
        const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'end') : null;

        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }

        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map(error => error.id));
      }

      this._control.setDescribedByIds(ids);
    }
  }
  /** Throws an error if the form field's control is missing. */


  _validateControlChild() {
    if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  /**
   * Updates the width and position of the gap in the outline. Only relevant for the outline
   * appearance.
   */


  updateOutlineGap() {
    const labelEl = this._label ? this._label.nativeElement : null;
    const container = this._connectionContainerRef.nativeElement;
    const outlineStartSelector = '.mat-form-field-outline-start';
    const outlineGapSelector = '.mat-form-field-outline-gap'; // getBoundingClientRect isn't available on the server.

    if (this.appearance !== 'outline' || !this._platform.isBrowser) {
      return;
    } // If there is no content, set the gap elements to zero.


    if (!labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
      const gapElements = container.querySelectorAll(`${outlineStartSelector}, ${outlineGapSelector}`);

      for (let i = 0; i < gapElements.length; i++) {
        gapElements[i].style.width = '0';
      }

      return;
    } // If the element is not present in the DOM, the outline gap will need to be calculated
    // the next time it is checked and in the DOM.


    if (!this._isAttachedToDOM()) {
      this._outlineGapCalculationNeededImmediately = true;
      return;
    }

    let startWidth = 0;
    let gapWidth = 0;
    const startEls = container.querySelectorAll(outlineStartSelector);
    const gapEls = container.querySelectorAll(outlineGapSelector);

    if (this._label && this._label.nativeElement.children.length) {
      const containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
      // invisible and we can't calculate the outline gap. Mark the element as needing
      // to be checked the next time the zone stabilizes. We can't do this immediately
      // on the next change detection, because even if the element becomes visible,
      // the `ClientRect` won't be recalculated immediately. We reset the
      // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

      if (containerRect.width === 0 && containerRect.height === 0) {
        this._outlineGapCalculationNeededOnStable = true;
        this._outlineGapCalculationNeededImmediately = false;
        return;
      }

      const containerStart = this._getStartEnd(containerRect);

      const labelChildren = labelEl.children;

      const labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

      let labelWidth = 0;

      for (let i = 0; i < labelChildren.length; i++) {
        labelWidth += labelChildren[i].offsetWidth;
      }

      startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
      gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
    }

    for (let i = 0; i < startEls.length; i++) {
      startEls[i].style.width = `${startWidth}px`;
    }

    for (let i = 0; i < gapEls.length; i++) {
      gapEls[i].style.width = `${gapWidth}px`;
    }

    this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
  }
  /** Gets the start end of the rect considering the current directionality. */


  _getStartEnd(rect) {
    return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
  }
  /** Checks whether the form field is attached to the DOM. */


  _isAttachedToDOM() {
    const element = this._elementRef.nativeElement;

    if (element.getRootNode) {
      const rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
      // or the closest shadow root, otherwise it'll be the element itself.

      return rootNode && rootNode !== element;
    } // Otherwise fall back to checking if it's in the document. This doesn't account for
    // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


    return document.documentElement.contains(element);
  }

}

MatFormField.ɵfac = function MatFormField_Factory(t) {
  return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatFormField.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 40,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel",
    floatLabel: "floatLabel"
  },
  exportAs: ["matFormField"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 15,
  vars: 8,
  consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
        return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MatFormField_div_11_Template, 2, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "hint");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__.CdkObserveContent],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-input-element{font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-input-element::placeholder{transition:none}._mat-animation-noopable .mat-input-element::-moz-placeholder{transition:none}._mat-animation-noopable .mat-input-element::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-input-element:-ms-input-placeholder{transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:rgba(0,0,0,0)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-form-field',
        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-can-float]': '_canLabelFloat()',
        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-focused]': '_control.focused',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")',
        '[class._mat-animation-noopable]': '!_animationsEnabled'
      },
      inputs: ['color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div\n      class=\"mat-form-field-prefix\"\n      *ngIf=\"_prefixChildren.length\"\n      (cdkObserveContent)=\"updateOutlineGap()\"\n      [cdkObserveContentDisabled]=\"appearance != 'outline'\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\"\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-input-element{font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-input-element::placeholder{transition:none}._mat-animation-noopable .mat-input-element::-moz-placeholder{transition:none}._mat-animation-noopable .mat-input-element::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-input-element:-ms-input-placeholder{transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:rgba(0,0,0,0)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideRequiredMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hintLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    floatLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _connectionContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['connectionContainer', {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputContainer']
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label']
    }],
    _controlNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatFormFieldModule {}

MatFormFieldModule.ɵfac = function MatFormFieldModule_Factory(t) {
  return new (t || MatFormFieldModule)();
};

MatFormFieldModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatFormFieldModule
});
MatFormFieldModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__.ObserversModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__.ObserversModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 57371:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/select.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SELECT_CONFIG": () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MAT_SELECT_TRIGGER": () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   "MatSelect": () => (/* binding */ MatSelect),
/* harmony export */   "MatSelectChange": () => (/* binding */ MatSelectChange),
/* harmony export */   "MatSelectModule": () => (/* binding */ MatSelectModule),
/* harmony export */   "MatSelectTrigger": () => (/* binding */ MatSelectTrigger),
/* harmony export */   "_MatSelectBase": () => (/* binding */ _MatSelectBase),
/* harmony export */   "matSelectAnimations": () => (/* binding */ matSelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 21954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 24851);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */

const _c0 = ["trigger"];
const _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.placeholder);
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8._panelDoneAnimatingStream.next($event.toState));
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10._handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanelWrap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)('@transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animateChild)()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing-multiple', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/** The max height of the select's overlay panel. */

const SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis. */

const SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */

const SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */

const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */


const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */

const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

class MatSelectChange {
  constructor(
  /** Reference to the select that emitted the change event. */
  source,
  /** Current value of the select that emitted the event. */
  value) {
    this.source = source;
    this.value = value;
  }

} // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


const _MatSelectMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinErrorState)(class {
  constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /**
   * Form control bound to the component.
   * Implemented as part of `MatFormFieldControl`.
   * @docs-private
   */
  ngControl) {
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
    /**
     * Emits whenever the component state changes and should cause the parent
     * form-field to update. Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }

}))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */

class MatSelectTrigger {}

MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
  return new (t || MatSelectTrigger)();
};

MatSelectTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSelectTrigger,
  selectors: [["mat-select-trigger"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_SELECT_TRIGGER,
    useExisting: MatSelectTrigger
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
/** Base class with all of the `MatSelect` functionality. */


class _MatSelectBase extends _MatSelectMixinBase {
  constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
    super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._dir = _dir;
    this._parentFormField = _parentFormField;
    this._liveAnnouncer = _liveAnnouncer;
    this._defaultOptions = _defaultOptions;
    /** Whether or not the overlay panel is open. */

    this._panelOpen = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */

    this._compareWith = (o1, o2) => o1 === o2;
    /** Unique id for this input. */


    this._uid = `mat-select-${nextUniqueId++}`;
    /** Current `aria-labelledby` value for the select trigger. */

    this._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */

    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** `View -> model callback called when value changes` */

    this._onChange = () => {};
    /** `View -> model callback called when select has been touched` */


    this._onTouched = () => {};
    /** ID for the DOM node containing the select's value. */


    this._valueId = `mat-select-value-${nextUniqueId++}`;
    /** Emits when the panel element is finished transforming in. */

    this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._overlayPanelClass = this._defaultOptions?.overlayPanelClass || '';
    this._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */

    this.controlType = 'mat-select';
    this._multiple = false;
    this._disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
    /** Aria label of the select. */

    this.ariaLabel = '';
    /** Combined stream of all of the child options' change events. */

    this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
      const options = this.options;

      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...options.map(option => option.onSelectionChange))));
      }

      return this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.optionSelectionChanges));
    });
    /** Event emitted when the select panel has been toggled. */

    this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the select has been opened. */

    this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {}));
    /** Event emitted when the select has been closed. */

    this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {}));
    /** Event emitted when the selected value has been changed by the user. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    } // Note that we only want to set this when the defaults pass it in, otherwise it should
    // stay as `undefined` so that it falls back to the default in the key manager.


    if (_defaultOptions?.typeaheadDebounceInterval != null) {
      this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
    }

    this._scrollStrategyFactory = scrollStrategyFactory;
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

    this.id = this.id;
  }
  /** Whether the select is focused. */


  get focused() {
    return this._focused || this._panelOpen;
  }
  /** Placeholder to be shown if no value has been selected. */


  get placeholder() {
    return this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether the component is required. */


  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required) ?? false;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }
  /** Whether the user should be allowed to select multiple options. */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }

    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }
  /** Whether to center the active option over the trigger. */


  get disableOptionCentering() {
    return this._disableOptionCentering;
  }

  set disableOptionCentering(value) {
    this._disableOptionCentering = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */


  get compareWith() {
    return this._compareWith;
  }

  set compareWith(fn) {
    if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }

    this._compareWith = fn;

    if (this._selectionModel) {
      // A different comparator means the selection could change.
      this._initializeSelection();
    }
  }
  /** Value of the select control. */


  get value() {
    return this._value;
  }

  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);

    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */


  get typeaheadDebounceInterval() {
    return this._typeaheadDebounceInterval;
  }

  set typeaheadDebounceInterval(value) {
    this._typeaheadDebounceInterval = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceNumberProperty)(value);
  }
  /** Unique id of the element. */


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }

  ngOnInit() {
    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(this.multiple);
    this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
    // fire the animation end event twice for the same animation. See:
    // https://github.com/angular/angular/issues/24084

    this._panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen));
  }

  ngAfterContentInit() {
    this._initKeyManager();

    this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(event => {
      event.added.forEach(option => option.select());
      event.removed.forEach(option => option.deselect());
    });

    this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      this._resetOptions();

      this._initializeSelection();
    });
  }

  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();

    const ngControl = this.ngControl; // We have to manage setting the `aria-labelledby` ourselves, because part of its value
    // is computed as a result of a content query which can cause this binding to trigger a
    // "changed after checked" error.

    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;

      if (newAriaLabelledby) {
        element.setAttribute('aria-labelledby', newAriaLabelledby);
      } else {
        element.removeAttribute('aria-labelledby');
      }
    }

    if (ngControl) {
      // The disabled state might go out of sync if the form group is swapped out. See #17860.
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }

        this._previousControl = ngControl.control;
      }

      this.updateErrorState();
    }
  }

  ngOnChanges(changes) {
    // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
    // the parent form field know to run change detection when the disabled state changes.
    if (changes['disabled'] || changes['userAriaDescribedBy']) {
      this.stateChanges.next();
    }

    if (changes['typeaheadDebounceInterval'] && this._keyManager) {
      this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
    }
  }

  ngOnDestroy() {
    this._destroy.next();

    this._destroy.complete();

    this.stateChanges.complete();
  }
  /** Toggles the overlay panel open or closed. */


  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */


  open() {
    if (this._canOpen()) {
      this._panelOpen = true;

      this._keyManager.withHorizontalOrientation(null);

      this._highlightCorrectOption();

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Closes the overlay panel and focuses the host element. */


  close() {
    if (this._panelOpen) {
      this._panelOpen = false;

      this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

      this._changeDetectorRef.markForCheck();

      this._onTouched();
    }
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */


  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */


  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */


  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */


  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */


  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The value displayed in the trigger. */


  get triggerValue() {
    if (this.empty) {
      return '';
    }

    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);

      if (this._isRtl()) {
        selectedOptions.reverse();
      } // TODO(crisbeto): delimiter should be configurable for proper localization.


      return selectedOptions.join(', ');
    }

    return this._selectionModel.selected[0].viewValue;
  }
  /** Whether the element is in RTL mode. */


  _isRtl() {
    return this._dir ? this._dir.value === 'rtl' : false;
  }
  /** Handles all keydown events on the select. */


  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  /** Handles keyboard events while the select is closed. */


  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.RIGHT_ARROW;
    const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE;
    const manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

    if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault(); // prevents the page from scrolling down when pressing space

      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

      if (selectedOption && previouslySelectedOption !== selectedOption) {
        // We set a duration on the live announcement, because we want the live element to be
        // cleared after a while so that users can't navigate to it using the arrow keys.
        this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */


  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW;
    const isTyping = manager.isTyping();

    if (isArrowKey && event.altKey) {
      // Close the select on ALT + arrow key to match the native <select>
      event.preventDefault();
      this.close(); // Don't do anything in this case if the user is typing,
      // because the typing sequence can include the space key.
    } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
      event.preventDefault();

      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
      this.options.forEach(option => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);

      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }

  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */


  _onBlur() {
    this._focused = false;

    if (!this.disabled && !this.panelOpen) {
      this._onTouched();

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
  }
  /**
   * Callback that is invoked when the overlay panel has been attached.
   */


  _onAttached() {
    this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();

      this._positioningSettled();
    });
  }
  /** Returns the theme to be used on the panel. */


  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
  }
  /** Whether the select has a value. */


  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }

  _initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }

      this._setSelectionByValue(this._value);

      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */


  _setSelectionByValue(value) {
    this._selectionModel.selected.forEach(option => option.setInactiveStyles());

    this._selectionModel.clear();

    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }

      value.forEach(currentValue => this._selectOptionByValue(currentValue));

      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what option the user interacted with last.


      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        // Otherwise reset the highlighted option. Note that we only want to do this while
        // closed, because doing it while open can shift the user's focus unnecessarily.
        this._keyManager.updateActiveItem(-1);
      }
    }

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */


  _selectOptionByValue(value) {
    const correspondingOption = this.options.find(option => {
      // Skip options that are already in the model. This allows us to handle cases
      // where the same primitive value is selected multiple times.
      if (this._selectionModel.isSelected(option)) {
        return false;
      }

      try {
        // Treat null as a special reset value.
        return option.value != null && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // Notify developers of errors in their comparator.
          console.warn(error);
        }

        return false;
      }
    });

    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }

    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */


  _assignValue(newValue) {
    // Always re-assign an array, because it might have been mutated.
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }

      this._value = newValue;
      return true;
    }

    return false;
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */


  _initKeyManager() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.ActiveDescendantKeyManager(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

    this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        // Select the active item when tabbing away. This is consistent with how the native
        // select behaves. Note that we only want to do this in single selection mode.
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        } // Restore focus to the trigger before closing. Ensures that the focus
        // position won't be lost if the user got focus into the overlay.


        this.focus();
        this.close();
      }
    });

    this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */


  _resetOptions() {
    const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(event => {
      this._onSelect(event.source, event.isUserInput);

      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    }); // Listen to changes in the internal state of the options and react accordingly.
    // Handles cases like the labels of the selected options changing.

    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.options.map(option => option._stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */


  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);

    if (option.value == null && !this._multiple) {
      option.deselect();

      this._selectionModel.clear();

      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }

      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }

      if (this.multiple) {
        this._sortValues();

        if (isUserInput) {
          // In case the user selected the option with their mouse, we
          // want to restore focus back to the trigger, in order to
          // prevent the select keyboard controls from clashing with
          // the ones from `mat-option`.
          this.focus();
        }
      }
    }

    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }

    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */


  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();

      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });

      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */


  _propagateChanges(fallbackValue) {
    let valueToEmit = null;

    if (this.multiple) {
      valueToEmit = this.selected.map(option => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }

    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);

    this._onChange(valueToEmit);

    this.selectionChange.emit(this._getChangeEvent(valueToEmit));

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first item instead.
   */


  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        this._keyManager.setFirstItemActive();
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */


  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0;
  }
  /** Focuses the select element. */


  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */


  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }

    const labelId = this._parentFormField?.getLabelId();
    const labelExpression = labelId ? labelId + ' ' : '';
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */


  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }

    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */


  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }

    const labelId = this._parentFormField?.getLabelId();
    let value = (labelId ? labelId + ' ' : '') + this._valueId;

    if (this.ariaLabelledby) {
      value += ' ' + this.ariaLabelledby;
    }

    return value;
  }
  /** Called when the overlay panel is done animating. */


  _panelDoneAnimating(isOpen) {
    this.openedChange.emit(isOpen);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get shouldLabelFloat() {
    return this._panelOpen || !this.empty || this._focused && !!this._placeholder;
  }

}

_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) {
  return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
};

_MatSelectBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatSelectBase,
  viewQuery: function _MatSelectBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
    }
  },
  inputs: {
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
    panelClass: "panelClass",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    disableOptionCentering: "disableOptionCentering",
    compareWith: "compareWith",
    value: "value",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    errorStateMatcher: "errorStateMatcher",
    typeaheadDebounceInterval: "typeaheadDebounceInterval",
    sortComparator: "sortComparator",
    id: "id"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    _closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSelectBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.LiveAnnouncer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SELECT_CONFIG]
      }]
    }];
  }, {
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel']
    }],
    _overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class MatSelect extends _MatSelectBase {
  constructor() {
    super(...arguments);
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    this._scrollTop = 0;
    /** The cached font-size of the trigger element. */

    this._triggerFontSize = 0;
    /** The value of the select panel's transform-origin property. */

    this._transformOrigin = 'top';
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    this._offsetY = 0;
    this._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
  }
  /**
   * Calculates the scroll position of the select's overlay panel.
   *
   * Attempts to center the selected option in the panel. If the option is
   * too high or too low in the panel to be scrolled to the center, it clamps the
   * scroll position to the min or max scroll positions respectively.
   */


  _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();

    const optionOffsetFromScrollTop = itemHeight * selectedIndex;
    const halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
    // scroll container, then subtracts the scroll buffer to scroll the option down to
    // the center of the overlay panel. Half the option height must be re-added to the
    // scrollTop so the option is centered based on its middle, not its top edge.

    const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
    return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
  }

  ngOnInit() {
    super.ngOnInit();

    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();

        this._changeDetectorRef.markForCheck();
      }
    });
  }

  open() {
    if (super._canOpen()) {
      super.open();
      this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
      // `parseInt` ignores the trailing 'px' and converts this to a number.

      this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');

      this._calculateOverlayPosition(); // Set the font size on the panel element once it exists.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
        if (this._triggerFontSize && this._overlayDir.overlayRef && this._overlayDir.overlayRef.overlayElement) {
          this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
        }
      });
    }
  }
  /** Scrolls the active option into view. */


  _scrollOptionIntoView(index) {
    const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);

    const itemHeight = this._getItemHeight();

    if (index === 0 && labelCount === 1) {
      // If we've got one group label before the option and we're at the top option,
      // scroll the list to the top. This is better UX than scrolling the list to the
      // top of the option, because it allows the user to read the top group's label.
      this.panel.nativeElement.scrollTop = 0;
    } else {
      this.panel.nativeElement.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._getOptionScrollPosition)((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
  }

  _positioningSettled() {
    this._calculateOverlayOffsetX();

    this.panel.nativeElement.scrollTop = this._scrollTop;
  }

  _panelDoneAnimating(isOpen) {
    if (this.panelOpen) {
      this._scrollTop = 0;
    } else {
      this._overlayDir.offsetX = 0;

      this._changeDetectorRef.markForCheck();
    }

    super._panelDoneAnimating(isOpen);
  }

  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /**
   * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
   * This must be adjusted to align the selected option text over the trigger text when
   * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
   * can't be calculated until the panel has been attached, because we need to know the
   * content width in order to constrain the panel within the viewport.
   */


  _calculateOverlayOffsetX() {
    const overlayRect = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect();

    const viewportSize = this._viewportRuler.getViewportSize();

    const isRtl = this._isRtl();

    const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
    let offsetX; // Adjust the offset, depending on the option padding.

    if (this.multiple) {
      offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
    } else if (this.disableOptionCentering) {
      offsetX = SELECT_PANEL_PADDING_X;
    } else {
      let selected = this._selectionModel.selected[0] || this.options.first;
      offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
    } // Invert the offset in LTR.


    if (!isRtl) {
      offsetX *= -1;
    } // Determine how much the select overflows on each side.


    const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
    const rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

    if (leftOverflow > 0) {
      offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    } else if (rightOverflow > 0) {
      offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    } // Set the offset directly in order to avoid having to go through change detection and
    // potentially triggering "changed after it was checked" errors. Round the value to avoid
    // blurry content in some browsers.


    this._overlayDir.offsetX = Math.round(offsetX);

    this._overlayDir.overlayRef.updatePosition();
  }
  /**
   * Calculates the y-offset of the select's overlay panel in relation to the
   * top start corner of the trigger. It has to be adjusted in order for the
   * selected option to be aligned over the trigger when the panel opens.
   */


  _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();

    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
    let optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

    if (this.disableOptionCentering) {
      return 0;
    }

    if (this._scrollTop === 0) {
      optionOffsetFromPanelTop = selectedIndex * itemHeight;
    } else if (this._scrollTop === maxScroll) {
      const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
      const selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
      // portion of it is shown in the viewport and account for it in our offset.

      let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
      // there is always extra padding at the top or bottom of the panel. When
      // scrolled to the very bottom, this padding is at the top of the panel and
      // must be added to the offset.

      optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
    } else {
      // If the option was scrolled to the middle of the panel using a scroll buffer,
      // its offset will be the scroll buffer minus the half height that was added to
      // center it.
      optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
    } // The final offset is the option's offset from the top, adjusted for the height difference,
    // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
    // The value is rounded to prevent some browsers from blurring the content.


    return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
  }
  /**
   * Checks that the attempted overlay position will fit within the viewport.
   * If it will not fit, tries to adjust the scroll position and the associated
   * y-offset so the panel can open fully on-screen. If it still won't fit,
   * sets the offset back to 0 to allow the fallback position to take over.
   */


  _checkOverlayWithinViewport(maxScroll) {
    const itemHeight = this._getItemHeight();

    const viewportSize = this._viewportRuler.getViewportSize();

    const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
    const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
    const panelHeightTop = Math.abs(this._offsetY);
    const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

    if (panelHeightBottom > bottomSpaceAvailable) {
      this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
    } else if (panelHeightTop > topSpaceAvailable) {
      this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
    } else {
      this._transformOrigin = this._getOriginBasedOnOption();
    }
  }
  /** Adjusts the overlay panel up to fit in the viewport. */


  _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel up into the viewport.

    this._scrollTop -= distanceBelowViewport;
    this._offsetY -= distanceBelowViewport;
    this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
    // by scrolling, so set the offset to 0 to allow the fallback position to take
    // effect.

    if (this._scrollTop <= 0) {
      this._scrollTop = 0;
      this._offsetY = 0;
      this._transformOrigin = `50% bottom 0px`;
    }
  }
  /** Adjusts the overlay panel down to fit in the viewport. */


  _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel down into the viewport.

    this._scrollTop += distanceAboveViewport;
    this._offsetY += distanceAboveViewport;
    this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
    // panel by scrolling, so set the offset to 0 to allow the fallback position
    // to take effect.

    if (this._scrollTop >= maxScroll) {
      this._scrollTop = maxScroll;
      this._offsetY = 0;
      this._transformOrigin = `50% top 0px`;
      return;
    }
  }
  /** Calculates the scroll position and x- and y-offsets of the overlay panel. */


  _calculateOverlayPosition() {
    const itemHeight = this._getItemHeight();

    const items = this._getItemCount();

    const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

    const maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

    let selectedOptionOffset;

    if (this.empty) {
      selectedOptionOffset = 0;
    } else {
      selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
    }

    selectedOptionOffset += (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
    // center of the overlay panel rather than the top.

    const scrollBuffer = panelHeight / 2;
    this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
    this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

    this._checkOverlayWithinViewport(maxScroll);
  }
  /** Sets the transform origin point based on the selected option. */


  _getOriginBasedOnOption() {
    const itemHeight = this._getItemHeight();

    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
    return `50% ${originY}px 0px`;
  }
  /** Calculates the height of the select's options. */


  _getItemHeight() {
    return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
  }
  /** Calculates the amount of items in the select. This includes options and group labels. */


  _getItemCount() {
    return this.options.length + this.optionGroups.length;
  }

}

MatSelect.ɵfac = /* @__PURE__ */function () {
  let ɵMatSelect_BaseFactory;
  return function MatSelect_Factory(t) {
    return (ɵMatSelect_BaseFactory || (ɵMatSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSelect)))(t || MatSelect);
  };
}();

MatSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSelect,
  selectors: [["mat-select"]],
  contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
  hostVars: 19,
  hostBindings: function MatSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatSelect_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSelect_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl,
    useExisting: MatSelect
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 12,
  consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
  template: function MatSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
        return ctx.close();
      })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
        return ctx._onAttached();
      })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._valueId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkOverlayOrigin],
  styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}"],
  encapsulation: 2,
  data: {
    animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}"]
    }]
  }], null, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSelectModule {}

MatSelectModule.ɵfac = function MatSelectModule_Factory(t) {
  return new (t || MatSelectModule)();
};

MatSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSelectModule
});
MatSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatSelect, MatSelectTrigger],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_transition_transition_module_ts.js.map