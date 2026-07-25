// let Student = {
//     myName: "MKL",
//     age: 21,
//     passion: 'bkaiti', // property
//     introduceMySelf: function () {
//         console.log(`${this.myName}, ${this.age}, ${this.passion}`)
//     }
// }

// Student.introduceMySelf();


// factory function;
// function Student(name, age, passion) {
//     return {
//         myName: name,
//         age,
//         passion, // property
//         introduceMySelf: function () {
//             console.log(`${this.myName}, ${this.age}, ${this.passion}`)
//         }
//     }
// }

// let s1 = Student("Muskan",19, "cooking");
// let s2 = Student("Sanorita",19, "bkaiti");
// s1.introduceMySelf()
// // console.log(s2)
// s2.introduceMySelf();



// constructor function

// function Student(name, age, passion) {
//     this.name = name
//     this.age = age
//     this.passion = passion
//     return this;
// }


// let s1 = new Student("mkl", 21, 'bkatiti');
// let s2 = new Student("muskan", 19, 'cooking')
// console.log(s1)
// console.log(s2)



// class syntax (es6)

// class Student {
//     constructor(name, age, passion){
//         this.name = name;
//         this.age = age;
//         this.passion = passion;
//         console.log("constructor function called")
//     }
//     introduceMyself(){
//         console.log(this.name, this.age, this.passion)
//     }
// }

// let s1 = new Student("mkl", 21, 'bkaiti')
// let s2 = new Student()
// console.log(s1);
// console.log(s2);
// s1.introduceMyself();


