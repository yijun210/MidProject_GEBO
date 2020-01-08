$(document).ready(function () {
  
  $('body').append('<div id="overlay"></div>');
  
 $('#overlay')
  .height(docHeight)
  .css({
   'opacity': .9, //透明度
   'position': 'absolute',
   'top': 0,
   'left': 0,
   'background-color': 'black',
   'width': '100%',
   'z-index': 2 //保證這個懸浮層位於其它內容之上
  });
   
  setTimeout(function(){$('#overlay').fadeOut('slow')}, 3000);
    progressBar();
    function progressBar() {
        let progress = document.getElementById("progress");
        let width = 1;
        let id = setInterval(frame, 30);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            //progressBar();
          }
          else {
            width++;
            progress.style.width = width + '%';
          }
        }
      }

      var docHeight = $(document).height(); //獲取視窗高度
  
 
      
      
})