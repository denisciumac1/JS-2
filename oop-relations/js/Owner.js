//module
class Owner {
    // sa se adaoge proprietatea photos=["1.jpg", "2.jpg"]
    constructor (fullname, year){
        this.fullname  = fullname
        this.year      = year


      }
      //getters/setters
     get age(){
          return new Date().getFullYear() - this.year
      }

      set age(value){
          if(value > 0){
          this.year = new Date().getFullYear() - value
      }else{
         console.error("AGE CANNOT BE NEGATIVE!")  
       }
      }

    log(){
        console.log(`%cOWNER`, "color:brown; font-size:30px;")
        console.log(`%c fullname:${this.fullname}`, "color:gray; font-size:20px;")
        console.log(`%c year:${this.year}`, "color:gray; font-size:20px;")


    }
}
