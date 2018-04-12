package com.gilson.chapter

import com.gilson.chapter.components.app
import react.dom.render
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    window.onload = {
        console.log("calling main...")
        print("calling main...")
        render(document.getElementById("root")!!) {
            console.log("calling main...")
            print("calling main...")
            app()
        }

    }
}
