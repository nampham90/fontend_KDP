"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_ex-modal_ex-modal_module_ts"],{

/***/ 35183:
/*!****************************************************************!*\
  !*** ./src/app/pages/feat/ex-modal/ex-modal-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExModalRoutingModule": () => (/* binding */ ExModalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_ex_modal_ex_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/ex-modal/ex-modal.component */ 27837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_ex_modal_ex_modal_component__WEBPACK_IMPORTED_MODULE_0__.ExModalComponent, data: { title: 'phương thức kéo', key: 'ex-modal' } }];
class ExModalRoutingModule {
}
ExModalRoutingModule.ɵfac = function ExModalRoutingModule_Factory(t) { return new (t || ExModalRoutingModule)(); };
ExModalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExModalRoutingModule });
ExModalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExModalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27837:
/*!***********************************************************!*\
  !*** ./src/app/pages/feat/ex-modal/ex-modal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExModalComponent": () => (/* binding */ ExModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _widget_biz_widget_drag_drag_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @widget/biz-widget/drag/drag.service */ 30643);
/* harmony import */ var _widget_modal_nz_modal_wrap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @widget/modal/nz-modal-wrap.service */ 3917);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _widget_modal_modal_drag_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widget/modal/modal-drag.directive */ 5957);











const _c0 = ["dragTpl"];
function ExModalComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u5E8A\u524D\u660E\u6708\u5149");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u7591\u4F3C\u5730\u4E0A\u971C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u4E3E\u5934\u671B\u660E\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u4F4E\u5934\u601D\u6545\u4E61");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ExModalComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u5E8A\u524D\u660E\u6708\u5149");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u7591\u4F3C\u5730\u4E0A\u971C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u4E3E\u5934\u671B\u660E\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u4F4E\u5934\u601D\u6545\u4E61");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ExModalComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u8FD9\u662F\u4E00\u4E2A\u53EF\u62D6\u52A8modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ExModalComponent {
    constructor(dragService, modalDragService) {
        this.dragService = dragService;
        this.modalDragService = modalDragService;
        this.pageHeaderInfo = {
            title: 'Kéo Modal, cây cối chuyển sang chết, con người chuyển đến sống',
            breadcrumb: ['Home', 'Modal']
        };
        this.isVisible = false;
        this.isVisibleByDir = false;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
        this.isVisibleByDir = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.isVisibleByDir = false;
    }
    showDailog1() {
        this.isVisible = true;
    }
    showDailogConfirm() {
        this.modalDragService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Gợi ý gì',
            nzOnOk: () => {
                console.log('Chắc chắn rồi');
            },
            nzOnCancel: () => {
                console.log('Hủy bỏ');
            }
        });
    }
    showDailogInfo() {
        this.modalDragService.info({ nzTitle: 'Info', nzContent: 'Gợi ý gì' });
    }
    showDailogSuccess() {
        this.modalDragService.success({ nzTitle: 'Success', nzContent: 'Gợi ý gì' });
    }
    showDailogError() {
        this.modalDragService.error({ nzTitle: 'Error', nzContent: 'Gợi ý gì' });
    }
    showDailogWarning() {
        this.modalDragService.warning({ nzTitle: 'Warning', nzContent: 'Gợi ý gì' });
    }
    showDailog() {
        // 两种方式
        // this.dragService.show({nzTitle: this.dragTpl, nzMask: false,nzMaskStyle:{display:'none'},nzWrapClassName:"pointer-events-none"}).subscribe(res=>console.log(res))
        this.dragService
            .show({
            nzTitle: 'title',
            nzMask: false,
            nzMaskStyle: { display: 'none' },
            nzWrapClassName: 'pointer-events-none'
        })
            .subscribe(({ modalValue, status }) => {
            if (status === 0 /* ModalBtnStatus.Cancel */) {
                return;
            }
            console.log(modalValue);
        });
    }
    ngOnInit() { }
}
ExModalComponent.ɵfac = function ExModalComponent_Factory(t) { return new (t || ExModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_widget_biz_widget_drag_drag_service__WEBPACK_IMPORTED_MODULE_0__.DragService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_widget_modal_nz_modal_wrap_service__WEBPACK_IMPORTED_MODULE_1__.NzModalWrapService)); };
ExModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExModalComponent, selectors: [["app-ex-modal"]], viewQuery: function ExModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dragTpl = _t.first);
    } }, decls: 24, vars: 5, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-button", "", 1, "m-r-8", "m-b-8", 3, "click"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzxModalDrag", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["dragTpl", ""], ["cdkDragHandle", "", "cdkDrag", "", "cdkDragBoundary", "nz-modal-container", "cdkDragRootElement", ".ant-modal-content", 1, "hand-model-move"]], template: function ExModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_2_listener() { return ctx.showDailog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u670D\u52A1\u7684\u65B9\u5F0F\u521B\u5EFA\u81EA\u5B9A\u4E49modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_4_listener() { return ctx.showDailog1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "modal\u6807\u7B7E\u901A\u8FC7\u4F20nzTitle\u6765\u8FDB\u884C\u62D6\u62FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_6_listener() { return ctx.showDailogConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u521B\u5EFA\u53EF\u62D6\u52A8\u7684confirm\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_8_listener() { return ctx.showDailogInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u521B\u5EFA\u53EF\u62D6\u52A8\u7684info\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_10_listener() { return ctx.showDailogSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u521B\u5EFA\u53EF\u62D6\u52A8\u7684success\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_12_listener() { return ctx.showDailogError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u521B\u5EFA\u53EF\u62D6\u52A8\u7684error\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_14_listener() { return ctx.showDailogWarning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u521B\u5EFA\u53EF\u62D6\u52A8\u7684warning\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExModalComponent_Template_button_click_16_listener() { return ctx.isVisibleByDir = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u6307\u4EE4\u521B\u5EFA\uFF08by\u5C71\u95F4\u4E4B\u660E\u6708\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-modal", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function ExModalComponent_Template_nz_modal_nzVisibleChange_18_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ExModalComponent_Template_nz_modal_nzOnCancel_18_listener() { return ctx.handleCancel(); })("nzOnOk", function ExModalComponent_Template_nz_modal_nzOnOk_18_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ExModalComponent_ng_container_19_Template, 9, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function ExModalComponent_Template_nz_modal_nzVisibleChange_20_listener($event) { return ctx.isVisibleByDir = $event; })("nzOnCancel", function ExModalComponent_Template_nz_modal_nzOnCancel_20_listener() { return ctx.handleCancel(); })("nzOnOk", function ExModalComponent_Template_nz_modal_nzOnOk_20_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ExModalComponent_ng_container_21_Template, 9, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ExModalComponent_ng_template_22_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx.isVisibleByDir)("nzTitle", "\u6307\u4EE4\u521B\u5EFA\u53EF\u62D6\u62FD");
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalContentDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDragHandle, _widget_modal_modal_drag_directive__WEBPACK_IMPORTED_MODULE_3__.ModalDragDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleC1tb2RhbC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 63202:
/*!********************************************************!*\
  !*** ./src/app/pages/feat/ex-modal/ex-modal.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExModalModule": () => (/* binding */ ExModalModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _widget_biz_widget_drag_drag_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @widget/biz-widget/drag/drag.module */ 35793);
