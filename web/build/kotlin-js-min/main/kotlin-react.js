(function (_, Kotlin, $module$react, $module$kotlin_extensions) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var React$Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var React$Component = $module$react.Component;
  RBuilderMultiple.prototype = Object.create(RBuilder.prototype);
  RBuilderMultiple.prototype.constructor = RBuilderMultiple;
  RBuilderSingle.prototype = Object.create(RBuilder.prototype);
  RBuilderSingle.prototype.constructor = RBuilderSingle;
  RElementBuilder.prototype = Object.create(RBuilderMultiple.prototype);
  RElementBuilder.prototype.constructor = RElementBuilder;
  RComponent.prototype = Object.create(React$Component.prototype);
  RComponent.prototype.constructor = RComponent;
  function RBuilder() {
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    var tmp$;
    return this.child_2usv9w$((tmp$ = $module$react).createElement.apply(tmp$, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = new RElementBuilder(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    var tmp$ = this.child_4dvv5y$;
    var obj = {};
    return tmp$.call(this, $receiver, obj, handler);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.child_drr62v$ = function (klazz, handler) {
    var tmp$;
    var rClass = Kotlin.isType(tmp$ = get_js(klazz), Object) ? tmp$ : Kotlin.throwCCE();
    return this.invoke_eb8iu4$(rClass, handler);
  };
  RBuilder.prototype.child_ops9p9$ = defineInlineFunction('kotlin-react.react.RBuilder.child_ops9p9$', function (C_0, isC, handler) {
    return this.child_drr62v$(Kotlin.getKClass(C_0), handler);
  });
  RBuilder.prototype.node_nvhxy3$ = function (klazz, props, children) {
    if (children === void 0)
      children = emptyList();
    var tmp$;
    var rClass = Kotlin.isType(tmp$ = get_js(klazz), Object) ? tmp$ : Kotlin.throwCCE();
    return this.node_rwypko$(rClass, props, children);
  };
  RBuilder.prototype.node_347wp$ = defineInlineFunction('kotlin-react.react.RBuilder.node_347wp$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    return function (C_0, isC, props, children) {
      if (children === void 0)
        children = emptyList();
      return this.node_nvhxy3$(Kotlin.getKClass(C_0), props, children);
    };
  }));
  RBuilder.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RBuilder', interfaces: []};
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function RBuilderMultiple() {
    RBuilder.call(this);
    this.childList = ArrayList_init();
  }
  RBuilderMultiple.prototype.child_2usv9w$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilderMultiple.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilderMultiple.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RBuilderMultiple', interfaces: [RBuilder]};
  function RBuilderSingle() {
    RBuilder.call(this);
    this.result = null;
  }
  RBuilderSingle.prototype.child_2usv9w$ = function (element) {
    if (this.result != null) {
      throw new IllegalStateException('React only allows single element be returned from render() function');
    }
    this.result = element;
    return element;
  };
  RBuilderSingle.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RBuilderSingle', interfaces: [RBuilder]};
  function RElementBuilder(attrs) {
    RBuilderMultiple.call(this);
    this.attrs_iyt8sk$_0 = attrs;
  }
  Object.defineProperty(RElementBuilder.prototype, 'attrs', {get: function () {
    return this.attrs_iyt8sk$_0;
  }});
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {get: function () {
    return get_key(this.attrs);
  }, set: function (value) {
    set_key(this.attrs, value);
  }});
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    set_ref(this.attrs, handler);
  };
  RElementBuilder.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RElementBuilder', interfaces: [RBuilderMultiple]};
  function get_children($receiver) {
    return $receiver.children;
  }
  function get_key($receiver) {
    throw new IllegalStateException('key cannot be read from props'.toString());
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function setState$lambda(closure$buildState) {
    return function (it) {
      var builder = closure$buildState;
      var $receiver = clone(it);
      builder($receiver);
      return $receiver;
    };
  }
  function setState($receiver, buildState) {
    $receiver.setState(setState$lambda(buildState));
  }
  function RComponent() {
  }
  RComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RComponent.prototype.children_168xaf$ = function ($receiver) {
    addAll($receiver.childList, React$Children.toArray(get_children(this.props)));
  };
  RComponent.prototype.render = function () {
    var $receiver = new RBuilderSingle();
    this.render_ss14n$($receiver);
    return $receiver.result;
  };
  RComponent.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RComponent', interfaces: []};
  function RComponent_init($this) {
    $this = $this || Object.create(RComponent.prototype);
    React$Component.call($this);
    RComponent.call($this);
    var obj = {};
    $this.init_bc6fkx$(obj);
    $this.state = obj;
    return $this;
  }
  var package$react = _.react || (_.react = {});
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$react.RBuilder = RBuilder;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.RElementBuilder = RElementBuilder;
  $$importsForInline$$.react = $module$react;
  package$react.get_children_yllgzm$ = get_children;
  package$react.get_key_yllgzm$ = get_key;
  package$react.set_key_38rnt0$ = set_key;
  package$react.set_ref_7rqu$ = set_ref;
  package$react.setState_jbmi3x$ = setState;
  package$react.RComponent_init_lqgejo$ = RComponent_init;
  package$react.RComponent = RComponent;
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-extensions')));

//# sourceMappingURL=kotlin-react.js.map
