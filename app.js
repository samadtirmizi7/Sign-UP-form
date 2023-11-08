var firebaseConfig = {
  apiKey: "AIzaSyCdovPtyRW0WNJL3xGEc9DiqK17o8ynsCs",
  authDomain: "myfourthproject4.firebaseapp.com",
  projectId: "myfourthproject4",
  storageBucket: "myfourthproject4.appspot.com",
  messagingSenderId: "962431084273",
  appId: "1:962431084273:web:88e120ebf0d4f5bdb2eb50"
};

// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

function getSignup(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value , password.value)

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}
//***************************Sign IN ***************************************************/

var firebaseConfig = {
    apiKey: "AIzaSyCdovPtyRW0WNJL3xGEc9DiqK17o8ynsCs",
    authDomain: "myfourthproject4.firebaseapp.com",
    projectId: "myfourthproject4",
    storageBucket: "myfourthproject4.appspot.com",
    messagingSenderId: "962431084273",
    appId: "1:962431084273:web:88e120ebf0d4f5bdb2eb50"
  };
  
  // Initialize Firebase
  var firebase = firebase.initializeApp(firebaseConfig);

  function getSignin(){
      var emailin = document.getElementById("emailin")
      var passin = document.getElementById("passin")
      console.log(emailin.value , passin.value)

      firebase.auth().signInWithEmailAndPassword(emailin, passin)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  }



//**********************************************Forgot pass **********************/
  function getforpass(){
    var emailin = document.getElementById("emailin")
    firebase.auth().sendPasswordResetEmail(emailin.value)
  .then(() => {
    alert("Email Sucessfully Sent !!!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

//**********************************************Connect To google **********************/

function getgoog(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//**********************************************Connect To github **********************/

function getgit(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    
  });
}








