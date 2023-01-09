"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_list_tree-list_tree-list_module_ts"],{

/***/ 16696:
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-demo/list/tree-list/tree-list-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeListRoutingModule": () => (/* binding */ TreeListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_page_demo_list_tree_list_tree_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/page-demo/list/tree-list/tree-list.component */ 70808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_page_demo_list_tree_list_tree_list_component__WEBPACK_IMPORTED_MODULE_0__.TreeListComponent, data: { title: 'Dạng cây', key: 'tree-list' } }];
class TreeListRoutingModule {
}
TreeListRoutingModule.ɵfac = function TreeListRoutingModule_Factory(t) { return new (t || TreeListRoutingModule)(); };
TreeListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TreeListRoutingModule });
TreeListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 70808:
/*!***********************************************************************!*\
  !*** ./src/app/pages/page-demo/list/tree-list/tree-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeListComponent": () => (/* binding */ TreeListComponent)
/* harmony export */ });
/* harmony import */ var _utils_treeTableTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/treeTableTools */ 28442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_tree_table_tree_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tree-table/tree-table.component */ 41069);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/card-table-wrap/card-table-wrap.component */ 94178);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);





















const _c0 = ["highLightTpl"];
const _c1 = ["operationTpl"];
function TreeListComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5)(2, "nz-form-item")(3, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u670D\u52A1\u8C03\u7528\u6B21\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control")(6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeListComponent_ng_container_18_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.searchParam.desc = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "nz-form-item")(9, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u72B6\u6001");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nz-form-control")(12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeListComponent_ng_container_18_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.searchParam.desc = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5)(14, "nz-form-item")(15, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u4E0A\u6B21\u8C03\u5EA6\u65F6\u95F4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-control")(18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeListComponent_ng_container_18_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.searchParam.desc = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.searchParam.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.searchParam.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.searchParam.desc);
} }
function TreeListComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u5C55\u5F00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TreeListComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u6536\u8D77");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TreeListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_ng_template_32_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const id_r13 = restoredCtx.id; const children_r14 = restoredCtx.children; const parent_r15 = restoredCtx.parent; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.check(id_r13, children_r14, parent_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u67E5\u770B");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_ng_template_32_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const id_r13 = restoredCtx.id; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.del(id_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_ng_template_32_Template_span_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const id_r13 = restoredCtx.id; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.edit(id_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TreeListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-badge", 23);
} if (rf & 2) {
    const sex_r20 = ctx.sex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzText", sex_r20);
} }
function TreeListComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_ng_template_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.add()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u65B0\u5EFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_ng_template_36_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.allDel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u5220\u9664 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { "padding-bottom": 0 }; };
const _c3 = function () { return { xs: 8, sm: 16, md: 24 }; };
class TreeListComponent {
    constructor(fb, modalSrv, message, router, cdr) {
        this.fb = fb;
        this.modalSrv = modalSrv;
        this.message = message;
        this.router = router;
        this.cdr = cdr;
        this.searchParam = {};
        this.isCollapse = true;
        this.pageHeaderInfo = {
            title: '树状表格（演示默认值的情况，删除或者查看，可以打印选中行的id）',
            // desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
            breadcrumb: ['首页', '列表页', '树状表格']
        };
        this.checkedCashArray = [];
        this.dataList = [];
    }
    reloadTable() {
        this.message.info('已经刷新了');
        this.getDataList();
    }
    // 触发表格变更检测
    tableChangeDectction() {
        // 改变引用触发变更检测。
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
            pageNum: e?.pageIndex || this.tableConfig.pageIndex
        };
        this.dataList = [];
        setTimeout(() => {
            this.dataList = [
                {
                    id: `1`,
                    name: 'John Brown sr.',
                    sex: '男',
                    age: 60,
                    address: 'New York No. 1 Lake Park',
                    children: [
                        {
                            id: `1-1`,
                            name: 'John Brown',
                            age: 42,
                            sex: '男',
                            address: 'New York No. 2 Lake Park'
                        },
                        {
                            id: `1-2`,
                            name: 'John Brown jr.',
                            age: 30,
                            sex: '男',
                            address: 'New York No. 3 Lake Park',
                            children: [
                                {
                                    id: `1-2-1`,
                                    name: 'Jimmy Brown',
                                    sex: '男',
                                    age: 16,
                                    address: 'New York No. 3 Lake Park'
                                }
                            ]
                        },
                        {
                            id: `1-3`,
                            name: 'Jim Green sr.',
                            age: 72,
                            sex: '男',
                            address: 'London No. 1 Lake Park',
                            children: [
                                {
                                    id: `1-3-1`,
                                    name: 'Jim Green',
                                    sex: '男',
                                    age: 42,
                                    address: 'London No. 2 Lake Park',
                                    children: [
                                        {
                                            id: `1-3-1-1`,
                                            name: 'Jim Green jr.',
                                            sex: '男',
                                            age: 25,
                                            address: 'London No. 3 Lake Park'
                                        },
                                        {
                                            id: `1-3-1-2`,
                                            name: 'Jimmy Green sr.',
                                            sex: '男',
                                            age: 18,
                                            address: 'London No. 4 Lake Park'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: `2`,
                    name: 'Joe Black',
                    sex: '男',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park'
                }
            ];
            this.tableConfig.total = 13;
            this.tableConfig.pageIndex = 1;
            const cashFromHttp = [
                {
                    id: `1`,
                    name: 'John Brown sr.',
                    sex: '男',
                    age: 60,
                    address: 'New York No. 1 Lake Park',
                    children: [
                        {
                            id: `1-2`,
                            name: 'John Brown jr.',
                            age: 30,
                            sex: '男',
                            address: 'New York No. 3 Lake Park',
                            children: [
                                {
                                    id: `1-2-1`,
                                    name: 'Jimmy Brown',
                                    sex: '男',
                                    age: 16,
                                    address: 'New York No. 3 Lake Park'
                                }
                            ]
                        },
                        {
                            id: `1-3`,
                            name: 'Jim Green sr.',
                            age: 72,
                            sex: '男',
                            address: 'London No. 1 Lake Park',
                            children: [
                                {
                                    id: `1-3-1`,
                                    name: 'Jim Green',
                                    sex: '男',
                                    age: 42,
                                    address: 'London No. 2 Lake Park',
                                    children: [
                                        {
                                            id: `1-3-1-1`,
                                            name: 'Jim Green jr.',
                                            sex: '男',
                                            age: 25,
                                            address: 'London No. 3 Lake Park'
                                        },
                                        {
                                            id: `1-3-1-2`,
                                            name: 'Jimmy Green sr.',
                                            sex: '男',
                                            age: 18,
                                            address: 'London No. 4 Lake Park'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ];
            this.checkedCashArray = (0,_utils_treeTableTools__WEBPACK_IMPORTED_MODULE_0__.fnFlattenTreeDataByDataList)(cashFromHttp);
            // this.checkedCashArray = [...this.checkedCashArray];
            this.tableLoading(false);
        });
        /*-----实际业务请求http接口如下------*/
        // this.tableConfig.loading = true;
        // const params: SearchCommonVO<any> = {
        //   pageSize: this.tableConfig.pageSize!,
        //   pageNum: e?.pageIndex || this.tableConfig.pageIndex!,
        //   filters: this.searchParam
        // };
        // this.dataService.getFireSysList(params).pipe(finalize(() => {
        //   this.tableLoading(false);
        // })).subscribe((data => {
        //   const {list, total, pageNum} = data;
        //   this.dataList = [...list];
        //   this.tableConfig.total = total!;
        //   this.tableConfig.pageIndex = pageNum!;
        //   this.tableLoading(false);
        //   this.checkedCashArray = [...this.checkedCashArray];
        // }));
    }
    /*展开*/
    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
    /*查看*/
    check(id, children, parent) {
        this.message.success(id);
        console.log(children);
        console.log(parent);
    }
    /*重置*/
    resetForm() {
        this.searchParam = {};
        this.getDataList();
    }
    add() {
        // this.modalService.show({nzTitle: '新增'}).subscribe((res) => {
        //   if (!res || res.status === ModalBtnStatus.Cancel) {
        //     return;
        //   }
        //   this.tableLoading(true);
        //   this.addEditData(res.modalValue, 'addFireSys');
        // }, error => this.tableLoading(false));
    }
    del(id) {
        this.modalSrv.confirm({
            nzTitle: '确定要删除吗？',
            nzContent: '删除后不可恢复',
            nzOnOk: () => {
                this.tableLoading(true);
                this.message.info(`id数组(支持分页保存):${JSON.stringify(id)}`);
                this.getDataList();
                this.checkedCashArray.splice(this.checkedCashArray.findIndex(item => item.id === id), 1);
                this.tableLoading(false);
                /*注释的是模拟接口调用*/
                // this.dataService.delFireSys([id]).subscribe(() => {
                //   if (this.dataList.length === 1) {
                //     this.tableConfig.pageIndex--;
                //   }
                //   this.getDataList();
                //   this.checkedCashArray.splice(this.checkedCashArray.findIndex(item => item.id === id), 1);
                // }, error => this.tableLoading(false));
            }
        });
    }
    allDel() {
        if (this.checkedCashArray.length > 0) {
            this.modalSrv.confirm({
                nzTitle: '确定要删除吗？',
                nzContent: '删除后不可恢复',
                nzOnOk: () => {
                    const tempArrays = [];
                    this.checkedCashArray.forEach(item => {
                        tempArrays.push(item.id);
                    });
                    this.tableLoading(true);
                    this.message.info(`数组(支持分页保存):${JSON.stringify(tempArrays)}`);
                    this.getDataList();
                    this.checkedCashArray = [];
                    this.tableLoading(false);
                    // 注释的是模拟接口的调用
                    // this.dataService.delFireSys(tempArrays).subscribe(() => {
                    //   if (this.dataList.length === 1) {
                    //     this.tableConfig.pageIndex--;
                    //   }
                    //   this.getDataList();
                    //   this.checkedCashArray = [];
                    // }, error => this.tableLoading(false));
                }
            });
        }
        else {
            this.message.error('请勾选数据');
            return;
        }
    }
    // 修改
    edit(id) {
        // this.dataService.getFireSysDetail(id).subscribe(res => {
        //   this.modalService.show({nzTitle: '编辑'}, res).subscribe(({modalValue, status}) => {
        //     if (status === ModalBtnStatus.Cancel) {
        //       return;
        //     }
        //     modalValue.id = id;
        //     this.tableLoading(true);
        //     this.addEditData(modalValue, 'editFireSys');
        //   }, error => this.tableLoading(false));
        // });
    }
    // addEditData(param: FireSysObj, methodName: 'editFireSys' | 'addFireSys'): void {
    //   this.dataService[methodName](param).subscribe(() => {
    //     this.getDataList();
    //   });
    // }
    changeSort(e) {
        this.message.info(`排序字段：${e.fileName},排序为:${e.sortDir}`);
    }
    // 最左侧复选框选中触发
    selectedChecked(e) {
        this.checkedCashArray = [...e];
        console.log(this.checkedCashArray);
    }
    // 修改一页几条
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }
    initTable() {
        /*
         * 注意，这里需要留一列不要设置width，让列表自适应宽度
         *
         * */
        this.tableConfig = {
            headers: [
                {
                    title: '姓名',
                    width: 230,
                    field: 'name',
                    showSort: true,
                    tdClassList: ['operate-text']
                },
                {
                    title: '性别',
                    field: 'sex',
                    width: 230,
                    tdTemplate: this.highLightTpl
                },
                {
                    title: '年龄',
                    field: 'age',
                    width: 230,
                    showSort: true
                },
                {
                    title: '住址',
                    field: 'address'
                },
                {
                    title: '操作',
                    tdTemplate: this.operationTpl,
                    width: 130,
                    fixed: true,
                    fixedDir: 'right'
                }
            ],
            total: 0,
            showCheckbox: true,
            loading: false,
            pageSize: 10,
            pageIndex: 1
        };
    }
    ngOnInit() {
        this.initTable();
    }
}
TreeListComponent.ɵfac = function TreeListComponent_Factory(t) { return new (t || TreeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
TreeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TreeListComponent, selectors: [["app-tree-list"]], viewQuery: function TreeListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.highLightTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.operationTpl = _t.first);
    } }, decls: 38, vars: 34, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], [1, "m-b-10", 3, "nzBodyStyle"], ["nz-form", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [3, "nzFor"], ["nz-input", "", "placeholder", "\u8BF7\u8F93\u5165", "name", "ruleName", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "\u8BF7\u8F93\u5165", "name", "desc", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["nz-col", "", 1, "m-b-8", "text-right", "p-0", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nz-button", "", 3, "nzType"], ["nz-icon", "", "nzType", "search"], ["nz-button", "", 1, "m-l-15", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], [1, "collapse", "operate-text", 3, "click"], ["nz-icon", "", 3, "nzType"], [3, "btnTpl", "reload"], [3, "cashArray", "tableConfig", "tableData", "selectedChange", "sortFn", "changePageSize", "changePageNum"], ["operationTpl", ""], ["highLightTpl", ""], ["tableBtns", ""], [1, "operate-text", 3, "click"], ["nzStatus", "processing", 3, "nzText"], ["nz-button", "", "nzType", "primary", 1, "m-r-8", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "delete"]], template: function TreeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "nz-form-item")(8, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u89C4\u5219\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "nz-form-control")(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeListComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchParam.ruleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5)(13, "nz-form-item")(14, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "nz-form-control")(17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeListComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchParam.desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TreeListComponent_ng_container_18_Template, 19, 21, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10)(20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " \u641C\u7D22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_Template_button_click_23_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " \u91CD\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeListComponent_Template_a_click_26_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TreeListComponent_span_27_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, TreeListComponent_span_28_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "app-card-table-wrap", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("reload", function TreeListComponent_Template_app_card_table_wrap_reload_30_listener() { return ctx.reloadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "app-tree-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function TreeListComponent_Template_app_tree_table_selectedChange_31_listener($event) { return ctx.selectedChecked($event); })("sortFn", function TreeListComponent_Template_app_tree_table_sortFn_31_listener($event) { return ctx.changeSort($event); })("changePageSize", function TreeListComponent_Template_app_tree_table_changePageSize_31_listener($event) { return ctx.changePageSize($event); })("changePageNum", function TreeListComponent_Template_app_tree_table_changePageNum_31_listener($event) { return ctx.getDataList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TreeListComponent_ng_template_32_Template, 6, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, TreeListComponent_ng_template_34_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TreeListComponent_ng_template_36_Template, 6, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](33, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchParam.ruleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchParam.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx.isCollapse ? "down" : "up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("btnTpl", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cashArray", ctx.checkedCashArray)("tableConfig", ctx.tableConfig)("tableData", ctx.dataList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_tree_table_tree_table_component__WEBPACK_IMPORTED_MODULE_1__.TreeTableComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_3__.WaterMarkComponent, _shared_components_card_table_wrap_card_table_wrap_component__WEBPACK_IMPORTED_MODULE_4__.CardTableWrapComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__.NzBadgeComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVlLWxpc3QuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 56553:
/*!********************************************************************!*\
  !*** ./src/app/pages/page-demo/list/tree-list/tree-list.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeListModule": () => (/* binding */ TreeListModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-list-routing.module */ 16696);
/* harmony import */ var _tree_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-list.component */ 70808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class TreeListModule {
}
TreeListModule.ɵfac = function TreeListModule_Factory(t) { return new (t || TreeListModule)(); };
TreeListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TreeListModule });
TreeListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeListRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TreeListModule, { declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_2__.TreeListComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeListRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_list_tree-list_tree-list_module_ts.js.map