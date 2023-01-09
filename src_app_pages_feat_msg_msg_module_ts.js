"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_msg_msg_module_ts"],{

/***/ 57223:
/*!******************************************************!*\
  !*** ./src/app/pages/feat/msg/msg-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsgRoutingModule": () => (/* binding */ MsgRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_msg_msg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/msg/msg.component */ 71231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_msg_msg_component__WEBPACK_IMPORTED_MODULE_0__.MsgComponent, data: { title: 'Thông báo', key: 'msg' } }];
class MsgRoutingModule {
}
MsgRoutingModule.ɵfac = function MsgRoutingModule_Factory(t) { return new (t || MsgRoutingModule)(); };
MsgRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MsgRoutingModule });
MsgRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MsgRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71231:
/*!*************************************************!*\
  !*** ./src/app/pages/feat/msg/msg.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsgComponent": () => (/* binding */ MsgComponent)
/* harmony export */ });
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ 76608);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);













function MsgComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Notification Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " content success ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class MsgComponent {
    constructor(cdr, destroy$, message, modal, notification) {
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.message = message;
        this.modal = modal;
        this.notification = notification;
        this.map = {
            info: 'exclamation-circle',
            warning: 'exclamation-circle',
            success: 'check',
            error: 'close',
            confirm: 'confirm'
        };
        this.pageHeaderInfo = {
            title: '消息提示',
            breadcrumb: ['首页', '功能', '消息提示'],
            desc: '这个是好心人pr的功能'
        };
    }
    msg(type) {
        this.message[type](`${type} message`);
    }
    modalShow(confirm, modal) {
        this.modal[confirm]({
            nzTitle: `This is a ${modal} message`,
            nzContent: `<p>${modal} messages</p>`,
            nzOnOk: () => console.log('Info OK'),
            nzOnCancel: () => console.log('Info cancel'),
            nzIconType: this.map[modal]
        });
    }
    createBasicNotification(template) {
        this.notification.template(template);
    }
    ngOnInit() { }
}
MsgComponent.ɵfac = function MsgComponent_Factory(t) { return new (t || MsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__.NzNotificationService)); };
MsgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MsgComponent, selectors: [["app-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])], decls: 36, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "Message", 1, "m-b-10"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", 1, "success", 3, "click"], ["nz-button", "", 1, "warning", 3, "click"], ["nz-button", "", "nzDanger", "", "nzType", "primary", 3, "click"], ["nz-button", "", 1, "loading", 3, "click"], ["nzTitle", "Confirm", 1, "m-b-10"], ["nzTitle", "modal", 1, "m-b-10"], ["nzTitle", "Notification", 1, "m-b-10"], ["nz-button", "", 3, "nzType", "click"], ["template", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-with-icon"], [1, "ant-notification-notice-icon"], ["nz-icon", "", "nzType", "check", 2, "color", "rgb(16, 142, 233)"], [1, "ant-notification-notice-message"], [1, "ant-notification-notice-description"]], template: function MsgComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_3_listener() { return ctx.msg("info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_5_listener() { return ctx.msg("success"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_7_listener() { return ctx.msg("warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_9_listener() { return ctx.msg("error"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_11_listener() { return ctx.msg("loading"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-card", 8)(14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_14_listener() { return ctx.modalShow("confirm", "info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_16_listener() { return ctx.modalShow("confirm", "success"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_18_listener() { return ctx.modalShow("confirm", "warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_20_listener() { return ctx.modalShow("confirm", "error"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-card", 9)(23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_23_listener() { return ctx.modalShow("info", "info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_25_listener() { return ctx.modalShow("success", "success"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_27_listener() { return ctx.modalShow("warning", "warning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_29_listener() { return ctx.modalShow("error", "error"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "nz-card", 10)(32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MsgComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.createBasicNotification(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, MsgComponent_ng_template_34_Template, 8, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary");
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent], styles: ["[nz-button][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n.success[_ngcontent-%COMP%] {\n  background: #55d187;\n  color: white;\n  border-color: #55d187;\n}\n.warning[_ngcontent-%COMP%] {\n  background: #efbd47;\n  color: white;\n  border-color: #efbd47;\n}\n.loading[_ngcontent-%COMP%] {\n  background: #0960bd;\n  color: white;\n  border-color: #0960bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRiIsImZpbGUiOiJtc2cuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotYnV0dG9uXSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc3VjY2Vzc3tcbiAgYmFja2dyb3VuZDogIzU1ZDE4NztcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzU1ZDE4Nztcbn1cbi53YXJuaW5ne1xuICBiYWNrZ3JvdW5kOiNlZmJkNDc7XG4gIGNvbG9yOndoaXRlO1xuICBib3JkZXItY29sb3I6ICNlZmJkNDc7XG59XG4ubG9hZGluZ3tcbiAgYmFja2dyb3VuZDojMDk2MGJkO1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDk2MGJkO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 29345:
/*!**********************************************!*\
  !*** ./src/app/pages/feat/msg/msg.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsgModule": () => (/* binding */ MsgModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _msg_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msg-routing.module */ 57223);
/* harmony import */ var _msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg.component */ 71231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class MsgModule {
}
MsgModule.ɵfac = function MsgModule_Factory(t) { return new (t || MsgModule)(); };
MsgModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MsgModule });
MsgModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _msg_routing_module__WEBPACK_IMPORTED_MODULE_1__.MsgRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MsgModule, { declarations: [_msg_component__WEBPACK_IMPORTED_MODULE_2__.MsgComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _msg_routing_module__WEBPACK_IMPORTED_MODULE_1__.MsgRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_msg_msg_module_ts.js.map