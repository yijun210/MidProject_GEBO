$(document).ready(function () {

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAL-BQmaI1xAcyAyvcZEnncykPrdO-9a5w",
      authDomain: "gebo-4233c.firebaseapp.com",
      databaseURL: "https://gebo-4233c.firebaseio.com",
      projectId: "gebo-4233c",
      storageBucket: "gebo-4233c.appspot.com",
      messagingSenderId: "311774653201",
      appId: "1:311774653201:web:1287c6cb338a7710367ab0"
    });
    // Reference Firebase Auth
    const auth = firebase.auth();
  
    // REGISTER DOM ELEMENTS
    const $account = $('#input_account');
    const $password = $('#input_password');
    const $btnSignIn = $('#btn_login');
    const $name=$('#input_name');
    const $email=$('#input_email');
    const $input_signup_account=$('#input_signup_account');
    const $input_signup_password=$('#input_signup_password');
    const $btnSignUp = $('#btn_SignUp');
    // const $btnSignOut = $('#btnSignOut');
    const $signInfo = $('#sign-info');
  

      // Reference chatroom document
  const docRef = firebase.firestore()
  .collection("users")
  .doc("1");
  // SignIn
  $btnSignIn.click(function (e) {
   // $btnSignIn.html(`<span class="spinner-border spinner-border-sm"></span>`);
    auth.signInWithEmailAndPassword($email.val(), $password.val())
      .then(function (e) {
        $btnSignIn.html(`Sign In`);
        window.location.href = "../html/";
      })
      .catch(function (e) {
        $btnSignIn.html(`Sign In`);
        console.log(e.message);
        $signInfo.html(e.message);
      });
  });

    // SignUp
    $btnSignUp.click(function (e) {
      auth.createUserWithEmailAndPassword($email.val(), $password.val())
        .catch(function (e) {
          $signInfo.html(e.message);
        });
    });
  
    // Listening Login User
    auth.onAuthStateChanged(function (user) {
      if (user) {
        $signInfo.html(`${user.email} is login...`);
        console.log(user);
      } else {
        console.log("not logged in");
      }
    });
  
    // Signout
    $btnSignOut.click(function () {
      auth.signOut();
      $account.val('');
      $password.val('');
      $signInfo.html('No one login...');
    });
  });
  ß