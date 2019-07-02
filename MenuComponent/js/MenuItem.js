// modulul unei componente de tip MenuItem

class MenuItem{
    contructor(text,url){
        this.text = text; // titlul itemului (textul pe care il vedem)
        this.url = url    // adresa pe care pleaca ast punct din meniu
    }

    /**
     * Afiseaza item-ul utilizand DOM (createElement(),appendChild(),etc)
     */
    render(){
        var item  =  document.createElement('li')
        var a = document.createElement('a')
            a.href = this.url
            a.innerText = this.text
         item.appendChild(a)
        // realizati aici structura HTML:
        /**
         * <li>
         *   <a href="url">text</a>
         * </li>
         */
        return item;
    }

    /**
     * Adauga un item in meniu
    */
    addMenuItem(menuItem){

    }
}
