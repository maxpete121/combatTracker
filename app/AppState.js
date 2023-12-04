import { person } from './models/person.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []




  // NOTE ours
  people = [
    new person('paul', 20),
    new person('tom'),
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())