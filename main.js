(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\Paginas_Para_Recidencia\AC-Zinapecuaro-CuentaConmigo\src\main.ts */"zUnb");


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

/***/ "Hd4m":
/*!******************************************************!*\
  !*** ./src/app/modules/landing/landing.component.ts ***!
  \******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
    // Redireccion a facebook
    linkFacebook() {
        window.open('https://www.facebook.com/profile.php?id=100064876893047', '_blank');
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 211, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "color-z2"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], [1, "hero-section"], [1, "container"], [1, "row"], [1, "col-12", "col-md-7", "pt-5", "mb-5", "align-self-center"], [1, "promo", "pe-md-3", "pe-lg-5"], [1, "fuente-roboto-1", "color-f2"], [1, "fuente-roboto-3", "mb-4"], [1, "cta-holder", "row", "gx-md-3", "gy-3", "gy-md-0"], [1, "col-12", "col-md-auto"], ["href", "https://www.facebook.com/profile.php?id=100064876893047", 1, "btn", "btn-c", "w-100"], ["src", "assets/img/6_SIGUENOS/facebook.svg", "alt", "icono", "width", "20", "height", "20"], [1, "hero-quotes", "mt-5"], ["id", "quotes-carousel", "data-bs-ride", "carousel", "data-bs-interval", "8000", 1, "fuente-roboto-4", "carousel", "slide", "carousel-fade", "mb-5"], [1, "carousel-indicators"], ["data-bs-target", "#quotes-carousel", "data-bs-slide-to", "0", 1, "active"], ["data-bs-target", "#quotes-carousel", "data-bs-slide-to", "1"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "quote", "p-4", "theme-bg-light"], [1, "source", "row", "gx-md-3", "gy-3", "gy-md-0", "align-items-center"], [1, "col-12", "col-md-auto", "text-center", "text-md-start"], ["src", "assets\\img\\3_INTEGRANTES\\JuanP.jpeg", "alt", "image", 1, "source-profile"], [1, "col", "text-center", "text-md-start"], [1, "fuente-roboto-4"], [1, "fuente-roboto-5"], [1, "col-12", "col-md-5", "mb-5", "align-self-center"], [1, "book-cover-holder"], ["src", "assets/img/2_LOGO/LOGO_ORIGINAL.png", "alt", "book cover", 1, "img-fluid", "book-cover"], ["id", "benefits-section", 1, "benefits-section", "theme-bg-light-gradient", "py-5"], [1, "container", "py-5"], [1, "text-center", "fuente-roboto-1", "mb-3"], [1, "row", "text-center", "justify-content-center"], [1, "item", "col-12", "col-md-6", "col-lg-9"], [1, "item-inner", "p-3", "p-lg-4"], [1, "item-desc", "fuente-roboto-2"], ["id", "content-section", 1, "content-section"], [1, "single-col-max", "mx-auto"], [1, "fuente-roboto-1", "text-center", "mb-5"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-9"], ["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["src", "assets\\img\\4_ACTIVIDADES\\LO_QUE_HACEMOS1.jpg", "alt", "IMAGEN", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "assets\\img\\4_ACTIVIDADES\\LO_QUE_HACEMOS2.jpg", "alt", "IMAGEN", 1, "d-block", "w-100"], ["src", "assets\\img\\4_ACTIVIDADES\\LO_QUE_HACEMOS3.jpg", "alt", "IMAGEN", 1, "d-block", "w-100"], ["src", "assets\\img\\4_ACTIVIDADES\\LO_QUE_HACEMOS4.png", "alt", "IMAGEN", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-12", "col-md-8", "mb-5"], [1, "key-points", "mb-4", "text-center"], [1, "key-points-list", "list-unstyled", "mb-4", "mx-auto", "d-inline-block", "text-start"], [1, "fas", "fa-check-circle", "me-2"], ["id", "audience-section", 1, "audience-section", "py-5"], [1, "text-center", "fuente-roboto-1", "mb-4"], [1, "fuente-roboto-3", "single-col-max", "mx-auto", "text-center", "mb-5"], ["id", "content", 1, "content-section"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["src", "assets\\img\\8_EQUIPO\\EQUIPO_1.jpg", "alt", "IMAGEN", 1, "d-block", "w-100"], ["src", "assets\\img\\8_EQUIPO\\EQUIPO_2.jpg", "alt", "IMAGEN", 1, "d-block", "w-100"], ["src", "assets\\img\\8_EQUIPO\\EQUIPO_3.jpeg", "alt", "IMAGEN", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "reviews-section", 1, "reviews-section", "py-5"], [1, "fuente-roboto-1", "text-center"], [1, "item", "col-12", "col-lg-4", "p-3", "mb-4"], [1, "item-inner", "theme-bg-light", "rounded", "p-4"], [1, "item-desc"], [1, "source", "row", "gx-md-3", "gy-3", "gy-md-0"], [1, "col", "source-info", "text-center", "text-md-start"], ["src", "assets\\img\\3_INTEGRANTES\\KARINA.jpg", "alt", "image", 1, "source-profile"], [1, "qitem-desc"], ["src", "assets\\img\\3_INTEGRANTES\\Aure.jpeg", "alt", "image", 1, "source-profile"], [1, "text-center"], ["href", "https://www.facebook.com/profile.php?id=100064876893047", 1, "btn", "btn-c"], ["src", "assets\\img\\6_SIGUENOS\\facebook.svg", "alt", "icono", "width", "20", "height", "20"], [1, "row", "fondo-color-f2", "color-z2", "w-100", "justify-content-center", "fuente-roboto-5"], [1, "col-3", "d-none", "d-lg-block", "my-auto", "text-center"], ["src", "assets\\img\\2_LOGO\\LOGO_BLANCO.png", "alt", "Logo", "width", "65%"], [1, "col-12", "col-md-4", "col-lg-3", "my-3", "my-md-5", "borde-izquierdo"], [1, "row", "w-100"], [1, "col"], [1, "h6"], [1, "row", "w-100", "align-items-center", "pt-3"], [1, "col-auto"], ["src", "assets\\img\\5_CONTACTANOS\\direccion.svg", "alt", "Ubicacion", "width", "15rem", "height", "15rem"], [1, "col", "p-0", "text-left"], [1, "fuente-roboto"], ["src", "assets\\img\\5_CONTACTANOS\\correo.svg", "alt", "Correo", "width", "15rem", "height", "15rem"], [1, "col-12", "col-md-3", "col-lg-2", "my-3", "my-md-5", "borde-izquierdo"], [1, "row", "w-100", "cursor", "align-items-center", "py-3", 3, "click"], ["src", "assets\\img\\6_SIGUENOS\\facebook.svg", "alt", "Facebook", "width", "15rem", "height", "15rem"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ZINAP\u00C9CUARO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CUENTA CONMIGO. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Somos una Asociaci\u00F3n Civil, la cual nos encargamos de ayudar y apoyar a personas de bajos recursos, impulsamos peque\u00F1os negocios orient\u00E1ndolos para alcanzar su mercado potencial.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " FACEBOOK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ol", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "blockquote", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Todos tenemos la oportunidad y responsabilidad de ayudar en proporci\u00F3n de nuestras posibilidades. Ponernos al servicio de los dem\u00E1s es una de las virtudes m\u00E1s nobles y gratificantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "JUAN PABLO RODRIGUEZ SALINAS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "FUNDADOR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "OBJETIVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " El fin primordial que, a trav\u00E9s de servicio y apoyos, impulsar y fomentar el crecimiento y desarrollo de personas en estado de vulnerabilidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "LO QUE HACEMOS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Lograr toda clase de proyectos de inversi\u00F3n a favor de la sociedad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Promover e impulsar el desarrollo comunitario en localidades de zonas marginadas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Brindar educaci\u00F3n o capacitaci\u00F3n para el trabajo a personas de escasos recursos o de zonas marginales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Fomentar el mejoramiento y la integraci\u00F3n social y familiar de la poblaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "COMO PUEDES AYUDAR?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo reiciendis repudiandae alias minus laboriosam nostrum officia magnam officiis soluta enim culpa, sequi veniam sit maxime numquam! Nulla, eligendi modi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "EQUIPO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "section", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "FUNDADORES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "blockquote", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Todos tenemos la oportunidad y responsabilidad de ayudar en proporci\u00F3n de nuestras posibilidades. Ponernos al servicio de los dem\u00E1s es una de las virtudes m\u00E1s nobles y gratificantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "JUAN PABLO RODRIGUEZ SALINAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "FUNDADOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "blockquote", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Las manos que dan nunca estaran vacias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "KARINA MORENO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Co-FUNDADORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "blockquote", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Como dijo nuestro se\u00F1or Jesucristo: \"Les aseguro que cada vez que ayudaron al m\u00E1s peque\u00F1o de mis hermanos, lo hicieron conmigo\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "AURELIA SALINAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Co-FUNDADORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " CONTACTANOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "CONT\u00C1CTANOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Olimpo 14, Barrio de San Juan, 58930 Zinapecuaro de Figueroa, Mich.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "zinapecuarocuentaconmigo@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "S\u00CDGUENOS EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_205_listener() { return ctx.linkFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Zinapecuaro Cuenta Conmigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 16px;\n}\n@media screen and (max-width: 992px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 576px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::placeholder {\n  color: lightgray !important;\n  font-family: \"Font Awesome 5 Free\", Roboto, \"Helvetica Neue\", sans-serif !important;\n  font-weight: 900;\n  font-size: 0.9rem !important;\n  line-height: 1rem !important;\n  text-align: justify;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #017436 !important;\n}\n\n.fuente-roboto-1[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 2.5rem;\n  line-height: 2.6rem;\n}\n.fuente-roboto-2[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 2rem;\n  line-height: 2.1rem;\n}\n.fuente-roboto-3[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 1.5rem;\n  line-height: 1.6rem;\n}\n.fuente-roboto-4[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.1rem;\n}\n.fuente-roboto-5[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 0.9rem;\n  line-height: 1rem;\n}\n.fuente-roboto-6[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 0.7rem;\n  line-height: 0.8rem;\n}\n.fuente-roboto-7[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 0.6rem;\n  line-height: 0.6rem;\n}\n.color-a2[_ngcontent-%COMP%] {\n  color: #025035 !important;\n}\n.color-b2[_ngcontent-%COMP%] {\n  color: #161D22 !important;\n}\n.color-c2[_ngcontent-%COMP%] {\n  color: #002B55 !important;\n}\n.color-d2[_ngcontent-%COMP%] {\n  color: #AD3C16 !important;\n}\n.color-z2[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.color-f2[_ngcontent-%COMP%] {\n  color: #871612 !important;\n}\n\n\n.fondo-color-a1[_ngcontent-%COMP%] {\n  background-color: #017436 !important;\n}\n.fondo-color-a2[_ngcontent-%COMP%] {\n  background-color: #025035 !important;\n}\n.fondo-color-a3[_ngcontent-%COMP%] {\n  background-color: #67AC86 !important;\n}\n.fondo-color-b1[_ngcontent-%COMP%] {\n  background-color: #2D353C !important;\n}\n.fondo-color-b2[_ngcontent-%COMP%] {\n  background-color: #161D22 !important;\n}\n.fondo-color-b3[_ngcontent-%COMP%] {\n  background-color: #3C4650 !important;\n}\n.fondo-color-c1[_ngcontent-%COMP%] {\n  background-color: #0055AA !important;\n}\n.fondo-color-c2[_ngcontent-%COMP%] {\n  background-color: #002B55 !important;\n}\n.fondo-color-c3[_ngcontent-%COMP%] {\n  background-color: #6699CC !important;\n}\n.fondo-color-d1[_ngcontent-%COMP%] {\n  background-color: #E6501E !important;\n}\n.fondo-color-d2[_ngcontent-%COMP%] {\n  background-color: #AD3C16 !important;\n}\n.fondo-color-d3[_ngcontent-%COMP%] {\n  background-color: #EB734B !important;\n}\n.fondo-color-z1[_ngcontent-%COMP%] {\n  background-color: #000 !important;\n}\n.fondo-color-z2[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.fondo-color-f2[_ngcontent-%COMP%] {\n  background-color: #871612 !important;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title][_ngcontent-%COMP%] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\naddress[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ndt[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\ndd[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\nsmall[_ngcontent-%COMP%], .small[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n}\nmark[_ngcontent-%COMP%], .mark[_ngcontent-%COMP%] {\n  padding: 0.1875em;\n  background-color: var(--bs-highlight-bg);\n}\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\na[_ngcontent-%COMP%] {\n  color: var(--bs-link-color);\n}\na[_ngcontent-%COMP%]:hover {\n  color: var(--bs-link-hover-color);\n}\na[_ngcontent-%COMP%]:not([href]):not([class]), a[_ngcontent-%COMP%]:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.875rem 2.5rem;\n  transition: all 0.4s ease-in-out;\n  border-radius: 2rem;\n  border: none;\n}\n.btn-check[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled][_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:disabled    + .btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.btn-a[_ngcontent-%COMP%] {\n  background-color: #025035 !important;\n  color: #fff !important;\n}\n.btn-a[_ngcontent-%COMP%]:hover {\n  background-color: #67AC86 !important;\n  color: #fff !important;\n}\n.btn-a[_ngcontent-%COMP%]:focus {\n  background-color: #017436 !important;\n  color: #fff !important;\n}\n.btn-b[_ngcontent-%COMP%] {\n  background-color: #161D22 !important;\n  color: #fff !important;\n}\n.btn-b[_ngcontent-%COMP%]:hover {\n  background-color: #3C4650 !important;\n  color: #fff !important;\n}\n.btn-b[_ngcontent-%COMP%]:focus {\n  background-color: #2D353C !important;\n  color: #fff !important;\n}\n.btn-c[_ngcontent-%COMP%] {\n  background-color: #002B55 !important;\n  color: #fff !important;\n}\n.btn-c[_ngcontent-%COMP%]:hover {\n  background-color: #fff !important;\n  color: #002B55 !important;\n}\n.btn-c[_ngcontent-%COMP%]:focus {\n  background-color: #0055AA !important;\n  color: #fff !important;\n}\n.btn-d[_ngcontent-%COMP%] {\n  background-color: #E6501E !important;\n  color: #fff !important;\n}\n.btn-d[_ngcontent-%COMP%]:hover {\n  background-color: #fff !important;\n  color: #002B55 !important;\n}\n.btn-d[_ngcontent-%COMP%]:focus {\n  background-color: #E6501E !important;\n  color: #000 !important;\n}\n.btn-e[_ngcontent-%COMP%] {\n  background-color: #FFAA00 !important;\n  color: #fff !important;\n}\n.btn-e[_ngcontent-%COMP%]:hover {\n  background-color: #F08C00 !important;\n  color: #002B55 !important;\n}\n.btn-e[_ngcontent-%COMP%]:focus {\n  background-color: #FFAA00 !important;\n  color: #000 !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 5px 15px 0 #000 !important;\n  outline: none;\n}\n.theme-bg-light[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.theme-bg-dark[_ngcontent-%COMP%] {\n  background: #017436 !important;\n}\n.theme-bg-primary[_ngcontent-%COMP%] {\n  background: #871612;\n}\n.theme-bg-light-gradient[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #f6f8fc 0%, #fff 70%);\n}\n#topcontrol[_ngcontent-%COMP%] {\n  transition: all 0.4s ease-in-out;\n  background: #017436 !important;\n  color: #fff;\n  text-align: center;\n  display: inline-block;\n  z-index: 30;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  padding-top: 0.5rem;\n  font-weight: 300;\n  font-size: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  #topcontrol[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n#topcontrol[_ngcontent-%COMP%]:hover {\n  background: #2f334e;\n  color: #fff;\n}\n.border-radius-0[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.font-style-normal[_ngcontent-%COMP%] {\n  font-style: normal !important;\n}\n.single-col-max[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n.site-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #017436 !important;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.section-intro[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.hero-section[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n.hero-section[_ngcontent-%COMP%]   .subheadline[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.hero-quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 4px solid #871612 !important;\n}\n.hero-quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #871612 !important;\n  position: absolute;\n  bottom: -10px;\n  margin-left: -10px;\n  left: 2rem;\n}\n.hero-quotes[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #000;\n  font-size: 0.875rem;\n}\n.hero-quotes[_ngcontent-%COMP%]   .source-profile[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 75px;\n}\n.hero-quotes[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  bottom: -4rem;\n}\n.hero-quotes[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #871612 !important;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.book-cover-holder[_ngcontent-%COMP%] {\n  position: relative;\n}\n.book-cover-holder[_ngcontent-%COMP%]   .book-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -2rem;\n  width: 120px;\n  height: 120px;\n  background: #871612;\n  border-radius: 50%;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  font-family: \"Quicksand\", sans-serif;\n  padding-top: 34px;\n  font-size: 1.375rem;\n  line-height: 1;\n  font-weight: bold;\n}\n.benefits-section[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.benefits-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #002B55 !important;\n}\n.benefits-section[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.content-section[_ngcontent-%COMP%]   .key-points-list[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.content-section[_ngcontent-%COMP%]   .key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.content-section[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%] {\n  color: #871612 !important;\n}\n.audience-section[_ngcontent-%COMP%]   .audience[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.audience-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.audience-section[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.audience-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #871612 !important;\n}\n.reviews-section[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.reviews-section[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: -18px;\n  margin-left: -18px;\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  background: #161D22;\n  color: #fff;\n  text-align: center;\n  border-radius: 50%;\n  padding-top: 6px;\n}\n.reviews-section[_ngcontent-%COMP%]   .source-profile[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.reviews-section[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.author-section[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.author-section[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.author-section[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  padding-top: 6px;\n}\n.author-section[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.author-section[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.theme-bg-primary[_ngcontent-%COMP%]   a.theme-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n  -webkit-text-decoration-color: rgba(255, 255, 255, 0.5);\n  text-decoration-color: rgba(255, 255, 255, 0.5);\n}\n.theme-bg-primary[_ngcontent-%COMP%]   a.theme-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  -webkit-text-decoration-color: #fff;\n  text-decoration-color: #fff;\n}\n@media (max-width: 575.98px) {\n  .hero-quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]:after {\n    left: 50%;\n    margin-left: -10px;\n  }\n\n  .reviews-section[_ngcontent-%COMP%]   .source-profile[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 991.98px) {\n  .hero-section[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n\n  .hero-section[_ngcontent-%COMP%]   .subheadline[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n\n  .book-cover-holder[_ngcontent-%COMP%]   .book-badge[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    padding-top: 25px;\n    font-size: 1.25rem;\n  }\n}\n@media (min-width: 576px) {\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBhbGV0YS1jb2xvcmVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQUE7QUMrQkEsbURBQUE7QUF3QkEsMEJBQUE7QUN2REEsaUNBQUE7QUQrQkEsbURBQUE7QUF3QkEsMEJBQUE7QUNuREEsbURBQUE7QUFHQSxpQ0FBQTtBQUdBLHVFQUFBO0FBRUE7RUFDSSxZQUFBO0VBRUEsZUFBQTtBRkhKO0FFS0k7RUFMSjtJQU1RLGVBQUE7RUZGTjtBQUNGO0FFSUk7RUFUSjtJQVVRLGVBQUE7RUZETjtBQUNGO0FFSUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUZESjtBRUVJO0VBQ0ksMkJBQUE7RUFFQSxtRkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FGRFI7QUVNQSxZQUFBO0FBRUE7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZKSjtBRU9BO0VBQ0ksaURBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUZKSjtBRU9BO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGSko7QUVPQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FGSko7QUVPQTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRkpKO0FFT0E7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZKSjtBRU9BO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGSko7QUVPQTtFQUNJLHlCQUFBO0FGSko7QUVPQTtFQUNJLHlCQUFBO0FGSko7QUVPQTtFQUNJLHlCQUFBO0FGSko7QUVP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OztFRWtCRTtJQUNJLHFCQUFBO0VGZk47O0VFaUJFO0lBQ0ksWUFBQTtFRmROO0FBQ0Y7QUVpQkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRmZOOztFRWlCRTtJQUNJLG1CQUFBO0VGZE47O0VFZ0JFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VGYk47QUFDRjtBRWdCQTtFQUNJO0lBQ0ksWUFBQTtFRmROO0FBQ0Y7QUFqcUJBLG1EQUFBIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnRhbmRvIFBhbGV0YSBkZSBjb2xvcmVzICovXHJcblxyXG5AaW1wb3J0ICdzcmMvcGFsZXRhLWNvbG9yZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMuc2Nzcyc7XHJcblxyXG4vKiBGSU4gZGUgaXBvcnRhY2lvbiBpbXBvcnRhbmRvIFBhbGV0YSBkZSBjb2xvcmVzICovIiwiJGNvbG9yLWF6dWw6ICMwZDZlZmQ7XHJcbiRjb2xvci1pbmRpZ286ICM2NjEwZjI7XHJcbiRjb2xvci1tb3JhZG86ICM2ZjQyYzE7XHJcbiRjb2xvci1yb3NhOiAjZDYzMzg0O1xyXG4kY29sb3Itcm9qbzogI2RjMzU0NTtcclxuJGNvbG9yLW5hcmFuamE6ICNmZDdlMTQ7XHJcbiRjb2xvci1hbWFyaWxsbzogI2ZmYzEwNztcclxuJGNvbG9yLXZlcmRlOiAjMTk4NzU0O1xyXG4kY29sb3ItdGVhbDogIzIwYzk5NztcclxuJGNvbG9yLWN5YW46ICMwZGNhZjA7XHJcbiRjb2xvci1uZWdybzogIzAwMDtcclxuJGNvbG9yLWJsYW5jbzogI2ZmZjtcclxuJGNvbG9yLWdyaXM6ICM5ZWEzYzQ7XHJcbiRjb2xvci1ncmlzLW9ic2N1cm86ICM2MDY2OWQ7XHJcbiRjb2xvci1ncmlzMTogI2VlZWVmNDtcclxuJGNvbG9yLWdyaXMyOiAjZGVkZmViO1xyXG4kY29sb3ItZ3JpczM6ICNjZWQwZTE7XHJcbiRjb2xvci1ncmlzNDogI2JlYzFkNztcclxuJGNvbG9yLWdyaXM1OiAjOWVhM2M0O1xyXG4kY29sb3ItZ3JpczY6ICM3Zjg0YjE7XHJcbiRjb2xvci1ncmlzNzogIzYwNjY5ZDtcclxuJGNvbG9yLWdyaXM4OiAjMWMxZTJlO1xyXG4kY29sb3ItcHJpbWFyeTogI2VkNjUyNDtcclxuJGNvbG9yLXNlY29uZGFyeTogIzRjNTI3ZDtcclxuJGNvbG9yLXN1Y2Nlc3M6ICMxOTg3NTQ7XHJcbiRjb2xvci1pbmZvOiAjMGRjYWYwO1xyXG4kY29sb3Itd2FybmluZzogI2ZmYzEwNztcclxuJGNvbG9yLWRhbmdlcjogI2RjMzU0NTtcclxuJGNvbG9yLWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItZGFyazogIzFjMWUyZTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiRjb2xvci1hMTogIzAxNzQzNjtcclxuJGNvbG9yLWEyOiAjMDI1MDM1O1xyXG4kY29sb3ItYTM6ICM2N0FDODY7XHJcbiRjb2xvci1iMTogIzJEMzUzQztcclxuJGNvbG9yLWIyOiAjMTYxRDIyO1xyXG4kY29sb3ItYjM6ICMzQzQ2NTA7XHJcbiRjb2xvci1iNDogI2Y2ZjhmYztcclxuJGNvbG9yLWMxOiAjMDA1NUFBO1xyXG4kY29sb3ItYzI6ICMwMDJCNTU7XHJcbiRjb2xvci1jMzogIzY2OTlDQztcclxuJGNvbG9yLWQxOiAjRTY1MDFFO1xyXG4kY29sb3ItZDI6ICNBRDNDMTY7XHJcbiRjb2xvci1kMzogI0VCNzM0QjtcclxuJGNvbG9yLWUxOiAjRkZBQTAwO1xyXG4kY29sb3ItZTI6ICNGMDhDMDA7XHJcbiRjb2xvci1lMzogI0ZGQ0M2NjtcclxuJGNvbG9yLWYxOiAjQjQxRTE4O1xyXG4kY29sb3ItZjI6ICM4NzE2MTI7XHJcbiRjb2xvci1mMzogI0MzNEI0NjtcclxuJGNvbG9yLXoxOiAjMDAwO1xyXG4kY29sb3ItejI6ICNmZmY7XHJcblxyXG4vKiBGSU4gUGFsZXRhIGRlIGNvbG9yZXMgKi8iLCIvKiBpbXBvcnRhbmRvIFBhbGV0YSBkZSBjb2xvcmVzICovXG5cbkBpbXBvcnQgJ3BhbGV0YS1jb2xvcmVzLnNjc3MnO1xuXG4vKiBGSU4gZGUgaXBvcnRhY2lvbiBpbXBvcnRhbmRvIFBhbGV0YSBkZSBjb2xvcmVzICovXG5cblxuLyogaW1wb3J0YW5kbyBQYWxldGEgZGUgY29sb3JlcyAqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gRnVlbnRlIHBvciBlbmNpbWEgZGUgeGwgPSAxNiBwdW50b3NcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gRnVlbnRlIHBvciBlbmNpbWEgZGUgbWQgPSAxNCBwdW50b3NcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC8vIEZ1ZW50ZSBwb3IgZW5jaW1hIGRlIHhzID0gMTIgcHVudG9zXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgICo6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgY29sb3I6ICRjb2xvci1hMSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG4vKiBGdWVudGVzICovXG5cbi5mdWVudGUtcm9ib3RvLTEge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi42cmVtO1xufVxuXG4uZnVlbnRlLXJvYm90by0yIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjFyZW07XG59XG5cbi5mdWVudGUtcm9ib3RvLTMge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xufVxuXG4uZnVlbnRlLXJvYm90by00IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XG59XG5cbi5mdWVudGUtcm9ib3RvLTUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbn1cblxuLmZ1ZW50ZS1yb2JvdG8tNiB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW07XG59XG5cbi5mdWVudGUtcm9ib3RvLTcge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMC42cmVtO1xufVxuXG4uY29sb3ItYTIge1xuICAgIGNvbG9yOiAkY29sb3ItYTIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWIyIHtcbiAgICBjb2xvcjogJGNvbG9yLWIyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1jMiB7XG4gICAgY29sb3I6ICRjb2xvci1jMiAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItZDIge1xuICAgIGNvbG9yOiAkY29sb3ItZDIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXoyIHtcbiAgICBjb2xvcjogJGNvbG9yLXoyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1mMiB7XG4gICAgY29sb3I6ICRjb2xvci1mMiAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEZJTiBGdWVudGVzICovXG5cblxuLyogRm9uZG9zICovXG5cbi5mb25kby1jb2xvci1hMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWExICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1hMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWEyICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1hMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWEzICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1iMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWIxICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1iMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWIyICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1iMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWIzICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1jMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWMxICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1jMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWMyICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1jMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWMzICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1kMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWQxICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1kMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWQyICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1kMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWQzICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci16MSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXoxICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci16MiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXoyICFpbXBvcnRhbnQ7XG59XG5cbi5mb25kby1jb2xvci1mMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWYyICFpbXBvcnRhbnQ7XG59XG5cblxuLyogRklOIEZvbmRvcyAqL1xuXG5wIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cbn1cblxuYWJiclt0aXRsZV0ge1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICBjdXJzb3I6IGhlbHA7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lXG59XG5cbmFkZHJlc3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0XG59XG5cbm9sLFxudWwge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbVxufVxuXG5vbCxcbnVsLFxuZGwge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxufVxuXG5vbCBvbCxcbnVsIHVsLFxub2wgdWwsXG51bCBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG5kdCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG5kZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDBcbn1cblxuYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAwIDAgMXJlbVxufVxuXG5iLFxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyXG59XG5cbnNtYWxsLFxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IC44NzVlbVxufVxuXG5tYXJrLFxuLm1hcmsge1xuICAgIHBhZGRpbmc6IC4xODc1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtaGlnaGxpZ2h0LWJnKVxufVxuXG5zdWIsXG5zdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IC43NWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZVxufVxuXG5zdWIge1xuICAgIGJvdHRvbTogLS4yNWVtXG59XG5cbnN1cCB7XG4gICAgdG9wOiAtLjVlbVxufVxuXG5hIHtcbiAgICBjb2xvcjogdmFyKC0tYnMtbGluay1jb2xvcik7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKVxufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbY2xhc3NdKSxcbmE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pOmhvdmVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLmJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAyLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuLmJ0bi1jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbn1cblxuLmJ0bi1jaGVja1tkaXNhYmxlZF0rLmJ0bixcbi5idG4tY2hlY2s6ZGlzYWJsZWQrLmJ0biB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgZmlsdGVyOiBub25lO1xuICAgIG9wYWNpdHk6IC42NVxufVxuXG4uaW5wdXQtZ3JvdXAgLmJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDJcbn1cblxuLmlucHV0LWdyb3VwIC5idG46Zm9jdXMge1xuICAgIHotaW5kZXg6IDNcbn1cblxuXG4vKkJPVE9ORVMqL1xuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC5idG4ge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lXG4gICAgfVxufVxuXG4uYnRuLWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYTMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXoyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWExICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci16MiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYjMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXoyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tYjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWIxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci16MiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLWMyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tYzpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWMxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci16MiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1kOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLWMyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWQxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci16MSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1lMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItejIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZTIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLWMyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWUxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci16MSAhaW1wb3J0YW50O1xufVxuXG5cbi8qZmluIGJvdG9uZXMgKi9cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCAwICRjb2xvci16MSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmVcbn1cblxuLnRoZW1lLWJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItejJcbn1cblxuLnRoZW1lLWJnLWRhcmsge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hMSAhaW1wb3J0YW50XG59XG5cbi50aGVtZS1iZy1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZjJcbn1cblxuLnRoZW1lLWJnLWxpZ2h0LWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkY29sb3ItYjQgMCUsICRjb2xvci16MiA3MCUpXG59XG5cbiN0b3Bjb250cm9sIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYTEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDMwO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxcmVtXG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgI3RvcGNvbnRyb2wge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lXG4gICAgfVxufVxuXG4jdG9wY29udHJvbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzJmMzM0ZTtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4uYm9yZGVyLXJhZGl1cy0wIHtcbiAgICBib3JkZXItcmFkaXVzOiAwXG59XG5cbi5mb250LXN0eWxlLW5vcm1hbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnRcbn1cblxuLnNpbmdsZS1jb2wtbWF4IHtcbiAgICBtYXgtd2lkdGg6IDc2MHB4XG59XG5cbi5zaXRlLWxvZ28gLmxvZ28tdGV4dCB7XG4gICAgY29sb3I6ICRjb2xvci1hMSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbVxufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIuNXJlbVxufVxuXG4uc2VjdGlvbi1pbnRybyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtXG59XG5cbi5oZXJvLXNlY3Rpb24gLmhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG4uaGVyby1zZWN0aW9uIC5zdWJoZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtXG59XG5cbi5oZXJvLXF1b3RlcyAucXVvdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRjb2xvci1mMiAhaW1wb3J0YW50O1xufVxuXG4uaGVyby1xdW90ZXMgLnF1b3RlOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAkY29sb3ItZjIgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbGVmdDogMnJlbVxufVxuXG4uaGVyby1xdW90ZXMgLnNvdXJjZSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogJGNvbG9yLXoxO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW1cbn1cblxuLmhlcm8tcXVvdGVzIC5zb3VyY2UtcHJvZmlsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA3NXB4XG59XG5cbi5oZXJvLXF1b3RlcyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgYm90dG9tOiAtNHJlbVxufVxuXG4uaGVyby1xdW90ZXMgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZjIgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcbn1cblxuLmJvb2stY292ZXItaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLmJvb2stY292ZXItaG9sZGVyIC5ib29rLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtMnJlbTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZjI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZy10b3A6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG4uYmVuZWZpdHMtc2VjdGlvbiAuaXRlbS1pbm5lciB7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbi5iZW5lZml0cy1zZWN0aW9uIC5pdGVtLWljb24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogJGNvbG9yLWMyICFpbXBvcnRhbnQ7XG59XG5cbi5iZW5lZml0cy1zZWN0aW9uIC5pdGVtLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudC1zZWN0aW9uIC5rZXktcG9pbnRzLWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW1cbn1cblxuLmNvbnRlbnQtc2VjdGlvbiAua2V5LXBvaW50cy1saXN0IGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXG59XG5cbi5jb250ZW50LXNlY3Rpb24gLmZhLWNoZWNrLWNpcmNsZSB7XG4gICAgY29sb3I6ICRjb2xvci1mMiAhaW1wb3J0YW50XG59XG5cbi5hdWRpZW5jZS1zZWN0aW9uIC5hdWRpZW5jZSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweFxufVxuXG4uYXVkaWVuY2Utc2VjdGlvbiAuaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtXG59XG5cbi5hdWRpZW5jZS1zZWN0aW9uIC5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtXG59XG5cbi5hdWRpZW5jZS1zZWN0aW9uIC5pdGVtLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLWYyICFpbXBvcnRhbnRcbn1cblxuLnJldmlld3Mtc2VjdGlvbiAuaXRlbS1pbm5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4ucmV2aWV3cy1zZWN0aW9uIC5pY29uLWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IC0xOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmctdG9wOiA2cHhcbn1cblxuLnJldmlld3Mtc2VjdGlvbiAuc291cmNlLXByb2ZpbGUge1xuICAgIHdpZHRoOiA3MHB4XG59XG5cbi5yZXZpZXdzLXNlY3Rpb24gLnNvdXJjZS1pbmZvIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtXG59XG5cbi5hdXRob3Itc2VjdGlvbiB7XG4gICAgY29sb3I6ICNmZmZcbn1cblxuLmF1dGhvci1zZWN0aW9uIC5hdXRob3ItcGljIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweFxufVxuXG4uYXV0aG9yLXNlY3Rpb24gLnNvY2lhbC1saXN0IGxpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZy10b3A6IDZweFxufVxuXG4uYXV0aG9yLXNlY3Rpb24gLnNvY2lhbC1saXN0IGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpXG59XG5cbi5hdXRob3Itc2VjdGlvbiAuc29jaWFsLWxpc3QgYSB7XG4gICAgY29sb3I6ICNmZmZcbn1cblxuLnRoZW1lLWJnLXByaW1hcnkgYS50aGVtZS1saW5rIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXG59XG5cbi50aGVtZS1iZy1wcmltYXJ5IGEudGhlbWUtbGluazpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZmXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAgIC5oZXJvLXF1b3RlcyAucXVvdGU6YWZ0ZXIge1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweFxuICAgIH1cbiAgICAucmV2aWV3cy1zZWN0aW9uIC5zb3VyY2UtcHJvZmlsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbVxuICAgIH1cbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiAyMDBweFxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLmhlcm8tc2VjdGlvbiAuaGVhZGxpbmUge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgfVxuICAgIC5oZXJvLXNlY3Rpb24gLnN1YmhlYWRsaW5lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbVxuICAgIH1cbiAgICAuYm9vay1jb3Zlci1ob2xkZXIgLmJvb2stYmFkZ2Uge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW1cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'AC-Zinapecuaro-CuentaConmigo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/landing/landing.component */ "Hd4m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/landing/landing.component */ "Hd4m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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