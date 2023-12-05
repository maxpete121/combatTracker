


export class person{
    theirName 
    theirScore 


    constructor(name, score){
        this.theirName = name
        this.theirScore = score

    }
    personTemplate(){
        return`
        <div id="tom" class="d-flex align-items-center">
        <h4 class="m-2">${this.theirName}</h4>
        <button onclick="app.personsController.addToValue('${this.theirName}')"><i class="mdi mdi-plus-thick"></i></button>
        <h4 id="change-value" class="m-2">0</h4>
        <i class="mdi mdi-minus-thick"></i>
      </div>
      `
    }

}



