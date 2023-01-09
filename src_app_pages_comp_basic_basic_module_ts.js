"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_basic_basic_module_ts"],{

/***/ 49847:
/*!**********************************************************!*\
  !*** ./src/app/pages/comp/basic/basic-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicRoutingModule": () => (/* binding */ BasicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/basic/basic.component */ 63900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_basic_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent, data: { title: '基础组件', key: 'basic' } }];
class BasicRoutingModule {
}
BasicRoutingModule.ɵfac = function BasicRoutingModule_Factory(t) { return new (t || BasicRoutingModule)(); };
BasicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BasicRoutingModule });
BasicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63900:
/*!*****************************************************!*\
  !*** ./src/app/pages/comp/basic/basic.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicComponent": () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);








const _c0 = function () { return [32, 16]; };
class BasicComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '基础组件',
            breadcrumb: ['首页', '组件', '基础组件'],
            desc: '一系列基础组件'
        };
        this.cardPadding = { padding: '20px 24px 8px' };
    }
    ngOnInit() {
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(); };
BasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], decls: 118, vars: 15, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzTitle", "BasicButton Color", "nzSize", "default", 1, "m-b-10"], [1, "title"], ["nz-button", "", 1, "success"], ["nz-button", "", "nzType", "default", "disabled", ""], ["nz-button", "", "nzType", "default", "nzLoading", "", 1, "success"], ["nz-button", "", "nzType", "link", 2, "color", "#55d187"], ["nz-button", "", "nzType", "link", "nzLoading", "", 2, "color", "#55d187"], ["nz-button", "", "nzType", "link", "disabled", ""], ["nz-button", "", 1, "warning"], ["nz-button", "", "nzType", "default", "nzLoading", "", 1, "warning"], ["nz-button", "", "nzType", "link", 2, "color", "#efbd47"], ["nz-button", "", "nzType", "link", "nzLoading", "", 2, "color", "#efbd47"], ["nz-button", "", "nzType", "primary", "nzDanger", ""], ["nz-button", "", "nzType", "primary", "nzLoading", "", "nzDanger", ""], ["nz-button", "", "nzType", "link", 2, "color", "#ed6f6f"], ["nz-button", "", "nzType", "link", "nzLoading", "", 2, "color", "#ed6f6f"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8", 2, "color", "#55d187", "border-color", "#55d187"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8", 2, "color", "#efbd47", "border-color", "#efbd47"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8", 2, "color", "#ed6f6f", "border-color", "#ed6f6f"], ["nz-button", "", "nzType", "dashed", "disabled", "", "nzGhost", "", 1, "m-b-8", 2, "color", "#efbd47", "border-color", "#efbd47"], ["nzTitle", "BasicButton Types", "nzSize", "default", 1, "m-b-10"], ["nz-button", "", 1, "m-b-8", 2, "color", "#ffffff", "border-color", "#0960bd", "background-color", "#0960bd"], ["nz-icon", "", "nzType", "menu-unfold", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", "disabled", "", 1, "m-b-8"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 1, "m-b-8"], ["nz-button", "", "nzType", "primary", "nzLoading", "", 1, "m-b-8"], ["nz-button", "", "nzType", "link", 1, "m-b-8"], ["nz-button", "", "nzType", "link", "nzLoading", "", 1, "m-b-8"], ["nz-button", "", "nzType", "link", "disabled", "", 1, "m-b-8"], ["nz-button", "", 1, "m-b-8"], ["nz-button", "", "nzType", "default", 1, "m-b-8", 2, "color", "red", "border-color", "red"], ["nz-button", "", "nzLoading", "", 1, "m-b-8"], ["nz-button", "", "nzType", "dashed", 1, "m-b-8"], ["nz-button", "", "nzType", "dashed", "disabled", "", 1, "m-b-8"], ["nz-button", "", "nzType", "dashed", 1, "m-b-8", 2, "color", "red", "border-color", "red"], ["nz-button", "", "nzType", "dashed", "nzLoading", "", 1, "m-b-8"], [1, "ghost-border", "p-t-8", "p-b-8", "p-l-8"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8", 2, "color", "#0960bd", "border-color", "#0960bd"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8", 2, "color", "#fff", "border-color", "#fff"], ["nz-button", "", "nzType", "dashed", "nzGhost", "", 1, "m-b-8"], ["nz-button", "", "nzType", "default", "nzGhost", "", 1, "m-b-8"], ["nz-button", "", "nzType", "default", "nzGhost", "", "nzLoading", "", 1, "m-b-8"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nz-card", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u6210\u529F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "loading link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "disabled link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u6210\u529F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "loading link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "disabled link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u6210\u529F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "loading link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "disabled link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u5E7D\u7075\u6210\u529F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u5E7D\u7075\u8B66\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u5E7D\u7075\u9519\u8BEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u5E7D\u7075\u8B66\u544Adisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u5E7D\u7075\u5371\u9669");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3)(60, "nz-card", 24)(61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u4E3B\u6309\u94AE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u5371\u9669");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "loading link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "disabled link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " \u9ED8\u8BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u5371\u9669");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "loading link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "disabled link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "dashed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "dashed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\u5371\u9669");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "ghost \u5E38\u89C4\u5E7D\u7075\u6309\u94AE\u901A\u5E38\u7528\u4E8E\u6709\u8272\u80CC\u666F\u4E0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 40)(108, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\u5E7D\u7075\u4E3B\u8981");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "\u5E7D\u7075\u9ED8\u8BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\u5E7D\u7075disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 10)("nzXl", 8)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 14)("nzXl", 16)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzXs", 24);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardComponent], styles: ["[nz-button][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.success[_ngcontent-%COMP%] {\n  background: #55d187;\n  color: white;\n  border-color: #55d187;\n}\n.warning[_ngcontent-%COMP%] {\n  background: #efbd47;\n  color: white;\n  border-color: #efbd47;\n}\n.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  color: #000000d9;\n  font-weight: 500;\n}\n.ghost-border[_ngcontent-%COMP%] {\n  background-color: #999a9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtBQUZGIiwiZmlsZSI6ImJhc2ljLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiW256LWJ1dHRvbl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN1Y2Nlc3N7XG4gIGJhY2tncm91bmQ6ICM1NWQxODc7XG4gIGNvbG9yOndoaXRlO1xuICBib3JkZXItY29sb3I6ICM1NWQxODc7XG59XG4ud2FybmluZ3tcbiAgYmFja2dyb3VuZDojZWZiZDQ3O1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWZiZDQ3O1xufVxuXG4udGl0bGV7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBjb2xvcjogIzAwMDAwMGQ5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZ2hvc3QtYm9yZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5YTliO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 24538:
/*!**************************************************!*\
  !*** ./src/app/pages/comp/basic/basic.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicModule": () => (/* binding */ BasicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_pages_comp_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/basic/basic-routing.module */ 49847);
/* harmony import */ var _app_pages_comp_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/comp/basic/basic.component */ 63900);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class BasicModule {
}
BasicModule.ɵfac = function BasicModule_Factory(t) { return new (t || BasicModule)(); };
BasicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BasicModule });
BasicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_pages_comp_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasicRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BasicModule, { declarations: [_app_pages_comp_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__.BasicComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_pages_comp_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasicRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_basic_basic_module_ts.js.map