import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';
var config = {
    apiKey: "AIzaSyDO78gpdB_aYBAmQ_fyx5EgaHqIfII0oKc",
    authDomain: "skillweb-dddfe.firebaseapp.com",
    databaseURL: "https://skillweb-dddfe.firebaseio.com",
    projectId: "skillweb-dddfe",
    storageBucket: "skillweb-dddfe.appspot.com",
    messagingSenderId: "290398200950"
  };
  firebase.initializeApp(config);

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
 });
