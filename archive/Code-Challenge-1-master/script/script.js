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
#   Vue.js Instance
#   Update footer date
-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------
#   Vue.js Instance
-----------------------------------------------------------------------------*/
const app = new Vue({
  el: '#app',
  data: {
    commands: '',
    outputString: '',
    xPos: 0,
    yPos: 0,
    minX: 0,
    maxX:4,
    minY:0,
    maxY: 4,
    facePos: "",
    placed: false
  },
  methods: {
      /* Capture text from the commands text box and convert to array */
      captureCommands: function() {
        let commandArray = this.commands.replace( /\n/g, " " ).split( " " )
        /* Iterate over array of commands looking for keywords */
        for( let i = 0; i < commandArray.length; i++ ) {
            /* If PLACE commands found run place function to validate the
            * command
            */
            if( commandArray[i].toString().toUpperCase() == "PLACE" ) {
                this.place( commandArray[i+1] )
            /* Turn LEFT command */
            } else if( commandArray[i].toString().toUpperCase() == "LEFT" && this.placed == true ) {
                switch(this.facePos){
                  case "NORTH":
                    this.facePos = "WEST"
                    break;
                  case "SOUTH":
                    this.facePos = "EAST"
                    break;
                  case "EAST":
                    this.facePos = "NORTH"
                    break;
                  case "WEST":
                    this.facePos = "SOUTH"
                    break;
                }
            /* Turn RIGHT Command */
            } else if( commandArray[i].toString().toUpperCase() == "RIGHT" && this.placed == true ) {
                switch(this.facePos){
                  case "NORTH":
                    this.facePos = "EAST"
                    break;
                  case "SOUTH":
                    this.facePos = "WEST"
                    break;
                  case "EAST":
                    this.facePos = "SOUTH"
                    break;
                  case "WEST":
                    this.facePos = "NORTH"
                    break;
                }
            /* MOVE Command */
            } else if( commandArray[i].toString().toUpperCase() == "MOVE" && this.placed == true ) {
                this.move()
            /* REPORT Command */
            } else if( commandArray[i].toString().toUpperCase() == "REPORT" && this.placed == true ) {
                this.output()
            }
        }
      },
      place: function( item ){

        let placeArguments = item.split(",")
        if( parseInt(placeArguments[0]) >= this.minX &&
            parseInt(placeArguments[0]) <= this.maxX &&
            parseInt(placeArguments[1]) >= this.minY &&
            parseInt(placeArguments[1]) <= this.maxY &&
             (
               placeArguments[2].toString().toUpperCase() == "NORTH" ||
               placeArguments[2].toString().toUpperCase() == "SOUTH" ||
               placeArguments[2].toString().toUpperCase() == "EAST" ||
               placeArguments[2].toString().toUpperCase() == "WEST"
             )
           ) {
              /* We have found a valid place command now update pacman's position*/
               this.placed = true
               this.xPos = parseInt(placeArguments[0])
               this.yPos = parseInt(placeArguments[1])
               this.facePos = placeArguments[2].toString().toUpperCase()
               return true
           } else {
             /* Place command was invalid simply return back to our loop of commands */
             return true
           }
      },
      /* The Move function moves pacman in x or y position only if the move is valid */
      move: function() {
          switch(this.facePos){
            case "NORTH":
              if( this.yPos < this.maxY ) { this.yPos = this.yPos + 1 }
              break;
            case "SOUTH":
              if( this.yPos > this.minY ) { this.yPos = this.yPos - 1 }
              break;
            case "EAST":
              if( this.xPos < this.maxX ) { this.xPos = this.xPos + 1 }
              break;
            case "WEST":
              if( this.xPos > this.minX ) { this.xPos = this.xPos - 1 }
              break;
          }
      },
      /* Output function updates the data outputString with the position of pacman */
      output: function() {
        this.outputString = this.xPos +","+ this.yPos +","+ this.facePos
      }
  }
})


/*-----------------------------------------------------------------------------
#   Update footer date
-----------------------------------------------------------------------------*/
const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
