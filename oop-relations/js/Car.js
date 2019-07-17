//module
class Car {
    // sa se adaoge proprietatea photos=["1.jpg", "2.jpg"]
    constructor (model, photos, year, type, power, worth){
        this.model    = model
        this.photos   = photos
        this._year    = year
        this._type    = type
        this._power   = power
        this.worth    = worth
    }

     get year(){
     return this._year
    }

     set year(value){
      this._year = value
     }
// ////////////////////////////////////////////////////////
     get power(){
     return this._power
    }

    set power(value){
        if(value > 0){
        this._power =  value
    }else{
       console.error("POWER CANNOT BE NEGATIVE!")
     }
    }
// ////////////////////////////////////////////////////////
    get type(){
    return this._type
   }

    set type(value){
     this._type = value
    }
// ////////////////////////////////////////////////////////

    log(){
        console.log(`%cCAR`, "color:green; font-size:30px;")
        console.log(`%c model:${this.model}`, "color:gray; font-size:20px;")

        //  for(var i=0; i<this.photos.length; i++){
        // console.log(`%c - photo ${i}: ${this.photos[i]}`, "color:gray; font-size:20px;")
        //  }

         this.photos.forEach( (photo, i) =>{
              console.log(`%c - photo ${i}: ${photo}`, "color:gray; font-size:20px;")
         });

        console.log(`%c year:${this.year}`, "color:gray; font-size:20px;")
        console.log(`%c type:${this.type}`, "color:gray; font-size:20px;")
        console.log(`%c power:${this.power}`, "color:gray; font-size:20px;")
        console.log(`%c worth:${this.worth}`, "color:gray; font-size:20px;")
    }
}
// de atasat getters setters pt power( sa nu fie negaive), type(sedan...)
