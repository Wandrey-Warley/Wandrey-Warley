$(window).on("load", function(){
  console.log('carregou');
  loadEnd();
});
// setTimeout(() => {
//   $('#website').css('display', 'block');
//   $('#loading').css('display', 'none');
// }, 1000);

function loadEnd() {
  console.log('load end')
  $('#loading').slideUp();
}


console.log('script')
