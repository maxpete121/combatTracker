import { AppState } from "../AppState.js";
import { person } from "../models/person.js";
import { personsService } from "../services/personService.js";



export class personsController{
    constructor(){
        console.log('yay')
    }
    addToValue(theirName){
        personsService.addToValue(theirName)
        let pplname = theirName
        this.drawScores()
    }
    drawScores(){
        let personOne = AppState.people
        let thePerson = personOne.find(scoreV => scoreV.theirName)
        document.getElementById("change-value").innerText = thePerson.theirScore
    }
    drawPlayers(){
        let players = AppState.people
        let content = ''
        players.forEach(player => content += player.personTemplate())
        document.getElementById("scoring-space").innerHTML = content
        this.drawScores()

    }
}