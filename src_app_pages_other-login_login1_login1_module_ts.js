(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_other-login_login1_login1_module_ts"],{

/***/ 26288:
/*!*******************************************************************************************!*\
  !*** ./src/app/core/services/store/biz-store-service/other-login/login1-store.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1StoreService": () => (/* binding */ Login1StoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class Login1StoreService {
    constructor() {
        this.loginType$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.LoginType.Normal);
        this.isLogin1OverModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    }
    setLoginTypeStore(type) {
        this.loginType$.next(type);
    }
    getLoginTypeStore() {
        return this.loginType$.asObservable();
    }
    setIsLogin1OverModelStore(type) {
        this.isLogin1OverModel$.next(type);
    }
    getIsLogin1OverModelStore() {
        return this.isLogin1OverModel$.asObservable();
    }
}
Login1StoreService.ɵfac = function Login1StoreService_Factory(t) { return new (t || Login1StoreService)(); };
Login1StoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Login1StoreService, factory: Login1StoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83535:
/*!*******************************************************************!*\
  !*** ./src/app/pages/other-login/login1/login1-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1RoutingModule": () => (/* binding */ Login1RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.Login1Component,
        data: { title: 'lần đăng nhập đầu tiên', key: 'login1' }
    }
];
class Login1RoutingModule {
}
Login1RoutingModule.ɵfac = function Login1RoutingModule_Factory(t) { return new (t || Login1RoutingModule)(); };
Login1RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Login1RoutingModule });
Login1RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Login1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27065:
/*!**************************************************************!*\
  !*** ./src/app/pages/other-login/login1/login1.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1Component": () => (/* binding */ Login1Component),
/* harmony export */   "LoginType": () => (/* binding */ LoginType)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_other_login_login1_normal_login_normal_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/normal-login/normal-login.component */ 64804);
/* harmony import */ var _app_pages_other_login_login1_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/other-login/login1/phone-login/phone-login.component */ 31232);
/* harmony import */ var _app_pages_other_login_login1_qr_login_qr_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/other-login/login1/qr-login/qr-login.component */ 95623);
/* harmony import */ var _app_pages_other_login_login1_regist_login_regist_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/other-login/login1/regist-login/regist-login.component */ 21716);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/constant */ 70018);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _core_services_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/types */ 90345);
/* harmony import */ var _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/ad.directive */ 67433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_common_theme_skin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/common/theme-skin.service */ 28557);
/* harmony import */ var _core_services_common_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/common/window.service */ 67927);
/* harmony import */ var _store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/biz-store-service/other-login/login1-store.service */ 26288);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ 26496);




























function Login1Component_ng_template_21_Template(rf, ctx) {}

function Login1Component_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 15);
  }
}

function Login1Component_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "AntDesignPro");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function Login1Component_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 27);
  }
}

function Login1Component_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 28);
  }
}

var LoginType;

(function (LoginType) {
  LoginType[LoginType["Normal"] = 0] = "Normal";
  LoginType[LoginType["Phone"] = 1] = "Phone";
  LoginType[LoginType["Qr"] = 2] = "Qr";
  LoginType[LoginType["Register"] = 3] = "Register";
})(LoginType || (LoginType = {}));

class Login1Component {
  constructor(destroy$, themeSkinService, windowServe, cdr, login1StoreService, breakpointObserver, themesService) {
    this.destroy$ = destroy$;
    this.themeSkinService = themeSkinService;
    this.windowServe = windowServe;
    this.cdr = cdr;
    this.login1StoreService = login1StoreService;
    this.breakpointObserver = breakpointObserver;
    this.themesService = themesService;
    this.isOverModel = true;
    this.isNightTheme$ = this.themesService.getIsNightTheme();
    this.formData = [{
      type: LoginType.Normal,
      component: new _core_services_types__WEBPACK_IMPORTED_MODULE_6__.DynamicComponent(_app_pages_other_login_login1_normal_login_normal_login_component__WEBPACK_IMPORTED_MODULE_0__.NormalLoginComponent, {})
    }, {
      type: LoginType.Phone,
      component: new _core_services_types__WEBPACK_IMPORTED_MODULE_6__.DynamicComponent(_app_pages_other_login_login1_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_1__.PhoneLoginComponent, {})
    }, {
      type: LoginType.Qr,
      component: new _core_services_types__WEBPACK_IMPORTED_MODULE_6__.DynamicComponent(_app_pages_other_login_login1_qr_login_qr_login_component__WEBPACK_IMPORTED_MODULE_2__.QrLoginComponent, {})
    }, {
      type: LoginType.Register,
      component: new _core_services_types__WEBPACK_IMPORTED_MODULE_6__.DynamicComponent(_app_pages_other_login_login1_regist_login_regist_login_component__WEBPACK_IMPORTED_MODULE_3__.RegistLoginComponent, {})
    }];
  }

  set adHost1(content) {
    if (content) {
      this.adHost = content;
      this.subLoginType();
      this.cdr.detectChanges();
    }
  }

  getCurrentComponent(type) {
    return this.formData.find(item => item.type === type);
  }

  to(adItem) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(adItem.component.component);
    componentRef.instance.data = adItem.component.data;
  }

  changeNight(isNight) {
    this.windowServe.setStorage(_config_constant__WEBPACK_IMPORTED_MODULE_4__.IsNightKey, `${isNight}`);
    this.themesService.setIsNightTheme(isNight);
    this.themeSkinService.toggleTheme().then(() => {
      this.cdr.markForCheck();
    });
  }

  subLoginType() {
    this.login1StoreService.getLoginTypeStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(res => {
      this.to(this.getCurrentComponent(res));
    });
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 1200px)']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(res => {
      this.isOverModel = res.matches;
      this.login1StoreService.setIsLogin1OverModelStore(res.matches);
      this.cdr.detectChanges();
    });
  }

}

Login1Component.ɵfac = function Login1Component_Factory(t) {
  return new (t || Login1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_5__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_common_theme_skin_service__WEBPACK_IMPORTED_MODULE_8__.ThemeSkinService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_common_window_service__WEBPACK_IMPORTED_MODULE_9__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_10__.Login1StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService));
};

Login1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: Login1Component,
  selectors: [["app-login1"]],
  viewQuery: function Login1Component_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_7__.AdDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.adHost1 = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_5__.DestroyService])],
  decls: 50,
  vars: 35,
  consts: [[1, "min-screen-full-height", "container", "relative"], ["nz-row", "", 1, "min-screen-full-height", 2, "padding", "0 5%"], ["nz-col", "", 1, "relative", "min-screen-full-height", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "absolute", "logo", "center"], ["src", "./assets/imgs/logo-color.svg", "alt", "ant", 2, "width", "48px"], [1, "full-height", "flex-coloum", "center", 2, "align-items", "flex-start"], ["src", "./assets/imgs/login1/login-box-bg.svg", "alt", "ant", 2, "width", "50%"], [1, "desc"], [1, "sub-desc"], ["nz-col", "", 1, "relative", "min-screen-full-height", "center", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "full-height", "flex-coloum", "center"], [3, "nzBordered"], ["appAd", ""], ["nz-row", "", "nzJustify", "space-between", 1, "absolute", "screen-full-width", "p-l-16", "p-r-16", 2, "top", "16px"], ["nz-col", "", 4, "ngIf"], ["nz-col", ""], [3, "ngModel", "nzCheckedChildren", "nzUnCheckedChildren", "ngModelChange"], ["checkedTemplate", ""], ["unCheckedTemplate", ""], ["nz-dropdown", "", 1, "hand-model", "m-l-8", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "font-size", "nzTheme", "outline"], ["language", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", ""], ["nz-menu-item", "", "nzSelected", ""], ["src", "./assets/imgs/logo-color.svg", "alt", "ant", 2, "width", "32px"], [1, "sp-16", "m-l-8", 2, "color", "white"], ["src", "assets/imgs/login1/sun.svg", "alt", ""], ["src", "assets/imgs/login1/moon.svg", "alt", ""]],
  template: function Login1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "AntDesignPro");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 5)(9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 7)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\u8F93\u5165\u60A8\u7684\u4E2A\u4EBA\u8BE6\u7EC6\u4FE1\u606F\u5F00\u59CB\u4F7F\u7528\uFF01");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "nz-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, Login1Component_ng_template_21_Template, 0, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, Login1Component_div_23_Template, 1, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, Login1Component_div_24_Template, 4, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 15)(26, "nz-switch", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function Login1Component_Template_nz_switch_ngModelChange_26_listener($event) {
        return ctx.changeNight($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, Login1Component_ng_template_28_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, Login1Component_ng_template_30_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "nz-dropdown-menu", null, 21)(37, "ul", 22)(38, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Bahasa Indonesia");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "\u65E5\u672C\u8A9E");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "Portugu\u00EAs");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "\u7B80\u4F53\u4E2D\u6587");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "\u7E41\u9AD4\u4E2D\u6587");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](29);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-night", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 27, ctx.isNightTheme$))("over-modal", ctx.isOverModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzXXl", 10)("nzXl", 12)("nzLg", 0)("nzMd", 0)("nzSm", 0)("nzXs", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzXXl", 14)("nzXl", 12)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzXs", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-night", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 29, ctx.isNightTheme$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzBordered", ctx.isOverModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isOverModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isOverModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 31, ctx.isNightTheme$))("nzCheckedChildren", _r3)("nzUnCheckedChildren", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzDropdownMenu", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", !_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](34, 33, ctx.isNightTheme$) ? ctx.isOverModel ? "white" : "black" : "white");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _shared_directives_ad_directive__WEBPACK_IMPORTED_MODULE_7__.AdDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzRowDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__.NzMenuItemDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_21__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_21__.NzDropdownMenuComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__.NzCardComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-left: -48%;\n  background-image: url('login1-bg.svg');\n  background-position: 100%;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  content: \"\";\n}\n.container.is-night[_ngcontent-%COMP%]:before {\n  background-image: url('login1-bg-dark.svg');\n}\n.container.over-modal[_ngcontent-%COMP%]:before {\n  background-image: none;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  top: 40px;\n  height: 80px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n  margin-left: 8px;\n}\n.container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin-top: 55px;\n  font-weight: 500;\n  color: white;\n  font-size: 32px;\n}\n.container[_ngcontent-%COMP%]   .sub-desc[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: white;\n  font-size: 16px;\n}\n.over-modal[_ngcontent-%COMP%] {\n  background: #293146 !important;\n}\n[_nghost-%COMP%]     .ant-card.over-modal, .ant-card.is-night[_ngcontent-%COMP%] {\n  background: #293146 !important;\n}\n[_nghost-%COMP%]     .container.is-night {\n  background: #293146 !important;\n}\n[_nghost-%COMP%]     .ant-switch {\n  background: black!important;\n}\nimg[_ngcontent-%COMP%] {\n  width: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luMS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNFLDJDQUFBO0FBREo7QUFJRTtFQUNFLHNCQUFBO0FBRko7QUFsQkE7RUF3QkksU0FBQTtFQUNBLFlBQUE7QUFISjtBQXRCQTtFQTRCTSxXQUFBO0FBSE47QUF6QkE7RUFnQ00sZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpOO0FBOUJBO0VBdUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5KO0FBcENBO0VBOENJLGVBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBQVJKO0FBWUE7RUFDRSw4QkFBQTtBQVZGO0FBYUE7O0VBQ0UsOEJBQUE7QUFWRjtBQWFBO0VBQ0UsOEJBQUE7QUFYRjtBQWNBO0VBQ0UsMkJBQUE7QUFaRjtBQWVBO0VBQ0UsV0FBQTtBQWJGIiwiZmlsZSI6ImxvZ2luMS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTQ4JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2xvZ2luMS9sb2dpbjEtYmcuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cblxuICAmLmlzLW5pZ2h0OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9sb2dpbjEvbG9naW4xLWJnLWRhcmsuc3ZnJyk7XG4gIH1cblxuICAmLm92ZXItbW9kYWw6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHRvcDogNDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQ4cHhcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLmRlc2Mge1xuICAgIG1hcmdpbi10b3A6IDU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG5cbiAgLnN1Yi1kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5vdmVyLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogIzI5MzE0NiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkLm92ZXItbW9kYWwsIC5hbnQtY2FyZC5pcy1uaWdodCB7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIuaXMtbmlnaHQge1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ2ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LXN3aXRjaCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDE0cHg7XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 35839:
/*!***********************************************************!*\
  !*** ./src/app/pages/other-login/login1/login1.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1Module": () => (/* binding */ Login1Module)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-qrcode */ 79349);
