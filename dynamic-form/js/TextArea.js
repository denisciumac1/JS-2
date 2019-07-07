

class TextArea {
    constructor(text) {
        this.text = text

    }

   render(){
       var li = document.createElement('li')
       var textarea = document.createElement('textarea')
       textarea.placeholder = this.text

      li.appendChild(textarea)
       return li
   }
}
