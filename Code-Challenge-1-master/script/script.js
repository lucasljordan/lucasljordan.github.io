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
#   Vue Application
#   Update footer date
-----------------------------------------------------------------------------*/
const app = new Vue({
  el: '#app',
  data: {
    commands: '',
    pacman: `<img class="pac-man" data-face="north" src="./image/Pacman.svg"/>`,
    grid_items: [
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1],
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0]
    ]
  },
  methods: {
      captureCommands: function() {
        let commandArray = this.commands.replace( /\n/g, " " ).split( " " )
        for ( let i = 0; i < commandArray.length; i++ ) {
            if ( commandArray[i].toString().toUpperCase() == "PLACE" ) {
                let placeArguments = commandArray[i+1].split(",")
                if ( parseInt(placeArguments[0]) < 5 &&
                     parseInt(placeArguments[1]) < 5 &&
                     (
                       placeArguments[2].toString().toUpperCase() == "NORTH" ||
                       placeArguments[2].toString().toUpperCase() == "SOUTH" ||
                       placeArguments[2].toString().toUpperCase() == "EAST" ||
                       placeArguments[2].toString().toUpperCase() == "WEST"
                     )
                   ) {
                       let x = parseInt(placeArguments[0])
                       let y = parseInt(placeArguments[1])
                       let face = placeArguments[2].toString().toUpperCase()
                       this.place( x, y, face )
                   }
            }
        }
      },
      place: function( x, y, face ){
          console.log("Inside place: ", x ,y, face)
      }
  }
})

/*-----------------------------------------------------------------------------
#   Update footer date
-----------------------------------------------------------------------------*/
const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