/* harmony import */ var _widget_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @widget/modal/modal.module */ 95631);
/* harmony import */ var _ex_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ex-modal-routing.module */ 35183);
/* harmony import */ var _ex_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ex-modal.component */ 27837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class ExModalModule {
}
ExModalModule.ɵfac = function ExModalModule_Factory(t) { return new (t || ExModalModule)(); };
ExModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExModalModule });
ExModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule, _widget_biz_widget_drag_drag_module__WEBPACK_IMPORTED_MODULE_1__.DragModule, _widget_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.NzxModalModule, _ex_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__.ExModalRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExModalModule, { declarations: [_ex_modal_component__WEBPACK_IMPORTED_MODULE_4__.ExModalComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule, _widget_biz_widget_drag_drag_module__WEBPACK_IMPORTED_MODULE_1__.DragModule, _widget_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.NzxModalModule, _ex_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__.ExModalRoutingModule] }); })();


/***/ }),

/***/ 97765:
/*!**********************************************************!*\
  !*** ./src/app/widget/biz-widget/drag/drag.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragComponent": () => (/* binding */ DragComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _widget_base_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @widget/base-modal */ 69174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);




class DragComponent extends _widget_base_modal__WEBPACK_IMPORTED_MODULE_0__.BasicConfirmModalComponent {
    constructor(modalRef) {
        super(modalRef);
        this.modalRef = modalRef;
        this.params = {};
    }
    getCurrentValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
    }
    ngOnInit() { }
}
DragComponent.ɵfac = function DragComponent_Factory(t) { return new (t || DragComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalRef)); };
DragComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DragComponent, selectors: [["app-drag"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 0, template: function DragComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u4E00\u5207\u90FD\u5C06\u4E00\u53BB\u6773\u7136\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u65E0\u6CD5\u5C06\u5176\u6355\u83B7\u3002\u6211\u4EEC\u4FBF\u662F\u8FD9\u6837\u6D3B\u7740\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 35793:
/*!*******************************************************!*\
  !*** ./src/app/widget/biz-widget/drag/drag.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragModule": () => (/* binding */ DragModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widget_base_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @widget/base-modal */ 69174);
/* harmony import */ var _drag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.component */ 97765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class DragModule {
}
DragModule.ɵfac = function DragModule_Factory(t) { return new (t || DragModule)(); };
DragModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DragModule });
DragModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_widget_base_modal__WEBPACK_IMPORTED_MODULE_0__.ModalWrapService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DragModule, { declarations: [_drag_component__WEBPACK_IMPORTED_MODULE_1__.DragComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] }); })();


