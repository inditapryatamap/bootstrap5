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
