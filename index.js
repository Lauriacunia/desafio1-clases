/**Consigna: 
1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

Ejemplos:

countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.

getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].

getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'

*/

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const usuario = new Usuario(
  "Elon",
  "Musk",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundacion", autor: "Isaac Asimov" },
  ],
  ["perro", "gato"]
);

console.log(`👤 El nombre completo es: ${usuario.getFullName()}`);
console.log(`🐶 Tiene ${usuario.countMascotas()} mascota(s)`);
console.log(`📚 Sus libros son: ${usuario.getBookNames()}`);

// add mascota
const nuevaMascota = "pez";
usuario.addMascota(nuevaMascota);
console.log(
  `🐶 Mascota agregada con éxito: ${nuevaMascota}. Ahora tiene ${usuario.countMascotas()} mascota(s)`
);

// add book
usuario.addBook("El principito", "Antoine de Saint-Exupéry");
console.log(
  `📚 Libro agrego con éxito. Ahora sus libros son: ${usuario.getBookNames()}`
);
