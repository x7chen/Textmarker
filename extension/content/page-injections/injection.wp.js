/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/page-injections/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/_shared/utils.js":
/*!**********************************!*\
  !*** ./content/_shared/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "_COPY", {
  enumerable: true,
  get: function get() {
    return _copy._COPY;
  }
});
Object.defineProperty(exports, "_GET_ACTIVE_TAB", {
  enumerable: true,
  get: function get() {
    return _getActiveTab._GET_ACTIVE_TAB;
  }
});
Object.defineProperty(exports, "_EXTEND", {
  enumerable: true,
  get: function get() {
    return _extend.default;
  }
});
Object.defineProperty(exports, "_MODULE", {
  enumerable: true,
  get: function get() {
    return _module._MODULE;
  }
});
Object.defineProperty(exports, "_DOMMODULE", {
  enumerable: true,
  get: function get() {
    return _dommodule._DOMMODULE;
  }
});
Object.defineProperty(exports, "_PORT", {
  enumerable: true,
  get: function get() {
    return _port._PORT;
  }
});
Object.defineProperty(exports, "_HASHLESS", {
  enumerable: true,
  get: function get() {
    return _hashless._HASHLESS;
  }
});
Object.defineProperty(exports, "_L10N", {
  enumerable: true,
  get: function get() {
    return _l10n.default;
  }
});
Object.defineProperty(exports, "_ERRORTRACKER", {
  enumerable: true,
  get: function get() {
    return _errorTracker.default;
  }
});

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = _interopRequireDefault(__webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js"));

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = _interopRequireDefault(__webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js"));

var _errorTracker = _interopRequireDefault(__webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/_store.js":
/*!*******************************************!*\
  !*** ./content/page-injections/_store.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'deleted:entry': 'removeEntry',
      'hashchange': 'resume'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_entry: 'sync',
  iframe: false,
  name: undefined,
  isNew: true,
  //entry: null,
  entries: {},
  locked: false,
  hashSensitive: false,
  tmid: '',
  noteColor: 'yellow',
  immut: false,
  redescribing: false,
  autoinit: function autoinit() {
    this.updateStatus();
  },
  resume: function resume() {
    this.entries = {};
    this.name = undefined;
    this.tmid = '';
    this.isNew = true;
  },
  updateStatus: function updateStatus() {
    var _this = this;

    if (!this.isNew || document.querySelector('[data-tm-id]')) return; //show notification

    this.get('settings').then(function (settings) {
      var historySettings = settings ? settings.history : null;

      if (historySettings) {
        _this.locked = historySettings.naming === 'mark';
        _this.hashSensitive = historySettings.ignoreHash === false;
      }
    });
  },
  setAreas: function setAreas() {
    var _this2 = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this2.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this2.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
  },
  renameEntry: function renameEntry(entry, oldName) {
    if (this.name && this.name === oldName && !this.locked) {
      this.name = entry.name;

      if (this.entries[oldName]) {
        this.entries[entry.name] = entry;
        delete this.entries[oldName];
      }
    }
  },
  setSyncForEntry: function setSyncForEntry(entry) {
    if (!this.locked && this.entries[entry.name]) {
      this.entries[entry.name].synced = entry.synced;
    }
  },
  removeEntry: function removeEntry(deletedEntry) {
    if (this.locked) return false;
    var entries = this.entries;

    for (var name in entries) {
      if (entries.hasOwnProperty(name) && name === deletedEntry) {
        delete this.entries[name];
        break;
      }
    }

    this.name = undefined;
    this.isNew = true;
  },
  addEntries: function addEntries(entries) {
    if (!this.locked) this.name = entries[0].name;
    var e = entries.length;

    for (var i = 0, entry; i < e; i++) {
      entry = entries[i];
      this.entries[entry.name] = entry;
    }

    this.isNew = false;
    this.immut = !!entries[0].immut;
  },
  get: function get() {
    var _this3 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    if (this.initializing) {
      return new Promise(function (r) {
        return window.setTimeout(function () {
          return r(_this3.get(field));
        }, 10);
      });
    }

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.setAreas().then(function () {
        _this3.initializing = false;
        return _this3['_get_' + field]();
      });
    }

    return this['_get_' + field]();
  },
  _get_history: function _get_history() {
    return browser.storage.sync.get().then(function (syncedStorage) {
      var syncedHistory = syncedStorage.history;
      return browser.storage.local.get().then(function (localStorage) {
        var localHistory = localStorage.history;
        if (!syncedHistory) return localHistory;
        if (!localHistory) return syncedHistory; //syncedHistory.order = syncedHistory.order.concat(localHistory.order);

        for (var e in localHistory.entries) {
          syncedHistory.entries[e] = localHistory.entries[e];
        }

        return syncedHistory;
      });
    });
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_bmicon: function _get_bmicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.bmicon;
    });
  },
  _get_noteicon: function _get_noteicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteicon;
    });
  },
  _get_noteonclick: function _get_noteonclick() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteonclick;
    });
  },
  _get_notetransp: function _get_notetransp() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.misc.notetransp;
    });
  },
  _get_tmuipos: function _get_tmuipos() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.tmuipos;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_immut: function _get_immut() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.immut;
    });
  },
  _get_progressbar: function _get_progressbar() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.progressbar;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_shortcuts: function _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.shortcuts;
    });
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_naming: function _get_naming() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/page-injections/bootstrap.js":
/*!**********************************************!*\
  !*** ./content/page-injections/bootstrap.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./_store */ "./content/page-injections/_store.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! ./modules/page */ "./content/page-injections/modules/page.js"));

var _contextmenu = _interopRequireDefault(__webpack_require__(/*! ./modules/contextmenu */ "./content/page-injections/modules/contextmenu.js"));

var _marker = _interopRequireDefault(__webpack_require__(/*! ./modules/marker */ "./content/page-injections/modules/marker.js"));

var _progress = _interopRequireDefault(__webpack_require__(/*! ./modules/progress */ "./content/page-injections/modules/progress.js"));

var _restorer = _interopRequireDefault(__webpack_require__(/*! ./modules/restorer */ "./content/page-injections/modules/restorer.js"));

var _notes = _interopRequireDefault(__webpack_require__(/*! ./modules/notes */ "./content/page-injections/modules/notes.js"));

var _tmui = _interopRequireDefault(__webpack_require__(/*! ./modules/tmui */ "./content/page-injections/modules/tmui.js"));

var _markerPopup = _interopRequireDefault(__webpack_require__(/*! ./modules/marker-popup */ "./content/page-injections/modules/marker-popup.js"));

var _autoMarker = _interopRequireDefault(__webpack_require__(/*! ./modules/auto-marker */ "./content/page-injections/modules/auto-marker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'autoinit',
      'toggled:addon': 'power'
    }
  },
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && storage.history && storage.settings.addon.active) {
        _this.power(true);
      }
    });
  },
  power: function power(on) {
    if (!on || this.bootstrapped) return false;
    (0, _page.default)();
    (0, _contextmenu.default)();
    (0, _progress.default)();
    (0, _restorer.default)();
    (0, _marker.default)();
    (0, _notes.default)();
    (0, _tmui.default)();
    (0, _markerPopup.default)();
    (0, _autoMarker.default)();
    this.bootstrapped = true;
  }
});

/***/ }),

/***/ "./content/page-injections/index.js":
/*!******************************************!*\
  !*** ./content/page-injections/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/page-injections/sass/index.scss");

var _utils = _interopRequireDefault(__webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js"));

__webpack_require__(/*! ./port */ "./content/page-injections/port.js");

