// class Car {
//     constructor(name, color, mileage) {
//         this.name = name;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log(`${this.name} is starting...`)
//     }
//     stop() {
//         console.log(`${this.name} is stopping...`)
//     }
// }

// let bmw = new Car("BMW", "Dark Blue", 45);
// let toyota = new Car("Toyota", "Silver Blue", 28);
// let buggati = new Car("Buggati", "Brown", 5);

// console.log(bmw, toyota, buggati)


// class Car{
//     #fuel = 100

//     #burnFuel(){
//         this.#fuel -= 1
//     }

//     start(){
//         this.#burnFuel();
//         console.log('Car is starting...')
//     }
// }

// let buggati = new Car();

// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holdersName = holderName;
//         this.#balance = balance;
//     }

//     deposit(balance) {
//         this.#balance += balance;
//     }

//     set setter(balance) {
//         if (isNaN(balance)) {
//             console.error("invalid balance");
//             return;
//         }
//         console.log("balance set successfully")
//         this.#balance = balance
//     }

//     get getter() {
//         return this.#balance
//     }
// }

// let manasAcc = new BankAccount("Manas Kumar Lal", 500);

// manasAcc.setter = 234234;
// console.log(manasAcc.getter)



// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.brand} is starting...`)
//     }
//     stop() {
//         console.log(`${this.brand} is stopping...`)
//     }
// }


// class ElectricCar extends Car{

//     constructor(brand,color,battery){
//         super(brand, color)

//         this.battery = battery;
//     }

//     charging(){
//         console.log(`${this.brand} is charging...`)
//     }
// }

// let tesla = new ElectricCar("tesla",'black',99);
// tesla.start();
// tesla.stop();
// tesla.charging();

// console.log(tesla)



// class MediaPlayer{
//     play(){
//         console.log('Play media');
//     }
// }

// class Music extends MediaPlayer{
//     play(){
//         console.log('Play music')
//     }
// }

// class Video extends MediaPlayer{
//     play(){
//         console.log('play video')
//     }
// }

// let o1 = new Music();
// o1.play();
// let o2 = new Video();
// o2.play();
// let o3 = new MediaPlayer();
// o3.play();


// let obj = {
//     name:"ladsjf;lad",
// }

// let ob1 = new obj;

(function(){
    console.log("hello")
})()