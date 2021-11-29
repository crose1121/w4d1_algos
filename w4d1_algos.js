// Acronym reverse string!

function acronym(str) {
    let arr = str.split(" ");
    let newStr = '';
    for (let i=0;i<arr.length;i++) {
        newStr += arr[i][0];
    }
    return newStr.toUpperCase();
}

console.log(acronym("free all rodents that like evil kittens"));
console.log(acronym("never obey older babies sarcastically"));




// Use the reverseString function below to take in a string and reverse the order of each character in that string

// Example: reverseString("creature") would return "erutaerc"
// Example: reverseString("really?") would return "?yllaer"
// Example: reverseString("yo banana boy") would return "yob ananab oy"
// Example: reverseString("borrow or rob") would return "bor ro worrob"

//  Don't use the built-in reverse() method!  That is cheating (: and you don't want to cheat!

function reverseString(str) {
    var newStr = "";
    if (str.length==1) {
        return str;
    }
    for (let i=str.length-1;i>=0;i--) {
        newStr += str[i]
    }
    return newStr;
}

console.log(reverseString("creature"))
console.log(reverseString("really?"))
console.log(reverseString("yo banana boy"))
console.log(reverseString("borrow or rob"))