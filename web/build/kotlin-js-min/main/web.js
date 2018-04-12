(function (_, Kotlin, $module$common_js, $module$kotlin_react, $module$kotlin_react_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var DateTime = $module$common_js.com.gilson.chapter.DateTime;
  var WordUseCase = $module$common_js.com.gilson.chapter.usecase.WordUseCase;
  var WordOfTheDayViewModel = $module$common_js.com.gilson.chapter.viewmodel.WordOfTheDayViewModel;
  var Unit = Kotlin.kotlin.Unit;
  var setState = $module$kotlin_react.react.setState_jbmi3x$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_react_dom.react.dom.render_4s0l5f$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  function App() {
    RComponent_init(this);
  }
  function App$componentDidMount$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.word = closure$it;
      return Unit;
    };
  }
  function App$componentDidMount$lambda(this$App) {
    return function (it) {
      setState(this$App, App$componentDidMount$lambda$lambda(it));
      return Unit;
    };
  }
  function App$componentDidMount$lambda_0() {
    console.log('Shiet...');
    return Unit;
  }
  App.prototype.componentDidMount = function () {
    console.log('yay?');
    print('yayyy');
    (new WordOfTheDayViewModel(new WordUseCase(new DateTime()))).retrieveWord_bcuqm1$(App$componentDidMount$lambda(this), App$componentDidMount$lambda_0);
  };
  App.prototype.componentWillUnmount = function () {
  };
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    if (this.state.word != null) {
      var $receiver_0_0 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Word: ');
      $receiver_0.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_1 = new RDOMBuilder_init(h2$lambda(null));
      var tmp$;
      $receiver_0_1.unaryPlus_pdl1vz$(ensureNotNull((tmp$ = this.state.word) != null ? tmp$.word : null));
      $receiver_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_0_2 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0_2.unaryPlus_pdl1vz$('Description: ');
      $receiver_0.child_2usv9w$($receiver_0_2.create());
      var $receiver_0_3 = new RDOMBuilder_init(h2$lambda(null));
      var tmp$_0;
      $receiver_0_3.unaryPlus_pdl1vz$(ensureNotNull((tmp$_0 = this.state.word) != null ? tmp$_0.description : null));
      $receiver_0.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0_4.unaryPlus_pdl1vz$('Time: ');
      $receiver_0.child_2usv9w$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(h2$lambda(null));
      var tmp$_1;
      $receiver_0_5.unaryPlus_pdl1vz$(ensureNotNull((tmp$_1 = this.state.word) != null ? tmp$_1.day : null));
      $receiver_0.child_2usv9w$($receiver_0_5.create());
    }
    return $receiver.child_2usv9w$($receiver_0.create());
  };
  App.$metadata$ = {kind: Kind_CLASS, simpleName: 'App', interfaces: [RComponent]};
  function app$lambda($receiver) {
    return Unit;
  }
  function app($receiver) {
    return $receiver.child_drr62v$(getKClass(App), app$lambda);
  }
  function main$lambda$lambda($receiver) {
    console.log('calling main...');
    print('calling main...');
    app($receiver);
    return Unit;
  }
  function main$lambda(it) {
    console.log('calling main...');
    print('calling main...');
    render(ensureNotNull(document.getElementById('root')), main$lambda$lambda);
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  var package$com = _.com || (_.com = {});
  var package$gilson = package$com.gilson || (package$com.gilson = {});
  var package$chapter = package$gilson.chapter || (package$gilson.chapter = {});
  var package$components = package$chapter.components || (package$chapter.components = {});
  package$components.App = App;
  package$components.app_ss14n$ = app;
  package$chapter.main_kand9s$ = main;
  main([]);
  return _;
}(module.exports, require('kotlin'), require('common-js'), require('kotlin-react'), require('kotlin-react-dom')));

//# sourceMappingURL=web.js.map
