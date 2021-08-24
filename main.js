(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Web_to_Mobile_Cordova\Move_here\UI\src\main.ts */"zUnb");


/***/ }),

/***/ "1JWp":
/*!**********************************************************************************!*\
  !*** ./src/app/component/profile-contact-edit/profile-contact-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContactEditComponent", function() { return ProfileContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ProfileContactEditComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactEditComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showPassword = !ctx_r4.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactEditComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactEditComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showPassword = !ctx_r6.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactEditComponent_i_35_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactEditComponent_i_35_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showPasswordAgain = !ctx_r8.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactEditComponent_i_36_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactEditComponent_i_36_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showPasswordAgain = !ctx_r10.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileContactEditComponent {
    constructor(router, sessionService, modelService, messageService) {
        this.router = router;
        this.sessionService = sessionService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.phoneAgain = '';
        this.emailAgain = '';
        this.passwordAgain = '';
        this.isPressed = false;
        this.showPassword = false;
        this.showPasswordAgain = false;
        this.model = Object.assign({}, this.sessionService.activeProfile.contact);
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phoneControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.cellular),
            phoneAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.phoneAgain),
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.email),
            emailAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.emailAgain),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password),
            passwordAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.passwordAgain),
        });
    }
    saveClick() {
        this.isPressed = true;
        const errorList = [];
        if (!this.checkControl('phoneControl', 'phoneAgainControl')) {
            errorList.push('Phones must be equal');
        }
        if (!this.checkControl('emailControl', 'emailAgainControl')) {
            errorList.push('Emails must be equal');
        }
        if (!this.checkControl('passwordControl', 'passwordAgainControl')) {
            errorList.push('Passwords must be equal');
        }
        if (errorList.length > 0) {
            const message = { severity: 'error', summary: 'Error', detail: errorList[0] };
            this.messageService.add(message);
            this.isPressed = false;
            return;
        }
        this.modelService.saveProfileContact(this.model).subscribe((model) => {
            this.isPressed = false;
            this.sessionService.activeProfile = model;
            this.router.navigate(['profile']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    get passwordType() {
        return this.showPassword ? 'text' : 'password';
    }
    get passwordAgainType() {
        return this.showPasswordAgain ? 'text' : 'password';
    }
    checkControl(name1, name2) {
        const control1 = this.modelForm.get(name1);
        const control2 = this.modelForm.get(name2);
        return control1 && control2 && control1.value === control2.value ? true : false;
    }
}
ProfileContactEditComponent.ɵfac = function ProfileContactEditComponent_Factory(t) { return new (t || ProfileContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
ProfileContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContactEditComponent, selectors: [["app-profile-contact-edit"]], decls: 46, vars: 17, consts: [[1, "p-fluid", "main-container", "p-col-12"], [1, "header"], ["src", "assets/images/settings.png"], [1, "center-container", "header-text"], [3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "phoneInput", "formControlName", "phoneControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "phoneInput"], [1, "center-container", "standard-indent"], ["id", "phoneAgainInput", "formControlName", "phoneAgainControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "phoneAgainInput"], ["id", "emailInput", "formControlName", "emailControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "emailInput"], ["id", "emailAgainInput", "formControlName", "emailAgainControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "emailAgainInput"], [1, "p-float-label", "p-input-icon-right"], ["class", "pi pi-eye", 3, "click", 4, "ngIf"], ["class", "pi pi-eye-slash", 3, "click", 4, "ngIf"], ["id", "password", "formControlName", "passwordControl", "maxlength", "100", "pInputText", "", 1, "small-input-container", 3, "type", "ngModel", "ngModelChange"], ["for", "password"], ["id", "passwordAgain", "formControlName", "passwordAgainControl", "maxlength", "100", "pInputText", "", 1, "small-input-container", 3, "type", "ngModel", "ngModelChange"], ["for", "passwordAgain"], [1, "center-container", 2, "margin-top", "15px"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], ["routerLink", "/profile", 1, "white-button"], [1, "pi", "pi-eye", 3, "click"], [1, "pi", "pi-eye-slash", 3, "click"]], template: function ProfileContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profil bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.cellular = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Telefonnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.phoneAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Telefonnummer (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_18_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_23_listener($event) { return ctx.emailAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "E-Mail (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileContactEditComponent_i_28_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileContactEditComponent_i_29_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_30_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileContactEditComponent_i_35_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileContactEditComponent_i_36_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactEditComponent_Template_input_ngModelChange_37_listener($event) { return ctx.passwordAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Passwort (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactEditComponent_Template_button_click_41_listener() { return ctx.saveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.cellular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordAgainType)("ngModel", ctx.passwordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQzRCRTtFRDdCRjtJQU1JLHNCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFESjtBQ2tCRTtFRG5CQTtJQUtJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLWNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICBAaW5jbHVkZSBtZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZCB7XHJcbiAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59IiwiLy8gU21hbGwgc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXhzLW1pbjogMzYwcHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgKHBvcnRyYWl0IHZpZXcpXHJcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcclxuXHJcbi8vIFRhYmxldHMgYW5kIHNtYWxsIGRlc2t0b3BzXHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuXHJcbi8vIExhcmdlIHRhYmxldHMgYW5kIGRlc2t0b3BzXHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBMYXJnZSBkZXNrdG9wc1xyXG4kc2NyZWVuLXh4bC1taW46IDE2MDBweDtcclxuXHJcbkBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14cy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXh4bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByd2QoJHNjcmVlbikge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZlcnRpY2FsLXNjcm9sbCB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNjUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGVmZmVjdHMge1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVzZXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuQG1peGluIGllMTFvbmx5IHtcclxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-contact-edit',
                templateUrl: './profile-contact-edit.component.html',
                styleUrls: ['./profile-contact-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "1bv2":
/*!****************************************************************!*\
  !*** ./src/app/component/profile-new/profile-new.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNewComponent", function() { return ProfileNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-person-new/profile-person-new.component */ "o0Vi");
/* harmony import */ var _profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-address-new/profile-address-new.component */ "Xn7J");
/* harmony import */ var _profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile-contact-new/profile-contact-new.component */ "eGik");











