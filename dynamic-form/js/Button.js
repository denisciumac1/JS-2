class Button {
    constructor(text) {
        this.text = text

    }

   render(){
       var li = document.createElement('li')
       var button = document.createElement('button')
       button.innerText = this.text
       li.appendChild(button)
       return li
   }
}
