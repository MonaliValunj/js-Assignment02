let lang = window.prompt("Enter the language (es/de/en/fr) : ");

if(lang == "fr"){
    document.write("Hello World translated in French is: Bonjour le monde");
}else if(lang == "es"){
    document.write("Hello World translated in Spanish is: Hola Mundo");
}else if(lang == "de"){
    document.write("Hello World translated in German is: Hallo Welt");
}else{
    document.write("Hello World : English");
}