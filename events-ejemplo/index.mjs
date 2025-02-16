import EventEmitter from "events";

const emisor= new EventEmitter();

emisor.on('hola',(nombre)=>{
    console.log(`¡Hola, ${nombre}!`);
})

emisor.emit('hola','Mundo');
