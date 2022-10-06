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
