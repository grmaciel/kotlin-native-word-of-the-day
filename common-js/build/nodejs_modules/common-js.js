(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Pair = Kotlin.kotlin.Pair;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Exception = Kotlin.kotlin.Exception;
  function DateTime() {
  }
  DateTime.prototype.formatDate = function () {
    return (new Date()).toString();
  };
  DateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTime',
    interfaces: []
  };
  function WordOfTheDay(day, word, description) {
    this.day = day;
    this.word = word;
    this.description = description;
  }
  WordOfTheDay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordOfTheDay',
    interfaces: []
  };
  WordOfTheDay.prototype.component1 = function () {
    return this.day;
  };
  WordOfTheDay.prototype.component2 = function () {
    return this.word;
  };
  WordOfTheDay.prototype.component3 = function () {
    return this.description;
  };
  WordOfTheDay.prototype.copy_6hosri$ = function (day, word, description) {
    return new WordOfTheDay(day === void 0 ? this.day : day, word === void 0 ? this.word : word, description === void 0 ? this.description : description);
  };
  WordOfTheDay.prototype.toString = function () {
    return 'WordOfTheDay(day=' + Kotlin.toString(this.day) + (', word=' + Kotlin.toString(this.word)) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  WordOfTheDay.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.day) | 0;
    result = result * 31 + Kotlin.hashCode(this.word) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  WordOfTheDay.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.day, other.day) && Kotlin.equals(this.word, other.word) && Kotlin.equals(this.description, other.description)))));
  };
  function WordOfTheDayInMemoryRepository() {
  }
  WordOfTheDayInMemoryRepository.prototype.wordOfTheDay = function () {
    return new Pair('Maladroit', 'Lacking skill, cleverness, or resourcefulness in handling situations');
  };
  WordOfTheDayInMemoryRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordOfTheDayInMemoryRepository',
    interfaces: [WordRepository]
  };
  function WordRepository() {
  }
  WordRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WordRepository',
    interfaces: []
  };
  function WordUseCase(dateTime) {
    this.dateTime = dateTime;
    this.repository_0 = new WordOfTheDayInMemoryRepository();
  }
  WordUseCase.prototype.wordOfTheDay_bcuqm1$ = function (success, error) {
    try {
      var word = this.repository_0.wordOfTheDay();
      success(new WordOfTheDay(this.dateTime.formatDate(), word.first, word.second));
    }
     catch (ex) {
      if (Kotlin.isType(ex, Exception)) {
        error();
      }
       else
        throw ex;
    }
  };
  WordUseCase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordUseCase',
    interfaces: []
  };
  function WordOfTheDayViewModel(useCase) {
    this.useCase = useCase;
  }
  WordOfTheDayViewModel.prototype.retrieveWord_bcuqm1$ = function (success, error) {
    this.useCase.wordOfTheDay_bcuqm1$(success, error);
  };
  WordOfTheDayViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordOfTheDayViewModel',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$gilson = package$com.gilson || (package$com.gilson = {});
  var package$chapter = package$gilson.chapter || (package$gilson.chapter = {});
  package$chapter.DateTime = DateTime;
  var package$model = package$chapter.model || (package$chapter.model = {});
  package$model.WordOfTheDay = WordOfTheDay;
  var package$repository = package$chapter.repository || (package$chapter.repository = {});
  package$repository.WordOfTheDayInMemoryRepository = WordOfTheDayInMemoryRepository;
  package$repository.WordRepository = WordRepository;
  var package$usecase = package$chapter.usecase || (package$chapter.usecase = {});
  package$usecase.WordUseCase = WordUseCase;
  var package$viewmodel = package$chapter.viewmodel || (package$chapter.viewmodel = {});
  package$viewmodel.WordOfTheDayViewModel = WordOfTheDayViewModel;
  Kotlin.defineModule('common-js', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=common-js.js.map