/***/ }),

/***/ 30643:
/*!********************************************************!*\
  !*** ./src/app/widget/biz-widget/drag/drag.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragService": () => (/* binding */ DragService)
/* harmony export */ });
/* harmony import */ var _drag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.component */ 97765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @widget/base-modal */ 69174);



class DragService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _drag_component__WEBPACK_IMPORTED_MODULE_0__.DragComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
DragService.ɵfac = function DragService_Factory(t) { return new (t || DragService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
DragService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DragService, factory: DragService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5957:
/*!******************************************************!*\
  !*** ./src/app/widget/modal/modal-drag.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDragDirective": () => (/* binding */ ModalDragDirective)
/* harmony export */ });
/* harmony import */ var _modal_drag_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-drag.service */ 58741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);




/**
 * 可拖动的对话框
 *
 * @example
 * ``` html
 * <nz-modal nzxModalDrag ></nz-modal>
 ```
 */
class ModalDragDirective {
    constructor(modal, modalDragService) {
        this.modal = modal;
        this.modalDragService = modalDragService;
        const wrapCls = this.modalDragService.getRandomCls();
        modal.afterOpen.subscribe(() => {
            const modelElement = modal.getElement();
            if (!modelElement || modelElement.className.indexOf(_modal_drag_service__WEBPACK_IMPORTED_MODULE_0__.ModalDragService.DRAG_CLS_PREFIX) !== -1) {
                return;
            }
            modelElement.classList.add(wrapCls);
            const drag = this.modalDragService.createDragHandler(wrapCls, modal.nzModalType);
            modal.afterClose.subscribe(() => {
                if (drag && !drag.dropped) {
                    drag.dispose();
                }
            });
        });
    }
}
ModalDragDirective.ɵfac = function ModalDragDirective_Factory(t) { return new (t || ModalDragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_drag_service__WEBPACK_IMPORTED_MODULE_0__.ModalDragService)); };
ModalDragDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ModalDragDirective, selectors: [["nz-modal", "nzxModalDrag", ""]] });


/***/ }),

/***/ 58741:
/*!****************************************************!*\
  !*** ./src/app/widget/modal/modal-drag.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDragService": () => (/* binding */ ModalDragService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);



/**
 * 对话框拖动服务
 */
class ModalDragService {
    constructor(modal, dragDrop) {
        this.modal = modal;
        this.dragDrop = dragDrop;
    }
    /**
     * 创建拖拽手柄
     *
     * @param wrapCls 类名
     * @param nzModalType 对话框类型
     */
    createDragHandler(wrapCls, nzModalType) {
        const wrapElement = document.querySelector(`.${wrapCls}`);
        const rootElement = wrapElement.querySelector(`.ant-modal-content`);
        const handle = nzModalType === 'confirm' ? rootElement.querySelector('.ant-modal-body') : rootElement.querySelector('.ant-modal-header');
        this.fixedWrapElementStyle(wrapElement);
        this.setMaxZIndex(rootElement, wrapElement);
        return this.dragDrop.createDrag(handle).withHandles([handle]).withRootElement(rootElement);
    }
    /**
     * 获取随机类名
     */
    getRandomCls() {
        return ModalDragService.DRAG_CLS_PREFIX + Date.now() + Math.random().toString().replace('0.', '');
    }
    /**
     * 解决wrap的样式, 设置鼠标可以穿透
     *
     * @param wrapElement
     * @protected
     */
    fixedWrapElementStyle(wrapElement) {
        wrapElement.style.pointerEvents = 'none';
    }
    /**
     * 当前对话框点击时,设置当前对话框z-index为最大
     *
     * @param rootElement 当前对话框
     * @param wrapElement 待修改z-index 容器
     * @protected
     */
    setMaxZIndex(rootElement, wrapElement) {
        rootElement.addEventListener('mousedown', () => {
            const maxZIndex = this.getModalMaxZIndex(wrapElement);
            if (maxZIndex) {
                wrapElement.style.zIndex = `${maxZIndex + 1}`;
            }
        }, false);
    }
    /**
     * 获取所有对话框最大值,并确定是否需要修改
     *
     * @param wrapElement 待修改z-index 容器
     */
    getModalMaxZIndex(wrapElement) {
        const wrapZIndex = this.getZIndex(wrapElement);
        const maxZIndex = this.modal.openModals.reduce((prev, modal) => {
            // @ts-ignore
            const element = (modal.containerInstance.host || modal.containerInstance.elementRef).nativeElement;
            if (wrapElement === element) {
                return prev;
            }
            const zIndex = this.getZIndex(element);
            return zIndex > prev ? zIndex : prev;
        }, 0);
        return maxZIndex >= wrapZIndex ? maxZIndex : null;
    }
    getZIndex(element) {
        return +getComputedStyle(element, null).zIndex;
    }
}
ModalDragService.DRAG_CLS_PREFIX = 'NZ-MODAL-WRAP-CLS-';
ModalDragService.ɵfac = function ModalDragService_Factory(t) { return new (t || ModalDragService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDrop)); };
ModalDragService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalDragService, factory: ModalDragService.ɵfac });