function ProfileNewComponent_app_profile_person_new_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-profile-person-new", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStage", function ProfileNewComponent_app_profile_person_new_5_Template_app_profile_person_new_changeStage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeStage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileNewComponent_app_profile_address_new_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-profile-address-new", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStage", function ProfileNewComponent_app_profile_address_new_6_Template_app_profile_address_new_changeStage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeStage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileNewComponent_app_profile_contact_new_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-contact-new");
} }
class ProfileNewComponent {
    constructor(router, modelService, authService, messageService, sessionService) {
        this.router = router;
        this.modelService = modelService;
        this.authService = authService;
        this.messageService = messageService;
        this.sessionService = sessionService;
        this.stageNumber = 1;
    }
    nextClick() {
    }
    cancelClick() {
        this.router.navigate(['login']);
    }
    changeStage($event) {
        this.stageNumber = $event;
    }
}
ProfileNewComponent.ɵfac = function ProfileNewComponent_Factory(t) { return new (t || ProfileNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"])); };
ProfileNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileNewComponent, selectors: [["app-profile-new"]], decls: 8, vars: 4, consts: [[1, "p-fluid", "main-container"], [1, "header"], ["src", "assets/images/register.png"], [1, "center-container", "header-text"], [3, "changeStage", 4, "ngIf"], [4, "ngIf"], [3, "changeStage"]], template: function ProfileNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileNewComponent_app_profile_person_new_5_Template, 1, 0, "app-profile-person-new", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileNewComponent_app_profile_address_new_6_Template, 1, 0, "app-profile-address-new", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileNewComponent_app_profile_contact_new_7_Template, 1, 0, "app-profile-contact-new", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Registrierung (", ctx.stageNumber, "/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stageNumber === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stageNumber === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stageNumber === 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePersonNewComponent"], _profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_8__["ProfileAddressNewComponent"], _profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_9__["ProfileContactNewComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLW5ldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQzRCRTtFRDdCRjtJQU1JLHNCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFESjtBQ2tCRTtFRG5CQTtJQUtJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICBAaW5jbHVkZSBtZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZCB7XHJcbiAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59IiwiLy8gU21hbGwgc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXhzLW1pbjogMzYwcHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgKHBvcnRyYWl0IHZpZXcpXHJcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcclxuXHJcbi8vIFRhYmxldHMgYW5kIHNtYWxsIGRlc2t0b3BzXHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuXHJcbi8vIExhcmdlIHRhYmxldHMgYW5kIGRlc2t0b3BzXHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBMYXJnZSBkZXNrdG9wc1xyXG4kc2NyZWVuLXh4bC1taW46IDE2MDBweDtcclxuXHJcbkBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14cy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXh4bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByd2QoJHNjcmVlbikge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZlcnRpY2FsLXNjcm9sbCB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNjUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGVmZmVjdHMge1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVzZXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuQG1peGluIGllMTFvbmx5IHtcclxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-new',
                templateUrl: './profile-new.component.html',
                styleUrls: ['./profile-new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "22uu":
/*!******************************************!*\
  !*** ./src/app/model/profile/profile.ts ***!
  \******************************************/
/*! exports provided: newProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProfile", function() { return newProfile; });
const newProfile = {
    address: {},
    person: {},
    contact: {},
    acceptAgreement: false,
    acceptDataShare: false
};


/***/ }),

/***/ "2EMw":
/*!******************************************!*\
  !*** ./src/app/service/error.service.ts ***!
  \******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _infrastructure_error_cora_error_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure/error/cora-error-config */ "i4rG");



class ErrorService {
    constructor() {
        this.appErrorConfig = _infrastructure_error_cora_error_config__WEBPACK_IMPORTED_MODULE_1__["coraErrorConfig"];
    }
    getServiceError(service, errorCode) {
        let error = this.getError(service, errorCode);
        if (!error) {
            error = this.getError('common', errorCode);
        }
        return (error) ? error : errorCode;
    }
    get invalidTokenKey() {
        return 'tokenNotFound';
    }
    get invalidTokenError() {
        var _a;
        return (_a = this.getError('common', 'tokenNotFound')) !== null && _a !== void 0 ? _a : '';
    }
    getError(service, errorCode) {
        var _a, _b;
        const apiErrors = (_a = this.appErrorConfig.errors.find(item => item[service])) === null || _a === void 0 ? void 0 : _a[service];
        if (!apiErrors) {
            return undefined;
        }
        return (_b = apiErrors.find(item => item[errorCode])) === null || _b === void 0 ? void 0 : _b[errorCode];
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4RLT":
/*!******************************************************************!*\
  !*** ./src/app/component/verification/verification.component.ts ***!
  \******************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");











function VerificationComponent_p_progressSpinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressSpinner", 18);
} }
class VerificationComponent {
    constructor(router, sessionService, authService, modelService, messageService) {
        this.router = router;
        this.sessionService = sessionService;
        this.authService = authService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.isPressed = true;
        this.model = {};
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value1Control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.value1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            value2Control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.value2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            value3Control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.value3, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            value4Control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.value4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            resendButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.generatePinCode();
    }
    confirmClick() {
        var _a, _b, _c, _d, _e, _f;
        this.isPressed = true;
        const request = {
            cellular: (_c = (_b = (_a = this.sessionService.activeProfile) === null || _a === void 0 ? void 0 : _a.contact) === null || _b === void 0 ? void 0 : _b.cellular) !== null && _c !== void 0 ? _c : '',
            email: (_f = (_e = (_d = this.sessionService.activeProfile) === null || _d === void 0 ? void 0 : _d.contact) === null || _e === void 0 ? void 0 : _e.email) !== null && _f !== void 0 ? _f : '',
            pinCode: `${this.model.value1}${this.model.value2}${this.model.value3}${this.model.value4}`
        };
        this.modelService.activateProfile(request).subscribe((model) => {
            this.isPressed = false;
            this.authService.accessToken = model.token;
            this.sessionService.session.lotNumber = model.lotNumber;
            this.sessionService.session.isVeryfied = true;
            this.router.navigate(['check-in']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    resendClick() {
        this.generatePinCode();
    }
    generatePinCode() {
        var _a, _b, _c, _d, _e, _f;
        this.isPressed = true;
        const request = {
            cellular: (_c = (_b = (_a = this.sessionService.activeProfile) === null || _a === void 0 ? void 0 : _a.contact) === null || _b === void 0 ? void 0 : _b.cellular) !== null && _c !== void 0 ? _c : '',
            email: (_f = (_e = (_d = this.sessionService.activeProfile) === null || _d === void 0 ? void 0 : _d.contact) === null || _e === void 0 ? void 0 : _e.email) !== null && _f !== void 0 ? _f : '',
        };
        this.authService.generatePin(request).subscribe(() => {
            const message = {
                severity: 'info', summary: 'Servicemeldung', detail: 'Überprüfen Sie Ihren Emal auf Bestätigungscode'
            };
            this.messageService.add(message);
            this.isPressed = false;
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    changeInput(id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
VerificationComponent.ɵfac = function VerificationComponent_Factory(t) { return new (t || VerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
VerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerificationComponent, selectors: [["app-verification"]], decls: 28, vars: 12, consts: [[1, "p-fluid", "main-container", "p-col-12"], ["styleClass", "custom-spinner", 4, "ngIf"], [1, "header"], ["src", "assets/images/verify.png"], [1, "center-container", "header-text"], [1, "center-container", "regular-text", "description"], [3, "formGroup"], [1, "center-container", "p-d-flex", "p-jc-between"], ["id", "input1", "type", "text", "formControlName", "value1Control", "maxlength", "1", 3, "ngModel", "input", "ngModelChange"], ["id", "input2", "type", "text", "formControlName", "value2Control", "maxlength", "1", 3, "ngModel", "input", "ngModelChange"], ["id", "input3", "type", "text", "formControlName", "value3Control", "maxlength", "1", 3, "ngModel", "input", "ngModelChange"], ["id", "input4", "type", "text", "formControlName", "value4Control", "maxlength", "1", 3, "ngModel", "ngModelChange"], [1, "p-field", "center-container", "regular-text", 2, "margin-top", "35px"], [1, "resend-button", 2, "font-size", "15px !important", 3, "click"], [1, "p-field", "center-container", 2, "margin-top", "35px"], [1, "orange-button", 3, "click"], [1, "p-field", "center-container", 2, "margin-top", "20px"], ["routerLink", "/login", 1, "white-button"], ["styleClass", "custom-spinner"]], template: function VerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerificationComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Verifizierung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Bitte geben Sie den Best\u00E4tigungscode ein, den Sie per SMS erhalten haben ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function VerificationComponent_Template_input_input_11_listener() { return ctx.changeInput("input2"); })("ngModelChange", function VerificationComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.value1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function VerificationComponent_Template_input_input_13_listener() { return ctx.changeInput("input3"); })("ngModelChange", function VerificationComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.value2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function VerificationComponent_Template_input_input_15_listener() { return ctx.changeInput("input4"); })("ngModelChange", function VerificationComponent_Template_input_ngModelChange_15_listener($event) { return ctx.model.value3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerificationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.value4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Wenn Sie keinen Code haben ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationComponent_Template_button_click_20_listener() { return ctx.resendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Code erneut senden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationComponent_Template_button_click_23_listener() { return ctx.confirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Best\u00E4tigen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.value1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.value2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.value3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.value4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.description[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 40px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 4px solid #FDBF00;\n  outline: none;\n  text-align: center;\n  font-size: 24px;\n}\n.resend-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  color: #80C1F3;\n  padding: 0px !important;\n  text-align: left !important;\n}\n.resend-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUNxQkU7RUR0QkY7SUFNSSxnQkFBQTtFQURGO0FBQ0Y7QUN1QkU7RUQ3QkY7SUFVSSxzQkFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUo7QUNhRTtFRGZBO0lBS0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUE7RUFDQyxtQkFBQTtBQUREO0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0FBREoiLCJmaWxlIjoidmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIEBpbmNsdWRlIHNtIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZCB7XHJcbiAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG5cdG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI0ZEQkYwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXNlbmQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjODBDMUYzO1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verification',
                templateUrl: './verification.component.html',
                styleUrls: ['./verification.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/enum/token-type.enum */ "FJDk");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "aOlj");





class AuthService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    restoreToken() {
        return this.callPost({}, 'refresh')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(response => {
            this.setAccessToken(response.token);
            this.setRefreshToken(response.token);
        }));
    }
    login(request) {
        return this.callPost(request, 'login')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(response => this.invokeLogin(request.isRemember, response)));
    }
    logoff() {
        return this.callPost({}, 'logoff')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.removeToken(_model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access);
            this.removeToken(_model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].refresh);
        }));
    }
    generatePin(request) {
        return this.callPost(request, 'pin/gen');
    }
    forgotPassword(request) {
        return this.callPost(request, 'forgot/password');
    }
    changePassword(request) {
        return this.callPut(request, 'change/password');
    }
    get accessToken() {
        return this.getToken(_model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access);
    }
    set accessToken(token) {
        this.setAccessToken(token);
    }
    get refreshToken() {
        return this.getToken(_model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].refresh);
    }
    get passwordToken() {
        return localStorage.getItem('PCT');
    }
    set passwordToken(token) {
        if (token) {
            localStorage.setItem('PCT', token);
        }
        else {
            localStorage.removeItem('PCT');
        }
    }
    get controller() {
        return 'api/auth';
    }
    invokeLogin(isRemember, response) {
        this.setAccessToken(response.token);
        if (isRemember) {
            this.setRefreshToken(response.token);
        }
    }
    invokeRefresh(config) {
        const path = `${config === null || config === void 0 ? void 0 : config.apiUrl}/api/auth/refresh`;
        return this.client.post(path, { token: this.refreshToken })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(model => {
            this.setAccessToken(model.token);
            this.setRefreshToken(model.token);
        }));
    }
    setAccessToken(token) {
        this.setToken(token, _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access);
    }
    setRefreshToken(token) {
        this.setToken(token, _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].refresh);
    }
    setToken(token, type) {
        const storage = type === _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access ? sessionStorage : localStorage;
        if (token) {
            storage.setItem('token', token);
        }
        else {
            storage.removeItem('token');
        }
    }
    getToken(type) {
        const storage = type === _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access ? sessionStorage : localStorage;
        return storage.getItem('token');
    }
    removeToken(type) {
        const storage = type === _model_enum_token_type_enum__WEBPACK_IMPORTED_MODULE_2__["AuthTokenType"].access ? sessionStorage : localStorage;
        return storage.removeItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return ɵAuthService_BaseFactory(t || AuthService); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
const ɵAuthService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AuthService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "7NK5":
/*!**************************************************************!*\
  !*** ./src/app/component/share-data/share-data.component.ts ***!
  \**************************************************************/
/*! exports provided: ShareDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataComponent", function() { return ShareDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ShareDataComponent {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.sessionService.isDataShareChecked = false;
    }
    confirmClick() {
        this.sessionService.isDataShareChecked = true;
        this.router.navigate(['profile/new']);
    }
    cancelClick() {
        this.sessionService.isDataShareChecked = false;
        this.router.navigate(['profile/new']);
    }
}
ShareDataComponent.ɵfac = function ShareDataComponent_Factory(t) { return new (t || ShareDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ShareDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareDataComponent, selectors: [["app-share-data"]], decls: 108, vars: 0, consts: [[1, "main-container"], [1, "scan-header-container"], [1, "attension-text"], [1, "regular-text"], [1, "wrapper__container", "share-data-container"], [1, "wrapper__container--body", "share-data-container-body"], [1, "container", "container__flex-container"], [1, "agreement"], ["href", "mailto:info@matecode.de"], [1, "p-field", "center-container", 2, "margin-top", "50px"], [1, "orange-button", 2, "margin-bottom", "10px", 3, "click"], [1, "white-button", 3, "click"]], template: function ShareDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Datenschutzerkl\u00E4rung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " CORA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Datenschutzerkl\u00E4rung (Stand 12.01.2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I. Geltungsbereich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Im Folgenden finden Sie die aktuelle Fassung unserer Datenschutzerkl\u00E4rung, die im Zusammenhang mit der Nutzung der CORA App und dazugeh\u00F6riger Dienste, im Folgenden zusammengefasst als \u201EDienste\u201C bezeichnet, stehen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "II.Verantwortlicher F\u00FCr die Verarbeitung personenbezogener Daten, im Folgenden mit \u201Ewir\u201C oder \u201Euns\u201C bezeichnet, ist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " MATECODE GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Marienstra\u00DFe 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 70178 Stuttgart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "info@matecode.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sofern Sie Fragen zu dieser Datenschutzerkl\u00E4rung haben, erreichen Sie uns unter den oben genannten Kontaktdaten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "III. Datenerhebung, -Speicherung und -Speicheungsdauer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 1.Wir erheben personenbezogene Daten und speichern diese unter Wahrung des anwendbaren ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Datenschutzrechts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2. Personenbezogene Daten sind gem\u00E4\u00DF Art. 4, Nr. 1 Datenschutz-Grundverordnung alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\u00FCrliche Person beziehen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3.Die Datenerhebung erfolgt, sofern Sie unsere Dienste in Anspruch nehmen, Informationen an uns \u00FCbermitteln oder Dritte uns Ihre personenbezogenen Daten unter Wahrung des Datenschutzrechts zur Verf\u00FCgung stellen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "4.Daten die erhoben werden sind insbesondere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "a. Kontaktdaten wie Name, Vorname, Geburtsdatum, Anschrift, Telefonnummer und eMail-Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "b. Erweiterte Angaben, die Sie durch unsere Dienste \u00FCbermitteln");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "c. Aufenthaltsdaten, die Sie uns durch unsere Dienste \u00FCbermitteln");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "d. Zweckm\u00E4\u00DFige Daten, die f\u00FCr die Funktionalit\u00E4t notwenig sind, Zuordnungsschl\u00FCssel und QR Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "5.Die Dauer der Datenspeicherung richtet nach dem Zweck zu dem sie erhoben wurden oder solange wir ein berechtigtes Interesse daran haben (ggf. bis zum Ablauf der Verj\u00E4hrungsfrist zur Durchsetzung eigener Anspr\u00FCche). Dar\u00FCber hinaus speichern wir Ihre personenbezogenen Daten f\u00FCr eine gesetzlich, gerichtlich oder beh\u00F6rdlich vorgeschriebene Dauer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "IV. Zweck der Datenspeicherung und Gesetzesgrundlage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Wir verarbeiten Ihre personenbezogenen Daten nur soweit dies nach geltendem Recht erlaubt ist, insbesondere nach den Regelungen des Infektionsschutzgesetzes (IfSG), genauer gem\u00E4\u00DF \u00A7 28a Abs.1, Ziff.17 IfSG der Anordnung der Verarbeitung der Kontaktdaten. Dar\u00FCber hinaus beruht die Datenspeicherung zum Zweck der Erf\u00FCllung und auf Grundlage der Datenschutzgrundverordnung (DSGVO) gem\u00E4\u00DF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "1. Art.6 Abs.1, 1a DSGVO Sie erteilen Ihre Einwilligung zum Zweck der Weitergabe von Daten an Gesundheitsbeh\u00F6rden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2. Art.6 Abs.1,1b DSGVO zur Erf\u00FCllung vertraglicher oder ggf. vorvertraglicher Pflichten aus Vertr\u00E4gen, dessen Vertragspartei Sie sind und auf Ihre Anfrage hin erfolgen. Dies umfasst auch Vertr\u00E4ge \u00FCber die Inanspruchnahme unserer Dienste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "3. Art.6 Abs.1, 1c DSGVO zur Einhaltung gesetzlicher Pflichten oder gerichtlichen oder beh\u00F6rdlichen Vorgaben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "4. Art.6 Abs.1, 1a,1b,1f DSGVO zur M\u00F6glichkeit der Kontaktaufnahme f\u00FCr jegliche Zwecke und zur Beantwortung von Anliegen und R\u00FCckmeldungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "5. Art.6 Abs.1, 1b, 1f DSGVO zur Gew\u00E4hrleistung der ordnungsgem\u00E4\u00DFen Bereitstellung und Nutzbarkeit unserer Dienste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "6. Art.6 Abs.1, 1b, 1c DSGVO zur Gew\u00E4hrleistung der allgemeinen Systemsicherheit, Systemgesundheit und Systemstabilit\u00E4t unserer Dienste, sowie deren fehler- und st\u00F6rungsfreie Bereitstellung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "V. Datenweitergabe an Dritte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Wir nehmen den Schutz Ihrer pers\u00F6nlichen Daten sehr ernst, behandeln sie vertraulich und entsprechend der Datenschutzvorschriften, sowie dieser Datenschutzerkl\u00E4rung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Zum Zwecke der Erleichterung der Verarbeitung Ihrer personenbezogenen Daten, k\u00F6nnen wir diese im Zusammenhang mit Dienstleistungen die Dritte f\u00FCr uns oder zusammen mit uns erbringen, unter der Ma\u00DFgabe, dass diese Dritten Ihre personenbezogenen Daten in keiner anderen Weise als zur Erbringung von Dienstleistungen f\u00FCr uns verwenden d\u00FCrfen. Insbesondere k\u00F6nnen dies Anbieter von Datenverarbeitungsanlagen, Infrastruktur- Anbieter, Datenplattform- Anbieter und Datenspeicher-Anbieter sein.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Dar\u00FCber hinaus k\u00F6nnen wir Ihre personenbezogenen Daten an Dritte weitergeben, wenn dies gesetzlich vorgeschrieben ist oder die \u00DCbermittelung beh\u00F6rdlich angefragt wird.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "VI. Rechte der betroffenen Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Die DSGVO sieht bez\u00FCglich der Verarbeitung Ihrer personenbezogenen Daten folgende Rechte vor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "1. Nach Art. 15 DSGVO haben Sie das Recht umfassend Auskunft \u00FCber die gespeicherten, personenbezogenen Daten und und deren Verarbeitungszweck einzuholen. Bitte beachten Sie dabei, dass Rechte und Freiheiten anderer Personen Ihr Recht auf Auskunft einschr\u00E4nken k\u00F6nnen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2. Nach Art. 16 DSGVO haben Sie das Recht auf Berichtigung Ihrer personenbezogenen Daten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "3. Nach Art. 17 DSGVO haben Sie unter bestimmten Voraussetzungen das Recht auf Datenl\u00F6schung (\u201ERecht auf Vergessenwerden\u201C).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "4. Nach Art. 18 DSGVO haben Sie unter bestimmten Voraussetzungen das Recht auf Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogen Daten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "5. Nach Art. 20 DSGVO haben Sie unter bestimmten Voraussetzungen das Recht auf Daten\u00FCbertragbarkeit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "6. Nach Art. 21 DSGVO haben Sie in bestimmten Situationen das Recht der Verarbeitung Ihrer personenbezogener Daten zu widersprechen, sofern die Verarbeitung gem\u00E4\u00DF Art. 6 Abs.1, 1e DSGVO f\u00FCr die Wahrnehmung einer Aufgabe, die im \u00F6ffentlichen Interesse liegt erforderlich ist bzw. in Aus\u00FCbung \u00F6ffentlicher Gewalt erfolgt, auf einem berechtigten Interesse von uns oder eines Dritten gem\u00E4\u00DF Art. 6 Abs.1, 1f DSGVO beruht oder Ihre personenbezogenen Daten f\u00FCr Zwecke der Direktwerbung verarbeitet werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "7. Ungeachtet der vorstehenden Rechte haben Sie das Recht, Beschwerde bei einer Aufsichtsbeh\u00F6rde einzulegen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "VII. Widerrufsrecht zur Einwilligung der Datenverarbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Sie k\u00F6nnen eine bereits erteilte Einwilligung zur Verarbeitung Ihrer personenbezogener Daten jederzeit widerrufen. Die Rechtm\u00E4\u00DFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\u00FChrt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "VIII. Aktualisierung der Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Wir behalten uns vor diese Datenschutzerkl\u00E4rung anzupassen, insbesondere im Falle der \u00C4nderung der Rechtslage oder unserer Dienste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Etwaige \u00C4nderungen werden Ihnen, sofern erforderlich, mitgeteilt. Bitte Informieren Sie sich in regelm\u00E4\u00DFigen Abst\u00E4nden \u00FCber den aktuellen Stand der Datenschutzerkl\u00E4rung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareDataComponent_Template_button_click_104_listener() { return ctx.confirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Zustimmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareDataComponent_Template_button_click_106_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".scan-header-container[_ngcontent-%COMP%] {\n  background-color: #ebeef0;\n  border: 1px solid #a8c8d9;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 18px 0;\n}\n\n.attension-text[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.share-data-container[_ngcontent-%COMP%], .share-data-container-body[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  max-height: calc(100vh - 140px);\n  height: 100%;\n}\n\n@media (min-width: 768px) {\n  .share-data-container[_ngcontent-%COMP%], .share-data-container-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .share-data-container[_ngcontent-%COMP%], .share-data-container-body[_ngcontent-%COMP%] {\n    width: 768px;\n  }\n}\n\n@media (min-width: 992px) {\n  .share-data-container[_ngcontent-%COMP%], .share-data-container-body[_ngcontent-%COMP%] {\n    width: 992px;\n  }\n}\n\n.orange-button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n@media (min-width: 576px) {\n  .orange-button[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    margin-right: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkQ7O0FBS0E7RUFDQyxtQkFBQTtBQUZEOztBQUtBO0VBQ0MsbUJBQUE7QUFGRDs7QUFLQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBRkQ7O0FDS0U7RURQRjtJQU9FLFdBQUE7RUFEQTtBQUNGOztBQ09FO0VEZEY7SUFXRSxZQUFBO0VBQUE7QUFDRjs7QUNFRTtFRGRGO0lBZUUsWUFBQTtFQUNBO0FBQ0Y7O0FBRUE7RUFDQyxtQkFBQTtBQUNEOztBQ3JCRTtFRG1CRjtJQUlFLGdCQUFBO0lBQ0Esa0JBQUE7RUFFQTtBQUNGIiwiZmlsZSI6InNoYXJlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4uc2Nhbi1oZWFkZXItY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZWYwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNhOGM4ZDk7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDM1MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxOHB4IDA7XHJcbn1cclxuXHJcbi5hdHRlbnNpb24tdGV4dCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxucCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNoYXJlLWRhdGEtY29udGFpbmVyLCAuc2hhcmUtZGF0YS1jb250YWluZXItYm9keSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHJcblx0QGluY2x1ZGUgbWQge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRAaW5jbHVkZSBsZyB7XHJcblx0XHR3aWR0aDogNzY4cHg7XHJcblx0fVxyXG5cclxuXHRAaW5jbHVkZSBsZyB7XHJcblx0XHR3aWR0aDogOTkycHg7XHJcblx0fVxyXG59XHJcblxyXG4ub3JhbmdlLWJ1dHRvbiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcblx0QGluY2x1ZGUgc20ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHR9XHJcbn0iLCIvLyBTbWFsbCBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4teHMtbWluOiAzNjBweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG5cclxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcclxuJHNjcmVlbi1sZy1taW46IDk5MnB4O1xyXG5cclxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIExhcmdlIGRlc2t0b3BzXHJcbiRzY3JlZW4teHhsLW1pbjogMTYwMHB4O1xyXG5cclxuQG1peGluIHhzIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhzLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4rJ3B4Jykge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmVydGljYWwtc2Nyb2xsIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC42NSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZWZmZWN0cyB7XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4IHtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNldC1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaWUxMW9ubHkge1xyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-share-data',
                templateUrl: './share-data.component.html',
                styleUrls: ['./share-data.component.scss']
            }]
    }], function () { return [{ type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "83UI":
/*!*********************************************************!*\
  !*** ./src/app/service/interceptor/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "6uu6");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const accessToken = this.authService.accessToken;
        if (accessToken) {
            request = this.addAuthenticationHearder(request, accessToken);
        }
        return next.handle(request);
    }
    addAuthenticationHearder(request, token) {
        return request.clone({
            setHeaders: {
                Authorization: token
            }
        });
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Emk8":
/*!*********************************************!*\
  !*** ./src/app/service/guard/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "6uu6");



class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return (this.authService.accessToken !== '');
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "FJDk":
/*!***********************************************!*\
  !*** ./src/app/model/enum/token-type.enum.ts ***!
  \***********************************************/
/*! exports provided: AuthTokenType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenType", function() { return AuthTokenType; });
var AuthTokenType;
(function (AuthTokenType) {
    AuthTokenType[AuthTokenType["access"] = 0] = "access";
    AuthTokenType[AuthTokenType["refresh"] = 1] = "refresh";
})(AuthTokenType || (AuthTokenType = {}));


/***/ }),

/***/ "LWby":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ConfigService {
    constructor(client) {
        this.client = client;
        this.configUrl = 'assets/config.json';
    }
    get config() {
        const storageConfigStr = sessionStorage.getItem('app-config-cache');
        const task = storageConfigStr === null || storageConfigStr === undefined
            ? this.client.get(this.configUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
                sessionStorage.setItem('app-config-cache', JSON.stringify(data));
                return data;
            }))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(JSON.parse(storageConfigStr));
        return task;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Lx8b":
/*!***********************************************************!*\
  !*** ./src/app/model/infrastructure/control-validator.ts ***!
  \***********************************************************/
/*! exports provided: ValidatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorBase", function() { return ValidatorBase; });
class ValidatorBase {
    static requiredValidator(message) {
        return {
            validate: (control) => {
                if (control !== null) {
                    let isValid;
                    if (typeof control.value === 'string') {
                        isValid = control.value.trim().length > 0;
                    }
                    else {
                        isValid = control.value !== undefined && control.value !== null;
                    }
                    return isValid ? null : message;
                }
                return null;
            }
        };
    }
}


/***/ }),

/***/ "Ouoq":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "aOlj");