__webpack_require__(/*! ./_store */ "./content/page-injections/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/page-injections/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/modules/auto-marker.js":
/*!********************************************************!*\
  !*** ./content/page-injections/modules/auto-marker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:mark-method-settings': 'update',
        'changed:selection': 'onSelectionChange',
        'sidebar:selected-marker': 'setMarker'
      }
    },
    handler: null,
    marker: 'm',
    autoinit: function autoinit() {
      this.update();
    },
    update: function update() {
      var _this = this;

      _store.default.get('settings').then(function (settings) {
        _this.active = settings.misc.markmethod === 'auto';
      });
    },
    setMarker: function setMarker(key) {
      this.marker = key;
    },
    onSelectionChange: function onSelectionChange(selected) {
      if (this.active) {
        if (selected && !this.listening) {
          this.startListening();
        } else if (!selected && this.listening) {
          this.stopListening();
        }
      } else if (this.listening) {
        this.stopListening();
      }
    },
    startListening: function startListening() {
      if (!this.listening) {
        var handler = this.handler = this.onMouseup.bind(this);
        window.document.body.addEventListener('mouseup', handler, false);
        this.listening = true;
      }
    },
    stopListening: function stopListening() {
      if (this.listening) {
        window.document.body.removeEventListener('mouseup', this.handler, false);
        this.listening = false;
      }
    },
    onMouseup: function onMouseup() {
      this.stopListening();
      var selection = window.getSelection().toString();
      if (selection) this.emit('selection-end', this.marker);
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/bookmark.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/bookmark.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _BOOKMARK =
/*#__PURE__*/
function () {
  function _BOOKMARK() {
    _classCallCheck(this, _BOOKMARK);

    this.mark = null;
    this.anchor = null;
  }

  _createClass(_BOOKMARK, [{
    key: "set",
    value: function set(mark) {
      mark = mark || this.mark;
      var wrappers = mark.wrappers,
          w = wrappers.length,
          anchor = wrappers[0];
      mark.keyData.bookmark = true;
      anchor.id = 'textmarker-bookmark-anchor';

      while (w--) {
        wrappers[w].classList.add('textmarker-bookmark');
      }

      this.mark = mark;
      this.anchor = anchor;
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var mark = this.mark,
          anchor = this.anchor,
          wrappers = mark.wrappers,
          w = wrappers.length;
      anchor.id = '';
      mark.keyData.bookmark = false;

      while (w--) {
        wrappers[w].classList.remove('textmarker-bookmark');
      }
    }
  }, {
    key: "scrollIntoView",
    value: function scrollIntoView(bm) {
      if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor'))) bm.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }]);

  return _BOOKMARK;
}();

exports.default = _BOOKMARK;

/***/ }),

/***/ "./content/page-injections/modules/contextmenu.js":
/*!********************************************************!*\
  !*** ./content/page-injections/modules/contextmenu.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'toggled:addon': 'activate'
      }
    },
    active: false,
    autoinit: function autoinit() {
      this.activate(true);
    },
    activate: function activate(on) {
      if (on && !this.active) {
        this.registerHandler();
        this.active = true;
      } else if (!on && this.active) {
        this.removeListeners();
        this.active = false;
      }
    },
    registerHandler: function registerHandler() {
      this.addListener('mousedown', function (e) {
        if (e.button === 2) {
          if (e.target.classList.contains('textmarker-highlight')) {
            _store.default.tmid = e.target.getAttribute('data-tm-id');
          } else _store.default.tmid = '';
        }
      }, window.document);
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/mark-item.js":
/*!******************************************************!*\
  !*** ./content/page-injections/modules/mark-item.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARK =
/*#__PURE__*/
function () {
  function _MARK(marker, key, preSettings, immut) {
    _classCallCheck(this, _MARK);

    var selection, defaults;
    this.marker = marker;
    selection = this.selection = marker.selection;
    this.immut = _store.default.redescribing ? marker.isImmut : immut;
    defaults = {
      style: '',
      bookmark: false,
      conds: null,
      text: selection.text,
      note: null
    };

    for (var d in defaults) {
      if (!preSettings.hasOwnProperty(d)) {
        preSettings[d] = defaults[d];
      }
    }

    preSettings.id = preSettings.id || ++marker.idcount;
    this.id = preSettings.id;
    this.simple = selection.simple;
    var range = this.range = selection.range;
    this.startOffset = range.startOffset;
    this.endOffset = range.endOffset;
    this.wrappers = null;
    this.containers = [];
    this.anchorNodePosition = null;
    this.focusNodePosition = null;
    this.keyData = {
      id: preSettings.id,
      key: key,
      style: preSettings.style,
      conds: preSettings.conds,
      text: preSettings.text,
      bookmark: preSettings.bookmark,
      note: preSettings.note,
      synced: preSettings.synced
    };

    if (this.immut && (_store.default.redescribing || !this.keyData.conds)) {
      this.describe_immut();
    }
  }

  _createClass(_MARK, [{
    key: "create",
    value: function create(range) {
      range = range || this.range;
      var selection = this.selection,
          style = this.keyData.style,
          nodes = selection.nodes,
          n = nodes.length,
          wrappers = this.wrappers = this.wrappers || this.createWrappers(style, n),
          i = 0,
          lastIndex = n - 1,
          node;

      for (; i < n; i++) {
        node = nodes[i];
        range.selectNodeContents(node);
        if (!i) range.setStart(node, this.startOffset);
        if (i === lastIndex) range.setEnd(node, this.endOffset);
        range.surroundContents(wrappers[i]);
        this.containers.push(wrappers[i].parentNode);
        node.parentNode.normalize();
      }

      this.definePosition(lastIndex);
      if (this.keyData.bookmark) this.marker.setBookmark(this, false);
      if (!this.immut && (_store.default.redescribing || !this.keyData.conds)) this.describe();
      this.registerClickListeners();
      return this;
    }
  }, {
    key: "registerClickListeners",
    value: function registerClickListeners() {
      var wrappers = this.wrappers;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var wrapper = _step.value;
          wrapper.addEventListener('click', this.marker.proxy(this, this.onClick), false);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var event;

      if (e.target) {
        e.stopPropagation();
        _store.default.tmid = e.target.getAttribute('data-tm-id');
        event = 'clicked:mark';
      } else {
        _store.default.tmid = e + '_0';
        event = 'activated:mark';
      }

      this.marker.emit(event, {
        id: this.id,
        bookmark: !!this.keyData.bookmark,
        note: !!this.keyData.note
      });
    }
  }, {
    key: "definePosition",
    value: function definePosition(n, includingOffsets) {
      var wrappers = this.wrappers;
      n = typeof n === 'number' ? n : wrappers.length - 1;
      var firstWrapper = wrappers[0];
      var lastWrapper = wrappers[n];
      var firstParent = firstWrapper.parentNode;
      var lastParent = lastWrapper.parentNode;
      var anchorPrev, focusPrev;
      this.anchorNodePosition = this.whichChild(firstParent, firstWrapper, true) - 1;
      this.focusNodePosition = this.whichChild(lastParent, lastWrapper, true);
      anchorPrev = firstWrapper.previousSibling;
      focusPrev = lastWrapper.previousSibling;
      if (anchorPrev && anchorPrev.nodeType === 1) this.anchorNodePosition += 1;
      if (!focusPrev || focusPrev.nodeType === 3 || firstParent === lastParent) this.focusNodePosition -= 1;
      if (this.anchorNodePosition < 0) this.anchorNodePosition = 0;
      if (this.focusNodePosition < 0) this.focusNodePosition = 0;

      if (includingOffsets) {
        this.startOffset = anchorPrev && anchorPrev.data ? anchorPrev.data.length : 0;
        this.endOffset = this.simple ? this.startOffset + this.keyData.text.length : this.endOffset;
      }

      return this;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.definePosition(undefined, true).describe();
      return this;
    }
  }, {
    key: "undo",
    value: function undo() {
      var containers = this.containers,
          wrappers = this.wrappers,
          w = wrappers.length,
          container,
          wrapper;

      while (w--) {
        container = containers[w];
        wrapper = wrappers[w];
        container.replaceChild(wrapper.firstChild, wrapper);
        container.normalize();
      }

      return this;
    }
  }, {
    key: "redo",
    value: function redo() {
      var containers = this.containers,
          selection = this.selection.self,
          range = this.range;
      range.setStart(containers[0].childNodes[this.anchorNodePosition], this.startOffset);
      range.setEnd(containers[containers.length - 1].childNodes[this.focusNodePosition], this.endOffset);
      selection.removeAllRanges();
      selection.addRange(range);
      this.selection.collectNodes();
      selection.collapseToStart();
      return this.create();
    }
  }, {
    key: "whichChild",
    value: function whichChild(parent, child, includingTextNodes) {
      if (!parent || !child) {
        return null;
      }

      var children = includingTextNodes || child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          i = 0;

      for (; i < c; i++) {
        if (children[i] === child) {
          return i;
        }
      }
    }
  }, {
    key: "createWrappers",
    value: function createWrappers(style, number) {
      var wrappers = [],
          i = 0,
          wrapper;

      for (; i < number; i++) {
        wrapper = window.document.createElement('span');
        wrapper.classList.add('textmarker-highlight');
        wrapper.setAttribute('style', style.replace(/;/g, '!important;'));
        wrapper.setAttribute('data-tm-id', this.id + '_' + i); //wrapper.setAttribute('contextmenu', 'textmarker-ctm');

        wrappers.push(wrapper);
      }

      return wrappers;
    }
  }, {
    key: "describe",
    value: function describe() {
      var range = this.range;
      var selection = this.selection;
      var start = range.startContainer;
      var end = range.endContainer;
      var singleNode = this.simple;
      var parent = this.wrappers[0].parentNode;
      var parentIsTM = parent.hasAttribute('data-tm-id');
      var grampa = parent.parentNode;
      var grandgrampa = grampa.parentNode || 0;
      var fTNP = this.anchorNodePosition;
      this.keyData.conds = {
        o: this.startOffset,
        n1: parentIsTM ? 'TM' : parent.nodeName,
        p1: fTNP,
        n2: grampa.nodeName,
        p2: this.whichChild(grampa, parent),
        p3: grandgrampa ? this.whichChild(grandgrampa, grampa) : undefined,
        p4: grandgrampa && grandgrampa.parentNode ? this.whichChild(grandgrampa.parentNode, grandgrampa) : undefined
      };
      return this.keyData.conds;
    }
  }, {
    key: "describe_immut",
    value: function describe_immut() {
      var selection = this.selection;
      var startPosition = [];
      var endPosition = [];
      var body = document.body;
      var start = selection.anchorNode,
          end = selection.focusNode;

      while (start !== body) {
        startPosition.push(this.whichChild(start.parentNode, start));
        start = start.parentNode;
      }

      while (end !== body) {
        endPosition.push(this.whichChild(end.parentNode, end));
        end = end.parentNode;
      }

      this.keyData.conds = {
        s: {
          o: this.startOffset,
          p: startPosition
        },
        e: {
          o: this.endOffset,
          p: endPosition
        }
      };
      return this.keyData.conds;
    }
  }]);

  return _MARK;
}();

exports.default = _MARK;

/***/ }),

/***/ "./content/page-injections/modules/marker-popup.js":
/*!*********************************************************!*\
  !*** ./content/page-injections/modules/marker-popup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:mark-method-settings': 'update',
        'changed:selection': 'onSelectionChange'
      }
    },
    handler: null,
    appended: false,
    height: 0,
    autoinit: function autoinit() {
      var _this = this;

      this.update().then(function () {
        return _this.create();
      });
    },
    update: function update() {
      var _this2 = this;

      return _store.default.get('settings').then(function (settings) {
        _this2.active = settings.misc.markmethod === 'popup';
        _this2.markers = settings.markers;
      });
    },
    create: function create() {
      var popup = this.el = window.document.createElement('tmpopup');
      var bgColorRegExp = /background-color:(#[a-f0-9]{6})/;
      var bgColor, colorBtn;

      for (var m in this.markers) {
        bgColor = this.markers[m].style.match(bgColorRegExp);

        if (bgColor) {
          colorBtn = window.document.createElement('tmpopupcolor');
          popup.appendChild(colorBtn);
          colorBtn.style.background = bgColor.pop();
          colorBtn.id = 'tmpopupcolor--' + m;
        }
      }
    },
    remove: function remove() {
      if (this.appended) {
        window.document.body.removeChild(this.el);
        this.el.removeEventListener('mousedown', this.handler, false);
        this.appended = false;
      }
    },
    show: function show() {
      var popup = this.el;
      var style = popup.style;
      var popupHeight;

      if (!this.appended) {
        window.document.body.appendChild(popup);
        var handler = this.handler = this.onMousedown.bind(this);
        popup.addEventListener('mousedown', handler, false);
        this.appended = true;
        var selectionPosition = window.getSelection().getRangeAt(0).getBoundingClientRect();
        style.top = selectionPosition.top - selectionPosition.height + window.scrollY + 'px';
        style.left = selectionPosition.left + window.scrollX + 'px';
        popupHeight = popup.offsetHeight;
        style.top = parseInt(style.top) - popupHeight + 'px';
      } else if ((popupHeight = popup.offsetHeight) !== this.height) {
        style.top = parseInt(style.top) + popupHeight - this.height + 'px';
      }

      this.height = popupHeight;
    },
    onSelectionChange: function onSelectionChange(selected) {
      if (this.active) {
        if (!selected) this.remove();else this.show();
      } else if (this.appended) {
        this.remove();
      }
    },
    onMousedown: function onMousedown(e) {
      e.preventDefault();
      e.stopPropagation();
      var el = e.target;

      if (el.nodeName === 'TMPOPUPCOLOR') {
        this.emit('clicked:popup-marker', el.id.split('--').pop());
      }
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/marker.js":
/*!***************************************************!*\
  !*** ./content/page-injections/modules/marker.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _markItem = _interopRequireDefault(__webpack_require__(/*! ./mark-item */ "./content/page-injections/modules/mark-item.js"));

var _bookmark = _interopRequireDefault(__webpack_require__(/*! ./bookmark */ "./content/page-injections/modules/bookmark.js"));

