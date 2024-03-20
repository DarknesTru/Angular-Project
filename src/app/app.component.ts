import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';

  name: string = 'Sebastian';
  age: number = 17;
  friends: Array <string> = ["2", "3"];
  radom: Array <any> = ["Hola", true, 25];

  resultado: number | string = '';
  data1: number = 0;
  data2: number = 0;

  ngOnInit() {
    this.executets();
  }
  
  public setData1(event :any) {
    this.data1 = Number(event.target.value)
  }
  public setData2(event :any) {
    this.data2 = Number(event.target.value)
  }

  public calculator(number1: number, number2: number, operation:string):number | any {
    
    switch (operation) {
      case '+':
        return this.resultado = number1 + number2;
      case '-':
        return this.resultado = number1 - number2;
      case '*':
        return this.resultado = number1 * number2;
      case '/':
        return this.resultado = number1 / number2;
              
      default:
        this.resultado = "operacion incorrecta"
        break;

    }

    console.log()
  }

executets() {
  const nombre: string = "Sebas";

const numero: number = 1;

const arrayNumero: number[] = [5,8,99,-7,];

const tryeFalse: boolean = true;

const tryeFalseArray: boolean[] = [true, false, true, false];

let datoVacio: number;

datoVacio = 5;
datoVacio = 25; 

const numero1: number = 1;
const numero2: number = 2;


const operadores: string[] = ["+", "-", "*", "/", "&&", "||", "===", "!=="];
const comparacion: boolean = (1===1); 
const comparacion2: boolean = (numero1===2); 

console.log("tiene que devolver:true", comparacion);
console.log("tiene que devolver:false", comparacion2);

console.log("tiene que devolver:true", numero1!==numero2)
console.log("tiene que devolver:false", 2!==numero2)

console.log("operador &&:true$$true", true&&true);
console.log("operador &&:true$$false", true&&false);
console.log("operador &&:false$$true", false&&true);
console.log("operador &&:false$$false", false&&false);

console.log("operador ||:true$$true", true||true);
console.log("operador ||:true$$false", true||false);
console.log("operador ||:false$$true", false||true);
console.log("operador ||:false$$false", false||false);

console.log("pregunta1:devuelve true", (numero1!==2)||false);
console.log("pregunta2:devuelve false", (numero1!==1)||false);
console.log("pregunta3:devuelve true", (numero1!==1||true);
console.log("pregunta4:devuelve false", (numero1!==2)&&false);

let condition: boolean = true; 

if(condition){
  console.log("entramos en el if");

} else {
  console.log("no entramos en el if")
}

}



}
