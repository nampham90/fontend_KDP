"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_color-sel_color-sel_module_ts"],{

/***/ 73331:
/*!******************************************************************!*\
  !*** ./src/app/pages/feat/color-sel/color-sel-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSelRoutingModule": () => (/* binding */ ColorSelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_color_sel_color_sel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/color-sel/color-sel.component */ 94192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_color_sel_color_sel_component__WEBPACK_IMPORTED_MODULE_0__.ColorSelComponent, data: { title: 'công cụ chọn màu', key: 'color-sel' } }];
class ColorSelRoutingModule {
}
ColorSelRoutingModule.ɵfac = function ColorSelRoutingModule_Factory(t) { return new (t || ColorSelRoutingModule)(); };
ColorSelRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ColorSelRoutingModule });
ColorSelRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ColorSelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94192:
/*!*************************************************************!*\
  !*** ./src/app/pages/feat/color-sel/color-sel.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSelComponent": () => (/* binding */ ColorSelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-color-picker */ 60743);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);




class ColorSelComponent {
    constructor() {
        this.color = '#2889e9';
        this.pageHeaderInfo = {
            title: '我突然想到了“你却说花花世界不必当真”这句歌词',
            desc: '所有示例：https://zefoy.github.io/ngx-color-picker/',
            breadcrumb: ['首页', '功能', '颜色选择器']
        };
    }
    ngOnInit() { }
}
ColorSelComponent.ɵfac = function ColorSelComponent_Factory(t) { return new (t || ColorSelComponent)(); };
ColorSelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorSelComponent, selectors: [["app-color-sel"]], decls: 32, vars: 53, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], [3, "colorPicker", "colorPickerChange"], [3, "colorPicker", "cpColorMode", "colorPickerChange"], [3, "value", "colorPicker", "colorPickerChange"], [3, "value", "cpOutputFormat", "colorPicker", "colorPickerChange"], [3, "value", "cpPosition", "colorPicker", "colorPickerChange"], [3, "cpPosition", "cpPositionOffset", "cpPositionRelativeToArrow", "colorPicker", "colorPickerChange"], [3, "value", "cpCancelButton", "colorPicker", "colorPickerChange"], [3, "value", "cpCancelButton", "cpCancelButtonClass", "colorPicker", "colorPickerChange"], [3, "value", "cpOKButton", "cpSaveClickOutside", "cpOKButtonClass", "colorPicker", "colorPickerChange"], [3, "value", "cpEyeDropper", "cpSaveClickOutside", "cpOKButtonClass", "colorPicker", "colorPickerChange"]], template: function ColorSelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-card")(3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_3_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Grayscale color mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_6_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show the color in the input field:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_9_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Output format:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_12_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Changing dialog position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_15_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "You can introduce a offset of the color picker relative to the html element:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_span_colorPickerChange_18_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Change me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Show cancel button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_22_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Change cancel button class, in this example we are using a bootstrap button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_25_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Show OK button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_28_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Enable Eye Dropper: You can open the eye dropper by clicking the colored circle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function ColorSelComponent_Template_input_colorPickerChange_31_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx.color)("cpColorMode", "grayscale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpOutputFormat", "rgba")("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpPosition", "top-right")("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "bottom")("cpPositionOffset", "50%")("cpPositionRelativeToArrow", true)("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpCancelButton", true)("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpCancelButton", true)("cpCancelButtonClass", "btn btn-primary btn-xs")("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpOKButton", true)("cpSaveClickOutside", false)("cpOKButtonClass", "btn btn-primary btn-xs")("colorPicker", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("cpEyeDropper", true)("cpSaveClickOutside", false)("cpOKButtonClass", "btn btn-primary btn-xs")("colorPicker", ctx.color);
    } }, dependencies: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPickerDirective, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1zZWwuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 59679:
/*!**********************************************************!*\
  !*** ./src/app/pages/feat/color-sel/color-sel.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSelModule": () => (/* binding */ ColorSelModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ 60743);
/* harmony import */ var _color_sel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-sel-routing.module */ 73331);
/* harmony import */ var _color_sel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-sel.component */ 94192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class ColorSelModule {
}
ColorSelModule.ɵfac = function ColorSelModule_Factory(t) { return new (t || ColorSelModule)(); };
ColorSelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ColorSelModule });
ColorSelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPickerModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _color_sel_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColorSelRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ColorSelModule, { declarations: [_color_sel_component__WEBPACK_IMPORTED_MODULE_2__.ColorSelComponent], imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPickerModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _color_sel_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColorSelRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_color-sel_color-sel_module_ts.js.map