var _selection = _interopRequireDefault(__webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  // marker module
  return new _utils._MODULE({
    events: {
      ENV: {
        'set:entries': 'updateID',
        'pressed:marker-key': 'onMarkerKey',
        'pressed:hotkey': 'onHotkey',
        'clicked:popup-marker': 'onMarkerKey',
        'selection-end': 'onMarkerKey',
        'restored:range': 'recreate',
        'finished:all-restorations': 'onFinishedRestoration',
        'canceled:restoration': 'onCanceledRestoration',
        'ctx:b': 'setBookmark',
        'ctx:-b': 'removeBookmark',
        'ctx:d': 'remove',
        'ctx:m': 'onMarkerKey',
        'ctx:n': 'addNote',
        'updated:note': 'saveNote',
        'removed:note': 'saveNote',
        'changed:note-color': 'saveNote',
        'changed:note-pos': 'saveNote',
        'changed:note-size': 'saveNote',
        'sidebar:highlight': 'onMarkerKey',
        'sidebar:delete-highlight': 'remove',
        'sidebar:bookmark': 'setBookmark',
        'sidebar:delete-bookmark': 'removeBookmark',
        'sidebar:note': 'addNote',
        'sidebar:immut': 'immut',
        'sidebar:save-changes': 'save',
        'sidebar:retry-restoration': 'resume',
        'sidebar:undo': 'undo',
        'sidebar:redo': 'redo',
        'sidebar:next-mark': 'gotoMark',
        'sidebar:scroll-to-bookmark': 'scrollToBookmark',
        'scroll-to-bookmark': 'scrollToBookmark',
        'clicked:mark': 'gotoMark',
        'hashchange': 'onHashChange'
      }
    },
    selection: null,
    done: [],
    undone: [],
    visuallyOrderedMarks: [],
    visuallyOrderedMarkIDs: [],
    bookmark: null,
    removedBookmark: null,
    idcount: 0,
    markScrollPos: -1,
    updateID: function updateID(entries) {
      var l = entries.length;
      var locked = _store.default.locked;
      var ids = [];

      for (var i = 0, entry; i < l; i++) {
        entry = entries[i];

        if (!locked && entry.idcount) {
          return this.idcount = entry.idcount;
        } else {
          var marks = (entry.marks || []).concat(entry.lost || []),
              d = marks.length;

          if (d) {
            while (d--) {
              ids.push(marks[d].id);
            }
          }
        }
      }

      this.idcount = Math.max.apply(null, ids);
    },
    mark: function mark(key, data, immut) {
      this.undone.length = 0;
      var mark = new _markItem.default(this, key, data, immut).create();
      if (data.autonote) this.emit('add:note', mark, data.autonote);
      return mark;
    },
    undo: function undo(noAutosave) {
      if (_store.default.locked) return;
      var done = this.done;

      if (done.length) {
        var mark = this.done.pop();
        var id = mark.id;
        this.undone.push(mark.undo());
        if (this.bookmark) this.undoBookmark();
        this.emit('removed:mark', id);
      }

      noAutosave || this.autosave();
    },
    redo: function redo(noAutosave) {
      if (_store.default.locked) return;
      var undone = this.undone;

      if (undone.length) {
        var mark = this.undone.pop();
        this.done.push(mark.redo());
        this.emit('restore:notes', [mark]);
      }

      noAutosave || this.autosave();
    },
    cutOut: function cutOut(i) {
      var marker = this,
          done = this.done,
          l = done.length,
          toBeRemoved = [i],
          indices = [i],
          mark,
          smallestID;

      function findIndicesOfAffectedMarks(j) {
        for (var x = j + 1; x < l; x++) {
          mark = done[x];

          if (marker.marksIntersect(done[j], mark)) {
            if (!toBeRemoved.includes(x)) toBeRemoved.push(x);
            indices.push(x);
          }
        }

        indices.sort();
        toBeRemoved.sort();
      }

      while (indices.length) {
        findIndicesOfAffectedMarks(indices.shift());
      }

      smallestID = Math.min.apply(null, toBeRemoved);

      while (toBeRemoved.length) {
        this.done.splice(toBeRemoved.pop(), 1)[0].undo();
        this.undone.pop();
      }

      return smallestID;
    },
    remove: function remove(id) {
      if (_store.default.locked) return;
      id = id ? id : _store.default.tmid ? _store.default.tmid : '';
      if (!id) return this.undo();
      var mark = this.getById(id.split('_')[0]),
          done = this.done,
          l = done.length,
          position = done.indexOf(mark),
          smallestID,
          i;

      if (position === l - 1) {
        this.undo();
        this.undone.pop();
      } else {
        if (!this.undone.length) {
          smallestID = this.cutOut(position);
          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });
          this.autosave();
        } else {
          i = this.undone.length;

          while (this.undone.length) {
            this.redo(true);
          }

          smallestID = this.cutOut(position);
          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });

          while (i--) {
            this.undo(true);
          }

          this.autosave();
        }
      }

      this.emit('removed:mark', id[0]);
    },
    resume: function resume(arg, options) {
      _store.default.disabled = false; // while (this.done.length) {
      //   this.undo(true);
      // }

      Array.from(document.getElementsByClassName('textmarker-highlight')).forEach(function (highlight) {
        var container = highlight.parentNode;
        container.replaceChild(document.createTextNode(highlight.textContent), highlight);
        container.normalize();
      });
      this.done = [];
      this.undone = [];
      this.visuallyOrderedMarks = [];
      this.visuallyOrderedMarkIDs = [];
      this.bookmark = null;
      this.removedBookmark = null;
      this.markScrollPos = -1;
      var entry = !arg && _store.default.name && _store.default.entries[_store.default.name] ? _store.default.entries[_store.default.name] : null;
      if (!options || !options.silent) this.emit('resumed:markers', entry);
    },
    immut: function immut(immutable) {
      this.isImmut = immutable;
      _store.default.redescribing = true;
      _store.default.immut = immutable;
      this.resume();
    },
    save: function save() {
      var _this = this;

      if (_store.default.disabled) return this.emit('canceled:save-after-canceled-restoration');
      var iframe = _store.default.iframe;
      var locked = _store.default.locked;

      _store.default.get('naming').then(function (naming) {
        if (_store.default.isNew || locked) {
          if (!locked && naming === 'custom') {
            _this.request('name:entry?').then(function (granted) {
              if (granted) {
                var sub = iframe ? browser.i18n.getMessage('nm_message_iframe') : '';
                _store.default.name = window.prompt(browser.i18n.getMessage('nm_message', sub));
                if (_store.default.name) _this.emit('save:entry?', _this.retrieveEntry());
              }
            });
          } else {
            var confirmed = true;
            if (iframe) confirmed = window.confirm(browser.i18n.getMessage('nm_message_iframe'));

            if (confirmed) {
              _this.emit('save:entry?', _this.retrieveEntry());
            }
          }
        } else {
          _this.emit('update:entry?', _this.retrieveEntry());
        }
      });
    },
    autosave: function autosave() {
      var _this2 = this;

      _store.default.get('autosave').then(function (autosave) {
        if (autosave) _this2.save();else _this2.emit('unsaved-changes');
      });
    },
    store: function store(mark, save, order) {
      this.done.push(mark);
      if (save !== false) this.autosave();
      if (order) this.orderMarksVisually();
    },
    recreate: function recreate(mark) {
      this.selection = new _selection.default(null, {
        programmatically: true
      });
      this.store(this.mark(mark.key, mark), false, false);
    },
    onFinishedRestoration: function onFinishedRestoration() {
      if (!this.done.length) return this;
      this.emit('restore:notes', this.done);

      if (_store.default.locked) {
        var mark = this.done[this.done.length - 1];

        if (_store.default.name === mark.keyData.text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1)) {
          this.gotoMark(mark);
        }
      } else {
        this.sortById();
        this.scrollToBookmark();
      }

      this.orderMarksVisually();

      if (_store.default.redescribing) {
        _store.default.redescribing = false;
        this.save();
      }
    },
    onCanceledRestoration: function onCanceledRestoration() {
      _store.default.disabled = true;
    },
    addNote: function addNote(id) {
      this.emit('add:note', this.findMark(id));
    },
    saveNote: function saveNote(id) {
      if (!_store.default.locked) return this.autosave();
      var mark = this.getById(id).keyData;
      var synced = typeof mark.synced === 'boolean' ? mark.synced : _store.default.area_history === 'sync';
      var entry = {
        marks: [mark],
        name: mark.text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1),
        synced: synced
      };
      this.emit('update:entry?', entry);
    },
    gotoMark: function gotoMark(mark) {
      var markElements = this.visuallyOrderedMarks;
      var el, pos, id;

      if (mark || mark === 0) {
        if (typeof mark === 'number') {
          this.markScrollPos = mark + 1;
          el = markElements[mark];
          id = el.getAttribute('data-tm-id').split('_')[0];
        } else {
          id = mark.id;
          el = document.querySelector('.textmarker-highlight[data-tm-id="' + id + '_0"]');
        }
      } else {
        pos = this.markScrollPos;
        el = markElements[pos];
        id = el.getAttribute('data-tm-id').split('_')[0];
      }

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      if (!mark || typeof mark === 'number') this.getById(id).onClick(id);
      this.indicateMark(id);
    },
    gotoNextMark: function gotoNextMark(dir) {
      var l = this.visuallyOrderedMarks.length;
      this.markScrollPos += dir;
      if (this.markScrollPos < 0) this.markScrollPos = l - 1;else if (this.markScrollPos >= l) this.markScrollPos = 0;
      this.gotoMark();
    },
    indicateMark: function indicateMark(id) {
      Array.from(document.querySelectorAll('.textmarker-highlight--active')).forEach(function (tm) {
        return tm.classList.remove('textmarker-highlight--active');
      });
      var tms = Array.from(document.querySelectorAll('.textmarker-highlight[data-tm-id^="' + id + '_"]'));
      tms.forEach(function (tm) {
        return tm.classList.add('textmarker-highlight--active');
      });
      window.setTimeout(function () {
        return tms.forEach(function (tm) {
          return tm.classList.remove('textmarker-highlight--active');
        });
      }, 2000);
    },
    setBookmark: function setBookmark(m, save) {
      if (_store.default.locked) return;
      var bookmark = this.bookmark,
          mark = this.findMark(m);
      if (!mark) return false;

      if (bookmark) {
        bookmark.remove();
        this.emit('removed:bookmark');
      }

      this.bookmark = new _bookmark.default().set(mark);
      this.emit('added:bookmark');
      if (save !== false) this.autosave();
    },
    undoBookmark: function undoBookmark() {
      this.bookmark = null;
      this.emit('removed:bookmark');
    },
    removeBookmark: function removeBookmark() {
      if (_store.default.locked) return;
      var bookmark = this.bookmark;
      if (!bookmark) return false;
      bookmark.remove();
      this.bookmark = null;
      this.removedBookmark = bookmark;
      this.emit('removed:bookmark');
      this.autosave();
    },
    scrollToBookmark: function scrollToBookmark() {
      var bookmark = this.bookmark;
      if (bookmark) bookmark.scrollIntoView();
    },
    getById: function getById(id, pos) {
      var done = this.done,
          d = done.length,
          mark;

      while (d--) {
        mark = done[d];
        if (mark.keyData.id == id) return pos ? {
          mark: mark,
          position: d
        } : mark;
      }

      return pos ? {
        mark: null,
        position: null
      } : false;
    },
    findMark: function findMark(x) {
      x = x ? x : _store.default.tmid ? _store.default.tmid : '';
      var mark = !x ? this.done[this.done.length - 1] : typeof x === 'string' ? this.getById(x.split('_')[0]) : x;
      return mark;
    },
    sortById: function sortById() {
      this.done.sort(function (mark1, mark2) {
        return mark1.id - mark2.id;
      });
    },
    orderMarksVisually: function orderMarksVisually() {
      this.visuallyOrderedMarks = Array.from(document.querySelectorAll('.textmarker-highlight[data-tm-id$="_0"]')).sort(function (m1, m2) {
        var bb1 = m1.getBoundingClientRect(),
            bb2 = m2.getBoundingClientRect(),
            top1 = bb1.top,
            top2 = bb2.top;
        if (top1 < top2) return -1;else if (top2 < top1) return 1;else {
          if (bb1.left < bb2.left) return -1;
          return 1;
        }
      });
      this.visuallyOrderedMarkIDs = this.visuallyOrderedMarks.map(function (mark) {
        return parseInt(mark.getAttribute('data-tm-id'));
      });
      this.emit('visually-ordered:marks', this.visuallyOrderedMarkIDs);
    },
    marksIntersect: function marksIntersect(mark1, mark2) {
      var wrappers1 = mark1.wrappers,
          w1 = wrappers1.length,
          id1 = mark1.id,
          wrappers2 = mark2.wrappers,
          id2 = mark2.id,
          w2,
          tms,
          l;

      while (w1--) {
        w2 = wrappers2.length;

        while (w2--) {
          tms = wrappers1[w1].querySelectorAll('[data-tm-id]');
          l = tms.length;

          while (l--) {
            if (tms[l].getAttribute('data-tm-id')[0] == id2) return true;
          }
        }
      }

      return false;
    },
    onMarkerKey: function onMarkerKey(e, key) {
      var _this3 = this;

      var selection = this.selection = new _selection.default();
      if (!selection.nodes) return false;

      if (e) {
        if (typeof e === 'string') key = e;else this.preventDefault(e);
      } else {
        key = key || 'm';
      }

      _store.default.get('settings').then(function (settings) {
        if (_store.default.isNew) {
          _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : !!settings.history.immut;
        } else {
          _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : _store.default.immut;
        }

        _this3.store(_this3.mark(key, settings.markers[key], _this3.isImmut), true, true);
      });
    },
    onHotkey: function onHotkey(key) {
      var self = this;

      switch (key) {
        case 'z':
          self.undo();
          break;

        case 'y':
          self.redo();
          break;

        case 's':
          self.save();
          break;

        case 'b':
          self.setBookmark();
          break;

        case 'arrowup':
          self.gotoNextMark(-1);
          break;

        case 'arrowdown':
          self.gotoNextMark(1);
          break;

        case 'd':
          self.remove();
          break;
      }
    },
    preventDefault: function preventDefault(e) {
      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }

      return this;
    },
    retrieveEntry: function retrieveEntry() {
      var locked = _store.default.locked;
      var isNew = _store.default.isNew;
      var name = _store.default.name;
      var entry = !locked && _store.default.entries[name] ? _store.default.entries[name] : {};
      entry.marks = this.collectMarks();
      entry.last = new Date().getTime();
      entry.bookmarked = !!this.bookmark;
      entry.title = window.document.title;
      entry.count = entry.marks.length;
      entry.idcount = this.idcount;
      entry.immut = typeof this.isImmut === 'boolean' ? this.isImmut : entry.immut;

      if (isNew || locked) {
        entry.first = entry.last;
        entry.url = _store.default.hashSensitive ? window.document.URL : (0, _utils._HASHLESS)(window.document.URL);
        entry.synced = _store.default.area_history === 'sync';
        entry.locked = locked;
        entry.hashSensitive = _store.default.hashSensitive;
      }

      entry.name = locked ? entry.marks[0].text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1) : isNew ? name : entry.name;
      return entry;
    },
    collectMarks: function collectMarks() {
      var done = this.done;
      var l = done.length;
      var marks = [];

      if (_store.default.locked) {
        done = [done[l - 1]];
      }

      l = done.length;

      for (var m = 0, kD; m < l; m++) {
        kD = done[m].keyData;
        delete kD.synced;
        marks.push(kD);
      }

      return marks;
    },
    onHashChange: function onHashChange() {
      this.resume(null, {
        silent: true
      });
      this.emit('resumed-on-hashchange');
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/note.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/note.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(mark, color) {
  var BODY = window.document.body;
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:misc-settings': 'addMarkListeners',
        'drag:note': 'onDrag',
        'dragstop:note': 'onDragEnd'
      },
      DOM: {
        click: {
          'tmnotedelete': '_delete',
          'tmnoteminimize': 'hide',
          'tmnotecustomize': 'togglePalette',
          'tmnotecolor': 'changeColor',
          'textarea': 'bringUpFront'
        },
        keyup: {
          'textarea': 'attemptUpdate'
        },
        mousedown: {
          'tmnoteheader': 'onDragStart'
        },
        touchstart: {
          'tmnoteheader': 'onDragStart'
        }
      }
    },
    addListenersManually: true,
    el: null,
    mark: mark,
    color: color || '',
    markClickHandler: null,
    text: '',
    visible: false,
    recentlyUpdated: false,
    settingsMode: false,
    pos: {
      l: null,
      t: null
    },
    size: {
      w: null,
      h: null
    },
    dragDX: 0,
    dragDY: 0,
    mutationObserver: null,
    autoinit: function autoinit() {
      this.adjustNoteDataObject();
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },
    adjustNoteDataObject: function adjustNoteDataObject() {
      var noteData = this.mark.keyData.note;

      if (typeof noteData === 'string') {
        this.mark.keyData.note = {
          text: noteData,
          color: this.color || 'yellow'
        };
      } else if (!noteData) {
        this.mark.keyData.note = {
          text: noteData,
          color: this.color || _store.default.noteColor
        };
      } else {
        this.pos = noteData.pos || this.pos;
        this.size = noteData.size || this.size;
      }
    },
    createNoteElement: function createNoteElement() {
      var _this = this;

      var note = this.el = document.createElement('tmnote');
      var header = this.header = document.createElement('tmnoteheader');
      var del = this.del = document.createElement('tmnotedelete');
      var min = this.min = document.createElement('tmnoteminimize');
      var gear = document.createElement('tmnotecustomize');
      var palette = this.palette = document.createElement('tmnotepalette');
      var p = this.textElement = document.createElement('textarea');
      var text = this.mark.keyData.note.text;
      var color = this.color = this.mark.keyData.note.color || _store.default.noteColor;
      _store.default.noteColor = color;
      var delText = document.createTextNode(String.fromCharCode(10005));
      var minText = document.createTextNode(String.fromCharCode(0x2013));
      var gearText = document.createTextNode(String.fromCharCode(0x2699));
      ['green', 'white', 'yellow', 'orange', 'red', 'purple', 'blue', 'turquoise'].forEach(function (c) {
        var color = document.createElement('tmnotecolor');
        color.className = 'tmnotecolor--' + c;
        color.setAttribute('data-color', c);
        palette.appendChild(color);
      });
      p.setAttribute('data-tm-note', true);
      del.appendChild(delText);
      min.appendChild(minText);
      gear.appendChild(gearText);
      note.append(header);
      note.appendChild(gear);
      note.appendChild(del);
      note.appendChild(min);
      note.appendChild(p);
      note.classList.add('tmnote--' + color);
      if (text) p.value = text;
      p.addEventListener('blur', function (e) {
        return _this.attemptUpdate(e, e.target, true);
      }, false);
    },
    _delete: function _delete() {
      this.remove();
      this.mark.keyData.note = '';
    },
    remove: function remove() {
      this.hide();
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    attemptUpdate: function attemptUpdate(e, el, force) {
      var _this2 = this;

      if (force) {
        this.update(el);
      } else if (!this.recentlyUpdated) {
        this.recentlyUpdated = true;
        window.setTimeout(function () {
          return _this2.update(el);
        }, 3000);
      }
    },
    update: function update(el) {
      this.mark.keyData.note.text = el.value;
      this.emit('updated:note', this.mark.id);
      this.recentlyUpdated = false;
    },
    show: function show() {
      var el = this.el;
      var innerWindowWidth = window.innerWidth;
      var pos, left, top;

      if (this.pos.l !== null) {
        pos = this.pos;
        top = pos.t;
      } else {
        pos = this.getPosition();
        left = this.pos.l = pos.l;
        top = this.pos.t = pos.t + pos.offset;
      }

      left = this.pos.l = pos.l;

      if (left + 340 > innerWindowWidth) {
        left = this.pos.l = innerWindowWidth - 340;
      }

      var size = this.size.w ? 'width:' + this.size.w + ';height:' + this.size.h + ';' : '';
      BODY.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + top + 'px;left:' + left + 'px;');
      el.getElementsByTagName('textarea')[0].setAttribute('style', size);
      this.connectMutationObserver();
      this.visible = true;
    },
    bringUpFront: function bringUpFront() {
      var _this3 = this;

      Array.from(BODY.getElementsByTagName('tmnote')).forEach(function (note) {
        if (note === _this3.el) note.style.zIndex = 2147483647;else note.style.zIndex = 2147483646;
      });
    },
    hide: function hide() {
      BODY.removeChild(this.el);
      this.mutationObserver.disconnect();
      this.visible = false;
    },
    toggle: function toggle() {
      if (this.visible) this.hide();else this.show();
    },
    togglePalette: function togglePalette() {
      if (this.settingsMode) {
        this.el.removeChild(this.palette);
      } else {
        this.el.appendChild(this.palette);
      }

      this.settingsMode = !this.settingsMode;
    },
    changeColor: function changeColor(e, el) {
      this.el.classList.remove('tmnote--' + this.color);
      var color = this.color = _store.default.noteColor = el.getAttribute('data-color');
      this.el.classList.add('tmnote--' + color);
      this.mark.keyData.note.color = color;
      this.togglePalette();
      this.emit('changed:note-color', this.mark.id);
    },
    addMarkListeners: function addMarkListeners() {
      var _this4 = this;

      _store.default.get('noteonclick').then(function (noteonclick) {
        if (noteonclick) {
          if (!!_this4.markClickHandler) return;

          var handler = _this4.markClickHandler = function () {
            return _this4.toggle();
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this4.mark.wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var wrapper = _step.value;
              wrapper.addEventListener('click', handler, false);
              wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          _this4.removeMarkListeners();
        }
      });
    },
    removeMarkListeners: function removeMarkListeners() {
      if (!this.markClickHandler) return;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mark.wrappers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var wrapper = _step2.value;
          wrapper.removeEventListener('click', this.markClickHandler, false);
          wrapper.removeAttribute('title');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    connectMutationObserver: function connectMutationObserver() {
      var textarea = this.el.getElementsByTagName('textarea')[0];
      var config = {
        attributeFilter: ['style']
      };
      var observer = this.mutationObserver = this.mutationObserver || new MutationObserver(this.proxy(this, this.saveSize));
      observer.observe(textarea, config);
    },
    getPosition: function getPosition() {
      var rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        t: rect.top + window.pageYOffset - BODY.clientTop,
        l: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    },
    onDragStart: function onDragStart(e, el) {
      e.preventDefault();
      this.dragDX = e.pageX - this.pos.l;
      this.dragDY = e.pageY - this.pos.t;
      this.emit('start:drag', this.mark.id);
    },
    onDrag: function onDrag(note, e) {
      if (note === this.mark.id) {
        var el = this.el;
        var left = this.pos.l = e.pageX - this.dragDX;
        var top = this.pos.t = e.pageY - this.dragDY;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
      }
    },
    onDragEnd: function onDragEnd() {
      this.mark.keyData.note.pos = this.pos;
      this.emit('changed:note-pos', this.mark.id);
    },
    saveSize: function saveSize(mutationsList) {
      var style = mutationsList[0].target.style;
      this.size = this.mark.keyData.note.size = {
        w: style.width,
        h: style.height
      };
      this.emit('changed:note-size', this.mark.id);
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/notes.js":
/*!**************************************************!*\
  !*** ./content/page-injections/modules/notes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _note = _interopRequireDefault(__webpack_require__(/*! ./note */ "./content/page-injections/modules/note.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'add:note': 'addAndShow',
        'removed:note': 'removeNoteStorage',
        'restore:notes': 'restore',
        'removed:mark': 'removeNote',
        'toggle:notes': 'toggleAll',
        'sidebar:toggle-notes': 'toggleAll',
        'updated:misc-settings': 'updateTransp',
        'start:drag': 'startDraggingNote',
        'opened:sidebar': 'sendNotesState'
      }
    },
    notes: {},
    toggle: null,
    dragHandler: null,
    dragStopHandler: null,
    autoinit: function autoinit() {
      this.updateTransp();
    },
    add: function add(mark, color) {
      var note = this.notes[mark.id];
      if (note) return note;
      this.emit('added:note');
      return this.notes[mark.id] = new _note.default(mark, color);
    },
    restore: function restore(marks) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mark = _step.value;

          if (mark.keyData.note) {
            this.add(mark);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    addAndShow: function addAndShow(mark, color) {
      this.add(mark, color).show();
    },
    removeNoteStorage: function removeNoteStorage(id) {
      delete this.notes[id];
      if (this.isEmpty(this.notes)) this.emit('removed:last-note');
    },
    removeNote: function removeNote(id) {
      if (this.notes[id]) this.notes[id].remove();
    },
    toggleAll: function toggleAll() {
      if (!this.notes) return;
      var notes = this.notes;
      var meth = window.document.getElementsByTagName('tmnote').length ? 'hide' : 'show',
          condition = meth === 'hide' ? true : false,
          note;

      for (var n in notes) {
        note = notes[n];

        if (note.visible === condition) {
          note[meth]();
        }
      }
    },
    updateTransp: function updateTransp() {
      var bodyClasses = window.document.body.classList;

      _store.default.get('notetransp').then(function (transp) {
        if (transp) bodyClasses.add('tmnotes--0_8');else bodyClasses.remove('tmnotes--0_8');
      });
    },
    isEmpty: function isEmpty(obj) {
      return !Object.keys(obj).length;
    },
    startDraggingNote: function startDraggingNote(note) {
      var _this = this;

      var dragHandler = this.dragHandler = function (e) {
        return _this.emitDragEvent(note, e);
      };

      var dragStopHandler = this.dragStopHandler = function (e) {
        return _this.stopDraggingNote(note, e);
      };

      var doc = window.document;
      doc.addEventListener('mousemove', dragHandler, false);
      doc.addEventListener('mouseup', dragStopHandler, false);
      doc.addEventListener('touchmove', dragHandler, false);
      doc.addEventListener('touchend', dragStopHandler, false);
    },
    stopDraggingNote: function stopDraggingNote(note, e) {
      var doc = window.document;
      doc.removeEventListener('mousemove', this.dragHandler, false);
      doc.removeEventListener('mouseup', this.dragStopHandler, false);
      doc.removeEventListener('touchmove', this.dragHandler, false);
      doc.removeEventListener('touchend', this.dragStopHandler, false);
      this.emit('dragstop:note', note, e);
    },
    emitDragEvent: function emitDragEvent(note, e) {
      e.preventDefault();
      this.emit('drag:note', note, e);
    },
    sendNotesState: function sendNotesState(info) {
      this.emit('notes-state', !this.isEmpty(this.notes), info);
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/page.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/page.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'saved:entry': 'update',
        'opened:sidebar': 'sendPageState',
        'failed:restoration': 'activateRetry',
        'succeeded:restoration': 'deactivateRetry',
        'update:entry?': 'deactivateRetry',
        'changed:url': 'onUrlChange',
        'resumed-on-hashchange': 'setup'
      },
      DOM: {
        keydown: {
          '*': 'delegate'
        },
        selectionchange: {
          '*': 'onSelectionChange'
        }
      }
    },
    url: '',
    active: true,
    set: false,
    initialized: false,
    retryActive: false,
    shiftSensitiveKeys: [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 171, 173],
    registeredLoadHandler: false,
    keyCodeMap: {
      '13': 'Enter',
      '48': '0',
      '49': '1',
      '50': '2',
      '51': '3',
      '52': '4',
      '53': '5',
      '54': '6',
      '55': '7',
      '56': '8',
      '57': '9',
      '171': '+',
      '173': '-'
    },
    autoinit: function autoinit() {
      this.setup();
    },
    power: function power(on) {
      if (on) this.addListeners();else this.removeListeners();
      this.active = on;
      this.setup();
    },
    setup: function setup() {
      var _this = this;

      _store.default.get('mode').then(function (active) {
        _this.active = active;
        if (_this.set || !active) return false;

        if (window.parent.window.document.readyState !== 'complete' && !_this.registeredLoadHandler) {
          _this.registeredLoadHandler = true;
          return _this.addListener('load', function () {
            return _this.setup();
          }, window.parent.window);
        }

        _store.default.iframe = _this.isIFrame();
        _this.url = window.document.URL;
        _this.hashlessURL = (0, _utils._HASHLESS)(_this.url);

        _this.checkURL();

        _this.removeListeners();

        if (active) _this.addListeners();
        _this.set = true;
      });
    },
    isIFrame: function isIFrame() {
      return window !== window.parent.window;
    },
    isEditable: function isEditable(el) {
      var name = el.tagName;
      return name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true';
    },
    delegate: function delegate(e) {
      var _this2 = this;

      var key = e.key.toLowerCase();
      var keyCode = e.keyCode,
          modKey = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey,
          arrowKeys = ['arrowdown', 'arrowup'],
          lockedActions = ['b', 's', 'y', 'z', 'd'],
          functionKeys = lockedActions.concat(arrowKeys),
          defaultMarkers = ['m', '2', '3'];
      if (_store.default.locked && lockedActions.includes(key)) return true;
      if (this.shiftSensitiveKeys.includes(keyCode)) key = this.keyCodeMap[keyCode];
      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;
      if (this.isEditable(e.target)) return true;

      _store.default.get('settings').then(function (settings) {
        if (!settings) return true;
        var origKey = key;
        var markers = settings.markers;
        var shortcuts = settings.shortcuts;
        var isMarkerKey = markers[key];
        var isCustomMarkerKey = isMarkerKey && !defaultMarkers.includes(key);
        if (isCustomMarkerKey) key = 'cm';
        var setting = shortcuts[key];
        if (!setting) return true;

        if (!modKey) {
          if (key === 'w' && !setting[0] && setting[1]) {
            _this2.lookup();
          } else if (isMarkerKey && !setting[0] && setting[1]) {
            _this2.emit('pressed:marker-key', e, origKey);
          }
        } else {
          if (!setting[1]) return true;
          var shortcut = setting[0].split('-');
          var s1 = shortcut[0];
          var s2 = shortcut[1];
          if (!e[s1] || s2 && !e[s2]) return true;
          if (key === 'w') _this2.lookup();else if (isMarkerKey) {
            _this2.emit('pressed:marker-key', e, origKey);
          } else _this2.emit('pressed:hotkey', key);
        }
      });
    },
    lookup: function lookup() {
      var selectedText = window.getSelection().toString();
      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL: function checkURL() {
      var _this3 = this;

      this.request('check:url', this.url).then(function (data) {
        if (data) _this3.onUrlFound(_this3.filterEntries(data.entries), data.recentlyOpenedEntry);
      });
    },
    update: function update(entries, force) {
      force = force === true ? true : false;
      entries = Array.isArray(entries) ? entries : [entries];
      var firstEntry = entries[0];
      var ignoreHash = !firstEntry.hashSensitive;
      var url = ignoreHash ? this.hashlessURL : this.url;

      if (force || firstEntry.url === url) {
        _store.default.addEntries(entries); //_STORE.entry = entry;


        if (force) this.emit('set:entries', entries);
      }
    },
    onHotkey: function onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound: function onUrlFound(entries, recentlyOpenedEntry) {
      this.update(entries, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;

        if (recentlyOpenedEntry) {
          var firstEntry = entries[0];
          var ignoreHash = !firstEntry.hashSensitive;
          var url = ignoreHash ? this.hashlessURL : this.url;

          if (recentlyOpenedEntry.url === url) {
            _store.default.name = recentlyOpenedEntry.name;
          }
        }

        this.emit('restore:marks', entries);
      }
    },
    filterEntries: function filterEntries(entries) {
      var lockedEntries = [],
          l = entries.length,
          lockedEntriesExist = false,
          nonLockedEntries = [];

      for (var i = 0, entry; i < l; i++) {
        entry = entries[i];

        if (entry.locked) {
          lockedEntries.push(entry);
          lockedEntriesExist = true;
        } else {
          nonLockedEntries.push(entry);
        }
      }

      if (lockedEntriesExist && nonLockedEntries.length) {
        this.emit('warn:mixed-entry-types');
      } else if (nonLockedEntries.length > 1) {
        this.emit('warn:multiple-unlocked-entries');
        entries = [nonLockedEntries[0]];
      }

      if (lockedEntries.length) {
        _store.default.locked = true;
        entries = lockedEntries.sort(function (a, b) {
          return new Date(a.last) - new Date(b.last);
        });
      } else {
        _store.default.locked = false;
      }

      return entries;
    },
    onSelectionChange: function onSelectionChange(e) {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    },
    onUrlChange: function onUrlChange(tab, newUrl) {
      var entry = _store.default.entries[Object.keys(_store.default.entries)[0]];

      if (!_store.default.isNew && entry && entry.hashSensitive && (0, _utils._HASHLESS)(newUrl) === this.hashlessURL && newUrl !== this.url) {
        this.set = false;
        this.initialized = false;
        this.emit('hashchange');
      }
    },
    activateRetry: function activateRetry() {
      this.retryActive = true;
    },
    deactivateRetry: function deactivateRetry() {
      this.retryActive = false;
    },
    sendPageState: function sendPageState(info) {
      this.emit('page-state', {
        selection: !window.getSelection().isCollapsed,
        bookmark: !!document.getElementById('textmarker-bookmark-anchor'),
        retryActive: this.retryActive
      }, info);
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/progress.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/progress.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'started:restoration': 'start',
        'restored:range': 'progress',
        'failed:restore-range': 'progress',
        'finished:restoration': 'stop',
        'updated:misc-settings': 'activate'
      }
    },
    el: null,
    active: true,
    steps: 0,
    totalWidth: 413,
    currentWidth: 0,
    stepLength: 0,
    cancelHandler: null,
    autoinit: function autoinit() {
      var _this = this;

      this.activate().then(function () {
        return _this.create();
      });
    },
    create: function create() {
      var _this2 = this;

      var modal = this.el = window.document.createElement('tmprogressmodal');
      [{
        type: 'tmprogressheader',
        text: browser.i18n.getMessage('restoring')
      }, {
        type: 'tmprogressclose',
        text: String.fromCharCode(10005)
      }, {
        type: 'tmprogressbar',
        child: {
          type: 'tmprogress'
        }
      }, {
        type: 'tmprogresscancel',
        text: browser.i18n.getMessage('cancel')
      }].forEach(function (obj) {
        var el = window.document.createElement(obj.type);
        modal.appendChild(el);
        _this2[obj.type] = el;
        if (obj.text) el.textContent = obj.text;

        if (obj.child) {
          var child = window.document.createElement(obj.child.type);
          el.appendChild(child);
          _this2[obj.child.type] = child;
        }
      });
    },
    resume: function resume(len) {
      this.steps = len;
      this.stepLength = this.totalWidth / len;
      this.currentWidth = 0;
      this.tmprogress.style.width = 0;
    },
    start: function start(len) {
      if (!len || !this.active) return;
      this.resume(len);
      var cancelHandler = this.cancelHandler = this.cancel.bind(this);
      var closeHandler = this.closeHandler = this.stop.bind(this);
      window.document.body.appendChild(this.el);
      this.tmprogresscancel.addEventListener('click', cancelHandler, false);
      this.tmprogressclose.addEventListener('click', closeHandler, false);
    },
    progress: function progress() {
      var width = this.currentWidth += this.stepLength;
      this.tmprogress.style.width = width + 'px';
    },
    stop: function stop() {
      try {
        window.document.body.removeChild(this.el);
        this.tmprogresscancel.removeEventListener('click', this.cancelHandler, false);
        this.tmprogressclose.removeEventListener('click', this.closeHandler, false);
      } catch (e) {}
    },
    cancel: function cancel() {
      this.stop();
      this.emit('canceled:restoration');
    },
    activate: function activate() {
      var _this3 = this;

      return _store.default.get('progressbar').then(function (progressbar) {
        return _this3.active = progressbar;
      });
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/restorer.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/restorer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _selection = _interopRequireDefault(__webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RestorerBase =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(RestorerBase, _MODULE2);

  function RestorerBase(entry) {
    var _this;

    _classCallCheck(this, RestorerBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RestorerBase).call(this, entry));
    _this.entry = entry;
    _this.lost = [];
    _this.failureReport = {};
    _this.restored = [];
    _this.area = entry.synced ? 'sync' : 'local';

    _this.emit('started:restoration', entry.marks.length);

    _this.on('canceled:restoration', function () {
      return _this.canceled = true;
    });

    return _this;
  }

  _createClass(RestorerBase, [{
    key: "processInChunks",
    value: function processInChunks(data, proc, cb) {
      proc = proc.bind(this);
      cb = cb.bind(this);

      (function rec() {
        var _this2 = this;

        var expire = +new Date() + 500;

        do {
          try {
            proc(data.shift());
          } catch (e) {
            setTimeout(function () {
              return _this2.emit('failed:restore-range', e.toString());
            }, 0);
          }
        } while (data.length > 0 && expire > +new Date());

        if (data.length > 0) window.setTimeout(function () {
          return rec();
        }, 0);else cb();
      })();
    }
  }, {
    key: "report",
    value: function report() {
      if (this.canceled) return false;
      var ll = this.lost.length;

      if (ll) {
        while (ll--) {
          delete this.lost[ll].temp;
        }

        this.emit('lost:marks', this.failureReport);
      }

      this.emit('finished:restoration', this.entry.name, this.restored, this.lost, this.area);
    }
  }]);

  return RestorerBase;
}(_utils._MODULE);

var Restorer =
/*#__PURE__*/
function (_RestorerBase) {
  _inherits(Restorer, _RestorerBase);

  function Restorer(entry) {
    var _this3;

    _classCallCheck(this, Restorer);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Restorer).call(this, entry));
    _this3.queue = [];
    _this3.cache = [];
    _this3.phase = 1;
    _this3.selectionTrial = 0;
    _this3.chunkDuration = 500;
    _this3._timer = +new Date() + _this3.chunkDuration;
    _this3.oom = entry.marks.length === 1 && entry.marks[0].id == 1;

    _this3.init();

    return _this3;
  }

  _createClass(Restorer, [{
    key: "init",
    value: function init() {
      var entry = this.entry,
          now = [],
          postponed = [],
          marks = entry.marks,
          l = marks.length,
          i = 0,
          mark;

      for (; i < l; i++) {
        mark = marks[i];
        this.convertDescription(mark).createTempObject(mark);
        if (mark.conds.n1 === 'TM') postponed.push(mark);else now.push(mark);
      }

      this.queue.push(now);

      for (i = 0, l = postponed.length; i < l; i++) {
        this.queue.push([postponed[i]]);
      }

      this.restore();
    }
  }, {
    key: "convertDescription",
    value: function convertDescription(mark) {
      if (typeof mark.conds.o === 'undefined') {
        var conds = mark.conds,
            convertedConds = {
          o: conds.startOffset,
          n1: conds.firstNodeName,
          n2: conds.firstParentNodeName,
          p1: conds.firstTextNodePosition,
          p2: conds.firstNodePosition,
          p3: conds.firstParentNodePosition,
          p4: conds.firstGrampaNodePosition
        };
        delete mark.conds;
        mark.conds = convertedConds;
      }

      return this;
    }
  }, {
    key: "createTempObject",
    value: function createTempObject(mark) {
      var text = mark.text,
          trimmedText = text.trim(),
          squeezedText = this.squeeze(mark.text);
      mark.temp = {
        textLength: text.length,
        trimmedText: trimmedText,
        trimmedTextLength: trimmedText.length,
        squeezedText: squeezedText,
        squeezedTextLength: squeezedText.length,
        possiblePositions: [],
        possibleEndPositions: [],
        possibleStartNodes: [],
        possibleEnds: {},
        possibleFocusOffsets: []
      };
      mark.synced = this.entry.synced;
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this4 = this;

      if (this.phase === 2) this.sortQueueById();
      var marks = this.marks = this.queue.shift(),
          length = marks ? marks.length : 0;
      this.length = length;

      if (length) {
        this.setBodySelection(window.document.body).getTextPositions(marks, length);
        if (this.phase === 1 && length > 1) this.postponeOverlappings();
        this.findPossibleExtrema().ruleOutMultiples().restoreRanges();
        this.phase++;

        if (this.queue.length && !this.canceled) {
          if (this.timer < +new Date()) setTimeout(function () {
            return _this4.restore();
          }, 0);else this.restore();
        } else this.report();
      } else this.report();
    }
  }, {
    key: "sortQueueById",
    value: function sortQueueById() {
      var marks = this.queue,
          l = marks ? marks.length : 0,
          temp = [],
          res = [],
          i = 0,
          mark,
          t;

      while (l--) {
        if (!marks[l].length) continue;
        mark = marks[l][0];
        temp[mark.id] = mark;
      }

      this.queue = [];

      for (t = temp.length; i < t; i++) {
        if (temp[i]) this.queue.push([temp[i]]);
      }

      return this;
    }
  }, {
    key: "getTextPositions",
    value: function getTextPositions(marks, l) {
      var trimmedSelectionText = this.trimmedSelectionText,
          allPossibleStartPositions = this.allPossibleStartPositions = [],
          endPositions = [],
          mark,
          markTemp,
          squeezedText,
          squeezedTextLength,
          p,
          endPosition;

      while (l--) {
        p = undefined;
        mark = marks[l];
        markTemp = mark.temp;

        if (!markTemp) {
          marks.splice(l, 1);
          continue;
        }

        if (markTemp.possiblePositions.length) {
          allPossibleStartPositions = allPossibleStartPositions.concat(markTemp.possiblePositions);
          endPositions = endPositions.concat(markTemp.possibleEndPositions);
        } else {
          squeezedText = markTemp.squeezedText;
          squeezedTextLength = markTemp.squeezedTextLength;

          while (p !== -1) {
            if (p === undefined) p = -1;
            p = trimmedSelectionText.indexOf(squeezedText, p + 1);
            endPosition = p + squeezedTextLength;
            markTemp.possiblePositions.push([p, endPosition, mark]);
            markTemp.possibleEndPositions.push(endPosition);
            allPossibleStartPositions.push([p, endPosition, mark]);
            endPositions.push(endPosition);
          }

          markTemp.possiblePositions.pop();
          allPossibleStartPositions.pop();
          endPositions.pop();

          if (!markTemp.possiblePositions.length) {
            this.lost.push(mark);
            this.failureReport[mark.id] = {
              text: mark.text,
              reason: browser.i18n.getMessage('note_restoration_failure_reason_1')
            };
          }
        }
      }

      this.sortPossibleStartPositions(allPossibleStartPositions);
      this.maxPosition = Math.max.apply(null, endPositions);
      return this;
    }
  }, {
    key: "sortPossibleStartPositions",
    value: function sortPossibleStartPositions(positions) {
      var l = positions.length,
          temp = [],
          i = 0,
          pos,
          start,
          t;

      while (l--) {
        pos = positions[l];
        start = pos[0];
        if (temp[start]) temp.splice(start + 1, 0, pos);else temp[start] = pos;
      }

      t = temp.length;
      this.allPossibleStartPositions = [];

      for (; i < t; i++) {
        if (temp[i]) this.allPossibleStartPositions.push(temp[i]);
      }
    }
  }, {
    key: "postponeOverlappings",
    value: function postponeOverlappings() {
      var positions = this.allPossibleStartPositions,
          p = positions.length,
          postponed = [],
          pos1,
          pos2,
          i,
          m1,
          m2,
          id1,
          id2,
          id;

      if (p > 1) {
        while (p-- > 1) {
          pos1 = positions[p - 1];
          pos2 = positions[p];
          m1 = pos1[2];
          m2 = pos2[2];
          id1 = m1.id;
          id2 = m2.id;
          if (id1 === id2) continue;

          if (pos1[1] > pos2[0] && pos1[0] < pos2[1]) {
            if (id1 < id2) {
              id = id2;

              if (!postponed.includes(id)) {
                this.postpone(m2);
                postponed.push(id);
              }
            } else {
              id = id1;

              if (!postponed.includes(id)) {
                this.postpone(m1);
                postponed.push(id);
              }
            }
          }
        }

        p = postponed.length;

        for (i = 0; i < p; i++) {
          this.cutOutFor(postponed[i]);
        }
      }

      return this;
    }
  }, {
    key: "cutOutFor",
    value: function cutOutFor(id) {
      var positions = this.allPossibleStartPositions,
          p = positions.length;

      while (p--) {
        if (positions[p][2].id === id) this.allPossibleStartPositions.splice(p, 1);
      }
    }
  }, {
    key: "postpone",
    value: function postpone(mark) {
      var queue = this.queue,
          l = queue.length,
          alreadyIncluded = false;

      while (l--) {
        if (queue[l][0] === mark) {
          alreadyIncluded = true;
          break;
        }
      }

      if (!alreadyIncluded) this.queue.push([mark]);
    }
  }, {
    key: "findPossibleExtrema",
    value: function findPossibleExtrema() {
      var nodes = this.bodyTextNodes,
          n = nodes ? nodes.length : 0,
          indices = this.allPossibleStartPositions,
          phase = this.phase,
          cache = this.cache = [],
          satisfied = [],
          i = 0,
          chars = 0,
          nextStartFound,
          endingsInThisNode,
          node,
          nodesText,
          nodesTextLength,
          mark,
          diff,
          l,
          startPosition,
          endPosition,
          e,
          f,
          id,
          p,
          q,
          x,
          m,
          possibleFocusOffset,
          startFoundFor,
          postponed,
          hasEndingsInThisNode;

      for (; i < n; i++) {
        node = nodes[i];
        nodesText = this.squeeze(node.data);
        nodesTextLength = nodesText.length;
        chars += nodesTextLength;
        l = indices.length;
        startFoundFor = [];
        postponed = [];
        hasEndingsInThisNode = null;

        while (l--) {
          startPosition = indices[l][0];
          endPosition = indices[l][1];
          mark = indices[l][2];
          id = mark.id;
          mark.temp.startFoundFor = mark.temp.startFoundFor || [];
          mark.temp.endFoundFor = mark.temp.endFoundFor || [];

          if (!mark.temp.startFoundFor.includes(startPosition) && chars > startPosition && mark.temp.possibleStartNodes.length < mark.temp.possiblePositions.length) {
            if (hasEndingsInThisNode && hasEndingsInThisNode.id < mark.id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }

              indices.splice(l, 1);
              continue;
            } else {
              if (!this.satisfiesDescription(mark, node)) {
                if (phase === 1 && id !== 1) {
                  this.postpone(mark);
                  postponed.push(id);
                }

                indices.splice(l, 1);
                continue;
              } else {
                mark.temp.possibleStartNodes.push({
                  node: node,
                  pos: i
                });
                mark.temp.startFoundFor.push(startPosition);
                startFoundFor.push(id);
              }
            }
          }

          if (mark.temp.startFoundFor.includes(startPosition) && !mark.temp.endFoundFor.includes(endPosition) && chars - endPosition >= 0) {
            if (Math.min.apply(null, startFoundFor) < id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }

              indices.splice(l, 1);
            } else {
              possibleFocusOffset = this.findFocusOffset(mark, node, endPosition - (chars - nodesTextLength));
              mark.temp.possibleFocusOffsets.push(possibleFocusOffset);
              mark.temp.endFoundFor.push(endPosition);
              mark.temp.possibleEnds[startPosition] = {
                node: node,
                offset: possibleFocusOffset,
                pos: i
              };

              if (!satisfied.includes(id)) {
                cache.push(mark);
                satisfied.push(id);
              }

              hasEndingsInThisNode = mark;
              indices.splice(l, 1);
            }
          }
        }

        p = postponed.length;
        if (p) for (x = 0; x < p; x++) {
          this.cutOutFor(postponed[x]);
        }
        if (chars > this.maxPosition) break;
      }

      if (phase !== 1 || this.oom) {
        for (var _i = 0; _i < this.marks.length; _i++) {
          var _mark = this.marks[_i];

          if (!satisfied.includes(_mark.id)) {
            this.lost.push(_mark);
            this.failureReport[_mark.id] = {
              text: _mark.text,
              reason: browser.i18n.getMessage('note_restoration_failure_reason_2')
            };
          }
        }
      }

      return this;
    }
  }, {
    key: "ruleOutMultiples",
    value: function ruleOutMultiples() {
      var cache = this.cache,
          i = cache.length,
          mark,
          possibleStartNodes,
          p,
          node,
          parent,
          grampa,
          grandgrampa,
          grandgrandgrampa,
          matches,
          failed,
          q,
          possibleEnds,
          startFoundFor,
          conds,
          startOffset,
          temp,
          textLength,
          start;

      while (i--) {
        mark = cache[i];
        matches = [];
        failed = false;
        temp = mark.temp;
        possibleStartNodes = temp.possibleStartNodes;
        possibleEnds = temp.possibleEnds;
        startFoundFor = temp.startFoundFor;
        p = possibleStartNodes.length;
        conds = mark.conds;
        startOffset = conds.o;
        textLength = temp.textLength;

        if (p > 1) {
          while (p--) {
            node = possibleStartNodes[p].node;
            parent = node.parentNode.parentNode;
            grampa = parent.parentNode || 0;

            if (!grampa || conds.p3 === this.whichChild(grampa, parent)) {
              matches.push(p);
            }
          }

          if (!matches.length) p = 0;else {
            if (matches.length === 1) p = matches[0];else {
              p = undefined;

              while (matches.length) {
                q = matches.pop();
                parent = possibleStartNodes[q].node.parentNode;
                grampa = parent.parentNode || 0;
                grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0;
                grandgrandgrampa = grandgrampa && grandgrampa.parentNode ? grandgrampa.parentNode : 0;

                if ((!grandgrandgrampa || conds.p4 === this.whichChild(grandgrandgrampa, grandgrampa)) && possibleEnds[startFoundFor[q]].offset - startOffset === textLength) {
                  p = q;
                  break;
                }
              }

              if (!p) p = 0;
            }
          }
        } else p = 0;

        p = p || 0;
        start = mark.temp.possibleStartNodes[p];
        mark.temp.startNode = start.node;
        mark.temp.startNodePosition = start.pos;
        this.setMatchingEnd(mark, p);
      }

      return this;
    }
  }, {
    key: "setMatchingEnd",
    value: function setMatchingEnd(mark, p) {
      var startPosition = mark.temp.startFoundFor[p],
          end = mark.temp.possibleEnds[startPosition];
      mark.temp.endNode = end.node;
      mark.temp.endNodePosition = end.pos;
      mark.temp.focusOffset = end.offset;
    }
  }, {
    key: "satisfiesDescription",
    value: function satisfiesDescription(mark, node) {
      var description = mark.conds,
          parentNode = node.parentNode,
          grampa = parentNode.parentNode,
          grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0,
          startOffset = description.o,
          relevantNodeText = node.data.substring(startOffset).trim(),
          l = relevantNodeText.length,
          markText = mark.temp.trimmedText,
          m = mark.temp.trimmedTextLength,
          textsMatch;
      if (m <= l) textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;else textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;
      return textsMatch && (parentNode.nodeName === description.n1 || description.n1 === 'TM' && parentNode.hasAttribute('data-tm-id')) && (!grampa || grampa.nodeName === description.n2) && this.whichChild(parentNode, node) === description.p1;
    }
  }, {
    key: "findFocusOffset",
    value: function findFocusOffset(mark, node, n) {
      var nodeText = node.data,
          l = nodeText.length,
          i = 0,
          counter = 0;

      for (; i < l; i++) {
        if (this.squeeze(nodeText[i])) counter++;
        if (counter === n) return /\s$/.test(mark.text) ? i + 2 : i + 1;
      }
    }
  }, {
    key: "restoreRanges",
    value: function restoreRanges() {
      var _this5 = this;

      var range = document.createRange(),
          selection = this.selection,
          marks = this.cache,
          i = marks.length,
          mark,
          markTemp,
          start,
          end,
          focusOffset;

      while (i--) {
        mark = marks[i];
        markTemp = mark.temp;
        start = markTemp.startNode;
        end = markTemp.endNode;
        focusOffset = markTemp.focusOffset;

        if (!start || !end || !(typeof focusOffset === 'number')) {
          this.lost.push(mark);
          this.failureReport[mark.id] = {
            text: mark.text,
            reason: browser.i18n.getMessage('note_restoration_failure_reason_3')
          };
        } else {
          try {
            range.setStart(start, mark.conds.o);
            range.setEnd(end, focusOffset);
            selection.self.removeAllRanges();
            selection.self.addRange(range); //selection.resume(range);

            this.emit('restored:range', mark);
            delete mark.synced;
            this.restored.push(mark);
            selection.recollectNodes(mark);
          } catch (e) {
            this.lost.push(mark);
            setTimeout(function () {
              return _this5.emit('failed:restore-range', e.toString());
            }, 0);
          }

          delete mark.temp;
        }
      }
    }
  }, {
    key: "setBodySelection",
    value: function setBodySelection(el) {
      this.selectionTrial++;

      if (this.phase === 1) {
        this.selection = new _selection.default(el);

        if (!this.selection.text) {
          if (this.selectionTrial < 4) {
            return this.setBodySelection(el);
          } else {
            this.trimmedSelectionText = ' ';
            this.bodyTextNodes = [];
            return this;
          }
        }

        this.trimmedSelectionText = this.squeeze(this.selection.text);
      }

      this.bodyTextNodes = this.selection.nodes ? this.selection.nodes.slice() : [];
      return this;
    }
  }, {
    key: "squeeze",
    value: function squeeze(text) {
      return typeof text === 'string' ? text.replace(/\t|\s|\n|\r/g, '') : undefined;
    }
  }, {
    key: "whichChild",
    value: function whichChild(parent, child, context) {
      if (!parent || !child) return null;
      var children = child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          pos = 0,
          i = 0,
          currentChild;

      for (; i < c; i++) {
        currentChild = children[i];
        if (currentChild === child) return pos;

        if (context) {
          if (currentChild.nodeName === context) pos++;
        } else {
          if (!(currentChild.nodeType === 3 && !currentChild.data)) pos++;
        }
      }
    }
  }, {
    key: "timer",
    get: function get() {
      var timer = this._timer;
      this._timer = +new Date() + this.chunkDuration;
      return timer;
    }
  }]);

  return Restorer;
}(RestorerBase);

