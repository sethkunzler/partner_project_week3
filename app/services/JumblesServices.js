import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"

class JumblesServices {

  constructor() {
    console.log("Jumble Services Loaded")

  }
selectActiveJumble(jumbleId){
  const foundJumble = AppState.jumbles.find(Jumble => Jumble.id == jumbleId)
  AppState.activeJumble = foundJumble
}
}

export const jumblesServices = new JumblesServices