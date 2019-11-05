$(document).ready(function(){
    $(".signup").hide();
    $(".login_li").addClass("active");

    $(".signup_li").click(function(){
      $(this).addClass("active");
      $(".login_li").removeClass("active");
      $(".signup").show();
       $(".login").hide();
    })

    $(".login_li").click(function(){
      $(this).addClass("active");
      $(".signup_li").removeClass("active");
      $(".login").show();
       $(".signup").hide();
    })
});