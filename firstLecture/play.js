const name = 'Park';
let age = 35;
const hasHobbies = true;

age = 36;

function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));