if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'mockk-dsl-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mockk-dsl-js'.");
}
this['mockk-dsl-js'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Throwable = Error;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  var Any = Object;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getCallableRef = Kotlin.getCallableRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var contentToString = Kotlin.arrayToString;
  var contentDeepToString = Kotlin.arrayDeepToString;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var Function = Kotlin.kotlin.Function;
  var contentEquals = Kotlin.arrayEquals;
  var contentDeepEquals = Kotlin.arrayDeepEquals;
  var unboxChar = Kotlin.unboxChar;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_l1lu5t$;
  var toTypedArray_0 = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var toTypedArray_1 = Kotlin.kotlin.collections.toTypedArray_355ntz$;
  var toTypedArray_2 = Kotlin.kotlin.collections.toTypedArray_i2lc79$;
  var toTypedArray_3 = Kotlin.kotlin.collections.toTypedArray_tmsbgo$;
  var toTypedArray_4 = Kotlin.kotlin.collections.toTypedArray_se6h4x$;
  var toTypedArray_5 = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var toTypedArray_6 = Kotlin.kotlin.collections.toTypedArray_bvy38s$;
  MockKException.prototype = Object.create(Throwable.prototype);
  MockKException.prototype.constructor = MockKException;
  Ordering.prototype = Object.create(Enum.prototype);
  Ordering.prototype.constructor = Ordering;
  MockKVerificationScope.prototype = Object.create(MockKMatcherScope.prototype);
  MockKVerificationScope.prototype.constructor = MockKVerificationScope;
  function MockKException(message, ex) {
    if (ex === void 0)
      ex = null;
    Throwable.call(this);
    this.message_lturk2$_0 = typeof message === 'undefined' && ex != null ? Kotlin.toString(ex) : message;
    this.cause_p9jrfg$_0 = ex;
    Kotlin.captureStack(Throwable, this);
    this.name = 'MockKException';
  }
  Object.defineProperty(MockKException.prototype, 'message', {
    get: function () {
      return this.message_lturk2$_0;
    }
  });
  Object.defineProperty(MockKException.prototype, 'cause', {
    get: function () {
      return this.cause_p9jrfg$_0;
    }
  });
  MockKException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKException',
    interfaces: [Throwable]
  };
  function MockKDsl() {
    MockKDsl_instance = this;
  }
  MockKDsl.prototype.internalMockk_17ynup$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalMockk_17ynup$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, name, relaxed, moreInterfaces) {
      if (name === void 0)
        name = null;
      if (relaxed === void 0)
        relaxed = false;
      return MockKGateway.Companion.implementation().mockFactory.mockk_q5l8ik$(getKClass(T_0), name, relaxed, moreInterfaces);
    };
  }));
  MockKDsl.prototype.internalSpyk_88p2ww$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalSpyk_88p2ww$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    return function (objToCopy, name, moreInterfaces) {
      if (name === void 0)
        name = null;
      return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(null, objToCopy, name, moreInterfaces);
    };
  }));
  MockKDsl.prototype.internalSpyk_yoblfq$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalSpyk_yoblfq$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, name, moreInterfaces) {
      if (name === void 0)
        name = null;
      return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(getKClass(T_0), null, name, moreInterfaces);
    };
  }));
  MockKDsl.prototype.internalSlot_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalSlot_30y1fr$', wrapFunction(function () {
    var CapturingSlot_init = _.io.mockk.CapturingSlot;
    return function (T_0, isT) {
      return new CapturingSlot_init();
    };
  }));
  MockKDsl.prototype.internalEvery_4t3ap8$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalEvery_4t3ap8$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    return function (stubBlock) {
      return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(stubBlock, null);
    };
  }));
  MockKDsl.prototype.internalCoEvery_aj9pl6$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalCoEvery_aj9pl6$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    return function (stubBlock) {
      return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(null, stubBlock);
    };
  }));
  MockKDsl.prototype.internalVerify_y9wzeo$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalVerify_y9wzeo$', wrapFunction(function () {
    var Ordering = _.io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway = _.io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.io.mockk.MockKGateway.VerificationParameters;
    return function (ordering, inverse, atLeast, atMost, exactly, verifyBlock) {
      if (ordering === void 0)
        ordering = Ordering.UNORDERED;
      if (inverse === void 0)
        inverse = false;
      if (atLeast === void 0)
        atLeast = 1;
      if (atMost === void 0)
        atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      if (exactly === void 0)
        exactly = -1;
      this.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
      var min = exactly !== -1 ? exactly : atLeast;
      var max = exactly !== -1 ? exactly : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  MockKDsl.prototype.internalCoVerify_n5erx6$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalCoVerify_n5erx6$', wrapFunction(function () {
    var Ordering = _.io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway = _.io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.io.mockk.MockKGateway.VerificationParameters;
    return function (ordering, inverse, atLeast, atMost, exactly, verifyBlock) {
      if (ordering === void 0)
        ordering = Ordering.UNORDERED;
      if (inverse === void 0)
        inverse = false;
      if (atLeast === void 0)
        atLeast = 1;
      if (atMost === void 0)
        atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      if (exactly === void 0)
        exactly = -1;
      this.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
      var min = exactly !== -1 ? exactly : atLeast;
      var max = exactly !== -1 ? exactly : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), null, verifyBlock);
    };
  }));
  MockKDsl.prototype.internalCheckExactlyAtMostAtLeast_kdvuu7$ = function (exactly, atLeast, atMost, ordering) {
    if (exactly !== -1 && (atLeast !== 1 || atMost !== kotlin_js_internal_IntCompanionObject.MAX_VALUE)) {
      throw new MockKException('specify either atLeast/atMost or exactly');
    }
    if (exactly < -1) {
      throw new MockKException('exactly should be positive');
    }
    if (atLeast < 0) {
      throw new MockKException('atLeast should be positive');
    }
    if (atMost < 0) {
      throw new MockKException('atMost should be positive');
    }
    if (atLeast > atMost) {
      throw new MockKException('atLeast should less or equal atMost');
    }
    if (ordering !== Ordering$UNORDERED_getInstance()) {
      if (atLeast !== 1 || atMost !== kotlin_js_internal_IntCompanionObject.MAX_VALUE || exactly !== -1) {
        throw new MockKException('atLeast, atMost, exactly is only allowed in unordered verify block');
      }
    }
  };
  MockKDsl.prototype.internalVerifyOrder_y15vxx$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalVerifyOrder_y15vxx$', wrapFunction(function () {
    var Ordering = _.io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway = _.io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      var ordering = Ordering.ORDERED;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  MockKDsl.prototype.internalVerifyAll_y15vxx$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalVerifyAll_y15vxx$', wrapFunction(function () {
    var Ordering = _.io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway = _.io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      var ordering = Ordering.ALL;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  MockKDsl.prototype.internalVerifySequence_y15vxx$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalVerifySequence_y15vxx$', wrapFunction(function () {
    var Ordering = _.io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway = _.io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      var ordering = Ordering.SEQUENCE;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  MockKDsl.prototype.internalClearMocks_kraaz7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalClearMocks_kraaz7$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    return function (mocks, answers, recordedCalls, childMocks) {
      if (answers === void 0)
        answers = true;
      if (recordedCalls === void 0)
        recordedCalls = true;
      if (childMocks === void 0)
        childMocks = true;
      MockKGateway.Companion.implementation().clearer.clear_v2wshv$(mocks, answers, recordedCalls, childMocks);
    };
  }));
  MockKDsl.prototype.internalRegisterInstanceFactory_9ce4rd$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalRegisterInstanceFactory_9ce4rd$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var MockKGateway$InstanceFactory = _.io.mockk.MockKGateway.InstanceFactory;
    var MockKGateway = _.io.mockk.MockKGateway;
    var Deregisterable = _.io.mockk.Deregisterable;
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, typeClosure$T, closure$instanceFactory) {
      this.isT = isT;
      this.typeClosure$T = typeClosure$T;
      this.closure$instanceFactory = closure$instanceFactory;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.prototype.instantiate_xo1ogr$ = function (cls) {
      var tmp$;
      if ((tmp$ = getKClass(this.typeClosure$T)) != null ? tmp$.equals(cls) : null) {
        return this.closure$instanceFactory();
      }
      return null;
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [MockKGateway$InstanceFactory]
    };
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
      this.closure$factoryObj = closure$factoryObj;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
      MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Deregisterable]
    };
    return function (T_0, isT, instanceFactory) {
      var factoryObj = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, T_0, instanceFactory);
      MockKGateway.Companion.implementation().instanceFactoryRegistry.registerFactory_ia5wlb$(factoryObj);
      return new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(factoryObj);
    };
  }));
  MockKDsl.prototype.internalWithInstanceFactory_gpdgz$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalWithInstanceFactory_gpdgz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var MockKGateway$InstanceFactory = _.io.mockk.MockKGateway.InstanceFactory;
    var MockKGateway = _.io.mockk.MockKGateway;
    var Deregisterable = _.io.mockk.Deregisterable;
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, typeClosure$T, closure$instanceFactory) {
      this.isT = isT;
      this.typeClosure$T = typeClosure$T;
      this.closure$instanceFactory = closure$instanceFactory;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.prototype.instantiate_xo1ogr$ = function (cls) {
      var tmp$;
      if ((tmp$ = getKClass(this.typeClosure$T)) != null ? tmp$.equals(cls) : null) {
        return this.closure$instanceFactory();
      }
      return null;
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [MockKGateway$InstanceFactory]
    };
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
      this.closure$factoryObj = closure$factoryObj;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
      MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Deregisterable]
    };
    var Throwable = Error;
    return function (T_0, isT, instanceFactory, block) {
      var factoryObj = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, T_0, instanceFactory);
      MockKGateway.Companion.implementation().instanceFactoryRegistry.registerFactory_ia5wlb$(factoryObj);
      var $receiver = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(factoryObj);
      var tmp$result;
      try {
        tmp$result = block();
      }
      finally {
        try {
          $receiver.deregister();
        }
         catch (closeException) {
          if (!Kotlin.isType(closeException, Throwable))
            throw closeException;
        }
      }
      return tmp$result;
    };
  }));
  MockKDsl.prototype.internalStaticMockk_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalStaticMockk_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var MockKStaticScope_init = _.io.mockk.MockKStaticScope;
    return function (T_0, isT) {
      return new MockKStaticScope_init([getKClass(T_0)]);
    };
  }));
  MockKDsl.prototype.internalStaticMockk_vrx7ys$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKDsl.internalStaticMockk_vrx7ys$', wrapFunction(function () {
    var MockKStaticScope_init = _.io.mockk.MockKStaticScope;
    return function (kClass) {
      return new MockKStaticScope_init(kClass.slice());
    };
  }));
  MockKDsl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MockKDsl',
    interfaces: []
  };
  var MockKDsl_instance = null;
  function MockKDsl_getInstance() {
    if (MockKDsl_instance === null) {
      new MockKDsl();
    }
    return MockKDsl_instance;
  }
  function Ordering(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Ordering_initFields() {
    Ordering_initFields = function () {
    };
    Ordering$UNORDERED_instance = new Ordering('UNORDERED', 0);
    Ordering$ALL_instance = new Ordering('ALL', 1);
    Ordering$ORDERED_instance = new Ordering('ORDERED', 2);
    Ordering$SEQUENCE_instance = new Ordering('SEQUENCE', 3);
  }
  var Ordering$UNORDERED_instance;
  function Ordering$UNORDERED_getInstance() {
    Ordering_initFields();
    return Ordering$UNORDERED_instance;
  }
  var Ordering$ALL_instance;
  function Ordering$ALL_getInstance() {
    Ordering_initFields();
    return Ordering$ALL_instance;
  }
  var Ordering$ORDERED_instance;
  function Ordering$ORDERED_getInstance() {
    Ordering_initFields();
    return Ordering$ORDERED_instance;
  }
  var Ordering$SEQUENCE_instance;
  function Ordering$SEQUENCE_getInstance() {
    Ordering_initFields();
    return Ordering$SEQUENCE_instance;
  }
  Ordering.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ordering',
    interfaces: [Enum]
  };
  function Ordering$values() {
    return [Ordering$UNORDERED_getInstance(), Ordering$ALL_getInstance(), Ordering$ORDERED_getInstance(), Ordering$SEQUENCE_getInstance()];
  }
  Ordering.values = Ordering$values;
  function Ordering$valueOf(name) {
    switch (name) {
      case 'UNORDERED':
        return Ordering$UNORDERED_getInstance();
      case 'ALL':
        return Ordering$ALL_getInstance();
      case 'ORDERED':
        return Ordering$ORDERED_getInstance();
      case 'SEQUENCE':
        return Ordering$SEQUENCE_getInstance();
      default:throwISE('No enum constant io.mockk.Ordering.' + name);
    }
  }
  Ordering.valueOf_61zpoe$ = Ordering$valueOf;
  function MockKMatcherScope(callRecorder, lambda) {
    this.callRecorder = callRecorder;
    this.lambda = lambda;
  }
  MockKMatcherScope.prototype.match_e6f8qb$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.match_e6f8qb$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, matcher) {
      return this.callRecorder.matcher_w5iupj$(matcher, getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.match_6sj6wy$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.match_6sj6wy$', wrapFunction(function () {
    function MockKMatcherScope$match$lambda(closure$matcher) {
      return function (it) {
        if (it == null) {
          return false;
        }
         else {
          return closure$matcher(it);
        }
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, matcher) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKMatcherScope$match$lambda(matcher), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.matchNullable_6sj6wy$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.matchNullable_6sj6wy$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, matcher) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(matcher, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.eq_sgck4o$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.eq_sgck4o$', wrapFunction(function () {
    var EqMatcher_init = _.io.mockk.EqMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, value, inverse) {
      if (inverse === void 0)
        inverse = false;
      return this.callRecorder.matcher_w5iupj$(new EqMatcher_init(value, void 0, inverse), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.refEq_sgck4o$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.refEq_sgck4o$', wrapFunction(function () {
    var EqMatcher_init = _.io.mockk.EqMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, value, inverse) {
      if (inverse === void 0)
        inverse = false;
      return this.callRecorder.matcher_w5iupj$(new EqMatcher_init(value, true, inverse), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.any_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.any_30y1fr$', wrapFunction(function () {
    var ConstantMatcher_init = _.io.mockk.ConstantMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.callRecorder.matcher_w5iupj$(new ConstantMatcher_init(true), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.capture_7xg4v7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.capture_7xg4v7$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var CaptureMatcher_init = _.io.mockk.CaptureMatcher;
    return function (T_0, isT, lst) {
      return this.callRecorder.matcher_w5iupj$(new CaptureMatcher_init(lst, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.capture_1yzsb5$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.capture_1yzsb5$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var CapturingSlotMatcher_init = _.io.mockk.CapturingSlotMatcher;
    return function (T_0, isT, lst) {
      return this.callRecorder.matcher_w5iupj$(new CapturingSlotMatcher_init(lst, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.captureNullable_7xg4v7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.captureNullable_7xg4v7$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var CaptureNullableMatcher_init = _.io.mockk.CaptureNullableMatcher;
    return function (T_0, isT, lst) {
      return this.callRecorder.matcher_w5iupj$(new CaptureNullableMatcher_init(lst, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.cmpEq_f1zjgi$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.cmpEq_f1zjgi$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ComparingMatcher_init = _.io.mockk.ComparingMatcher;
    return function (T_0, isT, value) {
      return this.callRecorder.matcher_w5iupj$(new ComparingMatcher_init(value, 0, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.more_hsrlw9$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.more_hsrlw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ComparingMatcher_init = _.io.mockk.ComparingMatcher;
    return function (T_0, isT, value, andEquals) {
      if (andEquals === void 0)
        andEquals = false;
      return this.callRecorder.matcher_w5iupj$(new ComparingMatcher_init(value, andEquals ? 2 : 1, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.less_hsrlw9$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.less_hsrlw9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ComparingMatcher_init = _.io.mockk.ComparingMatcher;
    return function (T_0, isT, value, andEquals) {
      if (andEquals === void 0)
        andEquals = false;
      return this.callRecorder.matcher_w5iupj$(new ComparingMatcher_init(value, andEquals ? -2 : -1, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.and_c90l5l$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.and_c90l5l$', wrapFunction(function () {
    var AndOrMatcher_init = _.io.mockk.AndOrMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, left, right) {
      return this.callRecorder.matcher_w5iupj$(new AndOrMatcher_init(true, left, right), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.or_c90l5l$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.or_c90l5l$', wrapFunction(function () {
    var AndOrMatcher_init = _.io.mockk.AndOrMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, left, right) {
      return this.callRecorder.matcher_w5iupj$(new AndOrMatcher_init(false, left, right), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.not_issdgt$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.not_issdgt$', wrapFunction(function () {
    var NotMatcher_init = _.io.mockk.NotMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, value) {
      return this.callRecorder.matcher_w5iupj$(new NotMatcher_init(value), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.isNull_l9qs4i$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.isNull_l9qs4i$', wrapFunction(function () {
    var NullCheckMatcher_init = _.io.mockk.NullCheckMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, inverse) {
      if (inverse === void 0)
        inverse = false;
      return this.callRecorder.matcher_w5iupj$(new NullCheckMatcher_init(inverse), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.ofType_6w54ri$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.ofType_6w54ri$', wrapFunction(function () {
    var OfTypeMatcher_init = _.io.mockk.OfTypeMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, cls) {
      return this.callRecorder.matcher_w5iupj$(new OfTypeMatcher_init(cls), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_51ntyk$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_51ntyk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(it) {
      it();
      return Unit;
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_wouyg8$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_wouyg8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1) {
      return function (it) {
        it(closure$arg1);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_4ead9n$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_4ead9n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2) {
      return function (it) {
        it(closure$arg1, closure$arg2);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_53ase1$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_53ase1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_cesliq$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_cesliq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_awood6$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_awood6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_4i2s4p$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_4i2s4p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_raihkr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_raihkr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_icxzr0$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_icxzr0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_iekvmn$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_iekvmn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_ormoru$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_ormoru$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_qq26md$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_qq26md$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_5ik5nf$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_5ik5nf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_sl5j4a$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_sl5j4a$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_dnzeos$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_dnzeos$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_zcu3cl$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_zcu3cl$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_wgo487$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_wgo487$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_r1bqmg$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_r1bqmg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_w7q0vi$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_w7q0vi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_1nv4ae$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_1nv4ae$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_tl12uw$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_tl12uw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_kigagk$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_kigagk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.invoke_jldx81$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.invoke_jldx81$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$invoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21, closure$arg22) {
      return function (it) {
        it(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21, closure$arg22);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$invoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_ylgz1a$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_ylgz1a$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(it) {
      mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it));
      return Unit;
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_iwfct2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_iwfct2$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_xf0juh$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_xf0juh$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_s2ycin$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_s2ycin$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_u87jwk$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_u87jwk$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_xc21wk$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_xc21wk$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_90rwjj$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_90rwjj$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_s8vb6p$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_s8vb6p$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_bmhbwi$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_bmhbwi$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_itlb9p$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_itlb9p$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_s1lxji$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_s1lxji$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_8ztqif$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_8ztqif$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_bzyyj9$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_bzyyj9$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_kdpw4a$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_kdpw4a$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_yjb2a4$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_yjb2a4$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_ulzbk7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_ulzbk7$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_196uq7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_196uq7$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_2lsy6s$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_2lsy6s$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_fyb04m$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_fyb04m$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_45xst2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_45xst2$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_mzhz9i$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_mzhz9i$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_gr1tca$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_gr1tca$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
      this.local$closure$arg21 = closure$arg21_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this.local$closure$arg21, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coInvoke_l5bti7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coInvoke_l5bti7$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var InvokeMatcher_init = _.io.mockk.InvokeMatcher;
    function MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coInvoke$lambda$lambda(closure$it_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$it = closure$it_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
      this.local$closure$arg21 = closure$arg21_0;
      this.local$closure$arg22 = closure$arg22_0;
    }
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coInvoke$lambda$lambda;
    Coroutine$MockKMatcherScope$coInvoke$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$it(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this.local$closure$arg21, this.local$closure$arg22, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coInvoke$lambda(closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21, closure$arg22) {
      return function (it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coInvoke$lambda$lambda(it, closure$arg1, closure$arg2, closure$arg3, closure$arg4, closure$arg5, closure$arg6, closure$arg7, closure$arg8, closure$arg9, closure$arg10, closure$arg11, closure$arg12, closure$arg13, closure$arg14, closure$arg15, closure$arg16, closure$arg17, closure$arg18, closure$arg19, closure$arg20, closure$arg21, closure$arg22));
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22) {
      return this.callRecorder.matcher_w5iupj$(new InvokeMatcher_init(MockKMatcherScope$coInvoke$lambda(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.allAny_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.allAny_30y1fr$', wrapFunction(function () {
    var AllAnyMatcher_init = _.io.mockk.AllAnyMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.callRecorder.matcher_w5iupj$(new AllAnyMatcher_init(), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.array_n3agg7$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.array_n3agg7$', wrapFunction(function () {
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var ArrayMatcher_init = _.io.mockk.ArrayMatcher;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, matchers) {
      return this.callRecorder.matcher_w5iupj$(new ArrayMatcher_init(toList(matchers)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.hint_33jopt$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.hint_33jopt$', wrapFunction(function () {
    var MockKGateway = _.io.mockk.MockKGateway;
    return function ($receiver, cls, n) {
      if (n === void 0)
        n = 1;
      MockKGateway.Companion.implementation().callRecorder.hintNextReturnType_ast7qv$(cls, n);
      return $receiver;
    };
  }));
  MockKMatcherScope.prototype.captureLambda_sf72c3$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.captureLambda_sf72c3$', wrapFunction(function () {
    var CapturingSlot = _.io.mockk.CapturingSlot;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var CapturingSlotMatcher_init = _.io.mockk.CapturingSlotMatcher;
    return function (T_0, isT) {
      var tmp$;
      var matcher = new CapturingSlotMatcher_init(Kotlin.isType(tmp$ = this.lambda, CapturingSlot) ? tmp$ : throwCCE(), getKClass(T_0));
      return this.callRecorder.matcher_w5iupj$(matcher, getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.captureCoroutine_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.captureCoroutine_30y1fr$', wrapFunction(function () {
    var CapturingSlot = _.io.mockk.CapturingSlot;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var CapturingSlotMatcher_init = _.io.mockk.CapturingSlotMatcher;
    return function (T_0, isT) {
      var tmp$;
      var matcher = new CapturingSlotMatcher_init(Kotlin.isType(tmp$ = this.lambda, CapturingSlot) ? tmp$ : throwCCE(), getKClass(T_0));
      return this.callRecorder.matcher_w5iupj$(matcher, getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coMatch_ciplsw$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coMatch_ciplsw$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function MockKMatcherScope$coMatch$lambda$lambda(closure$matcher_0, closure$it_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coMatch$lambda$lambda(closure$matcher_0, closure$it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coMatch$lambda$lambda(closure$matcher_0, closure$it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$matcher = closure$matcher_0;
      this.local$closure$it = closure$it_0;
    }
    Coroutine$MockKMatcherScope$coMatch$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coMatch$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coMatch$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coMatch$lambda$lambda;
    Coroutine$MockKMatcherScope$coMatch$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$matcher(this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coMatch$lambda(closure$matcher) {
      return function (it) {
        return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coMatch$lambda$lambda(closure$matcher, it));
      };
    }
    function MockKMatcherScope$match$lambda(closure$matcher) {
      return function (it) {
        if (it == null) {
          return false;
        }
         else {
          return closure$matcher(it);
        }
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, matcher) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKMatcherScope$match$lambda(MockKMatcherScope$coMatch$lambda(matcher)), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.prototype.coMatchNullable_ciplsw$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKMatcherScope.coMatchNullable_ciplsw$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function MockKMatcherScope$coMatchNullable$lambda$lambda(closure$matcher_0, closure$it_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda(closure$matcher_0, closure$it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda(closure$matcher_0, closure$it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$matcher = closure$matcher_0;
      this.local$closure$it = closure$it_0;
    }
    Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda.prototype.constructor = Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda;
    Coroutine$MockKMatcherScope$coMatchNullable$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$matcher(this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKMatcherScope$coMatchNullable$lambda(closure$matcher) {
      return function (it) {
        return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKMatcherScope$coMatchNullable$lambda$lambda(closure$matcher, it));
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, matcher) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKMatcherScope$coMatchNullable$lambda(matcher), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKMatcherScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKMatcherScope',
    interfaces: []
  };
  function MockKVerificationScope(callRecorder, lambda) {
    MockKMatcherScope.call(this, callRecorder, lambda);
  }
  MockKVerificationScope.prototype.assert_jq343x$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.assert_jq343x$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var AssertMatcher_init = _.io.mockk.AssertMatcher;
    function MockKVerificationScope$assert$lambda(closure$assertion, typeClosure$T, isT) {
      return function (it) {
        var tmp$;
        return closure$assertion(isT(tmp$ = it) ? tmp$ : throwCCE());
      };
    }
    return function (T_0, isT, msg, assertion) {
      if (msg === void 0)
        msg = null;
      return this.callRecorder.matcher_w5iupj$(new AssertMatcher_init(MockKVerificationScope$assert$lambda(assertion, T_0, isT), msg, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.assertNullable_jq343x$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.assertNullable_jq343x$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var AssertMatcher_init = _.io.mockk.AssertMatcher;
    return function (T_0, isT, msg, assertion) {
      if (msg === void 0)
        msg = null;
      return this.callRecorder.matcher_w5iupj$(new AssertMatcher_init(assertion, msg, getKClass(T_0), true), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.run_rn4r04$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.run_rn4r04$', wrapFunction(function () {
    var MockKAssertScope_init = _.io.mockk.MockKAssertScope;
    function MockKVerificationScope$run$lambda(closure$captureBlock) {
      return function (it) {
        closure$captureBlock(new MockKAssertScope_init(it), it);
        return true;
      };
    }
    function MockKMatcherScope$match$lambda(closure$matcher) {
      return function (it) {
        if (it == null) {
          return false;
        }
         else {
          return closure$matcher(it);
        }
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, captureBlock) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKMatcherScope$match$lambda(MockKVerificationScope$run$lambda(captureBlock)), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.runNullable_rn4r04$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.runNullable_rn4r04$', wrapFunction(function () {
    var MockKAssertScope_init = _.io.mockk.MockKAssertScope;
    function MockKVerificationScope$runNullable$lambda(closure$captureBlock) {
      return function (it) {
        closure$captureBlock(new MockKAssertScope_init(it), it);
        return true;
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, captureBlock) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKVerificationScope$runNullable$lambda(captureBlock), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.coAssert_pdaikr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.coAssert_pdaikr$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function MockKVerificationScope$coAssert$lambda$lambda(closure$assertion_0, closure$it_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKVerificationScope$coAssert$lambda$lambda(closure$assertion_0, closure$it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKVerificationScope$coAssert$lambda$lambda(closure$assertion_0, closure$it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$assertion = closure$assertion_0;
      this.local$closure$it = closure$it_0;
    }
    Coroutine$MockKVerificationScope$coAssert$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKVerificationScope$coAssert$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKVerificationScope$coAssert$lambda$lambda.prototype.constructor = Coroutine$MockKVerificationScope$coAssert$lambda$lambda;
    Coroutine$MockKVerificationScope$coAssert$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$assertion(this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKVerificationScope$coAssert$lambda(closure$assertion) {
      return function (it) {
        return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKVerificationScope$coAssert$lambda$lambda(closure$assertion, it));
      };
    }
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var AssertMatcher_init = _.io.mockk.AssertMatcher;
    function MockKVerificationScope$assert$lambda(closure$assertion, typeClosure$T, isT) {
      return function (it) {
        var tmp$;
        return closure$assertion(isT(tmp$ = it) ? tmp$ : throwCCE());
      };
    }
    return function (T_0, isT, msg, assertion) {
      if (msg === void 0)
        msg = null;
      return this.callRecorder.matcher_w5iupj$(new AssertMatcher_init(MockKVerificationScope$assert$lambda(MockKVerificationScope$coAssert$lambda(assertion), T_0, isT), msg, getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.coAssertNullable_pdaikr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.coAssertNullable_pdaikr$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function MockKVerificationScope$coAssertNullable$lambda$lambda(closure$assertion_0, closure$it_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda(closure$assertion_0, closure$it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda(closure$assertion_0, closure$it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$assertion = closure$assertion_0;
      this.local$closure$it = closure$it_0;
    }
    Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda.prototype.constructor = Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda;
    Coroutine$MockKVerificationScope$coAssertNullable$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$assertion(this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKVerificationScope$coAssertNullable$lambda(closure$assertion) {
      return function (it) {
        return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKVerificationScope$coAssertNullable$lambda$lambda(closure$assertion, it));
      };
    }
    var getKClass = Kotlin.getKClass;
    var AssertMatcher_init = _.io.mockk.AssertMatcher;
    return function (T_0, isT, msg, assertion) {
      if (msg === void 0)
        msg = null;
      return this.callRecorder.matcher_w5iupj$(new AssertMatcher_init(MockKVerificationScope$coAssertNullable$lambda(assertion), msg, getKClass(T_0), true), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.coRun_6fhx8y$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.coRun_6fhx8y$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    function MockKVerificationScope$coRun$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKVerificationScope$coRun$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKVerificationScope$coRun$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$captureBlock = closure$captureBlock_0;
      this.local$closure$it = closure$it_0;
      this.local$this$ = this$_0;
    }
    Coroutine$MockKVerificationScope$coRun$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKVerificationScope$coRun$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKVerificationScope$coRun$lambda$lambda.prototype.constructor = Coroutine$MockKVerificationScope$coRun$lambda$lambda;
    Coroutine$MockKVerificationScope$coRun$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$captureBlock(this.local$this$, this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKVerificationScope$coRun$lambda(closure$captureBlock) {
      return function ($receiver, it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKVerificationScope$coRun$lambda$lambda(closure$captureBlock, it, $receiver));
        return Unit;
      };
    }
    var MockKAssertScope_init = _.io.mockk.MockKAssertScope;
    function MockKVerificationScope$run$lambda(closure$captureBlock) {
      return function (it) {
        closure$captureBlock(new MockKAssertScope_init(it), it);
        return true;
      };
    }
    function MockKMatcherScope$match$lambda(closure$matcher) {
      return function (it) {
        if (it == null) {
          return false;
        }
         else {
          return closure$matcher(it);
        }
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, captureBlock) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKMatcherScope$match$lambda(MockKVerificationScope$run$lambda(MockKVerificationScope$coRun$lambda(captureBlock))), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.coRunNullable_6fhx8y$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKVerificationScope.coRunNullable_6fhx8y$', wrapFunction(function () {
    var mockk = _.io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    function MockKVerificationScope$coRunNullable$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda(closure$captureBlock_0, closure$it_0, this$_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$captureBlock = closure$captureBlock_0;
      this.local$closure$it = closure$it_0;
      this.local$this$ = this$_0;
    }
    Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda.prototype.constructor = Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda;
    Coroutine$MockKVerificationScope$coRunNullable$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$captureBlock(this.local$this$, this.local$closure$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function MockKVerificationScope$coRunNullable$lambda(closure$captureBlock) {
      return function ($receiver, it) {
        mockk.InternalPlatformDsl.runCoroutine_lnyleu$(MockKVerificationScope$coRunNullable$lambda$lambda(closure$captureBlock, it, $receiver));
        return Unit;
      };
    }
    var MockKAssertScope_init = _.io.mockk.MockKAssertScope;
    function MockKVerificationScope$runNullable$lambda(closure$captureBlock) {
      return function (it) {
        closure$captureBlock(new MockKAssertScope_init(it), it);
        return true;
      };
    }
    var getKClass = Kotlin.getKClass;
    var FunctionMatcher_init = _.io.mockk.FunctionMatcher;
    return function (T_0, isT, captureBlock) {
      return this.callRecorder.matcher_w5iupj$(new FunctionMatcher_init(MockKVerificationScope$runNullable$lambda(MockKVerificationScope$coRunNullable$lambda(captureBlock)), getKClass(T_0)), getKClass(T_0));
    };
  }));
  MockKVerificationScope.prototype.wasNot_nagdnm$ = function ($receiver, called) {
    this.wasNot_8fnlgv$(listOf($receiver), called);
  };
  MockKVerificationScope.prototype.wasNot_8fnlgv$ = function ($receiver, called) {
    this.callRecorder.wasNotCalled_pqjuzw$($receiver);
  };
  MockKVerificationScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKVerificationScope',
    interfaces: [MockKMatcherScope]
  };
  function Called() {
    Called_instance = this;
  }
  Called.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Called',
    interfaces: []
  };
  var Called_instance = null;
  function Called_getInstance() {
    if (Called_instance === null) {
      new Called();
    }
    return Called_instance;
  }
  function MockKAssertScope(actual) {
    this.actual = actual;
  }
  MockKAssertScope.prototype.assertEquals_s8jyv4$ = function (expected) {
    if (!InternalPlatformDsl_getInstance().deepEquals_oaftn8$(expected, this.actual)) {
      throw new AssertionError(this.format_0(this.actual, expected));
    }
  };
  MockKAssertScope.prototype.assertEquals_4w9ihe$ = function (msg, expected) {
    if (!InternalPlatformDsl_getInstance().deepEquals_oaftn8$(expected, this.actual)) {
      throw new AssertionError(this.format_0(this.actual, expected, msg));
    }
  };
  MockKAssertScope.prototype.format_0 = function (actual, expected, message) {
    if (message === void 0)
      message = null;
    var msgFormatted = message != null ? toString(message) + ' ' : '';
    return msgFormatted + 'expected [' + toString(expected) + '] but found [' + toString(actual) + ']';
  };
  MockKAssertScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKAssertScope',
    interfaces: []
  };
  function Runs() {
    Runs_instance = this;
  }
  Runs.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Runs',
    interfaces: []
  };
  var Runs_instance = null;
  function Runs_getInstance() {
    if (Runs_instance === null) {
      new Runs();
    }
    return Runs_instance;
  }
  function MockKStubScope(callRecorder, lambda) {
    this.callRecorder = callRecorder;
    this.lambda_0 = lambda;
  }
  MockKStubScope.prototype.answers_cr3vpj$ = function (answer) {
    this.callRecorder.answer_gjjeqr$(answer);
    return new MockKAdditionalAnswerScope(this.callRecorder, this.lambda_0);
  };
  MockKStubScope.prototype.returns_11rb$ = function (returnValue) {
    return this.answers_cr3vpj$(new ConstantAnswer(returnValue));
  };
  MockKStubScope.prototype.returnsMany_4ezy5m$ = function (values) {
    return this.answers_cr3vpj$(new ManyAnswersAnswer(allConst(values)));
  };
  MockKStubScope.prototype.returnsMany_7l2mas$ = function (values) {
    return this.returnsMany_4ezy5m$(toList(values));
  };
  MockKStubScope.prototype.throws_tcv7n7$ = function (ex) {
    return this.answers_cr3vpj$(new ThrowingAnswer(ex));
  };
  function MockKStubScope$answers$lambda(this$MockKStubScope, closure$answer) {
    return function (it) {
      return closure$answer(new MockKAnswerScope(this$MockKStubScope.lambda_0, it), it);
    };
  }
  MockKStubScope.prototype.answers_pec6rj$ = function (answer) {
    return this.answers_cr3vpj$(new FunctionAnswer(MockKStubScope$answers$lambda(this, answer)));
  };
  function MockKStubScope$coAnswers$lambda$lambda(closure$answer_0, closure$it_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MockKStubScope$coAnswers$lambda$lambda(closure$answer_0, closure$it_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MockKStubScope$coAnswers$lambda$lambda(closure$answer_0, closure$it_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$answer = closure$answer_0;
    this.local$closure$it = closure$it_0;
    this.local$this$ = this$_0;
  }
  Coroutine$MockKStubScope$coAnswers$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MockKStubScope$coAnswers$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MockKStubScope$coAnswers$lambda$lambda.prototype.constructor = Coroutine$MockKStubScope$coAnswers$lambda$lambda;
  Coroutine$MockKStubScope$coAnswers$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$answer(this.local$this$, this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MockKStubScope$coAnswers$lambda(closure$answer) {
    return function ($receiver, it) {
      return InternalPlatformDsl_getInstance().runCoroutine_lnyleu$(MockKStubScope$coAnswers$lambda$lambda(closure$answer, it, $receiver));
    };
  }
  MockKStubScope.prototype.coAnswers_6pk7vh$ = function (answer) {
    return this.answers_pec6rj$(MockKStubScope$coAnswers$lambda(answer));
  };
  MockKStubScope.prototype.just_fx7il9$ = function (runs) {
    var tmp$;
    return this.answers_cr3vpj$(Kotlin.isType(tmp$ = new ConstantAnswer(null), ConstantAnswer) ? tmp$ : throwCCE());
  };
  MockKStubScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKStubScope',
    interfaces: []
  };
  function MockKAdditionalAnswerScope(callRecorder, lambda) {
    this.callRecorder = callRecorder;
    this.lambda_0 = lambda;
  }
  MockKAdditionalAnswerScope.prototype.andThenAnswer_cr3vpj$ = function (answer) {
    this.callRecorder.answer_gjjeqr$(answer);
    return this;
  };
  MockKAdditionalAnswerScope.prototype.andThen_11rb$ = function (returnValue) {
    return this.andThenAnswer_cr3vpj$(new ConstantAnswer(returnValue));
  };
  MockKAdditionalAnswerScope.prototype.andThenMany_4ezy5m$ = function (values) {
    return this.andThenAnswer_cr3vpj$(new ManyAnswersAnswer(allConst(values)));
  };
  MockKAdditionalAnswerScope.prototype.andThenMany_7l2mas$ = function (values) {
    return this.andThenMany_4ezy5m$(toList(values));
  };
  MockKAdditionalAnswerScope.prototype.andThenThrows_tcv7n7$ = function (ex) {
    return this.andThenAnswer_cr3vpj$(new ThrowingAnswer(ex));
  };
  function MockKAdditionalAnswerScope$andThen$lambda(this$MockKAdditionalAnswerScope, closure$answer) {
    return function (it) {
      return closure$answer(new MockKAnswerScope(this$MockKAdditionalAnswerScope.lambda_0, it), it);
    };
  }
  MockKAdditionalAnswerScope.prototype.andThen_pec6rj$ = function (answer) {
    return this.andThenAnswer_cr3vpj$(new FunctionAnswer(MockKAdditionalAnswerScope$andThen$lambda(this, answer)));
  };
  function MockKAdditionalAnswerScope$coAndThen$lambda$lambda(closure$answer_0, closure$it_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda(closure$answer_0, closure$it_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda(closure$answer_0, closure$it_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$answer = closure$answer_0;
    this.local$closure$it = closure$it_0;
    this.local$this$ = this$_0;
  }
  Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda.prototype.constructor = Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda;
  Coroutine$MockKAdditionalAnswerScope$coAndThen$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$answer(this.local$this$, this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MockKAdditionalAnswerScope$coAndThen$lambda(closure$answer) {
    return function ($receiver, it) {
      return InternalPlatformDsl_getInstance().runCoroutine_lnyleu$(MockKAdditionalAnswerScope$coAndThen$lambda$lambda(closure$answer, it, $receiver));
    };
  }
  MockKAdditionalAnswerScope.prototype.coAndThen_6pk7vh$ = function (answer) {
    return this.andThen_pec6rj$(MockKAdditionalAnswerScope$coAndThen$lambda(answer));
  };
  MockKAdditionalAnswerScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKAdditionalAnswerScope',
    interfaces: []
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function allConst($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new ConstantAnswer(item));
    }
    return destination;
  }
  function MockKAnswerScope(lambda, call) {
    this.lambda = lambda;
    this.call = call;
    this.invocation = this.call.invocation;
    this.matcher = this.call.matcher;
    this.nothing = null;
  }
  Object.defineProperty(MockKAnswerScope.prototype, 'self', {
    get: function () {
      return this.invocation.self;
    }
  });
  Object.defineProperty(MockKAnswerScope.prototype, 'method', {
    get: function () {
      return this.invocation.method;
    }
  });
  Object.defineProperty(MockKAnswerScope.prototype, 'args', {
    get: function () {
      return this.invocation.args;
    }
  });
  Object.defineProperty(MockKAnswerScope.prototype, 'nArgs', {
    get: function () {
      return this.invocation.args.size;
    }
  });
  MockKAnswerScope.prototype.firstArg_287e2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.firstArg_287e2$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return isT(tmp$ = this.invocation.args.get_za3lpa$(0)) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.secondArg_287e2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.secondArg_287e2$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return isT(tmp$ = this.invocation.args.get_za3lpa$(1)) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.thirdArg_287e2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.thirdArg_287e2$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return isT(tmp$ = this.invocation.args.get_za3lpa$(2)) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.lastArg_287e2$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.lastArg_287e2$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_2p1efm$;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return isT(tmp$ = last(this.invocation.args)) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.arg_ww73n8$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.arg_ww73n8$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, n) {
      var tmp$;
      return isT(tmp$ = this.invocation.args.get_za3lpa$(n)) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.captured_vvxzk3$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.captured_vvxzk3$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_2p1efm$;
    return function ($receiver) {
      return last($receiver);
    };
  }));
  MockKAnswerScope.prototype.lambda_sf72c3$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.lambda_sf72c3$', wrapFunction(function () {
    var CapturingSlot = _.io.mockk.CapturingSlot;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return Kotlin.isType(tmp$ = this.lambda, CapturingSlot) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.coroutine_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKAnswerScope.coroutine_30y1fr$', wrapFunction(function () {
    var CapturingSlot = _.io.mockk.CapturingSlot;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return Kotlin.isType(tmp$ = this.lambda, CapturingSlot) ? tmp$ : throwCCE();
    };
  }));
  MockKAnswerScope.prototype.callOriginal = function () {
    var tmp$;
    return (tmp$ = this.call.invocation.originalCall()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  MockKAnswerScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKAnswerScope',
    interfaces: []
  };
  function MockKStaticScope(staticTypes) {
    this.staticTypes = staticTypes;
  }
  MockKStaticScope.prototype.mock = function () {
    var tmp$, tmp$_0;
    tmp$ = this.staticTypes;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var type = tmp$[tmp$_0];
      MockKGateway$Companion_getInstance().implementation().staticMockFactory.staticMockk_xo1ogr$(type);
    }
  };
  MockKStaticScope.prototype.unmock = function () {
    var tmp$, tmp$_0;
    tmp$ = this.staticTypes;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var type = tmp$[tmp$_0];
      MockKGateway$Companion_getInstance().implementation().staticMockFactory.staticUnMockk_xo1ogr$(type);
    }
  };
  MockKStaticScope.prototype.and_30y1fr$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKStaticScope.and_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var MockKStaticScope_init = _.io.mockk.MockKStaticScope;
    return function (T_0, isT) {
      return new MockKStaticScope_init([getKClass(T_0)].concat(this.staticTypes));
    };
  }));
  MockKStaticScope.prototype.use_klfg04$ = defineInlineFunction('mockk-dsl-js.io.mockk.MockKStaticScope.use_klfg04$', function (block) {
    var tmp$;
    this.mock();
    try {
      tmp$ = block();
    }
    finally {
      this.unmock();
    }
    return tmp$;
  });
  MockKStaticScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKStaticScope',
    interfaces: []
  };
  function CapturingSlot() {
    this.isCaptured = false;
    this.isNull = false;
    this.captured_j0u196$_0 = this.captured_j0u196$_0;
  }
  Object.defineProperty(CapturingSlot.prototype, 'captured', {
    get: function () {
      if (this.captured_j0u196$_0 == null)
        return throwUPAE('captured');
      return this.captured_j0u196$_0;
    },
    set: function (captured) {
      this.captured_j0u196$_0 = captured;
    }
  });
  CapturingSlot.prototype.clear = function () {
    this.isCaptured = false;
    this.isNull = false;
  };
  CapturingSlot.prototype.toString = function () {
    return 'slot(' + (this.isCaptured ? 'captured=' + (this.isNull ? 'null' : InternalPlatformDsl_getInstance().toStr_mzud1t$(this.captured)) : '') + ')';
  };
  CapturingSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CapturingSlot',
    interfaces: []
  };
  var invoke = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_cw2nq3$', function (T_0, isT, $receiver) {
    return $receiver.captured();
  });
  var invoke_0 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_vuxu27$', function (T_0, isT, $receiver, arg1) {
    return $receiver.captured(arg1);
  });
  var invoke_1 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_chvkk2$', function (T_0, isT, $receiver, arg1, arg2) {
    return $receiver.captured(arg1, arg2);
  });
  var invoke_2 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_xsztrm$', function (T_0, isT, $receiver, arg1, arg2, arg3) {
    return $receiver.captured(arg1, arg2, arg3);
  });
  var invoke_3 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_ckrss5$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4) {
    return $receiver.captured(arg1, arg2, arg3, arg4);
  });
  var invoke_4 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_3m8bsd$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5);
  });
  var invoke_5 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_perno0$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6);
  });
  var invoke_6 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_9yj41g$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
  });
  var invoke_7 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_ni268z$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
  });
  var invoke_8 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_x36rk6$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  });
  var invoke_9 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_ovvmrz$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
  });
  var invoke_10 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_wl4zxw$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11);
  });
  var invoke_11 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_rihwto$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12);
  });
  var invoke_12 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_86uhnz$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13);
  });
  var invoke_13 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_lpa4ff$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14);
  });
  var invoke_14 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_kzv8gi$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
  });
  var invoke_15 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_7l273i$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16);
  });
  var invoke_16 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_j8xlkh$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17);
  });
  var invoke_17 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_qpg6x7$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18);
  });
  var invoke_18 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_tvtdvh$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19);
  });
  var invoke_19 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_jf49j5$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20);
  });
  var invoke_20 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_70acq5$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21);
  });
  var invoke_21 = defineInlineFunction('mockk-dsl-js.io.mockk.invoke_sszf60$', function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22) {
    return $receiver.captured(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22);
  });
  var coInvoke = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ywor0b$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver));
    };
  }));
  var coInvoke_0 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_wv2m0t$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1));
    };
  }));
  var coInvoke_1 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_391g1s$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2));
    };
  }));
  var coInvoke_2 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ii0pmw$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3));
    };
  }));
  var coInvoke_3 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_9tm5h9$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4));
    };
  }));
  var coInvoke_4 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_4njv1x$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5));
    };
  }));
  var coInvoke_5 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_8oogee$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6));
    };
  }));
  var coInvoke_6 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ysx3y2$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7));
    };
  }));
  var coInvoke_7 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_fap03b$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8));
    };
  }));
  var coInvoke_8 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_exf08c$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9));
    };
  }));
  var coInvoke_9 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_k1lxk7$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10));
    };
  }));
  var coInvoke_10 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_3rlegg$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11));
    };
  }));
  var coInvoke_11 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_r207y4$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12));
    };
  }));
  var coInvoke_12 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ehb8r1$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13));
    };
  }));
  var coInvoke_13 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_detld1$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14));
    };
  }));
  var coInvoke_14 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ofkcoe$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15));
    };
  }));
  var coInvoke_15 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_ptak96$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16));
    };
  }));
  var coInvoke_16 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_o6c20d$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17));
    };
  }));
  var coInvoke_17 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_os6boz$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18));
    };
  }));
  var coInvoke_18 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_2a0xqp$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19));
    };
  }));
  var coInvoke_19 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_p3q8db$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20));
    };
  }));
  var coInvoke_20 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_7u6pel$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
      this.local$closure$arg21 = closure$arg21_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this.local$closure$arg21, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21));
    };
  }));
  var coInvoke_21 = defineInlineFunction('mockk-dsl-js.io.mockk.coInvoke_edcgsa$', wrapFunction(function () {
    var mockk = _.io.mockk;
    function coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$coInvoke$lambda(this$coInvoke_0, closure$arg1_0, closure$arg2_0, closure$arg3_0, closure$arg4_0, closure$arg5_0, closure$arg6_0, closure$arg7_0, closure$arg8_0, closure$arg9_0, closure$arg10_0, closure$arg11_0, closure$arg12_0, closure$arg13_0, closure$arg14_0, closure$arg15_0, closure$arg16_0, closure$arg17_0, closure$arg18_0, closure$arg19_0, closure$arg20_0, closure$arg21_0, closure$arg22_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$this$coInvoke = this$coInvoke_0;
      this.local$closure$arg1 = closure$arg1_0;
      this.local$closure$arg2 = closure$arg2_0;
      this.local$closure$arg3 = closure$arg3_0;
      this.local$closure$arg4 = closure$arg4_0;
      this.local$closure$arg5 = closure$arg5_0;
      this.local$closure$arg6 = closure$arg6_0;
      this.local$closure$arg7 = closure$arg7_0;
      this.local$closure$arg8 = closure$arg8_0;
      this.local$closure$arg9 = closure$arg9_0;
      this.local$closure$arg10 = closure$arg10_0;
      this.local$closure$arg11 = closure$arg11_0;
      this.local$closure$arg12 = closure$arg12_0;
      this.local$closure$arg13 = closure$arg13_0;
      this.local$closure$arg14 = closure$arg14_0;
      this.local$closure$arg15 = closure$arg15_0;
      this.local$closure$arg16 = closure$arg16_0;
      this.local$closure$arg17 = closure$arg17_0;
      this.local$closure$arg18 = closure$arg18_0;
      this.local$closure$arg19 = closure$arg19_0;
      this.local$closure$arg20 = closure$arg20_0;
      this.local$closure$arg21 = closure$arg21_0;
      this.local$closure$arg22 = closure$arg22_0;
    }
    Coroutine$coInvoke$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$coInvoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$coInvoke$lambda.prototype.constructor = Coroutine$coInvoke$lambda;
    Coroutine$coInvoke$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$coInvoke.captured(this.local$closure$arg1, this.local$closure$arg2, this.local$closure$arg3, this.local$closure$arg4, this.local$closure$arg5, this.local$closure$arg6, this.local$closure$arg7, this.local$closure$arg8, this.local$closure$arg9, this.local$closure$arg10, this.local$closure$arg11, this.local$closure$arg12, this.local$closure$arg13, this.local$closure$arg14, this.local$closure$arg15, this.local$closure$arg16, this.local$closure$arg17, this.local$closure$arg18, this.local$closure$arg19, this.local$closure$arg20, this.local$closure$arg21, this.local$closure$arg22, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (T_0, isT, $receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22) {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(coInvoke$lambda($receiver, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22));
    };
  }));
  function Matcher() {
  }
  Matcher.prototype.substitute_kinntx$ = function (map) {
    return this;
  };
  Matcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Matcher',
    interfaces: []
  };
  function s($receiver, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.get_11rb$(value)) != null ? tmp$ : value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  }
  function TypedMatcher() {
  }
  TypedMatcher.prototype.checkType_s8jyv4$ = function (arg) {
    if (this.argumentType.simpleName === null) {
      return true;
    }
    return this.argumentType.isInstance_s8jyv4$(arg);
  };
  TypedMatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypedMatcher',
    interfaces: []
  };
  function EquivalentMatcher() {
  }
  EquivalentMatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EquivalentMatcher',
    interfaces: []
  };
  function CapturingMatcher() {
  }
  CapturingMatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CapturingMatcher',
    interfaces: []
  };
  function CompositeMatcher() {
  }
  CompositeMatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeMatcher',
    interfaces: []
  };
  function Answer() {
  }
  Answer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Answer',
    interfaces: []
  };
  function Call(retType, invocation, matcher) {
    this.retType = retType;
    this.invocation = invocation;
    this.matcher = matcher;
  }
  Call.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Call',
    interfaces: []
  };
  Call.prototype.component1 = function () {
    return this.retType;
  };
  Call.prototype.component2 = function () {
    return this.invocation;
  };
  Call.prototype.component3 = function () {
    return this.matcher;
  };
  Call.prototype.copy_v9bexn$ = function (retType, invocation, matcher) {
    return new Call(retType === void 0 ? this.retType : retType, invocation === void 0 ? this.invocation : invocation, matcher === void 0 ? this.matcher : matcher);
  };
  Call.prototype.toString = function () {
    return 'Call(retType=' + Kotlin.toString(this.retType) + (', invocation=' + Kotlin.toString(this.invocation)) + (', matcher=' + Kotlin.toString(this.matcher)) + ')';
  };
  Call.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.retType) | 0;
    result = result * 31 + Kotlin.hashCode(this.invocation) | 0;
    result = result * 31 + Kotlin.hashCode(this.matcher) | 0;
    return result;
  };
  Call.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.retType, other.retType) && Kotlin.equals(this.invocation, other.invocation) && Kotlin.equals(this.matcher, other.matcher)))));
  };
  function MethodDescription(name, returnType, declaringClass, paramTypes, varArgsArg) {
    this.name = name;
    this.returnType = returnType;
    this.declaringClass = declaringClass;
    this.paramTypes = paramTypes;
    this.varArgsArg = varArgsArg;
  }
  MethodDescription.prototype.toString = function () {
    return this.name + '(' + this.argsToStr() + ')';
  };
  MethodDescription.prototype.argsToStr = function () {
    var $receiver = this.paramTypes;
    var transform = getCallableRef('argToStr', function ($receiver, argType) {
      return $receiver.argToStr_xo1ogr$(argType);
    }.bind(null, this));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    return joinToString(destination, ', ');
  };
  MethodDescription.prototype.argToStr_xo1ogr$ = function (argType) {
    return argType.simpleName;
  };
  MethodDescription.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MethodDescription))
      return false;
    if (this.name !== other.name)
      tmp$ = false;
    else {
      var tmp$_0;
      if (!((tmp$_0 = this.returnType) != null ? tmp$_0.equals(other.returnType) : null))
        tmp$ = false;
      else {
        var tmp$_1;
        if (!((tmp$_1 = this.declaringClass) != null ? tmp$_1.equals(other.declaringClass) : null))
          tmp$ = false;
        else if (!equals(this.paramTypes, other.paramTypes))
          tmp$ = false;
        else
          tmp$ = true;
      }
    }
    return tmp$;
  };
  MethodDescription.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + this.returnType.hashCode() | 0;
    result = (31 * result | 0) + this.declaringClass.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.paramTypes) | 0;
    return result;
  };
  MethodDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MethodDescription',
    interfaces: []
  };
  MethodDescription.prototype.component1 = function () {
    return this.name;
  };
  MethodDescription.prototype.component2 = function () {
    return this.returnType;
  };
  MethodDescription.prototype.component3 = function () {
    return this.declaringClass;
  };
  MethodDescription.prototype.component4 = function () {
    return this.paramTypes;
  };
  MethodDescription.prototype.component5 = function () {
    return this.varArgsArg;
  };
  MethodDescription.prototype.copy_lcphay$ = function (name, returnType, declaringClass, paramTypes, varArgsArg) {
    return new MethodDescription(name === void 0 ? this.name : name, returnType === void 0 ? this.returnType : returnType, declaringClass === void 0 ? this.declaringClass : declaringClass, paramTypes === void 0 ? this.paramTypes : paramTypes, varArgsArg === void 0 ? this.varArgsArg : varArgsArg);
  };
  function Invocation(self_0, stub, method, args, timestamp, originalCall) {
    this.self = self_0;
    this.stub = stub;
    this.method = method;
    this.args = args;
    this.timestamp = timestamp;
    this.originalCall = originalCall;
  }
  Invocation.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Invocation))
      return false;
    if (this.self !== other.self)
      tmp$ = false;
    else {
      var tmp$_0;
      if (!((tmp$_0 = this.method) != null ? tmp$_0.equals(other.method) : null))
        tmp$ = false;
      else if (!equals(this.args, other.args))
        tmp$ = false;
      else
        tmp$ = true;
    }
    return tmp$;
  };
  Invocation.prototype.hashCode = function () {
    var result = InternalPlatformDsl_getInstance().identityHashCode_za3rmp$(this.self);
    result = (31 * result | 0) + this.method.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.args) | 0;
    return result;
  };
  function Invocation$toString$lambda(it) {
    return InternalPlatformDsl_getInstance().toStr_mzud1t$(it);
  }
  Invocation.prototype.toString = function () {
    return this.self.toString() + '.' + this.method.name + '(' + joinToString(this.args, ', ', void 0, void 0, void 0, void 0, Invocation$toString$lambda) + ')';
  };
  Invocation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Invocation',
    interfaces: []
  };
  Invocation.prototype.component1 = function () {
    return this.self;
  };
  Invocation.prototype.component2 = function () {
    return this.stub;
  };
  Invocation.prototype.component3 = function () {
    return this.method;
  };
  Invocation.prototype.component4 = function () {
    return this.args;
  };
  Invocation.prototype.component5 = function () {
    return this.timestamp;
  };
  Invocation.prototype.component6 = function () {
    return this.originalCall;
  };
  Invocation.prototype.copy_8gbgo4$ = function (self_0, stub, method, args, timestamp, originalCall) {
    return new Invocation(self_0 === void 0 ? this.self : self_0, stub === void 0 ? this.stub : stub, method === void 0 ? this.method : method, args === void 0 ? this.args : args, timestamp === void 0 ? this.timestamp : timestamp, originalCall === void 0 ? this.originalCall : originalCall);
  };
  function InvocationMatcher(self_0, method, args, allAny) {
    this.self = self_0;
    this.method = method;
    this.args = args;
    this.allAny = allAny;
  }
  InvocationMatcher.prototype.match_2pihsr$ = function (invocation) {
    var tmp$, tmp$_0;
    if (this.self !== invocation.self) {
      return false;
    }
    if (!((tmp$ = this.method) != null ? tmp$.equals(invocation.method) : null)) {
      return false;
    }
    if (this.allAny) {
      if (this.args.size < invocation.args.size) {
        return false;
      }
    }
     else {
      if (this.args.size !== invocation.args.size) {
        return false;
      }
    }
    tmp$_0 = invocation.args.size;
    for (var i = 0; i < tmp$_0; i++) {
      var matcher = this.args.get_za3lpa$(i);
      var arg = invocation.args.get_za3lpa$(i);
      if (Kotlin.isType(matcher, TypedMatcher)) {
        if (!matcher.checkType_s8jyv4$(arg)) {
          return false;
        }
      }
      if (!matcher.match_11rb$(arg)) {
        return false;
      }
    }
    return true;
  };
  InvocationMatcher.prototype.captureAnswer_2pihsr$ = function (invocation) {
    var tmp$;
    tmp$ = withIndex(this.args).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var idx = tmp$_0.component1()
      , argMatcher = tmp$_0.component2();
      if (Kotlin.isType(argMatcher, CapturingMatcher)) {
        argMatcher.capture_s8jyv4$(invocation.args.get_za3lpa$(idx));
      }
    }
  };
  InvocationMatcher.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, InvocationMatcher))
      return false;
    if (this.self !== other.self)
      tmp$ = false;
    else {
      var tmp$_0;
      if (!((tmp$_0 = this.method) != null ? tmp$_0.equals(other.method) : null))
        tmp$ = false;
      else if (!equals(this.args, other.args))
        tmp$ = false;
      else
        tmp$ = true;
    }
    return tmp$;
  };
  InvocationMatcher.prototype.hashCode = function () {
    var result = InternalPlatformDsl_getInstance().identityHashCode_za3rmp$(this.self);
    result = (31 * result | 0) + this.method.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.args) | 0;
    return result;
  };
  InvocationMatcher.prototype.toString = function () {
    return this.self.toString() + '.' + this.method.name + '(' + joinToString(this.args, ', ') + '))';
  };
  InvocationMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvocationMatcher',
    interfaces: []
  };
  InvocationMatcher.prototype.component1 = function () {
    return this.self;
  };
  InvocationMatcher.prototype.component2 = function () {
    return this.method;
  };
  InvocationMatcher.prototype.component3 = function () {
    return this.args;
  };
  InvocationMatcher.prototype.component4 = function () {
    return this.allAny;
  };
  InvocationMatcher.prototype.copy_qqcev4$ = function (self_0, method, args, allAny) {
    return new InvocationMatcher(self_0 === void 0 ? this.self : self_0, method === void 0 ? this.method : method, args === void 0 ? this.args : args, allAny === void 0 ? this.allAny : allAny);
  };
  function RecordedCall(retValue, isRetValueMock, retType, matcher, selfChain, argChains) {
    this.retValue = retValue;
    this.isRetValueMock = isRetValueMock;
    this.retType = retType;
    this.matcher = matcher;
    this.selfChain = selfChain;
    this.argChains = argChains;
  }
  RecordedCall.prototype.toString = function () {
    return 'RecordedCall(retValue=' + InternalPlatformDsl_getInstance().toStr_mzud1t$(this.retValue) + ', retType=' + InternalPlatformDsl_getInstance().toStr_mzud1t$(this.retType) + ', isRetValueMock=' + this.isRetValueMock + ' matcher=' + this.matcher + ')';
  };
  RecordedCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecordedCall',
    interfaces: []
  };
  RecordedCall.prototype.component1 = function () {
    return this.retValue;
  };
  RecordedCall.prototype.component2 = function () {
    return this.isRetValueMock;
  };
  RecordedCall.prototype.component3 = function () {
    return this.retType;
  };
  RecordedCall.prototype.component4 = function () {
    return this.matcher;
  };
  RecordedCall.prototype.component5 = function () {
    return this.selfChain;
  };
  RecordedCall.prototype.component6 = function () {
    return this.argChains;
  };
  RecordedCall.prototype.copy_aaa1mo$ = function (retValue, isRetValueMock, retType, matcher, selfChain, argChains) {
    return new RecordedCall(retValue === void 0 ? this.retValue : retValue, isRetValueMock === void 0 ? this.isRetValueMock : isRetValueMock, retType === void 0 ? this.retType : retType, matcher === void 0 ? this.matcher : matcher, selfChain === void 0 ? this.selfChain : selfChain, argChains === void 0 ? this.argChains : argChains);
  };
  RecordedCall.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.retValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRetValueMock) | 0;
    result = result * 31 + Kotlin.hashCode(this.retType) | 0;
    result = result * 31 + Kotlin.hashCode(this.matcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfChain) | 0;
    result = result * 31 + Kotlin.hashCode(this.argChains) | 0;
    return result;
  };
  RecordedCall.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.retValue, other.retValue) && Kotlin.equals(this.isRetValueMock, other.isRetValueMock) && Kotlin.equals(this.retType, other.retType) && Kotlin.equals(this.matcher, other.matcher) && Kotlin.equals(this.selfChain, other.selfChain) && Kotlin.equals(this.argChains, other.argChains)))));
  };
  function Deregisterable() {
  }
  Deregisterable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Deregisterable',
    interfaces: []
  };
  var use = defineInlineFunction('mockk-dsl-js.io.mockk.use_u8201c$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, block) {
      try {
        return block($receiver);
      }
      finally {
        try {
          $receiver.deregister();
        }
         catch (closeException) {
          if (!Kotlin.isType(closeException, Throwable))
            throw closeException;
        }
      }
    };
  }));
  function ConstantAnswer(constantValue) {
    this.constantValue = constantValue;
  }
  ConstantAnswer.prototype.answer_fwxiwj$ = function (call) {
    return this.constantValue;
  };
  ConstantAnswer.prototype.toString = function () {
    return 'const(' + this.constantValue + ')';
  };
  ConstantAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantAnswer',
    interfaces: [Answer]
  };
  ConstantAnswer.prototype.component1 = function () {
    return this.constantValue;
  };
  ConstantAnswer.prototype.copy_11rb$ = function (constantValue) {
    return new ConstantAnswer(constantValue === void 0 ? this.constantValue : constantValue);
  };
  ConstantAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.constantValue) | 0;
    return result;
  };
  ConstantAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.constantValue, other.constantValue))));
  };
  function FunctionAnswer(answerFunc) {
    this.answerFunc = answerFunc;
  }
  FunctionAnswer.prototype.answer_fwxiwj$ = function (call) {
    return this.answerFunc(call);
  };
  FunctionAnswer.prototype.toString = function () {
    return 'answer()';
  };
  FunctionAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionAnswer',
    interfaces: [Answer]
  };
  FunctionAnswer.prototype.component1 = function () {
    return this.answerFunc;
  };
  FunctionAnswer.prototype.copy_8muctw$ = function (answerFunc) {
    return new FunctionAnswer(answerFunc === void 0 ? this.answerFunc : answerFunc);
  };
  FunctionAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.answerFunc) | 0;
    return result;
  };
  FunctionAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.answerFunc, other.answerFunc))));
  };
  function ManyAnswerable() {
  }
  ManyAnswerable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ManyAnswerable',
    interfaces: [Answer]
  };
  function ManyAnswersAnswer(answers) {
    this.answers = answers;
    this.n_0 = 0;
    this.prevAnswer_0 = null;
    var $receiver = this.answers;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Kotlin.isType(item, ManyAnswerable) ? item : new ManyAnswersAnswer$SingleAnswer(this, item));
    }
    this.manyAnswers = destination;
  }
  function ManyAnswersAnswer$SingleAnswer($outer, wrapped) {
    this.$outer = $outer;
    this.wrapped = wrapped;
    this.answered = false;
  }
  Object.defineProperty(ManyAnswersAnswer$SingleAnswer.prototype, 'hasMore', {
    get: function () {
      return !this.answered;
    }
  });
  ManyAnswersAnswer$SingleAnswer.prototype.answer_fwxiwj$ = function (call) {
    this.answered = true;
    return this.wrapped.answer_fwxiwj$(call);
  };
  ManyAnswersAnswer$SingleAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleAnswer',
    interfaces: [ManyAnswerable]
  };
  ManyAnswersAnswer.prototype.nextAnswerable_0 = function () {
    while (this.n_0 < this.answers.size) {
      if (this.manyAnswers.get_za3lpa$(this.n_0).hasMore) {
        return this.manyAnswers.get_za3lpa$(this.n_0);
      }
      this.prevAnswer_0 = this.manyAnswers.get_za3lpa$(this.n_0);
      this.n_0 = this.n_0 + 1 | 0;
    }
    return null;
  };
  Object.defineProperty(ManyAnswersAnswer.prototype, 'hasMore', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.nextAnswerable_0()) != null ? tmp$.hasMore : null) != null ? tmp$_0 : false;
    }
  });
  ManyAnswersAnswer.prototype.answer_fwxiwj$ = function (call) {
    var next = this.nextAnswerable_0();
    if (next != null) {
      return next.answer_fwxiwj$(call);
    }
    var prev = this.prevAnswer_0;
    if (prev != null) {
      return prev.answer_fwxiwj$(call);
    }
    throw new RuntimeException('In many answers answer no answer available');
  };
  ManyAnswersAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ManyAnswersAnswer',
    interfaces: [ManyAnswerable]
  };
  ManyAnswersAnswer.prototype.component1 = function () {
    return this.answers;
  };
  ManyAnswersAnswer.prototype.copy_7xknl4$ = function (answers) {
    return new ManyAnswersAnswer(answers === void 0 ? this.answers : answers);
  };
  ManyAnswersAnswer.prototype.toString = function () {
    return 'ManyAnswersAnswer(answers=' + Kotlin.toString(this.answers) + ')';
  };
  ManyAnswersAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.answers) | 0;
    return result;
  };
  ManyAnswersAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.answers, other.answers))));
  };
  function ThrowingAnswer(ex) {
    this.ex = ex;
  }
  ThrowingAnswer.prototype.answer_fwxiwj$ = function (call) {
    throw this.ex;
  };
  ThrowingAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThrowingAnswer',
    interfaces: [Answer]
  };
  ThrowingAnswer.prototype.component1 = function () {
    return this.ex;
  };
  ThrowingAnswer.prototype.copy_tcv7n7$ = function (ex) {
    return new ThrowingAnswer(ex === void 0 ? this.ex : ex);
  };
  ThrowingAnswer.prototype.toString = function () {
    return 'ThrowingAnswer(ex=' + Kotlin.toString(this.ex) + ')';
  };
  ThrowingAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ex) | 0;
    return result;
  };
  ThrowingAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ex, other.ex))));
  };
  function MockKGateway() {
    MockKGateway$Companion_getInstance();
  }
  function MockKGateway$Companion() {
    MockKGateway$Companion_instance = this;
    this.implementation_i2xo8g$_0 = this.implementation_i2xo8g$_0;
  }
  Object.defineProperty(MockKGateway$Companion.prototype, 'implementation', {
    get: function () {
      if (this.implementation_i2xo8g$_0 == null)
        return throwUPAE('implementation');
      return this.implementation_i2xo8g$_0;
    },
    set: function (implementation) {
      this.implementation_i2xo8g$_0 = implementation;
    }
  });
  MockKGateway$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MockKGateway$Companion_instance = null;
  function MockKGateway$Companion_getInstance() {
    if (MockKGateway$Companion_instance === null) {
      new MockKGateway$Companion();
    }
    return MockKGateway$Companion_instance;
  }
  function MockKGateway$MockFactory() {
  }
  MockKGateway$MockFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MockFactory',
    interfaces: []
  };
  function MockKGateway$StaticMockFactory() {
  }
  MockKGateway$StaticMockFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StaticMockFactory',
    interfaces: []
  };
  function MockKGateway$Clearer() {
  }
  MockKGateway$Clearer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clearer',
    interfaces: []
  };
  function MockKGateway$Stubber() {
  }
  MockKGateway$Stubber.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Stubber',
    interfaces: []
  };
  function MockKGateway$Verifier() {
  }
  MockKGateway$Verifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Verifier',
    interfaces: []
  };
  function MockKGateway$VerificationParameters(ordering, min, max, inverse) {
    this.ordering = ordering;
    this.min = min;
    this.max = max;
    this.inverse = inverse;
  }
  MockKGateway$VerificationParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerificationParameters',
    interfaces: []
  };
  MockKGateway$VerificationParameters.prototype.component1 = function () {
    return this.ordering;
  };
  MockKGateway$VerificationParameters.prototype.component2 = function () {
    return this.min;
  };
  MockKGateway$VerificationParameters.prototype.component3 = function () {
    return this.max;
  };
  MockKGateway$VerificationParameters.prototype.component4 = function () {
    return this.inverse;
  };
  MockKGateway$VerificationParameters.prototype.copy_9wlg76$ = function (ordering, min, max, inverse) {
    return new MockKGateway$VerificationParameters(ordering === void 0 ? this.ordering : ordering, min === void 0 ? this.min : min, max === void 0 ? this.max : max, inverse === void 0 ? this.inverse : inverse);
  };
  MockKGateway$VerificationParameters.prototype.toString = function () {
    return 'VerificationParameters(ordering=' + Kotlin.toString(this.ordering) + (', min=' + Kotlin.toString(this.min)) + (', max=' + Kotlin.toString(this.max)) + (', inverse=' + Kotlin.toString(this.inverse)) + ')';
  };
  MockKGateway$VerificationParameters.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ordering) | 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    result = result * 31 + Kotlin.hashCode(this.inverse) | 0;
    return result;
  };
  MockKGateway$VerificationParameters.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ordering, other.ordering) && Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max) && Kotlin.equals(this.inverse, other.inverse)))));
  };
  function MockKGateway$CallRecorder() {
  }
  MockKGateway$CallRecorder.prototype.round_vux9f0$ = function (n, total, callback$default) {
    if (total === void 0)
      total = 64;
    callback$default ? callback$default(n, total) : this.round_vux9f0$$default(n, total);
  };
  MockKGateway$CallRecorder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CallRecorder',
    interfaces: []
  };
  function MockKGateway$CallVerifier() {
  }
  MockKGateway$CallVerifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CallVerifier',
    interfaces: []
  };
  function MockKGateway$VerificationResult(matches, message) {
    if (message === void 0)
      message = null;
    this.matches = matches;
    this.message = message;
  }
  MockKGateway$VerificationResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerificationResult',
    interfaces: []
  };
  MockKGateway$VerificationResult.prototype.component1 = function () {
    return this.matches;
  };
  MockKGateway$VerificationResult.prototype.component2 = function () {
    return this.message;
  };
  MockKGateway$VerificationResult.prototype.copy_ifx8ge$ = function (matches, message) {
    return new MockKGateway$VerificationResult(matches === void 0 ? this.matches : matches, message === void 0 ? this.message : message);
  };
  MockKGateway$VerificationResult.prototype.toString = function () {
    return 'VerificationResult(matches=' + Kotlin.toString(this.matches) + (', message=' + Kotlin.toString(this.message)) + ')';
  };
  MockKGateway$VerificationResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  MockKGateway$VerificationResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.message, other.message)))));
  };
  function MockKGateway$InstanceFactoryRegistry() {
  }
  MockKGateway$InstanceFactoryRegistry.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstanceFactoryRegistry',
    interfaces: []
  };
  function MockKGateway$InstanceFactory() {
  }
  MockKGateway$InstanceFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstanceFactory',
    interfaces: []
  };
  MockKGateway.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MockKGateway',
    interfaces: []
  };
  function Ref() {
  }
  Ref.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Ref',
    interfaces: []
  };
  function EqMatcher(valueArg, ref, inverse) {
    if (ref === void 0)
      ref = false;
    if (inverse === void 0)
      inverse = false;
    this.valueArg_0 = valueArg;
    this.ref = ref;
    this.inverse = inverse;
    this.value = InternalPlatformDsl_getInstance().unboxChar_za3rmp$(this.valueArg_0);
  }
  EqMatcher.prototype.match_11rb$ = function (arg) {
    var tmp$;
    if (this.ref) {
      tmp$ = arg === this.value;
    }
     else {
      if (arg == null) {
        tmp$ = false;
      }
       else {
        var unboxedArg = InternalPlatformDsl_getInstance().unboxChar_za3rmp$(arg);
        tmp$ = InternalPlatformDsl_getInstance().deepEquals_oaftn8$(unboxedArg, this.value);
      }
    }
    var result = tmp$;
    return this.inverse ? !result : result;
  };
  EqMatcher.prototype.substitute_kinntx$ = function (map) {
    return this.copy_i0kr2n$(s(map, this.value));
  };
  EqMatcher.prototype.toString = function () {
    return this.ref ? (this.inverse ? 'refNonEq' : 'refEq') + '(' + InternalPlatformDsl_getInstance().toStr_mzud1t$(this.value) + ')' : (this.inverse ? 'nonEq' : 'eq') + '(' + InternalPlatformDsl_getInstance().toStr_mzud1t$(this.value) + ')';
  };
  EqMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EqMatcher',
    interfaces: [Matcher]
  };
  EqMatcher.prototype.component1_0 = function () {
    return this.valueArg_0;
  };
  EqMatcher.prototype.component2 = function () {
    return this.ref;
  };
  EqMatcher.prototype.component3 = function () {
    return this.inverse;
  };
  EqMatcher.prototype.copy_i0kr2n$ = function (valueArg, ref, inverse) {
    return new EqMatcher(valueArg === void 0 ? this.valueArg_0 : valueArg, ref === void 0 ? this.ref : ref, inverse === void 0 ? this.inverse : inverse);
  };
  EqMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.valueArg_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.ref) | 0;
    result = result * 31 + Kotlin.hashCode(this.inverse) | 0;
    return result;
  };
  EqMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.valueArg_0, other.valueArg_0) && Kotlin.equals(this.ref, other.ref) && Kotlin.equals(this.inverse, other.inverse)))));
  };
  function ConstantMatcher(constValue) {
    this.constValue = constValue;
  }
  ConstantMatcher.prototype.match_11rb$ = function (arg) {
    return this.constValue;
  };
  ConstantMatcher.prototype.toString = function () {
    return this.constValue ? 'any()' : 'none()';
  };
  ConstantMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantMatcher',
    interfaces: [Matcher]
  };
  ConstantMatcher.prototype.component1 = function () {
    return this.constValue;
  };
  ConstantMatcher.prototype.copy_6taknv$ = function (constValue) {
    return new ConstantMatcher(constValue === void 0 ? this.constValue : constValue);
  };
  ConstantMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.constValue) | 0;
    return result;
  };
  ConstantMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.constValue, other.constValue))));
  };
  function FunctionMatcher(matchingFunc, argumentType) {
    this.matchingFunc = matchingFunc;
    this.argumentType_8k05p6$_0 = argumentType;
  }
  Object.defineProperty(FunctionMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_8k05p6$_0;
    }
  });
  FunctionMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  FunctionMatcher.prototype.match_11rb$ = function (arg) {
    return this.matchingFunc(arg);
  };
  FunctionMatcher.prototype.toString = function () {
    return 'matcher<' + toString(this.argumentType.simpleName) + '>()';
  };
  FunctionMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionMatcher',
    interfaces: [EquivalentMatcher, TypedMatcher, Matcher]
  };
  FunctionMatcher.prototype.component1 = function () {
    return this.matchingFunc;
  };
  FunctionMatcher.prototype.component2 = function () {
    return this.argumentType;
  };
  FunctionMatcher.prototype.copy_okv3ep$ = function (matchingFunc, argumentType) {
    return new FunctionMatcher(matchingFunc === void 0 ? this.matchingFunc : matchingFunc, argumentType === void 0 ? this.argumentType : argumentType);
  };
  FunctionMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matchingFunc) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentType) | 0;
    return result;
  };
  FunctionMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matchingFunc, other.matchingFunc) && Kotlin.equals(this.argumentType, other.argumentType)))));
  };
  function CaptureMatcher(captureList, argumentType) {
    this.captureList = captureList;
    this.argumentType_zap6iy$_0 = argumentType;
  }
  Object.defineProperty(CaptureMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_zap6iy$_0;
    }
  });
  CaptureMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  CaptureMatcher.prototype.capture_s8jyv4$ = function (arg) {
    var tmp$;
    this.captureList.add_11rb$(Kotlin.isType(tmp$ = arg, Any) ? tmp$ : throwCCE());
  };
  CaptureMatcher.prototype.match_11rb$ = function (arg) {
    return true;
  };
  CaptureMatcher.prototype.toString = function () {
    return 'capture<' + toString(this.argumentType.simpleName) + '>()';
  };
  CaptureMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaptureMatcher',
    interfaces: [EquivalentMatcher, TypedMatcher, CapturingMatcher, Matcher]
  };
  CaptureMatcher.prototype.component1 = function () {
    return this.captureList;
  };
  CaptureMatcher.prototype.component2 = function () {
    return this.argumentType;
  };
  CaptureMatcher.prototype.copy_mkg7no$ = function (captureList, argumentType) {
    return new CaptureMatcher(captureList === void 0 ? this.captureList : captureList, argumentType === void 0 ? this.argumentType : argumentType);
  };
  CaptureMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.captureList) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentType) | 0;
    return result;
  };
  CaptureMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.captureList, other.captureList) && Kotlin.equals(this.argumentType, other.argumentType)))));
  };
  function CaptureNullableMatcher(captureList, argumentType) {
    this.captureList = captureList;
    this.argumentType_dvcoq3$_0 = argumentType;
  }
  Object.defineProperty(CaptureNullableMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_dvcoq3$_0;
    }
  });
  CaptureNullableMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  CaptureNullableMatcher.prototype.capture_s8jyv4$ = function (arg) {
    var tmp$;
    this.captureList.add_11rb$((tmp$ = arg) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  CaptureNullableMatcher.prototype.match_11rb$ = function (arg) {
    return true;
  };
  CaptureNullableMatcher.prototype.toString = function () {
    return 'captureNullable<' + toString(this.argumentType.simpleName) + '>()';
  };
  CaptureNullableMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaptureNullableMatcher',
    interfaces: [EquivalentMatcher, TypedMatcher, CapturingMatcher, Matcher]
  };
  CaptureNullableMatcher.prototype.component1 = function () {
    return this.captureList;
  };
  CaptureNullableMatcher.prototype.component2 = function () {
    return this.argumentType;
  };
  CaptureNullableMatcher.prototype.copy_mkg7no$ = function (captureList, argumentType) {
    return new CaptureNullableMatcher(captureList === void 0 ? this.captureList : captureList, argumentType === void 0 ? this.argumentType : argumentType);
  };
  CaptureNullableMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.captureList) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentType) | 0;
    return result;
  };
  CaptureNullableMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.captureList, other.captureList) && Kotlin.equals(this.argumentType, other.argumentType)))));
  };
  function CapturingSlotMatcher(captureSlot, argumentType) {
    this.captureSlot = captureSlot;
    this.argumentType_n34m4l$_0 = argumentType;
  }
  Object.defineProperty(CapturingSlotMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_n34m4l$_0;
    }
  });
  CapturingSlotMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  CapturingSlotMatcher.prototype.capture_s8jyv4$ = function (arg) {
    var tmp$;
    if (arg == null) {
      this.captureSlot.isNull = true;
    }
     else {
      this.captureSlot.isNull = false;
      this.captureSlot.captured = Kotlin.isType(tmp$ = arg, Any) ? tmp$ : throwCCE();
    }
    this.captureSlot.isCaptured = true;
  };
  CapturingSlotMatcher.prototype.match_11rb$ = function (arg) {
    return true;
  };
  CapturingSlotMatcher.prototype.toString = function () {
    return 'slotCapture<' + toString(this.argumentType.simpleName) + '>()';
  };
  CapturingSlotMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CapturingSlotMatcher',
    interfaces: [EquivalentMatcher, TypedMatcher, CapturingMatcher, Matcher]
  };
  CapturingSlotMatcher.prototype.component1 = function () {
    return this.captureSlot;
  };
  CapturingSlotMatcher.prototype.component2 = function () {
    return this.argumentType;
  };
  CapturingSlotMatcher.prototype.copy_iyewdu$ = function (captureSlot, argumentType) {
    return new CapturingSlotMatcher(captureSlot === void 0 ? this.captureSlot : captureSlot, argumentType === void 0 ? this.argumentType : argumentType);
  };
  CapturingSlotMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.captureSlot) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentType) | 0;
    return result;
  };
  CapturingSlotMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.captureSlot, other.captureSlot) && Kotlin.equals(this.argumentType, other.argumentType)))));
  };
  function ComparingMatcher(value, cmpFunc, argumentType) {
    this.value = value;
    this.cmpFunc = cmpFunc;
    this.argumentType_52isrq$_0 = argumentType;
  }
  Object.defineProperty(ComparingMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_52isrq$_0;
    }
  });
  ComparingMatcher.prototype.match_11rb$ = function (arg) {
    var tmp$, tmp$_0;
    if (arg == null)
      return false;
    var n = Kotlin.compareTo(arg, this.value);
    tmp$ = this.cmpFunc;
    if (tmp$ === 2)
      tmp$_0 = n >= 0;
    else if (tmp$ === 1)
      tmp$_0 = n > 0;
    else if (tmp$ === 0)
      tmp$_0 = n === 0;
    else if (tmp$ === -1)
      tmp$_0 = n < 0;
    else if (tmp$ === -2)
      tmp$_0 = n <= 0;
    else
      throw new MockKException('Bad comparision function');
    return tmp$_0;
  };
  ComparingMatcher.prototype.substitute_kinntx$ = function (map) {
    return this.copy_jnvpa1$(s(map, this.value));
  };
  ComparingMatcher.prototype.toString = function () {
    var tmp$;
    tmp$ = this.cmpFunc;
    if (tmp$ === -2)
      return 'lessAndEquals(' + this.value + ')';
    else if (tmp$ === -1)
      return 'less(' + this.value + ')';
    else if (tmp$ === 0)
      return 'cmpEq(' + this.value + ')';
    else if (tmp$ === 1)
      return 'more(' + this.value + ')';
    else if (tmp$ === 2)
      return 'moreAndEquals(' + this.value + ')';
    else
      throw new MockKException('Bad comparision function');
  };
  ComparingMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComparingMatcher',
    interfaces: [TypedMatcher, Matcher]
  };
  ComparingMatcher.prototype.component1 = function () {
    return this.value;
  };
  ComparingMatcher.prototype.component2 = function () {
    return this.cmpFunc;
  };
  ComparingMatcher.prototype.component3 = function () {
    return this.argumentType;
  };
  ComparingMatcher.prototype.copy_jnvpa1$ = function (value, cmpFunc, argumentType) {
    return new ComparingMatcher(value === void 0 ? this.value : value, cmpFunc === void 0 ? this.cmpFunc : cmpFunc, argumentType === void 0 ? this.argumentType : argumentType);
  };
  ComparingMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.cmpFunc) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentType) | 0;
    return result;
  };
  ComparingMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.cmpFunc, other.cmpFunc) && Kotlin.equals(this.argumentType, other.argumentType)))));
  };
  function AndOrMatcher(and, first, second) {
    this.and = and;
    this.first = first;
    this.second = second;
    this.subMatchers_dtb7ne$_0 = null;
  }
  Object.defineProperty(AndOrMatcher.prototype, 'operandValues', {
    get: function () {
      return listOf_0([this.first, this.second]);
    }
  });
  Object.defineProperty(AndOrMatcher.prototype, 'subMatchers', {
    get: function () {
      return this.subMatchers_dtb7ne$_0;
    },
    set: function (subMatchers) {
      this.subMatchers_dtb7ne$_0 = subMatchers;
    }
  });
  AndOrMatcher.prototype.match_11rb$ = function (arg) {
    return this.and ? ensureNotNull(this.subMatchers).get_za3lpa$(0).match_11rb$(arg) && ensureNotNull(this.subMatchers).get_za3lpa$(1).match_11rb$(arg) : ensureNotNull(this.subMatchers).get_za3lpa$(0).match_11rb$(arg) || ensureNotNull(this.subMatchers).get_za3lpa$(1).match_11rb$(arg);
  };
  AndOrMatcher.prototype.substitute_kinntx$ = function (map) {
    var matcher = this.copy_gj9o4n$(void 0, s(map, this.first), s(map, this.second));
    var sm = this.subMatchers;
    if (sm != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(sm, 10));
      var tmp$;
      tmp$ = sm.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.substitute_kinntx$(map));
      }
      matcher.subMatchers = destination;
    }
    return matcher;
  };
  AndOrMatcher.prototype.capture_s8jyv4$ = function (arg) {
    captureSubMatchers(this, arg);
  };
  AndOrMatcher.prototype.toString = function () {
    var sm = this.subMatchers;
    var op = this.and ? 'and' : 'or';
    return sm != null ? op + '(' + sm.get_za3lpa$(0) + ', ' + sm.get_za3lpa$(1) + ')' : op + '()';
  };
  AndOrMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AndOrMatcher',
    interfaces: [CapturingMatcher, CompositeMatcher, Matcher]
  };
  AndOrMatcher.prototype.component1 = function () {
    return this.and;
  };
  AndOrMatcher.prototype.component2 = function () {
    return this.first;
  };
  AndOrMatcher.prototype.component3 = function () {
    return this.second;
  };
  AndOrMatcher.prototype.copy_gj9o4n$ = function (and, first, second) {
    return new AndOrMatcher(and === void 0 ? this.and : and, first === void 0 ? this.first : first, second === void 0 ? this.second : second);
  };
  AndOrMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.and) | 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.second) | 0;
    return result;
  };
  AndOrMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.and, other.and) && Kotlin.equals(this.first, other.first) && Kotlin.equals(this.second, other.second)))));
  };
  function NotMatcher(value) {
    this.value = value;
    this.subMatchers_dct4s3$_0 = null;
  }
  Object.defineProperty(NotMatcher.prototype, 'operandValues', {
    get: function () {
      return listOf(this.value);
    }
  });
  Object.defineProperty(NotMatcher.prototype, 'subMatchers', {
    get: function () {
      return this.subMatchers_dct4s3$_0;
    },
    set: function (subMatchers) {
      this.subMatchers_dct4s3$_0 = subMatchers;
    }
  });
  NotMatcher.prototype.match_11rb$ = function (arg) {
    return !ensureNotNull(this.subMatchers).get_za3lpa$(0).match_11rb$(arg);
  };
  NotMatcher.prototype.substitute_kinntx$ = function (map) {
    var matcher = this.copy_trkh7z$(s(map, this.value));
    var sm = this.subMatchers;
    if (sm != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(sm, 10));
      var tmp$;
      tmp$ = sm.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.substitute_kinntx$(map));
      }
      matcher.subMatchers = destination;
    }
    return matcher;
  };
  NotMatcher.prototype.capture_s8jyv4$ = function (arg) {
    captureSubMatchers(this, arg);
  };
  NotMatcher.prototype.toString = function () {
    var sm = this.subMatchers;
    return sm != null ? 'not(' + sm.get_za3lpa$(0) + ')' : 'not()';
  };
  NotMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotMatcher',
    interfaces: [CapturingMatcher, CompositeMatcher, Matcher]
  };
  NotMatcher.prototype.component1 = function () {
    return this.value;
  };
  NotMatcher.prototype.copy_trkh7z$ = function (value) {
    return new NotMatcher(value === void 0 ? this.value : value);
  };
  NotMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  NotMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function NullCheckMatcher(inverse) {
    if (inverse === void 0)
      inverse = false;
    this.inverse = inverse;
  }
  NullCheckMatcher.prototype.match_11rb$ = function (arg) {
    return this.inverse ? arg != null : arg == null;
  };
  NullCheckMatcher.prototype.toString = function () {
    return this.inverse ? 'notNull()' : 'null()';
  };
  NullCheckMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullCheckMatcher',
    interfaces: [Matcher]
  };
  NullCheckMatcher.prototype.component1 = function () {
    return this.inverse;
  };
  NullCheckMatcher.prototype.copy_6taknv$ = function (inverse) {
    return new NullCheckMatcher(inverse === void 0 ? this.inverse : inverse);
  };
  NullCheckMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.inverse) | 0;
    return result;
  };
  NullCheckMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.inverse, other.inverse))));
  };
  function OfTypeMatcher(cls) {
    this.cls = cls;
  }
  OfTypeMatcher.prototype.match_11rb$ = function (arg) {
    return this.cls.isInstance_s8jyv4$(arg);
  };
  OfTypeMatcher.prototype.toString = function () {
    return 'ofType(' + toString(this.cls.simpleName) + ')';
  };
  OfTypeMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OfTypeMatcher',
    interfaces: [Matcher]
  };
  OfTypeMatcher.prototype.component1 = function () {
    return this.cls;
  };
  OfTypeMatcher.prototype.copy_xo1ogr$ = function (cls) {
    return new OfTypeMatcher(cls === void 0 ? this.cls : cls);
  };
  OfTypeMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cls) | 0;
    return result;
  };
  OfTypeMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.cls, other.cls))));
  };
  function AllAnyMatcher() {
  }
  AllAnyMatcher.prototype.match_11rb$ = function (arg) {
    return true;
  };
  AllAnyMatcher.prototype.toString = function () {
    return 'allAny()';
  };
  AllAnyMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllAnyMatcher',
    interfaces: [Matcher]
  };
  function InvokeMatcher(block) {
    this.block = block;
  }
  InvokeMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  InvokeMatcher.prototype.match_11rb$ = function (arg) {
    if (arg == null) {
      return true;
    }
    this.block(arg);
    return true;
  };
  InvokeMatcher.prototype.toString = function () {
    return 'coInvoke()';
  };
  InvokeMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvokeMatcher',
    interfaces: [EquivalentMatcher, Matcher]
  };
  function AssertMatcher(assertFunction, msg, argumentType, nullable) {
    if (msg === void 0)
      msg = null;
    if (nullable === void 0)
      nullable = false;
    this.assertFunction = assertFunction;
    this.msg = msg;
    this.argumentType_6w4u0c$_0 = argumentType;
    this.nullable = nullable;
  }
  Object.defineProperty(AssertMatcher.prototype, 'argumentType', {
    get: function () {
      return this.argumentType_6w4u0c$_0;
    }
  });
  AssertMatcher.prototype.equivalent = function () {
    return new ConstantMatcher(true);
  };
  AssertMatcher.prototype.checkType_s8jyv4$ = function (arg) {
    if (arg != null && !this.argumentType.isInstance_s8jyv4$(arg)) {
      var argType = Kotlin.getKClassFromExpression(arg).simpleName;
      var requiredType = this.argumentType.simpleName;
      throw new AssertionError('Verification matcher assertion failed:\n' + ('    type <' + toString(argType) + '> is not matching' + '\n') + ('    required by assertion type <' + toString(requiredType) + '>' + '\n'));
    }
    return true;
  };
  AssertMatcher.prototype.match_11rb$ = function (arg) {
    if (!this.nullable) {
      if (arg == null) {
        throw new AssertionError('Verification matcher assertion failed: null passed to non-nullable assert');
      }
    }
    if (!this.assertFunction(arg)) {
      throw new AssertionError('Verification matcher assertion failed' + (this.msg != null ? ': ' + toString(this.msg) : ''));
    }
    return true;
  };
  AssertMatcher.prototype.toString = function () {
    return 'assert<' + toString(this.argumentType.simpleName) + '>()';
  };
  AssertMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssertMatcher',
    interfaces: [EquivalentMatcher, TypedMatcher, Matcher]
  };
  function ArrayMatcher(matchers) {
    this.matchers_0 = matchers;
  }
  var Math_0 = Math;
  ArrayMatcher.prototype.capture_s8jyv4$ = function (arg) {
    if (arg == null) {
      return;
    }
    var arr = InternalPlatformDsl_getInstance().toArray_s8jyvk$(arg);
    var b = this.matchers_0.size;
    var tmp$;
    tmp$ = Math_0.min(arr.length, b) - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      var matcher = this.matchers_0.get_za3lpa$(index);
      if (Kotlin.isType(matcher, CapturingMatcher)) {
        matcher.capture_s8jyv4$(arr[index]);
      }
    }
  };
  ArrayMatcher.prototype.match_11rb$ = function (arg) {
    if (arg == null) {
      return false;
    }
    var arr = InternalPlatformDsl_getInstance().toArray_s8jyvk$(arg);
    if (arr.length !== this.matchers_0.size) {
      return false;
    }
    var tmp$;
    tmp$ = arr.length - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      if (!this.matchers_0.get_za3lpa$(index).match_11rb$(arr[index])) {
        return false;
      }
    }
    return true;
  };
  ArrayMatcher.prototype.substitute_kinntx$ = function (map) {
    var tmp$ = this.copy_90rif4$;
    var $receiver = this.matchers_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.substitute_kinntx$(map));
    }
    return tmp$.call(this, destination);
  };
  ArrayMatcher.prototype.toString = function () {
    return joinToString(this.matchers_0, void 0, '[', ']');
  };
  ArrayMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayMatcher',
    interfaces: [CapturingMatcher, Matcher]
  };
  ArrayMatcher.prototype.component1_0 = function () {
    return this.matchers_0;
  };
  ArrayMatcher.prototype.copy_90rif4$ = function (matchers) {
    return new ArrayMatcher(matchers === void 0 ? this.matchers_0 : matchers);
  };
  ArrayMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matchers_0) | 0;
    return result;
  };
  ArrayMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.matchers_0, other.matchers_0))));
  };
  function captureSubMatchers($receiver, arg) {
    var tmp$;
    if ((tmp$ = $receiver.subMatchers) != null) {
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (Kotlin.isType(element, CapturingMatcher))
          destination.add_11rb$(element);
      }
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        element_0.capture_s8jyv4$(arg);
      }
    }
  }
  function InternalPlatformDsl() {
    InternalPlatformDsl_instance = this;
  }
  InternalPlatformDsl.prototype.identityHashCode_za3rmp$ = function (obj) {
    return Kotlin.identityHashCode(obj);
  };
  InternalPlatformDsl.prototype.runCoroutine_lnyleu$ = function (block) {
    throw new UnsupportedOperationException('Coroutines are not supported for JS MockK version');
  };
  InternalPlatformDsl.prototype.toStr_mzud1t$ = function ($receiver) {
    var tmp$;
    try {
      if ($receiver == null)
        return 'null';
      else if (Kotlin.isBooleanArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isByteArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isCharArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isShortArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isIntArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isLongArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isFloatArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isDoubleArray($receiver))
        return contentToString($receiver);
      else if (Kotlin.isArray($receiver))
        return contentDeepToString($receiver);
      else if (Kotlin.isType($receiver, KClass))
        return (tmp$ = $receiver.simpleName) != null ? tmp$ : '<null name class>';
      else if (Kotlin.isType($receiver, Function))
        return 'lambda {}';
      else
        return $receiver.toString();
    }
     catch (thr) {
      if (Kotlin.isType(thr, Throwable)) {
        return '<error ' + '"' + thr + '"' + '>';
      }
       else
        throw thr;
    }
  };
  InternalPlatformDsl.prototype.deepEquals_oaftn8$ = function (obj1, obj2) {
    var tmp$;
    if (obj1 === obj2) {
      tmp$ = true;
    }
     else if (obj1 == null || obj2 == null) {
      tmp$ = obj1 === obj2;
    }
     else {
      tmp$ = this.arrayDeepEquals_0(obj1, obj2);
    }
    return tmp$;
  };
  InternalPlatformDsl.prototype.arrayDeepEquals_0 = function (obj1, obj2) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (Kotlin.isBooleanArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isBooleanArray(tmp$ = obj2) ? tmp$ : throwCCE());
    }
     else if (Kotlin.isByteArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isByteArray(tmp$_0 = obj2) ? tmp$_0 : throwCCE());
    }
     else if (Kotlin.isCharArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isCharArray(tmp$_1 = obj2) ? tmp$_1 : throwCCE());
    }
     else if (Kotlin.isShortArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isShortArray(tmp$_2 = obj2) ? tmp$_2 : throwCCE());
    }
     else if (Kotlin.isIntArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isIntArray(tmp$_3 = obj2) ? tmp$_3 : throwCCE());
    }
     else if (Kotlin.isLongArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isLongArray(tmp$_4 = obj2) ? tmp$_4 : throwCCE());
    }
     else if (Kotlin.isFloatArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isFloatArray(tmp$_5 = obj2) ? tmp$_5 : throwCCE());
    }
     else if (Kotlin.isDoubleArray(obj1)) {
      tmp$_8 = contentEquals(obj1, Kotlin.isDoubleArray(tmp$_6 = obj2) ? tmp$_6 : throwCCE());
    }
     else if (Kotlin.isArray(obj1)) {
      return contentDeepEquals(obj1, Kotlin.isArray(tmp$_7 = obj2) ? tmp$_7 : throwCCE());
    }
     else
      tmp$_8 = equals(obj1, obj2);
    return tmp$_8;
  };
  InternalPlatformDsl.prototype.unboxChar_za3rmp$ = function (value) {
    if (Kotlin.isChar(value)) {
      return unboxChar(value) | 0;
    }
     else {
      return value;
    }
  };
  InternalPlatformDsl.prototype.toArray_s8jyvk$ = function ($receiver) {
    var tmp$;
    if (Kotlin.isBooleanArray($receiver))
      return toTypedArray($receiver);
    else if (Kotlin.isByteArray($receiver))
      return toTypedArray_0($receiver);
    else if (Kotlin.isCharArray($receiver))
      return toTypedArray_1($receiver);
    else if (Kotlin.isShortArray($receiver))
      return toTypedArray_2($receiver);
    else if (Kotlin.isIntArray($receiver))
      return toTypedArray_3($receiver);
    else if (Kotlin.isLongArray($receiver))
      return toTypedArray_4($receiver);
    else if (Kotlin.isFloatArray($receiver))
      return toTypedArray_5($receiver);
    else if (Kotlin.isDoubleArray($receiver))
      return toTypedArray_6($receiver);
    else
      return Kotlin.isArray(tmp$ = $receiver) ? tmp$ : throwCCE();
  };
  InternalPlatformDsl.prototype.classForName_61zpoe$ = function (name) {
    throw new MockKException('classForName is not support on JS platform');
  };
  InternalPlatformDsl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InternalPlatformDsl',
    interfaces: []
  };
  var InternalPlatformDsl_instance = null;
  function InternalPlatformDsl_getInstance() {
    if (InternalPlatformDsl_instance === null) {
      new InternalPlatformDsl();
    }
    return InternalPlatformDsl_instance;
  }
  var package$io = _.io || (_.io = {});
  var package$mockk = package$io.mockk || (package$io.mockk = {});
  package$mockk.MockKException = MockKException;
  package$mockk.MockKGateway = MockKGateway;
  package$mockk.Ordering = Ordering;
  $$importsForInline$$['mockk-dsl-js'] = _;
  MockKGateway.InstanceFactory = MockKGateway$InstanceFactory;
  package$mockk.Deregisterable = Deregisterable;
  package$mockk.use_u8201c$ = use;
  Object.defineProperty(package$mockk, 'MockKDsl', {
    get: MockKDsl_getInstance
  });
  Object.defineProperty(Ordering, 'UNORDERED', {
    get: Ordering$UNORDERED_getInstance
  });
  Object.defineProperty(Ordering, 'ALL', {
    get: Ordering$ALL_getInstance
  });
  Object.defineProperty(Ordering, 'ORDERED', {
    get: Ordering$ORDERED_getInstance
  });
  Object.defineProperty(Ordering, 'SEQUENCE', {
    get: Ordering$SEQUENCE_getInstance
  });
  package$mockk.CapturingSlot = CapturingSlot;
  package$mockk.MockKMatcherScope = MockKMatcherScope;
  package$mockk.MockKVerificationScope = MockKVerificationScope;
  Object.defineProperty(package$mockk, 'Called', {
    get: Called_getInstance
  });
  package$mockk.MockKAssertScope = MockKAssertScope;
  Object.defineProperty(package$mockk, 'Runs', {
    get: Runs_getInstance
  });
  package$mockk.MockKStubScope = MockKStubScope;
  package$mockk.MockKAdditionalAnswerScope = MockKAdditionalAnswerScope;
  package$mockk.allConst_qzupvv$ = allConst;
  package$mockk.MockKAnswerScope = MockKAnswerScope;
  package$mockk.MockKStaticScope = MockKStaticScope;
  package$mockk.Matcher = Matcher;
  package$mockk.s_9eukao$ = s;
  package$mockk.TypedMatcher = TypedMatcher;
  package$mockk.EquivalentMatcher = EquivalentMatcher;
  package$mockk.CapturingMatcher = CapturingMatcher;
  package$mockk.CompositeMatcher = CompositeMatcher;
  package$mockk.Answer = Answer;
  package$mockk.Call = Call;
  package$mockk.MethodDescription = MethodDescription;
  package$mockk.Invocation = Invocation;
  package$mockk.InvocationMatcher = InvocationMatcher;
  package$mockk.RecordedCall = RecordedCall;
  package$mockk.ConstantAnswer = ConstantAnswer;
  package$mockk.FunctionAnswer = FunctionAnswer;
  package$mockk.ManyAnswerable = ManyAnswerable;
  ManyAnswersAnswer.SingleAnswer = ManyAnswersAnswer$SingleAnswer;
  package$mockk.ManyAnswersAnswer = ManyAnswersAnswer;
  package$mockk.ThrowingAnswer = ThrowingAnswer;
  Object.defineProperty(MockKGateway, 'Companion', {
    get: MockKGateway$Companion_getInstance
  });
  MockKGateway.MockFactory = MockKGateway$MockFactory;
  MockKGateway.StaticMockFactory = MockKGateway$StaticMockFactory;
  MockKGateway.Clearer = MockKGateway$Clearer;
  MockKGateway.Stubber = MockKGateway$Stubber;
  MockKGateway.Verifier = MockKGateway$Verifier;
  MockKGateway.VerificationParameters = MockKGateway$VerificationParameters;
  MockKGateway.CallRecorder = MockKGateway$CallRecorder;
  MockKGateway.CallVerifier = MockKGateway$CallVerifier;
  MockKGateway.VerificationResult = MockKGateway$VerificationResult;
  MockKGateway.InstanceFactoryRegistry = MockKGateway$InstanceFactoryRegistry;
  package$mockk.Ref = Ref;
  package$mockk.EqMatcher = EqMatcher;
  package$mockk.ConstantMatcher = ConstantMatcher;
  package$mockk.FunctionMatcher = FunctionMatcher;
  package$mockk.CaptureMatcher = CaptureMatcher;
  package$mockk.CaptureNullableMatcher = CaptureNullableMatcher;
  package$mockk.CapturingSlotMatcher = CapturingSlotMatcher;
  package$mockk.ComparingMatcher = ComparingMatcher;
  package$mockk.AndOrMatcher = AndOrMatcher;
  package$mockk.NotMatcher = NotMatcher;
  package$mockk.NullCheckMatcher = NullCheckMatcher;
  package$mockk.OfTypeMatcher = OfTypeMatcher;
  package$mockk.AllAnyMatcher = AllAnyMatcher;
  package$mockk.InvokeMatcher = InvokeMatcher;
  package$mockk.AssertMatcher = AssertMatcher;
  package$mockk.ArrayMatcher = ArrayMatcher;
  package$mockk.captureSubMatchers_pxyxhd$ = captureSubMatchers;
  Object.defineProperty(package$mockk, 'InternalPlatformDsl', {
    get: InternalPlatformDsl_getInstance
  });
  ConstantMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  FunctionMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  FunctionMatcher.prototype.checkType_s8jyv4$ = TypedMatcher.prototype.checkType_s8jyv4$;
  CaptureMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  CaptureMatcher.prototype.checkType_s8jyv4$ = TypedMatcher.prototype.checkType_s8jyv4$;
  CaptureNullableMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  CaptureNullableMatcher.prototype.checkType_s8jyv4$ = TypedMatcher.prototype.checkType_s8jyv4$;
  CapturingSlotMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  CapturingSlotMatcher.prototype.checkType_s8jyv4$ = TypedMatcher.prototype.checkType_s8jyv4$;
  ComparingMatcher.prototype.checkType_s8jyv4$ = TypedMatcher.prototype.checkType_s8jyv4$;
  NullCheckMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  OfTypeMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  AllAnyMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  InvokeMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  AssertMatcher.prototype.substitute_kinntx$ = Matcher.prototype.substitute_kinntx$;
  Kotlin.defineModule('mockk-dsl-js', _);
  return _;
}(typeof this['mockk-dsl-js'] === 'undefined' ? {} : this['mockk-dsl-js'], kotlin);
