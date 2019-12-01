// task #1;
console.log(`task #1

`);

let reg1 = /^[A-Z]/;

function upperCase(str) {
    if (reg1.test(str) === false) {
        console.log('Your string does not start with upper case');
    } else {
        console.log('Congrats, everything is fine');
    }
}
upperCase('regexp');
upperCase('RegExp');

// task #2;
console.log(`
task #2

`);

let reg2 = /^\w+\.?\w+@[a-z]+\.[a-z]+$/; // () are optional

function checkEmail(str) {
    console.log(reg2.test(str));
}

console.log(`checkEmail function result for 'Qmail2@gmail.com' is: `);
checkEmail('Qmail2@gmail.com');

// task #3;
console.log(`
task #3

`);

let reg3 = /d(b+)(d)/i; // brackets are mandatory
let stringEx = 'cdbBdbsbz';
function checkDbD(str) {
    console.log(str.match(reg3));
}
checkDbD(stringEx);

// task #4;
console.log(`
task #4

`);

let reg4 = /(\w+)\s(\w+)/; // brackets are mandatory;

function changeSubstringsPostion(string) {
    let changedString = string.replace(reg4, '$2,$1');
    console.log(changedString);
}

let stringEx2 = 'Java Script';
changeSubstringsPostion(stringEx2);

// task #5;
console.log(`
task #5

`);

let reg5 = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

function creditCardValidation(string) {
    console.log(reg5.test(string));
}

console.log(`creditCardValidation function result for '4149-4993-1008-9345' is: `);
creditCardValidation('4149-4993-1008-9345');

// task #6;
console.log(`
task #6

`);

let reg6 = /^\w+-?\w+@[a-z]+\.[a-z]+$/;

function checkEmailPro(string) {
    if (reg6.test(string) === true) {
        console.log(`Email is correct!`);
    } else {
        console.log(`Email is not correct!`);
    }
}

console.log(`checkEmailPro function result for 'my_mail@gmail.com' is: `);
checkEmailPro('my_mail@gmail.com');

console.log(`checkEmailPro function result for '#my_mail@gmail.com' is: `);
checkEmailPro('#my_mail@gmail.com');

// task #7;
console.log(`
task #7

`);

