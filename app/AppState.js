import { Jumble } from "./models/Jumble.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// TODO "As a user, I can select a jumble from a list, setting it as the active jumble"
// TODO "As a user, when an active jumble is selected, the game starts and I have a textarea to type into"
// TODO "As a user, I can submit my input, checking if the prompt was achieved"
// TODO "As a user, if I was able to complete the prompt, my time will be recorded."
// TODO "As a user, I should be able to add my own jumbles to test my friends."


class ObservableAppState extends EventEmitter {

  /** @type {Jumble[]} */
  jumbles = [
    new Jumble({ name: '🐒 Jumble', body: "Monkeys go bananas for fruit salad, especially when it's filled with juicy pineapples." }),
    new Jumble({ name: '🦍 Jumble', body: "The gorilla juggled berries and grapes, adding them to the fruit salad one-by-one. As nimble as a spider monkey, the typist skillfully typed sentence after sentence." }),
    new Jumble({ name: '🦧 Jumble', body: "Oranges, apples, and bananas danced together in the bowl, creating a harmonious fruit salad. With each keystroke, the orangutan got closer to becoming a typing virtuoso. Hungry for success? Keep peeling away at those keys until you're the fastest typist in the jungle!" })
  ]

/**@type {Jumble | null}*/
activeJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())