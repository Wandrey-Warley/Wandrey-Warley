$(window).on('load', function () {
  console.log('carregou');
  loadEnd();
});

function loadEnd() {
  console.log('load end');
  $('#loading').slideUp();
}
