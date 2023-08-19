# Curso ECMAScript | Platzi

## Contenido
1. [let y const](#1.-``let``-y-``const``)
2. [Arrow functions](#2.-Funciones-flecha-/-Arrow-functions)
3. [Template strings](#3.-Template-Strings-`${}`)
4. [Default params](#4.-Parámetros-por-defecto)
5. [Destructuring](5.-Asignación-de-desestructuración-/-destructuring)


## ES6 (2015)

### 1. ``let`` y ``const ``

Se incorpora una nueva forma de declarar variables con let y const.
Algunos problemas que se resolvieron con su llegada al lenguaje fue:

- ``var`` tenia ambito de función, lo que significaba que eran visibles en toda la función en donde estaban declaradas.
Una variable declarada como ***var*** puede ser re-declarada y re-asignada.

- ``let`` tiene el ambito de bloque, lo que significa que las variables se limitan al bloque (función, bucle o condicional).
Una variable declarada con ***let*** puede ser re-asignada, pero no re-declarada.

- ``const`` tiene el ambito de bloque.
Una variable declarada como ***const*** no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una linea de lo contrario habrá un error. 

```javascript
var name;
let age;
const Pi; // SyntaxError: Missing initializer in const declaration.
const Pi = 3.1416;

name = 'Cristian';
age = 26;
Pi = 4;  // SyntaxError: Identifier 'Pi' has already been declared.

var name = 'Orlando';
let age = 30; // SyntaxError: Identifier 'age' has already been declared.
const Pi = 3; // SyntaxError: Identifier 'Pi' has already been declared.
```

Utilizar ``const`` para *valores inmutables* y ``let`` para *variables que pueden ser re-asignadas* hace el codigo más legible, ya que proporciona información sobre la intención del programador con respecto a si un valor debe cambiar o no.

Esto evita errores y hace que el código sea más predecible y menos propenso a conflictos. 

![var vs let vs const](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F0*mYuuRwjUfUOAdHpo.jpg&f=1&nofb=1&ipt=80f7c51d0908567bb011f002754f9723bd0fe2ba38648aa869111e6a1678cd58&ipo=images)


#### 2. Funciones flecha / Arrow functions `=>` 

Proporciona una sintaxis más concisa y simplificada para definir funciones en JavaScript. Resolvieron varios problemas y ofrecieron beneficios como:

- **Sintaxis más concisa:** Las funciones flecha permiten definir funciones de manera más breve, eliminando la necesidad de la palabra clave ``function`` y los corchetes en algunos casos ``{}``.
- **Conservación del contexto de ``this``:** Uno de los problemas que resolvió más notablemente es la preservación automática del valor de ``this``. En las funciones tradicionales, el valor de this puede cambiar dependiendo de cómo se llame la función, lo que a veces resulta en comportamientos inesperados. Las funciones flecha heredan el valor de ``this`` del contexto que las rodea, lo que simplifica el manejo de la referencia al objeto actual.
- **No hay enlace de ``this``:** Las funciones flecha no tienen su propio ``this``. Esto puede resolver confusiones cuando se utilizan métodos encadenados o cuando se pasa una función como argumento a otra función.
- **Mejora de la legibilidad:** La sintaxis más concisa de las funciones flecha puede hacer que el código sea más claro y fácil de leer, especialmente para funciones simples.
- **Uso implícito de return:** Si la función flecha tiene solo una expresión de retorno, se puede omitir la palabra clave ``return``, lo que simplifica aún más la sintaxis.

```javascript
// Función tradicional
function suma(a, b) {
  return a + b;
}

// Función de flecha / arrow function
const suma = (a, b) => a + b;

const suma = (num1, num2) => (
    num1 + num2
)

// Si existe un solo parametro, puede omitirse el parentesis.
const porDos = num => {
    return num * 2
}

```

Las funciones flecha introdujeron una sintaxis más concisa y resolvieron problemas relacionados con el contexto de this y la legibilidad del código en JavaScript. Sin embargo, es importante entender sus diferencias en comparación con las funciones tradicionales, especialmente en situaciones donde el contexto de ``this`` es **relevante**.

### 3. Template Strings `${}`

Permite una forma más concisa y legible de crear cadenas de texto en JavaScript. Estas plantillas permiten la interpolación de valores y expresiones dentro de las cadenas, lo que simplifica la construcción de cadenas dinámicas.

*La cadena de texto debe ser escrita con comillas francesas* `` *(dependiendo de la distribución del teclado puede encontrarse cerca a la tecla ENTER o presionando ALT + 96)*

Las características clave de los template strings son:

- **Interpolación de variables:** Puedes insertar valores de variables dentro de la cadena utilizando la sintaxis ``${variable}.`` Esto evita la necesidad de concatenar manualmente los valores y las cadenas.

- **Soporte para expresiones:** Además de variables, también puedes incluir expresiones dentro de las llaves ``${}``. Estas expresiones se evalúan y su resultado se incorpora en la cadena resultante.

- **Multilínea:** Los template strings pueden abarcar varias líneas sin necesidad de escapar caracteres especiales o usar concatenación.`

```javascript
const name = 'Juan';
const lastName = 'Lopez';

const fullName = `Hola, mi nombre es ${name} y mi apellido es ${lastName}` ; 
console.log(fullName); // Output: "Hola, mi nombre es Juan y mi apellido es Lopez"

const parrafo = `Comparado con el enfoque anterior de concatenación de cadenas \n usando el operador +, los template strings ofrecen una \n solución más elegante y menos propensa a errores.`;

const parrafo = `Comparado con el enfoque anterior de concatenación de cadenas 
usando el operador +, los template strings ofrecen una 
solución más elegante y menos propensa a errores.`;
```

Los template strings hacen que el código sea más legible y mantenible al permitir una concatenación más limpia de valores y expresiones en las cadenas. Esto es especialmente útil cuando se trabaja con cadenas largas o cuando es necesario incluir variables en ellas.

### 4. Parámetros por defecto

Permite asignar valores predeterminados a los parámetros de una función en caso de que no se les pase un valor específico al llamar a la función. Esto hace que sea más sencillo manejar casos en los que los argumentos pueden estar ausentes o ser undefined.

Los parámetros por defecto son especialmente útiles para evitar que las funciones generen errores cuando se les llama con un número insuficiente de argumentos. Además, permiten que el código sea más limpio y legible al eliminar la necesidad de verificaciones de valores undefined en el interior de la función.

```javascript
// Antes de ES6
function sumar(number1, number2){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // NaN  
sumar()    // NaN

// Luego de la actualización
function sumar(number1, number2){
  var _number1 = number1 || 0
  var _number2 = number2 || 0
  
  return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0

//  Los parámetros por defecto deben estar al FINAL de la lista de parámetros de una función.

// INCORRECTO
function incorrecto(a = 0, b) {
  return a + b;
} // Output: NaN

// CORRECTO
function correcto(a, b = 0) {
  return a + b;
} // Output: 0

```

Los parámetros por defecto son una característica útil en JavaScript que simplifica la gestión de valores faltantes en las funciones y mejora la claridad y la legibilidad del código.

### 5. Asignación de desestructuración / destructuring

Permite extraer valores de arreglos y objetos en variables individuales de manera más conveniente. En lugar de acceder a cada valor utilizando la notación de punto o corchetes, la destructuración permite desempaquetar múltiples valores en una sola declaración.

*La destructuración se puede aplicar tanto a objetos como a arreglos.*

``` javascript
// EN OBJETOS
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Destructuración de objeto
const { nombre, edad, ciudad } = persona;

console.log(nombre);  // Output: 'Juan'
console.log(edad);    // Output: 30
console.log(ciudad);  // Output: 'Madrid'

// Otro ejemplo:
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined


// EN ARREGLOS
const numeros = [1, 2, 3, 4, 5];

// Destructuración de arreglo
const [primero, segundo, ...resto] = numeros;

console.log(primero); // Output: 1
console.log(segundo); // Output: 2
console.log(resto);   // Output: [3, 4, 5]

// Otro ejemplo
let fruits = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits; // No es recomendable utilizar la separación por comas.
const {2: sameFruit} = array // Puede utilizarse mediante el indice y asignandole nombre de variable.

console.log(fruit); // Output: "Orange"
console.log(sameFruit) // Output: "Orange"


// EN FUNCIONES
function useState(value){
    return [value, updateValue()];
}

//Sin desestructuración 
const estado = useState(3);
const valor = estado[0];
const actualizador = estado[1];

//Con desestructuración 
const [valor, actualizador] = useState(3);


```

La destructuración es especialmente útil cuando se trabaja con objetos o arreglos que contienen una gran cantidad de propiedades o elementos. Ayuda a hacer el código más conciso, legible y evita repeticiones innecesarias de nombres de propiedades o índices.

> Nota: Para que la destructuración funcione, los nombres de las variables deben coincidir con los nombres de las propiedades en el caso de los objetos, o con los índices en el caso de los arreglos.

### 6. Operador de propagación / Spread Operator ``(...)``

Permite expandir elementos de un arreglo, objeto o expresión iterable en lugares donde se esperan múltiples elementos. Este operador se representa con tres puntos consecutivos (...).

El operador de propagación es especialmente útil en situaciones en las que se necesita manipular arreglos o objetos sin modificar los originales, combinar estructuras de datos y simplificar la escritura de código al desempaquetar elementos en múltiples contextos.

Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, si cambias algo en la copia, también lo harás en el original.

```javascript
// Referencia de memoria igual al original
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true

// Referencia de memoria diferente al original
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false 
```

- Para desempaquetar elementos de un arreglo:

    ```javascript
    const numbers = [1, 2, 3];

    const copyNumbers = [...numbers];
    console.log(copyNumbers); // Output: [1, 2, 3]
    ```

- Para combinar arreglos:
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const arregloCombinado = [...arr1, ...arr2];
    console.log(arregloCombinado); // Output: [1, 2, 3, 4, 5, 6]

    ```

-  Para pasar argumentos a funciones:
    ```javascript
    function suma(a, b, c) {
    return a + b + c;
    }

    const numeros = [1, 2, 3];
    const resultado = suma(...numeros);
    console.log(resultado); // Output: 6

    ```

- Para clonar objetos:
    ```javascript
    const objetoOriginal = { nombre: 'Juan', edad: 30 };

    const objetoClonado = { ...objetoOriginal };
    console.log(objetoClonado); // Output: { nombre: 'Juan', edad: 30 }

    ```
- Para agregar elementos a un arreglo existente:
    ```javascript
    const arr1 = [1, 2, 3];
    const nuevoElemento = 4;

    const arr2 = [...arr1, nuevoElemento];
    console.log(arr2); // Output: [1, 2, 3, 4]

    ```

- Para convertir una cadena en un arreglo de caracteres:

    ```javascript
    const cadena = 'Hola';
    const arregloDeCaracteres = [...cadena];
    console.log(arregloDeCaracteres); // Output: ['H', 'o', 'l', 'a']

    ```

### 7. Objetos literales / Object literals

Son una forma de crear objetos en JavaScript utilizando una sintaxis más concisa y directa.

Un object literal es simplemente una colección de pares clave-valor dentro de llaves {}. Las claves son strings que actúan como nombres para las propiedades del objeto, y los valores pueden ser cualquier tipo de valor válido en JavaScript (números, strings, arreglos, funciones, otros objetos, etc.).

```javascript
const person = {
  name: 'Juan',
  age: 30,
  occupation: 'Desarrollador'
};

console.log(person.name);     // Output: 'Juan'
console.log(person.age);       // Output: 30
console.log(person.occupation);  // Output: 'Desarrollador'

// Otro ejemplo
const name = "Andres"
const age = 23

const person = {name, age}

person // { name: 'Andres', age: 23 }

// Otra forma diferente
const name = "Andres"
const age = 23
const itsAnId = 1

const object = {
    name, 
    age,
    id: itsAnId
}

object // { name: 'Andres', age: 23, id: 1 }

```

Los object literals son una forma conveniente y legible de crear objetos en JavaScript. Se utilizan ampliamente en el lenguaje y son la base para la construcción de estructuras de datos y objetos en muchas aplicaciones.

### 8. Promesas / Promise

Proporcionan una forma más estructurada y fácil de trabajar con operaciones asíncronas y evitar el llamado "callback hell" (anidación excesiva de callbacks) al realizar múltiples operaciones asíncronas en secuencia.

Una promesa representa un valor futuro que puede ser resuelto con un valor o rechazado con un motivo (error). Las promesas tienen tres estados posibles:

- Pending (pendiente): Estado inicial cuando se crea una promesa.
- Resolve (cumplida): La promesa se resuelve exitosamente con un valor.
- Rejected (rechazada): La promesa es rechazada con un motivo, generalmente un error.

```javascript
const promesa = () => {
  return new Promise((resolve, reject) => {
    if (something) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject
```

Las promesas han sido una base esencial para el manejo asíncrono en JavaScript y han allanado el camino para características aún más avanzadas como async/await, que simplifica aún más el trabajo con operaciones asíncronas al proporcionar una sintaxis más similar a la programación síncrona.

### 9. Clases*

Proporciona una sintaxis más orientada a objetos para crear objetos y definir su comportamiento en JavaScript. Las clases en JavaScript permiten crear plantillas reutilizables para objetos y facilitan la implementación del concepto de herencia, lo que simplifica la construcción de aplicaciones más estructuradas y mantenibles.

- Clases: Es una plantilla. Una definición genérica de algo que tiene atributos (datos/variables) y métodos (acciones/funciones) y desde la cual se pueden crear objetos.
- Objetos: Un elemento real que fue creada con base en una clase (plantilla) y que hereda (contiene) sus atributos y métodos.

Conceptos que son utilizados en las clases

- Constructor: Es un método que contiene una serie de instrucciones que se encargan de inicializar un objeto cuando es instanciado a partir de esa clase. Básicamente, asigna los valores de los atributos que le enviemos a ese objeto nuevo. Es una función que se ejecuta automáticamente.
- Getter y Setter: Son funciones sencillas de entender: obtener el valor de un atributo o establecerlo. Se crean de esta manera por un concepto de la POO denominado encapsulamiento, que consiste, entre otras cosas, en limitar el acceso a las clases para tener mayor control sobre ellas.
- This: Con este objeto de contexto hacemos referencia al propio objeto que se está instanciando y no a la clase.


```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const juan = new Persona('Juan', 30);
juan.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."

// APLICANDO HERENCIA

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}.`);
  }
}

const maria = new Estudiante('Maria', 25, 'Matemáticas');
maria.saludar(); // Output: "Hola, mi nombre es Maria y tengo 25 años."
maria.estudiar(); // Output: "Maria está estudiando Matemáticas."

```

### 10. Module

Es un componente autónomo y reutilizable que encapsula el código, las variables y las funcionalidades en un ámbito aislado. Los módulos permiten dividir el código en partes más pequeñas y organizadas, lo que facilita el mantenimiento, la reutilización y la colaboración en proyectos más grandes.

Los módulos ayudan a evitar el llamado "código spaghetti" al permitir una separación clara de las preocupaciones y la ocultación de detalles de implementación. Esto mejora la legibilidad, la modularidad y la mantenibilidad del código.

>Si iniciaste un proyecto con NPM (Node Package Manager) con Node.js, necesitas especificar que el código es modular en el archivo package.json de la siguiente manera:
```javascript
// package.json
{   ...
    "type": "module"
}
```
> Puedes evitar la configuración del JSON usando la extención .mjs, esta le indica a JavaScript que es un módulo.

#### 10.1 export

Para explicar cómo funciona las exportaciones e importaciones de código, debes tener mínimo dos archivos, uno para exportar las funcionalidades y otro que las importe para ejecutarlas.

Además, si iniciaste un proyecto con NPM (Node Package Manager) con Node.js, necesitas especificar que el código es modular en el archivo package.json de la siguiente manera:

Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

```javascript
//math_function.js
export const add = (x,y) => {
    return x + y
}
```

```javascript
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }
```

#### 10.2 import

Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

```javascript
// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4

// Erróneo
import { suma } from './math_functions.js'

suma(2,2) //SyntaxError: The requested module '/src/archivo1.js' does not provide an export named 'suma'
```

Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.

```javascript
// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...
```

Si solo UN valor será exportado, entonces se puede utilizar export default. De esta manera no es necesario las llaves {} al exportar e importar.

```javascript
//math_function.js
export default function add (x,y){
    return x + y;
}
```
---

- **Default** se usa cuando solo devuelves un elemento y no quieres restringir el nombre.
- **Export const** restringe el nombre y ademas te permite devolver multiples funciones o constantes
```javascript
export default myFunction;
export {myFunction};

import myFunction from "./myFunction"
import {myFunction} from "./myFunction"
```

### 11. Generadores / Generator

Permite crear funciones especiales que pueden ser pausadas y reanudadas. Los generadores son útiles para crear iteradores personalizados, manejar flujos de control asíncronos y generar secuencias de valores de manera eficiente.

La sintaxis de los generadores comprende lo siguiente:

- ``function*`` (con el asterisco al final).
- ``yield`` que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
- Crear una variable a partir de la función generadora.
- ``next`` devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

```javascript
function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}
```

Los generadores son particularmente útiles en situaciones en las que es necesario generar una gran cantidad de valores secuenciales o cuando se necesita pausar y reanudar la ejecución de una función, como en el manejo de operaciones asíncronas. Pueden mejorar la eficiencia y la legibilidad del código al permitir que el flujo de control se maneje de manera más intuitiva.

### 12. for of && for in 

Son dos estructuras de control en JavaScript que se utilizan para recorrer elementos en estructuras de datos como arreglos y objetos. 

- ``for ... of``: Se utiliza para recorrer elementos en estructuras iterables, como arreglos, cadenas, mapas, conjuntos y objetos similares a arreglos. En cada iteración, la variable toma el valor del elemento actual de la estructura iterable.

    ```javascript
    const arreglo = [1, 2, 3, 4];

    for (const elemento of arreglo) {
    console.log(elemento);
    }
    // Output: 1, 2, 3, 4

    ```

- ``for ... in``: Se utiliza para recorrer las propiedades enumerables de un objeto. En cada iteración, la variable toma el nombre de la propiedad actual del objeto. Ten en cuenta que esta estructura puede iterar sobre propiedades heredadas si no se toman medidas para evitarlo.

    ```javascript
    const objeto = { a: 1, b: 2, c: 3 };

    for (const propiedad in objeto) {
    console.log(propiedad);
    }
    // Output: "a", "b", "c"

    ```


En general, `for...of` es más adecuado para recorrer elementos en estructuras iterables modernas, mientras que `for...in` es más útil para recorrer propiedades de objetos.

### 13. set-add

Permite almacenar valores únicos. Un `Set` no permite tener duplicados, por lo que es ideal cuando necesitas mantener una colección de elementos sin repeticiones. El método `add()` se utiliza para agregar elementos a un Set.

```javascript
const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(2); // No se agrega porque ya existe

console.log(miSet); // Output: Set { 1, 2, 3 }

```

Los Set también son útiles para eliminar duplicados de un arreglo existente:

```javascript
const arregloDuplicado = [1, 2, 3, 2, 4, 1];
const setUnico = new Set(arregloDuplicado);

console.log(setUnico); // Output: Set { 1, 2, 3, 4 }

```

Los métodos `add()`, `delete()`, `has()`, `clear()` y `size` son parte de la API de Set y se utilizan para interactuar con los conjuntos. Además de Set, también existe la estructura de datos Map que permite almacenar pares clave-valor únicos en un orden definido.

Los `Set` son una forma eficiente de manejar colecciones de elementos únicos y son útiles en muchas situaciones, como la eliminación de duplicados o el seguimiento de valores únicos en un conjunto.

## ES7 (2016)

### 1. Operador exponencial

Permite calcular la potencia de un número de una manera más concisa. Antes de la introducción de este operador, se solía usar la función Math.pow() para realizar cálculos de potencia.

``` javascript
const resultado = 2 ** 3; // 2 elevado a la potencia de 3
console.log(resultado);  // Output: 8
```

Este operador es útil para realizar cálculos matemáticos más directos y legibles cuando se trata de potencias.

### 2. Array `includes()`

Se utiliza en arreglos para verificar si un elemento específico está presente en el arreglo. Retorna un valor booleano (true o false) según si el elemento está o no en el arreglo.

```javascript
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(3)); // Output: true
console.log(numeros.includes(6)); // Output: false
```

## ES8

### 1. Transformación de objetos a arrays 

Facilitan la iteración y extracción de información de objetos en JavaScript.facilitan la iteración y extracción de información de objetos en JavaScript.

- `Object.entries()`: Se utiliza para convertir un objeto en un arreglo de pares clave-valor. Cada elemento del arreglo es un arreglo de dos elementos, donde el primer elemento es la clave y el segundo elemento es el valor correspondiente del objeto. Este método es útil para iterar sobre las propiedades de un objeto y acceder tanto a las claves como a los valores.

    ```javascript
    const objeto = { a: 1, b: 2, c: 3 };
    const entradas = Object.entries(objeto);

    console.log(entradas);
    // Output: [ ["a", 1], ["b", 2], ["c", 3] ]

    ```

- `Object.values()`: Se utiliza para obtener un arreglo de los valores de un objeto. Este método omite las claves y devuelve solo los valores correspondientes en el orden en que aparecen en el objeto.

    ```javascript
    const objeto = { a: 1, b: 2, c: 3 };
    const valores = Object.values(objeto);

    console.log(valores); // Output: [1, 2, 3]
    ```

- ``Object.keys()``: Se utiliza para obtener un arreglo de las claves de un objeto. Este método omite las valores y devuelve solo las claves correspondientes en el orden en que aparecen en el objeto.

    ```javascript
    const objeto = { a: 1, b: 2, c: 3 };
    const valores = Object.values(objeto);

    console.log(valores); // Output: [a, b, c]
    ```

Son útiles para trabajar con objetos y facilitan la extracción de información para su posterior procesamiento. Pueden ser especialmente útiles en situaciones en las que necesitas iterar o analizar las propiedades y valores de un objeto de manera más eficiente y sencilla.

### 2. String Padding

Se refiere a agregar caracteres (generalmente espacios o caracteres específicos) al principio o al final de una cadena para que tenga una longitud determinada. Esto es especialmente útil cuando deseas formatear cadenas para que tengan una longitud específica, como alineando texto en columnas o para generar una salida legible.

- padStart(size, string): Completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
    - size: La longitud máxima a rellenar, incluyendo el string inicial.
    - string: El string para rellenar, por defecto, es un espacio.

-padEnd(size, string): Completa un string con otro string en el final hasta tener un total de caracteres especificado.

```javascript
const cadena = 'Hola';
const cadenaAlineada = cadena.padStart(10, '-'); // Agrega '-' al principio hasta una longitud de 10
console.log(cadenaAlineada); // Output: "------Hola"

