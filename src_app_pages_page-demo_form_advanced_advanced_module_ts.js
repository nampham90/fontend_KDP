"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_form_advanced_advanced_module_ts"],{

/***/ 88104:
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/advanced-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedRoutingModule": () => (/* binding */ AdvancedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _advanced_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced.component */ 12459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _advanced_component__WEBPACK_IMPORTED_MODULE_0__.AdvancedComponent, data: { title: 'Biểu mẫu nâng cao', key: 'advanced-form' } }];
class AdvancedRoutingModule {
}
AdvancedRoutingModule.ɵfac = function AdvancedRoutingModule_Factory(t) { return new (t || AdvancedRoutingModule)(); };
AdvancedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdvancedRoutingModule });
AdvancedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvancedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 12459:
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/advanced.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedComponent": () => (/* binding */ AdvancedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _shared_components_footer_submit_footer_submit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/footer-submit/footer-submit.component */ 42017);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var _warehouse_manage_form_warehouse_manage_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse-manage-form/warehouse-manage-form.component */ 63297);
/* harmony import */ var _task_manage_form_task_manage_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-manage-form/task-manage-form.component */ 97034);
/* harmony import */ var _user_member_manage_user_member_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-member-manage/user-member-manage.component */ 72221);
















const _c0 = ["warehouseManageComponent"];
const _c1 = ["taskManageComponent"];
// 自定义表单
/*https://juejin.cn/post/6844904018922176520*/
class AdvancedComponent {
    constructor(fb, message) {
        this.fb = fb;
        this.message = message;
        this.pageHeaderInfo = {
            title: '高级表单',
            desc: '高级表单常见于一次性输入和提交大批量数据的场景。(演示自定义表单)',
            breadcrumb: ['首页', '表单页', '高级表单']
        };
    }
    submit() {
        // @ts-ignore
        if (!(0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnCheckForm)(this.validateForm) | this.warehouseManageComponent.checkForm() | this.taskManageComponent.checkForm()) {
            return;
        }
        this.message.info('控制台打印出了表单数据');
        console.log(this.validateForm.value);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            warehouseManage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            taskManage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        });
    }
}
AdvancedComponent.ɵfac = function AdvancedComponent_Factory(t) { return new (t || AdvancedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__.NzMessageService)); };
AdvancedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AdvancedComponent, selectors: [["app-advanced"]], viewQuery: function AdvancedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.warehouseManageComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.taskManageComponent = _t.first);
    } }, decls: 17, vars: 5, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap", "bg-color-no", "p-b-50"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], ["nzTitle", "\u4ED3\u5E93\u7BA1\u7406", 1, "m-b-20", 3, "nzBordered"], ["formControlName", "warehouseManage"], ["warehouseManageComponent", ""], ["nzTitle", "\u4EFB\u52A1\u7BA1\u7406", 1, "m-b-20", 3, "nzBordered"], ["formControlName", "taskManage"], ["taskManageComponent", ""], ["nzTitle", "\u6210\u5458\u7BA1\u7406", 3, "nzBordered"], ["nz-button", "", "nzType", "primary", 1, "right", 3, "click"]], template: function AdvancedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "form", 2)(3, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-water-mark")(5, "app-warehouse-manage-form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "nz-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-water-mark")(9, "app-task-manage-form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "nz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-water-mark")(13, "app-user-member-manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-footer-submit")(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdvancedComponent_Template_button_click_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\u63D0\u4EA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzBordered", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzBordered", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzBordered", false);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_components_footer_submit_footer_submit_component__WEBPACK_IMPORTED_MODULE_1__.FooterSubmitComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_3__.WaterMarkComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _warehouse_manage_form_warehouse_manage_form_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseManageFormComponent, _task_manage_form_task_manage_form_component__WEBPACK_IMPORTED_MODULE_5__.TaskManageFormComponent, _user_member_manage_user_member_manage_component__WEBPACK_IMPORTED_MODULE_6__.UserMemberManageComponent], styles: [".save[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJhZHZhbmNlZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 5901:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/advanced.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedModule": () => (/* binding */ AdvancedModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _advanced_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-routing.module */ 88104);
/* harmony import */ var _advanced_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced.component */ 12459);
/* harmony import */ var _task_manage_form_task_manage_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-manage-form/task-manage-form.component */ 97034);
/* harmony import */ var _user_member_manage_user_member_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-member-manage/user-member-manage.component */ 72221);
/* harmony import */ var _warehouse_manage_form_warehouse_manage_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-manage-form/warehouse-manage-form.component */ 63297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);







