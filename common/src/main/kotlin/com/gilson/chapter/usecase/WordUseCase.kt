package com.gilson.chapter.usecase

import com.gilson.chapter.DateTime
import com.gilson.chapter.model.WordOfTheDay
import com.gilson.chapter.repository.WordOfTheDayInMemoryRepository

/**
 * Created by gilsonmaciel on 4/9/18.
 */
class WordUseCase(val dateTime: DateTime) {

    private val repository = WordOfTheDayInMemoryRepository()

    fun wordOfTheDay(success: (WordOfTheDay) -> Unit, error: () -> Unit) {
        try {
            val word = repository.wordOfTheDay()
            success(WordOfTheDay(dateTime.formatDate(), word.first, word.second))
        } catch (ex: Exception) {
            error()
        }
    }
}