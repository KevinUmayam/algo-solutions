// (() => {

//     // Tipos
//     const batman: string = 'Bruce';
//     const superman: string  = 'Clark';
  
//     const existe: boolean  = false;
  
//     // Tuplas
//     const parejaHeroes: [string, string ] = [batman,superman];
//     const villano: [string, number, boolean ] = ['Lex Lutor',5,true];
  
//     // Arreglos
//     const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
//     //Enumeraciones
//     enum PowerLevel {
//         acuaman,
//         batman,
//         flash = 5,
//         superman = 100
//     }
//     console.log(PowerLevel.superman);
    
//     const fuerzaFlash = PowerLevel.flash;
//     const fuerzaSuperman = PowerLevel.superman;
//     const fuerzaBatman = PowerLevel.batman;
//     const fuerzaAcuaman = PowerLevel.acuaman;
  
//     // Retorno de funciones
//     function activar_batiseñal():string{
//       return 'activada';
//     }
  
//     function pedir_ayuda():void{
//       console.log('Auxilio!!!');
//     }
  
//     // Aserciones de Tipo
//     const poder: any = '100';
//     const largoDelPoder:number = (poder as string).length;
//     console.log( largoDelPoder );
  
  
//   })()
  
  

// // Funciones Básicas
// function sumar( a:number, b:number ):number{
//   return a + b;
// }

// const contar = ( heroes:string[] ):number => {
//   return heroes.length;
// }
// const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
// contar(superHeroes);

// //Parametros por defecto
// const llamarBatman = ( llamar:boolean = true ):void => {
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }
// }

// llamarBatman();

// // Rest?
// const unirheroes = ( ...personas:string[] ):string => {
//   return personas.join(", ");
// }


// // Tipo funcion
// const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo: string[] ):void => {}

// // Crear el tipo de funcion que acepte la funcion "noHaceNada"
// let noHaceNadaTampoco:Function;
// noHaceNadaTampoco = noHaceNada

(() => {
type SuperVehichel = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
}
// Objetos
const batimovil:SuperVehichel = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: SuperVehichel = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


type Villanos = {
  nombre: string;
  edad: number | undefined;
  mutante:boolean;
}
// Villanos debe de ser un arreglo de objetos personalizados
const villanos: Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];


type Villano = {
  lider: Boolean;
  miembros: string[];
}
type Heroe = {
  poder: string;
  estatura: number;
}
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles: Heroe = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: Villano = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}
console.log(apocalipsis);

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (Villano | Heroe);

mystique = charles;
mystique = apocalipsis;


})()
