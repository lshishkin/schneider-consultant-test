import "./css/styles.scss"

$(document).ready(function() {
  $(".slider .wrap").slick()
  $(".toogleMenu").click(() => {
    $(".menu ul").slideToggle(300, function() {
      var display = $(this).css("display")
      if (display === "none") {
        $(this).removeAttr("style")
      }
    })
  })
})
