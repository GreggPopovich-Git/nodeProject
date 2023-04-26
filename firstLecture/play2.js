const person = {
    name: 'Park',
    age: 35,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name}) => {
    console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// // How to use Spread
// const copiedPerson = {...person};
// console.log(copiedPerson);

// // person.greet();
const hobbies = ['Sports', 'Cooking'];
const [ hobby1, hobby2 ] = hobbies;
console.log(hobby1, hobby2);
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies); 

// // how to copy the array
// // const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// // How to use Rest
// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));