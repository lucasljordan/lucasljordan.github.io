/*
  Theme Name: IE Digital: Code-Challenge-1
  Author: Lucas Jordan
  Description: Git hub code challenge from IE Digital - Script
  Version: 0.0.1
  Copyright: Lucas Jordan
*/

/*-----------------------------------------------------------------------------
>>> TABLE OF CONTENTS:
-------------------------------------------------------------------------------
#   Update footer date
-----------------------------------------------------------------------------*/

//<img class="pac-man" data-face="north" src="./image/Pacman.svg"/>

new Vue({
  el: '#app',
  data: {
    commands: ''
  },
  methods: {
      captureCommands: function() {
        alert( this.commands ) 
      }
  }
})

/*-----------------------------------------------------------------------------
#   Update footer date
-----------------------------------------------------------------------------*/
var date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
