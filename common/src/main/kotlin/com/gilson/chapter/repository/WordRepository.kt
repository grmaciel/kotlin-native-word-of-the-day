package com.gilson.chapter.repository

/**
 * Created by gilsonmaciel on 4/9/18.
 */
interface WordRepository {
    fun wordOfTheDay(): Pair<String, String>
}