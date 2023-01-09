(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_download_download_module_ts"],{

/***/ 43383:
/*!*****************************************************************!*\
  !*** ./src/app/core/services/http/download/download.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadService": () => (/* binding */ DownloadService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/base-http.service */ 54246);


class DownloadService {
    constructor(http) {
        this.http = http;
    }
    fileStreamDownload(downloadDto) {
        return this.http.downZip('/file/download/document', downloadDto, { needSuccessInfo: false });
    }
}
DownloadService.ɵfac = function DownloadService_Factory(t) { return new (t || DownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_base_http_service__WEBPACK_IMPORTED_MODULE_0__.BaseHttpService)); };
DownloadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DownloadService, factory: DownloadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3800:
/*!****************************************************************!*\
  !*** ./src/app/pages/feat/download/download-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadRoutingModule": () => (/* binding */ DownloadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_download_download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/download/download.component */ 2066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_download_download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent, data: { title: 'tập tin tải về', key: 'download' } }];
class DownloadRoutingModule {
}
DownloadRoutingModule.ɵfac = function DownloadRoutingModule_Factory(t) { return new (t || DownloadRoutingModule)(); };
DownloadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DownloadRoutingModule });
DownloadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DownloadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2066:
/*!***********************************************************!*\
  !*** ./src/app/pages/feat/download/download.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": () => (/* binding */ DownloadComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_download_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/download/download.service */ 43383);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);











class DownloadComponent {
    constructor(downloadService, destroy$) {
        this.downloadService = downloadService;
        this.destroy$ = destroy$;
        this.pageHeaderInfo = {
            title: '文件下载',
            breadcrumb: ['首页', '功能', '文件下载'],
            desc: '各种文件下载'
        };
    }
    ngOnInit() { }
    fileStreamDownload() {
        const downloadDto = {
            downloadUrl: `http://${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.ip}/api/file/图纸实际材料量导入模板.xlsx`
        };
        this.downloadService
            .fileStreamDownload(downloadDto)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(res => {
            const blob = new Blob([res], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_1___default().saveAs(blob, '材料库导入模板.xlsx');
        });
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_download_download_service__WEBPACK_IMPORTED_MODULE_2__.DownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_3__.DestroyService)); };
DownloadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 14, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nzTitle", "\u6839\u636E\u540E\u53F0\u63A5\u53E3\u6587\u4EF6\u6D41\u4E0B\u8F7D", 1, "m-b-10"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "\u6839\u636E\u6587\u4EF6\u5730\u5740\u4E0B\u8F7D\u6587\u4EF6", 1, "m-b-10"], ["nzTitle", "base64\u6D41\u4E0B\u8F7D", 1, "m-b-10"], ["nzTitle", "\u56FE\u7247Url\u4E0B\u8F7D,\u5982\u679C\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u9700\u8981\u5904\u7406\u56FE\u7247\u8DE8\u57DF", 1, "m-b-10"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_3_listener() { return ctx.fileStreamDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u6587\u4EF6\u6D41\u4E0B\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nz-card", 4)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_6_listener() { return ctx.fileStreamDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u6587\u4EF6\u5730\u5740\u4E0B\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nz-card", 5)(9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_9_listener() { return ctx.fileStreamDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "base64\u6D41\u4E0B\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nz-card", 6)(12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_12_listener() { return ctx.fileStreamDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u56FE\u7247Url\u4E0B\u8F7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 90105:
/*!********************************************************!*\
  !*** ./src/app/pages/feat/download/download.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadModule": () => (/* binding */ DownloadModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-routing.module */ 3800);
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.component */ 2066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class DownloadModule {
}
DownloadModule.ɵfac = function DownloadModule_Factory(t) { return new (t || DownloadModule)(); };
DownloadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DownloadModule });
DownloadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _download_routing_module__WEBPACK_IMPORTED_MODULE_1__.DownloadRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DownloadModule, { declarations: [_download_component__WEBPACK_IMPORTED_MODULE_2__.DownloadComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _download_routing_module__WEBPACK_IMPORTED_MODULE_1__.DownloadRoutingModule] }); })();


/***/ }),

/***/ 65226:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }

  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }

  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);

    try {
      b.send();
    } catch (a) {}

    return 200 <= b.status && 299 >= b.status;
  }

  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }

  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
      a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4E4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4E4);
    }
  });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_download_download_module_ts.js.map