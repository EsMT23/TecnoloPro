
let app = document.getElementById('typewriter');

let typewriter = new typewriter(app,{
    loop:true,
    delay:75,
});

typewriter
.pauseFor(2500)
.typeString('Desarrollo sitios web y escribo articulos sobre programacion')
.pauseFor(200)
.deleteChars(10)
.start();