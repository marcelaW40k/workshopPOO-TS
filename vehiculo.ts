export abstract class Vehiculo {
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    abstract arrancar():void;
}

export class Coche extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio)
    }
    arrancar(): void {
        console.log("El coche arranca");
    }
}

export class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio)
    }
    arrancar(): void {
        console.log("La moto arranca");
        
    }
}
