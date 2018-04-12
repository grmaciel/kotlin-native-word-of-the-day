if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'mockk-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mockk-js'.");
}
if (typeof this['mockk-dsl-js'] === 'undefined') {
  throw new Error("Error loading module 'mockk-js'. Its dependency 'mockk-dsl-js' was not found. Please, check whether 'mockk-dsl-js' is loaded prior to 'mockk-js'.");
}
this['mockk-js'] = function (_, Kotlin, $module$mockk_dsl_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var mockk = $module$mockk_dsl_js.io.mockk;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Ordering = $module$mockk_dsl_js.io.mockk.Ordering;
  var Unit = Kotlin.kotlin.Unit;
  var CapturingSlot = $module$mockk_dsl_js.io.mockk.CapturingSlot;
  var MockKMatcherScope = $module$mockk_dsl_js.io.mockk.MockKMatcherScope;
  var MockKStubScope = $module$mockk_dsl_js.io.mockk.MockKStubScope;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MockKGateway$Stubber = $module$mockk_dsl_js.io.mockk.MockKGateway.Stubber;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var MockKException = $module$mockk_dsl_js.io.mockk.MockKException;
  var Throwable = Error;
  var MockKVerificationScope = $module$mockk_dsl_js.io.mockk.MockKVerificationScope;
  var MockKGateway$Verifier = $module$mockk_dsl_js.io.mockk.MockKGateway.Verifier;
  var toString = Kotlin.toString;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var contentToString = Kotlin.arrayToString;
  var MockKGateway$MockFactory = $module$mockk_dsl_js.io.mockk.MockKGateway.MockFactory;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var equals = Kotlin.equals;
  var toByte = Kotlin.toByte;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var toShort = Kotlin.toShort;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var getKClass = Kotlin.getKClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var PrimitiveClasses$booleanArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanArrayClass;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var PrimitiveClasses$charArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.charArrayClass;
  var PrimitiveClasses$shortArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortArrayClass;
  var PrimitiveClasses$intArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intArrayClass;
  var PrimitiveClasses$longArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.longArrayClass;
  var PrimitiveClasses$floatArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatArrayClass;
  var PrimitiveClasses$doubleArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleArrayClass;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var MockKGateway$InstanceFactoryRegistry = $module$mockk_dsl_js.io.mockk.MockKGateway.InstanceFactoryRegistry;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Ref = $module$mockk_dsl_js.io.mockk.Ref;
  var hashCode = Kotlin.hashCode;
  var kotlin = Kotlin.kotlin;
  var throwUPAE = Kotlin.throwUPAE;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CompositeMatcher = $module$mockk_dsl_js.io.mockk.CompositeMatcher;
  var ConstantMatcher = $module$mockk_dsl_js.io.mockk.ConstantMatcher;
  var AllAnyMatcher = $module$mockk_dsl_js.io.mockk.AllAnyMatcher;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Matcher = $module$mockk_dsl_js.io.mockk.Matcher;
  var ArrayMatcher = $module$mockk_dsl_js.io.mockk.ArrayMatcher;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var List = Kotlin.kotlin.collections.List;
  var InvocationMatcher = $module$mockk_dsl_js.io.mockk.InvocationMatcher;
  var RecordedCall = $module$mockk_dsl_js.io.mockk.RecordedCall;
  var NullCheckMatcher = $module$mockk_dsl_js.io.mockk.NullCheckMatcher;
  var EqMatcher = $module$mockk_dsl_js.io.mockk.EqMatcher;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var MockKGateway$CallRecorder = $module$mockk_dsl_js.io.mockk.MockKGateway.CallRecorder;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var EquivalentMatcher = $module$mockk_dsl_js.io.mockk.EquivalentMatcher;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var getCallableRef = Kotlin.getCallableRef;
  var MethodDescription = $module$mockk_dsl_js.io.mockk.MethodDescription;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ConstantAnswer = $module$mockk_dsl_js.io.mockk.ConstantAnswer;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var ManyAnswersAnswer = $module$mockk_dsl_js.io.mockk.ManyAnswersAnswer;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var MockKGateway$Clearer = $module$mockk_dsl_js.io.mockk.MockKGateway.Clearer;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var Call = $module$mockk_dsl_js.io.mockk.Call;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var Invocation = $module$mockk_dsl_js.io.mockk.Invocation;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var MockKGateway = $module$mockk_dsl_js.io.mockk.MockKGateway;
  var MockKGateway$VerificationResult = $module$mockk_dsl_js.io.mockk.MockKGateway.VerificationResult;
  var Pair = Kotlin.kotlin.Pair;
  var unboxChar = Kotlin.unboxChar;
  var MockKGateway$CallVerifier = $module$mockk_dsl_js.io.mockk.MockKGateway.CallVerifier;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var numberToDouble = Kotlin.numberToDouble;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var numberToInt = Kotlin.numberToInt;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  EveryBlockEvaluator.prototype = Object.create(RecordedBlockEvaluator.prototype);
  EveryBlockEvaluator.prototype.constructor = EveryBlockEvaluator;
  VerifyBlockEvaluator.prototype = Object.create(RecordedBlockEvaluator.prototype);
  VerifyBlockEvaluator.prototype.constructor = VerifyBlockEvaluator;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  AnsweringState.prototype = Object.create(CallRecordingState.prototype);
  AnsweringState.prototype.constructor = AnsweringState;
  AnsweringStillAcceptingAnswersState.prototype = Object.create(AnsweringState.prototype);
  AnsweringStillAcceptingAnswersState.prototype.constructor = AnsweringStillAcceptingAnswersState;
  RecordingState.prototype = Object.create(CallRecordingState.prototype);
  RecordingState.prototype.constructor = RecordingState;
  SafeLoggingState.prototype = Object.create(CallRecordingState.prototype);
  SafeLoggingState.prototype.constructor = SafeLoggingState;
  StubbingAwaitingAnswerState.prototype = Object.create(CallRecordingState.prototype);
  StubbingAwaitingAnswerState.prototype.constructor = StubbingAwaitingAnswerState;
  StubbingState.prototype = Object.create(RecordingState.prototype);
  StubbingState.prototype.constructor = StubbingState;
  VerifyingState.prototype = Object.create(RecordingState.prototype);
  VerifyingState.prototype.constructor = VerifyingState;
  SpyKStub.prototype = Object.create(MockKStub.prototype);
  SpyKStub.prototype.constructor = SpyKStub;
  AllCallsCallVerifier.prototype = Object.create(UnorderedCallVerifier.prototype);
  AllCallsCallVerifier.prototype.constructor = AllCallsCallVerifier;
  JsInstantiator.prototype = Object.create(AbstractInstantiator.prototype);
  JsInstantiator.prototype.constructor = JsInstantiator;
  InstanceProxyHandler.prototype = Object.create(EmptyProxyHandler.prototype);
  InstanceProxyHandler.prototype.constructor = InstanceProxyHandler;
  JsMockFactory.prototype = Object.create(AbstractMockFactory.prototype);
  JsMockFactory.prototype.constructor = JsMockFactory;
  OperationProxyHandler.prototype = Object.create(EmptyProxyHandler.prototype);
  OperationProxyHandler.prototype.constructor = OperationProxyHandler;
  StubProxyHandler.prototype = Object.create(EmptyProxyHandler.prototype);
  StubProxyHandler.prototype.constructor = StubProxyHandler;
  var mockk_0 = defineInlineFunction('mockk-js.io.mockk.mockk_17ynup$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var mockk$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var getKClass = Kotlin.getKClass;
      return function (closure$name, closure$relaxed, closure$moreInterfaces, typeClosure$T, isT) {
        return function () {
          var T_0 = typeClosure$T;
          var name = closure$name;
          var relaxed = closure$relaxed;
          var moreInterfaces = closure$moreInterfaces.slice();
          return MockKGateway.Companion.implementation().mockFactory.mockk_q5l8ik$(getKClass(T_0), name, relaxed, moreInterfaces);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, name, relaxed, moreInterfaces) {
      if (name === void 0)
        name = null;
      if (relaxed === void 0)
        relaxed = false;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var moreInterfaces_0 = moreInterfaces.slice();
      return MockKGateway.Companion.implementation().mockFactory.mockk_q5l8ik$(getKClass(T_0), name, relaxed, moreInterfaces_0);
    };
  }));
  var spyk = defineInlineFunction('mockk-js.io.mockk.spyk_yoblfq$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var spyk$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var getKClass = Kotlin.getKClass;
      return function (closure$name, closure$moreInterfaces, typeClosure$T, isT) {
        return function () {
          var T_0 = typeClosure$T;
          var name = closure$name;
          var moreInterfaces = closure$moreInterfaces.slice();
          return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(getKClass(T_0), null, name, moreInterfaces);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, name, moreInterfaces) {
      if (name === void 0)
        name = null;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var moreInterfaces_0 = moreInterfaces.slice();
      return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(getKClass(T_0), null, name, moreInterfaces_0);
    };
  }));
  var spyk_0 = defineInlineFunction('mockk-js.io.mockk.spyk_88p2ww$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var spyk$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      return function (closure$objToCopy, closure$name, closure$moreInterfaces) {
        return function () {
          var objToCopy = closure$objToCopy;
          var name = closure$name;
          var moreInterfaces = closure$moreInterfaces.slice();
          return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(null, objToCopy, name, moreInterfaces);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    return function (T_0, isT, objToCopy, name, moreInterfaces) {
      if (name === void 0)
        name = null;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var moreInterfaces_0 = moreInterfaces.slice();
      return MockKGateway.Companion.implementation().mockFactory.spyk_mcmj0q$(null, objToCopy, name, moreInterfaces_0);
    };
  }));
  var slot = defineInlineFunction('mockk-js.io.mockk.slot_30y1fr$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var slot$lambda = wrapFunction(function () {
      var CapturingSlot_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.CapturingSlot;
      return function (typeClosure$T, isT) {
        return function () {
          return new CapturingSlot_init();
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var CapturingSlot_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.CapturingSlot;
    return function (T_0, isT) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      return new CapturingSlot_init();
    };
  }));
  var every = defineInlineFunction('mockk-js.io.mockk.every_4t3ap8$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var every$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      return function (closure$stubBlock) {
        return function () {
          var stubBlock = closure$stubBlock;
          return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(stubBlock, null);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    return function (stubBlock) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(stubBlock, null);
    };
  }));
  var coEvery = defineInlineFunction('mockk-js.io.mockk.coEvery_aj9pl6$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var coEvery$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      return function (closure$stubBlock) {
        return function () {
          var stubBlock = closure$stubBlock;
          return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(null, stubBlock);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    return function (stubBlock) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      return MockKGateway.Companion.implementation().stubber.every_h9qfrs$(null, stubBlock);
    };
  }));
  var verify = defineInlineFunction('mockk-js.io.mockk.verify_y9wzeo$', wrapFunction(function () {
    var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var verify$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
      return function (closure$ordering, closure$inverse, closure$atLeast, closure$atMost, closure$exactly, closure$verifyBlock) {
        return function () {
          var $this = mockk.MockKDsl;
          var ordering = closure$ordering;
          var inverse = closure$inverse;
          var atLeast = closure$atLeast;
          var atMost = closure$atMost;
          var exactly = closure$exactly;
          var verifyBlock = closure$verifyBlock;
          $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
          var min = exactly !== -1 ? exactly : atLeast;
          var max = exactly !== -1 ? exactly : atMost;
          MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
          return Unit;
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
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
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      mockk.MockKDsl.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
      var min = exactly !== -1 ? exactly : atLeast;
      var max = exactly !== -1 ? exactly : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  var coVerify = defineInlineFunction('mockk-js.io.mockk.coVerify_n5erx6$', wrapFunction(function () {
    var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var coVerify$lambda = wrapFunction(function () {
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
      return function (closure$ordering, closure$inverse, closure$atLeast, closure$atMost, closure$exactly, closure$verifyBlock) {
        return function () {
          var $this = mockk.MockKDsl;
          var ordering = closure$ordering;
          var inverse = closure$inverse;
          var atLeast = closure$atLeast;
          var atMost = closure$atMost;
          var exactly = closure$exactly;
          var verifyBlock = closure$verifyBlock;
          $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
          var min = exactly !== -1 ? exactly : atLeast;
          var max = exactly !== -1 ? exactly : atMost;
          MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), null, verifyBlock);
          return Unit;
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
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
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      mockk.MockKDsl.internalCheckExactlyAtMostAtLeast_kdvuu7$(exactly, atLeast, atMost, ordering);
      var min = exactly !== -1 ? exactly : atLeast;
      var max = exactly !== -1 ? exactly : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), null, verifyBlock);
    };
  }));
  var verifyAll = defineInlineFunction('mockk-js.io.mockk.verifyAll_y15vxx$', wrapFunction(function () {
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var verifyAll$lambda = wrapFunction(function () {
      var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
      var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
      return function (closure$inverse, closure$verifyBlock) {
        return function () {
          var $this = mockk.MockKDsl;
          var inverse = closure$inverse;
          var verifyBlock = closure$verifyBlock;
          var ordering = Ordering.ALL;
          var atMost;
          atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
          $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
          var min = -1 !== -1 ? -1 : 1;
          var max = -1 !== -1 ? -1 : atMost;
          MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
          return Unit;
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var $this = mockk.MockKDsl;
      var ordering = Ordering.ALL;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  var verifyOrder = defineInlineFunction('mockk-js.io.mockk.verifyOrder_y15vxx$', wrapFunction(function () {
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var verifyOrder$lambda = wrapFunction(function () {
      var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
      var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
      return function (closure$inverse, closure$verifyBlock) {
        return function () {
          var $this = mockk.MockKDsl;
          var inverse = closure$inverse;
          var verifyBlock = closure$verifyBlock;
          var ordering = Ordering.ORDERED;
          var atMost;
          atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
          $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
          var min = -1 !== -1 ? -1 : 1;
          var max = -1 !== -1 ? -1 : atMost;
          MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
          return Unit;
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var $this = mockk.MockKDsl;
      var ordering = Ordering.ORDERED;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  var verifySequence = defineInlineFunction('mockk-js.io.mockk.verifySequence_y15vxx$', wrapFunction(function () {
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var verifySequence$lambda = wrapFunction(function () {
      var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
      var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
      return function (closure$inverse, closure$verifyBlock) {
        return function () {
          var $this = mockk.MockKDsl;
          var inverse = closure$inverse;
          var verifyBlock = closure$verifyBlock;
          var ordering = Ordering.SEQUENCE;
          var atMost;
          atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
          $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
          var min = -1 !== -1 ? -1 : 1;
          var max = -1 !== -1 ? -1 : atMost;
          MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
          return Unit;
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var Ordering = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Ordering;
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var MockKGateway$MockKGateway$VerificationParameters_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.VerificationParameters;
    return function (inverse, verifyBlock) {
      if (inverse === void 0)
        inverse = false;
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var $this = mockk.MockKDsl;
      var ordering = Ordering.SEQUENCE;
      var atMost;
      atMost = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      $this.internalCheckExactlyAtMostAtLeast_kdvuu7$(-1, 1, atMost, ordering);
      var min = -1 !== -1 ? -1 : 1;
      var max = -1 !== -1 ? -1 : atMost;
      MockKGateway.Companion.implementation().verifier.verify_wx8g0n$(new MockKGateway$MockKGateway$VerificationParameters_init(ordering, min, max, inverse), verifyBlock, null);
    };
  }));
  function clearMocks(mocks, answers, recordedCalls, childMocks) {
    if (answers === void 0)
      answers = true;
    if (recordedCalls === void 0)
      recordedCalls = true;
    if (childMocks === void 0)
      childMocks = true;
    MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
    var mocks_0 = mocks.slice();
    MockKGateway.Companion.implementation().clearer.clear_v2wshv$(mocks_0, answers, recordedCalls, childMocks);
  }
  var registerInstanceFactory = defineInlineFunction('mockk-js.io.mockk.registerInstanceFactory_9ce4rd$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var registerInstanceFactory$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      var Kind_CLASS = Kotlin.Kind.CLASS;
      var MockKGateway$InstanceFactory = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.InstanceFactory;
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var Deregisterable = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Deregisterable;
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
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MockKGateway$InstanceFactory]};
      function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
        this.closure$factoryObj = closure$factoryObj;
      }
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
        MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
      };
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Deregisterable]};
      return function (closure$instanceFactory, typeClosure$T, isT) {
        return function () {
          var T_0 = typeClosure$T;
          var factoryObj = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, T_0, closure$instanceFactory);
          MockKGateway.Companion.implementation().instanceFactoryRegistry.registerFactory_ia5wlb$(factoryObj);
          return new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(factoryObj);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var MockKGateway$InstanceFactory = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.InstanceFactory;
    var Deregisterable = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Deregisterable;
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
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MockKGateway$InstanceFactory]};
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
      this.closure$factoryObj = closure$factoryObj;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
      MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Deregisterable]};
    return function (T_0, isT, instanceFactory) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      var factoryObj = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT, T_0, instanceFactory);
      MockKGateway.Companion.implementation().instanceFactoryRegistry.registerFactory_ia5wlb$(factoryObj);
      return new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(factoryObj);
    };
  }));
  var withInstanceFactory = defineInlineFunction('mockk-js.io.mockk.withInstanceFactory_gpdgz$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var withInstanceFactory$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      var Kind_CLASS = Kotlin.Kind.CLASS;
      var MockKGateway$InstanceFactory = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.InstanceFactory;
      var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
      var Deregisterable = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Deregisterable;
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
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MockKGateway$InstanceFactory]};
      function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
        this.closure$factoryObj = closure$factoryObj;
      }
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
        MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
      };
      MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Deregisterable]};
      var Throwable = Error;
      return function (closure$instanceFactory, closure$block, typeClosure$T, isT) {
        return function () {
          var T_0 = typeClosure$T;
          var isT_0 = isT;
          var instanceFactory = closure$instanceFactory;
          var block = closure$block;
          var factoryObj = new MockKDsl$internalRegisterInstanceFactory$ObjectLiteral(isT_0, T_0, instanceFactory);
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
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var MockKGateway$InstanceFactory = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway.InstanceFactory;
    var Deregisterable = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.Deregisterable;
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
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MockKGateway$InstanceFactory]};
    function MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0(closure$factoryObj) {
      this.closure$factoryObj = closure$factoryObj;
    }
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.prototype.deregister = function () {
      MockKGateway.Companion.implementation().instanceFactoryRegistry.deregisterFactory_ia5wlb$(this.closure$factoryObj);
    };
    MockKDsl$internalRegisterInstanceFactory$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Deregisterable]};
    var Throwable = Error;
    return function (T_0, isT, instanceFactory, block) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
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
  var staticMockk = defineInlineFunction('mockk-js.io.mockk.staticMockk_30y1fr$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var staticMockk$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      var MockKStaticScope_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKStaticScope;
      return function (typeClosure$T, isT) {
        return function () {
          var T_0 = typeClosure$T;
          return new MockKStaticScope_init([getKClass(T_0)]);
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var getKClass = Kotlin.getKClass;
    var MockKStaticScope_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKStaticScope;
    return function (T_0, isT) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      return new MockKStaticScope_init([getKClass(T_0)]);
    };
  }));
  var staticMockk_0 = defineInlineFunction('mockk-js.io.mockk.staticMockk_vqirvp$', wrapFunction(function () {
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    var KClass = Kotlin.kotlin.reflect.KClass;
    var throwCCE = Kotlin.throwCCE;
    var wrapFunction = Kotlin.wrapFunction;
    var staticMockk$lambda = wrapFunction(function () {
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
      var copyToArray = Kotlin.kotlin.collections.copyToArray;
      var MockKStaticScope_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKStaticScope;
      return function (closure$cls) {
        return function () {
          mockk.MockKDsl;
          var $receiver = closure$cls;
          var destination = ArrayList_init($receiver.length);
          var tmp$;
          for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
            var item = $receiver[tmp$];
            var tmp$_0;
            destination.add_11rb$(Kotlin.isType(tmp$_0 = mockk.InternalPlatformDsl.classForName_61zpoe$(item), KClass) ? tmp$_0 : throwCCE());
          }
          return new MockKStaticScope_init(copyToArray(destination).slice().slice());
        };
      };
    });
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var copyToArray = Kotlin.kotlin.collections.copyToArray;
    var MockKStaticScope_init = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKStaticScope;
    return function (cls) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      mockk.MockKDsl;
      var destination = ArrayList_init(cls.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== cls.length; ++tmp$) {
        var item = cls[tmp$];
        var tmp$_0;
        destination.add_11rb$(Kotlin.isType(tmp$_0 = mockk.InternalPlatformDsl.classForName_61zpoe$(item), KClass) ? tmp$_0 : throwCCE());
      }
      return new MockKStaticScope_init(copyToArray(destination).slice().slice());
    };
  }));
  function EveryBlockEvaluator(callRecorder, autoHinterFactory) {
    RecordedBlockEvaluator.call(this, callRecorder, autoHinterFactory);
  }
  EveryBlockEvaluator.prototype.every_h9qfrs$ = function (mockBlock, coMockBlock) {
    this.callRecorder().startStubbing();
    var lambda = new CapturingSlot();
    var scope = new MockKMatcherScope(this.callRecorder(), lambda);
    this.record_6r295w$(scope, mockBlock, coMockBlock);
    return new MockKStubScope(this.callRecorder(), lambda);
  };
  EveryBlockEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EveryBlockEvaluator',
    interfaces: [MockKGateway$Stubber, RecordedBlockEvaluator]
  };
  function RecordedBlockEvaluator(callRecorder, autoHinterFactory) {
    this.callRecorder = callRecorder;
    this.autoHinterFactory = autoHinterFactory;
  }
  function RecordedBlockEvaluator$record$lambda(closure$scope, closure$mockBlock) {
    return function () {
      return closure$mockBlock(closure$scope);
    };
  }
  function RecordedBlockEvaluator$record$lambda$lambda(closure$scope_0, closure$coMockBlock_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RecordedBlockEvaluator$record$lambda$lambda(closure$scope_0, closure$coMockBlock_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RecordedBlockEvaluator$record$lambda$lambda(closure$scope_0, closure$coMockBlock_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$scope = closure$scope_0;
    this.local$closure$coMockBlock = closure$coMockBlock_0;
  }
  Coroutine$RecordedBlockEvaluator$record$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RecordedBlockEvaluator$record$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RecordedBlockEvaluator$record$lambda$lambda.prototype.constructor = Coroutine$RecordedBlockEvaluator$record$lambda$lambda;
  Coroutine$RecordedBlockEvaluator$record$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$coMockBlock(this.local$closure$scope, this);
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
  function RecordedBlockEvaluator$record$lambda_0(closure$scope, closure$coMockBlock) {
    return function () {
      return mockk.InternalPlatformDsl.runCoroutine_lnyleu$(RecordedBlockEvaluator$record$lambda$lambda(closure$scope, closure$coMockBlock));
    };
  }
  function RecordedBlockEvaluator$record$lambda_1() {
    throw new MockKException("You should specify either 'mockBlock' or 'coMockBlock'");
  }
  RecordedBlockEvaluator.prototype.record_6r295w$ = function (scope, mockBlock, coMockBlock) {
    var tmp$;
    try {
      if (mockBlock != null) {
        tmp$ = RecordedBlockEvaluator$record$lambda(scope, mockBlock);
      }
       else if (coMockBlock != null) {
        tmp$ = RecordedBlockEvaluator$record$lambda_0(scope, coMockBlock);
      }
       else {
        tmp$ = RecordedBlockEvaluator$record$lambda_1;
      }
      var block = tmp$;
      var autoHinter = this.autoHinterFactory();
      autoHinter.autoHint_66m16y$(this.callRecorder(), 0, 64, block);
      var n = this.callRecorder().estimateCallRounds();
      for (var i = 1; i < n; i++) {
        autoHinter.autoHint_66m16y$(this.callRecorder(), i, n, block);
      }
      this.callRecorder().round_vux9f0$(n, n);
      this.callRecorder().done();
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        throw InternalPlatform_getInstance().prettifyRecordingException_tcv7n7$(ex);
      }
       else
        throw ex;
    }
  };
  RecordedBlockEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecordedBlockEvaluator',
    interfaces: []
  };
  function VerifyBlockEvaluator(callRecorder, stubRepo, autoHinterFactory) {
    RecordedBlockEvaluator.call(this, callRecorder, autoHinterFactory);
    this.stubRepo = stubRepo;
  }
  VerifyBlockEvaluator.prototype.verify_wx8g0n$ = function (params, mockBlock, coMockBlock) {
    this.callRecorder().startVerification_q2ls4b$(params);
    var lambda = new CapturingSlot();
    var scope = new MockKVerificationScope(this.callRecorder(), lambda);
    try {
      this.record_6r295w$(scope, mockBlock, coMockBlock);
    }
    finally {
      this.callRecorder().reset();
    }
  };
  VerifyBlockEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerifyBlockEvaluator',
    interfaces: [MockKGateway$Verifier, RecordedBlockEvaluator]
  };
  function AbstractInstantiator(instanceFactoryRegistry) {
    AbstractInstantiator$Companion_getInstance();
    this.instanceFactoryRegistry = instanceFactoryRegistry;
  }
  function AbstractInstantiator$instantiateViaInstanceFactoryRegistry$lambda(closure$instance) {
    return function () {
      return 'Instance factory returned instance ' + toString(closure$instance);
    };
  }
  AbstractInstantiator.prototype.instantiateViaInstanceFactoryRegistry_uj6y0s$ = function (cls, orInstantiate) {
    var tmp$, tmp$_0;
    tmp$ = this.instanceFactoryRegistry.instanceFactories.iterator();
    while (tmp$.hasNext()) {
      var factory = tmp$.next();
      var instance = factory.instantiate_xo1ogr$(cls);
      if (instance != null) {
        AbstractInstantiator$Companion_getInstance().log.trace_h4ejuu$(AbstractInstantiator$instantiateViaInstanceFactoryRegistry$lambda(instance));
        return Kotlin.isType(tmp$_0 = instance, Any) ? tmp$_0 : throwCCE();
      }
    }
    return orInstantiate();
  };
  function AbstractInstantiator$Companion() {
    AbstractInstantiator$Companion_instance = this;
    this.log = Logger$Companion_getInstance().loggerFactory(getKClass(AbstractInstantiator));
  }
  AbstractInstantiator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractInstantiator$Companion_instance = null;
  function AbstractInstantiator$Companion_getInstance() {
    if (AbstractInstantiator$Companion_instance === null) {
      new AbstractInstantiator$Companion();
    }
    return AbstractInstantiator$Companion_instance;
  }
  AbstractInstantiator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractInstantiator',
    interfaces: []
  };
  function AbstractMockFactory(stubRepository, instantiator, gatewayAccessIn) {
    AbstractMockFactory$Companion_getInstance();
    this.stubRepository = stubRepository;
    this.instantiator = instantiator;
    this.safeLog = gatewayAccessIn.safeLog;
    this.log = this.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(AbstractMockFactory)));
    this.gatewayAccess = gatewayAccessIn.copy_mgunw4$(void 0, void 0, void 0, void 0, this);
  }
  AbstractMockFactory.prototype.newProxy_w84rec$ = function (cls, moreInterfaces, stub, useDefaultConstructor, instantiate, callback$default) {
    if (useDefaultConstructor === void 0)
      useDefaultConstructor = false;
    if (instantiate === void 0)
      instantiate = false;
    return callback$default ? callback$default(cls, moreInterfaces, stub, useDefaultConstructor, instantiate) : this.newProxy_w84rec$$default(cls, moreInterfaces, stub, useDefaultConstructor, instantiate);
  };
  function AbstractMockFactory$mockk$lambda(closure$mockType, closure$newName, closure$moreInterfaces) {
    return function () {
      return 'Creating mockk for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$mockType) + ' name=' + closure$newName + ', moreInterfaces=' + contentToString(closure$moreInterfaces);
    };
  }
  function AbstractMockFactory$mockk$lambda_0(closure$mockType) {
    return function () {
      return 'Building proxy for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$mockType) + ' hashcode=' + InternalPlatform_getInstance().hkd_za3rmp$(closure$mockType);
    };
  }
  AbstractMockFactory.prototype.mockk_q5l8ik$ = function (mockType, name, relaxed, moreInterfaces) {
    var newName = name != null ? name : '#' + AbstractMockFactory$Companion_getInstance().newId();
    var stub = new MockKStub(mockType, newName, relaxed, this.gatewayAccess);
    this.log.debug_h4ejuu$(AbstractMockFactory$mockk$lambda(mockType, newName, moreInterfaces));
    this.log.trace_h4ejuu$(AbstractMockFactory$mockk$lambda_0(mockType));
    var proxy = this.newProxy_w84rec$(mockType, moreInterfaces, stub);
    stub.hashCodeStr = InternalPlatform_getInstance().hkd_za3rmp$(proxy);
    this.stubRepository.add_ai92e0$(proxy, stub);
    return proxy;
  };
  function AbstractMockFactory$spyk$lambda(closure$actualCls, closure$newName, closure$moreInterfaces) {
    return function () {
      return 'Creating spyk for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$actualCls) + ' name=' + closure$newName + ', moreInterfaces=' + contentToString(closure$moreInterfaces);
    };
  }
  function AbstractMockFactory$spyk$lambda_0(closure$actualCls) {
    return function () {
      return 'Building proxy for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$actualCls) + ' hashcode=' + InternalPlatform_getInstance().hkd_za3rmp$(closure$actualCls);
    };
  }
  AbstractMockFactory.prototype.spyk_mcmj0q$ = function (mockType, objToCopy, name, moreInterfaces) {
    var tmp$;
    var newName = name != null ? name : '#' + AbstractMockFactory$Companion_getInstance().newId();
    if (objToCopy != null)
      tmp$ = Kotlin.getKClassFromExpression(objToCopy);
    else if (mockType != null)
      tmp$ = mockType;
    else
      throw new MockKException('Either cls or objToCopy should not be null');
    var actualCls = tmp$;
    this.log.debug_h4ejuu$(AbstractMockFactory$spyk$lambda(actualCls, newName, moreInterfaces));
    var stub = new SpyKStub(actualCls, newName, this.gatewayAccess);
    var useDefaultConstructor = objToCopy == null;
    this.log.trace_h4ejuu$(AbstractMockFactory$spyk$lambda_0(actualCls));
    var proxy = this.newProxy_w84rec$(actualCls, moreInterfaces, stub, useDefaultConstructor);
    stub.hashCodeStr = InternalPlatform_getInstance().hkd_za3rmp$(proxy);
    if (objToCopy != null) {
      InternalPlatform_getInstance().copyFields_gnx7yi$(proxy, objToCopy);
    }
    this.stubRepository.add_ai92e0$(proxy, stub);
    return proxy;
  };
  function AbstractMockFactory$temporaryMock$lambda(closure$mockType) {
    return function () {
      return 'Building proxy for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$mockType) + ' hashcode=' + InternalPlatform_getInstance().hkd_za3rmp$(closure$mockType);
    };
  }
  AbstractMockFactory.prototype.temporaryMock_xo1ogr$ = function (mockType) {
    var stub = new MockKStub(mockType, 'temporary mock', void 0, this.gatewayAccess);
    this.log.trace_h4ejuu$(AbstractMockFactory$temporaryMock$lambda(mockType));
    var proxy = this.newProxy_w84rec$(mockType, [], stub, void 0, true);
    stub.hashCodeStr = InternalPlatform_getInstance().hkd_za3rmp$(proxy);
    return proxy;
  };
  function AbstractMockFactory$Companion() {
    AbstractMockFactory$Companion_instance = this;
    this.idCounter = InternalPlatform_getInstance().counter();
  }
  AbstractMockFactory$Companion.prototype.newId = function () {
    return this.idCounter();
  };
  AbstractMockFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractMockFactory$Companion_instance = null;
  function AbstractMockFactory$Companion_getInstance() {
    if (AbstractMockFactory$Companion_instance === null) {
      new AbstractMockFactory$Companion();
    }
    return AbstractMockFactory$Companion_instance;
  }
  AbstractMockFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractMockFactory',
    interfaces: [MockKGateway$MockFactory]
  };
  function AnyValueGenerator() {
  }
  AnyValueGenerator.prototype.anyValue_jn6jkx$ = function (cls, orInstantiateVia) {
    var tmp$;
    if (equals(cls, PrimitiveClasses$booleanClass))
      tmp$ = false;
    else if (equals(cls, PrimitiveClasses$byteClass))
      tmp$ = toByte(0);
    else if (equals(cls, PrimitiveClasses$shortClass))
      tmp$ = toShort(0);
    else if (equals(cls, getKClass(Char)))
      tmp$ = toBoxedChar(toChar(0));
    else if (equals(cls, PrimitiveClasses$intClass))
      tmp$ = 0;
    else if (equals(cls, getKClass(Long)))
      tmp$ = Kotlin.Long.ZERO;
    else if (equals(cls, PrimitiveClasses$floatClass))
      tmp$ = 0.0;
    else if (equals(cls, PrimitiveClasses$doubleClass))
      tmp$ = 0.0;
    else if (equals(cls, PrimitiveClasses$stringClass))
      tmp$ = '';
    else if (equals(cls, PrimitiveClasses$booleanArrayClass))
      tmp$ = Kotlin.booleanArray(0);
    else if (equals(cls, PrimitiveClasses$byteArrayClass))
      tmp$ = new Int8Array(0);
    else if (equals(cls, PrimitiveClasses$charArrayClass))
      tmp$ = Kotlin.charArray(0);
    else if (equals(cls, PrimitiveClasses$shortArrayClass))
      tmp$ = new Int16Array(0);
    else if (equals(cls, PrimitiveClasses$intArrayClass))
      tmp$ = new Int32Array(0);
    else if (equals(cls, PrimitiveClasses$longArrayClass))
      tmp$ = Kotlin.longArray(0);
    else if (equals(cls, PrimitiveClasses$floatArrayClass))
      tmp$ = new Float32Array(0);
    else if (equals(cls, PrimitiveClasses$doubleArrayClass))
      tmp$ = new Float64Array(0);
    else
      tmp$ = orInstantiateVia();
    return tmp$;
  };
  AnyValueGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnyValueGenerator',
    interfaces: []
  };
  function CommonInstanceFactoryRegistry() {
    this.factories_0 = InternalPlatform_getInstance().synchronizedMutableList_287e2$();
  }
  Object.defineProperty(CommonInstanceFactoryRegistry.prototype, 'instanceFactories', {
    get: function () {
      return toList(this.factories_0);
    }
  });
  CommonInstanceFactoryRegistry.prototype.registerFactory_ia5wlb$ = function (factory) {
    this.factories_0.add_11rb$(factory);
  };
  CommonInstanceFactoryRegistry.prototype.deregisterFactory_ia5wlb$ = function (factory) {
    this.factories_0.remove_11rb$(factory);
  };
  CommonInstanceFactoryRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonInstanceFactoryRegistry',
    interfaces: [MockKGateway$InstanceFactoryRegistry]
  };
  function FilterLogger(logger, logLevel) {
    this.logger = logger;
    this.logLevel = logLevel;
  }
  FilterLogger.prototype.error_h4ejuu$ = function (msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$ERROR_getInstance()) >= 0) {
      this.logger.error_h4ejuu$(msg);
    }
  };
  FilterLogger.prototype.error_l35kib$ = function (ex, msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$ERROR_getInstance()) >= 0) {
      this.logger.error_l35kib$(ex, msg);
    }
  };
  FilterLogger.prototype.warn_h4ejuu$ = function (msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$WARN_getInstance()) >= 0) {
      this.logger.warn_h4ejuu$(msg);
    }
  };
  FilterLogger.prototype.warn_l35kib$ = function (ex, msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$WARN_getInstance()) >= 0) {
      this.logger.warn_l35kib$(ex, msg);
    }
  };
  FilterLogger.prototype.info_h4ejuu$ = function (msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$INFO_getInstance()) >= 0) {
      this.logger.info_h4ejuu$(msg);
    }
  };
  FilterLogger.prototype.info_l35kib$ = function (ex, msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$INFO_getInstance()) >= 0) {
      this.logger.info_l35kib$(ex, msg);
    }
  };
  FilterLogger.prototype.debug_h4ejuu$ = function (msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$DEBUG_getInstance()) >= 0) {
      this.logger.debug_h4ejuu$(msg);
    }
  };
  FilterLogger.prototype.debug_l35kib$ = function (ex, msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$DEBUG_getInstance()) >= 0) {
      this.logger.debug_l35kib$(ex, msg);
    }
  };
  FilterLogger.prototype.trace_h4ejuu$ = function (msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$TRACE_getInstance()) >= 0) {
      this.logger.trace_h4ejuu$(msg);
    }
  };
  FilterLogger.prototype.trace_l35kib$ = function (ex, msg) {
    if (this.logLevel().compareTo_11rb$(LogLevel$TRACE_getInstance()) >= 0) {
      this.logger.trace_l35kib$(ex, msg);
    }
  };
  FilterLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterLogger',
    interfaces: [Logger]
  };
  function LogLevel(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function () {
    };
    LogLevel$DISABLED_instance = new LogLevel('DISABLED', 0);
    LogLevel$ERROR_instance = new LogLevel('ERROR', 1);
    LogLevel$WARN_instance = new LogLevel('WARN', 2);
    LogLevel$INFO_instance = new LogLevel('INFO', 3);
    LogLevel$DEBUG_instance = new LogLevel('DEBUG', 4);
    LogLevel$TRACE_instance = new LogLevel('TRACE', 5);
  }
  var LogLevel$DISABLED_instance;
  function LogLevel$DISABLED_getInstance() {
    LogLevel_initFields();
    return LogLevel$DISABLED_instance;
  }
  var LogLevel$ERROR_instance;
  function LogLevel$ERROR_getInstance() {
    LogLevel_initFields();
    return LogLevel$ERROR_instance;
  }
  var LogLevel$WARN_instance;
  function LogLevel$WARN_getInstance() {
    LogLevel_initFields();
    return LogLevel$WARN_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$DEBUG_instance;
  function LogLevel$DEBUG_getInstance() {
    LogLevel_initFields();
    return LogLevel$DEBUG_instance;
  }
  var LogLevel$TRACE_instance;
  function LogLevel$TRACE_getInstance() {
    LogLevel_initFields();
    return LogLevel$TRACE_instance;
  }
  LogLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogLevel',
    interfaces: [Enum]
  };
  function LogLevel$values() {
    return [LogLevel$DISABLED_getInstance(), LogLevel$ERROR_getInstance(), LogLevel$WARN_getInstance(), LogLevel$INFO_getInstance(), LogLevel$DEBUG_getInstance(), LogLevel$TRACE_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'DISABLED':
        return LogLevel$DISABLED_getInstance();
      case 'ERROR':
        return LogLevel$ERROR_getInstance();
      case 'WARN':
        return LogLevel$WARN_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'DEBUG':
        return LogLevel$DEBUG_getInstance();
      case 'TRACE':
        return LogLevel$TRACE_getInstance();
      default:throwISE('No enum constant io.mockk.impl.log.LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function Logger() {
    Logger$Companion_getInstance();
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
    this.loggerFactory = Logger$Companion$loggerFactory$lambda;
  }
  Logger$Companion.prototype.invoke_287e2$ = defineInlineFunction('mockk-js.io.mockk.impl.log.Logger.Companion.invoke_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.loggerFactory(getKClass(T_0));
    };
  }));
  function Logger$Companion$loggerFactory$lambda(it) {
    return new NoOpLogger();
  }
  Logger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Logger',
    interfaces: []
  };
  function NoOpLogger() {
  }
  NoOpLogger.prototype.error_h4ejuu$ = function (msg) {
  };
  NoOpLogger.prototype.error_l35kib$ = function (ex, msg) {
  };
  NoOpLogger.prototype.warn_h4ejuu$ = function (msg) {
  };
  NoOpLogger.prototype.warn_l35kib$ = function (ex, msg) {
  };
  NoOpLogger.prototype.info_h4ejuu$ = function (msg) {
  };
  NoOpLogger.prototype.info_l35kib$ = function (ex, msg) {
  };
  NoOpLogger.prototype.debug_h4ejuu$ = function (msg) {
  };
  NoOpLogger.prototype.debug_l35kib$ = function (ex, msg) {
  };
  NoOpLogger.prototype.trace_h4ejuu$ = function (msg) {
  };
  NoOpLogger.prototype.trace_l35kib$ = function (ex, msg) {
  };
  NoOpLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoOpLogger',
    interfaces: [Logger]
  };
  function SafeLog(callrecorderGetter) {
    this.callrecorderGetter = callrecorderGetter;
  }
  SafeLog.prototype.invoke_aidf1$ = function (logger) {
    return new SafeLogger(logger, this.callrecorderGetter);
  };
  SafeLog.prototype.exec_klfg04$ = function (block) {
    return this.callrecorderGetter().safeExec_klfg04$(block);
  };
  SafeLog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeLog',
    interfaces: []
  };
  function SafeLogger(logger, callRecorderGetter) {
    this.logger = logger;
    this.callRecorderGetter = callRecorderGetter;
  }
  function SafeLogger$error$lambda(this$SafeLogger, closure$msg) {
    return function () {
      this$SafeLogger.logger.error_h4ejuu$(closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.error_h4ejuu$ = function (msg) {
    this.safeLogging_0(SafeLogger$error$lambda(this, msg));
  };
  function SafeLogger$error$lambda_0(this$SafeLogger, closure$ex, closure$msg) {
    return function () {
      this$SafeLogger.logger.error_l35kib$(closure$ex, closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.error_l35kib$ = function (ex, msg) {
    this.safeLogging_0(SafeLogger$error$lambda_0(this, ex, msg));
  };
  function SafeLogger$warn$lambda(this$SafeLogger, closure$msg) {
    return function () {
      this$SafeLogger.logger.warn_h4ejuu$(closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.warn_h4ejuu$ = function (msg) {
    this.safeLogging_0(SafeLogger$warn$lambda(this, msg));
  };
  function SafeLogger$warn$lambda_0(this$SafeLogger, closure$ex, closure$msg) {
    return function () {
      this$SafeLogger.logger.warn_l35kib$(closure$ex, closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.warn_l35kib$ = function (ex, msg) {
    this.safeLogging_0(SafeLogger$warn$lambda_0(this, ex, msg));
  };
  function SafeLogger$info$lambda(this$SafeLogger, closure$msg) {
    return function () {
      this$SafeLogger.logger.info_h4ejuu$(closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.info_h4ejuu$ = function (msg) {
    this.safeLogging_0(SafeLogger$info$lambda(this, msg));
  };
  function SafeLogger$info$lambda_0(this$SafeLogger, closure$ex, closure$msg) {
    return function () {
      this$SafeLogger.logger.info_l35kib$(closure$ex, closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.info_l35kib$ = function (ex, msg) {
    this.safeLogging_0(SafeLogger$info$lambda_0(this, ex, msg));
  };
  function SafeLogger$debug$lambda(this$SafeLogger, closure$msg) {
    return function () {
      this$SafeLogger.logger.debug_h4ejuu$(closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.debug_h4ejuu$ = function (msg) {
    this.safeLogging_0(SafeLogger$debug$lambda(this, msg));
  };
  function SafeLogger$debug$lambda_0(this$SafeLogger, closure$ex, closure$msg) {
    return function () {
      this$SafeLogger.logger.debug_l35kib$(closure$ex, closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.debug_l35kib$ = function (ex, msg) {
    this.safeLogging_0(SafeLogger$debug$lambda_0(this, ex, msg));
  };
  function SafeLogger$trace$lambda(this$SafeLogger, closure$msg) {
    return function () {
      this$SafeLogger.logger.trace_h4ejuu$(closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.trace_h4ejuu$ = function (msg) {
    this.safeLogging_0(SafeLogger$trace$lambda(this, msg));
  };
  function SafeLogger$trace$lambda_0(this$SafeLogger, closure$ex, closure$msg) {
    return function () {
      this$SafeLogger.logger.trace_l35kib$(closure$ex, closure$msg);
      return Unit;
    };
  }
  SafeLogger.prototype.trace_l35kib$ = function (ex, msg) {
    this.safeLogging_0(SafeLogger$trace$lambda_0(this, ex, msg));
  };
  SafeLogger.prototype.safeLogging_0 = function (block) {
    this.callRecorderGetter().safeExec_klfg04$(block);
  };
  SafeLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeLogger',
    interfaces: [Logger]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function CommonIdentityHashMapOf() {
    this.map = LinkedHashMap_init();
  }
  Object.defineProperty(CommonIdentityHashMapOf.prototype, 'size', {
    get: function () {
      return this.map.size;
    }
  });
  CommonIdentityHashMapOf.prototype.containsKey_11rb$ = function (key) {
    return this.map.containsKey_11rb$(this.ref_0(key));
  };
  CommonIdentityHashMapOf.prototype.containsValue_11rc$ = function (value) {
    return this.map.containsValue_11rc$(value);
  };
  CommonIdentityHashMapOf.prototype.get_11rb$ = function (key) {
    return this.map.get_11rb$(this.ref_0(key));
  };
  CommonIdentityHashMapOf.prototype.isEmpty = function () {
    return this.map.isEmpty();
  };
  Object.defineProperty(CommonIdentityHashMapOf.prototype, 'entries', {
    get: function () {
      throw new UnsupportedOperationException('entries');
    }
  });
  Object.defineProperty(CommonIdentityHashMapOf.prototype, 'keys', {
    get: function () {
      throw new UnsupportedOperationException('keys');
    }
  });
  Object.defineProperty(CommonIdentityHashMapOf.prototype, 'values', {
    get: function () {
      return this.map.values;
    }
  });
  CommonIdentityHashMapOf.prototype.clear = function () {
    this.map.clear();
  };
  CommonIdentityHashMapOf.prototype.put_xwzc9p$ = function (key, value) {
    return this.map.put_xwzc9p$(this.ref_0(key), value);
  };
  CommonIdentityHashMapOf.prototype.putAll_a2k3zr$ = function (from) {
    throw new UnsupportedOperationException('putAll');
  };
  CommonIdentityHashMapOf.prototype.remove_11rb$ = function (key) {
    return this.map.remove_11rb$(this.ref_0(key));
  };
  CommonIdentityHashMapOf.prototype.ref_0 = function (key) {
    return key == null ? null : InternalPlatform_getInstance().ref_za3rmp$(key);
  };
  CommonIdentityHashMapOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonIdentityHashMapOf',
    interfaces: [MutableMap]
  };
  function CommonRef(value) {
    this.value_b9ioz3$_0 = value;
  }
  Object.defineProperty(CommonRef.prototype, 'value', {
    get: function () {
      return this.value_b9ioz3$_0;
    }
  });
  CommonRef.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Ref))
      return false;
    return this.value === other.value;
  };
  CommonRef.prototype.hashCode = function () {
    if (InternalPlatform_getInstance().isPassedByValue_xo1ogr$(Kotlin.getKClassFromExpression(this.value))) {
      return hashCode(this.value);
    }
     else {
      return mockk.InternalPlatformDsl.identityHashCode_za3rmp$(this.value);
    }
  };
  CommonRef.prototype.toString = function () {
    return 'Ref(' + toString(Kotlin.getKClassFromExpression(this.value).simpleName) + '@' + InternalPlatform_getInstance().hkd_za3rmp$(this.value) + ')';
  };
  CommonRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonRef',
    interfaces: [Ref]
  };
  function AutoHinter() {
  }
  AutoHinter.prototype.autoHint_66m16y$ = function (callRecorder, i, n, block) {
    callRecorder.round_vux9f0$(i, n);
    block();
  };
  AutoHinter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoHinter',
    interfaces: []
  };
  function CallRecorderFactories(signatureMatcherDetector, callRoundBuilder, childHinter, verifier, permanentMocker, verificationCallSorter, answeringState, answeringStillAcceptingAnswersState, stubbingState, verifyingState, stubbingAwaitingAnswerState, safeLoggingState) {
    this.signatureMatcherDetector = signatureMatcherDetector;
    this.callRoundBuilder = callRoundBuilder;
    this.childHinter = childHinter;
    this.verifier = verifier;
    this.permanentMocker = permanentMocker;
    this.verificationCallSorter = verificationCallSorter;
    this.answeringState = answeringState;
    this.answeringStillAcceptingAnswersState = answeringStillAcceptingAnswersState;
    this.stubbingState = stubbingState;
    this.verifyingState = verifyingState;
    this.stubbingAwaitingAnswerState = stubbingAwaitingAnswerState;
    this.safeLoggingState = safeLoggingState;
  }
  CallRecorderFactories.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallRecorderFactories',
    interfaces: []
  };
  CallRecorderFactories.prototype.component1 = function () {
    return this.signatureMatcherDetector;
  };
  CallRecorderFactories.prototype.component2 = function () {
    return this.callRoundBuilder;
  };
  CallRecorderFactories.prototype.component3 = function () {
    return this.childHinter;
  };
  CallRecorderFactories.prototype.component4 = function () {
    return this.verifier;
  };
  CallRecorderFactories.prototype.component5 = function () {
    return this.permanentMocker;
  };
  CallRecorderFactories.prototype.component6 = function () {
    return this.verificationCallSorter;
  };
  CallRecorderFactories.prototype.component7 = function () {
    return this.answeringState;
  };
  CallRecorderFactories.prototype.component8 = function () {
    return this.answeringStillAcceptingAnswersState;
  };
  CallRecorderFactories.prototype.component9 = function () {
    return this.stubbingState;
  };
  CallRecorderFactories.prototype.component10 = function () {
    return this.verifyingState;
  };
  CallRecorderFactories.prototype.component11 = function () {
    return this.stubbingAwaitingAnswerState;
  };
  CallRecorderFactories.prototype.component12 = function () {
    return this.safeLoggingState;
  };
  CallRecorderFactories.prototype.copy_eyf4fr$ = function (signatureMatcherDetector, callRoundBuilder, childHinter, verifier, permanentMocker, verificationCallSorter, answeringState, answeringStillAcceptingAnswersState, stubbingState, verifyingState, stubbingAwaitingAnswerState, safeLoggingState) {
    return new CallRecorderFactories(signatureMatcherDetector === void 0 ? this.signatureMatcherDetector : signatureMatcherDetector, callRoundBuilder === void 0 ? this.callRoundBuilder : callRoundBuilder, childHinter === void 0 ? this.childHinter : childHinter, verifier === void 0 ? this.verifier : verifier, permanentMocker === void 0 ? this.permanentMocker : permanentMocker, verificationCallSorter === void 0 ? this.verificationCallSorter : verificationCallSorter, answeringState === void 0 ? this.answeringState : answeringState, answeringStillAcceptingAnswersState === void 0 ? this.answeringStillAcceptingAnswersState : answeringStillAcceptingAnswersState, stubbingState === void 0 ? this.stubbingState : stubbingState, verifyingState === void 0 ? this.verifyingState : verifyingState, stubbingAwaitingAnswerState === void 0 ? this.stubbingAwaitingAnswerState : stubbingAwaitingAnswerState, safeLoggingState === void 0 ? this.safeLoggingState : safeLoggingState);
  };
  CallRecorderFactories.prototype.toString = function () {
    return 'CallRecorderFactories(signatureMatcherDetector=' + Kotlin.toString(this.signatureMatcherDetector) + (', callRoundBuilder=' + Kotlin.toString(this.callRoundBuilder)) + (', childHinter=' + Kotlin.toString(this.childHinter)) + (', verifier=' + Kotlin.toString(this.verifier)) + (', permanentMocker=' + Kotlin.toString(this.permanentMocker)) + (', verificationCallSorter=' + Kotlin.toString(this.verificationCallSorter)) + (', answeringState=' + Kotlin.toString(this.answeringState)) + (', answeringStillAcceptingAnswersState=' + Kotlin.toString(this.answeringStillAcceptingAnswersState)) + (', stubbingState=' + Kotlin.toString(this.stubbingState)) + (', verifyingState=' + Kotlin.toString(this.verifyingState)) + (', stubbingAwaitingAnswerState=' + Kotlin.toString(this.stubbingAwaitingAnswerState)) + (', safeLoggingState=' + Kotlin.toString(this.safeLoggingState)) + ')';
  };
  CallRecorderFactories.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signatureMatcherDetector) | 0;
    result = result * 31 + Kotlin.hashCode(this.callRoundBuilder) | 0;
    result = result * 31 + Kotlin.hashCode(this.childHinter) | 0;
    result = result * 31 + Kotlin.hashCode(this.verifier) | 0;
    result = result * 31 + Kotlin.hashCode(this.permanentMocker) | 0;
    result = result * 31 + Kotlin.hashCode(this.verificationCallSorter) | 0;
    result = result * 31 + Kotlin.hashCode(this.answeringState) | 0;
    result = result * 31 + Kotlin.hashCode(this.answeringStillAcceptingAnswersState) | 0;
    result = result * 31 + Kotlin.hashCode(this.stubbingState) | 0;
    result = result * 31 + Kotlin.hashCode(this.verifyingState) | 0;
    result = result * 31 + Kotlin.hashCode(this.stubbingAwaitingAnswerState) | 0;
    result = result * 31 + Kotlin.hashCode(this.safeLoggingState) | 0;
    return result;
  };
  CallRecorderFactories.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signatureMatcherDetector, other.signatureMatcherDetector) && Kotlin.equals(this.callRoundBuilder, other.callRoundBuilder) && Kotlin.equals(this.childHinter, other.childHinter) && Kotlin.equals(this.verifier, other.verifier) && Kotlin.equals(this.permanentMocker, other.permanentMocker) && Kotlin.equals(this.verificationCallSorter, other.verificationCallSorter) && Kotlin.equals(this.answeringState, other.answeringState) && Kotlin.equals(this.answeringStillAcceptingAnswersState, other.answeringStillAcceptingAnswersState) && Kotlin.equals(this.stubbingState, other.stubbingState) && Kotlin.equals(this.verifyingState, other.verifyingState) && Kotlin.equals(this.stubbingAwaitingAnswerState, other.stubbingAwaitingAnswerState) && Kotlin.equals(this.safeLoggingState, other.safeLoggingState)))));
  };
  function CallRound(calls) {
    this.calls = calls;
  }
  CallRound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallRound',
    interfaces: []
  };
  CallRound.prototype.component1 = function () {
    return this.calls;
  };
  CallRound.prototype.copy_6coq5h$ = function (calls) {
    return new CallRound(calls === void 0 ? this.calls : calls);
  };
  CallRound.prototype.toString = function () {
    return 'CallRound(calls=' + Kotlin.toString(this.calls) + ')';
  };
  CallRound.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.calls) | 0;
    return result;
  };
  CallRound.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.calls, other.calls))));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function CallRoundBuilder(safeLog) {
    this.safeLog = safeLog;
    this.signedMatchers = ArrayList_init();
    this.signedCalls = ArrayList_init();
  }
  CallRoundBuilder.prototype.addMatcher_98c2tk$ = function (matcher, sigValue) {
    this.signedMatchers.add_11rb$(new SignedMatcher(matcher, sigValue));
  };
  function CallRoundBuilder$addSignedCall$lambda(closure$invocation) {
    return function () {
      return closure$invocation.toString();
    };
  }
  CallRoundBuilder.prototype.addSignedCall_cztkpv$ = function (retValue, tempMock, retType, invocation) {
    var signedCall = new SignedCall(retValue, tempMock, retType, invocation.self, invocation.method, invocation.args, this.safeLog.exec_klfg04$(CallRoundBuilder$addSignedCall$lambda(invocation)), toList(this.signedMatchers));
    this.signedCalls.add_11rb$(signedCall);
    this.signedMatchers.clear();
  };
  function CallRoundBuilder$addWasNotCalled$lambda(closure$self) {
    return function () {
      return closure$self.toString() + ' wasNot Called';
    };
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  CallRoundBuilder.prototype.addWasNotCalled_pqjuzw$ = function (list) {
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var self_0 = tmp$.next();
      this.signedCalls.add_11rb$(new SignedCall(Unit, false, getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), self_0, WasNotCalled_getInstance().method, emptyList(), this.safeLog.exec_klfg04$(CallRoundBuilder$addWasNotCalled$lambda(self_0)), emptyList()));
    }
  };
  CallRoundBuilder.prototype.build = function () {
    return new CallRound(toList(this.signedCalls));
  };
  CallRoundBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallRoundBuilder',
    interfaces: []
  };
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function ChainedCallDetector(safeLog) {
    this.log = safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(SignatureMatcherDetector)));
    this.matcherMap = HashMap_init();
    this.allCompositeMatchers = ArrayList_init();
    this.argMatchers = ArrayList_init();
    this.call_29t6v0$_0 = this.call_29t6v0$_0;
  }
  Object.defineProperty(ChainedCallDetector.prototype, 'call', {
    get: function () {
      if (this.call_29t6v0$_0 == null)
        return throwUPAE('call');
      return this.call_29t6v0$_0;
    },
    set: function (call) {
      this.call_29t6v0$_0 = call;
    }
  });
  function ChainedCallDetector$detect$lambda(closure$callN, closure$zeroCall) {
    return function () {
      return 'Processing call #' + closure$callN + ': ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$zeroCall.method);
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function ChainedCallDetector$detect$gatherMatchers$lambda(closure$zeroCall, this$ChainedCallDetector) {
    return function () {
      return 'Matcher map for ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$zeroCall.method) + ': ' + this$ChainedCallDetector.matcherMap;
    };
  }
  function ChainedCallDetector$detect$gatherMatchers(closure$zeroCall, closure$callInAllRounds, this$ChainedCallDetector) {
    return function () {
      var times = closure$zeroCall.matchers.size;
      var tmp$;
      tmp$ = times - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        var closure$callInAllRounds_0 = closure$callInAllRounds;
        var this$ChainedCallDetector_0 = this$ChainedCallDetector;
        var destination = ArrayList_init(collectionSizeOrDefault(closure$callInAllRounds_0, 10));
        var tmp$_0;
        tmp$_0 = closure$callInAllRounds_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(item.matchers.get_za3lpa$(index).matcher);
        }
        var matcher = last(destination);
        var destination_0 = ArrayList_init(collectionSizeOrDefault(closure$callInAllRounds_0, 10));
        var tmp$_1;
        tmp$_1 = closure$callInAllRounds_0.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          destination_0.add_11rb$(item_0.matchers.get_za3lpa$(index).signature);
        }
        var signature = toList(destination_0);
        if (Kotlin.isType(matcher, CompositeMatcher)) {
          var tmp$_2 = this$ChainedCallDetector_0.allCompositeMatchers;
          var destination_1 = ArrayList_init(collectionSizeOrDefault(closure$callInAllRounds_0, 10));
          var tmp$_3;
          tmp$_3 = closure$callInAllRounds_0.iterator();
          while (tmp$_3.hasNext()) {
            var item_1 = tmp$_3.next();
            var tmp$_4;
            destination_1.add_11rb$(Kotlin.isType(tmp$_4 = item_1.matchers.get_za3lpa$(index).matcher, CompositeMatcher) ? tmp$_4 : throwCCE());
          }
          tmp$_2.add_11rb$(destination_1);
        }
        this$ChainedCallDetector_0.matcherMap.put_xwzc9p$(signature, matcher);
      }
      this$ChainedCallDetector.log.trace_h4ejuu$(ChainedCallDetector$detect$gatherMatchers$lambda(closure$zeroCall, this$ChainedCallDetector));
    };
  }
  function ChainedCallDetector$detect$buildMatcher(closure$allAny, this$ChainedCallDetector) {
    return function (isStart, zeroCallValue, matcherBySignature) {
      var tmp$;
      if (matcherBySignature == null) {
        if (closure$allAny.v)
          tmp$ = new ConstantMatcher(true);
        else {
          tmp$ = this$ChainedCallDetector.eqOrNullMatcher_0(zeroCallValue);
        }
      }
       else {
        if (isStart && Kotlin.isType(matcherBySignature, AllAnyMatcher)) {
          closure$allAny.v = true;
          tmp$ = new ConstantMatcher(true);
        }
         else {
          tmp$ = matcherBySignature;
        }
      }
      return tmp$;
    };
  }
  function ChainedCallDetector$detect$regularArgument$lambda(closure$nArgument, closure$zeroCall, closure$signature) {
    return function () {
      return 'Signature for ' + closure$nArgument + ' argument of ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$zeroCall.method) + ': ' + closure$signature;
    };
  }
  function ChainedCallDetector$detect$regularArgument(closure$callInAllRounds, this$ChainedCallDetector, closure$zeroCall, closure$buildMatcher) {
    return function (nArgument) {
      var $receiver = closure$callInAllRounds;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(InternalPlatform_getInstance().packRef_s8jyv4$(item.args.get_za3lpa$(nArgument)));
      }
      var signature = toList(destination);
      this$ChainedCallDetector.log.trace_h4ejuu$(ChainedCallDetector$detect$regularArgument$lambda(nArgument, closure$zeroCall, signature));
      var $receiver_0 = this$ChainedCallDetector.matcherMap;
      var tmp$_0;
      var matcherBySignature = (Kotlin.isType(tmp$_0 = $receiver_0, MutableMap) ? tmp$_0 : throwCCE()).remove_11rb$(signature);
      return closure$buildMatcher(nArgument === 0, closure$zeroCall.args.get_za3lpa$(nArgument), matcherBySignature);
    };
  }
  function ChainedCallDetector$detect$varArgArgument$lambda$lambda(closure$nArgument, closure$nVarArg, closure$zeroCall, closure$signature) {
    return function () {
      return 'Signature for ' + closure$nArgument + '/' + closure$nVarArg + ' argument of ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$zeroCall.method) + ': ' + closure$signature;
    };
  }
  function ChainedCallDetector$detect$varArgArgument(closure$zeroCall, closure$callInAllRounds, this$ChainedCallDetector, closure$buildMatcher) {
    return function (nArgument) {
      var varArgMatchers = ArrayList_init();
      var zeroCallArg = mockk.InternalPlatformDsl.toArray_s8jyvk$(ensureNotNull(closure$zeroCall.args.get_za3lpa$(nArgument)));
      var tmp$;
      tmp$ = zeroCallArg.length - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        var closure$callInAllRounds_0 = closure$callInAllRounds;
        var this$ChainedCallDetector_0 = this$ChainedCallDetector;
        var closure$zeroCall_0 = closure$zeroCall;
        var closure$buildMatcher_0 = closure$buildMatcher;
        var destination = ArrayList_init(collectionSizeOrDefault(closure$callInAllRounds_0, 10));
        var tmp$_0;
        tmp$_0 = closure$callInAllRounds_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var arg = mockk.InternalPlatformDsl.toArray_s8jyvk$(ensureNotNull(item.args.get_za3lpa$(nArgument)));
          tmp$_1.call(destination, InternalPlatform_getInstance().packRef_s8jyv4$(arg[index]));
        }
        var signature = toList(destination);
        this$ChainedCallDetector_0.log.trace_h4ejuu$(ChainedCallDetector$detect$varArgArgument$lambda$lambda(nArgument, index, closure$zeroCall_0, signature));
        var $receiver = this$ChainedCallDetector_0.matcherMap;
        var tmp$_2;
        var matcherBySignature = (Kotlin.isType(tmp$_2 = $receiver, MutableMap) ? tmp$_2 : throwCCE()).remove_11rb$(signature);
        varArgMatchers.add_11rb$(closure$buildMatcher_0(nArgument === 0 && index === 0, zeroCallArg[index], matcherBySignature));
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(varArgMatchers, 10));
      var tmp$_3;
      tmp$_3 = varArgMatchers.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        var tmp$_4;
        destination_0.add_11rb$(Kotlin.isType(tmp$_4 = item_0, Matcher) ? tmp$_4 : throwCCE());
      }
      return new ArrayMatcher(destination_0);
    };
  }
  function ChainedCallDetector$detect$detectArgMatchers(closure$allAny, closure$zeroCall, closure$varArgArgument, closure$regularArgument, this$ChainedCallDetector) {
    return function () {
      closure$allAny.v = false;
      var varArgsArg = closure$zeroCall.method.varArgsArg;
      var times = closure$zeroCall.args.size;
      var tmp$;
      tmp$ = times - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        var closure$varArgArgument_0 = closure$varArgArgument;
        var closure$regularArgument_0 = closure$regularArgument;
        var this$ChainedCallDetector_0 = this$ChainedCallDetector;
        var tmp$_0;
        if (varArgsArg === index) {
          tmp$_0 = closure$varArgArgument_0(index);
        }
         else {
          tmp$_0 = closure$regularArgument_0(index);
        }
        var matcher = tmp$_0;
        this$ChainedCallDetector_0.argMatchers.add_11rb$(matcher);
      }
    };
  }
  function ChainedCallDetector$detect$processCompositeMatchers$lambda$lambda(closure$nOp, closure$matcher, closure$signature) {
    return function () {
      return 'Signature for ' + closure$nOp + ' operand of ' + closure$matcher + ' composite matcher: ' + closure$signature;
    };
  }
  function ChainedCallDetector$detect$processCompositeMatchers(this$ChainedCallDetector) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = this$ChainedCallDetector.allCompositeMatchers.iterator();
      while (tmp$.hasNext()) {
        var compositeMatchers = tmp$.next();
        var matcher = last(compositeMatchers);
        var $receiver = withIndex(matcher.operandValues);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          var tmp$_2 = destination.add_11rb$;
          var this$ChainedCallDetector_0 = this$ChainedCallDetector;
          var nOp = item.component1();
          var tmp$_3;
          var destination_0 = ArrayList_init(collectionSizeOrDefault(compositeMatchers, 10));
          var tmp$_4;
          tmp$_4 = compositeMatchers.iterator();
          while (tmp$_4.hasNext()) {
            var item_0 = tmp$_4.next();
            destination_0.add_11rb$(InternalPlatform_getInstance().packRef_s8jyv4$(item_0.operandValues.get_za3lpa$(nOp)));
          }
          var signature = toList(destination_0);
          this$ChainedCallDetector_0.log.trace_h4ejuu$(ChainedCallDetector$detect$processCompositeMatchers$lambda$lambda(nOp, matcher, signature));
          var $receiver_0 = this$ChainedCallDetector_0.matcherMap;
          var tmp$_5;
          tmp$_2.call(destination, (tmp$_3 = (Kotlin.isType(tmp$_5 = $receiver_0, MutableMap) ? tmp$_5 : throwCCE()).remove_11rb$(signature)) != null ? tmp$_3 : this$ChainedCallDetector_0.eqOrNullMatcher_0(matcher.operandValues.get_za3lpa$(nOp)));
        }
        matcher.subMatchers = (tmp$_0 = destination) == null || Kotlin.isType(tmp$_0, List) ? tmp$_0 : throwCCE();
      }
    };
  }
  function ChainedCallDetector$detect$buildRecordedCall$lambda() {
    return 'Suspend function found. Replacing continuation with any() matcher';
  }
  function ChainedCallDetector$detect$buildRecordedCall$lambda_0(closure$im) {
    return function () {
      return 'Built matcher: ' + closure$im;
    };
  }
  function ChainedCallDetector$detect$buildRecordedCall(closure$zeroCall, this$ChainedCallDetector, closure$allAny) {
    return function () {
      var tmp$;
      if (this$ChainedCallDetector.isSuspend_0(closure$zeroCall.method)) {
        this$ChainedCallDetector.log.trace_h4ejuu$(ChainedCallDetector$detect$buildRecordedCall$lambda);
        this$ChainedCallDetector.argMatchers.set_wxm5ur$(this$ChainedCallDetector.argMatchers.size - 1 | 0, new ConstantMatcher(true));
      }
      if (!this$ChainedCallDetector.matcherMap.isEmpty()) {
        throw new MockKException('Failed matching mocking signature for' + '\n' + closure$zeroCall.invocationStr + '\n' + 'left matchers: ' + this$ChainedCallDetector.matcherMap.values);
      }
      var im = new InvocationMatcher(closure$zeroCall.self, closure$zeroCall.method, Kotlin.isType(tmp$ = toList(this$ChainedCallDetector.argMatchers), List) ? tmp$ : throwCCE(), closure$allAny.v);
      this$ChainedCallDetector.log.trace_h4ejuu$(ChainedCallDetector$detect$buildRecordedCall$lambda_0(im));
      return new RecordedCall(closure$zeroCall.retValue, closure$zeroCall.isRetValueMock, closure$zeroCall.retType, im, null, null);
    };
  }
  ChainedCallDetector.prototype.detect_4jl8kp$ = function (callRounds, callN) {
    var destination = ArrayList_init(collectionSizeOrDefault(callRounds, 10));
    var tmp$;
    tmp$ = callRounds.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.calls.get_za3lpa$(callN));
    }
    var callInAllRounds = destination;
    var zeroCall = callInAllRounds.get_za3lpa$(0);
    var allAny = {v: false};
    this.log.trace_h4ejuu$(ChainedCallDetector$detect$lambda(callN, zeroCall));
    var gatherMatchers = ChainedCallDetector$detect$gatherMatchers(zeroCall, callInAllRounds, this);
    var buildMatcher = ChainedCallDetector$detect$buildMatcher(allAny, this);
    var regularArgument = ChainedCallDetector$detect$regularArgument(callInAllRounds, this, zeroCall, buildMatcher);
    var varArgArgument = ChainedCallDetector$detect$varArgArgument(zeroCall, callInAllRounds, this, buildMatcher);
    var detectArgMatchers = ChainedCallDetector$detect$detectArgMatchers(allAny, zeroCall, varArgArgument, regularArgument, this);
    var processCompositeMatchers = ChainedCallDetector$detect$processCompositeMatchers(this);
    var buildRecordedCall = ChainedCallDetector$detect$buildRecordedCall(zeroCall, this, allAny);
    gatherMatchers();
    detectArgMatchers();
    processCompositeMatchers();
    this.call = buildRecordedCall();
  };
  ChainedCallDetector.prototype.isSuspend_0 = function ($receiver) {
    var tmp$;
    return InternalPlatform_getInstance().isSuspend_8f04rn$(Kotlin.isType(tmp$ = $receiver.paramTypes, List) ? tmp$ : throwCCE());
  };
  ChainedCallDetector.prototype.eqOrNullMatcher_0 = function (arg) {
    var tmp$;
    if (arg == null) {
      tmp$ = new NullCheckMatcher(false);
    }
     else {
      tmp$ = new EqMatcher(arg);
    }
    return tmp$;
  };
  ChainedCallDetector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChainedCallDetector',
    interfaces: []
  };
  function ChildHinter() {
    this.childTypes_0 = LinkedHashMap_init();
  }
  ChildHinter.prototype.nextChildType_w12xhd$ = function (defaultReturnType) {
    var type = this.childTypes_0.get_11rb$(1);
    this.shift_0();
    return type != null ? type : defaultReturnType();
  };
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  ChildHinter.prototype.shift_0 = function () {
    var $receiver = this.childTypes_0;
    var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = destination.put_xwzc9p$;
      var k = element.key;
      tmp$_0.call(destination, k - 1 | 0, element.value);
    }
    var destination_0 = LinkedHashMap_init();
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var k_0 = element_0.key;
      if (k_0 > 0) {
        destination_0.put_xwzc9p$(element_0.key, element_0.value);
      }
    }
    this.childTypes_0 = toMutableMap(destination_0);
  };
  ChildHinter.prototype.hint_pp5y4x$ = function (n, cls) {
    this.childTypes_0.put_xwzc9p$(n, cls);
  };
  ChildHinter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildHinter',
    interfaces: []
  };
  function CommonCallRecorder(stubRepo, instantiator, signatureValueGenerator, mockFactory, anyValueGenerator, safeLog, factories, initialState) {
    CommonCallRecorder$Companion_getInstance();
    this.stubRepo = stubRepo;
    this.instantiator = instantiator;
    this.signatureValueGenerator = signatureValueGenerator;
    this.mockFactory = mockFactory;
    this.anyValueGenerator = anyValueGenerator;
    this.safeLog = safeLog;
    this.factories = factories;
    this.initialState = initialState;
    this.calls_j0506$_0 = ArrayList_init();
    this.state = this.initialState(this);
    this.childHinter = this.factories.childHinter();
  }
  Object.defineProperty(CommonCallRecorder.prototype, 'calls', {
    get: function () {
      return this.calls_j0506$_0;
    }
  });
  function CommonCallRecorder$startStubbing$lambda() {
    return 'Starting stubbing';
  }
  CommonCallRecorder.prototype.startStubbing = function () {
    this.state = this.state.startStubbing();
    CommonCallRecorder$Companion_getInstance().log.trace_h4ejuu$(CommonCallRecorder$startStubbing$lambda);
  };
  function CommonCallRecorder$startVerification$lambda() {
    return 'Starting verification';
  }
  CommonCallRecorder.prototype.startVerification_q2ls4b$ = function (params) {
    this.state = this.state.startVerification_q2ls4b$(params);
    CommonCallRecorder$Companion_getInstance().log.trace_h4ejuu$(CommonCallRecorder$startVerification$lambda);
  };
  CommonCallRecorder.prototype.done = function () {
    this.state = this.state.recordingDone();
  };
  CommonCallRecorder.prototype.round_vux9f0$$default = function (n, total) {
    this.state.round_vux9f0$(n, total);
  };
  CommonCallRecorder.prototype.nCalls = function () {
    return this.state.nCalls();
  };
  CommonCallRecorder.prototype.matcher_w5iupj$ = function (matcher, cls) {
    return this.state.matcher_w5iupj$(matcher, cls);
  };
  CommonCallRecorder.prototype.call_2pihsr$ = function (invocation) {
    return this.state.call_2pihsr$(invocation);
  };
  CommonCallRecorder.prototype.answer_gjjeqr$ = function (answer) {
    this.state.answer_gjjeqr$(answer);
  };
  CommonCallRecorder.prototype.estimateCallRounds = function () {
    return this.state.estimateCallRounds();
  };
  CommonCallRecorder.prototype.wasNotCalled_pqjuzw$ = function (list) {
    this.state.wasNotCalled_pqjuzw$(list);
  };
  CommonCallRecorder.prototype.hintNextReturnType_ast7qv$ = function (cls, n) {
    this.childHinter.hint_pp5y4x$(n, cls);
  };
  CommonCallRecorder.prototype.discardLastCallRound = function () {
    this.state.discardLastCallRound();
  };
  CommonCallRecorder.prototype.reset = function () {
    this.calls.clear();
    this.childHinter = this.factories.childHinter();
    this.state = this.initialState(this);
  };
  CommonCallRecorder.prototype.safeExec_klfg04$ = function (block) {
    var prevState = this.state;
    try {
      this.state = this.factories.safeLoggingState(this);
      return block();
    }
    finally {
      this.state = prevState;
    }
  };
  function CommonCallRecorder$Companion() {
    CommonCallRecorder$Companion_instance = this;
    this.log = Logger$Companion_getInstance().loggerFactory(getKClass(CommonCallRecorder));
  }
  CommonCallRecorder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommonCallRecorder$Companion_instance = null;
  function CommonCallRecorder$Companion_getInstance() {
    if (CommonCallRecorder$Companion_instance === null) {
      new CommonCallRecorder$Companion();
    }
    return CommonCallRecorder$Companion_instance;
  }
  CommonCallRecorder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonCallRecorder',
    interfaces: [MockKGateway$CallRecorder]
  };
  function PermanentMocker(stubRepo, safeLog) {
    this.stubRepo = stubRepo;
    this.safeLog = safeLog;
    this.log = this.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(PermanentMocker)));
    this.permanentMocks = InternalPlatform_getInstance().identityMap_xff4la$();
    this.callRef = InternalPlatform_getInstance().weakMap_xff4la$();
  }
  function PermanentMocker$mock$lambda(closure$result, this$PermanentMocker) {
    return function () {
      return this$PermanentMocker.describeCallTree_0(closure$result);
    };
  }
  function PermanentMocker$mock$lambda_0(closure$callTree) {
    return function () {
      return 'Mocked permanently: ' + closure$callTree.get_za3lpa$(0);
    };
  }
  function PermanentMocker$mock$lambda_1(closure$callTree) {
    return function () {
      return 'Mocked permanently:\n' + joinToString(closure$callTree, ', ');
    };
  }
  PermanentMocker.prototype.mock_fprufi$ = function (calls) {
    var tmp$;
    var result = ArrayList_init();
    tmp$ = calls.iterator();
    while (tmp$.hasNext()) {
      var call = tmp$.next();
      var permanentCall = this.permamentize_0(call);
      result.add_11rb$(permanentCall);
    }
    var callTree = this.safeLog.exec_klfg04$(PermanentMocker$mock$lambda(result, this));
    if (callTree.size === 1) {
      this.log.trace_h4ejuu$(PermanentMocker$mock$lambda_0(callTree));
    }
     else {
      this.log.trace_h4ejuu$(PermanentMocker$mock$lambda_1(callTree));
    }
    return result;
  };
  function PermanentMocker$permamentize$lambda(closure$equivalentCall) {
    return function () {
      return 'Child search key: ' + closure$equivalentCall.matcher;
    };
  }
  PermanentMocker.prototype.permamentize_0 = function (call) {
    var newCall = this.makeCallPermanent_0(call);
    var retValue = call.retValue;
    if (call.isRetValueMock && retValue != null) {
      var equivalentCall = this.makeEquivalent_0(newCall);
      this.log.trace_h4ejuu$(PermanentMocker$permamentize$lambda(equivalentCall));
      var childMock = this.stubRepo.stubFor_za3rmp$(newCall.matcher.self).childMockK_p9q5g$(equivalentCall.matcher, equivalentCall.retType);
      var newNewCall = newCall.copy_aaa1mo$(childMock);
      this.permanentMocks.put_xwzc9p$(retValue, childMock);
      this.callRef.put_xwzc9p$(retValue, newNewCall);
      return newNewCall;
    }
    return newCall;
  };
  PermanentMocker.prototype.makeEquivalent_0 = function (newCall) {
    var $receiver = newCall.matcher.args;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      if (Kotlin.isType(item, EquivalentMatcher)) {
        transform$result = item.equivalent();
      }
       else {
        transform$result = item;
      }
      tmp$_0.call(destination, transform$result);
    }
    var equivalentArgs = destination;
    var equivalentIM = newCall.matcher.copy_qqcev4$(void 0, void 0, equivalentArgs);
    return newCall.copy_aaa1mo$(void 0, void 0, void 0, equivalentIM);
  };
  PermanentMocker.prototype.makeCallPermanent_0 = function (call) {
    var tmp$;
    var selfChain = this.callRef.get_11rb$(call.matcher.self);
    var $receiver = call.matcher.args;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      var tmp$_2;
      if (Kotlin.isType(item, EqMatcher)) {
        transform$result = (tmp$_2 = this.callRef.get_11rb$(item.value)) != null ? tmp$_2 : item;
      }
       else {
        transform$result = item;
      }
      tmp$_1.call(destination, transform$result);
    }
    var argChains = destination;
    var newSelf = (tmp$ = this.permanentMocks.get_11rb$(call.matcher.self)) != null ? tmp$ : call.matcher.self;
    var $receiver_0 = call.matcher.args;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(item_0.substitute_kinntx$(this.permanentMocks));
    }
    var newArgs = destination_0;
    var newMatcher = call.matcher.copy_qqcev4$(newSelf, void 0, newArgs);
    return call.copy_aaa1mo$(void 0, void 0, void 0, newMatcher, selfChain, argChains);
  };
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  PermanentMocker.prototype.describeCallTree_0 = function (calls) {
    var tmp$;
    var callTree = LinkedHashMap_init();
    var usedCalls = HashSet_init();
    tmp$ = calls.iterator();
    while (tmp$.hasNext()) {
      var call = tmp$.next();
      var value = this.formatCall_0(call, callTree, usedCalls);
      callTree.put_xwzc9p$(call, value);
    }
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = calls.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!usedCalls.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2;
      destination_0.add_11rb$((tmp$_2 = callTree.get_11rb$(item)) != null ? tmp$_2 : '<bad call>');
    }
    return destination_0;
  };
  PermanentMocker.prototype.formatCall_0 = function (call, tree, usedCalls) {
    var tmp$, tmp$_0;
    var methodName = call.matcher.method.name;
    var $receiver = ensureNotNull(call.argChains);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var transform$result;
      var tmp$_3;
      if (Kotlin.isType(item, RecordedCall)) {
        usedCalls.add_11rb$(item);
        transform$result = (tmp$_3 = tree.get_11rb$(item)) != null ? tmp$_3 : '<bad link>';
      }
       else {
        transform$result = item.toString();
      }
      tmp$_2.call(destination, transform$result);
    }
    var args = destination;
    var selfChain = call.selfChain;
    if (selfChain != null) {
      usedCalls.add_11rb$(selfChain);
      tmp$_0 = ((tmp$ = tree.get_11rb$(selfChain)) != null ? tmp$ : '<bad link>') + '.';
    }
     else {
      tmp$_0 = call.matcher.self.toString() + '.';
    }
    var prefix = tmp$_0;
    if (startsWith(methodName, 'get') && methodName.length > 3 && args.isEmpty()) {
      var tmp$_4 = String;
      var tmp$_5 = tmp$_4.fromCharCode;
      var $receiver_0 = methodName.charCodeAt(3);
      return prefix + tmp$_5.call(tmp$_4, toBoxedChar(unboxChar(String.fromCharCode($receiver_0).toLowerCase().charCodeAt(0)))) + methodName.substring(4);
    }
    return prefix + methodName + '(' + joinToString(args, ', ') + ')';
  };
  PermanentMocker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PermanentMocker',
    interfaces: []
  };
  function SignatureMatcherDetector(chainedCallDetectorFactory) {
    this.chainedCallDetectorFactory = chainedCallDetectorFactory;
    this.calls = ArrayList_init();
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function SignatureMatcherDetector$detect$checkAllSameNumberOfCalls(closure$callRounds, closure$nCalls) {
    return function () {
      var $receiver = closure$callRounds;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var closure$nCalls_0 = closure$nCalls;
          if (element.calls.size !== closure$nCalls_0) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result) {
        var $receiver_0 = withIndex(closure$callRounds);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var tmp$_2 = 'Round ' + (item.index + 1 | 0) + ': ';
          var $receiver_1 = item.value.calls;
          var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
          var tmp$_3;
          tmp$_3 = $receiver_1.iterator();
          while (tmp$_3.hasNext()) {
            var item_0 = tmp$_3.next();
            destination_0.add_11rb$(item_0.invocationStr);
          }
          tmp$_1.call(destination, tmp$_2 + joinToString(destination_0, ', '));
        }
        throw new MockKException('every/verify {} block were run several times. Recorded calls count differ between runs\n' + joinToString(destination, '\n'));
      }
    };
  }
  SignatureMatcherDetector.prototype.detect_vl8wmh$ = function (callRounds) {
    this.calls.clear();
    var nCalls = callRounds.get_za3lpa$(0).calls.size;
    var checkAllSameNumberOfCalls = SignatureMatcherDetector$detect$checkAllSameNumberOfCalls(callRounds, nCalls);
    checkAllSameNumberOfCalls();
    var tmp$;
    tmp$ = nCalls - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      var detector = this.chainedCallDetectorFactory();
      detector.detect_4jl8kp$(callRounds, index);
      this.calls.add_11rb$(detector.call);
    }
  };
  SignatureMatcherDetector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignatureMatcherDetector',
    interfaces: []
  };
  function SignatureValueGenerator() {
  }
  SignatureValueGenerator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SignatureValueGenerator',
    interfaces: []
  };
  function SignedCall(retValue, isRetValueMock, retType, self_0, method, args, invocationStr, matchers) {
    this.retValue = retValue;
    this.isRetValueMock = isRetValueMock;
    this.retType = retType;
    this.self = self_0;
    this.method = method;
    this.args = args;
    this.invocationStr = invocationStr;
    this.matchers = matchers;
  }
  SignedCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignedCall',
    interfaces: []
  };
  SignedCall.prototype.component1 = function () {
    return this.retValue;
  };
  SignedCall.prototype.component2 = function () {
    return this.isRetValueMock;
  };
  SignedCall.prototype.component3 = function () {
    return this.retType;
  };
  SignedCall.prototype.component4 = function () {
    return this.self;
  };
  SignedCall.prototype.component5 = function () {
    return this.method;
  };
  SignedCall.prototype.component6 = function () {
    return this.args;
  };
  SignedCall.prototype.component7 = function () {
    return this.invocationStr;
  };
  SignedCall.prototype.component8 = function () {
    return this.matchers;
  };
  SignedCall.prototype.copy_ib3djn$ = function (retValue, isRetValueMock, retType, self_0, method, args, invocationStr, matchers) {
    return new SignedCall(retValue === void 0 ? this.retValue : retValue, isRetValueMock === void 0 ? this.isRetValueMock : isRetValueMock, retType === void 0 ? this.retType : retType, self_0 === void 0 ? this.self : self_0, method === void 0 ? this.method : method, args === void 0 ? this.args : args, invocationStr === void 0 ? this.invocationStr : invocationStr, matchers === void 0 ? this.matchers : matchers);
  };
  SignedCall.prototype.toString = function () {
    return 'SignedCall(retValue=' + Kotlin.toString(this.retValue) + (', isRetValueMock=' + Kotlin.toString(this.isRetValueMock)) + (', retType=' + Kotlin.toString(this.retType)) + (', self=' + Kotlin.toString(this.self)) + (', method=' + Kotlin.toString(this.method)) + (', args=' + Kotlin.toString(this.args)) + (', invocationStr=' + Kotlin.toString(this.invocationStr)) + (', matchers=' + Kotlin.toString(this.matchers)) + ')';
  };
  SignedCall.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.retValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRetValueMock) | 0;
    result = result * 31 + Kotlin.hashCode(this.retType) | 0;
    result = result * 31 + Kotlin.hashCode(this.self) | 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.invocationStr) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchers) | 0;
    return result;
  };
  SignedCall.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.retValue, other.retValue) && Kotlin.equals(this.isRetValueMock, other.isRetValueMock) && Kotlin.equals(this.retType, other.retType) && Kotlin.equals(this.self, other.self) && Kotlin.equals(this.method, other.method) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.invocationStr, other.invocationStr) && Kotlin.equals(this.matchers, other.matchers)))));
  };
  function SignedMatcher(matcher, signature) {
    this.matcher = matcher;
    this.signature = signature;
  }
  SignedMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignedMatcher',
    interfaces: []
  };
  SignedMatcher.prototype.component1 = function () {
    return this.matcher;
  };
  SignedMatcher.prototype.component2 = function () {
    return this.signature;
  };
  SignedMatcher.prototype.copy_98c2tk$ = function (matcher, signature) {
    return new SignedMatcher(matcher === void 0 ? this.matcher : matcher, signature === void 0 ? this.signature : signature);
  };
  SignedMatcher.prototype.toString = function () {
    return 'SignedMatcher(matcher=' + Kotlin.toString(this.matcher) + (', signature=' + Kotlin.toString(this.signature)) + ')';
  };
  SignedMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.signature) | 0;
    return result;
  };
  SignedMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matcher, other.matcher) && Kotlin.equals(this.signature, other.signature)))));
  };
  function VerificationCallSorter() {
    this.wasNotCalledCalls_jgnko0$_0 = this.wasNotCalledCalls_jgnko0$_0;
    this.regularCalls_jjsyrx$_0 = this.regularCalls_jjsyrx$_0;
  }
  Object.defineProperty(VerificationCallSorter.prototype, 'wasNotCalledCalls', {
    get: function () {
      if (this.wasNotCalledCalls_jgnko0$_0 == null)
        return throwUPAE('wasNotCalledCalls');
      return this.wasNotCalledCalls_jgnko0$_0;
    },
    set: function (wasNotCalledCalls) {
      this.wasNotCalledCalls_jgnko0$_0 = wasNotCalledCalls;
    }
  });
  Object.defineProperty(VerificationCallSorter.prototype, 'regularCalls', {
    get: function () {
      if (this.regularCalls_jjsyrx$_0 == null)
        return throwUPAE('regularCalls');
      return this.regularCalls_jjsyrx$_0;
    },
    set: function (regularCalls) {
      this.regularCalls_jjsyrx$_0 = regularCalls;
    }
  });
  function VerificationCallSorter$sort$removeChain(closure$callSet) {
    return function closure$removeChain(call) {
      closure$callSet.remove_11rb$(InternalPlatform_getInstance().ref_za3rmp$(call));
      var selfChain = call.selfChain;
      if (selfChain != null) {
        closure$removeChain(selfChain);
      }
    };
  }
  VerificationCallSorter.prototype.sort_fprufi$ = function (calls) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = calls.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = element.matcher.method) != null ? tmp$_0.equals(WasNotCalled_getInstance().method) : null)
        destination.add_11rb$(element);
    }
    this.wasNotCalledCalls = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(calls, 10));
    var tmp$_1;
    tmp$_1 = calls.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(InternalPlatform_getInstance().ref_za3rmp$(item));
    }
    var callSet = toMutableList(destination_0);
    var removeChain = VerificationCallSorter$sort$removeChain(callSet);
    var tmp$_2;
    tmp$_2 = this.wasNotCalledCalls.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      removeChain(element_0);
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(callSet, 10));
    var tmp$_3;
    tmp$_3 = callSet.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      var tmp$_4;
      destination_1.add_11rb$(Kotlin.isType(tmp$_4 = item_0.value, RecordedCall) ? tmp$_4 : throwCCE());
    }
    this.regularCalls = toList(destination_1);
  };
  VerificationCallSorter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerificationCallSorter',
    interfaces: []
  };
  function WasNotCalled() {
    WasNotCalled_instance = this;
    this.method = new MethodDescription('wasNot Called', getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), emptyList(), -1);
  }
  WasNotCalled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WasNotCalled',
    interfaces: []
  };
  var WasNotCalled_instance = null;
  function WasNotCalled_getInstance() {
    if (WasNotCalled_instance === null) {
      new WasNotCalled();
    }
    return WasNotCalled_instance;
  }
  function AnsweringState(recorder) {
    CallRecordingState.call(this, recorder);
    this.log_xicetd$_0 = recorder.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(AnsweringState)));
  }
  Object.defineProperty(AnsweringState.prototype, 'log', {
    get: function () {
      return this.log_xicetd$_0;
    }
  });
  function AnsweringState$call$lambda() {
    return null;
  }
  function AnsweringState$call$lambda_0(closure$answer, closure$invocation) {
    return function () {
      return 'Answering ' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$answer) + ' on ' + closure$invocation;
    };
  }
  AnsweringState.prototype.call_2pihsr$ = function (invocation) {
    var stub = this.recorder.stubRepo.stubFor_za3rmp$(invocation.self);
    stub.recordCall_2pihsr$(invocation.copy_8gbgo4$(void 0, void 0, void 0, void 0, void 0, AnsweringState$call$lambda));
    var answer = stub.answer_2pihsr$(invocation);
    this.log.info_h4ejuu$(AnsweringState$call$lambda_0(answer, invocation));
    return answer;
  };
  AnsweringState.prototype.startStubbing = function () {
    return this.recorder.factories.stubbingState(this.recorder);
  };
  AnsweringState.prototype.startVerification_q2ls4b$ = function (params) {
    return this.recorder.factories.verifyingState(this.recorder, params);
  };
  AnsweringState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnsweringState',
    interfaces: [CallRecordingState]
  };
  function AnsweringStillAcceptingAnswersState(recorder, answerOpportunity) {
    AnsweringState.call(this, recorder);
    this.answerOpportunity = answerOpportunity;
    this.log_5bx2m0$_0 = recorder.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(AnsweringStillAcceptingAnswersState)));
  }
  Object.defineProperty(AnsweringStillAcceptingAnswersState.prototype, 'log', {
    get: function () {
      return this.log_5bx2m0$_0;
    }
  });
  AnsweringStillAcceptingAnswersState.prototype.call_2pihsr$ = function (invocation) {
    var res = AnsweringState.prototype.call_2pihsr$.call(this, invocation);
    this.recorder.state = this.recorder.factories.answeringState(this.recorder);
    return res;
  };
  AnsweringStillAcceptingAnswersState.prototype.answer_gjjeqr$ = function (answer) {
    this.answerOpportunity.addAnswer_gjjeqr$(answer);
  };
  AnsweringStillAcceptingAnswersState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnsweringStillAcceptingAnswersState',
    interfaces: [AnsweringState]
  };
  function CallRecordingState(recorder) {
    this.recorder = recorder;
  }
  CallRecordingState.prototype.call_2pihsr$ = function (invocation) {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.startStubbing = function () {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.startVerification_q2ls4b$ = function (params) {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.round_vux9f0$ = function (round, total) {
    this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.answer_gjjeqr$ = function (answer) {
    this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.matcher_w5iupj$ = function (matcher, cls) {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.recordingDone = function () {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.nCalls = function () {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.estimateCallRounds = function () {
    return this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.wasNotCalled_pqjuzw$ = function (list) {
    this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.discardLastCallRound = function () {
    this.cancelAndThrowBadRecordingState_t1kofs$_0();
  };
  CallRecordingState.prototype.cancelAndThrowBadRecordingState_t1kofs$_0 = function () {
    var state = this.recorder.state;
    this.recorder.reset();
    if (Kotlin.isType(state, StubbingAwaitingAnswerState)) {
      throw new MockKException('Bad recording sequence. Please finalize every { ... } block with returns/answers/just Runs');
    }
     else {
      throw new MockKException('Bad recording sequence. State: ' + toString(Kotlin.getKClassFromExpression(state).simpleName));
    }
  };
  CallRecordingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallRecordingState',
    interfaces: []
  };
  function RecordingState(recorder) {
    CallRecordingState.call(this, recorder);
    this.log = recorder.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(RecordingState)));
    this.callRoundBuilder_xkbeuh$_0 = null;
    this.callRounds_brbf33$_0 = ArrayList_init();
  }
  RecordingState.prototype.round_vux9f0$ = function (round, total) {
    var builder = this.callRoundBuilder_xkbeuh$_0;
    if (builder != null) {
      this.callRounds_brbf33$_0.add_11rb$(builder.build());
    }
    this.callRoundBuilder_xkbeuh$_0 = this.recorder.factories.callRoundBuilder();
    this.recorder.childHinter = this.recorder.factories.childHinter();
    if (round === total) {
      this.signMatchers_r1br9g$_0();
      this.mockPermanently();
    }
  };
  RecordingState.prototype.signMatchers_r1br9g$_0 = function () {
    var detector = this.recorder.factories.signatureMatcherDetector();
    detector.detect_vl8wmh$(this.callRounds_brbf33$_0);
    this.recorder.calls.clear();
    this.recorder.calls.addAll_brywnq$(detector.calls);
  };
  function RecordingState$matcher$lambda$lambda(this$RecordingState, closure$cls) {
    return function () {
      return this$RecordingState.recorder.instantiator.instantiate_lmshww$(closure$cls);
    };
  }
  function RecordingState$matcher$lambda(this$RecordingState, closure$cls) {
    return function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this$RecordingState.recorder.anyValueGenerator.anyValue_jn6jkx$(closure$cls, RecordingState$matcher$lambda$lambda(this$RecordingState, closure$cls)), Any) ? tmp$ : throwCCE();
    };
  }
  RecordingState.prototype.matcher_w5iupj$ = function (matcher, cls) {
    var signatureValue = this.recorder.signatureValueGenerator.signatureValue_uj6y0s$(cls, RecordingState$matcher$lambda(this, cls));
    this.builder_dcgd9l$_0().addMatcher_98c2tk$(matcher, ensureNotNull(InternalPlatform_getInstance().packRef_s8jyv4$(signatureValue)));
    return signatureValue;
  };
  RecordingState.prototype.addWasNotCalled_pqjuzw$ = function (list) {
    this.builder_dcgd9l$_0().addWasNotCalled_pqjuzw$(list);
  };
  function RecordingState$call$lambda(closure$invocation) {
    return function () {
      return closure$invocation.method.returnType;
    };
  }
  function RecordingState$call$lambda_0(closure$isTemporaryMock, this$RecordingState, closure$retType) {
    return function () {
      closure$isTemporaryMock.v = true;
      return this$RecordingState.recorder.mockFactory.temporaryMock_xo1ogr$(closure$retType);
    };
  }
  RecordingState.prototype.call_2pihsr$ = function (invocation) {
    var retType = this.recorder.childHinter.nextChildType_w12xhd$(RecordingState$call$lambda(invocation));
    var isTemporaryMock = {v: false};
    var retValue = this.recorder.anyValueGenerator.anyValue_jn6jkx$(retType, RecordingState$call$lambda_0(isTemporaryMock, this, retType));
    if (retValue == null) {
      isTemporaryMock.v = false;
    }
    this.builder_dcgd9l$_0().addSignedCall_cztkpv$(retValue, isTemporaryMock.v, retType, invocation);
    return retValue;
  };
  RecordingState.prototype.mockPermanently = function () {
    var mocker = this.recorder.factories.permanentMocker();
    var resultCalls = mocker.mock_fprufi$(this.recorder.calls);
    this.recorder.calls.clear();
    this.recorder.calls.addAll_brywnq$(resultCalls);
  };
  RecordingState.prototype.nCalls = function () {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.callRoundBuilder_xkbeuh$_0) != null ? tmp$.signedCalls : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 0;
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  RecordingState.prototype.estimateCallRounds = function () {
    var tmp$;
    var $receiver = this.builder_dcgd9l$_0().signedCalls;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.args;
      addAll(destination, list);
    }
    var $receiver_0 = filterNotNull(destination);
    var transform = getCallableRef('typeEstimation', function ($receiver, it) {
      return $receiver.typeEstimation_heh3cs$_0(it);
    }.bind(null, this));
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(transform(item));
    }
    return (tmp$ = max(destination_0)) != null ? tmp$ : 1;
  };
  RecordingState.prototype.typeEstimation_heh3cs$_0 = function (it) {
    var tmp$, tmp$_0;
    tmp$ = Kotlin.getKClassFromExpression(it);
    if (equals(tmp$, PrimitiveClasses$booleanClass))
      tmp$_0 = 40;
    else if (equals(tmp$, PrimitiveClasses$byteClass))
      tmp$_0 = 8;
    else if (equals(tmp$, getKClass(Char)))
      tmp$_0 = 4;
    else if (equals(tmp$, PrimitiveClasses$shortClass))
      tmp$_0 = 4;
    else if (equals(tmp$, PrimitiveClasses$intClass))
      tmp$_0 = 2;
    else if (equals(tmp$, PrimitiveClasses$floatClass))
      tmp$_0 = 2;
    else
      tmp$_0 = 1;
    return tmp$_0;
  };
  RecordingState.prototype.discardLastCallRound = function () {
    this.callRoundBuilder_xkbeuh$_0 = null;
  };
  RecordingState.prototype.builder_dcgd9l$_0 = function () {
    var tmp$;
    tmp$ = this.callRoundBuilder_xkbeuh$_0;
    if (tmp$ == null) {
      throw new MockKException('Call builder is not initialized. Bad state');
    }
    return tmp$;
  };
  RecordingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecordingState',
    interfaces: [CallRecordingState]
  };
  function SafeLoggingState(recorder) {
    CallRecordingState.call(this, recorder);
  }
  SafeLoggingState.prototype.call_2pihsr$ = function (invocation) {
    var tmp$;
    return (Kotlin.isType(tmp$ = invocation.stub, Stub) ? tmp$ : throwCCE()).stdObjectAnswer_2pihsr$(invocation);
  };
  SafeLoggingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeLoggingState',
    interfaces: [CallRecordingState]
  };
  function StubbingAwaitingAnswerState(recorder) {
    StubbingAwaitingAnswerState$Companion_getInstance();
    CallRecordingState.call(this, recorder);
  }
  function StubbingAwaitingAnswerState$answer$lambda() {
    return 'Done stubbing. Still accepting additional answers';
  }
  StubbingAwaitingAnswerState.prototype.answer_gjjeqr$ = function (answer) {
    var tmp$, tmp$_0;
    var calls = this.recorder.calls;
    var answerOpportunity = null;
    tmp$ = withIndex(calls).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var idx = tmp$_1.component1()
      , recordedCall = tmp$_1.component2();
      var lastCall = idx === (calls.size - 1 | 0);
      if (lastCall) {
        tmp$_0 = answer;
      }
       else if (recordedCall.isRetValueMock) {
        tmp$_0 = new ConstantAnswer(recordedCall.retValue);
      }
       else {
        continue;
      }
      var ans = tmp$_0;
      answerOpportunity = this.recorder.stubRepo.stubFor_za3rmp$(recordedCall.matcher.self).addAnswer_wg5h0k$(recordedCall.matcher, ans);
    }
    calls.clear();
    StubbingAwaitingAnswerState$Companion_getInstance().log.trace_h4ejuu$(StubbingAwaitingAnswerState$answer$lambda);
    this.recorder.state = this.recorder.factories.answeringStillAcceptingAnswersState(this.recorder, ensureNotNull(answerOpportunity));
  };
  function StubbingAwaitingAnswerState$Companion() {
    StubbingAwaitingAnswerState$Companion_instance = this;
    this.log = Logger$Companion_getInstance().loggerFactory(getKClass(StubbingAwaitingAnswerState));
  }
  StubbingAwaitingAnswerState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StubbingAwaitingAnswerState$Companion_instance = null;
  function StubbingAwaitingAnswerState$Companion_getInstance() {
    if (StubbingAwaitingAnswerState$Companion_instance === null) {
      new StubbingAwaitingAnswerState$Companion();
    }
    return StubbingAwaitingAnswerState$Companion_instance;
  }
  StubbingAwaitingAnswerState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubbingAwaitingAnswerState',
    interfaces: [CallRecordingState]
  };
  function StubbingState(recorder) {
    RecordingState.call(this, recorder);
  }
  StubbingState.prototype.recordingDone = function () {
    this.checkMissingCalls_0();
    return this.recorder.factories.stubbingAwaitingAnswerState(this.recorder);
  };
  StubbingState.prototype.checkMissingCalls_0 = function () {
    if (this.recorder.calls.isEmpty()) {
      throw new MockKException('Missing calls inside every { ... } block.');
    }
  };
  StubbingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubbingState',
    interfaces: [RecordingState]
  };
  function VerifyingState(recorder, params) {
    VerifyingState$Companion_getInstance();
    RecordingState.call(this, recorder);
    this.params = params;
  }
  VerifyingState.prototype.wasNotCalled_pqjuzw$ = function (list) {
    this.addWasNotCalled_pqjuzw$(list);
  };
  function VerifyingState$recordingDone$lambda(closure$verifier, closure$sorter, this$VerifyingState) {
    return function () {
      return closure$verifier.verify_g0eopa$(closure$sorter.regularCalls, this$VerifyingState.params.min, this$VerifyingState.params.max);
    };
  }
  function VerifyingState$recordingDone$lambda_0(closure$outcome) {
    return function () {
      return 'Done verification. Outcome: ' + closure$outcome;
    };
  }
  VerifyingState.prototype.recordingDone = function () {
    this.checkMissingCalls_0();
    var verifier = this.recorder.factories.verifier(this.params.ordering);
    var sorter = this.recorder.factories.verificationCallSorter();
    sorter.sort_fprufi$(this.recorder.calls);
    var outcome = this.recorder.safeExec_klfg04$(VerifyingState$recordingDone$lambda(verifier, sorter, this));
    if (outcome.matches) {
      verifier.captureArguments();
    }
    this.log.trace_h4ejuu$(VerifyingState$recordingDone$lambda_0(outcome));
    this.failIfNotPassed_0(outcome, this.params.inverse);
    var tmp$ = this.checkWasNotCalled_0;
    var $receiver = sorter.wasNotCalledCalls;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.matcher.self);
    }
    tmp$.call(this, destination);
    return this.recorder.factories.answeringState(this.recorder);
  };
  VerifyingState.prototype.checkMissingCalls_0 = function () {
    if (this.recorder.calls.isEmpty()) {
      throw new MockKException('Missing calls inside verify { ... } block.');
    }
  };
  VerifyingState.prototype.failIfNotPassed_0 = function (outcome, inverse) {
    var explanation = outcome.message != null ? ': ' + toString(outcome.message) : '';
    if (inverse) {
      if (outcome.matches) {
        throw new AssertionError('Inverse verification failed' + explanation);
      }
    }
     else {
      if (!outcome.matches) {
        throw new AssertionError('Verification failed' + explanation);
      }
    }
  };
  function VerifyingState$checkWasNotCalled$lambda(closure$calledStub) {
    return function () {
      return 'Verification failed: ' + closure$calledStub.toStr() + ' was called:' + '\n' + joinToString(closure$calledStub.allRecordedCalls(), '\n');
    };
  }
  function VerifyingState$checkWasNotCalled$lambda_0(closure$calledStubs) {
    return function () {
      var $receiver = closure$calledStubs;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.toStr());
      }
      var tmp$_0 = 'Verification failed: ' + joinToString(destination, ', ') + ' were called:' + '\n';
      var $receiver_0 = closure$calledStubs;
      var destination_0 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var list = element.allRecordedCalls();
        addAll(destination_0, list);
      }
      return tmp$_0 + joinToString(destination_0, '\n');
    };
  }
  VerifyingState.prototype.checkWasNotCalled_0 = function (mocks) {
    var tmp$;
    var calledStubs = ArrayList_init();
    tmp$ = mocks.iterator();
    while (tmp$.hasNext()) {
      var mock = tmp$.next();
      var stub = this.recorder.stubRepo.stubFor_za3rmp$(mock);
      var calls = stub.allRecordedCalls();
      if (!calls.isEmpty()) {
        calledStubs.add_11rb$(stub);
      }
    }
    if (!calledStubs.isEmpty()) {
      if (calledStubs.size === 1) {
        var calledStub = calledStubs.get_za3lpa$(0);
        throw new AssertionError(this.recorder.safeExec_klfg04$(VerifyingState$checkWasNotCalled$lambda(calledStub)));
      }
       else {
        throw new AssertionError(this.recorder.safeExec_klfg04$(VerifyingState$checkWasNotCalled$lambda_0(calledStubs)));
      }
    }
  };
  function VerifyingState$Companion() {
    VerifyingState$Companion_instance = this;
    this.log = Logger$Companion_getInstance().loggerFactory(getKClass(VerifyingState));
  }
  VerifyingState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VerifyingState$Companion_instance = null;
  function VerifyingState$Companion_getInstance() {
    if (VerifyingState$Companion_instance === null) {
      new VerifyingState$Companion();
    }
    return VerifyingState$Companion_instance;
  }
  VerifyingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerifyingState',
    interfaces: [RecordingState]
  };
  function AdditionalAnswerOpportunity(get, set) {
    this.get = get;
    this.set = set;
  }
  AdditionalAnswerOpportunity.prototype.addAnswer_gjjeqr$ = function (answer) {
    this.set(this.combineAnswers_0(this.get(), answer));
  };
  AdditionalAnswerOpportunity.prototype.combineAnswers_0 = function (firstAnswer, secondAnswer) {
    var lst = toMutableList(this.unMany_0(firstAnswer));
    lst.addAll_brywnq$(this.unMany_0(secondAnswer));
    return new ManyAnswersAnswer(lst);
  };
  AdditionalAnswerOpportunity.prototype.unMany_0 = function (firstAnswer) {
    var tmp$;
    if (Kotlin.isType(firstAnswer, ManyAnswersAnswer)) {
      tmp$ = firstAnswer.answers;
    }
     else {
      tmp$ = listOf(firstAnswer);
    }
    return tmp$;
  };
  AdditionalAnswerOpportunity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AdditionalAnswerOpportunity',
    interfaces: []
  };
  function CommonClearer(stubRepository, safeLog) {
    this.stubRepository = stubRepository;
    this.safeLog = safeLog;
    this.log = this.safeLog.invoke_aidf1$(Logger$Companion_getInstance().loggerFactory(getKClass(CommonClearer)));
  }
  function CommonClearer$clear$lambda(closure$mocks) {
    return function () {
      return 'Clearing ' + contentToString(closure$mocks) + ' mocks';
    };
  }
  CommonClearer.prototype.clear_v2wshv$ = function (mocks, answers, recordedCalls, childMocks) {
    var tmp$;
    this.log.debug_h4ejuu$(CommonClearer$clear$lambda(mocks));
    for (tmp$ = 0; tmp$ !== mocks.length; ++tmp$) {
      var mock = mocks[tmp$];
      this.stubRepository.stubFor_za3rmp$(mock).clear_ws0pad$(answers, recordedCalls, childMocks);
    }
  };
  CommonClearer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonClearer',
    interfaces: [MockKGateway$Clearer]
  };
  function MockKStub(type, name, relaxed, gatewayAccess) {
    MockKStub$Companion_getInstance();
    if (relaxed === void 0)
      relaxed = false;
    this.type_df3qd6$_0 = type;
    this.name_dbdkw9$_0 = name;
    this.relaxed = relaxed;
    this.gatewayAccess = gatewayAccess;
    this.answers_mpi1ij$_0 = InternalPlatform_getInstance().synchronizedMutableList_287e2$();
    this.childs_4zmhxf$_0 = InternalPlatform_getInstance().synchronizedMutableMap_q3lmfv$();
    this.recordedCalls_vscie3$_0 = InternalPlatform_getInstance().synchronizedMutableList_287e2$();
    this.hashCodeStr_myuf8q$_0 = this.hashCodeStr_myuf8q$_0;
  }
  Object.defineProperty(MockKStub.prototype, 'type', {
    get: function () {
      return this.type_df3qd6$_0;
    }
  });
  Object.defineProperty(MockKStub.prototype, 'name', {
    get: function () {
      return this.name_dbdkw9$_0;
    }
  });
  Object.defineProperty(MockKStub.prototype, 'hashCodeStr', {
    get: function () {
      if (this.hashCodeStr_myuf8q$_0 == null)
        return throwUPAE('hashCodeStr');
      return this.hashCodeStr_myuf8q$_0;
    },
    set: function (hashCodeStr) {
      this.hashCodeStr_myuf8q$_0 = hashCodeStr;
    }
  });
  function MockKStub$addAnswer$lambda(this$MockKStub, closure$invocationAnswer) {
    return function () {
      return closure$invocationAnswer.answer;
    };
  }
  function MockKStub$addAnswer$lambda_0(this$MockKStub, closure$invocationAnswer) {
    return function (it) {
      closure$invocationAnswer.answer = it;
      return Unit;
    };
  }
  MockKStub.prototype.addAnswer_wg5h0k$ = function (matcher, answer) {
    var invocationAnswer = new MockKStub$InvocationAnswer(matcher, answer);
    this.answers_mpi1ij$_0.add_11rb$(invocationAnswer);
    return new AdditionalAnswerOpportunity(MockKStub$addAnswer$lambda(this, invocationAnswer), MockKStub$addAnswer$lambda_0(this, invocationAnswer));
  };
  MockKStub.prototype.answer_2pihsr$ = function (invocation) {
    var tmp$;
    var $receiver = reversed(this.answers_mpi1ij$_0);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.matcher.match_2pihsr$(invocation)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      return this.defaultAnswer_2pihsr$(invocation);
    }
    var invocationAndMatcher = tmp$;
    invocationAndMatcher.matcher.captureAnswer_2pihsr$(invocation);
    var call = new Call(invocation.method.returnType, invocation, invocationAndMatcher.matcher);
    return invocationAndMatcher.answer.answer_fwxiwj$(call);
  };
  MockKStub.prototype.stdObjectFunctions_drigy4$ = defineInlineFunction('mockk-js.io.mockk.impl.stub.MockKStub.stdObjectFunctions_drigy4$', wrapFunction(function () {
    var MockKStub = _.io.mockk.impl.stub.MockKStub;
    var mockk = _.$$importsForInline$$['mockk-dsl-js'].io.mockk;
    return function (self_0, method, args, otherwise) {
      if (MockKStub.Companion.isToString_3lzk6v$(method)) {
        return this.toStr();
      }
       else if (MockKStub.Companion.isHashCode_3lzk6v$(method)) {
        return mockk.InternalPlatformDsl.identityHashCode_za3rmp$(self_0);
      }
       else if (MockKStub.Companion.isEquals_3lzk6v$(method)) {
        return self_0 === args.get_za3lpa$(0);
      }
       else {
        return otherwise();
      }
    };
  }));
  MockKStub.prototype.stdObjectAnswer_2pihsr$ = function (invocation) {
    var self_0 = invocation.self;
    var method = invocation.method;
    var args = invocation.args;
    var stdObjectFunctions_drigy4$result;
    if (MockKStub.Companion.isToString_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = this.toStr();
    }
     else if (MockKStub.Companion.isHashCode_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = mockk.InternalPlatformDsl.identityHashCode_za3rmp$(self_0);
    }
     else if (MockKStub.Companion.isEquals_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = self_0 === args.get_za3lpa$(0);
    }
     else {
      throw new MockKException('No other calls allowed in stdObjectAnswer than equals/hashCode/toString');
    }
    return stdObjectFunctions_drigy4$result;
  };
  function MockKStub$defaultAnswer$lambda$lambda(closure$invocation, this$MockKStub) {
    return function () {
      return this$MockKStub.childMockK_p9q5g$(this$MockKStub.allEqMatcher_cxt9qu$(closure$invocation), closure$invocation.method.returnType);
    };
  }
  MockKStub.prototype.defaultAnswer_2pihsr$ = function (invocation) {
    var self_0 = invocation.self;
    var method = invocation.method;
    var args = invocation.args;
    var stdObjectFunctions_drigy4$result;
    if (MockKStub.Companion.isToString_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = this.toStr();
    }
     else if (MockKStub.Companion.isHashCode_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = mockk.InternalPlatformDsl.identityHashCode_za3rmp$(self_0);
    }
     else if (MockKStub.Companion.isEquals_3lzk6v$(method)) {
      stdObjectFunctions_drigy4$result = self_0 === args.get_za3lpa$(0);
    }
     else {
      if (this.relaxed) {
        return this.gatewayAccess.anyValueGenerator.anyValue_jn6jkx$(invocation.method.returnType, MockKStub$defaultAnswer$lambda$lambda(invocation, this));
      }
       else {
        throw new MockKException('no answer found for: ' + invocation);
      }
    }
    return stdObjectFunctions_drigy4$result;
  };
  MockKStub.prototype.recordCall_2pihsr$ = function (invocation) {
    this.recordedCalls_vscie3$_0.add_11rb$(invocation);
  };
  MockKStub.prototype.allRecordedCalls = function () {
    return toList(this.recordedCalls_vscie3$_0);
  };
  MockKStub.prototype.toStr = function () {
    return toString(this.type.simpleName) + '(' + this.name + ')';
  };
  function MockKStub$childMockK$lambda$lambda$lambda(this$MockKStub, closure$childType) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = ensureNotNull(this$MockKStub.gatewayAccess.mockFactory);
      tmp$ = this$MockKStub.childName_t3a057$_0(this$MockKStub.name);
      tmp$_0 = [];
      tmp$_1 = this$MockKStub.relaxed;
      return tmp$_2.mockk_q5l8ik$(closure$childType, tmp$, tmp$_1, tmp$_0);
    };
  }
  function MockKStub$childMockK$lambda$lambda(this$MockKStub, closure$matcher, closure$childType) {
    return function () {
      return InternalPlatform_getInstance().customComputeIfAbsent_q8fswc$(this$MockKStub.childs_4zmhxf$_0, closure$matcher, MockKStub$childMockK$lambda$lambda$lambda(this$MockKStub, closure$childType));
    };
  }
  MockKStub.prototype.childMockK_p9q5g$ = function (matcher, childType) {
    return this.gatewayAccess.safeLog.exec_klfg04$(MockKStub$childMockK$lambda$lambda(this, matcher, childType));
  };
  MockKStub.prototype.childName_t3a057$_0 = function (name) {
    var tmp$;
    var result = MockKStub$Companion_getInstance().childOfRegex.matchEntire_6bul2c$(name);
    if (result != null) {
      var group = result.groupValues.get_za3lpa$(2);
      var childN = group.length === 0 ? 1 : toInt(group);
      tmp$ = 'child^' + toString(childN + 1 | 0) + ' of ' + result.groupValues.get_za3lpa$(3);
    }
     else {
      tmp$ = 'child of ' + name;
    }
    return tmp$;
  };
  function MockKStub$handleInvocation$lambda(closure$method, this$MockKStub, closure$originalCall) {
    return function () {
      if (MockKStub$Companion_getInstance().isToString_3lzk6v$(closure$method)) {
        return this$MockKStub.toStr();
      }
       else {
        return closure$originalCall();
      }
    };
  }
  MockKStub.prototype.handleInvocation_wvpgdo$ = function (self_0, method, originalCall, args) {
    var originalPlusToString = MockKStub$handleInvocation$lambda(method, this, originalCall);
    var invocation = new Invocation(self_0, this, method, toList_0(args), InternalPlatform_getInstance().time(), originalPlusToString);
    return this.gatewayAccess.callRecorder().call_2pihsr$(invocation);
  };
  MockKStub.prototype.clear_ws0pad$ = function (answers, calls, childMocks) {
    if (answers) {
      this.answers_mpi1ij$_0.clear();
    }
    if (calls) {
      this.recordedCalls_vscie3$_0.clear();
    }
    if (childMocks) {
      this.childs_4zmhxf$_0.clear();
    }
  };
  function MockKStub$Companion() {
    MockKStub$Companion_instance = this;
    this.childOfRegex = Regex('child(\\^(\\d+))? of (.+)');
  }
  MockKStub$Companion.prototype.isToString_3lzk6v$ = function ($receiver) {
    return equals($receiver.name, 'toString') && $receiver.paramTypes.isEmpty();
  };
  MockKStub$Companion.prototype.isHashCode_3lzk6v$ = function ($receiver) {
    return equals($receiver.name, 'hashCode') && $receiver.paramTypes.isEmpty();
  };
  MockKStub$Companion.prototype.isEquals_3lzk6v$ = function ($receiver) {
    var tmp$;
    return equals($receiver.name, 'equals') && $receiver.paramTypes.size === 1 && ((tmp$ = $receiver.paramTypes.get_za3lpa$(0)) != null ? tmp$.equals(PrimitiveClasses$anyClass) : null);
  };
  MockKStub$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MockKStub$Companion_instance = null;
  function MockKStub$Companion_getInstance() {
    if (MockKStub$Companion_instance === null) {
      new MockKStub$Companion();
    }
    return MockKStub$Companion_instance;
  }
  function MockKStub$InvocationAnswer(matcher, answer) {
    this.matcher = matcher;
    this.answer = answer;
  }
  MockKStub$InvocationAnswer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvocationAnswer',
    interfaces: []
  };
  MockKStub$InvocationAnswer.prototype.component1 = function () {
    return this.matcher;
  };
  MockKStub$InvocationAnswer.prototype.component2 = function () {
    return this.answer;
  };
  MockKStub$InvocationAnswer.prototype.copy_wg5h0k$ = function (matcher, answer) {
    return new MockKStub$InvocationAnswer(matcher === void 0 ? this.matcher : matcher, answer === void 0 ? this.answer : answer);
  };
  MockKStub$InvocationAnswer.prototype.toString = function () {
    return 'InvocationAnswer(matcher=' + Kotlin.toString(this.matcher) + (', answer=' + Kotlin.toString(this.answer)) + ')';
  };
  MockKStub$InvocationAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.answer) | 0;
    return result;
  };
  MockKStub$InvocationAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matcher, other.matcher) && Kotlin.equals(this.answer, other.answer)))));
  };
  MockKStub.prototype.allEqMatcher_cxt9qu$ = function ($receiver) {
    var tmp$ = $receiver.self;
    var tmp$_0 = $receiver.method;
    var $receiver_0 = $receiver.args;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item == null ? new NullCheckMatcher() : new EqMatcher(item));
    }
    return new InvocationMatcher(tmp$, tmp$_0, destination, false);
  };
  MockKStub.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MockKStub',
    interfaces: [Stub]
  };
  function SpyKStub(cls, name, gatewayAccess) {
    MockKStub.call(this, cls, name, false, gatewayAccess);
  }
  SpyKStub.prototype.defaultAnswer_2pihsr$ = function (invocation) {
    return invocation.originalCall();
  };
  SpyKStub.prototype.toStr = function () {
    return 'spyk<' + this.type.simpleName + ('>(' + this.name + ')#' + this.hashCodeStr);
  };
  SpyKStub.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpyKStub',
    interfaces: [MockKStub]
  };
  function Stub() {
  }
  Stub.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Stub',
    interfaces: []
  };
  function StubGatewayAccess(callRecorder, anyValueGenerator, stubRepository, safeLog, mockFactory) {
    if (mockFactory === void 0)
      mockFactory = null;
    this.callRecorder = callRecorder;
    this.anyValueGenerator = anyValueGenerator;
    this.stubRepository = stubRepository;
    this.safeLog = safeLog;
    this.mockFactory = mockFactory;
  }
  StubGatewayAccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubGatewayAccess',
    interfaces: []
  };
  StubGatewayAccess.prototype.component1 = function () {
    return this.callRecorder;
  };
  StubGatewayAccess.prototype.component2 = function () {
    return this.anyValueGenerator;
  };
  StubGatewayAccess.prototype.component3 = function () {
    return this.stubRepository;
  };
  StubGatewayAccess.prototype.component4 = function () {
    return this.safeLog;
  };
  StubGatewayAccess.prototype.component5 = function () {
    return this.mockFactory;
  };
  StubGatewayAccess.prototype.copy_mgunw4$ = function (callRecorder, anyValueGenerator, stubRepository, safeLog, mockFactory) {
    return new StubGatewayAccess(callRecorder === void 0 ? this.callRecorder : callRecorder, anyValueGenerator === void 0 ? this.anyValueGenerator : anyValueGenerator, stubRepository === void 0 ? this.stubRepository : stubRepository, safeLog === void 0 ? this.safeLog : safeLog, mockFactory === void 0 ? this.mockFactory : mockFactory);
  };
  StubGatewayAccess.prototype.toString = function () {
    return 'StubGatewayAccess(callRecorder=' + Kotlin.toString(this.callRecorder) + (', anyValueGenerator=' + Kotlin.toString(this.anyValueGenerator)) + (', stubRepository=' + Kotlin.toString(this.stubRepository)) + (', safeLog=' + Kotlin.toString(this.safeLog)) + (', mockFactory=' + Kotlin.toString(this.mockFactory)) + ')';
  };
  StubGatewayAccess.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.callRecorder) | 0;
    result = result * 31 + Kotlin.hashCode(this.anyValueGenerator) | 0;
    result = result * 31 + Kotlin.hashCode(this.stubRepository) | 0;
    result = result * 31 + Kotlin.hashCode(this.safeLog) | 0;
    result = result * 31 + Kotlin.hashCode(this.mockFactory) | 0;
    return result;
  };
  StubGatewayAccess.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.callRecorder, other.callRecorder) && Kotlin.equals(this.anyValueGenerator, other.anyValueGenerator) && Kotlin.equals(this.stubRepository, other.stubRepository) && Kotlin.equals(this.safeLog, other.safeLog) && Kotlin.equals(this.mockFactory, other.mockFactory)))));
  };
  function StubRepository(safeLog) {
    this.safeLog = safeLog;
    this.stubs = InternalPlatform_getInstance().weakMap_xff4la$();
  }
  function StubRepository$stubFor$lambda(closure$mock) {
    return function () {
      return "can't find stub " + closure$mock;
    };
  }
  StubRepository.prototype.stubFor_za3rmp$ = function (mock) {
    var tmp$;
    tmp$ = this.stubs.get_11rb$(mock);
    if (tmp$ == null) {
      throw new MockKException(this.safeLog.exec_klfg04$(StubRepository$stubFor$lambda(mock)));
    }
    return tmp$;
  };
  StubRepository.prototype.add_ai92e0$ = function (mock, stub) {
    this.stubs.put_xwzc9p$(mock, stub);
  };
  StubRepository.prototype.get_za3rmp$ = function (mock) {
    return this.stubs.get_11rb$(mock);
  };
  StubRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubRepository',
    interfaces: []
  };
  function AllCallsCallVerifier(stubRepo, safeLog) {
    UnorderedCallVerifier.call(this, stubRepo, safeLog);
  }
  function AllCallsCallVerifier$verify$lambda(closure$nonMatchingInvocations) {
    return function () {
      return 'some calls were not matched: ' + closure$nonMatchingInvocations;
    };
  }
  AllCallsCallVerifier.prototype.verify_g0eopa$ = function (verificationSequence, min, max) {
    var result = UnorderedCallVerifier.prototype.verify_g0eopa$.call(this, verificationSequence, min, max);
    if (result.matches) {
      var $receiver = VerificationHelpers_getInstance().allInvocations_sia28y$(verificationSequence, this.stubRepo);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (this.doesNotMatchAnyCalls_0(verificationSequence, element))
          destination.add_11rb$(element);
      }
      var nonMatchingInvocations = destination;
      if (!nonMatchingInvocations.isEmpty()) {
        return new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(AllCallsCallVerifier$verify$lambda(nonMatchingInvocations)));
      }
    }
    return result;
  };
  AllCallsCallVerifier.prototype.doesNotMatchAnyCalls_0 = function (calls, invoke) {
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType(calls, Collection) && calls.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = calls.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.matcher.match_2pihsr$(invoke)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return !any$result;
  };
  AllCallsCallVerifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllCallsCallVerifier',
    interfaces: [UnorderedCallVerifier]
  };
  function OrderedCallVerifier(stubRepo, safeLog) {
    this.stubRepo = stubRepo;
    this.safeLog = safeLog;
    this.captureBlocks_0 = ArrayList_init();
  }
  function OrderedCallVerifier$verify$lambda(closure$verificationSequence, closure$allCalls) {
    return function () {
      return 'less calls happened then demanded by order verification sequence. ' + VerificationHelpers_getInstance().reportCalls_p6thou$(closure$verificationSequence, closure$allCalls);
    };
  }
  var Array_0 = Array;
  function OrderedCallVerifier$verify$maxOf(a, b) {
    return a.first > b.first ? a : b;
  }
  function OrderedCallVerifier$verify$backTrackCalls$lambda(closure$matcher, closure$invocation) {
    return function () {
      closure$matcher.captureAnswer_2pihsr$(closure$invocation);
      return Unit;
    };
  }
  function OrderedCallVerifier$verify$backTrackCalls(closure$path, closure$verificationSequence, closure$allCalls, this$OrderedCallVerifier) {
    return function closure$backTrackCalls(callIdx, matcherIdx) {
      var tmp$;
      if (callIdx < 0 || matcherIdx < 0)
        return;
      tmp$ = unboxChar(closure$path[callIdx][matcherIdx]);
      if (tmp$ === 61) {
        var matcher = closure$verificationSequence.get_za3lpa$(matcherIdx).matcher;
        var invocation = closure$allCalls.get_za3lpa$(callIdx);
        this$OrderedCallVerifier.captureBlocks_0.add_11rb$(OrderedCallVerifier$verify$backTrackCalls$lambda(matcher, invocation));
        closure$backTrackCalls(callIdx - 1 | 0, matcherIdx - 1 | 0);
      }
       else if (tmp$ === 94)
        closure$backTrackCalls(callIdx - 1 | 0, matcherIdx);
      else if (tmp$ === 60)
        closure$backTrackCalls(callIdx, matcherIdx - 1 | 0);
    };
  }
  function OrderedCallVerifier$verify$lambda_0(closure$verificationSequence, closure$allCalls) {
    return function () {
      return 'calls are not in verification order' + VerificationHelpers_getInstance().reportCalls_p6thou$(closure$verificationSequence, closure$allCalls);
    };
  }
  OrderedCallVerifier.prototype.verify_g0eopa$ = function (verificationSequence, min, max) {
    var tmp$, tmp$_0, tmp$_1;
    var allCalls = VerificationHelpers_getInstance().allInvocations_sia28y$(verificationSequence, this.stubRepo);
    if (verificationSequence.size > allCalls.size) {
      return new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(OrderedCallVerifier$verify$lambda(verificationSequence, allCalls)));
    }
    var array = Array_0(allCalls.size);
    var tmp$_2;
    tmp$_2 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_2; i++) {
      var array_0 = Array_0(verificationSequence.size);
      var tmp$_3;
      tmp$_3 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
        array_0[i_0] = 0;
      }
      array[i] = array_0;
    }
    var nEdits = array;
    var array_1 = Array_0(allCalls.size);
    var tmp$_4;
    tmp$_4 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_4; i_1++) {
      var array_2 = Array_0(verificationSequence.size);
      var tmp$_5;
      tmp$_5 = array_2.length - 1 | 0;
      for (var i_2 = 0; i_2 <= tmp$_5; i_2++) {
        array_2[i_2] = toBoxedChar(63);
      }
      array_1[i_1] = array_2;
    }
    var path = array_1;
    var maxOf = OrderedCallVerifier$verify$maxOf;
    tmp$ = withIndex(allCalls).iterator();
    while (tmp$.hasNext()) {
      var tmp$_6 = tmp$.next();
      var callIdx = tmp$_6.component1()
      , call = tmp$_6.component2();
      var destination = ArrayList_init(collectionSizeOrDefault(verificationSequence, 10));
      var tmp$_7;
      tmp$_7 = verificationSequence.iterator();
      while (tmp$_7.hasNext()) {
        var item = tmp$_7.next();
        destination.add_11rb$(item.matcher);
      }
      tmp$_0 = withIndex(destination).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_8 = tmp$_0.next();
        var matcherIdx = tmp$_8.component1()
        , matcher = tmp$_8.component2();
        if (matcher.match_2pihsr$(call)) {
          tmp$_1 = matcherIdx === 0 || callIdx === 0 ? new Pair(1, toBoxedChar(61)) : new Pair(nEdits[callIdx - 1 | 0][matcherIdx - 1 | 0] + 1 | 0, toBoxedChar(61));
        }
         else {
          tmp$_1 = maxOf(callIdx === 0 ? new Pair(0, toBoxedChar(94)) : new Pair(nEdits[callIdx - 1 | 0][matcherIdx], toBoxedChar(61)), matcherIdx === 0 ? new Pair(0, toBoxedChar(60)) : new Pair(nEdits[callIdx][matcherIdx - 1 | 0], toBoxedChar(60)));
        }
        var result = tmp$_1;
        nEdits[callIdx][matcherIdx] = result.first;
        path[callIdx][matcherIdx] = result.second;
      }
    }
    if (nEdits[allCalls.size - 1 | 0][verificationSequence.size - 1 | 0] === verificationSequence.size) {
      var backTrackCalls = OrderedCallVerifier$verify$backTrackCalls(path, verificationSequence, allCalls, this);
      backTrackCalls(allCalls.size - 1 | 0, verificationSequence.size - 1 | 0);
      return new MockKGateway$VerificationResult(true);
    }
     else {
      return new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(OrderedCallVerifier$verify$lambda_0(verificationSequence, allCalls)));
    }
  };
  OrderedCallVerifier.prototype.captureArguments = function () {
    var tmp$;
    tmp$ = this.captureBlocks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  OrderedCallVerifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderedCallVerifier',
    interfaces: [MockKGateway$CallVerifier]
  };
  function SequenceCallVerifier(stubRepo, safeLog) {
    this.stubRepo = stubRepo;
    this.safeLog = safeLog;
    this.captureBlocks_0 = ArrayList_init();
  }
  function SequenceCallVerifier$verify$lambda(closure$verificationSequence, closure$allCalls) {
    return function () {
      return 'number of calls happened not matching exact number of verification sequence' + VerificationHelpers_getInstance().reportCalls_p6thou$(closure$verificationSequence, closure$allCalls);
    };
  }
  function SequenceCallVerifier$verify$lambda_0(closure$verificationSequence, closure$allCalls) {
    return function () {
      return 'calls are not exactly matching verification sequence' + VerificationHelpers_getInstance().reportCalls_p6thou$(closure$verificationSequence, closure$allCalls);
    };
  }
  function SequenceCallVerifier$verify$lambda_1(closure$matcher, closure$call) {
    return function () {
      closure$matcher.captureAnswer_2pihsr$(closure$call);
      return Unit;
    };
  }
  SequenceCallVerifier.prototype.verify_g0eopa$ = function (verificationSequence, min, max) {
    var tmp$;
    var allCalls = VerificationHelpers_getInstance().allInvocations_sia28y$(verificationSequence, this.stubRepo);
    if (allCalls.size !== verificationSequence.size) {
      return new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(SequenceCallVerifier$verify$lambda(verificationSequence, allCalls)));
    }
    tmp$ = withIndex(allCalls).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var i = tmp$_0.component1()
      , call = tmp$_0.component2();
      var matcher = verificationSequence.get_za3lpa$(i).matcher;
      if (!matcher.match_2pihsr$(call)) {
        return new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(SequenceCallVerifier$verify$lambda_0(verificationSequence, allCalls)));
      }
      this.captureBlocks_0.add_11rb$(SequenceCallVerifier$verify$lambda_1(matcher, call));
    }
    return new MockKGateway$VerificationResult(true);
  };
  SequenceCallVerifier.prototype.captureArguments = function () {
    var tmp$;
    tmp$ = this.captureBlocks_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  SequenceCallVerifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceCallVerifier',
    interfaces: [MockKGateway$CallVerifier]
  };
  function UnorderedCallVerifier(stubRepo, safeLog) {
    this.stubRepo = stubRepo;
    this.safeLog = safeLog;
    this.captureBlocks_k8g0pc$_0 = ArrayList_init();
  }
  function UnorderedCallVerifier$verify$lambda(closure$i, closure$verificationSequence, closure$call) {
    return function () {
      return 'call ' + (closure$i + 1 | 0) + ' of ' + closure$verificationSequence.size + ': ' + closure$call.matcher;
    };
  }
  UnorderedCallVerifier.prototype.verify_g0eopa$ = function (verificationSequence, min, max) {
    var tmp$;
    tmp$ = withIndex(verificationSequence).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var i = tmp$_0.component1()
      , call = tmp$_0.component2();
      var callIdxMsg = this.safeLog.exec_klfg04$(UnorderedCallVerifier$verify$lambda(i, verificationSequence, call));
      var result = this.matchCall_nydhl0$_0(call, min, max, callIdxMsg);
      if (!result.matches) {
        return result;
      }
    }
    return new MockKGateway$VerificationResult(true);
  };
  function UnorderedCallVerifier$matchCall$lambda(closure$callIdxMsg, closure$allCallsForMock) {
    return function () {
      return closure$callIdxMsg + ' was not called.' + '\n' + 'Calls to same mock:\n' + VerificationHelpers_getInstance().formatCalls_rm4d78$(closure$allCallsForMock);
    };
  }
  function UnorderedCallVerifier$matchCall$lambda_0(closure$callIdxMsg, closure$stub, closure$recordedCall, closure$onlyCall, this$UnorderedCallVerifier) {
    return function () {
      return closure$callIdxMsg + '. Only one matching call to ' + closure$stub.toStr() + '/' + mockk.InternalPlatformDsl.toStr_mzud1t$(closure$recordedCall.matcher.method) + ' happened, but arguments are not matching:' + '\n' + this$UnorderedCallVerifier.describeArgumentDifference_5cp5on$_0(closure$recordedCall.matcher, closure$onlyCall);
    };
  }
  function UnorderedCallVerifier$matchCall$lambda_1(closure$callIdxMsg, closure$allCallsForMockMethod) {
    return function () {
      return closure$callIdxMsg + '. No matching calls found.' + '\n' + 'Calls to same method:\n' + VerificationHelpers_getInstance().formatCalls_rm4d78$(closure$allCallsForMockMethod);
    };
  }
  function UnorderedCallVerifier$matchCall$lambda_2(closure$allCallsForMockMethod, closure$recordedCall) {
    return function () {
      var tmp$;
      tmp$ = closure$allCallsForMockMethod.iterator();
      while (tmp$.hasNext()) {
        var call = tmp$.next();
        closure$recordedCall.matcher.captureAnswer_2pihsr$(call);
      }
      return Unit;
    };
  }
  UnorderedCallVerifier.prototype.matchCall_nydhl0$_0 = function (recordedCall, min, max, callIdxMsg) {
    var tmp$, tmp$_0;
    var stub = this.stubRepo.stubFor_za3rmp$(recordedCall.matcher.self);
    var allCallsForMock = stub.allRecordedCalls();
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = allCallsForMock.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_2;
      if ((tmp$_2 = recordedCall.matcher.method) != null ? tmp$_2.equals(element.method) : null)
        destination.add_11rb$(element);
    }
    var allCallsForMockMethod = destination;
    tmp$ = allCallsForMockMethod.size;
    if (tmp$ === 0)
      if (min === 0 && max === 0) {
        tmp$_0 = new MockKGateway$VerificationResult(true);
      }
       else if (allCallsForMock.isEmpty()) {
        tmp$_0 = new MockKGateway$VerificationResult(false, callIdxMsg + ' was not called');
      }
       else {
        tmp$_0 = new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(UnorderedCallVerifier$matchCall$lambda(callIdxMsg, allCallsForMock)));
      }
     else if (tmp$ === 1) {
      var onlyCall = allCallsForMockMethod.get_za3lpa$(0);
      if (recordedCall.matcher.match_2pihsr$(onlyCall)) {
        if ((new IntRange(min, max)).contains_mef7kx$(1)) {
          tmp$_0 = new MockKGateway$VerificationResult(true);
        }
         else {
          tmp$_0 = new MockKGateway$VerificationResult(false, callIdxMsg + '. One matching call found, but needs at least ' + min + this.atMostMsg_lrdq4z$_0(max) + ' calls');
        }
      }
       else {
        tmp$_0 = new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(UnorderedCallVerifier$matchCall$lambda_0(callIdxMsg, stub, recordedCall, onlyCall, this)));
      }
    }
     else {
      var destination_0 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = allCallsForMockMethod.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (recordedCall.matcher.match_2pihsr$(element_0))
          destination_0.add_11rb$(element_0);
      }
      var n = destination_0.size;
      if ((new IntRange(min, max)).contains_mef7kx$(n)) {
        tmp$_0 = new MockKGateway$VerificationResult(true);
      }
       else {
        if (n === 0) {
          tmp$_0 = new MockKGateway$VerificationResult(false, this.safeLog.exec_klfg04$(UnorderedCallVerifier$matchCall$lambda_1(callIdxMsg, allCallsForMockMethod)));
        }
         else {
          tmp$_0 = new MockKGateway$VerificationResult(false, callIdxMsg + '. ' + n + ' matching calls found, ' + ('but needs at least ' + min + this.atMostMsg_lrdq4z$_0(max) + ' calls'));
        }
      }
    }
    var result = tmp$_0;
    this.captureBlocks_k8g0pc$_0.add_11rb$(UnorderedCallVerifier$matchCall$lambda_2(allCallsForMockMethod, recordedCall));
    return result;
  };
  UnorderedCallVerifier.prototype.captureArguments = function () {
    var tmp$;
    tmp$ = this.captureBlocks_k8g0pc$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  UnorderedCallVerifier.prototype.atMostMsg_lrdq4z$_0 = function (max) {
    return max === kotlin_js_internal_IntCompanionObject.MAX_VALUE ? '' : ' and at most ' + max;
  };
  UnorderedCallVerifier.prototype.describeArgumentDifference_5cp5on$_0 = function (matcher, invocation) {
    var tmp$;
    var str = new StringBuilder();
    tmp$ = withIndex(invocation.args).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var i = tmp$_0.component1()
      , arg = tmp$_0.component2();
      var argMatcher = matcher.args.get_za3lpa$(i);
      var matches = argMatcher.match_11rb$(arg);
      str.append_gw00v9$('[' + i + ']: argument: ' + toString(arg) + ', matcher: ' + argMatcher + ', result: ' + (matches ? '+' : '-') + '\n');
    }
    return str.toString();
  };
  UnorderedCallVerifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnorderedCallVerifier',
    interfaces: [MockKGateway$CallVerifier]
  };
  function VerificationHelpers() {
    VerificationHelpers_instance = this;
  }
  VerificationHelpers.prototype.formatCalls_rm4d78$ = function (calls) {
    var destination = ArrayList_init(collectionSizeOrDefault(calls, 10));
    var tmp$;
    tmp$ = calls.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.toString());
    }
    return joinToString(destination, '\n');
  };
  function VerificationHelpers$allInvocations$lambda(it) {
    return it.timestamp;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  VerificationHelpers.prototype.allInvocations_sia28y$ = function ($receiver, stubRepo) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(InternalPlatform_getInstance().ref_za3rmp$(item.matcher.self));
    }
    var $receiver_0 = distinct(destination);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.value);
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var list = stubRepo.stubFor_za3rmp$(element).allRecordedCalls();
      addAll(destination_1, list);
    }
    return sortedWith(destination_1, new Comparator$ObjectLiteral(compareBy$lambda(VerificationHelpers$allInvocations$lambda)));
  };
  VerificationHelpers.prototype.reportCalls_p6thou$ = function (calls, allCalls) {
    var destination = ArrayList_init(collectionSizeOrDefault(calls, 10));
    var tmp$;
    tmp$ = calls.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.matcher.toString());
    }
    return '\nMatchers: \n' + joinToString(destination, '\n') + '\nCalls: \n' + this.formatCalls_rm4d78$(allCalls);
  };
  VerificationHelpers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VerificationHelpers',
    interfaces: []
  };
  var VerificationHelpers_instance = null;
  function VerificationHelpers_getInstance() {
    if (VerificationHelpers_instance === null) {
      new VerificationHelpers();
    }
    return VerificationHelpers_instance;
  }
  function MockK() {
    MockK_instance = this;
  }
  MockK.prototype.useImpl_klfg04$ = defineInlineFunction('mockk-js.io.mockk.MockK.useImpl_klfg04$', wrapFunction(function () {
    var JsMockKGateway = _.io.mockk.impl.JsMockKGateway;
    var MockKGateway = _.$$importsForInline$$['mockk-dsl-js'].io.mockk.MockKGateway;
    return function (block) {
      MockKGateway.Companion.implementation = JsMockKGateway.Companion.defaultImplementationBuilder;
      return block();
    };
  }));
  MockK.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MockK',
    interfaces: []
  };
  var MockK_instance = null;
  function MockK_getInstance() {
    if (MockK_instance === null) {
      new MockK();
    }
    return MockK_instance;
  }
  function InternalPlatform() {
    InternalPlatform_instance = this;
    this.timeCounter_8be2vx$ = new JsCounter();
  }
  InternalPlatform.prototype.time = function () {
    return this.timeCounter_8be2vx$.next();
  };
  InternalPlatform.prototype.ref_za3rmp$ = function (obj) {
    return new CommonRef(obj);
  };
  InternalPlatform.prototype.hkd_za3rmp$ = function (obj) {
    return JsHexLongHelper_getInstance().toHexString_s8cxhz$(Kotlin.Long.fromInt(mockk.InternalPlatformDsl.identityHashCode_za3rmp$(obj)));
  };
  InternalPlatform.prototype.isPassedByValue_xo1ogr$ = function (cls) {
    var tmp$;
    if (equals(cls, PrimitiveClasses$booleanClass))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$byteClass))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$shortClass))
      tmp$ = true;
    else if (equals(cls, getKClass(Char)))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$intClass))
      tmp$ = true;
    else if (equals(cls, getKClass(Long)))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$floatClass))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$doubleClass))
      tmp$ = true;
    else if (equals(cls, PrimitiveClasses$stringClass))
      tmp$ = true;
    else
      tmp$ = false;
    return tmp$;
  };
  InternalPlatform.prototype.customComputeIfAbsent_q8fswc$ = function ($receiver, key, valueFunc) {
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var newValue = valueFunc(key);
      $receiver.put_xwzc9p$(key, newValue);
      tmp$ = newValue;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  InternalPlatform.prototype.counter = function () {
    return getCallableRef('next', function ($receiver) {
      return $receiver.next();
    }.bind(null, new JsCounter()));
  };
  InternalPlatform.prototype.packRef_s8jyv4$ = function (arg) {
    return arg == null || this.isPassedByValue_xo1ogr$(Kotlin.getKClassFromExpression(arg)) ? arg : this.ref_za3rmp$(arg);
  };
  InternalPlatform.prototype.isSuspend_8f04rn$ = function (paramTypes) {
    return false;
  };
  InternalPlatform.prototype.prettifyRecordingException_tcv7n7$ = function (ex) {
    return ex;
  };
  InternalPlatform.prototype.weakMap_xff4la$ = function () {
    return new CommonIdentityHashMapOf();
  };
  InternalPlatform.prototype.identityMap_xff4la$ = function () {
    return new CommonIdentityHashMapOf();
  };
  InternalPlatform.prototype.synchronizedMutableList_287e2$ = function () {
    return ArrayList_init();
  };
  InternalPlatform.prototype.synchronizedMutableMap_q3lmfv$ = function () {
    return HashMap_init();
  };
  InternalPlatform.prototype.copyFields_gnx7yi$ = function (to, from) {
    var to_0 = to;
    var from_0 = from;
    for (var key in from_0) {
      to_0[key] = from_0[key];
    }
  };
  InternalPlatform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InternalPlatform',
    interfaces: []
  };
  var InternalPlatform_instance = null;
  function InternalPlatform_getInstance() {
    if (InternalPlatform_instance === null) {
      new InternalPlatform();
    }
    return InternalPlatform_instance;
  }
  function JsMockKGateway() {
    JsMockKGateway$Companion_getInstance();
    this.safeLog = new SafeLog(JsMockKGateway$safeLog$lambda(this));
    this.instanceFactoryRegistryIntrnl = new CommonInstanceFactoryRegistry();
    this.instanceFactoryRegistry_cn8jw1$_0 = this.instanceFactoryRegistryIntrnl;
    this.stubRepo = new StubRepository(this.safeLog);
    this.instantiator = new JsInstantiator(this.instanceFactoryRegistryIntrnl);
    this.anyValueGenerator = new AnyValueGenerator();
    this.signatureValueGenerator = new JsSignatureValueGenerator();
    this.mockFactory_tmdof7$_0 = new JsMockFactory(this.stubRepo, this.instantiator, new StubGatewayAccess(JsMockKGateway$mockFactory$lambda(this), this.anyValueGenerator, this.stubRepo, this.safeLog));
    this.clearer_vnip6x$_0 = new CommonClearer(this.stubRepo, this.safeLog);
    this.unorderedVerifier = new UnorderedCallVerifier(this.stubRepo, this.safeLog);
    this.allVerifier = new AllCallsCallVerifier(this.stubRepo, this.safeLog);
    this.orderedVerifier = new OrderedCallVerifier(this.stubRepo, this.safeLog);
    this.sequenceVerifier = new SequenceCallVerifier(this.stubRepo, this.safeLog);
    this.callRecorderFactories = new CallRecorderFactories(JsMockKGateway$callRecorderFactories$lambda(this), JsMockKGateway$callRecorderFactories$lambda_0(this), getCallableRef('ChildHinter', function () {
      return new ChildHinter();
    }), getCallableRef('verifier', function ($receiver, ordering) {
      return $receiver.verifier_8ipfkn$(ordering);
    }.bind(null, this)), JsMockKGateway$callRecorderFactories$lambda_1(this), getCallableRef('VerificationCallSorter', function () {
      return new VerificationCallSorter();
    }), getCallableRef('AnsweringState', function (recorder) {
      return new AnsweringState(recorder);
    }), getCallableRef('AnsweringStillAcceptingAnswersState', function (recorder, answerOpportunity) {
      return new AnsweringStillAcceptingAnswersState(recorder, answerOpportunity);
    }), getCallableRef('StubbingState', function (recorder) {
      return new StubbingState(recorder);
    }), getCallableRef('VerifyingState', function (recorder, params) {
      return new VerifyingState(recorder, params);
    }), getCallableRef('StubbingAwaitingAnswerState', function (recorder) {
      return new StubbingAwaitingAnswerState(recorder);
    }), getCallableRef('SafeLoggingState', function (recorder) {
      return new SafeLoggingState(recorder);
    }));
    this.commonCallRecorder = new CommonCallRecorder(this.stubRepo, this.instantiator, this.signatureValueGenerator, this.mockFactory, this.anyValueGenerator, this.safeLog, this.callRecorderFactories, JsMockKGateway$commonCallRecorder$lambda(this));
    this.callRecorder_5qe14b$_0 = this.commonCallRecorder;
    this.stubber_lgcepq$_0 = new EveryBlockEvaluator(JsMockKGateway$stubber$lambda(this), getCallableRef('AutoHinter', function () {
      return new AutoHinter();
    }));
    this.verifier_k82wp1$_0 = new VerifyBlockEvaluator(JsMockKGateway$verifier$lambda(this), this.stubRepo, getCallableRef('AutoHinter', function () {
      return new AutoHinter();
    }));
  }
  Object.defineProperty(JsMockKGateway.prototype, 'instanceFactoryRegistry', {
    get: function () {
      return this.instanceFactoryRegistry_cn8jw1$_0;
    }
  });
  Object.defineProperty(JsMockKGateway.prototype, 'mockFactory', {
    get: function () {
      return this.mockFactory_tmdof7$_0;
    }
  });
  Object.defineProperty(JsMockKGateway.prototype, 'staticMockFactory', {
    get: function () {
      throw new UnsupportedOperationException('Static mocks are not supported in JS version');
    }
  });
  Object.defineProperty(JsMockKGateway.prototype, 'clearer', {
    get: function () {
      return this.clearer_vnip6x$_0;
    }
  });
  JsMockKGateway.prototype.verifier_8ipfkn$ = function (ordering) {
    if (equals(ordering, Ordering.UNORDERED))
      return this.unorderedVerifier;
    else if (equals(ordering, Ordering.ALL))
      return this.allVerifier;
    else if (equals(ordering, Ordering.ORDERED))
      return this.orderedVerifier;
    else if (equals(ordering, Ordering.SEQUENCE))
      return this.sequenceVerifier;
    else
      return Kotlin.noWhenBranchMatched();
  };
  Object.defineProperty(JsMockKGateway.prototype, 'callRecorder', {
    get: function () {
      return this.callRecorder_5qe14b$_0;
    }
  });
  Object.defineProperty(JsMockKGateway.prototype, 'stubber', {
    get: function () {
      return this.stubber_lgcepq$_0;
    }
  });
  Object.defineProperty(JsMockKGateway.prototype, 'verifier', {
    get: function () {
      return this.verifier_k82wp1$_0;
    }
  });
  function JsMockKGateway$Companion() {
    JsMockKGateway$Companion_instance = this;
    this.log_0 = null;
    Logger$Companion_getInstance().loggerFactory = JsMockKGateway$JsMockKGateway$Companion_init$lambda;
    this.log_0 = Logger$Companion_getInstance().loggerFactory(getKClass(JsMockKGateway));
    this.log_0.trace_h4ejuu$(JsMockKGateway$JsMockKGateway$Companion_init$lambda_0);
    this.defaultImplementation = new JsMockKGateway();
    this.defaultImplementationBuilder = JsMockKGateway$Companion$defaultImplementationBuilder$lambda(this);
  }
  function JsMockKGateway$JsMockKGateway$Companion_init$lambda(cls) {
    return new JsConsoleLogger(cls);
  }
  function JsMockKGateway$JsMockKGateway$Companion_init$lambda_0() {
    return 'Starting JavaScript MockK implementation. ';
  }
  function JsMockKGateway$Companion$defaultImplementationBuilder$lambda(this$JsMockKGateway$) {
    return function () {
      return this$JsMockKGateway$.defaultImplementation;
    };
  }
  JsMockKGateway$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsMockKGateway$Companion_instance = null;
  function JsMockKGateway$Companion_getInstance() {
    if (JsMockKGateway$Companion_instance === null) {
      new JsMockKGateway$Companion();
    }
    return JsMockKGateway$Companion_instance;
  }
  function JsMockKGateway$safeLog$lambda(this$JsMockKGateway) {
    return function () {
      return this$JsMockKGateway.commonCallRecorder;
    };
  }
  function JsMockKGateway$mockFactory$lambda(this$JsMockKGateway) {
    return function () {
      return this$JsMockKGateway.callRecorder;
    };
  }
  function JsMockKGateway$callRecorderFactories$lambda$lambda(this$JsMockKGateway) {
    return function () {
      return new ChainedCallDetector(this$JsMockKGateway.safeLog);
    };
  }
  function JsMockKGateway$callRecorderFactories$lambda(this$JsMockKGateway) {
    return function () {
      return new SignatureMatcherDetector(JsMockKGateway$callRecorderFactories$lambda$lambda(this$JsMockKGateway));
    };
  }
  function JsMockKGateway$callRecorderFactories$lambda_0(this$JsMockKGateway) {
    return function () {
      return new CallRoundBuilder(this$JsMockKGateway.safeLog);
    };
  }
  function JsMockKGateway$callRecorderFactories$lambda_1(this$JsMockKGateway) {
    return function () {
      return new PermanentMocker(this$JsMockKGateway.stubRepo, this$JsMockKGateway.safeLog);
    };
  }
  function JsMockKGateway$commonCallRecorder$lambda(this$JsMockKGateway) {
    return function (recorder) {
      return this$JsMockKGateway.callRecorderFactories.answeringState(recorder);
    };
  }
  function JsMockKGateway$stubber$lambda(this$JsMockKGateway) {
    return function () {
      return this$JsMockKGateway.callRecorder;
    };
  }
  function JsMockKGateway$verifier$lambda(this$JsMockKGateway) {
    return function () {
      return this$JsMockKGateway.callRecorder;
    };
  }
  JsMockKGateway.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsMockKGateway',
    interfaces: [MockKGateway]
  };
  function JsInstantiator(instanceFactoryRegistry) {
    AbstractInstantiator.call(this, instanceFactoryRegistry);
  }
  function JsInstantiator$instantiate$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = new Proxy(new InstanceStubTarget(), new InstanceProxyHandler()), Any) ? tmp$ : throwCCE();
  }
  JsInstantiator.prototype.instantiate_lmshww$ = function (cls) {
    return this.instantiateViaInstanceFactoryRegistry_uj6y0s$(cls, JsInstantiator$instantiate$lambda);
  };
  JsInstantiator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsInstantiator',
    interfaces: [AbstractInstantiator]
  };
  function InstanceStubTarget() {
  }
  InstanceStubTarget.prototype.toString = function () {
    return '<instance>';
  };
  InstanceStubTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceStubTarget',
    interfaces: []
  };
  function InstanceProxyHandler() {
    EmptyProxyHandler.call(this);
  }
  InstanceProxyHandler.prototype.get = function (target, name, receiver) {
    if (this.isJsNativeMethods_0(name)) {
      return target[name];
    }
    return EmptyProxyHandler.prototype.get.call(this, target, name, receiver);
  };
  InstanceProxyHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceProxyHandler',
    interfaces: [EmptyProxyHandler]
  };
  function JsMockFactory(stubRepository, instantiator, gatewayAccess) {
    JsMockFactory$Companion_getInstance();
    AbstractMockFactory.call(this, stubRepository, instantiator, gatewayAccess);
  }
  JsMockFactory.prototype.newProxy_w84rec$$default = function (cls, moreInterfaces, stub, useDefaultConstructor, instantiate) {
    var tmp$;
    return Kotlin.isType(tmp$ = new Proxy(new StubProxyTarget(stub), new StubProxyHandler(cls, stub)), Any) ? tmp$ : throwCCE();
  };
  function JsMockFactory$Companion() {
    JsMockFactory$Companion_instance = this;
    this.log = Logger$Companion_getInstance().loggerFactory(getKClass(JsMockFactory));
  }
  JsMockFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsMockFactory$Companion_instance = null;
  function JsMockFactory$Companion_getInstance() {
    if (JsMockFactory$Companion_instance === null) {
      new JsMockFactory$Companion();
    }
    return JsMockFactory$Companion_instance;
  }
  JsMockFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsMockFactory',
    interfaces: [AbstractMockFactory]
  };
  function EmptyProxyHandler() {
  }
  EmptyProxyHandler.prototype.isJsNativeMethods_0 = function (name) {
    return listOf_0(['kotlinHashCodeValue$', '$metadata$', 'prototype', 'constructor', 'toString']).contains_11rb$(name);
  };
  EmptyProxyHandler.prototype.get = function (target, name, receiver) {
    throw new UnsupportedOperationException('get');
  };
  EmptyProxyHandler.prototype.apply = function (target, thisValue, args) {
    throw new UnsupportedOperationException('apply');
  };
  EmptyProxyHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyProxyHandler',
    interfaces: []
  };
  function OperationProxyHandler(name, stub, cls, receiver) {
    EmptyProxyHandler.call(this);
    this.name = name;
    this.stub = stub;
    this.cls = cls;
    this.receiver = receiver;
  }
  OperationProxyHandler.prototype.get = function (target, name, receiver) {
    if (this.isJsNativeMethods_0(name)) {
      return target[name];
    }
    return EmptyProxyHandler.prototype.get.call(this, target, name, receiver);
  };
  OperationProxyHandler.prototype.originalCall_51199g$ = function (target, thisValue, args) {
    return target.apply(thisValue, args);
  };
  function OperationProxyHandler$apply$lambda(closure$target, closure$thisValue, closure$args, this$OperationProxyHandler) {
    return function () {
      return this$OperationProxyHandler.originalCall_51199g$(closure$target, closure$thisValue, closure$args);
    };
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  OperationProxyHandler.prototype.apply = function (target, thisValue, args) {
    var tmp$ = this.stub;
    var tmp$_0 = this.receiver;
    var tmp$_1 = new MethodDescription(this.name, PrimitiveClasses$anyClass, this.cls, emptyList(), -1);
    var destination = ArrayList_init(args.length);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== args.length; ++tmp$_2) {
      var item = args[tmp$_2];
      destination.add_11rb$(this.unboxChar_0(item));
    }
    return tmp$.handleInvocation_wvpgdo$(tmp$_0, tmp$_1, OperationProxyHandler$apply$lambda(target, thisValue, args, this), copyToArray(destination));
  };
  OperationProxyHandler.prototype.unboxChar_0 = function (value) {
    if (Kotlin.isChar(value)) {
      return unboxChar(value) | 0;
    }
     else {
      return value;
    }
  };
  OperationProxyHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperationProxyHandler',
    interfaces: [EmptyProxyHandler]
  };
  function StubProxyTarget(stub) {
    this.stub = stub;
  }
  StubProxyTarget.prototype.toString = function () {
    return this.stub.toStr();
  };
  StubProxyTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubProxyTarget',
    interfaces: []
  };
  function StubProxyHandler(cls, stub) {
    EmptyProxyHandler.call(this);
    this.cls = cls;
    this.stub = stub;
  }
  StubProxyHandler.prototype.get = function (target, name, receiver) {
    var tmp$;
    if (this.isJsNativeMethods_0(name) || equals(name, 'stub')) {
      return target[name];
    }
    if (this.checkKeyExists_0(name, target)) {
      if (this.checkJsFunction_0(target[name])) {
        tmp$ = target[name];
      }
       else {
        return target[name];
      }
    }
     else {
      tmp$ = function () {
      };
    }
    var targetMember = tmp$;
    return new Proxy(targetMember, new OperationProxyHandler(name, this.stub, this.cls, receiver));
  };
  StubProxyHandler.prototype.checkKeyExists_0 = function (name, target) {
    return name in target;
  };
  StubProxyHandler.prototype.checkJsFunction_0 = function (value) {
    return value instanceof Function;
  };
  StubProxyHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StubProxyHandler',
    interfaces: [EmptyProxyHandler]
  };
  function JsConsoleLogger(cls) {
  }
  JsConsoleLogger.prototype.error_h4ejuu$ = function (msg) {
    console.error(msg());
  };
  JsConsoleLogger.prototype.error_l35kib$ = function (ex, msg) {
    console.error(msg(), ex.stack);
  };
  JsConsoleLogger.prototype.warn_h4ejuu$ = function (msg) {
    console.warn(msg());
  };
  JsConsoleLogger.prototype.warn_l35kib$ = function (ex, msg) {
    console.warn(msg(), ex.stack);
  };
  JsConsoleLogger.prototype.info_h4ejuu$ = function (msg) {
    console.info(msg());
  };
  JsConsoleLogger.prototype.info_l35kib$ = function (ex, msg) {
    console.info(msg(), ex.stack);
  };
  JsConsoleLogger.prototype.debug_h4ejuu$ = function (msg) {
    console.log(msg());
  };
  JsConsoleLogger.prototype.debug_l35kib$ = function (ex, msg) {
    console.log(msg(), ex.stack);
  };
  JsConsoleLogger.prototype.trace_h4ejuu$ = function (msg) {
    var m = msg();
    console.debug(m);
  };
  JsConsoleLogger.prototype.trace_l35kib$ = function (ex, msg) {
    var m = msg();
    console.debug(m, ex.stack);
  };
  JsConsoleLogger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsConsoleLogger',
    interfaces: [Logger]
  };
  function JsCounter() {
    this.id = Kotlin.Long.ONE;
  }
  JsCounter.prototype.next = function () {
    var tmp$;
    return tmp$ = this.id, this.id = tmp$.inc(), tmp$;
  };
  JsCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCounter',
    interfaces: []
  };
  function JsHexLongHelper() {
    JsHexLongHelper_instance = this;
    this.digits = Kotlin.charArrayOf(48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102);
  }
  JsHexLongHelper.prototype.toHexString_s8cxhz$ = function (value) {
    var buf = new StringBuilder();
    var v = value.and(new Kotlin.Long(-1, 0));
    do {
      buf.append_s8itvh$(this.digits[v.toInt() & 15]);
      v = v.shiftRightUnsigned(4);
    }
     while (!equals(v, Kotlin.Long.ZERO));
    return buf.reverse().toString();
  };
  JsHexLongHelper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsHexLongHelper',
    interfaces: []
  };
  var JsHexLongHelper_instance = null;
  function JsHexLongHelper_getInstance() {
    if (JsHexLongHelper_instance === null) {
      new JsHexLongHelper();
    }
    return JsHexLongHelper_instance;
  }
  function JsSignatureValueGenerator() {
  }
  JsSignatureValueGenerator.prototype.rnd_z8e4lc$ = function (min, max) {
    return Math.random() * (numberToDouble(max) - numberToDouble(min)) + numberToDouble(min);
  };
  JsSignatureValueGenerator.prototype.signatureValue_uj6y0s$ = function (cls, orInstantiateVia) {
    var tmp$, tmp$_0;
    if (equals(cls, PrimitiveClasses$booleanClass))
      tmp$ = this.rnd_z8e4lc$(0, 1) > 0.5;
    else if (equals(cls, PrimitiveClasses$byteClass))
      tmp$ = toByte(numberToInt(this.rnd_z8e4lc$(kotlin_js_internal_ByteCompanionObject.MIN_VALUE, kotlin_js_internal_ByteCompanionObject.MAX_VALUE)));
    else if (equals(cls, PrimitiveClasses$shortClass))
      tmp$ = toShort(numberToInt(this.rnd_z8e4lc$(kotlin_js_internal_ShortCompanionObject.MIN_VALUE, kotlin_js_internal_ShortCompanionObject.MAX_VALUE)));
    else if (equals(cls, getKClass(Char)))
      tmp$ = numberToInt(this.rnd_z8e4lc$(0, 65535));
    else if (equals(cls, PrimitiveClasses$intClass))
      tmp$ = numberToInt(this.rnd_z8e4lc$(kotlin_js_internal_IntCompanionObject.MIN_VALUE, kotlin_js_internal_IntCompanionObject.MAX_VALUE));
    else if (equals(cls, getKClass(Long)))
      tmp$ = Kotlin.Long.fromNumber(this.rnd_z8e4lc$(new Kotlin.Long(0, -2147483648), new Kotlin.Long(-1, 2147483647)));
    else if (equals(cls, PrimitiveClasses$floatClass))
      tmp$ = this.rnd_z8e4lc$(kotlin_js_internal_FloatCompanionObject.MIN_VALUE, kotlin_js_internal_FloatCompanionObject.MAX_VALUE);
    else if (equals(cls, PrimitiveClasses$doubleClass))
      tmp$ = this.rnd_z8e4lc$(kotlin_js_internal_DoubleCompanionObject.MIN_VALUE, kotlin_js_internal_DoubleCompanionObject.MAX_VALUE);
    else if (equals(cls, PrimitiveClasses$stringClass))
      tmp$ = this.rnd_z8e4lc$(new Kotlin.Long(0, -2147483648), new Kotlin.Long(-1, 2147483647)).toString();
    else
      tmp$ = orInstantiateVia();
    return Kotlin.isType(tmp$_0 = tmp$, Any) ? tmp$_0 : throwCCE();
  };
  JsSignatureValueGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsSignatureValueGenerator',
    interfaces: [SignatureValueGenerator]
  };
  var package$io = _.io || (_.io = {});
  var package$mockk = package$io.mockk || (package$io.mockk = {});
  $$importsForInline$$['mockk-dsl-js'] = $module$mockk_dsl_js;
  $$importsForInline$$['mockk-js'] = _;
  package$mockk.every_4t3ap8$ = every;
  package$mockk.coEvery_aj9pl6$ = coEvery;
  package$mockk.verify_y9wzeo$ = verify;
  package$mockk.coVerify_n5erx6$ = coVerify;
  package$mockk.verifyAll_y15vxx$ = verifyAll;
  package$mockk.verifyOrder_y15vxx$ = verifyOrder;
  package$mockk.verifySequence_y15vxx$ = verifySequence;
  package$mockk.clearMocks_kraaz7$ = clearMocks;
  package$mockk.staticMockk_vqirvp$ = staticMockk_0;
  var package$impl = package$mockk.impl || (package$mockk.impl = {});
  var package$eval = package$impl.eval || (package$impl.eval = {});
  package$eval.EveryBlockEvaluator = EveryBlockEvaluator;
  package$eval.RecordedBlockEvaluator = RecordedBlockEvaluator;
  package$eval.VerifyBlockEvaluator = VerifyBlockEvaluator;
  Object.defineProperty(AbstractInstantiator, 'Companion', {
    get: AbstractInstantiator$Companion_getInstance
  });
  var package$instantiation = package$impl.instantiation || (package$impl.instantiation = {});
  package$instantiation.AbstractInstantiator = AbstractInstantiator;
  Object.defineProperty(AbstractMockFactory, 'Companion', {
    get: AbstractMockFactory$Companion_getInstance
  });
  package$instantiation.AbstractMockFactory = AbstractMockFactory;
  package$instantiation.AnyValueGenerator = AnyValueGenerator;
  package$instantiation.CommonInstanceFactoryRegistry = CommonInstanceFactoryRegistry;
  var package$log = package$impl.log || (package$impl.log = {});
  package$log.FilterLogger = FilterLogger;
  Object.defineProperty(LogLevel, 'DISABLED', {
    get: LogLevel$DISABLED_getInstance
  });
  Object.defineProperty(LogLevel, 'ERROR', {
    get: LogLevel$ERROR_getInstance
  });
  Object.defineProperty(LogLevel, 'WARN', {
    get: LogLevel$WARN_getInstance
  });
  Object.defineProperty(LogLevel, 'INFO', {
    get: LogLevel$INFO_getInstance
  });
  Object.defineProperty(LogLevel, 'DEBUG', {
    get: LogLevel$DEBUG_getInstance
  });
  Object.defineProperty(LogLevel, 'TRACE', {
    get: LogLevel$TRACE_getInstance
  });
  package$log.LogLevel = LogLevel;
  Object.defineProperty(Logger, 'Companion', {
    get: Logger$Companion_getInstance
  });
  package$log.Logger = Logger;
  package$log.NoOpLogger = NoOpLogger;
  package$log.SafeLog = SafeLog;
  package$log.SafeLogger = SafeLogger;
  var package$platform = package$impl.platform || (package$impl.platform = {});
  package$platform.CommonIdentityHashMapOf = CommonIdentityHashMapOf;
  package$platform.CommonRef = CommonRef;
  var package$recording = package$impl.recording || (package$impl.recording = {});
  package$recording.AutoHinter = AutoHinter;
  package$recording.CallRecorderFactories = CallRecorderFactories;
  package$recording.CallRound = CallRound;
  package$recording.CallRoundBuilder = CallRoundBuilder;
  package$recording.ChainedCallDetector = ChainedCallDetector;
  package$recording.ChildHinter = ChildHinter;
  Object.defineProperty(CommonCallRecorder, 'Companion', {
    get: CommonCallRecorder$Companion_getInstance
  });
  package$recording.CommonCallRecorder = CommonCallRecorder;
  package$recording.PermanentMocker = PermanentMocker;
  package$recording.SignatureMatcherDetector = SignatureMatcherDetector;
  package$recording.SignatureValueGenerator = SignatureValueGenerator;
  package$recording.SignedCall = SignedCall;
  package$recording.SignedMatcher = SignedMatcher;
  package$recording.VerificationCallSorter = VerificationCallSorter;
  Object.defineProperty(package$recording, 'WasNotCalled', {
    get: WasNotCalled_getInstance
  });
  var package$states = package$recording.states || (package$recording.states = {});
  package$states.AnsweringState = AnsweringState;
  package$states.AnsweringStillAcceptingAnswersState = AnsweringStillAcceptingAnswersState;
  package$states.CallRecordingState = CallRecordingState;
  package$states.RecordingState = RecordingState;
  package$states.SafeLoggingState = SafeLoggingState;
  Object.defineProperty(StubbingAwaitingAnswerState, 'Companion', {
    get: StubbingAwaitingAnswerState$Companion_getInstance
  });
  package$states.StubbingAwaitingAnswerState = StubbingAwaitingAnswerState;
  package$states.StubbingState = StubbingState;
  Object.defineProperty(VerifyingState, 'Companion', {
    get: VerifyingState$Companion_getInstance
  });
  package$states.VerifyingState = VerifyingState;
  var package$stub = package$impl.stub || (package$impl.stub = {});
  package$stub.AdditionalAnswerOpportunity = AdditionalAnswerOpportunity;
  package$stub.CommonClearer = CommonClearer;
  package$stub.MockKStub = MockKStub;
  Object.defineProperty(MockKStub, 'Companion', {
    get: MockKStub$Companion_getInstance
  });
  package$stub.SpyKStub = SpyKStub;
  package$stub.Stub = Stub;
  package$stub.StubGatewayAccess = StubGatewayAccess;
  package$stub.StubRepository = StubRepository;
  var package$verify = package$impl.verify || (package$impl.verify = {});
  package$verify.AllCallsCallVerifier = AllCallsCallVerifier;
  package$verify.OrderedCallVerifier = OrderedCallVerifier;
  package$verify.SequenceCallVerifier = SequenceCallVerifier;
  package$verify.UnorderedCallVerifier = UnorderedCallVerifier;
  Object.defineProperty(package$verify, 'VerificationHelpers', {
    get: VerificationHelpers_getInstance
  });
  package$impl.JsMockKGateway = JsMockKGateway;
  Object.defineProperty(package$mockk, 'MockK', {
    get: MockK_getInstance
  });
  Object.defineProperty(package$impl, 'InternalPlatform', {
    get: InternalPlatform_getInstance
  });
  Object.defineProperty(JsMockKGateway, 'Companion', {
    get: JsMockKGateway$Companion_getInstance
  });
  package$instantiation.JsInstantiator = JsInstantiator;
  package$instantiation.InstanceStubTarget = InstanceStubTarget;
  package$instantiation.InstanceProxyHandler = InstanceProxyHandler;
  Object.defineProperty(JsMockFactory, 'Companion', {
    get: JsMockFactory$Companion_getInstance
  });
  package$instantiation.JsMockFactory = JsMockFactory;
  package$instantiation.EmptyProxyHandler = EmptyProxyHandler;
  package$instantiation.OperationProxyHandler = OperationProxyHandler;
  package$instantiation.StubProxyTarget = StubProxyTarget;
  package$instantiation.StubProxyHandler = StubProxyHandler;
  package$log.JsConsoleLogger = JsConsoleLogger;
  package$platform.JsCounter = JsCounter;
  Object.defineProperty(package$platform, 'JsHexLongHelper', {
    get: JsHexLongHelper_getInstance
  });
  package$recording.JsSignatureValueGenerator = JsSignatureValueGenerator;
  CommonCallRecorder.prototype.round_vux9f0$ = MockKGateway$CallRecorder.prototype.round_vux9f0$;
  Kotlin.defineModule('mockk-js', _);
  return _;
}(typeof this['mockk-js'] === 'undefined' ? {} : this['mockk-js'], kotlin, this['mockk-dsl-js']);
