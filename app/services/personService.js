import { AppState } from "../AppState.js";
import { person } from "../models/person.js";


class personsService{
    addToValue(name){
        let selectedPerson = AppState.people.find(human => human.theirName == name)
        console.log(selectedPerson)
        selectedPerson.theirScore += 1
    }
}

export const personsService = new personsService()