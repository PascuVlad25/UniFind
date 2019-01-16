webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facultate__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, firebaseService, params) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.params = params;
        this.searchInput = "";
        this.searchParams = "";
        this.searchParams = params.data.materie;
        if (this.searchParams)
            this.searchInput = this.searchParams;
        this.facultyItems = this.firebaseService.getUniversityName();
        this.filterByName();
    }
    SearchPage.prototype.filterByName = function () {
        var _this = this;
        /*
        Primeste din search.html numele cautat de utilizator
        si filtreaza lista totala
        */
        var searchedName = this.searchInput;
        this.searchedItems = [];
        if (searchedName === undefined) {
            console.log("SearchName nu e definit!");
            return;
        }
        var searchedSplit = searchedName.split(' ');
        console.log(searchedSplit);
        this.facultyItems.forEach(function (item) {
            for (var i in item) {
                var newName = item[i].nume;
                var newTown = item[i].oras;
                for (var index in searchedSplit) {
                    if (newName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().
                        includes(searchedSplit[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())) {
                        console.log("Am gasit un match");
                        console.log(item[i]);
                        _this.searchedItems.push(item[i]);
                    }
                    else if (newTown.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        .includes(searchedSplit[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())) {
                        console.log("Am gasit un match");
                        console.log(item[i]);
                        _this.searchedItems.push(item[i]);
                    }
                }
            }
        });
    };
    SearchPage.prototype.goTo = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__facultate__["a" /* FacultatePage */], { facultate: param });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\search\search.html"*/'<ion-header style="background: transparent">\n    <ion-navbar transparent>\n    </ion-navbar>\n    <div class="search-container">\n        <ion-item>\n            <ion-input [(ngModel)]="searchInput" placeholder="Cauta Facultate" clearInput></ion-input>\n        </ion-item>\n        <button ion-button (click)="filterByName()">Cauta</button>\n    </div>\n\n\n</ion-header>\n\n\n<ion-content class="search-content" padding>\n\n\n\n\n    <ion-list>\n        <ion-card class="tab" *ngFor="let item of searchedItems" (click)="goTo(item)">\n\n            <img src="{{item.imagine}}" />\n            <ion-card-content>\n                <ion-card-title>\n                    {{item.nume}}\n                </ion-card-title>\n                <p>\n                    {{item.universitate}}\n                </p>\n                <p>\n                    {{item.oras}}\n                </p>\n            </ion-card-content>\n\n        </ion-card>\n\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Acasa" tabIcon="apps"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Cauta" tabIcon="search"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Favorite" tabIcon="star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacultatePage = /** @class */ (function () {
    function FacultatePage(navCtrl, firebaseService, params) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.params = params;
        this.facultate = this.params.data.facultate;
        console.log(this.facultate);
    }
    FacultatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\search\facultate.html"*/'<ion-header>\n\n    <ion-navbar color="nav_primary">\n\n        <ion-title>{{facultate.nume}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img class="image-header" src="{{facultate.imagine}}">\n\n    <h2 class="main-title">{{facultate.nume}}</h2>\n\n    <h6 class="sub-text">{{facultate.universitate}}, {{facultate.oras}}</h6>\n\n    <hr>\n\n\n\n    <ion-slides slidesPerView="2" class="slider">\n\n\n\n        <ion-slide class="slide">\n\n            <div class="slide-container">\n\n\n\n                <h5 class="slide-text">George Bura</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide class="slide">\n\n            <div class="slide-container">\n\n\n\n                <h5 class="slide-text">Cristina Dan</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide class="slide">\n\n            <div class="slide-container">\n\n\n\n                <h6 class="slide-text">Radu Meko</h6>\n\n                <p>Este o facultate super! Imi place aici</p>\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\search\facultate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FacultatePage);
    return FacultatePage;
}());

