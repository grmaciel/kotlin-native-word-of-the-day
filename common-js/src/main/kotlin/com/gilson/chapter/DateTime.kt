package com.gilson.chapter

actual class DateTime {
    actual fun formatDate(): String {
        return js("new Date().toString()");
    }    
}