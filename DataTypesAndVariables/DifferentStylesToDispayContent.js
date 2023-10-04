// we can display our content in different ways on the console

//here we have some fields, basically a user info

var firstName = 'sachin';
var lastName = 'chauhan';
var uId = 101;
var email = 'qasachin.chauhan@gmail.com';
var password = '1234';
var city = 'gwalior';
var isLoggedInFromGmail = 'false';
var browser = 'chrome';

//first way to display content on the console:
//using plus[+] operator. also known as concatination operator

console.log('First Name: '+firstName);
console.log('Last Name: '+lastName);
console.log('User ID: '+uId);
console.log('Email ID: '+email);
console.log('User Password:'+password);
console.log('City: '+city);
console.log('Is User LoggedIn from Gmail: '+isLoggedInFromGmail);
console.log('Browser Name: '+browser);

console.log();

//second way to display content on the console:
//using comma [,] operator

firstName = 'anil';
lastName = 'chauhan';
uId = 102;
email = 'anil.chauhan@gmail.com';
password = '12345678';
city = 'hyderabad';
isLoggedInFromGmail = 'true';
browser = 'mozila';

console.log('First Name: ',firstName);
console.log('Last Name: ',lastName);
console.log('User ID: ',uId);
console.log('Email ID: ',email);
console.log('User Password:',password);
console.log('City: ' ,city);
console.log('Is User LoggedIn from Gmail: ',isLoggedInFromGmail);
console.log('Browser Name: ',browser);

//third way to display content on the console
//using back ticks[``]. also known as String Interpolation

firstName = 'john';
lastName = 'miller';
uId = 103;
email = 'john.miller@gmail.com';
password = 'abcd1234';
city = 'Austin';
isLoggedInFromGmail = 'false';
browser = 'opera';

console.log(`
First Name: ${firstName}
Last Name: ${lastName}
User ID: ${uId}
Email ID: ${email}
User Password: ${password}
City: ${city}
Is User LoggedIn from Gmail: ${isLoggedInFromGmail}
Browser Name: ${browser}
`)