var ImmutRestorer =
/*#__PURE__*/
function (_RestorerBase2) {
  _inherits(ImmutRestorer, _RestorerBase2);

  function ImmutRestorer(entry) {
    var _this6;

    _classCallCheck(this, ImmutRestorer);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutRestorer).call(this, entry));
    _this6.selection = window.getSelection();
    _this6.range = document.createRange();

    var marks = _this6.marks = _toConsumableArray(entry.marks.sort(function (m1, m2) {
      return m1.id - m2.id;
    }));

    _this6.processInChunks(marks, _this6.restoreRange, _this6.report);

    return _this6;
  }

  _createClass(ImmutRestorer, [{
    key: "restoreRange",
    value: function restoreRange(mark) {
      var _this7 = this;

      if (this.canceled) return this.marks = [];
      var conds = mark.conds;
      var start = conds.s;
      var end = conds.e;
      var selection = this.selection;
      var range = this.range;

      try {
        range.setStart(this.getNode(start.p), start.o);
        range.setEnd(this.getNode(end.p), end.o);
        selection.removeAllRanges();
        selection.addRange(range);
        this.emit('restored:range', mark);
        delete mark.synced;
        this.restored.push(mark);
      } catch (e) {
        this.lost.push(mark);
        setTimeout(function () {
          return _this7.emit('failed:restore-range', e.toString());
        }, 0);
      }
    }
  }, {
    key: "getNode",
    value: function getNode(position) {
      var textNodePosition = position[0];
      var node = document.body,
          l = position.length;

      while (l-- > 1) {
        node = node.children[position[l]];
      }

      return node.childNodes[textNodePosition];
    }
  }]);

  return ImmutRestorer;
}(RestorerBase);

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'restore:marks': 'restore',
        'lost:marks': 'onFailure',
        'finished:restoration': 'onFinishedRestoration',
        'resumed:markers': 'retry'
      }
    },
    entries: null,
    count: 0,
    restored: 0,
    failed: 0,
    failureReport: {},
    restore: function restore(entries) {
      if (!entries) return;
      if (!Array.isArray(entries)) entries = [entries];
      this.entries = entries;
      this.count = entries.length;
      entries.forEach(function (entry) {
        if (entry.immut) new ImmutRestorer(entry);else new Restorer(entry);
      });
    },
    resume: function resume() {
      this.restored = 0;
      this.failed = 0;
      this.failureReport = {};
    },
    retry: function retry(entry) {
      entry = entry ? [entry] : this.entries;
      this.resume();
      this.restore(entry);
    },
    onFailure: function onFailure(report) {
      this.failed++;

      for (var i in report) {
        this.failureReport[i] = report[i];
      }
    },
    onFinishedRestoration: function onFinishedRestoration() {
      if (++this.restored === this.count) {
        this.emit('finished:all-restorations');
        if (this.failed) this.emit('failed:restoration', this.getReport());else this.emit('succeeded:restoration');
      }
    },
    getReport: function getReport() {
      var report = this.failureReport;
      var msg = '';

      for (var i in report) {
        msg += "".concat(report[i].reason, " : ").concat(report[i].text, "\n");
      }

      return msg;
    }
  });
}

