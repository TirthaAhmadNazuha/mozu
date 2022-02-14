$(document).ready(function () {
  function sapaUser(data) {
    $("#welcome").html(`Hello!!, ${data}`);
  }
  $("#welcome").html(`Hello!!, ${localStorage.getItem("namamu")}`);
  $(".bottomNav .item").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".jumbotron .left p").click(function () {
    $(this).toggleClass("on");
  });
  setTimeout(() => {
    $(`.firstPage .page.d1`).addClass("on");
  }, 300);
  let fpi = 1,
    namval = false;
  if (localStorage.getItem("daftar") == "true") {
    $(".firstPage").css("display", "none");
  }
  $(".firstPage .next").click(function () {
    fpi++;
    $(`.firstPage .indicator .item:nth-child(${fpi})`)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(`.firstPage .page.d${fpi}`).addClass("ro").siblings().removeClass("ro");
    setTimeout(() => {
      if (fpi != 4) $(`.firstPage .page.d${fpi - 1}`).addClass("off");
      setTimeout(() => {
        $(`.firstPage .page.d${fpi}`)
          .addClass("on")
          .siblings()
          .removeClass("on");
      }, 10);
    }, 10);
    if (fpi == 3) {
      setTimeout(() => {
        $(".firstPage .page.d3 .inputname input").focus();
      }, 400);
    }
    if (fpi == 4 && namval) {
      fpi = 4;
      lagi = true;
      $(".firstPage").fadeOut(400);
      localStorage.setItem(
        "namamu",
        $(".firstPage .page.d3 .inputname input").val()
      );
      localStorage.setItem("daftar", true);
      sapaUser(localStorage.getItem("namamu"));
      console.log(nameMe);
    } else if (fpi == 4 && !namval) {
      fpi = 3;
      $(".firstPage .page.d3 .inputname label").html(
        "please enter your name!!.."
      );
    }
    console.log(fpi);
  });
  $(".firstPage .page.d3 .inputname input").keyup(function () {
    if ($(this).val() != "") namval = true;
  });
});