/* harmony import */ var _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login1-routing.module */ 83535);
/* harmony import */ var _login1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login1.component */ 27065);
/* harmony import */ var _normal_login_normal_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normal-login/normal-login.component */ 64804);
/* harmony import */ var _phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phone-login/phone-login.component */ 31232);
/* harmony import */ var _qr_login_qr_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-login/qr-login.component */ 95623);
/* harmony import */ var _regist_login_regist_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regist-login/regist-login.component */ 21716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class Login1Module {
}
Login1Module.ɵfac = function Login1Module_Factory(t) { return new (t || Login1Module)(); };
Login1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: Login1Module });
Login1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_9__.PasswordStrengthMeterModule.forChild(), angular2_qrcode__WEBPACK_IMPORTED_MODULE_1__.QRCodeModule, _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Login1RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](Login1Module, { declarations: [_login1_component__WEBPACK_IMPORTED_MODULE_3__.Login1Component, _normal_login_normal_login_component__WEBPACK_IMPORTED_MODULE_4__.NormalLoginComponent, _qr_login_qr_login_component__WEBPACK_IMPORTED_MODULE_6__.QrLoginComponent, _regist_login_regist_login_component__WEBPACK_IMPORTED_MODULE_7__.RegistLoginComponent, _phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_5__.PhoneLoginComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_9__.PasswordStrengthMeterModule, angular2_qrcode__WEBPACK_IMPORTED_MODULE_1__.QRCodeModule, _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Login1RoutingModule] }); })();


/***/ }),

/***/ 64804:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/other-login/login1/normal-login/normal-login.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NormalLoginComponent": () => (/* binding */ NormalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/constant */ 70018);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/common-store/userInfo.service */ 43971);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/common-store/menu-store.service */ 15592);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/login/login.service */ 56742);
/* harmony import */ var _core_services_common_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/common/window.service */ 67927);
/* harmony import */ var _store_common_store_spin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/common-store/spin.service */ 51655);
/* harmony import */ var _store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/biz-store-service/other-login/login1-store.service */ 26288);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);

























function NormalLoginComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NormalLoginComponent_ng_template_12_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.passwordVisible = !ctx_r2.passwordVisible); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", ctx_r1.passwordVisible ? "eye-invisible" : "eye");
} }
class NormalLoginComponent {
    constructor(destroy$, userInfoService, router, menuService, dataService, windowServe, spinService, cdr, fb, login1StoreService) {
        this.destroy$ = destroy$;
        this.userInfoService = userInfoService;
        this.router = router;
        this.menuService = menuService;
        this.dataService = dataService;
        this.windowServe = windowServe;
        this.spinService = spinService;
        this.cdr = cdr;
        this.fb = fb;
        this.login1StoreService = login1StoreService;
        this.passwordVisible = false;
        this.typeEnum = _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.LoginType;
        this.isOverModel = false;
    }
    submitForm() {
        this.spinService.setCurrentGlobalSpinStore(true);
        this.windowServe.setSessionStorage(_config_constant__WEBPACK_IMPORTED_MODULE_1__.TokenKey, 'TokenPre + token');
        const userInfo = this.userInfoService.parsToken(_config_constant__WEBPACK_IMPORTED_MODULE_1__.TokenPre);
        this.userInfoService.setUserInfo(userInfo);
        setTimeout(() => {
            this.dataService.getMenuByUserId("-1").subscribe(menus => {
                this.menuService.setMenuArrayStore(menus);
                this.router.navigateByUrl('default/dashboard/analysis').then(() => {
                    this.spinService.setCurrentGlobalSpinStore(false);
                });
            });
        }, 100);
    }
    goOtherWay(type) {
        this.login1StoreService.setLoginTypeStore(type);
    }
    ngOnInit() {
        this.login1StoreService
            .getIsLogin1OverModelStore()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.isOverModel = res;
            this.cdr.markForCheck();
        });
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            remember: [null]
        });
    }
}
NormalLoginComponent.ɵfac = function NormalLoginComponent_Factory(t) { return new (t || NormalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_3__.UserInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_4__.MenuStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_common_window_service__WEBPACK_IMPORTED_MODULE_6__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_spin_service__WEBPACK_IMPORTED_MODULE_7__.SpinService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_8__.Login1StoreService)); };
NormalLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NormalLoginComponent, selectors: [["app-normal-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__.DestroyService])], decls: 38, vars: 15, consts: [[1, "m-b-8"], [1, "full-with"], ["nz-form", "", 1, "login-form-wrap", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u7528\u6237\u540D!"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u7528\u6237\u540D", 3, "placeholder"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u5BC6\u7801!"], [3, "nzSize", "nzSuffix"], ["autocomplete", "on", "nz-input", "", "formControlName", "password", "placeholder", "\u5BC6\u7801", 3, "placeholder", "type"], ["suffixTemplate", ""], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", ""], ["nz-checkbox", "", "formControlName", "remember"], [1, "operate-text"], ["nz-button", "", "nzSize", "large", 1, "full-with", "m-t-15", "btn", 3, "nzType"], ["nz-row", "", "nzJustify", "space-between", 1, "m-t-15"], ["nz-col", "", "nz-button", "", "nzType", "default", 1, "m-b-8", 3, "nzSm", "nzXs", "click"], ["nzPlain", "", "nzText", "\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"], ["nz-row", "", "nzJustify", "space-around"], ["nz-col", "", "nz-icon", "", "nzType", "alipay-circle", "nzTheme", "fill"], ["nz-col", "", "nz-icon", "", "nzType", "taobao-circle", "nzTheme", "fill"], ["nz-col", "", "nz-icon", "", "nzType", "weibo-circle", "nzTheme", "fill"], ["nz-col", "", "nz-icon", "", "nzType", "qq-circle", "nzTheme", "fill"], ["nz-col", "", "nz-icon", "", "nzType", "google-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType", "click"]], template: function NormalLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u767B \u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function NormalLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-control", 5)(10, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, NormalLoginComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "label", 11)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\u8BB0\u4F4F\u5BC6\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 10)(20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\u5FD8\u8BB0\u5BC6\u7801?");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\u767B \u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NormalLoginComponent_Template_button_click_25_listener() { return ctx.goOtherWay(ctx.typeEnum.Phone); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "\u624B\u673A\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NormalLoginComponent_Template_button_click_27_listener() { return ctx.goOtherWay(ctx.typeEnum.Qr); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\u4E8C\u7EF4\u7801\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NormalLoginComponent_Template_button_click_29_listener() { return ctx.goOtherWay(ctx.typeEnum.Register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "\u6CE8 \u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "nz-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 18)(34, "i", 19)(35, "i", 20)(36, "i", 21)(37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-over-model", ctx.isOverModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "\u6CA1\u6709\u8D26\u53F7\u5BC6\u7801\u76F4\u63A5\u767B\u9646");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "no username and password,just login")("type", ctx.passwordVisible ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__.NzCheckboxComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__.NzDividerComponent], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n@media (min-width: 470px) {\n  .login-form-wrap[_ngcontent-%COMP%] {\n    width: 404px;\n  }\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #0C63BD;\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\ni[_ngcontent-%COMP%]:hover {\n  color: #1890FF;\n  cursor: pointer;\n}\n.is-over-model[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC1sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDO0FBRUQ7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUtFO0VBQUE7SUFDRSxZQUFBO0VBRkY7QUFDRjtBQUZBO0VBT0ksbUJBQUE7QUFGSjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBT0E7RUFDRSxlQUFBO0FBTEY7QUFPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTEo7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVBGIiwiZmlsZSI6Im5vcm1hbC1sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG46aG9zdCA6Om5nLWRlZXAge1xuICB3aWR0aDogMTAwJTtcbn1cbiovXG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4tZm9ybS13cmFwIHtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDcwcHgpIHtcbiAgICB3aWR0aDogNDA0cHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEM2M0JEO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gIH1cbn1cblxuaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzE4OTBGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmlzLW92ZXItbW9kZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 31232:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/other-login/login1/phone-login/phone-login.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneLoginComponent": () => (/* binding */ PhoneLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/common-store/windows-width.service */ 60817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/biz-store-service/other-login/login1-store.service */ 26288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);


















const _c0 = function (a0) { return { "font-size": a0 }; };
class PhoneLoginComponent {
    constructor(destroy$, windowsWidthService, cdr, fb, login1StoreService) {
        this.destroy$ = destroy$;
        this.windowsWidthService = windowsWidthService;
        this.cdr = cdr;
        this.fb = fb;
        this.login1StoreService = login1StoreService;
        this.typeEnum = _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.LoginType;
        this.equipmentWidthEnum = _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.EquipmentWidth;
        this.isOverModel = false;
        this.currentEquipmentWidth = _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.EquipmentWidth.md;
    }
    submitForm() { }
    goOtherWay(type) {
        this.login1StoreService.setLoginTypeStore(type);
    }
    initForm() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            remember: [null]
        });
    }
    subLogin1Store() {
        this.login1StoreService
            .getIsLogin1OverModelStore()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.isOverModel = res;
            this.cdr.markForCheck();
        });
    }
    subScreenWidth() {
        this.windowsWidthService
            .getWindowWidthStore()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.currentEquipmentWidth = res;
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        this.subScreenWidth();
        this.subLogin1Store();
        this.initForm();
    }
}
PhoneLoginComponent.ɵfac = function PhoneLoginComponent_Factory(t) { return new (t || PhoneLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.WindowsWidthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_3__.Login1StoreService)); };
PhoneLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PhoneLoginComponent, selectors: [["app-phone-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService])], decls: 18, vars: 15, consts: [[1, "m-b-8"], [1, "full-with"], ["nz-form", "", 1, "login-form-wrap", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "\u624B\u673A\u53F7\u7801!"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u624B\u673A\u53F7\u7801", 3, "placeholder"], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", "", "nzErrorTip", "\u77ED\u4FE1\u9A8C\u8BC1\u7801!", 1, "flex-1", 2, "max-width", "65%", 3, "nzXs", "nzSm"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u9A8C\u8BC1\u7801", 3, "placeholder"], ["nz-button", "", "nz-col", "", "nzType", "default", 1, "p-0", 3, "nzXs", "nzSm", "nzSize"], [3, "ngStyle"], ["nz-button", "", "nzSize", "large", 1, "full-with", "m-t-15", "btn", 3, "nzType"], ["nz-button", "", "nzSize", "large", 1, "full-with", "m-t-15", 3, "nzType", "click"]], template: function PhoneLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u624B\u673A\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PhoneLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nz-form-item", 5)(9, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 8)(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u83B7\u53D6\u9A8C\u8BC1\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u767B \u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneLoginComponent_Template_button_click_16_listener() { return ctx.goOtherWay(ctx.typeEnum.Normal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u8FD4 \u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-over-model", ctx.isOverModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", "\u624B\u673A\u53F7\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXs", 15)("nzSm", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", "\u9A8C\u8BC1\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzXs", 7)("nzSm", 7)("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx.currentEquipmentWidth === ctx.equipmentWidthEnum.xs ? "0.8rem" : "1rem"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", "default");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n@media (min-width: 470px) {\n  .login-form-wrap[_ngcontent-%COMP%] {\n    width: 404px;\n  }\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #0C63BD;\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.is-over-model[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBRUY7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUlFO0VBQUE7SUFDRSxZQUFBO0VBREY7QUFDRjtBQUZBO0VBTUksbUJBQUE7QUFESjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFKRiIsImZpbGUiOiJwaG9uZS1sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qOmhvc3QgOjpuZy1kZWVwIHtcbiAgd2lkdGg6IDEwMCU7XG59Ki9cblxuaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi1mb3JtLXdyYXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogNDcwcHgpIHtcbiAgICB3aWR0aDogNDA0cHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEM2M0JEO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gIH1cbn1cblxuLmlzLW92ZXItbW9kZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 95623:
/*!*************************************************************************!*\
  !*** ./src/app/pages/other-login/login1/qr-login/qr-login.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrLoginComponent": () => (/* binding */ QrLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/biz-store-service/other-login/login1-store.service */ 26288);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/typography */ 63140);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-qrcode */ 79349);
















