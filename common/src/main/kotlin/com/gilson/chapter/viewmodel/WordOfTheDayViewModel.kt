package com.gilson.chapter.viewmodel

import com.gilson.chapter.model.WordOfTheDay
import com.gilson.chapter.usecase.WordUseCase

/**
 * Created by gilsonmaciel on 4/10/18.
 */
class WordOfTheDayViewModel(val useCase: WordUseCase) {
    fun retrieveWord(success: (WordOfTheDay) -> Unit, error: () -> Unit) {
        useCase.wordOfTheDay(success, error)
    }
}