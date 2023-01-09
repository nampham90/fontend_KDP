"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_context-menu_context-menu_module_ts"],{

/***/ 53187:
/*!************************************************************************!*\
  !*** ./src/app/pages/feat/context-menu/context-menu-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuRoutingModule": () => (/* binding */ ContextMenuRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/context-menu/context-menu.component */ 38691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_0__.ContextMenuComponent, data: { title: 'nhấp chuột phải vào menu', key: 'context-menu' } }];
class ContextMenuRoutingModule {
}
ContextMenuRoutingModule.ɵfac = function ContextMenuRoutingModule_Factory(t) { return new (t || ContextMenuRoutingModule)(); };
ContextMenuRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContextMenuRoutingModule });
ContextMenuRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContextMenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38691:
/*!*******************************************************************!*\
  !*** ./src/app/pages/feat/context-menu/context-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuComponent": () => (/* binding */ ContextMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);








class ContextMenuComponent {
    constructor(nzContextMenuService) {
        this.nzContextMenuService = nzContextMenuService;
        this.pageHeaderInfo = {
            title: '右键菜单示例',
            breadcrumb: ['首页', '功能', '右键菜单'],
            desc: '没什么，搬运的zorro官网示例'
        };
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    ngOnInit() { }
}
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__.NzContextMenuService)); };
ContextMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContextMenuComponent, selectors: [["app-context-menu"]], decls: 26, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "Simple"], ["nzType", "primary", "nz-button", "", 3, "contextmenu"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-item", "", "nzDisabled", ""], ["nz-submenu", "", "nzTitle", "sub menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "disabled sub menu"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function ContextMenuComponent_Template_button_contextmenu_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.contextMenu($event, _r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Right Click on here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-dropdown-menu", null, 4)(7, "ul", 5)(8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "1st menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "2nd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "disabled menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8)(15, "ul")(16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 9)(21, "ul")(22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "3rd menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "4th menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzSubMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__.NzDropdownMenuComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZXh0LW1lbnUuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 97419:
/*!****************************************************************!*\
  !*** ./src/app/pages/feat/context-menu/context-menu.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuModule": () => (/* binding */ ContextMenuModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-menu-routing.module */ 53187);
/* harmony import */ var _context_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu.component */ 38691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class ContextMenuModule {
}
ContextMenuModule.ɵfac = function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); };
ContextMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContextMenuModule });
ContextMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContextMenuRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContextMenuModule, { declarations: [_context_menu_component__WEBPACK_IMPORTED_MODULE_2__.ContextMenuComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContextMenuRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_context-menu_context-menu_module_ts.js.map