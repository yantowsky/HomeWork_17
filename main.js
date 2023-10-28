let firstName = prompt('What is your name?').trim();
firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let firstNameOut = "";

for (let i = 0; i < firstName.length; i++) {
    let firstNameSign = firstName[i];
    if (firstNameSign == " " || firstNameSign == "-") {
        firstNameOut += firstNameSign;
        i++;
        firstNameSign = firstName[i].toUpperCase();
        firstNameOut += firstNameSign;
    } else {
        firstNameOut += firstNameSign;
    }
};
console.log(firstNameOut);

let lastName = prompt('What is your last name?').trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
let lastNameOut = "";
for (let i = 0; i < lastName.length; i++) {
    let lastNameSign = lastName[i];
    lastNameSign == " " || lastNameSign == "-" ?
        (lastNameOut += lastNameSign,
            i++,
            lastNameSign = lastName[i].toUpperCase(),
            lastNameOut += lastNameSign) :
        lastNameOut += lastNameSign;
};
console.log(lastNameOut);

let userEmail = prompt('Enter your email?').replaceAll().toLowerCase();
userEmail = userEmail.split(" ").join("");
userEmail = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b> (symbol @ not exist)` :
    (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in first place)` :
        (userEmail.endsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)` :
            `<b>${userEmail}</b>`;
console.log(userEmail);

let dateOfBirth;
let today = new Date();
let thisYear = today.getFullYear();
do {
    dateOfBirth = +prompt(`Enter your birthday (digital format YYYY and period 1900-${(thisYear - 1)} years)`).replaceAll();
} while (String(dateOfBirth).length != 4 || dateOfBirth < 1900 || dateOfBirth == thisYear);
userAge = thisYear - dateOfBirth;
console.log(userAge);

let result = `
<ul>
<li>Full name: <b>${firstNameOut} ${lastNameOut}</b></li>
<li>Email: ${userEmail}</li>
<li>Age: <b>${userAge}</b></li>
</ul>
`;

document.write(result);