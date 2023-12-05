import { AppState } from "../AppState.js";
import { person } from "../models/person.js";


class PersonsService{
    addToValue(theirName){
        let selectedPerson = AppState.people.find(human => human.theirName == theirName)
        console.log(selectedPerson)
        selectedPerson.theirScore += 1
        
    }

}

export const personsService = new PersonsService()