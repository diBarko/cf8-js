// uses (this.), returns this(object) - constructor function
function Person(name) {
  this.name = name
}

const person = new Person("Alice")

function Counter() {
  this.count = 0    // public by default

  this.increment = function() {
    this.count++
  }

  this.getCount = function() {
    return this.count
  }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
// console.log(counter.getCount())

const counter2 = new Counter()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
// console.log(counter2.getCount())
// console.log(counter.getCount())

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.getInfo = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

const book1 = new Book("Java", "Androutsos", 2025)
console.log(book1.getInfo())

class BookClass {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getInfo = function() {
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
  }
}

const book2 = new BookClass("C#", "Androutsos", 2025)
console.log(book2.getInfo())

// > ES 2022  - private propertis μέσω του keyword #
class BookPrivate {
  #title
  #author
  #year

  constructor(title, author, year) {
    this.#title = title
    this.#author = author
    this.#year = year
  }

  getInfo() {
    return `${this.#title} was written by ${this.#author} in ${this.#year}`
  }
}

const book3 = new BookPrivate("Database Systems", "Kapetis", 2025)
console.log(book3.getInfo())
console.log(book3.title)  // undefined