//# sourceMappingURL=facultate.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Favorite\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.universityItems = this.firebaseService.getUniversityName();
    }
    HomePage.prototype.addItem = function () {
        this.firebaseService.addItem(this.newNume, this.newUniversitate, this.newOras, this.newImagine);
    };
    HomePage.prototype.openNavChatPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]);
    };
    HomePage.prototype.goTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], { materie: page });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\home.html"*/'<!--\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n\n\n<ion-content>\n\n    <!--\n\n    <ion-row>\n\n        \n\n\n\n        <ion-col col-9>\n\n\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="newNume" placeholder="New Faculty"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="newUniversitate" placeholder="New university"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="newOras" placeholder="New Town"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="newImagine" placeholder="New Image"></ion-input>\n\n\n\n            </ion-item>\n\n\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n\n\n            <button ion-button (click)="addItem()">\n\n\n\n                Adauga\n\n\n\n            </button>\n\n\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n-->\n\n    <div class="bg-top-container">\n\n        <div class="main-title-container">\n\n            <h2 class="main-title">Găsește facultatea cea <br> mai potrivită pentru tine</h2>\n\n            <p class="description">Scapă de grijile legate de viitor <br> Peste 100 de specializări din care poți alege</p>\n\n        </div>\n\n    </div>\n\n\n\n    <h2 class="side-title">Specializări populare</h2>\n\n\n\n    <ion-slides slidesPerView="3" class="slider">\n\n\n\n        <ion-slide (click)="goTo(\'Informatică\')" class="slide color1">\n\n            <div class="slide-container">\n\n                <ion-icon class="icon" name="md-code"></ion-icon>\n\n                <h5 class="slide-text">Informatică</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide (click)="goTo(\'Medicină\')" class="slide color2">\n\n            <div class="slide-container">\n\n                <ion-icon class="icon" name="md-medkit"></ion-icon>\n\n                <h5 class="slide-text">Medicină generală</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide (click)="goTo(\'Politehnică\')" class="slide color3">\n\n            <div class="slide-container">\n\n                <ion-icon class="icon" name="ios-cog"></ion-icon>\n\n                <h6 class="slide-text">Automatică și calculatoare</h6>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide (click)="goTo(\'Economi\')" class="slide color4">\n\n            <div class="slide-container">\n\n                <ion-icon class="icon" name="ios-cash"></ion-icon>\n\n                <h5 class="slide-text">Științe Economice</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide (click)="goTo(\'Farmacie\')" class="slide color5">\n\n            <div class="slide-container">\n\n                <ion-icon class="icon" name="ios-flask"></ion-icon>\n\n                <h5 class="slide-text">Farmacie</h5>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide class="slide">\n\n\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n    <h2 class="side-title">Asistent Facultăți</h2>\n\n\n\n    <div class="asistent-container">\n\n        <div class="asistent">\n\n\n\n            <div class="asistent-text">\n\n                <h2 class="main-title">Bună, sunt aici <br> pentru a te ajuta</h2>\n\n                <p class="description">Eu sunt asistentul tău ce-ți stă la dispoziție <br> și împreună vom alege facultatea potrivită!</p>\n\n            </div>\n\n            <button class="asistent-buton" ion-button (click)="openNavChatPage()"></button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectie__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = /** @class */ (function () {
    function ChatPage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.informatiiStudent = { nume: "Vlad", materii: ['Biologie', 'Religie'] };
        this.ListaValori = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.numeClient = "";
        this.mesajeChat = [{ expeditor: 'asistent', mesaj: "Salut!", intrebare: '' },
            { expeditor: 'asistent', mesaj: "Eu sunt Popândăul și sunt aici să te ajut în alegerea facultății.", intrebare: '' },
            { expeditor: 'asistent', mesaj: "Cum te numești?", intrebare: '' },
            { expeditor: 'client', mesaj: "Nume", intrebare: "nume" },
            { expeditor: 'asistent', mesaj: "Încântat de cunoștință,. Hai să ne cunoaștem mai bine.", intrebare: '' },
            { expeditor: 'asistent', mesaj: "Din ce județ ești?", intrebare: '' },
            { expeditor: 'client', mesaj: "Judet", intrebare: "judet" },
            { expeditor: 'asistent', mesaj: "Ce materii ți-au plăcut în liceu?", intrebare: '' },
            { expeditor: 'client', mesaj: "Materii", intrebare: 'materii' },
            { expeditor: 'asistent', mesaj: "Ai studiat vreodată un instrument muzical?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'muzicala' },
            { expeditor: 'asistent', mesaj: "Îți place să înveți alte limbi?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'verbala' },
            { expeditor: 'asistent', mesaj: "Petreci timp în mod regulat reflectând și gândindu-te la problemele vieții?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'existentiala' },
            { expeditor: 'asistent', mesaj: "Îți plac puzzle-urile?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'logica-matematica' },
            { expeditor: 'asistent', mesaj: "Poți să îți imaginezi lucruri cu ușurință?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'vizuala' },
            { expeditor: 'asistent', mesaj: "îți plac plimbările în natură?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'naturalista' },
            { expeditor: 'asistent', mesaj: "Îți place să construiești sau să asamblezi lucruri?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'corporal-kinestezica' },
            { expeditor: 'asistent', mesaj: "Îți place să interacționezi cu alte persoane?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'interpersonala' },
            { expeditor: 'asistent', mesaj: "Îți cunoști punctele tari și punctele slabe?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'intrapersonala' },
            //*********************************************
            { expeditor: 'asistent', mesaj: "Dacă auzi o melodie o dată, o poți reproduce cu ușurință?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'muzicala' },
            { expeditor: 'asistent', mesaj: "Îți place să citești cărți?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'verbala' },
            { expeditor: 'asistent', mesaj: "Practici meditația?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'existentiala' },
            { expeditor: 'asistent', mesaj: "Te pricepi la șah sau alte jocuri de strategie?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'logica-matematica' },
            { expeditor: 'asistent', mesaj: "Te orientezi ușor în locuri necunoscute?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'vizuala' },
            { expeditor: 'asistent', mesaj: "Îți place să explorezi spații noi?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'naturalista' },
            { expeditor: 'asistent', mesaj: "Folosești mult gesticulațiile în interacțiunile cu alte persoane?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'corporal-kinestezica' },
            { expeditor: 'asistent', mesaj: "Ești o persoana empatică?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'interpersonala' },
            { expeditor: 'asistent', mesaj: "Ai un jurnal în care să-ți notezi gândurile?", intrebare: '' },
            { expeditor: 'client', mesaj: "Muzicala", intrebare: 'intrapersonala' },
            { expeditor: 'asistent', mesaj: "Super! Apasă pe buton pentru lista ta personalizată de facultăți.", intrebare: '' },
            { expeditor: 'final', mesaj: '', intrebare: 'final' }
        ];
        this.mesajeTrimise = [];
        this.mesajCurent = 0;
        this.listaJudete = [{ "auto": "AB", "nume": "Alba" }, { "auto": "AR", "nume": "Arad" }, { "auto": "AG", "nume": "Argeş" }, { "auto": "BC", "nume": "Bacău" }, { "auto": "BH", "nume": "Bihor" }, { "auto": "BN", "nume": "Bistriţa-Năsăud" }, { "auto": "BT", "nume": "Botoşani" }, { "auto": "BR", "nume": "Brăila" }, { "auto": "BV", "nume": "Braşov" }, { "auto": "B", "nume": "Bucureşti" }, { "auto": "BZ", "nume": "Buzău" }, { "auto": "CL", "nume": "Călăraşi" }, { "auto": "CS", "nume": "Caraş-Severin" }, { "auto": "CJ", "nume": "Cluj" }, { "auto": "CT", "nume": "Constanţa" }, { "auto": "CV", "nume": "Covasna" }, { "auto": "DB", "nume": "Dâmboviţa" }, { "auto": "DJ", "nume": "Dolj" }, { "auto": "GL", "nume": "Galaţi" }, { "auto": "GR", "nume": "Giurgiu" }, { "auto": "GJ", "nume": "Gorj" }, { "auto": "HR", "nume": "Harghita" }, { "auto": "HD", "nume": "Hunedoara" }, { "auto": "IL", "nume": "Ialomiţa" }, { "auto": "IS", "nume": "Iaşi" }, { "auto": "IF", "nume": "Ilfov" }, { "auto": "MM", "nume": "Maramureş" }, { "auto": "MH", "nume": "Mehedinţi" }, { "auto": "MS", "nume": "Mureş" }, { "auto": "NT", "nume": "Neamţ" }, { "auto": "OT", "nume": "Olt" }, { "auto": "PH", "nume": "Prahova" }, { "auto": "SJ", "nume": "Sălaj" }, { "auto": "SM", "nume": "Satu Mare" }, { "auto": "SB", "nume": "Sibiu" }, { "auto": "SV", "nume": "Suceava" }, { "auto": "TR", "nume": "Teleorman" }, { "auto": "TM", "nume": "Timiş" }, { "auto": "TL", "nume": "Tulcea" }, { "auto": "VL", "nume": "Vâlcea" }, { "auto": "VS", "nume": "Vaslui" }, { "auto": "VN", "nume": "Vrancea" }];
        this.urmatoareaIntrebare();
    }
    ChatPage.prototype.urmatoareaIntrebare = function () {
        do {
            var mesaj = this.mesajeChat[this.mesajCurent];
            this.mesajeTrimise.push(mesaj);
            this.mesajCurent++;
        } while (this.mesajeChat[this.mesajCurent].expeditor == "asistent" && this.mesajeChat[this.mesajCurent].expeditor != "final");
        if (this.mesajeChat[this.mesajCurent].expeditor == "final") {
            this.incrementeazaMaterii();
            this.goTo(this.ListaValori);
        }
    };
    ChatPage.prototype.raspunsDouaAlegeri = function (intrebare, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: intrebare,
            buttons: [
                {
                    text: 'Da',
                    handler: function () {
                        _this.mesajeChat[_this.mesajCurent].mesaj = "Da";
                        _this.urmatoareaIntrebare();
                        _this.ListaValori[index] += 1;
                    }
                },
                {
                    text: 'Nu',
                    handler: function () {
                        _this.mesajeChat[_this.mesajCurent].mesaj = "Nu";
                        _this.urmatoareaIntrebare();
                    }
                }
            ]
        });
        alert.present();
    };
    ChatPage.prototype.raspunsNume = function (intrebare) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: intrebare,
            inputs: [
                {
                    name: 'nume',
                    placeholder: 'Introdu Nume'
                }
            ],
            buttons: [
                {
                    text: 'Răspunde',
                    handler: function (data) {
                        _this.numeClient = data.nume;
                        _this.mesajeChat[_this.mesajCurent].mesaj = data.nume;
                        _this.mesajeChat[_this.mesajCurent + 1].mesaj = "Încântat de cunoștință, " + _this.numeClient + ". Hai să ne cunoaștem mai bine.";
                        _this.urmatoareaIntrebare();
                        console.log(_this.numeClient);
                    }
                }
            ]
        });
        alert.present();
    };
    ChatPage.prototype.raspunsAlesUnRaspuns = function (lista, titlu, index) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(titlu);
        for (var element in lista) {
            alert.addInput({
                type: 'radio',
                label: lista[element].nume,
                value: lista[element].nume,
                checked: false
            });
        }
        alert.addButton({
            text: 'Selecteaza',
            handler: function (data) {
                _this.mesajeChat[_this.mesajCurent].mesaj = data;
                _this.urmatoareaIntrebare();
                _this.informatiiStudent[index] = data;
            }
        });
        alert.present();
    };
    ChatPage.prototype.raspunsMultiplu = function (lista, titlu, index) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(titlu);
        for (var i in lista) {
            alert.addInput({
                type: 'checkbox',
                label: lista[i].nume,
                value: lista[i].nume
            });
        }
        alert.addButton({
            text: 'Raspunde',
            handler: function (data) {
                _this.mesajeChat[_this.mesajCurent].mesaj = data;
                _this.urmatoareaIntrebare();
                _this.informatiiStudent[index] = data;
            }
        });
        alert.present();
    };
    ChatPage.prototype.incrementeazaMaterii = function () {
        var lista_materii = this.informatiiStudent["materii"];
        for (var i in lista_materii) {
            if (lista_materii[i] == "Matematică") {
                this.ListaValori[3] += 2;
                this.ListaValori[4] += 1;
            }
            else if (lista_materii[i] == "Informatică") {
                this.ListaValori[3] += 2;
            }
            else if (lista_materii[i] == "Biologie") {
                this.ListaValori[5] += 2;
                this.ListaValori[6] += 1;
            }
            else if (lista_materii[i] == "Chimie") {
                this.ListaValori[5] += 1;
            }
            else if (lista_materii[i] == "Fizică") {
                this.ListaValori[3] += 1;
                this.ListaValori[6] += 1;
            }
            else if (lista_materii[i] == "Economie") {
                this.ListaValori[3] += 1;
                this.ListaValori[7] += 1;
            }
            else if (lista_materii[i] == "Limba Română") {
                this.ListaValori[7] += 1;
                this.ListaValori[1] += 2;
            }
            else if (lista_materii[i] == "Limba Engleză") {
                this.ListaValori[7] += 1;
                this.ListaValori[1] += 2;
            }
            else if (lista_materii[i] == "Limba Franceză") {
                this.ListaValori[7] += 1;
                this.ListaValori[1] += 2;
            }
            else if (lista_materii[i] == "Geografie") {
                this.ListaValori[5] += 1;
                this.ListaValori[4] += 2;
            }
            else if (lista_materii[i] == "Istorie") {
                this.ListaValori[1] += 2;
            }
            else if (lista_materii[i] == "Psihologie") {
                this.ListaValori[7] += 2;
                this.ListaValori[8] += 1;
            }
            else if (lista_materii[i] == "Filosofie") {
                this.ListaValori[2] += 2;
                this.ListaValori[8] += 1;
            }
            else if (lista_materii[i] == "Ed. Fizică") {
                this.ListaValori[6] += 2;
            }
            else if (lista_materii[i] == "Ed. Muzicală") {
                this.ListaValori[0] += 2;
            }
            else if (lista_materii[i] == "Ed. Plastică") {
                this.ListaValori[4] += 2;
            }
            else if (lista_materii[i] == "Religie") {
                this.ListaValori[2] += 2;
            }
        }
    };
    ChatPage.prototype.raspunde = function () {
        var raspuns = this.mesajeChat[this.mesajCurent].intrebare;
        var intrebare = this.mesajeChat[this.mesajCurent - 1].mesaj;
        if (raspuns == "nume")
            this.raspunsNume(intrebare);
        else if (raspuns == "judet") {
            this.raspunsAlesUnRaspuns(this.listaJudete, intrebare, "judet");
        }
        else if (raspuns == "exterior_judet") {
            var lista = [{ nume: "Da" }, { nume: "Mi-e indiferent" }, { nume: "Nu" }];
            this.raspunsAlesUnRaspuns(lista, intrebare, "exterior");
            if (this.informatiiStudent["exterior"] != "Nu")
                this.informatiiStudent["judet"] = "Romania";
            console.log(this.informatiiStudent);
        }
        else if (raspuns == "materii") {
            var lista = [{ nume: "Matematică" }, { nume: "Informatică" }, { nume: "Biologie" }, { nume: "Chimie" }, { nume: "Fizică" }, { nume: "Economie" }, { nume: "Limba Română" }, { nume: "Limba Engleză" }, { nume: "Limba Franceză" }, { nume: "Geografie" }, { nume: "Istorie" }, { nume: "Psihologie" }, { nume: "Filosofie" }, { nume: "Ed. Fizică" }, { nume: "Ed. Muzicală" }, { nume: "Ed. Plastică" }, { nume: "Religie" }];
            this.raspunsMultiplu(lista, intrebare, "materii");
            console.log(this.informatiiStudent);
        }
        else if (raspuns == "muzicala")
            this.raspunsDouaAlegeri(intrebare, 0);
        else if (raspuns == "verbala") {
            this.raspunsDouaAlegeri(intrebare, 1);
        }
        else if (raspuns == "existentiala")
            this.raspunsDouaAlegeri(intrebare, 2);
        else if (raspuns == "logica-matematica")
            this.raspunsDouaAlegeri(intrebare, 3);
        else if (raspuns == "vizuala") {
            this.raspunsDouaAlegeri(intrebare, 4);
        }
        else if (raspuns == "naturalista")
            this.raspunsDouaAlegeri(intrebare, 5);
        else if (raspuns == "corporal-kinestezica")
            this.raspunsDouaAlegeri(intrebare, 6);
        else if (raspuns == "interpersonala") {
            this.raspunsDouaAlegeri(intrebare, 7);
        }
        else if (raspuns == "intrapersonala")
            this.raspunsDouaAlegeri(intrebare, 8);
        else if (raspuns == "final") {
            this.incrementeazaMaterii();
            this.goTo(this.ListaValori);
        }
    };
    ChatPage.prototype.goTo = function (lista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__selectie__["a" /* SelectiePage */], { lista: lista });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\chat.html"*/'<ion-header>\n\n    <ion-navbar color="nav_primary">\n\n        <ion-title>Asistent</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-chat">\n\n    <ion-list *ngFor="let mesaj of mesajeTrimise">\n\n        <div class="chat-bubble-container">\n\n            <div *ngIf="mesaj.expeditor == \'asistent\'" class="chat-bubble stanga">\n\n                <p class="chat-text">{{mesaj.mesaj}}</p>\n\n            </div>\n\n\n\n            <div *ngIf="mesaj.expeditor == \'client\'" class="chat-bubble dreapta">\n\n                <p class="chat-text">{{mesaj.mesaj}}</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-list>\n\n    <button class="buton-chat" ion-button (click)="raspunde()">Raspunde</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectiePage = /** @class */ (function () {
    function SelectiePage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.facultatiSelectie = [];
        this.universityItems = this.firebaseService.getUniversityName();
        this.listaValori = navParams.data.lista;
        //      this.filterByValori();
        this.filterUniversity();
    }
    SelectiePage.prototype.filterByValori = function () {
        var _this = this;
        /*
        Primeste din search.html numele cautat de utilizator
        si filtreaza lista totala
        */
        var searchedName = "";
        this.facultatiSelectie = [];
        if (searchedName === undefined) {
            console.log("SearchName nu e definit!");
            return;
        }
        this.universityItems.forEach(function (item) {
            for (var i in item) {
                var newName = item[i].nume;
                if (newName.toLowerCase().includes(searchedName.toLowerCase())) {
                    _this.facultatiSelectie.push(item[i]);
                }
            }
        });
    };
    SelectiePage.prototype.filterUniversity = function () {
        var _this = this;
        //VALORILE USERULUI
        var newList; //VALORILE FACULTATII
        this.universityItems.forEach(function (item) {
            for (var i in item) {
                var listString = item[i].list;
                if (listString != undefined) {
                    newList = _this.convertStringToInt(listString);
                    if (_this.compareValues(_this.listaValori, newList))
                        _this.facultatiSelectie.push(item[i]);
                }
                else {
                    console.log("Lista nedefinita!");
                }
            }
        });
    };
    SelectiePage.prototype.compareValues = function (userList, newList) {
        /*
        Verifica daca valorile din userList
        sunt mai mici decat cele ale facultatii
        */
        for (var i in userList) {
            if (userList[i] < newList[i])
                return false;
        }
        return true;
    };
    SelectiePage.prototype.convertStringToInt = function (listString) {
        /*
        Transforma lista inteligentelor in lista
        de int-uri
        */
        var newList = [];
        if (listString === undefined) {
            console.log("Lista nedefinita.");
        }
        else {
            var splitList = listString.split(',', 9);
            for (var _i = 0, splitList_1 = splitList; _i < splitList_1.length; _i++) {
                var splitElem = splitList_1[_i];
                newList.push(Number(splitElem));
            }
        }
        return newList;
    };
    SelectiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\selectie.html"*/'<ion-header style="background: transparent">\n\n    <ion-navbar transparent style="color:white">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="selectie-content" padding>\n\n\n\n\n\n\n\n\n\n    <ion-list>\n\n        <ion-card class="tab" *ngFor="let item of facultatiSelectie">\n\n\n\n            <img src="{{item.imagine}}" />\n\n            <ion-card-content>\n\n                <ion-card-title>\n\n                    {{item.nume}}\n\n                </ion-card-title>\n\n                <p>\n\n                    {{item.universitate}}\n\n                </p>\n\n                <p>\n\n                    {{item.oras}}\n\n                </p>\n\n            </ion-card-content>\n\n\n\n        </ion-card>\n\n\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\pages\home\selectie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], SelectiePage);
    return SelectiePage;
}());

//# sourceMappingURL=selectie.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_facultate__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_chat__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_selectie__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyC_oVchPhlCbbjc-pubYWwwriwufTn3-Fc",
    authDomain: "hackathon-153ed.firebaseapp.com",
    databaseURL: "https://hackathon-153ed.firebaseio.com",
    projectId: "hackathon-153ed",
    storageBucket: "hackathon-153ed.appspot.com",
    messagingSenderId: "966796671075"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_facultate__["a" /* FacultatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_selectie__["a" /* SelectiePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                /** DATABASE INITIALIZE  **/
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_facultate__["a" /* FacultatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_selectie__["a" /* SelectiePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\hackathon Hermes 2018\hackathonApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\hackathon Hermes 2018\hackathonApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
        console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.getUniversityName = function () {
        return this.afd.list('/Facultati');
    };
    FirebaseServiceProvider.prototype.addItem = function (name, universitate, oras, imagine) {
        var obj = { nume: name, universitate: universitate, oras: oras, imagine: imagine };
        this.afd.list('/Facultati/').push(obj);
    };
    FirebaseServiceProvider.prototype.removeUniversity = function (id) {
        this.afd.list('/Facultati').remove(id);
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map