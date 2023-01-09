"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_tabs_tabs_module_ts"],{

/***/ 11157:
/*!************************************************************!*\
  !*** ./src/app/pages/feat/tabs/detail/detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/number-loop.pipe */ 48786);






function DetailComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u4E3A\u4E86\u6F14\u793A\u6EDA\u52A8\u6761\u7F13\u5B58", index_r2, "");
} }
class DetailComponent {
    constructor(routeParam, cdr) {
        this.routeParam = routeParam;
        this.cdr = cdr;
        this.id = 0;
    }
    ngOnInit() {
        this.routeParam.queryParams.subscribe(params => {
            this.id = params['id'];
            this.cdr.markForCheck();
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 10, vars: 4, consts: [[1, "normal-table-wrap"], [1, "sp-28", "text-error"], ["nz-input", ""], [4, "ngFor", "ngForOf"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u5E26\u8FC7\u6765\u7684\uFF0C\u4ECE\u8DEF\u7531\u4E2D\u83B7\u53D6\u7684id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u5728\u4E0B\u9762\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u503C\uFF0C\u518D\u5207\u6362tab\uFF0C\u4F53\u9A8C\u7EC4\u4EF6\u7684\u7F13\u5B58\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DetailComponent_p_8_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "numberLoop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, 60));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberLoopPipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 37403:
/*!********************************************************!*\
  !*** ./src/app/pages/feat/tabs/tabs-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsRoutingModule": () => (/* binding */ TabsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_tabs_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/tabs/detail/detail.component */ 11157);
/* harmony import */ var _app_pages_feat_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/feat/tabs/tabs.component */ 11249);
/* harmony import */ var _config_actionCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/actionCode */ 22195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', component: _app_pages_feat_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent, data: { title: 'Tác vụ tab', key: 'tabs' } },
    { path: 'example-detail', component: _app_pages_feat_tabs_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent, data: { newTab: 'true', authCode: _config_actionCode__WEBPACK_IMPORTED_MODULE_2__.ActionCode.TabsDetail, title: 'Chi tiết demo', key: 'example-detail' } }
];
class TabsRoutingModule {
}
TabsRoutingModule.ɵfac = function TabsRoutingModule_Factory(t) { return new (t || TabsRoutingModule)(); };
TabsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TabsRoutingModule });
TabsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TabsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 11249:
/*!***************************************************!*\
  !*** ./src/app/pages/feat/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/tab.service */ 99651);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ 46608);











function TabsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.changeTabTitle(_r0.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0111\u1EB7t ti\u00EAu \u0111\u1EC1 tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TabsComponent {
    constructor(router, tabService, cdr) {
        this.router = router;
        this.tabService = tabService;
        this.cdr = cdr;
        this.pageHeaderInfo = {
            title: '标签页操作示例，如果需要在当前tab页面展示详情，请在"列表页>查询表格"中点击表格查看按钮，演示效果',
            breadcrumb: ['首页', '扩展功能', '标签页面操作示例']
        };
        this.routerPath = this.router.url;
    }
    changeTabTitle(title) {
        this.tabService.changeTabTitle(title);
    }
    closeRight() {
        this.tabService.delRightTab(this.router.url, this.tabService.getCurrentTabIndex());
    }
    closeLeft() {
        this.tabService.delLeftTab(this.router.url, this.tabService.getCurrentTabIndex());
    }
    closeOther() {
        this.tabService.delOtharTab(this.router.url, this.tabService.getCurrentTabIndex());
    }
    closeCurrent() {
        const tabArray = this.tabService.getTabArray();
        this.tabService.delTab(tabArray[this.tabService.getCurrentTabIndex()], this.tabService.getCurrentTabIndex());
    }
    openDetailPage(i) {
        this.router.navigate(['default/feat/tabs/example-detail'], { queryParams: { id: i } });
    }
    refresh() {
        this.tabService.refresh();
    }
    ngOnInit() { }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_0__.TabService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 31, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "Nh\u1EADp v\u0103n b\u1EA3n v\u00E0o \u00F4 nh\u1EADp li\u1EC7u b\u00EAn d\u01B0\u1EDBi, n\u1ED9i dung s\u1EBD \u0111\u01B0\u1EE3c l\u01B0u sau khi chuy\u1EC3n v\u1EC1"], ["nzType", "warning", "nzMessage", "Thao t\u00E1c n\u00E0y kh\u00F4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn ti\u00EAu \u0111\u1EC1 trang, ch\u1EC9 s\u1EEDa \u0111\u1ED5i ti\u00EAu \u0111\u1EC1 tab", 1, "m-b-8"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "input search text"], ["tabTitleInput", ""], ["suffixButton", ""], ["nzTitle", "T\u00E1c v\u1EE5 tab", 1, "m-t-10"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 1, "m-r-8", "m-b-8", 3, "click"], ["nzTitle", "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng", 1, "m-t-10"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nz-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TabsComponent_ng_template_7_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-card", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_10_listener() { return ctx.closeRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0111\u00F3ng b\u00EAn ph\u1EA3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_12_listener() { return ctx.closeLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0111\u00F3ng b\u00EAn tr\u00E1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_14_listener() { return ctx.closeOther(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0111\u00F3ng kh\u00E1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_16_listener() { return ctx.closeCurrent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0111\u00F3ng hi\u1EC7n t\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_18_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "L\u00E0m t\u01B0\u01A1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-card", 10)(21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_21_listener() { return ctx.openDetailPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_23_listener() { return ctx.openDetailPage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_25_listener() { return ctx.openDetailPage(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_27_listener() { return ctx.openDetailPage(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_29_listener() { return ctx.openDetailPage(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "M\u1EDF chi ti\u1EBFt ho\u1EA1t \u0111\u1ED9ng5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAddOnAfter", _r1);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__.NzAlertComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 10429:
/*!************************************************!*\
  !*** ./src/app/pages/feat/tabs/tabs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ 11157);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-routing.module */ 37403);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ 11249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class TabsModule {
}
TabsModule.ɵfac = function TabsModule_Factory(t) { return new (t || TabsModule)(); };
TabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TabsModule });
TabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TabsModule, { declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_tabs_tabs_module_ts.js.map