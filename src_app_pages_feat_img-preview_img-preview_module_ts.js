"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_img-preview_img-preview_module_ts"],{

/***/ 28642:
/*!**********************************************************************!*\
  !*** ./src/app/pages/feat/img-preview/img-preview-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPreviewRoutingModule": () => (/* binding */ ImgPreviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/img-preview/img-preview.component */ 2150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_0__.ImgPreviewComponent, data: { title: 'Xem trước hình ảnh', key: 'img-preview' } }];
class ImgPreviewRoutingModule {
}
ImgPreviewRoutingModule.ɵfac = function ImgPreviewRoutingModule_Factory(t) { return new (t || ImgPreviewRoutingModule)(); };
ImgPreviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ImgPreviewRoutingModule });
ImgPreviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImgPreviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2150:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feat/img-preview/img-preview.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPreviewComponent": () => (/* binding */ ImgPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/image */ 67040);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/space */ 49640);







function ImgPreviewComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
} }
function ImgPreviewComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 6);
} }
class ImgPreviewComponent {
    constructor(nzImageService) {
        this.nzImageService = nzImageService;
        this.pageHeaderInfo = {
            title: '图片预览',
            breadcrumb: ['首页', '功能', '图片预览']
        };
    }
    onClick() {
        const images = [
            {
                src: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
                width: '200px',
                height: '200px',
                alt: 'ng-zorro'
            },
            {
                src: 'https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg',
                width: '200px',
                height: '200px',
                alt: 'angular'
            }
        ];
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    }
    ngOnInit() { }
}
ImgPreviewComponent.ɵfac = function ImgPreviewComponent_Factory(t) { return new (t || ImgPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__.NzImageService)); };
ImgPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImgPreviewComponent, selectors: [["app-img-preview"]], decls: 9, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-image", "", "width", "200px", "nzSrc", "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", "alt", "", 4, "nzSpaceItem"], ["nz-image", "", "width", "200px", "nzSrc", "https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg", "alt", "", 4, "nzSpaceItem"], ["nz-button", "", "nzType", "primary", 1, "m-t-8", 3, "click"], ["nz-image", "", "width", "200px", "nzSrc", "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", "alt", ""], ["nz-image", "", "width", "200px", "nzSrc", "https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg", "alt", ""]], template: function ImgPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-image-group")(3, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImgPreviewComponent_img_4_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ImgPreviewComponent_img_5_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImgPreviewComponent_Template_button_click_7_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u65E0\u56FE\u9884\u89C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__.NzImageDirective, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__.NzImageGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__.NzSpaceComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_6__.NzSpaceItemDirective], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1wcmV2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJpbWctcHJldmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 95040:
/*!**************************************************************!*\
  !*** ./src/app/pages/feat/img-preview/img-preview.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPreviewModule": () => (/* binding */ ImgPreviewModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _img_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-preview-routing.module */ 28642);
/* harmony import */ var _img_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-preview.component */ 2150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class ImgPreviewModule {
}
ImgPreviewModule.ɵfac = function ImgPreviewModule_Factory(t) { return new (t || ImgPreviewModule)(); };
ImgPreviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ImgPreviewModule });
ImgPreviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _img_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__.ImgPreviewRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImgPreviewModule, { declarations: [_img_preview_component__WEBPACK_IMPORTED_MODULE_2__.ImgPreviewComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _img_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__.ImgPreviewRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_img-preview_img-preview_module_ts.js.map