const otraCadena = 'Adiós';
const otraCadenaAlineada = otraCadena.padEnd(10, '*'); // Agrega '*' al final hasta una longitud de 10
console.log(otraCadenaAlineada); // Output: "Adiós*****"

```

### 3. Trailling commas

Se refieren a las comas que aparecen después del último elemento en una lista, como la lista de elementos en un arreglo o en un objeto. 

```javascript
const arreglo = [1, 2, 3,]; // Coma final permitida
const objeto = {
  a: 1,
  b: 2,
  c: 3,
}; // Coma final permitida
```

Las comas finales permiten una sintaxis más relajada al trabajar con arreglos y objetos, evitando errores comunes al modificar listas de elementos.

### 4. Funciones asíncronas

Permiten escribir código que parece síncrono pero que en realidad se ejecuta de manera asíncrona y no bloquea la ejecución del programa.

La característica principal de las funciones asíncronas es la palabra clave async que se coloca antes de la palabra clave function al definir la función. Esto indica que la función contendrá operaciones asíncronas y que su comportamiento será controlado por promesas.

Además, dentro de una función asíncrona, se puede utilizar la palabra clave await para pausar la ejecución de la función hasta que una promesa se resuelva. Esto proporciona una forma más legible de trabajar con operaciones asíncronas en comparación con las cadenas de callbacks anidadas o las promesas encadenadas.

```javascript
async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    return datos;
}

obtenerDatos()
    .then(datos => console.log(datos))
    .catch(error => console.error(error));

```

Las funciones asíncronas simplifican significativamente el manejo de operaciones asíncronas y mejoran la legibilidad del código, ya que permiten que el flujo de control se mantenga en una forma más secuencial y lógica. Además, también son compatibles con el uso de try...catch para capturar errores en el contexto asíncrono.

```javascript
async function obtenerDatos () {
  try {
    const respuesta = await fetch('https://api.example.com/data');
    return respuesta
  } catch (error) {
    return error
  }
}
```