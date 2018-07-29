  var onDeviceReady = function() {
   // Firebaseの初期化
   var config = {
    apiKey: "AIzaSyDO78gpdB_aYBAmQ_fyx5EgaHqIfII0oKc",
    authDomain: "skillweb-dddfe.firebaseapp.com",
    databaseURL: "https://skillweb-dddfe.firebaseio.com",
    projectId: "skillweb-dddfe",
    storageBucket: "skillweb-dddfe.appspot.com",
    messagingSenderId: "290398200950"
  };
  firebase.initializeApp(config);
};
document.addEventListener(window.cordova ?"deviceready" : "DOMContentLoaded", onDeviceReady, false);
 

