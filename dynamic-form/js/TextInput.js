class TextInput {
    constructor(text) {
        this.text = text

    }

   render(){
       var li = document.createElement('li')
       var input = document.createElement('input')

       input.placeholder = this.text
       input.type = "text"

       li.appendChild(input)
       return li
   }
}
