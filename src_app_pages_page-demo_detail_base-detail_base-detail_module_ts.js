"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_detail_base-detail_base-detail_module_ts"],{

/***/ 21984:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/base-detail/base-detail-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDetailRoutingModule": () => (/* binding */ BaseDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _base_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-detail.component */ 63096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _base_detail_component__WEBPACK_IMPORTED_MODULE_0__.BaseDetailComponent, data: { title: 'Trang chi tiết cơ bản', key: 'base-detail' } }];
class BaseDetailRoutingModule {
}
BaseDetailRoutingModule.ɵfac = function BaseDetailRoutingModule_Factory(t) { return new (t || BaseDetailRoutingModule)(); };
BaseDetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaseDetailRoutingModule });
BaseDetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaseDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63096:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/base-detail/base-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDetailComponent": () => (/* binding */ BaseDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/ant-table/ant-table.component */ 5529);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 33610);








const _c0 = ["returnProductTpl"];
function BaseDetailComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r2 = ctx.num;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](num_r2);
} }
class BaseDetailComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '基础详情页',
            breadcrumb: ['首页', '详情页', '基础详情页']
        };
        this.returnDataList = [
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '12421432143214321',
                unitPrice: '2.00',
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '12421432143214321',
                unitPrice: '2.00',
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '12421432143214321',
                unitPrice: '2.00',
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '12421432143214321',
                unitPrice: '2.00',
                number: '1',
                price: '2.00'
            },
            {
                num: '1234561',
                name: '矿泉水 550ml',
                code: '12421432143214321',
                unitPrice: '2.00',
                number: '1',
                price: '2.00'
            }
        ];
    }
    initReturnTable() {
        this.returnTableConfig = {
            showCheckbox: false,
            headers: [
                {
                    title: '商品编号',
                    field: 'num',
                    width: 150,
                    tdTemplate: this.returnProductTpl
                },
                {
                    title: '商品名称',
                    width: 160,
                    field: 'name'
                },
                {
                    title: '商品条码',
                    width: 150,
                    field: 'code'
                },
                {
                    title: '单价',
                    width: 150,
                    field: 'unitPrice'
                },
                {
                    title: '数量（件）',
                    width: 150,
                    field: 'number'
                },
                {
                    title: '金额',
                    field: 'price'
                }
            ],
            total: 0,
            loading: false,
            pageSize: 10,
            pageIndex: 1
        };
        this.returnTableConfig2 = {
            showCheckbox: false,
            headers: [
                {
                    title: '商品编号',
                    field: 'num',
                    width: 150,
                    tdTemplate: this.returnProductTpl
                },
                {
                    title: '商品名称',
                    width: 160,
                    field: 'name'
                },
                {
                    title: '商品条码',
                    width: 150,
                    field: 'code'
                },
                {
                    title: '单价',
                    width: 150,
                    field: 'unitPrice'
                },
                {
                    title: '数量（件）',
                    width: 150,
                    field: 'number'
                },
                {
                    title: '金额',
                    field: 'price'
                }
            ],
            total: 0,
            loading: false,
            pageSize: 10,
            pageIndex: 1
        };
    }
    ngOnInit() {
        this.initReturnTable();
    }
}
BaseDetailComponent.ɵfac = function BaseDetailComponent_Factory(t) { return new (t || BaseDetailComponent)(); };
BaseDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseDetailComponent, selectors: [["app-base-detail"]], viewQuery: function BaseDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.returnProductTpl = _t.first);
    } }, decls: 35, vars: 5, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "\u9000\u6B3E\u7533\u8BF7"], ["nzTitle", "\u53D6\u8D27\u5355\u53F7"], ["nzTitle", "\u72B6\u6001"], ["nzTitle", "\u9500\u552E\u5355\u53F7"], ["nzTitle", "\u5B50\u8BA2\u5355"], ["nzTitle", "\u7528\u6237\u4FE1\u606F"], ["nzTitle", "\u7528\u6237\u59D3\u540D"], ["nzTitle", "\u8054\u7CFB\u7535\u8BDD"], ["nzTitle", "\u5E38\u7528\u5FEB\u9012"], ["nzTitle", "\u53D6\u8D27\u5730\u5740"], ["nzTitle", "\u5907\u6CE8"], [1, "sp-18", "m-b-10"], [3, "tableConfig", "tableData"], [1, "m-t-0"], ["returnProductTpl", ""], [1, "operate-text"]], template: function BaseDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-descriptions", 2)(5, "nz-descriptions-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "1000000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-descriptions-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u5DF2\u53D6\u8D27");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-descriptions-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "1234123421");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "3214321432");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-descriptions", 7)(15, "nz-descriptions-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u4ED8\u5C0F\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-descriptions-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "18100000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-descriptions-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u83DC\u9E1F\u4ED3\u50A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-descriptions-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u4E07\u5858\u8DEF18\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-descriptions-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u65E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u9000\u8D27\u5546\u54C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "app-ant-table", 14)(29, "nz-divider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u9000\u8D27\u8FDB\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "app-ant-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, BaseDetailComponent_ng_template_33_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableConfig", ctx.returnTableConfig)("tableData", ctx.returnDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableConfig", ctx.returnTableConfig2)("tableData", ctx.returnDataList);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _shared_components_ant_table_ant_table_component__WEBPACK_IMPORTED_MODULE_1__.AntTableComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__.WaterMarkComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__.NzDividerComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLWRldGFpbC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 43645:
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-demo/detail/base-detail/base-detail.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDetailModule": () => (/* binding */ BaseDetailModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _base_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-detail-routing.module */ 21984);
/* harmony import */ var _base_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-detail.component */ 63096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class BaseDetailModule {
}
BaseDetailModule.ɵfac = function BaseDetailModule_Factory(t) { return new (t || BaseDetailModule)(); };
BaseDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BaseDetailModule });
BaseDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _base_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.BaseDetailRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BaseDetailModule, { declarations: [_base_detail_component__WEBPACK_IMPORTED_MODULE_2__.BaseDetailComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _base_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.BaseDetailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_detail_base-detail_base-detail_module_ts.js.map