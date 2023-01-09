(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_layout_default_default_module_ts"],{

/***/ 21181:
/*!********************************************************!*\
  !*** ./src/app/core/services/common/driver.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverService": () => (/* binding */ DriverService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver.js */ 75124);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



/*
 * https://madewith.cn/766
 * 引导页
 * */
class DriverService {
    constructor(doc) {
        this.doc = doc;
    }
    load() {
        setTimeout(() => {
            const driver = new (driver_js__WEBPACK_IMPORTED_MODULE_0___default())({
                animate: false,
                allowClose: true,
                doneBtnText: 'Kết thúc',
                closeBtnText: 'Khép kín',
                nextBtnText: 'Bước tiếp theo',
                prevBtnText: 'Trước',
                onHighlightStarted: () => {
                    this.doc.body.style.cssText = 'overflow:hidden';
                },
                onReset: () => {
                    this.doc.body.style.cssText = '';
                }
            });
            driver.defineSteps([
                {
                    element: '#menuNav',
                    popover: {
                        title: 'Menu',
                        description: 'Đây là menu',
                        position: 'right-center'
                    }
                },
                {
                    element: '#drawer-handle',
                    popover: {
                        title: 'Nút cài đặt chủ đề',
                        description: 'Nhấp để mở rộng chủ đề, bạn có thể kéo nó lên và xuống',
                        position: 'left'
                    }
                },
                {
                    element: '#tools',
                    popover: {
                        title: 'Thanh công cụ',
                        description: 'Màn hình khóa, Menu tìm kiếm, Toàn màn hình, Tin nhắn thông báo, Đăng xuất, Đa ngôn ngữ',
                        position: 'bottom'
                    }
                },
                {
                    element: '#chats',
                    popover: {
                        title: 'Liên hệ với quản trị viên',
                        description: 'Liên hệ với quản trị viên',
                        position: 'top'
                    }
                },
                {
                    element: '#trigger',
                    popover: {
                        title: 'Thu gọn menu',
                        description: 'thu gọn menu',
                        position: 'bottom'
                    }
                },
                {
                    element: '#multi-tab',
                    popover: {
                        title: 'Nhiều nhãn',
                        description: 'Nhấp chuột phải vào một tab để mở rộng nhiều tùy chọn và cuộn con lăn chuột để cuộn các tab sau khi vượt ra ngoài màn hình.',
                        position: 'bottom'
                    }
                },
                {
                    element: '#multi-tab2',
                    popover: {
                        title: 'nhiều nhãn',
                        description: 'Nhấp chuột phải vào một tab để mở rộng nhiều tùy chọn và cuộn con lăn chuột để cuộn các tab sau khi vượt ra ngoài màn hình.',
                        position: 'bottom'
                    }
                }
            ]);
            driver.start();
        }, 500);
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
DriverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75601:
/*!**************************************************************!*\
  !*** ./src/app/core/services/common/guard/judgAuth.guard.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgAuthGuard": () => (/* binding */ JudgAuthGuard)
/* harmony export */ });
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window.service */ 67927);
/* harmony import */ var _core_services_common_login_in_out_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common/login-in-out.service */ 36648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/common-store/userInfo.service */ 43971);
/* harmony import */ var _store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/common-store/menu-store.service */ 15592);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);









// 用于切换路由时判断该用户是否有权限进入该业务页面，如果没有权限则跳转到登录页
class JudgAuthGuard {
    constructor(windowSrc, loginOutService, router, userInfoService, menuStoreService, message) {
        this.windowSrc = windowSrc;
        this.loginOutService = loginOutService;
        this.router = router;
        this.userInfoService = userInfoService;
        this.menuStoreService = menuStoreService;
        this.message = message;
        this.authCodeArray = [];
        this.menuNavList = [];
        this.menuStoreService.getMenuArrayStore().subscribe(res => {
            this.menuNavList = res;
        });
    }
    getMenu(menu, url) {
        for (let i = 0; i < menu.length; i++) {
            if (url === menu[i].path) {
                this.selMenu = menu[i];
                return;
            }
            else {
                if (menu[i].children && menu[i].children.length > 0) {
                    this.getMenu(menu[i].children, url);
                }
            }
        }
    }
    getResult(code, authCodeArray) {
        if (authCodeArray.includes(code)) {
            return true;
        }
        else {
            this.message.error('Bạn không có quyền đăng nhập vào mô-đun này');
            this.loginOutService.loginOut();
            return this.router.parseUrl('/login');
        }
    }
    canActivateChild(route, state) {
        this.userInfoService.getUserInfo().subscribe(res => (this.authCodeArray = res.authCode));
        // 如果有authCode，则表示是页面上点击按钮跳转到新的路由，而不是菜单中的路由
        while (route.firstChild) {
            route = route.firstChild;
        }
        console.log(route.data['authCode']);
        if (!!route.data['authCode']) {
            return this.getResult(route.data['authCode'], this.authCodeArray);
        }
        // 如果是菜单上的按钮，则走下面
        this.getMenu(this.menuNavList, state.url);
        // 没找到菜单，直接回登录页
        if (!this.selMenu) {
            return this.getResult((0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnGetUUID)(), this.authCodeArray);
        }
        const selMenuCode = this.selMenu.code;
        this.selMenu = null;
        // 找到了菜单，但是菜单的权限码用户不拥有，则跳转到登录页
        return this.getResult(selMenuCode, this.authCodeArray);
    }
}
JudgAuthGuard.ɵfac = function JudgAuthGuard_Factory(t) { return new (t || JudgAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_window_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_common_login_in_out_service__WEBPACK_IMPORTED_MODULE_2__.LoginInOutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_3__.UserInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_4__.MenuStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService)); };
JudgAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: JudgAuthGuard, factory: JudgAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44907:
/*!***************************************************************!*\
  !*** ./src/app/core/services/common/guard/judgLogin.guard.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgLoginGuard": () => (/* binding */ JudgLoginGuard)
/* harmony export */ });
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/constant */ 70018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window.service */ 67927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);





// 路由守卫，没有TokenKey则跳转登录页
class JudgLoginGuard {
    constructor(windowSrc, router) {
        this.windowSrc = windowSrc;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        const isLogin = !!this.windowSrc.getSessionStorage(_config_constant__WEBPACK_IMPORTED_MODULE_0__.TokenKey);
        if (isLogin) {
            return true;
        }
        return this.router.parseUrl('/login');
    }
}
JudgLoginGuard.ɵfac = function JudgLoginGuard_Factory(t) { return new (t || JudgLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_window_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
JudgLoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JudgLoginGuard, factory: JudgLoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6293:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/default/def-layout-content/def-layout-content.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefLayoutContentComponent": () => (/* binding */ DefLayoutContentComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/common-store/split-nav-store.service */ 3574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/chat/chat.component */ 60019);
/* harmony import */ var _shared_components_top_progress_bar_top_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/top-progress-bar/top-progress-bar.component */ 84088);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 88873);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setting-drawer/setting-drawer.component */ 45718);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 36982);
















function DefLayoutContentComponent_nz_sider_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-sider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, ctx_r0.themesOptions$).theme)("nzWidth", 208)("nzCollapsedWidth", 48)("nzCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 6, ctx_r0.isCollapsed$));
  }
}

function DefLayoutContentComponent_nz_sider_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-sider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzCollapsedChange", function DefLayoutContentComponent_nz_sider_6_Template_nz_sider_nzCollapsedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.changeCollapsed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("left-nav-fixed", ctx_r1.isFixedLeftNav);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzWidth", 208)("nzCollapsedWidth", 48)("nzTheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 8, ctx_r1.themesOptions$).theme)("nzCollapsible", true)("nzCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 10, ctx_r1.isCollapsed$))("nzTrigger", _r9);
  }
}

function DefLayoutContentComponent_nz_header_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1, a2, a3) {
  return {
    "full-with": a0,
    fixed: a1,
    "fixed-collapsed": a2,
    "fixed-over-mode": a3
  };
};

function DefLayoutContentComponent_nz_header_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](5, _c0, !ctx_r3.themesOptions.hasNavArea, ctx_r3.themesOptions.fixedHead, ctx_r3.themesOptions.fixedHead && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r3.isCollapsed$), ctx_r3.themesOptions.fixedHead && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r3.isOverMode$)));
  }
}

const _c1 = function (a0, a1) {
  return {
    "dark-top-nav-bg": a0,
    "top-fixed": a1
  };
};

function DefLayoutContentComponent_nz_header_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r4.themesOptions$).theme === "dark", ctx_r4.themesOptions.fixedHead));
  }
}

function DefLayoutContentComponent_nz_sider_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-sider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzWidth", 208)("nzTheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, ctx_r5.isNightTheme$) ? "dark" : "light")("nzCollapsedWidth", 48)("nzCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 6, ctx_r5.isCollapsed$));
  }
}

function DefLayoutContentComponent_nz_sider_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-sider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzCollapsedChange", function DefLayoutContentComponent_nz_sider_17_Template_nz_sider_nzCollapsedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.changeCollapsed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mixi-left-nav-fixed", ctx_r6.isFixedLeftNav)("t-0", !ctx_r6.themesOptions.hasTopArea);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 10, ctx_r6.isNightTheme$) ? "dark" : "light")("nzWidth", 208)("nzCollapsedWidth", 48)("nzCollapsible", true)("nzCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 12, ctx_r6.isCollapsed$))("nzTrigger", _r9);
  }
}

function DefLayoutContentComponent_nz_footer_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ant Design \u00A92022 Implement By Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DefLayoutContentComponent_app_chat_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-chat", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeShows", function DefLayoutContentComponent_app_chat_25_Template_app_chat_changeShows_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.showChats = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c2 = function (a0) {
  return {
    "border-top-color": a0
  };
};

function DefLayoutContentComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTheme", ctx_r10.isMixiMode && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx_r10.isOverMode$) === false ? "light" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 7, ctx_r10.themesOptions$).theme)("nzSelectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c2, (!ctx_r10.isMixiMode && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 9, ctx_r10.themesOptions$)) == null ? null : tmp_2_0.theme)) === "dark" || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 11, ctx_r10.isNightTheme$) ? "rgba(0,0,0,0.25)" : "rgb(240,240,240)"))("nzPaddingLeft", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 13, ctx_r10.isCollapsed$) ? "menu-unfold" : "menu-fold");
  }
}

const _c3 = ["*", [["ng-container", "sider", ""]], [["ng-container", "mixheader", ""]], [["ng-container", "sider-header", ""]], [["ng-container", "top-header", ""]], [["ng-container", "mixsider", ""]]];

const _c4 = function (a0) {
  return {
    marginTop: a0
  };
};

const _c5 = ["*", "ng-container[sider]", "ng-container[mixheader]", "ng-container[sider-header]", "ng-container[top-header]", "ng-container[mixsider]"];
class DefLayoutContentComponent {
  constructor(destroy$, themesService, splitNavStoreService) {
    this.destroy$ = destroy$;
    this.themesService = themesService;
    this.splitNavStoreService = splitNavStoreService;
    this.showChats = true;
    this.isNightTheme$ = this.themesService.getIsNightTheme();
    this.themesOptions$ = this.themesService.getThemesMode();
    this.isMixiMode = false;
    this.themesOptions = {
      theme: 'dark',
      color: '',
      mode: 'side',
      fixedWidth: false,
      splitNav: false,
      fixedTab: false,
      colorWeak: false,
      fixedHead: false,
      fixedLeftNav: false,
      hasTopArea: true,
      hasFooterArea: true,
      hasNavArea: true,
      hasNavHeadArea: true
    };
    this.isFixedLeftNav = false;
    this.isOverMode$ = this.themesService.getIsOverMode();
    this.isCollapsed$ = this.themesService.getIsCollapsed();
    this.mixiModeHasLeftNav = this.splitNavStoreService.getSplitLeftNavArrayStore();
    this.contentMarginTop = '48px';
  }

  changeCollapsed(isCollapsed) {
    this.themesService.setIsCollapsed(isCollapsed);
  }

  getThemeOptions() {
    this.themesOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
      this.themesOptions = res;
      this.isMixiMode = res.mode === 'mixi';
      this.isFixedLeftNav = this.themesOptions.fixedLeftNav;

      if (this.themesOptions.fixedHead && !this.isMixiMode && this.themesOptions.hasTopArea) {
        this.contentMarginTop = this.themesOptions.fixedTab ? '96px' : '48px';
      } else {
        this.contentMarginTop = this.themesOptions.fixedTab ? '48px' : '0px';
      }
    });
  }

  ngOnInit() {
    this.getThemeOptions();
  }

}

DefLayoutContentComponent.ɵfac = function DefLayoutContentComponent_Factory(t) {
  return new (t || DefLayoutContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_2__.SplitNavStoreService));
};

DefLayoutContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DefLayoutContentComponent,
  selectors: [["app-def-layout-content"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])],
  ngContentSelectors: _c5,
  decls: 28,
  vars: 36,
  consts: [[1, "min-screen-full-height"], ["nzBreakpoint", "lg", 3, "nzTheme", "nzWidth", "nzCollapsedWidth", "nzCollapsed", 4, "ngIf"], ["id", "menuNav", "class", "menu-sidebar", "nzBreakpoint", "lg", 3, "left-nav-fixed", "nzWidth", "nzCollapsedWidth", "nzTheme", "nzCollapsible", "nzCollapsed", "nzTrigger", "nzCollapsedChange", 4, "ngIf"], ["class", "animate-02 dark-top-nav-bg top-fixed screen-full-width", 4, "ngIf"], ["style", "transition: width 0.2s", 3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["nzNoAnimation", "", "nzBreakpoint", "lg", 3, "nzWidth", "nzTheme", "nzCollapsedWidth", "nzCollapsed", 4, "ngIf"], ["class", "menu-sidebar", "nzNoAnimation", "", "nzBreakpoint", "lg", 3, "mixi-left-nav-fixed", "t-0", "nzTheme", "nzWidth", "nzCollapsedWidth", "nzCollapsible", "nzCollapsed", "nzTrigger", "nzCollapsedChange", 4, "ngIf"], [3, "ngStyle"], ["class", "text-center", 4, "ngIf"], [3, "changeShows", 4, "ngIf"], ["trigger", ""], ["nzBreakpoint", "lg", 3, "nzTheme", "nzWidth", "nzCollapsedWidth", "nzCollapsed"], ["id", "menuNav", "nzBreakpoint", "lg", 1, "menu-sidebar", 3, "nzWidth", "nzCollapsedWidth", "nzTheme", "nzCollapsible", "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "animate-02", "dark-top-nav-bg", "top-fixed", "screen-full-width"], [2, "transition", "width 0.2s", 3, "ngClass"], [3, "ngClass"], ["nzNoAnimation", "", "nzBreakpoint", "lg", 3, "nzWidth", "nzTheme", "nzCollapsedWidth", "nzCollapsed"], ["nzNoAnimation", "", "nzBreakpoint", "lg", 1, "menu-sidebar", 3, "nzTheme", "nzWidth", "nzCollapsedWidth", "nzCollapsible", "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "text-center"], [3, "changeShows"], ["nz-menu", "", "nzMode", "inline", 3, "nzTheme", "nzSelectable"], ["nz-menu-item", "", 1, "trigger-top-border", "m-0", 3, "ngStyle", "nzPaddingLeft"], ["nz-icon", "", 1, "sp-16", 3, "nzType"]],
  template: function DefLayoutContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-top-progress-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nz-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DefLayoutContentComponent_nz_sider_2_Template, 3, 8, "nz-sider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DefLayoutContentComponent_nz_sider_6_Template, 4, 12, "nz-sider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DefLayoutContentComponent_nz_header_10_Template, 2, 0, "nz-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nz-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DefLayoutContentComponent_nz_header_12_Template, 4, 10, "nz-header", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DefLayoutContentComponent_nz_header_13_Template, 3, 6, "nz-header", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DefLayoutContentComponent_nz_sider_14_Template, 3, 8, "nz-sider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DefLayoutContentComponent_nz_sider_17_Template, 4, 14, "nz-sider", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "nz-layout")(21, "nz-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DefLayoutContentComponent_nz_footer_23_Template, 2, 0, "nz-footer", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "app-setting-drawer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DefLayoutContentComponent_app_chat_25_Template, 1, 0, "app-chat", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, DefLayoutContentComponent_ng_template_26_Template, 8, 17, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isMixiMode && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 12, ctx.themesOptions$).mode === "side" && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 14, ctx.isOverMode$) === false && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 16, ctx.themesOptions$).hasNavArea && ctx.isFixedLeftNav);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isMixiMode && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 18, ctx.themesOptions$).mode === "side" && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 20, ctx.isOverMode$) === false && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 22, ctx.themesOptions$).hasNavArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isMixiMode && ctx.themesOptions.hasTopArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](32, _c4, ctx.isMixiMode && ctx.themesOptions.hasTopArea ? "48px" : 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isMixiMode && ctx.themesOptions.hasTopArea && ctx.themesOptions.mode === "side");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isMixiMode && ctx.themesOptions.hasTopArea && ctx.themesOptions.mode === "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFixedLeftNav && ctx.isMixiMode && ctx.themesOptions.hasNavArea && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 24, ctx.isOverMode$) === false && (!!_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 26, ctx.mixiModeHasLeftNav) || !ctx.themesOptions.splitNav));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isMixiMode && ctx.themesOptions.hasNavArea && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 28, ctx.isOverMode$) === false && (!!_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 30, ctx.mixiModeHasLeftNav) || !ctx.themesOptions.splitNav));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c4, ctx.contentMarginTop));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.themesOptions.hasFooterArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showChats);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent, _shared_components_top_progress_bar_top_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.TopProgressBarComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzHeaderComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzContentComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzFooterComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzSiderComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__.NzMenuItemDirective, _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_5__.SettingDrawerComponent, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__.NzNoAnimationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["html.default[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  --ant-primary-color: #1890ff;\n  --ant-primary-color-hover: #40a9ff;\n  --ant-primary-color-active: #096dd9;\n  --ant-primary-color-outline: rgba(24, 144, 255, 0.2);\n  --ant-primary-1: #e6f7ff;\n  --ant-primary-2: #bae7ff;\n  --ant-primary-3: #91d5ff;\n  --ant-primary-4: #69c0ff;\n  --ant-primary-5: #40a9ff;\n  --ant-primary-6: #1890ff;\n  --ant-primary-7: #096dd9;\n  --ant-primary-color-deprecated-pure: ;\n  --ant-primary-color-deprecated-l-35: #cbe6ff;\n  --ant-primary-color-deprecated-l-20: #7ec1ff;\n  --ant-primary-color-deprecated-t-20: #46a6ff;\n  --ant-primary-color-deprecated-t-50: #8cc8ff;\n  --ant-primary-color-deprecated-f-12: rgba(24, 144, 255, 0.12);\n  --ant-primary-color-active-deprecated-f-30: rgba(230, 247, 255, 0.3);\n  --ant-primary-color-active-deprecated-d-02: #dcf4ff;\n  --ant-success-color: #52c41a;\n  --ant-success-color-hover: #73d13d;\n  --ant-success-color-active: #389e0d;\n  --ant-success-color-outline: rgba(82, 196, 26, 0.2);\n  --ant-success-color-deprecated-bg: #f6ffed;\n  --ant-success-color-deprecated-border: #b7eb8f;\n  --ant-error-color: #ff4d4f;\n  --ant-error-color-hover: #ff7875;\n  --ant-error-color-active: #d9363e;\n  --ant-error-color-outline: rgba(255, 77, 79, 0.2);\n  --ant-error-color-deprecated-bg: #fff2f0;\n  --ant-error-color-deprecated-border: #ffccc7;\n  --ant-warning-color: #faad14;\n  --ant-warning-color-hover: #ffc53d;\n  --ant-warning-color-active: #d48806;\n  --ant-warning-color-outline: rgba(250, 173, 20, 0.2);\n  --ant-warning-color-deprecated-bg: #fffbe6;\n  --ant-warning-color-deprecated-border: #ffe58f;\n  --ant-info-color: #1890ff;\n  --ant-info-color-deprecated-bg: #e6f7ff;\n  --ant-info-color-deprecated-border: #91d5ff;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-weight: normal;\n}\nhtml.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nhtml.default[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n}\nhtml.default[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not([align]), html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not([align]) {\n  text-align: left;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 8;\n  border: 1px dashed #d1d1d1;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 9;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  top: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-right[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  right: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  bottom: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  left: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  right: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  right: -5px;\n  bottom: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  bottom: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-top[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  cursor: ns-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-right[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  cursor: nesw-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-disabled[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%] {\n  display: none;\n}\nhtml.default[_ngcontent-%COMP%]   .text-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\nhtml.default[_ngcontent-%COMP%]   .text-break[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\nhtml.default[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .full-with[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\nhtml.default[_ngcontent-%COMP%]   .min-screen-full-height[_ngcontent-%COMP%] {\n  min-height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-height[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-width[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\nhtml.default[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '.';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .color-weak[_ngcontent-%COMP%] {\n  filter: invert(80%) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 980px;\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\nhtml.default[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {\n  position: relative;\n}\nhtml.default[_ngcontent-%COMP%]   .absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\nhtml.default[_ngcontent-%COMP%]   .t-0[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .l-0[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .b-0[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .r-0[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-h-100[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-5[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-15[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-23[_ngcontent-%COMP%] {\n  margin-right: 23px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-25[_ngcontent-%COMP%] {\n  margin-right: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-30[_ngcontent-%COMP%] {\n  margin-right: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-10[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-4[_ngcontent-%COMP%] {\n  margin-bottom: 4px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-5[_ngcontent-%COMP%] {\n  margin-left: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-7[_ngcontent-%COMP%] {\n  margin-left: 7px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-15[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-80[_ngcontent-%COMP%] {\n  margin-left: 80px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-200[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-5[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-15[_ngcontent-%COMP%] {\n  margin-top: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-25[_ngcontent-%COMP%] {\n  margin-top: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-30[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-18[_ngcontent-%COMP%] {\n  margin-left: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-25[_ngcontent-%COMP%] {\n  margin-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-50[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-8[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-24[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-12[_ngcontent-%COMP%] {\n  padding-top: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-16[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-24[_ngcontent-%COMP%] {\n  padding-left: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-25[_ngcontent-%COMP%] {\n  padding-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-35[_ngcontent-%COMP%] {\n  padding-left: 35px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-55[_ngcontent-%COMP%] {\n  padding-left: 55px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-10[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-16[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-24[_ngcontent-%COMP%] {\n  padding-right: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-8[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-12[_ngcontent-%COMP%] {\n  padding-bottom: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-24[_ngcontent-%COMP%] {\n  padding-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-50[_ngcontent-%COMP%] {\n  padding-bottom: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-11[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-12[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-18[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-28[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-bg-0[_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-02[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-03[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\nhtml.default[_ngcontent-%COMP%]   .clear-fix[_ngcontent-%COMP%]:after {\n  content: '';\n  clear: both;\n  display: block;\n}\nhtml.default[_ngcontent-%COMP%]   .default-theme[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\nhtml.default[_ngcontent-%COMP%]   .night-theme[_ngcontent-%COMP%] {\n  background: #141414;\n}\nhtml.default[_ngcontent-%COMP%]   .d-i-b[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model-move[_ngcontent-%COMP%] {\n  cursor: move;\n}\nhtml.default[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: #f5222d !important;\n}\nhtml.default[_ngcontent-%COMP%]   .grey-color[_ngcontent-%COMP%] {\n  color: #d9d9d9;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-blue[_ngcontent-%COMP%]:hover {\n  color: #409eff;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-red[_ngcontent-%COMP%]:hover {\n  color: #f5222d;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 5px;\n}\nhtml.default[_ngcontent-%COMP%]   .center-row[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-coloum[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-auto[_ngcontent-%COMP%] {\n  flex: auto;\n}\nhtml.default[_ngcontent-%COMP%]   .end-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .left-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-around[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .bg-color-no[_ngcontent-%COMP%] {\n  background: none !important;\n}\nhtml.default[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 12px;\n}\nhtml.default[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%] {\n  margin: 27px 27px 0;\n  \n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-title[_ngcontent-%COMP%] {\n  flex: 1 1;\n  font-size: 16px;\n  line-height: 24px;\n  will-change: transform;\n  opacity: 0.85;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-default-option[_ngcontent-%COMP%]   .ant-space-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 600px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-close-x[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 96px;\n  height: 56px;\n  line-height: 56px;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal[_ngcontent-%COMP%] {\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100%;\n  max-width: initial;\n  padding: 0;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  max-height: none;\n  height: calc(100% - 55px - 53px);\n}\nhtml.default[_ngcontent-%COMP%]   .ant-menu-inline[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical-left[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.default[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   input[nz-input][_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: var(--ant-primary-color);\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: #f1f1f1;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 4px;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}\nhtml.default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 2px 0 6px #00152959;\n  z-index: 10;\n}\nhtml.default   [_nghost-%COMP%]   .dark-top-nav-bg[_ngcontent-%COMP%] {\n  background: #001529;\n  color: #fff;\n}\nhtml.default   [_nghost-%COMP%]   .dark-top-nav-bg[_ngcontent-%COMP%]     .ant-badge {\n  color: #fff;\n}\nhtml.dark[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.dark[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: #177ddc;\n}\nhtml.dark[_ngcontent-%COMP%]   .ant-menu-horizontal[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 6px;\n  height: 6px;\n  background: #263848;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  background: #53616E !important;\n  border-radius: 4px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #c8c8c8;\n}\nhtml.dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 2px 0 6px #00152959;\n  z-index: 10;\n}\nhtml.dark   [_nghost-%COMP%]   .dark-top-nav-bg[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  color: #fff;\n}\nhtml.dark   [_nghost-%COMP%]   .dark-top-nav-bg[_ngcontent-%COMP%]     .ant-badge {\n  color: #fff;\n}\n.trigger-top-border[_ngcontent-%COMP%] {\n  border-top: 1px solid;\n}\n.mixi-left-nav-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 48px;\n}\n.left-nav-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  width: calc(100% - 208px);\n  flex: auto;\n}\n.top-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 999;\n  flex: auto;\n}\n.fixed-collapsed[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n}\n.fixed-over-mode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcbWl4aW4ubGVzcyIsImRlZi1sYXlvdXQtY29udGVudC5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxuZy16b3Jyby1hbnRkXFxzcmNcXHN0eWxlXFx0aGVtZXNcXHZhcmlhYmxlLmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaW5pcmVzZXQubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxuZy16b3Jyby1hbnRkXFxyZXNpemFibGVcXHN0eWxlXFxpbmRleC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVzXFxiYXNlLmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZXNcXGRlZmF1bHQubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcZGFyay5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VDREYsNEZBQTRGO0VBQzVGLDZDQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsNkZBQTZGO0VBQzdGLDBFQUEwRTtFQUMxRSxZQUFZO0FBQ2Q7QURMSTtFRWFGLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG9EQUFBO0VBS0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFHQSxxQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkRBQUE7RUFDQSxvRUFBQTtFQUNBLG1EQUFBO0VBR0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbURBQUE7RUFDQSwwQ0FBQTtFQUNBLDhDQUFBO0VBR0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBR0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLDhDQUFBO0VBR0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDJDQUFBO0FEbkJGO0FEL0NJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFR3NCRixTQUFBO0VBQ0EsVUFBQTtBRmtERjtBRHpFSTs7Ozs7O0VHZ0NGLGVBQUE7RUFDQSxtQkFBQTtBRmlERjtBRGxGSTtFR3FDRixnQkFBQTtBRmdERjtBRHJGSTs7OztFRzRDRixTQUFBO0FGK0NGO0FEM0ZJO0VHZ0RGLHNCQUFBO0FGOENGO0FEOUZJOzs7RUdvREYsbUJBQUE7QUYrQ0Y7QURuR0k7O0VHeURGLFlBQUE7RUFDQSxlQUFBO0FGOENGO0FEeEdJO0VHOERGLFNBQUE7QUY2Q0Y7QUQzR0k7RUdrRUYseUJBQUE7RUFDQSxpQkFBQTtBRjRDRjtBRC9HSTs7RUd3RUYsVUFBQTtBRjJDRjtBRG5ISTs7RUc2RUYsZ0JBQUE7QUYwQ0Y7QUd0SEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FId0hKO0FHdEhFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsVUFBQTtBSHdISjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBSHlITjtBR25ITTs7RUFDRSxpQkFBQTtBSHNIUjtBR3BITTs7RUFDRSxpQkFBQTtBSHVIUjtBR3JITTs7RUFDRSxtQkFBQTtBSHdIUjtBR3RITTs7RUFDRSxtQkFBQTtBSHlIUjtBR2pITTtFQUNFLG9CQUFBO0FIbUhSO0FEMU1JO0VLS3NDLHNCQUFBO0FKd00xQztBRDdNSTtFS1lpQixxQkFBQTtFQUtiLFdBQUE7QUpnTVI7QURqTkk7RUtrQkMsU0FBQTtFQUNILFVBQUE7QUprTUY7QURyTkk7O0VLd0JLLGFBQUE7QUppTVQ7QUR6Tkk7RUs2QkMsYUFBQTtBSitMTDtBRDVOSTtFS2dDRSxjQUFBO0FKK0xOO0FJOUxVO0VBR1QsY0FBQTtBSjhMRDtBRGxPSTtFS3lDbUIscUJBQUE7QUo0THZCO0FEck9JOzs7Ozs7RUs4Q0csZ0JBQUE7QUorTFA7QUQ3T0k7RUtpREcsYUFBQTtBSitMUDtBRGhQSTtFS2tEVSxxQkFBQTtBSmlNZDtBRG5QSTtFS3dESixxQkFBQTtBSjhMQTtBRHRQSTtFSzJESixZQUFBO0FKOExBO0FEelBJO0VLOERTLHNCQUFBO0FKOExiO0FENVBJO0VLcUVKLDRCQUFBO0FKMExBO0FEL1BJO0VLMEVLLHdCQUFBO0FKd0xUO0FEbFFJO0VLNEVILHVCQUFBO0FKeUxEO0FEclFJO0VLd0ZRLFdBQUE7RUFBZSxZQUFBO0VBQ2QsY0FBQTtFQUNSLFNBQUE7RUFBYSxrQkFBQTtBSmtMbEI7QUQ1UUk7RUs4RkcsOEJBQUE7QUppTFA7QUQvUUk7RUtpR0gsWUFBQTtFQUNFLGNBQUE7QUppTEg7QURuUkk7RUtxR00sMkJBQUE7QUppTFY7QUR0Ukk7RUswR0QsNkJBQUE7QUorS0g7QUR6Ukk7RUtnSEgsNEJBQUE7QUo0S0Q7QUQ1Ukk7RUttSEosV0FBQTtBSjRLQTtBRC9SSTtFS3FIVSxZQUFBO0FKNktkO0FEbFNJO0VLd0hFLGtCQUFBO0FKNktOO0FEclNJO0VLeUh3QixrQkFBQTtBSitLNUI7QUR4U0k7RUs2SEcsaUJBQUE7QUo4S1A7QUQzU0k7RUtpSUYsa0JBQUE7QUo2S0Y7QUQ5U0k7RUtvSVEsb0JBQUE7QUo2S1o7QURqVEk7RUt3SUMsbUJBQUE7QUo0S0w7QURwVEk7RUs0SUgsZ0JBQUE7QUoyS0Q7QUR2VEk7RUsrSUosNEJBQUE7QUoyS0E7QUQxVEk7RUtvSkUsNEJBQUE7QUp5S047QUQ3VEk7RUt5SkMsNkJBQUE7QUp1S0w7QURoVUk7RUs2Sk0sNkJBQUE7QUpzS1Y7QURuVUk7RUtpS2dCLDZCQUFBO0FKcUtwQjtBRHRVSTtFS3FLYyw2QkFBQTtBSm9LbEI7QUR6VUk7RUt5S1csNkJBQUE7QUptS2Y7QUQ1VUk7RUs2S0ksb0JBQUE7QUprS1I7QUQvVUk7RUtnTEEsdUJBQUE7QUprS0o7QURsVkk7RUtpTDJCLDZCQUFBO0FKb0svQjtBRHJWSTtFS3FMc0IsNkJBQUE7QUptSzFCO0FEeFZJO0VLeUxpQiw2QkFBQTtBSmtLckI7QUQzVkk7RUs2TGdCLDhCQUFBO0FKaUtwQjtBRDlWSTtFS2tNSiw4QkFBQTtBSitKQTtBRGpXSTtFS3FNSiw4QkFBQTtBSitKQTtBRHBXSTtFS3dNNEIsOEJBQUE7QUorSmhDO0FEdldJO0VLNE15Qix5QkFBQTtBSjhKN0I7QUQxV0k7RUtnTmdCLDJCQUFBO0FKNkpwQjtBRDdXSTtFS29OUSwyQkFBQTtBSjRKWjtBRGhYSTtFS3dOQSwyQkFBQTtBSjJKSjtBRG5YSTtFSzJOSSw0QkFBQTtBSjJKUjtBRHRYSTtFSytORCw0QkFBQTtBSjBKSDtBRHpYSTtFS21PRCw0QkFBQTtBSnlKSDtBRDVYSTtFS3VPRiw2QkFBQTtBSndKRjtBRC9YSTtFSzJPSix3QkFBQTtBSnVKQTtBRGxZSTtFSzRPMEIsMEJBQUE7QUp5SjlCO0FEcllJO0VLZ1BvQiwwQkFBQTtBSndKeEI7QUR4WUk7RUtxUFksMkJBQUE7QUpzSmhCO0FEM1lJO0VLeVBPLDJCQUFBO0FKcUpYO0FEOVlJO0VLNlBDLDJCQUFBO0FKb0pMO0FEalpJO0VLaVFKLDJCQUFBO0FKbUpBO0FEcFpJO0VLcVFKLDJCQUFBO0FKa0pBO0FEdlpJO0VLd1FLLDRCQUFBO0FKa0pUO0FEMVpJO0VLNFFJLDRCQUFBO0FKaUpSO0FEN1pJO0VLZ1JDLDRCQUFBO0FKZ0pMO0FEaGFJO0VLb1JGLDRCQUFBO0FKK0lGO0FEbmFJO0VLc1JGLHFCQUFBO0FKZ0pGO0FEdGFJO0VLeVJpQix1QkFBQTtBSmdKckI7QUR6YUk7RUs2Uk8sd0JBQUE7QUorSVg7QUQ1YUk7RUtrU0gsd0JBQUE7QUo2SUQ7QUQvYUk7RUtxU0QsMkJBQUE7QUo2SUg7QURsYkk7RUt3U0osNEJBQUE7QUo2SUE7QURyYkk7RUswUzRCLDRCQUFBO0FKOEloQztBRHhiSTtFSzhTd0IsNEJBQUE7QUo2STVCO0FEM2JJO0VLbVRxQiwwQkFBQTtBSjJJekI7QUQ5Ykk7RUt3VEosNEJBQUE7QUp5SUE7QURqY0k7RUs2VEosNkJBQUE7QUp1SUE7QURwY0k7RUtrVUgsNkJBQUE7QUpxSUQ7QUR2Y0k7RUtzVUosNkJBQUE7QUpvSUE7QUQxY0k7RUt5VUosNkJBQUE7QUpvSUE7QUQ3Y0k7RUs0VTJCLDZCQUFBO0FKb0kvQjtBRGhkSTtFS2dWd0IsNkJBQUE7QUptSTVCO0FEbmRJO0VLcVZtQiw2QkFBQTtBSmlJdkI7QUR0ZEk7RUt5Vm1CLDhCQUFBO0FKZ0l2QjtBRHpkSTtFSzhWZSw4QkFBQTtBSjhIbkI7QUQ1ZEk7RUtrV1ksOEJBQUE7QUo2SGhCO0FEL2RJO0VLc1dRLDRCQUFBO0FKNEhaO0FEbGVJO0VLMFdFLDhCQUFBO0FKMkhOO0FEcmVJO0VLK1dILCtCQUFBO0FKeUhEO0FEeGVJO0VLa1hNLCtCQUFBO0FKeUhWO0FEM2VJO0VLc1hJLCtCQUFBO0FKd0hSO0FEOWVJO0VLMFhHLCtCQUFBO0FKdUhQO0FEamZJO0VLOFhELDBCQUFBO0FKc0hIO0FEcGZJO0VLK1g4QiwwQkFBQTtBSndIbEM7QUR2Zkk7RUttWXFCLDBCQUFBO0FKdUh6QjtBRDFmSTtFS3VZYSwwQkFBQTtBSnNIakI7QUQ3Zkk7RUsyWU8sMEJBQUE7QUpxSFg7QURoZ0JJO0VLK1lGLDBCQUFBO0FKb0hGO0FEbmdCSTtFS2taTSwwQ0FBQTtBSm9IVjtBRHRnQkk7RUt1Wk0sb0JBQUE7QUprSFY7QUR6Z0JJO0VLMFpNLG9CQUFBO0FKa0hWO0FENWdCSTtFSzhaRCxXQUFBO0VBQ0ssV0FBQTtFQUFlLGNBQUE7QUprSHZCO0FEamhCSTtFS21hWSxtQkFBQTtBSmlIaEI7QURwaEJJO0VLdWFPLG1CQUFBO0FKZ0hYO0FEdmhCSTtFSzJhSixnQ0FBQTtBSitHQTtBRDFoQkk7RUsrYVksb0JBQUE7QUo4R2hCO0FEN2hCSTtFS21iTyxlQUFBO0FKNkdYO0FEaGlCSTtFS3NiWSxZQUFBO0FKNkdoQjtBRG5pQkk7RUt1YjRCLHlCQUFBO0FKK0doQztBRHRpQkk7RUsyYk0sY0FBQTtBSjhHVjtBSTFHQTtFQUFjLGNBQUE7QUo2R2Q7QUl6R0c7RUFDRixjQUFBO0FKMkdEO0FEL2lCSTtFS21iTyxlQUFBO0VBc0JJLGlCQUFBO0FKMEdmO0FEbmpCSTtFSzZjRSxjQUFBO0FKeUdOO0FEdGpCSTtFS2tkTSxhQUFBO0VBQWlCLHVCQUFBO0VBR2pCLG1CQUFBO0FKc0dWO0FEM2pCSTtFSzBkYyxhQUFBO0FKb0dsQjtBRDlqQkk7RUs4ZEksc0JBQUE7QUptR1I7QURqa0JJO0VLa2VNLE9BQUE7QUprR1Y7QURwa0JJO0VLcWVELFVBQUE7QUprR0g7QUR2a0JJO0VLa2RNLGFBQUE7RUFBaUIseUJBQUE7RUFHakIsbUJBQUE7QUp1SFY7QUQ1a0JJO0VLa2RNLGFBQUE7RUFBaUIsMkJBQUE7RUFHakIsbUJBQUE7QUo0SFY7QURqbEJJO0VLa2RNLGFBQUE7RUFBaUIsOEJBQUE7RUFHakIsbUJBQUE7QUppSVY7QUR0bEJJO0VLa2RNLGFBQUE7RUFBaUIsNkJBQUE7RUFHakIsbUJBQUE7QUpzSVY7QUQzbEJJO0VLMGZLLDJCQUFBO0FKb0dUO0FEOWxCSTtFSzhmWSxnQkFBQTtFQUFvQixlQUFBO0FKb0dwQztBRGxtQkk7RUtnZ0JhLFdBQUE7RUFDWCxhQUFBO0FKcUdOO0FEdG1CSTtFS3NnQkQsbUJBQUE7RUptR0QsU0FBUztBQUNYO0FEMW1CSTtFSzhnQkgsYUFBQTtFQUFtQixtQkFBQTtFQUlsQiw4QkFBQTtBSjZGRjtBRC9tQkk7RUswaEJBLFNBQUE7RUFBaUIsZUFBQTtFQUdOLGlCQUFBO0VBQ0csc0JBQUE7RUFHRCxhQUFBO0FKcUZqQjtBRHRuQkk7RUtzaUJPLGFBQUE7RUFFVixtQkFBQTtFQUdPLHlCQUFBO0FKZ0ZSO0FEM25CSTtFS3FqQkosNEJBQUE7QUp5RUE7QUQ5bkJJO0VLMGpCZ0IsYUFBQTtBSnVFcEI7QURqb0JJO0VLZ2tCSixjQUFBO0VBQWtCLGlCQUFBO0FKcUVsQjtBRHJvQkk7RUtra0JKLHFCQUFBO0VBQ3VCLFdBQUE7RUFDckIsWUFBQTtFQUNGLGlCQUFBO0FKc0VBO0FEM29CSTtFS3NrQmUsZ0JBQUE7QUp3RW5CO0FEOW9CSTtFS3drQkosaUJBQUE7RUFDRSxtQkFBQTtFQUVnQixvQkFBQTtFQUNYLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQWtCLGtCQUFBO0VBR25CLFVBQUE7RUFBZ0IsMENBQUE7QUp3RXhCO0FJdkU0QjtFQUNsQixZQUFBO0VBQW9CLDBDQUFBO0FKMEU5QjtBSTNFNEI7RUFRVixnQkFBQTtFQUtOLGdDQUFBO0FKa0VaO0FEanFCSTs7O0VLd21CWSxZQUFBO0FKOERoQjtBRHRxQkk7RUswbUJNLFdBQUE7QUorRFY7QUR6cUJJO0VLa1pNLDBDQUFBO0FKMFJWO0FENXFCSTtFTU1GLCtCQUFBO0FMeXFCRjtBRC9xQkk7RU1TRixVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FMeXFCRjtBRHByQkk7RU1lRixnQkFBQTtFQUNBLGtCQUFBO0FMd3FCRjtBRHhyQkk7RU1vQkYsbUJBQUE7QUx1cUJGO0FEM3JCSTtFQ0dFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBMnJCTjtBRGhzQkk7RUNTRSxtQkFBQTtFQUNBLFdBQUE7QUEwckJOO0FEcHNCSTtFQ2FJLFdBQUE7QUEwckJSO0FEbnNCSTtFQ3FzQkYsNEZBQTRGO0VBQzVGLDZDQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsNkZBQTZGO0VBQzdGLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FEM3NCSTtFT0NGLGNBQUE7QU42c0JGO0FEOXNCSTtFT0lGLFlBQUE7QU42c0JGO0FEanRCSTtFQ210QkYsVUFBVTtFTXRzQlYsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBTndzQkY7QUR2dEJJO0VDeXRCRixXQUFXO0VNdHNCWCw4QkFBQTtFQUNBLGtCQUFBO0FOd3NCRjtBRDV0Qkk7RU8wQkYsb0RBQUE7RUFDQSxtQkFBQTtBTnFzQkY7QURodUJJO0VPaUNGLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLHlCQUFBO0FOa3NCRjtBRHR1Qkk7RUNERSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQTB1Qk47QUQzdUJJO0VDS0UsbUJBQUE7RUFDQSxXQUFBO0FBeXVCTjtBRC91Qkk7RUNTSSxXQUFBO0FBeXVCUjtBQW51QkE7RUFDRSxxQkFBQTtBQXF1QkY7QUFqdUJBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBbXVCRjtBQWh1QkE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBa3VCRjtBQTl0QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBZ3VCRjtBQTd0QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUErdEJGO0FBNXRCQTtFQUNFLHdCQUFBO0FBOHRCRjtBQTN0QkE7RUFDRSxXQUFBO0FBNnRCRiIsImZpbGUiOiJkZWYtbGF5b3V0LWNvbnRlbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWVNaXhpbihAcnVsZXMpIHtcbiAgaHRtbCB7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgIEBpbXBvcnQgJy4vZGVmYXVsdC5sZXNzJztcbiAgICAgIEBydWxlcygpO1xuICAgIH1cbiAgICAmLmRhcmsge1xuICAgICAgQGltcG9ydCAnLi9kYXJrLmxlc3MnO1xuICAgICAgQHJ1bGVzKCk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwibWl4aW5cIjtcblxuLnRoZW1lTWl4aW4oe1xuICA6aG9zdCB7XG4gICAgLm1lbnUtc2lkZWJhciB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAwIDZweCAjMDAxNTI5NTk7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAuZGFyay10b3AtbmF2LWJnIHtcbiAgICAgIGJhY2tncm91bmQ6IEBtZW51LWRhcmstYmc7XG4gICAgICBjb2xvcjogQHdoaXRlO1xuXG4gICAgICA6Om5nLWRlZXAgLmFudC1iYWRnZSB7XG4gICAgICAgIGNvbG9yOiBAd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLnRyaWdnZXItdG9wLWJvcmRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbn1cblxuXG4ubWl4aS1sZWZ0LW5hdi1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA0OHB4O1xufVxuXG4ubGVmdC1uYXYtZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjA4cHgpO1xuICBmbGV4OiBhdXRvO1xufVxuXG4udG9wLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGZsZXg6IGF1dG87XG59XG5cbi5maXhlZC1jb2xsYXBzZWQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG59XG5cbi5maXhlZC1vdmVyLW1vZGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuQGltcG9ydCAnLi4vY29sb3IvY29sb3JzJztcblxuQHRoZW1lOiB2YXJpYWJsZTtcblxuLy8gVGhlIHByZWZpeCB0byB1c2Ugb24gYWxsIGNzcyBjbGFzc2VzIGZyb20gYW50LlxuQGFudC1wcmVmaXg6IGFudDtcblxuLy8gQW4gb3ZlcnJpZGUgZm9yIHRoZSBodG1sIHNlbGVjdG9yIGZvciB0aGVtZSBwcmVmaXhlc1xuQGh0bWwtc2VsZWN0b3I6IGh0bWw7XG5cbkB7aHRtbC1zZWxlY3Rvcn0ge1xuICBAYmFzZS1wcmltYXJ5OiBAYmx1ZS02O1xuXG4gIC8vID09PT09PT09PSBQcmltYXJ5IENvbG9yID09PT09PT09PVxuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvcjogQGJhc2UtcHJpbWFyeTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgNykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLW91dGxpbmU6IGZhZGUoQGJhc2UtcHJpbWFyeSwgQG91dGxpbmUtZmFkZSk7XG5cbiAgLy8gTGVnYWN5XG4gIEBsZWdhY3ktcHJpbWFyeS0xOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgMSkgYCk7XG5cbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMTogQGxlZ2FjeS1wcmltYXJ5LTE7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAyKSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMzogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDMpIGApO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS00OiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgNCkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNjogQGJhc2UtcHJpbWFyeTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNzogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDcpIGApO1xuXG4gIC8vIERlcHJlY2F0ZWRcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1wdXJlOiB+Jyc7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtbC0zNTogbGlnaHRlbihAYmFzZS1wcmltYXJ5LCAzNSUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWwtMjA6IGxpZ2h0ZW4oQGJhc2UtcHJpbWFyeSwgMjAlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTIwOiB0aW50KEBiYXNlLXByaW1hcnksIDIwJSk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtdC01MDogdGludChAYmFzZS1wcmltYXJ5LCA1MCUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWYtMTI6IGZhZGUoQGJhc2UtcHJpbWFyeSwgMTIlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZi0zMDogZmFkZShAbGVnYWN5LXByaW1hcnktMSwgMzAlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZC0wMjogZGFya2VuKEBsZWdhY3ktcHJpbWFyeS0xLCAyJSk7XG5cbiAgLy8gPT09PT09PT09IFN1Y2Nlc3MgQ29sb3IgPT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yOiBAZ3JlZW4tNjtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgNSkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWFjdGl2ZTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7Z3JlZW4tNn0nLCA3KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3Itb3V0bGluZTogZmFkZShAZ3JlZW4tNiwgQG91dGxpbmUtZmFkZSk7XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgMykgYDtcblxuICAvLyA9PT09PT09PT09IEVycm9yIENvbG9yID09PT09PT09PT1cbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yOiBAcmVkLTU7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1ob3ZlcjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cmVkLTV9JywgNSkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1hY3RpdmU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe3JlZC01fScsIDcpIGApO1xuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3Itb3V0bGluZTogZmFkZShAcmVkLTUsIEBvdXRsaW5lLWZhZGUpO1xuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZzogfmBjb2xvclBhbGV0dGUoJ0B7cmVkLTV9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+YGNvbG9yUGFsZXR0ZSgnQHtyZWQtNX0nLCAzKSBgO1xuXG4gIC8vID09PT09PT09PSBXYXJuaW5nIENvbG9yID09PT09PT09PVxuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvcjogQGdvbGQtNjtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2dvbGQtNn0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItYWN0aXZlOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtnb2xkLTZ9JywgNykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLW91dGxpbmU6IGZhZGUoQGdvbGQtNiwgQG91dGxpbmUtZmFkZSk7XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH5gY29sb3JQYWxldHRlKCdAe2dvbGQtNn0nLCAxKSBgO1xuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfmBjb2xvclBhbGV0dGUoJ0B7Z29sZC02fScsIDMpIGA7XG5cbiAgLy8gPT09PT09PT09PSBJbmZvIENvbG9yID09PT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yOiBAYmFzZS1wcmltYXJ5O1xuICAtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJnOiB+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAzKSBgO1xufVxuXG4vLyAtLS0tLS0tLSBDb2xvcnMgLS0tLS0tLS0tLS1cbi8vID4+PiBQcmltYXJ5XG5AcHJpbWFyeS1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3IpJztcbkBwcmltYXJ5LWNvbG9yLWhvdmVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1ob3ZlciknO1xuQHByaW1hcnktY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUpJztcbkBwcmltYXJ5LWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLW91dGxpbmUpJztcblxuQHByb2Nlc3NpbmctY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuXG4vLyA+Pj4gSW5mb1xuQGluZm8tY29sb3I6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yKSc7XG5AaW5mby1jb2xvci1kZXByZWNhdGVkLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJnKSc7XG5AaW5mby1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXIpJztcblxuLy8gPj4+IFN1Y2Nlc3NcbkBzdWNjZXNzLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvciknO1xuQHN1Y2Nlc3MtY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWhvdmVyKSc7XG5Ac3VjY2Vzcy1jb2xvci1hY3RpdmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWFjdGl2ZSknO1xuQHN1Y2Nlc3MtY29sb3Itb3V0bGluZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3Itb3V0bGluZSknO1xuQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZyknO1xuQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyKSc7XG5cbi8vID4+PiBXYXJuaW5nXG5Ad2FybmluZy1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3IpJztcbkB3YXJuaW5nLWNvbG9yLWhvdmVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1ob3ZlciknO1xuQHdhcm5pbmctY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1hY3RpdmUpJztcbkB3YXJuaW5nLWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLW91dGxpbmUpJztcbkB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmcpJztcbkB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlciknO1xuXG4vLyA+Pj4gRXJyb3JcbkBlcnJvci1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yKSc7XG5AZXJyb3ItY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1ob3ZlciknO1xuQGVycm9yLWNvbG9yLWFjdGl2ZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWFjdGl2ZSknO1xuQGVycm9yLWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1vdXRsaW5lKSc7XG5AZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYmcpJztcbkBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyKSc7XG5cbkBoaWdobGlnaHQtY29sb3I6IEByZWQtNTtcbkBub3JtYWwtY29sb3I6ICNkOWQ5ZDk7XG5Ad2hpdGU6ICNmZmY7XG5AYmxhY2s6ICMwMDA7XG5cbi8vIENvbG9yIHVzZWQgYnkgZGVmYXVsdCB0byBjb250cm9sIGhvdmVyIGFuZCBhY3RpdmUgYmFja2dyb3VuZHMgYW5kIGZvclxuLy8gYWxlcnQgaW5mbyBiYWNrZ3JvdW5kcy5cbkBwcmltYXJ5LTE6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTEpJzsgLy8gcmVwbGFjZSB0aW50KEBwcmltYXJ5LWNvbG9yLCA5MCUpXG5AcHJpbWFyeS0yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS0yKSc7IC8vIHJlcGxhY2UgdGludChAcHJpbWFyeS1jb2xvciwgODAlKVxuQHByaW1hcnktMzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMyknOyAvLyB1bnVzZWRcbkBwcmltYXJ5LTQ6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTQpJzsgLy8gdW51c2VkXG5AcHJpbWFyeS01OiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS01KSc7IC8vIGNvbG9yIHVzZWQgdG8gY29udHJvbCB0aGUgdGV4dCBjb2xvciBpbiBtYW55IGFjdGl2ZSBhbmQgaG92ZXIgc3RhdGVzLCByZXBsYWNlIHRpbnQoQHByaW1hcnktY29sb3IsIDIwJSlcbkBwcmltYXJ5LTY6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTYpJzsgLy8gY29sb3IgdXNlZCB0byBjb250cm9sIHRoZSB0ZXh0IGNvbG9yIG9mIGFjdGl2ZSBidXR0b25zLCBkb24ndCB1c2UsIHVzZSBAcHJpbWFyeS1jb2xvclxuQHByaW1hcnktNzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNyknOyAvLyByZXBsYWNlIHNoYWRlKEBwcmltYXJ5LWNvbG9yLCA1JSlcbkBwcmltYXJ5LTg6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe3ByaW1hcnktY29sb3J9JywgOCkgYCk7IC8vIHVudXNlZFxuQHByaW1hcnktOTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cHJpbWFyeS1jb2xvcn0nLCA5KSBgKTsgLy8gdW51c2VkXG5AcHJpbWFyeS0xMDogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cHJpbWFyeS1jb2xvcn0nLCAxMCkgYCk7IC8vIHVudXNlZFxuXG4vLyBCYXNlIFNjYWZmb2xkaW5nIFZhcmlhYmxlc1xuLy8gLS0tXG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGA8Ym9keT5gXG5AYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xuLy8gQmFzZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBtb3N0IGNvbXBvbmVudHNcbkBjb21wb25lbnQtYmFja2dyb3VuZDogI2ZmZjtcbi8vIFBvcG92ZXIgYmFja2dyb3VuZCBjb2xvclxuQHBvcG92ZXItYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBvcG92ZXItY3VzdG9taXplLWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1zcGxpdDtcbkBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbkBjb2RlLWZhbWlseTogJ1NGTW9uby1SZWd1bGFyJywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuQHRleHQtY29sb3I6IGZhZGUoQGJsYWNrLCA4NSUpO1xuQHRleHQtY29sb3Itc2Vjb25kYXJ5OiBmYWRlKEBibGFjaywgNDUlKTtcbkB0ZXh0LWNvbG9yLWludmVyc2U6IEB3aGl0ZTtcbkBpY29uLWNvbG9yOiBpbmhlcml0O1xuQGljb24tY29sb3ItaG92ZXI6IGZhZGUoQGJsYWNrLCA3NSUpO1xuQGhlYWRpbmctY29sb3I6IGZhZGUoQGJsYWNrLCA4NSUpO1xuQHRleHQtY29sb3ItZGFyazogZmFkZShAd2hpdGUsIDg1JSk7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnktZGFyazogZmFkZShAd2hpdGUsIDY1JSk7XG5AdGV4dC1zZWxlY3Rpb24tYmc6IEBwcmltYXJ5LWNvbG9yO1xuQGZvbnQtdmFyaWFudC1iYXNlOiB0YWJ1bGFyLW51bXM7XG5AZm9udC1mZWF0dXJlLXNldHRpbmdzLWJhc2U6ICd0bnVtJztcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtbGc6IEBmb250LXNpemUtYmFzZSArIDJweDtcbkBmb250LXNpemUtc206IDEycHg7XG5AaGVhZGluZy0xLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMi43MSk7XG5AaGVhZGluZy0yLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMi4xNCk7XG5AaGVhZGluZy0zLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS43MSk7XG5AaGVhZGluZy00LXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS40Mik7XG5AaGVhZGluZy01LXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS4xNCk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yMDIxMFxuQGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTcxNTtcbkBib3JkZXItcmFkaXVzLWJhc2U6IDJweDtcbkBib3JkZXItcmFkaXVzLXNtOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4vLyBjb250cm9sIGJvcmRlclxuQGNvbnRyb2wtYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuLy8gYXJyb3cgYm9yZGVyXG5AYXJyb3ctYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG5cbi8vIHZlcnRpY2FsIHBhZGRpbmdzXG5AcGFkZGluZy1sZzogMjRweDsgLy8gY29udGFpbmVyc1xuQHBhZGRpbmctbWQ6IDE2cHg7IC8vIHNtYWxsIGNvbnRhaW5lcnMgYW5kIGJ1dHRvbnNcbkBwYWRkaW5nLXNtOiAxMnB4OyAvLyBGb3JtIGNvbnRyb2xzIGFuZCBpdGVtc1xuQHBhZGRpbmcteHM6IDhweDsgLy8gc21hbGwgaXRlbXNcbkBwYWRkaW5nLXhzczogNHB4OyAvLyBtb3JlIHNtYWxsXG5cbi8vIHZlcnRpY2FsIHBhZGRpbmcgZm9yIGFsbCBmb3JtIGNvbnRyb2xzXG5AY29udHJvbC1wYWRkaW5nLWhvcml6b250YWw6IEBwYWRkaW5nLXNtO1xuQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsLXNtOiBAcGFkZGluZy14cztcblxuLy8gdmVydGljYWwgbWFyZ2luc1xuQG1hcmdpbi1sZzogMjRweDsgLy8gY29udGFpbmVyc1xuQG1hcmdpbi1tZDogMTZweDsgLy8gc21hbGwgY29udGFpbmVycyBhbmQgYnV0dG9uc1xuQG1hcmdpbi1zbTogMTJweDsgLy8gRm9ybSBjb250cm9scyBhbmQgaXRlbXNcbkBtYXJnaW4teHM6IDhweDsgLy8gc21hbGwgaXRlbXNcbkBtYXJnaW4teHNzOiA0cHg7IC8vIG1vcmUgc21hbGxcblxuLy8gaGVpZ2h0IHJ1bGVzXG5AaGVpZ2h0LWJhc2U6IDMycHg7XG5AaGVpZ2h0LWxnOiA0MHB4O1xuQGhlaWdodC1zbTogMjRweDtcblxuLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIGZvciBhY3RpdmUgYW5kIGhvdmVyIHN0YXRlcyBmb3IgdGhpbmdzIGxpa2Vcbi8vIGxpc3QgaXRlbXMgb3IgdGFibGUgY2VsbHMuXG5AaXRlbS1hY3RpdmUtYmc6IEBwcmltYXJ5LTE7XG5AaXRlbS1ob3Zlci1iZzogI2Y1ZjVmNTtcblxuLy8gSUNPTkZPTlRcbkBpY29uZm9udC1jc3MtcHJlZml4OiBhbnRpY29uO1xuXG4vLyBMSU5LXG5AbGluay1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AbGluay1ob3Zlci1jb2xvcjogQHByaW1hcnktY29sb3ItaG92ZXI7XG5AbGluay1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LWNvbG9yLWFjdGl2ZTtcbkBsaW5rLWRlY29yYXRpb246IG5vbmU7XG5AbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xuQGxpbmstZm9jdXMtZGVjb3JhdGlvbjogbm9uZTtcbkBsaW5rLWZvY3VzLW91dGxpbmU6IDA7XG5cbi8vIEFuaW1hdGlvblxuQGVhc2UtYmFzZS1vdXQ6IGN1YmljLWJlemllcigwLjcsIDAuMywgMC4xLCAxKTtcbkBlYXNlLWJhc2UtaW46IGN1YmljLWJlemllcigwLjksIDAsIDAuMywgMC43KTtcbkBlYXNlLW91dDogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5AZWFzZS1pbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5AZWFzZS1pbi1vdXQ6IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbkBlYXNlLW91dC1iYWNrOiBjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KTtcbkBlYXNlLWluLWJhY2s6IGN1YmljLWJlemllcigwLjcxLCAtMC40NiwgMC44OCwgMC42KTtcbkBlYXNlLWluLW91dC1iYWNrOiBjdWJpYy1iZXppZXIoMC43MSwgLTAuNDYsIDAuMjksIDEuNDYpO1xuQGVhc2Utb3V0LWNpcmM6IGN1YmljLWJlemllcigwLjA4LCAwLjgyLCAwLjE3LCAxKTtcbkBlYXNlLWluLWNpcmM6IGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzQpO1xuQGVhc2UtaW4tb3V0LWNpcmM6IGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcbkBlYXNlLW91dC1xdWludDogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuQGVhc2UtaW4tcXVpbnQ6IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuQGVhc2UtaW4tb3V0LXF1aW50OiBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XG5cbi8vIEJvcmRlciBjb2xvclxuQGJvcmRlci1jb2xvci1iYXNlOiBoc3YoMCwgMCwgODUlKTsgLy8gYmFzZSBib3JkZXIgb3V0bGluZSBhIGNvbXBvbmVudFxuQGJvcmRlci1jb2xvci1zcGxpdDogcmdiYSgwLCAwLCAwLCAwLjA2KTsgLy8gc3BsaXQgYm9yZGVyIGluc2lkZSBhIGNvbXBvbmVudFxuQGJvcmRlci1jb2xvci1pbnZlcnNlOiBAd2hpdGU7XG5AYm9yZGVyLXdpZHRoLWJhc2U6IDFweDsgLy8gd2lkdGggb2YgdGhlIGJvcmRlciBmb3IgYSBjb21wb25lbnRcbkBib3JkZXItc3R5bGUtYmFzZTogc29saWQ7IC8vIHN0eWxlIG9mIGEgY29tcG9uZW50cyBib3JkZXJcblxuLy8gT3V0bGluZVxuQG91dGxpbmUtYmx1ci1zaXplOiAwO1xuQG91dGxpbmUtd2lkdGg6IDJweDtcbkBvdXRsaW5lLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjsgLy8gTm8gdXNlIGFueW1vcmVcbkBvdXRsaW5lLWZhZGU6IDIwJTtcblxuQGJhY2tncm91bmQtY29sb3ItbGlnaHQ6IGhzdigwLCAwLCA5OCUpOyAvLyBiYWNrZ3JvdW5kIG9mIGhlYWRlciBhbmQgc2VsZWN0ZWQgaXRlbVxuQGJhY2tncm91bmQtY29sb3ItYmFzZTogaHN2KDAsIDAsIDk2JSk7IC8vIERlZmF1bHQgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yXG5cbi8vIERpc2FibGVkIHN0YXRlc1xuQGRpc2FibGVkLWNvbG9yOiBmYWRlKCMwMDAsIDI1JSk7XG5AZGlzYWJsZWQtYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5AZGlzYWJsZWQtYWN0aXZlLWJnOiB0aW50KEBibGFjaywgOTAlKTtcbkBkaXNhYmxlZC1jb2xvci1kYXJrOiBmYWRlKCNmZmYsIDM1JSk7XG5cbi8vIFNoYWRvd1xuQHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbkBzaGFkb3ctY29sb3ItaW52ZXJzZTogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGJveC1zaGFkb3ctYmFzZTogQHNoYWRvdy0yO1xuQHNoYWRvdy0xLXVwOiAwIC02cHggMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgLTlweCAyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgMCAtMTJweCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1kb3duOiAwIDZweCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCA5cHggMjhweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gIDAgMTJweCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1sZWZ0OiAtNnB4IDAgMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIC05cHggMCAyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgLTEycHggMCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1yaWdodDogNnB4IDAgMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDlweCAwIDI4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAxMnB4IDAgNDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG5Ac2hhZG93LTI6IDAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxuICAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4vLyBCdXR0b25zXG5AYnRuLWZvbnQtd2VpZ2h0OiA0MDA7XG5AYnRuLWJvcmRlci1yYWRpdXMtYmFzZTogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBidG4tYm9yZGVyLXJhZGl1cy1zbTogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBidG4tYm9yZGVyLXdpZHRoOiBAYm9yZGVyLXdpZHRoLWJhc2U7XG5AYnRuLWJvcmRlci1zdHlsZTogQGJvcmRlci1zdHlsZS1iYXNlO1xuQGJ0bi1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAxNSk7XG5AYnRuLXByaW1hcnktc2hhZG93OiAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNDUpO1xuQGJ0bi10ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuQGJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmO1xuQGJ0bi1wcmltYXJ5LWJnOiBAcHJpbWFyeS1jb2xvcjtcblxuQGJ0bi1kZWZhdWx0LWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBidG4tZGVmYXVsdC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGJ0bi1kZWZhdWx0LWJvcmRlcjogQGJvcmRlci1jb2xvci1iYXNlO1xuXG5AYnRuLWRhbmdlci1jb2xvcjogI2ZmZjtcbkBidG4tZGFuZ2VyLWJnOiBAZXJyb3ItY29sb3I7XG5AYnRuLWRhbmdlci1ib3JkZXI6IEBlcnJvci1jb2xvcjtcblxuQGJ0bi1kaXNhYmxlLWNvbG9yOiBAZGlzYWJsZWQtY29sb3I7XG5AYnRuLWRpc2FibGUtYmc6IEBkaXNhYmxlZC1iZztcbkBidG4tZGlzYWJsZS1ib3JkZXI6IEBib3JkZXItY29sb3ItYmFzZTtcblxuQGJ0bi1kZWZhdWx0LWdob3N0LWNvbG9yOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AYnRuLWRlZmF1bHQtZ2hvc3QtYmc6IHRyYW5zcGFyZW50O1xuQGJ0bi1kZWZhdWx0LWdob3N0LWJvcmRlcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuXG5AYnRuLWZvbnQtc2l6ZS1sZzogQGZvbnQtc2l6ZS1sZztcbkBidG4tZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlOiBAcGFkZGluZy1tZCAtIDFweDtcbkBidG4tcGFkZGluZy1ob3Jpem9udGFsLWxnOiBAYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlO1xuQGJ0bi1wYWRkaW5nLWhvcml6b250YWwtc206IEBwYWRkaW5nLXhzIC0gMXB4O1xuXG5AYnRuLWhlaWdodC1iYXNlOiBAaGVpZ2h0LWJhc2U7XG5AYnRuLWhlaWdodC1sZzogQGhlaWdodC1sZztcbkBidG4taGVpZ2h0LXNtOiBAaGVpZ2h0LXNtO1xuXG5AYnRuLWxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtYmFzZTtcblxuQGJ0bi1jaXJjbGUtc2l6ZTogQGJ0bi1oZWlnaHQtYmFzZTtcbkBidG4tY2lyY2xlLXNpemUtbGc6IEBidG4taGVpZ2h0LWxnO1xuQGJ0bi1jaXJjbGUtc2l6ZS1zbTogQGJ0bi1oZWlnaHQtc207XG5cbkBidG4tc3F1YXJlLXNpemU6IEBidG4taGVpZ2h0LWJhc2U7XG5AYnRuLXNxdWFyZS1zaXplLWxnOiBAYnRuLWhlaWdodC1sZztcbkBidG4tc3F1YXJlLXNpemUtc206IEBidG4taGVpZ2h0LXNtO1xuQGJ0bi1zcXVhcmUtb25seS1pY29uLXNpemU6IEBmb250LXNpemUtYmFzZSArIDJweDtcbkBidG4tc3F1YXJlLW9ubHktaWNvbi1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AYnRuLXNxdWFyZS1vbmx5LWljb24tc2l6ZS1sZzogQGJ0bi1mb250LXNpemUtbGcgKyAycHg7XG5cbkBidG4tZ3JvdXAtYm9yZGVyOiBAcHJpbWFyeS01O1xuXG5AYnRuLWxpbmstaG92ZXItYmc6IHRyYW5zcGFyZW50O1xuQGJ0bi10ZXh0LWhvdmVyLWJnOiByZ2JhKDAsIDAsIDAsIDAuMDE4KTtcblxuLy8gQ2hlY2tib3hcbkBjaGVja2JveC1zaXplOiAxNnB4O1xuQGNoZWNrYm94LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBjaGVja2JveC1jaGVjay1jb2xvcjogI2ZmZjtcbkBjaGVja2JveC1jaGVjay1iZzogQGNoZWNrYm94LWNoZWNrLWNvbG9yO1xuQGNoZWNrYm94LWJvcmRlci13aWR0aDogQGJvcmRlci13aWR0aC1iYXNlO1xuQGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AY2hlY2tib3gtZ3JvdXAtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcblxuLy8gRGVzY3JpcHRpb25zXG5AZGVzY3JpcHRpb25zLWJnOiAjZmFmYWZhO1xuQGRlc2NyaXB0aW9ucy10aXRsZS1tYXJnaW4tYm90dG9tOiAyMHB4O1xuQGRlc2NyaXB0aW9ucy1kZWZhdWx0LXBhZGRpbmc6IEBwYWRkaW5nLW1kIEBwYWRkaW5nLWxnO1xuQGRlc2NyaXB0aW9ucy1taWRkbGUtcGFkZGluZzogQHBhZGRpbmctc20gQHBhZGRpbmctbGc7XG5AZGVzY3JpcHRpb25zLXNtYWxsLXBhZGRpbmc6IEBwYWRkaW5nLXhzIEBwYWRkaW5nLW1kO1xuQGRlc2NyaXB0aW9ucy1pdGVtLXBhZGRpbmctYm90dG9tOiBAcGFkZGluZy1tZDtcbkBkZXNjcmlwdGlvbnMtaXRlbS10cmFpbGluZy1jb2xvbjogdHJ1ZTtcbkBkZXNjcmlwdGlvbnMtaXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tcmlnaHQ6IDhweDtcbkBkZXNjcmlwdGlvbnMtaXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tbGVmdDogMnB4O1xuQGRlc2NyaXB0aW9ucy1leHRyYS1jb2xvcjogQHRleHQtY29sb3I7XG5cbi8vIERpdmlkZXJcbkBkaXZpZGVyLXRleHQtcGFkZGluZzogMWVtO1xuQGRpdmlkZXItb3JpZW50YXRpb24tbWFyZ2luOiA1JTtcbkBkaXZpZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDYlKTtcbkBkaXZpZGVyLXZlcnRpY2FsLWd1dHRlcjogOHB4O1xuXG4vLyBEcm9wZG93blxuQGRyb3Bkb3duLXNlbGVjdGVkLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBkcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWQtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBkcm9wZG93bi1zZWxlY3RlZC1iZzogQGl0ZW0tYWN0aXZlLWJnO1xuXG4vLyBFbXB0eVxuQGVtcHR5LWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuXG4vLyBSYWRpb1xuQHJhZGlvLXNpemU6IDE2cHg7XG5AcmFkaW8tdG9wOiAwLjJlbTtcbkByYWRpby1ib3JkZXItd2lkdGg6IDFweDtcbkByYWRpby1kb3Qtc2l6ZTogQHJhZGlvLXNpemUgLSA4cHg7XG5AcmFkaW8tZG90LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkByYWRpby1kb3QtZGlzYWJsZWQtY29sb3I6IGZhZGUoQGJsYWNrLCAyMCUpO1xuQHJhZGlvLXNvbGlkLWNoZWNrZWQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcblxuLy8gUmFkaW8gYnV0dG9uc1xuQHJhZGlvLWJ1dHRvbi1iZzogQGJ0bi1kZWZhdWx0LWJnO1xuQHJhZGlvLWJ1dHRvbi1jaGVja2VkLWJnOiBAYnRuLWRlZmF1bHQtYmc7XG5AcmFkaW8tYnV0dG9uLWNvbG9yOiBAYnRuLWRlZmF1bHQtY29sb3I7XG5AcmFkaW8tYnV0dG9uLWhvdmVyLWNvbG9yOiBAcHJpbWFyeS01O1xuQHJhZGlvLWJ1dHRvbi1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LTc7XG5AcmFkaW8tYnV0dG9uLXBhZGRpbmctaG9yaXpvbnRhbDogQHBhZGRpbmctbWQgLSAxcHg7XG5AcmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtYmc6IEBkaXNhYmxlZC1hY3RpdmUtYmc7XG5AcmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcbkByYWRpby13cmFwcGVyLW1hcmdpbi1yaWdodDogOHB4O1xuXG4vLyBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXG4vLyBAc2NyZWVuLXhzIGFuZCBAc2NyZWVuLXhzLW1pbiBpcyBub3QgdXNlZCBpbiBHcmlkXG4vLyBzbWFsbGVzdCBicmVhayBwb2ludCBpcyBAc2NyZWVuLW1kXG5Ac2NyZWVuLXhzOiA0ODBweDtcbkBzY3JlZW4teHMtbWluOiBAc2NyZWVuLXhzO1xuLy8g8J+RhiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuXG4vLyDwn5GHIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuQHNjcmVlbi1zbTogNTc2cHg7XG5Ac2NyZWVuLXNtLW1pbjogQHNjcmVlbi1zbTtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3BcbkBzY3JlZW4tbWQ6IDc2OHB4O1xuQHNjcmVlbi1tZC1taW46IEBzY3JlZW4tbWQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuQHNjcmVlbi1sZzogOTkycHg7XG5Ac2NyZWVuLWxnLW1pbjogQHNjcmVlbi1sZztcblxuLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gZnVsbCBoZFxuQHNjcmVlbi14bDogMTIwMHB4O1xuQHNjcmVlbi14bC1taW46IEBzY3JlZW4teGw7XG5cbi8vIEV4dHJhIGV4dHJhIGxhcmdlIHNjcmVlbiAvIGxhcmdlIGRlc2t0b3BcbkBzY3JlZW4teHhsOiAxNjAwcHg7XG5Ac2NyZWVuLXh4bC1taW46IEBzY3JlZW4teHhsO1xuXG4vLyBwcm92aWRlIGEgbWF4aW11bVxuQHNjcmVlbi14cy1tYXg6IChAc2NyZWVuLXNtLW1pbiAtIDFweCk7XG5Ac2NyZWVuLXNtLW1heDogKEBzY3JlZW4tbWQtbWluIC0gMXB4KTtcbkBzY3JlZW4tbWQtbWF4OiAoQHNjcmVlbi1sZy1taW4gLSAxcHgpO1xuQHNjcmVlbi1sZy1tYXg6IChAc2NyZWVuLXhsLW1pbiAtIDFweCk7XG5Ac2NyZWVuLXhsLW1heDogKEBzY3JlZW4teHhsLW1pbiAtIDFweCk7XG5cbi8vIEdyaWQgc3lzdGVtXG5AZ3JpZC1jb2x1bW5zOiAyNDtcblxuLy8gTGF5b3V0XG5AbGF5b3V0LWJvZHktYmFja2dyb3VuZDogI2YwZjJmNTtcbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6ICMwMDE1Mjk7XG5AbGF5b3V0LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5AbGF5b3V0LWhlYWRlci1wYWRkaW5nOiAwIDUwcHg7XG5AbGF5b3V0LWhlYWRlci1jb2xvcjogQHRleHQtY29sb3I7XG5AbGF5b3V0LWZvb3Rlci1wYWRkaW5nOiAyNHB4IDUwcHg7XG5AbGF5b3V0LWZvb3Rlci1iYWNrZ3JvdW5kOiBAbGF5b3V0LWJvZHktYmFja2dyb3VuZDtcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZDogQGxheW91dC1oZWFkZXItYmFja2dyb3VuZDtcbkBsYXlvdXQtdHJpZ2dlci1oZWlnaHQ6IDQ4cHg7XG5AbGF5b3V0LXRyaWdnZXItYmFja2dyb3VuZDogIzAwMjE0MDtcbkBsYXlvdXQtdHJpZ2dlci1jb2xvcjogI2ZmZjtcbkBsYXlvdXQtemVyby10cmlnZ2VyLXdpZHRoOiAzNnB4O1xuQGxheW91dC16ZXJvLXRyaWdnZXItaGVpZ2h0OiA0MnB4O1xuLy8gTGF5b3V0IGxpZ2h0IHRoZW1lXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQtbGlnaHQ6ICNmZmY7XG5AbGF5b3V0LXRyaWdnZXItYmFja2dyb3VuZC1saWdodDogI2ZmZjtcbkBsYXlvdXQtdHJpZ2dlci1jb2xvci1saWdodDogQHRleHQtY29sb3I7XG5cbi8vIHotaW5kZXggbGlzdCwgb3JkZXIgYnkgYHotaW5kZXhgXG5AemluZGV4LWJhZGdlOiBhdXRvO1xuQHppbmRleC10YWJsZS1maXhlZDogMjtcbkB6aW5kZXgtYWZmaXg6IDEwO1xuQHppbmRleC1iYWNrLXRvcDogMTA7XG5AemluZGV4LXBpY2tlci1wYW5lbDogMTA7XG5AemluZGV4LXBvcHVwLWNsb3NlOiAxMDtcbkB6aW5kZXgtbW9kYWw6IDEwMDA7XG5AemluZGV4LW1vZGFsLW1hc2s6IDEwMDA7XG5AemluZGV4LW1lc3NhZ2U6IDEwMTA7XG5AemluZGV4LW5vdGlmaWNhdGlvbjogMTAxMDtcbkB6aW5kZXgtcG9wb3ZlcjogMTAzMDtcbkB6aW5kZXgtZHJvcGRvd246IDEwNTA7XG5AemluZGV4LXBpY2tlcjogMTA1MDtcbkB6aW5kZXgtcG9wb2NvbmZpcm06IDEwNjA7XG5AemluZGV4LXRvb2x0aXA6IDEwNzA7XG5AemluZGV4LWltYWdlOiAxMDgwO1xuXG4vLyBBbmltYXRpb25cbkBhbmltYXRpb24tZHVyYXRpb24tc2xvdzogMC4zczsgLy8gTW9kYWxcbkBhbmltYXRpb24tZHVyYXRpb24tYmFzZTogMC4ycztcbkBhbmltYXRpb24tZHVyYXRpb24tZmFzdDogMC4xczsgLy8gVG9vbHRpcFxuXG4vL0NvbGxhcHNlUGFuZWxcbkBjb2xsYXBzZS1wYW5lbC1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4vL0Ryb3Bkb3duXG5AZHJvcGRvd24tbWVudS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc6IDVweDtcbkBkcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc6IDRweDtcbkBkcm9wZG93bi1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBkcm9wZG93bi1saW5lLWhlaWdodDogMjJweDtcblxuLy8gRm9ybVxuLy8gLS0tXG5AbGFiZWwtcmVxdWlyZWQtY29sb3I6IEBoaWdobGlnaHQtY29sb3I7XG5AbGFiZWwtY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQGZvcm0td2FybmluZy1pbnB1dC1iZzogQGlucHV0LWJnO1xuQGZvcm0taXRlbS1tYXJnaW4tYm90dG9tOiAyNHB4O1xuQGZvcm0taXRlbS10cmFpbGluZy1jb2xvbjogdHJ1ZTtcbkBmb3JtLXZlcnRpY2FsLWxhYmVsLXBhZGRpbmc6IDAgMCA4cHg7XG5AZm9ybS12ZXJ0aWNhbC1sYWJlbC1tYXJnaW46IDA7XG5AZm9ybS1pdGVtLWxhYmVsLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQGZvcm0taXRlbS1sYWJlbC1oZWlnaHQ6IEBpbnB1dC1oZWlnaHQtYmFzZTtcbkBmb3JtLWl0ZW0tbGFiZWwtY29sb24tbWFyZ2luLXJpZ2h0OiA4cHg7XG5AZm9ybS1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1sZWZ0OiAycHg7XG5AZm9ybS1lcnJvci1pbnB1dC1iZzogQGlucHV0LWJnO1xuXG4vLyBJbnB1dFxuLy8gLS0tXG5AaW5wdXQtaGVpZ2h0LWJhc2U6IEBoZWlnaHQtYmFzZTtcbkBpbnB1dC1oZWlnaHQtbGc6IEBoZWlnaHQtbGc7XG5AaW5wdXQtaGVpZ2h0LXNtOiBAaGVpZ2h0LXNtO1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbDogQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsIC0gMXB4O1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlOiBAaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsO1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1zbTogQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsLXNtIC0gMXB4O1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1sZzogQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbDtcbkBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2U6IG1heChcbiAgKHJvdW5kKCgoQGlucHV0LWhlaWdodC1iYXNlIC0gQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpIC8gMikgKiAxMCkgLyAxMCkgLVxuICAgIEBib3JkZXItd2lkdGgtYmFzZSxcbiAgM3B4XG4pO1xuQGlucHV0LXBhZGRpbmctdmVydGljYWwtc206IG1heChcbiAgKHJvdW5kKCgoQGlucHV0LWhlaWdodC1zbSAtIEBmb250LXNpemUtYmFzZSAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTApIC1cbiAgICBAYm9yZGVyLXdpZHRoLWJhc2UsXG4gIDBcbik7XG5AaW5wdXQtcGFkZGluZy12ZXJ0aWNhbC1sZzogKFxuICAgIGNlaWwoKChAaW5wdXQtaGVpZ2h0LWxnIC0gQGZvbnQtc2l6ZS1sZyAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTBcbiAgKSAtIEBib3JkZXItd2lkdGgtYmFzZTtcbkBpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogaHN2KDAsIDAsIDc1JSk7XG5AaW5wdXQtY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGlucHV0LWljb24tY29sb3I6IEBpbnB1dC1jb2xvcjtcbkBpbnB1dC1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItYmFzZTtcbkBpbnB1dC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGlucHV0LW51bWJlci1ob3Zlci1ib3JkZXItY29sb3I6IEBpbnB1dC1ob3Zlci1ib3JkZXItY29sb3I7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItYWN0aXZlLWJnOiAjZjRmNGY0O1xuQGlucHV0LW51bWJlci1oYW5kbGVyLWhvdmVyLWJnOiBAcHJpbWFyeS01O1xuQGlucHV0LW51bWJlci1oYW5kbGVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLWJhc2U7XG5AaW5wdXQtYWRkb24tYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcjogQHByaW1hcnktNTtcbkBpbnB1dC1kaXNhYmxlZC1iZzogQGRpc2FibGVkLWJnO1xuQGlucHV0LW91dGxpbmUtb2Zmc2V0OiAwIDA7XG5AaW5wdXQtaWNvbi1ob3Zlci1jb2xvcjogZmFkZShAYmxhY2ssIDg1JSk7XG5AaW5wdXQtZGlzYWJsZWQtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcblxuLy8gTWVudGlvbnNcbi8vIC0tLVxuQG1lbnRpb25zLWRyb3Bkb3duLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudGlvbnMtZHJvcGRvd24tbWVudS1pdGVtLWhvdmVyLWJnOiBAbWVudGlvbnMtZHJvcGRvd24tYmc7XG5cbi8vIFNlbGVjdFxuLy8gLS0tXG5Ac2VsZWN0LWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1iYXNlO1xuQHNlbGVjdC1pdGVtLXNlbGVjdGVkLWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBzZWxlY3QtaXRlbS1zZWxlY3RlZC1mb250LXdlaWdodDogNjAwO1xuQHNlbGVjdC1kcm9wZG93bi1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHNlbGVjdC1pdGVtLXNlbGVjdGVkLWJnOiBAcHJpbWFyeS0xO1xuQHNlbGVjdC1pdGVtLWFjdGl2ZS1iZzogQGl0ZW0taG92ZXItYmc7XG5Ac2VsZWN0LWRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc6IEBkcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nO1xuQHNlbGVjdC1kcm9wZG93bi1mb250LXNpemU6IEBkcm9wZG93bi1mb250LXNpemU7XG5Ac2VsZWN0LWRyb3Bkb3duLWxpbmUtaGVpZ2h0OiBAZHJvcGRvd24tbGluZS1oZWlnaHQ7XG5Ac2VsZWN0LWRyb3Bkb3duLWhlaWdodDogMzJweDtcbkBzZWxlY3QtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHNlbGVjdC1jbGVhci1iYWNrZ3JvdW5kOiBAc2VsZWN0LWJhY2tncm91bmQ7XG5Ac2VsZWN0LXNlbGVjdGlvbi1pdGVtLWJnOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHNlbGVjdC1zZWxlY3Rpb24taXRlbS1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5Ac2VsZWN0LXNpbmdsZS1pdGVtLWhlaWdodC1sZzogNDBweDtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1oZWlnaHQ6IEBpbnB1dC1oZWlnaHQtYmFzZSAtIEBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UgKiAyOyAvLyBOb3JtYWwgMjRweFxuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLWhlaWdodC1sZzogMzJweDtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1zcGFjaW5nLWhhbGY6IGNlaWwoKEBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UgLyAyKSk7XG5Ac2VsZWN0LW11bHRpcGxlLWRpc2FibGVkLWJhY2tncm91bmQ6IEBpbnB1dC1kaXNhYmxlZC1iZztcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1kaXNhYmxlZC1jb2xvcjogI2JmYmZiZjtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IEBzZWxlY3QtYm9yZGVyLWNvbG9yO1xuXG4vLyBDYXNjYWRlclxuLy8gLS0tXG5AY2FzY2FkZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjYXNjYWRlci1pdGVtLXNlbGVjdGVkLWJnOiBAcHJpbWFyeS0xO1xuQGNhc2NhZGVyLW1lbnUtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjYXNjYWRlci1tZW51LWJvcmRlci1jb2xvci1zcGxpdDogQGJvcmRlci1jb2xvci1zcGxpdDtcblxuLy8gQ2FzY2FkZXJcbi8vIC0tLS1cbkBjYXNjYWRlci1kcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nOiBAZHJvcGRvd24tdmVydGljYWwtcGFkZGluZztcbkBjYXNjYWRlci1kcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc6IEBkcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc7XG5AY2FzY2FkZXItZHJvcGRvd24tZm9udC1zaXplOiBAZHJvcGRvd24tZm9udC1zaXplO1xuQGNhc2NhZGVyLWRyb3Bkb3duLWxpbmUtaGVpZ2h0OiBAZHJvcGRvd24tbGluZS1oZWlnaHQ7XG5cbi8vIEFuY2hvclxuLy8gLS0tXG5AYW5jaG9yLWJnOiB0cmFuc3BhcmVudDtcbkBhbmNob3ItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQGFuY2hvci1saW5rLXRvcDogNHB4O1xuQGFuY2hvci1saW5rLWxlZnQ6IDE2cHg7XG5AYW5jaG9yLWxpbmstcGFkZGluZzogQGFuY2hvci1saW5rLXRvcCAwIEBhbmNob3ItbGluay10b3AgQGFuY2hvci1saW5rLWxlZnQ7XG5cbi8vIFRvb2x0aXBcbi8vIC0tLVxuLy8gVG9vbHRpcCBtYXggd2lkdGhcbkB0b29sdGlwLW1heC13aWR0aDogMjUwcHg7XG4vLyBUb29sdGlwIHRleHQgY29sb3JcbkB0b29sdGlwLWNvbG9yOiAjZmZmO1xuLy8gVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yXG5AdG9vbHRpcC1iZzogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbi8vIFRvb2x0aXAgYXJyb3cgd2lkdGhcbkB0b29sdGlwLWFycm93LXdpZHRoOiA4cHggKiBzcXJ0KDIpO1xuLy8gVG9vbHRpcCBkaXN0YW5jZSB3aXRoIHRyaWdnZXJcbkB0b29sdGlwLWRpc3RhbmNlOiBAdG9vbHRpcC1hcnJvdy13aWR0aCAtIDFweCArIDRweDtcbi8vIFRvb2x0aXAgYXJyb3cgY29sb3JcbkB0b29sdGlwLWFycm93LWNvbG9yOiBAdG9vbHRpcC1iZztcbkB0b29sdGlwLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cbi8vIFBvcG92ZXJcbi8vIC0tLVxuLy8gUG9wb3ZlciBib2R5IGJhY2tncm91bmQgY29sb3JcbkBwb3BvdmVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG4vLyBQb3BvdmVyIHRleHQgY29sb3JcbkBwb3BvdmVyLWNvbG9yOiBAdGV4dC1jb2xvcjtcbi8vIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuQHBvcG92ZXItbWluLXdpZHRoOiAxNzdweDtcbkBwb3BvdmVyLW1pbi1oZWlnaHQ6IDMycHg7XG4vLyBQb3BvdmVyIGFycm93IHdpZHRoXG5AcG9wb3Zlci1hcnJvdy13aWR0aDogQHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4vLyBQb3BvdmVyIGFycm93IGNvbG9yXG5AcG9wb3Zlci1hcnJvdy1jb2xvcjogQHBvcG92ZXItYmc7XG4vLyBQb3BvdmVyIG91dGVyIGFycm93IHdpZHRoXG4vLyBQb3BvdmVyIG91dGVyIGFycm93IGNvbG9yXG5AcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogQHBvcG92ZXItYmc7XG4vLyBQb3BvdmVyIGRpc3RhbmNlIHdpdGggdHJpZ2dlclxuQHBvcG92ZXItZGlzdGFuY2U6IEBwb3BvdmVyLWFycm93LXdpZHRoICsgNHB4O1xuQHBvcG92ZXItcGFkZGluZy1ob3Jpem9udGFsOiBAcGFkZGluZy1tZDtcblxuLy8gTW9kYWxcbi8vIC0tXG5AbW9kYWwtaGVhZGVyLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLW1kO1xuQG1vZGFsLWhlYWRlci1wYWRkaW5nLWhvcml6b250YWw6IEBwYWRkaW5nLWxnO1xuQG1vZGFsLWJvZHktcGFkZGluZzogQHBhZGRpbmctbGc7XG5AbW9kYWwtaGVhZGVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbW9kYWwtaGVhZGVyLXBhZGRpbmc6IEBtb2RhbC1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbCBAbW9kYWwtaGVhZGVyLXBhZGRpbmctaG9yaXpvbnRhbDtcbkBtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiBAYm9yZGVyLXdpZHRoLWJhc2U7XG5AbW9kYWwtaGVhZGVyLWJvcmRlci1zdHlsZTogQGJvcmRlci1zdHlsZS1iYXNlO1xuQG1vZGFsLWhlYWRlci10aXRsZS1saW5lLWhlaWdodDogMjJweDtcbkBtb2RhbC1oZWFkZXItdGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3Itc3BsaXQ6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AbW9kYWwtaGVhZGVyLWNsb3NlLXNpemU6IDU2cHg7XG5AbW9kYWwtY29udGVudC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG1vZGFsLWhlYWRpbmctY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQG1vZGFsLWNsb3NlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AbW9kYWwtZm9vdGVyLWJnOiB0cmFuc3BhcmVudDtcbkBtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yLXNwbGl0OiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQG1vZGFsLWZvb3Rlci1ib3JkZXItc3R5bGU6IEBib3JkZXItc3R5bGUtYmFzZTtcbkBtb2RhbC1mb290ZXItcGFkZGluZy12ZXJ0aWNhbDogMTBweDtcbkBtb2RhbC1mb290ZXItcGFkZGluZy1ob3Jpem9udGFsOiAxNnB4O1xuQG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IEBib3JkZXItd2lkdGgtYmFzZTtcbkBtb2RhbC1tYXNrLWJnOiBmYWRlKEBibGFjaywgNDUlKTtcbkBtb2RhbC1jb25maXJtLWJvZHktcGFkZGluZzogMzJweCAzMnB4IDI0cHg7XG5AbW9kYWwtY29uZmlybS10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtbGc7XG5cbi8vIFByb2dyZXNzXG4vLyAtLVxuQHByb2dyZXNzLWRlZmF1bHQtY29sb3I6IEBwcm9jZXNzaW5nLWNvbG9yO1xuQHByb2dyZXNzLXJlbWFpbmluZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkBwcm9ncmVzcy1pbmZvLXRleHQtY29sb3I6IEBwcm9ncmVzcy10ZXh0LWNvbG9yO1xuQHByb2dyZXNzLXJhZGl1czogMTAwcHg7XG5AcHJvZ3Jlc3Mtc3RlcHMtaXRlbS1iZzogI2YzZjNmMztcbkBwcm9ncmVzcy10ZXh0LWZvbnQtc2l6ZTogMWVtO1xuQHByb2dyZXNzLXRleHQtY29sb3I6IEB0ZXh0LWNvbG9yOyAvLyBUaGlzIGlzIGZvciBjaXJjbGUgdGV4dCBjb2xvciwgc2hvdWxkIGJlIHJlbmFtZWQgYmV0dGVyXG5AcHJvZ3Jlc3MtY2lyY2xlLXRleHQtZm9udC1zaXplOiAxZW07XG4vLyBNZW51XG4vLyAtLS1cbkBtZW51LWlubGluZS10b3BsZXZlbC1pdGVtLWhlaWdodDogNDBweDtcbkBtZW51LWl0ZW0taGVpZ2h0OiA0MHB4O1xuQG1lbnUtaXRlbS1ncm91cC1oZWlnaHQ6IEBsaW5lLWhlaWdodC1iYXNlO1xuQG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4O1xuQG1lbnUtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LXBvcHVwLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudS1pdGVtLWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBtZW51LWlubGluZS1zdWJtZW51LWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkBtZW51LWhpZ2hsaWdodC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AbWVudS1oaWdobGlnaHQtZGFuZ2VyLWNvbG9yOiBAZXJyb3ItY29sb3I7XG5AbWVudS1pdGVtLWFjdGl2ZS1iZzogQHByaW1hcnktMTtcbkBtZW51LWl0ZW0tYWN0aXZlLWRhbmdlci1iZzogQHJlZC0xO1xuQG1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLXdpZHRoOiAzcHg7XG5AbWVudS1pdGVtLWdyb3VwLXRpdGxlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AbWVudS1pdGVtLXZlcnRpY2FsLW1hcmdpbjogNHB4O1xuQG1lbnUtaXRlbS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBtZW51LWl0ZW0tYm91bmRhcnktbWFyZ2luOiA4cHg7XG5AbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbDogMjBweDtcbkBtZW51LWl0ZW0tcGFkZGluZzogMCBAbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbDtcbkBtZW51LWhvcml6b250YWwtbGluZS1oZWlnaHQ6IDQ2cHg7XG5AbWVudS1pY29uLW1hcmdpbi1yaWdodDogMTBweDtcbkBtZW51LWljb24tc2l6ZTogQG1lbnUtaXRlbS1mb250LXNpemU7XG5AbWVudS1pY29uLXNpemUtbGc6IEBmb250LXNpemUtbGc7XG5AbWVudS1pdGVtLWdyb3VwLXRpdGxlLWZvbnQtc2l6ZTogQG1lbnUtaXRlbS1mb250LXNpemU7XG5cbi8vIGRhcmsgdGhlbWVcbkBtZW51LWRhcmstY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeS1kYXJrO1xuQG1lbnUtZGFyay1kYW5nZXItY29sb3I6IEBlcnJvci1jb2xvcjtcbkBtZW51LWRhcmstYmc6IEBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ7XG5AbWVudS1kYXJrLWFycm93LWNvbG9yOiAjZmZmO1xuQG1lbnUtZGFyay1pbmxpbmUtc3VibWVudS1iZzogIzAwMGMxNztcbkBtZW51LWRhcmstaGlnaGxpZ2h0LWNvbG9yOiAjZmZmO1xuQG1lbnUtZGFyay1pdGVtLWFjdGl2ZS1iZzogQHByaW1hcnktY29sb3I7XG5AbWVudS1kYXJrLWl0ZW0tYWN0aXZlLWRhbmdlci1iZzogQGVycm9yLWNvbG9yO1xuQG1lbnUtZGFyay1zZWxlY3RlZC1pdGVtLWljb24tY29sb3I6IEB3aGl0ZTtcbkBtZW51LWRhcmstc2VsZWN0ZWQtaXRlbS10ZXh0LWNvbG9yOiBAd2hpdGU7XG5AbWVudS1kYXJrLWl0ZW0taG92ZXItYmc6IHRyYW5zcGFyZW50O1xuLy8gU3BpblxuLy8gLS0tXG5Ac3Bpbi1kb3Qtc2l6ZS1zbTogMTRweDtcbkBzcGluLWRvdC1zaXplOiAyMHB4O1xuQHNwaW4tZG90LXNpemUtbGc6IDMycHg7XG5cbi8vIFRhYmxlXG4vLyAtLVxuQHRhYmxlLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGFibGUtaGVhZGVyLWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWJsZS1oZWFkZXItY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQHRhYmxlLWhlYWRlci1zb3J0LWJnOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHRhYmxlLWJvZHktc29ydC1iZzogI2ZhZmFmYTtcbkB0YWJsZS1yb3ctaG92ZXItYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQHRhYmxlLXNlbGVjdGVkLXJvdy1jb2xvcjogaW5oZXJpdDtcbkB0YWJsZS1zZWxlY3RlZC1yb3ctYmc6IEBwcmltYXJ5LTE7XG5AdGFibGUtYm9keS1zZWxlY3RlZC1zb3J0LWJnOiBAdGFibGUtc2VsZWN0ZWQtcm93LWJnO1xuQHRhYmxlLXNlbGVjdGVkLXJvdy1ob3Zlci1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZC0wMiknO1xuQHRhYmxlLWV4cGFuZGVkLXJvdy1iZzogI2ZiZmJmYjtcbkB0YWJsZS1wYWRkaW5nLXZlcnRpY2FsOiAxNnB4O1xuQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbDogMTZweDtcbkB0YWJsZS1wYWRkaW5nLXZlcnRpY2FsLW1kOiAoQHRhYmxlLXBhZGRpbmctdmVydGljYWwgKiAzIC8gNCk7XG5AdGFibGUtcGFkZGluZy1ob3Jpem9udGFsLW1kOiAoQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbCAvIDIpO1xuQHRhYmxlLXBhZGRpbmctdmVydGljYWwtc206IChAdGFibGUtcGFkZGluZy12ZXJ0aWNhbCAvIDIpO1xuQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbC1zbTogKEB0YWJsZS1wYWRkaW5nLWhvcml6b250YWwgLyAyKTtcbkB0YWJsZS1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AdGFibGUtYm9yZGVyLXJhZGl1cy1iYXNlOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQHRhYmxlLWZvb3Rlci1iZzogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AdGFibGUtZm9vdGVyLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkB0YWJsZS1oZWFkZXItYmctc206IEB0YWJsZS1oZWFkZXItYmc7XG5AdGFibGUtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AdGFibGUtZm9udC1zaXplLW1kOiBAdGFibGUtZm9udC1zaXplO1xuQHRhYmxlLWZvbnQtc2l6ZS1zbTogQHRhYmxlLWZvbnQtc2l6ZTtcbkB0YWJsZS1oZWFkZXItY2VsbC1zcGxpdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbi8vIFNvcnRlclxuLy8gTGVnYWN5OiBgdGFibGUtaGVhZGVyLXNvcnQtYWN0aXZlLWJnYCBpcyB1c2VkIGZvciBob3ZlciBub3QgcmVhbCBhY3RpdmVcbkB0YWJsZS1oZWFkZXItc29ydC1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5AdGFibGUtZml4ZWQtaGVhZGVyLXNvcnQtYWN0aXZlLWJnOiBoc3YoMCwgMCwgOTYlKTtcblxuLy8gRmlsdGVyXG5AdGFibGUtaGVhZGVyLWZpbHRlci1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5AdGFibGUtZmlsdGVyLWJ0bnMtYmc6IGluaGVyaXQ7XG5AdGFibGUtZmlsdGVyLWRyb3Bkb3duLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGFibGUtZXhwYW5kLWljb24tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkB0YWJsZS1zZWxlY3Rpb24tY29sdW1uLXdpZHRoOiAzMnB4O1xuLy8gU3RpY2t5XG5AdGFibGUtc3RpY2t5LXNjcm9sbC1iYXItYmc6IGZhZGUoIzAwMCwgMzUlKTtcbkB0YWJsZS1zdGlja3ktc2Nyb2xsLWJhci1yYWRpdXM6IDRweDtcblxuLy8gVGFnXG4vLyAtLVxuQHRhZy1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQHRhZy1kZWZhdWx0LWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWctZGVmYXVsdC1jb2xvcjogQHRleHQtY29sb3I7XG5AdGFnLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbTtcbkB0YWctbGluZS1oZWlnaHQ6IDIwcHg7XG5cbi8vIFRpbWVQaWNrZXJcbi8vIC0tLVxuQHBpY2tlci1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBpY2tlci1iYXNpYy1jZWxsLWhvdmVyLWNvbG9yOiBAaXRlbS1ob3Zlci1iZztcbkBwaWNrZXItYmFzaWMtY2VsbC1hY3RpdmUtd2l0aC1yYW5nZS1jb2xvcjogQHByaW1hcnktMTtcbkBwaWNrZXItYmFzaWMtY2VsbC1ob3Zlci13aXRoLXJhbmdlLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWwtMzUpJztcbkBwaWNrZXItYmFzaWMtY2VsbC1kaXNhYmxlZC1iZzogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkBwaWNrZXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHBpY2tlci1kYXRlLWhvdmVyLXJhbmdlLWJvcmRlci1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1sLTIwKSc7XG5AcGlja2VyLWRhdGUtaG92ZXItcmFuZ2UtY29sb3I6IEBwaWNrZXItYmFzaWMtY2VsbC1ob3Zlci13aXRoLXJhbmdlLWNvbG9yO1xuQHBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi13aWR0aDogNTZweDtcbkBwaWNrZXItdGltZS1wYW5lbC1jb2x1bW4taGVpZ2h0OiAyMjRweDtcbkBwaWNrZXItdGltZS1wYW5lbC1jZWxsLWhlaWdodDogMjhweDtcbkBwaWNrZXItcGFuZWwtY2VsbC1oZWlnaHQ6IDI0cHg7XG5AcGlja2VyLXBhbmVsLWNlbGwtd2lkdGg6IDM2cHg7XG5AcGlja2VyLXRleHQtaGVpZ2h0OiA0MHB4O1xuQHBpY2tlci1wYW5lbC13aXRob3V0LXRpbWUtY2VsbC1oZWlnaHQ6IDY2cHg7XG5cbi8vIENhbGVuZGFyXG4vLyAtLS1cbkBjYWxlbmRhci1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhbGVuZGFyLWlucHV0LWJnOiBAaW5wdXQtYmc7XG5AY2FsZW5kYXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLWludmVyc2U7XG5AY2FsZW5kYXItaXRlbS1hY3RpdmUtYmc6IEBpdGVtLWFjdGl2ZS1iZztcbkBjYWxlbmRhci1jb2x1bW4tYWN0aXZlLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUtZGVwcmVjYXRlZC1mLTMwKSc7XG5AY2FsZW5kYXItZnVsbC1iZzogQGNhbGVuZGFyLWJnO1xuQGNhbGVuZGFyLWZ1bGwtcGFuZWwtYmc6IEBjYWxlbmRhci1mdWxsLWJnO1xuXG4vLyBDYXJvdXNlbFxuLy8gLS0tXG5AY2Fyb3VzZWwtZG90LXdpZHRoOiAxNnB4O1xuQGNhcm91c2VsLWRvdC1oZWlnaHQ6IDNweDtcbkBjYXJvdXNlbC1kb3QtYWN0aXZlLXdpZHRoOiAyNHB4O1xuXG4vLyBCYWRnZVxuLy8gLS0tXG5AYmFkZ2UtaGVpZ2h0OiAyMHB4O1xuQGJhZGdlLWhlaWdodC1zbTogMTRweDtcbkBiYWRnZS1kb3Qtc2l6ZTogNnB4O1xuQGJhZGdlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbTtcbkBiYWRnZS1mb250LXNpemUtc206IEBmb250LXNpemUtc207XG5AYmFkZ2UtZm9udC13ZWlnaHQ6IG5vcm1hbDtcbkBiYWRnZS1zdGF0dXMtc2l6ZTogNnB4O1xuQGJhZGdlLXRleHQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBiYWRnZS1jb2xvcjogQGhpZ2hsaWdodC1jb2xvcjtcblxuLy8gUmF0ZVxuLy8gLS0tXG5AcmF0ZS1zdGFyLWNvbG9yOiBAeWVsbG93LTY7XG5AcmF0ZS1zdGFyLWJnOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHJhdGUtc3Rhci1zaXplOiAyMHB4O1xuQHJhdGUtc3Rhci1ob3Zlci1zY2FsZTogc2NhbGUoMS4xKTtcblxuLy8gQ2FyZFxuLy8gLS0tXG5AY2FyZC1oZWFkLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkBjYXJkLWhlYWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5AY2FyZC1oZWFkLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1sZztcbkBjYXJkLWhlYWQtZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AY2FyZC1oZWFkLXBhZGRpbmc6IDE2cHg7XG5AY2FyZC1oZWFkLXBhZGRpbmctc206IChAY2FyZC1oZWFkLXBhZGRpbmcgLyAyKTtcbkBjYXJkLWhlYWQtaGVpZ2h0OiA0OHB4O1xuQGNhcmQtaGVhZC1oZWlnaHQtc206IDM2cHg7XG5AY2FyZC1pbm5lci1oZWFkLXBhZGRpbmc6IDEycHg7XG5AY2FyZC1wYWRkaW5nLWJhc2U6IDI0cHg7XG5AY2FyZC1wYWRkaW5nLWJhc2Utc206IChAY2FyZC1wYWRkaW5nLWJhc2UgLyAyKTtcbkBjYXJkLWFjdGlvbnMtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhcmQtYWN0aW9ucy1saS1tYXJnaW46IDEycHggMDtcbkBjYXJkLXNrZWxldG9uLWJnOiAjY2ZkOGRjO1xuQGNhcmQtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhcmQtc2hhZG93OiAwIDFweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAwIDVweCAxMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuQGNhcmQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQGNhcmQtaGVhZC10YWJzLW1hcmdpbi1ib3R0b206IC0xN3B4O1xuQGNhcmQtaGVhZC1leHRyYS1jb2xvcjogQHRleHQtY29sb3I7XG5cbi8vIENvbW1lbnRcbi8vIC0tLVxuQGNvbW1lbnQtYmc6IGluaGVyaXQ7XG5AY29tbWVudC1wYWRkaW5nLWJhc2U6IEBwYWRkaW5nLW1kIDA7XG5AY29tbWVudC1uZXN0LWluZGVudDogNDRweDtcbkBjb21tZW50LWZvbnQtc2l6ZS1iYXNlOiBAZm9udC1zaXplLWJhc2U7XG5AY29tbWVudC1mb250LXNpemUtc206IEBmb250LXNpemUtc207XG5AY29tbWVudC1hdXRob3ItbmFtZS1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGNvbW1lbnQtYXV0aG9yLXRpbWUtY29sb3I6ICNjY2M7XG5AY29tbWVudC1hY3Rpb24tY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBjb21tZW50LWFjdGlvbi1ob3Zlci1jb2xvcjogIzU5NTk1OTtcbkBjb21tZW50LWFjdGlvbnMtbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcbkBjb21tZW50LWFjdGlvbnMtbWFyZ2luLXRvcDogQG1hcmdpbi1zbTtcbkBjb21tZW50LWNvbnRlbnQtZGV0YWlsLXAtbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcblxuLy8gVGFic1xuLy8gLS0tXG5AdGFicy1jYXJkLWhlYWQtYmFja2dyb3VuZDogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AdGFicy1jYXJkLWhlaWdodDogNDBweDtcbkB0YWJzLWNhcmQtYWN0aXZlLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkB0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nOiAoXG4gICAgKEB0YWJzLWNhcmQtaGVpZ2h0IC0gZmxvb3IoQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpKSAvIDJcbiAgKSAtIEBib3JkZXItd2lkdGgtYmFzZSBAcGFkZGluZy1tZDtcbkB0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nLXNtOiA2cHggQHBhZGRpbmctbWQ7XG5AdGFicy1jYXJkLWhvcml6b250YWwtcGFkZGluZy1sZzogN3B4IEBwYWRkaW5nLW1kIDZweDtcbkB0YWJzLXRpdGxlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQHRhYnMtdGl0bGUtZm9udC1zaXplLWxnOiBAZm9udC1zaXplLWxnO1xuQHRhYnMtdGl0bGUtZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AdGFicy1pbmstYmFyLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkB0YWJzLWJhci1tYXJnaW46IDAgMCBAbWFyZ2luLW1kIDA7XG5AdGFicy1ob3Jpem9udGFsLWd1dHRlcjogMzJweDtcbkB0YWJzLWhvcml6b250YWwtbWFyZ2luOiAwIDAgMCBAdGFicy1ob3Jpem9udGFsLWd1dHRlcjtcbkB0YWJzLWhvcml6b250YWwtbWFyZ2luLXJ0bDogMCAwIDAgMzJweDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZzogQHBhZGRpbmctc20gMDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZy1sZzogQHBhZGRpbmctbWQgMDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZy1zbTogQHBhZGRpbmcteHMgMDtcbkB0YWJzLXZlcnRpY2FsLXBhZGRpbmc6IEBwYWRkaW5nLXhzIEBwYWRkaW5nLWxnO1xuQHRhYnMtdmVydGljYWwtbWFyZ2luOiBAbWFyZ2luLW1kIDAgMCAwO1xuQHRhYnMtc2Nyb2xsaW5nLXNpemU6IDMycHg7XG5AdGFicy1oaWdobGlnaHQtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQHRhYnMtaG92ZXItY29sb3I6IEBwcmltYXJ5LTU7XG5AdGFicy1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LTc7XG5AdGFicy1jYXJkLWd1dHRlcjogMnB4O1xuQHRhYnMtY2FyZC10YWItYWN0aXZlLWJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuLy8gQmFja1RvcFxuLy8gLS0tXG5AYmFjay10b3AtY29sb3I6ICNmZmY7XG5AYmFjay10b3AtYmc6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBiYWNrLXRvcC1ob3Zlci1iZzogQHRleHQtY29sb3I7XG5cbi8vIEF2YXRhclxuLy8gLS0tXG5AYXZhdGFyLXNpemUtYmFzZTogMzJweDtcbkBhdmF0YXItc2l6ZS1sZzogNDBweDtcbkBhdmF0YXItc2l6ZS1zbTogMjRweDtcbkBhdmF0YXItZm9udC1zaXplLWJhc2U6IDE4cHg7XG5AYXZhdGFyLWZvbnQtc2l6ZS1sZzogMjRweDtcbkBhdmF0YXItZm9udC1zaXplLXNtOiAxNHB4O1xuQGF2YXRhci1iZzogI2NjYztcbkBhdmF0YXItY29sb3I6ICNmZmY7XG5AYXZhdGFyLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AYXZhdGFyLWdyb3VwLW92ZXJsYXBwaW5nOiAtOHB4O1xuQGF2YXRhci1ncm91cC1zcGFjZTogM3B4O1xuQGF2YXRhci1ncm91cC1ib3JkZXItY29sb3I6ICNmZmY7XG5cbi8vIFN3aXRjaFxuLy8gLS0tXG5Ac3dpdGNoLWhlaWdodDogMjJweDtcbkBzd2l0Y2gtc20taGVpZ2h0OiAxNnB4O1xuQHN3aXRjaC1taW4td2lkdGg6IDQ0cHg7XG5Ac3dpdGNoLXNtLW1pbi13aWR0aDogMjhweDtcbkBzd2l0Y2gtZGlzYWJsZWQtb3BhY2l0eTogMC40O1xuQHN3aXRjaC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5Ac3dpdGNoLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Ac3dpdGNoLXNoYWRvdy1jb2xvcjogZmFkZSgjMDAyMzBiLCAyMCUpO1xuQHN3aXRjaC1wYWRkaW5nOiAycHg7XG5Ac3dpdGNoLWlubmVyLW1hcmdpbi1taW46IGNlaWwoQHN3aXRjaC1oZWlnaHQgKiAwLjMpO1xuQHN3aXRjaC1pbm5lci1tYXJnaW4tbWF4OiBjZWlsKEBzd2l0Y2gtaGVpZ2h0ICogMS4xKTtcbkBzd2l0Y2gtc20taW5uZXItbWFyZ2luLW1pbjogY2VpbChAc3dpdGNoLXNtLWhlaWdodCAqIDAuMyk7XG5Ac3dpdGNoLXNtLWlubmVyLW1hcmdpbi1tYXg6IGNlaWwoQHN3aXRjaC1zbS1oZWlnaHQgKiAxLjEpO1xuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS1cbkBwYWdpbmF0aW9uLWl0ZW0tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBwYWdpbmF0aW9uLWl0ZW0tc2l6ZTogQGhlaWdodC1iYXNlO1xuQHBhZ2luYXRpb24taXRlbS1zaXplLXNtOiAyNHB4O1xuQHBhZ2luYXRpb24tZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbkBwYWdpbmF0aW9uLWZvbnQtd2VpZ2h0LWFjdGl2ZTogNTAwO1xuQHBhZ2luYXRpb24taXRlbS1iZy1hY3RpdmU6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBwYWdpbmF0aW9uLWl0ZW0tbGluay1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24taXRlbS1kaXNhYmxlZC1jb2xvci1hY3RpdmU6IEBkaXNhYmxlZC1jb2xvcjtcbkBwYWdpbmF0aW9uLWl0ZW0tZGlzYWJsZWQtYmctYWN0aXZlOiBAZGlzYWJsZWQtYWN0aXZlLWJnO1xuQHBhZ2luYXRpb24taXRlbS1pbnB1dC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24tbWluaS1vcHRpb25zLXNpemUtY2hhbmdlci10b3A6IDBweDtcblxuLy8gUGFnZUhlYWRlclxuLy8gLS0tXG5AcGFnZS1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctbGc7XG5AcGFnZS1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmctbWQ7XG5AcGFnZS1oZWFkZXItcGFkZGluZy1icmVhZGNydW1iOiBAcGFkZGluZy1zbTtcbkBwYWdlLWhlYWRlci1jb250ZW50LXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLXNtO1xuQHBhZ2UtaGVhZGVyLWJhY2stY29sb3I6ICMwMDA7XG5AcGFnZS1oZWFkZXItZ2hvc3QtYmc6IGluaGVyaXQ7XG5AcGFnZS1oZWFkZXItaGVhZGluZy10aXRsZTogQGhlYWRpbmctNC1zaXplO1xuQHBhZ2UtaGVhZGVyLWhlYWRpbmctc3ViLXRpdGxlOiAxNHB4O1xuQHBhZ2UtaGVhZGVyLXRhYnMtdGFiLWZvbnQtc2l6ZTogMTZweDtcblxuLy8gQnJlYWRjcnVtYlxuLy8gLS0tXG5AYnJlYWRjcnVtYi1iYXNlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AYnJlYWRjcnVtYi1sYXN0LWl0ZW0tY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGJyZWFkY3J1bWItZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AYnJlYWRjcnVtYi1pY29uLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQGJyZWFkY3J1bWItbGluay1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGJyZWFkY3J1bWItbGluay1jb2xvci1ob3ZlcjogQHRleHQtY29sb3I7XG5AYnJlYWRjcnVtYi1zZXBhcmF0b3ItY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBicmVhZGNydW1iLXNlcGFyYXRvci1tYXJnaW46IDAgQHBhZGRpbmcteHM7XG5cbi8vIFNsaWRlclxuLy8gLS0tXG5Ac2xpZGVyLW1hcmdpbjogMTBweCA2cHggMTBweDtcbkBzbGlkZXItcmFpbC1iYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHNsaWRlci1yYWlsLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNlMWUxZTE7XG5Ac2xpZGVyLXRyYWNrLWJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LTM7XG5Ac2xpZGVyLXRyYWNrLWJhY2tncm91bmQtY29sb3ItaG92ZXI6IEBwcmltYXJ5LTQ7XG5Ac2xpZGVyLWhhbmRsZS1ib3JkZXItd2lkdGg6IDJweDtcbkBzbGlkZXItaGFuZGxlLWJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBzbGlkZXItaGFuZGxlLWNvbG9yOiBAcHJpbWFyeS0zO1xuQHNsaWRlci1oYW5kbGUtY29sb3ItaG92ZXI6IEBwcmltYXJ5LTQ7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1czogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTIwKSc7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1cy1zaGFkb3c6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtZi0xMiknO1xuQHNsaWRlci1oYW5kbGUtY29sb3ItdG9vbHRpcC1vcGVuOiBAcHJpbWFyeS1jb2xvcjtcbkBzbGlkZXItaGFuZGxlLXNpemU6IDE0cHg7XG5Ac2xpZGVyLWhhbmRsZS1tYXJnaW4tdG9wOiAtNXB4O1xuQHNsaWRlci1oYW5kbGUtc2hhZG93OiAwO1xuQHNsaWRlci1kb3QtYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHNsaWRlci1kb3QtYm9yZGVyLWNvbG9yLWFjdGl2ZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTUwKSc7XG5Ac2xpZGVyLWRpc2FibGVkLWNvbG9yOiBAZGlzYWJsZWQtY29sb3I7XG5Ac2xpZGVyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcblxuLy8gVHJlZVxuLy8gLS0tXG5AdHJlZS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHRyZWUtdGl0bGUtaGVpZ2h0OiAyNHB4O1xuQHRyZWUtY2hpbGQtcGFkZGluZzogMThweDtcbkB0cmVlLWRpcmVjdG9yeS1zZWxlY3RlZC1jb2xvcjogI2ZmZjtcbkB0cmVlLWRpcmVjdG9yeS1zZWxlY3RlZC1iZzogQHByaW1hcnktY29sb3I7XG5AdHJlZS1ub2RlLWhvdmVyLWJnOiBAaXRlbS1ob3Zlci1iZztcbkB0cmVlLW5vZGUtc2VsZWN0ZWQtYmc6IEBwcmltYXJ5LTI7XG5cbi8vIENvbGxhcHNlXG4vLyAtLS1cbkBjb2xsYXBzZS1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctc20gQHBhZGRpbmctbWQ7XG5AY29sbGFwc2UtaGVhZGVyLXBhZGRpbmctZXh0cmE6IDQwcHg7XG5AY29sbGFwc2UtaGVhZGVyLWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkBjb2xsYXBzZS1jb250ZW50LXBhZGRpbmc6IEBwYWRkaW5nLW1kO1xuQGNvbGxhcHNlLWNvbnRlbnQtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjb2xsYXBzZS1oZWFkZXItYXJyb3ctbGVmdDogMTZweDtcblxuLy8gU2tlbGV0b25cbi8vIC0tLVxuQHNrZWxldG9uLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMik7XG5Ac2tlbGV0b24tdG8tY29sb3I6IHNoYWRlKEBza2VsZXRvbi1jb2xvciwgNSUpO1xuQHNrZWxldG9uLXBhcmFncmFwaC1tYXJnaW4tdG9wOiAyOHB4O1xuQHNrZWxldG9uLXBhcmFncmFwaC1saS1tYXJnaW4tdG9wOiBAbWFyZ2luLW1kO1xuQHNrZWxldG9uLXBhcmFncmFwaC1saS1oZWlnaHQ6IDE2cHg7XG5Ac2tlbGV0b24tdGl0bGUtaGVpZ2h0OiAxNnB4O1xuQHNrZWxldG9uLXRpdGxlLXBhcmFncmFwaC1tYXJnaW4tdG9wOiBAbWFyZ2luLWxnO1xuXG4vLyBUcmFuc2ZlclxuLy8gLS0tXG5AdHJhbnNmZXItaGVhZGVyLWhlaWdodDogNDBweDtcbkB0cmFuc2Zlci1pdGVtLWhlaWdodDogQGhlaWdodC1iYXNlO1xuQHRyYW5zZmVyLWRpc2FibGVkLWJnOiBAZGlzYWJsZWQtYmc7XG5AdHJhbnNmZXItbGlzdC1oZWlnaHQ6IDIwMHB4O1xuQHRyYW5zZmVyLWl0ZW0taG92ZXItYmc6IEBpdGVtLWhvdmVyLWJnO1xuQHRyYW5zZmVyLWl0ZW0tc2VsZWN0ZWQtaG92ZXItYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWFjdGl2ZS1kZXByZWNhdGVkLWQtMDIpJztcbkB0cmFuc2Zlci1pdGVtLXBhZGRpbmctdmVydGljYWw6IDZweDtcbkB0cmFuc2Zlci1saXN0LXNlYXJjaC1pY29uLXRvcDogMTJweDtcblxuLy8gTWVzc2FnZVxuLy8gLS0tXG5AbWVzc2FnZS1ub3RpY2UtY29udGVudC1wYWRkaW5nOiAxMHB4IDE2cHg7XG5AbWVzc2FnZS1ub3RpY2UtY29udGVudC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuLy8gTW90aW9uXG4vLyAtLS1cbkB3YXZlLWFuaW1hdGlvbi13aWR0aDogNnB4O1xuXG4vLyBBbGVydFxuLy8gLS0tXG5AYWxlcnQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IEBzdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyO1xuQGFsZXJ0LXN1Y2Nlc3MtYmctY29sb3I6IEBzdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYmc7XG5AYWxlcnQtc3VjY2Vzcy1pY29uLWNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbkBhbGVydC1pbmZvLWJvcmRlci1jb2xvcjogQGluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI7XG5AYWxlcnQtaW5mby1iZy1jb2xvcjogQGluZm8tY29sb3ItZGVwcmVjYXRlZC1iZztcbkBhbGVydC1pbmZvLWljb24tY29sb3I6IEBpbmZvLWNvbG9yO1xuQGFsZXJ0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBAd2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjtcbkBhbGVydC13YXJuaW5nLWJnLWNvbG9yOiBAd2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJnO1xuQGFsZXJ0LXdhcm5pbmctaWNvbi1jb2xvcjogQHdhcm5pbmctY29sb3I7XG5AYWxlcnQtZXJyb3ItYm9yZGVyLWNvbG9yOiBAZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI7XG5AYWxlcnQtZXJyb3ItYmctY29sb3I6IEBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJnO1xuQGFsZXJ0LWVycm9yLWljb24tY29sb3I6IEBlcnJvci1jb2xvcjtcbkBhbGVydC1tZXNzYWdlLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkBhbGVydC10ZXh0LWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBhbGVydC1jbG9zZS1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGFsZXJ0LWNsb3NlLWhvdmVyLWNvbG9yOiBAaWNvbi1jb2xvci1ob3ZlcjtcbkBhbGVydC1uby1pY29uLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLXhzO1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tbm8taWNvbi1wYWRkaW5nLXZlcnRpY2FsOiBAcGFkZGluZy1tZCAtIDFweDtcbkBhbGVydC13aXRoLWRlc2NyaXB0aW9uLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLW1kIC0gMXB4O1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tcGFkZGluZzogQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tcGFkZGluZy12ZXJ0aWNhbCAxNXB4XG4gIEBhbGVydC13aXRoLWRlc2NyaXB0aW9uLW5vLWljb24tcGFkZGluZy12ZXJ0aWNhbCBAYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1pY29uLXNpemU7XG5AYWxlcnQtaWNvbi10b3A6IDhweCArIEBmb250LXNpemUtYmFzZSAqIChAbGluZS1oZWlnaHQtYmFzZSAvIDIpIC0gKEBmb250LXNpemUtYmFzZSAvIDIpO1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24taWNvbi1zaXplOiAyNHB4O1xuXG4vLyBMaXN0XG4vLyAtLS1cbkBsaXN0LWhlYWRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbkBsaXN0LWZvb3Rlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbkBsaXN0LWVtcHR5LXRleHQtcGFkZGluZzogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLXBhZGRpbmc6IEBwYWRkaW5nLXNtIDA7XG5AbGlzdC1pdGVtLXBhZGRpbmctc206IEBwYWRkaW5nLXhzIEBwYWRkaW5nLW1kO1xuQGxpc3QtaXRlbS1wYWRkaW5nLWxnOiAxNnB4IDI0cHg7XG5AbGlzdC1pdGVtLW1ldGEtbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLW1ldGEtYXZhdGFyLW1hcmdpbi1yaWdodDogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLW1ldGEtdGl0bGUtbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctc207XG5AbGlzdC1jdXN0b21pemUtY2FyZC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuXG4vLyBTdGF0aXN0aWNcbi8vIC0tLVxuQHN0YXRpc3RpYy10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBzdGF0aXN0aWMtY29udGVudC1mb250LXNpemU6IDI0cHg7XG5Ac3RhdGlzdGljLXVuaXQtZm9udC1zaXplOiAyNHB4O1xuQHN0YXRpc3RpYy1mb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuXG4vLyBEcmF3ZXJcbi8vIC0tLVxuQGRyYXdlci1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctbWQgQHBhZGRpbmctbGc7XG5AZHJhd2VyLWJvZHktcGFkZGluZzogQHBhZGRpbmctbGc7XG5AZHJhd2VyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AZHJhd2VyLWZvb3Rlci1wYWRkaW5nLXZlcnRpY2FsOiBAbW9kYWwtZm9vdGVyLXBhZGRpbmctdmVydGljYWw7XG5AZHJhd2VyLWZvb3Rlci1wYWRkaW5nLWhvcml6b250YWw6IEBtb2RhbC1mb290ZXItcGFkZGluZy1ob3Jpem9udGFsO1xuQGRyYXdlci1oZWFkZXItY2xvc2Utc2l6ZTogNTZweDtcbkBkcmF3ZXItdGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQGRyYXdlci10aXRsZS1saW5lLWhlaWdodDogMjJweDtcblxuLy8gVGltZWxpbmVcbi8vIC0tLVxuQHRpbWVsaW5lLXdpZHRoOiAycHg7XG5AdGltZWxpbmUtY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AdGltZWxpbmUtZG90LWJvcmRlci13aWR0aDogMnB4O1xuQHRpbWVsaW5lLWRvdC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AdGltZWxpbmUtZG90LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGltZWxpbmUtaXRlbS1wYWRkaW5nLWJvdHRvbTogMjBweDtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLS0tXG5AdHlwb2dyYXBoeS10aXRsZS1mb250LXdlaWdodDogNjAwO1xuQHR5cG9ncmFwaHktdGl0bGUtbWFyZ2luLXRvcDogMS4yZW07XG5AdHlwb2dyYXBoeS10aXRsZS1tYXJnaW4tYm90dG9tOiAwLjVlbTtcblxuLy8gVXBsb2FkXG4vLyAtLS1cbkB1cGxvYWQtYWN0aW9ucy1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuXG4vLyBTdGVwc1xuLy8gLS0tXG5AcHJvY2Vzcy10YWlsLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHN0ZXBzLW5hdi1hcnJvdy1jb2xvcjogZmFkZShAYmxhY2ssIDI1JSk7XG5Ac3RlcHMtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHN0ZXBzLWljb24tc2l6ZTogMzJweDtcbkBzdGVwcy1pY29uLWN1c3RvbS1zaXplOiBAc3RlcHMtaWNvbi1zaXplO1xuQHN0ZXBzLWljb24tY3VzdG9tLXRvcDogMHB4O1xuQHN0ZXBzLWljb24tY3VzdG9tLWZvbnQtc2l6ZTogMjRweDtcbkBzdGVwcy1pY29uLXRvcDogLTAuNXB4O1xuQHN0ZXBzLWljb24tZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQHN0ZXBzLWljb24tbWFyZ2luOiAwIDhweCAwIDA7XG5Ac3RlcHMtdGl0bGUtbGluZS1oZWlnaHQ6IEBoZWlnaHQtYmFzZTtcbkBzdGVwcy1zbWFsbC1pY29uLXNpemU6IDI0cHg7XG5Ac3RlcHMtc21hbGwtaWNvbi1tYXJnaW46IDAgOHB4IDAgMDtcbkBzdGVwcy1kb3Qtc2l6ZTogOHB4O1xuQHN0ZXBzLWRvdC10b3A6IDJweDtcbkBzdGVwcy1jdXJyZW50LWRvdC1zaXplOiAxMHB4O1xuQHN0ZXBzLWRlc2NyaXB0aW9uLW1heC13aWR0aDogMTQwcHg7XG5Ac3RlcHMtbmF2LWNvbnRlbnQtbWF4LXdpZHRoOiBhdXRvO1xuQHN0ZXBzLXZlcnRpY2FsLWljb24td2lkdGg6IDE2cHg7XG5Ac3RlcHMtdmVydGljYWwtdGFpbC13aWR0aDogMTZweDtcbkBzdGVwcy12ZXJ0aWNhbC10YWlsLXdpZHRoLXNtOiAxMnB4O1xuXG4vLyBOb3RpZmljYXRpb25cbi8vIC0tLVxuQG5vdGlmaWNhdGlvbi1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG5vdGlmaWNhdGlvbi1wYWRkaW5nLXZlcnRpY2FsOiAxNnB4O1xuQG5vdGlmaWNhdGlvbi1wYWRkaW5nLWhvcml6b250YWw6IDI0cHg7XG5cbi8vIFJlc3VsdFxuLy8gLS0tXG5AcmVzdWx0LXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcbkByZXN1bHQtc3VidGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AcmVzdWx0LWljb24tZm9udC1zaXplOiA3MnB4O1xuQHJlc3VsdC1leHRyYS1tYXJnaW46IDI0cHggMCAwIDA7XG5cbi8vIEltYWdlXG4vLyAtLS1cbkBpbWFnZS1zaXplLWJhc2U6IDQ4cHg7XG5AaW1hZ2UtZm9udC1zaXplLWJhc2U6IDI0cHg7XG5AaW1hZ2UtYmc6ICNmNWY1ZjU7XG5AaW1hZ2UtY29sb3I6ICNmZmY7XG5AaW1hZ2UtbWFzay1mb250LXNpemU6IDE2cHg7XG5AaW1hZ2UtcHJldmlldy1vcGVyYXRpb24tc2l6ZTogMThweDtcbkBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1jb2xvcjogQHRleHQtY29sb3ItZGFyaztcbkBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1kaXNhYmxlZC1jb2xvcjogZmFkZShAaW1hZ2UtcHJldmlldy1vcGVyYXRpb24tY29sb3IsIDI1JSk7XG5cbi8vIFNlZ21lbnRlZFxuLy8gLS0tXG5Ac2VnbWVudGVkLWJnOiBmYWRlKEBibGFjaywgNCUpO1xuQHNlZ21lbnRlZC1ob3Zlci1iZzogZmFkZShAYmxhY2ssIDYlKTtcbkBzZWdtZW50ZWQtc2VsZWN0ZWQtYmc6IEB3aGl0ZTtcbkBzZWdtZW50ZWQtbGFiZWwtY29sb3I6IGZhZGUoQGJsYWNrLCA2NSUpO1xuQHNlZ21lbnRlZC1sYWJlbC1ob3Zlci1jb2xvcjogIzI2MjYyNjtcbiIsIi8qISBtaW5pcmVzZXQuY3NzIHYwLjAuNiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxcbmJvZHksXG5wLFxub2wsXG51bCxcbmxpLFxuZGwsXG5kdCxcbmRkLFxuYmxvY2txdW90ZSxcbmZpZ3VyZSxcbmZpZWxkc2V0LFxubGVnZW5kLFxudGV4dGFyZWEsXG5wcmUsXG5pZnJhbWUsXG5ocixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxudGQ6bm90KFthbGlnbl0pLFxudGg6bm90KFthbGlnbl0pIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkByZXNpemFibGUtcHJlZml4LWNsczogfiduei1yZXNpemFibGUnO1xuXG4uQHtyZXNpemFibGUtcHJlZml4LWNsc30ge1xuICAmLXByZXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDFkMWQxO1xuICB9XG4gICYtaGFuZGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogOTtcbiAgICAmLXRvcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTVweDtcbiAgICB9XG4gICAgJi1ib3R0b20ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBib3R0b206IC01cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmLWxlZnQge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAtNXB4O1xuICAgIH1cbiAgICAmLXRvcFJpZ2h0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgJi1ib3R0b21SaWdodCB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgICYtYm90dG9tTGVmdCB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgJi10b3BMZWZ0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgbGVmdDogLTVweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KC5Ae3Jlc2l6YWJsZS1wcmVmaXgtY2xzfS1yZXNpemluZykge1xuICAgIC5Ae3Jlc2l6YWJsZS1wcmVmaXgtY2xzfS1oYW5kbGUge1xuICAgICAgJi10b3AsICYtYm90dG9tIHtcbiAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XG4gICAgICB9XG4gICAgICAmLXJpZ2h0LCAmLWxlZnQge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgICAgIH1cbiAgICAgICYtYm90dG9tUmlnaHQsICYtdG9wTGVmdCB7XG4gICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XG4gICAgICB9XG4gICAgICAmLWJvdHRvbUxlZnQsICYtdG9wUmlnaHQge1xuICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgJi1kaXNhYmxlZCB7XG4gICAgLkB7cmVzaXphYmxlLXByZWZpeC1jbHN9IHtcbiAgICAgICYtaGFuZGxlIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIkBpbXBvcnQgXCIuLi9taW5pcmVzZXQubGVzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvcmVzaXphYmxlL3N0eWxlL2VudHJ5Lmxlc3NcIjtcclxuXHJcbkBsYXlvdXQtaGVhZGVyLWhlaWdodDogNDhweDtcclxuQGxheW91dC1oZWFkZXItcGFkZGluZzogMDtcclxuQG1lbnUtY29sbGFwc2VkLXdpZHRoOiA0OHB4O1xyXG5AbGF5b3V0LXRyaWdnZXItaGVpZ2h0OiA0MHB4O1xyXG4vLyDlpoLmnpzlrZjlnKjmiYDmnInkuLvpopjpgJrnlKjnmoTmoLflvI/lj5jph48s5Z+65pys5qC35byP5paH5Lu25bm25Zyo5q+P5Liq5Li76aKY5qC35byP5a6a5Yi25paH5Lu25Lit5byV5YWl5a6D77yaXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuICAvLyBtaW4td2lkdGg6IDU3MHB4O1xyXG59XHJcblxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbmF1ZGlvLCB2aWRlbyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGV4dC13cmFwIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi50ZXh0LWJyZWFrIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGxcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZnVsbC13aXRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWluLXNjcmVlbi1mdWxsLWhlaWdodCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcmVlbi1mdWxsLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2NyZWVuLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLy5lbGxpcHNpcyB7XHJcbi8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgd29yZC13cmFwOiBub3JtYWw7XHJcbi8vfVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiAnLic7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbG9yLXdlYWsge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDgwJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi53cmFwIHtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcblxyXG4udGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5wdWxsLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFic29sdXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50LTAge1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC0wIHtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iLTAge1xyXG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uci0wIHtcclxuICByaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1oLTEwMCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm0tci01IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTgge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMTUge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTIwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tci0yMyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMjUge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTMwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLTEwIHtcclxuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTQge1xyXG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTgge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTEwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItMjAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tYi0yNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTMwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC01IHtcclxuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tLWwtMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtODAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtMjAwIHtcclxuICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0wIHtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtOCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0xNSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMjUge1xyXG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm0tbC0xOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0yMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0yNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC01MCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLTAge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtOCB7XHJcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTE2IHtcclxuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ucC0yNCB7XHJcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10LTgge1xyXG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0xMiB7XHJcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0xNiB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0yNCB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLWwtMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtOCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLWwtMTAge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1sLTE2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtbC0yNCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtMjUge1xyXG4gIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnAtbC0zNSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtNTUge1xyXG4gIHBhZGRpbmctbGVmdDogNTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTgge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTEwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXItMTYge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtci0yNCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItOCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTEyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTE2IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTI0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTUwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTEge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTIge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTQge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTYge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTgge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMjgge1xyXG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYW5pbWF0ZS1iZy0wIHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLTAyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmFuaW1hdGUtMDMge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbi5jbGVhci1maXg6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLmRlZmF1bHQtdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5uaWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcclxufVxyXG5cclxuLmQtaS1iIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaGFuZC1tb2RlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGFuZC1tb2RlbC1tb3ZlIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi50ZXh0LWVycm9yIHtcclxuICBjb2xvcjogI2Y1MjIyZCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5ncmV5LWNvbG9yIHtcclxuICBjb2xvcjogI2Q5ZDlkOTtcclxufVxyXG5cclxuLmhvdmVyLWJsdWUge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MDllZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uaG92ZXItcmVkIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjUyMjJkO1xyXG4gIH1cclxufVxyXG5cclxuLm9wZXJhdGUtdGV4dCB7XHJcbiAgLmhhbmQtbW9kZWw7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItcm93IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNlbnRlci1mbihAY29sOmNlbnRlcixAcm93OmNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBAY29sO1xyXG4gIGFsaWduLWl0ZW1zOiBAcm93O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5jZW50ZXItZm4oKVxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtY29sb3VtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC0xIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZmxleC1hdXRvIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uZW5kLXN0YXJ0LWNlbnRlciB7XHJcbiAgLmNlbnRlci1mbihmbGV4LWVuZClcclxufVxyXG5cclxuLmxlZnQtc3RhcnQtY2VudGVyIHtcclxuICAuY2VudGVyLWZuKGZsZXgtc3RhcnQpXHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAuY2VudGVyLWZuKHNwYWNlLWJldHdlZW4pXHJcbn1cclxuXHJcbi5zcGFjZS1hcm91bmQge1xyXG4gIC5jZW50ZXItZm4oc3BhY2UtYXJvdW5kKVxyXG59XHJcblxyXG5cclxuLmJnLWNvbG9yLW5vIHtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi8vIOmAmueUqOmhtemdoue7n+S4gOW4g+WxgFxyXG4ubm9ybWFsLXRhYmxlLXdyYXAge1xyXG4gIG1hcmdpbjogMjdweCAyN3B4IDA7XHJcblxyXG4gIC8q5YiX6KGo6aG26YOo5qC35byPKi9cclxuXHJcbiAgLmFudC1wcm8tdGFibGUtdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuYW50LXByby10YWJsZS10b29sYmFyLXRpdGxlIHtcclxuICAgICAgZmxleDogMSAxO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICBvcGFjaXR5OiAuODU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1wcm8tdGFibGUtdG9vbGJhci1vcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtcHJvLXRhYmxlLXRvb2xiYXItZGVmYXVsdC1vcHRpb24ge1xyXG4gICAgICAuYW50LXNwYWNlLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6KGo5Y2V5qC35byPXHJcbiAgLmZvcm0td3JhcCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8q6KaG55uWem9ycm/moLflvI8qL1xyXG5cclxuLy8g5a+56K+d5qGG5aKe5Yqg5rua5Yqo5p2hXHJcbi5hbnQtbW9kYWwtYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5hbnQtbW9kYWwtY2xvc2UteCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBsaW5lLWhlaWdodDogNTZweFxyXG59XHJcblxyXG4uZnVsbHNjcmVlbi1tb2RhbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmFudC1tb2RhbCB7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLmFudC1tb2RhbC1ib2R5IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCAtIDUzcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW50LW1lbnUtaW5saW5lLCAuYW50LW1lbnUtdmVydGljYWwsIC5hbnQtbWVudS12ZXJ0aWNhbC1sZWZ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbm56LWRhdGUtcGlja2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbbnotaW5wdXRdIHtcclxuICAuYW5pbWF0ZS1iZy0wO1xyXG59XHJcblxyXG4vL1xyXG4vLy5vdmVyZmxvdy1kb3RzIHtcclxuLy8gIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3NyYy9zdHlsZS90aGVtZXMvdmFyaWFibGUubGVzcyc7XG5AaW1wb3J0ICcuL2Jhc2UnO1xuXG5cbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LWRhcmstYmc6ICMwMDE1Mjk7XG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQ6IEBtZW51LWRhcmstYmc7XG4ub3BlcmF0ZS10ZXh0IHtcbiAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xufVxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3NyYy9zdHlsZS90aGVtZXMvZGFyayc7XG5AaW1wb3J0ICcuL2Jhc2UnO1xuXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQtbGlnaHQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kLWxpZ2h0OiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudS1pdGVtLXZlcnRpY2FsLW1hcmdpbjogMDtcbi5vcGVyYXRlLXRleHQge1xuICBjb2xvcjogQHByaW1hcnktY29sb3I7XG59XG4uYW50LW1lbnUtaG9yaXpvbnRhbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lbnUtZGFyay1iZzpAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kO1xuQG1lbnUtYmc6QGxheW91dC1oZWFkZXItYmFja2dyb3VuZDtcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZC1saWdodDpAbWVudS1iZztcblxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyrmu5rliqjmnaHmlbTkvZPmoLflvI8qL1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogIzI2Mzg0ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IC8q5rua5Yqo5p2h6YeM6Z2i5bCP5pa55Z2XKi9cbiAgYmFja2dyb3VuZDogIzUzNjE2RSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8q5a6a5LmJ5rua5Yqo5p2h6L2o6YGTIOWGhemYtOW9sSvlnIbop5IqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyrlrprkuYnmu5HlnZcg5YaF6Zi05b2xK+WchuinkiovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 67046:
/*!********************************************************************************!*\
  !*** ./src/app/layout/default/def-layout-content/def-layout-content.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefLayoutContentModule": () => (/* binding */ DefLayoutContentModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 36982);
/* harmony import */ var _setting_drawer_setting_drawer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setting-drawer/setting-drawer.module */ 31975);
/* harmony import */ var _def_layout_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./def-layout-content.component */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class DefLayoutContentModule {
}
DefLayoutContentModule.ɵfac = function DefLayoutContentModule_Factory(t) { return new (t || DefLayoutContentModule)(); };
DefLayoutContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DefLayoutContentModule });
DefLayoutContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setting_drawer_setting_drawer_module__WEBPACK_IMPORTED_MODULE_1__.SettingDrawerModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DefLayoutContentModule, { declarations: [_def_layout_content_component__WEBPACK_IMPORTED_MODULE_2__.DefLayoutContentComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setting_drawer_setting_drawer_module__WEBPACK_IMPORTED_MODULE_1__.SettingDrawerModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationModule], exports: [_def_layout_content_component__WEBPACK_IMPORTED_MODULE_2__.DefLayoutContentComponent] }); })();


/***/ }),

/***/ 75275:
/*!**********************************************************!*\
  !*** ./src/app/layout/default/default-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRoutingModule": () => (/* binding */ DefaultRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_common_guard_judgAuth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/guard/judgAuth.guard */ 75601);
/* harmony import */ var _core_services_common_guard_judgLogin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common/guard/judgLogin.guard */ 44907);
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ 21786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _default_component__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent,
        data: { shouldDetach: 'no' },
        canActivateChild: [_core_services_common_guard_judgLogin_guard__WEBPACK_IMPORTED_MODULE_1__.JudgLoginGuard, _core_services_common_guard_judgAuth_guard__WEBPACK_IMPORTED_MODULE_0__.JudgAuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardModule)
            },
            {
                path: 'page-demo',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_page-demo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/page-demo/page-demo.module */ 35371)).then(m => m.PageDemoModule)
            },
            {
                path: 'feat',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feat_feat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/feat/feat.module */ 53943)).then(m => m.FeatModule)
            },
            {
                path: 'comp',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comp_comp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/comp/comp.module */ 41141)).then(m => m.CompModule)
            },
            {
                path: 'level',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_level_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/level/level.module */ 57019)).then(m => m.LevelModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/about/about.module */ 18114)).then(m => m.AboutModule)
            },
            {
                path: 'system',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_system_system_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/system/system.module */ 46330)).then(m => m.SystemModule)
            },
            {
                path: 'chuyen',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chuyen_chuyen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/chuyen/chuyen.module */ 16447)).then(m => m.ChuyenModule)
            },
            {
                path: 'khachhang',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_khachhang_khachhang_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/khachhang/khachhang.module */ 7912)).then(m => m.KhachhangModule)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];
class DefaultRoutingModule {
}
DefaultRoutingModule.ɵfac = function DefaultRoutingModule_Factory(t) { return new (t || DefaultRoutingModule)(); };
DefaultRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DefaultRoutingModule });
DefaultRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DefaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 21786:
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultComponent": () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _app_animations_fade_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/animations/fade.animation */ 61182);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/constant */ 70018);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _core_services_common_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/common/driver.service */ 21181);
/* harmony import */ var _core_services_common_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common/window.service */ 67927);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_biz_components_layout_components_layout_head_right_menu_layout_head_right_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/biz-components/layout-components/layout-head-right-menu/layout-head-right-menu.component */ 47034);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var _def_layout_content_def_layout_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./def-layout-content/def-layout-content.component */ 6293);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab/tab.component */ 30097);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 53525);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 19971);
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ 22219);
/* harmony import */ var _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-drawer/nav-drawer.component */ 57578);




















const _c0 = ["navDrawer"];

function DefaultComponent_app_side_nav_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-side-nav");
  }
}

function DefaultComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}

function DefaultComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}

function DefaultComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DefaultComponent_ng_template_8_ng_container_1_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.changeCollapsed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r9.isCollapsed$) ? "menu-unfold" : "menu-fold");
  }
}

function DefaultComponent_ng_template_8_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Ant Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}

function DefaultComponent_ng_template_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, DefaultComponent_ng_template_8_ng_template_3_ng_container_1_Template, 4, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r11.themeOptions$).hasNavHeadArea);
  }
}

function DefaultComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-tool-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, DefaultComponent_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, DefaultComponent_ng_template_8_ng_template_3_Template, 5, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-layout-head-right-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.isOverMode || _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r4.themeOptions$).mode === "side")("ngIfElse", _r10);
  }
}

function DefaultComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DefaultComponent_ng_container_12_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.changeCollapsed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r5.isCollapsed$) ? "menu-unfold" : "menu-fold");
  }
}

function DefaultComponent_ng_container_13_app_nav_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-nav-bar", 26);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMixiHead", true);
  }
}

function DefaultComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Nam Pham");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, DefaultComponent_ng_container_13_app_nav_bar_6_Template, 1, 1, "app-nav-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 1, ctx_r6.themeOptions$).splitNav);
  }
}

class DefaultComponent {
  constructor(destroy$, themesService, driverService, windowService) {
    this.destroy$ = destroy$;
    this.themesService = themesService;
    this.driverService = driverService;
    this.windowService = windowService;
    this.isCollapsed$ = this.themesService.getIsCollapsed();
    this.themeOptions$ = this.themesService.getThemesMode();
    this.isCollapsed = false;
    this.isOverMode = false; // 窗口变窄时，导航栏是否变成抽屉模式
  }

  changeCollapsed() {
    if (this.isOverMode) {
      this.navDrawer.showDraw();
      return;
    }

    this.isCollapsed = !this.isCollapsed;
    this.themesService.setIsCollapsed(this.isCollapsed);
  } // 监听各种流


  subTheme() {
    this.themesService.getIsCollapsed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(res => this.isCollapsed = res);
    this.themesService.getIsOverMode().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(res => this.isOverMode = res);
  }

  prepareRoute(outlet) {
    return outlet?.activatedRouteData?.['key'];
  }

  ngAfterViewInit() {
    if (this.windowService.getStorage(_config_constant__WEBPACK_IMPORTED_MODULE_1__.IsFirstLogin) === 'false') {
      return;
    }

    this.windowService.setStorage(_config_constant__WEBPACK_IMPORTED_MODULE_1__.IsFirstLogin, 'false');
    this.driverService.load();
  }

  ngOnInit() {
    this.subTheme();
  }

}

DefaultComponent.ɵfac = function DefaultComponent_Factory(t) {
  return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_common_driver_service__WEBPACK_IMPORTED_MODULE_4__.DriverService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_common_window_service__WEBPACK_IMPORTED_MODULE_5__.WindowService));
};

DefaultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: DefaultComponent,
  selectors: [["app-default"]],
  viewQuery: function DefaultComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.navDrawer = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_2__.DestroyService])],
  decls: 29,
  vars: 11,
  consts: [["sider", ""], [4, "ngIf"], ["sider-header", ""], [4, "ngTemplateOutlet"], ["top-header", ""], ["headerTpl", ""], ["mixheader", ""], ["left", "", 4, "ngIf"], ["right", ""], ["mixsider", ""], [1, "screen-full-height", 2, "overflow", "hidden auto"], [3, "isMixiLeft"], ["content", ""], ["outlet", "outlet"], ["navDrawer", ""], ["left", "", 4, "ngIf", "ngIfElse"], ["topHeadTpl", ""], ["left", ""], ["id", "trigger", "nz-icon", "", 1, "trigger", 3, "nzType", "click"], [1, "left-start-center", "flex-1", 2, "z-index", "100"], [1, "flex-1"], ["src", "assets/imgs/logo.svg", "alt", "", 1, "m-l-10", 2, "max-height", "32px", "max-width", "54px"], [1, "sp-18", "m-r-8"], ["nz-icon", "", 1, "trigger", 3, "nzType", "click"], [1, "sp-18", "m-r-25"], [3, "isMixiHead", 4, "ngIf"], [3, "isMixiHead"]],
  template: function DefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-def-layout-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, DefaultComponent_app_side_nav_2_Template, 1, 0, "app-side-nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](4, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, DefaultComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](6, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, DefaultComponent_ng_container_7_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, DefaultComponent_ng_template_8_Template, 7, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "app-tool-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, DefaultComponent_ng_container_12_Template, 3, 3, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, DefaultComponent_ng_container_13_Template, 8, 3, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](14, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-layout-head-right-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](16, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "app-nav-bar", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "> ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](21, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "app-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "router-outlet", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "app-nav-drawer", null, 14);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isOverMode || _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 7, ctx.themeOptions$).mode === "side");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isOverMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isOverMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMixiLeft", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 9, ctx.themeOptions$).splitNav);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeRouteAnimation", ctx.prepareRoute(_r7));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgTemplateOutlet, _shared_biz_components_layout_components_layout_head_right_menu_layout_head_right_menu_component__WEBPACK_IMPORTED_MODULE_6__.LayoutHeadRightMenuComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], _def_layout_content_def_layout_content_component__WEBPACK_IMPORTED_MODULE_7__.DefLayoutContentComponent, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterOutlet, _tab_tab_component__WEBPACK_IMPORTED_MODULE_8__.TabComponent, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__.SideNavComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__.NavBarComponent, _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_11__.ToolBarComponent, _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_12__.NavDrawerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: [".trigger[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  transition: color 0.3s;\n  z-index: 10;\n}\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0FBQUY7QUFJQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBRkYiLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmlnZ2VyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuXG5cbi5maXhlZHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG59XG4iXX0= */"],
  data: {
    animation: [_app_animations_fade_animation__WEBPACK_IMPORTED_MODULE_0__.fadeRouteAnimation]
  },
  changeDetection: 0
});

/***/ }),

/***/ 597:
/*!**************************************************!*\
  !*** ./src/app/layout/default/default.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultModule": () => (/* binding */ DefaultModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 36982);
/* harmony import */ var _def_layout_content_def_layout_content_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./def-layout-content/def-layout-content.module */ 67046);
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-routing.module */ 75275);
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ 21786);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 19971);
/* harmony import */ var _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-drawer/nav-drawer.component */ 57578);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 53525);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab/tab.component */ 30097);
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ 22219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);











class DefaultModule {
}
DefaultModule.ɵfac = function DefaultModule_Factory(t) { return new (t || DefaultModule)(); };
DefaultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _def_layout_content_def_layout_content_module__WEBPACK_IMPORTED_MODULE_1__.DefLayoutContentModule, _default_routing_module__WEBPACK_IMPORTED_MODULE_2__.DefaultRoutingModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__.NzNoAnimationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_3__.DefaultComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_7__.TabComponent, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__.SideNavComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent, _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_8__.ToolBarComponent, _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_5__.NavDrawerComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _def_layout_content_def_layout_content_module__WEBPACK_IMPORTED_MODULE_1__.DefLayoutContentModule, _default_routing_module__WEBPACK_IMPORTED_MODULE_2__.DefaultRoutingModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__.NzNoAnimationModule] }); })();


/***/ }),

/***/ 19971:
/*!*************************************************************!*\
  !*** ./src/app/layout/default/nav-bar/nav-bar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/common-store/userInfo.service */ 43971);
/* harmony import */ var _store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/common-store/menu-store.service */ 15592);
/* harmony import */ var _store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/common-store/split-nav-store.service */ 3574);
/* harmony import */ var _core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common/tab.service */ 99651);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _shared_directives_track_by_property_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/track-by-property.directive */ 29886);
/* harmony import */ var _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/auth.directive */ 35656);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 36982);























function NavBarComponent_ul_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menu_r8.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menu_r8.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.changeRoute($event, menu_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_i_3_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r10.themesMode !== "top" || ctx_r10.isOverMode) && !ctx_r10.isCollapsed ? 16 : 0)("nzSelected", menu_r8.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r8.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menu_r8.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menu_r8.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menu_r8.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_i_0_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_i_1_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r8.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menu_r8.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menuSecond_r28.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menuSecond_r28.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.changeRoute($event, menuSecond_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_i_3_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r30.themesMode !== "top" || ctx_r30.isOverMode) && !ctx_r30.isCollapsed ? 32 : 0)("nzSelected", menuSecond_r28.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuSecond_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuSecond_r28.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuSecond_r28.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menuSecond_r28.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menuSecond_r28.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_i_0_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_i_1_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuSecond_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuSecond_r28.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuSecond_r28.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menuThird_r48.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menuThird_r48.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r56.changeRoute($event, menuThird_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_i_3_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r50.themesMode !== "top" || ctx_r50.isOverMode) && !ctx_r50.isCollapsed ? 48 : 0)("nzSelected", menuThird_r48.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuThird_r48.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuThird_r48.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuThird_r48.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menuThird_r48.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menuThird_r48.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const forthThird_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", forthThird_r65.icon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const forthThird_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", forthThird_r65.alIcon);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 9)(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_Template_a_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73);
      const forthThird_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r71.changeRoute($event, forthThird_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_i_3_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_i_4_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const forthThird_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r66.themesMode !== "top" || ctx_r66.isOverMode) && !ctx_r66.isCollapsed ? 64 : 0)("nzSelected", forthThird_r65.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", forthThird_r65.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", forthThird_r65.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](forthThird_r65.menuName);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_ng_container_1_Template, 7, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const forthThird_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appAuth", forthThird_r65.code);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_Template_li_nzOpenChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77);
      const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r75.changeOpen(menuThird_r48, menuSecond_r28.children));
    })("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_Template_li_nzOpenChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77);
      const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](menuThird_r48.open = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_i_1_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_i_2_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r51.themesMode !== "top" || ctx_r51.isOverMode) && !ctx_r51.isCollapsed ? 48 : 0)("nzOpen", menuThird_r48.open)("nzTitle", menuThird_r48.menuName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuThird_r48.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuThird_r48.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuThird_r48.children)("ngForTrackByProperty", "id");
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_1_Template, 6, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_li_2_Template, 5, 7, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuThird_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !menuThird_r48.children || menuThird_r48.children.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuThird_r48.children && menuThird_r48.children.length > 0);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuThird_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appAuth", menuThird_r48.code);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_Template_li_nzOpenChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85);
      const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r83.changeOpen(menuSecond_r28, menu_r8.children));
    })("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_Template_li_nzOpenChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85);
      const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](menuSecond_r28.open = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_template_1_Template, 4, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r31.themesMode !== "top" || ctx_r31.isOverMode) && !ctx_r31.isCollapsed ? 32 : 0)("nzOpen", menuSecond_r28.open)("nzTitle", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuSecond_r28.children)("ngForTrackByProperty", "id");
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_1_Template, 6, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_li_2_Template, 5, 5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuSecond_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !menuSecond_r28.children || menuSecond_r28.children.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuSecond_r28.children && menuSecond_r28.children.length > 0);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuSecond_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appAuth", menuSecond_r28.code);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_Template_li_nzOpenChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r93);
      const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const menus_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r91.changeOpen(menu_r8, menus_r6));
    })("nzOpenChange", function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_Template_li_nzOpenChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r93);
      const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](menu_r8.open = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_template_2_Template, 4, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzPaddingLeft", (ctx_r11.themesMode !== "top" || ctx_r11.isOverMode) && !ctx_r11.isCollapsed ? 16 : 0)("nzOpen", menu_r8.open)("nzTitle", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menu_r8.children)("ngForTrackByProperty", "id");
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_li_1_Template, 6, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_ng_container_2_Template, 6, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !menu_r8.children || menu_r8.children.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r8.children && menu_r8.children.length > 0);
  }
}

function NavBarComponent_ul_0_ng_template_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ul_0_ng_template_11_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menu_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appAuth", menu_r8.code);
  }
}

function NavBarComponent_ul_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavBarComponent_ul_0_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 5);
  }

  if (rf & 2) {
    const menus_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menus_r6)("ngForTrackByProperty", "id");
  }
}

const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};

function NavBarComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, NavBarComponent_ul_0_ng_container_10_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, NavBarComponent_ul_0_ng_template_11_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzNoAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 6, ctx_r0.themesOptions$).mode === "top")("nzInlineCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 8, ctx_r0.isCollapsed$))("nzTheme", ctx_r0.isMixiMode && !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 10, ctx_r0.isOverMode$) && !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 12, ctx_r0.isNightTheme$) ? "light" : ctx_r0.isMixiMode && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 14, ctx_r0.isNightTheme$) ? "dark" : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 16, ctx_r0.themesOptions$).theme)("nzMode", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 18, ctx_r0.themesOptions$).mode === "side" || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 20, ctx_r0.themesOptions$).mode === "mixi" || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 22, ctx_r0.isOverMode$) ? "inline" : "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c0, ctx_r0.isMixiLeft ? ctx_r0.leftMenuArray : ctx_r0.menus));
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menu_r100.icon);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menu_r100.alIcon);
  }
}

const _c1 = function (a0) {
  return [a0];
};

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_i_3_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSelected", menu_r100.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, menu_r100.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r100.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r100.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menu_r100.menuName);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzType", menu_r100.icon);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 14);
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzIconfont", menu_r100.alIcon);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r116);
      const i_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).index;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r114.changTopNav(i_r101));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_i_1_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_i_2_Template, 1, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzSelected", menu_r100.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r100.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r100.alIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menu_r100.menuName);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_1_Template, 6, 7, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_li_2_Template, 5, 4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menu_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !menu_r100.children || menu_r100.children.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r100.children && menu_r100.children.length > 0);
  }
}

function NavBarComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menu_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appAuth", menu_r100.code);
  }
}

function NavBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.menus)("ngForTrackByProperty", "id");
  }
}

class NavBarComponent {
  constructor(router, destroy$, userInfoService, menuServices, splitNavStoreService, activatedRoute, tabService, cdr, themesService, titleServe, doc) {
    this.router = router;
    this.destroy$ = destroy$;
    this.userInfoService = userInfoService;
    this.menuServices = menuServices;
    this.splitNavStoreService = splitNavStoreService;
    this.activatedRoute = activatedRoute;
    this.tabService = tabService;
    this.cdr = cdr;
    this.themesService = themesService;
    this.titleServe = titleServe;
    this.doc = doc; // 是混合模式顶部导航

    this.isMixiHead = false;
    this.isMixiLeft = false;
    this.routerPath = this.router.url;
    this.themesMode = 'side';
    this.themesOptions$ = this.themesService.getThemesMode();
    this.isNightTheme$ = this.themesService.getIsNightTheme();
    this.isCollapsed$ = this.themesService.getIsCollapsed();
    this.isOverMode$ = this.themesService.getIsOverMode();
    this.leftMenuArray$ = this.splitNavStoreService.getSplitLeftNavArrayStore();
    this.isOverMode = false;
    this.isCollapsed = false;
    this.isMixiMode = false;
    this.leftMenuArray = [];
    this.menus = [];
    this.copyMenus = [];
    this.authCodeArray = [];
    this.initMenus();
    this.subTheme$ = this.isOverMode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
      this.isOverMode = res;
      return this.themesOptions$;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(options => {
      this.themesMode = options.mode;
      this.isMixiMode = this.themesMode === 'mixi';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)); // 监听混合模式下左侧菜单数据源

    this.subMixiModeSideMenu(); // 监听折叠菜单事件

    this.subIsCollapsed();
    this.subAuth();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_15__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => {
      this.subTheme$.subscribe(() => {
        // 主题切换为混合模式下，设置左侧菜单数据源
        // 如果放在ngInit监听里面，会在混合模式下，刷新完页面切换路由，runOutSideAngular
        if (this.isMixiMode) {
          this.setMixModeLeftMenu();
        }
      }); // @ts-ignore

      this.routerPath = this.activatedRoute.snapshot['_routerState'].url;
      this.clickMenuItem(this.menus);
      this.clickMenuItem(this.copyMenus); // 是折叠的菜单并且不是over菜单,解决折叠左侧菜单时，切换tab会有悬浮框菜单的bug

      if (this.isCollapsed && !this.isOverMode) {
        this.closeMenuOpen(this.menus);
      } // 顶部菜单模式，并且不是over模式，解决顶部模式时，切换tab会有悬浮框菜单的bug


      if (this.themesMode === 'top' && !this.isOverMode) {
        this.closeMenu();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(route => {
      return route.outlet === 'primary';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(route => {
      return route.data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(routeData => {
      // 详情页是否是打开新tab页签形式
      let isNewTabDetailPage = routeData['newTab'] === 'true';
      this.tabService.addTab({
        title: routeData['title'],
        path: this.routerPath,
        relatedLink: routeData['relatedLink'] ? routeData['relatedLink'] : []
      }, isNewTabDetailPage);
      this.tabService.findIndex(this.routerPath);
      this.titleServe.setTitle(`${routeData['title']} - Ant Design`); // 混合模式时，切换tab，让左侧菜单也相应变化

      this.setMixModeLeftMenu();
    });
  }

  initMenus() {
    this.menuServices.getMenuArrayStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(menusArray => {
      this.menus = menusArray;
      this.copyMenus = this.cloneMenuArray(this.menus);
      this.clickMenuItem(this.menus);
      this.clickMenuItem(this.copyMenus);
      this.cdr.markForCheck();
    });
  } // 设置混合模式时，左侧菜单"自动分割菜单"模式的数据源


  setMixModeLeftMenu() {
    this.menus.forEach(item => {
      if (item.selected) {
        this.splitNavStoreService.setSplitLeftNavArrayStore(item.children);
      }
    });
  } // 深拷贝克隆菜单数组


  cloneMenuArray(sourceMenuArray, target = []) {
    sourceMenuArray.forEach(item => {
      const obj = {
        menuName: '',
        menuType: 'C',
        path: '',
        id: -1,
        fatherId: -1
      };

      for (let i in item) {
        if (item.hasOwnProperty(i)) {
          // @ts-ignore
          if (Array.isArray(item[i])) {
            // @ts-ignore
            obj[i] = this.cloneMenuArray(item[i]);
          } else {
            // @ts-ignore
            obj[i] = item[i];
          }
        }
      }

      target.push({ ...obj
      });
    });
    return target;
  } // 混合模式点击一级菜单，要让一级菜单下的第一个子菜单被选中


  changTopNav(index) {
    // 当前选中的第一级菜单对象
    const currentTopNav = this.menus[index];

    if (currentTopNav.children && currentTopNav.children.length > 0) {
      // 当前左侧导航数组

      /*添加了权限版*/
      let currentLeftNavArray = currentTopNav.children;
      currentLeftNavArray = currentLeftNavArray.filter(item => {
        return this.authCodeArray.includes(item.code);
      });

      if (currentLeftNavArray.length > 0 && !currentLeftNavArray[0].children) {
        this.router.navigateByUrl(currentLeftNavArray[0].path);
      } else if (currentLeftNavArray.length > 0 && currentLeftNavArray[0].children) {
        this.router.navigateByUrl(currentLeftNavArray[0].children[0].path);
      }

      this.splitNavStoreService.setSplitLeftNavArrayStore(currentLeftNavArray);
      /*添加了权限版结束*/

      /*注释的是没有权限版*/
      // const currentLeftNavArray = currentTopNav.children;
      // if (!currentLeftNavArray[0].children) {
      //   this.router.navigateByUrl(currentLeftNavArray[0].path!);
      //   this.splitNavStoreService.setSplitLeftNavArrayStore(currentLeftNavArray);
      // } else {
      //   this.router.navigateByUrl(currentLeftNavArray[0].children[0].path!);
      //   this.splitNavStoreService.setSplitLeftNavArrayStore(currentLeftNavArray);
      // }
    }
  }

  flatMenu(menus, routePath) {
    menus.forEach(item => {
      item.selected = false;
      item.open = false;

      if (routePath.includes(item.path) && !item.newLinkFlag) {
        item.selected = true;
        item.open = true;
      }

      if (!!item.children && item.children.length > 0) {
        this.flatMenu(item.children, routePath);
      }
    });
  }

  clickMenuItem(menus) {
    if (!menus) {
      return;
    }

    const index = this.routerPath.indexOf('?') === -1 ? this.routerPath.length : this.routerPath.indexOf('?');
    const routePath = this.routerPath.substring(0, index);
    this.flatMenu(menus, routePath);
    this.cdr.markForCheck();
  } // 改变当前菜单展示状态


  changeOpen(currentMenu, allMenu) {
    allMenu.forEach(item => {
      item.open = false;
    });
    currentMenu.open = true;
  }

  closeMenuOpen(menus) {
    menus.forEach(menu => {
      menu.open = false;

      if (menu.children && menu.children.length > 0) {
        this.closeMenuOpen(menu.children);
      } else {
        return;
      }
    });
  }

  changeRoute(e, menu) {
    if (menu.newLinkFlag) {
      (0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnStopMouseEvent)(e);
      window.open(menu.path, '_blank');
      return;
    }

    this.router.navigate([menu.path]);
  } // 监听折叠菜单事件


  subIsCollapsed() {
    this.isCollapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed; // 菜单展开

      if (!this.isCollapsed) {
        this.menus = this.cloneMenuArray(this.copyMenus);
        this.clickMenuItem(this.menus); // 混合模式下要在点击一下左侧菜单数据源,不然有二级菜单的菜单在折叠状态变为展开时，不open

        if (this.themesMode === 'mixi') {
          this.clickMenuItem(this.leftMenuArray);
        }
      } else {
        // 菜单收起
        this.copyMenus = this.cloneMenuArray(this.menus);
        this.closeMenuOpen(this.menus);
      }

      this.cdr.markForCheck();
    });
  }

  closeMenu() {
    this.clickMenuItem(this.menus);
    this.clickMenuItem(this.copyMenus);
    this.closeMenuOpen(this.menus);
  }

  subAuth() {
    this.userInfoService.getUserInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(res => this.authCodeArray = res.authCode);
  } // 监听混合模式下左侧菜单数据源


  subMixiModeSideMenu() {
    this.leftMenuArray$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(res => {
      this.leftMenuArray = res;
    });
  }

  ngOnInit() {
    // 顶部模式时要关闭menu的open状态
    this.subTheme$.subscribe(options => {
      if (options.mode === 'top' && !this.isOverMode) {
        this.closeMenu();
      }
    });
  }

}

NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_userInfo_service__WEBPACK_IMPORTED_MODULE_2__.UserInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_menu_store_service__WEBPACK_IMPORTED_MODULE_3__.MenuStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_4__.SplitNavStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_5__.TabService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT));
};

NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  inputs: {
    isMixiHead: "isMixiHead",
    isMixiLeft: "isMixiLeft"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])],
  decls: 3,
  vars: 2,
  consts: [["nz-menu", "", 3, "nzNoAnimation", "nzInlineCollapsed", "nzTheme", "nzMode", 4, "ngIf", "ngIfElse"], ["mixiHeadTpl", ""], ["nz-menu", "", 3, "nzNoAnimation", "nzInlineCollapsed", "nzTheme", "nzMode"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTpl", ""], [4, "ngFor", "ngForOf", "ngForTrackByProperty"], [4, "appAuth"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzSelected", 4, "ngIf"], [4, "ngIf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzSelected"], [3, "click"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", 3, "nzIconfont"], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzOpenChange"], ["titleTpl", ""], ["nz-submenu", "", 3, "nzPaddingLeft", "nzOpen", "nzTitle", "nzOpenChange", 4, "ngIf"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "horizontal"], ["nz-menu-item", "", 3, "nzSelected", 4, "ngIf"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngIf"], ["nz-menu-item", "", 3, "nzSelected"], [3, "routerLink"], ["nz-menu-item", "", 3, "nzSelected", "click"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavBarComponent_ul_0_Template, 13, 26, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isMixiHead)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgTemplateOutlet, _shared_directives_track_by_property_directive__WEBPACK_IMPORTED_MODULE_7__.TrackByPropertyDirective, _shared_directives_auth_directive__WEBPACK_IMPORTED_MODULE_8__.AuthDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_22__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_22__.NzMenuItemDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_22__.NzSubMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_23__.NzNoAnimationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 57578:
/*!*******************************************************************!*\
  !*** ./src/app/layout/default/nav-drawer/nav-drawer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavDrawerComponent": () => (/* binding */ NavDrawerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 88873);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav/side-nav.component */ 53525);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);











function NavDrawerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-layout", 2)(2, "nz-sider", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-side-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTheme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx_r0.themesOptions$).theme)("nzWidth", 208)("nzTrigger", null);
  }
}

const _c0 = function () {
  return {
    padding: 0
  };
};

class NavDrawerComponent {
  constructor(destroy$, cdr, themesService) {
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.themesService = themesService;
    this.isShowModal = false;
    this.themesOptions$ = this.themesService.getThemesMode();
  }

  subTheme() {
    this.themesService.getIsOverMode().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(res => {
      if (!res) {
        this.isShowModal = false;
      }
    });
  }

  showDraw() {
    this.isShowModal = true;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.subTheme();
  }

}

NavDrawerComponent.ɵfac = function NavDrawerComponent_Factory(t) {
  return new (t || NavDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService));
};

NavDrawerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NavDrawerComponent,
  selectors: [["app-nav-drawer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])],
  decls: 2,
  vars: 5,
  consts: [["nzPlacement", "left", 3, "nzBodyStyle", "nzWidth", "nzClosable", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], [2, "overflow-x", "hidden"], [1, "menu-sidebar", 3, "nzTheme", "nzWidth", "nzTrigger"]],
  template: function NavDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-drawer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function NavDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() {
        return ctx.isShowModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavDrawerComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0))("nzWidth", 208)("nzClosable", false)("nzVisible", ctx.isShowModal);
    }
  },
  dependencies: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzSiderComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__.SideNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1kcmF3ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FBQ0YiLCJmaWxlIjoibmF2LWRyYXdlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNoYWRvdzogMnB4IDAgNnB4IHJnYmEoMCwgMjEsIDQxLCAuMzUpO1xufVxuIl19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 45718:
/*!***************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingDrawerComponent": () => (/* binding */ SettingDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/constant */ 70018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 37981);
/* harmony import */ var _core_services_common_theme_skin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common/theme-skin.service */ 28557);
/* harmony import */ var _core_services_common_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/common/window.service */ 67927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/switch */ 26496);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);




















function SettingDrawerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function SettingDrawerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
} }
function SettingDrawerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 7);
} }
function SettingDrawerComponent_ng_container_7_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingDrawerComponent_ng_container_7_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingDrawerComponent_ng_container_7_div_1_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const theme_r30 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.changeTheme(theme_r30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SettingDrawerComponent_ng_container_7_div_1_div_4_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", theme_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", theme_r30.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", theme_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", theme_r30.isChecked);
} }
function SettingDrawerComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Thi\u1EBFt l\u1EADp t\u1ED5ng th\u1EC3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SettingDrawerComponent_ng_container_7_div_1_div_4_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.themes);
} }
function SettingDrawerComponent_ng_container_7_div_6_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 32);
} }
function SettingDrawerComponent_ng_container_7_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingDrawerComponent_ng_container_7_div_6_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const color_r34 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.changePrimaryColor(color_r34)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SettingDrawerComponent_ng_container_7_div_6_i_1_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", color_r34.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", color_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", color_r34.isChecked);
} }
function SettingDrawerComponent_ng_container_7_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingDrawerComponent_ng_container_7_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingDrawerComponent_ng_container_7_div_12_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const mode_r38 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.changeMode(mode_r38)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SettingDrawerComponent_ng_container_7_div_12_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", mode_r38.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", mode_r38.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", mode_r38.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mode_r38.isChecked);
} }
function SettingDrawerComponent_ng_container_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_16_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.changeFixed($event, "fixedTab")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabled", !ctx_r10._themesOptions.fixedHead)("ngModel", ctx_r10._themesOptions.fixedTab);
} }
function SettingDrawerComponent_ng_container_7_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_21_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.changeFixed($event, "fixedHead")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r12._themesOptions.fixedHead);
} }
function SettingDrawerComponent_ng_container_7_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_26_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.changeFixed($event, "fixedLeftNav")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r14._themesOptions.fixedLeftNav);
} }
function SettingDrawerComponent_ng_container_7_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r48.changeFixed($event, "splitNav")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r16._themesOptions.splitNav);
} }
function SettingDrawerComponent_ng_container_7_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_40_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r50.changeFixed($event, "hasTopArea")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r18._themesOptions.hasTopArea);
} }
function SettingDrawerComponent_ng_container_7_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_45_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.changeFixed($event, "hasFooterArea")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r20._themesOptions.hasFooterArea);
} }
function SettingDrawerComponent_ng_container_7_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_50_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.changeFixed($event, "hasNavArea")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r22._themesOptions.hasNavArea);
} }
function SettingDrawerComponent_ng_container_7_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_55_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r56.changeFixed($event, "hasNavHeadArea")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r24._themesOptions.hasNavHeadArea);
} }
function SettingDrawerComponent_ng_container_7_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_64_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r58.changeNightTheme($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r26._isNightTheme);
} }
function SettingDrawerComponent_ng_container_7_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingDrawerComponent_ng_container_7_ng_template_69_Template_nz_switch_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r60.changeWeakMode($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r28._themesOptions.colorWeak);
} }
const _c0 = function (a0) { return [a0]; };
function SettingDrawerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SettingDrawerComponent_ng_container_7_div_1_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9)(3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "M\u00E0u ch\u1EE7 \u0111\u1EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SettingDrawerComponent_ng_container_7_div_6_Template, 2, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13)(9, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Ch\u1EBF \u0111\u1ED9 \u0111i\u1EC1u h\u01B0\u1EDBng");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SettingDrawerComponent_ng_container_7_div_12_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-list", 16)(14, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Tab \u0111\u00E3 s\u1EEDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SettingDrawerComponent_ng_container_7_ng_template_16_Template, 1, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-list", 16)(19, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u0110\u1EA7u c\u1ED1 \u0111\u1ECBnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SettingDrawerComponent_ng_container_7_ng_template_21_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-list", 16)(24, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Thanh b\u00EAn c\u1ED1 \u0111\u1ECBnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SettingDrawerComponent_ng_container_7_ng_template_26_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "nz-list", 16)(29, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "T\u1EF1 \u0111\u1ED9ng chia menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SettingDrawerComponent_ng_container_7_ng_template_31_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 13)(35, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Khu v\u1EF1c n\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "nz-list", 16)(38, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Thanh tr\u00EAn c\u00F9ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, SettingDrawerComponent_ng_container_7_ng_template_40_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "nz-list", 16)(43, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Ch\u00E2n trang");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, SettingDrawerComponent_ng_container_7_ng_template_45_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "nz-list", 16)(48, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Th\u1EF1c \u0111\u01A1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, SettingDrawerComponent_ng_container_7_ng_template_50_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "nz-list", 16)(53, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Ti\u00EAu \u0111\u1EC1 menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, SettingDrawerComponent_ng_container_7_ng_template_55_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 13)(59, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "C\u00E1c thi\u1EBFt l\u1EADp kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "nz-list", 16)(62, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Ch\u1EBF \u0111\u1ED9 t\u1ED1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, SettingDrawerComponent_ng_container_7_ng_template_64_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "nz-list", 16)(67, "nz-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Ch\u1EBF \u0111\u1ED9 \u0111i\u1EC3m y\u1EBFu m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, SettingDrawerComponent_ng_container_7_ng_template_69_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](41);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](65);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](70);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5._themesOptions.mode !== "mixi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("m-t-25", ctx_r5._themesOptions.mode !== "mixi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.modes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, _r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, _r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, _r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c0, _r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](35, _c0, _r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c0, _r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](39, _c0, _r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](41, _c0, _r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSplit", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c0, _r27));
} }
class SettingDrawerComponent {
    constructor(themesService, doc, message, nzConfigService, themeSkinService, windowServe, rd2) {
        this.themesService = themesService;
        this.doc = doc;
        this.message = message;
        this.nzConfigService = nzConfigService;
        this.themeSkinService = themeSkinService;
        this.windowServe = windowServe;
        this.rd2 = rd2;
        this.themesOptions$ = this.themesService.getThemesMode();
        this.isNightTheme$ = this.themesService.getIsNightTheme();
        this._isNightTheme = false;
        this._themesOptions = {
            theme: 'dark',
            color: '#1890FF',
            mode: 'side',
            fixedWidth: false,
            fixedTab: false,
            splitNav: true,
            colorWeak: false,
            fixedLeftNav: true,
            fixedHead: true,
            hasTopArea: true,
            hasFooterArea: true,
            hasNavArea: true,
            hasNavHeadArea: true
        };
        this.isCollapsed = false;
        this.dragging = false;
        this.themes = [
            {
                key: 'dark',
                image: '/assets/imgs/theme-dark.svg',
                title: 'Menu tối',
                isChecked: true
            },
            {
                key: 'light',
                image: '/assets/imgs/theme-light.svg',
                title: 'Menu sáng',
                isChecked: false
            }
        ];
        this.colors = [
            {
                key: 'dust',
                color: '#F5222D',
                title: 'Hoàng hôn',
                isChecked: false
            },
            {
                key: 'volcano',
                color: '#FA541C',
                title: 'Núi lửa',
                isChecked: false
            },
            {
                key: 'sunset',
                color: '#FAAD14',
                title: 'Hoàng hôn',
                isChecked: false
            },
            {
                key: 'cyan',
                color: '#13C2C2',
                title: 'Mingqing',
                isChecked: false
            },
            {
                key: 'green',
                color: '#52C41A',
                title: 'Green',
                isChecked: false
            },
            {
                key: 'daybreak',
                color: '#1890FF',
                title: 'màu xanh(mặc định)',
                isChecked: true
            },
            {
                key: 'geekblue',
                color: '#2F54EB',
                title: 'Geek Blue',
                isChecked: false
            },
            {
                key: 'purple',
                color: '#722ED1',
                title: 'Màu tím',
                isChecked: false
            }
        ];
        this.modes = [
            {
                key: 'side',
                image: '/assets/imgs/menu-side.svg',
                title: 'Bố cục Menu bên',
                isChecked: true
            },
            {
                key: 'top',
                image: '/assets/imgs/menu-top.svg',
                title: 'Bố cục menu trên cùng',
                isChecked: false
            },
            {
                key: 'mixi',
                image: '/assets/imgs/menu-top.svg',
                title: 'Bố cục menu kết hợp',
                isChecked: false
            }
        ];
    }
    changeCollapsed() {
        if (!this.dragging) {
            this.isCollapsed = !this.isCollapsed;
        }
        else {
            this.dragging = false;
        }
    }
    changePrimaryColor(color) {
        this.selOne(color, this.colors);
        this.nzConfigService.set('theme', { primaryColor: color.color });
        this._themesOptions.color = color.color;
        this.setThemeOptions();
    }
    // 修改黑夜主题
    changeNightTheme(isNight) {
        this.windowServe.setStorage(_config_constant__WEBPACK_IMPORTED_MODULE_0__.IsNightKey, `${isNight}`);
        this.themesService.setIsNightTheme(isNight);
        this.themeSkinService.toggleTheme().then();
    }
    // 选择一个isChecked为true,其他为false
    selOne(item, itemArray) {
        itemArray.forEach(_item => (_item.isChecked = false));
        item.isChecked = true;
    }
    changeMode(mode) {
        this.selOne(mode, this.modes);
        this.themesService.setIsCollapsed(false);
        this._themesOptions.mode = mode.key;
        this.setThemeOptions();
    }
    // 切换主题
    changeTheme(themeItem) {
        this.selOne(themeItem, this.themes);
        this._themesOptions.theme = themeItem.key;
        this.setThemeOptions();
    }
    // 设置主题参数
    setThemeOptions() {
        this.themesService.setThemesMode(this._themesOptions);
        this.windowServe.setStorage(_config_constant__WEBPACK_IMPORTED_MODULE_0__.ThemeOptionsKey, JSON.stringify(this._themesOptions));
    }
    // 修改固定头部
    changeFixed(isFixed, type) {
        // 非固定头部时，设置标签也不固定
        if (type === 'fixedHead' && !isFixed) {
            this._themesOptions['fixedTab'] = false;
        }
        this._themesOptions[type] = isFixed;
        this.setThemeOptions();
    }
    // 修改色弱模式
    changeWeakMode(e) {
        const name = this.doc.getElementsByTagName('html');
        if (e) {
            this.rd2.addClass(name[0], 'color-weak');
        }
        else {
            this.rd2.removeClass(name[0], 'color-weak');
        }
        this._themesOptions.colorWeak = e;
        this.setThemeOptions();
    }
    initThemeOption() {
        this.isNightTheme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(res => (this._isNightTheme = res));
        this.themesOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(res => {
            this._themesOptions = res;
        });
        this.changeWeakMode(this._themesOptions.colorWeak);
        this.modes.forEach(item => {
            item.isChecked = item.key === this._themesOptions.mode;
        });
        this.colors.forEach(item => {
            item.isChecked = item.color === this._themesOptions.color;
        });
        this.changePrimaryColor(this.colors.find(item => item.isChecked));
        this.themes.forEach(item => {
            item.isChecked = item.key === this._themesOptions.theme;
        });
    }
    ngOnInit() {
        this.initThemeOption();
    }
    dragEnd() {
        if (this.dragging) {
            setTimeout(() => {
                this.dragging = false;
            });
        }
    }
}
SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_theme_skin_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSkinService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_window_service__WEBPACK_IMPORTED_MODULE_3__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2)); };
SettingDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettingDrawerComponent, selectors: [["app-setting-drawer"]], decls: 8, vars: 8, consts: [["cdkDragLockAxis", "y", "cdkDrag", "", "id", "drawer-handle", 1, "drawer-handle", 3, "cdkDragEnded", "cdkDragStarted", "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["settingIcon", ""], ["closeIcon", ""], [3, "nzClosable", "nzWidth", "nzVisible", "nzVisibleChange", "nzOnClose"], [4, "nzDrawerContent"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], ["class", "m-b-24", 4, "ngIf"], [1, "m-b-24", "theme-color"], [1, "title"], [1, "content"], ["class", "color-block", "nz-tooltip", "", 3, "nzTooltipTitle", "background", "click", 4, "ngFor", "ngForOf"], [1, "m-b-24"], [1, "block-checkbox"], ["class", "item", "nz-tooltip", "", 3, "nzTooltipTitle", "click", 4, "ngFor", "ngForOf"], [3, "nzSplit"], [3, "nzActions"], ["fixedTabAction", ""], ["fixedHeadAction", ""], ["fixedLeftNavAction", ""], ["splitNavAction", ""], ["topAreaAction", ""], ["footerAreaAction", ""], ["navAreaAction", ""], ["navHeadAreaAction", ""], ["layoutAction", ""], ["otherAction", ""], ["nz-tooltip", "", 1, "item", 3, "nzTooltipTitle", "click"], [3, "src", "alt"], ["class", "select-icon", 4, "ngIf"], [1, "select-icon"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-tooltip", "", 1, "color-block", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 4, "ngIf"], ["nzSize", "small", 3, "nzDisabled", "ngModel", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelChange"]], template: function SettingDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragEnded", function SettingDrawerComponent_Template_div_cdkDragEnded_0_listener() { return ctx.dragEnd(); })("cdkDragStarted", function SettingDrawerComponent_Template_div_cdkDragStarted_0_listener() { return ctx.dragging = true; })("click", function SettingDrawerComponent_Template_div_click_0_listener() { return ctx.changeCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SettingDrawerComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SettingDrawerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SettingDrawerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-drawer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function SettingDrawerComponent_Template_nz_drawer_nzVisibleChange_6_listener($event) { return ctx.isCollapsed = $event; })("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_6_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SettingDrawerComponent_ng_container_7_Template, 71, 45, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCollapsed)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzClosable", false)("nzWidth", 300)("nzVisible", ctx.isCollapsed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__.NzDividerComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__.NzSwitchComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__.NzDrawerContentDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListItemComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.CdkDrag], styles: ["html.default[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  --ant-primary-color: #1890ff;\n  --ant-primary-color-hover: #40a9ff;\n  --ant-primary-color-active: #096dd9;\n  --ant-primary-color-outline: rgba(24, 144, 255, 0.2);\n  --ant-primary-1: #e6f7ff;\n  --ant-primary-2: #bae7ff;\n  --ant-primary-3: #91d5ff;\n  --ant-primary-4: #69c0ff;\n  --ant-primary-5: #40a9ff;\n  --ant-primary-6: #1890ff;\n  --ant-primary-7: #096dd9;\n  --ant-primary-color-deprecated-pure: ;\n  --ant-primary-color-deprecated-l-35: #cbe6ff;\n  --ant-primary-color-deprecated-l-20: #7ec1ff;\n  --ant-primary-color-deprecated-t-20: #46a6ff;\n  --ant-primary-color-deprecated-t-50: #8cc8ff;\n  --ant-primary-color-deprecated-f-12: rgba(24, 144, 255, 0.12);\n  --ant-primary-color-active-deprecated-f-30: rgba(230, 247, 255, 0.3);\n  --ant-primary-color-active-deprecated-d-02: #dcf4ff;\n  --ant-success-color: #52c41a;\n  --ant-success-color-hover: #73d13d;\n  --ant-success-color-active: #389e0d;\n  --ant-success-color-outline: rgba(82, 196, 26, 0.2);\n  --ant-success-color-deprecated-bg: #f6ffed;\n  --ant-success-color-deprecated-border: #b7eb8f;\n  --ant-error-color: #ff4d4f;\n  --ant-error-color-hover: #ff7875;\n  --ant-error-color-active: #d9363e;\n  --ant-error-color-outline: rgba(255, 77, 79, 0.2);\n  --ant-error-color-deprecated-bg: #fff2f0;\n  --ant-error-color-deprecated-border: #ffccc7;\n  --ant-warning-color: #faad14;\n  --ant-warning-color-hover: #ffc53d;\n  --ant-warning-color-active: #d48806;\n  --ant-warning-color-outline: rgba(250, 173, 20, 0.2);\n  --ant-warning-color-deprecated-bg: #fffbe6;\n  --ant-warning-color-deprecated-border: #ffe58f;\n  --ant-info-color: #1890ff;\n  --ant-info-color-deprecated-bg: #e6f7ff;\n  --ant-info-color-deprecated-border: #91d5ff;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-weight: normal;\n}\nhtml.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nhtml.default[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n}\nhtml.default[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not([align]), html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not([align]) {\n  text-align: left;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 8;\n  border: 1px dashed #d1d1d1;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 9;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  top: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-right[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  right: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  bottom: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  left: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  right: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  right: -5px;\n  bottom: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  bottom: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-top[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  cursor: ns-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-right[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  cursor: nesw-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-disabled[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%] {\n  display: none;\n}\nhtml.default[_ngcontent-%COMP%]   .text-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\nhtml.default[_ngcontent-%COMP%]   .text-break[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\nhtml.default[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .full-with[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\nhtml.default[_ngcontent-%COMP%]   .min-screen-full-height[_ngcontent-%COMP%] {\n  min-height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-height[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-width[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\nhtml.default[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '.';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .color-weak[_ngcontent-%COMP%] {\n  filter: invert(80%) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 980px;\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\nhtml.default[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {\n  position: relative;\n}\nhtml.default[_ngcontent-%COMP%]   .absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\nhtml.default[_ngcontent-%COMP%]   .t-0[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .l-0[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .b-0[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .r-0[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-h-100[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-5[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-15[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-23[_ngcontent-%COMP%] {\n  margin-right: 23px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-25[_ngcontent-%COMP%] {\n  margin-right: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-30[_ngcontent-%COMP%] {\n  margin-right: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-10[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-4[_ngcontent-%COMP%] {\n  margin-bottom: 4px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-5[_ngcontent-%COMP%] {\n  margin-left: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-7[_ngcontent-%COMP%] {\n  margin-left: 7px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-15[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-80[_ngcontent-%COMP%] {\n  margin-left: 80px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-200[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-5[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-15[_ngcontent-%COMP%] {\n  margin-top: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-25[_ngcontent-%COMP%] {\n  margin-top: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-30[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-18[_ngcontent-%COMP%] {\n  margin-left: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-25[_ngcontent-%COMP%] {\n  margin-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-50[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-8[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-24[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-12[_ngcontent-%COMP%] {\n  padding-top: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-16[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-24[_ngcontent-%COMP%] {\n  padding-left: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-25[_ngcontent-%COMP%] {\n  padding-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-35[_ngcontent-%COMP%] {\n  padding-left: 35px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-55[_ngcontent-%COMP%] {\n  padding-left: 55px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-10[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-16[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-24[_ngcontent-%COMP%] {\n  padding-right: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-8[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-12[_ngcontent-%COMP%] {\n  padding-bottom: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-24[_ngcontent-%COMP%] {\n  padding-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-50[_ngcontent-%COMP%] {\n  padding-bottom: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-11[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-12[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-18[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-28[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-bg-0[_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-02[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-03[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\nhtml.default[_ngcontent-%COMP%]   .clear-fix[_ngcontent-%COMP%]:after {\n  content: '';\n  clear: both;\n  display: block;\n}\nhtml.default[_ngcontent-%COMP%]   .default-theme[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\nhtml.default[_ngcontent-%COMP%]   .night-theme[_ngcontent-%COMP%] {\n  background: #141414;\n}\nhtml.default[_ngcontent-%COMP%]   .d-i-b[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model-move[_ngcontent-%COMP%] {\n  cursor: move;\n}\nhtml.default[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: #f5222d !important;\n}\nhtml.default[_ngcontent-%COMP%]   .grey-color[_ngcontent-%COMP%] {\n  color: #d9d9d9;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-blue[_ngcontent-%COMP%]:hover {\n  color: #409eff;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-red[_ngcontent-%COMP%]:hover {\n  color: #f5222d;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 5px;\n}\nhtml.default[_ngcontent-%COMP%]   .center-row[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-coloum[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-auto[_ngcontent-%COMP%] {\n  flex: auto;\n}\nhtml.default[_ngcontent-%COMP%]   .end-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .left-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-around[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .bg-color-no[_ngcontent-%COMP%] {\n  background: none !important;\n}\nhtml.default[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 12px;\n}\nhtml.default[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%] {\n  margin: 27px 27px 0;\n  \n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-title[_ngcontent-%COMP%] {\n  flex: 1 1;\n  font-size: 16px;\n  line-height: 24px;\n  will-change: transform;\n  opacity: 0.85;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-default-option[_ngcontent-%COMP%]   .ant-space-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 600px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-close-x[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 96px;\n  height: 56px;\n  line-height: 56px;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal[_ngcontent-%COMP%] {\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100%;\n  max-width: initial;\n  padding: 0;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  max-height: none;\n  height: calc(100% - 55px - 53px);\n}\nhtml.default[_ngcontent-%COMP%]   .ant-menu-inline[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical-left[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.default[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   input[nz-input][_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: var(--ant-primary-color);\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: #f1f1f1;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 4px;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}\nhtml.default   [_nghost-%COMP%]   .drawer-handle[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  top: 240px;\n  right: 0;\n  background: var(--ant-primary-color);\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: right 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\nhtml.default   [_nghost-%COMP%]   .drawer-handle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n}\nhtml.default   [_nghost-%COMP%]   .drawer-handle.open[_ngcontent-%COMP%] {\n  right: 300px;\n  z-index: 9999;\n}\nhtml.dark[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.dark[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: #177ddc;\n}\nhtml.dark[_ngcontent-%COMP%]   .ant-menu-horizontal[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 6px;\n  height: 6px;\n  background: #263848;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  background: #53616E !important;\n  border-radius: 4px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #c8c8c8;\n}\nhtml.dark   [_nghost-%COMP%]   .drawer-handle[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  top: 240px;\n  right: 0;\n  background: #177ddc;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: right 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\nhtml.dark   [_nghost-%COMP%]   .drawer-handle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n}\nhtml.dark   [_nghost-%COMP%]   .drawer-handle.open[_ngcontent-%COMP%] {\n  right: 300px;\n  z-index: 9999;\n}\n.block-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n}\n.block-checkbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  position: relative;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.block-checkbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n}\n.block-checkbox[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  padding-top: 15px;\n  padding-left: 24px;\n  height: 100%;\n  color: #1890ff;\n  font-size: 14px;\n  font-weight: bold;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 22px;\n  margin-bottom: 12px;\n}\n.theme-color[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.theme-color[_ngcontent-%COMP%]   .color-block[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 2px;\n  float: left;\n  cursor: pointer;\n  margin-right: 8px;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcbWl4aW4ubGVzcyIsInNldHRpbmctZHJhd2VyLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXG5nLXpvcnJvLWFudGRcXHNyY1xcc3R5bGVcXHRoZW1lc1xcdmFyaWFibGUubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1pbmlyZXNldC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXG5nLXpvcnJvLWFudGRcXHJlc2l6YWJsZVxcc3R5bGVcXGluZGV4Lmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZXNcXGJhc2UubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcZGVmYXVsdC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVzXFxkYXJrLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUNERiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7RUFDN0YsMEVBQTBFO0VBQzFFLFlBQVk7QUFDZDtBRExJO0VFYUYsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0RBQUE7RUFLQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUdBLHFDQUFBO0VBQ0EsNENBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSw2REFBQTtFQUNBLG9FQUFBO0VBQ0EsbURBQUE7RUFHQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsOENBQUE7RUFHQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFHQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvREFBQTtFQUNBLDBDQUFBO0VBQ0EsOENBQUE7RUFHQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7QURuQkY7QUQvQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VHc0JGLFNBQUE7RUFDQSxVQUFBO0FGa0RGO0FEekVJOzs7Ozs7RUdnQ0YsZUFBQTtFQUNBLG1CQUFBO0FGaURGO0FEbEZJO0VHcUNGLGdCQUFBO0FGZ0RGO0FEckZJOzs7O0VHNENGLFNBQUE7QUYrQ0Y7QUQzRkk7RUdnREYsc0JBQUE7QUY4Q0Y7QUQ5Rkk7OztFR29ERixtQkFBQTtBRitDRjtBRG5HSTs7RUd5REYsWUFBQTtFQUNBLGVBQUE7QUY4Q0Y7QUR4R0k7RUc4REYsU0FBQTtBRjZDRjtBRDNHSTtFR2tFRix5QkFBQTtFQUNBLGlCQUFBO0FGNENGO0FEL0dJOztFR3dFRixVQUFBO0FGMkNGO0FEbkhJOztFRzZFRixnQkFBQTtBRjBDRjtBR3RIRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUh3SEo7QUd0SEU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FId0hKO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FIeUhOO0FHbkhNOztFQUNFLGlCQUFBO0FIc0hSO0FHcEhNOztFQUNFLGlCQUFBO0FIdUhSO0FHckhNOztFQUNFLG1CQUFBO0FId0hSO0FHdEhNOztFQUNFLG1CQUFBO0FIeUhSO0FHakhNO0VBQ0Usb0JBQUE7QUhtSFI7QUQxTUk7RUtLc0Msc0JBQUE7QUp3TTFDO0FEN01JO0VLWWlCLHFCQUFBO0VBS2IsV0FBQTtBSmdNUjtBRGpOSTtFS2tCQyxTQUFBO0VBQ0gsVUFBQTtBSmtNRjtBRHJOSTs7RUt3QkssYUFBQTtBSmlNVDtBRHpOSTtFSzZCQyxhQUFBO0FKK0xMO0FENU5JO0VLZ0NFLGNBQUE7QUorTE47QUk5TFU7RUFHVCxjQUFBO0FKOExEO0FEbE9JO0VLeUNtQixxQkFBQTtBSjRMdkI7QURyT0k7Ozs7OztFSzhDRyxnQkFBQTtBSitMUDtBRDdPSTtFS2lERyxhQUFBO0FKK0xQO0FEaFBJO0VLa0RVLHFCQUFBO0FKaU1kO0FEblBJO0VLd0RKLHFCQUFBO0FKOExBO0FEdFBJO0VLMkRKLFlBQUE7QUo4TEE7QUR6UEk7RUs4RFMsc0JBQUE7QUo4TGI7QUQ1UEk7RUtxRUosNEJBQUE7QUowTEE7QUQvUEk7RUswRUssd0JBQUE7QUp3TFQ7QURsUUk7RUs0RUgsdUJBQUE7QUp5TEQ7QURyUUk7RUt3RlEsV0FBQTtFQUFlLFlBQUE7RUFDZCxjQUFBO0VBQ1IsU0FBQTtFQUFhLGtCQUFBO0FKa0xsQjtBRDVRSTtFSzhGRyw4QkFBQTtBSmlMUDtBRC9RSTtFS2lHSCxZQUFBO0VBQ0UsY0FBQTtBSmlMSDtBRG5SSTtFS3FHTSwyQkFBQTtBSmlMVjtBRHRSSTtFSzBHRCw2QkFBQTtBSitLSDtBRHpSSTtFS2dISCw0QkFBQTtBSjRLRDtBRDVSSTtFS21ISixXQUFBO0FKNEtBO0FEL1JJO0VLcUhVLFlBQUE7QUo2S2Q7QURsU0k7RUt3SEUsa0JBQUE7QUo2S047QURyU0k7RUt5SHdCLGtCQUFBO0FKK0s1QjtBRHhTSTtFSzZIRyxpQkFBQTtBSjhLUDtBRDNTSTtFS2lJRixrQkFBQTtBSjZLRjtBRDlTSTtFS29JUSxvQkFBQTtBSjZLWjtBRGpUSTtFS3dJQyxtQkFBQTtBSjRLTDtBRHBUSTtFSzRJSCxnQkFBQTtBSjJLRDtBRHZUSTtFSytJSiw0QkFBQTtBSjJLQTtBRDFUSTtFS29KRSw0QkFBQTtBSnlLTjtBRDdUSTtFS3lKQyw2QkFBQTtBSnVLTDtBRGhVSTtFSzZKTSw2QkFBQTtBSnNLVjtBRG5VSTtFS2lLZ0IsNkJBQUE7QUpxS3BCO0FEdFVJO0VLcUtjLDZCQUFBO0FKb0tsQjtBRHpVSTtFS3lLVyw2QkFBQTtBSm1LZjtBRDVVSTtFSzZLSSxvQkFBQTtBSmtLUjtBRC9VSTtFS2dMQSx1QkFBQTtBSmtLSjtBRGxWSTtFS2lMMkIsNkJBQUE7QUpvSy9CO0FEclZJO0VLcUxzQiw2QkFBQTtBSm1LMUI7QUR4Vkk7RUt5TGlCLDZCQUFBO0FKa0tyQjtBRDNWSTtFSzZMZ0IsOEJBQUE7QUppS3BCO0FEOVZJO0VLa01KLDhCQUFBO0FKK0pBO0FEaldJO0VLcU1KLDhCQUFBO0FKK0pBO0FEcFdJO0VLd000Qiw4QkFBQTtBSitKaEM7QUR2V0k7RUs0TXlCLHlCQUFBO0FKOEo3QjtBRDFXSTtFS2dOZ0IsMkJBQUE7QUo2SnBCO0FEN1dJO0VLb05RLDJCQUFBO0FKNEpaO0FEaFhJO0VLd05BLDJCQUFBO0FKMkpKO0FEblhJO0VLMk5JLDRCQUFBO0FKMkpSO0FEdFhJO0VLK05ELDRCQUFBO0FKMEpIO0FEelhJO0VLbU9ELDRCQUFBO0FKeUpIO0FENVhJO0VLdU9GLDZCQUFBO0FKd0pGO0FEL1hJO0VLMk9KLHdCQUFBO0FKdUpBO0FEbFlJO0VLNE8wQiwwQkFBQTtBSnlKOUI7QURyWUk7RUtnUG9CLDBCQUFBO0FKd0p4QjtBRHhZSTtFS3FQWSwyQkFBQTtBSnNKaEI7QUQzWUk7RUt5UE8sMkJBQUE7QUpxSlg7QUQ5WUk7RUs2UEMsMkJBQUE7QUpvSkw7QURqWkk7RUtpUUosMkJBQUE7QUptSkE7QURwWkk7RUtxUUosMkJBQUE7QUprSkE7QUR2Wkk7RUt3UUssNEJBQUE7QUprSlQ7QUQxWkk7RUs0UUksNEJBQUE7QUppSlI7QUQ3Wkk7RUtnUkMsNEJBQUE7QUpnSkw7QURoYUk7RUtvUkYsNEJBQUE7QUorSUY7QURuYUk7RUtzUkYscUJBQUE7QUpnSkY7QUR0YUk7RUt5UmlCLHVCQUFBO0FKZ0pyQjtBRHphSTtFSzZSTyx3QkFBQTtBSitJWDtBRDVhSTtFS2tTSCx3QkFBQTtBSjZJRDtBRC9hSTtFS3FTRCwyQkFBQTtBSjZJSDtBRGxiSTtFS3dTSiw0QkFBQTtBSjZJQTtBRHJiSTtFSzBTNEIsNEJBQUE7QUo4SWhDO0FEeGJJO0VLOFN3Qiw0QkFBQTtBSjZJNUI7QUQzYkk7RUttVHFCLDBCQUFBO0FKMkl6QjtBRDliSTtFS3dUSiw0QkFBQTtBSnlJQTtBRGpjSTtFSzZUSiw2QkFBQTtBSnVJQTtBRHBjSTtFS2tVSCw2QkFBQTtBSnFJRDtBRHZjSTtFS3NVSiw2QkFBQTtBSm9JQTtBRDFjSTtFS3lVSiw2QkFBQTtBSm9JQTtBRDdjSTtFSzRVMkIsNkJBQUE7QUpvSS9CO0FEaGRJO0VLZ1Z3Qiw2QkFBQTtBSm1JNUI7QURuZEk7RUtxVm1CLDZCQUFBO0FKaUl2QjtBRHRkSTtFS3lWbUIsOEJBQUE7QUpnSXZCO0FEemRJO0VLOFZlLDhCQUFBO0FKOEhuQjtBRDVkSTtFS2tXWSw4QkFBQTtBSjZIaEI7QUQvZEk7RUtzV1EsNEJBQUE7QUo0SFo7QURsZUk7RUswV0UsOEJBQUE7QUoySE47QURyZUk7RUsrV0gsK0JBQUE7QUp5SEQ7QUR4ZUk7RUtrWE0sK0JBQUE7QUp5SFY7QUQzZUk7RUtzWEksK0JBQUE7QUp3SFI7QUQ5ZUk7RUswWEcsK0JBQUE7QUp1SFA7QURqZkk7RUs4WEQsMEJBQUE7QUpzSEg7QURwZkk7RUsrWDhCLDBCQUFBO0FKd0hsQztBRHZmSTtFS21ZcUIsMEJBQUE7QUp1SHpCO0FEMWZJO0VLdVlhLDBCQUFBO0FKc0hqQjtBRDdmSTtFSzJZTywwQkFBQTtBSnFIWDtBRGhnQkk7RUsrWUYsMEJBQUE7QUpvSEY7QURuZ0JJO0VLa1pNLDBDQUFBO0FKb0hWO0FEdGdCSTtFS3VaTSxvQkFBQTtBSmtIVjtBRHpnQkk7RUswWk0sb0JBQUE7QUprSFY7QUQ1Z0JJO0VLOFpELFdBQUE7RUFDSyxXQUFBO0VBQWUsY0FBQTtBSmtIdkI7QURqaEJJO0VLbWFZLG1CQUFBO0FKaUhoQjtBRHBoQkk7RUt1YU8sbUJBQUE7QUpnSFg7QUR2aEJJO0VLMmFKLGdDQUFBO0FKK0dBO0FEMWhCSTtFSythWSxvQkFBQTtBSjhHaEI7QUQ3aEJJO0VLbWJPLGVBQUE7QUo2R1g7QURoaUJJO0VLc2JZLFlBQUE7QUo2R2hCO0FEbmlCSTtFS3ViNEIseUJBQUE7QUorR2hDO0FEdGlCSTtFSzJiTSxjQUFBO0FKOEdWO0FJMUdBO0VBQWMsY0FBQTtBSjZHZDtBSXpHRztFQUNGLGNBQUE7QUoyR0Q7QUQvaUJJO0VLbWJPLGVBQUE7RUFzQkksaUJBQUE7QUowR2Y7QURuakJJO0VLNmNFLGNBQUE7QUp5R047QUR0akJJO0VLa2RNLGFBQUE7RUFBaUIsdUJBQUE7RUFHakIsbUJBQUE7QUpzR1Y7QUQzakJJO0VLMGRjLGFBQUE7QUpvR2xCO0FEOWpCSTtFSzhkSSxzQkFBQTtBSm1HUjtBRGprQkk7RUtrZU0sT0FBQTtBSmtHVjtBRHBrQkk7RUtxZUQsVUFBQTtBSmtHSDtBRHZrQkk7RUtrZE0sYUFBQTtFQUFpQix5QkFBQTtFQUdqQixtQkFBQTtBSnVIVjtBRDVrQkk7RUtrZE0sYUFBQTtFQUFpQiwyQkFBQTtFQUdqQixtQkFBQTtBSjRIVjtBRGpsQkk7RUtrZE0sYUFBQTtFQUFpQiw4QkFBQTtFQUdqQixtQkFBQTtBSmlJVjtBRHRsQkk7RUtrZE0sYUFBQTtFQUFpQiw2QkFBQTtFQUdqQixtQkFBQTtBSnNJVjtBRDNsQkk7RUswZkssMkJBQUE7QUpvR1Q7QUQ5bEJJO0VLOGZZLGdCQUFBO0VBQW9CLGVBQUE7QUpvR3BDO0FEbG1CSTtFS2dnQmEsV0FBQTtFQUNYLGFBQUE7QUpxR047QUR0bUJJO0VLc2dCRCxtQkFBQTtFSm1HRCxTQUFTO0FBQ1g7QUQxbUJJO0VLOGdCSCxhQUFBO0VBQW1CLG1CQUFBO0VBSWxCLDhCQUFBO0FKNkZGO0FEL21CSTtFSzBoQkEsU0FBQTtFQUFpQixlQUFBO0VBR04saUJBQUE7RUFDRyxzQkFBQTtFQUdELGFBQUE7QUpxRmpCO0FEdG5CSTtFS3NpQk8sYUFBQTtFQUVWLG1CQUFBO0VBR08seUJBQUE7QUpnRlI7QUQzbkJJO0VLcWpCSiw0QkFBQTtBSnlFQTtBRDluQkk7RUswakJnQixhQUFBO0FKdUVwQjtBRGpvQkk7RUtna0JKLGNBQUE7RUFBa0IsaUJBQUE7QUpxRWxCO0FEcm9CSTtFS2trQkoscUJBQUE7RUFDdUIsV0FBQTtFQUNyQixZQUFBO0VBQ0YsaUJBQUE7QUpzRUE7QUQzb0JJO0VLc2tCZSxnQkFBQTtBSndFbkI7QUQ5b0JJO0VLd2tCSixpQkFBQTtFQUNFLG1CQUFBO0VBRWdCLG9CQUFBO0VBQ1gsa0JBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFBa0Isa0JBQUE7RUFHbkIsVUFBQTtFQUFnQiwwQ0FBQTtBSndFeEI7QUl2RTRCO0VBQ2xCLFlBQUE7RUFBb0IsMENBQUE7QUowRTlCO0FJM0U0QjtFQVFWLGdCQUFBO0VBS04sZ0NBQUE7QUprRVo7QURqcUJJOzs7RUt3bUJZLFlBQUE7QUo4RGhCO0FEdHFCSTtFSzBtQk0sV0FBQTtBSitEVjtBRHpxQkk7RUtrWk0sMENBQUE7QUowUlY7QUQ1cUJJO0VNTUYsK0JBQUE7QUx5cUJGO0FEL3FCSTtFTVNGLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUx5cUJGO0FEcHJCSTtFTWVGLGdCQUFBO0VBQ0Esa0JBQUE7QUx3cUJGO0FEeHJCSTtFTW9CRixtQkFBQTtBTHVxQkY7QUQzckJJO0VDR0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtBQTJyQk47QUR6c0JJO0VDaUJJLGNBQUE7RUFDQSxlQUFBO0FBMnJCUjtBQXhyQk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQTByQlI7QUQ3c0JJO0VDK3NCRiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7RUFDN0YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QURydEJJO0VPQ0YsY0FBQTtBTnV0QkY7QUR4dEJJO0VPSUYsWUFBQTtBTnV0QkY7QUQzdEJJO0VDNnRCRixVQUFVO0VNaHRCVixVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FOa3RCRjtBRGp1Qkk7RUNtdUJGLFdBQVc7RU1odEJYLDhCQUFBO0VBQ0Esa0JBQUE7QU5rdEJGO0FEdHVCSTtFTzBCRixvREFBQTtFQUNBLG1CQUFBO0FOK3NCRjtBRDF1Qkk7RU9pQ0YsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EseUJBQUE7QU40c0JGO0FEaHZCSTtFQ0RFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUFvdkJOO0FEOXZCSTtFQ2FJLGNBQUE7RUFDQSxlQUFBO0FBb3ZCUjtBQWp2Qk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQW12QlI7QUE5dUJBO0VBQ0UsYUFBQTtBQWd2QkY7QUFqdkJBO0VBSUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWd2Qko7QUF2dkJBO0VBVU0sV0FBQTtBQWd2Qk47QUExdkJBO0VBZUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE4dUJKO0FBMXVCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBNHVCRjtBQXZ1QkE7RUFDRSxnQkFBQTtBQXl1QkY7QUExdUJBO0VBSUksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXl1QkoiLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWVNaXhpbihAcnVsZXMpIHtcbiAgaHRtbCB7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgIEBpbXBvcnQgJy4vZGVmYXVsdC5sZXNzJztcbiAgICAgIEBydWxlcygpO1xuICAgIH1cbiAgICAmLmRhcmsge1xuICAgICAgQGltcG9ydCAnLi9kYXJrLmxlc3MnO1xuICAgICAgQHJ1bGVzKCk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwibWl4aW5cIjtcblxuLnRoZW1lTWl4aW4oe1xuICA6aG9zdCB7XG4gICAgLmRyYXdlci1oYW5kbGUge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIHRvcDogMjQwcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmLm9wZW4ge1xuICAgICAgICByaWdodDogMzAwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbi5ibG9jay1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLml0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3QtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAjMTg5MGZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5cblxuLnRoZW1lLWNvbG9yIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuY29sb3ItYmxvY2sge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIiwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG5AaW1wb3J0ICcuLi9jb2xvci9jb2xvcnMnO1xuXG5AdGhlbWU6IHZhcmlhYmxlO1xuXG4vLyBUaGUgcHJlZml4IHRvIHVzZSBvbiBhbGwgY3NzIGNsYXNzZXMgZnJvbSBhbnQuXG5AYW50LXByZWZpeDogYW50O1xuXG4vLyBBbiBvdmVycmlkZSBmb3IgdGhlIGh0bWwgc2VsZWN0b3IgZm9yIHRoZW1lIHByZWZpeGVzXG5AaHRtbC1zZWxlY3RvcjogaHRtbDtcblxuQHtodG1sLXNlbGVjdG9yfSB7XG4gIEBiYXNlLXByaW1hcnk6IEBibHVlLTY7XG5cbiAgLy8gPT09PT09PT09IFByaW1hcnkgQ29sb3IgPT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yOiBAYmFzZS1wcmltYXJ5O1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1ob3ZlcjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDUpIGApO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA3KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3Itb3V0bGluZTogZmFkZShAYmFzZS1wcmltYXJ5LCBAb3V0bGluZS1mYWRlKTtcblxuICAvLyBMZWdhY3lcbiAgQGxlZ2FjeS1wcmltYXJ5LTE6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAxKSBgKTtcblxuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS0xOiBAbGVnYWN5LXByaW1hcnktMTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDIpIGApO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS0zOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgMykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTQ6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA0KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDUpIGApO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS02OiBAYmFzZS1wcmltYXJ5O1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS03OiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgNykgYCk7XG5cbiAgLy8gRGVwcmVjYXRlZFxuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLXB1cmU6IH4nJztcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1sLTM1OiBsaWdodGVuKEBiYXNlLXByaW1hcnksIDM1JSk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtbC0yMDogbGlnaHRlbihAYmFzZS1wcmltYXJ5LCAyMCUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLXQtMjA6IHRpbnQoQGJhc2UtcHJpbWFyeSwgMjAlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTUwOiB0aW50KEBiYXNlLXByaW1hcnksIDUwJSk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtZi0xMjogZmFkZShAYmFzZS1wcmltYXJ5LCAxMiUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUtZGVwcmVjYXRlZC1mLTMwOiBmYWRlKEBsZWdhY3ktcHJpbWFyeS0xLCAzMCUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUtZGVwcmVjYXRlZC1kLTAyOiBkYXJrZW4oQGxlZ2FjeS1wcmltYXJ5LTEsIDIlKTtcblxuICAvLyA9PT09PT09PT0gU3VjY2VzcyBDb2xvciA9PT09PT09PT1cbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3I6IEBncmVlbi02O1xuICAtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvci1ob3ZlcjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7Z3JlZW4tNn0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItYWN0aXZlOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtncmVlbi02fScsIDcpIGApO1xuICAtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvci1vdXRsaW5lOiBmYWRlKEBncmVlbi02LCBAb3V0bGluZS1mYWRlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZzogfmBjb2xvclBhbGV0dGUoJ0B7Z3JlZW4tNn0nLCAxKSBgO1xuICAtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfmBjb2xvclBhbGV0dGUoJ0B7Z3JlZW4tNn0nLCAzKSBgO1xuXG4gIC8vID09PT09PT09PT0gRXJyb3IgQ29sb3IgPT09PT09PT09PVxuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3I6IEByZWQtNTtcbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWhvdmVyOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtyZWQtNX0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWFjdGl2ZTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cmVkLTV9JywgNykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1vdXRsaW5lOiBmYWRlKEByZWQtNSwgQG91dGxpbmUtZmFkZSk7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1kZXByZWNhdGVkLWJnOiB+YGNvbG9yUGFsZXR0ZSgnQHtyZWQtNX0nLCAxKSBgO1xuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH5gY29sb3JQYWxldHRlKCdAe3JlZC01fScsIDMpIGA7XG5cbiAgLy8gPT09PT09PT09IFdhcm5pbmcgQ29sb3IgPT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yOiBAZ29sZC02O1xuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1ob3ZlcjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7Z29sZC02fScsIDUpIGApO1xuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1hY3RpdmU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2dvbGQtNn0nLCA3KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3Itb3V0bGluZTogZmFkZShAZ29sZC02LCBAb3V0bGluZS1mYWRlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItZGVwcmVjYXRlZC1iZzogfmBjb2xvclBhbGV0dGUoJ0B7Z29sZC02fScsIDEpIGA7XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+YGNvbG9yUGFsZXR0ZSgnQHtnb2xkLTZ9JywgMykgYDtcblxuICAvLyA9PT09PT09PT09IEluZm8gQ29sb3IgPT09PT09PT09PT1cbiAgLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3I6IEBiYXNlLXByaW1hcnk7XG4gIC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAxKSBgO1xuICAtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDMpIGA7XG59XG5cbi8vIC0tLS0tLS0tIENvbG9ycyAtLS0tLS0tLS0tLVxuLy8gPj4+IFByaW1hcnlcbkBwcmltYXJ5LWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvciknO1xuQHByaW1hcnktY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWhvdmVyKSc7XG5AcHJpbWFyeS1jb2xvci1hY3RpdmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWFjdGl2ZSknO1xuQHByaW1hcnktY29sb3Itb3V0bGluZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3Itb3V0bGluZSknO1xuXG5AcHJvY2Vzc2luZy1jb2xvcjogQHByaW1hcnktY29sb3I7XG5cbi8vID4+PiBJbmZvXG5AaW5mby1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3IpJztcbkBpbmZvLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yLWRlcHJlY2F0ZWQtYmcpJztcbkBpbmZvLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJvcmRlciknO1xuXG4vLyA+Pj4gU3VjY2Vzc1xuQHN1Y2Nlc3MtY29sb3I6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yKSc7XG5Ac3VjY2Vzcy1jb2xvci1ob3Zlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItaG92ZXIpJztcbkBzdWNjZXNzLWNvbG9yLWFjdGl2ZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItYWN0aXZlKSc7XG5Ac3VjY2Vzcy1jb2xvci1vdXRsaW5lOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvci1vdXRsaW5lKSc7XG5Ac3VjY2Vzcy1jb2xvci1kZXByZWNhdGVkLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvci1kZXByZWNhdGVkLWJnKSc7XG5Ac3VjY2Vzcy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXIpJztcblxuLy8gPj4+IFdhcm5pbmdcbkB3YXJuaW5nLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvciknO1xuQHdhcm5pbmctY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWhvdmVyKSc7XG5Ad2FybmluZy1jb2xvci1hY3RpdmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWFjdGl2ZSknO1xuQHdhcm5pbmctY29sb3Itb3V0bGluZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3Itb3V0bGluZSknO1xuQHdhcm5pbmctY29sb3ItZGVwcmVjYXRlZC1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItZGVwcmVjYXRlZC1iZyknO1xuQHdhcm5pbmctY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyKSc7XG5cbi8vID4+PiBFcnJvclxuQGVycm9yLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3IpJztcbkBlcnJvci1jb2xvci1ob3Zlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWhvdmVyKSc7XG5AZXJyb3ItY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItYWN0aXZlKSc7XG5AZXJyb3ItY29sb3Itb3V0bGluZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLW91dGxpbmUpJztcbkBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZyknO1xuQGVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1ib3JkZXIpJztcblxuQGhpZ2hsaWdodC1jb2xvcjogQHJlZC01O1xuQG5vcm1hbC1jb2xvcjogI2Q5ZDlkOTtcbkB3aGl0ZTogI2ZmZjtcbkBibGFjazogIzAwMDtcblxuLy8gQ29sb3IgdXNlZCBieSBkZWZhdWx0IHRvIGNvbnRyb2wgaG92ZXIgYW5kIGFjdGl2ZSBiYWNrZ3JvdW5kcyBhbmQgZm9yXG4vLyBhbGVydCBpbmZvIGJhY2tncm91bmRzLlxuQHByaW1hcnktMTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMSknOyAvLyByZXBsYWNlIHRpbnQoQHByaW1hcnktY29sb3IsIDkwJSlcbkBwcmltYXJ5LTI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTIpJzsgLy8gcmVwbGFjZSB0aW50KEBwcmltYXJ5LWNvbG9yLCA4MCUpXG5AcHJpbWFyeS0zOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS0zKSc7IC8vIHVudXNlZFxuQHByaW1hcnktNDogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNCknOyAvLyB1bnVzZWRcbkBwcmltYXJ5LTU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTUpJzsgLy8gY29sb3IgdXNlZCB0byBjb250cm9sIHRoZSB0ZXh0IGNvbG9yIGluIG1hbnkgYWN0aXZlIGFuZCBob3ZlciBzdGF0ZXMsIHJlcGxhY2UgdGludChAcHJpbWFyeS1jb2xvciwgMjAlKVxuQHByaW1hcnktNjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNiknOyAvLyBjb2xvciB1c2VkIHRvIGNvbnRyb2wgdGhlIHRleHQgY29sb3Igb2YgYWN0aXZlIGJ1dHRvbnMsIGRvbid0IHVzZSwgdXNlIEBwcmltYXJ5LWNvbG9yXG5AcHJpbWFyeS03OiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS03KSc7IC8vIHJlcGxhY2Ugc2hhZGUoQHByaW1hcnktY29sb3IsIDUlKVxuQHByaW1hcnktODogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cHJpbWFyeS1jb2xvcn0nLCA4KSBgKTsgLy8gdW51c2VkXG5AcHJpbWFyeS05OiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtwcmltYXJ5LWNvbG9yfScsIDkpIGApOyAvLyB1bnVzZWRcbkBwcmltYXJ5LTEwOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtwcmltYXJ5LWNvbG9yfScsIDEwKSBgKTsgLy8gdW51c2VkXG5cbi8vIEJhc2UgU2NhZmZvbGRpbmcgVmFyaWFibGVzXG4vLyAtLS1cblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYDxib2R5PmBcbkBib2R5LWJhY2tncm91bmQ6ICNmZmY7XG4vLyBCYXNlIGJhY2tncm91bmQgY29sb3IgZm9yIG1vc3QgY29tcG9uZW50c1xuQGNvbXBvbmVudC1iYWNrZ3JvdW5kOiAjZmZmO1xuLy8gUG9wb3ZlciBiYWNrZ3JvdW5kIGNvbG9yXG5AcG9wb3Zlci1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AcG9wb3Zlci1jdXN0b21pemUtYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuQGNvZGUtZmFtaWx5OiAnU0ZNb25vLVJlZ3VsYXInLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG5AdGV4dC1jb2xvcjogZmFkZShAYmxhY2ssIDg1JSk7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnk6IGZhZGUoQGJsYWNrLCA0NSUpO1xuQHRleHQtY29sb3ItaW52ZXJzZTogQHdoaXRlO1xuQGljb24tY29sb3I6IGluaGVyaXQ7XG5AaWNvbi1jb2xvci1ob3ZlcjogZmFkZShAYmxhY2ssIDc1JSk7XG5AaGVhZGluZy1jb2xvcjogZmFkZShAYmxhY2ssIDg1JSk7XG5AdGV4dC1jb2xvci1kYXJrOiBmYWRlKEB3aGl0ZSwgODUlKTtcbkB0ZXh0LWNvbG9yLXNlY29uZGFyeS1kYXJrOiBmYWRlKEB3aGl0ZSwgNjUlKTtcbkB0ZXh0LXNlbGVjdGlvbi1iZzogQHByaW1hcnktY29sb3I7XG5AZm9udC12YXJpYW50LWJhc2U6IHRhYnVsYXItbnVtcztcbkBmb250LWZlYXR1cmUtc2V0dGluZ3MtYmFzZTogJ3RudW0nO1xuQGZvbnQtc2l6ZS1iYXNlOiAxNHB4O1xuQGZvbnQtc2l6ZS1sZzogQGZvbnQtc2l6ZS1iYXNlICsgMnB4O1xuQGZvbnQtc2l6ZS1zbTogMTJweDtcbkBoZWFkaW5nLTEtc2l6ZTogY2VpbChAZm9udC1zaXplLWJhc2UgKiAyLjcxKTtcbkBoZWFkaW5nLTItc2l6ZTogY2VpbChAZm9udC1zaXplLWJhc2UgKiAyLjE0KTtcbkBoZWFkaW5nLTMtc2l6ZTogY2VpbChAZm9udC1zaXplLWJhc2UgKiAxLjcxKTtcbkBoZWFkaW5nLTQtc2l6ZTogY2VpbChAZm9udC1zaXplLWJhc2UgKiAxLjQyKTtcbkBoZWFkaW5nLTUtc2l6ZTogY2VpbChAZm9udC1zaXplLWJhc2UgKiAxLjE0KTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIwMjEwXG5AbGluZS1oZWlnaHQtYmFzZTogMS41NzE1O1xuQGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xuQGJvcmRlci1yYWRpdXMtc206IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cbi8vIGNvbnRyb2wgYm9yZGVyXG5AY29udHJvbC1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4vLyBhcnJvdyBib3JkZXJcbkBhcnJvdy1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gdmVydGljYWwgcGFkZGluZ3NcbkBwYWRkaW5nLWxnOiAyNHB4OyAvLyBjb250YWluZXJzXG5AcGFkZGluZy1tZDogMTZweDsgLy8gc21hbGwgY29udGFpbmVycyBhbmQgYnV0dG9uc1xuQHBhZGRpbmctc206IDEycHg7IC8vIEZvcm0gY29udHJvbHMgYW5kIGl0ZW1zXG5AcGFkZGluZy14czogOHB4OyAvLyBzbWFsbCBpdGVtc1xuQHBhZGRpbmcteHNzOiA0cHg7IC8vIG1vcmUgc21hbGxcblxuLy8gdmVydGljYWwgcGFkZGluZyBmb3IgYWxsIGZvcm0gY29udHJvbHNcbkBjb250cm9sLXBhZGRpbmctaG9yaXpvbnRhbDogQHBhZGRpbmctc207XG5AY29udHJvbC1wYWRkaW5nLWhvcml6b250YWwtc206IEBwYWRkaW5nLXhzO1xuXG4vLyB2ZXJ0aWNhbCBtYXJnaW5zXG5AbWFyZ2luLWxnOiAyNHB4OyAvLyBjb250YWluZXJzXG5AbWFyZ2luLW1kOiAxNnB4OyAvLyBzbWFsbCBjb250YWluZXJzIGFuZCBidXR0b25zXG5AbWFyZ2luLXNtOiAxMnB4OyAvLyBGb3JtIGNvbnRyb2xzIGFuZCBpdGVtc1xuQG1hcmdpbi14czogOHB4OyAvLyBzbWFsbCBpdGVtc1xuQG1hcmdpbi14c3M6IDRweDsgLy8gbW9yZSBzbWFsbFxuXG4vLyBoZWlnaHQgcnVsZXNcbkBoZWlnaHQtYmFzZTogMzJweDtcbkBoZWlnaHQtbGc6IDQwcHg7XG5AaGVpZ2h0LXNtOiAyNHB4O1xuXG4vLyBUaGUgYmFja2dyb3VuZCBjb2xvcnMgZm9yIGFjdGl2ZSBhbmQgaG92ZXIgc3RhdGVzIGZvciB0aGluZ3MgbGlrZVxuLy8gbGlzdCBpdGVtcyBvciB0YWJsZSBjZWxscy5cbkBpdGVtLWFjdGl2ZS1iZzogQHByaW1hcnktMTtcbkBpdGVtLWhvdmVyLWJnOiAjZjVmNWY1O1xuXG4vLyBJQ09ORk9OVFxuQGljb25mb250LWNzcy1wcmVmaXg6IGFudGljb247XG5cbi8vIExJTktcbkBsaW5rLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBsaW5rLWhvdmVyLWNvbG9yOiBAcHJpbWFyeS1jb2xvci1ob3ZlcjtcbkBsaW5rLWFjdGl2ZS1jb2xvcjogQHByaW1hcnktY29sb3ItYWN0aXZlO1xuQGxpbmstZGVjb3JhdGlvbjogbm9uZTtcbkBsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XG5AbGluay1mb2N1cy1kZWNvcmF0aW9uOiBub25lO1xuQGxpbmstZm9jdXMtb3V0bGluZTogMDtcblxuLy8gQW5pbWF0aW9uXG5AZWFzZS1iYXNlLW91dDogY3ViaWMtYmV6aWVyKDAuNywgMC4zLCAwLjEsIDEpO1xuQGVhc2UtYmFzZS1pbjogY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC4zLCAwLjcpO1xuQGVhc2Utb3V0OiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbkBlYXNlLWluOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbkBlYXNlLWluLW91dDogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuQGVhc2Utb3V0LWJhY2s6IGN1YmljLWJlemllcigwLjEyLCAwLjQsIDAuMjksIDEuNDYpO1xuQGVhc2UtaW4tYmFjazogY3ViaWMtYmV6aWVyKDAuNzEsIC0wLjQ2LCAwLjg4LCAwLjYpO1xuQGVhc2UtaW4tb3V0LWJhY2s6IGN1YmljLWJlemllcigwLjcxLCAtMC40NiwgMC4yOSwgMS40Nik7XG5AZWFzZS1vdXQtY2lyYzogY3ViaWMtYmV6aWVyKDAuMDgsIDAuODIsIDAuMTcsIDEpO1xuQGVhc2UtaW4tY2lyYzogY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zNCk7XG5AZWFzZS1pbi1vdXQtY2lyYzogY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xuQGVhc2Utb3V0LXF1aW50OiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG5AZWFzZS1pbi1xdWludDogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XG5AZWFzZS1pbi1vdXQtcXVpbnQ6IGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcblxuLy8gQm9yZGVyIGNvbG9yXG5AYm9yZGVyLWNvbG9yLWJhc2U6IGhzdigwLCAwLCA4NSUpOyAvLyBiYXNlIGJvcmRlciBvdXRsaW5lIGEgY29tcG9uZW50XG5AYm9yZGVyLWNvbG9yLXNwbGl0OiByZ2JhKDAsIDAsIDAsIDAuMDYpOyAvLyBzcGxpdCBib3JkZXIgaW5zaWRlIGEgY29tcG9uZW50XG5AYm9yZGVyLWNvbG9yLWludmVyc2U6IEB3aGl0ZTtcbkBib3JkZXItd2lkdGgtYmFzZTogMXB4OyAvLyB3aWR0aCBvZiB0aGUgYm9yZGVyIGZvciBhIGNvbXBvbmVudFxuQGJvcmRlci1zdHlsZS1iYXNlOiBzb2xpZDsgLy8gc3R5bGUgb2YgYSBjb21wb25lbnRzIGJvcmRlclxuXG4vLyBPdXRsaW5lXG5Ab3V0bGluZS1ibHVyLXNpemU6IDA7XG5Ab3V0bGluZS13aWR0aDogMnB4O1xuQG91dGxpbmUtY29sb3I6IEBwcmltYXJ5LWNvbG9yOyAvLyBObyB1c2UgYW55bW9yZVxuQG91dGxpbmUtZmFkZTogMjAlO1xuXG5AYmFja2dyb3VuZC1jb2xvci1saWdodDogaHN2KDAsIDAsIDk4JSk7IC8vIGJhY2tncm91bmQgb2YgaGVhZGVyIGFuZCBzZWxlY3RlZCBpdGVtXG5AYmFja2dyb3VuZC1jb2xvci1iYXNlOiBoc3YoMCwgMCwgOTYlKTsgLy8gRGVmYXVsdCBncmV5IGJhY2tncm91bmQgY29sb3JcblxuLy8gRGlzYWJsZWQgc3RhdGVzXG5AZGlzYWJsZWQtY29sb3I6IGZhZGUoIzAwMCwgMjUlKTtcbkBkaXNhYmxlZC1iZzogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcbkBkaXNhYmxlZC1hY3RpdmUtYmc6IHRpbnQoQGJsYWNrLCA5MCUpO1xuQGRpc2FibGVkLWNvbG9yLWRhcms6IGZhZGUoI2ZmZiwgMzUlKTtcblxuLy8gU2hhZG93XG5Ac2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuQHNoYWRvdy1jb2xvci1pbnZlcnNlOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AYm94LXNoYWRvdy1iYXNlOiBAc2hhZG93LTI7XG5Ac2hhZG93LTEtdXA6IDAgLTZweCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAtOXB4IDI4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAwIC0xMnB4IDQ4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuQHNoYWRvdy0xLWRvd246IDAgNnB4IDE2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDlweCAyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgMCAxMnB4IDQ4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuQHNoYWRvdy0xLWxlZnQ6IC02cHggMCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgLTlweCAwIDI4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAtMTJweCAwIDQ4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuQHNoYWRvdy0xLXJpZ2h0OiA2cHggMCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgOXB4IDAgMjhweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gIDEycHggMCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMjogMCAzcHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA2cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gIDAgOXB4IDI4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cbi8vIEJ1dHRvbnNcbkBidG4tZm9udC13ZWlnaHQ6IDQwMDtcbkBidG4tYm9yZGVyLXJhZGl1cy1iYXNlOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQGJ0bi1ib3JkZXItcmFkaXVzLXNtOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQGJ0bi1ib3JkZXItd2lkdGg6IEBib3JkZXItd2lkdGgtYmFzZTtcbkBidG4tYm9yZGVyLXN0eWxlOiBAYm9yZGVyLXN0eWxlLWJhc2U7XG5AYnRuLXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDE1KTtcbkBidG4tcHJpbWFyeS1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0NSk7XG5AYnRuLXRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG5AYnRuLXByaW1hcnktY29sb3I6ICNmZmY7XG5AYnRuLXByaW1hcnktYmc6IEBwcmltYXJ5LWNvbG9yO1xuXG5AYnRuLWRlZmF1bHQtY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGJ0bi1kZWZhdWx0LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AYnRuLWRlZmF1bHQtYm9yZGVyOiBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cbkBidG4tZGFuZ2VyLWNvbG9yOiAjZmZmO1xuQGJ0bi1kYW5nZXItYmc6IEBlcnJvci1jb2xvcjtcbkBidG4tZGFuZ2VyLWJvcmRlcjogQGVycm9yLWNvbG9yO1xuXG5AYnRuLWRpc2FibGUtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcbkBidG4tZGlzYWJsZS1iZzogQGRpc2FibGVkLWJnO1xuQGJ0bi1kaXNhYmxlLWJvcmRlcjogQGJvcmRlci1jb2xvci1iYXNlO1xuXG5AYnRuLWRlZmF1bHQtZ2hvc3QtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBidG4tZGVmYXVsdC1naG9zdC1iZzogdHJhbnNwYXJlbnQ7XG5AYnRuLWRlZmF1bHQtZ2hvc3QtYm9yZGVyOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5cbkBidG4tZm9udC1zaXplLWxnOiBAZm9udC1zaXplLWxnO1xuQGJ0bi1mb250LXNpemUtc206IEBmb250LXNpemUtYmFzZTtcbkBidG4tcGFkZGluZy1ob3Jpem9udGFsLWJhc2U6IEBwYWRkaW5nLW1kIC0gMXB4O1xuQGJ0bi1wYWRkaW5nLWhvcml6b250YWwtbGc6IEBidG4tcGFkZGluZy1ob3Jpem9udGFsLWJhc2U7XG5AYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1zbTogQHBhZGRpbmcteHMgLSAxcHg7XG5cbkBidG4taGVpZ2h0LWJhc2U6IEBoZWlnaHQtYmFzZTtcbkBidG4taGVpZ2h0LWxnOiBAaGVpZ2h0LWxnO1xuQGJ0bi1oZWlnaHQtc206IEBoZWlnaHQtc207XG5cbkBidG4tbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1iYXNlO1xuXG5AYnRuLWNpcmNsZS1zaXplOiBAYnRuLWhlaWdodC1iYXNlO1xuQGJ0bi1jaXJjbGUtc2l6ZS1sZzogQGJ0bi1oZWlnaHQtbGc7XG5AYnRuLWNpcmNsZS1zaXplLXNtOiBAYnRuLWhlaWdodC1zbTtcblxuQGJ0bi1zcXVhcmUtc2l6ZTogQGJ0bi1oZWlnaHQtYmFzZTtcbkBidG4tc3F1YXJlLXNpemUtbGc6IEBidG4taGVpZ2h0LWxnO1xuQGJ0bi1zcXVhcmUtc2l6ZS1zbTogQGJ0bi1oZWlnaHQtc207XG5AYnRuLXNxdWFyZS1vbmx5LWljb24tc2l6ZTogQGZvbnQtc2l6ZS1iYXNlICsgMnB4O1xuQGJ0bi1zcXVhcmUtb25seS1pY29uLXNpemUtc206IEBmb250LXNpemUtYmFzZTtcbkBidG4tc3F1YXJlLW9ubHktaWNvbi1zaXplLWxnOiBAYnRuLWZvbnQtc2l6ZS1sZyArIDJweDtcblxuQGJ0bi1ncm91cC1ib3JkZXI6IEBwcmltYXJ5LTU7XG5cbkBidG4tbGluay1ob3Zlci1iZzogdHJhbnNwYXJlbnQ7XG5AYnRuLXRleHQtaG92ZXItYmc6IHJnYmEoMCwgMCwgMCwgMC4wMTgpO1xuXG4vLyBDaGVja2JveFxuQGNoZWNrYm94LXNpemU6IDE2cHg7XG5AY2hlY2tib3gtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQGNoZWNrYm94LWNoZWNrLWNvbG9yOiAjZmZmO1xuQGNoZWNrYm94LWNoZWNrLWJnOiBAY2hlY2tib3gtY2hlY2stY29sb3I7XG5AY2hlY2tib3gtYm9yZGVyLXdpZHRoOiBAYm9yZGVyLXdpZHRoLWJhc2U7XG5AY2hlY2tib3gtYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBjaGVja2JveC1ncm91cC1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuXG4vLyBEZXNjcmlwdGlvbnNcbkBkZXNjcmlwdGlvbnMtYmc6ICNmYWZhZmE7XG5AZGVzY3JpcHRpb25zLXRpdGxlLW1hcmdpbi1ib3R0b206IDIwcHg7XG5AZGVzY3JpcHRpb25zLWRlZmF1bHQtcGFkZGluZzogQHBhZGRpbmctbWQgQHBhZGRpbmctbGc7XG5AZGVzY3JpcHRpb25zLW1pZGRsZS1wYWRkaW5nOiBAcGFkZGluZy1zbSBAcGFkZGluZy1sZztcbkBkZXNjcmlwdGlvbnMtc21hbGwtcGFkZGluZzogQHBhZGRpbmcteHMgQHBhZGRpbmctbWQ7XG5AZGVzY3JpcHRpb25zLWl0ZW0tcGFkZGluZy1ib3R0b206IEBwYWRkaW5nLW1kO1xuQGRlc2NyaXB0aW9ucy1pdGVtLXRyYWlsaW5nLWNvbG9uOiB0cnVlO1xuQGRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1yaWdodDogOHB4O1xuQGRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1sZWZ0OiAycHg7XG5AZGVzY3JpcHRpb25zLWV4dHJhLWNvbG9yOiBAdGV4dC1jb2xvcjtcblxuLy8gRGl2aWRlclxuQGRpdmlkZXItdGV4dC1wYWRkaW5nOiAxZW07XG5AZGl2aWRlci1vcmllbnRhdGlvbi1tYXJnaW46IDUlO1xuQGRpdmlkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgNiUpO1xuQGRpdmlkZXItdmVydGljYWwtZ3V0dGVyOiA4cHg7XG5cbi8vIERyb3Bkb3duXG5AZHJvcGRvd24tc2VsZWN0ZWQtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQGRyb3Bkb3duLW1lbnUtc3VibWVudS1kaXNhYmxlZC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGRyb3Bkb3duLXNlbGVjdGVkLWJnOiBAaXRlbS1hY3RpdmUtYmc7XG5cbi8vIEVtcHR5XG5AZW1wdHktZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5cbi8vIFJhZGlvXG5AcmFkaW8tc2l6ZTogMTZweDtcbkByYWRpby10b3A6IDAuMmVtO1xuQHJhZGlvLWJvcmRlci13aWR0aDogMXB4O1xuQHJhZGlvLWRvdC1zaXplOiBAcmFkaW8tc2l6ZSAtIDhweDtcbkByYWRpby1kb3QtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQHJhZGlvLWRvdC1kaXNhYmxlZC1jb2xvcjogZmFkZShAYmxhY2ssIDIwJSk7XG5AcmFkaW8tc29saWQtY2hlY2tlZC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuXG4vLyBSYWRpbyBidXR0b25zXG5AcmFkaW8tYnV0dG9uLWJnOiBAYnRuLWRlZmF1bHQtYmc7XG5AcmFkaW8tYnV0dG9uLWNoZWNrZWQtYmc6IEBidG4tZGVmYXVsdC1iZztcbkByYWRpby1idXR0b24tY29sb3I6IEBidG4tZGVmYXVsdC1jb2xvcjtcbkByYWRpby1idXR0b24taG92ZXItY29sb3I6IEBwcmltYXJ5LTU7XG5AcmFkaW8tYnV0dG9uLWFjdGl2ZS1jb2xvcjogQHByaW1hcnktNztcbkByYWRpby1idXR0b24tcGFkZGluZy1ob3Jpem9udGFsOiBAcGFkZGluZy1tZCAtIDFweDtcbkByYWRpby1kaXNhYmxlZC1idXR0b24tY2hlY2tlZC1iZzogQGRpc2FibGVkLWFjdGl2ZS1iZztcbkByYWRpby1kaXNhYmxlZC1idXR0b24tY2hlY2tlZC1jb2xvcjogQGRpc2FibGVkLWNvbG9yO1xuQHJhZGlvLXdyYXBwZXItbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbi8vIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcbi8vIEBzY3JlZW4teHMgYW5kIEBzY3JlZW4teHMtbWluIGlzIG5vdCB1c2VkIGluIEdyaWRcbi8vIHNtYWxsZXN0IGJyZWFrIHBvaW50IGlzIEBzY3JlZW4tbWRcbkBzY3JlZW4teHM6IDQ4MHB4O1xuQHNjcmVlbi14cy1taW46IEBzY3JlZW4teHM7XG4vLyDwn5GGIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG5cbi8vIPCfkYcgU21hbGwgc2NyZWVuIC8gdGFibGV0XG5Ac2NyZWVuLXNtOiA1NzZweDtcbkBzY3JlZW4tc20tbWluOiBAc2NyZWVuLXNtO1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuQHNjcmVlbi1tZDogNzY4cHg7XG5Ac2NyZWVuLW1kLW1pbjogQHNjcmVlbi1tZDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG5Ac2NyZWVuLWxnOiA5OTJweDtcbkBzY3JlZW4tbGctbWluOiBAc2NyZWVuLWxnO1xuXG4vLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyBmdWxsIGhkXG5Ac2NyZWVuLXhsOiAxMjAwcHg7XG5Ac2NyZWVuLXhsLW1pbjogQHNjcmVlbi14bDtcblxuLy8gRXh0cmEgZXh0cmEgbGFyZ2Ugc2NyZWVuIC8gbGFyZ2UgZGVza3RvcFxuQHNjcmVlbi14eGw6IDE2MDBweDtcbkBzY3JlZW4teHhsLW1pbjogQHNjcmVlbi14eGw7XG5cbi8vIHByb3ZpZGUgYSBtYXhpbXVtXG5Ac2NyZWVuLXhzLW1heDogKEBzY3JlZW4tc20tbWluIC0gMXB4KTtcbkBzY3JlZW4tc20tbWF4OiAoQHNjcmVlbi1tZC1taW4gLSAxcHgpO1xuQHNjcmVlbi1tZC1tYXg6IChAc2NyZWVuLWxnLW1pbiAtIDFweCk7XG5Ac2NyZWVuLWxnLW1heDogKEBzY3JlZW4teGwtbWluIC0gMXB4KTtcbkBzY3JlZW4teGwtbWF4OiAoQHNjcmVlbi14eGwtbWluIC0gMXB4KTtcblxuLy8gR3JpZCBzeXN0ZW1cbkBncmlkLWNvbHVtbnM6IDI0O1xuXG4vLyBMYXlvdXRcbkBsYXlvdXQtYm9keS1iYWNrZ3JvdW5kOiAjZjBmMmY1O1xuQGxheW91dC1oZWFkZXItYmFja2dyb3VuZDogIzAwMTUyOTtcbkBsYXlvdXQtaGVhZGVyLWhlaWdodDogNjRweDtcbkBsYXlvdXQtaGVhZGVyLXBhZGRpbmc6IDAgNTBweDtcbkBsYXlvdXQtaGVhZGVyLWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBsYXlvdXQtZm9vdGVyLXBhZGRpbmc6IDI0cHggNTBweDtcbkBsYXlvdXQtZm9vdGVyLWJhY2tncm91bmQ6IEBsYXlvdXQtYm9keS1iYWNrZ3JvdW5kO1xuQGxheW91dC1zaWRlci1iYWNrZ3JvdW5kOiBAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kO1xuQGxheW91dC10cmlnZ2VyLWhlaWdodDogNDhweDtcbkBsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kOiAjMDAyMTQwO1xuQGxheW91dC10cmlnZ2VyLWNvbG9yOiAjZmZmO1xuQGxheW91dC16ZXJvLXRyaWdnZXItd2lkdGg6IDM2cHg7XG5AbGF5b3V0LXplcm8tdHJpZ2dlci1oZWlnaHQ6IDQycHg7XG4vLyBMYXlvdXQgbGlnaHQgdGhlbWVcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZC1saWdodDogI2ZmZjtcbkBsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmZmO1xuQGxheW91dC10cmlnZ2VyLWNvbG9yLWxpZ2h0OiBAdGV4dC1jb2xvcjtcblxuLy8gei1pbmRleCBsaXN0LCBvcmRlciBieSBgei1pbmRleGBcbkB6aW5kZXgtYmFkZ2U6IGF1dG87XG5AemluZGV4LXRhYmxlLWZpeGVkOiAyO1xuQHppbmRleC1hZmZpeDogMTA7XG5AemluZGV4LWJhY2stdG9wOiAxMDtcbkB6aW5kZXgtcGlja2VyLXBhbmVsOiAxMDtcbkB6aW5kZXgtcG9wdXAtY2xvc2U6IDEwO1xuQHppbmRleC1tb2RhbDogMTAwMDtcbkB6aW5kZXgtbW9kYWwtbWFzazogMTAwMDtcbkB6aW5kZXgtbWVzc2FnZTogMTAxMDtcbkB6aW5kZXgtbm90aWZpY2F0aW9uOiAxMDEwO1xuQHppbmRleC1wb3BvdmVyOiAxMDMwO1xuQHppbmRleC1kcm9wZG93bjogMTA1MDtcbkB6aW5kZXgtcGlja2VyOiAxMDUwO1xuQHppbmRleC1wb3BvY29uZmlybTogMTA2MDtcbkB6aW5kZXgtdG9vbHRpcDogMTA3MDtcbkB6aW5kZXgtaW1hZ2U6IDEwODA7XG5cbi8vIEFuaW1hdGlvblxuQGFuaW1hdGlvbi1kdXJhdGlvbi1zbG93OiAwLjNzOyAvLyBNb2RhbFxuQGFuaW1hdGlvbi1kdXJhdGlvbi1iYXNlOiAwLjJzO1xuQGFuaW1hdGlvbi1kdXJhdGlvbi1mYXN0OiAwLjFzOyAvLyBUb29sdGlwXG5cbi8vQ29sbGFwc2VQYW5lbFxuQGNvbGxhcHNlLXBhbmVsLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cbi8vRHJvcGRvd25cbkBkcm9wZG93bi1tZW51LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AZHJvcGRvd24tdmVydGljYWwtcGFkZGluZzogNXB4O1xuQGRyb3Bkb3duLWVkZ2UtY2hpbGQtdmVydGljYWwtcGFkZGluZzogNHB4O1xuQGRyb3Bkb3duLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQGRyb3Bkb3duLWxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4vLyBGb3JtXG4vLyAtLS1cbkBsYWJlbC1yZXF1aXJlZC1jb2xvcjogQGhpZ2hsaWdodC1jb2xvcjtcbkBsYWJlbC1jb2xvcjogQGhlYWRpbmctY29sb3I7XG5AZm9ybS13YXJuaW5nLWlucHV0LWJnOiBAaW5wdXQtYmc7XG5AZm9ybS1pdGVtLW1hcmdpbi1ib3R0b206IDI0cHg7XG5AZm9ybS1pdGVtLXRyYWlsaW5nLWNvbG9uOiB0cnVlO1xuQGZvcm0tdmVydGljYWwtbGFiZWwtcGFkZGluZzogMCAwIDhweDtcbkBmb3JtLXZlcnRpY2FsLWxhYmVsLW1hcmdpbjogMDtcbkBmb3JtLWl0ZW0tbGFiZWwtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AZm9ybS1pdGVtLWxhYmVsLWhlaWdodDogQGlucHV0LWhlaWdodC1iYXNlO1xuQGZvcm0taXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tcmlnaHQ6IDhweDtcbkBmb3JtLWl0ZW0tbGFiZWwtY29sb24tbWFyZ2luLWxlZnQ6IDJweDtcbkBmb3JtLWVycm9yLWlucHV0LWJnOiBAaW5wdXQtYmc7XG5cbi8vIElucHV0XG4vLyAtLS1cbkBpbnB1dC1oZWlnaHQtYmFzZTogQGhlaWdodC1iYXNlO1xuQGlucHV0LWhlaWdodC1sZzogQGhlaWdodC1sZztcbkBpbnB1dC1oZWlnaHQtc206IEBoZWlnaHQtc207XG5AaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsOiBAY29udHJvbC1wYWRkaW5nLWhvcml6b250YWwgLSAxcHg7XG5AaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsLWJhc2U6IEBpbnB1dC1wYWRkaW5nLWhvcml6b250YWw7XG5AaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsLXNtOiBAY29udHJvbC1wYWRkaW5nLWhvcml6b250YWwtc20gLSAxcHg7XG5AaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsLWxnOiBAaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsO1xuQGlucHV0LXBhZGRpbmctdmVydGljYWwtYmFzZTogbWF4KFxuICAocm91bmQoKChAaW5wdXQtaGVpZ2h0LWJhc2UgLSBAZm9udC1zaXplLWJhc2UgKiBAbGluZS1oZWlnaHQtYmFzZSkgLyAyKSAqIDEwKSAvIDEwKSAtXG4gICAgQGJvcmRlci13aWR0aC1iYXNlLFxuICAzcHhcbik7XG5AaW5wdXQtcGFkZGluZy12ZXJ0aWNhbC1zbTogbWF4KFxuICAocm91bmQoKChAaW5wdXQtaGVpZ2h0LXNtIC0gQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpIC8gMikgKiAxMCkgLyAxMCkgLVxuICAgIEBib3JkZXItd2lkdGgtYmFzZSxcbiAgMFxuKTtcbkBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWxnOiAoXG4gICAgY2VpbCgoKEBpbnB1dC1oZWlnaHQtbGcgLSBAZm9udC1zaXplLWxnICogQGxpbmUtaGVpZ2h0LWJhc2UpIC8gMikgKiAxMCkgLyAxMFxuICApIC0gQGJvcmRlci13aWR0aC1iYXNlO1xuQGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiBoc3YoMCwgMCwgNzUlKTtcbkBpbnB1dC1jb2xvcjogQHRleHQtY29sb3I7XG5AaW5wdXQtaWNvbi1jb2xvcjogQGlucHV0LWNvbG9yO1xuQGlucHV0LWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1iYXNlO1xuQGlucHV0LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AaW5wdXQtbnVtYmVyLWhvdmVyLWJvcmRlci1jb2xvcjogQGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcjtcbkBpbnB1dC1udW1iZXItaGFuZGxlci1hY3RpdmUtYmc6ICNmNGY0ZjQ7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItaG92ZXItYmc6IEBwcmltYXJ5LTU7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBpbnB1dC1udW1iZXItaGFuZGxlci1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItYmFzZTtcbkBpbnB1dC1hZGRvbi1iZzogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AaW5wdXQtaG92ZXItYm9yZGVyLWNvbG9yOiBAcHJpbWFyeS01O1xuQGlucHV0LWRpc2FibGVkLWJnOiBAZGlzYWJsZWQtYmc7XG5AaW5wdXQtb3V0bGluZS1vZmZzZXQ6IDAgMDtcbkBpbnB1dC1pY29uLWhvdmVyLWNvbG9yOiBmYWRlKEBibGFjaywgODUlKTtcbkBpbnB1dC1kaXNhYmxlZC1jb2xvcjogQGRpc2FibGVkLWNvbG9yO1xuXG4vLyBNZW50aW9uc1xuLy8gLS0tXG5AbWVudGlvbnMtZHJvcGRvd24tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW50aW9ucy1kcm9wZG93bi1tZW51LWl0ZW0taG92ZXItYmc6IEBtZW50aW9ucy1kcm9wZG93bi1iZztcblxuLy8gU2VsZWN0XG4vLyAtLS1cbkBzZWxlY3QtYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLWJhc2U7XG5Ac2VsZWN0LWl0ZW0tc2VsZWN0ZWQtY29sb3I6IEB0ZXh0LWNvbG9yO1xuQHNlbGVjdC1pdGVtLXNlbGVjdGVkLWZvbnQtd2VpZ2h0OiA2MDA7XG5Ac2VsZWN0LWRyb3Bkb3duLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Ac2VsZWN0LWl0ZW0tc2VsZWN0ZWQtYmc6IEBwcmltYXJ5LTE7XG5Ac2VsZWN0LWl0ZW0tYWN0aXZlLWJnOiBAaXRlbS1ob3Zlci1iZztcbkBzZWxlY3QtZHJvcGRvd24tdmVydGljYWwtcGFkZGluZzogQGRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc7XG5Ac2VsZWN0LWRyb3Bkb3duLWZvbnQtc2l6ZTogQGRyb3Bkb3duLWZvbnQtc2l6ZTtcbkBzZWxlY3QtZHJvcGRvd24tbGluZS1oZWlnaHQ6IEBkcm9wZG93bi1saW5lLWhlaWdodDtcbkBzZWxlY3QtZHJvcGRvd24taGVpZ2h0OiAzMnB4O1xuQHNlbGVjdC1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Ac2VsZWN0LWNsZWFyLWJhY2tncm91bmQ6IEBzZWxlY3QtYmFja2dyb3VuZDtcbkBzZWxlY3Qtc2VsZWN0aW9uLWl0ZW0tYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5Ac2VsZWN0LXNlbGVjdGlvbi1pdGVtLWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1zcGxpdDtcbkBzZWxlY3Qtc2luZ2xlLWl0ZW0taGVpZ2h0LWxnOiA0MHB4O1xuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLWhlaWdodDogQGlucHV0LWhlaWdodC1iYXNlIC0gQGlucHV0LXBhZGRpbmctdmVydGljYWwtYmFzZSAqIDI7IC8vIE5vcm1hbCAyNHB4XG5Ac2VsZWN0LW11bHRpcGxlLWl0ZW0taGVpZ2h0LWxnOiAzMnB4O1xuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLXNwYWNpbmctaGFsZjogY2VpbCgoQGlucHV0LXBhZGRpbmctdmVydGljYWwtYmFzZSAvIDIpKTtcbkBzZWxlY3QtbXVsdGlwbGUtZGlzYWJsZWQtYmFja2dyb3VuZDogQGlucHV0LWRpc2FibGVkLWJnO1xuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLWRpc2FibGVkLWNvbG9yOiAjYmZiZmJmO1xuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLWRpc2FibGVkLWJvcmRlci1jb2xvcjogQHNlbGVjdC1ib3JkZXItY29sb3I7XG5cbi8vIENhc2NhZGVyXG4vLyAtLS1cbkBjYXNjYWRlci1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhc2NhZGVyLWl0ZW0tc2VsZWN0ZWQtYmc6IEBwcmltYXJ5LTE7XG5AY2FzY2FkZXItbWVudS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhc2NhZGVyLW1lbnUtYm9yZGVyLWNvbG9yLXNwbGl0OiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuXG4vLyBDYXNjYWRlclxuLy8gLS0tLVxuQGNhc2NhZGVyLWRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc6IEBkcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nO1xuQGNhc2NhZGVyLWRyb3Bkb3duLWVkZ2UtY2hpbGQtdmVydGljYWwtcGFkZGluZzogQGRyb3Bkb3duLWVkZ2UtY2hpbGQtdmVydGljYWwtcGFkZGluZztcbkBjYXNjYWRlci1kcm9wZG93bi1mb250LXNpemU6IEBkcm9wZG93bi1mb250LXNpemU7XG5AY2FzY2FkZXItZHJvcGRvd24tbGluZS1oZWlnaHQ6IEBkcm9wZG93bi1saW5lLWhlaWdodDtcblxuLy8gQW5jaG9yXG4vLyAtLS1cbkBhbmNob3ItYmc6IHRyYW5zcGFyZW50O1xuQGFuY2hvci1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AYW5jaG9yLWxpbmstdG9wOiA0cHg7XG5AYW5jaG9yLWxpbmstbGVmdDogMTZweDtcbkBhbmNob3ItbGluay1wYWRkaW5nOiBAYW5jaG9yLWxpbmstdG9wIDAgQGFuY2hvci1saW5rLXRvcCBAYW5jaG9yLWxpbmstbGVmdDtcblxuLy8gVG9vbHRpcFxuLy8gLS0tXG4vLyBUb29sdGlwIG1heCB3aWR0aFxuQHRvb2x0aXAtbWF4LXdpZHRoOiAyNTBweDtcbi8vIFRvb2x0aXAgdGV4dCBjb2xvclxuQHRvb2x0aXAtY29sb3I6ICNmZmY7XG4vLyBUb29sdGlwIGJhY2tncm91bmQgY29sb3JcbkB0b29sdGlwLWJnOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuLy8gVG9vbHRpcCBhcnJvdyB3aWR0aFxuQHRvb2x0aXAtYXJyb3ctd2lkdGg6IDhweCAqIHNxcnQoMik7XG4vLyBUb29sdGlwIGRpc3RhbmNlIHdpdGggdHJpZ2dlclxuQHRvb2x0aXAtZGlzdGFuY2U6IEB0b29sdGlwLWFycm93LXdpZHRoIC0gMXB4ICsgNHB4O1xuLy8gVG9vbHRpcCBhcnJvdyBjb2xvclxuQHRvb2x0aXAtYXJyb3ctY29sb3I6IEB0b29sdGlwLWJnO1xuQHRvb2x0aXAtYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuLy8gUG9wb3ZlclxuLy8gLS0tXG4vLyBQb3BvdmVyIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuQHBvcG92ZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbi8vIFBvcG92ZXIgdGV4dCBjb2xvclxuQHBvcG92ZXItY29sb3I6IEB0ZXh0LWNvbG9yO1xuLy8gUG9wb3ZlciBtYXhpbXVtIHdpZHRoXG5AcG9wb3Zlci1taW4td2lkdGg6IDE3N3B4O1xuQHBvcG92ZXItbWluLWhlaWdodDogMzJweDtcbi8vIFBvcG92ZXIgYXJyb3cgd2lkdGhcbkBwb3BvdmVyLWFycm93LXdpZHRoOiBAdG9vbHRpcC1hcnJvdy13aWR0aDtcbi8vIFBvcG92ZXIgYXJyb3cgY29sb3JcbkBwb3BvdmVyLWFycm93LWNvbG9yOiBAcG9wb3Zlci1iZztcbi8vIFBvcG92ZXIgb3V0ZXIgYXJyb3cgd2lkdGhcbi8vIFBvcG92ZXIgb3V0ZXIgYXJyb3cgY29sb3JcbkBwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiBAcG9wb3Zlci1iZztcbi8vIFBvcG92ZXIgZGlzdGFuY2Ugd2l0aCB0cmlnZ2VyXG5AcG9wb3Zlci1kaXN0YW5jZTogQHBvcG92ZXItYXJyb3ctd2lkdGggKyA0cHg7XG5AcG9wb3Zlci1wYWRkaW5nLWhvcml6b250YWw6IEBwYWRkaW5nLW1kO1xuXG4vLyBNb2RhbFxuLy8gLS1cbkBtb2RhbC1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmctbWQ7XG5AbW9kYWwtaGVhZGVyLXBhZGRpbmctaG9yaXpvbnRhbDogQHBhZGRpbmctbGc7XG5AbW9kYWwtYm9keS1wYWRkaW5nOiBAcGFkZGluZy1sZztcbkBtb2RhbC1oZWFkZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtb2RhbC1oZWFkZXItcGFkZGluZzogQG1vZGFsLWhlYWRlci1wYWRkaW5nLXZlcnRpY2FsIEBtb2RhbC1oZWFkZXItcGFkZGluZy1ob3Jpem9udGFsO1xuQG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IEBib3JkZXItd2lkdGgtYmFzZTtcbkBtb2RhbC1oZWFkZXItYm9yZGVyLXN0eWxlOiBAYm9yZGVyLXN0eWxlLWJhc2U7XG5AbW9kYWwtaGVhZGVyLXRpdGxlLWxpbmUtaGVpZ2h0OiAyMnB4O1xuQG1vZGFsLWhlYWRlci10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtbGc7XG5AbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvci1zcGxpdDogQGJvcmRlci1jb2xvci1zcGxpdDtcbkBtb2RhbC1oZWFkZXItY2xvc2Utc2l6ZTogNTZweDtcbkBtb2RhbC1jb250ZW50LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbW9kYWwtaGVhZGluZy1jb2xvcjogQGhlYWRpbmctY29sb3I7XG5AbW9kYWwtY2xvc2UtY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBtb2RhbC1mb290ZXItYmc6IHRyYW5zcGFyZW50O1xuQG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3Itc3BsaXQ6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AbW9kYWwtZm9vdGVyLWJvcmRlci1zdHlsZTogQGJvcmRlci1zdHlsZS1iYXNlO1xuQG1vZGFsLWZvb3Rlci1wYWRkaW5nLXZlcnRpY2FsOiAxMHB4O1xuQG1vZGFsLWZvb3Rlci1wYWRkaW5nLWhvcml6b250YWw6IDE2cHg7XG5AbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogQGJvcmRlci13aWR0aC1iYXNlO1xuQG1vZGFsLW1hc2stYmc6IGZhZGUoQGJsYWNrLCA0NSUpO1xuQG1vZGFsLWNvbmZpcm0tYm9keS1wYWRkaW5nOiAzMnB4IDMycHggMjRweDtcbkBtb2RhbC1jb25maXJtLXRpdGxlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1sZztcblxuLy8gUHJvZ3Jlc3Ncbi8vIC0tXG5AcHJvZ3Jlc3MtZGVmYXVsdC1jb2xvcjogQHByb2Nlc3NpbmctY29sb3I7XG5AcHJvZ3Jlc3MtcmVtYWluaW5nLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuQHByb2dyZXNzLWluZm8tdGV4dC1jb2xvcjogQHByb2dyZXNzLXRleHQtY29sb3I7XG5AcHJvZ3Jlc3MtcmFkaXVzOiAxMDBweDtcbkBwcm9ncmVzcy1zdGVwcy1pdGVtLWJnOiAjZjNmM2YzO1xuQHByb2dyZXNzLXRleHQtZm9udC1zaXplOiAxZW07XG5AcHJvZ3Jlc3MtdGV4dC1jb2xvcjogQHRleHQtY29sb3I7IC8vIFRoaXMgaXMgZm9yIGNpcmNsZSB0ZXh0IGNvbG9yLCBzaG91bGQgYmUgcmVuYW1lZCBiZXR0ZXJcbkBwcm9ncmVzcy1jaXJjbGUtdGV4dC1mb250LXNpemU6IDFlbTtcbi8vIE1lbnVcbi8vIC0tLVxuQG1lbnUtaW5saW5lLXRvcGxldmVsLWl0ZW0taGVpZ2h0OiA0MHB4O1xuQG1lbnUtaXRlbS1oZWlnaHQ6IDQwcHg7XG5AbWVudS1pdGVtLWdyb3VwLWhlaWdodDogQGxpbmUtaGVpZ2h0LWJhc2U7XG5AbWVudS1jb2xsYXBzZWQtd2lkdGg6IDgwcHg7XG5AbWVudS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG1lbnUtcG9wdXAtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LWl0ZW0tY29sb3I6IEB0ZXh0LWNvbG9yO1xuQG1lbnUtaW5saW5lLXN1Ym1lbnUtYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQG1lbnUtaGlnaGxpZ2h0LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBtZW51LWhpZ2hsaWdodC1kYW5nZXItY29sb3I6IEBlcnJvci1jb2xvcjtcbkBtZW51LWl0ZW0tYWN0aXZlLWJnOiBAcHJpbWFyeS0xO1xuQG1lbnUtaXRlbS1hY3RpdmUtZGFuZ2VyLWJnOiBAcmVkLTE7XG5AbWVudS1pdGVtLWFjdGl2ZS1ib3JkZXItd2lkdGg6IDNweDtcbkBtZW51LWl0ZW0tZ3JvdXAtdGl0bGUtY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBtZW51LWl0ZW0tdmVydGljYWwtbWFyZ2luOiA0cHg7XG5AbWVudS1pdGVtLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQG1lbnUtaXRlbS1ib3VuZGFyeS1tYXJnaW46IDhweDtcbkBtZW51LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsOiAyMHB4O1xuQG1lbnUtaXRlbS1wYWRkaW5nOiAwIEBtZW51LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsO1xuQG1lbnUtaG9yaXpvbnRhbC1saW5lLWhlaWdodDogNDZweDtcbkBtZW51LWljb24tbWFyZ2luLXJpZ2h0OiAxMHB4O1xuQG1lbnUtaWNvbi1zaXplOiBAbWVudS1pdGVtLWZvbnQtc2l6ZTtcbkBtZW51LWljb24tc2l6ZS1sZzogQGZvbnQtc2l6ZS1sZztcbkBtZW51LWl0ZW0tZ3JvdXAtdGl0bGUtZm9udC1zaXplOiBAbWVudS1pdGVtLWZvbnQtc2l6ZTtcblxuLy8gZGFyayB0aGVtZVxuQG1lbnUtZGFyay1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5LWRhcms7XG5AbWVudS1kYXJrLWRhbmdlci1jb2xvcjogQGVycm9yLWNvbG9yO1xuQG1lbnUtZGFyay1iZzogQGxheW91dC1oZWFkZXItYmFja2dyb3VuZDtcbkBtZW51LWRhcmstYXJyb3ctY29sb3I6ICNmZmY7XG5AbWVudS1kYXJrLWlubGluZS1zdWJtZW51LWJnOiAjMDAwYzE3O1xuQG1lbnUtZGFyay1oaWdobGlnaHQtY29sb3I6ICNmZmY7XG5AbWVudS1kYXJrLWl0ZW0tYWN0aXZlLWJnOiBAcHJpbWFyeS1jb2xvcjtcbkBtZW51LWRhcmstaXRlbS1hY3RpdmUtZGFuZ2VyLWJnOiBAZXJyb3ItY29sb3I7XG5AbWVudS1kYXJrLXNlbGVjdGVkLWl0ZW0taWNvbi1jb2xvcjogQHdoaXRlO1xuQG1lbnUtZGFyay1zZWxlY3RlZC1pdGVtLXRleHQtY29sb3I6IEB3aGl0ZTtcbkBtZW51LWRhcmstaXRlbS1ob3Zlci1iZzogdHJhbnNwYXJlbnQ7XG4vLyBTcGluXG4vLyAtLS1cbkBzcGluLWRvdC1zaXplLXNtOiAxNHB4O1xuQHNwaW4tZG90LXNpemU6IDIwcHg7XG5Ac3Bpbi1kb3Qtc2l6ZS1sZzogMzJweDtcblxuLy8gVGFibGVcbi8vIC0tXG5AdGFibGUtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkB0YWJsZS1oZWFkZXItYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQHRhYmxlLWhlYWRlci1jb2xvcjogQGhlYWRpbmctY29sb3I7XG5AdGFibGUtaGVhZGVyLXNvcnQtYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5AdGFibGUtYm9keS1zb3J0LWJnOiAjZmFmYWZhO1xuQHRhYmxlLXJvdy1ob3Zlci1iZzogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AdGFibGUtc2VsZWN0ZWQtcm93LWNvbG9yOiBpbmhlcml0O1xuQHRhYmxlLXNlbGVjdGVkLXJvdy1iZzogQHByaW1hcnktMTtcbkB0YWJsZS1ib2R5LXNlbGVjdGVkLXNvcnQtYmc6IEB0YWJsZS1zZWxlY3RlZC1yb3ctYmc7XG5AdGFibGUtc2VsZWN0ZWQtcm93LWhvdmVyLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUtZGVwcmVjYXRlZC1kLTAyKSc7XG5AdGFibGUtZXhwYW5kZWQtcm93LWJnOiAjZmJmYmZiO1xuQHRhYmxlLXBhZGRpbmctdmVydGljYWw6IDE2cHg7XG5AdGFibGUtcGFkZGluZy1ob3Jpem9udGFsOiAxNnB4O1xuQHRhYmxlLXBhZGRpbmctdmVydGljYWwtbWQ6IChAdGFibGUtcGFkZGluZy12ZXJ0aWNhbCAqIDMgLyA0KTtcbkB0YWJsZS1wYWRkaW5nLWhvcml6b250YWwtbWQ6IChAdGFibGUtcGFkZGluZy1ob3Jpem9udGFsIC8gMik7XG5AdGFibGUtcGFkZGluZy12ZXJ0aWNhbC1zbTogKEB0YWJsZS1wYWRkaW5nLXZlcnRpY2FsIC8gMik7XG5AdGFibGUtcGFkZGluZy1ob3Jpem9udGFsLXNtOiAoQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbCAvIDIpO1xuQHRhYmxlLWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1zcGxpdDtcbkB0YWJsZS1ib3JkZXItcmFkaXVzLWJhc2U6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AdGFibGUtZm9vdGVyLWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWJsZS1mb290ZXItY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQHRhYmxlLWhlYWRlci1iZy1zbTogQHRhYmxlLWhlYWRlci1iZztcbkB0YWJsZS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkB0YWJsZS1mb250LXNpemUtbWQ6IEB0YWJsZS1mb250LXNpemU7XG5AdGFibGUtZm9udC1zaXplLXNtOiBAdGFibGUtZm9udC1zaXplO1xuQHRhYmxlLWhlYWRlci1jZWxsLXNwbGl0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuLy8gU29ydGVyXG4vLyBMZWdhY3k6IGB0YWJsZS1oZWFkZXItc29ydC1hY3RpdmUtYmdgIGlzIHVzZWQgZm9yIGhvdmVyIG5vdCByZWFsIGFjdGl2ZVxuQHRhYmxlLWhlYWRlci1zb3J0LWFjdGl2ZS1iZzogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkB0YWJsZS1maXhlZC1oZWFkZXItc29ydC1hY3RpdmUtYmc6IGhzdigwLCAwLCA5NiUpO1xuXG4vLyBGaWx0ZXJcbkB0YWJsZS1oZWFkZXItZmlsdGVyLWFjdGl2ZS1iZzogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkB0YWJsZS1maWx0ZXItYnRucy1iZzogaW5oZXJpdDtcbkB0YWJsZS1maWx0ZXItZHJvcGRvd24tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkB0YWJsZS1leHBhbmQtaWNvbi1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHRhYmxlLXNlbGVjdGlvbi1jb2x1bW4td2lkdGg6IDMycHg7XG4vLyBTdGlja3lcbkB0YWJsZS1zdGlja3ktc2Nyb2xsLWJhci1iZzogZmFkZSgjMDAwLCAzNSUpO1xuQHRhYmxlLXN0aWNreS1zY3JvbGwtYmFyLXJhZGl1czogNHB4O1xuXG4vLyBUYWdcbi8vIC0tXG5AdGFnLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AdGFnLWRlZmF1bHQtYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQHRhZy1kZWZhdWx0LWNvbG9yOiBAdGV4dC1jb2xvcjtcbkB0YWctZm9udC1zaXplOiBAZm9udC1zaXplLXNtO1xuQHRhZy1saW5lLWhlaWdodDogMjBweDtcblxuLy8gVGltZVBpY2tlclxuLy8gLS0tXG5AcGlja2VyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AcGlja2VyLWJhc2ljLWNlbGwtaG92ZXItY29sb3I6IEBpdGVtLWhvdmVyLWJnO1xuQHBpY2tlci1iYXNpYy1jZWxsLWFjdGl2ZS13aXRoLXJhbmdlLWNvbG9yOiBAcHJpbWFyeS0xO1xuQHBpY2tlci1iYXNpYy1jZWxsLWhvdmVyLXdpdGgtcmFuZ2UtY29sb3I6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtbC0zNSknO1xuQHBpY2tlci1iYXNpYy1jZWxsLWRpc2FibGVkLWJnOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuQHBpY2tlci1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AcGlja2VyLWRhdGUtaG92ZXItcmFuZ2UtYm9yZGVyLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWwtMjApJztcbkBwaWNrZXItZGF0ZS1ob3Zlci1yYW5nZS1jb2xvcjogQHBpY2tlci1iYXNpYy1jZWxsLWhvdmVyLXdpdGgtcmFuZ2UtY29sb3I7XG5AcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLXdpZHRoOiA1NnB4O1xuQHBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi1oZWlnaHQ6IDIyNHB4O1xuQHBpY2tlci10aW1lLXBhbmVsLWNlbGwtaGVpZ2h0OiAyOHB4O1xuQHBpY2tlci1wYW5lbC1jZWxsLWhlaWdodDogMjRweDtcbkBwaWNrZXItcGFuZWwtY2VsbC13aWR0aDogMzZweDtcbkBwaWNrZXItdGV4dC1oZWlnaHQ6IDQwcHg7XG5AcGlja2VyLXBhbmVsLXdpdGhvdXQtdGltZS1jZWxsLWhlaWdodDogNjZweDtcblxuLy8gQ2FsZW5kYXJcbi8vIC0tLVxuQGNhbGVuZGFyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AY2FsZW5kYXItaW5wdXQtYmc6IEBpbnB1dC1iZztcbkBjYWxlbmRhci1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItaW52ZXJzZTtcbkBjYWxlbmRhci1pdGVtLWFjdGl2ZS1iZzogQGl0ZW0tYWN0aXZlLWJnO1xuQGNhbGVuZGFyLWNvbHVtbi1hY3RpdmUtYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWFjdGl2ZS1kZXByZWNhdGVkLWYtMzApJztcbkBjYWxlbmRhci1mdWxsLWJnOiBAY2FsZW5kYXItYmc7XG5AY2FsZW5kYXItZnVsbC1wYW5lbC1iZzogQGNhbGVuZGFyLWZ1bGwtYmc7XG5cbi8vIENhcm91c2VsXG4vLyAtLS1cbkBjYXJvdXNlbC1kb3Qtd2lkdGg6IDE2cHg7XG5AY2Fyb3VzZWwtZG90LWhlaWdodDogM3B4O1xuQGNhcm91c2VsLWRvdC1hY3RpdmUtd2lkdGg6IDI0cHg7XG5cbi8vIEJhZGdlXG4vLyAtLS1cbkBiYWRnZS1oZWlnaHQ6IDIwcHg7XG5AYmFkZ2UtaGVpZ2h0LXNtOiAxNHB4O1xuQGJhZGdlLWRvdC1zaXplOiA2cHg7XG5AYmFkZ2UtZm9udC1zaXplOiBAZm9udC1zaXplLXNtO1xuQGJhZGdlLWZvbnQtc2l6ZS1zbTogQGZvbnQtc2l6ZS1zbTtcbkBiYWRnZS1mb250LXdlaWdodDogbm9ybWFsO1xuQGJhZGdlLXN0YXR1cy1zaXplOiA2cHg7XG5AYmFkZ2UtdGV4dC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGJhZGdlLWNvbG9yOiBAaGlnaGxpZ2h0LWNvbG9yO1xuXG4vLyBSYXRlXG4vLyAtLS1cbkByYXRlLXN0YXItY29sb3I6IEB5ZWxsb3ctNjtcbkByYXRlLXN0YXItYmc6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AcmF0ZS1zdGFyLXNpemU6IDIwcHg7XG5AcmF0ZS1zdGFyLWhvdmVyLXNjYWxlOiBzY2FsZSgxLjEpO1xuXG4vLyBDYXJkXG4vLyAtLS1cbkBjYXJkLWhlYWQtY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQGNhcmQtaGVhZC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbkBjYXJkLWhlYWQtZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQGNhcmQtaGVhZC1mb250LXNpemUtc206IEBmb250LXNpemUtYmFzZTtcbkBjYXJkLWhlYWQtcGFkZGluZzogMTZweDtcbkBjYXJkLWhlYWQtcGFkZGluZy1zbTogKEBjYXJkLWhlYWQtcGFkZGluZyAvIDIpO1xuQGNhcmQtaGVhZC1oZWlnaHQ6IDQ4cHg7XG5AY2FyZC1oZWFkLWhlaWdodC1zbTogMzZweDtcbkBjYXJkLWlubmVyLWhlYWQtcGFkZGluZzogMTJweDtcbkBjYXJkLXBhZGRpbmctYmFzZTogMjRweDtcbkBjYXJkLXBhZGRpbmctYmFzZS1zbTogKEBjYXJkLXBhZGRpbmctYmFzZSAvIDIpO1xuQGNhcmQtYWN0aW9ucy1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AY2FyZC1hY3Rpb25zLWxpLW1hcmdpbjogMTJweCAwO1xuQGNhcmQtc2tlbGV0b24tYmc6ICNjZmQ4ZGM7XG5AY2FyZC1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AY2FyZC1zaGFkb3c6IDAgMXB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gIDAgNXB4IDEycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG5AY2FyZC1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AY2FyZC1oZWFkLXRhYnMtbWFyZ2luLWJvdHRvbTogLTE3cHg7XG5AY2FyZC1oZWFkLWV4dHJhLWNvbG9yOiBAdGV4dC1jb2xvcjtcblxuLy8gQ29tbWVudFxuLy8gLS0tXG5AY29tbWVudC1iZzogaW5oZXJpdDtcbkBjb21tZW50LXBhZGRpbmctYmFzZTogQHBhZGRpbmctbWQgMDtcbkBjb21tZW50LW5lc3QtaW5kZW50OiA0NHB4O1xuQGNvbW1lbnQtZm9udC1zaXplLWJhc2U6IEBmb250LXNpemUtYmFzZTtcbkBjb21tZW50LWZvbnQtc2l6ZS1zbTogQGZvbnQtc2l6ZS1zbTtcbkBjb21tZW50LWF1dGhvci1uYW1lLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AY29tbWVudC1hdXRob3ItdGltZS1jb2xvcjogI2NjYztcbkBjb21tZW50LWFjdGlvbi1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGNvbW1lbnQtYWN0aW9uLWhvdmVyLWNvbG9yOiAjNTk1OTU5O1xuQGNvbW1lbnQtYWN0aW9ucy1tYXJnaW4tYm90dG9tOiBpbmhlcml0O1xuQGNvbW1lbnQtYWN0aW9ucy1tYXJnaW4tdG9wOiBAbWFyZ2luLXNtO1xuQGNvbW1lbnQtY29udGVudC1kZXRhaWwtcC1tYXJnaW4tYm90dG9tOiBpbmhlcml0O1xuXG4vLyBUYWJzXG4vLyAtLS1cbkB0YWJzLWNhcmQtaGVhZC1iYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWJzLWNhcmQtaGVpZ2h0OiA0MHB4O1xuQHRhYnMtY2FyZC1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQHRhYnMtY2FyZC1ob3Jpem9udGFsLXBhZGRpbmc6IChcbiAgICAoQHRhYnMtY2FyZC1oZWlnaHQgLSBmbG9vcihAZm9udC1zaXplLWJhc2UgKiBAbGluZS1oZWlnaHQtYmFzZSkpIC8gMlxuICApIC0gQGJvcmRlci13aWR0aC1iYXNlIEBwYWRkaW5nLW1kO1xuQHRhYnMtY2FyZC1ob3Jpem9udGFsLXBhZGRpbmctc206IDZweCBAcGFkZGluZy1tZDtcbkB0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nLWxnOiA3cHggQHBhZGRpbmctbWQgNnB4O1xuQHRhYnMtdGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AdGFicy10aXRsZS1mb250LXNpemUtbGc6IEBmb250LXNpemUtbGc7XG5AdGFicy10aXRsZS1mb250LXNpemUtc206IEBmb250LXNpemUtYmFzZTtcbkB0YWJzLWluay1iYXItY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQHRhYnMtYmFyLW1hcmdpbjogMCAwIEBtYXJnaW4tbWQgMDtcbkB0YWJzLWhvcml6b250YWwtZ3V0dGVyOiAzMnB4O1xuQHRhYnMtaG9yaXpvbnRhbC1tYXJnaW46IDAgMCAwIEB0YWJzLWhvcml6b250YWwtZ3V0dGVyO1xuQHRhYnMtaG9yaXpvbnRhbC1tYXJnaW4tcnRsOiAwIDAgMCAzMnB4O1xuQHRhYnMtaG9yaXpvbnRhbC1wYWRkaW5nOiBAcGFkZGluZy1zbSAwO1xuQHRhYnMtaG9yaXpvbnRhbC1wYWRkaW5nLWxnOiBAcGFkZGluZy1tZCAwO1xuQHRhYnMtaG9yaXpvbnRhbC1wYWRkaW5nLXNtOiBAcGFkZGluZy14cyAwO1xuQHRhYnMtdmVydGljYWwtcGFkZGluZzogQHBhZGRpbmcteHMgQHBhZGRpbmctbGc7XG5AdGFicy12ZXJ0aWNhbC1tYXJnaW46IEBtYXJnaW4tbWQgMCAwIDA7XG5AdGFicy1zY3JvbGxpbmctc2l6ZTogMzJweDtcbkB0YWJzLWhpZ2hsaWdodC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AdGFicy1ob3Zlci1jb2xvcjogQHByaW1hcnktNTtcbkB0YWJzLWFjdGl2ZS1jb2xvcjogQHByaW1hcnktNztcbkB0YWJzLWNhcmQtZ3V0dGVyOiAycHg7XG5AdGFicy1jYXJkLXRhYi1hY3RpdmUtYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4vLyBCYWNrVG9wXG4vLyAtLS1cbkBiYWNrLXRvcC1jb2xvcjogI2ZmZjtcbkBiYWNrLXRvcC1iZzogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGJhY2stdG9wLWhvdmVyLWJnOiBAdGV4dC1jb2xvcjtcblxuLy8gQXZhdGFyXG4vLyAtLS1cbkBhdmF0YXItc2l6ZS1iYXNlOiAzMnB4O1xuQGF2YXRhci1zaXplLWxnOiA0MHB4O1xuQGF2YXRhci1zaXplLXNtOiAyNHB4O1xuQGF2YXRhci1mb250LXNpemUtYmFzZTogMThweDtcbkBhdmF0YXItZm9udC1zaXplLWxnOiAyNHB4O1xuQGF2YXRhci1mb250LXNpemUtc206IDE0cHg7XG5AYXZhdGFyLWJnOiAjY2NjO1xuQGF2YXRhci1jb2xvcjogI2ZmZjtcbkBhdmF0YXItYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBhdmF0YXItZ3JvdXAtb3ZlcmxhcHBpbmc6IC04cHg7XG5AYXZhdGFyLWdyb3VwLXNwYWNlOiAzcHg7XG5AYXZhdGFyLWdyb3VwLWJvcmRlci1jb2xvcjogI2ZmZjtcblxuLy8gU3dpdGNoXG4vLyAtLS1cbkBzd2l0Y2gtaGVpZ2h0OiAyMnB4O1xuQHN3aXRjaC1zbS1oZWlnaHQ6IDE2cHg7XG5Ac3dpdGNoLW1pbi13aWR0aDogNDRweDtcbkBzd2l0Y2gtc20tbWluLXdpZHRoOiAyOHB4O1xuQHN3aXRjaC1kaXNhYmxlZC1vcGFjaXR5OiAwLjQ7XG5Ac3dpdGNoLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBzd2l0Y2gtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBzd2l0Y2gtc2hhZG93LWNvbG9yOiBmYWRlKCMwMDIzMGIsIDIwJSk7XG5Ac3dpdGNoLXBhZGRpbmc6IDJweDtcbkBzd2l0Y2gtaW5uZXItbWFyZ2luLW1pbjogY2VpbChAc3dpdGNoLWhlaWdodCAqIDAuMyk7XG5Ac3dpdGNoLWlubmVyLW1hcmdpbi1tYXg6IGNlaWwoQHN3aXRjaC1oZWlnaHQgKiAxLjEpO1xuQHN3aXRjaC1zbS1pbm5lci1tYXJnaW4tbWluOiBjZWlsKEBzd2l0Y2gtc20taGVpZ2h0ICogMC4zKTtcbkBzd2l0Y2gtc20taW5uZXItbWFyZ2luLW1heDogY2VpbChAc3dpdGNoLXNtLWhlaWdodCAqIDEuMSk7XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLVxuQHBhZ2luYXRpb24taXRlbS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24taXRlbS1zaXplOiBAaGVpZ2h0LWJhc2U7XG5AcGFnaW5hdGlvbi1pdGVtLXNpemUtc206IDI0cHg7XG5AcGFnaW5hdGlvbi1mb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuQHBhZ2luYXRpb24tZm9udC13ZWlnaHQtYWN0aXZlOiA1MDA7XG5AcGFnaW5hdGlvbi1pdGVtLWJnLWFjdGl2ZTogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24taXRlbS1saW5rLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AcGFnaW5hdGlvbi1pdGVtLWRpc2FibGVkLWNvbG9yLWFjdGl2ZTogQGRpc2FibGVkLWNvbG9yO1xuQHBhZ2luYXRpb24taXRlbS1kaXNhYmxlZC1iZy1hY3RpdmU6IEBkaXNhYmxlZC1hY3RpdmUtYmc7XG5AcGFnaW5hdGlvbi1pdGVtLWlucHV0LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AcGFnaW5hdGlvbi1taW5pLW9wdGlvbnMtc2l6ZS1jaGFuZ2VyLXRvcDogMHB4O1xuXG4vLyBQYWdlSGVhZGVyXG4vLyAtLS1cbkBwYWdlLWhlYWRlci1wYWRkaW5nOiBAcGFkZGluZy1sZztcbkBwYWdlLWhlYWRlci1wYWRkaW5nLXZlcnRpY2FsOiBAcGFkZGluZy1tZDtcbkBwYWdlLWhlYWRlci1wYWRkaW5nLWJyZWFkY3J1bWI6IEBwYWRkaW5nLXNtO1xuQHBhZ2UtaGVhZGVyLWNvbnRlbnQtcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmctc207XG5AcGFnZS1oZWFkZXItYmFjay1jb2xvcjogIzAwMDtcbkBwYWdlLWhlYWRlci1naG9zdC1iZzogaW5oZXJpdDtcbkBwYWdlLWhlYWRlci1oZWFkaW5nLXRpdGxlOiBAaGVhZGluZy00LXNpemU7XG5AcGFnZS1oZWFkZXItaGVhZGluZy1zdWItdGl0bGU6IDE0cHg7XG5AcGFnZS1oZWFkZXItdGFicy10YWItZm9udC1zaXplOiAxNnB4O1xuXG4vLyBCcmVhZGNydW1iXG4vLyAtLS1cbkBicmVhZGNydW1iLWJhc2UtY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBicmVhZGNydW1iLWxhc3QtaXRlbS1jb2xvcjogQHRleHQtY29sb3I7XG5AYnJlYWRjcnVtYi1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBicmVhZGNydW1iLWljb24tZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AYnJlYWRjcnVtYi1saW5rLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AYnJlYWRjcnVtYi1saW5rLWNvbG9yLWhvdmVyOiBAdGV4dC1jb2xvcjtcbkBicmVhZGNydW1iLXNlcGFyYXRvci1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGJyZWFkY3J1bWItc2VwYXJhdG9yLW1hcmdpbjogMCBAcGFkZGluZy14cztcblxuLy8gU2xpZGVyXG4vLyAtLS1cbkBzbGlkZXItbWFyZ2luOiAxMHB4IDZweCAxMHB4O1xuQHNsaWRlci1yYWlsLWJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5Ac2xpZGVyLXJhaWwtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI2UxZTFlMTtcbkBzbGlkZXItdHJhY2stYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktMztcbkBzbGlkZXItdHJhY2stYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogQHByaW1hcnktNDtcbkBzbGlkZXItaGFuZGxlLWJvcmRlci13aWR0aDogMnB4O1xuQHNsaWRlci1oYW5kbGUtYmFja2dyb3VuZC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHNsaWRlci1oYW5kbGUtY29sb3I6IEBwcmltYXJ5LTM7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci1ob3ZlcjogQHByaW1hcnktNDtcbkBzbGlkZXItaGFuZGxlLWNvbG9yLWZvY3VzOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLXQtMjApJztcbkBzbGlkZXItaGFuZGxlLWNvbG9yLWZvY3VzLXNoYWRvdzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1mLTEyKSc7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci10b29sdGlwLW9wZW46IEBwcmltYXJ5LWNvbG9yO1xuQHNsaWRlci1oYW5kbGUtc2l6ZTogMTRweDtcbkBzbGlkZXItaGFuZGxlLW1hcmdpbi10b3A6IC01cHg7XG5Ac2xpZGVyLWhhbmRsZS1zaGFkb3c6IDA7XG5Ac2xpZGVyLWRvdC1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5Ac2xpZGVyLWRvdC1ib3JkZXItY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLXQtNTApJztcbkBzbGlkZXItZGlzYWJsZWQtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcbkBzbGlkZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuXG4vLyBUcmVlXG4vLyAtLS1cbkB0cmVlLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdHJlZS10aXRsZS1oZWlnaHQ6IDI0cHg7XG5AdHJlZS1jaGlsZC1wYWRkaW5nOiAxOHB4O1xuQHRyZWUtZGlyZWN0b3J5LXNlbGVjdGVkLWNvbG9yOiAjZmZmO1xuQHRyZWUtZGlyZWN0b3J5LXNlbGVjdGVkLWJnOiBAcHJpbWFyeS1jb2xvcjtcbkB0cmVlLW5vZGUtaG92ZXItYmc6IEBpdGVtLWhvdmVyLWJnO1xuQHRyZWUtbm9kZS1zZWxlY3RlZC1iZzogQHByaW1hcnktMjtcblxuLy8gQ29sbGFwc2Vcbi8vIC0tLVxuQGNvbGxhcHNlLWhlYWRlci1wYWRkaW5nOiBAcGFkZGluZy1zbSBAcGFkZGluZy1tZDtcbkBjb2xsYXBzZS1oZWFkZXItcGFkZGluZy1leHRyYTogNDBweDtcbkBjb2xsYXBzZS1oZWFkZXItYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQGNvbGxhcHNlLWNvbnRlbnQtcGFkZGluZzogQHBhZGRpbmctbWQ7XG5AY29sbGFwc2UtY29udGVudC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNvbGxhcHNlLWhlYWRlci1hcnJvdy1sZWZ0OiAxNnB4O1xuXG4vLyBTa2VsZXRvblxuLy8gLS0tXG5Ac2tlbGV0b24tY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4yKTtcbkBza2VsZXRvbi10by1jb2xvcjogc2hhZGUoQHNrZWxldG9uLWNvbG9yLCA1JSk7XG5Ac2tlbGV0b24tcGFyYWdyYXBoLW1hcmdpbi10b3A6IDI4cHg7XG5Ac2tlbGV0b24tcGFyYWdyYXBoLWxpLW1hcmdpbi10b3A6IEBtYXJnaW4tbWQ7XG5Ac2tlbGV0b24tcGFyYWdyYXBoLWxpLWhlaWdodDogMTZweDtcbkBza2VsZXRvbi10aXRsZS1oZWlnaHQ6IDE2cHg7XG5Ac2tlbGV0b24tdGl0bGUtcGFyYWdyYXBoLW1hcmdpbi10b3A6IEBtYXJnaW4tbGc7XG5cbi8vIFRyYW5zZmVyXG4vLyAtLS1cbkB0cmFuc2Zlci1oZWFkZXItaGVpZ2h0OiA0MHB4O1xuQHRyYW5zZmVyLWl0ZW0taGVpZ2h0OiBAaGVpZ2h0LWJhc2U7XG5AdHJhbnNmZXItZGlzYWJsZWQtYmc6IEBkaXNhYmxlZC1iZztcbkB0cmFuc2Zlci1saXN0LWhlaWdodDogMjAwcHg7XG5AdHJhbnNmZXItaXRlbS1ob3Zlci1iZzogQGl0ZW0taG92ZXItYmc7XG5AdHJhbnNmZXItaXRlbS1zZWxlY3RlZC1ob3Zlci1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZC0wMiknO1xuQHRyYW5zZmVyLWl0ZW0tcGFkZGluZy12ZXJ0aWNhbDogNnB4O1xuQHRyYW5zZmVyLWxpc3Qtc2VhcmNoLWljb24tdG9wOiAxMnB4O1xuXG4vLyBNZXNzYWdlXG4vLyAtLS1cbkBtZXNzYWdlLW5vdGljZS1jb250ZW50LXBhZGRpbmc6IDEwcHggMTZweDtcbkBtZXNzYWdlLW5vdGljZS1jb250ZW50LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG4vLyBNb3Rpb25cbi8vIC0tLVxuQHdhdmUtYW5pbWF0aW9uLXdpZHRoOiA2cHg7XG5cbi8vIEFsZXJ0XG4vLyAtLS1cbkBhbGVydC1zdWNjZXNzLWJvcmRlci1jb2xvcjogQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI7XG5AYWxlcnQtc3VjY2Vzcy1iZy1jb2xvcjogQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZztcbkBhbGVydC1zdWNjZXNzLWljb24tY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuQGFsZXJ0LWluZm8tYm9yZGVyLWNvbG9yOiBAaW5mby1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjtcbkBhbGVydC1pbmZvLWJnLWNvbG9yOiBAaW5mby1jb2xvci1kZXByZWNhdGVkLWJnO1xuQGFsZXJ0LWluZm8taWNvbi1jb2xvcjogQGluZm8tY29sb3I7XG5AYWxlcnQtd2FybmluZy1ib3JkZXItY29sb3I6IEB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyO1xuQGFsZXJ0LXdhcm5pbmctYmctY29sb3I6IEB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmc7XG5AYWxlcnQtd2FybmluZy1pY29uLWNvbG9yOiBAd2FybmluZy1jb2xvcjtcbkBhbGVydC1lcnJvci1ib3JkZXItY29sb3I6IEBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjtcbkBhbGVydC1lcnJvci1iZy1jb2xvcjogQGVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYmc7XG5AYWxlcnQtZXJyb3ItaWNvbi1jb2xvcjogQGVycm9yLWNvbG9yO1xuQGFsZXJ0LW1lc3NhZ2UtY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQGFsZXJ0LXRleHQtY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGFsZXJ0LWNsb3NlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AYWxlcnQtY2xvc2UtaG92ZXItY29sb3I6IEBpY29uLWNvbG9yLWhvdmVyO1xuQGFsZXJ0LW5vLWljb24tcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmcteHM7XG5AYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1uby1pY29uLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLW1kIC0gMXB4O1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmctbWQgLSAxcHg7XG5AYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1wYWRkaW5nOiBAYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1wYWRkaW5nLXZlcnRpY2FsIDE1cHhcbiAgQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tbm8taWNvbi1wYWRkaW5nLXZlcnRpY2FsIEBhbGVydC13aXRoLWRlc2NyaXB0aW9uLWljb24tc2l6ZTtcbkBhbGVydC1pY29uLXRvcDogOHB4ICsgQGZvbnQtc2l6ZS1iYXNlICogKEBsaW5lLWhlaWdodC1iYXNlIC8gMikgLSAoQGZvbnQtc2l6ZS1iYXNlIC8gMik7XG5AYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1pY29uLXNpemU6IDI0cHg7XG5cbi8vIExpc3Rcbi8vIC0tLVxuQGxpc3QtaGVhZGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuQGxpc3QtZm9vdGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuQGxpc3QtZW1wdHktdGV4dC1wYWRkaW5nOiBAcGFkZGluZy1tZDtcbkBsaXN0LWl0ZW0tcGFkZGluZzogQHBhZGRpbmctc20gMDtcbkBsaXN0LWl0ZW0tcGFkZGluZy1zbTogQHBhZGRpbmcteHMgQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLXBhZGRpbmctbGc6IDE2cHggMjRweDtcbkBsaXN0LWl0ZW0tbWV0YS1tYXJnaW4tYm90dG9tOiBAcGFkZGluZy1tZDtcbkBsaXN0LWl0ZW0tbWV0YS1hdmF0YXItbWFyZ2luLXJpZ2h0OiBAcGFkZGluZy1tZDtcbkBsaXN0LWl0ZW0tbWV0YS10aXRsZS1tYXJnaW4tYm90dG9tOiBAcGFkZGluZy1zbTtcbkBsaXN0LWN1c3RvbWl6ZS1jYXJkLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb24tZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5cbi8vIFN0YXRpc3RpY1xuLy8gLS0tXG5Ac3RhdGlzdGljLXRpdGxlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQHN0YXRpc3RpYy1jb250ZW50LWZvbnQtc2l6ZTogMjRweDtcbkBzdGF0aXN0aWMtdW5pdC1mb250LXNpemU6IDI0cHg7XG5Ac3RhdGlzdGljLWZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG5cbi8vIERyYXdlclxuLy8gLS0tXG5AZHJhd2VyLWhlYWRlci1wYWRkaW5nOiBAcGFkZGluZy1tZCBAcGFkZGluZy1sZztcbkBkcmF3ZXItYm9keS1wYWRkaW5nOiBAcGFkZGluZy1sZztcbkBkcmF3ZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBkcmF3ZXItZm9vdGVyLXBhZGRpbmctdmVydGljYWw6IEBtb2RhbC1mb290ZXItcGFkZGluZy12ZXJ0aWNhbDtcbkBkcmF3ZXItZm9vdGVyLXBhZGRpbmctaG9yaXpvbnRhbDogQG1vZGFsLWZvb3Rlci1wYWRkaW5nLWhvcml6b250YWw7XG5AZHJhd2VyLWhlYWRlci1jbG9zZS1zaXplOiA1NnB4O1xuQGRyYXdlci10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtbGc7XG5AZHJhd2VyLXRpdGxlLWxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4vLyBUaW1lbGluZVxuLy8gLS0tXG5AdGltZWxpbmUtd2lkdGg6IDJweDtcbkB0aW1lbGluZS1jb2xvcjogQGJvcmRlci1jb2xvci1zcGxpdDtcbkB0aW1lbGluZS1kb3QtYm9yZGVyLXdpZHRoOiAycHg7XG5AdGltZWxpbmUtZG90LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkB0aW1lbGluZS1kb3QtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkB0aW1lbGluZS1pdGVtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtLS1cbkB0eXBvZ3JhcGh5LXRpdGxlLWZvbnQtd2VpZ2h0OiA2MDA7XG5AdHlwb2dyYXBoeS10aXRsZS1tYXJnaW4tdG9wOiAxLjJlbTtcbkB0eXBvZ3JhcGh5LXRpdGxlLW1hcmdpbi1ib3R0b206IDAuNWVtO1xuXG4vLyBVcGxvYWRcbi8vIC0tLVxuQHVwbG9hZC1hY3Rpb25zLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5cbi8vIFN0ZXBzXG4vLyAtLS1cbkBwcm9jZXNzLXRhaWwtY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5Ac3RlcHMtbmF2LWFycm93LWNvbG9yOiBmYWRlKEBibGFjaywgMjUlKTtcbkBzdGVwcy1iYWNrZ3JvdW5kOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Ac3RlcHMtaWNvbi1zaXplOiAzMnB4O1xuQHN0ZXBzLWljb24tY3VzdG9tLXNpemU6IEBzdGVwcy1pY29uLXNpemU7XG5Ac3RlcHMtaWNvbi1jdXN0b20tdG9wOiAwcHg7XG5Ac3RlcHMtaWNvbi1jdXN0b20tZm9udC1zaXplOiAyNHB4O1xuQHN0ZXBzLWljb24tdG9wOiAtMC41cHg7XG5Ac3RlcHMtaWNvbi1mb250LXNpemU6IEBmb250LXNpemUtbGc7XG5Ac3RlcHMtaWNvbi1tYXJnaW46IDAgOHB4IDAgMDtcbkBzdGVwcy10aXRsZS1saW5lLWhlaWdodDogQGhlaWdodC1iYXNlO1xuQHN0ZXBzLXNtYWxsLWljb24tc2l6ZTogMjRweDtcbkBzdGVwcy1zbWFsbC1pY29uLW1hcmdpbjogMCA4cHggMCAwO1xuQHN0ZXBzLWRvdC1zaXplOiA4cHg7XG5Ac3RlcHMtZG90LXRvcDogMnB4O1xuQHN0ZXBzLWN1cnJlbnQtZG90LXNpemU6IDEwcHg7XG5Ac3RlcHMtZGVzY3JpcHRpb24tbWF4LXdpZHRoOiAxNDBweDtcbkBzdGVwcy1uYXYtY29udGVudC1tYXgtd2lkdGg6IGF1dG87XG5Ac3RlcHMtdmVydGljYWwtaWNvbi13aWR0aDogMTZweDtcbkBzdGVwcy12ZXJ0aWNhbC10YWlsLXdpZHRoOiAxNnB4O1xuQHN0ZXBzLXZlcnRpY2FsLXRhaWwtd2lkdGgtc206IDEycHg7XG5cbi8vIE5vdGlmaWNhdGlvblxuLy8gLS0tXG5Abm90aWZpY2F0aW9uLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Abm90aWZpY2F0aW9uLXBhZGRpbmctdmVydGljYWw6IDE2cHg7XG5Abm90aWZpY2F0aW9uLXBhZGRpbmctaG9yaXpvbnRhbDogMjRweDtcblxuLy8gUmVzdWx0XG4vLyAtLS1cbkByZXN1bHQtdGl0bGUtZm9udC1zaXplOiAyNHB4O1xuQHJlc3VsdC1zdWJ0aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkByZXN1bHQtaWNvbi1mb250LXNpemU6IDcycHg7XG5AcmVzdWx0LWV4dHJhLW1hcmdpbjogMjRweCAwIDAgMDtcblxuLy8gSW1hZ2Vcbi8vIC0tLVxuQGltYWdlLXNpemUtYmFzZTogNDhweDtcbkBpbWFnZS1mb250LXNpemUtYmFzZTogMjRweDtcbkBpbWFnZS1iZzogI2Y1ZjVmNTtcbkBpbWFnZS1jb2xvcjogI2ZmZjtcbkBpbWFnZS1tYXNrLWZvbnQtc2l6ZTogMTZweDtcbkBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1zaXplOiAxOHB4O1xuQGltYWdlLXByZXZpZXctb3BlcmF0aW9uLWNvbG9yOiBAdGV4dC1jb2xvci1kYXJrO1xuQGltYWdlLXByZXZpZXctb3BlcmF0aW9uLWRpc2FibGVkLWNvbG9yOiBmYWRlKEBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1jb2xvciwgMjUlKTtcblxuLy8gU2VnbWVudGVkXG4vLyAtLS1cbkBzZWdtZW50ZWQtYmc6IGZhZGUoQGJsYWNrLCA0JSk7XG5Ac2VnbWVudGVkLWhvdmVyLWJnOiBmYWRlKEBibGFjaywgNiUpO1xuQHNlZ21lbnRlZC1zZWxlY3RlZC1iZzogQHdoaXRlO1xuQHNlZ21lbnRlZC1sYWJlbC1jb2xvcjogZmFkZShAYmxhY2ssIDY1JSk7XG5Ac2VnbWVudGVkLWxhYmVsLWhvdmVyLWNvbG9yOiAjMjYyNjI2O1xuIiwiLyohIG1pbmlyZXNldC5jc3MgdjAuMC42IHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9taW5pcmVzZXQuY3NzICovXG5odG1sLFxuYm9keSxcbnAsXG5vbCxcbnVsLFxubGksXG5kbCxcbmR0LFxuZGQsXG5ibG9ja3F1b3RlLFxuZmlndXJlLFxuZmllbGRzZXQsXG5sZWdlbmQsXG50ZXh0YXJlYSxcbnByZSxcbmlmcmFtZSxcbmhyLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5pbWcsXG52aWRlbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pZnJhbWUge1xuICBib3JkZXI6IDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZDpub3QoW2FsaWduXSksXG50aDpub3QoW2FsaWduXSkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiQHJlc2l6YWJsZS1wcmVmaXgtY2xzOiB+J256LXJlc2l6YWJsZSc7XG5cbi5Ae3Jlc2l6YWJsZS1wcmVmaXgtY2xzfSB7XG4gICYtcHJldmlldyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkMWQxZDE7XG4gIH1cbiAgJi1oYW5kbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB6LWluZGV4OiA5O1xuICAgICYtdG9wIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgJi1yaWdodCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgIH1cbiAgICAmLWJvdHRvbSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICYtbGVmdCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgfVxuICAgICYtdG9wUmlnaHQge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IC01cHg7XG4gICAgICByaWdodDogLTVweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICAmLWJvdHRvbVJpZ2h0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICBib3R0b206IC01cHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgJi1ib3R0b21MZWZ0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgbGVmdDogLTVweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICAmLXRvcExlZnQge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IC01cHg7XG4gICAgICBsZWZ0OiAtNXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLkB7cmVzaXphYmxlLXByZWZpeC1jbHN9LXJlc2l6aW5nKSB7XG4gICAgLkB7cmVzaXphYmxlLXByZWZpeC1jbHN9LWhhbmRsZSB7XG4gICAgICAmLXRvcCwgJi1ib3R0b20ge1xuICAgICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgICAgIH1cbiAgICAgICYtcmlnaHQsICYtbGVmdCB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgICAgfVxuICAgICAgJi1ib3R0b21SaWdodCwgJi10b3BMZWZ0IHtcbiAgICAgICAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcbiAgICAgIH1cbiAgICAgICYtYm90dG9tTGVmdCwgJi10b3BSaWdodCB7XG4gICAgICAgIGN1cnNvcjogbmVzdy1yZXNpemU7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAmLWRpc2FibGVkIHtcbiAgICAuQHtyZXNpemFibGUtcHJlZml4LWNsc30ge1xuICAgICAgJi1oYW5kbGUge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiQGltcG9ydCBcIi4uL21pbmlyZXNldC5sZXNzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9yZXNpemFibGUvc3R5bGUvZW50cnkubGVzc1wiO1xyXG5cclxuQGxheW91dC1oZWFkZXItaGVpZ2h0OiA0OHB4O1xyXG5AbGF5b3V0LWhlYWRlci1wYWRkaW5nOiAwO1xyXG5AbWVudS1jb2xsYXBzZWQtd2lkdGg6IDQ4cHg7XHJcbkBsYXlvdXQtdHJpZ2dlci1oZWlnaHQ6IDQwcHg7XHJcbi8vIOWmguaenOWtmOWcqOaJgOacieS4u+mimOmAmueUqOeahOagt+W8j+WPmOmHjyzln7rmnKzmoLflvI/mlofku7blubblnKjmr4/kuKrkuLvpopjmoLflvI/lrprliLbmlofku7bkuK3lvJXlhaXlroPvvJpcclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG4gIC8vIG1pbi13aWR0aDogNTcwcHg7XHJcbn1cclxuXHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuYXVkaW8sIHZpZGVvIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LXdyYXAge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnRleHQtYnJlYWsge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxyXG59XHJcblxyXG4uZnVsbC1oZWlnaHQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXdpdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taW4tc2NyZWVuLWZ1bGwtaGVpZ2h0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2NyZWVuLWZ1bGwtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JlZW4tZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vLmVsbGlwc2lzIHtcclxuLy8gIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuLy99XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGNvbnRlbnQ6ICcuJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY29sb3Itd2VhayB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoODAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLndyYXAge1xyXG4gIHdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuXHJcbi50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLnB1bGwtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWJzb2x1dGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnQtMCB7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLTAge1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmItMCB7XHJcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yLTAge1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWgtMTAwIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubS1yLTUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItOCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tci0xNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMjAge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTIzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tci0yNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMzAge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS0wIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMTAge1xyXG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWItNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItOCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItMTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tYi0yMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTI0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItMzAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0wIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC03IHtcclxuICBtYXJnaW4tbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm0tbC0xNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC04MCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0yMDAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS10LTAge1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC01IHtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC04IHtcclxuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS10LTE1IHtcclxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0yNSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS10LTMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubS1sLTE4IHtcclxuICBtYXJnaW4tbGVmdDogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTIwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTI1IHtcclxuICBtYXJnaW4tbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTUwIHtcclxuICBtYXJnaW4tbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnAtMCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC04IHtcclxuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtMTYge1xyXG4gIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLTI0IHtcclxuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXQtOCB7XHJcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10LTEyIHtcclxuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10LTE2IHtcclxuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10LTI0IHtcclxuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnAtbC0wIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtbC04IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnAtbC0xMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtMTYge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1sLTI0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtbC0yNSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ucC1sLTM1IHtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtbC01NSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXItOCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXItMTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtci0xNiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTI0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtYi04IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItMTIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItMTYge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItMjQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItNTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0xMSB7XHJcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0xMiB7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0xNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0xNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0xOCB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcC0yOCB7XHJcbiAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLWJnLTAge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFuaW1hdGUtMDIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uYW5pbWF0ZS0wMyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuLmNsZWFyLWZpeDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZGVmYXVsdC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLm5pZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xyXG59XHJcblxyXG4uZC1pLWIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9pbnRlci1ldmVudHMtbm9uZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5oYW5kLW1vZGVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW5kLW1vZGVsLW1vdmUge1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnRleHQtZXJyb3Ige1xyXG4gIGNvbG9yOiAjZjUyMjJkICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmdyZXktY29sb3Ige1xyXG4gIGNvbG9yOiAjZDlkOWQ5O1xyXG59XHJcblxyXG4uaG92ZXItYmx1ZSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQwOWVmZjtcclxuICB9XHJcbn1cclxuXHJcbi5ob3Zlci1yZWQge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmNTIyMmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ub3BlcmF0ZS10ZXh0IHtcclxuICAuaGFuZC1tb2RlbDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNlbnRlci1yb3cge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyLWZuKEBjb2w6Y2VudGVyLEByb3c6Y2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IEBjb2w7XHJcbiAgYWxpZ24taXRlbXM6IEByb3c7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmNlbnRlci1mbigpXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmxleC1jb2xvdW0ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LTEge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mbGV4LWF1dG8ge1xyXG4gIGZsZXg6IGF1dG87XHJcbn1cclxuXHJcbi5lbmQtc3RhcnQtY2VudGVyIHtcclxuICAuY2VudGVyLWZuKGZsZXgtZW5kKVxyXG59XHJcblxyXG4ubGVmdC1zdGFydC1jZW50ZXIge1xyXG4gIC5jZW50ZXItZm4oZmxleC1zdGFydClcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gIC5jZW50ZXItZm4oc3BhY2UtYmV0d2VlbilcclxufVxyXG5cclxuLnNwYWNlLWFyb3VuZCB7XHJcbiAgLmNlbnRlci1mbihzcGFjZS1hcm91bmQpXHJcbn1cclxuXHJcblxyXG4uYmctY29sb3Itbm8ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLy8g6YCa55So6aG16Z2i57uf5LiA5biD5bGAXHJcbi5ub3JtYWwtdGFibGUtd3JhcCB7XHJcbiAgbWFyZ2luOiAyN3B4IDI3cHggMDtcclxuXHJcbiAgLyrliJfooajpobbpg6jmoLflvI8qL1xyXG5cclxuICAuYW50LXByby10YWJsZS10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5hbnQtcHJvLXRhYmxlLXRvb2xiYXItdGl0bGUge1xyXG4gICAgICBmbGV4OiAxIDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgIG9wYWNpdHk6IC44NTtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LXByby10YWJsZS10b29sYmFyLW9wdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1wcm8tdGFibGUtdG9vbGJhci1kZWZhdWx0LW9wdGlvbiB7XHJcbiAgICAgIC5hbnQtc3BhY2UtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDooajljZXmoLflvI9cclxuICAuZm9ybS13cmFwIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyropobnm5Z6b3Jyb+agt+W8jyovXHJcblxyXG4vLyDlr7nor53moYblop7liqDmu5rliqjmnaFcclxuLmFudC1tb2RhbC1ib2R5IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmFudC1tb2RhbC1jbG9zZS14IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4XHJcbn1cclxuXHJcbi5mdWxsc2NyZWVuLW1vZGFsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuYW50LW1vZGFsIHtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAuYW50LW1vZGFsLWJvZHkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4IC0gNTNweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbnQtbWVudS1pbmxpbmUsIC5hbnQtbWVudS12ZXJ0aWNhbCwgLmFudC1tZW51LXZlcnRpY2FsLWxlZnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxubnotZGF0ZS1waWNrZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFtuei1pbnB1dF0ge1xyXG4gIC5hbmltYXRlLWJnLTA7XHJcbn1cclxuXHJcbi8vXHJcbi8vLm92ZXJmbG93LWRvdHMge1xyXG4vLyAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy99XHJcbiIsIkBpbXBvcnQgKG11bHRpcGxlKSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvc3JjL3N0eWxlL3RoZW1lcy92YXJpYWJsZS5sZXNzJztcbkBpbXBvcnQgJy4vYmFzZSc7XG5cblxuQGxheW91dC1oZWFkZXItYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG1lbnUtZGFyay1iZzogIzAwMTUyOTtcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZDogQG1lbnUtZGFyay1iZztcbi5vcGVyYXRlLXRleHQge1xuICBjb2xvcjogQHByaW1hcnktY29sb3I7XG59XG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cbiIsIkBpbXBvcnQgKG11bHRpcGxlKSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvc3JjL3N0eWxlL3RoZW1lcy9kYXJrJztcbkBpbXBvcnQgJy4vYmFzZSc7XG5cbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZC1saWdodDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGxheW91dC10cmlnZ2VyLWJhY2tncm91bmQtbGlnaHQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LWl0ZW0tdmVydGljYWwtbWFyZ2luOiAwO1xuLm9wZXJhdGUtdGV4dCB7XG4gIGNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbn1cbi5hbnQtbWVudS1ob3Jpem9udGFsIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5AbWVudS1kYXJrLWJnOkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ7XG5AbWVudS1iZzpAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kO1xuQGxheW91dC1zaWRlci1iYWNrZ3JvdW5kLWxpZ2h0OkBtZW51LWJnO1xuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKua7muWKqOadoeaVtOS9k+agt+W8jyovXG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjYzODQ4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgLyrmu5rliqjmnaHph4zpnaLlsI/mlrnlnZcqL1xuICBiYWNrZ3JvdW5kOiAjNTM2MTZFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLyrlrprkuYnmu5rliqjmnaHovajpgZMg5YaF6Zi05b2xK+WchuinkiovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKuWumuS5iea7keWdlyDlhoXpmLTlvbEr5ZyG6KeSKi9cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 31975:
/*!************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingDrawerModule": () => (/* binding */ SettingDrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _setting_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-drawer.component */ 45718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class SettingDrawerModule {
}
SettingDrawerModule.ɵfac = function SettingDrawerModule_Factory(t) { return new (t || SettingDrawerModule)(); };
SettingDrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingDrawerModule });
SettingDrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingDrawerModule, { declarations: [_setting_drawer_component__WEBPACK_IMPORTED_MODULE_1__.SettingDrawerComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule], exports: [_setting_drawer_component__WEBPACK_IMPORTED_MODULE_1__.SettingDrawerComponent] }); })();


/***/ }),

/***/ 53525:
/*!***************************************************************!*\
  !*** ./src/app/layout/default/side-nav/side-nav.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ 19971);





function SideNavComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "H\u1EC7 Th\u1ED1ng NANP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("p-l-8", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r0.isCollapsed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("light", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx_r0.themesOptions$).theme === "light" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, ctx_r0.isNightTheme$) === false);
  }
}

class SideNavComponent {
  constructor(themesService) {
    this.themesService = themesService;
    this.themesOptions$ = this.themesService.getThemesMode();
    this.isNightTheme$ = this.themesService.getIsNightTheme();
    this.isCollapsed$ = this.themesService.getIsCollapsed();
  }

  ngOnInit() {}

}

SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
  return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};

SideNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SideNavComponent,
  selectors: [["app-side-nav"]],
  decls: 6,
  vars: 7,
  consts: [[1, "left-nav-wrap"], ["class", "sidebar-logo", 3, "p-l-8", 4, "ngIf"], [1, "nav-ul-wrap"], [1, "sidebar-logo"], ["href", "#", "target", "_blank"], ["src", "assets/imgs/logo.svg", "alt", "logo"], [1, "animate-02"]],
  template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SideNavComponent_div_2_Template, 8, 10, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-nav-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dark-scrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.themesOptions$).theme === "dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.themesOptions$).hasNavHeadArea);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["html.default[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  --ant-primary-color: #1890ff;\n  --ant-primary-color-hover: #40a9ff;\n  --ant-primary-color-active: #096dd9;\n  --ant-primary-color-outline: rgba(24, 144, 255, 0.2);\n  --ant-primary-1: #e6f7ff;\n  --ant-primary-2: #bae7ff;\n  --ant-primary-3: #91d5ff;\n  --ant-primary-4: #69c0ff;\n  --ant-primary-5: #40a9ff;\n  --ant-primary-6: #1890ff;\n  --ant-primary-7: #096dd9;\n  --ant-primary-color-deprecated-pure: ;\n  --ant-primary-color-deprecated-l-35: #cbe6ff;\n  --ant-primary-color-deprecated-l-20: #7ec1ff;\n  --ant-primary-color-deprecated-t-20: #46a6ff;\n  --ant-primary-color-deprecated-t-50: #8cc8ff;\n  --ant-primary-color-deprecated-f-12: rgba(24, 144, 255, 0.12);\n  --ant-primary-color-active-deprecated-f-30: rgba(230, 247, 255, 0.3);\n  --ant-primary-color-active-deprecated-d-02: #dcf4ff;\n  --ant-success-color: #52c41a;\n  --ant-success-color-hover: #73d13d;\n  --ant-success-color-active: #389e0d;\n  --ant-success-color-outline: rgba(82, 196, 26, 0.2);\n  --ant-success-color-deprecated-bg: #f6ffed;\n  --ant-success-color-deprecated-border: #b7eb8f;\n  --ant-error-color: #ff4d4f;\n  --ant-error-color-hover: #ff7875;\n  --ant-error-color-active: #d9363e;\n  --ant-error-color-outline: rgba(255, 77, 79, 0.2);\n  --ant-error-color-deprecated-bg: #fff2f0;\n  --ant-error-color-deprecated-border: #ffccc7;\n  --ant-warning-color: #faad14;\n  --ant-warning-color-hover: #ffc53d;\n  --ant-warning-color-active: #d48806;\n  --ant-warning-color-outline: rgba(250, 173, 20, 0.2);\n  --ant-warning-color-deprecated-bg: #fffbe6;\n  --ant-warning-color-deprecated-border: #ffe58f;\n  --ant-info-color: #1890ff;\n  --ant-info-color-deprecated-bg: #e6f7ff;\n  --ant-info-color-deprecated-border: #91d5ff;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-weight: normal;\n}\nhtml.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nhtml.default[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin: 0;\n}\nhtml.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, html.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n}\nhtml.default[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not([align]), html.default[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not([align]) {\n  text-align: left;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 8;\n  border: 1px dashed #d1d1d1;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 9;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  top: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-right[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  right: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  bottom: -5px;\n  left: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  left: -5px;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  right: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  right: -5px;\n  bottom: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  bottom: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  top: -5px;\n  left: -5px;\n  z-index: 10;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-top[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottom[_ngcontent-%COMP%] {\n  cursor: ns-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-right[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-left[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomRight[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topLeft[_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-bottomLeft[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .nz-resizable[_ngcontent-%COMP%]:not(.nz-resizable-resizing)   .nz-resizable-handle-topRight[_ngcontent-%COMP%] {\n  cursor: nesw-resize;\n}\nhtml.default[_ngcontent-%COMP%]   .nz-resizable-disabled[_ngcontent-%COMP%]   .nz-resizable-handle[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml.default[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml.default[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\nhtml.default[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nhtml.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nhtml.default[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%] {\n  display: none;\n}\nhtml.default[_ngcontent-%COMP%]   .text-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\nhtml.default[_ngcontent-%COMP%]   .text-break[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\nhtml.default[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .full-with[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\nhtml.default[_ngcontent-%COMP%]   .min-screen-full-height[_ngcontent-%COMP%] {\n  min-height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-height[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\nhtml.default[_ngcontent-%COMP%]   .screen-full-width[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\nhtml.default[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '.';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .color-weak[_ngcontent-%COMP%] {\n  filter: invert(80%) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 980px;\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\nhtml.default[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\nhtml.default[_ngcontent-%COMP%]   .pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\nhtml.default[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {\n  position: relative;\n}\nhtml.default[_ngcontent-%COMP%]   .absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\nhtml.default[_ngcontent-%COMP%]   .t-0[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .l-0[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .b-0[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .r-0[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-h-100[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-5[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-15[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-23[_ngcontent-%COMP%] {\n  margin-right: 23px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-25[_ngcontent-%COMP%] {\n  margin-right: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-r-30[_ngcontent-%COMP%] {\n  margin-right: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-10[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-4[_ngcontent-%COMP%] {\n  margin-bottom: 4px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-b-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-5[_ngcontent-%COMP%] {\n  margin-left: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-7[_ngcontent-%COMP%] {\n  margin-left: 7px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-15[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-80[_ngcontent-%COMP%] {\n  margin-left: 80px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-200[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-5[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-15[_ngcontent-%COMP%] {\n  margin-top: 15px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-25[_ngcontent-%COMP%] {\n  margin-top: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-t-30[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-18[_ngcontent-%COMP%] {\n  margin-left: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-25[_ngcontent-%COMP%] {\n  margin-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .m-l-50[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-8[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-24[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-12[_ngcontent-%COMP%] {\n  padding-top: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-t-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-16[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-24[_ngcontent-%COMP%] {\n  padding-left: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-25[_ngcontent-%COMP%] {\n  padding-left: 25px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-35[_ngcontent-%COMP%] {\n  padding-left: 35px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-l-55[_ngcontent-%COMP%] {\n  padding-left: 55px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-10[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-16[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-r-24[_ngcontent-%COMP%] {\n  padding-right: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-8[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-12[_ngcontent-%COMP%] {\n  padding-bottom: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-24[_ngcontent-%COMP%] {\n  padding-bottom: 24px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .p-b-50[_ngcontent-%COMP%] {\n  padding-bottom: 50px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-11[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-12[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-18[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .sp-28[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-bg-0[_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-02[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\nhtml.default[_ngcontent-%COMP%]   .animate-03[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\nhtml.default[_ngcontent-%COMP%]   .clear-fix[_ngcontent-%COMP%]:after {\n  content: '';\n  clear: both;\n  display: block;\n}\nhtml.default[_ngcontent-%COMP%]   .default-theme[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\nhtml.default[_ngcontent-%COMP%]   .night-theme[_ngcontent-%COMP%] {\n  background: #141414;\n}\nhtml.default[_ngcontent-%COMP%]   .d-i-b[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\nhtml.default[_ngcontent-%COMP%]   .pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nhtml.default[_ngcontent-%COMP%]   .hand-model-move[_ngcontent-%COMP%] {\n  cursor: move;\n}\nhtml.default[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: #f5222d !important;\n}\nhtml.default[_ngcontent-%COMP%]   .grey-color[_ngcontent-%COMP%] {\n  color: #d9d9d9;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-blue[_ngcontent-%COMP%]:hover {\n  color: #409eff;\n}\nhtml.default[_ngcontent-%COMP%]   .hover-red[_ngcontent-%COMP%]:hover {\n  color: #f5222d;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 5px;\n}\nhtml.default[_ngcontent-%COMP%]   .center-row[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\nhtml.default[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-coloum[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\nhtml.default[_ngcontent-%COMP%]   .flex-auto[_ngcontent-%COMP%] {\n  flex: auto;\n}\nhtml.default[_ngcontent-%COMP%]   .end-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .left-start-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .space-around[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nhtml.default[_ngcontent-%COMP%]   .bg-color-no[_ngcontent-%COMP%] {\n  background: none !important;\n}\nhtml.default[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 12px;\n}\nhtml.default[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%] {\n  margin: 27px 27px 0;\n  \n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-title[_ngcontent-%COMP%] {\n  flex: 1 1;\n  font-size: 16px;\n  line-height: 24px;\n  will-change: transform;\n  opacity: 0.85;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .ant-pro-table-toolbar[_ngcontent-%COMP%]   .ant-pro-table-toolbar-default-option[_ngcontent-%COMP%]   .ant-space-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 5px !important;\n}\nhtml.default[_ngcontent-%COMP%]   .normal-table-wrap[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 600px;\n}\nhtml.default[_ngcontent-%COMP%]   .ant-modal-close-x[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 96px;\n  height: 56px;\n  line-height: 56px;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal[_ngcontent-%COMP%] {\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100%;\n  max-width: initial;\n  padding: 0;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  transform: translate3d(0, 0, 0) !important;\n}\nhtml.default[_ngcontent-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .ant-modal-content[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  max-height: none;\n  height: calc(100% - 55px - 53px);\n}\nhtml.default[_ngcontent-%COMP%]   .ant-menu-inline[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-menu-vertical-left[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.default[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\nhtml.default[_ngcontent-%COMP%]   input[nz-input][_ngcontent-%COMP%] {\n  transition: background-color 0s !important;\n}\nhtml.default[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: var(--ant-primary-color);\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: #f1f1f1;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 4px;\n}\nhtml.default[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}\nhtml.default   [_nghost-%COMP%]   .left-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nhtml.default   [_nghost-%COMP%]   .left-nav-wrap[_ngcontent-%COMP%]   .nav-ul-wrap[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow: hidden auto;\n}\nhtml.default   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 16px;\n  height: 64px;\n  line-height: 64px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\nhtml.default   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 32px;\n  display: inline-block;\n}\nhtml.default   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\nhtml.default   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 12px;\n  font-weight: 600;\n  font-size: 18px;\n  color: #fff;\n  vertical-align: middle;\n}\nhtml.default   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1.light[_ngcontent-%COMP%] {\n  color: var(--ant-primary-6) !important;\n}\nhtml.dark[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n}\nhtml.dark[_ngcontent-%COMP%]   .operate-text[_ngcontent-%COMP%] {\n  color: #177ddc;\n}\nhtml.dark[_ngcontent-%COMP%]   .ant-menu-horizontal[_ngcontent-%COMP%] {\n  border: none;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 6px;\n  height: 6px;\n  background: #263848;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  background: #53616E !important;\n  border-radius: 4px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\nhtml.dark[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #c8c8c8;\n}\nhtml.dark   [_nghost-%COMP%]   .left-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nhtml.dark   [_nghost-%COMP%]   .left-nav-wrap[_ngcontent-%COMP%]   .nav-ul-wrap[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow: hidden auto;\n}\nhtml.dark   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 16px;\n  height: 64px;\n  line-height: 64px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\nhtml.dark   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 32px;\n  display: inline-block;\n}\nhtml.dark   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\nhtml.dark   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 12px;\n  font-weight: 600;\n  font-size: 18px;\n  color: #fff;\n  vertical-align: middle;\n}\nhtml.dark   [_nghost-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1.light[_ngcontent-%COMP%] {\n  color: #177ddc !important;\n}\n.dark-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 6px;\n  height: 6px;\n  background: #263848 !important;\n}\n.dark-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  \n  background: #53616E !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcbWl4aW4ubGVzcyIsInNpZGUtbmF2LmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXG5nLXpvcnJvLWFudGRcXHNyY1xcc3R5bGVcXHRoZW1lc1xcdmFyaWFibGUubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1pbmlyZXNldC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXG5nLXpvcnJvLWFudGRcXHJlc2l6YWJsZVxcc3R5bGVcXGluZGV4Lmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZXNcXGJhc2UubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lc1xcZGVmYXVsdC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVzXFxkYXJrLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUNERiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7RUFDN0YsMEVBQTBFO0VBQzFFLFlBQVk7QUFDZDtBRExJO0VFYUYsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0RBQUE7RUFLQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUdBLHFDQUFBO0VBQ0EsNENBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSw2REFBQTtFQUNBLG9FQUFBO0VBQ0EsbURBQUE7RUFHQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsOENBQUE7RUFHQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFHQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvREFBQTtFQUNBLDBDQUFBO0VBQ0EsOENBQUE7RUFHQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7QURuQkY7QUQvQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VHc0JGLFNBQUE7RUFDQSxVQUFBO0FGa0RGO0FEekVJOzs7Ozs7RUdnQ0YsZUFBQTtFQUNBLG1CQUFBO0FGaURGO0FEbEZJO0VHcUNGLGdCQUFBO0FGZ0RGO0FEckZJOzs7O0VHNENGLFNBQUE7QUYrQ0Y7QUQzRkk7RUdnREYsc0JBQUE7QUY4Q0Y7QUQ5Rkk7OztFR29ERixtQkFBQTtBRitDRjtBRG5HSTs7RUd5REYsWUFBQTtFQUNBLGVBQUE7QUY4Q0Y7QUR4R0k7RUc4REYsU0FBQTtBRjZDRjtBRDNHSTtFR2tFRix5QkFBQTtFQUNBLGlCQUFBO0FGNENGO0FEL0dJOztFR3dFRixVQUFBO0FGMkNGO0FEbkhJOztFRzZFRixnQkFBQTtBRjBDRjtBR3RIRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUh3SEo7QUd0SEU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FId0hKO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FIeUhOO0FHdkhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUh5SE47QUd2SEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBSHlITjtBR3ZISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FIeUhOO0FHbkhNOztFQUNFLGlCQUFBO0FIc0hSO0FHcEhNOztFQUNFLGlCQUFBO0FIdUhSO0FHckhNOztFQUNFLG1CQUFBO0FId0hSO0FHdEhNOztFQUNFLG1CQUFBO0FIeUhSO0FHakhNO0VBQ0Usb0JBQUE7QUhtSFI7QUQxTUk7RUtLc0Msc0JBQUE7QUp3TTFDO0FEN01JO0VLWWlCLHFCQUFBO0VBS2IsV0FBQTtBSmdNUjtBRGpOSTtFS2tCQyxTQUFBO0VBQ0gsVUFBQTtBSmtNRjtBRHJOSTs7RUt3QkssYUFBQTtBSmlNVDtBRHpOSTtFSzZCQyxhQUFBO0FKK0xMO0FENU5JO0VLZ0NFLGNBQUE7QUorTE47QUk5TFU7RUFHVCxjQUFBO0FKOExEO0FEbE9JO0VLeUNtQixxQkFBQTtBSjRMdkI7QURyT0k7Ozs7OztFSzhDRyxnQkFBQTtBSitMUDtBRDdPSTtFS2lERyxhQUFBO0FKK0xQO0FEaFBJO0VLa0RVLHFCQUFBO0FKaU1kO0FEblBJO0VLd0RKLHFCQUFBO0FKOExBO0FEdFBJO0VLMkRKLFlBQUE7QUo4TEE7QUR6UEk7RUs4RFMsc0JBQUE7QUo4TGI7QUQ1UEk7RUtxRUosNEJBQUE7QUowTEE7QUQvUEk7RUswRUssd0JBQUE7QUp3TFQ7QURsUUk7RUs0RUgsdUJBQUE7QUp5TEQ7QURyUUk7RUt3RlEsV0FBQTtFQUFlLFlBQUE7RUFDZCxjQUFBO0VBQ1IsU0FBQTtFQUFhLGtCQUFBO0FKa0xsQjtBRDVRSTtFSzhGRyw4QkFBQTtBSmlMUDtBRC9RSTtFS2lHSCxZQUFBO0VBQ0UsY0FBQTtBSmlMSDtBRG5SSTtFS3FHTSwyQkFBQTtBSmlMVjtBRHRSSTtFSzBHRCw2QkFBQTtBSitLSDtBRHpSSTtFS2dISCw0QkFBQTtBSjRLRDtBRDVSSTtFS21ISixXQUFBO0FKNEtBO0FEL1JJO0VLcUhVLFlBQUE7QUo2S2Q7QURsU0k7RUt3SEUsa0JBQUE7QUo2S047QURyU0k7RUt5SHdCLGtCQUFBO0FKK0s1QjtBRHhTSTtFSzZIRyxpQkFBQTtBSjhLUDtBRDNTSTtFS2lJRixrQkFBQTtBSjZLRjtBRDlTSTtFS29JUSxvQkFBQTtBSjZLWjtBRGpUSTtFS3dJQyxtQkFBQTtBSjRLTDtBRHBUSTtFSzRJSCxnQkFBQTtBSjJLRDtBRHZUSTtFSytJSiw0QkFBQTtBSjJLQTtBRDFUSTtFS29KRSw0QkFBQTtBSnlLTjtBRDdUSTtFS3lKQyw2QkFBQTtBSnVLTDtBRGhVSTtFSzZKTSw2QkFBQTtBSnNLVjtBRG5VSTtFS2lLZ0IsNkJBQUE7QUpxS3BCO0FEdFVJO0VLcUtjLDZCQUFBO0FKb0tsQjtBRHpVSTtFS3lLVyw2QkFBQTtBSm1LZjtBRDVVSTtFSzZLSSxvQkFBQTtBSmtLUjtBRC9VSTtFS2dMQSx1QkFBQTtBSmtLSjtBRGxWSTtFS2lMMkIsNkJBQUE7QUpvSy9CO0FEclZJO0VLcUxzQiw2QkFBQTtBSm1LMUI7QUR4Vkk7RUt5TGlCLDZCQUFBO0FKa0tyQjtBRDNWSTtFSzZMZ0IsOEJBQUE7QUppS3BCO0FEOVZJO0VLa01KLDhCQUFBO0FKK0pBO0FEaldJO0VLcU1KLDhCQUFBO0FKK0pBO0FEcFdJO0VLd000Qiw4QkFBQTtBSitKaEM7QUR2V0k7RUs0TXlCLHlCQUFBO0FKOEo3QjtBRDFXSTtFS2dOZ0IsMkJBQUE7QUo2SnBCO0FEN1dJO0VLb05RLDJCQUFBO0FKNEpaO0FEaFhJO0VLd05BLDJCQUFBO0FKMkpKO0FEblhJO0VLMk5JLDRCQUFBO0FKMkpSO0FEdFhJO0VLK05ELDRCQUFBO0FKMEpIO0FEelhJO0VLbU9ELDRCQUFBO0FKeUpIO0FENVhJO0VLdU9GLDZCQUFBO0FKd0pGO0FEL1hJO0VLMk9KLHdCQUFBO0FKdUpBO0FEbFlJO0VLNE8wQiwwQkFBQTtBSnlKOUI7QURyWUk7RUtnUG9CLDBCQUFBO0FKd0p4QjtBRHhZSTtFS3FQWSwyQkFBQTtBSnNKaEI7QUQzWUk7RUt5UE8sMkJBQUE7QUpxSlg7QUQ5WUk7RUs2UEMsMkJBQUE7QUpvSkw7QURqWkk7RUtpUUosMkJBQUE7QUptSkE7QURwWkk7RUtxUUosMkJBQUE7QUprSkE7QUR2Wkk7RUt3UUssNEJBQUE7QUprSlQ7QUQxWkk7RUs0UUksNEJBQUE7QUppSlI7QUQ3Wkk7RUtnUkMsNEJBQUE7QUpnSkw7QURoYUk7RUtvUkYsNEJBQUE7QUorSUY7QURuYUk7RUtzUkYscUJBQUE7QUpnSkY7QUR0YUk7RUt5UmlCLHVCQUFBO0FKZ0pyQjtBRHphSTtFSzZSTyx3QkFBQTtBSitJWDtBRDVhSTtFS2tTSCx3QkFBQTtBSjZJRDtBRC9hSTtFS3FTRCwyQkFBQTtBSjZJSDtBRGxiSTtFS3dTSiw0QkFBQTtBSjZJQTtBRHJiSTtFSzBTNEIsNEJBQUE7QUo4SWhDO0FEeGJJO0VLOFN3Qiw0QkFBQTtBSjZJNUI7QUQzYkk7RUttVHFCLDBCQUFBO0FKMkl6QjtBRDliSTtFS3dUSiw0QkFBQTtBSnlJQTtBRGpjSTtFSzZUSiw2QkFBQTtBSnVJQTtBRHBjSTtFS2tVSCw2QkFBQTtBSnFJRDtBRHZjSTtFS3NVSiw2QkFBQTtBSm9JQTtBRDFjSTtFS3lVSiw2QkFBQTtBSm9JQTtBRDdjSTtFSzRVMkIsNkJBQUE7QUpvSS9CO0FEaGRJO0VLZ1Z3Qiw2QkFBQTtBSm1JNUI7QURuZEk7RUtxVm1CLDZCQUFBO0FKaUl2QjtBRHRkSTtFS3lWbUIsOEJBQUE7QUpnSXZCO0FEemRJO0VLOFZlLDhCQUFBO0FKOEhuQjtBRDVkSTtFS2tXWSw4QkFBQTtBSjZIaEI7QUQvZEk7RUtzV1EsNEJBQUE7QUo0SFo7QURsZUk7RUswV0UsOEJBQUE7QUoySE47QURyZUk7RUsrV0gsK0JBQUE7QUp5SEQ7QUR4ZUk7RUtrWE0sK0JBQUE7QUp5SFY7QUQzZUk7RUtzWEksK0JBQUE7QUp3SFI7QUQ5ZUk7RUswWEcsK0JBQUE7QUp1SFA7QURqZkk7RUs4WEQsMEJBQUE7QUpzSEg7QURwZkk7RUsrWDhCLDBCQUFBO0FKd0hsQztBRHZmSTtFS21ZcUIsMEJBQUE7QUp1SHpCO0FEMWZJO0VLdVlhLDBCQUFBO0FKc0hqQjtBRDdmSTtFSzJZTywwQkFBQTtBSnFIWDtBRGhnQkk7RUsrWUYsMEJBQUE7QUpvSEY7QURuZ0JJO0VLa1pNLDBDQUFBO0FKb0hWO0FEdGdCSTtFS3VaTSxvQkFBQTtBSmtIVjtBRHpnQkk7RUswWk0sb0JBQUE7QUprSFY7QUQ1Z0JJO0VLOFpELFdBQUE7RUFDSyxXQUFBO0VBQWUsY0FBQTtBSmtIdkI7QURqaEJJO0VLbWFZLG1CQUFBO0FKaUhoQjtBRHBoQkk7RUt1YU8sbUJBQUE7QUpnSFg7QUR2aEJJO0VLMmFKLGdDQUFBO0FKK0dBO0FEMWhCSTtFSythWSxvQkFBQTtBSjhHaEI7QUQ3aEJJO0VLbWJPLGVBQUE7QUo2R1g7QURoaUJJO0VLc2JZLFlBQUE7QUo2R2hCO0FEbmlCSTtFS3ViNEIseUJBQUE7QUorR2hDO0FEdGlCSTtFSzJiTSxjQUFBO0FKOEdWO0FJMUdBO0VBQWMsY0FBQTtBSjZHZDtBSXpHRztFQUNGLGNBQUE7QUoyR0Q7QUQvaUJJO0VLbWJPLGVBQUE7RUFzQkksaUJBQUE7QUowR2Y7QURuakJJO0VLNmNFLGNBQUE7QUp5R047QUR0akJJO0VLa2RNLGFBQUE7RUFBaUIsdUJBQUE7RUFHakIsbUJBQUE7QUpzR1Y7QUQzakJJO0VLMGRjLGFBQUE7QUpvR2xCO0FEOWpCSTtFSzhkSSxzQkFBQTtBSm1HUjtBRGprQkk7RUtrZU0sT0FBQTtBSmtHVjtBRHBrQkk7RUtxZUQsVUFBQTtBSmtHSDtBRHZrQkk7RUtrZE0sYUFBQTtFQUFpQix5QkFBQTtFQUdqQixtQkFBQTtBSnVIVjtBRDVrQkk7RUtrZE0sYUFBQTtFQUFpQiwyQkFBQTtFQUdqQixtQkFBQTtBSjRIVjtBRGpsQkk7RUtrZE0sYUFBQTtFQUFpQiw4QkFBQTtFQUdqQixtQkFBQTtBSmlJVjtBRHRsQkk7RUtrZE0sYUFBQTtFQUFpQiw2QkFBQTtFQUdqQixtQkFBQTtBSnNJVjtBRDNsQkk7RUswZkssMkJBQUE7QUpvR1Q7QUQ5bEJJO0VLOGZZLGdCQUFBO0VBQW9CLGVBQUE7QUpvR3BDO0FEbG1CSTtFS2dnQmEsV0FBQTtFQUNYLGFBQUE7QUpxR047QUR0bUJJO0VLc2dCRCxtQkFBQTtFSm1HRCxTQUFTO0FBQ1g7QUQxbUJJO0VLOGdCSCxhQUFBO0VBQW1CLG1CQUFBO0VBSWxCLDhCQUFBO0FKNkZGO0FEL21CSTtFSzBoQkEsU0FBQTtFQUFpQixlQUFBO0VBR04saUJBQUE7RUFDRyxzQkFBQTtFQUdELGFBQUE7QUpxRmpCO0FEdG5CSTtFS3NpQk8sYUFBQTtFQUVWLG1CQUFBO0VBR08seUJBQUE7QUpnRlI7QUQzbkJJO0VLcWpCSiw0QkFBQTtBSnlFQTtBRDluQkk7RUswakJnQixhQUFBO0FKdUVwQjtBRGpvQkk7RUtna0JKLGNBQUE7RUFBa0IsaUJBQUE7QUpxRWxCO0FEcm9CSTtFS2trQkoscUJBQUE7RUFDdUIsV0FBQTtFQUNyQixZQUFBO0VBQ0YsaUJBQUE7QUpzRUE7QUQzb0JJO0VLc2tCZSxnQkFBQTtBSndFbkI7QUQ5b0JJO0VLd2tCSixpQkFBQTtFQUNFLG1CQUFBO0VBRWdCLG9CQUFBO0VBQ1gsa0JBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFBa0Isa0JBQUE7RUFHbkIsVUFBQTtFQUFnQiwwQ0FBQTtBSndFeEI7QUl2RTRCO0VBQ2xCLFlBQUE7RUFBb0IsMENBQUE7QUowRTlCO0FJM0U0QjtFQVFWLGdCQUFBO0VBS04sZ0NBQUE7QUprRVo7QURqcUJJOzs7RUt3bUJZLFlBQUE7QUo4RGhCO0FEdHFCSTtFSzBtQk0sV0FBQTtBSitEVjtBRHpxQkk7RUtrWk0sMENBQUE7QUowUlY7QUQ1cUJJO0VNTUYsK0JBQUE7QUx5cUJGO0FEL3FCSTtFTVNGLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUx5cUJGO0FEcHJCSTtFTWVGLGdCQUFBO0VBQ0Esa0JBQUE7QUx3cUJGO0FEeHJCSTtFTW9CRixtQkFBQTtBTHVxQkY7QUQzckJJO0VDR0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQTJyQk47QURoc0JJO0VDUUksV0FBQTtFQUNBLHFCQUFBO0FBMnJCUjtBRHBzQkk7RUNjRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXlyQk47QUQ1c0JJO0VDc0JJLGdCQUFBO0VBQ0EscUJBQUE7QUF5ckJSO0FEaHRCSTtFQ3lCTSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUEwckJWO0FEdHRCSTtFQ2dDTSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBeXJCVjtBQXhyQlU7RUFDRSxzQ0FBQTtBQTByQlo7QUQ3dEJJO0VDK3RCRiw0RkFBNEY7RUFDNUYsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw2RkFBNkY7RUFDN0YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QURydUJJO0VPQ0YsY0FBQTtBTnV1QkY7QUR4dUJJO0VPSUYsWUFBQTtBTnV1QkY7QUQzdUJJO0VDNnVCRixVQUFVO0VNaHVCVixVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FOa3VCRjtBRGp2Qkk7RUNtdkJGLFdBQVc7RU1odUJYLDhCQUFBO0VBQ0Esa0JBQUE7QU5rdUJGO0FEdHZCSTtFTzBCRixvREFBQTtFQUNBLG1CQUFBO0FOK3RCRjtBRDF2Qkk7RU9pQ0YsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EseUJBQUE7QU40dEJGO0FEaHdCSTtFQ0RFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFvd0JOO0FEcndCSTtFQ0lJLFdBQUE7RUFDQSxxQkFBQTtBQW93QlI7QUR6d0JJO0VDVUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFrd0JOO0FEanhCSTtFQ2tCSSxnQkFBQTtFQUNBLHFCQUFBO0FBa3dCUjtBRHJ4Qkk7RUNxQk0scUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBbXdCVjtBRDN4Qkk7RUM0Qk0scUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQWt3QlY7QUFqd0JVO0VBQ0UseUJBQUE7QUFtd0JaO0FBM3ZCQTtFQTZ2QkUsVUFBVTtFQTN2QlIsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQTZ2Qko7QUFqd0JBO0VBbXdCRSxXQUFXO0VBM3ZCVCw4QkFBQTtFQUNBLGtCQUFBO0FBNnZCSiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZU1peGluKEBydWxlcykge1xuICBodG1sIHtcbiAgICAmLmRlZmF1bHQge1xuICAgICAgQGltcG9ydCAnLi9kZWZhdWx0Lmxlc3MnO1xuICAgICAgQHJ1bGVzKCk7XG4gICAgfVxuICAgICYuZGFyayB7XG4gICAgICBAaW1wb3J0ICcuL2RhcmsubGVzcyc7XG4gICAgICBAcnVsZXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJtaXhpblwiO1xuXG4udGhlbWVNaXhpbih7XG4gIDpob3N0IHtcbiAgICAubGVmdC1uYXYtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLm5hdi11bC13cmFwIHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lkZWJhci1sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAgIGEge1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yLWludmVyc2U7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAmLmxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiBAcHJpbWFyeS02ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLmRhcmstc2Nyb2xsYmFye1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyrmu5rliqjmnaHmlbTkvZPmoLflvI8qL1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZDogIzI2Mzg0OCFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgLyrmu5rliqjmnaHph4zpnaLlsI/mlrnlnZcqL1xuICAgIGJhY2tncm91bmQ6ICM1MzYxNkUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cbiIsIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuQGltcG9ydCAnLi4vY29sb3IvY29sb3JzJztcblxuQHRoZW1lOiB2YXJpYWJsZTtcblxuLy8gVGhlIHByZWZpeCB0byB1c2Ugb24gYWxsIGNzcyBjbGFzc2VzIGZyb20gYW50LlxuQGFudC1wcmVmaXg6IGFudDtcblxuLy8gQW4gb3ZlcnJpZGUgZm9yIHRoZSBodG1sIHNlbGVjdG9yIGZvciB0aGVtZSBwcmVmaXhlc1xuQGh0bWwtc2VsZWN0b3I6IGh0bWw7XG5cbkB7aHRtbC1zZWxlY3Rvcn0ge1xuICBAYmFzZS1wcmltYXJ5OiBAYmx1ZS02O1xuXG4gIC8vID09PT09PT09PSBQcmltYXJ5IENvbG9yID09PT09PT09PVxuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvcjogQGJhc2UtcHJpbWFyeTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgNykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLW91dGxpbmU6IGZhZGUoQGJhc2UtcHJpbWFyeSwgQG91dGxpbmUtZmFkZSk7XG5cbiAgLy8gTGVnYWN5XG4gIEBsZWdhY3ktcHJpbWFyeS0xOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgMSkgYCk7XG5cbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMTogQGxlZ2FjeS1wcmltYXJ5LTE7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAyKSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMzogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDMpIGApO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS00OiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgNCkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNjogQGJhc2UtcHJpbWFyeTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNzogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7YmFzZS1wcmltYXJ5fScsIDcpIGApO1xuXG4gIC8vIERlcHJlY2F0ZWRcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1wdXJlOiB+Jyc7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtbC0zNTogbGlnaHRlbihAYmFzZS1wcmltYXJ5LCAzNSUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWwtMjA6IGxpZ2h0ZW4oQGJhc2UtcHJpbWFyeSwgMjAlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTIwOiB0aW50KEBiYXNlLXByaW1hcnksIDIwJSk7XG4gIC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtdC01MDogdGludChAYmFzZS1wcmltYXJ5LCA1MCUpO1xuICAtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWYtMTI6IGZhZGUoQGJhc2UtcHJpbWFyeSwgMTIlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZi0zMDogZmFkZShAbGVnYWN5LXByaW1hcnktMSwgMzAlKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZC0wMjogZGFya2VuKEBsZWdhY3ktcHJpbWFyeS0xLCAyJSk7XG5cbiAgLy8gPT09PT09PT09IFN1Y2Nlc3MgQ29sb3IgPT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yOiBAZ3JlZW4tNjtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgNSkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWFjdGl2ZTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7Z3JlZW4tNn0nLCA3KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3Itb3V0bGluZTogZmFkZShAZ3JlZW4tNiwgQG91dGxpbmUtZmFkZSk7XG4gIC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH5gY29sb3JQYWxldHRlKCdAe2dyZWVuLTZ9JywgMykgYDtcblxuICAvLyA9PT09PT09PT09IEVycm9yIENvbG9yID09PT09PT09PT1cbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yOiBAcmVkLTU7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1ob3ZlcjogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cmVkLTV9JywgNSkgYCk7XG4gIC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1hY3RpdmU6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe3JlZC01fScsIDcpIGApO1xuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3Itb3V0bGluZTogZmFkZShAcmVkLTUsIEBvdXRsaW5lLWZhZGUpO1xuICAtLUB7YW50LXByZWZpeH0tZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZzogfmBjb2xvclBhbGV0dGUoJ0B7cmVkLTV9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+YGNvbG9yUGFsZXR0ZSgnQHtyZWQtNX0nLCAzKSBgO1xuXG4gIC8vID09PT09PT09PSBXYXJuaW5nIENvbG9yID09PT09PT09PVxuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvcjogQGdvbGQtNjtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItaG92ZXI6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe2dvbGQtNn0nLCA1KSBgKTtcbiAgLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3ItYWN0aXZlOiBjb2xvcih+YGNvbG9yUGFsZXR0ZSgnQHtnb2xkLTZ9JywgNykgYCk7XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLW91dGxpbmU6IGZhZGUoQGdvbGQtNiwgQG91dGxpbmUtZmFkZSk7XG4gIC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH5gY29sb3JQYWxldHRlKCdAe2dvbGQtNn0nLCAxKSBgO1xuICAtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfmBjb2xvclBhbGV0dGUoJ0B7Z29sZC02fScsIDMpIGA7XG5cbiAgLy8gPT09PT09PT09PSBJbmZvIENvbG9yID09PT09PT09PT09XG4gIC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yOiBAYmFzZS1wcmltYXJ5O1xuICAtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJnOiB+YGNvbG9yUGFsZXR0ZSgnQHtiYXNlLXByaW1hcnl9JywgMSkgYDtcbiAgLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH5gY29sb3JQYWxldHRlKCdAe2Jhc2UtcHJpbWFyeX0nLCAzKSBgO1xufVxuXG4vLyAtLS0tLS0tLSBDb2xvcnMgLS0tLS0tLS0tLS1cbi8vID4+PiBQcmltYXJ5XG5AcHJpbWFyeS1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3IpJztcbkBwcmltYXJ5LWNvbG9yLWhvdmVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1ob3ZlciknO1xuQHByaW1hcnktY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUpJztcbkBwcmltYXJ5LWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLW91dGxpbmUpJztcblxuQHByb2Nlc3NpbmctY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuXG4vLyA+Pj4gSW5mb1xuQGluZm8tY29sb3I6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1pbmZvLWNvbG9yKSc7XG5AaW5mby1jb2xvci1kZXByZWNhdGVkLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0taW5mby1jb2xvci1kZXByZWNhdGVkLWJnKSc7XG5AaW5mby1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXIpJztcblxuLy8gPj4+IFN1Y2Nlc3NcbkBzdWNjZXNzLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tc3VjY2Vzcy1jb2xvciknO1xuQHN1Y2Nlc3MtY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWhvdmVyKSc7XG5Ac3VjY2Vzcy1jb2xvci1hY3RpdmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWFjdGl2ZSknO1xuQHN1Y2Nlc3MtY29sb3Itb3V0bGluZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3Itb3V0bGluZSknO1xuQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1iZyknO1xuQHN1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1zdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyKSc7XG5cbi8vID4+PiBXYXJuaW5nXG5Ad2FybmluZy1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXdhcm5pbmctY29sb3IpJztcbkB3YXJuaW5nLWNvbG9yLWhvdmVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1ob3ZlciknO1xuQHdhcm5pbmctY29sb3ItYWN0aXZlOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1hY3RpdmUpJztcbkB3YXJuaW5nLWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLW91dGxpbmUpJztcbkB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS13YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYmcpJztcbkB3YXJuaW5nLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyOiB+J3ZhcigtLUB7YW50LXByZWZpeH0td2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlciknO1xuXG4vLyA+Pj4gRXJyb3JcbkBlcnJvci1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yKSc7XG5AZXJyb3ItY29sb3ItaG92ZXI6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1ob3ZlciknO1xuQGVycm9yLWNvbG9yLWFjdGl2ZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWFjdGl2ZSknO1xuQGVycm9yLWNvbG9yLW91dGxpbmU6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1lcnJvci1jb2xvci1vdXRsaW5lKSc7XG5AZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYmcpJztcbkBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LWVycm9yLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyKSc7XG5cbkBoaWdobGlnaHQtY29sb3I6IEByZWQtNTtcbkBub3JtYWwtY29sb3I6ICNkOWQ5ZDk7XG5Ad2hpdGU6ICNmZmY7XG5AYmxhY2s6ICMwMDA7XG5cbi8vIENvbG9yIHVzZWQgYnkgZGVmYXVsdCB0byBjb250cm9sIGhvdmVyIGFuZCBhY3RpdmUgYmFja2dyb3VuZHMgYW5kIGZvclxuLy8gYWxlcnQgaW5mbyBiYWNrZ3JvdW5kcy5cbkBwcmltYXJ5LTE6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTEpJzsgLy8gcmVwbGFjZSB0aW50KEBwcmltYXJ5LWNvbG9yLCA5MCUpXG5AcHJpbWFyeS0yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS0yKSc7IC8vIHJlcGxhY2UgdGludChAcHJpbWFyeS1jb2xvciwgODAlKVxuQHByaW1hcnktMzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktMyknOyAvLyB1bnVzZWRcbkBwcmltYXJ5LTQ6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTQpJzsgLy8gdW51c2VkXG5AcHJpbWFyeS01OiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS01KSc7IC8vIGNvbG9yIHVzZWQgdG8gY29udHJvbCB0aGUgdGV4dCBjb2xvciBpbiBtYW55IGFjdGl2ZSBhbmQgaG92ZXIgc3RhdGVzLCByZXBsYWNlIHRpbnQoQHByaW1hcnktY29sb3IsIDIwJSlcbkBwcmltYXJ5LTY6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LTYpJzsgLy8gY29sb3IgdXNlZCB0byBjb250cm9sIHRoZSB0ZXh0IGNvbG9yIG9mIGFjdGl2ZSBidXR0b25zLCBkb24ndCB1c2UsIHVzZSBAcHJpbWFyeS1jb2xvclxuQHByaW1hcnktNzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktNyknOyAvLyByZXBsYWNlIHNoYWRlKEBwcmltYXJ5LWNvbG9yLCA1JSlcbkBwcmltYXJ5LTg6IGNvbG9yKH5gY29sb3JQYWxldHRlKCdAe3ByaW1hcnktY29sb3J9JywgOCkgYCk7IC8vIHVudXNlZFxuQHByaW1hcnktOTogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cHJpbWFyeS1jb2xvcn0nLCA5KSBgKTsgLy8gdW51c2VkXG5AcHJpbWFyeS0xMDogY29sb3IofmBjb2xvclBhbGV0dGUoJ0B7cHJpbWFyeS1jb2xvcn0nLCAxMCkgYCk7IC8vIHVudXNlZFxuXG4vLyBCYXNlIFNjYWZmb2xkaW5nIFZhcmlhYmxlc1xuLy8gLS0tXG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGA8Ym9keT5gXG5AYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xuLy8gQmFzZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBtb3N0IGNvbXBvbmVudHNcbkBjb21wb25lbnQtYmFja2dyb3VuZDogI2ZmZjtcbi8vIFBvcG92ZXIgYmFja2dyb3VuZCBjb2xvclxuQHBvcG92ZXItYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBvcG92ZXItY3VzdG9taXplLWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1zcGxpdDtcbkBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbkBjb2RlLWZhbWlseTogJ1NGTW9uby1SZWd1bGFyJywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuQHRleHQtY29sb3I6IGZhZGUoQGJsYWNrLCA4NSUpO1xuQHRleHQtY29sb3Itc2Vjb25kYXJ5OiBmYWRlKEBibGFjaywgNDUlKTtcbkB0ZXh0LWNvbG9yLWludmVyc2U6IEB3aGl0ZTtcbkBpY29uLWNvbG9yOiBpbmhlcml0O1xuQGljb24tY29sb3ItaG92ZXI6IGZhZGUoQGJsYWNrLCA3NSUpO1xuQGhlYWRpbmctY29sb3I6IGZhZGUoQGJsYWNrLCA4NSUpO1xuQHRleHQtY29sb3ItZGFyazogZmFkZShAd2hpdGUsIDg1JSk7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnktZGFyazogZmFkZShAd2hpdGUsIDY1JSk7XG5AdGV4dC1zZWxlY3Rpb24tYmc6IEBwcmltYXJ5LWNvbG9yO1xuQGZvbnQtdmFyaWFudC1iYXNlOiB0YWJ1bGFyLW51bXM7XG5AZm9udC1mZWF0dXJlLXNldHRpbmdzLWJhc2U6ICd0bnVtJztcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtbGc6IEBmb250LXNpemUtYmFzZSArIDJweDtcbkBmb250LXNpemUtc206IDEycHg7XG5AaGVhZGluZy0xLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMi43MSk7XG5AaGVhZGluZy0yLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMi4xNCk7XG5AaGVhZGluZy0zLXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS43MSk7XG5AaGVhZGluZy00LXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS40Mik7XG5AaGVhZGluZy01LXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMS4xNCk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yMDIxMFxuQGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTcxNTtcbkBib3JkZXItcmFkaXVzLWJhc2U6IDJweDtcbkBib3JkZXItcmFkaXVzLXNtOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4vLyBjb250cm9sIGJvcmRlclxuQGNvbnRyb2wtYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuLy8gYXJyb3cgYm9yZGVyXG5AYXJyb3ctYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG5cbi8vIHZlcnRpY2FsIHBhZGRpbmdzXG5AcGFkZGluZy1sZzogMjRweDsgLy8gY29udGFpbmVyc1xuQHBhZGRpbmctbWQ6IDE2cHg7IC8vIHNtYWxsIGNvbnRhaW5lcnMgYW5kIGJ1dHRvbnNcbkBwYWRkaW5nLXNtOiAxMnB4OyAvLyBGb3JtIGNvbnRyb2xzIGFuZCBpdGVtc1xuQHBhZGRpbmcteHM6IDhweDsgLy8gc21hbGwgaXRlbXNcbkBwYWRkaW5nLXhzczogNHB4OyAvLyBtb3JlIHNtYWxsXG5cbi8vIHZlcnRpY2FsIHBhZGRpbmcgZm9yIGFsbCBmb3JtIGNvbnRyb2xzXG5AY29udHJvbC1wYWRkaW5nLWhvcml6b250YWw6IEBwYWRkaW5nLXNtO1xuQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsLXNtOiBAcGFkZGluZy14cztcblxuLy8gdmVydGljYWwgbWFyZ2luc1xuQG1hcmdpbi1sZzogMjRweDsgLy8gY29udGFpbmVyc1xuQG1hcmdpbi1tZDogMTZweDsgLy8gc21hbGwgY29udGFpbmVycyBhbmQgYnV0dG9uc1xuQG1hcmdpbi1zbTogMTJweDsgLy8gRm9ybSBjb250cm9scyBhbmQgaXRlbXNcbkBtYXJnaW4teHM6IDhweDsgLy8gc21hbGwgaXRlbXNcbkBtYXJnaW4teHNzOiA0cHg7IC8vIG1vcmUgc21hbGxcblxuLy8gaGVpZ2h0IHJ1bGVzXG5AaGVpZ2h0LWJhc2U6IDMycHg7XG5AaGVpZ2h0LWxnOiA0MHB4O1xuQGhlaWdodC1zbTogMjRweDtcblxuLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIGZvciBhY3RpdmUgYW5kIGhvdmVyIHN0YXRlcyBmb3IgdGhpbmdzIGxpa2Vcbi8vIGxpc3QgaXRlbXMgb3IgdGFibGUgY2VsbHMuXG5AaXRlbS1hY3RpdmUtYmc6IEBwcmltYXJ5LTE7XG5AaXRlbS1ob3Zlci1iZzogI2Y1ZjVmNTtcblxuLy8gSUNPTkZPTlRcbkBpY29uZm9udC1jc3MtcHJlZml4OiBhbnRpY29uO1xuXG4vLyBMSU5LXG5AbGluay1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AbGluay1ob3Zlci1jb2xvcjogQHByaW1hcnktY29sb3ItaG92ZXI7XG5AbGluay1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LWNvbG9yLWFjdGl2ZTtcbkBsaW5rLWRlY29yYXRpb246IG5vbmU7XG5AbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xuQGxpbmstZm9jdXMtZGVjb3JhdGlvbjogbm9uZTtcbkBsaW5rLWZvY3VzLW91dGxpbmU6IDA7XG5cbi8vIEFuaW1hdGlvblxuQGVhc2UtYmFzZS1vdXQ6IGN1YmljLWJlemllcigwLjcsIDAuMywgMC4xLCAxKTtcbkBlYXNlLWJhc2UtaW46IGN1YmljLWJlemllcigwLjksIDAsIDAuMywgMC43KTtcbkBlYXNlLW91dDogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5AZWFzZS1pbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5AZWFzZS1pbi1vdXQ6IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbkBlYXNlLW91dC1iYWNrOiBjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KTtcbkBlYXNlLWluLWJhY2s6IGN1YmljLWJlemllcigwLjcxLCAtMC40NiwgMC44OCwgMC42KTtcbkBlYXNlLWluLW91dC1iYWNrOiBjdWJpYy1iZXppZXIoMC43MSwgLTAuNDYsIDAuMjksIDEuNDYpO1xuQGVhc2Utb3V0LWNpcmM6IGN1YmljLWJlemllcigwLjA4LCAwLjgyLCAwLjE3LCAxKTtcbkBlYXNlLWluLWNpcmM6IGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzQpO1xuQGVhc2UtaW4tb3V0LWNpcmM6IGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcbkBlYXNlLW91dC1xdWludDogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuQGVhc2UtaW4tcXVpbnQ6IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuQGVhc2UtaW4tb3V0LXF1aW50OiBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XG5cbi8vIEJvcmRlciBjb2xvclxuQGJvcmRlci1jb2xvci1iYXNlOiBoc3YoMCwgMCwgODUlKTsgLy8gYmFzZSBib3JkZXIgb3V0bGluZSBhIGNvbXBvbmVudFxuQGJvcmRlci1jb2xvci1zcGxpdDogcmdiYSgwLCAwLCAwLCAwLjA2KTsgLy8gc3BsaXQgYm9yZGVyIGluc2lkZSBhIGNvbXBvbmVudFxuQGJvcmRlci1jb2xvci1pbnZlcnNlOiBAd2hpdGU7XG5AYm9yZGVyLXdpZHRoLWJhc2U6IDFweDsgLy8gd2lkdGggb2YgdGhlIGJvcmRlciBmb3IgYSBjb21wb25lbnRcbkBib3JkZXItc3R5bGUtYmFzZTogc29saWQ7IC8vIHN0eWxlIG9mIGEgY29tcG9uZW50cyBib3JkZXJcblxuLy8gT3V0bGluZVxuQG91dGxpbmUtYmx1ci1zaXplOiAwO1xuQG91dGxpbmUtd2lkdGg6IDJweDtcbkBvdXRsaW5lLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjsgLy8gTm8gdXNlIGFueW1vcmVcbkBvdXRsaW5lLWZhZGU6IDIwJTtcblxuQGJhY2tncm91bmQtY29sb3ItbGlnaHQ6IGhzdigwLCAwLCA5OCUpOyAvLyBiYWNrZ3JvdW5kIG9mIGhlYWRlciBhbmQgc2VsZWN0ZWQgaXRlbVxuQGJhY2tncm91bmQtY29sb3ItYmFzZTogaHN2KDAsIDAsIDk2JSk7IC8vIERlZmF1bHQgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yXG5cbi8vIERpc2FibGVkIHN0YXRlc1xuQGRpc2FibGVkLWNvbG9yOiBmYWRlKCMwMDAsIDI1JSk7XG5AZGlzYWJsZWQtYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5AZGlzYWJsZWQtYWN0aXZlLWJnOiB0aW50KEBibGFjaywgOTAlKTtcbkBkaXNhYmxlZC1jb2xvci1kYXJrOiBmYWRlKCNmZmYsIDM1JSk7XG5cbi8vIFNoYWRvd1xuQHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbkBzaGFkb3ctY29sb3ItaW52ZXJzZTogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGJveC1zaGFkb3ctYmFzZTogQHNoYWRvdy0yO1xuQHNoYWRvdy0xLXVwOiAwIC02cHggMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgLTlweCAyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgMCAtMTJweCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1kb3duOiAwIDZweCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCA5cHggMjhweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gIDAgMTJweCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1sZWZ0OiAtNnB4IDAgMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIC05cHggMCAyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgLTEycHggMCA0OHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbkBzaGFkb3ctMS1yaWdodDogNnB4IDAgMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDlweCAwIDI4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAxMnB4IDAgNDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG5Ac2hhZG93LTI6IDAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxuICAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4vLyBCdXR0b25zXG5AYnRuLWZvbnQtd2VpZ2h0OiA0MDA7XG5AYnRuLWJvcmRlci1yYWRpdXMtYmFzZTogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBidG4tYm9yZGVyLXJhZGl1cy1zbTogQGJvcmRlci1yYWRpdXMtYmFzZTtcbkBidG4tYm9yZGVyLXdpZHRoOiBAYm9yZGVyLXdpZHRoLWJhc2U7XG5AYnRuLWJvcmRlci1zdHlsZTogQGJvcmRlci1zdHlsZS1iYXNlO1xuQGJ0bi1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAxNSk7XG5AYnRuLXByaW1hcnktc2hhZG93OiAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNDUpO1xuQGJ0bi10ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuQGJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmO1xuQGJ0bi1wcmltYXJ5LWJnOiBAcHJpbWFyeS1jb2xvcjtcblxuQGJ0bi1kZWZhdWx0LWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBidG4tZGVmYXVsdC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGJ0bi1kZWZhdWx0LWJvcmRlcjogQGJvcmRlci1jb2xvci1iYXNlO1xuXG5AYnRuLWRhbmdlci1jb2xvcjogI2ZmZjtcbkBidG4tZGFuZ2VyLWJnOiBAZXJyb3ItY29sb3I7XG5AYnRuLWRhbmdlci1ib3JkZXI6IEBlcnJvci1jb2xvcjtcblxuQGJ0bi1kaXNhYmxlLWNvbG9yOiBAZGlzYWJsZWQtY29sb3I7XG5AYnRuLWRpc2FibGUtYmc6IEBkaXNhYmxlZC1iZztcbkBidG4tZGlzYWJsZS1ib3JkZXI6IEBib3JkZXItY29sb3ItYmFzZTtcblxuQGJ0bi1kZWZhdWx0LWdob3N0LWNvbG9yOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AYnRuLWRlZmF1bHQtZ2hvc3QtYmc6IHRyYW5zcGFyZW50O1xuQGJ0bi1kZWZhdWx0LWdob3N0LWJvcmRlcjogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuXG5AYnRuLWZvbnQtc2l6ZS1sZzogQGZvbnQtc2l6ZS1sZztcbkBidG4tZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlOiBAcGFkZGluZy1tZCAtIDFweDtcbkBidG4tcGFkZGluZy1ob3Jpem9udGFsLWxnOiBAYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlO1xuQGJ0bi1wYWRkaW5nLWhvcml6b250YWwtc206IEBwYWRkaW5nLXhzIC0gMXB4O1xuXG5AYnRuLWhlaWdodC1iYXNlOiBAaGVpZ2h0LWJhc2U7XG5AYnRuLWhlaWdodC1sZzogQGhlaWdodC1sZztcbkBidG4taGVpZ2h0LXNtOiBAaGVpZ2h0LXNtO1xuXG5AYnRuLWxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtYmFzZTtcblxuQGJ0bi1jaXJjbGUtc2l6ZTogQGJ0bi1oZWlnaHQtYmFzZTtcbkBidG4tY2lyY2xlLXNpemUtbGc6IEBidG4taGVpZ2h0LWxnO1xuQGJ0bi1jaXJjbGUtc2l6ZS1zbTogQGJ0bi1oZWlnaHQtc207XG5cbkBidG4tc3F1YXJlLXNpemU6IEBidG4taGVpZ2h0LWJhc2U7XG5AYnRuLXNxdWFyZS1zaXplLWxnOiBAYnRuLWhlaWdodC1sZztcbkBidG4tc3F1YXJlLXNpemUtc206IEBidG4taGVpZ2h0LXNtO1xuQGJ0bi1zcXVhcmUtb25seS1pY29uLXNpemU6IEBmb250LXNpemUtYmFzZSArIDJweDtcbkBidG4tc3F1YXJlLW9ubHktaWNvbi1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AYnRuLXNxdWFyZS1vbmx5LWljb24tc2l6ZS1sZzogQGJ0bi1mb250LXNpemUtbGcgKyAycHg7XG5cbkBidG4tZ3JvdXAtYm9yZGVyOiBAcHJpbWFyeS01O1xuXG5AYnRuLWxpbmstaG92ZXItYmc6IHRyYW5zcGFyZW50O1xuQGJ0bi10ZXh0LWhvdmVyLWJnOiByZ2JhKDAsIDAsIDAsIDAuMDE4KTtcblxuLy8gQ2hlY2tib3hcbkBjaGVja2JveC1zaXplOiAxNnB4O1xuQGNoZWNrYm94LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBjaGVja2JveC1jaGVjay1jb2xvcjogI2ZmZjtcbkBjaGVja2JveC1jaGVjay1iZzogQGNoZWNrYm94LWNoZWNrLWNvbG9yO1xuQGNoZWNrYm94LWJvcmRlci13aWR0aDogQGJvcmRlci13aWR0aC1iYXNlO1xuQGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AY2hlY2tib3gtZ3JvdXAtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcblxuLy8gRGVzY3JpcHRpb25zXG5AZGVzY3JpcHRpb25zLWJnOiAjZmFmYWZhO1xuQGRlc2NyaXB0aW9ucy10aXRsZS1tYXJnaW4tYm90dG9tOiAyMHB4O1xuQGRlc2NyaXB0aW9ucy1kZWZhdWx0LXBhZGRpbmc6IEBwYWRkaW5nLW1kIEBwYWRkaW5nLWxnO1xuQGRlc2NyaXB0aW9ucy1taWRkbGUtcGFkZGluZzogQHBhZGRpbmctc20gQHBhZGRpbmctbGc7XG5AZGVzY3JpcHRpb25zLXNtYWxsLXBhZGRpbmc6IEBwYWRkaW5nLXhzIEBwYWRkaW5nLW1kO1xuQGRlc2NyaXB0aW9ucy1pdGVtLXBhZGRpbmctYm90dG9tOiBAcGFkZGluZy1tZDtcbkBkZXNjcmlwdGlvbnMtaXRlbS10cmFpbGluZy1jb2xvbjogdHJ1ZTtcbkBkZXNjcmlwdGlvbnMtaXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tcmlnaHQ6IDhweDtcbkBkZXNjcmlwdGlvbnMtaXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tbGVmdDogMnB4O1xuQGRlc2NyaXB0aW9ucy1leHRyYS1jb2xvcjogQHRleHQtY29sb3I7XG5cbi8vIERpdmlkZXJcbkBkaXZpZGVyLXRleHQtcGFkZGluZzogMWVtO1xuQGRpdmlkZXItb3JpZW50YXRpb24tbWFyZ2luOiA1JTtcbkBkaXZpZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDYlKTtcbkBkaXZpZGVyLXZlcnRpY2FsLWd1dHRlcjogOHB4O1xuXG4vLyBEcm9wZG93blxuQGRyb3Bkb3duLXNlbGVjdGVkLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkBkcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWQtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBkcm9wZG93bi1zZWxlY3RlZC1iZzogQGl0ZW0tYWN0aXZlLWJnO1xuXG4vLyBFbXB0eVxuQGVtcHR5LWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuXG4vLyBSYWRpb1xuQHJhZGlvLXNpemU6IDE2cHg7XG5AcmFkaW8tdG9wOiAwLjJlbTtcbkByYWRpby1ib3JkZXItd2lkdGg6IDFweDtcbkByYWRpby1kb3Qtc2l6ZTogQHJhZGlvLXNpemUgLSA4cHg7XG5AcmFkaW8tZG90LWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkByYWRpby1kb3QtZGlzYWJsZWQtY29sb3I6IGZhZGUoQGJsYWNrLCAyMCUpO1xuQHJhZGlvLXNvbGlkLWNoZWNrZWQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcblxuLy8gUmFkaW8gYnV0dG9uc1xuQHJhZGlvLWJ1dHRvbi1iZzogQGJ0bi1kZWZhdWx0LWJnO1xuQHJhZGlvLWJ1dHRvbi1jaGVja2VkLWJnOiBAYnRuLWRlZmF1bHQtYmc7XG5AcmFkaW8tYnV0dG9uLWNvbG9yOiBAYnRuLWRlZmF1bHQtY29sb3I7XG5AcmFkaW8tYnV0dG9uLWhvdmVyLWNvbG9yOiBAcHJpbWFyeS01O1xuQHJhZGlvLWJ1dHRvbi1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LTc7XG5AcmFkaW8tYnV0dG9uLXBhZGRpbmctaG9yaXpvbnRhbDogQHBhZGRpbmctbWQgLSAxcHg7XG5AcmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtYmc6IEBkaXNhYmxlZC1hY3RpdmUtYmc7XG5AcmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcbkByYWRpby13cmFwcGVyLW1hcmdpbi1yaWdodDogOHB4O1xuXG4vLyBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXG4vLyBAc2NyZWVuLXhzIGFuZCBAc2NyZWVuLXhzLW1pbiBpcyBub3QgdXNlZCBpbiBHcmlkXG4vLyBzbWFsbGVzdCBicmVhayBwb2ludCBpcyBAc2NyZWVuLW1kXG5Ac2NyZWVuLXhzOiA0ODBweDtcbkBzY3JlZW4teHMtbWluOiBAc2NyZWVuLXhzO1xuLy8g8J+RhiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuXG4vLyDwn5GHIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuQHNjcmVlbi1zbTogNTc2cHg7XG5Ac2NyZWVuLXNtLW1pbjogQHNjcmVlbi1zbTtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3BcbkBzY3JlZW4tbWQ6IDc2OHB4O1xuQHNjcmVlbi1tZC1taW46IEBzY3JlZW4tbWQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuQHNjcmVlbi1sZzogOTkycHg7XG5Ac2NyZWVuLWxnLW1pbjogQHNjcmVlbi1sZztcblxuLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gZnVsbCBoZFxuQHNjcmVlbi14bDogMTIwMHB4O1xuQHNjcmVlbi14bC1taW46IEBzY3JlZW4teGw7XG5cbi8vIEV4dHJhIGV4dHJhIGxhcmdlIHNjcmVlbiAvIGxhcmdlIGRlc2t0b3BcbkBzY3JlZW4teHhsOiAxNjAwcHg7XG5Ac2NyZWVuLXh4bC1taW46IEBzY3JlZW4teHhsO1xuXG4vLyBwcm92aWRlIGEgbWF4aW11bVxuQHNjcmVlbi14cy1tYXg6IChAc2NyZWVuLXNtLW1pbiAtIDFweCk7XG5Ac2NyZWVuLXNtLW1heDogKEBzY3JlZW4tbWQtbWluIC0gMXB4KTtcbkBzY3JlZW4tbWQtbWF4OiAoQHNjcmVlbi1sZy1taW4gLSAxcHgpO1xuQHNjcmVlbi1sZy1tYXg6IChAc2NyZWVuLXhsLW1pbiAtIDFweCk7XG5Ac2NyZWVuLXhsLW1heDogKEBzY3JlZW4teHhsLW1pbiAtIDFweCk7XG5cbi8vIEdyaWQgc3lzdGVtXG5AZ3JpZC1jb2x1bW5zOiAyNDtcblxuLy8gTGF5b3V0XG5AbGF5b3V0LWJvZHktYmFja2dyb3VuZDogI2YwZjJmNTtcbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6ICMwMDE1Mjk7XG5AbGF5b3V0LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5AbGF5b3V0LWhlYWRlci1wYWRkaW5nOiAwIDUwcHg7XG5AbGF5b3V0LWhlYWRlci1jb2xvcjogQHRleHQtY29sb3I7XG5AbGF5b3V0LWZvb3Rlci1wYWRkaW5nOiAyNHB4IDUwcHg7XG5AbGF5b3V0LWZvb3Rlci1iYWNrZ3JvdW5kOiBAbGF5b3V0LWJvZHktYmFja2dyb3VuZDtcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZDogQGxheW91dC1oZWFkZXItYmFja2dyb3VuZDtcbkBsYXlvdXQtdHJpZ2dlci1oZWlnaHQ6IDQ4cHg7XG5AbGF5b3V0LXRyaWdnZXItYmFja2dyb3VuZDogIzAwMjE0MDtcbkBsYXlvdXQtdHJpZ2dlci1jb2xvcjogI2ZmZjtcbkBsYXlvdXQtemVyby10cmlnZ2VyLXdpZHRoOiAzNnB4O1xuQGxheW91dC16ZXJvLXRyaWdnZXItaGVpZ2h0OiA0MnB4O1xuLy8gTGF5b3V0IGxpZ2h0IHRoZW1lXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQtbGlnaHQ6ICNmZmY7XG5AbGF5b3V0LXRyaWdnZXItYmFja2dyb3VuZC1saWdodDogI2ZmZjtcbkBsYXlvdXQtdHJpZ2dlci1jb2xvci1saWdodDogQHRleHQtY29sb3I7XG5cbi8vIHotaW5kZXggbGlzdCwgb3JkZXIgYnkgYHotaW5kZXhgXG5AemluZGV4LWJhZGdlOiBhdXRvO1xuQHppbmRleC10YWJsZS1maXhlZDogMjtcbkB6aW5kZXgtYWZmaXg6IDEwO1xuQHppbmRleC1iYWNrLXRvcDogMTA7XG5AemluZGV4LXBpY2tlci1wYW5lbDogMTA7XG5AemluZGV4LXBvcHVwLWNsb3NlOiAxMDtcbkB6aW5kZXgtbW9kYWw6IDEwMDA7XG5AemluZGV4LW1vZGFsLW1hc2s6IDEwMDA7XG5AemluZGV4LW1lc3NhZ2U6IDEwMTA7XG5AemluZGV4LW5vdGlmaWNhdGlvbjogMTAxMDtcbkB6aW5kZXgtcG9wb3ZlcjogMTAzMDtcbkB6aW5kZXgtZHJvcGRvd246IDEwNTA7XG5AemluZGV4LXBpY2tlcjogMTA1MDtcbkB6aW5kZXgtcG9wb2NvbmZpcm06IDEwNjA7XG5AemluZGV4LXRvb2x0aXA6IDEwNzA7XG5AemluZGV4LWltYWdlOiAxMDgwO1xuXG4vLyBBbmltYXRpb25cbkBhbmltYXRpb24tZHVyYXRpb24tc2xvdzogMC4zczsgLy8gTW9kYWxcbkBhbmltYXRpb24tZHVyYXRpb24tYmFzZTogMC4ycztcbkBhbmltYXRpb24tZHVyYXRpb24tZmFzdDogMC4xczsgLy8gVG9vbHRpcFxuXG4vL0NvbGxhcHNlUGFuZWxcbkBjb2xsYXBzZS1wYW5lbC1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4vL0Ryb3Bkb3duXG5AZHJvcGRvd24tbWVudS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc6IDVweDtcbkBkcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc6IDRweDtcbkBkcm9wZG93bi1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBkcm9wZG93bi1saW5lLWhlaWdodDogMjJweDtcblxuLy8gRm9ybVxuLy8gLS0tXG5AbGFiZWwtcmVxdWlyZWQtY29sb3I6IEBoaWdobGlnaHQtY29sb3I7XG5AbGFiZWwtY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQGZvcm0td2FybmluZy1pbnB1dC1iZzogQGlucHV0LWJnO1xuQGZvcm0taXRlbS1tYXJnaW4tYm90dG9tOiAyNHB4O1xuQGZvcm0taXRlbS10cmFpbGluZy1jb2xvbjogdHJ1ZTtcbkBmb3JtLXZlcnRpY2FsLWxhYmVsLXBhZGRpbmc6IDAgMCA4cHg7XG5AZm9ybS12ZXJ0aWNhbC1sYWJlbC1tYXJnaW46IDA7XG5AZm9ybS1pdGVtLWxhYmVsLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQGZvcm0taXRlbS1sYWJlbC1oZWlnaHQ6IEBpbnB1dC1oZWlnaHQtYmFzZTtcbkBmb3JtLWl0ZW0tbGFiZWwtY29sb24tbWFyZ2luLXJpZ2h0OiA4cHg7XG5AZm9ybS1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1sZWZ0OiAycHg7XG5AZm9ybS1lcnJvci1pbnB1dC1iZzogQGlucHV0LWJnO1xuXG4vLyBJbnB1dFxuLy8gLS0tXG5AaW5wdXQtaGVpZ2h0LWJhc2U6IEBoZWlnaHQtYmFzZTtcbkBpbnB1dC1oZWlnaHQtbGc6IEBoZWlnaHQtbGc7XG5AaW5wdXQtaGVpZ2h0LXNtOiBAaGVpZ2h0LXNtO1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbDogQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsIC0gMXB4O1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlOiBAaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsO1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1zbTogQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsLXNtIC0gMXB4O1xuQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1sZzogQGlucHV0LXBhZGRpbmctaG9yaXpvbnRhbDtcbkBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2U6IG1heChcbiAgKHJvdW5kKCgoQGlucHV0LWhlaWdodC1iYXNlIC0gQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpIC8gMikgKiAxMCkgLyAxMCkgLVxuICAgIEBib3JkZXItd2lkdGgtYmFzZSxcbiAgM3B4XG4pO1xuQGlucHV0LXBhZGRpbmctdmVydGljYWwtc206IG1heChcbiAgKHJvdW5kKCgoQGlucHV0LWhlaWdodC1zbSAtIEBmb250LXNpemUtYmFzZSAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTApIC1cbiAgICBAYm9yZGVyLXdpZHRoLWJhc2UsXG4gIDBcbik7XG5AaW5wdXQtcGFkZGluZy12ZXJ0aWNhbC1sZzogKFxuICAgIGNlaWwoKChAaW5wdXQtaGVpZ2h0LWxnIC0gQGZvbnQtc2l6ZS1sZyAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTBcbiAgKSAtIEBib3JkZXItd2lkdGgtYmFzZTtcbkBpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogaHN2KDAsIDAsIDc1JSk7XG5AaW5wdXQtY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGlucHV0LWljb24tY29sb3I6IEBpbnB1dC1jb2xvcjtcbkBpbnB1dC1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItYmFzZTtcbkBpbnB1dC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGlucHV0LW51bWJlci1ob3Zlci1ib3JkZXItY29sb3I6IEBpbnB1dC1ob3Zlci1ib3JkZXItY29sb3I7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItYWN0aXZlLWJnOiAjZjRmNGY0O1xuQGlucHV0LW51bWJlci1oYW5kbGVyLWhvdmVyLWJnOiBAcHJpbWFyeS01O1xuQGlucHV0LW51bWJlci1oYW5kbGVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AaW5wdXQtbnVtYmVyLWhhbmRsZXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLWJhc2U7XG5AaW5wdXQtYWRkb24tYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcjogQHByaW1hcnktNTtcbkBpbnB1dC1kaXNhYmxlZC1iZzogQGRpc2FibGVkLWJnO1xuQGlucHV0LW91dGxpbmUtb2Zmc2V0OiAwIDA7XG5AaW5wdXQtaWNvbi1ob3Zlci1jb2xvcjogZmFkZShAYmxhY2ssIDg1JSk7XG5AaW5wdXQtZGlzYWJsZWQtY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcblxuLy8gTWVudGlvbnNcbi8vIC0tLVxuQG1lbnRpb25zLWRyb3Bkb3duLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudGlvbnMtZHJvcGRvd24tbWVudS1pdGVtLWhvdmVyLWJnOiBAbWVudGlvbnMtZHJvcGRvd24tYmc7XG5cbi8vIFNlbGVjdFxuLy8gLS0tXG5Ac2VsZWN0LWJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci1iYXNlO1xuQHNlbGVjdC1pdGVtLXNlbGVjdGVkLWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBzZWxlY3QtaXRlbS1zZWxlY3RlZC1mb250LXdlaWdodDogNjAwO1xuQHNlbGVjdC1kcm9wZG93bi1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHNlbGVjdC1pdGVtLXNlbGVjdGVkLWJnOiBAcHJpbWFyeS0xO1xuQHNlbGVjdC1pdGVtLWFjdGl2ZS1iZzogQGl0ZW0taG92ZXItYmc7XG5Ac2VsZWN0LWRyb3Bkb3duLXZlcnRpY2FsLXBhZGRpbmc6IEBkcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nO1xuQHNlbGVjdC1kcm9wZG93bi1mb250LXNpemU6IEBkcm9wZG93bi1mb250LXNpemU7XG5Ac2VsZWN0LWRyb3Bkb3duLWxpbmUtaGVpZ2h0OiBAZHJvcGRvd24tbGluZS1oZWlnaHQ7XG5Ac2VsZWN0LWRyb3Bkb3duLWhlaWdodDogMzJweDtcbkBzZWxlY3QtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHNlbGVjdC1jbGVhci1iYWNrZ3JvdW5kOiBAc2VsZWN0LWJhY2tncm91bmQ7XG5Ac2VsZWN0LXNlbGVjdGlvbi1pdGVtLWJnOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHNlbGVjdC1zZWxlY3Rpb24taXRlbS1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5Ac2VsZWN0LXNpbmdsZS1pdGVtLWhlaWdodC1sZzogNDBweDtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1oZWlnaHQ6IEBpbnB1dC1oZWlnaHQtYmFzZSAtIEBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UgKiAyOyAvLyBOb3JtYWwgMjRweFxuQHNlbGVjdC1tdWx0aXBsZS1pdGVtLWhlaWdodC1sZzogMzJweDtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1zcGFjaW5nLWhhbGY6IGNlaWwoKEBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UgLyAyKSk7XG5Ac2VsZWN0LW11bHRpcGxlLWRpc2FibGVkLWJhY2tncm91bmQ6IEBpbnB1dC1kaXNhYmxlZC1iZztcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1kaXNhYmxlZC1jb2xvcjogI2JmYmZiZjtcbkBzZWxlY3QtbXVsdGlwbGUtaXRlbS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IEBzZWxlY3QtYm9yZGVyLWNvbG9yO1xuXG4vLyBDYXNjYWRlclxuLy8gLS0tXG5AY2FzY2FkZXItYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjYXNjYWRlci1pdGVtLXNlbGVjdGVkLWJnOiBAcHJpbWFyeS0xO1xuQGNhc2NhZGVyLW1lbnUtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjYXNjYWRlci1tZW51LWJvcmRlci1jb2xvci1zcGxpdDogQGJvcmRlci1jb2xvci1zcGxpdDtcblxuLy8gQ2FzY2FkZXJcbi8vIC0tLS1cbkBjYXNjYWRlci1kcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nOiBAZHJvcGRvd24tdmVydGljYWwtcGFkZGluZztcbkBjYXNjYWRlci1kcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc6IEBkcm9wZG93bi1lZGdlLWNoaWxkLXZlcnRpY2FsLXBhZGRpbmc7XG5AY2FzY2FkZXItZHJvcGRvd24tZm9udC1zaXplOiBAZHJvcGRvd24tZm9udC1zaXplO1xuQGNhc2NhZGVyLWRyb3Bkb3duLWxpbmUtaGVpZ2h0OiBAZHJvcGRvd24tbGluZS1oZWlnaHQ7XG5cbi8vIEFuY2hvclxuLy8gLS0tXG5AYW5jaG9yLWJnOiB0cmFuc3BhcmVudDtcbkBhbmNob3ItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQGFuY2hvci1saW5rLXRvcDogNHB4O1xuQGFuY2hvci1saW5rLWxlZnQ6IDE2cHg7XG5AYW5jaG9yLWxpbmstcGFkZGluZzogQGFuY2hvci1saW5rLXRvcCAwIEBhbmNob3ItbGluay10b3AgQGFuY2hvci1saW5rLWxlZnQ7XG5cbi8vIFRvb2x0aXBcbi8vIC0tLVxuLy8gVG9vbHRpcCBtYXggd2lkdGhcbkB0b29sdGlwLW1heC13aWR0aDogMjUwcHg7XG4vLyBUb29sdGlwIHRleHQgY29sb3JcbkB0b29sdGlwLWNvbG9yOiAjZmZmO1xuLy8gVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yXG5AdG9vbHRpcC1iZzogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbi8vIFRvb2x0aXAgYXJyb3cgd2lkdGhcbkB0b29sdGlwLWFycm93LXdpZHRoOiA4cHggKiBzcXJ0KDIpO1xuLy8gVG9vbHRpcCBkaXN0YW5jZSB3aXRoIHRyaWdnZXJcbkB0b29sdGlwLWRpc3RhbmNlOiBAdG9vbHRpcC1hcnJvdy13aWR0aCAtIDFweCArIDRweDtcbi8vIFRvb2x0aXAgYXJyb3cgY29sb3JcbkB0b29sdGlwLWFycm93LWNvbG9yOiBAdG9vbHRpcC1iZztcbkB0b29sdGlwLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cbi8vIFBvcG92ZXJcbi8vIC0tLVxuLy8gUG9wb3ZlciBib2R5IGJhY2tncm91bmQgY29sb3JcbkBwb3BvdmVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG4vLyBQb3BvdmVyIHRleHQgY29sb3JcbkBwb3BvdmVyLWNvbG9yOiBAdGV4dC1jb2xvcjtcbi8vIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuQHBvcG92ZXItbWluLXdpZHRoOiAxNzdweDtcbkBwb3BvdmVyLW1pbi1oZWlnaHQ6IDMycHg7XG4vLyBQb3BvdmVyIGFycm93IHdpZHRoXG5AcG9wb3Zlci1hcnJvdy13aWR0aDogQHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4vLyBQb3BvdmVyIGFycm93IGNvbG9yXG5AcG9wb3Zlci1hcnJvdy1jb2xvcjogQHBvcG92ZXItYmc7XG4vLyBQb3BvdmVyIG91dGVyIGFycm93IHdpZHRoXG4vLyBQb3BvdmVyIG91dGVyIGFycm93IGNvbG9yXG5AcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogQHBvcG92ZXItYmc7XG4vLyBQb3BvdmVyIGRpc3RhbmNlIHdpdGggdHJpZ2dlclxuQHBvcG92ZXItZGlzdGFuY2U6IEBwb3BvdmVyLWFycm93LXdpZHRoICsgNHB4O1xuQHBvcG92ZXItcGFkZGluZy1ob3Jpem9udGFsOiBAcGFkZGluZy1tZDtcblxuLy8gTW9kYWxcbi8vIC0tXG5AbW9kYWwtaGVhZGVyLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLW1kO1xuQG1vZGFsLWhlYWRlci1wYWRkaW5nLWhvcml6b250YWw6IEBwYWRkaW5nLWxnO1xuQG1vZGFsLWJvZHktcGFkZGluZzogQHBhZGRpbmctbGc7XG5AbW9kYWwtaGVhZGVyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbW9kYWwtaGVhZGVyLXBhZGRpbmc6IEBtb2RhbC1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbCBAbW9kYWwtaGVhZGVyLXBhZGRpbmctaG9yaXpvbnRhbDtcbkBtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiBAYm9yZGVyLXdpZHRoLWJhc2U7XG5AbW9kYWwtaGVhZGVyLWJvcmRlci1zdHlsZTogQGJvcmRlci1zdHlsZS1iYXNlO1xuQG1vZGFsLWhlYWRlci10aXRsZS1saW5lLWhlaWdodDogMjJweDtcbkBtb2RhbC1oZWFkZXItdGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3Itc3BsaXQ6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AbW9kYWwtaGVhZGVyLWNsb3NlLXNpemU6IDU2cHg7XG5AbW9kYWwtY29udGVudC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG1vZGFsLWhlYWRpbmctY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQG1vZGFsLWNsb3NlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AbW9kYWwtZm9vdGVyLWJnOiB0cmFuc3BhcmVudDtcbkBtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yLXNwbGl0OiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQG1vZGFsLWZvb3Rlci1ib3JkZXItc3R5bGU6IEBib3JkZXItc3R5bGUtYmFzZTtcbkBtb2RhbC1mb290ZXItcGFkZGluZy12ZXJ0aWNhbDogMTBweDtcbkBtb2RhbC1mb290ZXItcGFkZGluZy1ob3Jpem9udGFsOiAxNnB4O1xuQG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IEBib3JkZXItd2lkdGgtYmFzZTtcbkBtb2RhbC1tYXNrLWJnOiBmYWRlKEBibGFjaywgNDUlKTtcbkBtb2RhbC1jb25maXJtLWJvZHktcGFkZGluZzogMzJweCAzMnB4IDI0cHg7XG5AbW9kYWwtY29uZmlybS10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtbGc7XG5cbi8vIFByb2dyZXNzXG4vLyAtLVxuQHByb2dyZXNzLWRlZmF1bHQtY29sb3I6IEBwcm9jZXNzaW5nLWNvbG9yO1xuQHByb2dyZXNzLXJlbWFpbmluZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkBwcm9ncmVzcy1pbmZvLXRleHQtY29sb3I6IEBwcm9ncmVzcy10ZXh0LWNvbG9yO1xuQHByb2dyZXNzLXJhZGl1czogMTAwcHg7XG5AcHJvZ3Jlc3Mtc3RlcHMtaXRlbS1iZzogI2YzZjNmMztcbkBwcm9ncmVzcy10ZXh0LWZvbnQtc2l6ZTogMWVtO1xuQHByb2dyZXNzLXRleHQtY29sb3I6IEB0ZXh0LWNvbG9yOyAvLyBUaGlzIGlzIGZvciBjaXJjbGUgdGV4dCBjb2xvciwgc2hvdWxkIGJlIHJlbmFtZWQgYmV0dGVyXG5AcHJvZ3Jlc3MtY2lyY2xlLXRleHQtZm9udC1zaXplOiAxZW07XG4vLyBNZW51XG4vLyAtLS1cbkBtZW51LWlubGluZS10b3BsZXZlbC1pdGVtLWhlaWdodDogNDBweDtcbkBtZW51LWl0ZW0taGVpZ2h0OiA0MHB4O1xuQG1lbnUtaXRlbS1ncm91cC1oZWlnaHQ6IEBsaW5lLWhlaWdodC1iYXNlO1xuQG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4O1xuQG1lbnUtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LXBvcHVwLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudS1pdGVtLWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBtZW51LWlubGluZS1zdWJtZW51LWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkBtZW51LWhpZ2hsaWdodC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AbWVudS1oaWdobGlnaHQtZGFuZ2VyLWNvbG9yOiBAZXJyb3ItY29sb3I7XG5AbWVudS1pdGVtLWFjdGl2ZS1iZzogQHByaW1hcnktMTtcbkBtZW51LWl0ZW0tYWN0aXZlLWRhbmdlci1iZzogQHJlZC0xO1xuQG1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLXdpZHRoOiAzcHg7XG5AbWVudS1pdGVtLWdyb3VwLXRpdGxlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AbWVudS1pdGVtLXZlcnRpY2FsLW1hcmdpbjogNHB4O1xuQG1lbnUtaXRlbS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBtZW51LWl0ZW0tYm91bmRhcnktbWFyZ2luOiA4cHg7XG5AbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbDogMjBweDtcbkBtZW51LWl0ZW0tcGFkZGluZzogMCBAbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbDtcbkBtZW51LWhvcml6b250YWwtbGluZS1oZWlnaHQ6IDQ2cHg7XG5AbWVudS1pY29uLW1hcmdpbi1yaWdodDogMTBweDtcbkBtZW51LWljb24tc2l6ZTogQG1lbnUtaXRlbS1mb250LXNpemU7XG5AbWVudS1pY29uLXNpemUtbGc6IEBmb250LXNpemUtbGc7XG5AbWVudS1pdGVtLWdyb3VwLXRpdGxlLWZvbnQtc2l6ZTogQG1lbnUtaXRlbS1mb250LXNpemU7XG5cbi8vIGRhcmsgdGhlbWVcbkBtZW51LWRhcmstY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeS1kYXJrO1xuQG1lbnUtZGFyay1kYW5nZXItY29sb3I6IEBlcnJvci1jb2xvcjtcbkBtZW51LWRhcmstYmc6IEBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ7XG5AbWVudS1kYXJrLWFycm93LWNvbG9yOiAjZmZmO1xuQG1lbnUtZGFyay1pbmxpbmUtc3VibWVudS1iZzogIzAwMGMxNztcbkBtZW51LWRhcmstaGlnaGxpZ2h0LWNvbG9yOiAjZmZmO1xuQG1lbnUtZGFyay1pdGVtLWFjdGl2ZS1iZzogQHByaW1hcnktY29sb3I7XG5AbWVudS1kYXJrLWl0ZW0tYWN0aXZlLWRhbmdlci1iZzogQGVycm9yLWNvbG9yO1xuQG1lbnUtZGFyay1zZWxlY3RlZC1pdGVtLWljb24tY29sb3I6IEB3aGl0ZTtcbkBtZW51LWRhcmstc2VsZWN0ZWQtaXRlbS10ZXh0LWNvbG9yOiBAd2hpdGU7XG5AbWVudS1kYXJrLWl0ZW0taG92ZXItYmc6IHRyYW5zcGFyZW50O1xuLy8gU3BpblxuLy8gLS0tXG5Ac3Bpbi1kb3Qtc2l6ZS1zbTogMTRweDtcbkBzcGluLWRvdC1zaXplOiAyMHB4O1xuQHNwaW4tZG90LXNpemUtbGc6IDMycHg7XG5cbi8vIFRhYmxlXG4vLyAtLVxuQHRhYmxlLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGFibGUtaGVhZGVyLWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWJsZS1oZWFkZXItY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuQHRhYmxlLWhlYWRlci1zb3J0LWJnOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHRhYmxlLWJvZHktc29ydC1iZzogI2ZhZmFmYTtcbkB0YWJsZS1yb3ctaG92ZXItYmc6IEBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuQHRhYmxlLXNlbGVjdGVkLXJvdy1jb2xvcjogaW5oZXJpdDtcbkB0YWJsZS1zZWxlY3RlZC1yb3ctYmc6IEBwcmltYXJ5LTE7XG5AdGFibGUtYm9keS1zZWxlY3RlZC1zb3J0LWJnOiBAdGFibGUtc2VsZWN0ZWQtcm93LWJnO1xuQHRhYmxlLXNlbGVjdGVkLXJvdy1ob3Zlci1iZzogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItYWN0aXZlLWRlcHJlY2F0ZWQtZC0wMiknO1xuQHRhYmxlLWV4cGFuZGVkLXJvdy1iZzogI2ZiZmJmYjtcbkB0YWJsZS1wYWRkaW5nLXZlcnRpY2FsOiAxNnB4O1xuQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbDogMTZweDtcbkB0YWJsZS1wYWRkaW5nLXZlcnRpY2FsLW1kOiAoQHRhYmxlLXBhZGRpbmctdmVydGljYWwgKiAzIC8gNCk7XG5AdGFibGUtcGFkZGluZy1ob3Jpem9udGFsLW1kOiAoQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbCAvIDIpO1xuQHRhYmxlLXBhZGRpbmctdmVydGljYWwtc206IChAdGFibGUtcGFkZGluZy12ZXJ0aWNhbCAvIDIpO1xuQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbC1zbTogKEB0YWJsZS1wYWRkaW5nLWhvcml6b250YWwgLyAyKTtcbkB0YWJsZS1ib3JkZXItY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AdGFibGUtYm9yZGVyLXJhZGl1cy1iYXNlOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQHRhYmxlLWZvb3Rlci1iZzogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AdGFibGUtZm9vdGVyLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkB0YWJsZS1oZWFkZXItYmctc206IEB0YWJsZS1oZWFkZXItYmc7XG5AdGFibGUtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AdGFibGUtZm9udC1zaXplLW1kOiBAdGFibGUtZm9udC1zaXplO1xuQHRhYmxlLWZvbnQtc2l6ZS1zbTogQHRhYmxlLWZvbnQtc2l6ZTtcbkB0YWJsZS1oZWFkZXItY2VsbC1zcGxpdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbi8vIFNvcnRlclxuLy8gTGVnYWN5OiBgdGFibGUtaGVhZGVyLXNvcnQtYWN0aXZlLWJnYCBpcyB1c2VkIGZvciBob3ZlciBub3QgcmVhbCBhY3RpdmVcbkB0YWJsZS1oZWFkZXItc29ydC1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5AdGFibGUtZml4ZWQtaGVhZGVyLXNvcnQtYWN0aXZlLWJnOiBoc3YoMCwgMCwgOTYlKTtcblxuLy8gRmlsdGVyXG5AdGFibGUtaGVhZGVyLWZpbHRlci1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5AdGFibGUtZmlsdGVyLWJ0bnMtYmc6IGluaGVyaXQ7XG5AdGFibGUtZmlsdGVyLWRyb3Bkb3duLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGFibGUtZXhwYW5kLWljb24tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkB0YWJsZS1zZWxlY3Rpb24tY29sdW1uLXdpZHRoOiAzMnB4O1xuLy8gU3RpY2t5XG5AdGFibGUtc3RpY2t5LXNjcm9sbC1iYXItYmc6IGZhZGUoIzAwMCwgMzUlKTtcbkB0YWJsZS1zdGlja3ktc2Nyb2xsLWJhci1yYWRpdXM6IDRweDtcblxuLy8gVGFnXG4vLyAtLVxuQHRhZy1ib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQHRhZy1kZWZhdWx0LWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkB0YWctZGVmYXVsdC1jb2xvcjogQHRleHQtY29sb3I7XG5AdGFnLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbTtcbkB0YWctbGluZS1oZWlnaHQ6IDIwcHg7XG5cbi8vIFRpbWVQaWNrZXJcbi8vIC0tLVxuQHBpY2tlci1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBpY2tlci1iYXNpYy1jZWxsLWhvdmVyLWNvbG9yOiBAaXRlbS1ob3Zlci1iZztcbkBwaWNrZXItYmFzaWMtY2VsbC1hY3RpdmUtd2l0aC1yYW5nZS1jb2xvcjogQHByaW1hcnktMTtcbkBwaWNrZXItYmFzaWMtY2VsbC1ob3Zlci13aXRoLXJhbmdlLWNvbG9yOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1kZXByZWNhdGVkLWwtMzUpJztcbkBwaWNrZXItYmFzaWMtY2VsbC1kaXNhYmxlZC1iZzogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbkBwaWNrZXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHBpY2tlci1kYXRlLWhvdmVyLXJhbmdlLWJvcmRlci1jb2xvcjogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC1sLTIwKSc7XG5AcGlja2VyLWRhdGUtaG92ZXItcmFuZ2UtY29sb3I6IEBwaWNrZXItYmFzaWMtY2VsbC1ob3Zlci13aXRoLXJhbmdlLWNvbG9yO1xuQHBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi13aWR0aDogNTZweDtcbkBwaWNrZXItdGltZS1wYW5lbC1jb2x1bW4taGVpZ2h0OiAyMjRweDtcbkBwaWNrZXItdGltZS1wYW5lbC1jZWxsLWhlaWdodDogMjhweDtcbkBwaWNrZXItcGFuZWwtY2VsbC1oZWlnaHQ6IDI0cHg7XG5AcGlja2VyLXBhbmVsLWNlbGwtd2lkdGg6IDM2cHg7XG5AcGlja2VyLXRleHQtaGVpZ2h0OiA0MHB4O1xuQHBpY2tlci1wYW5lbC13aXRob3V0LXRpbWUtY2VsbC1oZWlnaHQ6IDY2cHg7XG5cbi8vIENhbGVuZGFyXG4vLyAtLS1cbkBjYWxlbmRhci1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhbGVuZGFyLWlucHV0LWJnOiBAaW5wdXQtYmc7XG5AY2FsZW5kYXItYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLWludmVyc2U7XG5AY2FsZW5kYXItaXRlbS1hY3RpdmUtYmc6IEBpdGVtLWFjdGl2ZS1iZztcbkBjYWxlbmRhci1jb2x1bW4tYWN0aXZlLWJnOiB+J3ZhcigtLUB7YW50LXByZWZpeH0tcHJpbWFyeS1jb2xvci1hY3RpdmUtZGVwcmVjYXRlZC1mLTMwKSc7XG5AY2FsZW5kYXItZnVsbC1iZzogQGNhbGVuZGFyLWJnO1xuQGNhbGVuZGFyLWZ1bGwtcGFuZWwtYmc6IEBjYWxlbmRhci1mdWxsLWJnO1xuXG4vLyBDYXJvdXNlbFxuLy8gLS0tXG5AY2Fyb3VzZWwtZG90LXdpZHRoOiAxNnB4O1xuQGNhcm91c2VsLWRvdC1oZWlnaHQ6IDNweDtcbkBjYXJvdXNlbC1kb3QtYWN0aXZlLXdpZHRoOiAyNHB4O1xuXG4vLyBCYWRnZVxuLy8gLS0tXG5AYmFkZ2UtaGVpZ2h0OiAyMHB4O1xuQGJhZGdlLWhlaWdodC1zbTogMTRweDtcbkBiYWRnZS1kb3Qtc2l6ZTogNnB4O1xuQGJhZGdlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbTtcbkBiYWRnZS1mb250LXNpemUtc206IEBmb250LXNpemUtc207XG5AYmFkZ2UtZm9udC13ZWlnaHQ6IG5vcm1hbDtcbkBiYWRnZS1zdGF0dXMtc2l6ZTogNnB4O1xuQGJhZGdlLXRleHQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBiYWRnZS1jb2xvcjogQGhpZ2hsaWdodC1jb2xvcjtcblxuLy8gUmF0ZVxuLy8gLS0tXG5AcmF0ZS1zdGFyLWNvbG9yOiBAeWVsbG93LTY7XG5AcmF0ZS1zdGFyLWJnOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHJhdGUtc3Rhci1zaXplOiAyMHB4O1xuQHJhdGUtc3Rhci1ob3Zlci1zY2FsZTogc2NhbGUoMS4xKTtcblxuLy8gQ2FyZFxuLy8gLS0tXG5AY2FyZC1oZWFkLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkBjYXJkLWhlYWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5AY2FyZC1oZWFkLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1sZztcbkBjYXJkLWhlYWQtZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AY2FyZC1oZWFkLXBhZGRpbmc6IDE2cHg7XG5AY2FyZC1oZWFkLXBhZGRpbmctc206IChAY2FyZC1oZWFkLXBhZGRpbmcgLyAyKTtcbkBjYXJkLWhlYWQtaGVpZ2h0OiA0OHB4O1xuQGNhcmQtaGVhZC1oZWlnaHQtc206IDM2cHg7XG5AY2FyZC1pbm5lci1oZWFkLXBhZGRpbmc6IDEycHg7XG5AY2FyZC1wYWRkaW5nLWJhc2U6IDI0cHg7XG5AY2FyZC1wYWRkaW5nLWJhc2Utc206IChAY2FyZC1wYWRkaW5nLWJhc2UgLyAyKTtcbkBjYXJkLWFjdGlvbnMtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhcmQtYWN0aW9ucy1saS1tYXJnaW46IDEycHggMDtcbkBjYXJkLXNrZWxldG9uLWJnOiAjY2ZkOGRjO1xuQGNhcmQtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGNhcmQtc2hhZG93OiAwIDFweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAwIDVweCAxMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuQGNhcmQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuQGNhcmQtaGVhZC10YWJzLW1hcmdpbi1ib3R0b206IC0xN3B4O1xuQGNhcmQtaGVhZC1leHRyYS1jb2xvcjogQHRleHQtY29sb3I7XG5cbi8vIENvbW1lbnRcbi8vIC0tLVxuQGNvbW1lbnQtYmc6IGluaGVyaXQ7XG5AY29tbWVudC1wYWRkaW5nLWJhc2U6IEBwYWRkaW5nLW1kIDA7XG5AY29tbWVudC1uZXN0LWluZGVudDogNDRweDtcbkBjb21tZW50LWZvbnQtc2l6ZS1iYXNlOiBAZm9udC1zaXplLWJhc2U7XG5AY29tbWVudC1mb250LXNpemUtc206IEBmb250LXNpemUtc207XG5AY29tbWVudC1hdXRob3ItbmFtZS1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGNvbW1lbnQtYXV0aG9yLXRpbWUtY29sb3I6ICNjY2M7XG5AY29tbWVudC1hY3Rpb24tY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBjb21tZW50LWFjdGlvbi1ob3Zlci1jb2xvcjogIzU5NTk1OTtcbkBjb21tZW50LWFjdGlvbnMtbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcbkBjb21tZW50LWFjdGlvbnMtbWFyZ2luLXRvcDogQG1hcmdpbi1zbTtcbkBjb21tZW50LWNvbnRlbnQtZGV0YWlsLXAtbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcblxuLy8gVGFic1xuLy8gLS0tXG5AdGFicy1jYXJkLWhlYWQtYmFja2dyb3VuZDogQGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5AdGFicy1jYXJkLWhlaWdodDogNDBweDtcbkB0YWJzLWNhcmQtYWN0aXZlLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkB0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nOiAoXG4gICAgKEB0YWJzLWNhcmQtaGVpZ2h0IC0gZmxvb3IoQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpKSAvIDJcbiAgKSAtIEBib3JkZXItd2lkdGgtYmFzZSBAcGFkZGluZy1tZDtcbkB0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nLXNtOiA2cHggQHBhZGRpbmctbWQ7XG5AdGFicy1jYXJkLWhvcml6b250YWwtcGFkZGluZy1sZzogN3B4IEBwYWRkaW5nLW1kIDZweDtcbkB0YWJzLXRpdGxlLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQHRhYnMtdGl0bGUtZm9udC1zaXplLWxnOiBAZm9udC1zaXplLWxnO1xuQHRhYnMtdGl0bGUtZm9udC1zaXplLXNtOiBAZm9udC1zaXplLWJhc2U7XG5AdGFicy1pbmstYmFyLWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbkB0YWJzLWJhci1tYXJnaW46IDAgMCBAbWFyZ2luLW1kIDA7XG5AdGFicy1ob3Jpem9udGFsLWd1dHRlcjogMzJweDtcbkB0YWJzLWhvcml6b250YWwtbWFyZ2luOiAwIDAgMCBAdGFicy1ob3Jpem9udGFsLWd1dHRlcjtcbkB0YWJzLWhvcml6b250YWwtbWFyZ2luLXJ0bDogMCAwIDAgMzJweDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZzogQHBhZGRpbmctc20gMDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZy1sZzogQHBhZGRpbmctbWQgMDtcbkB0YWJzLWhvcml6b250YWwtcGFkZGluZy1zbTogQHBhZGRpbmcteHMgMDtcbkB0YWJzLXZlcnRpY2FsLXBhZGRpbmc6IEBwYWRkaW5nLXhzIEBwYWRkaW5nLWxnO1xuQHRhYnMtdmVydGljYWwtbWFyZ2luOiBAbWFyZ2luLW1kIDAgMCAwO1xuQHRhYnMtc2Nyb2xsaW5nLXNpemU6IDMycHg7XG5AdGFicy1oaWdobGlnaHQtY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuQHRhYnMtaG92ZXItY29sb3I6IEBwcmltYXJ5LTU7XG5AdGFicy1hY3RpdmUtY29sb3I6IEBwcmltYXJ5LTc7XG5AdGFicy1jYXJkLWd1dHRlcjogMnB4O1xuQHRhYnMtY2FyZC10YWItYWN0aXZlLWJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuLy8gQmFja1RvcFxuLy8gLS0tXG5AYmFjay10b3AtY29sb3I6ICNmZmY7XG5AYmFjay10b3AtYmc6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBiYWNrLXRvcC1ob3Zlci1iZzogQHRleHQtY29sb3I7XG5cbi8vIEF2YXRhclxuLy8gLS0tXG5AYXZhdGFyLXNpemUtYmFzZTogMzJweDtcbkBhdmF0YXItc2l6ZS1sZzogNDBweDtcbkBhdmF0YXItc2l6ZS1zbTogMjRweDtcbkBhdmF0YXItZm9udC1zaXplLWJhc2U6IDE4cHg7XG5AYXZhdGFyLWZvbnQtc2l6ZS1sZzogMjRweDtcbkBhdmF0YXItZm9udC1zaXplLXNtOiAxNHB4O1xuQGF2YXRhci1iZzogI2NjYztcbkBhdmF0YXItY29sb3I6ICNmZmY7XG5AYXZhdGFyLWJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5AYXZhdGFyLWdyb3VwLW92ZXJsYXBwaW5nOiAtOHB4O1xuQGF2YXRhci1ncm91cC1zcGFjZTogM3B4O1xuQGF2YXRhci1ncm91cC1ib3JkZXItY29sb3I6ICNmZmY7XG5cbi8vIFN3aXRjaFxuLy8gLS0tXG5Ac3dpdGNoLWhlaWdodDogMjJweDtcbkBzd2l0Y2gtc20taGVpZ2h0OiAxNnB4O1xuQHN3aXRjaC1taW4td2lkdGg6IDQ0cHg7XG5Ac3dpdGNoLXNtLW1pbi13aWR0aDogMjhweDtcbkBzd2l0Y2gtZGlzYWJsZWQtb3BhY2l0eTogMC40O1xuQHN3aXRjaC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5Ac3dpdGNoLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5Ac3dpdGNoLXNoYWRvdy1jb2xvcjogZmFkZSgjMDAyMzBiLCAyMCUpO1xuQHN3aXRjaC1wYWRkaW5nOiAycHg7XG5Ac3dpdGNoLWlubmVyLW1hcmdpbi1taW46IGNlaWwoQHN3aXRjaC1oZWlnaHQgKiAwLjMpO1xuQHN3aXRjaC1pbm5lci1tYXJnaW4tbWF4OiBjZWlsKEBzd2l0Y2gtaGVpZ2h0ICogMS4xKTtcbkBzd2l0Y2gtc20taW5uZXItbWFyZ2luLW1pbjogY2VpbChAc3dpdGNoLXNtLWhlaWdodCAqIDAuMyk7XG5Ac3dpdGNoLXNtLWlubmVyLW1hcmdpbi1tYXg6IGNlaWwoQHN3aXRjaC1zbS1oZWlnaHQgKiAxLjEpO1xuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS1cbkBwYWdpbmF0aW9uLWl0ZW0tYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBwYWdpbmF0aW9uLWl0ZW0tc2l6ZTogQGhlaWdodC1iYXNlO1xuQHBhZ2luYXRpb24taXRlbS1zaXplLXNtOiAyNHB4O1xuQHBhZ2luYXRpb24tZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbkBwYWdpbmF0aW9uLWZvbnQtd2VpZ2h0LWFjdGl2ZTogNTAwO1xuQHBhZ2luYXRpb24taXRlbS1iZy1hY3RpdmU6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBwYWdpbmF0aW9uLWl0ZW0tbGluay1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24taXRlbS1kaXNhYmxlZC1jb2xvci1hY3RpdmU6IEBkaXNhYmxlZC1jb2xvcjtcbkBwYWdpbmF0aW9uLWl0ZW0tZGlzYWJsZWQtYmctYWN0aXZlOiBAZGlzYWJsZWQtYWN0aXZlLWJnO1xuQHBhZ2luYXRpb24taXRlbS1pbnB1dC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHBhZ2luYXRpb24tbWluaS1vcHRpb25zLXNpemUtY2hhbmdlci10b3A6IDBweDtcblxuLy8gUGFnZUhlYWRlclxuLy8gLS0tXG5AcGFnZS1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctbGc7XG5AcGFnZS1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbDogQHBhZGRpbmctbWQ7XG5AcGFnZS1oZWFkZXItcGFkZGluZy1icmVhZGNydW1iOiBAcGFkZGluZy1zbTtcbkBwYWdlLWhlYWRlci1jb250ZW50LXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLXNtO1xuQHBhZ2UtaGVhZGVyLWJhY2stY29sb3I6ICMwMDA7XG5AcGFnZS1oZWFkZXItZ2hvc3QtYmc6IGluaGVyaXQ7XG5AcGFnZS1oZWFkZXItaGVhZGluZy10aXRsZTogQGhlYWRpbmctNC1zaXplO1xuQHBhZ2UtaGVhZGVyLWhlYWRpbmctc3ViLXRpdGxlOiAxNHB4O1xuQHBhZ2UtaGVhZGVyLXRhYnMtdGFiLWZvbnQtc2l6ZTogMTZweDtcblxuLy8gQnJlYWRjcnVtYlxuLy8gLS0tXG5AYnJlYWRjcnVtYi1iYXNlLWNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG5AYnJlYWRjcnVtYi1sYXN0LWl0ZW0tY29sb3I6IEB0ZXh0LWNvbG9yO1xuQGJyZWFkY3J1bWItZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AYnJlYWRjcnVtYi1pY29uLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuQGJyZWFkY3J1bWItbGluay1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGJyZWFkY3J1bWItbGluay1jb2xvci1ob3ZlcjogQHRleHQtY29sb3I7XG5AYnJlYWRjcnVtYi1zZXBhcmF0b3ItY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbkBicmVhZGNydW1iLXNlcGFyYXRvci1tYXJnaW46IDAgQHBhZGRpbmcteHM7XG5cbi8vIFNsaWRlclxuLy8gLS0tXG5Ac2xpZGVyLW1hcmdpbjogMTBweCA2cHggMTBweDtcbkBzbGlkZXItcmFpbC1iYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuQHNsaWRlci1yYWlsLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNlMWUxZTE7XG5Ac2xpZGVyLXRyYWNrLWJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LTM7XG5Ac2xpZGVyLXRyYWNrLWJhY2tncm91bmQtY29sb3ItaG92ZXI6IEBwcmltYXJ5LTQ7XG5Ac2xpZGVyLWhhbmRsZS1ib3JkZXItd2lkdGg6IDJweDtcbkBzbGlkZXItaGFuZGxlLWJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBzbGlkZXItaGFuZGxlLWNvbG9yOiBAcHJpbWFyeS0zO1xuQHNsaWRlci1oYW5kbGUtY29sb3ItaG92ZXI6IEBwcmltYXJ5LTQ7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1czogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTIwKSc7XG5Ac2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1cy1zaGFkb3c6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWRlcHJlY2F0ZWQtZi0xMiknO1xuQHNsaWRlci1oYW5kbGUtY29sb3ItdG9vbHRpcC1vcGVuOiBAcHJpbWFyeS1jb2xvcjtcbkBzbGlkZXItaGFuZGxlLXNpemU6IDE0cHg7XG5Ac2xpZGVyLWhhbmRsZS1tYXJnaW4tdG9wOiAtNXB4O1xuQHNsaWRlci1oYW5kbGUtc2hhZG93OiAwO1xuQHNsaWRlci1kb3QtYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHNsaWRlci1kb3QtYm9yZGVyLWNvbG9yLWFjdGl2ZTogfid2YXIoLS1Ae2FudC1wcmVmaXh9LXByaW1hcnktY29sb3ItZGVwcmVjYXRlZC10LTUwKSc7XG5Ac2xpZGVyLWRpc2FibGVkLWNvbG9yOiBAZGlzYWJsZWQtY29sb3I7XG5Ac2xpZGVyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcblxuLy8gVHJlZVxuLy8gLS0tXG5AdHJlZS1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHRyZWUtdGl0bGUtaGVpZ2h0OiAyNHB4O1xuQHRyZWUtY2hpbGQtcGFkZGluZzogMThweDtcbkB0cmVlLWRpcmVjdG9yeS1zZWxlY3RlZC1jb2xvcjogI2ZmZjtcbkB0cmVlLWRpcmVjdG9yeS1zZWxlY3RlZC1iZzogQHByaW1hcnktY29sb3I7XG5AdHJlZS1ub2RlLWhvdmVyLWJnOiBAaXRlbS1ob3Zlci1iZztcbkB0cmVlLW5vZGUtc2VsZWN0ZWQtYmc6IEBwcmltYXJ5LTI7XG5cbi8vIENvbGxhcHNlXG4vLyAtLS1cbkBjb2xsYXBzZS1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctc20gQHBhZGRpbmctbWQ7XG5AY29sbGFwc2UtaGVhZGVyLXBhZGRpbmctZXh0cmE6IDQwcHg7XG5AY29sbGFwc2UtaGVhZGVyLWJnOiBAYmFja2dyb3VuZC1jb2xvci1saWdodDtcbkBjb2xsYXBzZS1jb250ZW50LXBhZGRpbmc6IEBwYWRkaW5nLW1kO1xuQGNvbGxhcHNlLWNvbnRlbnQtYmc6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBjb2xsYXBzZS1oZWFkZXItYXJyb3ctbGVmdDogMTZweDtcblxuLy8gU2tlbGV0b25cbi8vIC0tLVxuQHNrZWxldG9uLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMik7XG5Ac2tlbGV0b24tdG8tY29sb3I6IHNoYWRlKEBza2VsZXRvbi1jb2xvciwgNSUpO1xuQHNrZWxldG9uLXBhcmFncmFwaC1tYXJnaW4tdG9wOiAyOHB4O1xuQHNrZWxldG9uLXBhcmFncmFwaC1saS1tYXJnaW4tdG9wOiBAbWFyZ2luLW1kO1xuQHNrZWxldG9uLXBhcmFncmFwaC1saS1oZWlnaHQ6IDE2cHg7XG5Ac2tlbGV0b24tdGl0bGUtaGVpZ2h0OiAxNnB4O1xuQHNrZWxldG9uLXRpdGxlLXBhcmFncmFwaC1tYXJnaW4tdG9wOiBAbWFyZ2luLWxnO1xuXG4vLyBUcmFuc2ZlclxuLy8gLS0tXG5AdHJhbnNmZXItaGVhZGVyLWhlaWdodDogNDBweDtcbkB0cmFuc2Zlci1pdGVtLWhlaWdodDogQGhlaWdodC1iYXNlO1xuQHRyYW5zZmVyLWRpc2FibGVkLWJnOiBAZGlzYWJsZWQtYmc7XG5AdHJhbnNmZXItbGlzdC1oZWlnaHQ6IDIwMHB4O1xuQHRyYW5zZmVyLWl0ZW0taG92ZXItYmc6IEBpdGVtLWhvdmVyLWJnO1xuQHRyYW5zZmVyLWl0ZW0tc2VsZWN0ZWQtaG92ZXItYmc6IH4ndmFyKC0tQHthbnQtcHJlZml4fS1wcmltYXJ5LWNvbG9yLWFjdGl2ZS1kZXByZWNhdGVkLWQtMDIpJztcbkB0cmFuc2Zlci1pdGVtLXBhZGRpbmctdmVydGljYWw6IDZweDtcbkB0cmFuc2Zlci1saXN0LXNlYXJjaC1pY29uLXRvcDogMTJweDtcblxuLy8gTWVzc2FnZVxuLy8gLS0tXG5AbWVzc2FnZS1ub3RpY2UtY29udGVudC1wYWRkaW5nOiAxMHB4IDE2cHg7XG5AbWVzc2FnZS1ub3RpY2UtY29udGVudC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuLy8gTW90aW9uXG4vLyAtLS1cbkB3YXZlLWFuaW1hdGlvbi13aWR0aDogNnB4O1xuXG4vLyBBbGVydFxuLy8gLS0tXG5AYWxlcnQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IEBzdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyO1xuQGFsZXJ0LXN1Y2Nlc3MtYmctY29sb3I6IEBzdWNjZXNzLWNvbG9yLWRlcHJlY2F0ZWQtYmc7XG5AYWxlcnQtc3VjY2Vzcy1pY29uLWNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbkBhbGVydC1pbmZvLWJvcmRlci1jb2xvcjogQGluZm8tY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI7XG5AYWxlcnQtaW5mby1iZy1jb2xvcjogQGluZm8tY29sb3ItZGVwcmVjYXRlZC1iZztcbkBhbGVydC1pbmZvLWljb24tY29sb3I6IEBpbmZvLWNvbG9yO1xuQGFsZXJ0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBAd2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJvcmRlcjtcbkBhbGVydC13YXJuaW5nLWJnLWNvbG9yOiBAd2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJnO1xuQGFsZXJ0LXdhcm5pbmctaWNvbi1jb2xvcjogQHdhcm5pbmctY29sb3I7XG5AYWxlcnQtZXJyb3ItYm9yZGVyLWNvbG9yOiBAZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1ib3JkZXI7XG5AYWxlcnQtZXJyb3ItYmctY29sb3I6IEBlcnJvci1jb2xvci1kZXByZWNhdGVkLWJnO1xuQGFsZXJ0LWVycm9yLWljb24tY29sb3I6IEBlcnJvci1jb2xvcjtcbkBhbGVydC1tZXNzYWdlLWNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbkBhbGVydC10ZXh0LWNvbG9yOiBAdGV4dC1jb2xvcjtcbkBhbGVydC1jbG9zZS1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuQGFsZXJ0LWNsb3NlLWhvdmVyLWNvbG9yOiBAaWNvbi1jb2xvci1ob3ZlcjtcbkBhbGVydC1uby1pY29uLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLXhzO1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tbm8taWNvbi1wYWRkaW5nLXZlcnRpY2FsOiBAcGFkZGluZy1tZCAtIDFweDtcbkBhbGVydC13aXRoLWRlc2NyaXB0aW9uLXBhZGRpbmctdmVydGljYWw6IEBwYWRkaW5nLW1kIC0gMXB4O1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tcGFkZGluZzogQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tcGFkZGluZy12ZXJ0aWNhbCAxNXB4XG4gIEBhbGVydC13aXRoLWRlc2NyaXB0aW9uLW5vLWljb24tcGFkZGluZy12ZXJ0aWNhbCBAYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1pY29uLXNpemU7XG5AYWxlcnQtaWNvbi10b3A6IDhweCArIEBmb250LXNpemUtYmFzZSAqIChAbGluZS1oZWlnaHQtYmFzZSAvIDIpIC0gKEBmb250LXNpemUtYmFzZSAvIDIpO1xuQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24taWNvbi1zaXplOiAyNHB4O1xuXG4vLyBMaXN0XG4vLyAtLS1cbkBsaXN0LWhlYWRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbkBsaXN0LWZvb3Rlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbkBsaXN0LWVtcHR5LXRleHQtcGFkZGluZzogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLXBhZGRpbmc6IEBwYWRkaW5nLXNtIDA7XG5AbGlzdC1pdGVtLXBhZGRpbmctc206IEBwYWRkaW5nLXhzIEBwYWRkaW5nLW1kO1xuQGxpc3QtaXRlbS1wYWRkaW5nLWxnOiAxNnB4IDI0cHg7XG5AbGlzdC1pdGVtLW1ldGEtbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLW1ldGEtYXZhdGFyLW1hcmdpbi1yaWdodDogQHBhZGRpbmctbWQ7XG5AbGlzdC1pdGVtLW1ldGEtdGl0bGUtbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctc207XG5AbGlzdC1jdXN0b21pemUtY2FyZC1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQGxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuXG4vLyBTdGF0aXN0aWNcbi8vIC0tLVxuQHN0YXRpc3RpYy10aXRsZS1mb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbkBzdGF0aXN0aWMtY29udGVudC1mb250LXNpemU6IDI0cHg7XG5Ac3RhdGlzdGljLXVuaXQtZm9udC1zaXplOiAyNHB4O1xuQHN0YXRpc3RpYy1mb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuXG4vLyBEcmF3ZXJcbi8vIC0tLVxuQGRyYXdlci1oZWFkZXItcGFkZGluZzogQHBhZGRpbmctbWQgQHBhZGRpbmctbGc7XG5AZHJhd2VyLWJvZHktcGFkZGluZzogQHBhZGRpbmctbGc7XG5AZHJhd2VyLWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AZHJhd2VyLWZvb3Rlci1wYWRkaW5nLXZlcnRpY2FsOiBAbW9kYWwtZm9vdGVyLXBhZGRpbmctdmVydGljYWw7XG5AZHJhd2VyLWZvb3Rlci1wYWRkaW5nLWhvcml6b250YWw6IEBtb2RhbC1mb290ZXItcGFkZGluZy1ob3Jpem9udGFsO1xuQGRyYXdlci1oZWFkZXItY2xvc2Utc2l6ZTogNTZweDtcbkBkcmF3ZXItdGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQGRyYXdlci10aXRsZS1saW5lLWhlaWdodDogMjJweDtcblxuLy8gVGltZWxpbmVcbi8vIC0tLVxuQHRpbWVsaW5lLXdpZHRoOiAycHg7XG5AdGltZWxpbmUtY29sb3I6IEBib3JkZXItY29sb3Itc3BsaXQ7XG5AdGltZWxpbmUtZG90LWJvcmRlci13aWR0aDogMnB4O1xuQHRpbWVsaW5lLWRvdC1jb2xvcjogQHByaW1hcnktY29sb3I7XG5AdGltZWxpbmUtZG90LWJnOiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AdGltZWxpbmUtaXRlbS1wYWRkaW5nLWJvdHRvbTogMjBweDtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLS0tXG5AdHlwb2dyYXBoeS10aXRsZS1mb250LXdlaWdodDogNjAwO1xuQHR5cG9ncmFwaHktdGl0bGUtbWFyZ2luLXRvcDogMS4yZW07XG5AdHlwb2dyYXBoeS10aXRsZS1tYXJnaW4tYm90dG9tOiAwLjVlbTtcblxuLy8gVXBsb2FkXG4vLyAtLS1cbkB1cGxvYWQtYWN0aW9ucy1jb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuXG4vLyBTdGVwc1xuLy8gLS0tXG5AcHJvY2Vzcy10YWlsLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuQHN0ZXBzLW5hdi1hcnJvdy1jb2xvcjogZmFkZShAYmxhY2ssIDI1JSk7XG5Ac3RlcHMtYmFja2dyb3VuZDogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQHN0ZXBzLWljb24tc2l6ZTogMzJweDtcbkBzdGVwcy1pY29uLWN1c3RvbS1zaXplOiBAc3RlcHMtaWNvbi1zaXplO1xuQHN0ZXBzLWljb24tY3VzdG9tLXRvcDogMHB4O1xuQHN0ZXBzLWljb24tY3VzdG9tLWZvbnQtc2l6ZTogMjRweDtcbkBzdGVwcy1pY29uLXRvcDogLTAuNXB4O1xuQHN0ZXBzLWljb24tZm9udC1zaXplOiBAZm9udC1zaXplLWxnO1xuQHN0ZXBzLWljb24tbWFyZ2luOiAwIDhweCAwIDA7XG5Ac3RlcHMtdGl0bGUtbGluZS1oZWlnaHQ6IEBoZWlnaHQtYmFzZTtcbkBzdGVwcy1zbWFsbC1pY29uLXNpemU6IDI0cHg7XG5Ac3RlcHMtc21hbGwtaWNvbi1tYXJnaW46IDAgOHB4IDAgMDtcbkBzdGVwcy1kb3Qtc2l6ZTogOHB4O1xuQHN0ZXBzLWRvdC10b3A6IDJweDtcbkBzdGVwcy1jdXJyZW50LWRvdC1zaXplOiAxMHB4O1xuQHN0ZXBzLWRlc2NyaXB0aW9uLW1heC13aWR0aDogMTQwcHg7XG5Ac3RlcHMtbmF2LWNvbnRlbnQtbWF4LXdpZHRoOiBhdXRvO1xuQHN0ZXBzLXZlcnRpY2FsLWljb24td2lkdGg6IDE2cHg7XG5Ac3RlcHMtdmVydGljYWwtdGFpbC13aWR0aDogMTZweDtcbkBzdGVwcy12ZXJ0aWNhbC10YWlsLXdpZHRoLXNtOiAxMnB4O1xuXG4vLyBOb3RpZmljYXRpb25cbi8vIC0tLVxuQG5vdGlmaWNhdGlvbi1iZzogQGNvbXBvbmVudC1iYWNrZ3JvdW5kO1xuQG5vdGlmaWNhdGlvbi1wYWRkaW5nLXZlcnRpY2FsOiAxNnB4O1xuQG5vdGlmaWNhdGlvbi1wYWRkaW5nLWhvcml6b250YWw6IDI0cHg7XG5cbi8vIFJlc3VsdFxuLy8gLS0tXG5AcmVzdWx0LXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcbkByZXN1bHQtc3VidGl0bGUtZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG5AcmVzdWx0LWljb24tZm9udC1zaXplOiA3MnB4O1xuQHJlc3VsdC1leHRyYS1tYXJnaW46IDI0cHggMCAwIDA7XG5cbi8vIEltYWdlXG4vLyAtLS1cbkBpbWFnZS1zaXplLWJhc2U6IDQ4cHg7XG5AaW1hZ2UtZm9udC1zaXplLWJhc2U6IDI0cHg7XG5AaW1hZ2UtYmc6ICNmNWY1ZjU7XG5AaW1hZ2UtY29sb3I6ICNmZmY7XG5AaW1hZ2UtbWFzay1mb250LXNpemU6IDE2cHg7XG5AaW1hZ2UtcHJldmlldy1vcGVyYXRpb24tc2l6ZTogMThweDtcbkBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1jb2xvcjogQHRleHQtY29sb3ItZGFyaztcbkBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1kaXNhYmxlZC1jb2xvcjogZmFkZShAaW1hZ2UtcHJldmlldy1vcGVyYXRpb24tY29sb3IsIDI1JSk7XG5cbi8vIFNlZ21lbnRlZFxuLy8gLS0tXG5Ac2VnbWVudGVkLWJnOiBmYWRlKEBibGFjaywgNCUpO1xuQHNlZ21lbnRlZC1ob3Zlci1iZzogZmFkZShAYmxhY2ssIDYlKTtcbkBzZWdtZW50ZWQtc2VsZWN0ZWQtYmc6IEB3aGl0ZTtcbkBzZWdtZW50ZWQtbGFiZWwtY29sb3I6IGZhZGUoQGJsYWNrLCA2NSUpO1xuQHNlZ21lbnRlZC1sYWJlbC1ob3Zlci1jb2xvcjogIzI2MjYyNjtcbiIsIi8qISBtaW5pcmVzZXQuY3NzIHYwLjAuNiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxcbmJvZHksXG5wLFxub2wsXG51bCxcbmxpLFxuZGwsXG5kdCxcbmRkLFxuYmxvY2txdW90ZSxcbmZpZ3VyZSxcbmZpZWxkc2V0LFxubGVnZW5kLFxudGV4dGFyZWEsXG5wcmUsXG5pZnJhbWUsXG5ocixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxudGQ6bm90KFthbGlnbl0pLFxudGg6bm90KFthbGlnbl0pIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkByZXNpemFibGUtcHJlZml4LWNsczogfiduei1yZXNpemFibGUnO1xuXG4uQHtyZXNpemFibGUtcHJlZml4LWNsc30ge1xuICAmLXByZXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDFkMWQxO1xuICB9XG4gICYtaGFuZGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogOTtcbiAgICAmLXRvcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTVweDtcbiAgICB9XG4gICAgJi1ib3R0b20ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBib3R0b206IC01cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmLWxlZnQge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAtNXB4O1xuICAgIH1cbiAgICAmLXRvcFJpZ2h0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgJi1ib3R0b21SaWdodCB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgICYtYm90dG9tTGVmdCB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgJi10b3BMZWZ0IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgbGVmdDogLTVweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KC5Ae3Jlc2l6YWJsZS1wcmVmaXgtY2xzfS1yZXNpemluZykge1xuICAgIC5Ae3Jlc2l6YWJsZS1wcmVmaXgtY2xzfS1oYW5kbGUge1xuICAgICAgJi10b3AsICYtYm90dG9tIHtcbiAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XG4gICAgICB9XG4gICAgICAmLXJpZ2h0LCAmLWxlZnQge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgICAgIH1cbiAgICAgICYtYm90dG9tUmlnaHQsICYtdG9wTGVmdCB7XG4gICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XG4gICAgICB9XG4gICAgICAmLWJvdHRvbUxlZnQsICYtdG9wUmlnaHQge1xuICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgJi1kaXNhYmxlZCB7XG4gICAgLkB7cmVzaXphYmxlLXByZWZpeC1jbHN9IHtcbiAgICAgICYtaGFuZGxlIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIkBpbXBvcnQgXCIuLi9taW5pcmVzZXQubGVzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvcmVzaXphYmxlL3N0eWxlL2VudHJ5Lmxlc3NcIjtcclxuXHJcbkBsYXlvdXQtaGVhZGVyLWhlaWdodDogNDhweDtcclxuQGxheW91dC1oZWFkZXItcGFkZGluZzogMDtcclxuQG1lbnUtY29sbGFwc2VkLXdpZHRoOiA0OHB4O1xyXG5AbGF5b3V0LXRyaWdnZXItaGVpZ2h0OiA0MHB4O1xyXG4vLyDlpoLmnpzlrZjlnKjmiYDmnInkuLvpopjpgJrnlKjnmoTmoLflvI/lj5jph48s5Z+65pys5qC35byP5paH5Lu25bm25Zyo5q+P5Liq5Li76aKY5qC35byP5a6a5Yi25paH5Lu25Lit5byV5YWl5a6D77yaXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuICAvLyBtaW4td2lkdGg6IDU3MHB4O1xyXG59XHJcblxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbmF1ZGlvLCB2aWRlbyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGV4dC13cmFwIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi50ZXh0LWJyZWFrIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGxcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZnVsbC13aXRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWluLXNjcmVlbi1mdWxsLWhlaWdodCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcmVlbi1mdWxsLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2NyZWVuLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLy5lbGxpcHNpcyB7XHJcbi8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgd29yZC13cmFwOiBub3JtYWw7XHJcbi8vfVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiAnLic7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbG9yLXdlYWsge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDgwJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi53cmFwIHtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcblxyXG4udGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5wdWxsLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFic29sdXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50LTAge1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC0wIHtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iLTAge1xyXG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uci0wIHtcclxuICByaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1oLTEwMCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm0tci01IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTgge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMTUge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTIwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tci0yMyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXItMjUge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTMwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLTEwIHtcclxuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubS1iLTQge1xyXG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTgge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTEwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWItMjAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tYi0yNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1iLTMwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC01IHtcclxuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tLWwtMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtODAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWwtMjAwIHtcclxuICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0wIHtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtOCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0xNSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS10LTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMjUge1xyXG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tdC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm0tbC0xOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0yMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC0yNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tbC01MCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLTAge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtOCB7XHJcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTE2IHtcclxuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ucC0yNCB7XHJcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10LTgge1xyXG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0xMiB7XHJcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0xNiB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdC0yNCB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLWwtMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtOCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wLWwtMTAge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1sLTE2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtbC0yNCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtMjUge1xyXG4gIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnAtbC0zNSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWwtNTUge1xyXG4gIHBhZGRpbmctbGVmdDogNTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTgge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTEwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXItMTYge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtci0yNCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLWItOCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTEyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTE2IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTI0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1iLTUwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTEge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTIge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTQge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTYge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMTgge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3AtMjgge1xyXG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYW5pbWF0ZS1iZy0wIHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLTAyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmFuaW1hdGUtMDMge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbi5jbGVhci1maXg6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLmRlZmF1bHQtdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5uaWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcclxufVxyXG5cclxuLmQtaS1iIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaGFuZC1tb2RlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGFuZC1tb2RlbC1tb3ZlIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi50ZXh0LWVycm9yIHtcclxuICBjb2xvcjogI2Y1MjIyZCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5ncmV5LWNvbG9yIHtcclxuICBjb2xvcjogI2Q5ZDlkOTtcclxufVxyXG5cclxuLmhvdmVyLWJsdWUge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MDllZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uaG92ZXItcmVkIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjUyMjJkO1xyXG4gIH1cclxufVxyXG5cclxuLm9wZXJhdGUtdGV4dCB7XHJcbiAgLmhhbmQtbW9kZWw7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItcm93IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNlbnRlci1mbihAY29sOmNlbnRlcixAcm93OmNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBAY29sO1xyXG4gIGFsaWduLWl0ZW1zOiBAcm93O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5jZW50ZXItZm4oKVxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtY29sb3VtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC0xIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZmxleC1hdXRvIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uZW5kLXN0YXJ0LWNlbnRlciB7XHJcbiAgLmNlbnRlci1mbihmbGV4LWVuZClcclxufVxyXG5cclxuLmxlZnQtc3RhcnQtY2VudGVyIHtcclxuICAuY2VudGVyLWZuKGZsZXgtc3RhcnQpXHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAuY2VudGVyLWZuKHNwYWNlLWJldHdlZW4pXHJcbn1cclxuXHJcbi5zcGFjZS1hcm91bmQge1xyXG4gIC5jZW50ZXItZm4oc3BhY2UtYXJvdW5kKVxyXG59XHJcblxyXG5cclxuLmJnLWNvbG9yLW5vIHtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi8vIOmAmueUqOmhtemdoue7n+S4gOW4g+WxgFxyXG4ubm9ybWFsLXRhYmxlLXdyYXAge1xyXG4gIG1hcmdpbjogMjdweCAyN3B4IDA7XHJcblxyXG4gIC8q5YiX6KGo6aG26YOo5qC35byPKi9cclxuXHJcbiAgLmFudC1wcm8tdGFibGUtdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuYW50LXByby10YWJsZS10b29sYmFyLXRpdGxlIHtcclxuICAgICAgZmxleDogMSAxO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICBvcGFjaXR5OiAuODU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1wcm8tdGFibGUtdG9vbGJhci1vcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtcHJvLXRhYmxlLXRvb2xiYXItZGVmYXVsdC1vcHRpb24ge1xyXG4gICAgICAuYW50LXNwYWNlLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6KGo5Y2V5qC35byPXHJcbiAgLmZvcm0td3JhcCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8q6KaG55uWem9ycm/moLflvI8qL1xyXG5cclxuLy8g5a+56K+d5qGG5aKe5Yqg5rua5Yqo5p2hXHJcbi5hbnQtbW9kYWwtYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5hbnQtbW9kYWwtY2xvc2UteCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBsaW5lLWhlaWdodDogNTZweFxyXG59XHJcblxyXG4uZnVsbHNjcmVlbi1tb2RhbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmFudC1tb2RhbCB7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLmFudC1tb2RhbC1ib2R5IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCAtIDUzcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW50LW1lbnUtaW5saW5lLCAuYW50LW1lbnUtdmVydGljYWwsIC5hbnQtbWVudS12ZXJ0aWNhbC1sZWZ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbm56LWRhdGUtcGlja2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbbnotaW5wdXRdIHtcclxuICAuYW5pbWF0ZS1iZy0wO1xyXG59XHJcblxyXG4vL1xyXG4vLy5vdmVyZmxvdy1kb3RzIHtcclxuLy8gIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3NyYy9zdHlsZS90aGVtZXMvdmFyaWFibGUubGVzcyc7XG5AaW1wb3J0ICcuL2Jhc2UnO1xuXG5cbkBsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBtZW51LWRhcmstYmc6ICMwMDE1Mjk7XG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQ6IEBtZW51LWRhcmstYmc7XG4ub3BlcmF0ZS10ZXh0IHtcbiAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xufVxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4iLCJAaW1wb3J0IChtdWx0aXBsZSkgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3NyYy9zdHlsZS90aGVtZXMvZGFyayc7XG5AaW1wb3J0ICcuL2Jhc2UnO1xuXG5AbGF5b3V0LXNpZGVyLWJhY2tncm91bmQtbGlnaHQ6IEBjb21wb25lbnQtYmFja2dyb3VuZDtcbkBsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kLWxpZ2h0OiBAY29tcG9uZW50LWJhY2tncm91bmQ7XG5AbWVudS1pdGVtLXZlcnRpY2FsLW1hcmdpbjogMDtcbi5vcGVyYXRlLXRleHQge1xuICBjb2xvcjogQHByaW1hcnktY29sb3I7XG59XG4uYW50LW1lbnUtaG9yaXpvbnRhbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lbnUtZGFyay1iZzpAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kO1xuQG1lbnUtYmc6QGxheW91dC1oZWFkZXItYmFja2dyb3VuZDtcbkBsYXlvdXQtc2lkZXItYmFja2dyb3VuZC1saWdodDpAbWVudS1iZztcblxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyrmu5rliqjmnaHmlbTkvZPmoLflvI8qL1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogIzI2Mzg0ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IC8q5rua5Yqo5p2h6YeM6Z2i5bCP5pa55Z2XKi9cbiAgYmFja2dyb3VuZDogIzUzNjE2RSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8q5a6a5LmJ5rua5Yqo5p2h6L2o6YGTIOWGhemYtOW9sSvlnIbop5IqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyrlrprkuYnmu5HlnZcg5YaF6Zi05b2xK+WchuinkiovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 30097:
/*!*****************************************************!*\
  !*** ./src/app/layout/default/tab/tab.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabComponent": () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/destory.service */ 88176);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common/tab.service */ 99651);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var _store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/common-store/split-nav-store.service */ 3574);
/* harmony import */ var _store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/common-store/theme.service */ 29576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directives_mouse_hover_show_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/mouse-hover-show.directive */ 35616);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);




















function TabComponent_nz_card_0_nz_tab_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function TabComponent_nz_card_0_nz_tab_2_Template_nz_tab_nzClick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const tab_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.goPage(tab_r4));
    })("nzContextmenu", function TabComponent_nz_card_0_nz_tab_2_Template_nz_tab_nzContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.contextMenu($event, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nz-dropdown-menu", null, 6)(3, "ul", 7)(4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_nz_card_0_nz_tab_2_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "L\u00E0m t\u01B0\u01A1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_nz_card_0_nz_tab_2_Template_li_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.closeTab(tab_r4, $event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u0110\u00F3ng tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_nz_card_0_nz_tab_2_Template_li_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.closeOtherTab(tab_r4, $event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u0110\u00F3ng c\u00E1c tab kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_nz_card_0_nz_tab_2_Template_li_click_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.closeRithTab(tab_r4, $event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u0110\u00F3ng tab b\u00EAn ph\u1EA3i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_nz_card_0_nz_tab_2_Template_li_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.closeLeftTab(tab_r4, $event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "D\u00F3ng tab b\u00EAn tr\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTitle", tab_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r3.router.url !== tab_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r3.tabsSourceData.length - 1 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r3.tabsSourceData.length - 1 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r3.tabsSourceData.length - 1 === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", i_r5 === 0);
  }
}

const _c0 = function () {
  return {
    padding: 0
  };
};

const _c1 = function () {
  return {
    height: "35px"
  };
};

function TabComponent_nz_card_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-card", 2)(1, "nz-tabset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClose", function TabComponent_nz_card_0_Template_nz_tabset_nzClose_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.clickCloseIcon($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TabComponent_nz_card_0_nz_tab_2_Template, 14, 6, "nz-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0))("nzBordered", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzSelectedIndex", ctx_r0.currentIndex)("nzTabBarStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1))("nzTabPosition", "top")("nzType", "editable-card")("nzHideAdd", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 9, ctx_r0.tabsSourceData$))("ngForTrackBy", ctx_r0.trackByTab);
  }
}

function TabComponent_ng_template_2_nz_tab_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_ng_template_1_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.clickCloseIcon({
        index: i_r19
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const tab_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tab_r18.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", "close");
  }
}

function TabComponent_ng_template_2_nz_tab_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzClick", function TabComponent_ng_template_2_nz_tab_11_Template_nz_tab_nzClick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const tab_r18 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.goPage(tab_r18));
    })("nzContextmenu", function TabComponent_ng_template_2_nz_tab_11_Template_nz_tab_nzContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);

      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.contextMenu($event, _r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TabComponent_ng_template_2_nz_tab_11_ng_template_1_Template, 3, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 6)(5, "ul", 7)(6, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "L\u00E0m t\u01B0\u01A1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_Template_li_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const tab_r18 = restoredCtx.$implicit;
      const i_r19 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.closeTab(tab_r18, $event, i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u0110\u00F3ng tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_Template_li_click_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const tab_r18 = restoredCtx.$implicit;
      const i_r19 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.closeOtherTab(tab_r18, $event, i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u0110\u00F3ng c\u00E1c tab kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_Template_li_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const tab_r18 = restoredCtx.$implicit;
      const i_r19 = restoredCtx.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.closeRithTab(tab_r18, $event, i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u0110\u00F3ng tab b\u00EAn ph\u1EA3i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TabComponent_ng_template_2_nz_tab_11_Template_li_click_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const tab_r18 = restoredCtx.$implicit;
      const i_r19 = restoredCtx.index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.closeLeftTab(tab_r18, $event, i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u0110\u00F3ng tab b\u00EAn tr\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const tab_r18 = ctx.$implicit;
    const i_r19 = ctx.index;

    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTitle", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r17.router.url !== tab_r18.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r17.tabsSourceData.length - 1 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r17.tabsSourceData.length - 1 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", ctx_r17.tabsSourceData.length - 1 === i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", i_r19 === 0);
  }
}

const _c2 = function (a0, a1) {
  return {
    "fixed-collapsed": a0,
    "fixed-over-mode": a1
  };
};

const _c3 = function (a0, a1) {
  return {
    top: a0,
    left: a1
  };
};

function TabComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nz-tabset", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TabComponent_ng_template_2_nz_tab_11_Template, 16, 6, "nz-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](29, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 9, ctx_r2.isCollapsed$), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 11, ctx_r2.isOverMode$) || !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 13, ctx_r2.themesOptions$).hasNavArea || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 15, ctx_r2.themesOptions$)) == null ? null : tmp_0_0.mode) === "top" || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 17, ctx_r2.themesOptions$)) == null ? null : tmp_0_0.mode) === "mixi" && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 19, ctx_r2.leftMenuArray$) === null && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 21, ctx_r2.themesOptions$)) == null ? null : tmp_0_0.splitNav)))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](32, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 23, ctx_r2.themesOptions$).hasTopArea ? "48px" : "0", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 25, ctx_r2.themesOptions$).hasNavArea ? "0" : ""))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](35, _c0))("nzBordered", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAnimated", false)("nzSelectedIndex", ctx_r2.currentIndex)("nzTabPosition", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 27, ctx_r2.tabsSourceData$))("ngForTrackBy", ctx_r2.trackByTab);
  }
}

class TabComponent {
  constructor(tabService, nzContextMenuService, splitNavStoreService, themesService, destroy$, router, cdr) {
    this.tabService = tabService;
    this.nzContextMenuService = nzContextMenuService;
    this.splitNavStoreService = splitNavStoreService;
    this.themesService = themesService;
    this.destroy$ = destroy$;
    this.router = router;
    this.cdr = cdr;
    this.tabsSourceData = [];
    this.tabsSourceData$ = this.tabService.getTabArray$();
    this.themesOptions$ = this.themesService.getThemesMode();
    this.isNightTheme$ = this.themesService.getIsNightTheme();
    this.leftMenuArray$ = this.splitNavStoreService.getSplitLeftNavArrayStore();
    this.isOverMode$ = this.themesService.getIsOverMode();
    this.isOverMode = false;
    this.isCollapsed$ = this.themesService.getIsCollapsed();
    this.isCollapsed = false;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(event => {
      this.cdr.markForCheck();
    });
  }

  get currentIndex() {
    return this.tabService.getCurrentTabIndex();
  }

  trackByTab(index, tab) {
    return tab.title;
  } // 点击tab跳转到对应的path


  goPage(tab) {
    this.router.navigateByUrl(tab.path);
  } // 右键点击关闭右侧tab


  closeRithTab(tab, e, index) {
    (0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnStopMouseEvent)(e);
    this.tabService.delRightTab(tab.path, index);
  } // 右键点击关闭左侧tab


  closeLeftTab(tab, e, index) {
    if (index === 0) {
      return;
    }

    (0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnStopMouseEvent)(e);
    this.tabService.delLeftTab(tab.path, index);
  } // 关闭其他tab


  closeOtherTab(tab, e, index) {
    (0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnStopMouseEvent)(e);
    this.tabService.delOtharTab(tab.path, index);
  } // 右键关闭当前Tab


  closeTab(tab, e, index) {
    (0,_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnStopMouseEvent)(e);
    this.closeCurrentTab(tab, index);
  } // 点击tab上的关闭icon


  clickCloseIcon(indexObj) {
    this.closeCurrentTab(this.tabsSourceData[indexObj.index], indexObj.index);
  } // 关闭当前Tab


  closeCurrentTab(tab, index) {
    if (this.tabsSourceData.length === 1) {
      return;
    }

    this.tabService.delTab(tab, index);
  }

  refresh() {
    this.tabService.refresh();
  }

  contextMenu($event, menu) {
    this.nzContextMenuService.create($event, menu);
  }

  closeMenu() {
    this.nzContextMenuService.close();
  }

  ngOnInit() {
    this.tabsSourceData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(res => {
      this.tabsSourceData = res;
    });
  }

}

TabComponent.ɵfac = function TabComponent_Factory(t) {
  return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_tab_service__WEBPACK_IMPORTED_MODULE_2__.TabService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_common_store_split_nav_store_service__WEBPACK_IMPORTED_MODULE_3__.SplitNavStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_common_store_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

TabComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TabComponent,
  selectors: [["app-tab"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_core_services_common_destory_service__WEBPACK_IMPORTED_MODULE_0__.DestroyService])],
  decls: 4,
  vars: 4,
  consts: [["id", "multi-tab", "class", "m-t-10", "style", "height: 35px", 3, "nzBodyStyle", "nzBordered", 4, "ngIf", "ngIfElse"], ["fixTabTpl", ""], ["id", "multi-tab", 1, "m-t-10", 2, "height", "35px", 3, "nzBodyStyle", "nzBordered"], [3, "nzSelectedIndex", "nzTabBarStyle", "nzTabPosition", "nzType", "nzHideAdd", "nzClose"], ["nzClosable", "", 3, "nzTitle", "nzClick", "nzContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzClosable", "", 3, "nzTitle", "nzClick", "nzContextmenu"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzDisabled", "click"], ["id", "multi-tab2", 1, "fixed-tab", 3, "ngClass", "ngStyle", "nzBodyStyle", "nzBordered"], [3, "nzAnimated", "nzSelectedIndex", "nzTabPosition"], ["titleTemplate", ""], ["appMouseHoverShow", "", 1, "text-center", "p-l-16", "p-r-16", "relative", "d-i-b", 2, "min-width", "60px"], ["nz-icon", "", 1, "m-0", "none", 3, "nzType", "click"]],
  template: function TabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TabComponent_nz_card_0_Template, 4, 13, "nz-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TabComponent_ng_template_2_Template, 13, 36, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx.themesOptions$)) == null ? null : tmp_0_0.fixedTab))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _shared_directives_mouse_hover_show_directive__WEBPACK_IMPORTED_MODULE_5__.MouseHoverShowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__.NzMenuItemDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzDropdownMenuComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__.NzCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["[_nghost-%COMP%]     .ant-tabs-tab {\n  transition: background-color 0s !important;\n}\n[_nghost-%COMP%]     .ant-tabs-nav {\n  transition: background-color 0s !important;\n  margin-bottom: 0!important;\n}\n.fixed-tab[_ngcontent-%COMP%] {\n  transition: width 0.2s;\n  width: calc(100% - 208px);\n  position: fixed;\n  right: 0;\n  z-index: 999;\n}\n.fixed-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 4px;\n  right: 0;\n}\n.fixed-collapsed[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n}\n.fixed-over-mode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDBDQUFBO0FBQUo7QUFGQTtFQUtJLDBDQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUtBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUhGO0FBRkE7RUFPSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUZKO0FBT0E7RUFDRSx3QkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0FBTkYiLCJmaWxlIjoidGFiLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmFudC10YWJzLXRhYiB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtdGFicy1uYXYge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xuICB9XG5cblxufVxuLmZpeGVkLXRhYntcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwOHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICBpe1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5cblxuLmZpeGVkLWNvbGxhcHNlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcbn1cblxuLmZpeGVkLW92ZXItbW9kZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 22219:
/*!***************************************************************!*\
  !*** ./src/app/layout/default/tool-bar/tool-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolBarComponent": () => (/* binding */ ToolBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = [[["ng-container", "left", ""]], [["ng-container", "right", ""]]];
const _c1 = ["ng-container[left]", "ng-container[right]"];
class ToolBarComponent {
    constructor() { }
    ngOnInit() { }
}
ToolBarComponent.ɵfac = function ToolBarComponent_Factory(t) { return new (t || ToolBarComponent)(); };
ToolBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolBarComponent, selectors: [["app-tool-bar"]], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "app-header"]], template: function ToolBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".app-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wtYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFDRiIsImZpbGUiOiJ0b29sLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 75124:
/*!***************************************************!*\
  !*** ./node_modules/driver.js/dist/driver.min.js ***!
  \***************************************************/
/***/ ((module) => {

!function (t, e) {
   true ? module.exports = e() : 0;
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var i = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
        return t[e];
      }.bind(null, i));
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/dist/", n(n.s = 57);
  }([function (t, e, n) {
    var o = n(2),
        i = n(11),
        r = n(4),
        s = n(13),
        a = n(22),
        c = function (t, e, n) {
      var u,
          l,
          h,
          f,
          p = t & c.F,
          d = t & c.G,
          v = t & c.S,
          y = t & c.P,
          g = t & c.B,
          m = d ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
          b = d ? i : i[e] || (i[e] = {}),
          w = b.prototype || (b.prototype = {});

      for (u in d && (n = e), n) h = ((l = !p && m && void 0 !== m[u]) ? m : n)[u], f = g && l ? a(h, o) : y && "function" == typeof h ? a(Function.call, h) : h, m && s(m, u, h, t & c.U), b[u] != h && r(b, u, f), y && w[u] != h && (w[u] = h);
    };

    o.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
  }, function (t, e, n) {
    var o = n(17)("wks"),
        i = n(14),
        r = n(2).Symbol,
        s = "function" == typeof r;
    (t.exports = function (t) {
      return o[t] || (o[t] = s && r[t] || (s ? r : i)("Symbol." + t));
    }).store = o;
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e, n) {
    var o = n(5),
        i = n(16);
    t.exports = n(6) ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = n(12),
        i = n(35),
        r = n(21),
        s = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function (t, e, n) {
      if (o(t), e = r(e, !0), o(n), i) try {
        return s(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    t.exports = !n(7)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var o = n(39),
        i = n(24);

    t.exports = function (t) {
      return o(i(t));
    };
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F * !n(6), "Object", {
      defineProperty: n(5).f
    });
  }, function (t, e) {
    var n = t.exports = {
      version: "2.6.9"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    var o = n(3);

    t.exports = function (t) {
      if (!o(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(2),
        i = n(4),
        r = n(8),
        s = n(14)("src"),
        a = n(59),
        c = ("" + a).split("toString");
    n(11).inspectSource = function (t) {
      return a.call(t);
    }, (t.exports = function (t, e, n, a) {
      var u = "function" == typeof n;
      u && (r(n, "name") || i(n, "name", e)), t[e] !== n && (u && (r(n, s) || i(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === o ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[s] || a.call(this);
    });
  }, function (t, e) {
    var n = 0,
        o = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
    };
  }, function (t, e, n) {
    var o = n(45),
        i = n(28);

    t.exports = Object.keys || function (t) {
      return o(t, i);
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e, n) {
    var o = n(11),
        i = n(2),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: o.version,
      mode: n(18) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e, n) {
    var o = n(24);

    t.exports = function (t) {
      return Object(o(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(2),
        i = n(8),
        r = n(6),
        s = n(0),
        a = n(13),
        c = n(62).KEY,
        u = n(7),
        l = n(17),
        h = n(26),
        f = n(14),
        p = n(1),
        d = n(43),
        v = n(44),
        y = n(63),
        g = n(42),
        m = n(12),
        b = n(3),
        w = n(19),
        x = n(9),
        S = n(21),
        O = n(16),
        k = n(30),
        P = n(67),
        E = n(49),
        N = n(47),
        j = n(5),
        L = n(15),
        T = E.f,
        C = j.f,
        _ = P.f,
        M = o.Symbol,
        H = o.JSON,
        B = H && H.stringify,
        F = p("_hidden"),
        I = p("toPrimitive"),
        R = {}.propertyIsEnumerable,
        A = l("symbol-registry"),
        z = l("symbols"),
        D = l("op-symbols"),
        V = Object.prototype,
        W = "function" == typeof M && !!N.f,
        q = o.QObject,
        G = !q || !q.prototype || !q.prototype.findChild,
        K = r && u(function () {
      return 7 != k(C({}, "a", {
        get: function () {
          return C(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var o = T(V, e);
      o && delete V[e], C(t, e, n), o && t !== V && C(V, e, o);
    } : C,
        U = function (t) {
      var e = z[t] = k(M.prototype);
      return e._k = t, e;
    },
        Y = W && "symbol" == typeof M.iterator ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      return t instanceof M;
    },
        J = function (t, e, n) {
      return t === V && J(D, e, n), m(t), e = S(e, !0), m(n), i(z, e) ? (n.enumerable ? (i(t, F) && t[F][e] && (t[F][e] = !1), n = k(n, {
        enumerable: O(0, !1)
      })) : (i(t, F) || C(t, F, O(1, {})), t[F][e] = !0), K(t, e, n)) : C(t, e, n);
    },
        X = function (t, e) {
      m(t);

      for (var n, o = y(e = x(e)), i = 0, r = o.length; r > i;) J(t, n = o[i++], e[n]);

      return t;
    },
        Q = function (t) {
      var e = R.call(this, t = S(t, !0));
      return !(this === V && i(z, t) && !i(D, t)) && (!(e || !i(this, t) || !i(z, t) || i(this, F) && this[F][t]) || e);
    },
        $ = function (t, e) {
      if (t = x(t), e = S(e, !0), t !== V || !i(z, e) || i(D, e)) {
        var n = T(t, e);
        return !n || !i(z, e) || i(t, F) && t[F][e] || (n.enumerable = !0), n;
      }
    },
        Z = function (t) {
      for (var e, n = _(x(t)), o = [], r = 0; n.length > r;) i(z, e = n[r++]) || e == F || e == c || o.push(e);

      return o;
    },
        tt = function (t) {
      for (var e, n = t === V, o = _(n ? D : x(t)), r = [], s = 0; o.length > s;) !i(z, e = o[s++]) || n && !i(V, e) || r.push(z[e]);

      return r;
    };

    W || (a((M = function () {
      if (this instanceof M) throw TypeError("Symbol is not a constructor!");

      var t = f(arguments.length > 0 ? arguments[0] : void 0),
          e = function (n) {
        this === V && e.call(D, n), i(this, F) && i(this[F], t) && (this[F][t] = !1), K(this, t, O(1, n));
      };

      return r && G && K(V, t, {
        configurable: !0,
        set: e
      }), U(t);
    }).prototype, "toString", function () {
      return this._k;
    }), E.f = $, j.f = J, n(48).f = P.f = Z, n(29).f = Q, N.f = tt, r && !n(18) && a(V, "propertyIsEnumerable", Q, !0), d.f = function (t) {
      return U(p(t));
    }), s(s.G + s.W + s.F * !W, {
      Symbol: M
    });

    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);

    for (var ot = L(p.store), it = 0; ot.length > it;) v(ot[it++]);

    s(s.S + s.F * !W, "Symbol", {
      for: function (t) {
        return i(A, t += "") ? A[t] : A[t] = M(t);
      },
      keyFor: function (t) {
        if (!Y(t)) throw TypeError(t + " is not a symbol!");

        for (var e in A) if (A[e] === t) return e;
      },
      useSetter: function () {
        G = !0;
      },
      useSimple: function () {
        G = !1;
      }
    }), s(s.S + s.F * !W, "Object", {
      create: function (t, e) {
        return void 0 === e ? k(t) : X(k(t), e);
      },
      defineProperty: J,
      defineProperties: X,
      getOwnPropertyDescriptor: $,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: tt
    });
    var rt = u(function () {
      N.f(1);
    });
    s(s.S + s.F * rt, "Object", {
      getOwnPropertySymbols: function (t) {
        return N.f(w(t));
      }
    }), H && s(s.S + s.F * (!W || u(function () {
      var t = M();
      return "[null]" != B([t]) || "{}" != B({
        a: t
      }) || "{}" != B(Object(t));
    })), "JSON", {
      stringify: function (t) {
        for (var e, n, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);

        if (n = e = o[1], (b(e) || void 0 !== t) && !Y(t)) return g(e) || (e = function (t, e) {
          if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e;
        }), o[1] = e, B.apply(H, o);
      }
    }), M.prototype[I] || n(4)(M.prototype, I, M.prototype.valueOf), h(M, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0);
  }, function (t, e, n) {
    var o = n(3);

    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      if ("function" == typeof (n = t.valueOf) && !o(i = n.call(t))) return i;
      if (!e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var o = n(37);

    t.exports = function (t, e, n) {
      if (o(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, o) {
            return t.call(e, n, o);
          };

        case 3:
          return function (n, o, i) {
            return t.call(e, n, o, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(7);

    t.exports = function (t, e) {
      return !!t && o(function () {
        e ? t.call(null, function () {}, 1) : t.call(null);
      });
    };
  }, function (t, e, n) {
    var o = n(5).f,
        i = n(8),
        r = n(1)("toStringTag");

    t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, r) && o(t, r, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var o = n(17)("keys"),
        i = n(14);

    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    var o = n(12),
        i = n(65),
        r = n(28),
        s = n(27)("IE_PROTO"),
        a = function () {},
        c = function () {
      var t,
          e = n(36)("iframe"),
          o = r.length;

      for (e.style.display = "none", n(66).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; o--;) delete c.prototype[r[o]];

      return c();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (a.prototype = o(t), n = new a(), a.prototype = null, n[s] = t) : n = c(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(68),
        i = n(69),
        r = n(32),
        s = n(9);
    t.exports = n(70)(Array, "Array", function (t, e) {
      this._t = s(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    n(44)("asyncIterator");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(38)(0),
        r = n(25)([].forEach, !0);
    o(o.P + o.F * !r, "Array", {
      forEach: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    t.exports = !n(6) && !n(7)(function () {
      return 7 != Object.defineProperty(n(36)("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(3),
        i = n(2).document,
        r = o(i) && o(i.createElement);

    t.exports = function (t) {
      return r ? i.createElement(t) : {};
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(22),
        i = n(39),
        r = n(19),
        s = n(40),
        a = n(60);

    t.exports = function (t, e) {
      var n = 1 == t,
          c = 2 == t,
          u = 3 == t,
          l = 4 == t,
          h = 6 == t,
          f = 5 == t || h,
          p = e || a;
      return function (e, a, d) {
        for (var v, y, g = r(e), m = i(g), b = o(a, d, 3), w = s(m.length), x = 0, S = n ? p(e, w) : c ? p(e, 0) : void 0; w > x; x++) if ((f || x in m) && (y = b(v = m[x], x, g), t)) if (n) S[x] = y;else if (y) switch (t) {
          case 3:
            return !0;

          case 5:
            return v;

          case 6:
            return x;

          case 2:
            S.push(v);
        } else if (l) return !1;

        return h ? -1 : u || l ? l : S;
      };
    };
  }, function (t, e, n) {
    var o = n(23);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == o(t) ? t.split("") : Object(t);
    };
  }, function (t, e, n) {
    var o = n(41),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(o(t), 9007199254740991) : 0;
    };
  }, function (t, e) {
    var n = Math.ceil,
        o = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
    };
  }, function (t, e, n) {
    var o = n(23);

    t.exports = Array.isArray || function (t) {
      return "Array" == o(t);
    };
  }, function (t, e, n) {
    e.f = n(1);
  }, function (t, e, n) {
    var o = n(2),
        i = n(11),
        r = n(18),
        s = n(43),
        a = n(5).f;

    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, {
        value: s.f(t)
      });
    };
  }, function (t, e, n) {
    var o = n(8),
        i = n(9),
        r = n(46)(!1),
        s = n(27)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          a = i(t),
          c = 0,
          u = [];

      for (n in a) n != s && o(a, n) && u.push(n);

      for (; e.length > c;) o(a, n = e[c++]) && (~r(u, n) || u.push(n));

      return u;
    };
  }, function (t, e, n) {
    var o = n(9),
        i = n(40),
        r = n(64);

    t.exports = function (t) {
      return function (e, n, s) {
        var a,
            c = o(e),
            u = i(c.length),
            l = r(s, u);

        if (t && n != n) {
          for (; u > l;) if ((a = c[l++]) != a) return !0;
        } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;

        return !t && -1;
      };
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var o = n(45),
        i = n(28).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return o(t, i);
    };
  }, function (t, e, n) {
    var o = n(29),
        i = n(16),
        r = n(9),
        s = n(21),
        a = n(8),
        c = n(35),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? u : function (t, e) {
      if (t = r(t), e = s(e, !0), c) try {
        return u(t, e);
      } catch (t) {}
      if (a(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    for (var o = n(31), i = n(15), r = n(13), s = n(2), a = n(4), c = n(32), u = n(1), l = u("iterator"), h = u("toStringTag"), f = c.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, d = i(p), v = 0; v < d.length; v++) {
      var y,
          g = d[v],
          m = p[g],
          b = s[g],
          w = b && b.prototype;
      if (w && (w[l] || a(w, l, f), w[h] || a(w, h, g), c[g] = f, m)) for (y in o) w[y] || r(w, y, o[y], !0);
    }
  }, function (t, e, n) {
    "use strict";

    var o = n(73),
        i = {};
    i[n(1)("toStringTag")] = "z", i + "" != "[object z]" && n(13)(Object.prototype, "toString", function () {
      return "[object " + o(this) + "]";
    }, !0);
  }, function (t, e, n) {
    var o = n(19),
        i = n(15);
    n(74)("keys", function () {
      return function (t) {
        return i(o(t));
      };
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(38)(2);
    o(o.P + o.F * !n(25)([].filter, !0), "Array", {
      filter: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Function", {
      bind: n(75)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      create: n(30)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      setPrototypeOf: n(81).set
    });
  }, function (t, e, n) {
    n(58), t.exports = n(82);
  }, function (t, e) {}, function (t, e, n) {
    t.exports = n(17)("native-function-to-string", Function.toString);
  }, function (t, e, n) {
    var o = n(61);

    t.exports = function (t, e) {
      return new (o(t))(e);
    };
  }, function (t, e, n) {
    var o = n(3),
        i = n(42),
        r = n(1)("species");

    t.exports = function (t) {
      var e;
      return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), o(e) && null === (e = e[r]) && (e = void 0)), void 0 === e ? Array : e;
    };
  }, function (t, e, n) {
    var o = n(14)("meta"),
        i = n(3),
        r = n(8),
        s = n(5).f,
        a = 0,
        c = Object.isExtensible || function () {
      return !0;
    },
        u = !n(7)(function () {
      return c(Object.preventExtensions({}));
    }),
        l = function (t) {
      s(t, o, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      });
    },
        h = t.exports = {
      KEY: o,
      NEED: !1,
      fastKey: function (t, e) {
        if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!r(t, o)) {
          if (!c(t)) return "F";
          if (!e) return "E";
          l(t);
        }

        return t[o].i;
      },
      getWeak: function (t, e) {
        if (!r(t, o)) {
          if (!c(t)) return !0;
          if (!e) return !1;
          l(t);
        }

        return t[o].w;
      },
      onFreeze: function (t) {
        return u && h.NEED && c(t) && !r(t, o) && l(t), t;
      }
    };
  }, function (t, e, n) {
    var o = n(15),
        i = n(47),
        r = n(29);

    t.exports = function (t) {
      var e = o(t),
          n = i.f;
      if (n) for (var s, a = n(t), c = r.f, u = 0; a.length > u;) c.call(t, s = a[u++]) && e.push(s);
      return e;
    };
  }, function (t, e, n) {
    var o = n(41),
        i = Math.max,
        r = Math.min;

    t.exports = function (t, e) {
      return (t = o(t)) < 0 ? i(t + e, 0) : r(t, e);
    };
  }, function (t, e, n) {
    var o = n(5),
        i = n(12),
        r = n(15);
    t.exports = n(6) ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, s = r(e), a = s.length, c = 0; a > c;) o.f(t, n = s[c++], e[n]);

      return t;
    };
  }, function (t, e, n) {
    var o = n(2).document;
    t.exports = o && o.documentElement;
  }, function (t, e, n) {
    var o = n(9),
        i = n(48).f,
        r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    t.exports.f = function (t) {
      return s && "[object Window]" == r.call(t) ? function (t) {
        try {
          return i(t);
        } catch (t) {
          return s.slice();
        }
      }(t) : i(o(t));
    };
  }, function (t, e, n) {
    var o = n(1)("unscopables"),
        i = Array.prototype;
    null == i[o] && n(4)(i, o, {}), t.exports = function (t) {
      i[o][t] = !0;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(18),
        i = n(0),
        r = n(13),
        s = n(4),
        a = n(32),
        c = n(71),
        u = n(26),
        l = n(72),
        h = n(1)("iterator"),
        f = !([].keys && "next" in [].keys()),
        p = function () {
      return this;
    };

    t.exports = function (t, e, n, d, v, y, g) {
      c(n, e, d);

      var m,
          b,
          w,
          x = function (t) {
        if (!f && t in P) return P[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          S = e + " Iterator",
          O = "values" == v,
          k = !1,
          P = t.prototype,
          E = P[h] || P["@@iterator"] || v && P[v],
          N = E || x(v),
          j = v ? O ? x("entries") : N : void 0,
          L = "Array" == e && P.entries || E;

      if (L && (w = l(L.call(new t()))) !== Object.prototype && w.next && (u(w, S, !0), o || "function" == typeof w[h] || s(w, h, p)), O && E && "values" !== E.name && (k = !0, N = function () {
        return E.call(this);
      }), o && !g || !f && !k && P[h] || s(P, h, N), a[e] = N, a[S] = p, v) if (m = {
        values: O ? N : x("values"),
        keys: y ? N : x("keys"),
        entries: j
      }, g) for (b in m) b in P || r(P, b, m[b]);else i(i.P + i.F * (f || k), e, m);
      return m;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(30),
        i = n(16),
        r = n(26),
        s = {};
    n(4)(s, n(1)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = o(s, {
        next: i(1, n)
      }), r(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var o = n(8),
        i = n(19),
        r = n(27)("IE_PROTO"),
        s = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), o(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  }, function (t, e, n) {
    var o = n(23),
        i = n(1)("toStringTag"),
        r = "Arguments" == o(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var e, n, s;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : r ? o(e) : "Object" == (s = o(e)) && "function" == typeof e.callee ? "Arguments" : s;
    };
  }, function (t, e, n) {
    var o = n(0),
        i = n(11),
        r = n(7);

    t.exports = function (t, e) {
      var n = (i.Object || {})[t] || Object[t],
          s = {};
      s[t] = e(n), o(o.S + o.F * r(function () {
        n(1);
      }), "Object", s);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(37),
        i = n(3),
        r = n(76),
        s = [].slice,
        a = {};

    t.exports = Function.bind || function (t) {
      var e = o(this),
          n = s.call(arguments, 1),
          c = function () {
        var o = n.concat(s.call(arguments));
        return this instanceof c ? function (t, e, n) {
          if (!(e in a)) {
            for (var o = [], i = 0; i < e; i++) o[i] = "a[" + i + "]";

            a[e] = Function("F,a", "return new F(" + o.join(",") + ")");
          }

          return a[e](t, n);
        }(e, o.length, o) : r(e, o, t);
      };

      return i(e.prototype) && (c.prototype = e.prototype), c;
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var o = void 0 === n;

      switch (e.length) {
        case 0:
          return o ? t() : t.call(n);

        case 1:
          return o ? t(e[0]) : t.call(n, e[0]);

        case 2:
          return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

        case 3:
          return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

        case 4:
          return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }

      return t.apply(n, e);
    };
  }, function (t, e, n) {
    "use strict";

    n(78)("trim", function (t) {
      return function () {
        return t(this, 3);
      };
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(24),
        r = n(7),
        s = n(79),
        a = "[" + s + "]",
        c = RegExp("^" + a + a + "*"),
        u = RegExp(a + a + "*$"),
        l = function (t, e, n) {
      var i = {},
          a = r(function () {
        return !!s[t]() || "​" != "​"[t]();
      }),
          c = i[t] = a ? e(h) : s[t];
      n && (i[n] = c), o(o.P + o.F * a, "String", i);
    },
        h = l.trim = function (t, e) {
      return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t;
    };

    t.exports = l;
  }, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(46)(!1),
        r = [].indexOf,
        s = !!r && 1 / [1].indexOf(1, -0) < 0;
    o(o.P + o.F * (s || !n(25)(r)), "Array", {
      indexOf: function (t) {
        return s ? r.apply(this, arguments) || 0 : i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    var o = n(3),
        i = n(12),
        r = function (t, e) {
      if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    };

    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
        try {
          (o = n(22)(Function.call, n(49).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
        } catch (t) {
          e = !0;
        }

        return function (t, n) {
          return r(t, n), e ? t.__proto__ = n : o(t, n), t;
        };
      }({}, !1) : void 0),
      check: r
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e);
    n(34), n(20), n(50), n(31), n(51), n(52), n(10), n(53), n(54);
    var o = .75,
        i = 10,
        r = !0,
        s = !0,
        a = !0,
        c = !1,
        u = "driver-highlighted-element-stage",
        l = '<div id="'.concat("driver-page-overlay", '"></div>'),
        h = '<div id="'.concat(u, '"></div>');
    n(33), n(77);

    function f(t) {
      return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    var p = function (t) {
      var e = document.createElement("div");
      return e.innerHTML = t.trim(), e.firstChild;
    },
        d = function t(e, n) {
      if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) {
        for (var o = ["", "-webkit-", "-ms-", "moz-", "-o-"], i = 0; i < o.length; i++) {
          var r = t(e, o[i] + n);
          if (r) return r;
        }

        return "";
      }

      var s = "";
      return e.currentStyle ? s = e.currentStyle[n] : document.defaultView && document.defaultView.getComputedStyle && (s = document.defaultView.getComputedStyle(e, null).getPropertyValue(n)), s && s.toLowerCase ? s.toLowerCase() : s;
    },
        v = function (t) {
      return t && "object" === f(t) && "nodeType" in t;
    };

    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var g = function () {
      function t(e, n, o) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.options = e, this.highlightedElement = null, this.lastHighlightedElement = null, this.hideTimer = null, this.window = n, this.document = o, this.removeNode = this.removeNode.bind(this);
      }

      var e, n, o;
      return e = t, (n = [{
        key: "attachNode",
        value: function () {
          var t = this.document.getElementById("driver-page-overlay");
          t || (t = p(l), document.body.appendChild(t)), this.node = t, this.node.style.opacity = "0", this.options.animate || this.node.parentElement && this.node.parentElement.removeChild(this.node);
        }
      }, {
        key: "highlight",
        value: function (t) {
          t && t.node ? t.isSame(this.highlightedElement) || (this.window.clearTimeout(this.hideTimer), t.onHighlightStarted(), this.highlightedElement && !this.highlightedElement.isSame(this.lastHighlightedElement) && this.highlightedElement.onDeselected(), t.getCalculatedPosition().canHighlight() && (this.lastHighlightedElement = this.highlightedElement, this.highlightedElement = t, this.show(), this.highlightedElement.onHighlighted())) : console.warn("Invalid element to highlight. Must be an instance of `Element`");
        }
      }, {
        key: "show",
        value: function () {
          var t = this;
          this.node && this.node.parentElement || (this.attachNode(), window.setTimeout(function () {
            t.node.style.opacity = "".concat(t.options.opacity), t.node.style.position = "fixed", t.node.style.left = "0", t.node.style.top = "0", t.node.style.bottom = "0", t.node.style.right = "0";
          }));
        }
      }, {
        key: "getHighlightedElement",
        value: function () {
          return this.highlightedElement;
        }
      }, {
        key: "getLastHighlightedElement",
        value: function () {
          return this.lastHighlightedElement;
        }
      }, {
        key: "clear",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

          if (this.options.onReset && this.options.onReset(this.highlightedElement), this.highlightedElement) {
            this.highlightedElement.onDeselected(!0);
          }

          this.highlightedElement = null, this.lastHighlightedElement = null, this.node && (this.window.clearTimeout(this.hideTimer), this.options.animate && !t ? (this.node.style.opacity = "0", this.hideTimer = this.window.setTimeout(this.removeNode, 300)) : this.removeNode());
        }
      }, {
        key: "removeNode",
        value: function () {
          this.node && this.node.parentElement && this.node.parentElement.removeChild(this.node);
        }
      }, {
        key: "refresh",
        value: function () {
          this.highlightedElement && (this.highlightedElement.showPopover(), this.highlightedElement.showStage());
        }
      }]) && y(e.prototype, n), o && y(e, o), t;
    }();

    n(80);

    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var b = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.left,
            o = void 0 === n ? 0 : n,
            i = e.top,
            r = void 0 === i ? 0 : i,
            s = e.right,
            a = void 0 === s ? 0 : s,
            c = e.bottom,
            u = void 0 === c ? 0 : c;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.left = o, this.right = a, this.top = r, this.bottom = u;
      }

      var e, n, o;
      return e = t, (n = [{
        key: "canHighlight",
        value: function () {
          return this.left < this.right && this.top < this.bottom;
        }
      }]) && m(e.prototype, n), o && m(e, o), t;
    }();

    function w(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var x = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.node,
            o = e.options,
            i = e.popover,
            r = e.stage,
            s = e.overlay,
            a = e.window,
            c = e.document;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.node = n, this.document = c, this.window = a, this.options = o, this.overlay = s, this.popover = i, this.stage = r, this.animationTimeout = null;
      }

      var e, n, o;
      return e = t, (n = [{
        key: "isInView",
        value: function () {
          for (var t = this.node.offsetTop, e = this.node.offsetLeft, n = this.node.offsetWidth, o = this.node.offsetHeight, i = this.node; i.offsetParent;) t += (i = i.offsetParent).offsetTop, e += i.offsetLeft;

          return t >= this.window.pageYOffset && e >= this.window.pageXOffset && t + o <= this.window.pageYOffset + this.window.innerHeight && e + n <= this.window.pageXOffset + this.window.innerWidth;
        }
      }, {
        key: "scrollManually",
        value: function () {
          var t = this.node.getBoundingClientRect().top + this.window.pageYOffset - this.window.innerHeight / 2;
          this.window.scrollTo(0, t);
        }
      }, {
        key: "bringInView",
        value: function () {
          if (this.node && !this.isInView()) if (this.node.scrollIntoView) try {
            this.node.scrollIntoView(this.options.scrollIntoViewOptions || {
              behavior: "instant",
              block: "center"
            });
          } catch (t) {
            this.scrollManually();
          } else this.scrollManually();
        }
      }, {
        key: "getCalculatedPosition",
        value: function () {
          var t = this.document.body,
              e = this.document.documentElement,
              n = this.window,
              o = this.window.pageYOffset || e.scrollTop || t.scrollTop,
              i = n.pageXOffset || e.scrollLeft || t.scrollLeft,
              r = this.node.getBoundingClientRect();
          return new b({
            top: r.top + o,
            left: r.left + i,
            right: r.left + i + r.width,
            bottom: r.top + o + r.height
          });
        }
      }, {
        key: "getPopover",
        value: function () {
          return this.popover;
        }
      }, {
        key: "onDeselected",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.hidePopover(), t && this.hideStage(), this.removeHighlightClasses(), this.window.clearTimeout(this.animationTimeout), this.options.onDeselected && this.options.onDeselected(this);
        }
      }, {
        key: "isSame",
        value: function (t) {
          return !(!t || !t.node) && t.node === this.node;
        }
      }, {
        key: "onHighlightStarted",
        value: function () {
          this.options.onHighlightStarted && this.options.onHighlightStarted(this);
        }
      }, {
        key: "onHighlighted",
        value: function () {
          this.isInView() || this.bringInView(), this.showPopover(), this.showStage(), this.addHighlightClasses(), this.options.onHighlighted && this.options.onHighlighted(this);
        }
      }, {
        key: "removeHighlightClasses",
        value: function () {
          this.node.classList.remove("driver-highlighted-element"), this.node.classList.remove("driver-position-relative");

          for (var t = this.document.querySelectorAll(".".concat("driver-fix-stacking")), e = 0; e < t.length; e++) t[e].classList.remove("driver-fix-stacking");
        }
      }, {
        key: "addHighlightClasses",
        value: function () {
          this.node.classList.add("driver-highlighted-element"), this.canMakeRelative() && this.node.classList.add("driver-position-relative"), this.fixStackingContext();
        }
      }, {
        key: "fixStackingContext",
        value: function () {
          for (var t = this.node.parentNode; t && t.tagName && "body" !== t.tagName.toLowerCase();) {
            var e = d(t, "z-index"),
                n = parseFloat(d(t, "opacity")),
                o = d(t, "transform", !0),
                i = d(t, "transform-style", !0),
                r = d(t, "transform-box", !0),
                s = d(t, "filter", !0),
                a = d(t, "perspective", !0);
            (/[0-9]+/.test(e) || n < 1 || o && "none" !== o || i && "flat" !== i || r && "border-box" !== r || s && "none" !== s || a && "none" !== a) && t.classList.add("driver-fix-stacking"), t = t.parentNode;
          }
        }
      }, {
        key: "canMakeRelative",
        value: function () {
          var t = this.getStyleProperty("position");
          return -1 === ["absolute", "fixed", "relative"].indexOf(t);
        }
      }, {
        key: "getStyleProperty",
        value: function (t) {
          return d(this.node, t);
        }
      }, {
        key: "showStage",
        value: function () {
          this.stage.show(this.getCalculatedPosition());
        }
      }, {
        key: "getNode",
        value: function () {
          return this.node;
        }
      }, {
        key: "hideStage",
        value: function () {
          this.stage.hide();
        }
      }, {
        key: "hidePopover",
        value: function () {
          this.popover && this.popover.hide();
        }
      }, {
        key: "showPopover",
        value: function () {
          var t = this;

          if (this.popover) {
            var e = this.getCalculatedPosition(),
                n = 300;
            this.options.animate && this.overlay.lastHighlightedElement || (n = 0), this.animationTimeout = this.window.setTimeout(function () {
              t.popover.show(e);
            }, n);
          }
        }
      }, {
        key: "getFullPageSize",
        value: function () {
          var t = this.document.body,
              e = this.document.documentElement;
          return {
            height: Math.max(t.scrollHeight, t.offsetHeight, e.scrollHeight, e.offsetHeight),
            width: Math.max(t.scrollWidth, t.offsetWidth, e.scrollWidth, e.offsetWidth)
          };
        }
      }, {
        key: "getSize",
        value: function () {
          return {
            height: Math.max(this.node.scrollHeight, this.node.offsetHeight),
            width: Math.max(this.node.scrollWidth, this.node.offsetWidth)
          };
        }
      }]) && w(e.prototype, n), o && w(e, o), t;
    }();

    n(55), n(56);

    function S(t) {
      return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function O(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function k(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function P(t, e) {
      return !e || "object" !== S(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function E(t) {
      return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function N(t, e) {
      return (N = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var j = function (t) {
      function e(t, n, o) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (i = P(this, E(e).call(this))).options = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                o = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            }))), o.forEach(function (e) {
              O(t, e, n[e]);
            });
          }

          return t;
        }({
          isFirst: !0,
          isLast: !0,
          totalCount: 1,
          currentIndex: 0,
          offset: 0,
          showButtons: !0,
          closeBtnText: "Close",
          doneBtnText: "Done",
          startBtnText: "Next &rarr;",
          nextBtnText: "Next &rarr;",
          prevBtnText: "&larr; Previous"
        }, t), i.window = n, i.document = o, i;
      }

      var n, o, i;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && N(t, e);
      }(e, x), n = e, (o = [{
        key: "attachNode",
        value: function () {
          var t = this.document.getElementById("driver-popover-item");
          t && t.parentElement.removeChild(t), t = p(function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return '\n  <div id="'.concat("driver-popover-item", '" class="').concat(t, '">\n    <div class="').concat("driver-popover-tip", '"></div>\n    <div class="').concat("driver-popover-title", '">Popover Title</div>\n    <div class="').concat("driver-popover-description", '">Popover Description</div>\n    <div class="driver-clearfix ').concat("driver-popover-footer", '">\n      <button class="').concat("driver-close-btn", '">Close</button>\n      <span class="driver-btn-group ').concat("driver-navigation-btns", '">\n        <button class="').concat("driver-prev-btn", '">&larr; Previous</button>\n        <button class="').concat("driver-next-btn", '">Next &rarr;</button>\n      </span>\n    </div>\n  </div>');
          }(this.options.className)), document.body.appendChild(t), this.node = t, this.tipNode = t.querySelector(".".concat("driver-popover-tip")), this.titleNode = t.querySelector(".".concat("driver-popover-title")), this.descriptionNode = t.querySelector(".".concat("driver-popover-description")), this.footerNode = t.querySelector(".".concat("driver-popover-footer")), this.nextBtnNode = t.querySelector(".".concat("driver-next-btn")), this.prevBtnNode = t.querySelector(".".concat("driver-prev-btn")), this.closeBtnNode = t.querySelector(".".concat("driver-close-btn"));
        }
      }, {
        key: "getTitleNode",
        value: function () {
          return this.titleNode;
        }
      }, {
        key: "getDescriptionNode",
        value: function () {
          return this.descriptionNode;
        }
      }, {
        key: "hide",
        value: function () {
          this.node && (this.node.style.display = "none");
        }
      }, {
        key: "setInitialState",
        value: function () {
          this.node.style.display = "block", this.node.style.left = "0", this.node.style.top = "0", this.node.style.bottom = "", this.node.style.right = "", this.node.querySelector(".".concat("driver-popover-tip")).className = "driver-popover-tip";
        }
      }, {
        key: "show",
        value: function (t) {
          switch (this.attachNode(), this.setInitialState(), this.titleNode.innerHTML = this.options.title, this.descriptionNode.innerHTML = this.options.description || "", this.renderFooter(), this.options.position) {
            case "left":
            case "left-top":
              this.positionOnLeft(t);
              break;

            case "left-center":
              this.positionOnLeftCenter(t);
              break;

            case "left-bottom":
              this.positionOnLeftBottom(t);
              break;

            case "right":
            case "right-top":
              this.positionOnRight(t);
              break;

            case "right-center":
              this.positionOnRightCenter(t);
              break;

            case "right-bottom":
              this.positionOnRightBottom(t);
              break;

            case "top":
            case "top-left":
              this.positionOnTop(t);
              break;

            case "top-center":
              this.positionOnTopCenter(t);
              break;

            case "top-right":
              this.positionOnTopRight(t);
              break;

            case "bottom":
            case "bottom-left":
              this.positionOnBottom(t);
              break;

            case "bottom-center":
              this.positionOnBottomCenter(t);
              break;

            case "bottom-right":
              this.positionOnBottomRight(t);
              break;

            case "mid-center":
              this.positionOnMidCenter(t);
              break;

            case "auto":
            default:
              this.autoPosition(t);
          }

          this.bringInView();
        }
      }, {
        key: "renderFooter",
        value: function () {
          this.nextBtnNode.innerHTML = this.options.nextBtnText, this.prevBtnNode.innerHTML = this.options.prevBtnText, this.closeBtnNode.innerHTML = this.options.closeBtnText;
          var t = this.options.totalCount && 1 !== this.options.totalCount;
          this.options.showButtons ? (t ? (this.nextBtnNode.style.display = "inline-block", this.prevBtnNode.style.display = "inline-block", this.closeBtnNode.classList.remove("driver-close-only-btn")) : (this.nextBtnNode.style.display = "none", this.prevBtnNode.style.display = "none", this.closeBtnNode.classList.add("driver-close-only-btn")), this.footerNode.style.display = "block", this.options.isFirst ? (this.prevBtnNode.classList.add("driver-disabled"), this.nextBtnNode.innerHTML = this.options.startBtnText) : this.prevBtnNode.classList.remove("driver-disabled"), this.options.isLast ? this.nextBtnNode.innerHTML = this.options.doneBtnText : this.nextBtnNode.innerHTML = this.options.nextBtnText) : this.footerNode.style.display = "none";
        }
      }, {
        key: "positionOnLeft",
        value: function (t) {
          var e = this.getSize().width,
              n = this.options.padding + 10;
          this.node.style.left = "".concat(t.left - e - n, "px"), this.node.style.top = "".concat(t.top + this.options.offset - this.options.padding, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("right");
        }
      }, {
        key: "positionOnLeftBottom",
        value: function (t) {
          var e = this.getSize(),
              n = e.width,
              o = this.options.padding + 10;
          this.node.style.left = "".concat(t.left - n - o, "px"), this.node.style.top = "".concat(t.bottom + this.options.padding + this.options.offset - e.height, "px"), this.node.style.bottom = "", this.node.style.right = "", this.tipNode.classList.add("right", "position-bottom");
        }
      }, {
        key: "positionOnLeftCenter",
        value: function (t) {
          var e = this.getSize(),
              n = e.width,
              o = e.height / 2,
              i = this.options.padding + 10,
              r = (t.bottom - t.top) / 2,
              s = t.top - o + r + this.options.offset;
          this.node.style.left = "".concat(t.left - n - i, "px"), this.node.style.top = "".concat(s, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("right", "position-center");
        }
      }, {
        key: "positionOnRight",
        value: function (t) {
          var e = this.options.padding + 10;
          this.node.style.left = "".concat(t.right + e, "px"), this.node.style.top = "".concat(t.top + this.options.offset - this.options.padding, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("left");
        }
      }, {
        key: "positionOnRightCenter",
        value: function (t) {
          var e = this.getSize(),
              n = this.options.padding + 10,
              o = e.height / 2,
              i = (t.bottom - t.top) / 2,
              r = t.top - o + i + this.options.offset;
          this.node.style.left = "".concat(t.right + n, "px"), this.node.style.top = "".concat(r, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("left", "position-center");
        }
      }, {
        key: "positionOnRightBottom",
        value: function (t) {
          var e = this.options.padding + 10,
              n = this.getSize();
          this.node.style.left = "".concat(t.right + e, "px"), this.node.style.top = "".concat(t.bottom + this.options.padding + this.options.offset - n.height, "px"), this.node.style.bottom = "", this.node.style.right = "", this.tipNode.classList.add("left", "position-bottom");
        }
      }, {
        key: "positionOnTop",
        value: function (t) {
          var e = this.getSize().height,
              n = this.options.padding + 10;
          this.node.style.top = "".concat(t.top - e - n, "px"), this.node.style.left = "".concat(t.left - this.options.padding + this.options.offset, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("bottom");
        }
      }, {
        key: "positionOnTopCenter",
        value: function (t) {
          var e = this.getSize(),
              n = e.height,
              o = e.width / 2,
              i = this.options.padding + 10,
              r = this.options.offset + t.left + (t.right - t.left) / 2;
          this.node.style.top = "".concat(t.top - n - i, "px"), this.node.style.left = "".concat(r - o - this.options.padding, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("bottom", "position-center");
        }
      }, {
        key: "positionOnTopRight",
        value: function (t) {
          var e = this.getSize(),
              n = e.height,
              o = this.options.padding + 10;
          this.node.style.top = "".concat(t.top - n - o, "px"), this.node.style.left = "".concat(t.right + this.options.padding + this.options.offset - e.width, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("bottom", "position-right");
        }
      }, {
        key: "positionOnBottom",
        value: function (t) {
          var e = this.options.padding + 10;
          this.node.style.top = "".concat(t.bottom + e, "px"), this.node.style.left = "".concat(t.left - this.options.padding + this.options.offset, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("top");
        }
      }, {
        key: "positionOnBottomCenter",
        value: function (t) {
          var e = this.getSize().width / 2,
              n = this.options.padding + 10,
              o = this.options.offset + t.left + (t.right - t.left) / 2;
          this.node.style.top = "".concat(t.bottom + n, "px"), this.node.style.left = "".concat(o - e - this.options.padding, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("top", "position-center");
        }
      }, {
        key: "positionOnBottomRight",
        value: function (t) {
          var e = this.getSize(),
              n = this.options.padding + 10;
          this.node.style.top = "".concat(t.bottom + n, "px"), this.node.style.left = "".concat(t.right + this.options.padding + this.options.offset - e.width, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("top", "position-right");
        }
      }, {
        key: "positionOnMidCenter",
        value: function (t) {
          var e = this.getSize(),
              n = e.height,
              o = e.width / 2,
              i = n / 2,
              r = (t.bottom - t.top) / 2,
              s = t.top - i + r + this.options.offset,
              a = this.options.offset + t.left + (t.right - t.left) / 2;
          this.node.style.top = "".concat(s, "px"), this.node.style.left = "".concat(a - o - this.options.padding, "px"), this.node.style.right = "", this.node.style.bottom = "", this.tipNode.classList.add("mid-center");
        }
      }, {
        key: "autoPosition",
        value: function (t) {
          var e = this.getFullPageSize(),
              n = this.getSize(),
              o = e.height,
              i = n.height,
              r = this.options.padding + 10;
          t.bottom + i + r >= o ? this.positionOnTop(t) : this.positionOnBottom(t);
        }
      }]) && k(n.prototype, o), i && k(n, i), e;
    }();

    function L(t) {
      return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function T(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function C(t, e) {
      return !e || "object" !== L(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function _(t) {
      return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function M(t, e) {
      return (M = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var H = function (t) {
      function e(t, n, o) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (i = C(this, _(e).call(this))).options = t, i.window = n, i.document = o, i;
      }

      var n, o, i;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && M(t, e);
      }(e, x), n = e, (o = [{
        key: "attachNode",
        value: function () {
          var t = this.document.getElementById(u);
          t || (t = p(h), document.body.appendChild(t)), this.node = t, this.options.animate ? this.node.classList.remove("driver-stage-no-animation") : this.node.classList.add("driver-stage-no-animation");
        }
      }, {
        key: "hide",
        value: function () {
          this.node && this.node.parentElement && this.node.parentElement.removeChild(this.node);
        }
      }, {
        key: "setInitialStyle",
        value: function () {
          this.node.style.display = "block", this.node.style.left = "0", this.node.style.top = "0", this.node.style.bottom = "", this.node.style.right = "";
        }
      }, {
        key: "show",
        value: function (t) {
          this.attachNode(), this.setInitialStyle();
          var e = 2 * this.options.padding,
              n = t.right - t.left + e,
              o = t.bottom - t.top + e;
          this.node.style.display = "block", this.node.style.position = "absolute", this.node.style.width = "".concat(n, "px"), this.node.style.height = "".concat(o, "px"), this.node.style.top = "".concat(t.top - e / 2, "px"), this.node.style.left = "".concat(t.left - e / 2, "px"), this.node.style.backgroundColor = this.options.stageBackground;
        }
      }]) && T(n.prototype, o), i && T(n, i), e;
    }();

    function B(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), o.forEach(function (e) {
          F(t, e, n[e]);
        });
      }

      return t;
    }

    function F(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function I(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    n.d(e, "default", function () {
      return R;
    });

    var R = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.options = B({
          animate: r,
          opacity: o,
          padding: i,
          scrollIntoViewOptions: null,
          allowClose: s,
          keyboardControl: a,
          overlayClickNext: c,
          stageBackground: "#ffffff",
          onHighlightStarted: function () {
            return null;
          },
          onHighlighted: function () {
            return null;
          },
          onDeselected: function () {
            return null;
          },
          onReset: function () {
            return null;
          },
          onNext: function () {
            return null;
          },
          onPrevious: function () {
            return null;
          }
        }, e), this.document = document, this.window = window, this.isActivated = !1, this.steps = [], this.currentStep = 0, this.currentMovePrevented = !1, this.overlay = new g(this.options, window, document), this.onResize = this.onResize.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.onClick = this.onClick.bind(this), this.moveNext = this.moveNext.bind(this), this.movePrevious = this.movePrevious.bind(this), this.preventMove = this.preventMove.bind(this), this.bind();
      }

      var e, n, u;
      return e = t, (n = [{
        key: "getSteps",
        value: function () {
          return this.steps;
        }
      }, {
        key: "setSteps",
        value: function (t) {
          this.steps = t;
        }
      }, {
        key: "bind",
        value: function () {
          this.window.addEventListener("resize", this.onResize, !1), this.window.addEventListener("keyup", this.onKeyUp, !1), "ontouchstart" in document.documentElement ? this.window.addEventListener("touchstart", this.onClick, !1) : this.window.addEventListener("click", this.onClick, !1);
        }
      }, {
        key: "onClick",
        value: function (t) {
          if (this.isActivated && this.hasHighlightedElement()) {
            t.stopPropagation();
            var e = this.overlay.getHighlightedElement(),
                n = this.document.getElementById("driver-popover-item"),
                o = e.node.contains(t.target),
                i = n && n.contains(t.target);
            if (o || i || !this.options.overlayClickNext) {
              if (o || i || !this.options.allowClose) {
                var r = t.target.classList.contains("driver-next-btn"),
                    s = t.target.classList.contains("driver-prev-btn");
                t.target.classList.contains("driver-close-btn") ? this.reset() : r ? this.handleNext() : s && this.handlePrevious();
              } else this.reset();
            } else this.handleNext();
          }
        }
      }, {
        key: "onResize",
        value: function () {
          this.isActivated && this.refresh();
        }
      }, {
        key: "refresh",
        value: function () {
          this.overlay.refresh();
        }
      }, {
        key: "onKeyUp",
        value: function (t) {
          if (this.isActivated && this.options.keyboardControl) if (27 !== t.keyCode) {
            var e = this.getHighlightedElement();
            e && e.popover && (39 === t.keyCode ? this.handleNext() : 37 === t.keyCode && this.handlePrevious());
          } else this.reset();
        }
      }, {
        key: "movePrevious",
        value: function () {
          var t = this.steps[this.currentStep - 1];
          t ? (this.overlay.highlight(t), this.currentStep -= 1) : this.reset();
        }
      }, {
        key: "preventMove",
        value: function () {
          this.currentMovePrevented = !0;
        }
      }, {
        key: "handleNext",
        value: function () {
          this.currentMovePrevented = !1;
          var t = this.steps[this.currentStep];
          t && t.options && t.options.onNext && t.options.onNext(this.overlay.highlightedElement), this.currentMovePrevented || this.moveNext();
        }
      }, {
        key: "handlePrevious",
        value: function () {
          this.currentMovePrevented = !1;
          var t = this.steps[this.currentStep];
          t && t.options && t.options.onPrevious && t.options.onPrevious(this.overlay.highlightedElement), this.currentMovePrevented || this.movePrevious();
        }
      }, {
        key: "moveNext",
        value: function () {
          var t = this.steps[this.currentStep + 1];
          t ? (this.overlay.highlight(t), this.currentStep += 1) : this.reset();
        }
      }, {
        key: "hasNextStep",
        value: function () {
          return !!this.steps[this.currentStep + 1];
        }
      }, {
        key: "hasPreviousStep",
        value: function () {
          return !!this.steps[this.currentStep - 1];
        }
      }, {
        key: "reset",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.currentStep = 0, this.isActivated = !1, this.overlay.clear(t);
        }
      }, {
        key: "hasHighlightedElement",
        value: function () {
          var t = this.overlay.getHighlightedElement();
          return t && t.node;
        }
      }, {
        key: "getHighlightedElement",
        value: function () {
          return this.overlay.getHighlightedElement();
        }
      }, {
        key: "getLastHighlightedElement",
        value: function () {
          return this.overlay.getLastHighlightedElement();
        }
      }, {
        key: "defineSteps",
        value: function (t) {
          this.steps = [];

          for (var e = 0; e < t.length; e++) {
            var n = this.prepareElementFromStep(t[e], t, e);
            n && this.steps.push(n);
          }
        }
      }, {
        key: "prepareElementFromStep",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = B({}, this.options),
              i = t,
              r = "string" != typeof t && !v(t);
          if (!t || r && !t.element) throw new Error("Element is required in step ".concat(n));
          r && (i = t.element, o = B({}, this.options, t));
          var s = v(i) ? i : this.document.querySelector(i);
          if (!s) return console.warn("Element to highlight ".concat(i, " not found")), null;
          var a = null;

          if (o.popover && o.popover.title) {
            var c = [this.options.className, o.popover.className].filter(function (t) {
              return t;
            }).join(" "),
                u = B({}, o, o.popover, {
              className: c,
              totalCount: e.length,
              currentIndex: n,
              isFirst: 0 === n,
              isLast: 0 === e.length || n === e.length - 1
            });
            a = new j(u, this.window, this.document);
          }

          var l = B({}, o),
              h = new H(l, this.window, this.document);
          return new x({
            node: s,
            options: o,
            popover: a,
            stage: h,
            overlay: this.overlay,
            window: this.window,
            document: this.document
          });
        }
      }, {
        key: "start",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (!this.steps || 0 === this.steps.length) throw new Error("There are no steps defined to iterate");
          this.isActivated = !0, this.currentStep = t, this.overlay.highlight(this.steps[t]);
        }
      }, {
        key: "highlight",
        value: function (t) {
          this.isActivated = !0;
          var e = this.prepareElementFromStep(t);
          e && this.overlay.highlight(e);
        }
      }]) && I(e.prototype, n), u && I(e, u), t;
    }();
  }]).default;
});

/***/ })

}]);
//# sourceMappingURL=src_app_layout_default_default_module_ts.js.map