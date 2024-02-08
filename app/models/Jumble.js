import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor( data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }
  get ListHTMLTemplate() {
    return `
    <p onclick="app.JumblesController.selectActiveJumble('${this.id
    }')" class="fs-5 p-2 selectable" role="button">${this.name}</p>
    `
  }

  get ActiveHTMLTemplate() {
    return`
    <div class="d-flex justify-content-between px-4">
      <h2>${this.name}</h2>
      <h2>${this.fastestTime}</h2>
    </div>
    <p>${this.body}
    </p>
    `
  }
}