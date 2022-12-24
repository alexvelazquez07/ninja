class Ninja {
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    //Definimos metodos
    //Obtenemos valor de salud y sumamos 10
    drinkSake(){
        this.salud = this.salud + 10;
    }
    //Obtenemos el nombre registrado
    sayName(){
        console.log(`Ingresar Nombre:  ${ this.nombre }`);
    }
    //Mostramos en consola los atributos
    showStats(){
        console.log(`Nombre: ${ this.nombre }` +` `+ `Fuerza: ${ this.fuerza }`+` `+ `Velocidad: ${ this.velocidad }` +` `+ `Salud: ${ this.salud }`);
    }
    
}
//Instanciamos el Objeto Ninja
const ninja1 = new Ninja("Hyabusa",5);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();



