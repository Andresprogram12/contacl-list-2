let contactos = ['andres duarte', 'carlos ospino', 'cristiano ronaldo'];
let contactosYeliminar = {
    id: 'personOne',
    nombres: 'fabio',
    apellidos: 'castillo',
    telefono: '3114416901',
    ubicaciones: 'barrancabermeja',
    ciudad: 'barrancabermja',
    direcion: 'calle 44 # 55'

}

function agregar_contacto(contacto) {
    contactos.push(contacto);
    contactosYeliminar.push(contactosYeliminar);

}

function borrar_contacto(contacto) {
    let index = 
    contactos.indexOf(contacto);
    if(index !== - 1) {
        contactos.splice(index, 1);
    }else{
        console.log('${contacto} no esta en la lista de contactos');
    }
}

function imprimir_contactos() {
    for(let contacto of contactos){
        console.log(contacto);
    }
}