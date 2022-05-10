// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-JS/sw.js", {
    scope: "/ICS2O-Assignment-05-JS/",
  })
}

/**
 * This function calculates π
 */
function calculate() {
  // input
  var userInput = document.getElementById("user-input").value

  // process
  let counter = 0
  var answer = 0
  const NUMERATOR = 4
  var denominator = 1
  var temp = "plus"
  var temp = "minus"

  if (userInput < 0)
  {
    document.getElementById("answer").innerHTML = "Please input a positive whole number!"
  }

  while (counter < userInput) {
    console.log("Once through loop:" + counter)
    if (temp == "plus") {
      denominator += 2
      answer += NUMERATOR / denominator
    } else if (temp == "minus") {
      denominator += 2
      answer += - (NUMERATOR / denominator)
    }
    counter++
  }

  // output
  document.getElementById("answer").innerHTML = "The value of π is " + (answer)
}
