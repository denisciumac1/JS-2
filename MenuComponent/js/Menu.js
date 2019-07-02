// modulul unei componente de tip Menu

class Menu{
    contructor(name){
        this.name = name; // titlul meniului
        this.items = [];  // lista de obiecte de tip MenuItem (itemurile din meniu)
    }

    /**
     * Afiseaza meniul utilizand DOM (createElement(),appendChild(),etc)
     */
    render(){
        var menu  =  // ???
        // realizati aici structura HTML:
        /**
         * <div>
         *  <h2>name<h2>
         *  <ul>
         *       aici tre sa adaugati prin ciclu toate itemurile din this.items
         *       <li><a href="url1">text1</a></li>
         *       <li><a href="url2">text2</a></li>
         *       ....
         *  </ul>
         * </div>
         */
        return menu;
    }

    /**
     * Adauga un item in meniu
    */
    addMenuItem(menuItem){ 

    }
}