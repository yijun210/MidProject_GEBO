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
$(document).ready(function () {
  //初始化firebase 
  var firebaseConfig = {
      apiKey: "AIzaSyAL-BQmaI1xAcyAyvcZEnncykPrdO-9a5w",
      authDomain: "gebo-4233c.firebaseapp.com",
      databaseURL: "https://gebo-4233c.firebaseio.com",
      projectId: "gebo-4233c",
      storageBucket: "gebo-4233c.appspot.com",
      messagingSenderId: "311774653201",
      appId: "1:311774653201:web:bcfde0f705925cd5367ab0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
});
//登入
var $log_email = $("#email_log");
var $log_pass = $("#password_log");
$("#submit_log").click(function(){
  firebase.auth().signInWithEmailAndPassword($log_email.val(), $log_pass.val())
.then(() => {
  var user = firebase.auth().currentUser
  if(user){
    console.log(user);
    window.location.href = "../html/daily.html";
  }
})
.catch((error) => {
    console.log(error.message);
})
$log_email.val("");
$log_pass.val("");
});
//註冊
var $sign_email = $("#email_sign");
var $sign_pass = $("#password_sign");

$("#submit_sign").click(function(){
  firebase.auth().createUserWithEmailAndPassword($sign_email.val(), $sign_pass.val())
.then(() => {
  var user = firebase.auth().currentUser
  if(user){
    console.log(user);
    alert("新增成功！")
  }
 
})
.catch((error) => {
    console.log(error.message);
})
$sign_email.val("");
$sign_pass.val("");
});