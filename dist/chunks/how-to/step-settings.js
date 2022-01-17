(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/how-to/step-settings"],{

/***/ "./blocks-config/utils/Helpers.js":
/*!****************************************!*\
  !*** ./blocks-config/utils/Helpers.js ***!
  \****************************************/
/*! exports provided: getImageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return getImageSize; });
/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */
function getImageSize(sizes) {
  const sizeArr = [];

  for (const size in sizes) {
    if (sizes.hasOwnProperty(size)) {
      const p = {
        value: size,
        label: size
      };
      sizeArr.push(p);
    }
  }

  return sizeArr;
}

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\prop-types\\index.js'");

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webfontloader\\webfontloader.js'");

/***/ }),

/***/ "./src/blocks/how-to/child-blocks/step/settings.js":
/*!*********************************************************!*\
  !*** ./src/blocks/how-to/child-blocks/step/settings.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Components_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");











let imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];


const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    url,
    urlType,
    image,
    imageSize,
    urlText,
    urlFontSize,
    urlFontSizeType,
    urlFontSizeMobile,
    urlFontSizeTablet,
    urlFontFamily,
    urlFontWeight,
    urlLoadGoogleFonts,
    titleFontSize,
    titleFontSizeType,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontFamily,
    titleFontWeight,
    titleLoadGoogleFonts,
    descriptionFontSize,
    descriptionFontSizeType,
    descriptionFontSizeMobile,
    descriptionFontSizeTablet,
    descriptionFontFamily,
    descriptionFontWeight,
    descriptionLoadGoogleFonts,
    urlTarget,
    imgPosition,
    titleColor,
    descriptionColor,
    urlColor,
    urlFontStyle,
    urlTransform,
    urlDecoration,
    titleFontStyle,
    titleTransform,
    titleDecoration,
    descriptionFontStyle,
    descriptionTransform,
    descriptionDecoration
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        image: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        image: null
      });
      return;
    }

    if (media.sizes) {
      imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_9__["getImageSize"])(media.sizes);
    }

    setAttributes({
      image: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      image: ''
    });
  };

  imageSizeOptions.map(item => {
    item.label = item.label.replace(/\w/, firstLetter => firstLetter.toUpperCase());
    return item;
  });
  let loadUrlGoogleFonts;
  let loadTitleGoogleFonts;
  let loadDescriptionGoogleFonts;

  if (true === urlLoadGoogleFonts) {
    const uconfig = {
      google: {
        families: [urlFontFamily + (urlFontWeight ? ':' + urlFontWeight : '')]
      }
    };
    loadUrlGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: uconfig
    });
  }

  if (true === titleLoadGoogleFonts) {
    const tconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: tconfig
    });
  }

  if (true === descriptionLoadGoogleFonts) {
    const dconfig = {
      google: {
        families: [descriptionFontFamily + (descriptionFontWeight ? ':' + descriptionFontWeight : '')]
      }
    };
    loadDescriptionGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: dconfig
    });
  }

  const imageControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      initialOpen: true,
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onSelectImage: onSelectImage,
      backgroundImage: image,
      onRemoveImage: onRemoveImage
    }), image && image.url !== 'null' && image.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: value => setAttributes({
        imageSize: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Position'),
      value: imgPosition,
      onChange: value => setAttributes({
        imgPosition: value
      }),
      options: [{
        value: 'above-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Above Title')
      }, {
        value: 'left-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left of Title')
      }, {
        value: 'right-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right of Title')
      }]
    })));
  };

  const urlControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Link'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type'),
      value: urlType,
      onChange: value => setAttributes({
        urlType: value
      }),
      options: [{
        value: 'text',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text')
      }, {
        value: 'all',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Complete Box')
      }]
    }), urlType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text'),
      value: urlText,
      onChange: value => setAttributes({
        urlText: value
      })
    })), urlType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link'),
      value: url,
      onChange: value => setAttributes({
        url: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new Window'),
      checked: urlTarget,
      onChange: () => setAttributes({
        urlTarget: !urlTarget
      })
    })));
  };

  const linkStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: urlLoadGoogleFonts,
        label: 'urlLoadGoogleFonts'
      },
      fontFamily: {
        value: urlFontFamily,
        label: 'urlFontFamily'
      },
      fontWeight: {
        value: urlFontWeight,
        label: 'urlFontWeight'
      },
      fontStyle: {
        value: urlFontStyle,
        label: 'urlFontStyle'
      },
      transform: {
        value: urlTransform,
        label: 'urlTransform'
      },
      decoration: {
        value: urlDecoration,
        label: 'urlDecoration'
      },
      fontSizeType: {
        value: urlFontSizeType,
        label: 'urlFontSizeType'
      },
      fontSize: {
        value: urlFontSize,
        label: 'urlFontSize'
      },
      fontSizeMobile: {
        value: urlFontSizeMobile,
        label: 'urlFontSizeMobile'
      },
      fontSizeTablet: {
        value: urlFontSizeTablet,
        label: 'urlFontSizeTablet'
      },
      disableLineHeight: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: urlColor ? urlColor : '',
      onColorChange: value => setAttributes({
        urlColor: value
      })
    }));
  };

  const titleStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      disableLineHeight: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      onColorChange: value => setAttributes({
        titleColor: value
      })
    }));
  };

  const descriptionStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Description'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: descriptionLoadGoogleFonts,
        label: 'descriptionLoadGoogleFonts'
      },
      fontFamily: {
        value: descriptionFontFamily,
        label: 'descriptionFontFamily'
      },
      fontWeight: {
        value: descriptionFontWeight,
        label: 'descriptionFontWeight'
      },
      fontStyle: {
        value: descriptionFontStyle,
        label: 'descriptionFontStyle'
      },
      transform: {
        value: descriptionTransform,
        label: 'descriptionTransform'
      },
      decoration: {
        value: descriptionDecoration,
        label: 'descriptionDecoration'
      },
      fontSizeType: {
        value: descriptionFontSizeType,
        label: 'descriptionFontSizeType'
      },
      fontSize: {
        value: descriptionFontSize,
        label: 'descriptionFontSize'
      },
      fontSizeMobile: {
        value: descriptionFontSizeMobile,
        label: 'descriptionFontSizeMobile'
      },
      fontSizeTablet: {
        value: descriptionFontSizeTablet,
        label: 'descriptionFontSizeTablet'
      },
      disableLineHeight: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descriptionColor ? descriptionColor : '',
      onColorChange: value => setAttributes({
        descriptionColor: value
      })
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["UAGTabs"].general, imageControls(), urlControls()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["UAGTabs"].style, titleStyle(), descriptionStyle(), urlType === 'text' && linkStyle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_3__["UAGTabs"].advance))), loadUrlGoogleFonts, loadTitleGoogleFonts, loadDescriptionGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\babel-loader\\lib\\index.js'\n    at Object.openSync (fs.js:498:3)\n    at Object.readFileSync (fs.js:394:35)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1099:18)\n    at Module.load (internal/modules/cjs/loader.js:937:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\n    at Module.require (internal/modules/cjs/loader.js:961:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at loadLoader (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)");

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=step-settings.js.map