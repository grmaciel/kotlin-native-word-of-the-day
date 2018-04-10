package com.gilson.android

import android.annotation.SuppressLint
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.TextView
import com.gilson.chapter.DateTime
import com.gilson.chapter.model.WordOfTheDay
import com.gilson.chapter.usecase.WordUseCase
import com.gilson.chapter.viewmodel.WordOfTheDayViewModel

class MainActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        WordOfTheDayViewModel(WordUseCase(DateTime()))
                .retrieveWord({ setupView(it) },
                        { Log.e("Error", "Shiet...") })
    }

    @SuppressLint("WrongViewCast")
    private fun setupView(wordOfTheDay: WordOfTheDay) {
        findViewById<TextView>(R.id.txtName).text = wordOfTheDay.word
        findViewById<TextView>(R.id.txtDesc).text = wordOfTheDay.description
        findViewById<TextView>(R.id.txtDay).text = wordOfTheDay.day
    }
}
