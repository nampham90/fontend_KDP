"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_login_register-form_register-form_module_ts"],{

/***/ 79902:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login/register-form/register-form-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormRoutingModule": () => (/* binding */ RegisterFormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _register_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-form.component */ 37406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', data: { key: 'register-form', shouldDetach: 'no' }, component: _register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent }];
class RegisterFormRoutingModule {
}
RegisterFormRoutingModule.ɵfac = function RegisterFormRoutingModule_Factory(t) { return new (t || RegisterFormRoutingModule)(); };
RegisterFormRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterFormRoutingModule });
RegisterFormRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterFormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 37406:
/*!**********************************************************************!*\
  !*** ./src/app/pages/login/register-form/register-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponent": () => (/* binding */ RegisterFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);











const _c0 = function () { return { standalone: true }; };
function RegisterFormComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "84")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class RegisterFormComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    // checkPassword: [null, [Validators.required, this.confirmationValidator]],
    /*  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return {required: true};
        } else if (control.value !== this.validateForm.controls.password.value) {
          return {confirm: true, error: true};
        }
        return {};
      };*/
    submitForm() {
        this.router.navigateByUrl('main');
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        const param = this.validateForm.getRawValue();
        /* this.dataService.login(param).subscribe((res) => {
           this.router.navigateByUrl('hazard');
         });*/
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            remember: [null]
        });
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RegisterFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], decls: 35, vars: 15, consts: [[1, "register-form-wrap"], [1, "title"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp \u0111\u1ECBa ch\u1EC9 Email \uFF01"], [3, "nzSize"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "Email"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp m\u1EADt kh\u1EA9u !"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "M\u1EADt kh\u1EA9u \u00EDt nh\u1EA5t 6 ch\u1EEF s\u1ED1, ph\u00E2n bi\u1EC7t ch\u1EEF hoa v\u00E0 ch\u1EEF th\u01B0\u1EDDng"], ["nzErrorTip", "Vui l\u00F2ng x\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n !"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i !"], [3, "nzAddOnBefore", "nzSize"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"], ["addOnBeforeTemplate", ""], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", "", "nzErrorTip", "vui l\u00F2ng nh\u1EADp m\u00E3 x\u00E1c nh\u1EADn !", 1, "flex-1", 2, "max-width", "65%", 3, "nzXs", "nzSm"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "m\u00E3 x\u00E1c nh\u1EADn"], ["nz-button", "", "nz-col", "", "nzType", "default", 1, "p-0", 3, "nzXs", "nzSm", "nzSize"], ["nz-row", "", "nzAlign", "middle", "nzJustify", "space-between", 1, "login-form-margin"], ["nz-col", "", 3, "nzSpan"], ["nz-button", "", "nzSize", "large", 1, "login-form-button", "login-form-margin", 3, "nzType"], ["nz-col", "", 1, "text-right", 3, "nzSpan"], ["routerLink", "/login/login-form", 1, "password-login"], [3, "ngModel", "ngModelOptions"], ["nzLabel", "+84", "nzValue", "84"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0110\u0103ng k\u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterFormComponent_Template_form_ngSubmit_3_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item")(5, "nz-form-control", 3)(6, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-control", 6)(10, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-control", 8)(14, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-item")(17, "nz-form-control", 10)(18, "nz-input-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterFormComponent_ng_template_20_Template, 2, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-item", 14)(23, "nz-form-control", 15)(24, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "L\u1EA5y m\u00E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0110\u0103ng K\u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21)(33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0110\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnBefore", _r0)("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 15)("nzSm", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzSm", 8)("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 9);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".register-form-wrap[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto;\n  padding: 40px;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n@media screen and (max-width: 375px) {\n  .register-form-wrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.register-form-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: bold;\n}\n.register-form-wrap[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUFBO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7QUFYQTtFQVVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjtBQWpCQTtFQWlCSSxXQUFBO0FBR0oiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1mb3JtLXdyYXAge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 62343:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login/register-form/register-form.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormModule": () => (/* binding */ RegisterFormModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _register_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-form-routing.module */ 79902);
/* harmony import */ var _register_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-form.component */ 37406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class RegisterFormModule {
}
RegisterFormModule.ɵfac = function RegisterFormModule_Factory(t) { return new (t || RegisterFormModule)(); };
RegisterFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RegisterFormModule });
RegisterFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _register_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterFormRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterFormModule, { declarations: [_register_form_component__WEBPACK_IMPORTED_MODULE_2__.RegisterFormComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _register_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterFormRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_register-form_register-form_module_ts.js.map