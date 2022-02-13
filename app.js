$(document).ready(function () {
  $(".nav .menu").click(function () {
    $(".nav ul").toggleClass("off");
  });
  let jumNum = 1;
  function Jumbotron() {
    let i = 0;
    let g =
      $(".con .jumbotron").prop("scrollWidth") - $(".con .jumbotron").width();
    if (jumNum == 2) {
      i = g / 2;
    } else if (jumNum == 3) {
      i = g;
    } else if (jumNum == 4) {
      jumNum = 1;
      i = 0;
    }
    if (jumNum == 1) i = 0;
    setTimeout(() => {
      $(".con .jumbotron").scrollLeft(i);
      jumNum++;
      Jumbotron();
    }, 2300);
  }
  Jumbotron();

  function listNavOn() {
    let wd = $(".nav ul li.on").width();
    let pos = $(".nav ul li.on").position().left;

    $(".topLamp").css({
      width: wd + "px",
      left: pos + "px",
    });
  }
  listNavOn();
  $(window)
    .resize(function () {
      listNavOn();
    })
    .on("load", function () {
      listNavOn();
    });

  $(".nav ul li")
    .mouseenter(function () {
      let wd = $(this).width();
      let pos = $(this).position().left;

      $(".topLamp").css({
        width: wd + "px",
        left: pos + "px",
      });
    })
    .mouseleave(function () {
      listNavOn();
    });
  const name = "Eren";
  const userName = (name) => {
    return `Hello!, ${name}`;
  };
  $(".con .nameUser").html(userName(name));
});
