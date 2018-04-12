(function (_, Kotlin, $module$kotlin_react, $module$react, $module$kotlinx_html_js, $module$kotlin_extensions, $module$react_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_key = $module$kotlin_react.react.get_key_yllgzm$;
  var set_key = $module$kotlin_react.react.set_key_38rnt0$;
  var set_ref = $module$kotlin_react.react.set_ref_7rqu$;
  var RBuilderMultiple = $module$kotlin_react.react.RBuilderMultiple;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var render = $module$react_dom.render;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  RDOMBuilder.prototype = Object.create(RBuilderMultiple.prototype);
  RDOMBuilder.prototype.constructor = RDOMBuilder;
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'InnerHTML', interfaces: []};
  function RDOMBuilder(factory) {
    RBuilderMultiple.call(this);
    this.consumer = new RDOMBuilder$consumer$ObjectLiteral(this);
    this.attrs = factory(this.consumer);
    var obj = {};
    this.props = obj;
    var tmp$;
    tmp$ = this.attrs.attributesEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setProp_4w9ihe$(element.key, element.value);
    }
  }
  RDOMBuilder.prototype.setProp_4w9ihe$ = function (attribute, value) {
    var key = fixAttributeName(attribute);
    this.props[key] = value;
  };
  RDOMBuilder.prototype.attrs_1wdtl9$ = defineInlineFunction('kotlin-react-dom.react.dom.RDOMBuilder.attrs_1wdtl9$', function (handler) {
    handler(this.attrs);
  });
  Object.defineProperty(RDOMBuilder.prototype, 'key', {get: function () {
    return get_key(this.props);
  }, set: function (value) {
    set_key(this.props, value);
  }});
  RDOMBuilder.prototype.ref_5ij4lk$ = function (handler) {
    set_ref(this.props, handler);
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RDOMBuilder.prototype.create = function () {
    var tmp$;
    return (tmp$ = $module$react).createElement.apply(tmp$, [this.attrs.tagName, this.props].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$consumer$ObjectLiteral(this$RDOMBuilder) {
    this.this$RDOMBuilder = this$RDOMBuilder;
  }
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(attribute, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilder.childList.add_11rb$(content);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilder.childList.add_11rb$(entity.text);
  };
  function RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_gw00v9$($receiver);
  };
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Unsafe]};
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = new StringBuilder();
    block(new RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    this.this$RDOMBuilder.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw new IllegalStateException("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw new IllegalStateException("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(event, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilder$consumer$ObjectLiteral.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [TagConsumer]};
  RDOMBuilder.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RDOMBuilder', interfaces: [RBuilderMultiple]};
  var RBuilderSingle_init = $module$kotlin_react.react.RBuilderSingle;
  function render_0(container, handler) {
    var $receiver = new RBuilderSingle_init();
    handler($receiver);
    render($receiver.result, container);
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'StringAttr', interfaces: []};
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }
    return StringAttr_instance;
  }
  var key;
  var defaultValue;
  var defaultValue_0;
  var value;
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.InnerHTML = InnerHTML;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$dom.RDOMBuilder = RDOMBuilder;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  package$dom.render_4s0l5f$ = render_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {get: StringAttr_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  var $receiver_0 = toMutableMap(toMap(destination));
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  return _;
}(module.exports, require('kotlin'), require('kotlin-react'), require('react'), require('kotlinx-html-js'), require('kotlin-extensions'), require('react-dom')));

//# sourceMappingURL=kotlin-react-dom.js.map