class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    getProfile() {
        return this.callGet('profile');
    }
    getVaccineListModel() {
        return this.callGet('vaccination/card');
    }
    getVaccineDetailsModel(guid) {
        const path = `vaccination/${guid}`;
        return this.callGet(path);
    }
    registerProfile(model) {
        return this.callPost(model, 'profile/register');
    }
    activateProfile(model) {
        return this.callPost(model, 'profile/activate');
    }
    saveProfilePerson(model) {
        return this.callPut(model, 'profile/save/person');
    }
    saveProfileAddress(model) {
        return this.callPut(model, 'profile/save/address');
    }
    saveProfileContact(model) {
        return this.callPut(model, 'profile/save/contact');
    }
    canselRegistration() {
        return this.callDelete('profile/register/cancel');
    }
    get controller() {
        return 'api/user';
    }
}
UserService.ɵfac = function UserService_Factory(t) { return ɵUserService_BaseFactory(t || UserService); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
const ɵUserService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UserService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "PI0+":
/*!************************************************************!*\
  !*** ./src/app/component/agreement/agreement.component.ts ***!
  \************************************************************/
/*! exports provided: AgreementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementComponent", function() { return AgreementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AgreementComponent {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.sessionService.isAgreementChecked = false;
    }
    confirmClick() {
        this.sessionService.isAgreementChecked = true;
        this.router.navigate(['profile/new']);
    }
    cancelClick() {
        this.sessionService.isAgreementChecked = false;
        this.router.navigate(['profile/new']);
    }
}
AgreementComponent.ɵfac = function AgreementComponent_Factory(t) { return new (t || AgreementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgreementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgreementComponent, selectors: [["app-agreement"]], decls: 218, vars: 0, consts: [[1, "main-container"], [1, "scan-header-container"], [1, "attension-text"], [1, "regular-text"], [1, "wrapper__container", "agreement-container"], [1, "wrapper__container--body", "agreement-container-body"], [1, "container", "container__flex-container"], [1, "agreement"], [1, "p-field", "center-container"], [1, "orange-button", 3, "click"], [1, "white-button", 3, "click"]], template: function AgreementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nutzungsbedingungen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " CORA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nutzungsbedingungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I. Allgemeines /Geltungsbereich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1. Diese CORA Nutzungsbedingungen (im Folgenden \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nutzungsbedingungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u201C genannt) gelten f\u00FCr alle Vertr\u00E4ge (im Folgenden \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nutzungsvertr\u00E4ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u201Cgenannt) zwischen der MATECODE GmbH, Marienstra\u00DFe 5, 70178 Stuttgart (im Folgenden \u201ECORA\u201C genannt) und Kunden von CORA (im Folgenden \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nutzer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u201C genannt) \u00FCber die Nutzung der nachstehend definierten Dienste. Diese Nutzungsbedingungen werden Bestandteil jedes Nutzungsvertrages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 2. Zur besseren Lesbarkeit von Personenbezeichnungen und personenbezogenen W\u00F6rtern wird in diesen Nutzungsbedingungen die m\u00E4nnliche Form verwendet. Entsprechende Begriffe gelten im Sinne der Gleichbehandlung grunds\u00E4tzlich f\u00FCr alle Geschlechter und enthalten keine Wertung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 3. Diese Nutzungsbedingungen gelten auch f\u00FCr k\u00FCnftige Vertr\u00E4ge zwischen CORA und dem Nutzer. Einen gesonderten, entsprechenden Hinweis bedarf es im Einzelfall nicht. Diese Nutzungsbedingungen gelten sp\u00E4testens dann als von dem Nutzer best\u00E4tigt, wenn der Nutzer die Dienste in Anspruch nimmt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 4. Diese Nutzungsbedingungen gelten unter Ausschluss weiterer Bedingungen. Abweichende, widersprechende oder erg\u00E4nzende allgemeine Gesch\u00E4ftsbedingungen k\u00F6nnen ausschlie\u00DFlich mit schriftlicher Zustimmung durch CORA Bestandteil eines Nutzungsvertrags werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 5. Sofern diese Nutzungsbedingungen die Begriffe \u201Eschriftlich\u201C, \u201Ein Schriftform\u201C oder \u00E4hnliche Begriffe verwenden, beziehen sich diese auf die Schriftform im Sinne des \u00A7 126 BGB. Der elektronische Austausch von Kopien, handschriftlich unterzeichneter Dokumente, sowie von Dokumenten mit elektronischer Signatur ist insoweit ausreichend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Soweit diese Nutzungsbedingungen nicht ausdr\u00FCcklich etwas anderes bestimmen, ist der Austausch einfacher E-Mails nicht ausreichend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 6. Mitteilungen und Erkl\u00E4rungen, die der Nutzer gegen\u00FCber CORA abgibt, sind mindestens in Textform im Sinne des \u00A7 126 BGB abzugeben. Eine Einfache eMail ist ausreichend, solange diese Nutzungsbedingungen nicht ausdr\u00FCcklich etwas anderes bestimmen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 7. Verweise dieser Nutzungsbedingungen auf die Anwendbarkeit gesetzlicher Vorschriften dienen lediglich der Aufkl\u00E4rung. Gesetzliche Vorschriften gelten auch ohne Aufkl\u00E4rung, es sei denn sie werden durch diese Nutzungsbedingungen erg\u00E4nzt oder ausgeschlossen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "II. Dienste/ Zustandekommen von Nutzungsvertr\u00E4gen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 1. Nach Ma\u00DFgabe des jeweiligen Nutzungsvertrages gew\u00E4hrt CORA dem privaten Nutzer kostenfrei Zugang zu der von CORA als Software Service angebotenen Software zur Kontaktdaten\u00FCbermittlung, einschlie\u00DFlich aller dazugeh\u00F6rigen Websites, Plattformen, Dienste, Anwendungen und Funktionen (\u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Dienste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u201C).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 2. Um die Dienste nutzen zu k\u00F6nnen, muss der Nutzer innerhalb der Dienste bestimmte pers\u00F6nliche Daten hinterlegen und diese Nutzungsbedingungen akzeptieren. Der Nutzer kann seine pers\u00F6nlichen Daten \u00FCberpr\u00FCfen und ggf. berichtigen. Nachdem der Nutzer die vollst\u00E4ndig ausgef\u00FCllte Anmeldung abgeschickt hat, erh\u00E4lt der Nutzer von CORA in der Regel eine Best\u00E4tigung seiner Anmeldung. Durch diese Best\u00E4tigung kommt zwischen CORA und dem Nutzer ein verbindlicher Nutzungsvertrag zustande.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 3. CORA hat das Recht, die Dienste jederzeit und ohne Vorank\u00FCndigung herabzustufen, einzuschr\u00E4nken oder anderweitig zu modifizieren. Vorbehaltlich der Regelungen in Ziffer VIII treffen CORA f\u00FCr die Dienste keine Garantie-, Entsch\u00E4digungs-, Wartungs-, Support- oder Verf\u00FCgbarkeitsverpflichtungen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 4. CORA ist berechtigt, zur Erf\u00FCllung seiner vertraglichen Pflichten jederzeit Unterauftragnehmer zu beauftragen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 5. CORA wird den Vertragstext (diese Nutzungsbedingungen und der jeweilige Nutzungsvertrag) nach Zustandekommen eines Nutzungsvertrages nicht speichern. Der Vertragstext ist dann f\u00FCr den Nutzer nicht mehr zug\u00E4nglich.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "III. Nutzungsrechte und Nutzungsbeschr\u00E4nkungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 1. Nach Ma\u00DFgabe des Nutzungsvertrages gew\u00E4hrt CORA dem Nutzer w\u00E4hrend der Vertragslaufzeit ein einfaches, nicht \u00FCbertragbares, nicht unterlizenzierbares, weltweites Recht, die Dienste ausschlie\u00DFlich zu privaten Zwecken des Nutzers zu nutzen. Die Dienste werden so angeboten wie jeweils aktuell auf der Website von CORA einschlie\u00DFlich dem Abschnitt \u00FCber h\u00E4ufig gestellte Fragen (FAQ) (\u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Dokumentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u201C) beschrieben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 2. Der Nutzer darf nicht (und darf nicht gestatten, dass Dritte dies tun) mittelbar oder unmittelbar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " a. die Dienste unterlizenzieren, verkaufen, weiterverkaufen, \u00FCbertragen, abtreten, vertreiben, teilen, verpachten, vermieten, extern gesch\u00E4ftlich nutzen, outsourcen, auf der Basis einer Teilzeitnutzung oder als Serviceunternehmen nutzen, oder in einer Application Service Provider- oder einer Managed Service Provider-Umgebung nutzen oder anderweitig Einnahmen aus den Diensten generieren;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " b. die Dienste auf ein \u00F6ffentliches oder verteiltes Netzwerk kopieren;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " c. Teile der Dienste dekompilieren, im Wege des Reverse Engineerings rekonstruieren, zerlegen oder auf eine andere Weise versuchen, Quellcodes, Objektcodes oder zugrundeliegende(s) strukturelle Ideen, Know-how oder Algorithmen oder andere Funktionsmechanismen der Dienste zu erlangen, es sei denn, dies ist im Einzelfall aufgrund zwingender gesetzlicher Vorschriften zul\u00E4ssig;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " d. alle oder einen Teil der Dienste modifizieren, anpassen, \u00FCbersetzen oder abgeleitete Werke erstellen, die auf den Diensten basieren (au\u00DFer in dem durch CORA gestatteten Umfang oder sofern dies im Rahmen der Dienste genehmigt wurde);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " e. Hinweise auf Eigentumsrechte, die in den Diensten oder Teilen davon erscheinen, modifizieren;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " f. die Dienste so nutzen, dass geltende Gesetze und Vorschriften (einschlie\u00DFlich Ausfuhrbestimmungen und -einschr\u00E4nkungen, nationale Sicherheitskontrollen und -vorschriften) verletzt werden oder au\u00DFerhalb des in dieser Ziffer III beschriebenen Lizenzumfangs nutzen;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " g. die Dienste konfigurieren, um die folgenden Daten zu erheben:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " (i) Daten, die als sensible personenbezogene Daten oder \u201Abesondere Datenkategorien\u2018 im Sinne der Datenschutz- Grundverordnung (\u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "DSGVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u201C) oder anwendbarer nationaler Datenschutzvorschriften gelten;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " (ii) Passw\u00F6rter oder andere Authentifizierungsdaten; oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " (iii) Zahlungsdaten oder andere finanzielle Daten, biometrische Daten oder genetische Daten (gemeinsam \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Unerlaubte Daten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u201C); oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " h. die Dienste verwenden, um");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " (i) verletzendes, verleumderisches oder auf andere Weise unrechtm\u00E4\u00DFiges oder unerlaubtes Material oder b\u00F6sartige Codes oder Malware zu speichern, herunterzuladen oder zu \u00FCbertragen, oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " (ii) Phishing, Spamming, Denial-of-Service-Angriffen oder anderen betr\u00FCgerischen oder kriminellen Aktivit\u00E4ten nachzugehen;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " (iii) die Integrit\u00E4t oder die Leistungsf\u00E4higkeit von Systemen Dritter oder die darin enthaltenen Angebote oder Daten zu beeintr\u00E4chtigen oder zu unterbrechen;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " (iv) zu versuchen, unerlaubten Zugriff auf die Dienste oder die Systeme oder Netzwerke von CORA zu erlangen; oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " (v) Penetrationstests, Schwachstellenanalysen oder andere Sicherheitsbewertungen durchzuf\u00FChren oder Dritte mit deren Durchf\u00FChrung zu beauftragen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " 3. Der Nutzer darf die Inhalte der Dienste nicht ohne die schriftliche Zustimmung von CORA vervielf\u00E4ltigen, verarbeiten, teilen oder \u00F6ffentlich wiedergeben, es sei denn dies wird durch Funktionen, welche in Dienste integriert sind, ausdr\u00FCcklich gestattet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " 4. Der Nutzer darf Dienste oder technische Daten, oder Kopien, Teile oder Produkte davon weder direkt noch indirekt unter Verletzung geltender Gesetze und Vorschriften exportieren oder re-exportieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " 5. Der Nutzer darf die Dienste nur wie in der Dokumentation beschrieben, nutzen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " 6. CORA kann die Nutzung der Dienste durch den Nutzer \u00FCberwachen und kann eine Nutzung der Dienste untersagen und/oder aussetzen, wenn CORA der Auffassung ist, dass der Nutzer gegen die Bestimmungen dieser Ziffer III verst\u00F6\u00DFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "IV. Pflichten des Nutzers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " 1. Der Nutzer sichert zu und gew\u00E4hrleistet, dass er die Dienste ausschlie\u00DFlich in vollst\u00E4ndiger \u00DCbereinstimmung mit allen geltenden Gesetzen und Vorschriften verwendet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " 2. Der Nutzer ist daf\u00FCr verantwortlich, technische Ger\u00E4te und damit zusammenh\u00E4ngende Zusatzdienste, die f\u00FCr die Verbindung mit, den Zugriff auf oder die sonstige Nutzung der Dienste erforderlich sind, auf eigene Kosten zu beschaffen und instand zu halten, insbesondere Hardware, Software, Server, Betriebssysteme, Netzwerke und mobile Endger\u00E4te (gemeinsam \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Technische Ausstattung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u201C). CORAs Anforderungen an die Technische Ausstattung k\u00F6nnen in ihrer jeweils aktuellen Fassung auf der Website von CORA eingesehen werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " 3. Der Nutzer ist zudem f\u00FCr die Sicherheit der Technischen Ausstattung sowie jede dem Nutzer bekannte oder unbekannte Nutzung der Technischen Ausstattung verantwortlich.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 4. Der Nutzer ist f\u00FCr die Inhalte aller Daten die von dem Nutzer \u00FCber oder mit Hilfe der Dienste angezeigt, ver\u00F6ffentlicht, hochgeladen, gespeichert, ausgetauscht oder \u00FCbertragen werden (gemeinsam \u201EInhalte\u201C) allein verantwortlich. CORA ist nicht in der Lage, die von dem Nutzer w\u00E4hrend der Nutzung der Dienste \u00FCbermittelten Informationen zu kontrollieren oder die Richtigkeit dieser Informationen zu gew\u00E4hrleisten. CORA kann \u2013 ohne vorherige Ank\u00FCndigung und ohne daf\u00FCr zu haften \u2013 Beschwerden oder mutma\u00DFlichen Verletzungen des Nutzungsvertrages nachgehen und kann gegen\u00FCber dem Nutzer Ma\u00DFnahmen ergreifen, die CORA f\u00FCr angemessen erachtet. Dazu geh\u00F6ren das Beschr\u00E4nken, Sperren oder K\u00FCndigen des Zugangs des Nutzers zu den Diensten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " 5. Der Nutzer stellt sicher, dass die in den Diensten von ihm hinterlegten Informationen stets aktuell und richtig sind. Im Falle einer nicht autorisierten Verwendung oder vermuteten Sicherheitsverletzung oder eines Missbrauchs der Dienste ist der Nutzer verpflichtet, CORA dar\u00FCber unverz\u00FCglich zu informieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "V. Laufzeit und K\u00FCndigung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 1. Die Laufzeit eines Nutzungsvertrages beginnt zu dem darin bezeichneten Zeitpunkt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 2. Jeder Nutzungsvertrag bleibt auf unbestimmte Zeit in Kraft, sofern er nicht im Einklang mit dem Nutzungsvertrag gek\u00FCndigt wird. CORA der der Nutzer k\u00F6nnen den Nutzungsvertrag jederzeit mit sofortiger Wirkung k\u00FCndigen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " 3. Das Recht der Parteien zur au\u00DFerordentlichen K\u00FCndigung des Nutzungsvertrages aus wichtigem Grund bleibt unber\u00FChrt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "VI. Eigentumsrechte, Nutzerdaten, IT- Sicherheit und Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " 1. CORA und deren etwaige Auftragnehmer sind und bleiben Eigent\u00FCmer aller Eigentumsrechte, einschlie\u00DFlich Urheberrechte Datenbankrechte, Patente, Gesch\u00E4ftsgeheimnisse, Marken und aller anderen Rechten an geistigem Eigentum und technischen L\u00F6sungen an und im Zusammenhang mit den Diensten. Der Nutzer erkennt an, dass die nach einem Nutzungsvertrag gew\u00E4hrten Rechte dem Nutzer keine Eigentumsrechte an den Diensten verschaffen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " 2. S\u00E4mtliche Rechte an den Inhalten und an Daten, die der Nutzer CORA zur Verf\u00FCgung stellt, um die Bereitstellung der Dienste zu erm\u00F6glichen oder die der Kunde w\u00E4hrend der Nutzung der Dienste zur Verf\u00FCgung stellt (\u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Nutzerdaten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u201C), sowie an Daten, die auf den Inhalten oder Nutzerdaten basieren oder davon abgeleitet sind, verbleiben bei dem Nutzer. Der Nutzer gew\u00E4hrt CORA ein einfaches, nicht \u00FCbertragbares, unterlizenzierbares, r\u00E4umlich und inhaltlich unbeschr\u00E4nktes (Nutzungs-)Recht, die Inhalte und Nutzerdaten ausschlie\u00DFlich in Verbindung mit der Erbringung der Dienste zu nutzen. CORA haftet nicht f\u00FCr die Inhalte oder die Nutzerdaten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " 3. CORA wird angemessene Ma\u00DFnahmen ergreifen, um zu gew\u00E4hrleisten, dass die Sicherheit der Dienste markt\u00FCblichen Industriestandards entspricht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " 4. CORA beh\u00E4lt sich das Recht vor, jederzeit und ohne vorherige Ank\u00FCndigung neue Versionen und Updates der Dienste, insbesondere Ver\u00E4nderungen der Gestaltung, des operativen Verfahrens, der technischen Spezifikationen, der Systeme und anderen Funktionen der Dienste, vorzunehmen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "VII. Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " 1. Der Nutzer und CORA werden jederzeit die Anforderungen des geltenden Datenschutzrechts, insbesondere der DSGVO, einhalten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " 2. Die Verarbeitung personenbezogener Daten durch CORA wird in CORAs Datenschutzerkl\u00E4rung n\u00E4her erl\u00E4utert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "VIII. Haftungsbeschr\u00E4nkung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " 1. CORA haftet unbeschr\u00E4nkt f\u00FCr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " a. die Verletzung des Lebens, des K\u00F6rpers oder der Gesundheit durch CORA, deren gesetzliche Vertreter oder Erf\u00FCllungsgehilfen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " b. ors\u00E4tzlich oder grob fahrl\u00E4ssig verursachte Sch\u00E4den durch CORA, deren gesetzliche Vertreter oder Erf\u00FCllungsgehilfen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " c. Sch\u00E4den aufgrund des Fehlens einer garantierten Beschaffenheit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " d. Forderungen aus dem Produkthaftungsgesetz (ProdHaftG)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " 2. CORA haftet f\u00FCr Sch\u00E4den aus der Verletzung von Kardinalpflichten durch CORA, deren gesetzliche Vertreter oder Erf\u00FCllungsgehilfen. Kardinalpflichten sind die Pflichten, deren Erf\u00FCllung die ordnungsgem\u00E4\u00DFe Durchf\u00FChrung des Nutzungsvertrages erst erm\u00F6glicht und auf deren Einhaltung der Nutzer regelm\u00E4\u00DFig vertraut und vertrauen darf. Sofern die Verletzung von Kardinalpflichten durch leichte Fahrl\u00E4ssigkeit von CORA, deren gesetzliche Vertreter oder Erf\u00FCllungsgehilfen erfolgt, ist die Haftung von CORA der H\u00F6he nach auf den Betrag begrenzt, der f\u00FCr CORA zum Zeitpunkt der Erbringung der jeweiligen Leistung vorhersehbar war.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " 3. Vorbehaltlich der Regelungen in Ziffern III.1 und III.2 haftet CORA nicht f\u00FCr Sch\u00E4den aus der Verletzung von Pflichten, die keine Kardinalpflichten darstellen und die leicht fahrl\u00E4ssig durch CORA, deren gesetzliche Vertreter oder Erf\u00FCllungsgehilfen verursacht wurden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " 4. CORA haftet nicht f\u00FCr dem Nutzer entstandene Verluste, Sch\u00E4den oder Nachteile, die mittelbar oder unmittelbar durch die nicht autorisierte Verwendung der Dienste zur Verarbeitung Unerlaubter Daten durch den Nutzer verursacht wurden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 5. CORA haftet f\u00FCr Datenverluste nur bis zu einem Betrag, der den typischen Kosten f\u00FCr die Wiederherstellung der betroffenen Daten entspricht, die entstanden w\u00E4ren, wenn der Nutzer ordnungsgem\u00E4\u00DFe und regelm\u00E4\u00DFige Datensicherungen vorgenommen h\u00E4tte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " 6. Vorbehaltlich der Regelung in Ziffern III.1 ist die Haftung von CORA f\u00FCr Sch\u00E4den aus oder im Zusammenhang mit einem Nutzungsvertrag, sei es aus Vertrag, Delikt oder aus anderen Gr\u00FCnden, beschr\u00E4nkt auf einen Betrag von 150% (einhundertf\u00FCnfzig Prozent) der Summe der Geb\u00FChren unter dem betroffenen Nutzungsvertrag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " 7. CORA steht nicht daf\u00FCr ein, dass keine Ansteckung oder die Verbindung zu allen Gesundheits\u00E4mtern gew\u00E4hrleistet ist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " 8. Eine \u00FCber die in dieser Ziffer VIII geregelten F\u00E4lle hinausgehende Haftung von CORA ist ausgeschlossen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "IX. Abtretungsverbot und Aufrechnungsbeschr\u00E4nkung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " 1. Der Nutzer darf seine Rechte oder Verpflichtungen aus einem Nutzungsvertrag und diesen Nutzungsbedingungen nicht ohne die schriftliche Einwilligung von CORA abtreten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " 2. Der Nutzer ist nur dann berechtigt, mit eigenen Forderungen gegen Forderungen von CORA aufzurechnen, wenn seine Forderungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " a. rechtskr\u00E4ftig festgestellt wurden oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " b. unbestritten sind oder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " c. von CORA anerkannt wurden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "X. Vollst\u00E4ndige Vereinbarung, Salvatorische Klausel, \u00C4nderungen und Aktualisierungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " 1. Der Nutzungsvertrag einschlie\u00DFlich dieser Nutzungsbedingungen stellt die vollst\u00E4ndige Vereinbarung zwischen dem Nutzer und CORA in Bezug auf seinen Vertragsgegenstand dar und ersetzt alle fr\u00FCheren schriftlichen oder m\u00FCndlichen Verhandlungen, Regelungen, Abreden, \u00DCbungen oder Vereinbarungen zwischen den Parteien in Bezug auf den Vertragsgegenstand und schlie\u00DFt diese aus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " 2. Sollte eine Regelung des Nutzungsvertrages einschlie\u00DFlich dieser Nutzungsbedingungen, ganz oder teilweise unwirksam oder nichtig sein oder werden, so wird die Wirksamkeit der \u00FCbrigen Regelungen davon nicht ber\u00FChrt. An die Stelle der unwirksamen oder nichtigen Regelung tritt in diesem Fall eine Regelung, die dem am n\u00E4chsten kommt, was die Parteien nach dem Sinn und Zweck der urspr\u00FCnglichen Regelung und des Nutzungsvertrages in gesetzlich zul\u00E4ssiger Weise vereinbart h\u00E4tten, wenn sie die Unwirksamkeit oder Nichtigkeit der urspr\u00FCnglichen Regelung erkannt h\u00E4tten. Beruht die Unwirksamkeit oder Nichtigkeit einer Regelung auf einem darin festgelegten Ma\u00DF der Leistung oder der Zeit (Frist oder Termin), so tritt an deren Stelle eine Regelung mit einem dem urspr\u00FCnglichen Umfang am n\u00E4chsten kommenden rechtlich zul\u00E4ssigen Umfang. Das Vorstehende gilt auch f\u00FCr eine etwaige von den Parteien nicht beabsichtigte Regelungsl\u00FCcke in dem Nutzungsvertrag einschlie\u00DFlich dieser Nutzungsbedingungen. Es ist der ausdr\u00FCckliche Wille der Parteien, dass diese salvatorische Klausel keine blo\u00DFe Beweislastumkehr zur Folge hat, sondern \u00A7 139 BGB insgesamt abbedungen ist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " 3. \u00C4nderungen oder Erg\u00E4nzungen eines Nutzungsvertrages m\u00FCssen schriftlich erfolgen (der Austausch einfacher E- Mails ist ausreichend). Dasselbe gilt f\u00FCr Vereinbarungen, von diesem Schriftformerfordernis abzuweichen oder auf dieses vollst\u00E4ndig zu verzichten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " 4. CORA kann diese Nutzungsbedingungen mit Wirkung f\u00FCr die Zukunft \u00E4ndern und/oder aktualisieren, wenn dies aus technischen, wirtschaftlichen oder rechtlichen Gr\u00FCnden erforderlich ist. Jede \u00C4nderung dieser Nutzungsbedingungen wird dem Nutzer in Textform (eine einfache E-Mail ist ausreichend) mindestens sechs Wochen vor ihrem beabsichtigten Inkrafttreten angek\u00FCndigt. Der Nutzer kann der \u00C4nderung vor dem Tag ihres beabsichtigten Inkrafttretens zustimmen oder widersprechen. Die \u00C4nderung gilt als von dem Nutzer angenommen, wenn der Nutzer der \u00C4nderung nicht vor dem Tag ihres beabsichtigten Inkrafttretens widerspricht. CORA wird den Nutzer in der entsprechenden Ank\u00FCndigung ausdr\u00FCcklich dar\u00FCber informieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "XI. Geltendes Recht und Verbraucherschlichtungsstelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " 1. Jeder Nutzungsvertrag und alle (vertraglichen oder au\u00DFervertraglichen) Streitigkeiten oder Anspr\u00FCche, die durch oder in Verbindung mit dem Nutzungsvertrag oder deren Gegenstand oder deren Abschluss entstehen, unterliegen den zwingenden Gesetzen des Staates, in dem der Nutzer seinen gew\u00F6hnlichen Wohnsitz hat (d. h. derjenigen Bestimmungen des Rechts dieses Staates, von denen nicht durch Vereinbarung abgewichen werden kann). Im \u00DCbrigen gilt das Recht der Bundesrepublik Deutschland. Das \u00DCbereinkommen der Vereinten Nationen \u00FCber Vertr\u00E4ge \u00FCber den internationalen Warenkauf (CISG) findet keine Anwendung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " 2. Die Europ\u00E4ische Kommission betreibt eine Schiedsstelle, die online zu erreichen ist. CORA ist nicht dazu verpflichtet, an einem Streitbeilegungsverfahren vor dieser Schiedsstelle oder vor einer anderen Verbraucherschlichtungsstelle teilzunehmen und dazu auch nicht bereit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "MATECODE GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Registergericht: Amtsgericht Stuttgart, HRB771974");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Sitz der Gesellschaft: Stuttgart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Stand der Nutzungsbedingungen: Januar 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgreementComponent_Template_button_click_214_listener() { return ctx.confirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Zustimmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgreementComponent_Template_button_click_216_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".scan-header-container[_ngcontent-%COMP%] {\n  background-color: #ebeef0;\n  border: 1px solid #a8c8d9;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 18px 0;\n}\n\n.attension-text[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.agreement-container[_ngcontent-%COMP%], .agreement-container-body[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  max-height: calc(100vh - 140px);\n  height: 100%;\n}\n\n@media (min-width: 768px) {\n  .agreement-container[_ngcontent-%COMP%], .agreement-container-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .agreement-container[_ngcontent-%COMP%], .agreement-container-body[_ngcontent-%COMP%] {\n    width: 768px;\n  }\n}\n\n@media (min-width: 992px) {\n  .agreement-container[_ngcontent-%COMP%], .agreement-container-body[_ngcontent-%COMP%] {\n    width: 992px;\n  }\n}\n\n.orange-button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n@media (min-width: 576px) {\n  .orange-button[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    margin-right: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZ3JlZW1lbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRDs7QUFLQTtFQUNDLG1CQUFBO0FBRkQ7O0FBS0E7RUFDQyxtQkFBQTtBQUZEOztBQUtBO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUNLRTtFRFBGO0lBT0UsV0FBQTtFQURBO0FBQ0Y7O0FDT0U7RURkRjtJQVdFLFlBQUE7RUFBQTtBQUNGOztBQ0VFO0VEZEY7SUFlRSxZQUFBO0VBQ0E7QUFDRjs7QUFFQTtFQUNDLG1CQUFBO0FBQ0Q7O0FDckJFO0VEbUJGO0lBSUUsZ0JBQUE7SUFDQSxrQkFBQTtFQUVBO0FBQ0YiLCJmaWxlIjoiYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLnNjYW4taGVhZGVyLWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWVmMDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYThjOGQ5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiAzNTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMThweCAwO1xyXG59XHJcblxyXG4uYXR0ZW5zaW9uLXRleHQge1xyXG5cdG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbnAge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hZ3JlZW1lbnQtY29udGFpbmVyLCAuYWdyZWVtZW50LWNvbnRhaW5lci1ib2R5IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHRAaW5jbHVkZSBtZCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdEBpbmNsdWRlIGxnIHtcclxuXHRcdHdpZHRoOiA3NjhweDtcclxuXHR9XHJcblxyXG5cdEBpbmNsdWRlIGxnIHtcclxuXHRcdHdpZHRoOiA5OTJweDtcclxuXHR9XHJcbn1cclxuXHJcbi5vcmFuZ2UtYnV0dG9uIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuXHRAaW5jbHVkZSBzbSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cdH1cclxufVxyXG4iLCIvLyBTbWFsbCBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4teHMtbWluOiAzNjBweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG5cclxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcclxuJHNjcmVlbi1sZy1taW46IDk5MnB4O1xyXG5cclxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIExhcmdlIGRlc2t0b3BzXHJcbiRzY3JlZW4teHhsLW1pbjogMTYwMHB4O1xyXG5cclxuQG1peGluIHhzIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhzLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4rJ3B4Jykge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmVydGljYWwtc2Nyb2xsIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC42NSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZWZmZWN0cyB7XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4IHtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNldC1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaWUxMW9ubHkge1xyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgreementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agreement',
                templateUrl: './agreement.component.html',
                styleUrls: ['./agreement.component.scss']
            }]
    }], function () { return [{ type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "TlKl":
/*!*************************************************************!*\
  !*** ./src/app/infrastructure/error/common-error-config.ts ***!
  \*************************************************************/
/*! exports provided: commonErrorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonErrorConfig", function() { return commonErrorConfig; });
const commonErrorConfig = {
    'common': [
        { 'tokenNotFound': 'Ungültiges Token.' },
        { 'accessDenied': 'Zugriff verweigert' },
        { 'emailIsEmpty': 'E-Mail ist leer' },
        { 'passwordNotChange': 'Passwort nicht geändert' },
        { 'tokenNotFound': 'Token nicht gefunden' },
        { 'passwordNotChanged': 'Passwort nicht geändert' },
        { 'notConfirmPassword': 'Sie haben das Passwort nicht bestätigt' }
    ]
};


/***/ }),