/***/ }),

/***/ "./content/page-injections/modules/selection.js":
/*!******************************************************!*\
  !*** ./content/page-injections/modules/selection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _SELECTION =
/*#__PURE__*/
function () {
  function _SELECTION(node, options) {
    _classCallCheck(this, _SELECTION);

    this.options = options || {};
    var selection = this.self = window.getSelection();
    if (selection.rangeCount) this.range = selection.getRangeAt(0);

    if (node || !selection.isCollapsed) {
      if (node) {
        this.defined = node;
        this.create(node).reduceToOneRange().update().collectNodes(true).retrieveText();
      } else {
        this.collectNodes().reduceToOneRange().update().adjust().update().retrieveText();
      }

      try {
        selection.collapseToStart();
      } catch (e) {}
    }
  }

  _createClass(_SELECTION, [{
    key: "create",
    value: function create(node) {
      this.self.selectAllChildren(node);
      return this;
    }
  }, {
    key: "update",
    value: function update(selection) {
      if (selection) this.self = selection;else selection = this.self;
      var props = ['focusNode', 'anchorNode', 'focusOffset', 'anchorOffset'],
          i = props.length;

      while (i--) {
        this[props[i]] = selection[props[i]];
      }

      this.range = selection.getRangeAt(0);
      this.simple = this.isSimple();
      return this;
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var selection = this.self,
          anchor = this.anchorNode,
          focus = this.focusNode;
      if (this.isBackwards(anchor, focus)) this.reverse(anchor, focus);else this.normalize(anchor, focus);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize(anchor, focus) {
      var selection = this.self,
          range = this.range,
          firstTextNode = this.nodes[0],
          lastTextNode = this.nodes[this.nodes.length - 1];
      if (firstTextNode !== anchor) range.setStart(firstTextNode, firstTextNode.data.length - firstTextNode.data.trimLeft().length);
      if (lastTextNode !== focus) range.setEnd(lastTextNode, lastTextNode.data.length - (lastTextNode.data.length - lastTextNode.data.trimRight().length));
    }
  }, {
    key: "collectNodes",
    value: function collectNodes(wholeDocument) {
      var self = this,
          selection = this.self,
          range = this.range,
          container = wholeDocument ? window.document.body : this.getCommonAncestorContainer(),
          filter = wholeDocument ? function (node) {
        return self.isSelectable(node) && !self.isBlank(node) && self.hasNormalParent(node);
      } : function (node) {
        return selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(node);
      },
          iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
        acceptNode: function acceptNode(node) {
          return filter(node);
        }
      }, false),
          tempRange = document.createRange(),
          nodes = [],
          parentNodes = [],
          textNode,
          parent,
          firstNode,
          lastNode;

      while (textNode = iterator.nextNode()) {
        nodes.push(textNode);
      }

      nodes = this.trimSelection(nodes);
      this.nodes = this.options.programmatically ? this.reduceToSelectable(nodes) : nodes;
      this.parentNodes = this.collectParentNodes(this.nodes);
      return this;
    }
  }, {
    key: "recollectNodes",
    value: function recollectNodes(mark) {
      var _this$nodes;

      var markWrappers = Array.from(document.querySelectorAll('[data-tm-id^="' + mark.id + '_"]'));
      var m = markWrappers.length;
      var newSegment = markWrappers.map(function (el) {
        return el.firstChild;
      });
      var prev = markWrappers[0].previousSibling;
      var next = markWrappers[m - 1].nextSibling;
      var start = mark.temp.startNodePosition;
      var end = mark.temp.endNodePosition;

      if (prev && prev.nodeType === 3) {
        newSegment.unshift(prev);
      }

      if (next && next.nodeType === 3) {
        newSegment.push(next);
      }

      (_this$nodes = this.nodes).splice.apply(_this$nodes, [start, end - start + 1].concat(_toConsumableArray(newSegment)));
    }
  }, {
    key: "trimSelection",
    value: function trimSelection(nodes) {
      var selection = this.self;
      var firstNode, lastNode;

      if (nodes.length > 1) {
        firstNode = nodes[0];

        if (selection.anchorNode === firstNode && firstNode.data.trimRight().length <= selection.anchorOffset) {
          nodes.shift();
        }

        lastNode = nodes[nodes.length - 1];

        if (selection.focusNode === lastNode && this.isBlank(lastNode.data.substr(0, selection.focusOffset))) {
          nodes.pop();
        }
      }

      return nodes;
    }
  }, {
    key: "reduceToSelectable",
    value: function reduceToSelectable(nodes) {
      var sel = this.self;
      var rg = document.createRange();
      sel.removeAllRanges();
      sel.addRange(rg);
      nodes = nodes.filter(function (node) {
        rg.selectNode(node);
        return !!sel.toString();
      });
      sel.removeAllRanges();
      sel.addRange(this.range);
      return nodes;
    }
  }, {
    key: "collectParentNodes",
    value: function collectParentNodes(nodes) {
      var l = nodes.length,
          parents = [],
          i = 0;

      for (; i < l; i++) {
        parents.push(nodes[i].parentNode);
      }

      return parents;
    }
  }, {
    key: "retrieveText",
    value: function retrieveText() {
      var range = this.range,
          nodes = this.nodes,
          l = nodes.length,
          i = 0,
          nodeTexts = [],
          text;

      for (; i < l; i++) {
        nodeTexts.push(nodes[i].data);
      }

      l -= 1;

      if (nodeTexts.length) {
        if (this.simple) {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);
        } else {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
          //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
          nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : range.endOffset);
        }

        text = this.text = nodeTexts.join('');
      }

      return this;
    }
  }, {
    key: "getCommonAncestorContainer",
    value: function getCommonAncestorContainer() {
      var selection = this.self,
          node1 = selection.anchorNode,
          node2 = selection.focusNode;

      while (node1 = node1.parentNode) {
        if ((node1.compareDocumentPosition(node2) & 0x10) === 0x10) return node1;
      }

      return window.document.body;
    }
  }, {
    key: "reverse",
    value: function reverse(anchor, focus) {
      var range = window.document.createRange(),
          selection = this.self;
      range.setStart(focus, selection.focusOffset);
      range.setEnd(anchor, selection.anchorOffset);
      selection.removeAllRanges();
      selection.addRange(range);
      this.update(selection).adjust(selection.anchorNode, selection.focusNode);
    }
  }, {
    key: "reduceToOneRange",
    value: function reduceToOneRange() {
      var selection = this.self,
          rangeCount = selection.rangeCount,
          range0 = this.range,
          lastRange;
      if (rangeCount < 2) return this;
      lastRange = selection.getRangeAt(rangeCount - 1);
      range0.setStart(range0.startContainer, range0.startOffset);
      range0.setEnd(lastRange.endContainer, lastRange.endOffset);
      selection.removeAllRanges();
      selection.addRange(range0);
      return this;
    }
  }, {
    key: "hasNormalParent",
    value: function hasNormalParent(node) {
      var parent = node.parentNode;
      var tag = parent.tagName.toUpperCase();
      return tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' && tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' && tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' && tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' && tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' && tag !== 'MATH' && tag !== 'OBJECT' && !this.isChildOf(parent, 'svg') //&&
      //!this.isChildOf(parent, 'math')
      ;
    }
  }, {
    key: "isChildOf",
    value: function isChildOf(node, nodeType) {
      while (node) {
        if (node.nodeName === nodeType) return true;
        node = node.parentNode;
      }

      return false;
    }
  }, {
    key: "isBlank",
    value: function isBlank(node) {
      var text;
      if (typeof node === 'string') text = node;else {
        if (node && typeof node.data === 'string') text = node.data;else text = this.text;
      }
      return text.search(/[^\s\n\r\t]/g) === -1;
    }
  }, {
    key: "isBackwards",
    value: function isBackwards(anchor, focus) {
      var selection = this.self,
          position = anchor.compareDocumentPosition(focus);
      return position === 2 || position === 10 || !position && selection.anchorOffset > selection.focusOffset;
    }
  }, {
    key: "isSimple",
    value: function isSimple() {
      var selection = this.self,
          anchorNode = selection.anchorNode,
          focusNode = selection.focusNode;
      return anchorNode === focusNode && anchorNode.nodeType === 3 && (!anchorNode.nextSibling || anchorNode.nextSibling.compareDocumentPosition(focusNode) !== 4);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      this.range.selectNode(node);
      return !!this.self.toString();
    }
  }]);

  return _SELECTION;
}();