class QrLoginComponent {
    constructor(destroy$, cdr, fb, login1StoreService) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.fb = fb;
        this.login1StoreService = login1StoreService;
        this.typeEnum = _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.LoginType;
        this.isOverModel = false;
    }
    submitForm() { }
    goOtherWay(type) {
        this.login1StoreService.setLoginTypeStore(type);
    }
    ngOnInit() {
        this.login1StoreService
            .getIsLogin1OverModelStore()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.isOverModel = res;
            this.cdr.markForCheck();
        });
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            remember: [null]
        });
    }
}
QrLoginComponent.ɵfac = function QrLoginComponent_Factory(t) { return new (t || QrLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_2__.Login1StoreService)); };
QrLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: QrLoginComponent, selectors: [["app-qr-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService])], decls: 12, vars: 6, consts: [[1, "m-b-8"], [1, "full-with"], ["nz-form", "", 1, "login-form-wrap", 3, "formGroup", "ngSubmit"], [1, "p-24"], [1, "center", 3, "size", "value"], ["nz-typography", "", "nzType", "secondary", 1, "center", "sp-14", "desc"], ["nz-button", "", "nzSize", "large", 1, "full-with", 3, "nzType", "click"]], template: function QrLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u4E8C\u7EF4\u7801\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function QrLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "qr-code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u626B\u7801\u540E\u70B9\u51FB\"\u786E\u8BA4\"\uFF0C\u5373\u53EF\u5B8C\u6210\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QrLoginComponent_Template_button_click_10_listener() { return ctx.goOtherWay(ctx.typeEnum.Normal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u8FD4 \u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-over-model", ctx.isOverModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 500)("value", "https://github.com/huajian123/ng-ant-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", "default");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_12__.NzTypographyComponent, angular2_qrcode__WEBPACK_IMPORTED_MODULE_3__.QRCodeComponent], styles: ["[_nghost-%COMP%]     img {\n  width: 70%;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n@media (min-width: 470px) {\n  .login-form-wrap[_ngcontent-%COMP%] {\n    width: 404px;\n  }\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #0C63BD;\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.desc[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.is-over-model[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtBQUFKO0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQU1FO0VBQUE7SUFDRSxZQUFBO0VBSEY7QUFDRjtBQUFBO0VBTUksbUJBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBUUE7RUFDRSxlQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVBGIiwiZmlsZSI6InFyLWxvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4tZm9ybS13cmFwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ3MHB4KSB7XG4gICAgd2lkdGg6IDQwNHB4O1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzBDNjNCRDtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaXMtb3Zlci1tb2RlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 21716:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/other-login/login1/regist-login/regist-login.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistLoginComponent": () => (/* binding */ RegistLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/other-login/login1/login1.component */ 27065);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/common-store/windows-width.service */ 60817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/biz-store-service/other-login/login1-store.service */ 26288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);





















function RegistLoginComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegistLoginComponent_ng_template_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.passwordVisible = !ctx_r6.passwordVisible); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r1.passwordVisible ? "eye-invisible" : "eye");
} }
function RegistLoginComponent_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please confirm your password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RegistLoginComponent_ng_template_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u6B63\u786E!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RegistLoginComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RegistLoginComponent_ng_template_28_ng_container_0_Template, 2, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegistLoginComponent_ng_template_28_ng_container_1_Template, 2, 0, "ng-container", 27);
} if (rf & 2) {
    const control_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", control_r8.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", control_r8.hasError("confirm"));
} }
function RegistLoginComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegistLoginComponent_ng_template_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.compirePasswordVisible = !ctx_r11.compirePasswordVisible); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r5.compirePasswordVisible ? "eye-invisible" : "eye");
} }
const _c0 = function (a0) { return { "font-size": a0 }; };
/*https://www.npmjs.com/package/angular-password-strength-meter*/
class RegistLoginComponent {
    constructor(destroy$, windowsWidthService, cdr, fb, login1StoreService) {
        this.destroy$ = destroy$;
        this.windowsWidthService = windowsWidthService;
        this.cdr = cdr;
        this.fb = fb;
        this.login1StoreService = login1StoreService;
        this.typeEnum = _app_pages_other_login_login1_login1_component__WEBPACK_IMPORTED_MODULE_0__.LoginType;
        this.passwordVisible = false;
        this.compirePasswordVisible = false;
        this.isOverModel = false;
        this.equipmentWidthEnum = _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.EquipmentWidth;
        this.currentEquipmentWidth = _store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.EquipmentWidth.md;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls['password'].value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    get password() {
        return this.validateForm.get('password');
    }
    subScreenWidth() {
        this.windowsWidthService.getWindowWidthStore().subscribe(res => {
            this.currentEquipmentWidth = res;
            this.cdr.markForCheck();
        });
    }
    submitForm() { }
    goOtherWay(type) {
        this.login1StoreService.setLoginTypeStore(type);
    }
    updateConfirmValidator() {
        Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
    }
    initForm() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.confirmationValidator]],
            remember: [null]
        });
    }
    subLogin1Store() {
        this.login1StoreService
            .getIsLogin1OverModelStore()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.isOverModel = res;
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        this.subScreenWidth();
        this.initForm();
        this.subLogin1Store();
    }
}
RegistLoginComponent.ɵfac = function RegistLoginComponent_Factory(t) { return new (t || RegistLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_store_common_store_windows_width_service__WEBPACK_IMPORTED_MODULE_2__.WindowsWidthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_store_biz_store_service_other_login_login1_store_service__WEBPACK_IMPORTED_MODULE_3__.Login1StoreService)); };
RegistLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RegistLoginComponent, selectors: [["app-regist-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_1__.DestroyService])], decls: 41, vars: 27, consts: [[1, "m-b-8"], [1, "full-with"], ["nz-form", "", 1, "login-form-wrap", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "\u8D26\u53F7!"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u8D26\u53F7", 3, "placeholder"], ["nzErrorTip", "\u624B\u673A\u53F7\u7801!"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u624B\u673A\u53F7\u7801", 3, "placeholder"], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", "", "nzErrorTip", "\u77ED\u4FE1\u9A8C\u8BC1\u7801!", 1, "flex-1", 2, "max-width", "65%", 3, "nzXs", "nzSm"], ["nzSize", "large", "type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u77ED\u4FE1\u9A8C\u8BC1\u7801", 3, "placeholder"], ["nz-button", "", "nz-col", "", "nzType", "default", 1, "p-0", 3, "nzXs", "nzSm", "nzSize"], [3, "ngStyle"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u5BC6\u7801!"], [3, "nzSize", "nzSuffix"], ["autocomplete", "on", "nz-input", "", "formControlName", "password", "placeholder", "\u5BC6\u7801", 3, "placeholder", "type", "ngModelChange"], [3, "password"], ["suffixTemplate1", ""], [3, "nzErrorTip"], ["autocomplete", "on", "nz-input", "", "formControlName", "checkPassword", "placeholder", "\u8BF7\u786E\u8BA4\u5BC6\u7801", 3, "placeholder", "type"], ["errorTpl", ""], ["suffixTemplate", ""], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], ["nz-button", "", "nzSize", "large", 1, "full-with", "m-t-15", "btn", 3, "nzType"], ["nz-button", "", "nzSize", "large", 1, "full-with", "m-t-15", 3, "nzType", "click"], ["nz-icon", "", 3, "nzType", "click"], [4, "ngIf"]], template: function RegistLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u6CE8\u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegistLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-form-item", 7)(12, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u83B7\u53D6\u9A8C\u8BC1\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-control", 12)(19, "nz-input-group", 13)(20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RegistLoginComponent_Template_input_ngModelChange_20_listener() { return ctx.updateConfirmValidator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "password-strength-meter", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RegistLoginComponent_ng_template_22_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "nz-form-item")(25, "nz-form-control", 17)(26, "nz-input-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RegistLoginComponent_ng_template_28_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, RegistLoginComponent_ng_template_30_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "label", 23)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u6211\u540C\u610Fxxx\u9690\u79C1\u653F\u7B56");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u6CE8 \u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegistLoginComponent_Template_button_click_39_listener() { return ctx.goOtherWay(ctx.typeEnum.Normal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\u8FD4 \u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-over-model", ctx.isOverModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "\u8D26\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "\u624B\u673A\u53F7\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 15)("nzSm", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "\u77ED\u4FE1\u9A8C\u8BC1\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 7)("nzSm", 7)("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.currentEquipmentWidth === ctx.equipmentWidthEnum.xs ? "0.8rem" : "1rem"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "\u8FD9\u91CC\u505A\u4E00\u4E2A\u786E\u8BA4\u5BC6\u7801\u7684\u6821\u9A8C\u793A\u4F8B")("type", ctx.passwordVisible ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("password", ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "\u8FD9\u91CC\u505A\u4E00\u4E2A\u786E\u8BA4\u5BC6\u7801\u7684\u6821\u9A8C\u793A\u4F8B")("type", ctx.compirePasswordVisible ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", "default");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__.NzCheckboxComponent, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterComponent], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n@media (min-width: 470px) {\n  .login-form-wrap[_ngcontent-%COMP%] {\n    width: 404px;\n  }\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #0C63BD;\n}\n.login-form-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.is-over-model[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdC1sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDO0FBRUQ7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUlFO0VBQUE7SUFDRSxZQUFBO0VBREY7QUFDRjtBQUZBO0VBTUksbUJBQUE7QUFESjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFKRiIsImZpbGUiOiJyZWdpc3QtbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4qL1xuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLWZvcm0td3JhcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NzBweCkge1xuICAgIHdpZHRoOiA0MDRweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwQzYzQkQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbiAgfVxufVxuXG4uaXMtb3Zlci1tb2RlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 79349:
/*!**************************************************************************!*\
  !*** ./node_modules/angular2-qrcode/__ivy_ngcc__/lib/angular2-qrcode.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeComponent": () => (/* binding */ QRCodeComponent),
/* harmony export */   "QRCodeModule": () => (/* binding */ QRCodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrious */ 77875);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_0__);




var QRCodeComponent = function () {
  /**
   * @param {?} elementRef
   */
  function QRCodeComponent(elementRef) {
    this.elementRef = elementRef;
    this.background = 'white';
    this.backgroundAlpha = 1.0;
    this.foreground = 'black';
    this.foregroundAlpha = 1.0;
    this.level = 'L';
    this.mime = 'image/png';
    this.padding = null;
    this.size = 100;
    this.value = '';
    this.canvas = false;
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  QRCodeComponent.prototype.ngOnChanges = function (changes) {
    if ('background' in changes || 'backgroundAlpha' in changes || 'foreground' in changes || 'foregroundAlpha' in changes || 'level' in changes || 'mime' in changes || 'padding' in changes || 'size' in changes || 'value' in changes || 'canvas' in changes) {
      this.generate();
    }
  };
  /**
   * @return {?}
   */


  QRCodeComponent.prototype.generate = function () {
    try {
      var
      /** @type {?} */
      el = this.elementRef.nativeElement;
      el.innerHTML = '';
      var
      /** @type {?} */
      qr = new (qrious__WEBPACK_IMPORTED_MODULE_0___default())({
        background: this.background,
        backgroundAlpha: this.backgroundAlpha,
        foreground: this.foreground,
        foregroundAlpha: this.foregroundAlpha,
        level: this.level,
        mime: this.mime,
        padding: this.padding,
        size: this.size,
        value: this.value
      });

      if (this.canvas) {
        el.appendChild(qr.canvas);
      } else {
        el.appendChild(qr.image);
      }
    } catch (e) {
      console.error("Could not generate QR Code: " + e.message);
    }
  };

  QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) {
    return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  QRCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: QRCodeComponent,
    selectors: [["qr-code"]],
    inputs: {
      background: "background",
      backgroundAlpha: "backgroundAlpha",
      foreground: "foreground",
      foregroundAlpha: "foregroundAlpha",
      level: "level",
      mime: "mime",
      padding: "padding",
      size: "size",
      value: "value",
      canvas: "canvas"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function QRCodeComponent_Template(rf, ctx) {},
    encapsulation: 2
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
      args: [{
        moduleId: 'module.id',
        selector: 'qr-code',
        template: ""
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
      }];
    }, {
      background: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      backgroundAlpha: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      foreground: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      foregroundAlpha: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      mime: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      padding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }]
    });
  })();

  return QRCodeComponent;
}();
/**
 * @nocollapse
 */


QRCodeComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }];
};

QRCodeComponent.propDecorators = {
  'background': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'backgroundAlpha': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'foreground': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'foregroundAlpha': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'level': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'mime': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'padding': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'size': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'value': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'canvas': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
};

var QRCodeModule = function () {
  function QRCodeModule() {}

  QRCodeModule.ɵfac = function QRCodeModule_Factory(t) {
    return new (t || QRCodeModule)();
  };

  QRCodeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: QRCodeModule
  });
  QRCodeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
      args: [{
        exports: [QRCodeComponent],
        declarations: [QRCodeComponent]
      }]
    }], function () {
      return [];
    }, null);
  })();

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QRCodeModule, {
      declarations: [QRCodeComponent],
      exports: [QRCodeComponent]
    });
  })();

  return QRCodeModule;
}();
/**
 * @nocollapse
 */


QRCodeModule.ctorParameters = function () {
  return [];
};
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 77875:
/*!********************************************!*\
  !*** ./node_modules/qrious/dist/qrious.js ***!
  \********************************************/
