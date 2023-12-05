import { AppState } from "../AppState.js";
import { person } from "../models/person.js";


class personsService{
    addToValue(theirName){
        let selectedPerson = AppState.people.find(human => human.theirName == theirName)
        console.log(selectedPerson)
        selectedPerson.theirScore += 1
        drawScores()
    }

}

export const personsService = new personsService()