/***/ }),

/***/ 95631:
/*!**********************************************!*\
  !*** ./src/app/widget/modal/modal.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzxModalModule": () => (/* binding */ NzxModalModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _modal_drag_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-drag.directive */ 5957);
/* harmony import */ var _modal_drag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-drag.service */ 58741);
/* harmony import */ var _nz_modal_wrap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nz-modal-wrap.service */ 3917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class NzxModalModule {
}
NzxModalModule.ɵfac = function NzxModalModule_Factory(t) { return new (t || NzxModalModule)(); };
NzxModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzxModalModule });
NzxModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_nz_modal_wrap_service__WEBPACK_IMPORTED_MODULE_2__.NzModalWrapService, _modal_drag_service__WEBPACK_IMPORTED_MODULE_1__.ModalDragService], imports: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzxModalModule, { declarations: [_modal_drag_directive__WEBPACK_IMPORTED_MODULE_0__.ModalDragDirective], imports: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalModule], exports: [_modal_drag_directive__WEBPACK_IMPORTED_MODULE_0__.ModalDragDirective] }); })();


/***/ }),

/***/ 3917:
/*!*******************************************************!*\
  !*** ./src/app/widget/modal/nz-modal-wrap.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzModalWrapService": () => (/* binding */ NzModalWrapService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _modal_drag_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-drag.service */ 58741);



class NzModalWrapService {
    constructor(modal, modalDragService) {
        this.modal = modal;
        this.modalDragService = modalDragService;
    }
    /**
     * 创建对话框, 增加可拖拽功能
     *
     * @param config ModalOptions
     */
    create(config) {
        return this.createModalWidthDrag(config, c => this.modal.create(c));
    }
    get openModals() {
        return this.modal.openModals;
    }
    get afterAllClosed() {
        return this.modal._afterAllClosed;
    }
    closeAll() {
        this.modal.closeAll();
    }
    confirm(options, confirmType) {
        return this.createModalWidthDrag(options, c => this.modal.confirm(c));
    }
    info(options) {
        return this.createModalWidthDrag(options, c => this.modal.info(c));
    }
    success(options) {
        return this.createModalWidthDrag(options, c => this.modal.success(c));
    }
    error(options) {
        return this.createModalWidthDrag(options, c => this.modal.error(c));
    }
    warning(options) {
        return this.createModalWidthDrag(options, c => this.modal.warning(c));
    }
    createModalWidthDrag(config, create) {
        const wrapCls = this.modalDragService.getRandomCls();
        const newConfig = this.createModalConfig(config, wrapCls);
        const modalRef = create(newConfig);
        modalRef.afterOpen.subscribe(() => {
            const drag = this.modalDragService.createDragHandler(wrapCls, newConfig.nzModalType);
            modalRef.afterClose.subscribe(() => {
                if (drag && !drag.dropped) {
                    drag.dispose();
                }
            });
        });
        return modalRef;
    }
    createModalConfig(config, wrapCls) {
        const defaultConfig = {
            nzMaskClosable: false,
            nzTitle: 'Dấu'
        };
        const maskStyle = config.nzMask === false ? { nzMaskStyle: { display: 'none' } } : {};
        const newConfig = Object.assign(defaultConfig, config, maskStyle);
        newConfig.nzWrapClassName = `${newConfig.nzWrapClassName || ''} ${wrapCls}`;
        return newConfig;
    }
}
NzModalWrapService.ɵfac = function NzModalWrapService_Factory(t) { return new (t || NzModalWrapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modal_drag_service__WEBPACK_IMPORTED_MODULE_0__.ModalDragService)); };
NzModalWrapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NzModalWrapService, factory: NzModalWrapService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_ex-modal_ex-modal_module_ts.js.map