/***/ (function(module) {

/*
 * QRious v4.0.2
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /*
   * Copyright (C) 2017 Alasdair Mercer, !ninja
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */

  /**
   * A bare-bones constructor for surrogate prototype swapping.
   *
   * @private
   * @constructor
   */

  var Constructor =
  /* istanbul ignore next */
  function () {};
  /**
   * A reference to <code>Object.prototype.hasOwnProperty</code>.
   *
   * @private
   * @type {Function}
   */


  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * A reference to <code>Array.prototype.slice</code>.
   *
   * @private
   * @type {Function}
   */

  var slice = Array.prototype.slice;
  /**
   * Creates an object which inherits the given <code>prototype</code>.
   *
   * Optionally, the created object can be extended further with the specified <code>properties</code>.
   *
   * @param {Object} prototype - the prototype to be inherited by the created object
   * @param {Object} [properties] - the optional properties to be extended by the created object
   * @return {Object} The newly created object.
   * @private
   */

  function createObject(prototype, properties) {
    var result;
    /* istanbul ignore next */

    if (typeof Object.create === 'function') {
      result = Object.create(prototype);
    } else {
      Constructor.prototype = prototype;
      result = new Constructor();
      Constructor.prototype = null;
    }

    if (properties) {
      extendObject(true, result, properties);
    }

    return result;
  }
  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   */


  function extend(name, constructor, prototype, statics) {
    var superConstructor = this;

    if (typeof name !== 'string') {
      statics = prototype;
      prototype = constructor;
      constructor = name;
      name = null;
    }

    if (typeof constructor !== 'function') {
      statics = prototype;
      prototype = constructor;

      constructor = function () {
        return superConstructor.apply(this, arguments);
      };
    }

    extendObject(false, constructor, superConstructor, statics);
    constructor.prototype = createObject(superConstructor.prototype, prototype);
    constructor.prototype.constructor = constructor;
    constructor.class_ = name || superConstructor.class_;
    constructor.super_ = superConstructor;
    return constructor;
  }
  /**
   * Extends the specified <code>target</code> object with the properties in each of the <code>sources</code> provided.
   *
   * if any source is <code>null</code> it will be ignored.
   *
   * @param {boolean} own - <code>true</code> to only copy <b>own</b> properties from <code>sources</code> onto
   * <code>target</code>; otherwise <code>false</code>
   * @param {Object} target - the target object which should be extended
   * @param {...Object} [sources] - the source objects whose properties are to be copied onto <code>target</code>
   * @return {void}
   * @private
   */


  function extendObject(own, target, sources) {
    sources = slice.call(arguments, 2);
    var property;
    var source;

    for (var i = 0, length = sources.length; i < length; i++) {
      source = sources[i];

      for (property in source) {
        if (!own || hasOwnProperty.call(source, property)) {
          target[property] = source[property];
        }
      }
    }
  }

  var extend_1 = extend;
  /**
   * The base class from which all others should extend.
   *
   * @public
   * @constructor
   */

  function Nevis() {}

  Nevis.class_ = 'Nevis';
  Nevis.super_ = Object;
  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   * @static
   * @memberof Nevis
   */

  Nevis.extend = extend_1;
  var nevis = Nevis;
  var lite = nevis;
  /**
   * Responsible for rendering a QR code {@link Frame} on a specific type of element.
   *
   * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
   *
   * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
   * from the renderer will result in it being immediately enabled and the element being rendered.
   *
   * @param {QRious} qrious - the {@link QRious} instance to be used
   * @param {*} element - the element onto which the QR code is to be rendered
   * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
   * @public
   * @class
   * @extends Nevis
   */

  var Renderer = lite.extend(function (qrious, element, enabled) {
    /**
     * The {@link QRious} instance.
     *
     * @protected
     * @type {QRious}
     * @memberof Renderer#
     */
    this.qrious = qrious;
    /**
     * The element onto which this {@link Renderer} is rendering the QR code.
     *
     * @protected
     * @type {*}
     * @memberof Renderer#
     */

    this.element = element;
    this.element.qrious = qrious;
    /**
     * Whether this {@link Renderer} is enabled.
     *
     * @protected
     * @type {boolean}
     * @memberof Renderer#
     */

    this.enabled = Boolean(enabled);
  }, {
    /**
     * Draws the specified QR code <code>frame</code> on the underlying element.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @param {Frame} frame - the {@link Frame} to be drawn
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    draw: function (frame) {},

    /**
     * Returns the element onto which this {@link Renderer} is rendering the QR code.
     *
     * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
     * before the element is returned.
     *
     * @return {*} The element.
     * @public
     * @memberof Renderer#
     */
    getElement: function () {
      if (!this.enabled) {
        this.enabled = true;
        this.render();
      }

      return this.element;
    },

    /**
     * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
     * <code>frame</code> provided.
     *
     * Any configured padding will be excluded from the returned size.
     *
     * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
     * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
     * displayed instead of just a blank space filled by the background color.
     *
     * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
     * @return {number} The pixel size for each module in the QR code which will be no less than one.
     * @protected
     * @memberof Renderer#
     */
    getModuleSize: function (frame) {
      var qrious = this.qrious;
      var padding = qrious.padding || 0;
      var pixels = Math.floor((qrious.size - padding * 2) / frame.width);
      return Math.max(1, pixels);
    },

    /**
     * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
     * provided.
     *
     * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
     * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
     * and it is not clipped from all directions.
     *
     * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
     * @return {number} The pixel offset for the QR code which will be no less than zero.
     * @protected
     * @memberof Renderer#
     */
    getOffset: function (frame) {
      var qrious = this.qrious;
      var padding = qrious.padding;

      if (padding != null) {
        return padding;
      }

      var moduleSize = this.getModuleSize(frame);
      var offset = Math.floor((qrious.size - moduleSize * frame.width) / 2);
      return Math.max(0, offset);
    },

    /**
     * Renders a QR code on the underlying element based on the <code>frame</code> provided.
     *
     * @param {Frame} frame - the {@link Frame} to be rendered
     * @return {void}
     * @public
     * @memberof Renderer#
     */
    render: function (frame) {
      if (this.enabled) {
        this.resize();
        this.reset();
        this.draw(frame);
      }
    },

    /**
     * Resets the underlying element, effectively clearing any previously rendered QR code.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    reset: function () {},

    /**
     * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    resize: function () {}
  });
  var Renderer_1 = Renderer;
  /**
   * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
   *
   * @public
   * @class
   * @extends Renderer
   */

  var CanvasRenderer = Renderer_1.extend({
    /**
     * @override
     */
    draw: function (frame) {
      var i, j;
      var qrious = this.qrious;
      var moduleSize = this.getModuleSize(frame);
      var offset = this.getOffset(frame);
      var context = this.element.getContext('2d');
      context.fillStyle = qrious.foreground;
      context.globalAlpha = qrious.foregroundAlpha;

      for (i = 0; i < frame.width; i++) {
        for (j = 0; j < frame.width; j++) {
          if (frame.buffer[j * frame.width + i]) {
            context.fillRect(moduleSize * i + offset, moduleSize * j + offset, moduleSize, moduleSize);
          }
        }
      }
    },

    /**
     * @override
     */
    reset: function () {
      var qrious = this.qrious;
      var context = this.element.getContext('2d');
      var size = qrious.size;
      context.lineWidth = 1;
      context.clearRect(0, 0, size, size);
      context.fillStyle = qrious.background;
      context.globalAlpha = qrious.backgroundAlpha;
      context.fillRect(0, 0, size, size);
    },

    /**
     * @override
     */
    resize: function () {
      var element = this.element;
      element.width = element.height = this.qrious.size;
    }
  });
  var CanvasRenderer_1 = CanvasRenderer;
  /* eslint no-multi-spaces: "off" */

  /**
   * Contains alignment pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var Alignment = lite.extend(null, {
    /**
     * The alignment pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Alignment
     */
    BLOCK: [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]
  });
  var Alignment_1 = Alignment;
  /* eslint no-multi-spaces: "off" */

  /**
   * Contains error correction information.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var ErrorCorrection = lite.extend(null, {
    /**
     * The error correction blocks.
     *
     * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
     * the ECC width.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    BLOCKS: [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],

    /**
     * The final format bits with mask (level << 3 | mask).
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    FINAL_FORMAT: [// L
    0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976, // M
    0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0, // Q
    0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed, // H
    0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b],

    /**
     * A map of human-readable ECC levels.
     *
     * @public
     * @static
     * @type {Object.<string, number>}
     * @memberof ErrorCorrection
     */
    LEVELS: {
      L: 1,
      M: 2,
      Q: 3,
      H: 4
    }
  });
  var ErrorCorrection_1 = ErrorCorrection;
  /**
   * Contains Galois field information.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var Galois = lite.extend(null, {
    /**
     * The Galois field exponent table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    EXPONENT: [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00],

    /**
     * The Galois field log table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    LOG: [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf]
  });
  var Galois_1 = Galois;
  /**
   * Contains version pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var Version = lite.extend(null, {
    /**
     * The version pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Version
     */
    BLOCK: [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69]
  });
  var Version_1 = Version;
  /**
   * Generates information for a QR code frame based on a specific value to be encoded.
   *
   * @param {Frame~Options} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */

  var Frame = lite.extend(function (options) {
    var dataBlock, eccBlock, index, neccBlock1, neccBlock2;
    var valueLength = options.value.length;
    this._badness = [];
    this._level = ErrorCorrection_1.LEVELS[options.level];
    this._polynomial = [];
    this._value = options.value;
    this._version = 0;
    this._stringBuffer = [];

    while (this._version < 40) {
      this._version++;
      index = (this._level - 1) * 4 + (this._version - 1) * 16;
      neccBlock1 = ErrorCorrection_1.BLOCKS[index++];
      neccBlock2 = ErrorCorrection_1.BLOCKS[index++];
      dataBlock = ErrorCorrection_1.BLOCKS[index++];
      eccBlock = ErrorCorrection_1.BLOCKS[index];
      index = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);

      if (valueLength <= index) {
        break;
      }
    }

    this._dataBlock = dataBlock;
    this._eccBlock = eccBlock;
    this._neccBlock1 = neccBlock1;
    this._neccBlock2 = neccBlock2;
    /**
     * The data width is based on version.
     *
     * @public
     * @type {number}
     * @memberof Frame#
     */
    // FIXME: Ensure that it fits instead of being truncated.

    var width = this.width = 17 + 4 * this._version;
    /**
     * The image buffer.
     *
     * @public
     * @type {number[]}
     * @memberof Frame#
     */

    this.buffer = Frame._createArray(width * width);
    this._ecc = Frame._createArray(dataBlock + (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2);
    this._mask = Frame._createArray((width * (width + 1) + 1) / 2);

    this._insertFinders();

    this._insertAlignments(); // Insert single foreground cell.


    this.buffer[8 + width * (width - 8)] = 1;

    this._insertTimingGap();

    this._reverseMask();

    this._insertTimingRowAndColumn();

    this._insertVersion();

    this._syncMask();

    this._convertBitStream(valueLength);

    this._calculatePolynomial();

    this._appendEccToData();

    this._interleaveBlocks();

    this._pack();

    this._finish();
  }, {
    _addAlignment: function (x, y) {
      var i;
      var buffer = this.buffer;
      var width = this.width;
      buffer[x + width * y] = 1;

      for (i = -2; i < 2; i++) {
        buffer[x + i + width * (y - 2)] = 1;
        buffer[x - 2 + width * (y + i + 1)] = 1;
        buffer[x + 2 + width * (y + i)] = 1;
        buffer[x + i + 1 + width * (y + 2)] = 1;
      }

      for (i = 0; i < 2; i++) {
        this._setMask(x - 1, y + i);

        this._setMask(x + 1, y - i);

        this._setMask(x - i, y - 1);

        this._setMask(x + i, y + 1);
      }
    },
    _appendData: function (data, dataLength, ecc, eccLength) {
      var bit, i, j;
      var polynomial = this._polynomial;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < eccLength; i++) {
        stringBuffer[ecc + i] = 0;
      }

      for (i = 0; i < dataLength; i++) {
        bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];

        if (bit !== 255) {
          for (j = 1; j < eccLength; j++) {
            stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^ Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
          }
        } else {
          for (j = ecc; j < ecc + eccLength; j++) {
            stringBuffer[j] = stringBuffer[j + 1];
          }
        }

        stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
      }
    },
    _appendEccToData: function () {
      var i;
      var data = 0;
      var dataBlock = this._dataBlock;

      var ecc = this._calculateMaxLength();

      var eccBlock = this._eccBlock;

      for (i = 0; i < this._neccBlock1; i++) {
        this._appendData(data, dataBlock, ecc, eccBlock);

        data += dataBlock;
        ecc += eccBlock;
      }

      for (i = 0; i < this._neccBlock2; i++) {
        this._appendData(data, dataBlock + 1, ecc, eccBlock);

        data += dataBlock + 1;
        ecc += eccBlock;
      }
    },
    _applyMask: function (mask) {
      var r3x, r3y, x, y;
      var buffer = this.buffer;
      var width = this.width;

      switch (mask) {
        case 0:
          for (y = 0; y < width; y++) {
            for (x = 0; x < width; x++) {
              if (!(x + y & 1) && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 1:
          for (y = 0; y < width; y++) {
            for (x = 0; x < width; x++) {
              if (!(y & 1) && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 2:
          for (y = 0; y < width; y++) {
            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!r3x && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 3:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }

            for (r3x = r3y, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!r3x && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 4:
          for (y = 0; y < width; y++) {
            for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
                r3y = !r3y;
              }

              if (!r3y && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 5:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }

            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 6:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }

            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;

        case 7:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }

            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
                buffer[x + y * width] ^= 1;
              }
            }
          }

          break;
      }
    },
    _calculateMaxLength: function () {
      return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
    },
    _calculatePolynomial: function () {
      var i, j;
      var eccBlock = this._eccBlock;
      var polynomial = this._polynomial;
      polynomial[0] = 1;

      for (i = 0; i < eccBlock; i++) {
        polynomial[i + 1] = 1;

        for (j = i; j > 0; j--) {
          polynomial[j] = polynomial[j] ? polynomial[j - 1] ^ Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
        }

        polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
      } // Use logs for generator polynomial to save calculation step.


      for (i = 0; i <= eccBlock; i++) {
        polynomial[i] = Galois_1.LOG[polynomial[i]];
      }
    },
    _checkBadness: function () {
      var b, b1, h, x, y;
      var bad = 0;
      var badness = this._badness;
      var buffer = this.buffer;
      var width = this.width; // Blocks of same colour.

      for (y = 0; y < width - 1; y++) {
        for (x = 0; x < width - 1; x++) {
          // All foreground colour.
          if (buffer[x + width * y] && buffer[x + 1 + width * y] && buffer[x + width * (y + 1)] && buffer[x + 1 + width * (y + 1)] || // All background colour.
          !(buffer[x + width * y] || buffer[x + 1 + width * y] || buffer[x + width * (y + 1)] || buffer[x + 1 + width * (y + 1)])) {
            bad += Frame.N2;
          }
        }
      }

      var bw = 0; // X runs.

      for (y = 0; y < width; y++) {
        h = 0;
        badness[0] = 0;

        for (b = 0, x = 0; x < width; x++) {
          b1 = buffer[x + width * y];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
          bw += b ? 1 : -1;
        }

        bad += this._getBadness(h);
      }

      if (bw < 0) {
        bw = -bw;
      }

      var count = 0;
      var big = bw;
      big += big << 2;
      big <<= 1;

      while (big > width * width) {
        big -= width * width;
        count++;
      }

      bad += count * Frame.N4; // Y runs.

      for (x = 0; x < width; x++) {
        h = 0;
        badness[0] = 0;

        for (b = 0, y = 0; y < width; y++) {
          b1 = buffer[x + width * y];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
        }

        bad += this._getBadness(h);
      }

      return bad;
    },
    _convertBitStream: function (length) {
      var bit, i;
      var ecc = this._ecc;
      var version = this._version; // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).

      for (i = 0; i < length; i++) {
        ecc[i] = this._value.charCodeAt(i);
      }

      var stringBuffer = this._stringBuffer = ecc.slice();

      var maxLength = this._calculateMaxLength();

      if (length >= maxLength - 2) {
        length = maxLength - 2;

        if (version > 9) {
          length--;
        }
      } // Shift and re-pack to insert length prefix.


      var index = length;

      if (version > 9) {
        stringBuffer[index + 2] = 0;
        stringBuffer[index + 3] = 0;

        while (index--) {
          bit = stringBuffer[index];
          stringBuffer[index + 3] |= 255 & bit << 4;
          stringBuffer[index + 2] = bit >> 4;
        }

        stringBuffer[2] |= 255 & length << 4;
        stringBuffer[1] = length >> 4;
        stringBuffer[0] = 0x40 | length >> 12;
      } else {
        stringBuffer[index + 1] = 0;
        stringBuffer[index + 2] = 0;

        while (index--) {
          bit = stringBuffer[index];
          stringBuffer[index + 2] |= 255 & bit << 4;
          stringBuffer[index + 1] = bit >> 4;
        }

        stringBuffer[1] |= 255 & length << 4;
        stringBuffer[0] = 0x40 | length >> 4;
      } // Fill to end with pad pattern.


      index = length + 3 - (version < 10);

      while (index < maxLength) {
        stringBuffer[index++] = 0xec;
        stringBuffer[index++] = 0x11;
      }
    },
    _getBadness: function (length) {
      var i;
      var badRuns = 0;
      var badness = this._badness;

      for (i = 0; i <= length; i++) {
        if (badness[i] >= 5) {
          badRuns += Frame.N1 + badness[i] - 5;
        }
      } // FBFFFBF as in finder.


      for (i = 3; i < length - 1; i += 2) {
        if (badness[i - 2] === badness[i + 2] && badness[i + 2] === badness[i - 1] && badness[i - 1] === badness[i + 1] && badness[i - 1] * 3 === badness[i] && ( // Background around the foreground pattern? Not part of the specs.
        badness[i - 3] === 0 || i + 3 > length || badness[i - 3] * 3 >= badness[i] * 4 || badness[i + 3] * 3 >= badness[i] * 4)) {
          badRuns += Frame.N3;
        }
      }

      return badRuns;
    },
    _finish: function () {
      // Save pre-mask copy of frame.
      this._stringBuffer = this.buffer.slice();
      var currentMask, i;
      var bit = 0;
      var mask = 30000;
      /*
       * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
       * a better one since they get more complex and take longer.
       */

      for (i = 0; i < 8; i++) {
        // Returns foreground-background imbalance.
        this._applyMask(i);

        currentMask = this._checkBadness(); // Is current mask better than previous best?

        if (currentMask < mask) {
          mask = currentMask;
          bit = i;
        } // Don't increment "i" to a void redoing mask.


        if (bit === 7) {
          break;
        } // Reset for next pass.


        this.buffer = this._stringBuffer.slice();
      } // Redo best mask as none were "good enough" (i.e. last wasn't bit).


      if (bit !== i) {
        this._applyMask(bit);
      } // Add in final mask/ECC level bytes.


      mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];
      var buffer = this.buffer;
      var width = this.width; // Low byte.

      for (i = 0; i < 8; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[width - 1 - i + width * 8] = 1;

          if (i < 6) {
            buffer[8 + width * i] = 1;
          } else {
            buffer[8 + width * (i + 1)] = 1;
          }
        }
      } // High byte.


      for (i = 0; i < 7; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[8 + width * (width - 7 + i)] = 1;

          if (i) {
            buffer[6 - i + width * 8] = 1;
          } else {
            buffer[7 + width * 8] = 1;
          }
        }
      }
    },
    _interleaveBlocks: function () {
      var i, j;
      var dataBlock = this._dataBlock;
      var ecc = this._ecc;
      var eccBlock = this._eccBlock;
      var k = 0;

      var maxLength = this._calculateMaxLength();

      var neccBlock1 = this._neccBlock1;
      var neccBlock2 = this._neccBlock2;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < dataBlock; i++) {
        for (j = 0; j < neccBlock1; j++) {
          ecc[k++] = stringBuffer[i + j * dataBlock];
        }

        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
        }
      }

      for (j = 0; j < neccBlock2; j++) {
        ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
      }

      for (i = 0; i < eccBlock; i++) {
        for (j = 0; j < neccBlock1 + neccBlock2; j++) {
          ecc[k++] = stringBuffer[maxLength + i + j * eccBlock];
        }
      }

      this._stringBuffer = ecc;
    },
    _insertAlignments: function () {
      var i, x, y;
      var version = this._version;
      var width = this.width;

      if (version > 1) {
        i = Alignment_1.BLOCK[version];
        y = width - 7;

        for (;;) {
          x = width - 7;

          while (x > i - 3) {
            this._addAlignment(x, y);

            if (x < i) {
              break;
            }

            x -= i;
          }

          if (y <= i + 9) {
            break;
          }

          y -= i;

          this._addAlignment(6, y);

          this._addAlignment(y, 6);
        }
      }
    },
    _insertFinders: function () {
      var i, j, x, y;
      var buffer = this.buffer;
      var width = this.width;

      for (i = 0; i < 3; i++) {
        j = 0;
        y = 0;

        if (i === 1) {
          j = width - 7;
        }

        if (i === 2) {
          y = width - 7;
        }

        buffer[y + 3 + width * (j + 3)] = 1;

        for (x = 0; x < 6; x++) {
          buffer[y + x + width * j] = 1;
          buffer[y + width * (j + x + 1)] = 1;
          buffer[y + 6 + width * (j + x)] = 1;
          buffer[y + x + 1 + width * (j + 6)] = 1;
        }

        for (x = 1; x < 5; x++) {
          this._setMask(y + x, j + 1);

          this._setMask(y + 1, j + x + 1);

          this._setMask(y + 5, j + x);

          this._setMask(y + x + 1, j + 5);
        }

        for (x = 2; x < 4; x++) {
          buffer[y + x + width * (j + 2)] = 1;
          buffer[y + 2 + width * (j + x + 1)] = 1;
          buffer[y + 4 + width * (j + x)] = 1;
          buffer[y + x + 1 + width * (j + 4)] = 1;
        }
      }
    },
    _insertTimingGap: function () {
      var x, y;
      var width = this.width;

      for (y = 0; y < 7; y++) {
        this._setMask(7, y);

        this._setMask(width - 8, y);

        this._setMask(7, y + width - 7);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x, 7);

        this._setMask(x + width - 8, 7);

        this._setMask(x, width - 8);
      }
    },
    _insertTimingRowAndColumn: function () {
      var x;
      var buffer = this.buffer;
      var width = this.width;

      for (x = 0; x < width - 14; x++) {
        if (x & 1) {
          this._setMask(8 + x, 6);

          this._setMask(6, 8 + x);
        } else {
          buffer[8 + x + width * 6] = 1;
          buffer[6 + width * (8 + x)] = 1;
        }
      }
    },
    _insertVersion: function () {
      var i, j, x, y;
      var buffer = this.buffer;
      var version = this._version;
      var width = this.width;

      if (version > 6) {
        i = Version_1.BLOCK[version - 7];
        j = 17;

        for (x = 0; x < 6; x++) {
          for (y = 0; y < 3; y++, j--) {
            if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
              buffer[5 - x + width * (2 - y + width - 11)] = 1;
              buffer[2 - y + width - 11 + width * (5 - x)] = 1;
            } else {
              this._setMask(5 - x, 2 - y + width - 11);

              this._setMask(2 - y + width - 11, 5 - x);
            }
          }
        }
      }
    },
    _isMasked: function (x, y) {
      var bit = Frame._getMaskBit(x, y);

      return this._mask[bit] === 1;
    },
    _pack: function () {
      var bit, i, j;
      var k = 1;
      var v = 1;
      var width = this.width;
      var x = width - 1;
      var y = width - 1; // Interleaved data and ECC codes.

      var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;

      for (i = 0; i < length; i++) {
        bit = this._stringBuffer[i];

        for (j = 0; j < 8; j++, bit <<= 1) {
          if (0x80 & bit) {
            this.buffer[x + width * y] = 1;
          } // Find next fill position.


          do {
            if (v) {
              x--;
            } else {
              x++;

              if (k) {
                if (y !== 0) {
                  y--;
                } else {
                  x -= 2;
                  k = !k;

                  if (x === 6) {
                    x--;
                    y = 9;
                  }
                }
              } else if (y !== width - 1) {
                y++;
              } else {
                x -= 2;
                k = !k;

                if (x === 6) {
                  x--;
                  y -= 8;
                }
              }
            }

            v = !v;
          } while (this._isMasked(x, y));
        }
      }
    },
    _reverseMask: function () {
      var x, y;
      var width = this.width;

      for (x = 0; x < 9; x++) {
        this._setMask(x, 8);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x + width - 8, 8);

        this._setMask(8, x);
      }

      for (y = 0; y < 7; y++) {
        this._setMask(8, y + width - 7);
      }
    },
    _setMask: function (x, y) {
      var bit = Frame._getMaskBit(x, y);

      this._mask[bit] = 1;
    },
    _syncMask: function () {
      var x, y;
      var width = this.width;

      for (y = 0; y < width; y++) {
        for (x = 0; x <= y; x++) {
          if (this.buffer[x + width * y]) {
            this._setMask(x, y);
          }
        }
      }
    }
  }, {
    _createArray: function (length) {
      var i;
      var array = [];

      for (i = 0; i < length; i++) {
        array[i] = 0;
      }

      return array;
    },
    _getMaskBit: function (x, y) {
      var bit;

      if (x > y) {
        bit = x;
        x = y;
        y = bit;
      }

      bit = y;
      bit += y * y;
      bit >>= 1;
      bit += x;
      return bit;
    },
    _modN: function (x) {
      while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
      }

      return x;
    },
    // *Badness* coefficients.
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  });
  var Frame_1 = Frame;
  /**
   * The options used by {@link Frame}.
   *
   * @typedef {Object} Frame~Options
   * @property {string} level - The ECC level to be used.
   * @property {string} value - The value to be encoded.
   */

  /**
   * An implementation of {@link Renderer} for working with <code>img</code> elements.
   *
   * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
   * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
   *
   * @public
   * @class
   * @extends Renderer
   */

  var ImageRenderer = Renderer_1.extend({
    /**
     * @override
     */
    draw: function () {
      this.element.src = this.qrious.toDataURL();
    },

    /**
     * @override
     */
    reset: function () {
      this.element.src = '';
    },

    /**
     * @override
     */
    resize: function () {
      var element = this.element;
      element.width = element.height = this.qrious.size;
    }
  });
  var ImageRenderer_1 = ImageRenderer;
  /**
   * Defines an available option while also configuring how values are applied to the target object.
   *
   * Optionally, a default value can be specified as well a value transformer for greater control over how the option
   * value is applied.
   *
   * If no value transformer is specified, then any specified option will be applied directly. All values are maintained
   * on the target object itself as a field using the option name prefixed with a single underscore.
   *
   * When an option is specified as modifiable, the {@link OptionManager} will be required to include a setter for the
   * property that is defined on the target object that uses the option name.
   *
   * @param {string} name - the name to be used
   * @param {boolean} [modifiable] - <code>true</code> if the property defined on target objects should include a setter;
   * otherwise <code>false</code>
   * @param {*} [defaultValue] - the default value to be used
   * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
   * @public
   * @class
   * @extends Nevis
   */

  var Option = lite.extend(function (name, modifiable, defaultValue, valueTransformer) {
    /**
     * The name for this {@link Option}.
     *
     * @public
     * @type {string}
     * @memberof Option#
     */
    this.name = name;
    /**
     * Whether a setter should be included on the property defined on target objects for this {@link Option}.
     *
     * @public
     * @type {boolean}
     * @memberof Option#
     */

    this.modifiable = Boolean(modifiable);
    /**
     * The default value for this {@link Option}.
     *
     * @public
     * @type {*}
     * @memberof Option#
     */

    this.defaultValue = defaultValue;
    this._valueTransformer = valueTransformer;
  }, {
    /**
     * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
     *
     * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
     * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
     *
     * @param {*} value - the value to be transformed
     * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
     * @public
     * @memberof Option#
     */
    transform: function (value) {
      var transformer = this._valueTransformer;

      if (typeof transformer === 'function') {
        return transformer(value, this);
      }

      return value;
    }
  });
  var Option_1 = Option;
  /**
   * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
   *
   * @callback Option~ValueTransformer
   * @param {*} value - the value to be transformed
   * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
   * @return {*} The transform value.
   */

  /**
   * Contains utility methods that are useful throughout the library.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var Utilities = lite.extend(null, {
    /**
     * Returns the absolute value of a given number.
     *
     * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
     * <code>null</code> instead of zero.
     *
     * @param {number} value - the number whose absolute value is to be returned
     * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
     * <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    abs: function (value) {
      return value != null ? Math.abs(value) : null;
    },

    /**
     * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
     * (not inherited) property.
     *
     * @param {Object} object - the object on which the property is to be checked
     * @param {string} name - the name of the property to be checked
     * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    hasOwn: function (object, name) {
      return Object.prototype.hasOwnProperty.call(object, name);
    },

    /**
     * A non-operation method that does absolutely nothing.
     *
     * @return {void}
     * @public
     * @static
     * @memberof Utilities
     */
    noop: function () {},

    /**
     * Transforms the specified <code>string</code> to upper case while remaining null-safe.
     *
     * @param {string} string - the string to be transformed to upper case
     * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    toUpperCase: function (string) {
      return string != null ? string.toUpperCase() : null;
    }
  });
  var Utilities_1 = Utilities;
  /**
   * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
   *
   * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
   *
   * @param {Option[]} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */

  var OptionManager = lite.extend(function (options) {
    /**
     * The available options for this {@link OptionManager}.
     *
     * @public
     * @type {Object.<string, Option>}
     * @memberof OptionManager#
     */
    this.options = {};
    options.forEach(function (option) {
      this.options[option.name] = option;
    }, this);
  }, {
    /**
     * Returns whether an option with the specified <code>name</code> is available.
     *
     * @param {string} name - the name of the {@link Option} whose existence is to be checked
     * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
     * <code>false</code>.
     * @public
     * @memberof OptionManager#
     */
    exists: function (name) {
      return this.options[name] != null;
    },

    /**
     * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
     *
     * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
     * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
     * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    get: function (name, target) {
      return OptionManager._get(this.options[name], target);
    },

    /**
     * Returns a copy of all of the available options on the <code>target</code> object provided.
     *
     * @param {Object} target - the object from which the option name/value pairs are to be returned
     * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    getAll: function (target) {
      var name;
      var options = this.options;
      var result = {};

      for (name in options) {
        if (Utilities_1.hasOwn(options, name)) {
          result[name] = OptionManager._get(options[name], target);
        }
      }

      return result;
    },

    /**
     * Initializes the available options for the <code>target</code> object provided and then applies the initial values
     * within the speciifed <code>options</code>.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option.
     *
     * This involves setting the default values and defining properties for all of the available options on
     * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
     * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
     * property that will allow its corresponding value to be modified.
     *
     * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
     * modifiable option, but only when done so via the defined property's setter.
     *
     * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
     * @param {Object} target - the object on which the options are to be initialized
     * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
     * <code>target</code>
     * @return {void}
     * @throws {Error} If <code>options</code> contains an invalid option name.
     * @public
     * @memberof OptionManager#
     */
    init: function (options, target, changeHandler) {
      if (typeof changeHandler !== 'function') {
        changeHandler = Utilities_1.noop;
      }

      var name, option;

      for (name in this.options) {
        if (Utilities_1.hasOwn(this.options, name)) {
          option = this.options[name];

          OptionManager._set(option, option.defaultValue, target);

          OptionManager._createAccessor(option, target, changeHandler);
        }
      }

      this._setAll(options, target, true);
    },

    /**
     * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
     * <code>value</code>.
     *
     * This method will throw an error if <code>name</code> does not match an available option or matches an option that
     * cannot be modified.
     *
     * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
     * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
     * transform whichever value was determined to be used.
     *
     * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
     *
     * @param {string} name - the name of the {@link Option} whose value is to be set
     * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
     * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
     * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
     * @public
     * @memberof OptionManager#
     */
    set: function (name, value, target) {
      return this._set(name, value, target);
    },

    /**
     * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
     * values.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option
     * or matches an option that cannot be modified.
     *
     * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
     * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
     * configured, it will be used to transform whichever value was determined to be used.
     *
     * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
     * result.
     *
     * @param {Object.<string, *>} options - the name/value pairs of options to be set
     * @param {Object} target - the object on which the options are to be set
     * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
     * @public
     * @memberof OptionManager#
     */
    setAll: function (options, target) {
      return this._setAll(options, target);
    },
    _set: function (name, value, target, allowUnmodifiable) {
      var option = this.options[name];

      if (!option) {
        throw new Error('Invalid option: ' + name);
      }

      if (!option.modifiable && !allowUnmodifiable) {
        throw new Error('Option cannot be modified: ' + name);
      }

      return OptionManager._set(option, value, target);
    },
    _setAll: function (options, target, allowUnmodifiable) {
      if (!options) {
        return false;
      }

      var name;
      var changed = false;

      for (name in options) {
        if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
          changed = true;
        }
      }

      return changed;
    }
  }, {
    _createAccessor: function (option, target, changeHandler) {
      var descriptor = {
        get: function () {
          return OptionManager._get(option, target);
        }
      };

      if (option.modifiable) {
        descriptor.set = function (value) {
          if (OptionManager._set(option, value, target)) {
            changeHandler(value, option);
          }
        };
      }

      Object.defineProperty(target, option.name, descriptor);
    },
    _get: function (option, target) {
      return target['_' + option.name];
    },
    _set: function (option, value, target) {
      var fieldName = '_' + option.name;
      var oldValue = target[fieldName];
      var newValue = option.transform(value != null ? value : option.defaultValue);
      target[fieldName] = newValue;
      return newValue !== oldValue;
    }
  });
  var OptionManager_1 = OptionManager;
  /**
   * Called whenever the value of a modifiable {@link Option} is changed on a target object via the defined property's
   * setter.
   *
   * @callback OptionManager~ChangeHandler
   * @param {*} value - the new value for <code>option</code> on the target object
   * @param {Option} option - the modifable {@link Option} whose value has changed on the target object.
   * @return {void}
   */

  /**
   * A basic manager for {@link Service} implementations that are mapped to simple names.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var ServiceManager = lite.extend(function () {
    this._services = {};
  }, {
    /**
     * Returns the {@link Service} being managed with the specified <code>name</code>.
     *
     * @param {string} name - the name of the {@link Service} to be returned
     * @return {Service} The {@link Service} is being managed with <code>name</code>.
     * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    getService: function (name) {
      var service = this._services[name];

      if (!service) {
        throw new Error('Service is not being managed with name: ' + name);
      }

      return service;
    },

    /**
     * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
     * <code>service</code> provided.
     *
     * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
     * @param {Service} service - the {@link Service} implementation to be managed
     * @return {void}
     * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    setService: function (name, service) {
      if (this._services[name]) {
        throw new Error('Service is already managed with name: ' + name);
      }

      if (service) {
        this._services[name] = service;
      }
    }
  });
  var ServiceManager_1 = ServiceManager;
  var optionManager = new OptionManager_1([new Option_1('background', true, 'white'), new Option_1('backgroundAlpha', true, 1, Utilities_1.abs), new Option_1('element'), new Option_1('foreground', true, 'black'), new Option_1('foregroundAlpha', true, 1, Utilities_1.abs), new Option_1('level', true, 'L', Utilities_1.toUpperCase), new Option_1('mime', true, 'image/png'), new Option_1('padding', true, null, Utilities_1.abs), new Option_1('size', true, 100, Utilities_1.abs), new Option_1('value', true, '')]);
  var serviceManager = new ServiceManager_1();
  /**
   * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
   *
   * @param {QRious~Options} [options] - the options to be used
   * @throws {Error} If any <code>options</code> are invalid.
   * @public
   * @class
   * @extends Nevis
   */

  var QRious = lite.extend(function (options) {
    optionManager.init(options, this, this.update.bind(this));
    var element = optionManager.get('element', this);
    var elementService = serviceManager.getService('element');
    var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
    var image = element && elementService.isImage(element) ? element : elementService.createImage();
    this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
    this._imageRenderer = new ImageRenderer_1(this, image, image === element);
    this.update();
  }, {
    /**
     * Returns all of the options configured for this {@link QRious}.
     *
     * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
     * underlying fields.
     *
     * @return {Object.<string, *>} A copy of the applied options.
     * @public
     * @memberof QRious#
     */
    get: function () {
      return optionManager.getAll(this);
    },

    /**
     * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
     * underlying fields are changed as a result.
     *
     * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
     * changes.
     *
     * @param {QRious~Options} options - the options to be set
     * @return {void}
     * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
     * @public
     * @memberof QRious#
     */
    set: function (options) {
      if (optionManager.setAll(options, this)) {
        this.update();
      }
    },

    /**
     * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
     *
     * @param {string} [mime] - the MIME type for the image
     * @return {string} The image data URI for the QR code.
     * @public
     * @memberof QRious#
     */
    toDataURL: function (mime) {
      return this.canvas.toDataURL(mime || this.mime);
    },

    /**
     * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
     *
     * @return {void}
     * @protected
     * @memberof QRious#
     */
    update: function () {
      var frame = new Frame_1({
        level: this.level,
        value: this.value
      });

      this._canvasRenderer.render(frame);

      this._imageRenderer.render(frame);
    }
  }, {
    /**
     * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
     *
     * @param {Service} service - the {@link Service} to be configured
     * @return {void}
     * @throws {Error} If a {@link Service} has already been configured with the same name.
     * @public
     * @static
     * @memberof QRious
     */
    use: function (service) {
      serviceManager.setService(service.getName(), service);
    }
  });
  Object.defineProperties(QRious.prototype, {
    canvas: {
      /**
       * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>canvas</code> element.
       * @public
       * @memberof QRious#
       * @alias canvas
       */
      get: function () {
        return this._canvasRenderer.getElement();
      }
    },
    image: {
      /**
       * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>img</code> element.
       * @public
       * @memberof QRious#
       * @alias image
       */
      get: function () {
        return this._imageRenderer.getElement();
      }
    }
  });
  var QRious_1$2 = QRious;
  /**
   * The options used by {@link QRious}.
   *
   * @typedef {Object} QRious~Options
   * @property {string} [background="white"] - The background color to be applied to the QR code.
   * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
   * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
   * <code>img</code>. The element(s) will be created if needed.
   * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
   * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
   * @property {string} [level="L"] - The error correction level to be applied to the QR code.
   * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
   * @property {number} [padding] - The padding for the QR code in pixels.
   * @property {number} [size=100] - The size of the QR code in pixels.
   * @property {string} [value=""] - The value to be encoded within the QR code.
   */

  var index = QRious_1$2;
  /**
   * Defines a service contract that must be met by all implementations.
   *
   * @public
   * @class
   * @extends Nevis
   */

  var Service = lite.extend({
    /**
     * Returns the name of this {@link Service}.
     *
     * @return {string} The service name.
     * @public
     * @abstract
     * @memberof Service#
     */
    getName: function () {}
  });
  var Service_1 = Service;
  /**
   * A service for working with elements.
   *
   * @public
   * @class
   * @extends Service
   */

  var ElementService = Service_1.extend({
    /**
     * Creates an instance of a canvas element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created canvas element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createCanvas: function () {},

    /**
     * Creates an instance of a image element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created image element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createImage: function () {},

    /**
     * @override
     */
    getName: function () {
      return 'element';
    },

    /**
     * Returns whether the specified <code>element</code> is a canvas.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isCanvas: function (element) {},

    /**
     * Returns whether the specified <code>element</code> is an image.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isImage: function (element) {}
  });
  var ElementService_1 = ElementService;
  /**
   * An implementation of {@link ElementService} intended for use within a browser environment.
   *
   * @public
   * @class
   * @extends ElementService
   */

  var BrowserElementService = ElementService_1.extend({
    /**
     * @override
     */
    createCanvas: function () {
      return document.createElement('canvas');
    },

    /**
     * @override
     */
    createImage: function () {
      return document.createElement('img');
    },

    /**
     * @override
     */
    isCanvas: function (element) {
      return element instanceof HTMLCanvasElement;
    },

    /**
     * @override
     */
    isImage: function (element) {
      return element instanceof HTMLImageElement;
    }
  });
  var BrowserElementService_1 = BrowserElementService;
  index.use(new BrowserElementService_1());
  var QRious_1 = index;
  return QRious_1;
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_other-login_login1_login1_module_ts.js.map