"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_desc_desc_module_ts"],{

/***/ 63423:
/*!********************************************************!*\
  !*** ./src/app/pages/comp/desc/desc-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescRoutingModule": () => (/* binding */ DescRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_desc_desc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/desc/desc.component */ 60094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_desc_desc_component__WEBPACK_IMPORTED_MODULE_0__.DescComponent, data: { title: '详情组件', key: 'desc' } }];
class DescRoutingModule {
}
DescRoutingModule.ɵfac = function DescRoutingModule_Factory(t) { return new (t || DescRoutingModule)(); };
DescRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DescRoutingModule });
DescRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DescRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 60094:
/*!***************************************************!*\
  !*** ./src/app/pages/comp/desc/desc.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescComponent": () => (/* binding */ DescComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 33610);








function DescComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u57FA\u7840\u793A\u4F8B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function DescComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u5782\u76F4\u793A\u4F8B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return [32, 16]; };
const _c1 = function () { return { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }; };
const _c2 = function () { return { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }; };
class DescComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '详情组件示例',
            breadcrumb: ['首页', '组件', '详情组件'],
            desc: '一系列详情组件'
        };
        this.listOfData = [
            {
                userName: '张三',
                email: '321111.com',
                nickName: 'John Brown',
                address: 'New York No. 1 Lake Park',
                mobile: 111
            },
            {
                userName: '李四',
                email: '321111.com',
                nickName: 'John Brown',
                address: 'New York No. 1 Lake Park',
                mobile: 111
            },
            {
                userName: '王麻子',
                email: '321111.com',
                nickName: 'John Brown',
                address: 'New York No. 1 Lake Park',
                mobile: 111
            }
        ];
    }
    ngOnInit() { }
}
DescComponent.ɵfac = function DescComponent_Factory(t) { return new (t || DescComponent)(); };
DescComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DescComponent, selectors: [["app-desc"]], decls: 56, vars: 13, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24"], ["nzSize", "default", 1, "m-b-10", 3, "nzTitle"], ["nzBordered", "", 3, "nzColumn"], ["nzTitle", "\u7528\u6237\u540D"], ["nzTitle", "\u6635\u79F0"], ["nzTitle", "\u8054\u7CFB\u7535\u8BDD"], ["nzTitle", "\u90AE\u7BB1"], ["nzTitle", "\u5730\u5740"], ["nzBordered", "", "nzLayout", "vertical", 3, "nzColumn"], ["nzTitle", "userDescription", "nzSize", "default", 1, "m-b-10"], ["nzTitle", "\u65E0\u8FB9\u6846", "nzSize", "default", 1, "m-b-10"], [3, "nzColumn"], ["nzBasicTitle", ""], ["nzVerticalTitle", ""], ["nz-tooltip", "", "nzTooltipTitle", "\u5E2E\u52A9"], ["nz-icon", "", "nzType", "question-circle", "nzTheme", "outline"]], template: function DescComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nz-card", 4)(5, "nz-descriptions", 5)(6, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "test-VB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "15695909xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "190848757@qq.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u53A6\u95E8\u5E02\u601D\u660E\u533A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-card", 4)(17, "nz-descriptions", 11)(18, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "test-VB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "15695909xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "190848757@qq.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u53A6\u95E8\u5E02\u601D\u660E\u533A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-card", 12)(29, "nz-descriptions", 5)(30, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "test-VB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "15695909xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "190848757@qq.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u53A6\u95E8\u5E02\u601D\u660E\u533A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-card", 13)(41, "nz-descriptions", 14)(42, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "test-VB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "15695909xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "190848757@qq.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u53A6\u95E8\u5E02\u601D\u660E\u533A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, DescComponent_ng_template_52_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DescComponent_ng_template_54_Template, 4, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzTooltipDirective, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__.NzDescriptionsItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 63208:
/*!************************************************!*\
  !*** ./src/app/pages/comp/desc/desc.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescModule": () => (/* binding */ DescModule)
/* harmony export */ });
/* harmony import */ var _app_pages_comp_desc_desc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/desc/desc-routing.module */ 63423);
/* harmony import */ var _app_pages_comp_desc_desc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/comp/desc/desc.component */ 60094);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class DescModule {
}
DescModule.ɵfac = function DescModule_Factory(t) { return new (t || DescModule)(); };
DescModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DescModule });
DescModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _app_pages_comp_desc_desc_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DescModule, { declarations: [_app_pages_comp_desc_desc_component__WEBPACK_IMPORTED_MODULE_1__.DescComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _app_pages_comp_desc_desc_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_desc_desc_module_ts.js.map