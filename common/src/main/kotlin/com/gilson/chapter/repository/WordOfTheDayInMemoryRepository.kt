package com.gilson.chapter.repository

/**
 * Created by gilsonmaciel on 4/9/18.
 */
class WordOfTheDayInMemoryRepository : WordRepository {
    override fun wordOfTheDay(): Pair<String, String> {
        return Pair("Maladroit", "Lacking skill, cleverness, or resourcefulness in handling situations")
    }
}