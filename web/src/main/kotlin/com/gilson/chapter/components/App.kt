@file:Suppress("UnsafeCastFromDynamic")

package com.gilson.chapter.components

import kotlinx.html.style
import react.*
import react.dom.div
import react.dom.h2
import com.gilson.chapter.DateTime
import com.gilson.chapter.model.WordOfTheDay
import com.gilson.chapter.usecase.WordUseCase
import com.gilson.chapter.viewmodel.WordOfTheDayViewModel

class App : RComponent<RProps, State>() {

    override fun componentDidMount() {
        console.log("yay?")
        print("yayyy")

        WordOfTheDayViewModel(WordUseCase(DateTime()))
                .retrieveWord({ setState { this.word = it} },
                        { console.log("Shiet...") })
    }

    override fun componentWillUnmount() {
    }

    override fun RBuilder.render(): ReactElement {
        return div {
            if (state.word != null) {
                h2 { +"Word: "}
                h2 { +(state.word?.word!!) }  
                h2 { +"Description: "}
                h2 { +(state.word?.description!!) }  
                h2 { +"Time: "}
                h2 { +(state.word?.day!!) }  
            }
        }
    }
}

interface State : RState {
    var word: WordOfTheDay?
}

fun RBuilder.app() = child(App::class) {}

