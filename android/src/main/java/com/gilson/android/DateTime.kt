package com.gilson.chapter

import java.util.*

/**
 * Created by gilsonmaciel on 4/9/18.
 */
actual class DateTime {
    constructor() { }

    actual fun formatDate(): String {
        return Date().toString()
    }
}