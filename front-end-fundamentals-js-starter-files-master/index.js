$(document).ready(function() {

  $("form").on("submit", function(event) {
    event.preventDefault()
    $(this).fadeOut(1000)
    $("div").slideDown(1000)
    var userInput = $('input').val()
    console.log("userInput", userInput)

    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput, function(responseData) {
      console.log("response", responseData)
      for (var i = 0; i < responseData.drinks.length; i++) {
        $(".results").append('<strong>' + responseData.drinks[i].strDrink + '</strong>')
        $("strong").css("color", "black")
        $("strong").css("padding-left", "10px")
        $("strong").css("font-size", "20px")
        $("strong").css("margin-top", "15px")
        $(".results").append('<p><em>' + responseData.drinks[i].strGlass + '</em></p>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient1 + " - " + responseData.drinks[i].strMeasure1 + '</li></ul>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient2 + " - " + responseData.drinks[i].strMeasure2 + '</li></ul>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient3 + " - " + responseData.drinks[i].strMeasure3 + '</li></ul>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient4 + " - " + responseData.drinks[i].strMeasure4 + '</li></ul>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient5 + " - " + responseData.drinks[i].strMeasure5 + '</li></ul>')
        $(".results").append('<ul><li>' + responseData.drinks[i].strIngredient6 + " - " + responseData.drinks[i].strMeasure6 + '</li></ul>')
        $(".results").append('<p>' + responseData.drinks[i].strInstructions + '</p>')
        $("p").css("padding", "10px")
        $("p").css("margin", "0 0 15px 0")
        $(".results").css("background-color", "#90ee90")
      }
    })

    $("#search-again").on("click", function() {
      $("div").hide(500).empty()
      $("form").show(500)
    })

  })

  $("input").on("click", function() {
    $(this).css("border-color", "gold")
  })

})
