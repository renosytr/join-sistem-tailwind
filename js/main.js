var username = "reno" // variable bertipe string
let password = 10000 // pendefinisian variable integer di ES6
const role = "admin" // variable konstanta
const isActive = true // variable boolean true
const isManager = false // variable boolean false

// variable objek
const profile = { 
  avatar:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
  name: "Reno",
  email: "gqFQI@example.com",
  phone: "08123456789",
  address: {
    street: "Jl. Jendral Sudirman No. 10",
    city: "Jakarta",
    country: "Indonesia"
  }
}

// varriable array
const permissions = ["admin", "user", "guest"]

// mengubah isi dari ariable
username = "ari"
password = "admin123"


// console.log("username adalah", username)
// console.log("password adalah", password)
// console.log("role adalah", role)
// console.log("isActive adalah", isActive)
// console.log("isManager adalah", isManager)

// mengakses objek
// console.log("profile adalah", profile) // mengakses secara general
// console.log("profile.email adalah", profile.address.city) // mengakses secara spesifik cara satu
// console.log("profile['address']['city'] adalah", profile["address"]["city"]) // mengakses secara spesifik cara dua

// mengakses array
// console.log("permissions adalah", permissions[0])

// aritmatika
// console.log("username + password", username + password)

const weight = 100
const height = 150
const bmi = weight / (height * height)
// console.log("bmi adalah", bmi)

// Operator
let x = 10  
let y = 20

x = x + y // x = 30
x = x + y // x = 50
// console.log("x adalah", x)

const isPasswordCorrect = password === "admin12345678"
// console.log("isPasswordCorrect adalah", isPasswordCorrect)

x = 10
y = 10

// console.log("x < y", x < y)

// percabangan
if (x == y) {
  const segitiga = x * y / 2
  // console.log("segitiga adalah", segitiga)
  // console.log("x sama dengan y") // true condition
} else {
  // console.log("x tidak sama dengan y") // false condition
}

// function
function calculateTriangleArea(wide, height) {
  return (wide * height) / 2
}

const segitiga = calculateTriangleArea(10, 20)
// console.log("segitiga adalah", segitiga)

// arrow funcation
const calculateCircle = (pi, jariJari) => {
  // console.log("calculateTriangleArea", calculateTriangleArea(12, 15))
  const result = pi * jariJari * jariJari
  return result
}

// console.log("calculateCircle adalah", calculateCircle(3.14, 10))

class Person { // pendefinisian objek
  constructor(name, age, address, gender) {
    this.name = name
    this.age = age
    this.address = address
    this.gender = gender
  }

  speak() { // method
    console.log("Hello, my name is", this.name)
  }
}

const person1 = new Person("Reno", 20, "Jakarta", "Male") // instansiasi sebuah objek
console.log("person1 adalah", person1)
person1.speak()

const person2 = new Person("Ari", 25, "Jakarta", "Male")
console.log("person2 adalah", person2)
person2.speak()