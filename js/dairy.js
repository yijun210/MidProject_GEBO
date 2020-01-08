var diarys=[]
var num=0

// 按新增日記btn
$("#add_diary").click(function(){
    diarys[num]=$("#dairy").val();
    
    $("#dairy").val("");
    window.location.href="daily.html";
    add(num)
    num+=1
})

function add(num){
    console.log(diarys[num])
    $("#div_content").append(`<div class="content-post">
    <div class="header level">
      <div class="level-left">
        <figure class="header-image is-32x32">
          <img src="../images/logo.png" />
        </figure>
        <span class="username">GEBO</span>
      </div>
      <div class="level-right delbtn">
        <i class="fas fa-times-circle"></i>
      </div>
    </div>
    
    <figure class="image-container">
      <img class="post-image" src="../images/img.jpg" />
    </figure>
    <div class="content">
      <p class="caption"><span>2019-01-02</span>
        <p>
          <p class="container">${diarys[num].val()}</p>
    </div>
    </div>`)
}
// 刪除post
$("#del_1").click(function(){
  //Fconsole.log("有按到喔")
      $("#post_1").hide();
})
$("#del_2").click(function(){
    $("#post_2").hide();
})

$("#edit_1").click(function(){
$("#diary_1").empty();
$("#diary_1").append(`<input type="text" id="input_1" value="今天天氣真好" />`)
$("#diary_1").attr("onclick","ok(1)")
})
$("#edit_2").click(function(){
  $("#diary_2").empty();
  $("#diary_2").append(`<input type="text" id="input_2" value="今天天氣真好"/>`)


  })
function ok(id){
  var a=$("#diary_"+id).val();
  $("#diary_"+id).empty()
  $("#edit_"+id).click(function (){
    $("#diary_"+id).append(`<p class="container">${a}</p>`)
  })
  
}
$(function(){
  $("#btn").toggle(
  function(){$("#content").hide();},
  function(){$("#content").show();}
  );
  })


