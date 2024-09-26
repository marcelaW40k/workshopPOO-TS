abstract class Vehiculo {
    
    abstract arrancar():void;
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log("El coche arranca");
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log("La moto arranca");
        
    }
}

const coche = new Coche();
coche.arrancar();
const moto = new Moto()
moto.arrancar();