/***/ "WSQV":
/*!**********************************************************************************!*\
  !*** ./src/app/component/profile-address-edit/profile-address-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileAddressEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddressEditComponent", function() { return ProfileAddressEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");









class ProfileAddressEditComponent {
    constructor(router, sessionService, modelService, messageService) {
        this.router = router;
        this.sessionService = sessionService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.isPressed = false;
        this.model = Object.assign({}, this.sessionService.activeProfile.address);
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            countryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.country),
            regionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.region),
            streetControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.street),
            houseControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.house),
            zipControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.zipCode),
            cityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.city)
        });
    }
    saveClick() {
        this.isPressed = true;
        this.modelService.saveProfileAddress(this.model).subscribe((model) => {
            this.isPressed = false;
            this.sessionService.activeProfile = model;
            this.router.navigate(['profile']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
}
ProfileAddressEditComponent.ɵfac = function ProfileAddressEditComponent_Factory(t) { return new (t || ProfileAddressEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
ProfileAddressEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileAddressEditComponent, selectors: [["app-profile-address-edit"]], decls: 42, vars: 11, consts: [[1, "p-fluid", "main-container", "p-col-12"], [1, "header"], ["src", "assets/images/settings.png"], [1, "center-container", "header-text"], [3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "streetInput", "formControlName", "streetControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "streetInput"], [1, "center-container", "standard-indent"], ["id", "houseInput", "formControlName", "houseControl", "maxlength", "10", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "houseInput"], ["id", "zipInput", "formControlName", "zipControl", "maxlength", "20", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "zipInput"], ["id", "cityInput", "formControlName", "cityControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "cityInput"], ["id", "regionInput", "formControlName", "regionControl", "maxlength", "100", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "regionInput"], ["id", "countryInput", "formControlName", "countryControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "countryInput"], [1, "center-container", 2, "margin-top", "15px"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], ["routerLink", "/profile", 1, "white-button"]], template: function ProfileAddressEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profil bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Stra\u00DFe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.house = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hausnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_18_listener($event) { return ctx.model.zipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Postleitzahl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_23_listener($event) { return ctx.model.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stadt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_28_listener($event) { return ctx.model.region = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bundesland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressEditComponent_Template_input_ngModelChange_33_listener($event) { return ctx.model.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Land");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileAddressEditComponent_Template_button_click_37_listener() { return ctx.saveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.house);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.zipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWFkZHJlc3MtZWRpdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQzRCRTtFRDdCRjtJQU1JLHNCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFESjtBQ2tCRTtFRG5CQTtJQUtJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLWFkZHJlc3MtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICBAaW5jbHVkZSBtZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZCB7XHJcbiAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59IiwiLy8gU21hbGwgc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXhzLW1pbjogMzYwcHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgKHBvcnRyYWl0IHZpZXcpXHJcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcclxuXHJcbi8vIFRhYmxldHMgYW5kIHNtYWxsIGRlc2t0b3BzXHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuXHJcbi8vIExhcmdlIHRhYmxldHMgYW5kIGRlc2t0b3BzXHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBMYXJnZSBkZXNrdG9wc1xyXG4kc2NyZWVuLXh4bC1taW46IDE2MDBweDtcclxuXHJcbkBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14cy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXh4bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByd2QoJHNjcmVlbikge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZlcnRpY2FsLXNjcm9sbCB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNjUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGVmZmVjdHMge1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVzZXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuQG1peGluIGllMTFvbmx5IHtcclxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileAddressEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-address-edit',
                templateUrl: './profile-address-edit.component.html',
                styleUrls: ['./profile-address-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "WSXM":
/*!********************************************************************************!*\
  !*** ./src/app/component/profile-person-edit/profile-person-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfilePersonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePersonEditComponent", function() { return ProfilePersonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "eO1q");











function ProfilePersonEditComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", gender_r1)("selected", ctx_r0.isGenderSelected(gender_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gender_r1);
} }
class ProfilePersonEditComponent {
    constructor(router, sessionService, modelService, messageService) {
        this.router = router;
        this.sessionService = sessionService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.date1 = new Date;
        this.isPressed = false;
        this.genders = ['männlich', 'weiblich', 'divers'];
        this.model = Object.assign({}, this.sessionService.activeProfile.person);
        if (this.model.birthDate) {
            this.model.birthDate = new Date(this.model.birthDate);
        }
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.firstName),
            lastNameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.lastName),
            birthDateControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.birthDate),
            genderControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.gender),
        });
    }
    saveClick() {
        this.isPressed = true;
        if (this.model.birthDate) {
            const offset = this.model.birthDate.getTimezoneOffset();
            const isoDate = this.model.birthDate.setMinutes(-offset);
            this.model.birthDate = new Date(isoDate);
        }
        this.modelService.saveProfilePerson(this.model).subscribe((model) => {
            this.isPressed = false;
            this.sessionService.activeProfile = model;
            this.router.navigate(['profile']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    get dateRange() {
        const lastYear = new Date().getFullYear();
        const firstYear = lastYear - 100;
        return `${firstYear}:${lastYear}`;
    }
    changeGender($event) {
        const value = $event.target.value;
        this.model.gender = value.split(':')[1].trim();
    }
    isGenderSelected(gender) {
        if (this.model.gender) {
            return this.model.gender === gender;
        }
        return gender === this.genders[2];
    }
}
ProfilePersonEditComponent.ɵfac = function ProfilePersonEditComponent_Factory(t) { return new (t || ProfilePersonEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
ProfilePersonEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePersonEditComponent, selectors: [["app-profile-person-edit"]], decls: 32, vars: 12, consts: [[1, "p-fluid", "main-container", "p-col-12"], [1, "header"], ["src", "assets/images/settings.png"], [1, "center-container", "header-text"], [3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "firstNameInput", "formControlName", "firstNameControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "firstNameInput"], [1, "center-container", "standard-indent"], ["id", "lastNameInput", "formControlName", "lastNameControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "lastNameInput"], [1, "label"], ["formControlName", "genderControl", 1, "small-input-container", 3, "change"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["id", "calendar", "formControlName", "birthDateControl", "dateFormat", "dd.mm.yy", 3, "ngModel", "monthNavigator", "yearNavigator", "yearRange", "ngModelChange"], ["for", "calendar"], [1, "p-field", "center-container", 2, "margin-top", "91px"], [1, "orange-button", 3, "click"], [1, "p-field", "center-container", 2, "margin-top", "20px"], ["routerLink", "/profile", 1, "white-button"], [3, "ngValue", "selected"]], template: function ProfilePersonEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profil bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonEditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vorname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nachname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Geschlecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfilePersonEditComponent_Template_select_change_19_listener($event) { return ctx.changeGender($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfilePersonEditComponent_option_20_Template, 2, 3, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p-calendar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonEditComponent_Template_p_calendar_ngModelChange_23_listener($event) { return ctx.model.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Geburtsdatum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePersonEditComponent_Template_button_click_27_listener() { return ctx.saveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.birthDate)("monthNavigator", true)("yearNavigator", true)("yearRange", ctx.dateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLXBlcnNvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FDNEJFO0VEN0JGO0lBTUksc0JBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQURKO0FDa0JFO0VEbkJBO0lBS0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6InByb2ZpbGUtcGVyc29uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuXHJcbiAgQGluY2x1ZGUgbWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgQGluY2x1ZGUgbWQge1xyXG4gICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufSIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePersonEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-person-edit',
                templateUrl: './profile-person-edit.component.html',
                styleUrls: ['./profile-person-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "Xn7J":
/*!********************************************************************************!*\
  !*** ./src/app/component/profile-address-new/profile-address-new.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileAddressNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddressNewComponent", function() { return ProfileAddressNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");









class ProfileAddressNewComponent {
    constructor(router, modelService, messageService, sessionService) {
        this.router = router;
        this.modelService = modelService;
        this.messageService = messageService;
        this.sessionService = sessionService;
        this.isPressed = false;
        this.changeStage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = {};
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            countryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.country),
            regionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.region),
            streetControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.street),
            houseControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.house),
            zipControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.zipCode),
            cityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.city)
        });
    }
    nextClick() {
        this.isPressed = true;
        this.modelService.saveProfileAddress(this.model).subscribe(() => {
            this.isPressed = false;
            this.changeStage.emit(3);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    cancelClick() {
        this.modelService.canselRegistration().subscribe(() => {
        });
        this.sessionService.isRegistrationStarted = false;
        this.router.navigate(['login']);
    }
}
ProfileAddressNewComponent.ɵfac = function ProfileAddressNewComponent_Factory(t) { return new (t || ProfileAddressNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"])); };
ProfileAddressNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileAddressNewComponent, selectors: [["app-profile-address-new"]], outputs: { changeStage: "changeStage" }, decls: 37, vars: 11, consts: [[3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "streetInput", "formControlName", "streetControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "streetInput"], [1, "center-container", "standard-indent"], ["id", "houseInput", "formControlName", "houseControl", "maxlength", "10", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "houseInput"], ["id", "zipInput", "formControlName", "zipControl", "maxlength", "20", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "zipInput"], ["id", "cityInput", "formControlName", "cityControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "cityInput"], ["id", "regionInput", "formControlName", "regionControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "regionInput"], ["id", "countryInput", "formControlName", "countryControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "countryInput"], [1, "center-container", 2, "margin-top", "20px"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], [1, "white-button", 3, "click"]], template: function ProfileAddressNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_3_listener($event) { return ctx.model.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stra\u00DFe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.house = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hausnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.zipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Postleitzahl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_18_listener($event) { return ctx.model.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stadt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_23_listener($event) { return ctx.model.region = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bundesland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileAddressNewComponent_Template_input_ngModelChange_28_listener($event) { return ctx.model.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Land");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileAddressNewComponent_Template_button_click_32_listener() { return ctx.nextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Weiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileAddressNewComponent_Template_button_click_35_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.house);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.zipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWFkZHJlc3MtbmV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FDNEJFO0VEN0JGO0lBTUksc0JBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQURKO0FDa0JFO0VEbkJBO0lBS0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6InByb2ZpbGUtYWRkcmVzcy1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgQGluY2x1ZGUgbWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgQGluY2x1ZGUgbWQge1xyXG4gICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufSIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileAddressNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-address-new',
                templateUrl: './profile-address-new.component.html',
                styleUrls: ['./profile-address-new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }]; }, { changeStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "YE9q":
/*!******************************************************!*\
  !*** ./src/app/component/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _const_de_calendar_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/de-calendar.constant */ "xJ/m");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "Gxio");










