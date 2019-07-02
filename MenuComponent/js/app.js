// fisierul principal al aplicatiei
// dupa ce completati structura componentelor Menu si MenuItem
// urmatorul cod, ar trebui sa creeze si afiseze in pagina un meniu din 3 puncte


var main_menu = new Menu("Main Navigation")

main_menu.addMenuItem( new MenuItem("Home","/") )
main_menu.addMenuItem( new MenuItem("Services","/services") )
main_menu.addMenuItem( new MenuItem("Contacts","/contacts") )

// afisarea meniului adaugand elementele sale direct in "header"
document.getElementById( "header" ).appendChild( main_menu.render() )