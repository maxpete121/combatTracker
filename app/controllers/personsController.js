import { AppState } from "../AppState.js";
import { person } from "../models/person.js";
import { personsService } from "../services/personService.js";



export class personsController{
    constructor(){
        console.log('yay')
    }
    addToValue(name){

    }
    drawScores(){
        let personOne = AppState.people
        document.getElementById("change-value-tom").innerText = 
    }
}