class LayoutComponent {
    constructor(authService, sessionService, profileService, router, primeNGConfig) {
        this.authService = authService;
        this.sessionService = sessionService;
        this.profileService = profileService;
        this.router = router;
        this.primeNGConfig = primeNGConfig;
    }
    ngOnInit() {
        this.primeNGConfig.setTranslation(_const_de_calendar_constant__WEBPACK_IMPORTED_MODULE_2__["calendar_DE"]);
        const refreshToken = this.authService.refreshToken;
        const passportToken = this.authService.passwordToken;
        const hasRefreshToken = refreshToken && refreshToken !== '';
        const hasPassportToken = passportToken && passportToken !== '';
        if (hasRefreshToken || hasPassportToken) {
            if (hasRefreshToken) {
                this.authService.accessToken = refreshToken;
                this.loginWithRefreshToken();
            }
            else {
                this.authService.accessToken = passportToken;
                this.router.navigate(['changepassword']);
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    loginWithRefreshToken() {
        this.authService
            .restoreToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.profileService.getProfile()
                .subscribe((model) => {
                this.sessionService.activeProfile = model;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => { throw (error); }))
            .subscribe((response) => {
            this.sessionService.session.isVeryfied = response.verified;
            this.sessionService.session.isCheckedIn = response.checked;
            this.sessionService.session.lotNumber = response.lotNumber;
            const path = response.checked ? 'check-out' : 'check-in';
            this.router.navigate([path]);
        }, () => {
            this.router.navigate(['login']);
        });
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, consts: [[1, "p-d-flex", "p-flex-row", "p-flex-inline", "p-jc-center", "main-component"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.p-field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-component[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 100%;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkYiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVzIHtcclxuICAucC1pbnB1dHRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnAtZmllbGQgKiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluLWNvbXBvbmVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/layout/layout.component */ "YE9q");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/forgot-password/forgot-password.component */ "q8tS");
/* harmony import */ var _component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/check-in/check-in.component */ "i57r");
/* harmony import */ var _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/check-out/check-out.component */ "n4yd");
/* harmony import */ var _component_verification_verification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/verification/verification.component */ "4RLT");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/auth.service */ "6uu6");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/config.service */ "LWby");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/agreement/agreement.component */ "PI0+");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/session.service */ "pRC4");
/* harmony import */ var _service_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/interceptor/auth.interceptor */ "83UI");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _component_profile_person_edit_profile_person_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/profile-person-edit/profile-person-edit.component */ "WSXM");
/* harmony import */ var _component_profile_address_edit_profile_address_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/profile-address-edit/profile-address-edit.component */ "WSQV");
/* harmony import */ var _component_profile_contact_edit_profile_contact_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/profile-contact-edit/profile-contact-edit.component */ "1JWp");
/* harmony import */ var _service_error_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/error.service */ "2EMw");
/* harmony import */ var _component_profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/profile-person-new/profile-person-new.component */ "o0Vi");
/* harmony import */ var _component_profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/profile-address-new/profile-address-new.component */ "Xn7J");
/* harmony import */ var _component_profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/profile-contact-new/profile-contact-new.component */ "eGik");
/* harmony import */ var _component_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/change-password/change-password.component */ "ZJCw");
/* harmony import */ var _service_guest_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./service/guest.service */ "yU8j");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./service/user.service */ "Ouoq");
/* harmony import */ var _component_vaccine_list_vaccine_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/vaccine-list/vaccine-list.component */ "sn4E");
/* harmony import */ var _component_share_data_share_data_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./component/share-data/share-data.component */ "7NK5");
/* harmony import */ var _component_profile_new_profile_new_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./component/profile-new/profile-new.component */ "1bv2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common */ "ofXK");









































 // #new

class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_40__["APP_BASE_HREF"], useValue: '/' },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_40__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_40__["HashLocationStrategy"] },
        _service_config_service__WEBPACK_IMPORTED_MODULE_21__["ConfigService"],
        _service_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
        _service_session_service__WEBPACK_IMPORTED_MODULE_24__["SessionService"],
        _service_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_22__["MessageService"],
        _service_error_service__WEBPACK_IMPORTED_MODULE_30__["ErrorService"],
        _service_guest_service__WEBPACK_IMPORTED_MODULE_35__["GuestService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _service_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_10__["PasswordModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
        _component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_17__["CheckInComponent"],
        _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__["CheckOutComponent"],
        _component_verification_verification_component__WEBPACK_IMPORTED_MODULE_19__["VerificationComponent"],
        _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_23__["AgreementComponent"],
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
        _component_profile_address_edit_profile_address_edit_component__WEBPACK_IMPORTED_MODULE_28__["ProfileAddressEditComponent"],
        _component_profile_person_edit_profile_person_edit_component__WEBPACK_IMPORTED_MODULE_27__["ProfilePersonEditComponent"],
        _component_profile_contact_edit_profile_contact_edit_component__WEBPACK_IMPORTED_MODULE_29__["ProfileContactEditComponent"],
        _component_profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_31__["ProfilePersonNewComponent"],
        _component_profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_32__["ProfileAddressNewComponent"],
        _component_profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_33__["ProfileContactNewComponent"],
        _component_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_34__["ChangePasswordComponent"],
        _component_vaccine_list_vaccine_list_component__WEBPACK_IMPORTED_MODULE_37__["VaccineListComponent"],
        _component_share_data_share_data_component__WEBPACK_IMPORTED_MODULE_38__["ShareDataComponent"],
        _component_profile_new_profile_new_component__WEBPACK_IMPORTED_MODULE_39__["ProfileNewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_10__["PasswordModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckboxModule"],
                    primeng_password__WEBPACK_IMPORTED_MODULE_10__["PasswordModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                declarations: [
                    _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
                    _component_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                    _component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_17__["CheckInComponent"],
                    _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__["CheckOutComponent"],
                    _component_verification_verification_component__WEBPACK_IMPORTED_MODULE_19__["VerificationComponent"],
                    _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_23__["AgreementComponent"],
                    _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                    _component_profile_address_edit_profile_address_edit_component__WEBPACK_IMPORTED_MODULE_28__["ProfileAddressEditComponent"],
                    _component_profile_person_edit_profile_person_edit_component__WEBPACK_IMPORTED_MODULE_27__["ProfilePersonEditComponent"],
                    _component_profile_contact_edit_profile_contact_edit_component__WEBPACK_IMPORTED_MODULE_29__["ProfileContactEditComponent"],
                    _component_profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_31__["ProfilePersonNewComponent"],
                    _component_profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_32__["ProfileAddressNewComponent"],
                    _component_profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_33__["ProfileContactNewComponent"],
                    _component_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_34__["ChangePasswordComponent"],
                    _component_vaccine_list_vaccine_list_component__WEBPACK_IMPORTED_MODULE_37__["VaccineListComponent"],
                    _component_share_data_share_data_component__WEBPACK_IMPORTED_MODULE_38__["ShareDataComponent"],
                    _component_profile_new_profile_new_component__WEBPACK_IMPORTED_MODULE_39__["ProfileNewComponent"]
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_40__["APP_BASE_HREF"], useValue: '/' },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_40__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_40__["HashLocationStrategy"] },
                    _service_config_service__WEBPACK_IMPORTED_MODULE_21__["ConfigService"],
                    _service_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                    _service_session_service__WEBPACK_IMPORTED_MODULE_24__["SessionService"],
                    _service_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"],
                    primeng_api__WEBPACK_IMPORTED_MODULE_22__["MessageService"],
                    _service_error_service__WEBPACK_IMPORTED_MODULE_30__["ErrorService"],
                    _service_guest_service__WEBPACK_IMPORTED_MODULE_35__["GuestService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _service_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"], multi: true }
                ],
                bootstrap: [_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZJCw":
/*!************************************************************************!*\
  !*** ./src/app/component/change-password/change-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");











function ChangePasswordComponent_p_progressSpinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressSpinner", 18);
} }
function ChangePasswordComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showPassword = !ctx_r5.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showPassword = !ctx_r7.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showPasswordAgain = !ctx_r9.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.showPasswordAgain = !ctx_r11.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(router, authSrevice, messageService) {
        this.router = router;
        this.authSrevice = authSrevice;
        this.messageService = messageService;
        this.isPressed = false;
        this.showPassword = false;
        this.showPasswordAgain = false;
        this.model = {};
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password),
            confirmPasswordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.confirmPassword)
        });
    }
    resetClick() {
        this.isPressed = true;
        if (this.authSrevice.passwordToken) {
            this.authSrevice.accessToken = this.authSrevice.passwordToken;
            this.authSrevice.passwordToken = null;
        }
        this.authSrevice.changePassword(this.model).subscribe(() => {
            this.authSrevice.accessToken = null;
            const message = {
                severity: 'info', summary: 'Servicemeldung', detail: 'Dein Passwort wurde erfolgreich geändert'
            };
            this.messageService.add(message);
            this.isPressed = false;
            this.router.navigate(['login']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    cancelClick() {
        this.authSrevice.passwordToken = null;
        this.authSrevice.accessToken = null;
        this.router.navigate(['login']);
    }
    get passwordType() {
        return this.showPassword ? 'text' : 'password';
    }
    get passwordAgainType() {
        return this.showPasswordAgain ? 'text' : 'password';
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-confirm-password"]], decls: 23, vars: 14, consts: [[1, "p-fluid", "main-container", "p-col-12"], ["styleClass", "custom-spinner", 4, "ngIf"], [1, "center-container", "header-image-container"], ["src", "assets/forgotpassword.jpg"], [1, "p-field", "center-container", "attension-text"], [1, "first-indent", 3, "formGroup"], [1, "p-field", "center-container"], [1, "password-input", "p-input-icon-right", 2, "width", "350px!important"], ["class", "pi pi-eye", 3, "click", 4, "ngIf"], ["class", "pi pi-eye-slash", 3, "click", 4, "ngIf"], ["pPassword", "", "formControlName", "passwordControl", "pInputText", "", "placeholder", "Passwort", 1, "big-input-container", 2, "width", "350px!important", "padding-left", "60px", 3, "type", "ngModel", "ngModelChange"], [1, "standard-indent"], [1, "password-again-input", "p-input-icon-right", 2, "width", "350px"], ["pPassword", "", "formControlName", "confirmPasswordControl", "pInputText", "", "placeholder", "Passwort wiederholen", 1, "big-input-container", 2, "width", "350px!important", "padding-left", "60px", 3, "type", "ngModel", "ngModelChange"], [1, "p-field", "center-container", 2, "margin-top", "91px"], [1, "orange-button", 3, "click"], [1, "p-field", "center-container", 2, "margin-top", "20px"], [1, "white-button", 3, "click"], ["styleClass", "custom-spinner"], [1, "pi", "pi-eye", 3, "click"], [1, "pi", "pi-eye-slash", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Neues Passwort vergeben ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChangePasswordComponent_i_9_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChangePasswordComponent_i_10_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChangePasswordComponent_i_14_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChangePasswordComponent_i_15_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_16_listener($event) { return ctx.model.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_18_listener() { return ctx.resetClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_21_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordAgainType)("ngModel", ctx.model.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_password__WEBPACK_IMPORTED_MODULE_6__["Password"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"]], styles: [".password-input[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('password-pass.svg');\n  margin-left: 15px;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  background-repeat: no-repeat;\n}\n\n.password-again-input[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('verified_confirm.svg');\n  margin-left: 15px;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtBQUNEIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1pbnB1dDo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcGFzc3dvcmQtcGFzcy5zdmcnKTtcclxuXHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0dG9wOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1hZ2Fpbi1pbnB1dDo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVyaWZpZWRfY29uZmlybS5zdmcnKTtcclxuXHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0dG9wOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "a6Wg":
/*!***********************************************************!*\
  !*** ./src/app/infrastructure/error/auth-error-config.ts ***!
  \***********************************************************/
/*! exports provided: autErrorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autErrorConfig", function() { return autErrorConfig; });
const autErrorConfig = {
    'api/auth': [
        { 'loginOrPasswordNotFound': 'Ungültige Anmeldung und / oder ungültiges Passwort.' },
        { 'emailNotFound': 'E-Mail nicht gefunden.' },
        { 'cellularNotFound': 'Telefon nicht gefunden.' },
        { 'emptyLogin': 'Login darf nicht leer sein' },
        { 'notificationNotSend': 'Benachrichtigung wurde nicht gesendet' }
    ]
};


/***/ }),

/***/ "aOlj":
/*!*****************************************!*\
  !*** ./src/app/service/base.service.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "LWby");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.service */ "2EMw");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









