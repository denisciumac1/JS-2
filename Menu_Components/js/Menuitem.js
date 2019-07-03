class MenuItem {
    constructor(text, url) {
        this.text = text
        this.url = url
    }

   render(){
       var li = document.createElement('li')
       var a = document.createElement('a')
       a.innerText = this.text
       a.href = this.url

       li.appendChild(a)

       return li
   }
}