exports.default = _SELECTION;

/***/ }),

/***/ "./content/page-injections/modules/tmui.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/tmui.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(mark) {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:misc-settings': 'updateState',
        'added:note': 'onNoteAdded',
        'added:bookmark': 'onBookmarkAdded',
        'removed:last-note': 'onLastNoteRemoved',
        'removed:bookmark': 'onBookmarkRemoved'
      }
    },
    addListenersManually: true,
    el: null,
    attached: false,
    buttons: {
      notes: {
        el: null,
        show: false,
        shown: false
      },
      bookmark: {
        el: null,
        show: false,
        shown: false
      }
    },
    bookmark: false,
    notes: false,
    autoinit: function autoinit() {
      this.createButtons();
      this.updateState();
    },
    updateState: function updateState() {
      var _this = this;

      _store.default.get('bmicon').then(function (bmicon) {
        _this.buttons.bookmark.show = bmicon;
        return _store.default.get('noteicon').then(function (noteicon) {
          return _this.buttons.notes.show = noteicon;
        });
      }).then(function () {
        return _this.update();
      });
    },
    update: function update() {
      var shouldAttach = this.buttons.bookmark.show && this.bookmark || this.buttons.notes.show && this.notes;

      if (shouldAttach) {
        this.render();
      } else if (this.attached && !shouldAttach) {
        this.remove();
      }
    },
    render: function render() {
      var buttons = this.buttons,
          btn;

      if (!this.attached) {
        var el = this.el = window.document.createElement('tmui');
        window.document.body.appendChild(el);
      }

      for (var b in buttons) {
        btn = buttons[b];
        if (btn.show && !btn.shown && this[b]) this.addButton(b);else if (btn.shown && (!this[b] || !btn.show)) this.removeButton(b);
      }

      if (!buttons.notes.shown && !buttons.bookmark.shown) {
        this.remove();
      } else {
        this.updatePosition();
        this.addListeners();
      }

      this.attached = true;
    },
    remove: function remove() {
      if (this.attached) {
        var tmui = this.el;
        var buttons = this.buttons;

        for (var b in buttons) {
          if (buttons[b].shown) {
            this.removeButton(b);
          }
        }

        window.document.body.removeChild(tmui);
        this.attached = false;
      }
    },
    createButtons: function createButtons() {
      var notesButton = this.buttons.notes.el = window.document.createElement('tmnotestoggle');
      var bookmarkButton = this.buttons.bookmark.el = window.document.createElement('tmbm');
      notesButton.title = browser.i18n.getMessage('toggle_notes');
      bookmarkButton.title = browser.i18n.getMessage('bm_scroll');
    },
    addButton: function addButton(type) {
      var tmui = this.el;
      var btn = this.buttons[type];
      var self = this;
      var handler = btn.handler = type === 'notes' ? this.toggleNotes.bind(this) : this.scrollToBookmark.bind(this);
      tmui.appendChild(btn.el);
      btn.shown = true;
      btn.el.addEventListener('click', handler, false);
    },
    removeButton: function removeButton(type) {
      var tmui = this.el;
      var btn = this.buttons[type];
      tmui.removeChild(btn.el);
      btn.shown = false;
      btn.el.removeEventListener('click', btn.handler, false);
    },
    updatePosition: function updatePosition() {
      var _this2 = this;

      _store.default.get('tmuipos').then(function (pos) {
        return _this2.el.setAttribute('style', pos.split('-').map(function (p) {
          return p + ':1px;';
        }).join(' '));
      });
    },
    onNoteAdded: function onNoteAdded() {
      this.notes = true;
      this.update();
    },
    onLastNoteRemoved: function onLastNoteRemoved() {
      this.notes = false;
      this.update();
    },
    onBookmarkAdded: function onBookmarkAdded() {
      this.bookmark = true;
      this.update();
    },
    onBookmarkRemoved: function onBookmarkRemoved() {
      this.bookmark = false;
      this.update();
    },
    toggleNotes: function toggleNotes() {
      this.emit('toggle:notes');
    },
    scrollToBookmark: function scrollToBookmark() {
      this.emit('scroll-to-bookmark');
    }
  });
}