class AdvancedModule {
}
AdvancedModule.ɵfac = function AdvancedModule_Factory(t) { return new (t || AdvancedModule)(); };
AdvancedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdvancedModule });
AdvancedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _advanced_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvancedRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdvancedModule, { declarations: [_advanced_component__WEBPACK_IMPORTED_MODULE_2__.AdvancedComponent, _warehouse_manage_form_warehouse_manage_form_component__WEBPACK_IMPORTED_MODULE_5__.WarehouseManageFormComponent, _task_manage_form_task_manage_form_component__WEBPACK_IMPORTED_MODULE_3__.TaskManageFormComponent, _user_member_manage_user_member_manage_component__WEBPACK_IMPORTED_MODULE_4__.UserMemberManageComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _advanced_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvancedRoutingModule] }); })();


/***/ }),

/***/ 97034:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/task-manage-form/task-manage-form.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskManageFormComponent": () => (/* binding */ TaskManageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);










function TaskManageFormComponent_ng_template_32_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](control_r2.errors.message);
} }
function TaskManageFormComponent_ng_template_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u5FC5\u586B\u9879");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function TaskManageFormComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TaskManageFormComponent_ng_template_32_ng_container_0_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskManageFormComponent_ng_template_32_ng_container_1_Template, 2, 0, "ng-container", 18);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r2.hasError("message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
} }
const EXE_COUNTER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => TaskManageFormComponent)
};
class TaskManageFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    initForm() {
        this.validateForm = this.fb.group({
            taskName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            taskDesc: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            executor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            responsible: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            effectiveTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            taskType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    checkForm() {
        // 用下面方式让formArray每一项置脏（如果有formArray的话，这里只是做个示例）
        /* ((this.validateForm.get('fontImgArray') as FormArray).controls).forEach(item => {
           fnCheckForm(item as FormGroup);
         })*/
        return !(0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnCheckForm)(this.validateForm);
    }
    ngOnInit() {
        this.initForm();
        this.validateForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(res => {
            this.onChange(res);
        });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) { }
    writeValue(obj) {
        if (obj) {
            this.validateForm.patchValue(obj);
        }
    }
}
TaskManageFormComponent.ɵfac = function TaskManageFormComponent_Factory(t) { return new (t || TaskManageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
TaskManageFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskManageFormComponent, selectors: [["app-task-manage-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EXE_COUNTER_VALUE_ACCESSOR])], decls: 34, vars: 73, consts: [[3, "formGroup"], ["nz-row", ""], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzRequired", "", "nzSpan", "24", "nzFor", "taskName"], [3, "nzXl", "nzXXl", "nzLg", "nzMd", "nzSm", "nzErrorTip"], ["nz-input", "", "formControlName", "taskName", "id", "taskName"], ["nzRequired", "", "nzSpan", "24", "nzFor", "taskDesc"], ["nz-input", "", "formControlName", "taskDesc", "id", "taskDesc"], ["nzSpan", "24", "nzRequired", "", "nzFor", "executor"], ["nz-input", "", "formControlName", "executor", "id", "executor"], ["nzRequired", "", "nzSpan", "24", "nzFor", "responsible"], ["nz-input", "", "formControlName", "responsible", "id", "responsible"], ["nzRequired", "", "nzSpan", "24", "nzFor", "effectiveTime"], [3, "nzLg", "nzXl", "nzXXl", "nzMd", "nzSm", "nzErrorTip"], ["nz-input", "", "formControlName", "effectiveTime", "id", "effectiveTime"], ["nzSpan", "24", "nzRequired", "", "nzFor", "taskType"], ["nz-input", "", "formControlName", "taskType", "id", "taskType"], ["combineTpl", ""], [4, "ngIf"]], template: function TaskManageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-form-item", 2)(3, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u4EFB\u52A1\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-item", 2)(8, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u4EFB\u52A1\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item", 2)(13, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u6267\u884C\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item", 2)(18, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u8D23\u4EFB\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-item", 2)(23, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u751F\u6548\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-item", 2)(28, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u4EFB\u52A1\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TaskManageFormComponent_ng_template_32_Template, 2, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 24)("nzXXl", 24)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLg", 18)("nzXl", 18)("nzXXl", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 24)("nzXXl", 24)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stbWFuYWdlLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoidGFzay1tYW5hZ2UtZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtZm9ybS1pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 72221:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/user-member-manage/user-member-manage.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMemberManageComponent": () => (/* binding */ UserMemberManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 16697);










function UserMemberManageComponent_tr_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMemberManageComponent_tr_13_ng_container_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.startEdit(data_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
function UserMemberManageComponent_tr_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserMemberManageComponent_tr_13_ng_template_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.editCache[data_r2.id].data.name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td")(3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserMemberManageComponent_tr_13_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.editCache[data_r2.id].data.age = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td")(5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserMemberManageComponent_tr_13_ng_template_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.editCache[data_r2.id].data.address = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMemberManageComponent_tr_13_ng_template_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.saveEdit(data_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function UserMemberManageComponent_tr_13_ng_template_2_Template_a_nzOnConfirm_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.cancelEdit(data_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.address);
} }
function UserMemberManageComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserMemberManageComponent_tr_13_ng_container_1_Template, 10, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserMemberManageComponent_tr_13_ng_template_2_Template, 11, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editCache[data_r2.id].edit)("ngIfElse", _r4);
} }
class UserMemberManageComponent {
    constructor() {
        // 表格
        this.editCache = {};
        this.listOfData = [];
    }
    startEdit(id) {
        this.editCache[id].edit = true;
    }
    cancelEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: { ...this.listOfData[index] },
            edit: false
        };
    }
    saveEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
    }
    updateEditCache() {
        this.listOfData.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: { ...item }
            };
        });
    }
    ngOnInit() {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                id: `${i}`,
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`
            });
        }
        this.listOfData = data;
        this.updateEditCache();
    }
}
UserMemberManageComponent.ɵfac = function UserMemberManageComponent_Factory(t) { return new (t || UserMemberManageComponent)(); };
UserMemberManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMemberManageComponent, selectors: [["app-user-member-manage"]], decls: 17, vars: 3, consts: [[3, "nzFrontPagination", "nzData"], ["editRowTable", ""], ["nzWidth", "25%"], ["nzWidth", "15%"], ["nzWidth", "40%"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "dashed", 1, "add-button", "with-full"], ["nz-icon", "", "nzType", "plus"], [4, "ngIf", "ngIfElse"], ["editTemplate", ""], [3, "click"], ["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "save", 3, "click"], ["nz-popconfirm", "", "nzTitle", "Sure to cancel?", 3, "nzOnConfirm"]], template: function UserMemberManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1)(2, "thead")(3, "tr")(4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6210\u5458\u59D3\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5DE5\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u6240\u5C5E\u90E8\u95E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserMemberManageComponent_tr_13_Template, 4, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u65B0\u589E\u6210\u5458\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__.NzPopconfirmDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lbWJlci1tYW5hZ2UuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 63297:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/page-demo/form/advanced/warehouse-manage-form/warehouse-manage-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseManageFormComponent": () => (/* binding */ WarehouseManageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);










function WarehouseManageFormComponent_ng_template_32_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](control_r2.errors.message);
} }
function WarehouseManageFormComponent_ng_template_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u5FC5\u586B\u9879");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function WarehouseManageFormComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WarehouseManageFormComponent_ng_template_32_ng_container_0_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WarehouseManageFormComponent_ng_template_32_ng_container_1_Template, 2, 0, "ng-container", 18);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r2.hasError("message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
} }
const EXE_COUNTER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => WarehouseManageFormComponent)
};
class WarehouseManageFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    initForm() {
        this.validateForm = this.fb.group({
            warehouseName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            warehouseDomainName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            warehouseManager: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            approver: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            effectiveTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            warehouseType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    ngOnInit() {
        this.initForm();
        this.validateForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(res => {
            this.onChange(res);
        });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    checkForm() {
        // 用下面方式让formArray每一项置脏（如果有formArray的话，这里只是做个示例）
        /* ((this.validateForm.get('fontImgArray') as FormArray).controls).forEach(item => {
           fnCheckForm(item as FormGroup);
         })*/
        return !(0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnCheckForm)(this.validateForm);
    }
    setDisabledState(isDisabled) { }
    writeValue(obj) {
        if (obj) {
            this.validateForm.patchValue(obj);
        }
    }
}
WarehouseManageFormComponent.ɵfac = function WarehouseManageFormComponent_Factory(t) { return new (t || WarehouseManageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
WarehouseManageFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehouseManageFormComponent, selectors: [["app-warehouse-manage-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EXE_COUNTER_VALUE_ACCESSOR])], decls: 34, vars: 73, consts: [[3, "formGroup"], ["nz-row", ""], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], ["nzRequired", "", "nzSpan", "24", "nzFor", "warehouseName"], [3, "nzXl", "nzXXl", "nzLg", "nzMd", "nzSm", "nzErrorTip"], ["nz-input", "", "formControlName", "warehouseName", "id", "warehouseName"], ["nzRequired", "", "nzSpan", "24", "nzFor", "warehouseDomainName"], ["nz-input", "", "formControlName", "warehouseDomainName", "id", "warehouseDomainName"], ["nzRequired", "", "nzSpan", "24", "nzRequired", "", "nzFor", "warehouseManager"], ["nz-input", "", "formControlName", "warehouseManager", "id", "warehouseManager"], ["nzRequired", "", "nzSpan", "24", "nzFor", "approver"], ["nz-input", "", "formControlName", "approver", "id", "approver"], ["nzRequired", "", "nzSpan", "24", "nzFor", "effectiveTime"], [3, "nzLg", "nzXl", "nzXXl", "nzMd", "nzSm", "nzErrorTip"], ["nz-input", "", "formControlName", "effectiveTime", "id", "effectiveTime"], ["nzSpan", "24", "nzRequired", "", "nzFor", "warehouseType"], ["nz-input", "", "formControlName", "warehouseType", "id", "warehouseType"], ["combineTpl", ""], [4, "ngIf"]], template: function WarehouseManageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-form-item", 2)(3, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u4ED3\u5E93\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-item", 2)(8, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u4ED3\u5E93\u57DF\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item", 2)(13, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u4ED3\u5E93\u7BA1\u7406\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item", 2)(18, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u5BA1\u6279\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-item", 2)(23, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u751F\u6548\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-item", 2)(28, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u4ED3\u5E93\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, WarehouseManageFormComponent_ng_template_32_Template, 2, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 24)("nzXXl", 24)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 18)("nzXXl", 18)("nzLg", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 12)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLg", 18)("nzXl", 18)("nzXXl", 18)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXXl", 8)("nzXl", 8)("nzLg", 8)("nzMd", 24)("nzSm", 24)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzXl", 24)("nzXXl", 24)("nzLg", 24)("nzMd", 24)("nzSm", 24)("nzErrorTip", _r0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS1tYW5hZ2UtZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ3YXJlaG91c2UtbWFuYWdlLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWZvcm0taXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_form_advanced_advanced_module_ts.js.map