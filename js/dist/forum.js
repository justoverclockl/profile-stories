/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/profile-stories', function () {
  console.log('[justoverclock/profile-stories] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/components/ListUserStories.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/ListUserStories.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListUserStories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modals_CreateStoryModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/CreateStoryModal */ "./src/forum/components/modals/CreateStoryModal.tsx");
/* harmony import */ var _PermissionDenied__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PermissionDenied */ "./src/forum/components/PermissionDenied.tsx");
/* harmony import */ var _modals_CompleteStoryModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/CompleteStoryModal */ "./src/forum/components/modals/CompleteStoryModal.tsx");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);







var ListUserStories = /*#__PURE__*/function (_Component) {
  function ListUserStories() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.userStories = null;
    _this.currentPage = 1;
    _this.totalPages = 1;
    _this.loading = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ListUserStories, _Component);
  var _proto = ListUserStories.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.loading = false;
    this.currentPage = 1;
    this.totalPages = 1;
    this.getAllUserStory();
  };
  _proto.showCreateStoryModal = function showCreateStoryModal() {
    var _this$attrs$user$data;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(_modals_CreateStoryModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      refreshStories: this.getAllUserStory.bind(this),
      username: (_this$attrs$user$data = this.attrs.user.data) == null || (_this$attrs$user$data = _this$attrs$user$data.attributes) == null ? void 0 : _this$attrs$user$data.username,
      userId: this.attrs.user.id()
    });
  };
  _proto.getAllUserStory = function getAllUserStory(url) {
    var _this2 = this;
    if (url === void 0) {
      url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + "/stories?userId=" + this.attrs.userId;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'GET',
      url: url
    }).then(function (res) {
      _this2.userStories = res;
      m.redraw();
    })["finally"](function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.deleteStory = function deleteStory(storyId) {
    var _this3 = this;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'DELETE',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + "/delete-story/" + storyId
    }).then(function () {
      _this3.getAllUserStory();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().alerts.show({
        type: 'success'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.successDelete'));
    });
  };
  _proto.view = function view(vnode) {
    var _user$data$attributes,
      _user$data$attributes2,
      _this4 = this,
      _this$userStories,
      _this$userStories2;
    var user = this.attrs.user;
    var canCreateStory = (user == null || (_user$data$attributes = user.data.attributes) == null ? void 0 : _user$data$attributes.canCreateStory) || false;
    var canDeleteStory = (user == null || (_user$data$attributes2 = user.data.attributes) == null ? void 0 : _user$data$attributes2.canDeleteStory) || false;
    return m("div", {
      className: "PostsUserPage"
    }, this.loading && m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), null), !this.loading && m("div", {
      className: "stories-content"
    }, !canCreateStory && m(_PermissionDenied__WEBPACK_IMPORTED_MODULE_4__["default"], null), canCreateStory && m("button", {
      onclick: this.showCreateStoryModal.bind(this),
      className: "Button Button--primary stories-btn"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.createStory')), m("div", {
      className: "stories-all"
    }, this.userStories && this.userStories.data.map(function (story) {
      return m("div", {
        className: "story-item",
        style: {
          backgroundImage: "url(" + story.attributes.imgUrl + ")",
          backgroundSize: 'cover'
        }
      }, m("div", {
        className: "story-text-wrapper"
      }, m("h3", null, m("i", {
        style: {
          marginRight: '5px'
        },
        "class": "" + story.attributes.contentIcon
      })), m("p", null, story.attributes.title)), m("div", {
        className: "story-actions-btn"
      }, m("button", {
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(_modals_CompleteStoryModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            story: story
          });
        },
        className: "Button"
      }, story.attributes.cta), canDeleteStory && m("button", {
        onclick: function onclick() {
          return _this4.deleteStory(story.id);
        },
        className: "Button Button--danger"
      }, m("i", {
        "class": "fas fa-trash-alt"
      }))));
    }))), this.userStories && ((_this$userStories = this.userStories) == null ? void 0 : _this$userStories.data.length) > 7 && m("div", {
      className: "user-story-pagination"
    }, m("button", {
      disabled: this.userStories && this.userStories.data.length <= 8,
      "class": "Button",
      onclick: function onclick() {
        var _this4$userStories$li, _this4$userStories, _this4$userStories2;
        var link = (_this4$userStories$li = (_this4$userStories = _this4.userStories) == null ? void 0 : _this4$userStories.links.prev) != null ? _this4$userStories$li : (_this4$userStories2 = _this4.userStories) == null ? void 0 : _this4$userStories2.links.first;
        _this4.getAllUserStory(link);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.prevPage')), m("button", {
      disabled: this.userStories && ((_this$userStories2 = this.userStories) == null ? void 0 : _this$userStories2.data.length) <= 8,
      "class": "Button",
      onclick: function onclick() {
        var _this4$userStories3;
        return _this4.getAllUserStory((_this4$userStories3 = _this4.userStories) == null ? void 0 : _this4$userStories3.links.next);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.nextPage'))));
  };
  return ListUserStories;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/PermissionDenied.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/PermissionDenied.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PermissionDenied)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);



var PermissionDenied = /*#__PURE__*/function (_Component) {
  function PermissionDenied() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PermissionDenied, _Component);
  var _proto = PermissionDenied.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view(vnode) {
    return m("div", {
      className: "permission-denied-container"
    }, m("div", {
      className: "permission-denied-content"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.youDontHavePermission')));
  };
  return PermissionDenied;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/modals/CompleteStoryModal.tsx":
/*!************************************************************!*\
  !*** ./src/forum/components/modals/CompleteStoryModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompleteStoryModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);




var CompleteStoryModal = /*#__PURE__*/function (_Modal) {
  function CompleteStoryModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CompleteStoryModal, _Modal);
  var _proto = CompleteStoryModal.prototype;
  _proto.className = function className() {
    return 'complete-story-modal';
  };
  _proto.title = function title() {
    var _app$session;
    var story = this.attrs.story;
    return ((_app$session = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session)) == null || (_app$session = _app$session.user) == null ? void 0 : _app$session.displayName()) + " " + flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('justoverclock-profile-stories.forum.StoryModalTitle');
  };
  _proto.content = function content() {
    var story = this.attrs.story;
    return m("div", {
      className: "complete-story-container"
    }, m("div", {
      className: "complete-story-content"
    }, m("div", {
      className: "complete-story-title"
    }, m("i", {
      "class": "story-icon fa-solid " + story.attributes.contentIcon
    }), m("h3", null, story.attributes.title)), m("img", {
      className: "complete-story-img",
      src: story.attributes.imgUrl,
      alt: story.attributes.title
    }), m("p", null, m.trust(story.attributes.contentText)), m("div", {
      className: "complete-story-btn"
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: story.attributes.contentLink
    }, m("button", {
      className: "Button final-button"
    }, story.attributes.contentCta)))));
  };
  return CompleteStoryModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/modals/CreateStoryModal.tsx":
/*!**********************************************************!*\
  !*** ./src/forum/components/modals/CreateStoryModal.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateStoryModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);




var CreateStoryModal = /*#__PURE__*/function (_Modal) {
  function CreateStoryModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.step = 0;
    _this.story_title = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_imgUrl = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_cta = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_icon = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_text = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_content_cta = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    _this.story_content_link = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CreateStoryModal, _Modal);
  var _proto = CreateStoryModal.prototype;
  _proto.className = function className() {
    return 'create-story-modal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.createStory');
  };
  _proto.content = function content() {
    var _this2 = this;
    console.log('aaaaaaa', this.attrs.username);
    return m("div", {
      className: "new-story-container"
    }, m("div", {
      className: "new-story-content"
    }, this.step === 0 && m("div", {
      className: "story-step-container"
    }, m("input", {
      value: this.story_title(),
      oninput: function oninput(e) {
        return _this2.story_title(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyTitle'),
      className: "FormControl",
      type: "text"
    }), m("input", {
      value: this.story_imgUrl(),
      oninput: function oninput(e) {
        return _this2.story_imgUrl(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyImage'),
      className: "FormControl",
      type: "url"
    }), m("input", {
      value: this.story_cta(),
      oninput: function oninput(e) {
        return _this2.story_cta(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyCta'),
      className: "FormControl",
      type: "text"
    })), this.step === 1 && m("div", {
      className: "story-step-container"
    }, m("input", {
      value: this.story_icon(),
      oninput: function oninput(e) {
        return _this2.story_icon(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyIcon'),
      className: "FormControl",
      type: "text"
    }), m("input", {
      value: this.story_content_link(),
      oninput: function oninput(e) {
        return _this2.story_content_link(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyContentLink'),
      className: "FormControl",
      type: "text"
    }), m("input", {
      value: this.story_content_cta(),
      oninput: function oninput(e) {
        return _this2.story_content_cta(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyContentCta'),
      className: "FormControl",
      type: "text"
    }), m("textarea", {
      rows: 6,
      value: this.story_text(),
      oninput: function oninput(e) {
        return _this2.story_text(e.target.value);
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.storyContentText'),
      className: "FormControl"
    }))), m("form", {
      className: "new-story-actions",
      onsubmit: function onsubmit(e) {
        return e.preventDefault();
      }
    }, m("button", {
      disabled: this.step < 1,
      className: "Button",
      onclick: this.stepDecrement.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.previousStepBtn')), this.step < 1 && m("button", {
      className: "Button",
      onclick: this.stepIncrement.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.nextStepBtn')), this.step === 1 && m("button", {
      onclick: this.complete.bind(this),
      className: "Button",
      type: "submit"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.saveBtn'))));
  };
  _proto.stepIncrement = function stepIncrement() {
    if (this.step < 1) {
      this.step++;
      m.redraw();
    }
    m.redraw();
  };
  _proto.stepDecrement = function stepDecrement() {
    if (this.step > 0) {
      this.step--;
      m.redraw();
    }
    m.redraw();
  };
  _proto.complete = function complete() {
    var _this3 = this;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'POST',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + "/create-story",
      body: {
        data: {
          attributes: {
            user_id: this.attrs.userId,
            title: this.story_title(),
            img_url: this.story_imgUrl(),
            cta: this.story_cta(),
            content_icon: this.story_icon(),
            content_text: this.story_text(),
            content_cta: this.story_content_cta(),
            content_link: this.story_content_link(),
            username: this.attrs.username
          }
        }
      }
    }).then(function () {
      _this3.hide();
      _this3.attrs.refreshStories();
    });
  };
  return CreateStoryModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/notifications/NewStoryNotification.tsx":
/*!*********************************************************************!*\
  !*** ./src/forum/components/notifications/NewStoryNotification.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewStoryNotification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);

// @ts-nocheck


var NewStoryNotification = /*#__PURE__*/function (_Notification) {
  function NewStoryNotification() {
    return _Notification.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewStoryNotification, _Notification);
  var _proto = NewStoryNotification.prototype;
  _proto.content = function content() {
    return undefined;
  };
  _proto.excerpt = function excerpt() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.notifications.newStory');
  };
  _proto.href = function href() {
    var _this$attrs$notificat, _this$attrs$notificat2;
    var username = (_this$attrs$notificat = this.attrs.notification) == null || (_this$attrs$notificat = _this$attrs$notificat.data) == null || (_this$attrs$notificat = _this$attrs$notificat.attributes) == null || (_this$attrs$notificat = _this$attrs$notificat.content) == null || (_this$attrs$notificat = _this$attrs$notificat.user) == null ? void 0 : _this$attrs$notificat.username;
    console.log((_this$attrs$notificat2 = this.attrs.notification) == null || (_this$attrs$notificat2 = _this$attrs$notificat2.data) == null || (_this$attrs$notificat2 = _this$attrs$notificat2.attributes) == null || (_this$attrs$notificat2 = _this$attrs$notificat2.content) == null ? void 0 : _this$attrs$notificat2.user);
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/u/" + username + "/stories";
  };
  _proto.icon = function icon() {
    return 'fas fa-book-open';
  };
  return NewStoryNotification;
}((flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_UserStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/UserStories */ "./src/forum/pages/UserStories.tsx");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_GlobalStories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/GlobalStories */ "./src/forum/pages/GlobalStories.tsx");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_notifications_NewStoryNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notifications/NewStoryNotification */ "./src/forum/components/notifications/NewStoryNotification.tsx");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/NotificationGrid */ "flarum/forum/components/NotificationGrid");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications */ "./src/forum/notifications.ts");





// @ts-ignore







flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/profile-stories', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().notificationComponents).newStory = _components_notifications_NewStoryNotification__WEBPACK_IMPORTED_MODULE_9__["default"];
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes)['user.stories'] = {
    path: '/u/:username/stories',
    component: _pages_UserStories__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes).globalStories = {
    path: '/all-users-stories',
    component: _pages_GlobalStories__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_10___default().prototype), 'notificationTypes', function (items) {
    _notifications__WEBPACK_IMPORTED_MODULE_11__.REP_NOTIFICATIONS.forEach(function (notification) {
      items.add(notification.name, {
        name: notification.name,
        icon: notification.icon,
        label: notification.label
      });
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8___default().prototype), 'navItems', function (items) {
    items.add('globalStories', m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('globalStories'),
      icon: "fas fa-book-open"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('justoverclock-profile-stories.forum.globalStories')));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'infoItems', function (items) {
    var _user$data;
    // @ts-expect-error
    var user = this.attrs.user;
    var storyCount = (_user$data = user.data) == null || (_user$data = _user$data.attributes) == null ? void 0 : _user$data.storyCount;
    if (user) {
      items.add('storiesCount', m("span", {
        className: "UserCard-storiesCount"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-book-open'), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('justoverclock-profile-stories.forum.stories-count', {
        count: storyCount
      })));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'navItems', function (items) {
    // @ts-ignore missing type-hint in Flarum
    var user = this.user;
    if (user) {
      items.add('profilestories', m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('user.stories', {
          username: user == null ? void 0 : user.slug()
        }),
        name: "stories",
        icon: "fas fa-book-open"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('justoverclock-profile-stories.forum.stories')));
    }
  });
});

/***/ }),

/***/ "./src/forum/notifications.ts":
/*!************************************!*\
  !*** ./src/forum/notifications.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REP_NOTIFICATIONS: () => (/* binding */ REP_NOTIFICATIONS)
/* harmony export */ });
var REP_NOTIFICATIONS = [{
  name: 'newStory',
  icon: 'fas fa-book-open',
  label: 'New Story'
}];

/***/ }),

/***/ "./src/forum/pages/GlobalStories.tsx":
/*!*******************************************!*\
  !*** ./src/forum/pages/GlobalStories.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalStories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);






var GlobalStories = /*#__PURE__*/function (_Component) {
  function GlobalStories() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = false;
    _this.globalStories = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GlobalStories, _Component);
  var _proto = GlobalStories.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.getStories();
  };
  _proto.getStories = function getStories(url) {
    var _this2 = this;
    if (url === void 0) {
      url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + "/global-stories";
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
      method: 'GET',
      url: url
    }).then(function (res) {
      _this2.globalStories = res;
      m.redraw();
    })["finally"](function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.view = function view(vnode) {
    var _this$globalStories,
      _this3 = this,
      _this$globalStories2;
    return m("div", {
      className: "IndexPage"
    }, flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("h1", {
      style: {
        margin: 0
      },
      className: "glostitle"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('justoverclock-profile-stories.forum.globalStoriesTitle')), this.loading && m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null), !this.loading && this.globalStories && this.globalStories.data.length <= 0 && m("p", {
      className: "global-stories-description"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('justoverclock-profile-stories.forum.globalStoriesEmpty')), !this.loading && this.globalStories && this.globalStories.data.length > 0 && m("div", null, m("p", {
      className: "global-stories-description"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('justoverclock-profile-stories.forum.globalStoriesDescription')), m("div", {
      className: "stories-all"
    }, !this.loading && this.globalStories && this.globalStories.data.map(function (story) {
      return m("a", {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('baseUrl') + "/u/" + story.attributes.username + "/stories"
      }, m("div", {
        className: "story-item",
        style: {
          backgroundImage: "url(" + story.attributes.imgUrl + ")",
          backgroundSize: 'cover'
        }
      }, m("div", {
        className: "story-text-wrapper-global"
      }, m("h3", null, m("i", {
        style: {
          marginRight: '5px'
        },
        "class": "fa-solid " + story.attributes.contentIcon
      }), story.attributes.title), m("p", null, m("i", {
        style: {
          marginRight: '5px'
        },
        "class": "fas fa-user"
      }), story.attributes.username))));
    }))), !this.loading && this.globalStories && this.globalStories.data.length > 15 && m("div", {
      className: "user-story-pagination"
    }, m("button", {
      disabled: this.globalStories && ((_this$globalStories = this.globalStories) == null ? void 0 : _this$globalStories.data.length) <= 19,
      "class": "Button",
      onclick: function onclick() {
        var _this3$globalStories;
        return _this3.getStories((_this3$globalStories = _this3.globalStories) == null ? void 0 : _this3$globalStories.links.prev);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('justoverclock-profile-stories.forum.prevPage')), m("button", {
      disabled: this.globalStories && ((_this$globalStories2 = this.globalStories) == null ? void 0 : _this$globalStories2.data.length) <= 19,
      "class": "Button",
      onclick: function onclick() {
        var _this3$globalStories2;
        return _this3.getStories((_this3$globalStories2 = _this3.globalStories) == null ? void 0 : _this3$globalStories2.links.next);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('justoverclock-profile-stories.forum.nextPage')))))));
  };
  return GlobalStories;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/pages/UserStories.tsx":
/*!*****************************************!*\
  !*** ./src/forum/pages/UserStories.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserStories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ListUserStories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ListUserStories */ "./src/forum/components/ListUserStories.tsx");





var UserStories = /*#__PURE__*/function (_UserPage) {
  function UserStories() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _UserPage.call.apply(_UserPage, [this].concat(args)) || this;
    _this.assetPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/assets/";
    _this.fullPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/assets/" + flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('justoverclock-profile-stories.imagePreview');
    _this.fallback = 'https://placehold.co/1920x400';
    _this.heroBg = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('justoverclock-profile-stories.imagePreview') ? _this.fullPath : _this.fallback;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserStories, _UserPage);
  var _proto = UserStories.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this$attrs$username;
    _UserPage.prototype.oninit.call(this, vnode);
    this.loadUser((_this$attrs$username = this.attrs.username) != null ? _this$attrs$username : null);
  };
  _proto.view = function view() {
    return m("div", {
      className: "UserPage"
    }, m("div", {
      className: "Hero UserHero stories-hero"
    }, m("img", {
      className: "hero-bg",
      src: this.heroBg,
      alt: "user stories"
    }), m("h1", {
      className: "hero-title"
    }, this.attrs.username, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-profile-stories.forum.heroTitle'))), this.user ? m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "sideNav UserPage-nav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.sidebarItems().toArray()))), m("div", {
      className: "sideNavOffset UserPage-content"
    }, m(_components_ListUserStories__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userId: this.user.id(),
      user: this.user
    })))) : null);
  };
  return UserStories;
}((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/NotificationGrid":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationGrid']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationGrid'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserPage'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map