/***/ }),

/***/ "./content/page-injections/port.js":
/*!*****************************************!*\
  !*** ./content/page-injections/port.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['finished:restoration', 'failed:restoration', 'succeeded:restoration', 'canceled:restoration', 'failed:restore-range', 'canceled:save-after-canceled-restoration', 'copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'activated:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'warn:mixed-entry-types', 'warn:multiple-unlocked-entries', 'page-state', 'notes-state', 'visually-ordered:marks']
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/page-injections/sass/index.scss":
/*!*************************************************!*\
  !*** ./content/page-injections/sass/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/global-settings.js":
/*!*********************************!*\
  !*** ./data/global-settings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  MAX_ENTRY_NAME_CHARS: 70,
  MAX_LOG_ENTRIES: 20,
  NOTE_COLORS: {
    TURQUOISE: '#b9e4ec',
    GREEN: '#ccffcc',
    YELLOW: '#ffffcc',
    ORANGE: '#ffeebb',
    RED: '#ffcccc',
    PURPLE: '#eeccff',
    BLUE: '#bbeeff',
    WHITE: '#eeeeee'
  }
};
exports.default = _default;

/***/ }),

/***/ "./utils/copy.js":
/*!***********************!*\
  !*** ./utils/copy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._COPY = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _COPY = function _COPY(src) {
  var target = Array.isArray(src) ? [] : {};
  var val;

  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      val = src[prop];

      if (val !== null && _typeof(val) === 'object') {
        target[prop] = _COPY(val);
      } else target[prop] = val;
    }
  }

  return target;
};

exports._COPY = _COPY;

/***/ }),

