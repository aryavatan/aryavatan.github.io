function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"western-image\">\r\n    <img src=\"assets/Middlesex.png\" alt=\"Middlesex College Western University\">    \r\n</div>\r\n\r\n<h2>About Me</h2>\r\n\r\n<div id=\"profile\">\r\n    <p>\r\n        I'm Arya Vatan-Abadi, a software engineer from Toronto, Canada.\r\n        I am a focused and driven individual with a passion for \r\n        problem-solving and strong interpersonal skills that \r\n        translate into an effective team member. In my spare time I like to\r\n        work on cool projects, read, and play video games.\r\n    </p>    \r\n</div>\r\n\r\n<div id=\"education\">\r\n    <h2>Education</h2>\r\n    <p>\r\n        <b>Bachelor of Software Engineering</b>\r\n        <br>\r\n        University of Western Ontario\r\n        <br>\r\n        2017 - 2021, London, ON\r\n    </p>\r\n</div>\r\n\r\n<div id=\"skills\">\r\n    <h2>Programming Skills</h2>\r\n    <ul *ngIf=\"skills\">\r\n        <li *ngFor=\"let skill of skills\" [class]=\"skill.class\" (click)=\"skillClicked(skill)\">{{ skill.name }}</li>\r\n    </ul>\r\n\r\n</div>\r\n\r\n<div id=\"awards\">\r\n    <h2>Awards</h2>\r\n    <ul>\r\n        <li>\r\n            <b>SCOTIABANK HACKATHON (S:\\HACKS)</b><br>\r\n            Winner <br>\r\n            August 2019\r\n        </li>\r\n        <li>\r\n            <b>ACADEMIC ACHIEVEMENT AWARD - COMPUTER SCIENCE</b><br>\r\n            Awarded to highest achieving student<br>\r\n            June 2016\r\n        </li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<header>\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class=\"mainnav\">\r\n\t\t\t<a routerLink=\"/\" class=\"logo\">Arya Vatan-Abadi</a>\r\n\t\t\t<nav>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/\">Home</a></li>\r\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/about\">About Me</a></li>\r\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/experience\">Experience</a></li>\r\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/projects\">Projects</a></li>\r\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/contact\">Contact</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"sidenavControl\">\r\n\t\t\t<a routerLink=\"/\" class=\"logo\">Arya Vatan-Abadi</a>\r\n\t\t\t<a class=\"icon\" (click)=\"openNav()\">\r\n\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div id=\"mySidenav\" class=\"sidenav\" [style.width]=\"sidenavWidth\">\r\n\t\t\t<a class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n\t\t\t<a href=\"#\" routerLink=\"/\" (click)=\"closeNav()\">Home</a>\r\n\t\t\t<a href=\"#\" routerLink=\"/about\" (click)=\"closeNav()\">About Me</a>\r\n\t\t\t<a href=\"#\" routerLink=\"/experience\" (click)=\"closeNav()\">Experience</a>\r\n\t\t\t<a href=\"#\" routerLink=\"/projects\" (click)=\"closeNav()\">Projects</a>\r\n\t\t\t<a href=\"#\" routerLink=\"/contact\" (click)=\"closeNav()\">Contact</a>\r\n\t\t</div>\r\n\r\n\t\t<hr>\r\n\t</div>\r\n</header>\r\n\r\n<div id=\"main\" class=\"container\" (click)=\"closeNav()\">\r\n\t<router-outlet></router-outlet>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>Contact Page in Development...</p> -->\r\n\r\n<h3>Want to get in touch?</h3>\r\n<p id=\"main-text\">\r\n    Send me an email and I will reply as soon as possible, thanks!\r\n</p> \r\n\r\n<br><br>\r\n\r\n<div class=\"contact\">\r\n    <div class=\"table\">\r\n        <ul>\r\n            \r\n            <a href=mailto:arya.vatanabadi@gmail.com target=\"_blank\"><li>\r\n                <img class=\"logo\" src=\"assets/Gmail.png\">\r\n                <h3>Email</h3>\r\n                <p>arya.vatanabadi@gmail.com</p>\r\n            </li></a>\r\n\r\n\r\n            <a href=\"https://github.com/aryavatan\" target=\"_blank\"><li>\r\n                <img class=\"logo\" src=\"assets/GitHub.png\">\r\n                <h3>Github</h3>\r\n                <p>aryavatan</p>\r\n            </li></a>\r\n\r\n\r\n            <a href=\"https://www.linkedin.com/in/aryavatanabadi/\" target=\"_blank\"><li>\r\n                <img class=\"logo\" id=\"linkedin\" src=\"assets/LinkedIn.png\">\r\n                <h3>LinkedIn</h3>\r\n                <p>aryavatanabadi</p>\r\n            </li></a>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"timeline\">\r\n\r\n    <div class=\"entry\" *ngFor=\"let experience of experiences\">\r\n        <div class=\"title\">\r\n            <h3>{{experience.dates}}</h3>\r\n            <p>{{experience.title}}<br>\r\n                <a *ngIf=\"experience.employerSite\" href=\"{{experience.employerSite}}\" target=\"_blank\">\r\n                    {{experience.employer}}\r\n                </a>\r\n                <span *ngIf=\"experience.employerSite == undefined\">\r\n                    {{experience.employer}}\r\n                </span>\r\n            </p>\r\n        </div>\r\n        <div class=\"body\">\r\n            <p>{{experience.summary}}</p>\r\n            <ul>\r\n                <li *ngFor=\"let keyPoint of experience.keyPoints\">{{keyPoint}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"clearfix\">\r\n    <div class=\"box\" id=\"image\">\r\n        <img src=\"assets/Beach.JPG\" alt=\"Arya\">\r\n    </div>\r\n\r\n    <div class=\"box\" id=\"text\">\r\n        <h1>Hey there!</h1>\r\n        <h1>I'm Arya Vatan-Abadi</h1>\r\n        <h1>Passionate <span class=\"title\">Software Engineer</span></h1>\r\n        <br>\r\n        <p>I'm here to write code and chew bubble gum, And I'm all out of bubble gum...</p>\r\n\r\n        <div id=\"skills\">\r\n            <ul *ngIf=\"skills\">\r\n                <li *ngFor=\"let skill of skills\" [class]=\"skill.class\" (click)=\"skillClicked(skill)\">{{ skill.name }}</li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectDetailsProjectDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"project\" class=\"clearfix\">\r\n\r\n    <div class=\"box\">\r\n        <!-- Container for the image gallery -->\r\n        <div *ngIf=\"project.pictures\" class=\"image-container\">\r\n        \r\n            <!-- The Modal -->\r\n            <div id=\"myModal\" class=\"modal\" [style.display]=\"showModal\">\r\n        \r\n                <!-- The Close Button -->\r\n                <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n                <div class=\"modal-content\">\r\n                    <!-- Modal Caption (Image Text) -->\r\n                    <div class=\"modal-caption\">\r\n                        <p id=\"caption\">{{caption}}</p>\r\n                    </div>\r\n        \r\n                    <div class=\"numbertext\">{{slideIndex + 1}} / {{project.pictures.length}}</div>\r\n        \r\n                    <div *ngFor=\"let picture of project.pictures\" class=\"modalSlides\" [style.display]=\"picture.show\">\r\n                        <img src=\"{{picture.src}}\" style=\"width:100%\">\r\n                    </div>\r\n        \r\n                    <!-- Next/previous controls -->\r\n                    <a class=\"modal-prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n                    <a class=\"modal-next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n        \r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Full-width images with number text -->\r\n            <div *ngFor=\"let picture of project.pictures\" class=\"mySlides\" [style.display]=\"picture.show\">\r\n                <img src=\"{{picture.src}}\" style=\"width:100%\" (click)=\"openModal()\">\r\n            </div>\r\n        \r\n            <div class=\"numbertext\">{{slideIndex + 1}} / {{project.pictures.length}}</div>\r\n        \r\n            <!-- Next and previous buttons -->\r\n            <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n            <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n        \r\n            <!-- Image text -->\r\n            <div class=\"caption-container\">\r\n                <p id=\"caption\">{{caption}}</p>\r\n            </div>\r\n        \r\n            <!-- Thumbnail images -->\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let picture of project.pictures\" class=\"column\">\r\n                    <img class=\"demo cursor\" src=\"{{picture.src}}\" style=\"width:100%\" [style.opacity]=\"picture.opacity\"\r\n                        (mouseover)=\"changeDemoOpacity(picture.src, 1)\" (mouseout)=\"changeDemoOpacity(picture.src, 0.6)\"\r\n                        (click)=\"currentSlide(picture.src)\" alt=\"{{picture.caption}}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <h2>{{project.name}}</h2>\r\n        <h3>Description</h3>\r\n        <p class=\"text\">{{project.description}}</p>\r\n        \r\n        <div id=\"skills\">\r\n            <h3>Built With:</h3>\r\n            <ul *ngIf=\"skills\">\r\n                <li *ngFor=\"let skill of skills\">{{ skill }}</li>\r\n            </ul>\r\n        </div>\r\n        <div>\r\n            <h3>Want To Learn More?</h3>\r\n            <p class=\"text\">Visit the open source GitHub repository for this project:</p>\r\n        </div>\r\n        <div class=\"githubContainer\">\r\n            <a id=\"github\" href=\"{{project.github}}\" target=\"_blank\">Here</a>\r\n        </div>\r\n        <div id=\"mobilePageExtender\">\r\n            <br><br><br><br>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Projects</h2>\r\n<div class=\"filters-list\">\r\n    <ul *ngIf=\"filters\">\r\n        <li (click)=\"filterSelected({name:'Show All'})\" [class]=\"selectedFilter\">\r\n            Show All\r\n        </li>\r\n        <li *ngFor=\"let filter of filters\" (click)=\"filterSelected(filter)\" [class]=\"filter.class\">\r\n            {{filter.name}}\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"main\">\r\n    <div *ngIf=\"projects\" class=\"row\">\r\n        <div *ngFor=\"let project of projects\" id=\"{{project.id}}\" class=\"column\">\r\n            <div class=\"content\" (click)=\"projectClicked(project)\">\r\n                <img src=\"{{project.icon}}\" alt=\"{{project.name}}\" style=\"width:100%\">\r\n                <h3>{{project.name}}</h3>\r\n                <p>{{project.summary}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  border-radius: 20px;\n  margin-top: 1em;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\np,\nli {\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: 20px;\n  color: white;\n}\n\nh2 {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: #98e698;\n  margin-top: 50px;\n}\n\n#awards > h2 {\n  margin-top: 40px;\n}\n\np {\n  margin-left: 1em;\n}\n\n#profile {\n  width: auto;\n  max-width: 50%;\n}\n\n#skills > ul {\n  list-style-type: none;\n  margin: 0;\n  margin-left: 1em;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#skills > ul li {\n  background: #98e698;\n  padding: 18px;\n  margin-right: 10px;\n  width: auto;\n  height: auto;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: black;\n  border-radius: 8px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n#skills > ul li:hover {\n  background: limegreen;\n}\n\n#skills > ul li:hover.has-project {\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n#awards > ul {\n  list-style-type: none;\n  margin-left: 0;\n  padding-left: 1em;\n}\n\n#awards > ul li {\n  padding-bottom: 1em;\n  padding-left: 0;\n}\n\n@media screen and (max-width: 1300px) {\n  #profile {\n    max-width: 98%;\n  }\n\n  #skills > ul li {\n    padding: 12px;\n  }\n  #skills > ul li:hover {\n    background: #98e698;\n  }\n  #skills > ul li:hover.has-project {\n    background-color: limegreen;\n    font-weight: bolder;\n    cursor: pointer;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  img {\n    border-radius: 12px;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxhcnlhdlxcRGVza3RvcFxcQXJ5YS1SZXN1bWUvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7O0VBRUksMkNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksMkNBQUE7RUFDQSxjQXZCTTtFQXdCTixnQkFBQTtBQ0RKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdJO0VBQ0ksbUJBakRFO0VBa0RGLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FDRFI7O0FESUk7RUFDSSxxQkFBQTtBQ0ZSOztBREdRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDRFo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0hKOztBREtJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDSFI7O0FEUUE7RUFDSTtJQUNJLGNBQUE7RUNMTjs7RURTTTtJQUNJLGFBQUE7RUNOVjtFRFFVO0lBQ0ksbUJBN0ZOO0VDdUZSO0VET2M7SUFDSSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQ0xsQjtBQUNGOztBRFlBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLGFBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogcmdiKDE1MiwgMjMwLCAxNTIpO1xyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5wLFxyXG5saSB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuI2F3YXJkcyA+IGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuI3Byb2ZpbGUge1xyXG4gICAgLy9tYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI3NraWxscyA+IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeSwgMjUlKTtcclxuICAgICAgICAmLmhhcy1wcm9qZWN0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2F3YXJkcyA+IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNQVggV0lEVEg6IDEzMDBweCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAjcHJvZmlsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3NraWxscyA+IHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgJi5oYXMtcHJvamVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNQVggV0lEVEg6IDkwMHB4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5wLFxubGkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM5OGU2OTg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbiNhd2FyZHMgPiBoMiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4jcHJvZmlsZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuI3NraWxscyA+IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNza2lsbHMgPiB1bCBsaSB7XG4gIGJhY2tncm91bmQ6ICM5OGU2OTg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuI3NraWxscyA+IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xufVxuI3NraWxscyA+IHVsIGxpOmhvdmVyLmhhcy1wcm9qZWN0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYXdhcmRzID4gdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbiNhd2FyZHMgPiB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICNwcm9maWxlIHtcbiAgICBtYXgtd2lkdGg6IDk4JTtcbiAgfVxuXG4gICNza2lsbHMgPiB1bCBsaSB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICAjc2tpbGxzID4gdWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM5OGU2OTg7XG4gIH1cbiAgI3NraWxscyA+IHVsIGxpOmhvdmVyLmhhcy1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json");

    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json", 1);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project.service.ts");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(router, projectService) {
        _classCallCheck(this, AboutComponent);

        this.router = router;
        this.projectService = projectService;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initSkills();
        }
      }, {
        key: "initSkills",
        value: function initSkills() {
          var _this = this;

          var list = [];

          _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__.skills.sort().forEach(function (skill) {
            var hasProject = _this.projectService.doesSkillHaveProjects(skill) ? "has-project" : "";
            list.push({
              name: skill,
              class: hasProject
            });
          });

          this.skills = list;
        } // If skill that has projects is clicked, route to projects w/ that skill as the filter

      }, {
        key: "skillClicked",
        value: function skillClicked(skill) {
          if (skill.class == "has-project") {
            localStorage.setItem('filter', skill.name);
            this.router.navigate(['/projects']);
          }
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./project-details/project-details.component */
    "./src/app/project-details/project-details.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'experience',
      component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    }, {
      path: 'projects/project-details',
      component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailsComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: browserRefresh, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "browserRefresh", function () {
      return browserRefresh;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project.service */
    "./src/app/project.service.ts");

    var browserRefresh = false;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, projectService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.projectService = projectService;
        this.title = 'Arya-Resume';
        this.subscription = router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            // AFTER BROWSER REFRESH
            browserRefresh = !router.navigated;
            console.log("Refreshed");
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "openNav",
        value: function openNav() {
          this.sidenavWidth = "220px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.sidenavWidth = 0;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./project-details/project-details.component */
    "./src/app/project-details/project-details.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img.logo {\n  width: 100px;\n  margin: 0;\n}\n\np {\n  color: white;\n}\n\n.table {\n  display: table;\n  /* Allow the centering to work */\n  margin: 0 auto;\n}\n\nh3 {\n  color: #98e698;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: 155%;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nul a {\n  text-decoration: none;\n}\n\nul li {\n  padding: 1em;\n  margin-right: 20px;\n  width: 200px;\n  height: auto;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border: solid;\n  border-width: 2px;\n  border-color: #aaa;\n  border-radius: 10px;\n  overflow: hidden;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\nul li h3 {\n  color: #98e698;\n  font-size: 150%;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 1px;\n}\n\nul li p {\n  margin: 0;\n}\n\nul li:hover {\n  background: #35393b;\n  border-color: #98e698;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXGFyeWF2XFxEZXNrdG9wXFxBcnlhLVJlc3VtZS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0csWUFBQTtFQUNBLFNBQUE7QUNGSDs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNDLGNBQUE7RUFBa0IsZ0NBQUE7RUFDbEIsY0FBQTtBQ0REOztBRElBO0VBQ0ksY0FsQks7RUFtQkwsMkNBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDQyxxQkFBQTtFQUNHLFNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7QUNESjs7QURFSTtFQUNJLHFCQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBQ0RSOztBREdRO0VBQ0ksY0F0REg7RUF1REcsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRFo7O0FESVE7RUFDSSxTQUFBO0FDRlo7O0FET0k7RUFDSSxtQkFBQTtFQUNBLHFCQXJFQztBQ2dFVCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OnJnYigxNTIsIDIzMCwgMTUyKTtcclxuJHNlY29uZGFyeTogcmdiKDI5LCAzMSwgMzIpO1xyXG5cclxuaW1nLmxvZ297XHJcbiAgIHdpZHRoOiAxMDBweDtcclxuICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFibGUge1xyXG5cdGRpc3BsYXk6IHRhYmxlOyAgIC8qIEFsbG93IHRoZSBjZW50ZXJpbmcgdG8gd29yayAqL1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1NSU7XHJcbn1cclxuXHJcbnVsIHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaTpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRzZWNvbmRhcnksIDEwJSk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxufSIsImltZy5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiBBbGxvdyB0aGUgY2VudGVyaW5nIHRvIHdvcmsgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmgzIHtcbiAgY29sb3I6ICM5OGU2OTg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNTUlO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG51bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxudWwgbGkge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG51bCBsaSBoMyB7XG4gIGNvbG9yOiAjOThlNjk4O1xuICBmb250LXNpemU6IDE1MCU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxudWwgbGkgcCB7XG4gIG1hcmdpbjogMDtcbn1cbnVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM1MzkzYjtcbiAgYm9yZGVyLWNvbG9yOiAjOThlNjk4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/experience/experience.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/experience/experience.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".timeline {\n  width: 100%;\n  max-width: 1300px;\n  background: #1d1f20;\n  padding: 100px 50px;\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: calc(22% + 56px);\n  bottom: 0px;\n  width: 4px;\n  background: white;\n}\n.timeline:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.entry {\n  clear: both;\n  text-align: left;\n  position: relative;\n}\n.entry .title {\n  margin-bottom: 0.5em;\n  float: left;\n  width: 22%;\n  padding-right: 30px;\n  text-align: right;\n  position: relative;\n}\n.entry .title:before {\n  content: \"\";\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border: 4px solid #98e698;\n  background-color: #1d1f20;\n  border-radius: 100%;\n  top: 15%;\n  right: -8px;\n}\n.entry .title h3 {\n  margin: 0;\n  font-size: 140%;\n  color: #98e698;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.entry .title p {\n  margin: 0;\n  font-size: 100%;\n  color: white;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.entry .title p a {\n  text-decoration: none;\n  color: #98e698;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.entry .body {\n  margin: 0 0 3em;\n  float: left;\n  width: 73%;\n  padding-left: 30px;\n}\n.entry .body p {\n  line-height: 1.4em;\n  color: white;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.entry .body p:first-child {\n  margin-top: 0;\n  font-weight: 400;\n}\n.entry .body ul {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: #aaa;\n  padding-left: 0;\n  list-style-type: disc;\n  margin-left: 2em;\n}\n.entry .body ul li {\n  padding-bottom: 6px;\n}\n.entry .body ul li:before {\n  margin-right: 0.5em;\n}\n@media screen and (max-width: 1675px) {\n  .entry .body {\n    width: 65%;\n  }\n}\n@media screen and (max-width: 1186px) {\n  .entry .title h3 {\n    font-size: 130%;\n  }\n  .entry .title p {\n    font-size: 17px;\n  }\n  .entry .body p,\n.entry .body li {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1150px) {\n  .timeline {\n    padding: 100px 10px;\n  }\n  .timeline:before {\n    left: calc(25% + 33px);\n  }\n\n  .entry .title {\n    width: 25%;\n  }\n  .entry .body {\n    width: 62%;\n  }\n}\n@media screen and (max-width: 881px) {\n  .entry .title h3 {\n    font-size: 120%;\n  }\n  .entry .title p {\n    font-size: 16px;\n  }\n  .entry .body p,\n.entry .body li {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 833px) {\n  .entry .body {\n    float: left;\n    width: 85%;\n    text-align: left;\n    margin-left: calc(10% - 30px);\n    margin-top: 5px;\n  }\n  .entry .body p,\n.entry .body li {\n    font-size: 17px;\n  }\n  .entry .title {\n    margin-left: 10%;\n    text-align: left;\n    width: 80%;\n  }\n  .entry .title:before {\n    left: -40px;\n  }\n  .entry .title h3 {\n    font-size: 140%;\n  }\n  .entry .title p {\n    font-size: 18px;\n  }\n\n  .timeline {\n    padding: 40px 10px;\n  }\n  .timeline:before {\n    left: calc(10% - 26px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXGFyeWF2XFxEZXNrdG9wXFxBcnlhLVJlc3VtZS9zcmNcXGFwcFxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBWFE7RUFZUixtQkFBQTtFQUNBLGtCQUFBO0VBR0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBckJPO0VBc0JQLGlCQUFBO0FDWFI7QURhSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1hSO0FEZUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEYUk7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBeENDO0VBeUNELGlCQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRFlRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUE1Q0c7RUE2Q0gsV0E3Q0c7RUE4Q0gseUJBQUE7RUFDQSx5QkFyREE7RUFzREEsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEYVE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBL0RGO0VBZ0VFLDJDQUFBO0FDWFo7QURhUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FDWFo7QURZWTtFQUNJLHFCQUFBO0VBQ0EsY0F6RU47RUEwRU0sMkNBQUE7QUNWaEI7QURjSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQTdFQztBQ2lFVDtBRGFRO0VBQ0ksa0JBQUE7RUFLQSxZQUFBO0VBQ0EsMkNBQUE7QUNmWjtBRFVZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEYVE7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1haO0FEYVk7RUFDSSxtQkFBQTtBQ1hoQjtBRFlnQjtFQUNJLG1CQUFBO0FDVnBCO0FEa0JBO0VBQ0k7SUFDSSxVQUFBO0VDZk47QUFDRjtBRG1CQTtFQUdZO0lBQ0ksZUFBQTtFQ25CZDtFRHFCVTtJQUNJLGVBQUE7RUNuQmQ7RUR1QlU7O0lBRUksZUFBQTtFQ3JCZDtBQUNGO0FEMkJBO0VBQ0k7SUFDSSxtQkFBQTtFQ3pCTjtFRDBCTTtJQUNJLHNCQUFBO0VDeEJWOztFRDRCTTtJQUNJLFVBQUE7RUN6QlY7RUQyQk07SUFDSSxVQUFBO0VDekJWO0FBQ0Y7QUQ4QkE7RUFHWTtJQUNJLGVBQUE7RUM5QmQ7RURnQ1U7SUFDSSxlQUFBO0VDOUJkO0VEa0NVOztJQUVJLGVBQUE7RUNoQ2Q7QUFDRjtBRHNDQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZUFBQTtFQ3JDVjtFRHVDVTs7SUFFSSxlQUFBO0VDckNkO0VEd0NNO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUN0Q1Y7RUR3Q1U7SUFDSSxXQUFBO0VDdENkO0VEd0NVO0lBQ0ksZUFBQTtFQ3RDZDtFRHdDVTtJQUNJLGVBQUE7RUN0Q2Q7O0VEMENFO0lBQ0ksa0JBQUE7RUN2Q047RUR3Q007SUFDSSxzQkFBQTtFQ3RDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwczovL2NvZGVwZW4uaW8va3NhbnRhbmdlbG8vcGVuL1pCT3BvSi9cclxuJHByaW1hcnk6IHJnYigxNTIsIDIzMCwgMTUyKTtcclxuJHNlY29uZGFyeTogcmdiKDI5LCAzMSwgMzIpO1xyXG5cclxuJGNvbnRhaW5lci1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMnJlbSAwIHJnYmEoYmxhY2ssIDAuMik7XHJcblxyXG4kZ3V0dGVyOiAzMHB4O1xyXG4kYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiRkb3QtZGlhbWV0ZXI6IDhweDtcclxuXHJcbi50aW1lbGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBib3gtc2hhZG93OiAkY29udGFpbmVyLXNoYWRvdztcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKDIyJSArIDU2cHgpOyAvLyRndXR0ZXIvMlxyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxufVxyXG5cclxuLmVudHJ5IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6ICRkb3QtZGlhbWV0ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGRvdC1kaWFtZXRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0kZG90LWRpYW1ldGVyO1xyXG4gICAgICAgICAgICAvLyB6LWluZGV4OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgM2VtO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3MyU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNob3J0ZW4gdGhlIGJvZHkgc28gaXQgZG9lc24ndCBnbyBwYXN0IHRoZSBlbmQgb2YgdGhlIG5hdmJhciBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY3NXB4KSB7XHJcbiAgICAuZW50cnkgLmJvZHkge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1ha2UgZm9udCBzaXplIGFsbCBhcm91bmQgc21hbGxlclxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTg2cHgpIHtcclxuICAgIC5lbnRyeSB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgcCxcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBOYXZiYXIgY29udmVydHMgdG8gaGFtYnVyZ2VyIHNpZGVtZW51XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLnRpbWVsaW5lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAxMHB4O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogY2FsYygyNSUgKyAzM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW50cnkge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1ha2UgZm9udCBzaXplIGFsbCBhcm91bmQgc21hbGxlclxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODFweCkge1xyXG4gICAgLmVudHJ5IHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBwLFxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1vdmUgdGltZWxpbmUgdG8gbGVmdGhhbmQgc2lkZSBhbmQgdGV4dCB0byByaWdodGhhbmQgc2lkZVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzNweCkge1xyXG4gICAgLmVudHJ5IHtcclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogODUlOyBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAlIC0gMzBweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDEwcHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwJSAtIDI2cHgpOyAvLyRndXR0ZXIvMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIudGltZWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIGJhY2tncm91bmQ6ICMxZDFmMjA7XG4gIHBhZGRpbmc6IDEwMHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogY2FsYygyMiUgKyA1NnB4KTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnRpbWVsaW5lOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZW50cnkge1xuICBjbGVhcjogYm90aDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVudHJ5IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIyJTtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lbnRyeSAudGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4ZTY5ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWYyMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdG9wOiAxNSU7XG4gIHJpZ2h0OiAtOHB4O1xufVxuLmVudHJ5IC50aXRsZSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNDAlO1xuICBjb2xvcjogIzk4ZTY5ODtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuLmVudHJ5IC50aXRsZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuLmVudHJ5IC50aXRsZSBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOThlNjk4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4uZW50cnkgLmJvZHkge1xuICBtYXJnaW46IDAgMCAzZW07XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzMlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG4uZW50cnkgLmJvZHkgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4uZW50cnkgLmJvZHkgcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZW50cnkgLmJvZHkgdWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjYWFhO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbn1cbi5lbnRyeSAuYm9keSB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4uZW50cnkgLmJvZHkgdWwgbGk6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY3NXB4KSB7XG4gIC5lbnRyeSAuYm9keSB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4NnB4KSB7XG4gIC5lbnRyeSAudGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbiAgfVxuICAuZW50cnkgLnRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuZW50cnkgLmJvZHkgcCxcbi5lbnRyeSAuYm9keSBsaSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLnRpbWVsaW5lIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxMHB4O1xuICB9XG4gIC50aW1lbGluZTpiZWZvcmUge1xuICAgIGxlZnQ6IGNhbGMoMjUlICsgMzNweCk7XG4gIH1cblxuICAuZW50cnkgLnRpdGxlIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5lbnRyeSAuYm9keSB7XG4gICAgd2lkdGg6IDYyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgxcHgpIHtcbiAgLmVudHJ5IC50aXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICB9XG4gIC5lbnRyeSAudGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5lbnRyeSAuYm9keSBwLFxuLmVudHJ5IC5ib2R5IGxpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XG4gIC5lbnRyeSAuYm9keSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwJSAtIDMwcHgpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuZW50cnkgLmJvZHkgcCxcbi5lbnRyeSAuYm9keSBsaSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIC5lbnRyeSAudGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5lbnRyeSAudGl0bGU6YmVmb3JlIHtcbiAgICBsZWZ0OiAtNDBweDtcbiAgfVxuICAuZW50cnkgLnRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cbiAgLmVudHJ5IC50aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAudGltZWxpbmUge1xuICAgIHBhZGRpbmc6IDQwcHggMTBweDtcbiAgfVxuICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICBsZWZ0OiBjYWxjKDEwJSAtIDI2cHgpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json");

    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json", 1);

    var ExperienceComponent =
    /*#__PURE__*/
    function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.experiences = _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__.experiences;
        }
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/experience/experience.component.scss")).default]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#image {\n  height: 70%;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  -o-object-position: 20% 0px;\n     object-position: 20% 0px;\n  width: auto;\n  height: auto;\n  max-width: 500px;\n  max-height: 90%;\n  border-radius: 8px;\n  margin-left: 20%;\n}\n\ndiv#text {\n  margin-top: 1em;\n}\n\ndiv#text h1 {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: white;\n  font-size: 250%;\n  margin: 0;\n  margin-top: 15px;\n}\n\ndiv#text span.title {\n  color: #98e698;\n}\n\ndiv#text p {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: gray;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.box {\n  float: left;\n  width: 50%;\n  padding: 40px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n#skills > ul {\n  list-style-type: none;\n  margin-top: 3em;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#skills > ul li {\n  background: #98e698;\n  padding: 1em;\n  margin-right: 10px;\n  width: auto;\n  height: auto;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: black;\n  border-radius: 8px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n#skills > ul li:hover {\n  background: limegreen;\n}\n\n#skills > ul li:hover.has-project {\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 2000px) {\n  img {\n    margin-left: 15%;\n  }\n}\n\n@media screen and (max-width: 1600px) {\n  img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    width: auto;\n    height: auto;\n    max-width: 90%;\n    max-height: 90%;\n    border-radius: 8px;\n    margin-left: 5%;\n  }\n\n  .box {\n    padding: 40px;\n  }\n}\n\n@media screen and (max-width: 1430px) {\n  img {\n    margin: auto;\n  }\n\n  #skills > ul > li {\n    padding: 15px;\n  }\n}\n\n@media screen and (max-width: 1250px) {\n  .box {\n    padding: 0px;\n  }\n}\n\n@media screen and (max-width: 1130px) {\n  #skills > ul > li {\n    padding: 12px;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .clearfix {\n    position: relative;\n  }\n\n  div#text h1 {\n    font-size: 225%;\n  }\n\n  #skills > ul > li {\n    padding: 8px;\n    font-size: 16px;\n  }\n}\n\n@media screen and (max-width: 950px) {\n  div#text h1 {\n    font-size: 150%;\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n  div#text p {\n    font-size: 16px;\n    margin: 0;\n    margin-bottom: 0;\n  }\n\n  #skills > ul {\n    margin-top: 30px;\n  }\n}\n\n@media screen and (max-width: 725px) {\n  .box {\n    width: 100%;\n  }\n\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    max-width: 100%;\n    max-height: 500px;\n  }\n\n  div#text {\n    text-align: center;\n  }\n  div#text p {\n    font-size: 17px;\n  }\n\n  #skills > ul {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  #skills > ul li {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFyeWF2XFxEZXNrdG9wXFxBcnlhLVJlc3VtZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7S0FBQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBRElJO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBREtJO0VBQ0ksY0EvQkU7QUM0QlY7O0FETUk7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7QUNKUjs7QURRQTtFQUNJLHNCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNMSjs7QURPSTtFQUNJLG1CQWhFRTtFQWlFRixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBQ0xSOztBRFFJO0VBQ0kscUJBQUE7QUNOUjs7QURPUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0xaOztBRFdBO0VBQ0k7SUFDSSxnQkFBQTtFQ1JOO0FBQ0Y7O0FEWUE7RUFDSTtJQUNJLG9CQUFBO09BQUEsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUNWTjs7RURhRTtJQUNJLGFBQUE7RUNWTjtBQUNGOztBRGNBO0VBQ0k7SUFDSSxZQUFBO0VDWk47O0VEY0U7SUFDSSxhQUFBO0VDWE47QUFDRjs7QURlQTtFQUNJO0lBQ0ksWUFBQTtFQ2JOO0FBQ0Y7O0FEaUJBO0VBQ0k7SUFDSSxhQUFBO0VDZk47QUFDRjs7QURtQkE7RUFDSTtJQUNJLGtCQUFBO0VDakJOOztFRG9CTTtJQUNJLGVBQUE7RUNqQlY7O0VEb0JFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNqQk47QUFDRjs7QURxQkE7RUFFUTtJQUNJLGVBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNwQlY7RURzQk07SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0VDcEJWOztFRHVCRTtJQUNJLGdCQUFBO0VDcEJOO0FBQ0Y7O0FEd0JBO0VBQ0k7SUFDSSxXQUFBO0VDdEJOOztFRHdCRTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ3JCTjs7RUR1QkU7SUFDSSxrQkFBQTtFQ3BCTjtFRHFCTTtJQUNJLGVBQUE7RUNuQlY7O0VEc0JFO0lBQ0kseUJBQUE7WUFBQSxtQkFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7RUNuQk47RURvQk07SUFDSSxhQUFBO0VDbEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogcmdiKDE1MiwgMjMwLCAxNTIpO1xyXG4kc2Vjb25kYXJ5OiByZ2IoMjksIDMxLCAzMik7XHJcblxyXG4jaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDIwJSAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG5kaXYjdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4udGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbiNza2lsbHMgPiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5LCAyNSUpO1xyXG4gICAgICAgICYuaGFzLXByb2plY3Qge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNQVggV0lEVEg6IDIwMDBweCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1BWCBXSURUSDogMTYwMHB4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTUFYIFdJRFRIOiAxNDMwcHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgICNza2lsbHMgPiB1bCA+IGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNQVggV0lEVEg6IDEyNTBweCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KXtcclxuICAgIC5ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTUFYIFdJRFRIOiAxMTMwcHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCl7XHJcbiAgICAjc2tpbGxzID4gdWwgPiBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTUFYIFdJRFRIOiAxMTAwcHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAuY2xlYXJmaXh7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgZGl2I3RleHQge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNza2lsbHMgPiB1bCA+IGxpIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNQVggV0lEVEg6IDk1MHB4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XHJcbiAgICBkaXYjdGV4dCB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNza2lsbHMgPiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTUFYIFdJRFRIOiA3MjVweCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpe1xyXG4gICAgLmJveHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2I3RleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNza2lsbHMgPiB1bCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiNpbWFnZSB7XG4gIGhlaWdodDogNzAlO1xufVxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiAyMCUgMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuZGl2I3RleHQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5kaXYjdGV4dCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1MCU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmRpdiN0ZXh0IHNwYW4udGl0bGUge1xuICBjb2xvcjogIzk4ZTY5ODtcbn1cbmRpdiN0ZXh0IHAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJveCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4jc2tpbGxzID4gdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI3NraWxscyA+IHVsIGxpIHtcbiAgYmFja2dyb3VuZDogIzk4ZTY5ODtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbiNza2lsbHMgPiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbn1cbiNza2lsbHMgPiB1bCBsaTpob3Zlci5oYXMtcHJvamVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XG4gIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuYm94IHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAjc2tpbGxzID4gdWwgPiBsaSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5ib3gge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XG4gICNza2lsbHMgPiB1bCA+IGxpIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNsZWFyZml4IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBkaXYjdGV4dCBoMSB7XG4gICAgZm9udC1zaXplOiAyMjUlO1xuICB9XG5cbiAgI3NraWxscyA+IHVsID4gbGkge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIGRpdiN0ZXh0IGgxIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgZGl2I3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgI3NraWxscyA+IHVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xuICAuYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIGRpdiN0ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZGl2I3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5cbiAgI3NraWxscyA+IHVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICNza2lsbHMgPiB1bCBsaSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json");

    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json", 1);
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, projectService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.projectService = projectService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initSkills();
        }
      }, {
        key: "initSkills",
        value: function initSkills() {
          var _this2 = this;

          var list = [];

          _assets_Data_json__WEBPACK_IMPORTED_MODULE_2__.skills.sort().forEach(function (skill) {
            var hasProject = _this2.projectService.doesSkillHaveProjects(skill) ? "has-project" : "";
            list.push({
              name: skill,
              class: hasProject
            });
          });

          this.skills = list;
        } // If skill that has projects is clicked, route to projects w/ that skill as the filter

      }, {
        key: "skillClicked",
        value: function skillClicked(skill) {
          if (skill.class == "has-project") {
            localStorage.setItem('filter', skill.name);
            this.router.navigate(['/projects']);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/project-details/project-details.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/project-details/project-details.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectDetailsProjectDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1,\nh2,\nh3 {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: #98e698;\n}\n\nh2 {\n  text-align: left;\n  text-decoration: underline;\n  margin-top: 0;\n}\n\np {\n  color: white;\n  margin-left: 1em;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Position the image container (needed to position the left and right arrows) */\n\n.image-container {\n  position: relative;\n  width: 100%;\n}\n\n.box {\n  float: left;\n  width: 50%;\n  padding: 50px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Hide the images by default */\n\n.mySlides {\n  display: none;\n}\n\n/* Add a pointer when hovering over the thumbnail images */\n\n.cursor {\n  cursor: pointer;\n}\n\n/* Next & previous buttons */\n\n.modal-prev,\n.modal-next,\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 40%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  background-color: #1d1f20;\n  opacity: 0.3;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 0 5px 5px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n\n/* Position the \"next button\" to the right */\n\n.modal-next,\n.next {\n  right: 0;\n  border-radius: 5px 0 0 5px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n\n.prev:hover,\n.next:hover,\n.modal-prev:hover,\n.modal-next:hover {\n  opacity: 1;\n  color: #98e698;\n}\n\n/* Number text (1/3 etc) */\n\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* Container for image text */\n\n.modal-caption,\n.caption-container {\n  font-family: \"Roboto Condensed\", sans-serif;\n  text-align: center;\n  background-color: #1d1f20;\n  padding: 2px 16px;\n}\n\n.modal-caption p,\n.caption-container p {\n  color: #98e698;\n}\n\n/* Modal Caption text */\n\n.modal-caption {\n  margin-bottom: 20px;\n  font-size: 125%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Six columns side by side */\n\n.column {\n  float: left;\n  width: 20%;\n  margin-left: 1em;\n}\n\n/* Add a transparency effect for thumnbail images */\n\n.demo {\n  opacity: 0.6;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #1d1f20;\n}\n\n/* Modal Content */\n\n.modal-content {\n  position: relative;\n  background-color: #1d1f20;\n  margin: auto;\n  padding: 0;\n  width: 90%;\n  max-width: 1300px;\n}\n\n/* The Close Button */\n\n.close {\n  color: #999;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 35px;\n  font-weight: bold;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n.close:hover,\n.close:focus {\n  color: #98e698;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Modal Next & previous buttons */\n\n.modal-prev,\n.modal-next {\n  top: 60%;\n}\n\n#skills > ul {\n  list-style-type: none;\n  margin: 0;\n  margin-left: 1em;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#skills > ul li {\n  background: #98e698;\n  padding: 10px;\n  font-size: 16px;\n  margin-right: 10px;\n  width: auto;\n  height: auto;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: black;\n  border-radius: 8px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n#github {\n  margin-left: 1em;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n#github:link, #github:visited {\n  background-color: #1d1f20;\n  border-color: #98e698;\n  border-style: solid;\n  border-width: 2px;\n  color: white;\n  padding: 12px 21px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\n#github:hover {\n  background-color: #98e698;\n  color: black;\n  font-weight: bold;\n}\n\n#github:active {\n  background-color: #6fdc6f;\n}\n\n#mobilePageExtender {\n  display: none;\n}\n\n@media screen and (max-width: 1300px) {\n  .clearfix {\n    position: relative;\n  }\n\n  .box {\n    width: 100%;\n    padding: 20px;\n  }\n\n  .text {\n    font-size: 17px;\n  }\n\n  #mobilePageExtender {\n    display: inline;\n  }\n\n  .githubContainer {\n    text-align: center;\n  }\n  .githubContainer #github {\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .modal-prev,\n.modal-next {\n    top: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL0M6XFxVc2Vyc1xcYXJ5YXZcXERlc2t0b3BcXEFyeWEtUmVzdW1lL3NyY1xcYXBwXFxwcm9qZWN0LWRldGFpbHNcXHByb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7O0VBR0ksMkNBQUE7RUFDQSxjQVBNO0FDS1Y7O0FES0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxzQkFBQTtBQ0ZKOztBREtBLGdGQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDRko7O0FETUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BLCtCQUFBOztBQUNBO0VBQ0ksYUFBQTtBQ0hKOztBRE1BLDBEQUFBOztBQUNBO0VBQ0ksZUFBQTtBQ0hKOztBRE1BLDRCQUFBOztBQUNBOzs7O0VBSUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBakVRO0VBa0VSLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBQ0hKOztBRE1BLDRDQUFBOztBQUNBOztFQUVJLFFBQUE7RUFDQSwwQkFBQTtBQ0hKOztBRE1BLHlFQUFBOztBQUNBOzs7O0VBSUksVUFBQTtFQUNBLGNBekZNO0FDc0ZWOztBRE9BLDBCQUFBOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0pKOztBRE9BLDZCQUFBOztBQUNBOztFQUVJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkExR1E7RUEyR1IsaUJBQUE7QUNKSjs7QURLSTs7RUFDSSxjQTlHRTtBQzRHVjs7QURNQSx1QkFBQTs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUEsNkJBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUEsbURBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBQ0hKOztBRE1BLDJCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQXJKUTtBQ2tKWjs7QURNQSxrQkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBM0pRO0VBNEpSLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUEscUJBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUNISjs7QURNQTs7RUFFSSxjQWhMTTtFQWlMTixxQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQSxrQ0FBQTs7QUFDQTs7RUFFSSxRQUFBO0FDSEo7O0FET0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDSko7O0FETUk7RUFDSSxtQkFyTUU7RUFzTUYsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FDSlI7O0FEYUE7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUNWSjs7QURZSTtFQUVJLHlCQTlOSTtFQStOSixxQkFoT0U7RUFpT0YsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ1hSOztBRGNJO0VBQ0kseUJBM09FO0VBNE9GLFlBQUE7RUFDQSxpQkFBQTtBQ1pSOztBRGVJO0VBQ0kseUJBQUE7QUNiUjs7QURpQkE7RUFDSSxhQUFBO0FDZEo7O0FEa0JBO0VBQ0k7SUFDSSxrQkFBQTtFQ2ZOOztFRGlCRTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDZE47O0VEZ0JFO0lBQ0ksZUFBQTtFQ2JOOztFRGVFO0lBQ0ksZUFBQTtFQ1pOOztFRGNFO0lBQ0ksa0JBQUE7RUNYTjtFRFlNO0lBQ0ksY0FBQTtFQ1ZWO0FBQ0Y7O0FEY0E7RUFDSTs7SUFFSSxRQUFBO0VDWk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogcmdiKDE1MiwgMjMwLCAxNTIpO1xyXG4kc2Vjb25kYXJ5OiByZ2IoMjksIDMxLCAzMik7XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gcmVsYXRpdmUgZm9yIGZ1bGxzY3JlZW5cclxuICAgIHdpZHRoOiAxMDAlOyAvLyBvbWl0dGVkIGZvciBmdWxsc2NyZWVuXHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xyXG4uY3Vyc29yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuLm1vZGFsLXByZXYsXHJcbi5tb2RhbC1uZXh0LFxyXG4ucHJldixcclxuLm5leHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubW9kYWwtbmV4dCxcclxuLm5leHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxufVxyXG5cclxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cclxuLnByZXY6aG92ZXIsXHJcbi5uZXh0OmhvdmVyLFxyXG4ubW9kYWwtcHJldjpob3ZlcixcclxuLm1vZGFsLW5leHQ6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xyXG4ubW9kYWwtY2FwdGlvbixcclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTW9kYWwgQ2FwdGlvbiB0ZXh0ICovXHJcbi5tb2RhbC1jYXB0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEyNSU7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIFNpeCBjb2x1bW5zIHNpZGUgYnkgc2lkZSAqL1xyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi8qIEFkZCBhIHRyYW5zcGFyZW5jeSBlZmZlY3QgZm9yIHRodW1uYmFpbCBpbWFnZXMgKi9cclxuLmRlbW8ge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTW9kYWwgTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuLm1vZGFsLXByZXYsXHJcbi5tb2RhbC1uZXh0IHtcclxuICAgIHRvcDogNjAlO1xyXG59XHJcblxyXG4vLyBCdWlsdCBXaXRoIHNraWxsc1xyXG4jc2tpbGxzID4gdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGk6aG92ZXIge1xyXG4gICAgLy8gXHRiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnksIDI1JSk7XHJcbiAgICAvLyBcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbiNnaXRodWIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuXHJcbiAgICAmOmxpbmssXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDIxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtb2JpbGVQYWdlRXh0ZW5kZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy8gTUFYIFdJRFRIOiAxMzAwcHggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmNsZWFyZml4IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICAgICNtb2JpbGVQYWdlRXh0ZW5kZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICAgIC5naXRodWJDb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAjZ2l0aHViIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAubW9kYWwtcHJldixcclxuICAgIC5tb2RhbC1uZXh0IHtcclxuICAgICAgICB0b3A6IDcwJTtcclxuICAgIH1cclxufSIsImgxLFxuaDIsXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM5OGU2OTg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cbi5pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXG4ubXlTbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5tb2RhbC1wcmV2LFxuLm1vZGFsLW5leHQsXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWYyMDtcbiAgb3BhY2l0eTogMC4zO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cblxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cbi5tb2RhbC1uZXh0LFxuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG59XG5cbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXG4ucHJldjpob3Zlcixcbi5uZXh0OmhvdmVyLFxuLm1vZGFsLXByZXY6aG92ZXIsXG4ubW9kYWwtbmV4dDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjOThlNjk4O1xufVxuXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cbi5udW1iZXJ0ZXh0IHtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cbi5tb2RhbC1jYXB0aW9uLFxuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFmMjA7XG4gIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuLm1vZGFsLWNhcHRpb24gcCxcbi5jYXB0aW9uLWNvbnRhaW5lciBwIHtcbiAgY29sb3I6ICM5OGU2OTg7XG59XG5cbi8qIE1vZGFsIENhcHRpb24gdGV4dCAqL1xuLm1vZGFsLWNhcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEyNSU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIFNpeCBjb2x1bW5zIHNpZGUgYnkgc2lkZSAqL1xuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4vKiBBZGQgYSB0cmFuc3BhcmVuY3kgZWZmZWN0IGZvciB0aHVtbmJhaWwgaW1hZ2VzICovXG4uZGVtbyB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZjIwO1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWYyMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICM5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzk4ZTY5ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE1vZGFsIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ubW9kYWwtcHJldixcbi5tb2RhbC1uZXh0IHtcbiAgdG9wOiA2MCU7XG59XG5cbiNza2lsbHMgPiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jc2tpbGxzID4gdWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjOThlNjk4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4jZ2l0aHViIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuI2dpdGh1YjpsaW5rLCAjZ2l0aHViOnZpc2l0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZjIwO1xuICBib3JkZXItY29sb3I6ICM5OGU2OTg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNnaXRodWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThlNjk4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2dpdGh1YjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZkYzZmO1xufVxuXG4jbW9iaWxlUGFnZUV4dGVuZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5jbGVhcmZpeCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICAjbW9iaWxlUGFnZUV4dGVuZGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAuZ2l0aHViQ29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmdpdGh1YkNvbnRhaW5lciAjZ2l0aHViIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1vZGFsLXByZXYsXG4ubW9kYWwtbmV4dCB7XG4gICAgdG9wOiA3MCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/project-details/project-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/project-details/project-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProjectDetailsComponent */

  /***/
  function srcAppProjectDetailsProjectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
      return ProjectDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjectDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProjectDetailsComponent(router, projectService) {
        _classCallCheck(this, ProjectDetailsComponent);

        this.router = router;
        this.projectService = projectService;
      }

      _createClass(ProjectDetailsComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          localStorage.removeItem('project');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.projectService.getSelectedProjectObservable().subscribe(function (value) {
            _this3.project = value;
            localStorage.setItem('project', _this3.project.id); // reset local storage incase they backstep to this page after ng destory
            // The rest of these should only be executed after project is found

            _this3.skills = _this3.project.skills;
            _this3.slideIndex = 0;
            _this3.showModal = "none";

            _this3.showSlides(_this3.slideIndex);
          }); // Block direct URL access if not project is selected

          setTimeout(function () {
            if (_this3.project == undefined) {
              _this3.router.navigate(['/projects']);
            }
          }, 100);
        }
      }, {
        key: "plusSlides",
        value: function plusSlides(n) {
          this.showSlides(this.slideIndex += n);
        }
      }, {
        key: "currentSlide",
        value: function currentSlide(src) {
          for (var i = 0; i < this.project.pictures.length; i++) {
            if (this.project.pictures[i].src == src) {
              this.showSlides(this.slideIndex = i);
              return;
            }
          }
        }
      }, {
        key: "showSlides",
        value: function showSlides(n) {
          if (n < 0) {
            this.slideIndex = this.project.pictures.length - 1;
          } else if (n >= this.project.pictures.length) {
            this.slideIndex = 0;
          }

          for (var i = 0; i < this.project.pictures.length; i++) {
            if (i == this.slideIndex) {
              this.project.pictures[i].show = "block";
              this.project.pictures[i].opacity = 1;
              this.caption = this.project.pictures[i].caption;
            } else {
              this.project.pictures[i].show = "none";
              this.project.pictures[i].opacity = 0.6;
            }
          }
        }
      }, {
        key: "changeDemoOpacity",
        value: function changeDemoOpacity(src, opacity) {
          for (var i = 0; i < this.project.pictures.length; i++) {
            if (this.project.pictures[i].src == src && i != this.slideIndex) {
              this.project.pictures[i].opacity = opacity;
              return;
            }
          }
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.showModal = "block";
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.showModal = "none";
        }
      }]);

      return ProjectDetailsComponent;
    }();

    ProjectDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }];
    };

    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-details.component.scss */
      "./src/app/project-details/project-details.component.scss")).default]
    })], ProjectDetailsComponent);
    /***/
  },

  /***/
  "./src/app/project.service.ts":
  /*!************************************!*\
    !*** ./src/app/project.service.ts ***!
    \************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/Data.json */
    "./src/assets/Data.json");

    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../assets/Data.json */
    "./src/assets/Data.json", 1);

    var ProjectService =
    /*#__PURE__*/
    function () {
      function ProjectService() {
        _classCallCheck(this, ProjectService);
      }

      _createClass(ProjectService, [{
        key: "setSelectedProject",
        value: function setSelectedProject(project) {
          this.selectedProject = project;
          localStorage.setItem('project', project.id);
        }
      }, {
        key: "getSelectedProject",
        value: function getSelectedProject() {
          var _this4 = this;

          if (this.selectedProject == undefined) {
            var id = localStorage.getItem('project');

            _assets_Data_json__WEBPACK_IMPORTED_MODULE_3__.projects.forEach(function (project) {
              if (project.id == id) {
                _this4.selectedProject = project;
              }
            });
          }

          for (var i = 0; i < this.selectedProject.pictures.length; i++) {
            this.selectedProject.pictures[i].show = "none";
            this.selectedProject.pictures[i].opacity = 0.6;
          }

          return this.selectedProject;
        }
      }, {
        key: "getSelectedProjectObservable",
        value: function getSelectedProjectObservable() {
          var _this5 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(_this5.getSelectedProject());
            observer.complete();
          });
        } // Generate and return a list of filters for projects

      }, {
        key: "getFilterSkills",
        value: function getFilterSkills() {
          var list = [];

          _assets_Data_json__WEBPACK_IMPORTED_MODULE_3__.projects.forEach(function (project) {
            project.skills.forEach(function (skill) {
              var duplicate = false;
              list.forEach(function (filter) {
                if (filter.name == skill) {
                  duplicate = true;
                }
              });

              if (!duplicate) {
                list.push({
                  name: skill,
                  class: ""
                });
              }
            });
          });

          return list.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            } else if (a.name < b.name) {
              return -1;
            } else {
              return 0;
            }
          });
        } // Check if skill is in filters

      }, {
        key: "doesSkillHaveProjects",
        value: function doesSkillHaveProjects(skill) {
          var filters = this.getFilterSkills();
          var hasProjects = false;
          filters.forEach(function (filter) {
            if (filter.name == skill) {
              hasProjects = true;
              return true;
            }
          });
          return hasProjects;
        }
      }]);

      return ProjectService;
    }();

    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  -webkit-text-decoration-color: #98e698;\n          text-decoration-color: #98e698;\n}\n\nspan {\n  color: #98e698;\n}\n\np,\nli {\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: 18px;\n  color: white;\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: #98e698;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px;\n}\n\n.row {\n  margin: 8px -16px;\n}\n\n/* Add padding BETWEEN each column (if you want) */\n\n.row,\n.row > .column {\n  padding: 10px;\n}\n\n/* Create four equal columns that floats next to each other */\n\n.column {\n  float: left;\n  width: 25%;\n}\n\n/* Clear floats after rows */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Content */\n\n.content {\n  background-color: #35393b;\n  padding: 10px;\n  font-family: \"Roboto Condensed\", sans-serif;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #98e698;\n  border-radius: 8px;\n}\n\n.content p {\n  color: white;\n}\n\n.content:hover {\n  border-color: black;\n  cursor: pointer;\n  background-color: #6fdc6f;\n  background-color: #98e698;\n}\n\n.content:hover p,\n.content:hover h3 {\n  color: black;\n}\n\n.content img {\n  border-radius: 8px;\n}\n\n.content:active {\n  background-color: #46d246;\n}\n\n.filters-list > ul {\n  list-style-type: none;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.filters-list > ul li {\n  font-size: 17px;\n  background-color: #35393b;\n  padding: 1em;\n  margin-right: 10px;\n  width: auto;\n  height: auto;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: white;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #98e698;\n  border-radius: 8px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n.filters-list > ul li.selected,\n.filters-list > ul li:hover {\n  background-color: #98e698;\n  color: black;\n  border-color: black;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n.filters-list > ul li:active {\n  background-color: #46d246;\n}\n\n/* Responsive layout - makes a three column-layout instead of four columns */\n\n@media screen and (max-width: 1350px) {\n  .column {\n    width: 33%;\n  }\n}\n\n/* Responsive layout - makes a two column-layout instead of three columns */\n\n@media screen and (max-width: 1000px) {\n  .column {\n    width: 50%;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 650px) {\n  .main {\n    margin: auto;\n  }\n\n  .column {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .filters-list > ul {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .filters-list > ul li {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxhcnlhdlxcRGVza3RvcFxcQXJ5YS1SZXN1bWUvc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxzQ0FKTTtVQUlOLDhCQUpNO0FDRVY7O0FES0E7RUFDSSxjQVJNO0FDTVY7O0FES0E7O0VBRUksMkNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBOzs7RUFHSSwyQ0FBQTtFQUNBLGNBdEJNO0FDb0JWOztBREtBO0VBQ0ksc0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0Esa0RBQUE7O0FBQ0E7O0VBRUksYUFBQTtBQ0ZKOztBREtBLDZEQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNGSjs7QURLQSw0QkFBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBLFlBQUE7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBaEVNO0VBaUVOLGtCQUFBO0FDRko7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FESUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQTFFRTtBQ3dFVjs7QURHUTs7RUFFSSxZQUFBO0FDRFo7O0FESUk7RUFDSSxrQkFBQTtBQ0ZSOztBREtJO0VBQ0kseUJBQUE7QUNIUjs7QURPQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNKSjs7QURNSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQTVHRTtFQTZHRixrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUNKUjs7QURPSTs7RUFFSSx5QkFuSEU7RUFvSEYsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTFI7O0FEUUk7RUFDSSx5QkFBQTtBQ05SOztBRFdBLDRFQUFBOztBQUNBO0VBQ0k7SUFDSSxVQUFBO0VDUk47QUFDRjs7QURXQSwyRUFBQTs7QUFDQTtFQUNJO0lBQ0ksVUFBQTtFQ1ROO0FBQ0Y7O0FEWUEsdUdBQUE7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7RUNWTjs7RURZRTtJQUNJLFdBQUE7RUNUTjtBQUNGOztBRGFBO0VBQ0k7SUFDSSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFQ1hOO0VEWU07SUFDSSxhQUFBO0VDVlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6IHJnYigxNTIsIDIzMCwgMTUyKTtcclxuJHNlY29uZGFyeTogcmdiKDI5LCAzMSwgMzIpO1xyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxucCxcclxubGkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiA4cHggLTE2cHg7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIEJFVFdFRU4gZWFjaCBjb2x1bW4gKGlmIHlvdSB3YW50KSAqL1xyXG4ucm93LFxyXG4ucm93ID4gLmNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHJvd3MgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogQ29udGVudCAqL1xyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZWNvbmRhcnksIDEwJSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgcCxcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVycy1saXN0ID4gdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZWNvbmRhcnksIDEwJSk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGkuc2VsZWN0ZWQsXHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIGEgdGhyZWUgY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIGZvdXIgY29sdW1ucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgYSB0d28gY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIHRocmVlIGNvbHVtbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLm1haW4ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNYWtlIGZpbHRlcnMgbW9yZSB2aXN1YWxseSBhcHBlYWxpbmdcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5maWx0ZXJzLWxpc3QgPiB1bCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzk4ZTY5ODtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjOThlNjk4O1xufVxuXG5wLFxubGkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOThlNjk4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDhweCAtMTZweDtcbn1cblxuLyogQWRkIHBhZGRpbmcgQkVUV0VFTiBlYWNoIGNvbHVtbiAoaWYgeW91IHdhbnQpICovXG4ucm93LFxuLnJvdyA+IC5jb2x1bW4ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgcm93cyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzOTNiO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzk4ZTY5ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbnRlbnQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZkYzZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThlNjk4O1xufVxuLmNvbnRlbnQ6aG92ZXIgcCxcbi5jb250ZW50OmhvdmVyIGgzIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNvbnRlbnQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbnRlbnQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ZDI0Njtcbn1cblxuLmZpbHRlcnMtbGlzdCA+IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVycy1saXN0ID4gdWwgbGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM5M2I7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzk4ZTY5ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4uZmlsdGVycy1saXN0ID4gdWwgbGkuc2VsZWN0ZWQsXG4uZmlsdGVycy1saXN0ID4gdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThlNjk4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXJzLWxpc3QgPiB1bCBsaTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZkMjQ2O1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIGEgdGhyZWUgY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIGZvdXIgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAzMyU7XG4gIH1cbn1cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgYSB0d28gY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIHRocmVlIGNvbHVtbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29sdW1uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLm1haW4ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmlsdGVycy1saXN0ID4gdWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmZpbHRlcnMtbGlzdCA+IHVsIGxpIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json");

    var _assets_Data_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/Data.json */
    "./src/assets/Data.json", 1);
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project.service.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(router, projectService) {
        _classCallCheck(this, ProjectsComponent);

        this.router = router;
        this.projectService = projectService;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.allProjects = _assets_Data_json__WEBPACK_IMPORTED_MODULE_3__.projects;
          this.projects = JSON.parse(JSON.stringify(this.allProjects)); // Make deep copy

          this.getFilterSkills(); // Extract Skills from the projects

          var filterRequest;

          if ((filterRequest = localStorage.getItem('filter')) != null) {
            localStorage.removeItem('filter'); // Remove filter from local storage

            this.filters.forEach(function (filter) {
              if (filter.name == filterRequest) {
                _this6.filterSelected(filter);

                return;
              }
            });
          }
        }
      }, {
        key: "projectClicked",
        value: function projectClicked(project) {
          this.projectService.setSelectedProject(project);
          this.router.navigate(['projects/project-details']);
        }
      }, {
        key: "getFilterSkills",
        value: function getFilterSkills() {
          this.selectedFilter = 'selected'; // This will initially select "Show All" option

          this.filters = this.projectService.getFilterSkills();
        }
      }, {
        key: "filterSelected",
        value: function filterSelected(filter) {
          // First unselect previous filter
          if (this.selectedFilter != undefined && this.selectedFilter != 'selected') {
            this.selectedFilter.class = "";
          } // If "Show All" is clicked, reload all projects, change selectedFilter so "Show All" button is active


          if (filter.name == 'Show All') {
            this.selectedFilter = 'selected';
            this.projects = JSON.parse(JSON.stringify(this.allProjects));
            return;
          } // Select the filter so the button looks selected


          filter.class = "selected";
          this.selectedFilter = filter; // Get projects that match filter from master list

          var filteredProjects = [];
          this.allProjects.forEach(function (project) {
            if (project.skills.includes(filter.name)) {
              filteredProjects.push(project);
            }
          });
          this.projects = filteredProjects; // Assign to data-binded projects variable

          console.log(this.selectedFilter);
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/assets/Data.json":
  /*!******************************!*\
    !*** ./src/assets/Data.json ***!
    \******************************/

  /*! exports provided: skills, experiences, projects, default */

  /***/
  function srcAssetsDataJson(module) {
    module.exports = JSON.parse("{\"skills\":[\"Java\",\"C#\",\"JavaScript\",\"Python\",\"C++\",\"SQL\",\"HTML\",\"CSS\",\"Node.js\",\"React\",\"Angular\"],\"experiences\":[{\"title\":\"Software Developer Intern\",\"employer\":\"BBS Securities Inc.\",\"employerSite\":\"https://www.bbssecurities.com/\",\"dates\":\"May - August, 2019\",\"summary\":\"Returning to BBS Securities for a second internship, I was able to have more responsibilities which resulted in a more rewarding experience for me. I took part in high level meetings and developed bigger and more important projects.\",\"keyPoints\":[\"Generated SQL queries and procedures to automate the process of modifying employee access/permissions\",\"Developed a tool to enable traders to quickly send emails to various groups of clients about new issues and stocks\",\"Worked on developing an automated stock purchasing system which significantly decreased incorrect manual purchases and clients complaints\"]},{\"title\":\"Software Developer Intern\",\"employer\":\"BBS Securities Inc.\",\"employerSite\":\"https://www.bbssecurities.com/\",\"dates\":\"May - August, 2018\",\"summary\":\"Working as a software development intern at BBS Securities, I developed a strong work ethic, while also expanding my teamwork and problem-solving skills. I was also able to learn and work with new technologies like C#, .NET, and SQL.\",\"keyPoints\":[\"Developed an application to receive bank transfer files from BMO and save information to database\",\"Redeveloped C++ legacy code into C# code to help company transition to new technologies\"]},{\"title\":\"Founder\",\"employer\":\"AVA Computer Upgrades\",\"dates\":\"August 2016 - April 2018\",\"summary\":\"Launching my first business taught me that success comes to those who are willing to work hard. I turned my passion of building and working on computers into a profitable business and learned a lot in the process.\",\"keyPoints\":[\"Repaired over 50 computer systems over ~2 years of operation\",\"Accumulated over 2000 followers on social media using social media marketing techniques\"]},{\"title\":\"Team Member (Front Counter)\",\"employer\":\"Freshii\",\"employerSite\":\"https://www.freshii.com/ca/en-ca/home\",\"dates\":\"October 2015 - July 2016\",\"summary\":\"This role helped shape me into the person I am today. I learned invaluable skills such as leadership, multi-tasking, humility, and patience as I moved up from the kitchen to the front counter to supervising operations during my shifts.\",\"keyPoints\":[\"Provided friendly and professional customer service\",\"Fully trained 10 new team members in store operations\",\"Supervised operations after demonstrating leadership and a positive attitude\"]}],\"projects\":[{\"name\":\"Angular Sound\",\"id\":\"AngularSound\",\"summary\":\"A music review site where users can write reviews for songs.\",\"description\":\"A full stack web application made with the Angular framework for the front-end, Node.js for the back-end server, and MongoDB for the database solution. This project is a music review (demo) site in which authenticated users write reviews for songs. Once a user has registered with the site, they are able to write reviews for any song.\",\"github\":\"https://github.com/aryavatan/Angular-Sound\",\"skills\":[\"Angular\",\"TypeScript\",\"HTML\",\"CSS\",\"JavaScript\",\"Node.js\",\"MongoDB\"],\"icon\":\"assets/Projects/AngularSound/2.PNG\",\"pictures\":[{\"caption\":\"Home Page\",\"src\":\"assets/Projects/AngularSound/1.PNG\"},{\"caption\":\"Songs Page\",\"src\":\"assets/Projects/AngularSound/2.PNG\"},{\"caption\":\"Song Reviews Page\",\"src\":\"assets/Projects/AngularSound/3.PNG\"},{\"caption\":\"Write A Review\",\"src\":\"assets/Projects/AngularSound/4.PNG\"}]},{\"name\":\"OS Chatroom\",\"id\":\"OSChatroom\",\"summary\":\"A chatroom web application using client/server architecture.\",\"description\":\"This app was developed as the final project for my Operating Systems course with three other friends. It is a chatroom web application using client/server architecture. Each front-end client enters their display name and can chat with other users in the same \\\"chatroom\\\". Clients can also make a private room, the name of the chatroom acts as the password, and chat with their friends. Node.js and Socket.io were used to route the messages between clients and different chatrooms\",\"github\":\"https://github.com/aryavatan/OS-Chatroom\",\"skills\":[\"JavaScript\",\"HTML\",\"CSS\",\"Node.js\"],\"icon\":\"assets/Projects/OSChatroom/1.PNG\",\"pictures\":[{\"caption\":\"Chatroom\",\"src\":\"assets/Projects/OSChatroom/1.PNG\"},{\"caption\":\"Private Group Chatroom\",\"src\":\"assets/Projects/OSChatroom/2.PNG\"}]},{\"name\":\"Simple Sketchpad\",\"id\":\"sketchpad\",\"summary\":\"A simple sketchpad, similar to microsoft paint.\",\"description\":\"A simple sketchpad, similar to microsoft paint, written in Java using the Java AWT library. In addition to freehand drawing, basic shapes can be drawn as well, such as rectangles, lines, and ellipes. The color of each object can be changed as well, from black, red, green, blue, and yellow. Lastly, there is a save and load feature to allow you to save your sketch and load it later on to keep working on it.\",\"github\":\"https://github.com/aryavatan/SimpleSketchpad\",\"skills\":[\"Java\"],\"icon\":\"assets/Projects/Sketchpad/shapes.PNG\",\"pictures\":[{\"caption\":\"Drawing With Shapes\",\"src\":\"assets/Projects/Sketchpad/shapes.PNG\"},{\"caption\":\"Saving Your Drawing\",\"src\":\"assets/Projects/Sketchpad/save.PNG\"},{\"caption\":\"Freehand Drawing\",\"src\":\"assets/Projects/Sketchpad/freehand.PNG\"}]}]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\aryav\Desktop\Arya-Resume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map