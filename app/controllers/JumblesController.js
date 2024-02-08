import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js";

function _drawJumbles() {
    const jumbles = AppState.jumbles

    let htmlString = ''

    jumbles.forEach(jumble => htmlString += jumble.ListHTMLTemplate )
    setHTML('jumbleGames', htmlString)
  }
 function _drawActiveJumble(){
  const jumble = AppState.activeJumble
  setHTML('selectedJumble', jumble.ListHTMLTemplate)
    }


export class JumblesController {
  constructor() {
    console.log("Jumble Controller Loaded")
    _drawJumbles()

    
  }
  
  selectActiveJumble() {
    AppState.jumblesServices
  }
  

}