/***/ "./utils/dommodule.js":
/*!****************************!*\
  !*** ./utils/dommodule.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _DOMMODULE =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_DOMMODULE).call(this, obj));
    _this.addListenersManually || _this.addListeners();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: "generalHandler",
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector,
          _sel,
          meth,
          f,
          isId,
          isClass,
          isDoc;

      for (selector in subMap) {
        f = selector[0];
        _sel = selector;
        isId = f === '#';
        isClass = f === '.';
        isDoc = f === '*';
        if (isId || isClass) selector = selector.substr(1);

        if (isDoc || isClass && el.classList.contains(selector) || isId && el.id === selector || el.nodeName.toLowerCase() === selector) {
          meth = subMap[_sel];
          if (typeof meth === 'function') meth(e, el);else if (this[meth]) this[meth](e, el);
          break;
        }
      }
    }
  }, {
    key: "addListener",
    value: function addListener(type, meth, el) {
      el = el || this.el;
      var handler = typeof meth === 'function' ? meth : this[meth];
      el.addEventListener(type, handler, false);

      if (el === this.el) {
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      } else {
        this._extraBound.push([el, type, handler]);
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var events = this.events,
          domEvents,
          el,
          subMap,
          type,
          handler;
      if (!events || !(domEvents = events.DOM) || !(el = this.el)) return false;

      for (type in domEvents) {
        subMap = domEvents[type];
        handler = this.proxy(this, this.generalHandler, subMap, type);
        el.addEventListener(type, handler, false);
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var type, _bound, l;

      for (type in this._bound) {
        _bound = this._bound[type];
        l = _bound.length;

        while (l--) {
          this.el.removeEventListener(type, _bound[l], false);

          _bound.splice(l, 1);
        }
      }

      var _extra = this._extraBound,
          i = 0,
          set;
      l = _extra.length;

      for (; i < l; i++) {
        set = _extra[i];
        set[0].removeEventListener(set[1], set[2], false);
      }
    }
  }]);

  return _DOMMODULE;
}(_module._MODULE);

exports._DOMMODULE = _DOMMODULE;

/***/ }),

/***/ "./utils/error-tracker.js":
/*!********************************!*\
  !*** ./utils/error-tracker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _ERRORTRACKER = new _module._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    window.addEventListener('error', function (error) {
      var file = error.filename.split('/').pop();

      if (['sidebar.wp.js', 'tbb-menu.wp.js', 'options.wp.js', 'addon-page.wp.js'].includes(file)) {
        _this.emit('error:browser-console', {
          message: error.message,
          location: error.filename.split('/').pop().split('.').shift() + ':' + error.lineno + ':' + error.colno,
          time: new Date().getTime()
        });
      }
    }, false);
  }
});

var _default = _ERRORTRACKER;
exports.default = _default;

/***/ }),

/***/ "./utils/extend.js":
/*!*************************!*\
  !*** ./utils/extend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
}

/***/ }),

/***/ "./utils/getActiveTab.js":
/*!*******************************!*\
  !*** ./utils/getActiveTab.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._GET_ACTIVE_TAB = void 0;

var _GET_ACTIVE_TAB = function _GET_ACTIVE_TAB() {
  return browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

/***/ }),

/***/ "./utils/hashless.js":
/*!***************************!*\
  !*** ./utils/hashless.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._HASHLESS = void 0;

var _HASHLESS = function _HASHLESS(url) {
  var h = url.lastIndexOf('#');
  if (h === -1) return url;else return url.substr(0, h);
};

exports._HASHLESS = _HASHLESS;

/***/ }),

/***/ "./utils/l10n.js":
/*!***********************!*\
  !*** ./utils/l10n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/*
* Translates a HTMl page in the web l10n style from the Add-on SDK with WebExtensions strings.
* Modified by underflyingbirches
*
* @author Martin Giger
* @see {@link https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953}
* @license MPL-2.0
*/
function translateDocument() {
  var el, data, dataset; // Set the language attribute of the document.

  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-')); // Get all elements that are marked as being translateable.

  var textElements = document.querySelectorAll('*[data-l10n-id]');
  var attrElements = document.querySelectorAll('*[data-l10n-attr]');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      el = _step.value;
      dataset = el.dataset;
      var l10nId = dataset.l10nId;

      if (l10nId) {
        data = browser.i18n.getMessage(l10nId);

        if (data && data != '??') {
          el.textContent = data;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = attrElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      el = _step2.value;
      dataset = el.dataset;
      ['Title', 'Placeholder'].forEach(function (attr) {
        var l10nAttr = dataset['l10n' + attr];

        if (l10nAttr) {
          data = browser.i18n.getMessage(l10nAttr);

          if (data && data != '??') {
            el.setAttribute(attr.toLowerCase(), data);
          }
        }
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function _default() {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
}

/***/ }),

/***/ "./utils/mediator.js":
/*!***************************!*\
  !*** ./utils/mediator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var topics = {};

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "on",
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];
      topics[event].push(handler);
    }
  }, {
    key: "emit",
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');
      var i = 0,
          l = events.length,
          topic;

      for (; i < l; i++) {
        topic = topics[events[i]];
        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: "request",
    value: function request(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({
        ev: event,
        args: args,
        wait: true
      }).catch(function () {});
    }
  }, {
    key: "proxy",
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _default;
}();

exports.default = _default;

/***/ }),

/***/ "./utils/module.js":
/*!*************************!*\
  !*** ./utils/module.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = void 0;

var _mediator = _interopRequireDefault(__webpack_require__(/*! ./mediator */ "./utils/mediator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _MODULE =
/*#__PURE__*/
function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_MODULE).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }

    var events = _this.events,
        envEvents,
        o,
        e,
        handler;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator.default);

exports._MODULE = _MODULE;

/***/ }),

/***/ "./utils/port.js":
/*!***********************!*\
  !*** ./utils/port.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _PORT =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.passMessage));
    if (type === 'privileged' || type === 'background') _this.initPorting();
    var events = _this.events,
        oneOffEvents,
        connectionBasedEvents;

    if (events) {
      oneOffEvents = events.ONEOFF;

      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      connectionBasedEvents = events.CONNECTION;

      if (connectionBasedEvents) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = connectionBasedEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var f = _step2.value;

            _this.on(f, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }

    return _this;
  }

  _createClass(_PORT, [{
    key: "passMessage",
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called

      return false;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        var tab;

        if (lastArg !== undefined && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _tab = _step3.value;
                  browser.tabs.sendMessage(_tab.id, msg).catch(function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
          }
        } else {
          browser.tabs.query({
            /* currentWindow: false, active: false */
          }).then(function (tabs) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _tab2 = _step4.value;
                browser.tabs.sendMessage(_tab2.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: "initPorting",
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({
        name: this.name
      });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: "addConnectionListeners",
    value: function addConnectionListeners(cb) {
      var _this3 = this;

      browser.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(_this3.proxy(_this3, _this3.passMessage));
        !cb || cb();
      });
    }
  }]);

  return _PORT;
}(_module._MODULE);

exports._PORT = _PORT;

/***/ })

/******/ });