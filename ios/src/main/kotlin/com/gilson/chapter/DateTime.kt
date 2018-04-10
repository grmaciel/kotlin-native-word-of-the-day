package com.gilson.chapter

import platform.Foundation.*

actual class DateTime {
    actual fun formatDate(): String {
        return NSDate().description!!
    }    
}