class BaseService {
    constructor(configService, errorService, messageService, router, client) {
        this.configService = configService;
        this.errorService = errorService;
        this.messageService = messageService;
        this.router = router;
        this.client = client;
    }
    mergeWithConfigRequest(project) {
        return this.configService
            .config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(project));
    }
    callGet(path) {
        return this.mergeWithConfigRequest(config => {
            return this.client
                .get(this.getPath(path, config))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.processHttpErrorRespone(error)));
        });
    }
    callPost(model, path) {
        return this.mergeWithConfigRequest(config => {
            return this.client
                .post(this.getPath(path, config), model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.processHttpErrorRespone(error)));
        });
    }
    callPut(model, path) {
        return this.mergeWithConfigRequest(config => {
            return this.client.put(this.getPath(path, config), model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.processHttpErrorRespone(error)));
        });
    }
    callDelete(path) {
        return this.mergeWithConfigRequest(config => {
            return this.client.delete(this.getPath(path, config))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.processHttpErrorRespone(error)));
        });
    }
    getPath(path, config) {
        if (path === undefined || path === '') {
            return `${config === null || config === void 0 ? void 0 : config.apiUrl}/${this.controller}`;
        }
        else {
            return `${config === null || config === void 0 ? void 0 : config.apiUrl}/${this.controller}/${path}`;
        }
    }
    processHttpErrorRespone(error) {
        var _a;
        const messageList = [];
        let hasTokenError = false;
        if (error.error instanceof ErrorEvent) {
            messageList.push(error.error.message);
        }
        else {
            const status = error.status;
            if (status === 500 || status === 405) {
                messageList.push('Dienst nicht verfügbar');
            }
            if ('errors' in error.error) {
                const errorArray = error.error.errors;
                hasTokenError = ((_a = (errorArray.filter(item => item === this.errorService.invalidTokenKey))) === null || _a === void 0 ? void 0 : _a.length) > 0;
                const message = hasTokenError ? this.errorService.invalidTokenError : this.errorService.getServiceError(this.controller, errorArray[0]);
                messageList.push(message);
            }
            else {
                messageList.push(error.message);
            }
        }
        if (hasTokenError) {
            this.router.navigate(['login']);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(messageList);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eGik":
/*!********************************************************************************!*\
  !*** ./src/app/component/profile-contact-new/profile-contact-new.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileContactNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContactNewComponent", function() { return ProfileContactNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ProfileContactNewComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_i_24_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showPassword = !ctx_r4.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactNewComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_i_25_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showPassword = !ctx_r6.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactNewComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showPasswordAgain = !ctx_r8.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileContactNewComponent_i_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_i_32_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showPasswordAgain = !ctx_r10.showPasswordAgain; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileContactNewComponent {
    constructor(router, modelService, authService, sessionService, messageService) {
        this.router = router;
        this.modelService = modelService;
        this.authService = authService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.isPressed = false;
        this.showPassword = false;
        this.showPasswordAgain = false;
        this.model = {};
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phoneControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.cellular),
            phoneAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.phoneAgain),
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.email),
            emailAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.emailAgain),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password),
            passwordAgainControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.passwordAgain)
        });
    }
    registerClick() {
        this.isPressed = true;
        const errorList = [];
        if (!this.checkControl('phoneControl', 'phoneAgainControl')) {
            errorList.push('Phones must be equal');
        }
        if (!this.checkControl('emailControl', 'emailAgainControl')) {
            errorList.push('Emails must be equal');
        }
        if (!this.checkControl('passwordControl', 'passwordAgainControl')) {
            errorList.push('Passwords must be equal');
        }
        if (errorList.length > 0) {
            const message = { severity: 'error', summary: 'Error', detail: errorList[0] };
            this.messageService.add(message);
            this.isPressed = false;
            return;
        }
        this.modelService.saveProfileContact(this.model).subscribe((model) => {
            this.isPressed = false;
            this.sessionService.activeProfile = model;
            this.sessionService.isRegistrationStarted = false;
            this.authService.accessToken = null;
            this.router.navigate(['verification']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    get passwordType() {
        return this.showPassword ? 'text' : 'password';
    }
    get passwordAgainType() {
        return this.showPasswordAgain ? 'text' : 'password';
    }
    checkControl(name1, name2) {
        const control1 = this.modelForm.get(name1);
        const control2 = this.modelForm.get(name2);
        return control1 && control2 && control1.value === control2.value ? true : false;
    }
    cancelClick() {
        this.modelService.canselRegistration().subscribe(() => {
            this.sessionService.isRegistrationStarted = false;
        });
        this.router.navigate(['login']);
    }
}
ProfileContactNewComponent.ɵfac = function ProfileContactNewComponent_Factory(t) { return new (t || ProfileContactNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
ProfileContactNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContactNewComponent, selectors: [["app-profile-contact-new"]], decls: 42, vars: 17, consts: [[1, "p-fluid", "main-container"], [3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "phoneInput", "formControlName", "phoneControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "phoneInput"], [1, "center-container", "standard-indent"], ["id", "phoneAgainInput", "formControlName", "phoneAgainControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "phoneAgainInput"], ["id", "emailInput", "formControlName", "emailControl", "type", "text", "maxlength", "100", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "emailInput"], ["id", "emailAgainInput", "formControlName", "emailAgainControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "emailAgainInput"], [1, "p-float-label", "p-input-icon-right"], ["class", "pi pi-eye", 3, "click", 4, "ngIf"], ["class", "pi pi-eye-slash", 3, "click", 4, "ngIf"], ["id", "passwordInput", "formControlName", "passwordControl", "maxlength", "100", "pInputText", "", 1, "small-input-container", 3, "type", "ngModel", "ngModelChange"], ["for", "passwordInput"], ["id", "passwordAgainInput", "formControlName", "passwordAgainControl", "maxlength", "100", "pInputText", "", 1, "small-input-container", 3, "type", "ngModel", "ngModelChange"], ["for", "passwordAgainInput"], [1, "center-container", 2, "margin-top", "20px"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], [1, "white-button", 3, "click"], [1, "pi", "pi-eye", 3, "click"], [1, "pi", "pi-eye-slash", 3, "click"]], template: function ProfileContactNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_4_listener($event) { return ctx.model.cellular = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Telefonnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_9_listener($event) { return ctx.phoneAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Telefonnummer (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_19_listener($event) { return ctx.emailAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E-Mail (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileContactNewComponent_i_24_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileContactNewComponent_i_25_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_26_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileContactNewComponent_i_31_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileContactNewComponent_i_32_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileContactNewComponent_Template_input_ngModelChange_33_listener($event) { return ctx.passwordAgain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Passwort (wiederholen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_Template_button_click_37_listener() { return ctx.registerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Abschlie\u00DFen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileContactNewComponent_Template_button_click_40_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.cellular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPasswordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordAgainType)("ngModel", ctx.passwordAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNvbnRhY3QtbmV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FDNEJFO0VEN0JGO0lBTUksc0JBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQURKO0FDa0JFO0VEbkJBO0lBS0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6InByb2ZpbGUtY29udGFjdC1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgQGluY2x1ZGUgbWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgQGluY2x1ZGUgbWQge1xyXG4gICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufSIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContactNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-contact-new',
                templateUrl: './profile-contact-new.component.html',
                styleUrls: ['./profile-contact-new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "enuO":
/*!***********************************************************!*\
  !*** ./src/app/infrastructure/error/user-error-config.ts ***!
  \***********************************************************/
/*! exports provided: userErrorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userErrorConfig", function() { return userErrorConfig; });
const userErrorConfig = {
    'api/user': [
        { 'emptyFirstName': 'Der Vorname darf nicht leer sein.' },
        { 'emptyLastName': 'Nachname darf nicht leer sein.' },
        { 'inccorectBirthDate': 'Falsches Geburtsdatum.' },
        { 'emptyCountry': 'Land kann nicht leer sein.' },
        { 'emptyCity': 'Stadt kann nicht leer sein.' },
        { 'emptyStreet': 'Straße kann nicht leer sein.' },
        { 'emptyHouse': 'Haus kann nicht leer sein.' },
        { 'emptyPassword': 'Passwort darf nicht leer sein.' },
        { 'badPassword': 'Falsches Passwort.' },
        { 'inccorectEmail': 'Ungültige E-Mail.' },
        { 'inccorectCellular': 'Ungültiges Telefon.' },
        { 'notAcceptSharedData': 'Datenfreigabe akzeptieren ist nicht ausgewählt.' },
        { 'notAcceptAgreement': 'Vereinbarung akzeptieren ist nicht ausgewählt.' },
        { 'emailIsExists': 'Mitarbeiter mit einer solchen E-Mail ist bereits vorhanden' },
        { 'emailIsExists': 'Mitarbeiter mit einem solchen Telefon ist bereits vorhanden' },
        { 'existesEmail': 'Mitarbeiter mit einem solchen Telefon ist bereits vorhanden' },
        { 'existCellular': 'Mitarbeiter mit einem solchen Telefon ist bereits vorhanden' },
        { 'cantVerifyProfile': 'Ungültiger PIN-Code' },
        { 'locationNotFound': 'Ort nicht gefunden.' }
    ]
};


/***/ }),

/***/ "g8H4":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_infrastructure_control_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/infrastructure/control-validator */ "Lx8b");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");

















function LoginComponent_p_progressSpinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressSpinner", 24);
} }
function LoginComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_i_13_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showPassword = !ctx_r3.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showPassword = !ctx_r5.showPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, profileService, sessionService, router, messageService) {
        this.authService = authService;
        this.profileService = profileService;
        this.sessionService = sessionService;
        this.router = router;
        this.messageService = messageService;
        this.isPressed = false;
        this.showPassword = false;
        this.model = {
            name: '',
            password: '',
            isRemember: false
        };
        this.rememberMe = [];
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            loginControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rememberMeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.controlConfigArray = [
            { key: 'loginControl', validatorList: [_model_infrastructure_control_validator__WEBPACK_IMPORTED_MODULE_3__["ValidatorBase"].requiredValidator('Login ist leer')] },
            { key: 'passwordControl', validatorList: [_model_infrastructure_control_validator__WEBPACK_IMPORTED_MODULE_3__["ValidatorBase"].requiredValidator('Passwort ist leer')] },
        ];
    }
    ngOnInit() {
        if (this.sessionService.isRegistrationStarted) {
            this.profileService.canselRegistration().subscribe(() => {
                this.sessionService.isRegistrationStarted = false;
            });
        }
    }
    loginClick() {
        this.isPressed = true;
        if (!this.isFormValid) {
            this.isPressed = false;
            return;
        }
        if (this.rememberMe.length > 0) {
            this.model.isRemember = true;
        }
        this.authService.login(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.sessionService.session.isCheckedIn = response.checked;
            this.sessionService.session.lotNumber = response.lotNumber;
            this.profileService.getProfile().subscribe((model) => { this.sessionService.activeProfile = model; });
        }))
            .subscribe((response) => {
            if (!response.verified) {
                this.router.navigate(['verification']);
            }
            else {
                const path = response.checked ? 'check-out' : 'check-in';
                this.router.navigate([path]);
            }
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    get passwordType() {
        return this.showPassword ? 'text' : 'password';
    }
    get isFormValid() {
        const messageList = [];
        this.controlConfigArray.forEach(config => {
            var _a;
            (_a = config.validatorList) === null || _a === void 0 ? void 0 : _a.forEach(validator => {
                const error = validator.validate(this.modelForm.get(config.key), '');
                if (error !== null) {
                    const message = { severity: 'error', summary: 'Error', detail: error };
                    messageList.push(message);
                }
            });
        });
        if (messageList.length > 0) {
            this.messageService.addAll(messageList);
            return false;
        }
        return true;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 14, consts: [[1, "main-container"], ["styleClass", "custom-spinner", 4, "ngIf"], [1, "header"], ["src", "assets/images/login.jpg"], [1, "center-container", "header-text"], [1, "login-form", 3, "formGroup"], [1, "input-container", "large"], [1, "icon-container", "user-icon"], ["type", "text", "formControlName", "loginControl", "pInputText", "", "placeholder", "E-Mail oder Telefonnummer", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon-container", "password-icon"], ["pPassword", "", "formControlName", "passwordControl", "placeholder", "Passwort", 1, "input", 3, "type", "ngModel", "ngModelChange"], ["class", "pi pi-eye", 3, "click", 4, "ngIf"], ["class", "pi pi-eye-slash", 3, "click", 4, "ngIf"], [1, "additional-buttons-container"], [1, "p-field-checkbox"], ["name", "rememberMe", "formControlName", "rememberMeControl", "value", "true", "inputId", "rememberMe", 3, "ngModel", "ngModelChange"], ["for", "rememberMe"], ["styleClass", "p-button-link", "routerLink", "/forgotpassword", "label", "Passwort vergessen?"], [1, "button-container"], [1, "orange-button", 3, "click"], [1, "p-d-flex", "p-d-col", "p-jc-between", "center-container"], [2, "font-weight", "700", "margin-top", "12px"], [2, "font-weight", "700"], ["styleClass", "p-button-link", "label", "Registrieren", "routerLink", "/profile/new"], ["styleClass", "custom-spinner"], [1, "pi", "pi-eye", 3, "click"], [1, "pi", "pi-eye-slash", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.model.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_i_13_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_i_14_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_p_checkbox_ngModelChange_17_listener($event) { return ctx.rememberMe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Eingeloggt bleiben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.loginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Einloggen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Noch nicht registriert?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rememberMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_password__WEBPACK_IMPORTED_MODULE_11__["Password"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["Button"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__["ProgressSpinner"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.login-form[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n@media (min-width: 576px) {\n  .login-form[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n}\n.additional-buttons-container[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 576px) {\n  .additional-buttons-container[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n}\n.p-field-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n@media (min-width: 576px) {\n  .p-field-checkbox[_ngcontent-%COMP%] {\n    margin-top: 4px;\n    margin-bottom: 0;\n  }\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQ3FCRTtFRHRCRjtJQU1JLGdCQUFBO0VBREY7QUFDRjtBQ3VCRTtFRDdCRjtJQVVJLHNCQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQ2FFO0VEZkE7SUFLSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFJQTtFQUNFLG1CQUFBO0FBREY7QUNURTtFRFNGO0lBSUksWUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUN0QkU7RURpQkY7SUFRSSw4QkFBQTtJQUNBLG1CQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQ2hDRTtFRDhCRjtJQUlJLGVBQUE7SUFDQSxnQkFBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIEBpbmNsdWRlIHNtIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZCB7XHJcbiAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuXHJcbiAgQGluY2x1ZGUgc20ge1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFkZGl0aW9uYWwtYnV0dG9ucy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICBAaW5jbHVkZSBzbSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG5cclxuLnAtZmllbGQtY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIEBpbmNsdWRlIHNtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "i4rG":
/*!***********************************************************!*\
  !*** ./src/app/infrastructure/error/cora-error-config.ts ***!
  \***********************************************************/
/*! exports provided: coraErrorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coraErrorConfig", function() { return coraErrorConfig; });
/* harmony import */ var _auth_error_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-error-config */ "a6Wg");
/* harmony import */ var _common_error_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-error-config */ "TlKl");
/* harmony import */ var _user_error_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-error-config */ "enuO");



const coraErrorConfig = {
    errors: [
        _common_error_config__WEBPACK_IMPORTED_MODULE_1__["commonErrorConfig"],
        _auth_error_config__WEBPACK_IMPORTED_MODULE_0__["autErrorConfig"],
        _user_error_config__WEBPACK_IMPORTED_MODULE_2__["userErrorConfig"]
    ]
};


/***/ }),

/***/ "i57r":
/*!**********************************************************!*\
  !*** ./src/app/component/check-in/check-in.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsqr */ "7Ozu");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var _service_guest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/guest.service */ "yU8j");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");











function CheckInComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cameraProblemResult, " ");
} }
function CheckInComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.scanClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scannen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Einstellungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mein Impfpass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_div_14_Template_p_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx_r4.isPressed);
} }
class CheckInComponent {
    constructor(router, messageService, sessionService, modelService, authService) {
        this.router = router;
        this.messageService = messageService;
        this.sessionService = sessionService;
        this.modelService = modelService;
        this.authService = authService;
        this.canvasElement = null;
        this.canvasContext = null;
        this.video = null;
        this.videoStatus = undefined;
        this.hasCamera = false;
        this.startedScanning = false;
        this.isPressed = false;
        this.isReady = false;
        this.cameraProblem = undefined;
        this.imageContainer = document.getElementById('imageContainer');
        this.cameraContainer = document.getElementById('cameraContainer');
    }
    ngOnInit() {
        const localQrCode = this.modelService.localQrCode;
        if (localQrCode) {
            const model = { qrCode: localQrCode };
            this.modelService
                .checkIn(model).subscribe(() => {
                this.modelService.localQrCode = null;
                this.sessionService.session.isCheckedIn = true;
                this.router.navigate(['check-out']);
            }, (error) => {
                this.modelService.localQrCode = null;
                if (error && error instanceof Array) {
                    error.forEach(item => {
                        const message = { severity: 'error', summary: 'Error', detail: item };
                        this.messageService.add(message);
                    });
                }
            });
        }
    }
    ngAfterViewInit() {
        var _a;
        this.imageContainer = document.getElementById('imageContainer');
        this.cameraContainer = document.getElementById('cameraContainer');
        if (this.cameraContainer) {
            this.cameraContainer.style.display = 'none';
        }
        this.video = document.createElement('video');
        this.canvasElement = document.querySelector('canvas');
        this.canvasContext = (_a = this.canvasElement) === null || _a === void 0 ? void 0 : _a.getContext('2d');
    }
    settingsClick() {
        this.router.navigate(['test']);
    }
    scanClick() {
        this.startedScanning = true;
        navigator.mediaDevices
            .getUserMedia({ audio: false, video: { facingMode: 'environment' } })
            .then((stream) => {
            if (this.imageContainer) {
                this.imageContainer.style.display = 'none';
            }
            if (this.cameraContainer) {
                this.cameraContainer.style.display = 'block';
            }
            if (this.video) {
                this.video.srcObject = stream;
                this.video.setAttribute('playsinline', 'true');
                this.video.play();
                requestAnimationFrame(this.tick.bind(this));
            }
            else {
                this.cameraProblem = `Error: Videocontainer ist undefiniert`;
            }
        })
            .catch((error) => {
            this.hasCamera = false;
            if ('message' in error) {
                this.cameraProblem = `Error: ${error.message}`;
            }
        });
    }
    checkinClick() {
        this.isPressed = true;
        if (this.videoStatus) {
            const model = { qrCode: this.videoStatus };
            this.modelService
                .checkIn(model).subscribe(() => {
                this.isPressed = false;
                this.hasCamera = false;
                this.startedScanning = false;
                this.sessionService.session.isCheckedIn = true;
                this.router.navigate(['check-out']);
            }, (error) => {
                this.isPressed = false;
                if (error && error instanceof Array) {
                    error.forEach(item => {
                        const message = { severity: 'error', summary: 'Error', detail: item };
                        this.messageService.add(message);
                    });
                }
            });
        }
    }
    logoutClick() {
        this.authService.logoff().subscribe(() => {
            this.sessionService.clearSession();
            this.router.navigate(['login']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    get lotNumber() {
        var _a;
        return (_a = this.sessionService.session.lotNumber) !== null && _a !== void 0 ? _a : 'Nicht definiert';
    }
    get cameraProblemResult() {
        if (!this.startedScanning) {
            return undefined;
        }
        return this.hasCamera ? undefined : this.cameraProblem;
    }
    get hasQrCode() {
        return this.videoStatus !== undefined;
    }
    cancelClick() {
        this.startedScanning = false;
        if (this.imageContainer) {
            this.imageContainer.style.display = 'block';
        }
        if (this.cameraContainer) {
            this.cameraContainer.style.display = 'none';
        }
    }
    tick() {
        if (this.video !== null && this.canvasElement !== null && this.canvasContext !== null) {
            if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
                this.canvasElement.hidden = false;
                this.canvasElement.height = this.video.videoHeight;
                this.canvasElement.width = this.video.videoWidth;
                this.canvasContext.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);
                const imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
                const code = jsqr__WEBPACK_IMPORTED_MODULE_1___default()(imageData.data, imageData.width, imageData.height);
                if (code !== null) {
                    this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
                    this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
                    this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
                    this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
                    this.videoStatus = code.data;
                }
            }
            requestAnimationFrame(this.tick.bind(this));
        }
    }
    drawLine(begin, end, color) {
        if (this.canvasContext !== null) {
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(begin.x, begin.y);
            this.canvasContext.lineTo(end.x, end.y);
            this.canvasContext.lineWidth = 4;
            this.canvasContext.strokeStyle = color;
            this.canvasContext.stroke();
        }
    }
}
CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_guest_service__WEBPACK_IMPORTED_MODULE_5__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], decls: 15, vars: 6, consts: [[1, "main-container"], ["class", "spinner-container", 4, "ngIf"], [1, "p-d-flex", "p-flex-column", "p-ai-center", "p-field", "scan-header-container"], [1, "attension-text"], [1, "regular-text"], ["id", "imageContainer", 1, "image-container"], ["src", "assets/scan.jpg"], ["class", "regular-text", "style", "margin-top: 40px", 4, "ngIf"], ["id", "cameraContainer", 1, "center-container"], [2, "width", "230px", "height", "230px"], ["class", "center-container", 4, "ngIf"], ["class", "center-container", "style", "margin-top:10px", 4, "ngIf"], [4, "ngIf"], [1, "spinner-container"], ["styleClass", "custom-spinner"], [1, "regular-text", 2, "margin-top", "40px"], [1, "center-container"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], ["routerLink", "/check-in", 1, "white-button", 3, "click"], ["routerLink", "/profile", 1, "white-button"], ["routerLink", "/vaccine", 1, "white-button"], [1, "center-container", 2, "font-weight", "700", "margin-top", "10px"], ["styleClass", "p-button-link", "label", "Ausloggen", 3, "click"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckInComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " QR-Code scannen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckInComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CheckInComponent_div_12_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckInComponent_div_13_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CheckInComponent_div_14_Template, 9, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID ", ctx.lotNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.startedScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startedScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startedScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startedScanning);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["Button"]], styles: [".scan-header-container[_ngcontent-%COMP%] {\n  background-color: #ebeef0;\n  border: 1px solid #a8c8d9;\n  border-radius: 20px;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 15px 0;\n  margin-bottom: 15px;\n}\n\n.attension-text[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVjay1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUYiLCJmaWxlIjoiY2hlY2staW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbi1oZWFkZXItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZWYwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGM4ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmF0dGVuc2lvbi10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in',
                templateUrl: './check-in.component.html',
                styleUrls: ['./check-in.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _service_guest_service__WEBPACK_IMPORTED_MODULE_5__["GuestService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "n4yd":
/*!************************************************************!*\
  !*** ./src/app/component/check-out/check-out.component.ts ***!
  \************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/guest.service */ "yU8j");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class CheckOutComponent {
    constructor(router, modelService, sessionService, messageService) {
        this.router = router;
        this.modelService = modelService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.isPressed = false;
        this.model = {
            name: '',
            address: '',
            city: '',
            zipCode: '',
            timeWork: {
                hours: 0,
                minutes: 0
            },
        };
    }
    ngOnInit() {
        this.isPressed = true;
        this.modelService.getLocation().subscribe((model) => {
            this.isPressed = false;
            this.model = model;
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    checkOutClick() {
        this.isPressed = true;
        this.modelService.checkOut().subscribe(() => {
            this.isPressed = false;
            this.sessionService.session.isCheckedIn = false;
            this.router.navigate(['check-in']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
CheckOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["app-check-out"]], decls: 35, vars: 12, consts: [[1, "p-fluid", "main-container", "p-col-12"], [1, "center-container"], ["src", "assets/checkin.png"], [1, "p-field", "center-container", "attension-text"], [1, "p-d-flex", 2, "margin-top", "65px"], [2, "width", "40px"], ["src", "../../../assets/addr.png"], [2, "padding-left", "20px", "font-size", "15px", "font-weight", "500"], [1, "p-d-flex", 2, "margin-top", "35px"], ["src", "../../../assets/clock.png"], [2, "padding-left", "20px", "font-size", "15px"], ["src", "../../../assets/calendar.png"], [1, "p-field", "center-container", 2, "margin-top", "65px"], [1, "orange-button", 3, "click"]], template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Eingeloggt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00D6ffnungszeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Zeitpr\u00FCfung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_Template_button_click_33_listener() { return ctx.checkOutClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Auschecken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.model.zipCode, " ", ctx.model.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.model.timeWork.hours, " Stunde ", ctx.model.timeWork.minutes, " Minuten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 9, ctx.model.timeCheck, "dd LLLL hh:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1vdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-out',
                templateUrl: './check-out.component.html',
                styleUrls: ['./check-out.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "o0Vi":
/*!******************************************************************************!*\
  !*** ./src/app/component/profile-person-new/profile-person-new.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfilePersonNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePersonNewComponent", function() { return ProfilePersonNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/session.service */ "pRC4");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");













function ProfilePersonNewComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", gender_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gender_r1);
} }
class ProfilePersonNewComponent {
    constructor(router, modelService, authService, messageService, sessionService) {
        this.router = router;
        this.modelService = modelService;
        this.authService = authService;
        this.messageService = messageService;
        this.sessionService = sessionService;
        this.acceptAgreement = false;
        this.acceptSharedData = false;
        this.isPressed = false;
        this.genders = ['männlich', 'weiblich', 'divers'];
        this.changeStage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = this.sessionService.signupPersonModel;
        this.acceptAgreement = this.sessionService.isAgreementChecked;
        this.acceptSharedData = this.sessionService.isDataShareChecked;
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.firstName),
            lastNameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.lastName),
            genderControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.gender),
            birthDateControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.birthDate),
            acceptAgreementControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.acceptAgreement),
            acceptDataShareControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.acceptSharedData)
        });
    }
    nextClick() {
        this.isPressed = true;
        if (this.model.birthDate) {
            const offset = this.model.birthDate.getTimezoneOffset();
            const isoDate = this.model.birthDate.setMinutes(-offset);
            this.model.birthDate = new Date(isoDate);
        }
        this.model.isAcceptAgreement = this.acceptAgreement;
        this.model.isAcceptSharedData = this.acceptSharedData;
        this.modelService.registerProfile(this.model).subscribe((response) => {
            this.isPressed = false;
            this.authService.accessToken = response.token;
            this.sessionService.isAgreementChecked = false;
            this.sessionService.isDataShareChecked = false;
            this.sessionService.isRegistrationStarted = true;
            this.sessionService.signupPersonModel = {};
            this.changeStage.emit(2);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    cancelClick() {
        this.sessionService.isAgreementChecked = false;
        this.sessionService.isDataShareChecked = false;
        this.sessionService.signupPersonModel = {};
        this.router.navigate(['login']);
    }
    get dateRange() {
        const lastYear = new Date().getFullYear();
        const firstYear = lastYear - 100;
        return `${firstYear}:${lastYear}`;
    }
    redirectClick(path) {
        this.sessionService.isAgreementChecked = this.acceptAgreement;
        this.sessionService.isDataShareChecked = this.acceptSharedData;
        this.router.navigate([path]);
    }
}
ProfilePersonNewComponent.ɵfac = function ProfilePersonNewComponent_Factory(t) { return new (t || ProfilePersonNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"])); };
ProfilePersonNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePersonNewComponent, selectors: [["app-profile-person-new"]], outputs: { changeStage: "changeStage" }, decls: 39, vars: 17, consts: [[3, "formGroup"], [1, "center-container"], [1, "p-float-label"], ["id", "firstNameInput", "formControlName", "firstNameControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "firstNameInput"], [1, "center-container", "standard-indent"], ["id", "lastNameInput", "formControlName", "lastNameControl", "maxlength", "100", "type", "text", "pInputText", "", 1, "small-input-container", 3, "ngModel", "ngModelChange"], ["for", "lastNameInput"], [1, "label"], ["formControlName", "genderControl", 1, "small-input-container", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "calendar", "formControlName", "birthDateControl", "dateFormat", "dd.mm.yy", 3, "ngModel", "monthNavigator", "yearNavigator", "yearRange", "ngModelChange"], ["for", "calendar"], [1, "p-field-checkbox", "center-container", 2, "margin-top", "22px"], ["id", "acceptAgreement", "formControlName", "acceptAgreementControl", 3, "ngModel", "binary", "ngModelChange"], ["for", "acceptAgreement"], [1, "link", "link--decorated", 3, "click"], [1, "p-field-checkbox", "center-container", 2, "margin-top", "0.6rem"], ["id", "acceptDataShare", "formControlName", "acceptDataShareControl", 3, "ngModel", "binary", "ngModelChange"], ["for", "acceptDataShare"], [1, "center-container", 2, "margin-top", "22px"], [1, "orange-button", 3, "click"], [1, "center-container", 2, "margin-top", "10px"], [1, "white-button", 3, "click"], [3, "ngValue"]], template: function ProfilePersonNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_input_ngModelChange_3_listener($event) { return ctx.model.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vorname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nachname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Geschlecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_select_ngModelChange_14_listener($event) { return ctx.model.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfilePersonNewComponent_option_15_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_p_calendar_ngModelChange_18_listener($event) { return ctx.model.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Geburtsdatum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_p_checkbox_ngModelChange_22_listener($event) { return ctx.acceptAgreement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ich akzeptiere die ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePersonNewComponent_Template_a_click_25_listener() { return ctx.redirectClick("agreement"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nutzungsbedingungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePersonNewComponent_Template_p_checkbox_ngModelChange_28_listener($event) { return ctx.acceptSharedData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ich akzeptiere die ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePersonNewComponent_Template_a_click_31_listener() { return ctx.redirectClick("sharedata"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePersonNewComponent_Template_button_click_34_listener() { return ctx.nextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Weiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePersonNewComponent_Template_button_click_37_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.birthDate)("monthNavigator", true)("yearNavigator", true)("yearRange", ctx.dateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acceptAgreement)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acceptSharedData)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["Calendar"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLXBlcnNvbi1uZXcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUM0QkU7RUQ3QkY7SUFNSSxzQkFBQTtJQUNBLG1CQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBREo7QUNrQkU7RURuQkE7SUFLSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoicHJvZmlsZS1wZXJzb24tbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIEBpbmNsdWRlIG1kIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn0iLCIvLyBTbWFsbCBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4teHMtbWluOiAzNjBweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG5cclxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcclxuJHNjcmVlbi1sZy1taW46IDk5MnB4O1xyXG5cclxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIExhcmdlIGRlc2t0b3BzXHJcbiRzY3JlZW4teHhsLW1pbjogMTYwMHB4O1xyXG5cclxuQG1peGluIHhzIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhzLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4rJ3B4Jykge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmVydGljYWwtc2Nyb2xsIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC42NSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZWZmZWN0cyB7XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4IHtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNldC1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaWUxMW9ubHkge1xyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePersonNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-person-new',
                templateUrl: './profile-person-new.component.html',
                styleUrls: ['./profile-person-new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }]; }, { changeStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pRC4":
/*!********************************************!*\
  !*** ./src/app/service/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/profile/profile */ "22uu");



class SessionService {
    constructor() {
        this.agreementChecked = false;
        this.dataShareChecked = false;
        this.registrationStarted = false;
        this.profile = _model_profile_profile__WEBPACK_IMPORTED_MODULE_1__["newProfile"];
        this.sessonInfo = { isVeryfied: false, isCheckedIn: false };
        this.newPersonModel = {};
    }
    get session() {
        return this.sessonInfo;
    }
    get activeProfile() {
        return this.profile;
    }
    set activeProfile(profile) {
        this.profile = profile;
    }
    get userVaccineGuid() {
        return this.vaccineGuid;
    }
    set userVaccineGuid(guid) {
        this.vaccineGuid = guid;
    }
    get isAgreementChecked() {
        return this.agreementChecked;
    }
    set isAgreementChecked(value) {
        this.agreementChecked = value;
    }
    get isDataShareChecked() {
        return this.dataShareChecked;
    }
    set isDataShareChecked(value) {
        this.dataShareChecked = value;
    }
    get signupPersonModel() {
        return this.newPersonModel;
    }
    set signupPersonModel(value) {
        this.newPersonModel = value;
    }
    clearSession() {
        this.profile = _model_profile_profile__WEBPACK_IMPORTED_MODULE_1__["newProfile"];
        this.sessonInfo = { isVeryfied: false, isCheckedIn: false };
    }
    get isRegistrationStarted() {
        return this.registrationStarted;
    }
    set isRegistrationStarted(value) {
        this.registrationStarted = value;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "q8tS":
/*!************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");








class ForgotPasswordComponent {
    constructor(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.model = {};
        this.isPressed = false;
        this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
        });
    }
    cancelClick() {
        this.isPressed = false;
        this.router.navigate(['login']);
    }
    sendEmailClick() {
        this.authService.forgotPassword(this.model).subscribe(() => {
            this.isPressed = false;
            const message = {
                severity: 'info', summary: 'Servicemeldung', detail: 'Überprüfen Sie Ihre E-Mail für weitere Anweisungen'
            };
            this.messageService.add(message);
            this.router.navigate(['login']);
        }, (error) => {
            this.isPressed = false;
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 17, vars: 6, consts: [[1, "p-fluid", "main-container"], [1, "header"], ["src", "assets/images/forgotpassword.jpg"], [1, "center-container", "header-text"], [1, "p-field", "center-container", "regular-text", "description"], [1, "forgot-password-form", 3, "formGroup"], [1, "input-container", "large"], [1, "icon-container", "user-icon"], ["type", "text", "formControlName", "emailControl", "pInputText", "", "placeholder", "E-Mail", 1, "input", 3, "ngModel", "ngModelChange"], [1, "p-field", "center-container", 2, "margin-bottom", "18px"], [1, "orange-button", 3, "click"], [1, "p-field", "center-container"], [1, "white-button", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Passwort vergessen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Geben Sie Ihre E-Mail-Adresse ein, um neues ein Passwort zu erhalten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_10_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_12_listener() { return ctx.sendEmailClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " E-Mail senden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_15_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Abbrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button-disabled", ctx.isPressed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.description[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.forgot-password-form[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .forgot-password-form[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUNxQkU7RUR0QkY7SUFNSSxnQkFBQTtFQURGO0FBQ0Y7QUN1QkU7RUQ3QkY7SUFVSSxzQkFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUo7QUNhRTtFRGZBO0lBS0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUE7RUFDQyxtQkFBQTtBQUREO0FBSUE7RUFDRSxtQkFBQTtFQUNELFdBQUE7QUFERDtBQ2RFO0VEYUY7SUFLSSxZQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgQGluY2x1ZGUgc20ge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIG1kIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIHtcclxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBzbSB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNtYWxsIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi14cy1taW46IDM2MHB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcblxyXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcblxyXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xyXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xyXG5cclxuLy8gTGFyZ2UgZGVza3RvcHNcclxuJHNjcmVlbi14eGwtbWluOiAxNjAwcHg7XHJcblxyXG5AbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHMtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbisncHgnKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2ZXJ0aWNhbC1zY3JvbGwge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjY1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlZmZlY3RzIHtcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBpZTExb25seSB7XHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "rID0":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/session.service */ "pRC4");




class ProfileComponent {
    constructor(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.password = '';
    }
    ngOnInit() {
        this.model = this.sessionService.activeProfile;
        this.setPassword();
    }
    cancelClick() {
        this.router.navigate(['check-in']);
    }
    setPassword() {
        var _a;
        const password = (_a = this.model) === null || _a === void 0 ? void 0 : _a.contact.password;
        if (password && password !== undefined) {
            for (let i = 0; i < password.length; i++) {
                this.password += '*';
            }
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 52, vars: 7, consts: [[1, "main-container"], [1, "header"], ["src", "assets/images/settings.png"], [1, "center-container", "header-text"], [1, "profile-block-container"], ["routerLink", "person/edit", 1, "btn"], [1, "pi", "pi-pencil"], [1, "p-d-flex"], [1, "profile-label-text"], [1, "profile-value-text"], [1, "p-d-flex", 2, "margin-top", "18px"], ["routerLink", "address/edit", 1, "btn"], ["routerLink", "contact/edit", 1, "btn"], [1, "p-field", "center-container", "buttons-container"], [1, "orange-button", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vorname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nachname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stra\u00DFe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hausnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Stadt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Telefonnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_50_listener() { return ctx.cancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zur\u00FCck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.person.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.person.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.address == null ? null : ctx.model.address.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.address == null ? null : ctx.model.address.house);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.address == null ? null : ctx.model.address.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.contact == null ? null : ctx.model.contact.cellular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.contact == null ? null : ctx.model.contact.email);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".main-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 360px) {\n  .main-container[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.profile-block-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n@media (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.profile-block-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 15px;\n  background: #ffffff;\n  border: 1px solid #a8c8d9;\n  box-sizing: border-box;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 280px;\n}\n@media (min-width: 360px) {\n  .profile-block-container[_ngcontent-%COMP%] {\n    max-width: 320px;\n  }\n}\n@media (min-width: 576px) {\n  .profile-block-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n.profile-block-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 100%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  background-color: #a8c8d9;\n  cursor: pointer;\n  width: 36px;\n  height: 36px;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n}\n@media (min-width: 360px) {\n  .profile-block-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 58px;\n    height: 58px;\n  }\n}\n.profile-block-container[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyxXQUFBO0FBRkQ7QUNpQkU7RURoQkY7SUFNRSxZQUFBO0VBSEE7QUFDRjtBQU1BO0VBQ0MsZ0JBQUE7QUFIRDtBQU1BO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFIRDtBQ1FFO0VEUkY7SUFNRSxlQUFBO0VBRkE7QUFDRjtBQ1VFO0VEZkY7SUFVRSxzQkFBQTtJQUNBLG1CQUFBO0VBREE7QUFDRjtBQUdDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FBREY7QUNBRTtFREREO0lBS0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFEO0FBQ0Y7QUFHQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQURGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQ25DRTtFRDZCRjtJQVdFLGdCQUFBO0VBREE7QUFDRjtBQ2xDRTtFRHVCRjtJQWVFLFlBQUE7RUFBQTtBQUNGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFGO0FDNURFO0VEZ0RGO0lBZUUsV0FBQTtJQUNBLFlBQUE7RUFDQTtBQUNGO0FBRUE7RUFDQyxtQkFBQTtBQUNEIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21peGlucyc7XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdFxyXG5cdFxyXG5cclxuXHRAaW5jbHVkZSB4cyB7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ucHJvZmlsZS1ibG9jay1jb250YWluZXIgZGl2IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMzJweDtcclxuXHJcblx0QGluY2x1ZGUgc20ge1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxuXHJcblx0QGluY2x1ZGUgbWQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcblx0fVxyXG5cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG5cdFx0QGluY2x1ZGUgbWQge1xyXG5cdFx0XHR3aWR0aDogMTI4cHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5oZWFkZXItdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxufVxyXG5cclxuLnByb2ZpbGUtYmxvY2stY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YzhkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyODBweDtcclxuXHJcblx0QGluY2x1ZGUgeHMge1xyXG5cdFx0bWF4LXdpZHRoOiAzMjBweDtcclxuXHR9XHJcblxyXG5cdEBpbmNsdWRlIHNtIHtcclxuXHRcdHdpZHRoOiAzNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9maWxlLWJsb2NrLWNvbnRhaW5lciAuYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThjOGQ5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuXHRAaW5jbHVkZSB4cyB7XHJcblx0XHR3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDU4cHg7XHJcblx0fVxyXG59XHJcblxyXG4ucHJvZmlsZS1ibG9jay1jb250YWluZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDM0cHg7XHJcbn1cclxuIiwiLy8gU21hbGwgc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxyXG4kc2NyZWVuLXhzLW1pbjogMzYwcHg7XHJcblxyXG4vLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgKHBvcnRyYWl0IHZpZXcpXHJcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcclxuXHJcbi8vIFRhYmxldHMgYW5kIHNtYWxsIGRlc2t0b3BzXHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuXHJcbi8vIExhcmdlIHRhYmxldHMgYW5kIGRlc2t0b3BzXHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBMYXJnZSBkZXNrdG9wc1xyXG4kc2NyZWVuLXh4bC1taW46IDE2MDBweDtcclxuXHJcbkBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14cy1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGwtbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXh4bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByd2QoJHNjcmVlbikge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZlcnRpY2FsLXNjcm9sbCB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNjUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGVmZmVjdHMge1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVzZXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuQG1peGluIGllMTFvbmx5IHtcclxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "sn4E":
/*!******************************************************************!*\
  !*** ./src/app/component/vaccine-list/vaccine-list.component.ts ***!
  \******************************************************************/
/*! exports provided: VaccineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineListComponent", function() { return VaccineListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function VaccineListComponent_div_5_li_17_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("wiederholen auf ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r5.repeatOn, "d.MM.yyyy"), "");
} }
function VaccineListComponent_div_5_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_div_5_li_17_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.clickVaccine(item_r5.guid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VaccineListComponent_div_5_li_17_span_7_Template, 3, 4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.repeatOn);
} }
function VaccineListComponent_div_5_li_24_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r10.recordOn, "d.MM.yyyy"));
} }
function VaccineListComponent_div_5_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_div_5_li_24_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.clickVaccine(item_r10.guid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VaccineListComponent_div_5_li_24_span_7_Template, 3, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.recordOn);
} }
function VaccineListComponent_div_5_li_31_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r15.recordOn, "d.MM.yyyy, HH:mm"));
} }
function VaccineListComponent_div_5_li_31_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dauer: ", item_r15.duration, " hours");
} }
function VaccineListComponent_div_5_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VaccineListComponent_div_5_li_31_span_7_Template, 3, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VaccineListComponent_div_5_li_31_span_8_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getTestIcon(item_r15.isActive), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.recordOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.duration);
} }
function VaccineListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COVID19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_div_5_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.toggle("inactive"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Kein ausreichender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Impfschutz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VaccineListComponent_div_5_li_17_Template, 9, 2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_div_5_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.toggle("active"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Aktiver Impfschutz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VaccineListComponent_div_5_li_24_Template, 9, 2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_div_5_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.toggle("test"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Aktiver Tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VaccineListComponent_div_5_li_31_Template, 9, 4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.statusIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model.notActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model.testList);
} }
function VaccineListComponent_div_6_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Datum der Auffrishung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r24.selectedModel.repeatOn, "d.MM.yyyy"));
} }
function VaccineListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Arztpraxis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wirkstoff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Datum der Impfung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VaccineListComponent_div_6_div_23_Template, 6, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedModel == null ? null : ctx_r1.selectedModel.doctor == null ? null : ctx_r1.selectedModel.doctor.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r1.selectedModel.doctor == null ? null : ctx_r1.selectedModel.doctor.address == null ? null : ctx_r1.selectedModel.doctor.address.city, ", ", ctx_r1.selectedModel.doctor == null ? null : ctx_r1.selectedModel.doctor.address == null ? null : ctx_r1.selectedModel.doctor.address.street, ", ", ctx_r1.selectedModel.doctor == null ? null : ctx_r1.selectedModel.doctor.address == null ? null : ctx_r1.selectedModel.doctor.address.house, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedModel.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 7, ctx_r1.selectedModel.recordOn, "d.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedModel.repeatOn);
} }
class VaccineListComponent {
    constructor(modelService, messageService, router) {
        this.modelService = modelService;
        this.messageService = messageService;
        this.router = router;
        this.isReady = false;
        this.model = {
            notActive: [],
            active: [],
            testList: []
        };
        this.selectedModel = {};
    }
    ngOnInit() {
        this.modelService.getVaccineListModel().subscribe((response) => { this.model = Object.assign({}, response); }, (error) => {
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    ngAfterContentInit() {
        this.isReady = true;
    }
    get statusIcon() {
        var _a;
        return ((_a = this.model) === null || _a === void 0 ? void 0 : _a.isProtect) ? 'assets/check.svg' : 'assets/attention.svg';
    }
    get hasInactiveVaccine() {
        var _a, _b, _c;
        if (!((_a = this.model) === null || _a === void 0 ? void 0 : _a.notActive)) {
            return false;
        }
        return ((_c = (_b = this.model) === null || _b === void 0 ? void 0 : _b.notActive) === null || _c === void 0 ? void 0 : _c.length) > 0;
    }
    get hasActiveVaccine() {
        var _a, _b, _c;
        if (!((_a = this.model) === null || _a === void 0 ? void 0 : _a.active)) {
            return false;
        }
        return ((_c = (_b = this.model) === null || _b === void 0 ? void 0 : _b.active) === null || _c === void 0 ? void 0 : _c.length) > 0;
    }
    clickVaccine(guid) {
        this.modelService.getVaccineDetailsModel(guid !== null && guid !== void 0 ? guid : '').subscribe((response) => {
            this.selectedModel = Object.assign({}, response);
        }, (error) => {
            if (error && error instanceof Array) {
                error.forEach(item => {
                    const message = { severity: 'error', summary: 'Error', detail: item };
                    this.messageService.add(message);
                });
            }
        });
    }
    okClick() {
        if (this.hasSelectedModel) {
            this.selectedModel = {};
        }
        else {
            this.router.navigate(['/check-in']);
        }
    }
    get hasSelectedModel() {
        return this.selectedModel.guid !== undefined;
    }
    toggle(id) {
        const element = document.getElementById(id);
        if (element === null || element === void 0 ? void 0 : element.classList.contains('open')) {
            element.classList.remove('open');
        }
        else {
            element === null || element === void 0 ? void 0 : element.classList.add('open');
        }
    }
    getTestIcon(isActive) {
        return isActive ? 'assets/check.svg' : 'assets/attention.svg';
    }
}
VaccineListComponent.ɵfac = function VaccineListComponent_Factory(t) { return new (t || VaccineListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
VaccineListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VaccineListComponent, selectors: [["app-vaccine-list"]], decls: 10, vars: 2, consts: [[1, "p-fluid", "main-container", "p-col-12"], [1, "header"], ["src", "assets/images/vaccine.svg"], [1, "center-container", "header-text"], ["class", "wrapper__container--body", 4, "ngIf"], [1, "p-field", "center-container"], [1, "orange-button", 3, "click"], [1, "wrapper__container--body"], [1, "status"], [1, "status__icon"], ["alt", "", 3, "src"], [1, "text"], [1, "container"], [1, "lists-container"], ["id", "inactive", 1, "list", "open"], [1, "list__header", 3, "click"], [1, "list__body"], [4, "ngFor", "ngForOf"], ["id", "active", 1, "list", "open"], ["id", "test", 1, "list", "open"], [1, "list-item", 3, "click"], [1, "list-item__icon"], ["src", "assets/attention.svg", "alt", ""], [1, "list-item__body"], [1, "title"], ["class", "description", 4, "ngIf"], [1, "arrow-right"], [1, "description"], ["src", "assets/check.svg", "alt", ""], ["class", "description date", 4, "ngIf"], [1, "description", "date"], [1, "list-item"], [1, "profile"], [1, "profile__wrapper"], [1, "profile-item"], [1, "profile-item__title"], [1, "profile-item__value"], ["class", "profile-item", 4, "ngIf"]], template: function VaccineListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Impfpass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VaccineListComponent_div_5_Template, 32, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VaccineListComponent_div_6_Template, 24, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineListComponent_Template_button_click_8_listener() { return ctx.okClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zur\u00FCck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSelectedModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 48px;\n  }\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  margin-right: 12px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 128px;\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YWNjaW5lLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUM0QkU7RUQ3QkY7SUFNSSxzQkFBQTtJQUNBLG1CQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBREo7QUNrQkU7RURuQkE7SUFLSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoidmFjY2luZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIEBpbmNsdWRlIG1kIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn0iLCIvLyBTbWFsbCBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXHJcbiRzY3JlZW4teHMtbWluOiAzNjBweDtcclxuXHJcbi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG5cclxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcclxuJHNjcmVlbi1sZy1taW46IDk5MnB4O1xyXG5cclxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIExhcmdlIGRlc2t0b3BzXHJcbiRzY3JlZW4teHhsLW1pbjogMTYwMHB4O1xyXG5cclxuQG1peGluIHhzIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhzLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teHhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4rJ3B4Jykge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmVydGljYWwtc2Nyb2xsIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC42NSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZWZmZWN0cyB7XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4IHtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNldC1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaWUxMW9ubHkge1xyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccineListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vaccine-list',
                templateUrl: './vaccine-list.component.html',
                styleUrls: ['./vaccine-list.component.scss']
            }]
    }], function () { return [{ type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/agreement/agreement.component */ "PI0+");
/* harmony import */ var _component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/check-in/check-in.component */ "i57r");
/* harmony import */ var _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/check-out/check-out.component */ "n4yd");
/* harmony import */ var _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/forgot-password/forgot-password.component */ "q8tS");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _component_verification_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/verification/verification.component */ "4RLT");
/* harmony import */ var _service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/guard/auth.guard */ "Emk8");
/* harmony import */ var _component_profile_person_edit_profile_person_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/profile-person-edit/profile-person-edit.component */ "WSXM");
/* harmony import */ var _component_profile_address_edit_profile_address_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/profile-address-edit/profile-address-edit.component */ "WSQV");
/* harmony import */ var _component_profile_contact_edit_profile_contact_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/profile-contact-edit/profile-contact-edit.component */ "1JWp");
/* harmony import */ var _component_profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/profile-person-new/profile-person-new.component */ "o0Vi");
/* harmony import */ var _component_profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/profile-address-new/profile-address-new.component */ "Xn7J");
/* harmony import */ var _component_profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/profile-contact-new/profile-contact-new.component */ "eGik");
/* harmony import */ var _component_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/change-password/change-password.component */ "ZJCw");
/* harmony import */ var _component_vaccine_list_vaccine_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/vaccine-list/vaccine-list.component */ "sn4E");
/* harmony import */ var _component_share_data_share_data_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/share-data/share-data.component */ "7NK5");
/* harmony import */ var _component_profile_new_profile_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/profile-new/profile-new.component */ "1bv2");






















const routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'agreement', component: _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_2__["AgreementComponent"] },
    { path: 'forgotpassword', component: _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'changepassword', component: _component_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"] },
    { path: 'check-in', component: _component_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_3__["CheckInComponent"], canActivate: [_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'check-out', component: _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_4__["CheckOutComponent"] },
    { path: 'verification', component: _component_verification_verification_component__WEBPACK_IMPORTED_MODULE_8__["VerificationComponent"] },
    { path: 'profile/new', component: _component_profile_new_profile_new_component__WEBPACK_IMPORTED_MODULE_19__["ProfileNewComponent"] },
    { path: 'profile/person/new', component: _component_profile_person_new_profile_person_new_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePersonNewComponent"] },
    { path: 'profile/address/new', component: _component_profile_address_new_profile_address_new_component__WEBPACK_IMPORTED_MODULE_14__["ProfileAddressNewComponent"] },
    { path: 'profile/contact/new', component: _component_profile_contact_new_profile_contact_new_component__WEBPACK_IMPORTED_MODULE_15__["ProfileContactNewComponent"] },
    { path: 'profile/person/edit', component: _component_profile_person_edit_profile_person_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProfilePersonEditComponent"] },
    { path: 'profile/address/edit', component: _component_profile_address_edit_profile_address_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProfileAddressEditComponent"] },
    { path: 'profile/contact/edit', component: _component_profile_contact_edit_profile_contact_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProfileContactEditComponent"] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'vaccine', component: _component_vaccine_list_vaccine_list_component__WEBPACK_IMPORTED_MODULE_17__["VaccineListComponent"], canActivate: [_service_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'agreement', component: _component_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_2__["AgreementComponent"] },
    { path: 'sharedata', component: _component_share_data_share_data_component__WEBPACK_IMPORTED_MODULE_18__["ShareDataComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xJ/m":
/*!***********************************************!*\
  !*** ./src/app/const/de-calendar.constant.ts ***!
  \***********************************************/
/*! exports provided: calendar_DE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar_DE", function() { return calendar_DE; });
const calendar_DE = { closeText: 'Schließen', prevText: 'Zurück', nextText: 'Weiter', monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'], monthNamesShort: ['Jan', 'Feb', 'MÃ¤r', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'], dayNamesMin: ['S', 'M', 'D', 'M ', 'D', 'F ', 'S'], weekHeader: 'Woche', firstDay: 1, isRTL: false, showMonthAfterYear: false, yearSuffix: '', timeOnlyTitle: 'Nur Zeit', timeText: 'Zeit', hourText: 'Stunde', minuteText: 'Minute', secondText: 'Sekunde', currentText: 'Aktuelles Datum', ampm: false, month: 'Monat', week: 'Woche', day: 'Tag', allDayText: 'Ganzer Tag' };


/***/ }),

/***/ "yU8j":
/*!******************************************!*\
  !*** ./src/app/service/guest.service.ts ***!
  \******************************************/
/*! exports provided: GuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestService", function() { return GuestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "aOlj");



class GuestService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    getLocation() {
        return this.callGet('location');
    }
    checkIn(model) {
        return this.callPost(model, 'checkin');
    }
    checkOut() {
        return this.callPost({}, 'checkout');
    }
    get localQrCode() {
        return localStorage.getItem('LUID');
    }
    set localQrCode(luid) {
        if (luid) {
            localStorage.setItem('LUID', luid);
        }
        else {
            localStorage.removeItem('LUID');
        }
    }
    get controller() {
        return 'api/guest';
    }
}
GuestService.ɵfac = function GuestService_Factory(t) { return ɵGuestService_BaseFactory(t || GuestService); };
GuestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestService, factory: GuestService.ɵfac, providedIn: 'root' });
const ɵGuestService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GuestService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map