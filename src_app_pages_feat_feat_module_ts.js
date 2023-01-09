"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_feat_module_ts"],{

/***/ 84579:
/*!***************************************************!*\
  !*** ./src/app/pages/feat/feat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatRoutingModule": () => (/* binding */ FeatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'msg', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("src_app_pages_feat_msg_msg_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./msg/msg.module */ 29345)).then(m => m.MsgModule) },
    { path: 'ex-modal', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_ex-modal_ex-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ex-modal/ex-modal.module */ 63202)).then(m => m.ExModalModule) },
    { path: 'ex-drawer', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_ex-drawer_ex-drawer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ex-drawer/ex-drawer.module */ 74463)).then(m => m.ExDrawerModule) },
    { path: 'msg', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("src_app_pages_feat_msg_msg_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./msg/msg.module */ 29345)).then(m => m.MsgModule) },
    { path: 'frame', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_frame_frame_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frame/frame.module */ 6698)).then(m => m.FrameModule) },
    { path: 'rich-text', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_rich-text_rich-text_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rich-text/rich-text.module */ 28250)).then(m => m.RichTextModule) },
    { path: 'upload', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_upload_upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./upload/upload.module */ 37699)).then(m => m.UploadModule) },
    {
        path: 'context-menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_context-menu_context-menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./context-menu/context-menu.module */ 97419)).then(m => m.ContextMenuModule)
    },
    {
        path: 'session-timeout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_session-timeout_session-timeout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./session-timeout/session-timeout.module */ 15202)).then(m => m.SessionTimeoutModule)
    },
    {
        path: 'click-out-side',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_click-out-side_click-out-side_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./click-out-side/click-out-side.module */ 2557)).then(m => m.ClickOutSideModule)
    },
    { path: 'color-sel', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-color-picker_fesm2020_ngx-color-picker_mjs"), __webpack_require__.e("src_app_pages_feat_color-sel_color-sel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./color-sel/color-sel.module */ 59679)).then(m => m.ColorSelModule) },
    { path: 'scroll', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_scroll_scroll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./scroll/scroll.module */ 94245)).then(m => m.ScrollModule) },
    { path: 'img-preview', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_img-preview_img-preview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./img-preview/img-preview.module */ 95040)).then(m => m.ImgPreviewModule) },
    { path: 'tabs', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 10429)).then(m => m.TabsModule) },
    { path: 'websocket', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_websocket_websocket_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./websocket/websocket.module */ 39976)).then(m => m.WebsocketModule) },
    { path: 'full-screen', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_full-screen_full-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-screen/full-screen.module */ 32674)).then(m => m.FullScreenModule) },
    { path: 'icons', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("default-src_app_shared_biz-components_icon-sel_icon-sel_module_ts"), __webpack_require__.e("src_app_pages_feat_icons_icons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./icons/icons.module */ 40864)).then(m => m.IconsModule) },
    { path: 'charts', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_charts_charts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 49852)).then(m => m.ChartsModule) },
    { path: 'ripple', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_ngx-color-picker_fesm2020_ngx-color-picker_mjs"), __webpack_require__.e("src_app_pages_feat_ripple_ripple_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ripple/ripple.module */ 30083)).then(m => m.RippleModule) },
    { path: 'copy', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_copy_copy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copy/copy.module */ 86945)).then(m => m.CopyModule) },
    { path: 'setup', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_setup_setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setup/setup.module */ 16920)).then(m => m.SetupModule) },
    { path: 'download', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_download_download_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./download/download.module */ 90105)).then(m => m.DownloadModule) },
    { path: 'editor', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_editor_editor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editor/editor.module */ 35847)).then(m => m.EditorModule) },
    { path: '', redirectTo: 'ex-modal', pathMatch: 'full' }
];
class FeatRoutingModule {
}
FeatRoutingModule.ɵfac = function FeatRoutingModule_Factory(t) { return new (t || FeatRoutingModule)(); };
FeatRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatRoutingModule });
FeatRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 53943:
/*!*******************************************!*\
  !*** ./src/app/pages/feat/feat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatModule": () => (/* binding */ FeatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _feat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feat-routing.module */ 84579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class FeatModule {
}
FeatModule.ɵfac = function FeatModule_Factory(t) { return new (t || FeatModule)(); };
FeatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatModule });
FeatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _feat_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeatRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _feat_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeatRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_feat_module_ts.js.map