class Form {
    constructor(title) {
        this.title = title
        this.fields = []
    }


  addField(field){
  this.fields.push(field)
  }


  render(){
      var label = document.createElement('label')
      var h2 = document.createElement('h2')
          h2.innerText = this.title
      var ul = document.createElement('ul')

      this.fields.forEach(field => ul.appendChild(field.render()))

          label.appendChild(h2)
          label.appendChild(ul)

      return label
  }
}
