package com.gilson.android

import android.annotation.SuppressLint
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.widget.TextView
import com.gilson.chapter.DateTime
import com.gilson.chapter.usecase.WordUseCase

class MainActivity : AppCompatActivity() {

    @SuppressLint("WrongViewCast")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        findViewById<TextView>(R.id.txtName).text = WordUseCase(DateTime()).wordOfTheDay().word
        findViewById<TextView>(R.id.txtDesc).text = WordUseCase(DateTime()).wordOfTheDay().description
        findViewById<TextView>(R.id.txtDay).text = WordUseCase(DateTime()).wordOfTheDay().day
    }
}
