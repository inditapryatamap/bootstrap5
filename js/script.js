// Event pada saar diklik
$(".page-scroll").on("click", function (event) {
  // Ambil isi href
  var tujuan = $(this).attr("href");
  // Tangkap halaman
  var elemenTujuan = $(tujuan);

  // Pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top,
    },
    1000,
    "easeInOutExpo"
  );

  event.preventDefault();
});

// Parallax
// About
$(window).on("load", function () {
  $(".kiri").addClass("kiri-go");
  $(".kanan").addClass("kanan-go");
});

// Jumbotron
$(window).scroll(function () {
  var windowScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + windowScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + windowScroll / 2 + "%)",
  });

  // portofolio
  if (windowScroll > $(".portofolio").offset().top - 600) {
    $(".portofolio .img-thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .img-thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
