class CheckboxInput {
    constructor(text) {
        this.text = text

    }

   render(){
       var li = document.createElement('li')
       var input = document.createElement('input')
       var h2 = document.createElement('h2')

       h2.innerText = this.text
       input.type = "checkbox"

       li.appendChild(input)
       li.appendChild(h2)
       return li
   }
}
