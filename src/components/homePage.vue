<template>
    <v-ons-page>
      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <div id="hello">
  <div id="userPrf">
    <div id="userPic">
      <div id="name"></div>
      <div id="userpicpic">
      <img src="" id="prfPic">
      </div>
      <div id="userComment">No coment</div>
    </div>
    <div id="userCom">
      <div class="userinformation1">
        <div class="userinformation2">
      <div class="userinformation21">
        Gender<br>
        <div id="genderInf">Man</div>
      </div>
      <div class="userinformation22">
        Country<br>
        <div id="countryInf">Japan</div>
      </div>
      <div class="userinformation23">
        Language<br>
        <div id="languageInf">English</div>
      </div>
      </div>
      <div class="userinformation3">
        Occupation<br>
        <div id="occupationInf">FUN</div>
      </div>
      <div class="userinformation4">
        Major<br>
        <div id="majorInf">Information sysytem</div>
      </div>
      </div>
      <div id="rader">
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    </div>
  </div>
  </div>
    </v-ons-page>
</template>

<script>
  import customToolbar from './toolbar'
  var motivation;
var management;
var design;
var communication;
var system;
var gender
var country
var language
var occupation
var major


  export default {
    props: ['toggleMenu'],
    components: { customToolbar },
    data () {
    return {
      userName: '',
      chartData: {},
      motivation: '',
      management:  '',
      design:'',
      communication:'',
      system:''
     }
    },
      created: function() {
        this.userName = "田中康介"
        this.dataSet()
        this.fillData()
        this.fillData()
        //router.push({ path: '/margin2' })
      },
  mounted: function() {
    //this.dataSet()
    //this.fillData()
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic').src = snapshot.val().photo
      document.getElementById("userComment").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      document.getElementById("genderInf").innerText= snapshot.val().gender
      document.getElementById("countryInf").innerText = snapshot.val().country
      document.getElementById("languageInf").innerText = snapshot.val().language
      document.getElementById("occupationInf").innerText = snapshot.val().occupation
      document.getElementById("majorInf").innerText = snapshot.val().major

      })
      document.getElementById("name").innerText = this.userName
    
    this.fillData()
  },
  methods:{
    dataSet() {
      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        })
        this.motivation = motivation
        this.management= management
        this.design = design
        this.communication = communication
        this.system = system
        
    },
   fillData() {
    this.chartData = {
      labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.motivation, this.design, this.management, this.communication, this.system]
            }
        ]
    }
  }
}
  }
</script>

<style>
template {
  width: 100%;
  height:100vh;
}

#hello {
  margin: 0;
  width: 100%;
  height:100vh;
}

#userPrf {}


#userPic {
  background: #00A29A;
  color: #ffffff;
  width:100%;
}

#name {
  margin-top: 50px;
  margin-left: 10%;
  text-align: left;
}

#userpicpic {
  margin:10px auto;
}

#userPic img {
  margin:auto;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#prfPic {
  
}

#name {
  width: 60%;
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 30%;
  text-align: justify;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
}
#userComment {
  width: 60%;
  height:10vh;
  text-align: justify;
  margin:130px auto;
}

#userCom {
  flex: 10;
}

#chart {
  
  
}

#rader {
  
}

.userinformation1{
  width:60%;
  height:35%;
  margin:50px auto;
  text-align: left;
  color: #00A29A;
}
.userinformation2{
  display: flex;
  height:33%;
}

.userinformation21 {
  flex:1;
}
.userinformation22 {
  flex:1;
}
.userinformation23 {
  flex:1;
}

.userinformation3{
  height:33%;
}

.userinformation4{
  
  height:33%;
}
#genderInf{
color:#696969;
font-size: 25px;
}
#countryInf{
color:#696969;
font-size: 25px;
}
#languageInf{
color:#696969;
font-size: 25px;
}
#occupationInf{
color:#696969;
font-size: 25px;
}
#majorInf{
color:#696969;
font-size: 25px;
}

h1,
h2 {
  margin-top: 20px;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
