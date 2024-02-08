import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js";


export class JumblesController {
  constructor() {
    console.log("Jumble Controller Loaded")
    this.#drawJumbles()
  }

  #drawJumbles() {
    const jumbles = AppState.jumbles

    let htmlString = ''

    jumbles.forEach(jumble => htmlString += jumble.ListTemplate )
    setHTML('jumbleGames', htmlString)
  }

}