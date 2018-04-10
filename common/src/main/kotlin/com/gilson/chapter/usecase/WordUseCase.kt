package com.gilson.chapter.usecase

import com.gilson.chapter.DateTime
import com.gilson.chapter.model.WordOfTheDay
import com.gilson.chapter.repository.WordOfTheDayInMemoryRepository

/**
 * Created by gilsonmaciel on 4/9/18.
 */
class WordUseCase(val dateTime: DateTime) {

    val repository = WordOfTheDayInMemoryRepository()

    fun wordOfTheDay(): WordOfTheDay {
        val word = repository.wordOfTheDay()
        return WordOfTheDay(dateTime.formatDate(), word.first, word.second)
    }
}